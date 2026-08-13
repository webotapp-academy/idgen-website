import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  console.warn(
    "DATABASE_URL is not set — drizzle-kit commands (generate/push/seed) will fail until it is. " +
      "See .env.example."
  );
}

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
  },
});
