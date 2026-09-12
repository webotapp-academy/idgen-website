import fs from "fs";
import path from "path";
import { DynamicIdCardHooksData } from "./dynamic-id-card-hooks-types";

const DATA_FILE_PATH = path.join(process.cwd(), "src", "data", "dynamic-id-card-hooks.json");

export const DEFAULT_ID_CARD_HOOKS_DATA: DynamicIdCardHooksData = {
  hero: {
    badge: "ID Card Hooks & Attachments",
    badgeSub: "Direct Factory Supply",
    title: "ID Card Hooks & Attachments for",
    highlight: "Lanyards and ID Cards",
    description:
      "IDGen provides ID card hooks and attachment components used to connect identification cards, holders and badges to lanyards. The appropriate hook depends on the holder, card configuration, lanyard and intended application.",
    typicalConfigLabel: "Typical Configuration",
    typicalConfigValue: "ID Card → Holder → Hook → Lanyard",
    specStrip: [
      {
        title: "Secure Hold",
        desc: "Compatible attachment",
        iconName: "ShieldCheck",
      },
      {
        title: "1 or 2 Hooks",
        desc: "Flexible configuration",
        iconName: "Link2",
      },
      {
        title: "20 mm Fit",
        desc: "Standard lanyard width",
        iconName: "Sliders",
      },
      {
        title: "72-Hour",
        desc: "Dispatch commitment",
        iconName: "Truck",
      },
    ],
    primaryCta: {
      label: "Request a Quote",
      href: "/request-a-quote/",
    },
    secondaryCta: {
      label: "Explore ID Card Holders",
      href: "/id-card-holders/",
    },
    tertiaryCta: {
      label: "Custom Lanyards",
      href: "/custom-printed-lanyard-printing/",
    },
    trustPoints: [
      "Wholesale Factory Supply",
      "Compatible Attachment",
      "Ready Stock in Guwahati",
    ],
    slides: [
      {
        id: "hook-chrome-swivel",
        imageSrc: "/images/product-hooks-hardware.jpg",
        alt: "IDGen chrome swivel dog hook attachments for 20mm custom printed lanyards",
        title: "Premium Chrome Swivel Dog Hook",
        category: "Dog Hook",
        topBadge: "Chrome Swivel Hook",
        specPill: "360° Free Rotation",
        bottomSpec: "High-Tensile Zinc Alloy • Chrome Polished • 20mm Loop Fit",
        hubTag: "GUWAHATI FACTORY",
      },
      {
        id: "hook-dual-event-clips",
        imageSrc: "/images/hero-slide-event-badge.jpg",
        alt: "IDGen dual chrome swivel hooks for wide conference badges and VIP event passes",
        title: "Dual-Hook Anti-Twist Configuration",
        category: "2-Hook Set",
        topBadge: "Dual-Hook Stability",
        specPill: "Zero-Flip Balance",
        bottomSpec: "Twin Chrome Clips • Balanced Wear • Summit & VIP Badges",
        hubTag: "EVENT & VIP",
      },
      {
        id: "hook-configs-system",
        imageSrc: "/images/idgen-event-card-one-hook-two-hook-configuration.jpg",
        alt: "Comparison of single hook vs dual hook lanyard attachment setups by IDGen",
        title: "1-Hook & 2-Hook Attachment System",
        category: "Multi-Option",
        topBadge: "Hardware System",
        specPill: "Fish Hook & Swivel",
        bottomSpec: "Universal Compatibility • Standard Slot / Double Slot Holders",
        hubTag: "ALL CONFIGS",
      },
      {
        id: "hook-ultrasonic-weld",
        imageSrc: "/images/idgen-ultrasonic-lanyard-sealing.jpg",
        alt: "Ultrasonic welded hook attachment on custom printed satin lanyard ribbon",
        title: "Ultrasonic Welded Hook Connection",
        category: "Acoustic Seal",
        topBadge: "Acoustic Bond",
        specPill: "Zero Sharp Staples",
        bottomSpec: "Smooth Fused Loop • High Strength Joint • Dog Hook",
        hubTag: "CLEAN FINISH",
      },
      {
        id: "hook-bulk-warehouse",
        imageSrc: "/images/id-holders-hooks.jpg",
        alt: "Wholesale bulk supply of ID card hooks and hardware accessories in Guwahati",
        title: "Wholesale Bulk Factory Supply",
        category: "Wholesale",
        topBadge: "Ready Factory Stock",
        specPill: "25,000+ Units Ready",
        bottomSpec: "Swivel Hooks • Fish Hooks • Keyrings • Express 24-48h Dispatch",
        hubTag: "READY STOCK",
      },
    ],
  },
  quickSelection: {
    badge: "Matrix Selection",
    title: "Quick Hook Selection Matrix",
    lede: "Compare attachment configurations, compatible holder pairings, lanyard requirements, and badge suspension formats.",
    catalog: [
      {
        id: "fish-hook",
        code: "Fish Hook",
        name: "Fish Hook for ID Cards",
        req: "Connect ID card holder or badge to a lanyard",
        badge: "Attachment",
        setup: "ID Card → Holder → Fish Hook → Lanyard",
        category: "fish",
        image: "/images/Lanyard with Hook Samples/Sample 18 .jpg",
        alt: "Fish hook attachment for ID card holder and lanyard",
        popular: true,
        tagline: "The fish hook is an attachment option used to connect a suitable ID card holder or badge to a lanyard.",
        description:
          "A fish hook is an attachment used to connect a compatible ID card holder or badge to a lanyard. A typical setup is: ID Card → Holder → Fish Hook → Lanyard. Compatibility should be confirmed before ordering in bulk.",
        suitable: [
          "ID cards",
          "Employee cards",
          "Student cards",
          "Visitor cards",
          "Event badges",
          "Membership cards",
          "Institutional badges",
        ],
        specs: [
          { k: "Product", v: "Fish Hook Attachment" },
          { k: "Configuration", v: "ID Card → Holder → Fish Hook → Lanyard" },
          { k: "Compatible Holder", v: "V-1, V-2, H-1, H-2 & Compatible Holders" },
          { k: "Lanyard Width", v: "20 mm Lanyard" },
          { k: "Card Format", v: "86 × 54 mm ID Card" },
          { k: "Application", v: "Wearable Identification Systems" },
        ],
      },
      {
        id: "one-hook",
        code: "One Hook",
        name: "One Hook Configuration",
        req: "Single attachment point for standard badging",
        badge: "Configuration A",
        setup: "ID Card / Holder + One Hook + Lanyard",
        category: "onehook",
        image: "/images/Lanyard with Hook Samples/Sample 17 .jpg",
        alt: "One hook configuration for ID card lanyards",
        popular: true,
        tagline: "ID Card / Holder + One Hook + Lanyard. Suitable where a single attachment point is required.",
        description:
          "Different identification projects may require different attachment arrangements. The One Hook configuration is suitable where a single attachment point is required for standard student, employee, or visitor identification.",
        suitable: [
          "Student identification",
          "Employee identification",
          "Staff identification",
          "Visitor identification",
          "Institutional identification",
        ],
        specs: [
          { k: "Configuration", v: "ID Card / Holder + One Hook + Lanyard" },
          { k: "Attachment Points", v: "Single Attachment Point" },
          { k: "Lanyard Type", v: "Single Hook Lanyard" },
          { k: "Usage", v: "Standard Wearable Badging" },
        ],
      },
      {
        id: "two-hook",
        code: "Two Hooks",
        name: "Two-Hook Configuration",
        req: "Configurations where two attachment points are required",
        badge: "Configuration B",
        setup: "ID Card / Holder + Two Hooks + Lanyard",
        category: "twohook",
        image: "/images/idgen-event-card-one-hook-two-hook-configuration.jpg",
        alt: "Two hook configuration for ID card lanyards",
        popular: true,
        tagline: "ID Card / Holder + Two Hooks + Lanyard. Suitable where two attachment points are required.",
        description:
          "Suitable for configurations where two attachment points are required, such as event-specific configurations and wide event badges. The correct configuration depends on the card, holder and lanyard design.",
        suitable: [
          "Event badges",
          "Conference passes",
          "Delegates & Exhibitors",
          "Two-point suspension badges",
        ],
        specs: [
          { k: "Configuration", v: "ID Card / Holder + Two Hooks + Lanyard" },
          { k: "Attachment Points", v: "Two Attachment Points" },
          { k: "Recommended Event", v: "Explore Event Card Printing" },
          { k: "Application", v: "Event & Large Badge Rigging" },
        ],
      },
      {
        id: "complete-set",
        code: "Complete Setup",
        name: "Complete Identification Setup",
        req: "Card + Holder + Attachment + Lanyard",
        badge: "Full Setup",
        setup: "ID Card → Holder → Hook → Custom Printed Lanyard",
        category: "set",
        image: "/images/Lanyard with Hook Samples/Sample 25 .jpg",
        alt: "ID card holder hook and custom printed lanyard assembly",
        popular: true,
        tagline: "Card + Holder + Attachment + Lanyard supplied as a complete setup.",
        description:
          "Hooks can be supplied as part of a complete identification configuration. For example: 86 × 54 mm ID Card → Compatible Holder → Fish Hook → 20 mm Custom Printed Lanyard.",
        suitable: [
          "School batches",
          "Employee onboarding",
          "Institutional identification",
          "Events & Membership programmes",
        ],
        specs: [
          { k: "Tier 1", v: "Basic: ID Card + Holder" },
          { k: "Tier 2", v: "Wearable: ID Card + Holder + Hook + Lanyard" },
          { k: "Tier 3", v: "Branded: Card + Holder + Hook + Custom Lanyard" },
          { k: "Tier 4", v: "Complete: Card + Holder + Attachment + Lanyard" },
        ],
      },
    ],
  },
  assembly: {
    badge: "Layer-by-Layer Assembly",
    title: "What Is an ID Card Hook?",
    lede: "An ID card hook is an attachment used to connect an ID card holder or badge to a lanyard. It serves as the physical link in wearable identification systems.",
    note: "Instead of attaching the card directly to the lanyard, the hook provides the connection.",
    layers: [
      {
        step: "01",
        title: "ID Card",
        subtitle: "86 × 54 mm Identification Card",
        badge: "Personalized Card",
        material: "PVC Identification Card",
        benefit: "Core identification credentials, photograph, student/employee details and barcode.",
        iconName: "CreditCard",
        img: "/images/product-pvc-cards.jpg",
        details: [
          "86 × 54 mm standard card dimensions",
          "Student identification & Employee identification",
          "Compatible with holder drop-in and four-side lock",
        ],
      },
      {
        step: "02",
        title: "ID Card Holder",
        subtitle: "Protective Display Holder",
        badge: "V-1 / V-2 / H-1 / H-2",
        material: "Vertical or Horizontal ID Card Holder",
        benefit: "Protects and displays the card with a dedicated attachment aperture.",
        iconName: "Box",
        img: "/images/ID card holder/V-2/V-2.png",
        details: [
          "Vertical and horizontal orientations available",
          "Standard and four-side-lock options",
          "Attachment slot for connecting hook",
        ],
      },
      {
        step: "03",
        title: "Hook / Attachment",
        subtitle: "Connection Component",
        badge: "Fish Hook / One or Two Hooks",
        material: "ID Card Hook Attachment",
        benefit: "Provides the connection between the ID card holder and the lanyard.",
        iconName: "Anchor",
        img: "/images/Lanyard with Hook Samples/Sample 18 .jpg",
        details: [
          "Instead of attaching card directly to lanyard, hook provides the connection",
          "Small but important component of a complete wearable setup",
          "Available in One Hook, Two Hooks, or Fish Hook",
        ],
      },
      {
        step: "04",
        title: "Custom Printed Lanyard",
        subtitle: "Wearable Lanyard",
        badge: "20 mm Lanyard",
        material: "Custom Printed Lanyard Ribbon",
        benefit: "Carries organization name, logo, brand colours, repeating artwork and custom text.",
        iconName: "Sparkles",
        img: "/images/custom-printed-lanyard-printing-idgen.jpg",
        details: [
          "Organization name, Logo, Brand colours",
          "Repeating artwork & Custom text",
          "Connects to hook to complete wearable setup",
        ],
      },
    ],
  },
  rangeMaster: {
    badge: "Hardware Setups & Configurations",
    title: "Fish Hook & ID Card Hook Setups",
    lede: "Review detailed hook arrangements, holder pairing, lanyard compatibility, and configuration formats.",
    sections: [
      {
        code: "Fish Hook",
        badge: "Attachment Option",
        title: "Fish Hook for ID Cards",
        tagline: "The fish hook is an attachment option used to connect a suitable ID card holder or badge to a lanyard.",
        description:
          "A fish hook is an attachment used to connect a compatible ID card holder or badge to a lanyard. A typical setup is: ID Card → Holder → Fish Hook → Lanyard. Compatibility should be confirmed before ordering in bulk.",
        image: "/images/Lanyard with Hook Samples/Sample 18 .jpg",
        alt: "Fish hook attachment for ID card holder and lanyard",
        setup: "ID Card → Holder → Fish Hook → Lanyard",
        suitable: [
          "ID cards",
          "Employee cards",
          "Student cards",
          "Visitor cards",
          "Event badges",
          "Membership cards",
          "Institutional badges",
        ],
        conclusion: "Compatibility should be confirmed before ordering in bulk.",
        cta: {
          label: "Explore ID Card Holders",
          href: "/id-card-holders/",
        },
      },
      {
        code: "Hook + Holder",
        badge: "Pairing Setup",
        title: "Hook + ID Card Holder",
        tagline: "The hook is normally used together with a compatible holder.",
        description:
          "The hook is normally used together with a compatible holder. Standard Configuration: ID Card → Holder → Hook → Lanyard. For example: 86 × 54 mm ID Card → Compatible Holder → Fish Hook → 20 mm Lanyard. The exact combination depends on the selected holder and attachment.",
        image: "/images/Lanyard with Hook Samples/Sample 23 .jpg",
        alt: "ID card holder connected to hook attachment",
        setup: "86 × 54 mm ID Card → Compatible Holder → Fish Hook → 20 mm Lanyard",
        suitable: [
          "V-1 Standard Vertical Holder",
          "V-2 Four-Side-Lock Vertical Holder",
          "H-1 Standard Horizontal Holder",
          "H-2 Four-Side-Lock Horizontal Holder",
          "Compatible card holders & badges",
        ],
        conclusion: "The exact combination depends on the selected holder and attachment.",
        cta: {
          label: "Explore ID Card Holders",
          href: "/id-card-holders/",
        },
      },
      {
        code: "One Hook",
        badge: "Configuration Format",
        title: "One Hook Configuration",
        tagline: "ID Card / Holder + One Hook + Lanyard.",
        description:
          "ID Card / Holder + One Hook + Lanyard. Suitable where a single attachment point is required. Different identification projects may require different attachment arrangements.",
        image: "/images/Lanyard with Hook Samples/Sample 17 .jpg",
        alt: "One hook configuration for ID card lanyards",
        setup: "ID Card / Holder + One Hook + Lanyard",
        suitable: [
          "Student identification",
          "Employee identification",
          "Staff identification",
          "Visitor identification",
          "Institutional identification",
        ],
        conclusion: "Suitable where a single attachment point is required.",
        cta: {
          label: "Request a Quote",
          href: "/request-a-quote/",
        },
      },
      {
        code: "Two Hooks",
        badge: "Event Configuration",
        title: "Two-Hook Configuration",
        tagline: "ID Card / Holder + Two Hooks + Lanyard.",
        description:
          "ID Card / Holder + Two Hooks + Lanyard. Suitable for configurations where two attachment points are required. The correct configuration depends on the card, holder and lanyard design.",
        image: "/images/idgen-event-card-one-hook-two-hook-configuration.jpg",
        alt: "One hook and two hook configurations for ID card lanyards",
        setup: "ID Card / Holder + Two Hooks + Lanyard",
        suitable: [
          "Event badges",
          "Conference passes",
          "Delegates, speakers & organizers",
          "Large-format badge rigging",
        ],
        conclusion: "The correct configuration depends on the card, holder and lanyard design.",
        cta: {
          label: "Explore Event Card Printing",
          href: "/event-card-printing/",
        },
      },
      {
        code: "Hook + Lanyard",
        badge: "Lanyard Compatibility",
        title: "ID Card Hook & Lanyard Compatibility",
        tagline: "ID card hooks are commonly used with lanyards to create wearable identification.",
        description:
          "A typical configuration is: ID Card → Holder → Fish Hook → 20 mm Custom Printed Lanyard. IDGen also provides custom printed lanyards that can carry: Organization name, Logo, Brand colours, Repeating artwork, and Custom text.",
        image: "/images/Lanyard with Hook Samples/Sample 19 .jpg",
        alt: "ID card hook connecting holder to custom printed lanyard",
        setup: "ID Card → Holder → Fish Hook → 20 mm Custom Printed Lanyard",
        suitable: [
          "Organization name",
          "Logo",
          "Brand colours",
          "Repeating artwork",
          "Custom text",
        ],
        conclusion: "Matches with 20 mm custom printed lanyards for full branding.",
        cta: {
          label: "Explore Custom Printed Lanyard Printing",
          href: "/custom-printed-lanyard-printing/",
        },
      },
    ],
  },
  engineeringGuide: {
    badge: "Decision Factors",
    title: "Choosing the Right ID Card Hook",
    lede: "The correct hook should not be selected based only on appearance. Consider these four factors:",
    factors: [
      {
        num: "01",
        title: "1. Holder Type",
        desc: "Check the attachment point on your ID card holder.",
        detail:
          "Confirm the attachment hole or slot on your selected holder (e.g. V-1, V-2, H-1, H-2, CV-1 Crystal, or Metal Holder) to ensure compatible hook ingress.",
        iconName: "Box",
      },
      {
        num: "02",
        title: "2. Card Configuration",
        desc: "Confirm whether the card is being used inside a holder or as a direct badge attachment.",
        detail:
          "Determine whether the card will be housed within an ID card holder or punched directly for badge-clip attachment.",
        iconName: "Layers",
      },
      {
        num: "03",
        title: "3. Lanyard",
        desc: "Check the lanyard width and attachment arrangement.",
        detail:
          "Check whether you are pairing with a 16 mm, 20 mm, or custom printed lanyard, and whether a single hook or two-hook arrangement is needed.",
        iconName: "Sliders",
      },
      {
        num: "04",
        title: "4. Application",
        desc: "Consider whether the setup is intended for: Daily student use, Employee identification, Visitor identification, Events, Membership, Institutional use.",
        detail:
          "Match the hardware to your operational environment, from everyday classroom wear to executive summits and institutional supply.",
        iconName: "Users",
      },
    ],
    qualityBadge: "Quality & Fit",
    qualityTitle: "ID Card Hook Quality & Compatibility",
    qualityLede: "When ordering hooks, consider:",
    qualityPoints: [
      "Secure attachment",
      "Compatibility with the holder",
      "Compatibility with the lanyard",
      "Consistent construction",
      "Appropriate connection for the intended use",
    ],
    compatibilityRule: "Card / Holder Compatibility Rule",
    compatibilityNote:
      "A hook should connect smoothly to the holder without forcing or damaging the attachment hole.",
  },
  applications: {
    badge: "Applications",
    title: "ID Card Hook Uses",
    lede: "ID card hooks can be used with different identification applications.",
    subtitle: "Wearable Identification Systems",
    uses: [
      {
        title: "Student Identification",
        desc: "Hooks can connect student ID card holders to school or institutional lanyards.",
        link: { label: "Explore Student ID Card Printing", href: "/student-id-card-printing/" },
        iconName: "GraduationCap",
        gradient: "from-sky-500/10 via-blue-500/5 to-transparent",
        accentColor: "text-[#009fe3]",
        tag: "Schools & Colleges",
      },
      {
        title: "Employee Identification",
        desc: "Suitable hook configurations can be used with employee and staff identification.",
        link: { label: "Explore Employee ID Card Printing", href: "/employee-id-card-printing/" },
        iconName: "Briefcase",
        gradient: "from-cyan-500/10 via-sky-500/5 to-transparent",
        accentColor: "text-cyan-500",
        tag: "Corporate & Staff",
      },
      {
        title: "Events",
        desc: "Hooks can be used with suitable event-card and lanyard configurations.",
        link: { label: "Explore Event Card Printing", href: "/event-card-printing/" },
        iconName: "Ticket",
        gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
        accentColor: "text-amber-500",
        tag: "Conferences & Summits",
      },
      {
        title: "Institutions",
        desc: "Suitable for organizational, institutional and membership identification systems. The final configuration should always be matched to the holder and card being used.",
        iconName: "Building2",
        gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
        accentColor: "text-emerald-500",
        tag: "Organizations & Memberships",
      },
    ],
    commonUsesTitle: "Common Wearable Uses Include",
    commonUsesLede: "Hardware versatility across key industry domains:",
    commonUses: [
      "Student identification",
      "Employee identification",
      "Staff identification",
      "Visitor identification",
      "Event badges",
      "Membership identification",
      "Institutional identification",
    ],
    commonUsesNote:
      "The final configuration should always be matched to the holder and card being used.",
  },
  workflowAndDispatch: {
    completeSetsBadge: "Complete Identification Sets",
    completeSetsTitle: "Hooks for Complete Identification Sets",
    completeSetsLede: "Hooks can be supplied as part of a complete identification configuration.",
    completeSetsNote: "The exact components depend on the application.",
    tiers: [
      {
        tier: "Tier 01",
        name: "Basic",
        desc: "ID Card + Holder",
        setupFormula: "ID Card + Holder",
      },
      {
        tier: "Tier 02",
        name: "Wearable",
        desc: "ID Card + Holder + Hook + Lanyard",
        setupFormula: "ID Card + Holder + Hook + Lanyard",
      },
      {
        tier: "Tier 03",
        name: "Branded Wearable Setup",
        desc: "ID Card + Holder + Hook + Custom Printed Lanyard",
        setupFormula: "Card + Holder + Hook + Custom Lanyard",
        isBranded: true,
        badge: "BRANDED",
      },
      {
        tier: "Tier 04",
        name: "Complete Setup",
        desc: "Card + Holder + Attachment + Lanyard",
        setupFormula: "Card + Holder + Attachment + Lanyard",
      },
    ],
    bulkBadge: "Institutional Supply",
    bulkTitle: "ID Card Hooks for Bulk Orders",
    bulkLede:
      "ID card hooks are commonly ordered in quantities matching institutional or organizational identification requirements.",
    bulkRequirements: [
      "School batches",
      "Employee onboarding",
      "Institutional identification",
      "Events",
      "Membership programmes",
      "Visitor identification",
      "Annual ID-card replacement",
    ],
    bulkFormulaTitle: "When requesting a bulk quotation, provide:",
    bulkFormula: "Quantity + Holder Type + Hook Type + Lanyard Requirement",
    bulkFormulaNote:
      "This helps ensure that the components are compatible before the order is prepared.",
    orderProcessBadge: "Order Process",
    orderProcessTitle: "How to Order ID Card Hooks",
    orderProcessLede:
      "Follow these 6 steps to coordinate a compatible bulk identification setup.",
    orderingSteps: [
      {
        num: "01",
        title: "01 — Tell Us Your Requirement",
        body: "Provide the required quantity and application.",
        badge: "Requirement",
      },
      {
        num: "02",
        title: "02 — Share Your Holder Details",
        body: "Tell us the holder model if known. For example: V-1 / V-2 / H-1 / H-2.",
        badge: "Holder Details",
      },
      {
        num: "03",
        title: "03 — Confirm Attachment",
        body: "Specify whether you require: One hook, Two hooks, Fish hook, or another compatible attachment.",
        badge: "Attachment",
      },
      {
        num: "04",
        title: "04 — Confirm Lanyard",
        body: "If required, specify your lanyard type and width.",
        badge: "Lanyard",
      },
      {
        num: "05",
        title: "05 — Confirm Quantity",
        body: "Confirm the number of complete sets or individual hooks required.",
        badge: "Quantity",
      },
      {
        num: "06",
        title: "06 — Order Confirmation",
        body: "After the configuration and quantity are confirmed, the order can be processed according to the applicable product requirements.",
        badge: "Confirmation",
      },
    ],
    dispatchBadge: "Dispatch Commitment",
    dispatchTitle: "72-Hour Dispatch",
    dispatchEligibleTag: "Eligible Approved Orders",
    dispatchLede: "For eligible approved orders, IDGen's applicable dispatch commitment is:",
    dispatchFlowSteps: [
      "Confirmation + Payment",
      "Preparation",
      "Quality Check",
      "Dispatch",
    ],
    dispatchDisclaimers: [
      "Where the 72-hour dispatch commitment applies, it refers to dispatch from IDGen, not final courier delivery. Courier transit time is additional.",
      "For large or customized requirements, timing may depend on: Quantity, Product availability, Holder configuration, Hook configuration, Lanyard requirement, and Order specifications.",
    ],
    closingCtaBadge: "IDGen Identification Attachments",
    closingCtaTitle: "Need ID Card Hooks?",
    closingCtaLede:
      "Whether you need hooks for student ID cards, employee cards, institutional identification or events, IDGen can help coordinate the appropriate attachment with your holder and lanyard configuration.",
    closingCtaTellUsTitle: "Tell Us:",
    closingCtaTellUsFormula: "Card/Holder + Hook Requirement + Lanyard + Quantity",
    closingCtaButtons: [
      {
        label: "Request a Quote",
        href: "/request-a-quote/",
        primary: true,
      },
      {
        label: "Explore ID Card Holders",
        href: "/id-card-holders/",
      },
      {
        label: "Explore Custom Printed Lanyard Printing",
        href: "/custom-printed-lanyard-printing/",
      },
      {
        label: "Contact IDGen",
        href: "/contact-us/",
      },
    ],
    closingCtaCategory: "IDGen — ID Card Attachments",
    closingCtaHeadline: "Connect Your Card. Wear Your Identity.",
    closingCtaFormula: "ID Card → Holder → Hook → Lanyard",
    closingCtaBranding: "IDGen — Identity Solutions Simplified",
  },
  faqs: {
    eyebrow: "FAQ",
    title: "Frequently Asked Questions",
    lede: "Common questions regarding ID card hooks, fish hook attachments, configurations, and ordering:",
    faqs: [
      {
        q: "What is an ID card hook?",
        a: "An ID card hook is an attachment used to connect an ID card holder or badge to a lanyard.",
      },
      {
        q: "What is a fish hook for an ID card?",
        a: "A fish hook is an attachment used to connect a compatible ID card holder or badge to a lanyard.",
      },
      {
        q: "Can an ID card hook be used with an ID card holder?",
        a: "Yes. A compatible hook can connect an ID card holder to a lanyard.",
      },
      {
        q: "Can I use a hook with a custom printed lanyard?",
        a: "Yes. A suitable hook can be used with a compatible custom printed lanyard.",
      },
      {
        q: "Can IDGen supply hooks with ID card holders?",
        a: "Yes. Hooks can be supplied as part of the required identification configuration.",
      },
      {
        q: "Can I order hooks in bulk?",
        a: "Yes. ID card hooks can be supplied for institutional, organizational and event requirements, subject to availability and specifications.",
      },
      {
        q: "Do I need one or two hooks?",
        a: "That depends on the card/holder and lanyard configuration. If your setup requires two attachment points, a two-hook configuration can be used.",
      },
      {
        q: "How do I choose the correct ID card hook?",
        a: "Provide the card size, holder model, lanyard type and intended application so the compatible attachment can be identified.",
      },
    ],
  },
  seo: {
    title: "ID Card Hooks & Fish Hook Attachments for Lanyards | IDGen",
    description:
      "ID card hooks and fish hook attachments for ID card holders, badges and lanyards. IDGen supplies compatible attachment options for schools, companies, institutions and events.",
    path: "/id-card-hooks/",
    keywords: [
      "ID card hooks",
      "fish hook for ID card",
      "lanyard attachment",
      "dog hook",
      "swivel hook lanyard",
      "ID card holder attachments",
      "Guwahati ID hardware",
    ],
  },
};

export function getDynamicIdCardHooks(): DynamicIdCardHooksData {
  try {
    if (fs.existsSync(DATA_FILE_PATH)) {
      const content = fs.readFileSync(DATA_FILE_PATH, "utf-8");
      const parsed = JSON.parse(content);
      return {
        ...DEFAULT_ID_CARD_HOOKS_DATA,
        ...parsed,
        hero: { ...DEFAULT_ID_CARD_HOOKS_DATA.hero, ...(parsed.hero || {}) },
        quickSelection: { ...DEFAULT_ID_CARD_HOOKS_DATA.quickSelection, ...(parsed.quickSelection || {}) },
        assembly: { ...DEFAULT_ID_CARD_HOOKS_DATA.assembly, ...(parsed.assembly || {}) },
        rangeMaster: { ...DEFAULT_ID_CARD_HOOKS_DATA.rangeMaster, ...(parsed.rangeMaster || {}) },
        engineeringGuide: { ...DEFAULT_ID_CARD_HOOKS_DATA.engineeringGuide, ...(parsed.engineeringGuide || {}) },
        applications: { ...DEFAULT_ID_CARD_HOOKS_DATA.applications, ...(parsed.applications || {}) },
        workflowAndDispatch: { ...DEFAULT_ID_CARD_HOOKS_DATA.workflowAndDispatch, ...(parsed.workflowAndDispatch || {}) },
        faqs: { ...DEFAULT_ID_CARD_HOOKS_DATA.faqs, ...(parsed.faqs || {}) },
        seo: { ...DEFAULT_ID_CARD_HOOKS_DATA.seo, ...(parsed.seo || {}) },
      };
    }
  } catch (err) {
    console.error("Error reading dynamic-id-card-hooks.json, falling back to default:", err);
  }
  return DEFAULT_ID_CARD_HOOKS_DATA;
}

export function saveDynamicIdCardHooks(data: DynamicIdCardHooksData): boolean {
  try {
    const dir = path.dirname(DATA_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(data, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("Error saving dynamic-id-card-hooks.json:", err);
    return false;
  }
}

export function saveDynamicIdCardHooksSection<K extends keyof DynamicIdCardHooksData>(
  section: K,
  sectionData: DynamicIdCardHooksData[K]
): boolean {
  const current = getDynamicIdCardHooks();
  current[section] = sectionData;
  return saveDynamicIdCardHooks(current);
}

export function resetDynamicIdCardHooks(): boolean {
  return saveDynamicIdCardHooks(DEFAULT_ID_CARD_HOOKS_DATA);
}
