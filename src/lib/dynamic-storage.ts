import fs from "fs";
import path from "path";

/**
 * Universal dynamic JSON loader that checks live production paths and local dev paths.
 * Does not cache in memory to guarantee live frontend updates upon admin edits.
 */
export function loadDynamicJson<T>(filename: string, defaultData: T): T {
  const possiblePaths = [
    // 1. Live shared public_html data directory on Hostinger
    "/home/u942704794/domains/idgen.in/public_html/data/" + filename,
    // 2. Node.js app cwd paths
    path.join(process.cwd(), "src", "data", filename),
    path.join(process.cwd(), "data", filename),
    // 3. Relative navigation from Node app root to public_html
    path.resolve(process.cwd(), "..", "..", "..", "public_html", "data", filename),
    path.resolve(process.cwd(), "..", "public_html", "data", filename),
  ];

  for (const p of possiblePaths) {
    try {
      if (fs.existsSync(p)) {
        const raw = fs.readFileSync(p, "utf-8");
        const parsed = JSON.parse(raw);
        if (parsed !== null && parsed !== undefined) {
          return parsed as T;
        }
      }
    } catch {
      // Continue to next path candidate
    }
  }

  return defaultData;
}

/**
 * Universal dynamic JSON writer that updates all known local and server directories.
 */
export function saveDynamicJson<T>(filename: string, data: T): void {
  const json = JSON.stringify(data, null, 2);
  const possiblePaths = [
    "/home/u942704794/domains/idgen.in/public_html/data/" + filename,
    path.join(process.cwd(), "src", "data", filename),
    path.join(process.cwd(), "data", filename),
    path.resolve(process.cwd(), "..", "..", "..", "public_html", "data", filename),
  ];

  for (const p of possiblePaths) {
    try {
      const dir = path.dirname(p);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(p, json, "utf-8");
    } catch {
      // ignore
    }
  }
}
