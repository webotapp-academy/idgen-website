import type { Faq } from "@/data/types";

export interface SetupPackage {
  title: string;
  subtitle: string;
  items: string[];
  recommended?: boolean;
}

export interface CityServiceItem {
  id?: string;
  title: string;
  categoryLabel: string;
  tag?: string;
  badge?: string;
  imageSrc: string;
  description: string;
  href: string;
  spec?: string;
  highlights?: string[];
}

export interface CityProductItem {
  id: string;
  slug: string;
  name: string;
  category: "holders" | "hardware" | "badges" | "medals" | "cards" | string;
  categoryLabel: string;
  imageSrc: string;
  imageAlt?: string;
  tag: string;
  badge: string;
  badgeColor?: string;
  shortDescription: string;
  spec: string;
  highlights: string[];
}

export interface TargetAudienceItem {
  name: string;
  category: string;
  badge?: string;
}

export interface WhyChoosePointItem {
  id?: string;
  title: string;
  desc: string;
  badge?: string;
  stat?: string;
  image?: string;
}

export interface BulkInputItem {
  step: string;
  title: string;
  description: string;
  badge: string;
}

export interface VerifiedClientItem {
  name: string;
  location: string;
  logo: string;
  tag?: string;
}

export interface OrderStepItem {
  step: string;
  title: string;
  description: string;
  phase?: string;
}

export interface CityData {
  slug: string;
  name: string;
  isPrimary?: boolean;
  indexed?: boolean;

  // 1. Hero Section
  heroEyebrow?: string;
  heroHeadline?: string;
  heroIntro: string;
  heroSubtext?: string;
  heroImage?: string;
  heroWorkflowSteps?: string[];
  heroTrustBadges?: string[];
  heroCtaText?: string;
  heroSecondaryCtaText?: string;
  heroShowcaseBadge?: string;
  heroShowcaseChip1?: string;
  heroShowcaseChip2?: string;

  // 2. Local Presence & Coverage Section
  localColor?: string;
  localPresenceBadge?: string;
  localPresenceSubBadge?: string;
  localPresenceTitle?: string;
  localAdvantagePills?: string[];
  audiencesTitle?: string;
  audiencesSubtitle?: string;
  audiencesNote?: string;
  targetAudiences?: TargetAudienceItem[];
  organizationsTitle?: string;
  organizationsSubtitle?: string;
  organizationsServed?: string[];
  localAdvantageTitle?: string;
  localAdvantageDesc?: string;
  localAdvantageCta?: string;
  deliveryRoutesTitle?: string;
  deliveryRoutesSubtitle?: string;
  nearbyAreas: string[];

  // 2b. Service Coverage & Regional Delivery
  coverageEyebrow?: string;
  coverageTitle?: string;
  coverageIntro?: string;
  coverageHubTitle?: string;
  coverageHubSubtitle?: string;
  coverageNotice?: string;
  coverageExamples?: string[];
  coveragePolicy?: string;
  coverageFooterNote?: string;

  // 3. Services Carousel (ID Card Printing Services)
  services?: CityServiceItem[];

  // 3b. Product Catalog (Physical Hardware & Products - Holders, Hooks, Badges, Medals, Cards)
  catalogEyebrow?: string;
  catalogTitle?: string;
  catalogSubtitle?: string;
  products?: CityProductItem[];

  // 4. Complete ID Card Packages / Setups
  setupsEyebrow?: string;
  setupsTitle?: string;
  setupsSubtitle?: string;
  completeSetups?: SetupPackage[];

  // 5. Bulk Printing
  bulkEyebrow?: string;
  bulkSubBadge?: string;
  bulkTitle?: string;
  bulkDesc?: string;
  bulkHighlights?: string[];
  bulkInputsTitle?: string;
  bulkInputsDesc?: string;
  bulkInputsStepTag?: string;
  bulkInputs?: BulkInputItem[];
  bulkBottomNote?: string;
  bulkCta1Text?: string;
  bulkCta2Text?: string;

  // 6. Real Organizations & Projects Showcase
  projectsBadge?: string;
  projectsSubBadge?: string;
  projectsTitle?: string;
  projectsDesc?: string;
  verifiedClients?: VerifiedClientItem[];

  // 7. Why Choose IDGen
  whyChooseEyebrow?: string;
  whyChooseTitle?: string;
  whyChooseSubtitle?: string;
  whyChoosePoints?: WhyChoosePointItem[];

  // 8. Confidentiality Callout
  confidentialityTitle?: string;
  confidentialityDesc?: string;
  confidentialityCta?: string;

  // 9. Workflow (8-Stage Order Process)
  workflowEyebrow?: string;
  workflowBadge?: string;
  workflowTitle?: string;
  workflowSubtitle?: string;
  workflowNote?: string;
  workflowCta1Text?: string;
  workflowCta2Text?: string;
  orderSteps?: OrderStepItem[];

  // 10. FAQs & Help
  faqsTitle?: string;
  faqsSubtitle?: string;
  faqsHelpTitle?: string;
  faqsHelpText?: string;
  faqs?: Faq[];

  // 11. SEO & AI Overview
  quickAnswer?: string;
  metaTitle: string;
  metaDescription: string;
}

export interface StateData {
  slug: string;
  name: string;
  heroIntro: string;
  metaTitle: string;
  metaDescription: string;
  heroImage?: string;
  indexed?: boolean;
  sortOrder?: number;
  cities: CityData[];
}

export function getDefaultCityServices(cityName: string): CityServiceItem[] {
  const cName = cityName || "Your City";
  return [
    {
      id: "student-id",
      title: `Student ID Card Printing in ${cName}`,
      categoryLabel: "Educational Institutions",
      tag: "Schools & Universities",
      badge: "Academic Priority",
      imageSrc: "/images/student-id-card-printing-idgen.jpg",
      description: `Personalized student identification for schools, colleges, and universities in ${cName} with digital photo collection via IDGen Studio.`,
      href: "/student-id-card-printing/",
      spec: "30-Mil CR80 PVC • High-Res Photo Print",
      highlights: [
        "Batch Photo Collection & Verification",
        "Durable Waterproof CR80 PVC Material",
        "Custom Institution Lanyards & Holders",
      ],
    },
    {
      id: "employee-id",
      title: `Employee ID Card Printing in ${cName}`,
      categoryLabel: "Corporate & Enterprises",
      tag: "Corporate Staff",
      badge: "Enterprise Core",
      imageSrc: "/images/employee-id-card-printing-idgen.jpg",
      description: `Personalized staff credentials with department, designation, employee code, barcode, and matching custom satin lanyards in ${cName}.`,
      href: "/employee-id-card-printing/",
      spec: "Single / Dual Side • QR & Barcode Ready",
      highlights: [
        "Single / Double-Sided High Def Print",
        "Smart Barcode & QR Integration",
        "Matching Crystal Holders & Clips",
      ],
    },
    {
      id: "event-card",
      title: `Event Card Printing in ${cName}`,
      categoryLabel: "Conferences & Seminars",
      tag: "Conferences & Summits",
      badge: "Express 48h",
      imageSrc: "/images/service-event-card-printing-v3.jpg",
      description: `Fast turnaround badge passes for delegates, speakers, exhibitors, VIPs, and organizers in ${cName} with custom event lanyards.`,
      href: "/event-card-printing/",
      spec: "CR80 / Oversized • Dual-Hook Ready",
      highlights: [
        "Oversized Passes & Delegate Badges",
        "Dual-Hook Anti-Twist Lanyards",
        "Fast Priority Event Dispatch",
      ],
    },
    {
      id: "rfid-card",
      title: `RFID Card Printing in ${cName}`,
      categoryLabel: "Smart Credentials",
      tag: "13.56 MHz / NFC",
      badge: "Turnstile Ready",
      imageSrc: "/images/service-rfid-card-printing-v3.jpg",
      description: `13.56 MHz Mifare 1K, 125 kHz Proximity, and UHF contactless credentials calibrated for door access & attendance systems across ${cName}.`,
      href: "/rfid-card-printing/",
      spec: "Mifare 1K / 125 kHz • Turnstile Encoded",
      highlights: [
        "Pre-Encoded UID Serial Numbers",
        "Compatible with All Reader Brands",
        "Embedded Contactless Smart Chips",
      ],
    },
    {
      id: "custom-lanyards",
      title: `Custom Printed Lanyards in ${cName}`,
      categoryLabel: "Wearable Branding",
      tag: "20mm Satin",
      badge: "Bestseller",
      imageSrc: "/images/service-custom-printed-lanyards.jpg",
      description: `High-density multicolor sublimation lanyards (16mm / 20mm) with durable metallic hooks and safety breakaways dispatched to ${cName}.`,
      href: "/custom-printed-lanyard-printing/",
      spec: "20mm Satin • Ultrasonic Edge Sealed",
      highlights: [
        "Zero-Fray Ultrasonic Sealed Ends",
        "Pantone Accurate Color Matching",
        "Chrome Dog / Swivel Metal Hooks",
      ],
    },
    {
      id: "ultrasonic-sealing",
      title: `Ultrasonic Sealing in ${cName}`,
      categoryLabel: "Advanced Engineering",
      tag: "Tamper-Evident",
      badge: "Industrial Grade",
      imageSrc: "/images/complete-id-card-lanyard-ultrasonic-sealing.jpg",
      description: `Industrial tamper-evident edge sealing for multi-year cards and non-stitch ultrasonic lanyard joint welding in ${cName}.`,
      href: "/ultrasonic-sealing/",
      spec: "High-Frequency Fusion • Non-Stitch Clean",
      highlights: [
        "High-Frequency Ultrasonic Fusion",
        "100% Stitchless Clean Finish",
        "Weatherproof Multi-Year Protection",
      ],
    },
  ];
}

export function getDefaultWhyChoosePoints(cityName?: string, stateName?: string, isGuwahati?: boolean): WhyChoosePointItem[] {
  const cName = cityName || "Your City";
  const sName = stateName || "the region";
  return [
    {
      title: isGuwahati ? "Guwahati-Based Manufacturing" : `${cName} Direct Regional Fulfillment`,
      desc: isGuwahati
        ? "Local presence in Guwahati ensures direct factory communication, rapid physical proofs, and 24–48h fast dispatch across Assam."
        : `Direct logistical coordination from our regional manufacturing cleanroom with doorstep delivery across ${cName} and ${sName}.`,
      image: isGuwahati ? "/images/service-guwahati-hub.jpg" : "/images/idgen-id-card-solutions-guwahati-assam.jpg",
      badge: isGuwahati ? "Direct Cleanroom Hub" : "Regional Priority",
      stat: isGuwahati ? "24–48h Local Delivery" : "Fast Doorstep Dispatch",
    },
    {
      title: "Experience Since 2014",
      desc: "Over a decade of specialized expertise in high-volume card manufacturing, color calibration, RFID encoding, and zero-defect data integrity.",
      image: "/images/why-idgen-more-than-brand.jpg",
      badge: "10+ Years Proven",
      stat: "Since 2014",
    },
    {
      title: "Organizational & Institutional Focus",
      desc: `Engineered specifically for schools, colleges, corporate offices, and government bodies in ${cName} rather than basic retail single-card prints.`,
      image: "/images/sol-institutions-idgen-v1.jpg",
      badge: "Institutional Grade",
      stat: "Bulk & Enterprise",
    },
    {
      title: "Complete Identification Ecosystem",
      desc: "One-stop coordinated supply of premium CR80 PVC cards, RFID chips, custom satin lanyards, crystal holders, and ultrasonic tamper-evident sealing.",
      image: "/images/why-idgen-complete-ecosystem-branded.jpg",
      badge: "Turnkey Packages",
      stat: "Cards + Lanyards + Holders",
    },
    {
      title: "Structured 8-Stage Workflow",
      desc: "Rigorous quality stages from requirement → data check → proofing → cleanroom production → 100% optical inspection → dispatch.",
      image: "/images/why-idgen-production-batches-branded.jpg",
      badge: "Quality Assured",
      stat: "Zero-Defect Standard",
    },
    {
      title: "IDGen Studio Digital Portal",
      desc: "Cloud platform for online student and employee photo collection, background removal, and batch approvals without spreadsheet chaos.",
      image: "/images/idgen-studio-digital-id-card-data-collection-workflow.jpg",
      badge: "Cloud Automation",
      stat: "Digital Previews",
    },
  ];
}

export function getDefaultCityProducts(cityName?: string): CityProductItem[] {
  const cName = cityName || "Your City";
  return [
    {
      id: "id-card-holders",
      slug: "id-card-holders",
      name: "ID Card Holders",
      category: "holders",
      categoryLabel: "Protection Cases",
      imageSrc: "/images/product-id-holders.jpg",
      imageAlt: `Crystal Clear Hard Acrylic and Polycarbonate ID Card Badge Holders in ${cName}`,
      tag: "Hard Acrylic / PMMA",
      badge: "Protection",
      badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-400/30",
      shortDescription: `Vertical, horizontal, four-side-lock, metal and crystal holders for every card orientation supplied to ${cName}.`,
      spec: "UV-Stabilized Polycarbonate • 0.82mm CR80",
      highlights: ["4-Side Snap Lock Mechanism", "Crystal Optical Transparency", "Moisture & Dust Resistant"],
    },
    {
      id: "id-card-hooks",
      slug: "id-card-hooks",
      name: "ID Card & Lanyard Hooks",
      category: "hardware",
      categoryLabel: "Attachments",
      imageSrc: "/images/product-hooks-hardware.jpg",
      imageAlt: `Chrome Swivel Dog Hooks and Lanyard Hardware Clips in ${cName}`,
      tag: "Chrome-Plated Metal",
      badge: "Hardware",
      badgeColor: "text-blue-400 bg-blue-500/10 border-blue-400/30",
      shortDescription: `Fish hooks, swivel snap hooks, alligator clips and metal attachments for lanyards in ${cName}.`,
      spec: "Anti-Rust Nickel Plating • 25kg Tensile",
      highlights: ["360° Free Swivel Rotation", "High-Tension Spring Lever", "Quick Auto-Release Breakaway"],
    },
    {
      id: "acrylic-badges",
      slug: "acrylic-badges",
      name: "Acrylic Badges & Pins",
      category: "badges",
      categoryLabel: "Executive Badges",
      imageSrc: "/images/product-acrylic-badges.jpg",
      imageAlt: `Laser-Cut Crystal Acrylic Name Badges with Magnetic Backing in ${cName}`,
      tag: "Laser Cut PMMA",
      badge: "Executive",
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-400/30",
      shortDescription: `Laser-cut crystal acrylic badges with magnetic backing or safety pins for corporate staff in ${cName}.`,
      spec: "Polished Bevel PMMA • Triple Neodymium",
      highlights: ["No Garment Puncture or Tearing", "Diamond-Polished Bevel Edges", "High-Definition 1200 DPI Print"],
    },
    {
      id: "zinc-medals",
      slug: "zinc-medals",
      name: "Custom Zinc Medals",
      category: "medals",
      categoryLabel: "Sports & Honors",
      imageSrc: "/images/product-zinc-medals.jpg",
      imageAlt: `3D Die-Cast Zinc Medals with Satin Ribbons in ${cName}`,
      tag: "Die-Cast Metal",
      badge: "Recognition",
      badgeColor: "text-purple-400 bg-purple-500/10 border-purple-400/30",
      shortDescription: `High-relief antique gold, silver & bronze medals with customized satin ribbons for sports & events across ${cName}.`,
      spec: "3D Sculpted Zinc Alloy • Heavy Antique Finish",
      highlights: ["Custom 3D Institutional Crests", "Tri-Tone Antique Gold/Silver/Bronze", "Matching V-Cut Satin Ribbon"],
    },
    {
      id: "pvc-cards",
      slug: "pvc-cards",
      name: "30-Mil PVC Smart Cards",
      category: "cards",
      categoryLabel: "Card Media",
      imageSrc: "/images/product-pvc-cards.jpg",
      imageAlt: `Solid Virgin PVC Core ID Cards and Smart RFID Media for ${cName}`,
      tag: "Virgin PVC Core",
      badge: "Core Media",
      badgeColor: "text-sky-400 bg-sky-500/10 border-sky-400/30",
      shortDescription: `Bank-grade virgin PVC core cards with 300 DPI high-definition dye sublimation & overlaminate in ${cName}.`,
      spec: "CR80 30-Mil Standard • 300 DPI Sublimation",
      highlights: ["Bank-Grade 100% Virgin Core", "Integrated RFID & NFC Chips", "Scratch-Resistant Overlaminate"],
    },
  ];
}


