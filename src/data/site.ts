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
  // Matches public/5579073bfa2cbb86d0175c69fabea6f3.txt — required by the
  // IndexNow protocol (Bing/Yandex instant-indexing pings). The key file
  // being live is the prerequisite; actually pinging api.indexnow.org with
  // changed URLs is a post-deploy step, not something to wire in blind.
  indexNowKey: "5579073bfa2cbb86d0175c69fabea6f3",
  // Real, already public on the site (Header/Footer/Hero WhatsApp links) —
  // wired here too so schema.org markup and the contact/quote pages pick it
  // up instead of showing it inconsistently across the site.
  phone: "+919207012084",
  whatsapp: "919207012084",
  // Street address + PIN code and a business email are still not confirmed
  // — leave blank rather than fabricate. City/state are known (Guwahati,
  // Assam) and used directly via SITE.hqCity/hqState where needed.
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
      { label: "Acrylic Badges & Pins", href: "/acrylic-badges/" },
      { label: "Custom Zinc Medals", href: "/zinc-medals/" },
      { label: "30-Mil PVC Smart Cards", href: "/pvc-cards/" },
    ],
  },
  { label: "IDGen Studio", href: "/idgen-studio/" },
  {
    label: "Service Areas",
    href: "/service-areas/",
    children: [
      { label: "All Service Areas", href: "/service-areas/" },
      { label: "Assam (Guwahati)", href: "/service-areas/assam/" },
      { label: "Arunachal Pradesh (Itanagar)", href: "/service-areas/arunachal-pradesh/" },
      { label: "Meghalaya (Shillong)", href: "/service-areas/meghalaya/" },
      { label: "Nagaland (Kohima / Dimapur)", href: "/service-areas/nagaland/" },
      { label: "Manipur (Imphal)", href: "/service-areas/manipur/" },
      { label: "Mizoram (Aizawl)", href: "/service-areas/mizoram/" },
      { label: "Tripura (Agartala)", href: "/service-areas/tripura/" },
      { label: "Sikkim (Gangtok)", href: "/service-areas/sikkim/" },
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
