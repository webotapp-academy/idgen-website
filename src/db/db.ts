import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

let _db: ReturnType<typeof drizzle<typeof schema>> | null = null;

/**
 * Lazy so `next build` / `next dev` work before DATABASE_URL is provisioned.
 * Content pages read from src/data until the site is switched over to
 * live data (see .env.example) — only lead-capture routes need this today.
 */
export function getDb() {
  if (_db) return _db;
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL is not set — see .env.example.");
  }
  const client = postgres(url, { ssl: url.includes("sslmode=require") || url.includes("neon") || url.includes("supabase") ? "require" : false });
  _db = drizzle(client, { schema });
  return _db;
}
