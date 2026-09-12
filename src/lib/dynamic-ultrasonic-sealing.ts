import fs from "fs";
import path from "path";
import type { DynamicUltrasonicSealingData } from "./dynamic-ultrasonic-sealing-types";

const DATA_FILE = path.join(process.cwd(), "src", "data", "dynamic-ultrasonic-sealing.json");

export const DEFAULT_ULTRASONIC_SEALING_DATA: DynamicUltrasonicSealingData = {
  meta: {
    title: "Ultrasonic Sealing for ID Card Lanyards | IDGen",
    description:
      "Ultrasonic sealing for ID card lanyards and hook attachments. Cleaner lanyard assembly for school, employee, event and bulk ID card projects. One-hook and two-hook configurations available.",
    path: "/ultrasonic-sealing/",
  },
  hero: {
    badge: "Ultrasonic Sealing for ID Card Lanyards",
    h1: "A Cleaner Way to Attach",
    h1Gradient: "Lanyards to ID Card Holders",
    description:
      "IDGen provides ultrasonic sealing for ID card lanyard attachments, creating a finished connection between the lanyard and the required attachment configuration. Ultrasonic sealing can be used with suitable hooks and lanyard assemblies where a cleaner, more finished attachment is required.",
    advisoryBadge: "Integrated Attachment Workflow",
    advisoryTitle:
      "Instead of relying only on a conventional exposed metal attachment, ultrasonic sealing creates an integrated finished lanyard assembly:",
    advisorySteps: [
      "Configuration",
      "Materials",
      "Assembly",
      "Ultrasonic Sealing",
      "Inspection",
      "Quality Check",
      "Dispatch",
    ],
    primaryCta: {
      label: "Request an Ultrasonic Sealing Quote",
      href: "/request-a-quote/",
    },
    secondaryCta: {
      label: "Explore Custom Printed Lanyards",
      href: "/custom-printed-lanyard-printing/",
    },
    slides: [
      {
        id: "ultrasonic-single-seal",
        imageSrc: "/images/idgen-ultrasonic-lanyard-sealing.jpg",
        alt: "IDGen single hook ultrasonic acoustic welded lanyard attachment with zero metal staples",
        title: "Single-Hook Ultrasonic Acoustic Fusion",
        category: "1-Point Seal",
        topBadge: "Acoustic Fusion Weld",
        specPill: "Zero Metal Staples",
        bottomSpec: "IDGen Acoustic Weld • High Tensile Bond • Dog Hook",
        hubTag: "GUWAHATI FACTORY",
      },
      {
        id: "ultrasonic-dual-hook",
        imageSrc: "/images/two-hook-ultrasonic-lanyard-sealing.jpg",
        alt: "IDGen dual hook ultrasonic sealing for conference and event lanyard badge attachments",
        title: "Two-Hook Ultrasonic Welded Configuration",
        category: "2-Point Seal",
        topBadge: "Dual-Hook Sealing",
        specPill: "Anti-Twist Stability",
        bottomSpec: "Dual Acoustic Welds • Wide Badge Balanced Carry",
        hubTag: "EVENT & VIP PASS",
      },
      {
        id: "ultrasonic-precision-seam",
        imageSrc: "/images/lanyard-hero-slide-ultrasonic-sealed.jpg",
        alt: "IDGen ultrasonic welded seam on custom printed satin lanyard ribbon with seamless joint",
        title: "Precision High-Frequency Acoustic Weld",
        category: "Weld Detail",
        topBadge: "Acoustic Bond Tech",
        specPill: "Skin-Friendly Finish",
        bottomSpec: "High-Frequency Vibration • Zero Scratch Fabric Fusion",
        hubTag: "ZERO TEAR",
      },
      {
        id: "ultrasonic-complete-kit",
        imageSrc: "/images/complete-id-card-lanyard-ultrasonic-sealing.jpg",
        alt: "Complete IDGen identification set with card, holder, hook and ultrasonic sealed lanyard",
        title: "Complete Integrated ID Badge Assembly",
        category: "Full System",
        topBadge: "Full ID Ecosystem",
        specPill: "Ready-to-Wear Kit",
        bottomSpec: "Card + Holder + Hook + Ultrasonic Sealed Lanyard",
        hubTag: "ALL-IN-ONE",
      },
      {
        id: "ultrasonic-vs-metal",
        imageSrc: "/images/ultrasonic-sealing-vs-metal-lanyard-attachment.jpg",
        alt: "IDGen ultrasonic sealed attachment compared with conventional exposed metal attachments",
        title: "Acoustic Fusion vs Metal Hardware",
        category: "Clean Finish",
        topBadge: "Clean vs Traditional",
        specPill: "Corrosion-Free",
        bottomSpec: "No Sharp Crimps • No Surface Rust • Modern Aesthetic",
        hubTag: "PREMIUM FINISH",
      },
    ],
  },
  suitableOrganizations: {
    eyebrow: "Organizational Applications",
    title: "It is particularly useful for organizations ordering:",
    items: [
      "Student ID card sets",
      "Employee ID card sets",
      "Institutional ID cards",
      "Event identification sets",
      "Membership identification",
      "Bulk organizational ID card projects",
    ],
  },
  whatIsSealing: {
    eyebrow: "Technology Definition",
    title: "What Is Ultrasonic Sealing?",
    description:
      "Ultrasonic sealing uses high-frequency mechanical vibration to join compatible materials through localized heat generated at the joining area. For ID card lanyard applications, the process can be used to secure the lanyard and attachment arrangement into a finished assembly.",
    factorsTitle: "The exact sealing method depends on:",
    factors: [
      "Lanyard construction",
      "Attachment type",
      "Number of attachment points",
      "Material",
      "Required configuration",
      "Product design",
    ],
    footnote: "The objective is to create a cleaner and more finished lanyard attachment.",
  },
  whyUseSealing: {
    eyebrow: "Key Benefits",
    title: "Why Use Ultrasonic Sealing?",
    lede: "Traditional lanyard assemblies can use exposed metal attachment components. Ultrasonic sealing provides an alternative attachment method that reduces dependence on exposed metal attachment points in suitable configurations.",
    hardwareIssuesTitle: "Depending on the design and environment, exposed metal hardware may:",
    hardwareIssues: [
      "Feel sharp",
      "Catch on clothing",
      "Develop surface corrosion over time",
      "Become visually untidy",
      "Require additional handling during assembly",
    ],
    advantages: [
      {
        iconName: "Sparkles",
        title: "A More Finished Appearance",
        body: "The sealed connection can create a cleaner-looking transition between the lanyard and attachment.",
      },
      {
        iconName: "ShieldCheck",
        title: "Reduced Exposure to Sharp Metal Parts",
        body: "Where the selected configuration allows it, ultrasonic sealing can reduce the amount of exposed metal hardware around the attachment area.",
      },
      {
        iconName: "Eye",
        title: "Better Long-Term Appearance",
        body: "Because the attachment can be integrated into the lanyard assembly, it can avoid some of the appearance issues associated with exposed metal hardware.",
      },
    ],
    warningBox: {
      title: "Important:",
      text: "Ultrasonic sealing does not make every lanyard or attachment configuration permanently corrosion-proof. Its suitability depends on the materials and construction used.",
    },
  },
  compareTable: {
    eyebrow: "Specification Matrix",
    title: "Ultrasonic Sealing vs Conventional Metal Attachment",
    columns: ["Feature", "Conventional Exposed Metal Attachment", "Ultrasonic Sealing"],
    rows: [
      ["Lanyard attachment", "Metal hardware", "Sealed attachment configuration"],
      ["Exposed metal", "Depends on design", "Can be reduced"],
      ["Sharp exposed edges", "Possible", "Can be reduced in suitable designs"],
      ["Rust/corrosion appearance", "Possible with exposed metal", "Reduced where exposed metal is eliminated/reduced"],
      ["Appearance", "Conventional", "Cleaner, integrated appearance"],
      ["Suitable for bulk ID projects", "Yes", "Yes"],
      ["Configuration", "Depends on hardware", "Depends on lanyard/material/attachment"],
    ],
    conclusionText:
      "The right method depends on the customer's product design and required attachment configuration.",
  },
  wearableIntegration: {
    eyebrow: "Wearable Integration",
    title: "Ultrasonic Sealing for ID Card Lanyards",
    description:
      "Ultrasonic sealing is primarily relevant to the lanyard attachment stage of an identification setup.",
    typicalFlow: {
      label: "Typical Wearable System",
      steps: ["ID Card", "Holder", "Hook", "Lanyard"],
    },
    sealedFlow: {
      label: "With Ultrasonic Sealing",
      steps: ["ID Card", "Holder", "Hook", "Ultrasonic Sealing", "Lanyard"],
    },
    footnote: "The exact assembly depends on the selected components.",
  },
  sealingPoints: {
    eyebrow: "Sealing Points",
    title: "One Hook vs Two Hook Sealing",
    lede: "The number of ultrasonic sealing points depends on the attachment configuration.",
    oneHook: {
      badge: "One-Hook Configuration",
      title: "1 Hook + 1 Ultrasonic Sealing Point",
      desc: "For a lanyard using one hook, the required attachment can use 1 sealing point.",
      steps: ["Lanyard", "Ultrasonic Sealing", "Hook", "ID Card/Holder"],
    },
    twoHook: {
      badge: "Two-Hook Configuration",
      title: "2 Hooks + 2 Ultrasonic Sealing Points",
      desc: "Some applications use two hooks with the lanyard, requiring 2 sealing points.",
      flow1: ["Lanyard", "Ultrasonic Sealing", "Hook", "Card"],
      flow2: ["Lanyard", "Ultrasonic Sealing", "Hook", "Card"],
    },
    footnote:
      "The final configuration should be confirmed according to the actual lanyard and card design.",
  },
  eventCards: {
    eyebrow: "Event Accreditation",
    title: "Ultrasonic Sealing for Event Cards",
    description:
      "Event identification can use different attachment configurations. Some event cards use Event Card + Lanyard + 1 Hook, while others use Event Card + Lanyard + 2 Hooks.",
    oneHookCard: {
      title: "One Hook",
      formula: "1 Hook → 1 Sealing Point",
    },
    twoHookCard: {
      title: "Two Hooks",
      formula: "2 Hooks → 2 Sealing Points",
    },
    infoText:
      "This is why ultrasonic sealing should be quoted based on the complete event-card attachment configuration, rather than simply quoting one generic sealing charge.",
    linkText: "Explore Event Card Printing",
    linkHref: "/event-card-printing/",
  },
  completeSets: {
    eyebrow: "Coordinated Sets",
    title: "Ultrasonic Sealing for Complete ID Card Sets",
    lede: "Organizations can combine ultrasonic sealing with other identification components. This allows customers to order the required identification components as one coordinated setup.",
    setup1: {
      badge: "Setup 1",
      title: "Standard Wearable Set",
      steps: ["ID Card", "Holder", "Hook", "Lanyard"],
    },
    setup2: {
      badge: "Setup 2",
      title: "Sealed Wearable Set",
      steps: ["ID Card", "Holder", "Hook", "Ultrasonic Sealing", "Lanyard"],
    },
    setup3: {
      badge: "Setup 3",
      title: "Complete Branded Identification Set",
      steps: [
        "Printed ID Card",
        "Holder",
        "Hook",
        "Ultrasonic Sealing",
        "Custom Printed Lanyard",
      ],
    },
    linkText: "Explore Complete ID Card Solutions",
    linkHref: "/id-card-printing/",
  },
  schoolsAndCompanies: {
    schools: {
      iconName: "GraduationCap",
      title: "Ultrasonic Sealing for Schools",
      description: "Schools can use sealed lanyard assemblies for:",
      useCases: [
        "Student ID cards",
        "Teacher ID cards",
        "Staff ID cards",
        "School events",
        "Institutional programmes",
      ],
      steps: [
        "Student ID Card",
        "Holder",
        "Hook",
        "Ultrasonic Sealing",
        "School Lanyard",
      ],
      note: "The exact attachment configuration depends on the selected holder, hook and lanyard.",
      linkText: "Explore Student ID Card Printing",
      linkHref: "/student-id-card-printing/",
    },
    companies: {
      iconName: "Building2",
      title: "Ultrasonic Sealing for Companies",
      description: "Companies can use ultrasonic-sealed lanyard assemblies for:",
      useCases: [
        "Employee ID cards",
        "Staff cards",
        "Corporate events",
        "Visitor identification",
        "Membership or access identification",
      ],
      steps: [
        "Employee ID Card",
        "Holder",
        "Hook",
        "Ultrasonic Sealing",
        "Company Lanyard",
      ],
      linkText: "Explore Employee ID Card Printing",
      linkHref: "/employee-id-card-printing/",
    },
  },
  processWorkflow: {
    eyebrow: "Workflow Steps",
    title: "Ultrasonic Sealing Process",
    steps: [
      {
        title: "01 - Select the Configuration",
        body: "Confirm: Lanyard, Hook, Holder (if required), Number of hooks, Sealing requirement.",
      },
      {
        title: "02 - Confirm Materials",
        body: "The lanyard and attachment materials are checked for suitability.",
      },
      {
        title: "03 - Prepare the Assembly",
        body: "The lanyard and attachment are positioned according to the required configuration.",
      },
      {
        title: "04 - Ultrasonic Sealing",
        body: "The appropriate sealing process is applied to create the required attachment.",
      },
      {
        title: "05 - Inspection",
        body: "The finished attachment is checked for: Position, Appearance, Attachment quality, Required configuration.",
      },
      {
        title: "06 - Complete Assembly",
        body: "The sealed lanyard is combined with the required identification components.",
      },
      {
        title: "07 - Final Quality Check",
        body: "The completed identification setup is checked before packaging and dispatch.",
      },
    ],
  },
  qualityAspects: {
    eyebrow: "Quality Standards",
    title: "Quality Matters in Lanyard Sealing",
    description:
      "A sealed lanyard should not only look good. The finished assembly should also be checked for:",
    aspects: [
      "Correct hook configuration",
      "Correct sealing position",
      "Consistent appearance",
      "Proper attachment",
      "Correct lanyard orientation",
      "Required number of sealing points",
    ],
    footnote: "For bulk orders, consistency across the batch is particularly important.",
  },
  pricingLogic: {
    eyebrow: "Pricing Logic",
    title: "Ultrasonic Sealing Price",
    description:
      "The cost of ultrasonic sealing depends on the required configuration. Factors can include: Number of sealing points, Number of hooks, Lanyard type, Attachment configuration, Quantity, Complete-set requirement.",
    principle1: {
      label: "Basic Principle 1",
      text: "1 Hook → 1 Sealing Point",
    },
    principle2: {
      label: "Basic Principle 2",
      text: "2 Hooks → 2 Sealing Points",
    },
    infoText:
      "The final price should therefore be calculated according to the actual configuration rather than assuming the same sealing quantity for every order.",
    linkText: "View IDGen Pricing",
    linkHref: "/pricing/",
  },
  attachmentOptions: {
    eyebrow: "Attachment Variations",
    title: "Complete Lanyard Attachment Options",
    lede: "Customers can choose the attachment configuration according to their application.",
    items: [
      {
        title: "Option 1 - Conventional Attachment",
        badge: "Traditional",
        formula: ["Lanyard", "Hook"],
        desc: "Standard hardware loop assembly with conventional metal fastener.",
      },
      {
        title: "Option 2 - Single Ultrasonic Sealing",
        badge: "1-Point Seal",
        formula: ["Lanyard", "Hook", "1 Sealing Point"],
        desc: "Standard single hook lanyard with integrated acoustic fused weld.",
      },
      {
        title: "Option 3 - Two-Hook Ultrasonic Configuration",
        badge: "2-Point Seal",
        formula: ["Lanyard", "2 Hooks", "2 Sealing Points"],
        desc: "Dual corner hook lanyard for wide conference badges with two acoustic welds.",
      },
      {
        title: "Option 4 - Complete ID Card Assembly",
        badge: "Full Ecosystem",
        formula: ["ID Card", "Holder", "Hook(s)", "Ultrasonic Sealing", "Lanyard"],
        desc: "Complete pre-assembled identification set ready for institutional distribution.",
      },
    ],
    footnote:
      "The recommended configuration depends on the card, holder, lanyard and application.",
  },
  whyIdgenUses: {
    eyebrow: "Engineering Rationale",
    title: "Why IDGen Uses Ultrasonic Sealing",
    lede: "IDGen uses ultrasonic sealing as an attachment option because it can provide a cleaner and more integrated alternative to certain exposed metal attachment arrangements.",
    features: [
      {
        iconName: "Sparkles",
        title: "Cleaner Appearance",
        body: "Creates a seamless, refined bond between fabric ribbon and hook hardware.",
      },
      {
        iconName: "ShieldCheck",
        title: "Reduced Exposure to Metal Hardware",
        body: "Eliminates bulky metal crimps and exposed sharp wire staples.",
      },
      {
        iconName: "BadgeCheck",
        title: "Reduced Risk of Sharp Edges",
        body: "Skin-friendly smooth finish that will not scratch necks or catch on clothing.",
      },
      {
        iconName: "Layers",
        title: "Better Visual Integration",
        body: "Attachment blends cleanly into the custom printed satin lanyard strap.",
      },
      {
        iconName: "Boxes",
        title: "Suitable for Bulk ID Projects",
        body: "High-speed automated factory consistency across thousands of badge units.",
      },
      {
        iconName: "Workflow",
        title: "Consistent Attachment Configuration",
        body: "Standardized loop tension and weld placement across entire institutional orders.",
      },
    ],
    footnote:
      "The final result depends on the selected materials, equipment and assembly design.",
  },
  eligibleOrganizations: {
    eyebrow: "Target Audiences",
    title: "Who Can Order Ultrasonic Sealing?",
    description: "Ultrasonic sealing can be useful for organizations ordering:",
    items: [
      "Student ID cards",
      "Employee ID cards",
      "Staff ID cards",
      "Event cards",
      "Membership cards",
      "Institutional ID cards",
      "Corporate identification",
      "Bulk lanyard assemblies",
    ],
    footnote:
      "It is especially relevant when the customer wants a finished lanyard attachment rather than a loose lanyard and separate hardware.",
  },
  faqs: {
    eyebrow: "Questions & Answers",
    title: "Frequently Asked Questions",
    items: [
      {
        q: "What is ultrasonic sealing in ID card lanyards?",
        a: "Ultrasonic sealing is a joining process that uses high-frequency mechanical vibration to create a sealed attachment between compatible materials in a lanyard assembly.",
      },
      {
        q: "Is ultrasonic sealing used with lanyards?",
        a: "Yes. IDGen uses ultrasonic sealing as an attachment option for suitable lanyard and hook configurations.",
      },
      {
        q: "Is ultrasonic sealing better than a metal attachment?",
        a: "It can provide a cleaner and more integrated attachment and can reduce exposed metal hardware in suitable configurations. The best method depends on the lanyard and attachment design.",
      },
      {
        q: "Can metal hooks rust?",
        a: "Exposed metal hardware can develop corrosion or surface deterioration depending on the metal, coating, environment and usage. Ultrasonic sealing can reduce exposed metal in suitable attachment configurations.",
      },
      {
        q: "Can ultrasonic sealing remove sharp metal edges?",
        a: "It can reduce exposure to certain metal attachment components where the design allows it, but the final configuration depends on the selected hook and lanyard.",
      },
      {
        q: "How many sealing points are required for one hook?",
        a: "A one-hook configuration generally requires one sealing point.",
      },
      {
        q: "How many sealing points are required for two hooks?",
        a: "A two-hook configuration generally requires two sealing points.",
      },
      {
        q: "Can event cards use ultrasonic sealing?",
        a: "Yes. Event cards can use ultrasonic sealing when the selected lanyard and hook configuration is suitable.",
      },
      {
        q: "Can ultrasonic sealing be added to a complete ID card set?",
        a: "Yes. A complete setup can include: ID Card + Holder + Hook + Ultrasonic Sealing + Lanyard.",
      },
      {
        q: "Can schools use ultrasonic-sealed lanyards?",
        a: "Yes. They can be used with suitable student, teacher and staff identification configurations.",
      },
      {
        q: "Can companies use ultrasonic-sealed lanyards?",
        a: "Yes. They can be used for suitable employee and organizational identification applications.",
      },
      {
        q: "Does ultrasonic sealing replace the ID card holder?",
        a: "No. Ultrasonic sealing is an attachment/assembly method. It does not replace a holder when a holder is required.",
      },
    ],
  },
  closingCta: {
    badge: "Get Started with Ultrasonic Sealing",
    title: "Need Ultrasonic Sealing?",
    description:
      "Tell us: Number of ID cards, Lanyard type, Number of hooks, Holder requirement, One- or two-hook configuration, and whether you need the complete ID card set. We can then determine the appropriate sealing and assembly configuration.",
    buttonPrimary: {
      text: "Request a Quote",
      href: "/request-a-quote/",
    },
    buttonSecondary: {
      text: "Explore Custom Printed Lanyards",
      href: "/custom-printed-lanyard-printing/",
    },
    buttonTertiary: {
      text: "Explore Event Card Printing",
      href: "/event-card-printing/",
    },
    buttonQuaternary: {
      text: "Explore ID Card Printing",
      href: "/id-card-printing/",
    },
  },
  regionalDirectory: {
    hubTag: "Assam & Northeast India Hub",
    title: "Ultrasonic Sealing & Lanyard Assembly in Guwahati, Assam & Northeast India",
    description:
      "IDGen provides automated ultrasonic sealing for school lanyards, employee credentials, and event badge attachments across Guwahati, Assam, and all 8 Northeast states.",
    subhead: "Related IDGen Solutions & Directories:",
    links: [
      { topic: "Custom lanyards", href: "/custom-printed-lanyard-printing/" },
      { topic: "Event cards", href: "/event-card-printing/" },
      { topic: "ID Card Printing", href: "/id-card-printing/" },
      { topic: "Student ID Cards", href: "/student-id-card-printing/" },
      { topic: "Employee ID Cards", href: "/employee-id-card-printing/" },
      { topic: "Card Holders", href: "/id-card-holders/" },
      { topic: "ID Card Hooks", href: "/id-card-hooks/" },
      { topic: "Pricing", href: "/pricing/" },
      { topic: "Why IDGen", href: "/why-idgen/" },
      { topic: "Guwahati Hub", href: "/service-areas/assam/guwahati/" },
      { topic: "Assam Services", href: "/service-areas/assam/" },
      { topic: "Request a Quote", href: "/request-a-quote/" },
    ],
  },
};

export function getDynamicUltrasonicSealing(): DynamicUltrasonicSealingData {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const content = fs.readFileSync(DATA_FILE, "utf-8");
      const parsed = JSON.parse(content);
      return {
        ...DEFAULT_ULTRASONIC_SEALING_DATA,
        ...parsed,
        meta: { ...DEFAULT_ULTRASONIC_SEALING_DATA.meta, ...parsed.meta },
        hero: {
          ...DEFAULT_ULTRASONIC_SEALING_DATA.hero,
          ...parsed.hero,
          slides: parsed.hero?.slides || DEFAULT_ULTRASONIC_SEALING_DATA.hero.slides,
        },
        suitableOrganizations: {
          ...DEFAULT_ULTRASONIC_SEALING_DATA.suitableOrganizations,
          ...parsed.suitableOrganizations,
        },
        whatIsSealing: { ...DEFAULT_ULTRASONIC_SEALING_DATA.whatIsSealing, ...parsed.whatIsSealing },
        whyUseSealing: {
          ...DEFAULT_ULTRASONIC_SEALING_DATA.whyUseSealing,
          ...parsed.whyUseSealing,
          advantages: parsed.whyUseSealing?.advantages || DEFAULT_ULTRASONIC_SEALING_DATA.whyUseSealing.advantages,
        },
        compareTable: {
          ...DEFAULT_ULTRASONIC_SEALING_DATA.compareTable,
          ...parsed.compareTable,
          rows: parsed.compareTable?.rows || DEFAULT_ULTRASONIC_SEALING_DATA.compareTable.rows,
        },
        wearableIntegration: {
          ...DEFAULT_ULTRASONIC_SEALING_DATA.wearableIntegration,
          ...parsed.wearableIntegration,
        },
        sealingPoints: { ...DEFAULT_ULTRASONIC_SEALING_DATA.sealingPoints, ...parsed.sealingPoints },
        eventCards: { ...DEFAULT_ULTRASONIC_SEALING_DATA.eventCards, ...parsed.eventCards },
        completeSets: { ...DEFAULT_ULTRASONIC_SEALING_DATA.completeSets, ...parsed.completeSets },
        schoolsAndCompanies: {
          ...DEFAULT_ULTRASONIC_SEALING_DATA.schoolsAndCompanies,
          ...parsed.schoolsAndCompanies,
          schools: {
            ...DEFAULT_ULTRASONIC_SEALING_DATA.schoolsAndCompanies.schools,
            ...parsed.schoolsAndCompanies?.schools,
          },
          companies: {
            ...DEFAULT_ULTRASONIC_SEALING_DATA.schoolsAndCompanies.companies,
            ...parsed.schoolsAndCompanies?.companies,
          },
        },
        processWorkflow: {
          ...DEFAULT_ULTRASONIC_SEALING_DATA.processWorkflow,
          ...parsed.processWorkflow,
          steps: parsed.processWorkflow?.steps || DEFAULT_ULTRASONIC_SEALING_DATA.processWorkflow.steps,
        },
        qualityAspects: { ...DEFAULT_ULTRASONIC_SEALING_DATA.qualityAspects, ...parsed.qualityAspects },
        pricingLogic: { ...DEFAULT_ULTRASONIC_SEALING_DATA.pricingLogic, ...parsed.pricingLogic },
        attachmentOptions: {
          ...DEFAULT_ULTRASONIC_SEALING_DATA.attachmentOptions,
          ...parsed.attachmentOptions,
          items: parsed.attachmentOptions?.items || DEFAULT_ULTRASONIC_SEALING_DATA.attachmentOptions.items,
        },
        whyIdgenUses: {
          ...DEFAULT_ULTRASONIC_SEALING_DATA.whyIdgenUses,
          ...parsed.whyIdgenUses,
          features: parsed.whyIdgenUses?.features || DEFAULT_ULTRASONIC_SEALING_DATA.whyIdgenUses.features,
        },
        eligibleOrganizations: {
          ...DEFAULT_ULTRASONIC_SEALING_DATA.eligibleOrganizations,
          ...parsed.eligibleOrganizations,
        },
        faqs: {
          ...DEFAULT_ULTRASONIC_SEALING_DATA.faqs,
          ...parsed.faqs,
          items: parsed.faqs?.items || DEFAULT_ULTRASONIC_SEALING_DATA.faqs.items,
        },
        closingCta: { ...DEFAULT_ULTRASONIC_SEALING_DATA.closingCta, ...parsed.closingCta },
        regionalDirectory: {
          ...DEFAULT_ULTRASONIC_SEALING_DATA.regionalDirectory,
          ...parsed.regionalDirectory,
          links: parsed.regionalDirectory?.links || DEFAULT_ULTRASONIC_SEALING_DATA.regionalDirectory.links,
        },
      };
    }
  } catch (err) {
    console.error("Error reading dynamic-ultrasonic-sealing.json:", err);
  }
  return DEFAULT_ULTRASONIC_SEALING_DATA;
}

export function saveDynamicUltrasonicSealing(
  data: DynamicUltrasonicSealingData
): DynamicUltrasonicSealingData {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
  return data;
}

export function resetDynamicUltrasonicSealing(): DynamicUltrasonicSealingData {
  saveDynamicUltrasonicSealing(DEFAULT_ULTRASONIC_SEALING_DATA);
  return DEFAULT_ULTRASONIC_SEALING_DATA;
}
