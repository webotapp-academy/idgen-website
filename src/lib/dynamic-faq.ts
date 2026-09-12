import fs from "fs";
import path from "path";
import type { DynamicFaqData } from "./dynamic-faq-types";

const DATA_FILE = path.join(process.cwd(), "src", "data", "dynamic-faq.json");

export const DEFAULT_FAQ_DATA: DynamicFaqData = {
  meta: {
    title: "Frequently Asked Questions About IDGen | IDGen",
    description:
      "Find fast, transparent answers regarding customized ID card printing, student & employee badging, wearable lanyards, RFID systems, reference pricing, and regional delivery across Northeast India.",
    path: "/faq/",
  },
  hero: {
    badgePrefix: "Knowledge Base & Support",
    badgeHighlight: "25+ Verified Answers",
    titlePrefix: "Frequently Asked Questions ",
    titleHighlight: "About IDGen",
    description:
      "Find fast, transparent answers regarding customized ID card printing, student & employee badging, wearable lanyards, RFID systems, reference pricing, and regional delivery across Northeast India.",
    featureCards: [
      {
        title: "10 Categories",
        subtitle: "Complete knowledge base",
        iconName: "HelpCircle",
      },
      {
        title: "Transparent",
        subtitle: "Reference rates listed",
        iconName: "Calculator",
      },
      {
        title: "Guwahati HQ",
        subtitle: "All 8 NE states served",
        iconName: "MapPin",
      },
      {
        title: "Confidential",
        subtitle: "Secure record handling",
        iconName: "Lock",
      },
    ],
    primaryCta: {
      label: "Search All Questions",
      href: "#faq-explorer",
    },
    secondaryCta: {
      label: "Request a Quote",
      href: "/request-a-quote/",
    },
    tertiaryCta: {
      label: "Contact Helpdesk",
      href: "/contact-us/",
    },
    trustBadges: [
      "Factory Direct Pricing",
      "100% Confidential Data",
      "72-Hour Express Dispatch",
    ],
  },
  heroShowcase: {
    badge: "25+ Answers",
    pillars: [
      {
        id: "pricing",
        tabLabel: "Pricing",
        tabSub: "Reference Rates",
        guidePill: "Pricing FAQ",
        headerSubtitle: "Transparent Reference Rates",
        cardTitle: "How much does an ID card cost?",
        cardSubtitle: "Transparent factory reference pricing",
        cardBadge: "Direct Rates",
        cardIcon: "Calculator",
        themeStyle: "pricing",
        pricingItems: [
          { label: "Single-Side PVC", value: "₹15", unit: "/ card" },
          { label: "Double-Side PVC", value: "₹16", unit: "/ card" },
          { label: "20mm Custom Lanyard", value: "₹15", unit: "/ pc", color: "text-[#009fe3]" },
          { label: "RFID Smart Card", value: "₹45", unit: "/ card", color: "text-purple-600 dark:text-purple-400" },
        ],
        footerLinkText: "Explore Reference Pricing",
        footerLinkHref: "/pricing/",
      },
      {
        id: "studio",
        tabLabel: "IDGen Studio",
        tabSub: "Digital Flow",
        guidePill: "IDGen Studio FAQ",
        headerSubtitle: "Digital Identity Workflow",
        cardTitle: "What is IDGen Studio?",
        cardSubtitle: "Digital Data Collection & Instant Proofing",
        cardBadge: "Digital Flow",
        cardIcon: "QrCode",
        themeStyle: "studio",
        items: [
          "Customized forms & shareable QR links",
          "Direct student/employee record collection",
          "Live digital card layout preview",
          "Organization approval before batch print",
        ],
        footerLinkText: "Explore IDGen Studio",
        footerLinkHref: "/idgen-studio/",
      },
      {
        id: "coverage",
        tabLabel: "Coverage",
        tabSub: "Guwahati & NE",
        guidePill: "Service Area FAQ",
        headerSubtitle: "Guwahati HQ & Northeast",
        cardTitle: "Where is IDGen based?",
        cardSubtitle: "Guwahati HQ • All 8 Northeast States",
        cardBadge: "Regional Hub",
        cardIcon: "MapPin",
        themeStyle: "coverage",
        items: [
          "Assam (Guwahati Hub)",
          "Arunachal Pradesh",
          "Meghalaya (Shillong)",
          "Manipur (Imphal)",
          "Nagaland (Kohima)",
          "Tripura, Mizoram, Sikkim",
        ],
        footerLinkText: "Explore Service Areas",
        footerLinkHref: "/service-areas/assam/",
      },
      {
        id: "security",
        tabLabel: "Security",
        tabSub: "Data Privacy",
        guidePill: "Data & Privacy FAQ",
        headerSubtitle: "Confidential Handling",
        cardTitle: "Confidential Data Handling",
        cardSubtitle: "Institutional Privacy Assurance",
        cardBadge: "Confidential",
        cardIcon: "Lock",
        themeStyle: "security",
        items: [
          "Strictly used for agreed ID production",
          "Biometric photograph confidentiality",
          "Secure digital transmission pipelines",
          "Zero unauthorized data sharing",
        ],
        footerLinkText: "Privacy Policy & Terms",
        footerLinkHref: "/privacy-policy/",
      },
    ],
    quickSpecs: [
      {
        label: "Categories",
        value: "10 FAQ Sectors",
      },
      {
        label: "Answers",
        value: "25+ Clarifications",
        accentClass: "text-[#009fe3] dark:text-cyan-400",
      },
      {
        label: "Support",
        value: "Guwahati Helpdesk",
        accentClass: "text-emerald-600 dark:text-emerald-400",
      },
    ],
  },
  topicMatrix: {
    eyebrow: "Topic Highlights",
    title: "Explore Questions by Topic",
    lede: "Quickly navigate to answers covering pricing, digital data collection, wearable hardware, and technical compatibility.",
    badgeText: "6 Core Knowledge Areas",
    topics: [
      {
        category: "General",
        title: "Capabilities & Northeast Reach",
        desc: "IDGen provides customized ID cards, lanyards, RFID cards, event badges and digital workflows from our Guwahati, Assam hub.",
        iconName: "Boxes",
        gradient: "from-sky-500/10 via-blue-500/5 to-transparent",
        accentColor: "text-[#009fe3]",
        linkText: "View General FAQs",
        targetCategory: "General",
      },
      {
        category: "ID Cards",
        title: "Cards & Complete Setups",
        desc: "Order single cards or complete wearable sets with protective holders, hooks, custom printed lanyards, and ultrasonic sealing.",
        iconName: "Layers",
        gradient: "from-cyan-500/10 via-sky-500/5 to-transparent",
        accentColor: "text-cyan-500",
        linkText: "View ID Card FAQs",
        targetCategory: "ID Cards",
      },
      {
        category: "IDGen Studio",
        title: "Digital Data Collection",
        desc: "Collect student or employee records via online forms and shareable QR links with live digital card previews before printing.",
        iconName: "QrCode",
        gradient: "from-purple-500/10 via-indigo-500/5 to-transparent",
        accentColor: "text-purple-500",
        linkText: "View Studio FAQs",
        targetCategory: "IDGen Studio",
      },
      {
        category: "Pricing",
        title: "Transparent Reference Pricing",
        desc: "Reference rates: ₹15 single-side PVC, ₹16 double-side PVC, ₹15 custom 20mm lanyard, ₹35 event card, and ₹45 RFID card.",
        iconName: "Calculator",
        gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
        accentColor: "text-emerald-500",
        linkText: "View Pricing FAQs",
        targetCategory: "Pricing",
      },
      {
        category: "RFID",
        title: "RFID Chip Compatibility",
        desc: "RFID cards are manufactured according to your required frequency, chip model, and reader/system compatibility specifications.",
        iconName: "Radio",
        gradient: "from-indigo-500/10 via-blue-500/5 to-transparent",
        accentColor: "text-indigo-500",
        linkText: "View RFID FAQs",
        targetCategory: "RFID",
      },
      {
        category: "Data & Privacy",
        title: "Confidential Data Security",
        desc: "All customer-provided identification information, photographs, and records are treated as strictly confidential project data.",
        iconName: "Lock",
        gradient: "from-rose-500/10 via-orange-500/5 to-transparent",
        accentColor: "text-rose-500",
        linkText: "View Privacy FAQs",
        targetCategory: "Data & Confidentiality",
      },
    ],
  },
  explorerMatrix: {
    eyebrow: "Interactive Knowledge Base",
    title: "Frequently Asked Questions",
    lede: "Search or filter through verified answers covering factory production, digital workflows, wearable hardware, and regional fulfillment.",
    categories: [
      {
        name: "General",
        badge: "Company & Capabilities",
        relatedHref: "/why-idgen/",
        relatedLabel: "Why IDGen",
        faqs: [
          {
            q: "What does IDGen do?",
            a: "IDGen provides customized ID cards, printed lanyards, RFID cards, event badges, ID card accessories and digital identity workflows for organizations.",
          },
          {
            q: "Where is IDGen based?",
            a: "IDGen is based in Guwahati, Assam and serves organizations across Assam and the wider Northeast India market.",
          },
          {
            q: "Does IDGen handle bulk ID card printing?",
            a: "Yes. IDGen supports institutional and high-volume identification requirements, with actual capacity depending on product and project specifications.",
          },
        ],
      },
      {
        name: "ID Cards",
        badge: "Card Products & Formats",
        relatedHref: "/id-card-printing/",
        relatedLabel: "Explore ID Card Printing",
        faqs: [
          {
            q: "Can I order only ID cards?",
            a: "Yes. ID cards can be ordered without accessories where required.",
          },
          {
            q: "Can I order a complete ID card setup?",
            a: "Yes. Depending on the requirement, a setup can include an ID card, holder, hook, custom printed lanyard and applicable ultrasonic sealing.",
          },
          {
            q: "Can ID cards contain QR codes?",
            a: "Yes, where required. The actual function of a QR code depends on the supporting system or application.",
          },
          {
            q: "Can ID cards contain barcodes?",
            a: "Yes. Barcodes can be included according to the identification requirement.",
          },
        ],
      },
      {
        name: "Student ID Cards",
        badge: "Educational Institutions",
        relatedHref: "/student-id-card-printing/",
        relatedLabel: "Explore Student ID Cards",
        faqs: [
          {
            q: "Does IDGen print student ID cards?",
            a: "Yes. IDGen provides customized student ID cards for schools, colleges, universities and educational organizations.",
          },
          {
            q: "Can student ID cards be ordered in bulk?",
            a: "Yes. Institutional and high-volume student ID card projects are supported.",
          },
        ],
      },
      {
        name: "Employee ID Cards",
        badge: "Corporate & Staff",
        relatedHref: "/employee-id-card-printing/",
        relatedLabel: "Explore Employee ID Cards",
        faqs: [
          {
            q: "Does IDGen print employee ID cards?",
            a: "Yes. IDGen provides customized employee and staff identification for companies, offices, hospitals, industries and institutions.",
          },
        ],
      },
      {
        name: "Lanyards & Accessories",
        badge: "Wearable Hardware",
        relatedHref: "/custom-printed-lanyard-printing/",
        relatedLabel: "Explore Custom Lanyards",
        faqs: [
          {
            q: "Does IDGen provide custom printed lanyards?",
            a: "Yes. Custom printed lanyards can be supplied as part of an identification setup.",
          },
          {
            q: "Can I order holders separately?",
            a: "Yes. ID card holders can be supplied separately or combined with other identification products.",
          },
          {
            q: "Can I order hooks separately?",
            a: "Yes. ID card hooks and suitable attachments can be supplied according to the required configuration.",
          },
        ],
      },
      {
        name: "RFID",
        badge: "Smart Cards & Chips",
        relatedHref: "/rfid-card-printing/",
        relatedLabel: "Explore RFID Cards",
        faqs: [
          {
            q: "Does IDGen provide RFID cards?",
            a: "Yes. RFID cards can be produced according to the required RFID technology and compatible system specifications.",
          },
          {
            q: "Can you guarantee RFID compatibility without checking my system?",
            a: "No. RFID specifications should be confirmed against the reader/system and required technology before production.",
          },
        ],
      },
      {
        name: "IDGen Studio",
        badge: "Digital Identity Workflow",
        relatedHref: "/idgen-studio/",
        relatedLabel: "Explore IDGen Studio",
        faqs: [
          {
            q: "What is IDGen Studio?",
            a: "IDGen Studio is the digital identity workflow used to connect data collection and personalized ID card production for suitable projects.",
          },
          {
            q: "Can people submit their information through a QR code?",
            a: "The master content describes customized forms, shareable links and QR-code-based collection as part of the applicable IDGen Studio workflow.",
          },
          {
            q: "Can organizations review submissions before printing?",
            a: "Yes, for suitable IDGen Studio projects.",
          },
          {
            q: "Can approved records be printed batch-wise?",
            a: "Yes, where the configured IDGen Studio workflow supports batch production.",
          },
        ],
      },
      {
        name: "Pricing",
        badge: "Reference Rates & Quotes",
        relatedHref: "/pricing/",
        relatedLabel: "View Pricing Tiers",
        faqs: [
          {
            q: "How much does an ID card cost?",
            a: "The master pricing page uses reference pricing rather than a universal final price. Current reference prices documented in the master are ₹15 for single-side PVC ID card printing, ₹16 for double-side printing, ₹15 for a 20 mm custom printed lanyard, ₹35 for an event card and ₹45 for an RFID ID card, subject to specifications and order conditions.",
          },
          {
            q: "Is the listed price the final price?",
            a: "No. Final pricing depends on quantity, specifications, personalization, accessories and applicable delivery conditions.",
          },
        ],
      },
      {
        name: "Service Areas",
        badge: "Regional Coverage",
        relatedHref: "/service-areas/assam/",
        relatedLabel: "Explore Service Areas",
        faqs: [
          {
            q: "Does IDGen serve only Guwahati?",
            a: "No. Guwahati is the primary base, while IDGen serves organizations across Assam and the wider Northeast India market.",
          },
          {
            q: "Does a city page mean IDGen has an office there?",
            a: "No. A city service-area page represents service coverage unless a physical branch is specifically listed. This distinction is already used throughout the master location architecture.",
          },
        ],
      },
      {
        name: "Data & Confidentiality",
        badge: "Security & Privacy",
        relatedHref: "/privacy-policy/",
        relatedLabel: "Privacy Policy",
        faqs: [
          {
            q: "Does IDGen handle identification information confidentially?",
            a: "IDGen treats customer-provided identification information as confidential project information and handles it for the agreed identification-related purpose.",
          },
          {
            q: "What information should an organization provide?",
            a: "Only information required for the identification project should be provided. Depending on the project, this may include names, photographs, identification numbers, classes, courses, departments, designations, QR-code information and barcode information.",
          },
        ],
      },
    ],
  },
  closingCta: {
    badge: "Direct Factory Assistance",
    title: "Still Have a Question?",
    description:
      "Send IDGen your requirement and our team can help determine the appropriate identification product, hardware configuration, and digital workflow.",
    primaryCta: {
      label: "Request a Quote →",
      href: "/request-a-quote/",
    },
    secondaryCta: {
      label: "Contact IDGen Desk",
      href: "/contact-us/",
    },
    tertiaryCta: {
      label: "View Pricing Tiers",
      href: "/pricing/",
    },
    footerTitle: "IDGen — Identity Solutions Simplified",
    footerSubtitle: "Guwahati Production Hub • Direct Hotline: +91 92070 12084",
  },
};

export function getDynamicFaq(): DynamicFaqData {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, "utf-8");
      const parsed = JSON.parse(raw);
      return {
        meta: { ...DEFAULT_FAQ_DATA.meta, ...parsed.meta },
        hero: {
          ...DEFAULT_FAQ_DATA.hero,
          ...parsed.hero,
          featureCards: parsed.hero?.featureCards || DEFAULT_FAQ_DATA.hero.featureCards,
          primaryCta: { ...DEFAULT_FAQ_DATA.hero.primaryCta, ...parsed.hero?.primaryCta },
          secondaryCta: { ...DEFAULT_FAQ_DATA.hero.secondaryCta, ...parsed.hero?.secondaryCta },
          tertiaryCta: { ...DEFAULT_FAQ_DATA.hero.tertiaryCta, ...parsed.hero?.tertiaryCta },
          trustBadges: parsed.hero?.trustBadges || DEFAULT_FAQ_DATA.hero.trustBadges,
        },
        heroShowcase: {
          ...DEFAULT_FAQ_DATA.heroShowcase,
          ...parsed.heroShowcase,
          pillars: parsed.heroShowcase?.pillars || DEFAULT_FAQ_DATA.heroShowcase.pillars,
          quickSpecs: parsed.heroShowcase?.quickSpecs || DEFAULT_FAQ_DATA.heroShowcase.quickSpecs,
        },
        topicMatrix: {
          ...DEFAULT_FAQ_DATA.topicMatrix,
          ...parsed.topicMatrix,
          topics: parsed.topicMatrix?.topics || DEFAULT_FAQ_DATA.topicMatrix.topics,
        },
        explorerMatrix: {
          ...DEFAULT_FAQ_DATA.explorerMatrix,
          ...parsed.explorerMatrix,
          categories: parsed.explorerMatrix?.categories || DEFAULT_FAQ_DATA.explorerMatrix.categories,
        },
        closingCta: {
          ...DEFAULT_FAQ_DATA.closingCta,
          ...parsed.closingCta,
          primaryCta: { ...DEFAULT_FAQ_DATA.closingCta.primaryCta, ...parsed.closingCta?.primaryCta },
          secondaryCta: { ...DEFAULT_FAQ_DATA.closingCta.secondaryCta, ...parsed.closingCta?.secondaryCta },
          tertiaryCta: { ...DEFAULT_FAQ_DATA.closingCta.tertiaryCta, ...parsed.closingCta?.tertiaryCta },
        },
      };
    }
  } catch (err) {
    console.error("Error reading dynamic-faq.json:", err);
  }
  return DEFAULT_FAQ_DATA;
}

export function saveDynamicFaq(data: DynamicFaqData): DynamicFaqData {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
  return data;
}

export function resetDynamicFaq(): DynamicFaqData {
  saveDynamicFaq(DEFAULT_FAQ_DATA);
  return DEFAULT_FAQ_DATA;
}
