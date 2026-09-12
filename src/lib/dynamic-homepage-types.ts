import type { HeroSlide } from "@/components/home/HeroCarousel";
import type { CityProductItem } from "./dynamic-locations-types";
import type { ServiceCardItem } from "@/components/home/ServicesCarousel";

export type { CityProductItem, ServiceCardItem };

export interface HomePageProductCatalog {
  eyebrow: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
  products: CityProductItem[];
}

export interface HomePageIdentityServices {
  eyebrow: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  services: ServiceCardItem[];
}

export interface HomePageMetadata {
  title: string;
  description: string;
  keywords: string[];
}

export interface HeroFeatureCard {
  title: string;
  desc: string;
  iconKey: "layers" | "check-circle" | "shield" | "sparkles" | "clock" | "zap";
}

export interface HomePageHero {
  eyebrowBadge: {
    left: string;
    middle: string;
    right: string;
  };
  headline: {
    line1: string;
    highlight: string;
  };
  subhead: string;
  description: string;
  featureCards: [HeroFeatureCard, HeroFeatureCard];
  ctaButtons: {
    primaryText: string;
    primaryHref: string;
    whatsappText: string;
    whatsappPhone: string;
    whatsappMessage: string;
    secondaryText: string;
    secondaryHref: string;
  };
  slides: HeroSlide[];
}

export interface InstitutionalClientLogo {
  name: string;
  logo: string;
  location: string;
  tag: string;
}

export interface HomePageTrust {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  tickerEyebrow: string;
  clients: InstitutionalClientLogo[];
  videoBanner: {
    eyebrow: string;
    title: string;
    desc: string;
    buttonText: string;
    buttonHref: string;
  };
}

export interface SolutionItem {
  num: string;
  title: string;
  tag: string;
  desc: string;
  href: string;
}

export interface HomePageCompleteSolutions {
  eyebrow: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    title: string;
    badge: string;
    cardHeading: string;
    cardDesc: string;
  };
  items: SolutionItem[];
  ctaButtons: {
    button1Text: string;
    button1Href: string;
    button2Text: string;
    button2Href: string;
  };
}

export interface StudioPillar {
  title: string;
  desc: string;
  iconKey: "sparkles" | "layers" | "eye" | "shield";
}

export interface HomePageStudio {
  eyebrow: string;
  title: string;
  description: string;
  pillars: StudioPillar[];
  slogan: {
    quote: string;
    badge: string;
  };
  image: {
    src: string;
    alt: string;
    title: string;
    caption: string;
    badge: string;
  };
  ctaButtons: {
    primaryText: string;
    primaryHref: string;
    secondaryText: string;
    secondaryHref: string;
  };
}

export interface WhyIdgenPillar {
  num: string;
  title: string;
  desc: string;
}

export interface HomePageWhyIdgen {
  eyebrow: string;
  title: string;
  description: string;
  photo: {
    src: string;
    alt: string;
    title: string;
    heading: string;
    subheading: string;
    badge: string;
  };
  pillars: WhyIdgenPillar[];
  linkText: string;
  linkHref: string;
}

export interface AtAGlanceMetric {
  metric: string;
  label: string;
  highlight: string;
  colorKey: "cyan" | "accent" | "emerald" | "blue";
  iconKey: "map-pin" | "zap" | "clock" | "shield";
}

export interface HomePageAtAGlance {
  title: string;
  description: string;
  metrics: AtAGlanceMetric[];
}

export interface RegionalPriorityCity {
  name: string;
  slug: string;
}

export interface RegionalNortheastState {
  name: string;
  slug: string;
}

export interface RegionalDispatchKpi {
  title: string;
  subtitle: string;
  highlightType: "default" | "accent" | "emerald";
}

export interface HomePageRegionalHub {
  eyebrow: string;
  title: string;
  description: string;
  topButtons: {
    button1Text: string;
    button1Href: string;
    button2Text: string;
    button2Href: string;
  };
  priorityCitiesTitle: string;
  priorityCitiesDesc: string;
  priorityCities: RegionalPriorityCity[];
  northeastStatesTitle: string;
  northeastStates: RegionalNortheastState[];
  quoteCallout: {
    text: string;
    buttonText: string;
    buttonHref: string;
  };
  image: {
    src: string;
    alt: string;
    title: string;
    caption: string;
    tag: string;
  };
  dispatchKpis: [RegionalDispatchKpi, RegionalDispatchKpi, RegionalDispatchKpi];
}

export interface HomePageFaqItem {
  q: string;
  a: string;
}

export interface HomePageFaqSection {
  eyebrow: string;
  title: string;
  lede: string;
  faqs: HomePageFaqItem[];
}

export interface HomePageClosingCta {
  eyebrow: string;
  title: string;
  description: string;
  note: {
    label: string;
    text: string;
  };
  ctaButtons: {
    primaryText: string;
    primaryHref: string;
    whatsappText: string;
    whatsappPhone: string;
    whatsappMessage: string;
    secondaryText: string;
    secondaryHref: string;
  };
}

export interface DynamicHomePageData {
  metadata: HomePageMetadata;
  hero: HomePageHero;
  productCatalog: HomePageProductCatalog;
  trust: HomePageTrust;
  identityServices: HomePageIdentityServices;
  completeSolutions: HomePageCompleteSolutions;
  studio: HomePageStudio;
  whyIdgen: HomePageWhyIdgen;
  atAGlance: HomePageAtAGlance;
  regionalHub: HomePageRegionalHub;
  faq: HomePageFaqSection;
  closingCta: HomePageClosingCta;
  lastUpdated: string;
}

export const DEFAULT_PRODUCT_CATALOG_DATA: HomePageProductCatalog = {
  eyebrow: "Hardware & Identity Products",
  title: "Explore Our Complete Product Catalog",
  subtitle:
    "From crystal-clear acrylic badge cases and anti-rust swivel hooks to custom zinc medals and 30-mil virgin PVC smart cards, discover IDGen's direct factory products.",
  buttonText: "All Products",
  buttonHref: "/products/",
  products: [
    {
      id: "id-card-holders",
      slug: "id-card-holders",
      name: "ID Card Holders",
      category: "holders",
      categoryLabel: "Protection Cases",
      imageSrc: "/images/product-id-holders.jpg",
      imageAlt: "Crystal Clear Hard Acrylic and Polycarbonate ID Card Badge Holders",
      tag: "Hard Acrylic / PMMA",
      badge: "Protection",
      badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-400/30",
      shortDescription: "Vertical, horizontal, four-side-lock, metal and crystal holders for every card orientation.",
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
      imageAlt: "Chrome Swivel Dog Hooks and Lanyard Hardware Clips",
      tag: "Chrome-Plated Metal",
      badge: "Hardware",
      badgeColor: "text-blue-400 bg-blue-500/10 border-blue-400/30",
      shortDescription: "Fish hooks, swivel snap hooks, alligator clips and metal attachments for lanyards.",
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
      imageAlt: "Laser-Cut Crystal Acrylic Name Badges with Magnetic Backing",
      tag: "Laser Cut PMMA",
      badge: "Executive",
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-400/30",
      shortDescription: "Laser-cut crystal acrylic badges with magnetic backing or safety pins for corporate staff.",
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
      imageAlt: "3D Die-Cast Zinc Medals in Antique Gold, Silver and Bronze with Satin Ribbons",
      tag: "Die-Cast Metal",
      badge: "Recognition",
      badgeColor: "text-purple-400 bg-purple-500/10 border-purple-400/30",
      shortDescription: "High-relief antique gold, silver & bronze medals with customized satin ribbons for sports & events.",
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
      imageAlt: "Solid Virgin PVC Core ID Cards and Smart RFID Media",
      tag: "Virgin PVC Core",
      badge: "Core Media",
      badgeColor: "text-sky-400 bg-sky-500/10 border-sky-400/30",
      shortDescription: "Bank-grade virgin PVC core cards with 300 DPI high-definition dye sublimation & overlaminate.",
      spec: "CR80 30-Mil Standard • 300 DPI Sublimation",
      highlights: ["Bank-Grade 100% Virgin Core", "Integrated RFID & NFC Chips", "Scratch-Resistant Overlaminate"],
    },
  ],
};

export const DEFAULT_IDENTITY_SERVICES_DATA: HomePageIdentityServices = {
  eyebrow: "Specialized Capabilities",
  title: "Our Identity Services",
  description: "IDGen provides specialized identification services designed for institutions and organizations.",
  buttonText: "View All Services",
  buttonHref: "/services/",
  services: [
    {
      id: "id-card-printing",
      title: "ID Card Printing",
      slug: "id-card-printing",
      categoryLabel: "Card Printing",
      serviceCode: "SRV: IDG-CARD",
      body: "PVC ID cards for schools, colleges, companies, hospitals and institutions with single or double-sided high-definition printing.",
      href: "/id-card-printing/",
      imageSrc: "/images/service-pvc-id-card-printing-v3.jpg",
      imageAlt: "Custom PVC ID card printing by IDGen with 2 cards and clear IDGen branding",
      tag: "30-Mil CR80 PVC",
      badge: "Core Service",
      badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-400/30",
      spec: "30-Mil Solid Core PVC • 1200 DPI High-Def",
      highlights: [
        "Single or Double-Side Thermal Print",
        "Dynamic QR & Barcode Variable Data",
        "High-Durability Scratch-Resistant Core",
      ],
    },
    {
      id: "custom-printed-lanyards",
      title: "Custom Printed Lanyards",
      slug: "custom-printed-lanyard-printing",
      categoryLabel: "Ribbon Branding",
      serviceCode: "SRV: IDG-LANY",
      body: "Branded 20 mm satin lanyards produced with organization logos, approved Pantone colours, and ultrasonic sealed loops.",
      href: "/custom-printed-lanyard-printing/",
      imageSrc: "/images/service-custom-printed-lanyards.jpg",
      imageAlt: "Custom printed ID card lanyards by IDGen",
      tag: "20 mm Satin",
      badge: "Bestseller",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-400/30",
      spec: "20mm Multi-Color Satin • Ultrasonic Sealed",
      highlights: [
        "Zero-Fray Ultrasonic Welded Ends",
        "True-to-Life Pantone Matching",
        "Chrome Swivel Hook & Safety Breakaways",
      ],
    },
    {
      id: "event-card-printing",
      title: "Event Card Printing",
      slug: "event-card-printing",
      categoryLabel: "Conferences & Summits",
      serviceCode: "SRV: IDG-EVNT",
      body: "Conference badges, delegate cards and event identification solutions paired with single or dual-hook custom lanyards.",
      href: "/event-card-printing/",
      imageSrc: "/images/service-event-card-printing-v3.jpg",
      imageAlt: "Custom event cards with clear IDGen logo and branded lanyards",
      tag: "Conferences & Summits",
      badge: "Express 48h",
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-400/30",
      spec: "Oversized CR100/Custom • Dual Hook Ready",
      highlights: [
        "Tiered Access Color-Coding Systems",
        "High-Speed Express Batch Turnaround",
        "Anti-Twist Double-Clip Lanyard Pairing",
      ],
    },
    {
      id: "rfid-card-printing",
      title: "RFID Card Printing",
      slug: "rfid-card-printing",
      categoryLabel: "Smart Contactless",
      serviceCode: "SRV: IDG-RFID",
      body: "Customized contactless smart RFID cards pre-encoded and compatible with automated attendance and turnstile access systems.",
      href: "/rfid-card-printing/",
      imageSrc: "/images/service-rfid-card-printing-v3.jpg",
      imageAlt: "Man tapping IDGen branded RFID smart card at electronic turnstile door sensor",
      tag: "13.56 MHz / NFC",
      badge: "Smart Contactless",
      badgeColor: "text-blue-400 bg-blue-500/10 border-blue-400/30",
      spec: "13.56 MHz Mifare / 125 kHz • Turnstile Ready",
      highlights: [
        "Mifare 1K / TK4100 / NTAG Chip Integration",
        "Pre-Encoded UID & Turnstile Compatibility",
        "High-Frequency Contactless Access Cards",
      ],
    },
  ],
};

export const DEFAULT_HOMEPAGE_DATA: DynamicHomePageData = {
  metadata: {
    title: "ID Card Printing & Identity Solutions in Guwahati | IDGen",
    description:
      "IDGen provides ID card printing, custom lanyards, RFID cards, event badges and complete identity solutions for schools, colleges, companies and organizations across Assam and Northeast India.",
    keywords: [
      "Identity solutions",
      "ID card printing",
      "Custom printed lanyards",
      "RFID card printing",
      "Event card printing",
      "ID card accessories",
      "Student ID cards",
      "Employee ID cards",
      "Guwahati",
      "Assam",
    ],
  },
  hero: {
    eyebrowBadge: {
      left: "Direct Identity Manufacturer",
      middle: "Guwahati Hub",
      right: "Serving All 8 Northeast States",
    },
    headline: {
      line1: "Identity Solutions",
      highlight: "Simplified",
    },
    subhead:
      "Custom ID Cards, Printed Lanyards & Complete Identification Solutions for Schools, Companies, Institutions & Events",
    description:
      "IDGen is a Guwahati-based identity solutions company helping organizations across Assam and Northeast India create professional identification systems—from ID card printing and custom lanyards to RFID cards, event badges, ID card accessories, and digital data collection through IDGen Studio.",
    featureCards: [
      {
        title: "Complete ID Solutions",
        desc: "Cards, lanyards, holders & RFID sets",
        iconKey: "layers",
      },
      {
        title: "Preview Before Printing",
        desc: "Zero photo & data error workflow",
        iconKey: "check-circle",
      },
    ],
    ctaButtons: {
      primaryText: "Request a Quote",
      primaryHref: "/request-a-quote/",
      whatsappText: "WhatsApp IDGen",
      whatsappPhone: "919207012084",
      whatsappMessage:
        "Hi IDGen Team, I would like to request samples and pricing for our organization.",
      secondaryText: "Pricing Calculator",
      secondaryHref: "/pricing/",
    },
    slides: [
      {
        id: "cards-showcase",
        imageSrc: "/images/idgen-hero-cards-showcase.jpg",
        alt: "Custom ID cards and printed lanyards showcase featuring Student ID, Corporate Staff ID, and RFID Smart Card",
        title: "Complete ID Cards & Printed Lanyards",
        category: "Full Suite",
        topBadge: "ID Card Showcase",
        specPill: "Custom Printed Lanyards",
        bottomSpec: "Student IDs • Corporate Cards • RFID Access",
        hubTag: "GUWAHATI HUB",
      },
      {
        id: "corporate-id",
        imageSrc: "/images/hero-slide-corporate-id.jpg",
        alt: "Corporate Executive Employee ID card with retractable badge reel and RFID chip",
        title: "Corporate Staff & Enterprise IDs",
        category: "Corporate",
        topBadge: "Corporate Identity",
        specPill: "Retractable Reel",
        bottomSpec: "Smart RFID Chip • Smoked Acrylic Case",
        hubTag: "ASSAM DIRECT",
      },
      {
        id: "event-badge",
        imageSrc: "/images/hero-slide-event-badge.jpg",
        alt: "VIP Conference Delegate Pass with holographic security foil and dual swivel hooks",
        title: "VIP Event Passes & Delegate Badges",
        category: "Conferences",
        topBadge: "VIP Event Pass",
        specPill: "Dual Chrome Hooks",
        bottomSpec: "Holographic Foil • Express 48h Delivery",
        hubTag: "SUMMIT READY",
      },
      {
        id: "modular-assembly",
        imageSrc: "/images/hero-slide-modular-assembly.jpg",
        alt: "Complete Modular ID System breakdown: PVC Card, Holder, Chrome Hook, and Lanyard",
        title: "Complete Modular ID System",
        category: "All-in-One",
        topBadge: "Complete Wearable Set",
        specPill: "Ultrasonic Sealed",
        bottomSpec: "Card + Holder + Hook + Custom Lanyard",
        hubTag: "ALL-IN-ONE",
      },
      {
        id: "rfid-smart",
        imageSrc: "/images/hero-slide-rfid-smart.jpg",
        alt: "Contactless 13.56 MHz RFID Smart Card tapping electronic turnstile access reader",
        title: "RFID / NFC Smart Campus Badges",
        category: "Smart Access",
        topBadge: "Smart Contactless",
        specPill: "13.56 MHz RFID",
        bottomSpec: "NFC Access & Attendance Turnstile Sync",
        hubTag: "ZERO MISMATCH",
      },
    ],
  },
  productCatalog: DEFAULT_PRODUCT_CATALOG_DATA,
  trust: {
    eyebrow: "One Workflow. One Partner.",
    title: "Trusted by Organizations That Need More Than Just an ID Card",
    subtitle:
      "Most organizations don't simply need a card—they need a complete identification system.",
    description:
      "Whether you're onboarding 2,000 students, issuing employee ID cards, organizing a conference, or replacing annual ID cards, IDGen helps coordinate the entire workflow from data collection to finished wearable identification.",
    tickerEyebrow: "Trusted Credentials Partner Across Assam & Northeast India",
    clients: [
      { name: "Don Bosco Hr Sec School", logo: "/images/clint logo/1.png", location: "Gojapara, Assam", tag: "Guwahati" },
      { name: "Jorhat Kendriya Vidyalaya", logo: "/images/clint logo/2.png", location: "Jorhat, Assam", tag: "Jorhat" },
      { name: "CKB College", logo: "/images/clint logo/3.png", location: "Jorhat, Assam", tag: "Dibrugarh" },
      { name: "DBS Itanagar", logo: "/images/clint logo/4.png", location: "Arunachal Pradesh", tag: "Silchar" },
      { name: "Rayburn College", logo: "/images/clint logo/5.png", location: "Churachandpur, Manipur", tag: "Tezpur" },
      { name: "Nathan Brown Academy", logo: "/images/clint logo/6.png", location: "Namrup, Assam", tag: "Nagaon" },
      { name: "Ardalivia English School", logo: "/images/clint logo/7.png", location: "Assam", tag: "Tinsukia" },
      { name: "Assam Govt Departments", logo: "/images/clint logo/8.png", location: "Guwahati Hub", tag: "Sivasagar" },
    ],
    videoBanner: {
      eyebrow: "30–60 Second Workflow Video",
      title: "IDGen ID Card Printing & Identification Production Process",
      desc: "See how IDGen manages organizational identification projects from data and design through preview, production, quality checking and finished identification sets.",
      buttonText: "Watch 60s Video",
      buttonHref: "/why-idgen/",
    },
  },
  identityServices: DEFAULT_IDENTITY_SERVICES_DATA,
  completeSolutions: {
    eyebrow: "Modular Systems",
    title: "Complete Identification Solutions",
    description:
      "Most customers don't order individual products—they order a complete wearable identification system.",
    image: {
      src: "/images/idgen-complete-id-card-identification-set.jpg",
      alt: "Complete ID card identification set breakdown: ID Card, Holder, Hook, Lanyard, and Assembled Set",
      title: "IDGen Complete Identification Modular Breakdown",
      badge: "Modular Assembly",
      cardHeading: "Complete Ready-to-Use Identification Breakdown",
      cardDesc: "Modular assembly: ID Card → Holder → Hook → Lanyard → Assembled Set.",
    },
    items: [
      {
        num: "1",
        title: "Card Only",
        tag: "Card Baseline",
        desc: "Suitable when your organization already has holders and lanyards.",
        href: "/id-card-printing/",
      },
      {
        num: "2",
        title: "Card + Holder",
        tag: "Protection",
        desc: "Protects the card while keeping it professional and durable.",
        href: "/id-card-holders/",
      },
      {
        num: "3",
        title: "Wearable Identification",
        tag: "Daily Wearable",
        desc: "Card + Holder + Hook + Lanyard for daily student and employee use.",
        href: "/custom-printed-lanyard-printing/",
      },
      {
        num: "4",
        title: "Complete Ready-to-Use Set",
        tag: "Finished Assembly",
        desc: "Ultrasonic sealing + holder + hook + lanyard for a finished wearable solution.",
        href: "/ultrasonic-sealing/",
      },
    ],
    ctaButtons: {
      button1Text: "Explore Card Printing",
      button1Href: "/id-card-printing/",
      button2Text: "Ultrasonic Lanyard Sealing",
      button2Href: "/ultrasonic-sealing/",
    },
  },
  studio: {
    eyebrow: "Digital Identity Workflow",
    title: "IDGen Studio — Digital Identity Workflow",
    description:
      "Collecting photographs and personal information is often the most difficult part of an ID card project. IDGen Studio connects digital data collection with physical ID card production.",
    pillars: [
      {
        iconKey: "sparkles",
        title: "Digital Data Collection",
        desc: "Collect names, photographs and ID information in one workflow.",
      },
      {
        iconKey: "layers",
        title: "Photo Management",
        desc: "Keep photographs connected to the correct student or employee record.",
      },
      {
        iconKey: "eye",
        title: "Card Preview",
        desc: "Review personalized cards before production begins.",
      },
      {
        iconKey: "shield",
        title: "Approval Workflow",
        desc: "Approve records before printing to reduce costly reprints.",
      },
    ],
    slogan: {
      quote: "“See It Before We Print It.”",
      badge: "Zero Data Mismatch",
    },
    image: {
      src: "/images/service-idgen-studio.jpg",
      alt: "IDGen Studio digital ID card data collection and preview",
      title: "IDGen Studio Digital ID Card Data Collection and Preview",
      caption: "Collect, review and prepare identification data before printing.",
      badge: "IDGen Studio Cloud",
    },
    ctaButtons: {
      primaryText: "Explore IDGen Studio",
      primaryHref: "/idgen-studio/",
      secondaryText: "Request Demo",
      secondaryHref: "/request-a-quote/",
    },
  },
  whyIdgen: {
    eyebrow: "Proven Quality",
    title: "Why Organizations Choose IDGen",
    description:
      "Specialized in institutional identity workflows with direct manufacturing and guaranteed regional reliability.",
    photo: {
      src: "/images/service-idgen-production.jpg",
      alt: "IDGen identity product production and quality workflow in Guwahati",
      title: "IDGen Production and Quality Workflow",
      heading: "Guwahati Identity Products & Production Workflow",
      subheading: "IDGen production and quality workflow in Guwahati, Assam",
      badge: "Direct Hub",
    },
    pillars: [
      {
        num: "01",
        title: "Identity-Focused Business",
        desc: "Specialized in organizational identification systems.",
      },
      {
        num: "02",
        title: "Structured Workflow",
        desc: "Requirement → Preview → Production → Quality → Dispatch.",
      },
      {
        num: "03",
        title: "Bulk Capability",
        desc: "Designed for institutional and high-volume projects.",
      },
      {
        num: "04",
        title: "Complete ID Solutions",
        desc: "Cards, lanyards, holders, hooks and RFID in one workflow.",
      },
      {
        num: "05",
        title: "Preview Before Printing",
        desc: "Reduce data and personalization errors before production.",
      },
      {
        num: "06",
        title: "Guwahati-Based Service",
        desc: "Serving Assam and the wider Northeast India market.",
      },
    ],
    linkText: "Learn more about Why IDGen",
    linkHref: "/why-idgen/",
  },
  atAGlance: {
    title: "IDGen at a Glance",
    description:
      "Built to serve institutional and high-volume identity rollouts across Northeast India.",
    metrics: [
      {
        metric: "Based in Guwahati",
        label: "Serving organizations across Assam and Northeast India.",
        highlight: "Regional Hub",
        colorKey: "cyan",
        iconKey: "map-pin",
      },
      {
        metric: "Up to 10,000 IDs/Day",
        label: "Production capability varies by product and project requirements.",
        highlight: "High Volume",
        colorKey: "accent",
        iconKey: "zap",
      },
      {
        metric: "72-Hour Dispatch",
        label: "After approval and payment, subject to applicable order conditions.",
        highlight: "Express Turnaround",
        colorKey: "emerald",
        iconKey: "clock",
      },
      {
        metric: "Institutional Focus",
        label: "Schools, colleges, companies, hospitals, NGOs and events.",
        highlight: "End-to-End",
        colorKey: "blue",
        iconKey: "shield",
      },
    ],
  },
  regionalHub: {
    eyebrow: "Direct Regional Manufacturing & Fulfillment",
    title: "Serving Assam & Northeast India",
    description:
      "IDGen is headquartered in Guwahati, Assam—providing localized digital workflows, direct factory production, and express regional dispatch across all 8 Northeast states.",
    topButtons: {
      button1Text: "Assam Service Areas",
      button1Href: "/service-areas/assam/",
      button2Text: "Guwahati Hub Details",
      button2Href: "/service-areas/assam/guwahati/",
    },
    priorityCitiesTitle: "Priority Assam Service Cities",
    priorityCitiesDesc:
      "Fast courier and direct institutional delivery available in all major districts:",
    priorityCities: [
      { name: "Guwahati", slug: "guwahati" },
      { name: "Jorhat", slug: "jorhat" },
      { name: "Dibrugarh", slug: "dibrugarh" },
      { name: "Silchar", slug: "silchar" },
      { name: "Tezpur", slug: "tezpur" },
      { name: "Nagaon", slug: "nagaon" },
      { name: "Tinsukia", slug: "tinsukia" },
      { name: "Sivasagar", slug: "sivasagar" },
      { name: "Golaghat", slug: "golaghat" },
      { name: "Barpeta", slug: "barpeta" },
    ],
    northeastStatesTitle: "Complete 8-State Northeast Coverage",
    northeastStates: [
      { name: "Assam", slug: "assam" },
      { name: "Arunachal Pradesh", slug: "arunachal-pradesh" },
      { name: "Meghalaya", slug: "meghalaya" },
      { name: "Manipur", slug: "manipur" },
      { name: "Mizoram", slug: "mizoram" },
      { name: "Nagaland", slug: "nagaland" },
      { name: "Tripura", slug: "tripura" },
      { name: "Sikkim", slug: "sikkim" },
    ],
    quoteCallout: {
      text: "Need a custom regional rollout or district delivery quote?",
      buttonText: "Request Assam Quote",
      buttonHref: "/request-a-quote/",
    },
    image: {
      src: "/images/service-guwahati-hub-unique.jpg",
      alt: "IDGen identity solutions in Guwahati Assam",
      title: "IDGen Guwahati Regional Hub and Dispatch Center",
      caption: "Guwahati Central Hub & Regional Dispatch",
      tag: "Assam • Northeast India",
    },
    dispatchKpis: [
      { title: "Guwahati", subtitle: "Same-Day Pickup", highlightType: "default" },
      { title: "72 Hours", subtitle: "Regional Dispatch", highlightType: "accent" },
      { title: "100% Zero", subtitle: "Transit Mismatch", highlightType: "emerald" },
    ],
  },
  faq: {
    eyebrow: "Clear Answers",
    title: "Frequently Asked Questions",
    lede: "Frequently asked questions about IDGen identity solutions, card printing, custom lanyards, and digital workflows.",
    faqs: [
      {
        q: "What does IDGen do?",
        a: "IDGen provides customized ID cards, printed lanyards, RFID cards, event badges, ID card accessories and digital identity workflows for organizations.",
      },
      {
        q: "Where is IDGen located?",
        a: "IDGen is based in Guwahati, Assam, and serves customers across Northeast India.",
      },
      {
        q: "Can IDGen handle bulk ID card printing?",
        a: "Yes. Bulk ID card printing is supported for schools, colleges, companies, institutions and events through the main ID card printing service.",
      },
      {
        q: "Can I order a complete ID card set?",
        a: "Yes. You can combine ID cards, holders, hooks, ultrasonic sealing and custom printed lanyards into one complete wearable identification solution.",
      },
      {
        q: "Does IDGen provide data collection?",
        a: "Yes. IDGen Studio supports digital data collection, photograph management, card preview and approval before printing.",
      },
    ],
  },
  closingCta: {
    eyebrow: "Start Your Project",
    title: "Ready to Build Your Identification System?",
    description:
      "Whether you need student ID cards, employee identification, RFID cards, event badges or complete wearable ID solutions, IDGen helps coordinate the entire workflow from data to dispatch.",
    note: {
      label: "Tell us your requirement:",
      text: "We'll help you choose the right products, accessories and workflow for your organization.",
    },
    ctaButtons: {
      primaryText: "Request a Quote",
      primaryHref: "/request-a-quote/",
      whatsappText: "WhatsApp IDGen",
      whatsappPhone: "919207012084",
      whatsappMessage:
        "Hi IDGen Team, I would like to request samples and pricing for our organization.",
      secondaryText: "Contact Our Team",
      secondaryHref: "/contact-us/",
    },
  },
  lastUpdated: "2026-09-09T16:40:00.000Z",
};
