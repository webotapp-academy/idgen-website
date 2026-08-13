export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.idgen.in";

export const SITE = {
  name: "IDGen",
  legalName: "IDGen",
  tagline: "Identity Solutions Simplified",
  description:
    "IDGen is a Guwahati-based identity solutions company providing ID card printing, custom lanyards, RFID cards, event badges and complete identification workflows for organizations across Assam and Northeast India.",
  foundedYear: 2014,
  dailyCapacity: "10,000+ IDs/day*",
  capacityFootnote: "Production capacity depends on product type, personalization, quantity and project requirements.",
  dispatchTime: "72-hour dispatch",
  hqCity: "Guwahati",
  hqState: "Assam",
  regionalFocus: ["Assam", "Arunachal Pradesh", "Meghalaya", "Nagaland", "Manipur", "Mizoram", "Tripura", "Sikkim"],
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
  { label: "Why IDGen", href: "/why-idgen/" },
  {
    label: "Services",
    href: "/services/",
    children: [
      { label: "ID Card Printing", href: "/id-card-printing/" },
      { label: "Student ID Cards", href: "/student-id-card-printing/" },
      { label: "Employee ID Cards", href: "/employee-id-card-printing/" },
      { label: "Custom Printed Lanyards", href: "/custom-printed-lanyard-printing/" },
      { label: "Event Card Printing", href: "/event-card-printing/" },
      { label: "RFID Card Printing", href: "/rfid-card-printing/" },
      { label: "Ultrasonic Sealing", href: "/ultrasonic-sealing/" },
      { label: "Membership Card Printing", href: "/membership-card-printing/" },
    ],
  },
  {
    label: "Products",
    href: "/products/",
    children: [
      { label: "ID Card Holders", href: "/id-card-holders/" },
      { label: "ID Card & Lanyard Hooks", href: "/id-card-hooks/" },
    ],
  },
  { label: "IDGen Studio", href: "/idgen-studio/" },
  {
    label: "Service Areas",
    href: "/service-areas/",
    children: [
      { label: "Assam", href: "/service-areas/assam/" },
      { label: "Guwahati", href: "/service-areas/assam/guwahati/" },
      { label: "Meghalaya", href: "/service-areas/meghalaya/" },
    ],
  },
  { label: "Pricing", href: "/pricing/" },
  {
    label: "Resources",
    href: "/resources/",
    children: [
      { label: "Guides", href: "/resources/guides/" },
      { label: "FAQ", href: "/faq/" },
      { label: "Case Studies", href: "/case-studies/" },
      { label: "Templates", href: "/templates/" },
    ],
  },
  { label: "Partners", href: "/partners/" },
  { label: "Contact", href: "/contact-us/" },
];

export const FOOTER_LINKS: NavItem[] = [
  { label: "FAQ", href: "/faq/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms & Conditions", href: "/terms-conditions/" },
  { label: "Shipping & Returns", href: "/shipping-returns/" },
];
