import { FastifyInstance } from "fastify";
import { getPool } from "../plugins/mysql";

// ─── Verify Firebase ID token via REST API ───────────────────
async function verifyFirebaseIdToken(idToken: string) {
    const res = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.FIREBASE_API_KEY}`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ idToken }),
        }
    );
    return res.json();
}

export default async function authRoutes(server: FastifyInstance) {

    server.post("/auth", {
        config: {
            rateLimit: {
                max: 10,
                timeWindow: "1 minute",
                errorResponseBuilder: () => ({
                    statusCode: 429,
                    error: "Too Many Requests",
                    message: "Too many login attempts. Please wait a minute and try again.",
                }),
            },
        },
    }, async (request, reply) => {
        const { idToken, accessToken, refreshToken } = request.body as { idToken: string, accessToken?: string, refreshToken?: string };

        if (!idToken) {
            return reply.status(400).send({ error: "idToken is required" });
        }

        let firebaseUser: any;

        // ── STEP 1: Verify token via Firebase Identity Toolkit REST ──
        try {
            const data = await verifyFirebaseIdToken(idToken);

            if (process.env.DEBUG_AUTH === "true") {
                server.log.info({ layer: "auth", raw: data }, "Firebase REST response");
            }

            const users: any[] | undefined = (data as any)?.users;

            if (!users || users.length === 0) {
                server.log.warn({ layer: "auth", data }, "Token verification returned no users");
                return reply.status(401).send({ error: "Invalid or expired token" });
            }

            firebaseUser = users[0];

        } catch (err) {
            server.log.error({ layer: "auth", error: err }, "Firebase token verification failed");
            return reply.status(500).send({ error: "Internal server error" });
        }

        // ── STEP 3: Upsert user into DB ──────────────────────
        try {
            const pool = getPool();

            // Upsert user — matches actual DB schema
            const query = `
                INSERT INTO users (firebase_uid, email, display_name, photo_url, google_refresh_token)
                VALUES (?, ?, ?, ?, ?)
                ON DUPLICATE KEY UPDATE
                    email                = VALUES(email),
                    display_name         = VALUES(display_name),
                    photo_url            = VALUES(photo_url),
                    google_refresh_token = COALESCE(VALUES(google_refresh_token), google_refresh_token)
            `;

            await pool.execute(query, [
                firebaseUser.localId,
                firebaseUser.email,
                firebaseUser.displayName || null,
                firebaseUser.photoUrl || null,
                refreshToken || null
            ]);

            // Get internal DB user id
            const [rows] = await pool.execute(
                `SELECT id FROM users WHERE firebase_uid = ?`,
                [firebaseUser.localId]
            ) as any;

            const dbUser = rows[0];

            // Create free subscription if new user (id is AUTO_INCREMENT — no UUID needed)
            await pool.execute(
                `INSERT IGNORE INTO subscriptions (user_id, plan, apps_allowed)
                 VALUES (?, 'free', 1)`,
                [dbUser.id]
            );

            // ── STEP 4: Sign JWT + set cookie ─────────────────
            const token = server.jwt.sign(
                {
                    uid: firebaseUser.localId,
                    db_id: dbUser.id,
                    email: firebaseUser.email,
                    name: firebaseUser.displayName || null,
                    picture: firebaseUser.photoUrl || null,
                },
                { expiresIn: "7d" }
            );

            server.log.info({
                layer: "auth",
                provider: "firebase_rest",
                status: "success",
                email: firebaseUser.email
            }, "Auth successful");

            return reply
                .setCookie("token", token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    sameSite: "lax",
                    path: "/",
                    maxAge: 60 * 60 * 24 * 7,
                })
                .send({ success: true });

        } catch (err) {
            server.log.error({
                layer: "auth",
                status: "error",
                error: err
            }, "DB/JWT error during auth");
            return reply.status(500).send({ error: "Internal server error" });
        }
    });

    server.delete("/auth", async (request, reply) => {
        const isProd = process.env.NODE_ENV === "production";
        return reply
            .clearCookie("token", {
                path: "/",
                secure: isProd,
                sameSite: "lax",
            })
            .clearCookie("google_access_token", {
                domain: isProd ? ".statsy.in" : undefined,
                path: "/",
                secure: isProd,
                sameSite: isProd ? "none" : "lax",
            })
            .send({ success: true });
    });
}
