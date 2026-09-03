import { cookies } from "next/headers";
import crypto from "crypto";

const SESSION_COOKIE_NAME = "idgen_admin_session";
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin@idgen2026";
const AUTH_SECRET = process.env.AUTH_SECRET || "idgen-secure-admin-secret-key-2026-northeast-solutions";

export interface SessionData {
  username: string;
  role: string;
  createdAt: number;
}

/**
 * Creates an HMAC signed session token
 */
export function createSessionToken(username: string): string {
  const payload: SessionData = {
    username,
    role: "administrator",
    createdAt: Date.now(),
  };
  const json = JSON.stringify(payload);
  const base64Payload = Buffer.from(json).toString("base64url");
  const signature = crypto.createHmac("sha256", AUTH_SECRET).update(base64Payload).digest("base64url");
  return `${base64Payload}.${signature}`;
}

/**
 * Verifies and parses an HMAC signed session token
 */
export function verifySessionToken(token: string | undefined): SessionData | null {
  if (!token || typeof token !== "string") return null;
  const parts = token.split(".");
  if (parts.length !== 2) return null;

  const [base64Payload, signature] = parts;
  const expectedSignature = crypto.createHmac("sha256", AUTH_SECRET).update(base64Payload).digest("base64url");

  // Constant time comparison to prevent timing attacks
  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))) {
    return null;
  }

  try {
    const json = Buffer.from(base64Payload, "base64url").toString("utf-8");
    const payload = JSON.parse(json) as SessionData;

    // Sessions valid for 7 days
    const MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;
    if (Date.now() - payload.createdAt > MAX_AGE_MS) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

/**
 * Checks credentials
 */
export function validateCredentials(username: string, password: string): boolean {
  if (!username || !password) return false;
  return username.trim() === ADMIN_USERNAME.trim() && password === ADMIN_PASSWORD;
}

/**
 * Gets current session from incoming cookies (Server Component / Action / Handler)
 */
export async function getAdminSession(): Promise<SessionData | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  return verifySessionToken(token);
}

export { SESSION_COOKIE_NAME };
