import type { ProductIndexItem } from "./types";

export const products: ProductIndexItem[] = [
  {
    slug: "id-card-holders",
    name: "ID Card Holders",
    shortDescription: "Vertical, horizontal, four-side-lock, metal and crystal holders for every card orientation.",
  },
  {
    slug: "id-card-hooks",
    name: "ID Card & Lanyard Hooks",
    shortDescription: "Fish hooks, swivel snap hooks, alligator clips and metal attachments for lanyards.",
  },
  {
    slug: "acrylic-badges",
    name: "Custom Acrylic Badges & Pins",
    shortDescription: "Laser-cut crystal acrylic badges with magnetic backing or safety pins for corporate staff.",
  },
  {
    slug: "zinc-medals",
    name: "Custom Die-Cast Zinc Medals",
    shortDescription: "High-relief antique gold, silver & bronze medals with customized satin ribbons for sports & events.",
  },
  {
    slug: "pvc-cards",
    name: "30-Mil CR80 PVC Smart Cards",
    shortDescription: "Bank-grade virgin PVC core cards with 300 DPI high-definition dye sublimation & overlaminate.",
  },
  {
    slug: "event-card-printing",
    name: "Event Badges & Oversized Passes",
    shortDescription: "Heavy-duty 2-hook and 1-hook event credentials with custom lanyards for conferences & expos.",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
