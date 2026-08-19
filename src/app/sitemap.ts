import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/site";
import { services } from "@/data/services";
import { products } from "@/data/products";
import { states, allCities } from "@/data/locations";

const staticPaths = [
  "/",
  "/why-idgen/",
  "/services/",
  "/products/",
  "/acrylic-badges/",
  "/zinc-medals/",
  "/pvc-cards/",
  "/idgen-studio/",
  "/service-areas/",
  "/pricing/",
  "/partners/",
  "/resources/",
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
  const now = new Date();

  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

  for (const s of services) {
    entries.push({ url: `${SITE_URL}/${s.slug}/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 });
  }
  for (const p of products) {
    entries.push({ url: `${SITE_URL}/${p.slug}/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 });
  }
  for (const st of states) {
    entries.push({ url: `${SITE_URL}/service-areas/${st.slug}/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 });
  }
  for (const { state, city } of allCities()) {
    entries.push({
      url: `${SITE_URL}/service-areas/${state.slug}/${city.slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}
