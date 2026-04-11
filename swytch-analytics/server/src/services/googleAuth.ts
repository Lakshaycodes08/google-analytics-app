// ============================================================
// GOOGLE AUTH SERVICE
// Silently refreshes the Google access token using the
// refresh_token stored in the DB. This means the user only
// has to authorize once — ever.
// ============================================================

import { getPool } from "../plugins/mysql";

/**
 * Get a valid Google access token for the current request.
 *
 * 1. If the `google_access_token` cookie exists → return it immediately.
 * 2. Otherwise, look up the user's `refresh_token` in the DB.
 * 3. Call Google's token endpoint to mint a fresh access_token.
 * 4. Set the new token as a cookie on the reply so future
 *    requests within the next ~55 minutes skip step 2-3.
 *
 * Returns `null` only if the user has never completed OAuth
 * (i.e., no refresh_token in DB at all).
 */
export async function getOrRefreshAccessToken(
    request: any,
    reply: any,
    server: any
): Promise<string | null> {

    // ── 1. Fast path: cookie still valid ─────────────────────
    const existingToken = request.cookies.google_access_token;
    if (existingToken) {
        return existingToken;
    }

    // ── 2. Identify the user from JWT ────────────────────────
    let user: any;
    try {
        // request.user is already set if jwtVerify ran earlier in the handler
        user = request.user;
        if (!user) {
            user = await request.jwtVerify({ onlyCookie: true });
        }
    } catch (err) {
        server.log.error({ layer: "oauth", msg: "JWT verify failed in token refresh", err });
        return null;
    }

    if (!user?.db_id) return null;

    // ── 3. Fetch refresh_token from DB ───────────────────────
    const pool = getPool();
    const [rows] = await pool.execute(
        `SELECT google_refresh_token FROM users WHERE id = ?`,
        [user.db_id]
    ) as any;

    const refreshToken = rows[0]?.google_refresh_token;
    if (!refreshToken) {
        server.log.info({ layer: "oauth", userId: user.db_id },
            "No refresh_token in DB — user must complete OAuth");
        return null;
    }

    // ── 4. Exchange refresh_token for a new access_token ─────
    try {
        const response = await fetch("https://oauth2.googleapis.com/token", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                client_id: process.env.GOOGLE_CLIENT_ID || "",
                client_secret: process.env.GOOGLE_CLIENT_SECRET || "",
                refresh_token: refreshToken,
                grant_type: "refresh_token",
            }).toString()
        });

        if (!response.ok) {
            const errText = await response.text();
            server.log.error({ layer: "oauth", status: response.status, body: errText },
                "Google token refresh failed");
            return null;
        }

        const data = await response.json() as any;
        const newAccessToken = data.access_token;

        if (!newAccessToken) {
            server.log.error({ layer: "oauth" }, "Token refresh returned no access_token");
            return null;
        }

        // ── 5. Set cookie so next request is instant ─────────
        const isProd = process.env.NODE_ENV === "production";
        reply.setCookie("google_access_token", newAccessToken, {
            domain: isProd ? ".statsy.in" : undefined,
            path: "/",
            secure: isProd,
            httpOnly: true,
            sameSite: isProd ? "none" : "lax",
            maxAge: 55 * 60,
        });

        server.log.info({ layer: "oauth", userId: user.db_id },
            "Access token silently refreshed via stored refresh_token");

        return newAccessToken;

    } catch (err) {
        server.log.error({ layer: "oauth", msg: "Silent token refresh threw an error", err });
        throw err; // DO NOT RETURN NULL, THROW! So the caller knows it was an infrastructure error, not an auth failure.
    }
}
