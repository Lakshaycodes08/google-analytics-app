const BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
// In production .env: NEXT_PUBLIC_API_URL=https://statsy.in
// All calls go to {BASE}/api/<path>

export async function apiRequest(
    path: string,
    options?: RequestInit
): Promise<Response> {
    // Prepend /api if not already present
    const fullPath = path.startsWith("/api") ? path : `/api${path}`;

    const res = await fetch(`${fullPath}`, {
        credentials: "include",
        headers: {
            ...(options?.body ? { "Content-Type": "application/json" } : {}),
            ...(options?.headers ?? {}),
        },
        ...options,
    });
    return res;
}
