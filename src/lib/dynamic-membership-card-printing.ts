import fs from "fs";
import path from "path";
import type { DynamicMembershipCardPrintingPageData } from "./dynamic-membership-card-printing-types";

const DATA_FILE = path.join(process.cwd(), "src", "data", "dynamic-membership-card-printing.json");

export const DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA: DynamicMembershipCardPrintingPageData = {
  meta: {
    title: "Membership Card Printing | Custom PVC Membership Cards | IDGen",
    description:
      "Custom membership card printing for clubs, gyms, associations, hotels, NGOs and organizations. Personalized PVC membership cards with photos, QR codes, barcodes and branding by IDGen.",
    path: "/membership-card-printing/",
  },
  hero: {
    badge: "Membership Card Printing",
    h1: "Custom Membership ID Card Printing for ",
    h1Gradient: "Gameszones, Clubs, Gyms, Associations & Organizations",
    description:
      "IDGen provides custom membership card printing for gameszones, gaming arenas, arcade parlours, clubs, associations, NGOs, gyms, sports clubs, hotels, resorts, recreational organizations, professional bodies, institutions and other membership-based organizations.",
    workflowBadge: "Membership Card Workflow",
    workflowTitle: "End-to-end institutional workflow from member data collection to final dispatch:",
    workflowSteps: [
      "Member Data",
      "Design",
      "Preview",
      "Approval",
      "Production",
      "Quality Check",
      "Dispatch",
    ],
    primaryCta: {
      label: "Request a Membership Card Quote",
      href: "/request-a-quote/",
    },
    secondaryCta: {
      label: "Explore ID Card Printing",
      href: "/id-card-printing/",
    },
    slides: [
      {
        id: "membership-custom-pvc",
        imageSrc: "/images/idgen-custom-membership-card-printing.jpg",
        alt: "Custom PVC membership cards printed by IDGen for clubs, gyms, and associations",
        title: "Premium PVC Membership Cards",
        category: "Club & Society",
        topBadge: "PVC Membership Card",
        specPill: "CR80 30-Mil Standard",
        bottomSpec: "High-Gloss PVC • Vibrant Color • Member Photo & ID",
        hubTag: "GUWAHATI HUB",
      },
      {
        id: "membership-designs-array",
        imageSrc: "/images/idgen-membership-card-designs-club-gym-association.png",
        alt: "Assorted membership card designs for fitness gyms, golf clubs, and professional associations by IDGen",
        title: "Club, Gym & Association Designs",
        category: "Custom Branding",
        topBadge: "Multi-Category Pass",
        specPill: "Gold / Silver Tiers",
        bottomSpec: "Tier Badging • VIP Access • Membership Expiry Dates",
        hubTag: "CUSTOM DESIGN",
      },
      {
        id: "membership-qr-barcode",
        imageSrc: "/images/idgen-membership-card-qr-barcode.jpg",
        alt: "Smart QR code and barcode membership cards for digital member attendance and check-in by IDGen",
        title: "QR Code & Barcode Integration",
        category: "Smart Check-In",
        topBadge: "Digital Verification",
        specPill: "Scan & Sync Ready",
        bottomSpec: "Dynamic QR Codes • 1D/2D Barcodes • Instant Verification",
        hubTag: "ZERO MISMATCH",
      },
      {
        id: "membership-wearable-set",
        imageSrc: "/images/idgen-membership-card-holder-lanyard.jpg",
        alt: "Complete membership wearable set with acrylic holder and custom branded lanyard by IDGen",
        title: "Complete Membership Wearable Set",
        category: "Full Ecosystem",
        topBadge: "Full Wearable Kit",
        specPill: "Card + Holder + Lanyard",
        bottomSpec: "Hard Acrylic Case • Custom Printed Satin Lanyard • Chrome Hook",
        hubTag: "ALL-IN-ONE",
      },
      {
        id: "membership-studio-preview",
        imageSrc: "/images/idgen-studio-membership-data-collection-preview.jpg",
        alt: "IDGen Studio digital membership data collection form and instant card preview workflow",
        title: "IDGen Studio Digital Onboarding",
        category: "Data Workflow",
        topBadge: "IDGen Studio Workflow",
        specPill: "Live Member Preview",
        bottomSpec: "Digital Member Forms • Photo Upload • Zero Reprint Errors",
        hubTag: "PREVIEW FIRST",
      },
    ],
  },
  personalizedData: {
    eyebrow: "Personalized Data Printing",
    title: "We produce personalized membership cards with information such as:",
    items: [
      "Member photograph",
      "Member name",
      "Membership number",
      "Membership category",
      "Membership plan",
      "Joining date",
      "Validity date",
      "Organization name",
      "Organization logo",
      "QR code",
      "Barcode",
      "Other organization-approved information",
    ],
    footnote:
      "Membership cards can be used for member identification, membership verification, loyalty programmes, check-in and compatible identification or access systems, depending on the organization's requirements.",
  },
  whatIs: {
    eyebrow: "Definition & Utility",
    title: "What Is a Membership ID Card?",
    description:
      "A membership ID card is a personalized card issued to a registered member of a club, association, business, organization or membership programme.",
    image: {
      src: "/images/idgen-membership-card-designs-club-gym-association.png",
      alt: "Custom membership card designs for clubs gyms and associations",
      badgeTop: "Member Identification",
      brandTop: "IDGen",
      badgeBottomSub: "Registered Member Credentials",
      badgeBottomTitle: "Clubs, Gyms & Associations",
      badgeBottomTag: "Specimen",
    },
    functionsTitle: "A membership card can help an organization:",
    functions: [
      "Identify members",
      "Verify membership",
      "Display membership category",
      "Show membership validity",
      "Support loyalty programmes",
      "Support check-in",
      "Display membership numbers",
      "Connect members with compatible digital systems",
      "Support compatible access-control systems",
    ],
    footnote:
      "The exact information and functionality depend on the organization's membership programme.",
  },
  customDesign: {
    eyebrow: "Tailored Design",
    title: "Custom Membership Cards",
    lede: "Designed Around Your Organization. Membership cards can be customized according to your organization's branding, membership structure and operational requirements.",
    elementsTitle: "Possible card elements include:",
    elements: [
      "Organization logo",
      "Organization name",
      "Brand colours",
      "Member photograph",
      "Member name",
      "Membership number",
      "Membership category",
      "Membership plan",
      "Joining date",
      "Expiry date",
      "QR code",
      "Barcode",
      "Custom graphics",
      "Terms or instructions",
    ],
    footnote:
      "You can provide your existing artwork or discuss the required card design with IDGen.",
  },
  pvcPrinting: {
    eyebrow: "Durable PVC Construction",
    title: "PVC Membership Card Printing",
    description:
      "IDGen can produce personalized PVC membership cards for organizations that require durable, professional-looking membership identification.",
    flowSteps: [
      "PVC Card",
      "Member Information",
      "Photograph",
      "Membership Number",
      "Branding",
    ],
    footnote:
      "The exact card specification depends on the organization's requirements. For bulk requirements, the card design and member data can be prepared and approved before production.",
    cta: {
      label: "Explore ID Card Printing",
      href: "/id-card-printing/",
    },
  },
  sectorsSection: {
    eyebrow: "Industry Adaptability",
    title: "Membership Cards for Gameszone & Different Organizations",
    lede: "One membership-card service can support gameszones, clubs, gyms, and different types of organizations while maintaining each organization's branding.",
    sectors: [
      {
        title: "Gameszone & Gaming Arenas",
        desc: "Rechargeable play passes, VIP gaming cards, time-tracking credentials, and access cards for gamezones, VR lounges, arcade parlours, and entertainment centers.",
        items: [
          "Gamezone Play Cards",
          "Rechargeable Arcade Passes",
          "VR Arena Credentials",
          "VIP Gamer Passes",
          "Time-Tracking Cards",
          "Amusement Park Passes",
        ],
      },
      {
        title: "Clubs",
        desc: "Membership cards for sports clubs, social clubs, cultural clubs, recreation clubs, country clubs, hobby clubs, and community clubs.",
        items: [
          "Sports clubs",
          "Social clubs",
          "Cultural clubs",
          "Recreation clubs",
          "Country clubs",
          "Hobby clubs",
          "Community clubs",
        ],
      },
      {
        title: "Associations",
        desc: "Suitable for professional associations, trade associations, business associations, industry organizations, community associations, and social organizations.",
        items: [
          "Professional associations",
          "Trade associations",
          "Business associations",
          "Industry organizations",
          "Community associations",
          "Social organizations",
        ],
      },
      {
        title: "Gyms & Fitness Centres",
        desc: "Membership cards displaying member name, photograph, membership number, plan, and validity date.",
        items: [
          "Member Name",
          "Photograph",
          "Membership Number",
          "Membership Plan",
          "Validity",
        ],
      },
      {
        title: "Hotels & Resorts",
        desc: "Membership cards for suitable membership, loyalty or guest programmes.",
        items: [
          "Membership programmes",
          "Loyalty schemes",
          "Guest credentials",
        ],
      },
      {
        title: "NGOs & Community Organizations",
        desc: "Cards to identify members, volunteers, coordinators, field teams, and registered participants.",
        items: [
          "Members",
          "Volunteers",
          "Coordinators",
          "Field teams",
          "Registered participants",
        ],
      },
    ],
  },
  gameszoneSpotlight: {
    badge: "Gaming & Entertainment Solutions",
    title: "Gameszone & Gaming Arena",
    titleGradient: "Membership Cards",
    description:
      "IDGen produces custom PVC play cards, rechargeable arcade credentials, RFID contactless passes, and VIP gamer cards tailored specifically for gameszones, VR lounges, esports arenas, arcade parlours, and amusement centers.",
    cta: {
      label: "Request Gameszone Quote",
      href: "/request-a-quote/",
    },
    features: [
      {
        iconName: "RefreshCw",
        title: "Rechargeable Play Passes",
        desc: "High-durability cards designed for repeated balance recharges and tap-to-play system integration.",
      },
      {
        iconName: "Radio",
        title: "RFID Contactless Smartcards",
        desc: "13.56MHz Mifare & 125kHz Proximity chip credentials for instant turnstile and simulator access.",
      },
      {
        iconName: "Award",
        title: "VIP & Tiered Member Cards",
        desc: "Gold, Platinum, and Elite Gamer cards with custom metallic finishes and loyalty perk tracking.",
      },
      {
        iconName: "QrCode",
        title: "QR Code & Time Passes",
        desc: "Scannable QR codes for hourly session tracking, VR simulator booking, and member verification.",
      },
    ],
  },
  scannableCredentials: {
    image: {
      src: "/images/idgen-membership-card-qr-barcode.jpg",
      alt: "Membership card with QR code and barcode for member identification",
      badgeTop: "Scannable Identifiers",
      brandTop: "IDGen",
      badgeBottomSub: "Digital System Link",
      badgeBottomTitle: "QR Code & Barcode Credentials",
      badgeBottomTag: "Scannable",
    },
    qrSection: {
      title: "Membership Cards With QR Codes",
      description:
        "A QR code can be included where an organization wants a scannable identifier on the membership card. Depending on the organization's system, a QR code may be used to:",
      functions: [
        "Identify a member",
        "Retrieve membership information",
        "Support verification",
        "Connect to a digital profile",
        "Support check-in",
        "Link to an organization-controlled webpage or system",
      ],
      alertTitle: "Important: ",
      alertText:
        "IDGen does not claim that a QR code automatically provides membership management or access control. The functionality depends on the organization's software/system.",
    },
    barcodeSection: {
      title: "Membership Cards With Barcodes",
      description:
        "Barcodes can be included on membership cards where an organization uses barcode-based identification or verification. Possible applications include:",
      applications: [
        "Member identification",
        "Check-in",
        "Membership verification",
        "Internal record lookup",
        "Compatible scanning systems",
      ],
      footnote:
        "The barcode format and implementation should be confirmed according to the customer's existing system.",
    },
  },
  wearableAccessories: {
    eyebrow: "System Integration",
    title: "Technology-Enabled & Wearable Accessories",
    items: [
      {
        iconName: "Radio",
        title: "RFID Membership Cards",
        description:
          "For organizations requiring technology-enabled membership identification, RFID membership cards may be considered where compatible hardware and software systems are available.",
        steps: [
          "Card",
          "Chip",
          "Frequency",
          "Reader",
          "Software/System",
        ],
        linkText: "Explore RFID Card Printing",
        linkHref: "/rfid-card-printing/",
      },
      {
        iconName: "Layers",
        title: "Membership Cards With Lanyards",
        description:
          "Some organizations may want members to visibly wear their membership cards. IDGen provides 20 mm custom printed lanyards customized with organization branding.",
        steps: [
          "Membership Card",
          "Holder",
          "Hook",
          "Custom Printed Lanyard",
        ],
        linkText: "Explore Custom Printed Lanyards",
        linkHref: "/custom-printed-lanyard-printing/",
      },
      {
        iconName: "ShieldCheck",
        title: "Membership Card Holders",
        description:
          "Where membership cards are intended to be worn, a suitable holder can be added. Correct holder selection depends on card orientation, dimensions, and retention requirement.",
        steps: [
          "Membership Card",
          "Holder",
          "Hook",
          "Lanyard",
        ],
        linkText: "Explore ID Card Holders",
        linkHref: "/id-card-holders/",
      },
    ],
  },
  bulkPrinting: {
    eyebrow: "High-Volume Deployment",
    title: "Bulk Membership Card Printing",
    lede: "IDGen can support membership organizations requiring cards for larger groups. For larger orders, an organized member-data workflow can help reduce manual production errors.",
    requirementsTitle: "Bulk requirements may include:",
    scenarios: [
      "New member registration",
      "Annual membership renewal",
      "Membership programme launches",
      "Club member batches",
      "Association membership",
      "Gym memberships",
      "Corporate membership programmes",
      "Replacement cards",
    ],
    workflowLabel: "Typical Bulk Workflow:",
    workflowSteps: [
      "Member Data",
      "Design",
      "Preview",
      "Approval",
      "Bulk Production",
      "Quality Check",
      "Dispatch",
    ],
    footnote:
      "The exact production timeline depends on quantity, data readiness, artwork approval and project specifications.",
  },
  studioWorkflow: {
    eyebrow: "Self-Onboarding & Admin Dashboard",
    title: "IDGen Studio for Membership Cards",
    description:
      "Organizations collecting information from many members can use IDGen Studio, where applicable, to support the data-collection and card-preview workflow.",
    image: {
      src: "/images/idgen-studio-membership-data-collection-preview.jpg",
      alt: "IDGen Studio membership data collection and card preview workflow",
      badgeTop: "Digital Data Workflow",
      brandTop: "IDGen",
      badgeBottomSub: "Batch-Wise Approvals",
      badgeBottomTitle: "Print When Members Are Ready",
      badgeBottomTag: "Automated",
    },
    submissionWorkflowLabel: "Member Submission Workflow:",
    submissionSteps: [
      "Open Link/QR",
      "Fill Form",
      "Upload Photograph",
      "Preview Card",
      "Submit",
    ],
    batchWiseLabel: "Batch-Wise Membership Card Printing — Print When Members Are Ready:",
    batches: [
      "Batch 1 → Approve → Print",
      "Batch 2 → Approve → Print",
      "Batch 3 → Approve → Print",
    ],
    cta: {
      label: "Explore IDGen Studio",
      href: "/idgen-studio/",
    },
  },
  dataPrivacy: {
    badge: "Data Protection Policy",
    title: "Membership Card Data & Confidentiality",
    description:
      "Membership card projects may involve personal information such as member names, photographs, membership numbers, contact information, membership categories, validity dates, and other identification details.",
    policyText:
      "IDGen understands that this information should be handled confidentially and only for the agreed identification/production purpose, subject to the organization's requirements and applicable operational controls. For digital collection through IDGen Studio, organizations should collect only the information required for their membership workflow.",
    cta: {
      label: "Explore Why IDGen",
      href: "/why-idgen/",
    },
  },
  specimenReplacement: {
    specimen: {
      title: "Membership Card Design",
      description: "A membership card can be designed to make the organization's identity immediately recognizable.",
      frontLabel: "Front Specimen Example:",
      frontSteps: [
        "Logo",
        "Photo",
        "Member Name",
        "Member No.",
        "Category",
        "Validity",
        "QR Code",
      ],
      reverseLabel: "Reverse Side Information (Where Required):",
      reverseElements: [
        "Terms and conditions",
        "Contact information",
        "Emergency information",
        "Membership instructions",
        "QR/barcode",
        "Organization address",
        "Other approved information",
      ],
    },
    replacement: {
      title: "Membership Card Replacement & Renewal",
      description: "Membership programmes may require cards for:",
      triggers: [
        "New members",
        "Renewing members",
        "Lost cards",
        "Damaged cards",
        "Updated photographs",
        "Changed membership categories",
        "Updated validity periods",
      ],
      footnote:
        "The required card data can be updated according to the organization's approved process before production.",
    },
  },
  pricingFactors: {
    eyebrow: "Transparent Calculation",
    title: "Membership Card Pricing",
    description: "Membership card pricing depends on factors such as:",
    factors: [
      "Quantity",
      "Card specification",
      "Single- or double-side printing",
      "Personalization",
      "Photograph/data requirements",
      "QR/barcode requirements",
      "RFID requirements",
      "Holder requirements",
      "Lanyard requirements",
      "Packaging",
      "Delivery",
    ],
    note: "Rather than giving a misleading universal price, IDGen should quote according to the actual membership-card specification.",
    ctas: [
      {
        label: "View IDGen Pricing",
        href: "/pricing/",
      },
      {
        label: "Request a Membership Card Quote",
        href: "/request-a-quote/",
      },
    ],
  },
  productionProcess: {
    eyebrow: "Execution Pipeline",
    title: "Membership Card Production Process",
    steps: [
      {
        title: "01 - Requirement",
        body: "Share your membership-card requirements and approximate quantity.",
      },
      {
        title: "02 - Member Data",
        body: "Provide member information and photographs, or use IDGen Studio where applicable.",
      },
      {
        title: "03 - Design",
        body: "Finalize the card artwork and required information.",
      },
      {
        title: "04 - Preview",
        body: "Review the design and personalized member information.",
      },
      {
        title: "05 - Approval",
        body: "Approve the final records and design.",
      },
      {
        title: "06 - Production",
        body: "Approved cards move into production.",
      },
      {
        title: "07 - Quality Check",
        body: "Finished cards are checked against the approved requirements.",
      },
      {
        title: "08 - Assembly",
        body: "Where required, cards can be combined with suitable holders, hooks and lanyards.",
      },
      {
        title: "09 - Dispatch",
        body: "Completed and approved materials are prepared for dispatch according to the applicable order timeline.",
      },
    ],
  },
  setupPackages: {
    eyebrow: "Configuration Packages",
    title: "Membership Cards + Complete Identification Setup",
    lede: "Organizations can choose only the components they require.",
    packages: [
      {
        title: "Card Only",
        badge: "Standalone Card",
        formula: ["Membership Card"],
        desc: "Personalized PVC membership card for wallet carry.",
      },
      {
        title: "Wearable",
        badge: "Visible Badge",
        formula: ["Membership Card", "Holder", "Hook", "Lanyard"],
        desc: "Complete wearable setup with 20 mm custom lanyard and holder.",
      },
      {
        title: "Technology-Enabled",
        badge: "RFID Credential",
        formula: [
          "RFID Membership Card",
          "Compatible Identification System",
        ],
        desc: "Smart RFID card matched to existing access/attendance system.",
      },
      {
        title: "Digital Workflow",
        badge: "IDGen Studio",
        formula: [
          "IDGen Studio",
          "Member Data",
          "Preview",
          "Approval",
          "Production",
        ],
        desc: "Digital member self-onboarding and batch-wise print management.",
      },
    ],
    footnote:
      "The components should be selected according to the organization's actual membership programme.",
  },
  whyChoose: {
    eyebrow: "Key Benefits",
    title: "Why Choose IDGen for Membership Cards?",
    items: [
      {
        iconName: "ShieldCheck",
        title: "Specialized Identification Experience",
        body: "IDGen's identification-product experience dates back to 2014, with customers and organizational requirements across Northeast India.",
      },
      {
        iconName: "Palette",
        title: "Customized Membership Cards",
        body: "Cards can be personalized according to your membership structure and branding.",
      },
      {
        iconName: "Boxes",
        title: "Bulk Production",
        body: "Suitable for organizations managing larger member batches.",
      },
      {
        iconName: "Eye",
        title: "Digital Data Workflow",
        body: "IDGen Studio can support structured member data collection and card preview where applicable.",
      },
      {
        iconName: "RefreshCw",
        title: "Batch-Wise Approval",
        body: "Organizations can approve suitable records progressively rather than necessarily waiting for every member record to be ready.",
      },
      {
        iconName: "Layers",
        title: "Complete Identification Accessories",
        body: "Where required, membership cards can be combined with holders, hooks and custom printed lanyards.",
      },
      {
        iconName: "Workflow",
        title: "One Identity Partner",
        body: "Organizations can coordinate card printing and related identification components through one provider.",
      },
    ],
    cta: {
      label: "Learn Why Choose IDGen",
      href: "/why-idgen/",
    },
  },
  eligibleSectors: {
    eyebrow: "Target Organizations",
    title: "Who Can Use Custom Membership Cards?",
    description: "IDGen can support membership-card requirements for:",
    sectors: [
      "Clubs",
      "Associations",
      "NGOs",
      "Gyms",
      "Fitness centres",
      "Sports clubs",
      "Games zones",
      "Entertainment centres",
      "Hotels",
      "Resorts",
      "Spas",
      "Restaurants",
      "Cafés",
      "Food parks",
      "Recreation centres",
      "Professional organizations",
      "Community organizations",
      "Alumni organizations",
      "Other membership programmes",
    ],
  },
  faqsSection: {
    eyebrow: "Questions & Answers",
    title: "Frequently Asked Questions",
    faqs: [
      {
        q: "What is a membership ID card?",
        a: "A membership ID card is a personalized card issued to a registered member of an organization, club, business or membership programme.",
      },
      {
        q: "Can IDGen print custom membership cards?",
        a: "Yes. IDGen provides customized membership card printing with member information, photographs, branding, membership numbers, validity and other required details.",
      },
      {
        q: "Can membership cards include photographs?",
        a: "Yes. Member photographs can be included where required.",
      },
      {
        q: "Can membership cards have QR codes?",
        a: "Yes. QR codes can be printed on membership cards where required. Their actual functionality depends on the organization's supporting system.",
      },
      {
        q: "Can membership cards have barcodes?",
        a: "Yes. Barcodes can be included for compatible identification and verification systems.",
      },
      {
        q: "Can you print RFID membership cards?",
        a: "RFID membership cards can be considered where the required RFID technology, chip, frequency, reader and software system are compatible.",
      },
      {
        q: "Can membership cards be printed in bulk?",
        a: "Yes. IDGen supports bulk membership-card requirements according to quantity, data readiness, design and specifications.",
      },
      {
        q: "Can membership cards be supplied with lanyards?",
        a: "Yes. A suitable membership card can be combined with an ID card holder, hook and 20 mm custom printed lanyard where a wearable setup is required.",
      },
      {
        q: "Can IDGen collect member information digitally?",
        a: "Yes. IDGen Studio can support customized data collection and card preview for suitable projects.",
      },
      {
        q: "Can membership cards be printed batch-wise?",
        a: "Where the configured IDGen Studio workflow supports it, organizations can review and approve suitable records in batches rather than waiting for all member records to be completed.",
      },
      {
        q: "How much does membership card printing cost?",
        a: "The price depends on quantity, card specification, personalization, printing requirements, accessories and other project requirements. A quotation should be requested for the exact specification.",
      },
    ],
  },
  closingCta: {
    badge: "Identification Setup",
    title: "Need Custom Membership Cards?",
    description:
      "Whether you need membership cards for a club, gym, association, hotel, resort, NGO, sports organization, professional body or other membership programme, IDGen can help you plan the required card and identification setup.",
    ctas: [
      {
        label: "Request a Membership Card Quote",
        href: "/request-a-quote/",
        isPrimary: true,
      },
      {
        label: "Explore IDGen Studio",
        href: "/idgen-studio/",
      },
      {
        label: "View Pricing",
        href: "/pricing/",
      },
      {
        label: "Contact IDGen",
        href: "/contact/",
      },
    ],
  },
  hubDirectory: {
    hubBadge: "Assam & Northeast India Hub",
    hubTitle:
      "Membership Card Printing by IDGen — Custom Membership Identification for Organizations Across Northeast India",
    hubDescription:
      "IDGen supplies personalized PVC membership cards, scannable QR/barcode credentials, and smart RFID membership badges for clubs, gyms, hotels, and associations across Guwahati, Assam, and all 8 Northeast states.",
    linksLabel: "Related IDGen Solutions & Directories:",
    internalLinks: [
      { topic: "General ID cards", href: "/id-card-printing/" },
      { topic: "RFID membership cards", href: "/rfid-card-printing/" },
      { topic: "Custom lanyards", href: "/custom-printed-lanyard-printing/" },
      { topic: "Card Holders", href: "/id-card-holders/" },
      { topic: "Hooks", href: "/id-card-hooks/" },
      { topic: "Digital data collection", href: "/idgen-studio/" },
      { topic: "Why IDGen", href: "/why-idgen/" },
      { topic: "Pricing", href: "/pricing/" },
      { topic: "Service Areas", href: "/service-areas/assam/" },
      { topic: "Request a Quote", href: "/request-a-quote/" },
    ],
  },
};

export function getDynamicMembershipCardPrinting(): DynamicMembershipCardPrintingPageData {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, "utf-8");
      const parsed = JSON.parse(raw);
      return {
        ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA,
        ...parsed,
        meta: { ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.meta, ...parsed.meta },
        hero: {
          ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.hero,
          ...parsed.hero,
          workflowSteps:
            parsed.hero?.workflowSteps ||
            DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.hero.workflowSteps,
          primaryCta: {
            ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.hero.primaryCta,
            ...parsed.hero?.primaryCta,
          },
          secondaryCta: {
            ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.hero.secondaryCta,
            ...parsed.hero?.secondaryCta,
          },
          slides:
            parsed.hero?.slides || DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.hero.slides,
        },
        personalizedData: {
          ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.personalizedData,
          ...parsed.personalizedData,
          items:
            parsed.personalizedData?.items ||
            DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.personalizedData.items,
        },
        whatIs: {
          ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.whatIs,
          ...parsed.whatIs,
          image: {
            ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.whatIs.image,
            ...parsed.whatIs?.image,
          },
          functions:
            parsed.whatIs?.functions ||
            DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.whatIs.functions,
        },
        customDesign: {
          ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.customDesign,
          ...parsed.customDesign,
          elements:
            parsed.customDesign?.elements ||
            DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.customDesign.elements,
        },
        pvcPrinting: {
          ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.pvcPrinting,
          ...parsed.pvcPrinting,
          flowSteps:
            parsed.pvcPrinting?.flowSteps ||
            DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.pvcPrinting.flowSteps,
          cta: {
            ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.pvcPrinting.cta,
            ...parsed.pvcPrinting?.cta,
          },
        },
        sectorsSection: {
          ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.sectorsSection,
          ...parsed.sectorsSection,
          sectors:
            parsed.sectorsSection?.sectors ||
            DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.sectorsSection.sectors,
        },
        gameszoneSpotlight: {
          ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.gameszoneSpotlight,
          ...parsed.gameszoneSpotlight,
          cta: {
            ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.gameszoneSpotlight.cta,
            ...parsed.gameszoneSpotlight?.cta,
          },
          features:
            parsed.gameszoneSpotlight?.features ||
            DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.gameszoneSpotlight.features,
        },
        scannableCredentials: {
          ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.scannableCredentials,
          ...parsed.scannableCredentials,
          image: {
            ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.scannableCredentials.image,
            ...parsed.scannableCredentials?.image,
          },
          qrSection: {
            ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.scannableCredentials.qrSection,
            ...parsed.scannableCredentials?.qrSection,
            functions:
              parsed.scannableCredentials?.qrSection?.functions ||
              DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.scannableCredentials.qrSection.functions,
          },
          barcodeSection: {
            ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.scannableCredentials.barcodeSection,
            ...parsed.scannableCredentials?.barcodeSection,
            applications:
              parsed.scannableCredentials?.barcodeSection?.applications ||
              DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.scannableCredentials.barcodeSection.applications,
          },
        },
        wearableAccessories: {
          ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.wearableAccessories,
          ...parsed.wearableAccessories,
          items:
            parsed.wearableAccessories?.items ||
            DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.wearableAccessories.items,
        },
        bulkPrinting: {
          ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.bulkPrinting,
          ...parsed.bulkPrinting,
          scenarios:
            parsed.bulkPrinting?.scenarios ||
            DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.bulkPrinting.scenarios,
          workflowSteps:
            parsed.bulkPrinting?.workflowSteps ||
            DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.bulkPrinting.workflowSteps,
        },
        studioWorkflow: {
          ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.studioWorkflow,
          ...parsed.studioWorkflow,
          image: {
            ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.studioWorkflow.image,
            ...parsed.studioWorkflow?.image,
          },
          submissionSteps:
            parsed.studioWorkflow?.submissionSteps ||
            DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.studioWorkflow.submissionSteps,
          batches:
            parsed.studioWorkflow?.batches ||
            DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.studioWorkflow.batches,
          cta: {
            ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.studioWorkflow.cta,
            ...parsed.studioWorkflow?.cta,
          },
        },
        dataPrivacy: {
          ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.dataPrivacy,
          ...parsed.dataPrivacy,
          cta: {
            ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.dataPrivacy.cta,
            ...parsed.dataPrivacy?.cta,
          },
        },
        specimenReplacement: {
          ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.specimenReplacement,
          ...parsed.specimenReplacement,
          specimen: {
            ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.specimenReplacement.specimen,
            ...parsed.specimenReplacement?.specimen,
            frontSteps:
              parsed.specimenReplacement?.specimen?.frontSteps ||
              DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.specimenReplacement.specimen.frontSteps,
            reverseElements:
              parsed.specimenReplacement?.specimen?.reverseElements ||
              DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.specimenReplacement.specimen.reverseElements,
          },
          replacement: {
            ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.specimenReplacement.replacement,
            ...parsed.specimenReplacement?.replacement,
            triggers:
              parsed.specimenReplacement?.replacement?.triggers ||
              DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.specimenReplacement.replacement.triggers,
          },
        },
        pricingFactors: {
          ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.pricingFactors,
          ...parsed.pricingFactors,
          factors:
            parsed.pricingFactors?.factors ||
            DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.pricingFactors.factors,
          ctas:
            parsed.pricingFactors?.ctas ||
            DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.pricingFactors.ctas,
        },
        productionProcess: {
          ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.productionProcess,
          ...parsed.productionProcess,
          steps:
            parsed.productionProcess?.steps ||
            DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.productionProcess.steps,
        },
        setupPackages: {
          ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.setupPackages,
          ...parsed.setupPackages,
          packages:
            parsed.setupPackages?.packages ||
            DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.setupPackages.packages,
        },
        whyChoose: {
          ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.whyChoose,
          ...parsed.whyChoose,
          items:
            parsed.whyChoose?.items ||
            DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.whyChoose.items,
          cta: {
            ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.whyChoose.cta,
            ...parsed.whyChoose?.cta,
          },
        },
        eligibleSectors: {
          ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.eligibleSectors,
          ...parsed.eligibleSectors,
          sectors:
            parsed.eligibleSectors?.sectors ||
            DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.eligibleSectors.sectors,
        },
        faqsSection: {
          ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.faqsSection,
          ...parsed.faqsSection,
          faqs:
            parsed.faqsSection?.faqs ||
            DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.faqsSection.faqs,
        },
        closingCta: {
          ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.closingCta,
          ...parsed.closingCta,
          ctas:
            parsed.closingCta?.ctas ||
            DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.closingCta.ctas,
        },
        hubDirectory: {
          ...DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.hubDirectory,
          ...parsed.hubDirectory,
          internalLinks:
            parsed.hubDirectory?.internalLinks ||
            DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA.hubDirectory.internalLinks,
        },
      };
    }
  } catch (err) {
    console.error("Error reading dynamic-membership-card-printing.json:", err);
  }
  return DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA;
}

export function saveDynamicMembershipCardPrinting(
  data: DynamicMembershipCardPrintingPageData
): DynamicMembershipCardPrintingPageData {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
  return data;
}

export function resetDynamicMembershipCardPrinting(): DynamicMembershipCardPrintingPageData {
  saveDynamicMembershipCardPrinting(DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA);
  return DEFAULT_MEMBERSHIP_CARD_PRINTING_DATA;
}
