export interface WhyIdgenMetadata {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
}

export interface WhyIdgenHero {
  badge: string;
  headingPrefix: string;
  headingHighlight: string;
  subheading: string;
  paragraphs: string[];
  approachPillLabel: string;
  approachPillAction: string;
  approachPillLink: string;
  quickPillLabel: string;
  quickPillValue: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  heroImage: string;
  floatingCardTag: string;
  floatingCardLocation: string;
  floatingCardTitle: string;
  floatingCardSubtitle: string;
}

export interface WhyIdgenExperience2014 {
  eyebrow: string;
  title: string;
  desc1: string;
  desc2: string;
  involvesTitle: string;
  involvesItems: string[];
  image: string;
  badgeYear: string;
  badgeYearLabel: string;
  badgeFootprint: string;
  badgeFootprintLabel: string;
}

export interface WhyIdgenRegionalState {
  name: string;
  capital: string;
  hub: string;
  transit: string;
  activeBadge?: string;
  keyInstitutions?: string;
}

export interface WhyIdgenRegional {
  eyebrow: string;
  title: string;
  subtitle: string;
  centralBaseCity: string;
  centralBaseState: string;
  centralBaseBadge: string;
  centralBaseDescription: string;
  centralBaseFeatures: string[];
  states: WhyIdgenRegionalState[];
}

export interface WhyIdgenMilestone {
  year: string;
  label: string;
  body: string;
  badge?: string;
  highlight?: boolean;
}

export interface WhyIdgenJourney {
  eyebrow: string;
  title: string;
  subtitle: string;
  milestones: WhyIdgenMilestone[];
}

export interface WhyIdgenSector {
  title: string;
  description: string;
  iconKey: string;
  tags: string[];
}

export interface WhyIdgenSectorsAndTrust {
  eyebrow: string;
  title: string;
  subtitle: string;
  sectors: WhyIdgenSector[];
  trustQuote: string;
  trustAuthor: string;
  trustEvidenceTags: string[];
}

export interface WhyIdgenPillarItem {
  id: string;
  iconType: "Target" | "Award" | "MapPin" | "Workflow" | "Layers" | "Zap" | "PackageCheck";
  title: string;
  body: string;
  img: string;
  badge: string;
}

export interface WhyIdgenPillars {
  eyebrow: string;
  title: string;
  subtitle: string;
  carouselItems: WhyIdgenPillarItem[];
}

export interface WhyIdgenDataSecurity {
  eyebrow: string;
  title: string;
  leadText: string;
  dataTypesTitle: string;
  dataTypes: string[];
  responsiblePracticesTitle: string;
  responsiblePractices: string[];
  studioCalloutTitle: string;
  studioCalloutBody: string;
  studioSteps: string[];
}

export interface WhyIdgenEcosystemProduct {
  step: string;
  title: string;
  description: string;
  image: string;
}

export interface WhyIdgenProjectConfig {
  label: string;
  flow: string[];
  colorTheme: string;
}

export interface WhyIdgenEcosystem {
  eyebrow: string;
  title: string;
  subtitle: string;
  products: WhyIdgenEcosystemProduct[];
  projectConfigurations: WhyIdgenProjectConfig[];
}

export interface WhyIdgenProductionStep {
  num: string;
  title: string;
  body: string;
  badge: string;
  img: string;
  iconType:
    | "ClipboardCheck"
    | "Database"
    | "LayoutGrid"
    | "Eye"
    | "CheckCircle"
    | "Printer"
    | "Wrench"
    | "Sliders"
    | "Truck";
}

export interface WhyIdgenQualityCheckpoint {
  title: string;
  body: string;
  iconKey: string;
}

export interface WhyIdgenProductionApproach {
  eyebrow: string;
  title: string;
  subtitle: string;
  steps: WhyIdgenProductionStep[];
  checkpointsTitle: string;
  checkpointsSubtitle: string;
  checkpoints: WhyIdgenQualityCheckpoint[];
  qualityErrors: string[];
}

export interface WhyIdgenInstitutionalScale {
  bulkEyebrow: string;
  bulkTitle: string;
  bulkSubtitle: string;
  bulkDisciplines: Array<{ title: string; body: string }>;
  diffEyebrow: string;
  diffTitle: string;
  diffItems: Array<{ num: string; title: string; body: string }>;
  capabilitiesEyebrow: string;
  capabilitiesTitle: string;
  capabilitiesLead: string;
  capabilitiesBody: string;
  commitmentsEyebrow: string;
  commitmentsTitle: string;
  commitments: Array<{ label: string; body: string }>;
  whoWeServeEyebrow: string;
  whoWeServeTitle: string;
  whoWeServeDesc: string;
  whoWeServeList: string[];
  futureEyebrow: string;
  futureTitle: string;
  futureLead: string;
  futureExpectations: string[];
  futureSummary: string;
}

export interface WhyIdgenFaqItem {
  q: string;
  a: string;
}

export interface WhyIdgenFaqs {
  eyebrow: string;
  title: string;
  items: WhyIdgenFaqItem[];
}

export interface WhyIdgenClosingCta {
  quoteEyebrow: string;
  quoteText: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaWorkflow: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  studioCtaText: string;
  studioCtaLink: string;
  contactCtaText: string;
  contactCtaLink: string;
  footerBrandTitle: string;
  footerBrandTagline: string;
  footerBrandSubtext: string;
}

export interface DynamicWhyIdgenData {
  lastUpdated?: string;
  metadata: WhyIdgenMetadata;
  hero: WhyIdgenHero;
  experience2014: WhyIdgenExperience2014;
  regional: WhyIdgenRegional;
  journey: WhyIdgenJourney;
  sectorsAndTrust: WhyIdgenSectorsAndTrust;
  pillars: WhyIdgenPillars;
  dataSecurity: WhyIdgenDataSecurity;
  ecosystem: WhyIdgenEcosystem;
  productionApproach: WhyIdgenProductionApproach;
  institutionalScale: WhyIdgenInstitutionalScale;
  faqs: WhyIdgenFaqs;
  closingCta: WhyIdgenClosingCta;
}

export const DEFAULT_WHY_IDGEN_DATA: DynamicWhyIdgenData = {
  metadata: {
    metaTitle: "Why Choose IDGen | ID Card Printing Experience Since 2014",
    metaDescription:
      "Discover IDGen, a Guwahati-based identity solutions company built on ID card printing experience since 2014, serving organizations across Assam and Northeast India.",
    metaKeywords: [
      "Why Choose IDGen",
      "Guwahati ID Card Factory",
      "ID Card Manufacturer Northeast India",
      "Bulk ID Card Printing Assam",
      "Custom Lanyards Guwahati",
      "IDGen Studio Workflow",
    ],
  },
  hero: {
    badge: "IDENTITY SOLUTIONS SIMPLIFIED | Guwahati, Assam",
    headingPrefix: "Why Choose ",
    headingHighlight: "IDGen?",
    subheading: "Built on Identification Experience Dating Back to 2014",
    paragraphs: [
      "IDGen is a Guwahati-based identity solutions company serving organizations across Assam and the wider Northeast India market.",
      "Our experience in ID card printing, identification products and organizational supply dates back to 2014. Over the years, we have worked with customers and organizations across Northeast India, gaining practical experience in personalized ID cards, bulk requirements, identification accessories and organizational supply.",
      "IDGen is the next stage of that experience — a dedicated identity-solutions brand focused on bringing products, digital workflows and production together into a more organized identification system.",
    ],
    approachPillLabel: "OUR APPROACH IS:",
    approachPillAction: "9-Step Precision Flow",
    approachPillLink: "#production-approach",
    quickPillLabel: "FAST TURNAROUND:",
    quickPillValue: "24–48h Dispatch Ready",
    primaryCtaText: "Request an Institutional Quote",
    primaryCtaLink: "/contact/",
    secondaryCtaText: "Explore Products",
    secondaryCtaLink: "/products/",
    heroImage: "/images/why-idgen-hero-branded.jpg",
    floatingCardTag: "IDGen Identity Solutions",
    floatingCardLocation: "Guwahati Hub",
    floatingCardTitle: "Direct ID Card & Lanyard Factory",
    floatingCardSubtitle: "Serving all 8 Northeast States",
  },
  experience2014: {
    eyebrow: "A DECADE OF EXPERIENCE",
    title: "More Than a New Brand: Identification Experience Since 2014",
    desc1:
      "While the IDGen brand represents our current identity solutions identity, the experience behind our work dates back to 2014.",
    desc2:
      "Over more than a decade, we have worked with educational institutions, businesses, government departments and events across Assam and Northeast India — handling everything from single-batch requirements to high-volume identity rollouts.",
    involvesTitle: "Every Identification Project Involves:",
    involvesItems: [
      "Personal information",
      "Photographs",
      "Card design",
      "Personalization",
      "Large quantities",
      "Data checking",
      "Product specifications",
      "Accessories",
      "Approval",
      "Production",
      "Assembly",
      "Quality checking",
      "Packaging",
      "Dispatch",
    ],
    image: "/images/why-idgen-more-than-brand.jpg",
    badgeYear: "2014",
    badgeYearLabel: "Experience Began",
    badgeFootprint: "8 States",
    badgeFootprintLabel: "Northeast Coverage",
  },
  regional: {
    eyebrow: "REGIONAL FOOTPRINT",
    title: "Serving Organizations Across Assam & Northeast India",
    subtitle: "We understand the logistical and practical realities of supplying organizations across the region.",
    centralBaseCity: "Guwahati",
    centralBaseState: "Assam",
    centralBaseBadge: "Regional Production & Dispatch Hub",
    centralBaseDescription:
      "Centrally positioned in Guwahati to coordinate identity card manufacturing, personalized lanyards, and accessory assembly with rapid surface and air transit across all 8 Northeastern states.",
    centralBaseFeatures: [
      "Direct factory dispatch with 24–48h priority batches",
      "Dedicated regional customer support desk",
      "All state transport & courier hub connectivity",
    ],
    states: [
      {
        name: "Assam",
        capital: "Dispur / Guwahati",
        hub: "Central Hub",
        transit: "Same Day – 24h",
        activeBadge: "Headquarters & Primary Production Hub",
        keyInstitutions: "Universities, Government Secretariats, Major Hospitals",
      },
      {
        name: "Arunachal Pradesh",
        capital: "Itanagar",
        hub: "Direct Surface / Air",
        transit: "24 – 48h",
        activeBadge: "Active Dispatch",
        keyInstitutions: "State Colleges, Engineering Institutes, Admin Offices",
      },
      {
        name: "Meghalaya",
        capital: "Shillong",
        hub: "Guwahati Corridor",
        transit: "24h Priority Transit",
        activeBadge: "Active Dispatch",
        keyInstitutions: "Central Universities, Boarding Schools, Tourism Boards",
      },
      {
        name: "Nagaland",
        capital: "Kohima / Dimapur",
        hub: "Direct Rail / Air",
        transit: "24 – 48h",
        activeBadge: "Active Dispatch",
        keyInstitutions: "Higher Education Institutions, Government Directorates",
      },
      {
        name: "Manipur",
        capital: "Imphal",
        hub: "Air Priority Express",
        transit: "24 – 48h",
        activeBadge: "Active Dispatch",
        keyInstitutions: "Medical Colleges, State Departments, Security Units",
      },
      {
        name: "Mizoram",
        capital: "Aizawl",
        hub: "Direct Air Cargo",
        transit: "24 – 48h",
        activeBadge: "Active Dispatch",
        keyInstitutions: "Universities, Autonomous Councils, Health Centers",
      },
      {
        name: "Tripura",
        capital: "Agartala",
        hub: "Air Express Cargo",
        transit: "24 – 48h",
        activeBadge: "Active Dispatch",
        keyInstitutions: "Technical Institutes, Municipal Corporations",
      },
      {
        name: "Sikkim",
        capital: "Gangtok",
        hub: "Siliguri / Pakyong",
        transit: "48h Transit",
        activeBadge: "Active Dispatch",
        keyInstitutions: "Private Universities, Hospitality & Tourism Groups",
      },
    ],
  },
  journey: {
    eyebrow: "EVOLUTION & MILESTONES",
    title: "Our Journey",
    subtitle: "From 2014 to today, a continuous commitment to identification excellence.",
    milestones: [
      {
        year: "2014",
        label: "Identification Experience Begins",
        body: "Our journey in ID card printing and identification-product supply begins in Guwahati.",
        badge: "Foundational Era",
      },
      {
        year: "2014–2025",
        label: "Regional Experience Expansion",
        body: "Identification products are supplied to customers, universities, and organizations across all 8 Northeast states.",
        badge: "10+ Years Scale",
      },
      {
        year: "2026",
        label: "IDGen Identity Solutions Launch",
        body: "The collective manufacturing and design experience is united under IDGen — a dedicated modern identity brand.",
        badge: "Dedicated Brand",
        highlight: true,
      },
      {
        year: "Today",
        label: "Products + Digital Workflow + Production",
        body: "IDGen combines high-speed card manufacturing, custom lanyards, and IDGen Studio digital workflows into one coordinated system.",
        badge: "Full Ecosystem",
      },
    ],
  },
  sectorsAndTrust: {
    eyebrow: "WHO WE SERVE",
    title: "Organizations Served & Operational Reach",
    subtitle: "Trusted by educational, corporate, healthcare, government, and event organizations across Northeast India.",
    sectors: [
      {
        title: "Schools & Universities",
        description:
          "Student ID cards, RFID attendance badges, faculty credentials, color-coded house lanyards, and student verification portals.",
        iconKey: "GraduationCap",
        tags: ["Student IDs", "Smart Cards", "School Lanyards", "Session Batches"],
      },
      {
        title: "Companies & Corporate",
        description:
          "High-definition employee credentials, contactless RFID access cards, magnetic stripe cards, and branded satin lanyards.",
        iconKey: "Building2",
        tags: ["Staff Badges", "RFID Access", "Custom Lanyards", "Multi-Branch"],
      },
      {
        title: "Hospitals & Healthcare",
        description:
          "Doctor, nurse, and medical staff IDs, visitor badges, antimicrobial holders, and color-coded emergency access credentials.",
        iconKey: "HeartPulse",
        tags: ["Medical Badges", "Visitor Passes", "Hospital Staff", "Emergency Access"],
      },
      {
        title: "Government & Public Sector",
        description:
          "High-security PVC cards with holographic overlays, micro-text, QR codes, and tamper-resistant serial numbering.",
        iconKey: "ShieldCheck",
        tags: ["Official Passes", "Hologram Cards", "Security Barcodes", "Department IDs"],
      },
      {
        title: "Events & Membership",
        description:
          "Delegate passes, VIP access credentials, event press tags, custom printed satin lanyards, and event day badges.",
        iconKey: "Users",
        tags: ["Delegate Badges", "VIP Passes", "Custom Wristbands", "Fast Turnaround"],
      },
    ],
    trustQuote:
      "Trust is built on real work, verifiable quality, and reliable execution — not unverified claims.",
    trustAuthor: "IDGen Institutional Principle",
    trustEvidenceTags: [
      "Customer logos",
      "Customer testimonials",
      "Completed project photographs",
      "Real ID card batches",
      "Organization names, where permitted",
      "Case studies",
      "Years of experience",
      "Geographic coverage",
    ],
  },
  pillars: {
    eyebrow: "CORE PILLARS",
    title: "Why Choose IDGen?",
    subtitle: "What sets our identity solutions apart: specialized focus, a decade of experience, regional presence, and integrated workflows.",
    carouselItems: [
      {
        id: "identity-focused",
        iconType: "Target",
        title: "Identity-Focused",
        body: "IDGen is focused specifically on identification products and identification workflows.",
        img: "/images/why-idgen-cards-showcase-branded.jpg",
        badge: "Specialized Focus",
      },
      {
        id: "experience-2014",
        iconType: "Award",
        title: "Experience Since 2014",
        body: "Our identification-product experience dates back to 2014, giving us more than a decade of practical experience in this field.",
        img: "/images/why-idgen-more-than-brand.jpg",
        badge: "10+ Years Experience",
      },
      {
        id: "northeast-experience",
        iconType: "MapPin",
        title: "Northeast India Experience",
        body: "We have experience supplying identification products to customers across the Northeast India market.",
        img: "/images/why-idgen-hero-branded.jpg",
        badge: "Regional Footprint",
      },
      {
        id: "structured-workflow",
        iconType: "Workflow",
        title: "Structured Workflow",
        body: "Projects can follow a defined process from requirement through dispatch.",
        img: "/images/why-idgen-production-batches-branded.jpg",
        badge: "Precision Process",
      },
      {
        id: "digital-physical",
        iconType: "Layers",
        title: "Digital + Physical Workflow",
        body: "IDGen Studio connects digital data collection and approval with physical identification production.",
        img: "/images/why-idgen-studio-workflow-branded.jpg",
        badge: "IDGen Studio",
      },
      {
        id: "bulk-capability",
        iconType: "Zap",
        title: "Bulk Capability",
        body: "Our production operation supports institutional and high-volume requirements.",
        img: "/images/product-pvc-cards.jpg",
        badge: "Institutional Capacity",
      },
      {
        id: "complete-ecosystem",
        iconType: "PackageCheck",
        title: "Complete Identification Ecosystem",
        body: "Organizations can coordinate the relevant identification products and accessories required for their application.",
        img: "/images/why-idgen-complete-ecosystem-branded.jpg",
        badge: "Coordinated Ecosystem",
      },
    ],
  },
  dataSecurity: {
    eyebrow: "DATA SECURITY & TRUST",
    title: "Data Confidentiality & Responsible Handling",
    leadText:
      "Identification projects inherently require student, employee and organizational data. IDGen treats customer-provided information as confidential project material.",
    dataTypesTitle: "Information Typically Handled in Identity Projects:",
    dataTypes: [
      "Student names",
      "Employee names",
      "Photographs",
      "Student or employee ID numbers",
      "Classes",
      "Courses",
      "Departments",
      "Designations",
      "Organization information",
      "QR-code information",
      "Barcode information",
      "Other personalization details required for the ID card",
    ],
    responsiblePracticesTitle: "Our Responsible Data Handling Principles:",
    responsiblePractices: [
      "Share only information required for the project",
      "Use authorized personnel for data submission and approval",
      "Review information before production",
      "Avoid unnecessary personal information",
      "Maintain appropriate access controls within their organization",
      "Follow their applicable privacy and data-handling policies",
    ],
    studioCalloutTitle: "IDGen Studio Digital Flow",
    studioCalloutBody:
      "For institutions that want to eliminate loose spreadsheets and scattered WhatsApp photo collections, IDGen Studio provides secure digital collection, student self-verification, and controlled administrative signoff.",
    studioSteps: [
      "Customized Form",
      "Link / QR Code",
      "Student / Parent Fills Form",
      "ID Card Live Preview",
      "Admin Approval Dashboard",
      "Batch Printing & Quality Check",
    ],
  },
  ecosystem: {
    eyebrow: "UNIFIED SOURCING",
    title: "One Identity Partner for Connected Products",
    subtitle:
      "No more sourcing cards from one vendor, lanyards from another, and clips from a third. IDGen delivers the entire identity assembly.",
    products: [
      {
        step: "01",
        title: "ID Cards",
        description: "HD PVC, thermal transfer, RFID contactless, and smart chip credentials with zero-peel lamination.",
        image: "/images/product-pvc-cards.jpg",
      },
      {
        step: "02",
        title: "ID Card Holders",
        description: "Rigid plastic, flexible vinyl, silicone, and dual-card holders engineered for maximum durability.",
        image: "/images/hero-slide-modular-assembly.jpg",
      },
      {
        step: "03",
        title: "Attachments & Hooks",
        description: "Dog hooks, fish hooks, heavy-duty crocodile clips, and retractable badge reels matched to your requirements.",
        image: "/images/why-idgen-complete-ecosystem-branded.jpg",
      },
      {
        step: "04",
        title: "Custom Printed Lanyards",
        description: "High-density satin, multi-color sublimation, tubular, and reflective ribbons with safety breakaway releases.",
        image: "/images/product-lanyards.jpg",
      },
    ],
    projectConfigurations: [
      {
        label: "A school may need:",
        flow: ["Student ID Card", "Custom School Lanyard", "Rigid Holder"],
        colorTheme: "blue",
      },
      {
        label: "An employee project may need:",
        flow: ["Employee RFID Card", "Branded Satin Lanyard", "Retractable Reel"],
        colorTheme: "emerald",
      },
      {
        label: "An event may need:",
        flow: ["Large Event Pass", "Quick-Release Hook", "Event Lanyard"],
        colorTheme: "purple",
      },
      {
        label: "A hospital project may need:",
        flow: ["Color-Coded Medical ID", "Antimicrobial Holder", "Safety Breakaway Lanyard"],
        colorTheme: "amber",
      },
    ],
  },
  productionApproach: {
    eyebrow: "9-STEP PRECISION FLOW",
    title: "Our Production Approach",
    subtitle: "From initial requirement scoping to quality checking and multi-state dispatch.",
    steps: [
      {
        num: "01",
        title: "Requirement",
        body: "We understand the required: Product, Quantity, Specifications, Personalization, Accessories, Delivery requirements.",
        badge: "Step 1 • Requirements",
        img: "/images/why-idgen-cards-showcase-branded.jpg",
        iconType: "ClipboardCheck",
      },
      {
        num: "02",
        title: "Data",
        body: "For personalized projects, the required information and photographs are prepared. Where appropriate, IDGen Studio can support digital data collection and organization.",
        badge: "Step 2 • Data Setup",
        img: "/images/idgen-studio-id-card-data-collection.jpg",
        iconType: "Database",
      },
      {
        num: "03",
        title: "Design",
        body: "Artwork and personalization are prepared according to the project requirements.",
        badge: "Step 3 • Card Design",
        img: "/images/hero-slide-corporate-id.jpg",
        iconType: "LayoutGrid",
      },
      {
        num: "04",
        title: "Preview",
        body: "Where applicable, the customer or organization can review standard digital previews before production.",
        badge: "Step 4 • Digital Review",
        img: "/images/why-idgen-studio-workflow-branded.jpg",
        iconType: "Eye",
      },
      {
        num: "05",
        title: "Approval",
        body: "Approved information and specifications are released for production.",
        badge: "Step 5 • Final Signoff",
        img: "/images/hero-slide-student-id.jpg",
        iconType: "CheckCircle",
      },
      {
        num: "06",
        title: "Production",
        body: "The project moves into production according to the agreed specification.",
        badge: "Step 6 • High-Speed Print",
        img: "/images/product-pvc-cards.jpg",
        iconType: "Printer",
      },
      {
        num: "07",
        title: "Accessories",
        body: "Lanyards, card holders, hooks and related identification accessories are matched with the order.",
        badge: "Step 7 • Accessories",
        img: "/images/hero-slide-modular-assembly.jpg",
        iconType: "Wrench",
      },
      {
        num: "08",
        title: "Quality Check",
        body: "Completed products undergo quality inspection before dispatch.",
        badge: "Step 8 • Inspection",
        img: "/images/why-idgen-more-than-brand.jpg",
        iconType: "Sliders",
      },
      {
        num: "09",
        title: "Dispatch",
        body: "Orders are packed and dispatched for delivery across Assam and Northeast India.",
        badge: "Step 9 • Delivery",
        img: "/images/why-idgen-hero-showcase.jpg",
        iconType: "Truck",
      },
    ],
    checkpointsTitle: "6 Multi-Stage Quality Checkpoints",
    checkpointsSubtitle: "Catching and correcting discrepancies before products ever reach your hands.",
    checkpoints: [
      {
        title: "Design Check",
        body: "Artwork is checked against the approved requirements.",
        iconKey: "LayoutGrid",
      },
      {
        title: "Data Check",
        body: "Personalized information is processed according to the supplied or approved data.",
        iconKey: "Database",
      },
      {
        title: "Specification Check",
        body: "Product specifications and required components are checked against the order.",
        iconKey: "ClipboardCheck",
      },
      {
        title: "Production Check",
        body: "Completed products are checked during the production workflow.",
        iconKey: "Printer",
      },
      {
        title: "Assembly Check",
        body: "Where applicable, the required combination of components is checked.",
        iconKey: "Wrench",
      },
      {
        title: "Final Check",
        body: "Completed materials are checked before dispatch. Our objective is to identify avoidable errors before the finished products reach the customer.",
        iconKey: "PackageCheck",
      },
    ],
    qualityErrors: [
      "The name is incorrect",
      "The photograph is mismatched",
      "The ID number is wrong",
      "The department is incorrect",
      "The designation is incorrect",
      "Required information is missing",
      "The wrong specification is used",
      "The required accessory is missing",
    ],
  },
  institutionalScale: {
    bulkEyebrow: "INSTITUTIONAL SCALE",
    bulkTitle: "Bulk Capability & Organizational Readiness",
    bulkSubtitle: "Managing high-volume projects with strict data discipline and repeatable accuracy.",
    bulkDisciplines: [
      {
        title: "Data Management",
        body: "Hundreds or thousands of personalized records.",
      },
      {
        title: "Photograph Management",
        body: "Matching photographs with the correct individuals.",
      },
      {
        title: "Design Coordination",
        body: "Maintaining consistent organizational branding.",
      },
      {
        title: "Approval",
        body: "Ensuring the organization approves information before production.",
      },
      {
        title: "Production",
        body: "Managing large quantities according to the required specifications.",
      },
      {
        title: "Accessories",
        body: "Matching cards with the appropriate holder, hook and lanyard configuration.",
      },
      {
        title: "Quality",
        body: "Checking completed products against requirements.",
      },
      {
        title: "Dispatch",
        body: "Preparing finished products for delivery.",
      },
    ],
    diffEyebrow: "THE IDGEN ADVANTAGE",
    diffTitle: "What Makes IDGen Different?",
    diffItems: [
      {
        num: "01",
        title: "Identification Experience",
        body: "Experience dating back to 2014 in identification supply across Northeast India.",
      },
      {
        num: "02",
        title: "Digital Workflow",
        body: "IDGen Studio connects online data collection, verification, and print queues seamlessly.",
      },
      {
        num: "03",
        title: "Physical Production",
        body: "Direct factory production covering Cards + Accessories + Customization + Assembly.",
      },
    ],
    capabilitiesEyebrow: "HONEST ABOUT OUR CAPABILITIES",
    capabilitiesTitle: "Trust Requires Accurate Claims",
    capabilitiesLead: "IDGen does not describe every product as being manufactured 100% in-house.",
    capabilitiesBody:
      "Production methods can vary depending on the product and project. Our role is to manage the required identity-product customization, production workflow, assembly and quality requirements according to the agreed specification. This allows us to communicate our capabilities accurately and transparently.",
    commitmentsEyebrow: "OUR COMMITMENT",
    commitmentsTitle: "What We Hold Ourselves To",
    commitments: [
      {
        label: "Clear",
        body: "Customers should understand what they are ordering.",
      },
      {
        label: "Organized",
        body: "Large projects should follow a structured workflow.",
      },
      {
        label: "Reviewable",
        body: "Important information should be reviewed before production where applicable.",
      },
      {
        label: "Accurate",
        body: "Products should follow approved information and specifications.",
      },
      {
        label: "Scalable",
        body: "The workflow should support organizational and bulk requirements.",
      },
      {
        label: "Practical",
        body: "The solution should match the actual application.",
      },
      {
        label: "Confidential",
        body: "Customer-provided identification information should be treated as confidential project information.",
      },
      {
        label: "Transparent",
        body: "Capabilities and timelines should be communicated realistically.",
      },
    ],
    whoWeServeEyebrow: "WHO WE SERVE",
    whoWeServeTitle: "Identification Solutions for Organizations",
    whoWeServeDesc: "IDGen provides identification solutions for organizations including:",
    whoWeServeList: [
      "Schools",
      "Colleges",
      "Universities",
      "Companies",
      "Corporate offices",
      "Hospitals",
      "Industries",
      "Government organizations",
      "NGOs",
      "Institutions",
      "Clubs",
      "Associations",
      "Events",
      "Membership organizations",
    ],
    futureEyebrow: "THE FUTURE",
    futureTitle: "Building IDGen for the Future",
    futureLead: "Identification is changing. Organizations increasingly expect:",
    futureExpectations: [
      "Digital data collection",
      "Online workflows",
      "Faster approvals",
      "Better data organization",
      "ID card preview",
      "Batch-wise production",
      "Faster distribution",
      "Integrated identification products",
    ],
    futureSummary:
      "IDGen is building its systems around these changing requirements. The objective is not simply to print more cards. It is to make the entire identification process easier to manage.",
  },
  faqs: {
    eyebrow: "FAQ",
    title: "Frequently Asked Questions",
    items: [
      {
        q: "What is IDGen?",
        a: "IDGen is a Guwahati-based identity solutions company providing identification products, customization and related digital and production workflows for organizations.",
      },
      {
        q: "How long has IDGen been in the ID card business?",
        a: "The identification-product experience behind IDGen dates back to 2014. IDGen is the newer identity-focused brand built on that experience.",
      },
      {
        q: "Has IDGen served customers across Northeast India?",
        a: "Yes. Our identification-product business has experience supplying customers and organizations across the Northeast India market.",
      },
      {
        q: "Where is IDGen based?",
        a: "IDGen is based in Guwahati, Assam, India.",
      },
      {
        q: "What does IDGen provide?",
        a: "IDGen provides identification products and services including ID card printing, student and employee identification, event cards, RFID cards, custom printed lanyards, holders, hooks, ultrasonic sealing and related workflows. Detailed product information is available on the relevant service pages.",
      },
      {
        q: "Can IDGen handle bulk orders?",
        a: "Yes. IDGen supports organizational and high-volume identification requirements. Actual capacity depends on the product and project specifications.",
      },
      {
        q: "Does IDGen provide digital data collection?",
        a: "Yes. IDGen Studio provides a digital workflow for suitable projects, including customized forms, link and QR-code sharing, data collection, ID card preview, organization review and approval.",
      },
      {
        q: "Can ID cards be printed batch-wise?",
        a: "Yes. Suitable IDGen Studio projects can release approved records for batch-wise production.",
      },
      {
        q: "How does IDGen handle student and employee data?",
        a: "IDGen treats customer-provided identification information as confidential project information and uses it for the agreed identification-related purpose. Organizations should provide only the information required for their project and follow their applicable privacy and data-handling policies.",
      },
      {
        q: "Does IDGen manufacture every product in-house?",
        a: "No blanket in-house manufacturing claim is made for every product. Production methods vary by product and project. IDGen manages the required customization, production workflow, assembly and quality requirements according to the agreed specification.",
      },
      {
        q: "What areas does IDGen serve?",
        a: "IDGen is based in Guwahati and serves organizations across Assam and the wider Northeast India market.",
      },
    ],
  },
  closingCta: {
    quoteEyebrow: "IDGen in One Sentence",
    quoteText:
      "IDGen is an identity-solutions brand built on identification experience dating back to 2014, helping organizations across Northeast India manage personalized identification through products, digital workflows and structured production—with responsible handling of customer-provided identification data.",
    ctaEyebrow: "Need an Identity Solution?",
    ctaTitle: "Tell Us What Your Organization Needs",
    ctaSubtitle:
      "Whether you require student identification, employee cards, event badges, RFID cards, custom lanyards or a complete identification project, IDGen can help you determine the appropriate products and workflow.",
    ctaWorkflow:
      "Requirement → Data → Design → Preview → Approval → Production → Quality Check → Dispatch",
    primaryCtaText: "Request a Quote",
    primaryCtaLink: "/request-a-quote/",
    secondaryCtaText: "Explore Services",
    secondaryCtaLink: "/services/",
    studioCtaText: "Explore IDGen Studio",
    studioCtaLink: "/idgen-studio/",
    contactCtaText: "Contact IDGen",
    contactCtaLink: "/contact-us/",
    footerBrandTitle: "IDGen — Identity Solutions Simplified",
    footerBrandTagline: "Built on Identification Experience Since 2014",
    footerBrandSubtext:
      "Experience + Technology + Products + Production • Serving Organizations Across Northeast India",
  },
};
