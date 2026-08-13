import type { ProductContent } from "./types";

export const products: ProductContent[] = [
  {
    slug: "id-card-holder",
    name: "ID Card Holder",
    description: [
      "Rigid and soft-case ID card holders sized for standard CR80 cards, sold alongside card printing orders or as a standalone bulk item for organizations restocking existing card programs.",
      "Available in clear rigid plastic (better card visibility, more durable) and soft vinyl (lighter, quieter, lower cost) — both accept a lanyard clip or belt clip attachment.",
    ],
    specs: {
      "Card size": "Standard CR80 (85.6mm x 54mm)",
      Material: "Rigid PVC or soft vinyl",
      Attachment: "Lanyard clip or belt clip",
      "Order type": "Bulk, sold with or without a card order",
    },
    metaTitle: "ID Card Holder | Rigid & Soft-Case, CR80 — iDGen",
    metaDescription:
      "Bulk ID card holders in rigid PVC or soft vinyl, sized for standard CR80 cards, with lanyard or belt-clip attachment.",
  },
  {
    slug: "id-card-and-lanyard-hook",
    name: "ID Card and Lanyard Hook",
    description: [
      "The connecting hardware between a card holder and a lanyard — swivel hooks, bulldog clips, and safety breakaway connectors, sold in bulk for organizations assembling or restocking their own card kits.",
    ],
    specs: {
      Types: "Swivel hook, bulldog clip, safety breakaway",
      Material: "Nickel-plated metal or reinforced plastic",
      "Order type": "Bulk, sold with or without a lanyard order",
    },
    metaTitle: "ID Card & Lanyard Hooks | Bulk Hardware — iDGen",
    metaDescription:
      "Bulk swivel hooks, bulldog clips, and safety breakaway connectors for ID card and lanyard assembly.",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
