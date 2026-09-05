import type { MetadataRoute } from "next";
import { execSync } from "node:child_process";
import { SITE_URL } from "@/data/site";
import { services } from "@/data/services";
import { products } from "@/data/products";
import { indexedStates, indexedCities } from "@/data/locations";
import { BLOG_POSTS } from "@/data/blogs";

// Real per-file last-commit date instead of a single build timestamp
// stamped on every URL — Google discounts sitemaps where lastmod is
// identical across the whole site.
function gitLastModified(relFile: string): Date {
  try {
    const iso = execSync(`git log -1 --format=%cI -- ${relFile}`, { cwd: process.cwd() })
      .toString()
      .trim();
    if (iso) return new Date(iso);
  } catch {
    // not a git checkout (e.g. some deploy environments) — fall through
  }
  return new Date();
}

function pathToFile(urlPath: string): string {
  const trimmed = urlPath.replace(/^\/+|\/+$/g, "");
  return trimmed ? `src/app/${trimmed}/page.tsx` : "src/app/page.tsx";
}

// acrylic-badges/zinc-medals/pvc-cards live in the products loop below —
// don't also hardcode them here, or they end up in the sitemap twice.
const staticPaths = [
  "/",
  "/why-idgen/",
  "/services/",
  "/products/",
  "/idgen-studio/",
  "/pricing/",
  "/partners/",
  "/resources/",
  "/resources/blogs/",
  "/resources/guides/",
  "/faq/",
  "/case-studies/",
  "/templates/",
  "/contact-us/",
  "/request-a-quote/",
  "/privacy-policy/",
  "/terms-conditions/",
  "/shipping-returns/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: gitLastModified(pathToFile(path)),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

  for (const s of services) {
    entries.push({
      url: `${SITE_URL}/${s.slug}/`,
      lastModified: gitLastModified(pathToFile(`/${s.slug}/`)),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }
  for (const p of products) {
    entries.push({
      url: `${SITE_URL}/${p.slug}/`,
      lastModified: gitLastModified(pathToFile(`/${p.slug}/`)),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }
  for (const st of indexedStates()) {
    entries.push({
      url: `${SITE_URL}/service-areas/${st.slug}/`,
      lastModified: gitLastModified("src/app/service-areas/[state]/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }
  for (const { state, city } of indexedCities()) {
    entries.push({
      url: `${SITE_URL}/service-areas/${state.slug}/${city.slug}/`,
      lastModified: gitLastModified("src/app/service-areas/[state]/[city]/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const post of BLOG_POSTS) {
    entries.push({
      url: `${SITE_URL}/resources/blogs/${post.slug}/`,
      lastModified: new Date(post.publishedDate),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  return entries;
}
