import fs from "fs";
import path from "path";
import type { DynamicRfidCardPrintingData } from "./dynamic-rfid-card-printing-types";

const DATA_FILE = path.join(process.cwd(), "src", "data", "dynamic-rfid-card-printing.json");

export const DEFAULT_RFID_CARD_PRINTING_DATA: DynamicRfidCardPrintingData = {
  meta: {
    title: "RFID Card Printing | Custom RFID ID Cards for Organizations | IDGen",
    description:
      "Custom RFID card printing for schools, companies, institutions and organizations. Personalized RFID ID cards matched to compatible readers and systems, with bulk printing and accessory options.",
    path: "/rfid-card-printing/",
  },
  hero: {
    badge: "RFID Card Printing",
    h1: "Customized RFID ID Cards",
    h1Gradient: "for Organizations, Access & Identification",
    description:
      "IDGen provides customized RFID card printing for organizations that need identification cards with RFID functionality. RFID cards can combine printed visual identification with an embedded RFID component, allowing the card to be used with a compatible RFID-based system.",
    advisoryBadge: "System-Focused Specification",
    advisoryTitle:
      "The RFID technology and card specification should be selected according to the reader, system and application in which the card will be used:",
    advisorySteps: [
      "Requirement",
      "Specification",
      "Design",
      "Data",
      "Preview",
      "Production",
      "Quality Check",
      "Dispatch",
    ],
    primaryCta: {
      label: "Request an RFID Card Quote",
      href: "/request-a-quote/",
    },
    secondaryCta: {
      label: "Explore ID Card Printing",
      href: "/id-card-printing/",
    },
    slides: [
      {
        id: "rfid-smart-access",
        imageSrc: "/images/rfid-hero-slide-smart-access.jpg",
        alt: "IDGen 13.56 MHz Contactless RFID Smart Card with embedded microchip antenna inlay",
        title: "13.56 MHz RFID Smart Identity Cards",
        category: "Smart Access",
        topBadge: "Smart Contactless",
        specPill: "Mifare 1K / TK4100",
        bottomSpec: "Dual Function • Visual ID + RFID Smart Antenna",
        hubTag: "GUWAHATI HUB",
      },
      {
        id: "rfid-turnstile-tap",
        imageSrc: "/images/rfid-hero-slide-turnstile-tap.jpg",
        alt: "IDGen RFID smart card tapping against high-speed corporate turnstile access reader",
        title: "Instant Turnstile & Attendance Sync",
        category: "Access Control",
        topBadge: "Turnstile Tap Ready",
        specPill: "NFC / High-Speed Read",
        bottomSpec: "Zero-Latency Tap • Campus Gates • Attendance Readers",
        hubTag: "ZERO MISMATCH",
      },
      {
        id: "rfid-nfc-credentials",
        imageSrc: "/images/rfid-nfc-credentials.jpg",
        alt: "Custom printed RFID and NFC smart cards for corporate and institutional identity by IDGen",
        title: "Dual Frequency & Encrypted Chips",
        category: "Inlay Technology",
        topBadge: "Encrypted Inlays",
        specPill: "125 kHz & 13.56 MHz",
        bottomSpec: "EM4100 • Mifare Classic • NTAG213 • DesFire",
        hubTag: "CHIP TESTED",
      },
      {
        id: "rfid-complete-set",
        imageSrc: "/images/idgen-rfid-id-card-printing.jpg",
        alt: "Complete wearable RFID identification setup with card, hard acrylic holder, and custom lanyard",
        title: "Complete Wearable RFID Set",
        category: "Wearable Suite",
        topBadge: "Complete Wearable Set",
        specPill: "Holder + Lanyard + Hook",
        bottomSpec: "RFID Smart Card • Polycarbonate Case • Satin Lanyard",
        hubTag: "ALL-IN-ONE",
      },
      {
        id: "rfid-bulk-batch",
        imageSrc: "/images/bulk-rfid-card-printing.jpg",
        alt: "Institutional bulk RFID card printing and chip encoding batch production by IDGen",
        title: "Institutional Bulk Batch Encoding",
        category: "High Volume",
        topBadge: "Bulk Batch Ready",
        specPill: "10,000+ Daily Capacity",
        bottomSpec: "Pre-Encoded UID • Sequential Numbering • Express Dispatch",
        hubTag: "EXPRESS DISPATCH",
      },
    ],
  },
  orgSuitability: {
    eyebrow: "Institutional Deployment",
    title: "Customized RFID cards for organizations across sectors",
    subhead: "They can be customized for organizations such as:",
    items: [
      "Schools and educational institutions",
      "Colleges and universities",
      "Companies",
      "Corporate offices",
      "Hospitals",
      "Industries",
      "Government organizations",
      "Membership organizations",
      "Clubs and associations",
      "Other institutions",
    ],
  },
  whatIsRfid: {
    eyebrow: "Technology Concept",
    title: "What Is an RFID ID Card?",
    description:
      "An RFID ID card is an identification card containing an RFID component that can communicate with a compatible RFID reader. Unlike a standard printed ID card, an RFID card can provide both:",
    image: {
      src: "/images/rfid-id-card-reader-identification.jpg",
      alt: "RFID ID card used with compatible RFID reader system",
      badge: "RFID Inlay",
      caption: "Contactless RFID Interaction",
      statusBadge: "Tested",
    },
    purposes: [
      {
        purposeNumber: "Purpose 1",
        title: "1. Identification",
        desc: "People can visually identify the cardholder from the printed information.",
      },
      {
        purposeNumber: "Purpose 2",
        title: "2. RFID Interaction",
        desc: "The RFID component can interact with a compatible reader or system.",
      },
    ],
    typicalCardTitle: "A typical card can contain:",
    typicalCardItems: [
      "Photograph",
      "Name",
      "ID number",
      "Organization name",
      "Department / class",
      "Designation",
      "Logo",
      "QR code or barcode where required",
      "RFID component",
    ],
    footnote: "The exact RFID technology depends on the customer's existing system and application.",
  },
  sectorApplications: {
    eyebrow: "Sector Applications",
    title: "RFID Card Applications",
    lede: "RFID cards can be used for different applications depending on the RFID technology and the customer's system.",
    items: [
      {
        iconName: "GraduationCap",
        title: "Educational Institutions",
        body: "Possible applications include: Student identification, Faculty identification, Staff identification, Campus access, Library systems, Attendance systems, and other compatible institutional systems.",
      },
      {
        iconName: "Building2",
        title: "Companies",
        body: "Possible applications include: Employee identification, Access-control systems, Attendance systems, Internal identification, Visitor-management systems, and other compatible RFID applications.",
      },
      {
        iconName: "Hospital",
        title: "Hospitals & Institutions",
        body: "RFID cards may be used for: Staff identification, Employee access, Visitor identification, and internal identification systems.",
      },
      {
        iconName: "Users",
        title: "Clubs & Membership Organizations",
        body: "RFID cards can be used where membership identification needs to work with a compatible RFID reader or system.",
      },
      {
        iconName: "Radio",
        title: "Events",
        body: "RFID-enabled cards may be suitable for applications where electronic identification or access is required.",
      },
    ],
    warningBox: {
      title: "Important:",
      text: "RFID functionality depends on the card technology, reader, software and system being used. The card should therefore be matched to the customer's existing RFID infrastructure before production.",
    },
  },
  systemCompatibility: {
    eyebrow: "Crucial Requirement",
    title: "RFID Technology Must Match Your System",
    description:
      "This is one of the most important things to understand before ordering RFID cards. Not every RFID card works with every RFID reader.",
    subhead: "The required card depends on factors such as:",
    factors: [
      "RFID frequency",
      "Chip technology",
      "Reader compatibility",
      "Existing access-control system",
      "Attendance system",
      "Software",
      "Required read range",
      "Encoding requirements",
      "Existing card infrastructure",
    ],
    noticeBox: {
      text: "Therefore, before production, customers should provide the relevant reader/card specification, existing card sample, chip details or system information, where available.",
      highlightText: "IDGen can then determine the required card specification for the project.",
    },
  },
  customization: {
    eyebrow: "Print Customization",
    title: "RFID Card Customization",
    lede: "The visible side of the RFID card can be customized according to the organization's branding and identification requirements.",
    subhead: "Typical information may include:",
    fields: [
      "Organization logo",
      "Organization name",
      "Cardholder photograph",
      "Name",
      "ID number",
      "Employee number",
      "Student number",
      "Department",
      "Designation",
      "Class",
      "Course",
      "Validity",
      "Contact information",
      "QR code",
      "Barcode",
      "Other approved information",
    ],
    footnote: "The final design depends on the organization's requirements.",
  },
  studentAndEmployee: {
    studentCard: {
      iconName: "GraduationCap",
      title: "RFID Card for Student Identification",
      description:
        "Educational institutions can use RFID-enabled student cards where their existing system supports RFID.",
      steps: ["Student Info", "Photo", "Institution Branding", "RFID"],
      applicationsTitle: "Possible applications can include compatible:",
      applications: [
        "Attendance systems",
        "Library systems",
        "Access systems",
        "Campus identification systems",
        "Other institutional applications",
      ],
      note: "The RFID card specification must match the institution's existing infrastructure.",
      linkText: "Explore Student ID Card Printing",
      linkHref: "/student-id-card-printing/",
    },
    employeeCard: {
      iconName: "Building2",
      title: "RFID Employee ID Cards",
      description:
        "Companies can use RFID-enabled employee cards where their access, attendance or identification infrastructure supports RFID.",
      steps: ["Employee Photo", "Name", "Employee ID", "Department", "Company Branding", "RFID"],
      subtext:
        "Depending on the system, the same card may be used for compatible identification and access applications.",
      linkText: "Explore Employee ID Card Printing",
      linkHref: "/employee-id-card-printing/",
    },
  },
  workflowProcess: {
    eyebrow: "Workflow Structure",
    title: "RFID Card Printing Process",
    lede: "IDGen follows a structured workflow for customized RFID card projects.",
    steps: [
      {
        title: "01 - Understand the Requirement",
        body: "We identify: Application, Quantity, Card format, Printing requirement, Existing RFID system, Reader/system compatibility, Encoding requirements, if applicable.",
      },
      {
        title: "02 - Confirm RFID Specification",
        body: "The required RFID technology is confirmed against the customer's system information, existing card or other available specifications.",
      },
      {
        title: "03 - Prepare Card Design",
        body: "The visual card design is prepared according to the organization's requirements.",
      },
      {
        title: "04 - Data Preparation",
        body: "Personalized information and photographs are organized where required.",
      },
      {
        title: "05 - Preview & Approval",
        body: "The design and relevant information are reviewed before production where applicable.",
      },
      {
        title: "06 - Production",
        body: "The approved RFID cards are produced according to the confirmed specifications.",
      },
      {
        title: "07 - Quality Check",
        body: "Cards are checked against the approved requirements and project specifications.",
      },
      {
        title: "08 - Dispatch",
        body: "Completed cards are packaged and dispatched according to the applicable order timeline.",
      },
    ],
  },
  bulkOrders: {
    eyebrow: "High-Volume Deployment",
    title: "RFID Card Printing for Bulk Orders",
    lede: "RFID projects can involve hundreds or thousands of cards. IDGen supports bulk identification requirements.",
    subhead: "Bulk production for:",
    sectors: [
      "Schools",
      "Colleges",
      "Universities",
      "Companies",
      "Hospitals",
      "Industries",
      "Institutions",
      "Government organizations",
      "Membership organizations",
    ],
    infoText:
      "For bulk RFID projects, it is particularly important to confirm the RFID technology and system compatibility before production. Large projects can also benefit from structured data preparation and preview workflows.",
    linkText: "Explore Bulk ID Card Printing",
    linkHref: "/id-card-printing/",
  },
  configurations: {
    eyebrow: "Component Assembly",
    title: "RFID Card + Lanyard + Holder",
    lede: "An RFID card can be supplied as part of a larger identification setup where required.",
    items: [
      {
        title: "RFID Card Only",
        badge: "Standalone Card",
        formula: ["RFID Card"],
        desc: "Direct RFID cards when existing holders and lanyards are already available.",
      },
      {
        title: "RFID Card + Holder",
        badge: "Protected Card",
        formula: ["RFID Card", "Holder"],
        desc: "RFID card paired with durable clear protective polycarbonate holder.",
      },
      {
        title: "Wearable RFID Identification",
        badge: "Complete Assembly",
        formula: ["RFID Card", "Holder", "Hook", "Custom Printed Lanyard"],
        desc: "Complete wearable institutional setup ready for daily campus or workplace tap access.",
      },
    ],
    bottomLinks: [
      { label: "Explore ID Card Holders", href: "/id-card-holders/" },
      { label: "Explore Custom Printed Lanyards", href: "/custom-printed-lanyard-printing/" },
    ],
  },
  existingSystemsChecklist: {
    eyebrow: "Compatibility Checklist",
    title: "RFID Cards for Existing Systems",
    description:
      "If an organization already has an RFID system, the most important information is the existing system specification. Before requesting a quotation, customers should ideally provide:",
    checklist: [
      "Existing RFID card sample",
      "Reader model",
      "System details",
      "Chip/frequency information",
      "Existing card photograph",
      "Required card dimensions",
      "Required printing",
      "Required quantity",
    ],
    footnote:
      "This helps reduce the risk of supplying a card that is physically correct but incompatible with the customer's RFID system.",
  },
  comparisonTable: {
    eyebrow: "Comparison Matrix",
    title: "RFID Card Printing vs Standard ID Card",
    columns: ["Feature", "Standard ID Card", "RFID ID Card"],
    rows: [
      ["Printed identification", "Yes", "Yes"],
      ["Photograph", "Yes", "Yes"],
      ["Organization branding", "Yes", "Yes"],
      ["ID number", "Yes", "Yes"],
      ["RFID functionality", "—", "Yes"],
      ["Requires compatible RFID system", "—", "Yes"],
      ["Suitable for electronic identification", "—", "Depending on system"],
      ["Custom artwork", "Yes", "Yes"],
    ],
    conclusionText:
      "An RFID card should be selected when the organization actually requires RFID functionality supported by its existing or planned system.",
  },
  qualityVerification: {
    eyebrow: "Quality Assurance",
    title: "RFID Card Quality & Verification",
    lede: "For RFID projects, quality involves more than the printed appearance. IDGen's workflow considers:",
    aspects: [
      {
        title: "Printed Information",
        desc: "Checking the approved visual design and personalized information.",
      },
      {
        title: "Card Specification",
        desc: "Checking the required card format and project specification.",
      },
      {
        title: "RFID Compatibility",
        desc: "Confirming that the selected RFID technology matches the customer's specified system where the required information is available.",
      },
      {
        title: "Data / Encoding",
        desc: "Where encoding is part of the project, the required data structure and encoding requirements should be confirmed before production.",
      },
      {
        title: "Final Inspection",
        desc: "Completed cards are checked according to the applicable project requirements before dispatch.",
      },
    ],
  },
  digitalWorkflow: {
    eyebrow: "Digital Integration",
    title: "RFID Card Data & Digital Workflow",
    description:
      "For large personalized RFID projects, the card may contain both printed and electronically associated information. For example:",
    steps: [
      "Student Data",
      "Photograph",
      "Card Design",
      "RFID Information",
      "Preview",
      "Approval",
      "Production",
    ],
    infoText:
      "IDGen Studio can support the data-collection and card-preview side of suitable identification projects.",
    ctaText: "Explore IDGen Studio",
    ctaHref: "/idgen-studio/",
  },
  whyChooseIdgen: {
    eyebrow: "Core Competence",
    title: "Why Choose IDGen for RFID Card Printing?",
    features: [
      {
        iconName: "ShieldCheck",
        title: "Complete Identification Approach",
        body: "IDGen can provide the printed RFID card as part of a wider identification requirement.",
      },
      {
        iconName: "Cpu",
        title: "System-Focused Specification",
        body: "The RFID card should be matched to the customer's existing system rather than selected only by appearance.",
      },
      {
        iconName: "Palette",
        title: "Personalized Printing",
        body: "Cards can be customized with organization and cardholder information.",
      },
      {
        iconName: "Boxes",
        title: "Bulk Capability",
        body: "IDGen supports institutional and high-volume identification requirements.",
      },
      {
        iconName: "Workflow",
        title: "Structured Workflow",
        body: "Requirement → Specification → Design → Data → Preview → Production → Quality Check → Dispatch.",
      },
      {
        iconName: "Layers",
        title: "Accessories Available",
        body: "Where required, RFID cards can be combined with holders, hooks and custom printed lanyards.",
      },
      {
        iconName: "Eye",
        title: "Digital Data Workflow",
        body: "IDGen Studio can support suitable projects requiring structured information and photograph collection.",
      },
    ],
  },
  eligibleSectors: {
    eyebrow: "Eligibility & Suitability",
    title: "Who Can Use RFID ID Cards?",
    description: "RFID card projects can be suitable for:",
    sectors: [
      "Schools",
      "Colleges",
      "Universities",
      "Companies",
      "Corporate offices",
      "Hospitals",
      "Industries",
      "Government organizations",
      "NGOs",
      "Clubs",
      "Associations",
      "Membership organizations",
      "Institutions",
    ],
    footnote: "The suitability depends on the organization's RFID application and system compatibility.",
  },
  faqs: {
    eyebrow: "Questions & Answers",
    title: "Frequently Asked Questions",
    items: [
      {
        q: "What is an RFID ID card?",
        a: "An RFID ID card is a printed identification card containing an RFID component that can communicate with a compatible RFID reader or system.",
      },
      {
        q: "Can RFID cards be customized?",
        a: "Yes. RFID cards can be printed with organization branding, photographs, names, identification numbers, departments and other required information.",
      },
      {
        q: "Can an RFID card be used as an employee ID card?",
        a: "Yes, where the organization's existing employee access, attendance or identification system supports the selected RFID technology.",
      },
      {
        q: "Can students use RFID ID cards?",
        a: "Yes. Educational institutions can use RFID-enabled student cards where their existing RFID system supports the required card technology.",
      },
      {
        q: "Does every RFID card work with every RFID reader?",
        a: "No. RFID cards must be compatible with the reader and system being used. Frequency, chip technology and system specifications need to be considered.",
      },
      {
        q: "Can I send my existing RFID card?",
        a: "Yes. Providing an existing card sample can help determine the required specification for a replacement or customized card project.",
      },
      {
        q: "Can IDGen print photographs and names on RFID cards?",
        a: "Yes. RFID cards can be customized with photographs, names, ID numbers, organization branding and other approved information.",
      },
      {
        q: "Can RFID cards be supplied with lanyards?",
        a: "Yes. Depending on the requirement, RFID cards can be combined with holders, hooks and custom printed lanyards.",
      },
      {
        q: "Can IDGen handle bulk RFID card orders?",
        a: "Yes. IDGen supports bulk identification projects. The required RFID specification should be confirmed before production.",
      },
      {
        q: "Does IDGen encode RFID cards?",
        a: "Encoding requirements depend on the project and RFID system. The required encoding specification should be confirmed before quotation and production.",
      },
    ],
  },
  closingCta: {
    badge: "Specification Check",
    title: "Need RFID Card Printing?",
    description:
      "Tell us what RFID system you are using, what quantity you need and what information should be printed on the card.",
    infoBox:
      "For the fastest specification check, share an existing RFID card or the relevant reader/system details if available.",
    buttonPrimary: {
      text: "Request an RFID Card Quote",
      href: "/request-a-quote/",
    },
    buttonSecondary: {
      text: "Send Existing Card Details",
      href: "/request-a-quote/",
    },
    buttonTertiary: {
      text: "Explore ID Card Printing",
      href: "/id-card-printing/",
    },
  },
  regionalDirectory: {
    hubTag: "Assam & Northeast India Hub",
    title: "RFID Card Printing in Guwahati, Assam & Across Northeast India",
    description:
      "IDGen supplies customized RFID ID card printing, attendance cards, smart campus cards, and access control credentials across Guwahati, Assam, and all Northeast regions.",
    subhead: "Related IDGen Solutions & Directories:",
    links: [
      { topic: "General ID cards", href: "/id-card-printing/" },
      { topic: "Student application", href: "/student-id-card-printing/" },
      { topic: "Employee application", href: "/employee-id-card-printing/" },
      { topic: "Custom lanyards", href: "/custom-printed-lanyard-printing/" },
      { topic: "Card Holders", href: "/id-card-holders/" },
      { topic: "Hooks", href: "/id-card-hooks/" },
      { topic: "Data collection", href: "/idgen-studio/" },
      { topic: "Pricing", href: "/pricing/" },
      { topic: "Why IDGen", href: "/why-idgen/" },
      { topic: "Assam Services", href: "/service-areas/assam/" },
      { topic: "Guwahati Services", href: "/service-areas/assam/guwahati/" },
      { topic: "Request a Quote", href: "/request-a-quote/" },
    ],
  },
};

export function getDynamicRfidCardPrinting(): DynamicRfidCardPrintingData {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const content = fs.readFileSync(DATA_FILE, "utf-8");
      const parsed = JSON.parse(content);
      return {
        ...DEFAULT_RFID_CARD_PRINTING_DATA,
        ...parsed,
        meta: { ...DEFAULT_RFID_CARD_PRINTING_DATA.meta, ...parsed.meta },
        hero: {
          ...DEFAULT_RFID_CARD_PRINTING_DATA.hero,
          ...parsed.hero,
          slides: parsed.hero?.slides || DEFAULT_RFID_CARD_PRINTING_DATA.hero.slides,
        },
        orgSuitability: { ...DEFAULT_RFID_CARD_PRINTING_DATA.orgSuitability, ...parsed.orgSuitability },
        whatIsRfid: {
          ...DEFAULT_RFID_CARD_PRINTING_DATA.whatIsRfid,
          ...parsed.whatIsRfid,
          image: { ...DEFAULT_RFID_CARD_PRINTING_DATA.whatIsRfid.image, ...parsed.whatIsRfid?.image },
        },
        sectorApplications: {
          ...DEFAULT_RFID_CARD_PRINTING_DATA.sectorApplications,
          ...parsed.sectorApplications,
          items: parsed.sectorApplications?.items || DEFAULT_RFID_CARD_PRINTING_DATA.sectorApplications.items,
        },
        systemCompatibility: {
          ...DEFAULT_RFID_CARD_PRINTING_DATA.systemCompatibility,
          ...parsed.systemCompatibility,
        },
        customization: { ...DEFAULT_RFID_CARD_PRINTING_DATA.customization, ...parsed.customization },
        studentAndEmployee: {
          ...DEFAULT_RFID_CARD_PRINTING_DATA.studentAndEmployee,
          ...parsed.studentAndEmployee,
          studentCard: {
            ...DEFAULT_RFID_CARD_PRINTING_DATA.studentAndEmployee.studentCard,
            ...parsed.studentAndEmployee?.studentCard,
          },
          employeeCard: {
            ...DEFAULT_RFID_CARD_PRINTING_DATA.studentAndEmployee.employeeCard,
            ...parsed.studentAndEmployee?.employeeCard,
          },
        },
        workflowProcess: {
          ...DEFAULT_RFID_CARD_PRINTING_DATA.workflowProcess,
          ...parsed.workflowProcess,
          steps: parsed.workflowProcess?.steps || DEFAULT_RFID_CARD_PRINTING_DATA.workflowProcess.steps,
        },
        bulkOrders: { ...DEFAULT_RFID_CARD_PRINTING_DATA.bulkOrders, ...parsed.bulkOrders },
        configurations: {
          ...DEFAULT_RFID_CARD_PRINTING_DATA.configurations,
          ...parsed.configurations,
          items: parsed.configurations?.items || DEFAULT_RFID_CARD_PRINTING_DATA.configurations.items,
        },
        existingSystemsChecklist: {
          ...DEFAULT_RFID_CARD_PRINTING_DATA.existingSystemsChecklist,
          ...parsed.existingSystemsChecklist,
        },
        comparisonTable: {
          ...DEFAULT_RFID_CARD_PRINTING_DATA.comparisonTable,
          ...parsed.comparisonTable,
          rows: parsed.comparisonTable?.rows || DEFAULT_RFID_CARD_PRINTING_DATA.comparisonTable.rows,
        },
        qualityVerification: {
          ...DEFAULT_RFID_CARD_PRINTING_DATA.qualityVerification,
          ...parsed.qualityVerification,
          aspects: parsed.qualityVerification?.aspects || DEFAULT_RFID_CARD_PRINTING_DATA.qualityVerification.aspects,
        },
        digitalWorkflow: {
          ...DEFAULT_RFID_CARD_PRINTING_DATA.digitalWorkflow,
          ...parsed.digitalWorkflow,
        },
        whyChooseIdgen: {
          ...DEFAULT_RFID_CARD_PRINTING_DATA.whyChooseIdgen,
          ...parsed.whyChooseIdgen,
          features: parsed.whyChooseIdgen?.features || DEFAULT_RFID_CARD_PRINTING_DATA.whyChooseIdgen.features,
        },
        eligibleSectors: { ...DEFAULT_RFID_CARD_PRINTING_DATA.eligibleSectors, ...parsed.eligibleSectors },
        faqs: {
          ...DEFAULT_RFID_CARD_PRINTING_DATA.faqs,
          ...parsed.faqs,
          items: parsed.faqs?.items || DEFAULT_RFID_CARD_PRINTING_DATA.faqs.items,
        },
        closingCta: { ...DEFAULT_RFID_CARD_PRINTING_DATA.closingCta, ...parsed.closingCta },
        regionalDirectory: {
          ...DEFAULT_RFID_CARD_PRINTING_DATA.regionalDirectory,
          ...parsed.regionalDirectory,
          links: parsed.regionalDirectory?.links || DEFAULT_RFID_CARD_PRINTING_DATA.regionalDirectory.links,
        },
      };
    }
  } catch (err) {
    console.error("Error reading dynamic-rfid-card-printing.json:", err);
  }
  return DEFAULT_RFID_CARD_PRINTING_DATA;
}

export function saveDynamicRfidCardPrinting(data: DynamicRfidCardPrintingData): DynamicRfidCardPrintingData {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
  return data;
}

export function resetDynamicRfidCardPrinting(): DynamicRfidCardPrintingData {
  saveDynamicRfidCardPrinting(DEFAULT_RFID_CARD_PRINTING_DATA);
  return DEFAULT_RFID_CARD_PRINTING_DATA;
}
