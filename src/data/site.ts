export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.idgen.in";

export const SITE = {
  name: "iDGen",
  legalName: "iDGen",
  tagline: "Identity Solutions, Simplified",
  description:
    "iDGen manufactures ID cards, RFID credentials, and lanyards for schools, colleges, universities, and enterprises across Northeast India.",
  // TODO fill in before launch — placeholders only, do not display fabricated
  // contact details to site visitors.
  phone: "",
  whatsapp: "",
  email: "",
  address: "",
  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
  },
};

export type NavItem = { label: string; href: string; children?: NavItem[] };

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Company",
    href: "/about-us",
    children: [
      { label: "About Us", href: "/about-us" },
      { label: "Why iDGen", href: "/why-idgen" },
      { label: "Manufacturing", href: "/manufacturing" },
      { label: "Quality Assurance", href: "/quality-assurance" },
      { label: "Our Process", href: "/our-process" },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "iDGen Studio", href: "/idgen-studio" },
  { label: "Service Area", href: "/service-area" },
  { label: "Become a Partner", href: "/become-a-partner" },
  { label: "Contact", href: "/contact-us" },
];

export const FOOTER_LINKS: NavItem[] = [
  { label: "FAQ", href: "/faq" },
  { label: "Get a Quote", href: "/get-a-quote" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Shipping & Returns", href: "/shipping-returns" },
];
