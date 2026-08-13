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
    shortDescription: "Fish hooks and attachment components connecting card holders to lanyards.",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
