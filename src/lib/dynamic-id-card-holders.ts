import fs from "fs";
import path from "path";
import type { DynamicIdCardHoldersData } from "./dynamic-id-card-holders-types";

const DATA_FILE = path.join(process.cwd(), "src", "data", "dynamic-id-card-holders.json");

export const DEFAULT_ID_CARD_HOLDERS_DATA: DynamicIdCardHoldersData = {
  meta: {
    title: "ID Card Holders | Vertical, Horizontal & Lock Holders | IDGen",
    description:
      "ID card holders for schools, companies, institutions and events. Choose vertical, horizontal, four-side-lock, metal, crystal and chemical sticker holders from IDGen.",
    path: "/id-card-holders/",
  },
  hero: {
    badgePrefix: "ID Card Holders & Attachments",
    badgeHighlight: "Direct Factory Supply",
    titlePrefix: "ID Card Holders for ",
    titleHighlight: "Schools, Companies, Institutions & Events",
    description:
      "IDGen provides ID card holders and card attachments for organizations that need a practical way to carry, protect and display identification cards. Our range includes vertical ID card holders, horizontal ID card holders, four-side-lock holders, chemical sticker holders, metal holders, crystal holders and fish hooks. Choose the holder according to your card orientation, card dimensions, retention requirement and attachment configuration.",
    featureCards: [
      {
        title: "100% Virgin",
        subtitle: "Polycarbonate build",
        iconName: "ShieldCheck",
      },
      {
        title: "4-Side Lock",
        subtitle: "Anti-slip retention",
        iconName: "Lock",
      },
      {
        title: "86 × 54 mm",
        subtitle: "Standard CR80 card fit",
        iconName: "Sliders",
      },
      {
        title: "24–48h",
        subtitle: "Guwahati dispatch",
        iconName: "Truck",
      },
    ],
    primaryCta: {
      label: "Request a Holder Quote",
      href: "/request-a-quote/",
    },
    secondaryCta: {
      label: "Explore Lanyards",
      href: "/custom-printed-lanyard-printing/",
    },
    tertiaryCta: {
      label: "PVC ID Cards",
      href: "/id-card-printing/",
    },
    trustBadges: [
      "Wholesale Factory Pricing",
      "20mm Standard Lanyard Aperture",
      "Ready Stock in Guwahati",
    ],
    slides: [
      {
        id: "holder-v2-four-side-lock",
        imageSrc: "/images/product-id-holders.jpg",
        alt: "IDGen V-2 Series vertical four-side lock polycarbonate ID card holder",
        title: "V-2 Vertical 4-Side Lock Polycarbonate Holder",
        category: "4-Side Lock",
        topBadge: "V-2 4-Side Lock",
        specPill: "100% Virgin Polymer",
        bottomSpec: "Anti-Slip Lock Tabs • 86×54mm CR80 • Crystal Clear Display",
        hubTag: "GUWAHATI FACTORY",
      },
      {
        id: "holder-h2-horizontal",
        imageSrc: "/images/id-card-lanyard-holder-hook-setup.jpg",
        alt: "IDGen H-2 Series horizontal ID card holder with four-side secure lock",
        title: "H-2 Horizontal 4-Side Lock Holder",
        category: "Landscape",
        topBadge: "H-2 Horizontal",
        specPill: "20mm Lanyard Slot",
        bottomSpec: "Double Slot & Chain Holes • Crack-Resistant • Anti-Scratch",
        hubTag: "ASSAM DIRECT",
      },
      {
        id: "holder-cv1-crystal",
        imageSrc: "/images/ID card holder/CV-1/IMG_20250117_171412.jpg",
        alt: "IDGen CV-1 optical crystal clear acrylic ID card holder for corporate executives",
        title: "CV-1 Executive Optical Crystal Holder",
        category: "Executive",
        topBadge: "CV-1 Crystal Case",
        specPill: "High Clarity Acrylic",
        bottomSpec: "Optically Clear • Ultra Rigid • Executive Corporate Finish",
        hubTag: "PREMIUM GRADE",
      },
      {
        id: "holder-modular-assembly",
        imageSrc: "/images/hero-slide-modular-assembly.jpg",
        alt: "IDGen complete modular ID card holder assembly with printed lanyard and swivel hook",
        title: "Complete Integrated Wearable Assembly",
        category: "Full Set",
        topBadge: "Complete Wearable Set",
        specPill: "Card + Holder + Lanyard",
        bottomSpec: "Ultrasonic Sealed • Chrome Hook • Pre-Assembled Ready to Wear",
        hubTag: "ALL-IN-ONE",
      },
      {
        id: "holder-bulk-warehouse",
        imageSrc: "/images/id-holders-hooks.jpg",
        alt: "IDGen wholesale bulk supply of vertical and horizontal ID card holders in Guwahati",
        title: "Institutional Bulk Factory Stock",
        category: "Wholesale",
        topBadge: "Ready Factory Stock",
        specPill: "10,000+ Units Ready",
        bottomSpec: "V-1 • V-2 • V-3 • H-1 • H-2 • CV-1 • Chemical Stickers",
        hubTag: "EXPRESS DISPATCH",
      },
    ],
  },
  quickSelection: {
    eyebrow: "Interactive Selector",
    title: "Quick ID Card Holder Selection Matrix",
    lede: "Identify the exact holder model code corresponding to your card format, orientation, and security level:",
    items: [
      { req: "Standard vertical card", option: "V-1", badge: "Standard Portrait" },
      { req: "Vertical card with four-side locking", option: "V-2", badge: "Four-Side Lock" },
      { req: "Chemical sticker holder", option: "V-3", badge: "Chemical Sticker" },
      { req: "Standard horizontal card", option: "H-1", badge: "Standard Landscape" },
      { req: "Horizontal card with four-side locking", option: "H-2", badge: "Four-Side Lock" },
      { req: "Premium metal appearance", option: "Metal Holder", badge: "Premium Metal" },
      { req: "Premium crystal appearance", option: "CV-1 Crystal Holder", badge: "Executive Crystal" },
      { req: "Connect holder to lanyard", option: "Fish Hook", badge: "Attachment" },
    ],
  },
  assemblyEcosystem: {
    eyebrow: "Structural Anatomy & Layer Breakdown",
    title: "What Is an ID Card Holder Assembly?",
    lede: "An ID card holder is an engineered structural casing that protects, displays, and connects an identification badge to its wearable lanyard system.",
    layers: [
      {
        step: "01",
        title: "PVC Identity Card",
        subtitle: "Core Identification Media",
        badge: "CR80 Standard (86 × 54 mm)",
        material: "Multi-Layer Fused PVC Polyvinyl",
        benefit: "High-definition photo & credential print with optional smart RFID/NFC chip.",
        iconName: "CreditCard",
        img: "/images/product-pvc-cards.jpg",
        details: [
          "ISO/IEC 7810 CR80 Standard dimensions",
          "Thermal / Re-transfer edge-to-edge printing",
          "Compatible with barcodes, QR codes, and smart chips",
        ],
      },
      {
        step: "02",
        title: "Polycarbonate Card Holder",
        subtitle: "Structural Protection Frame",
        badge: "100% Virgin Grade Polymer",
        material: "High-Impact Optical Transparent Polymer",
        benefit: "Shields PVC card from daily abrasion, bending, UV exposure, and moisture.",
        iconName: "ShieldCheck",
        img: "/images/ID card holder/V-2/V-2.png",
        details: [
          "4-side perimeter snap-lock retention system",
          "Optical grade high-gloss crystal transparency",
          "Standard 20mm anti-twist lanyard aperture",
        ],
      },
      {
        step: "03",
        title: "Swivel Fish Hook Clip",
        subtitle: "Precision Articulation Hardware",
        badge: "360° Rotational Freedom",
        material: "Corrosion-Resistant Nickel Chrome Alloy",
        benefit: "Prevents lanyard twisting and allows instant badge detachment for swiping.",
        iconName: "Anchor",
        img: "/images/Lanyard with Holder Samples/Sample 26.jpg",
        details: [
          "Heavy-duty spring-loaded closure gate",
          "Full 360-degree smooth rotational swivel",
          "Snaps directly into all 20mm holder slots",
        ],
      },
      {
        step: "04",
        title: "Custom Printed Lanyard",
        subtitle: "Corporate Wearable Ribbon",
        badge: "Sublimated / Satin Finish",
        material: "High-Tensile Polyester Ribbon (16mm / 20mm)",
        benefit: "High-impact organizational branding worn comfortably around the neck.",
        iconName: "Sparkles",
        img: "/images/lanyard-hero-slide-20mm-satin.jpg",
        details: [
          "Full-color high-definition heat-transfer printing",
          "Skin-friendly satin weave with ultrasonic end seal",
          "Available with safety breakaway clips",
        ],
      },
    ],
  },
  rangeMaster: {
    eyebrow: "Master Model Portfolio",
    title: "IDGen ID Card Holder Models & Specifications",
    lede: "Explore our complete range of certified ID card holders, protective cases, and connection hardware:",
    models: [
      {
        code: "V-1",
        badge: "Standard Portrait",
        category: "vertical",
        title: "V-1 — Vertical Standard ID Card Holder",
        tagline: "The industry-standard vertical holder for portrait-oriented cards",
        description:
          "The V-1 is our benchmark portrait holder designed for standard 86 × 54 mm ID cards. Molded from 100% virgin polymer with high optical clarity, it provides everyday drop-in convenience, gloss finish, and universal lanyard slot compatibility.",
        image: "/images/ID card holder/V-1/V-1.png",
        alt: "V-1 Vertical Standard ID Card Holder",
        popular: true,
        highlightTag: "Most Popular Portrait",
        specs: [
          { k: "Capacity", v: "1 Standard CR80 Card" },
          { k: "Orientation", v: "Vertical (Portrait)" },
          { k: "Material", v: "100% Virgin Plastic Polymer" },
          { k: "Finish", v: "Optical Gloss Transparent" },
          { k: "Card Format", v: "86 × 54 mm (CR80)" },
          { k: "Lanyard Hole", v: "20 mm Standard Slot" },
          { k: "Retention", v: "Standard Open Slip-In" },
        ],
        suitable: [
          "Student ID cards",
          "Employee ID cards",
          "Staff cards",
          "Office identification",
          "Visitor cards",
          "General institutional identification",
        ],
        conclusion: "V-1 is the standard factory choice for a portrait-oriented 86 × 54 mm card.",
      },
      {
        code: "V-2",
        badge: "Four-Side Lock",
        category: "vertical",
        title: "V-2 — Vertical Four-Side-Lock ID Card Holder",
        tagline: "Transparent vertical holder featuring four-side locking perimeter clips",
        description:
          "The V-2 is a heavy-duty transparent vertical holder featuring an integrated four-side perimeter lock. It firmly secures the card inside the frame, completely eliminating accidental slip-outs during active physical movement.",
        image: "/images/ID card holder/V-2/V-2.png",
        alt: "V-2 Vertical 4-Side Lock ID Card Holder",
        popular: true,
        highlightTag: "Maximum Retention Lock",
        specs: [
          { k: "Capacity", v: "1 Standard CR80 Card" },
          { k: "Retention System", v: "4-Side Perimeter Snap Lock" },
          { k: "Orientation", v: "Vertical (Portrait)" },
          { k: "Material", v: "High-Impact 100% Virgin Polymer" },
          { k: "Finish", v: "Crystal Clear Optical Gloss" },
          { k: "Card Format", v: "86 × 54 mm (CR80)" },
          { k: "Lanyard Hole", v: "20 mm Standard Slot" },
        ],
        suitable: [
          "Student identification",
          "Employee identification",
          "Active workforce & site personnel",
          "Visitor & access control badges",
          "Everyday organizational identification",
        ],
        conclusion: "Choose V-2 when maximum four-side card retention and security is preferred.",
      },
      {
        code: "V-3",
        badge: "Chemical Sticker",
        category: "vertical",
        title: "V-3 — Chemical Sticker ID Card Holder",
        tagline: "Vertical holder designed for resin dome and chemical sticker badge formats",
        description:
          "The V-3 is a specialized vertical holder engineered for chemical sticker and resin dome badge applications. It provides a recessed protective barrier that shields the adhesive dome finish from scratches, dirt, and moisture.",
        image: "/images/ID card holder/IMG_20250117_172305.jpg",
        alt: "V-3 Chemical Sticker ID Card Holder",
        highlightTag: "Chemical Dome Specialized",
        specs: [
          { k: "Format Style", v: "Chemical Sticker / Resin Dome" },
          { k: "Orientation", v: "Vertical (Portrait)" },
          { k: "Card Format", v: "86 × 54 mm" },
          { k: "Lanyard Aperture", v: "20 mm Standard Slot" },
          { k: "Environmental Guard", v: "High Scratch & Moisture Barrier" },
        ],
        suitable: [
          "Employee identification with chemical stickers",
          "Industrial plant staff credentials",
          "Permanent resin dome badge sets",
          "Specialized security passes",
          "Moisture and dust exposed workplaces",
        ],
        conclusion: "V-3 is recommended when your ID badges utilize chemical dome or sticker application.",
      },
      {
        code: "H-1",
        badge: "Standard Landscape",
        category: "horizontal",
        title: "H-1 — Horizontal Standard ID Card Holder",
        tagline: "Standard horizontal holder designed for landscape-oriented identification cards",
        description:
          "The H-1 is our benchmark landscape holder designed for cards printed horizontally. Molded from 100% virgin polymer with high optical clarity, it features a central 20 mm slot for balanced, level hanging on any lanyard.",
        image: "/images/ID card holder/H-1/IMG_20250131_182906.jpg",
        alt: "H-1 Horizontal Standard ID Card Holder",
        popular: true,
        highlightTag: "Standard Landscape Choice",
        specs: [
          { k: "Capacity", v: "1 Standard CR80 Card" },
          { k: "Orientation", v: "Horizontal (Landscape)" },
          { k: "Material", v: "100% Virgin Plastic Polymer" },
          { k: "Finish", v: "Optical Gloss Transparent" },
          { k: "Card Format", v: "54 × 86 mm (CR80 Landscape)" },
          { k: "Lanyard Hole", v: "20 mm Centered Top Slot" },
          { k: "Retention", v: "Standard Drop-In" },
        ],
        suitable: [
          "Corporate executive landscape badges",
          "Conference attendee passes",
          "Event delegate credentials",
          "Horizontal institutional cards",
          "Visitor & guest cards",
        ],
        conclusion: "Choose H-1 for standard landscape-oriented cards and event attendee passes.",
      },
      {
        code: "H-2",
        badge: "Four-Side Lock",
        category: "horizontal",
        title: "H-2 — Horizontal Four-Side-Lock ID Card Holder",
        tagline: "Horizontal holder with four-side locking design for secure landscape display",
        description:
          "The H-2 combines wide horizontal aesthetics with our heavy-duty four-side snap closure tabs. It keeps landscape cards firmly locked inside the frame, preventing slippage even during long conferences and active physical routines.",
        image: "/images/ID card holder/H-2/H-2.png",
        alt: "H-2 Horizontal 4-Side Lock ID Card Holder",
        popular: true,
        highlightTag: "Landscape 4-Side Lock",
        specs: [
          { k: "Capacity", v: "1 Standard CR80 Card" },
          { k: "Retention System", v: "4-Side Perimeter Snap Lock" },
          { k: "Orientation", v: "Horizontal (Landscape)" },
          { k: "Material", v: "High-Impact Virgin Polymer" },
          { k: "Finish", v: "Crystal Transparent Gloss" },
          { k: "Card Format", v: "54 × 86 mm (CR80 Landscape)" },
          { k: "Lanyard Hole", v: "20 mm Centered Top Slot" },
        ],
        suitable: [
          "High-movement corporate environments",
          "Aviation, logistics & transit badges",
          "Hospitality & summit management teams",
          "Enterprise access security passes",
        ],
        conclusion: "Choose H-2 when you need a horizontal landscape card format paired with four-side locking security.",
      },
      {
        code: "Metal",
        badge: "Premium Metal",
        category: "executive",
        title: "Metal ID Card Holder",
        tagline: "Premium metallic holder for executive and leadership identification",
        description:
          "The IDGen Metal Holder provides a commanding, sophisticated presence for leadership teams. Built with CNC-machined anodized aluminum alloy and a crystal-clear protective window, it gives executive credentials substantial weight and premium prestige.",
        image: "/images/ID card holder/1f823cf1-0d85-4374-8360-3082d74d7b2d.jpg",
        alt: "Executive Metal ID Card Holder",
        premium: true,
        highlightTag: "Executive Metal Series",
        specs: [
          { k: "Frame Material", v: "Anodized Aluminum Alloy" },
          { k: "Finish", v: "Brushed Matte Anodized" },
          { k: "Protective Window", v: "Anti-Scratch Polycarbonate" },
          { k: "Profile", v: "Slimline Beveled Frame" },
          { k: "Card Format", v: "86 × 54 mm Standard CR80" },
          { k: "Attachment Eyelet", v: "Reinforced Metal Alloy Eyelet" },
        ],
        suitable: [
          "C-suite executives & directors",
          "Corporate leadership teams",
          "VIP summit delegates",
          "Luxury hotel & private club management",
          "Professional organizations",
        ],
        conclusion: "Choose Metal Holder for high-profile executive and management credentials.",
      },
      {
        code: "CV-1",
        badge: "Executive Crystal",
        category: "executive",
        title: "CV-1 Crystal ID Card Holder",
        tagline: "Distinctive, optical-clarity beveled crystal acrylic presentation",
        description:
          "The CV-1 Crystal Holder is engineered with optical-grade cast acrylic featuring diamond-polished beveled edges. It elevates identification cards with museum-grade clarity and distinctive refractive brilliance.",
        image: "/images/ID card holder/CV-1/CV-1..png",
        alt: "CV-1 Crystal ID Card Holder",
        premium: true,
        highlightTag: "Optically Clear Acrylic",
        specs: [
          { k: "Material", v: "Optically Clear Cast Acrylic" },
          { k: "Edge Treatment", v: "Diamond-Polished Beveled Facets" },
          { k: "Clarity Grade", v: "Ultra-High Optical Transmittance" },
          { k: "Card Format", v: "86 × 54 mm Standard CR80" },
          { k: "Lanyard Hole", v: "Integrated Precision Slot" },
        ],
        suitable: [
          "Corporate headquarters staff",
          "Premium membership clubs",
          "Government & diplomatic events",
          "Professional healthcare executives",
          "VIP badge holders",
        ],
        conclusion: "Choose CV-1 Crystal when a luxury aesthetic and optical-grade transparency are required.",
      },
      {
        code: "Fish Hook",
        badge: "Swivel Hardware",
        category: "attachment",
        title: "Fish Hook — ID Card Holder Attachment",
        tagline: "Heavy-duty 360° swivel chrome clip engineered for 20mm slot apertures",
        description:
          "A fish hook is the precision articulation hardware used to connect an ID card holder or badge to a lanyard. It features a heavy-duty spring-loaded gate and full 360-degree rotation to keep cards facing forward.",
        image: "/images/Lanyard with Holder Samples/Sample 26.jpg",
        alt: "Fish Hook ID Card Holder Attachment",
        highlightTag: "360° Anti-Twist Swivel",
        specs: [
          { k: "Material", v: "Corrosion-Resistant Nickel Chrome Alloy" },
          { k: "Rotation", v: "360° Smooth Swivel Bearing" },
          { k: "Closure", v: "High-Tensile Spring-Loaded Gate" },
          { k: "Compatibility", v: "Standard 20mm Holder Slot & Lanyard Loops" },
        ],
        suitable: [
          "Student ID card lanyards",
          "Corporate employee lanyards",
          "Event badge lanyards",
          "Visitor & security passes",
          "Ultrasonic sealed lanyards",
        ],
        conclusion: "Fish Hook is the essential connector between your ID holder and printed lanyard.",
        cta: {
          label: "Explore Custom Printed Lanyards →",
          href: "/custom-printed-lanyard-printing/",
        },
      },
    ],
  },
  engineeringGuide: {
    eyebrow: "Technical Selection Guide",
    title: "Engineering Guide: Orientation, Locking & Decision Matrix",
    lede: "Follow IDGen's technical decision matrix to choose the correct holder configuration based on card dimensions, retention requirements, and application environment:",
    orientationCard: {
      tag: "Orientation Engineering",
      title: "Vertical vs Horizontal Holders",
      description: "Selecting between portrait and landscape holders depends strictly on your printed card artwork layout.",
      verticalTitle: "Vertical (Portrait) Holders",
      verticalDim: "86 × 54 mm",
      verticalDesc: "Industry standard for student IDs, corporate employee passes, and hospital credentials. Hangs vertically from top-center slot.",
      horizontalTitle: "Horizontal (Landscape) Holders",
      horizontalDim: "54 × 86 mm",
      horizontalDesc: "Standard for conferences, summits, visitor badges, and cards featuring horizontal logos or dual-photo credentials.",
    },
    lockingCard: {
      tag: "Retention Mechanisms",
      title: "Standard Slip-In vs 4-Side Lock",
      description: "Match the retention level to physical movement intensity and badge replacement cost.",
      dropInTitle: "Standard Open Slip-In (V-1 / H-1)",
      dropInDesc: "Open top/side entry allowing quick card extraction when cards must be tapped or scanned repeatedly throughout the day.",
      fourSideTitle: "Four-Side Perimeter Lock (V-2 / H-2)",
      fourSideDesc: "Four perimeter snap tabs capture card edges. Virtually impossible for cards to slip out accidentally during running or active factory work.",
    },
    decisionStepsTitle: "5-Step ID Holder Decision Matrix",
    decisionStepsLede: "Click each step below to view the engineered recommendation for your specific deployment:",
    decisionSteps: [
      {
        q: "Step 1 • What is your card orientation?",
        a: "Portrait → Vertical Holder (V-Series) | Landscape → Horizontal Holder (H-Series)",
        detail: "Match the physical card orientation to avoid awkward tilted display.",
        recommended: ["V-1", "V-2", "H-1", "H-2"],
      },
      {
        q: "Step 2 • Do you need extra retention security?",
        a: "Standard everyday → V-1 / H-1 | Active movement → V-2 / H-2 (4-Side Lock)",
        detail: "Four-side locking tabs physically capture card corners, preventing accidental slippage during daily commutes or factory shifts.",
        recommended: ["V-2", "H-2"],
      },
      {
        q: "Step 3 • Is your card using a chemical sticker format?",
        a: "Chemical dome / sticker format → V-3 Chemical Sticker Holder",
        detail: "Specially formulated recessed frame providing sealed protection for resin dome badges.",
        recommended: ["V-3"],
      },
      {
        q: "Step 4 • Is this for executive or VIP leadership presentation?",
        a: "Executive appearance → Metal ID Holder or CV-1 Crystal Optical Acrylic",
        detail: "Machined aluminum alloy or diamond-beveled crystal acrylic for commanding corporate presence.",
        recommended: ["Metal Holder", "CV-1 Crystal"],
      },
      {
        q: "Step 5 • Do you need lanyard hardware attachments?",
        a: "Holder to Lanyard connection → Precision Chrome Fish Hook",
        detail: "Full 360-degree rotational swivel with spring gate that snaps into any 20mm slot.",
        recommended: ["Fish Hook"],
      },
    ],
  },
  applications: {
    eyebrow: "Multi-Sector Deployment",
    title: "ID Card Holder Applications Across Sectors",
    lede: "IDGen manufactures and stocks verified holder combinations tailored to specific institutional and organizational environments:",
    items: [
      {
        title: "Schools & Educational Institutions",
        desc: "For student, teacher, staff and visitor identification with high impact durability.",
        tag: "High Durability",
        recommended: "V-1 / V-2 Series",
        link: { label: "Explore Student ID Card Printing", href: "/student-id-card-printing/" },
        iconName: "GraduationCap",
        gradient: "from-sky-500/10 via-blue-500/5 to-transparent",
        accentColor: "text-[#009fe3]",
      },
      {
        title: "Companies & Corporate Offices",
        desc: "For employees, staff, contractors, and visitors with sleek executive aesthetics.",
        tag: "Corporate Benchmark",
        recommended: "V-2 Lock / Metal Frame",
        link: { label: "Explore Employee ID Card Printing", href: "/employee-id-card-printing/" },
        iconName: "Briefcase",
        gradient: "from-cyan-500/10 via-sky-500/5 to-transparent",
        accentColor: "text-cyan-500",
      },
      {
        title: "Conferences, Summits & Events",
        desc: "For delegates, speakers, organizers, exhibitors and VIP summit participants.",
        tag: "Wide Landscape Format",
        recommended: "H-1 / H-2 / CV-1 Crystal",
        link: { label: "Explore Event Card Printing", href: "/event-card-printing/" },
        iconName: "Ticket",
        gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
        accentColor: "text-amber-500",
      },
      {
        title: "Hospitals & Healthcare Networks",
        desc: "Sanitizable 100% virgin polymer holders for doctors, nurses, and clinical staff.",
        tag: "Hygiene & Secure Lock",
        recommended: "V-2 Four-Side Lock",
        iconName: "Hospital",
        gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
        accentColor: "text-emerald-500",
      },
      {
        title: "Clubs, Associations & VIP Delegations",
        desc: "Executive crystal and metal finishes for premium membership and VIP identification.",
        tag: "Prestige Series",
        recommended: "CV-1 Crystal / Metal",
        iconName: "Users",
        gradient: "from-purple-500/10 via-indigo-500/5 to-transparent",
        accentColor: "text-purple-500",
      },
      {
        title: "Industrial & Manufacturing Plants",
        desc: "Heavy-duty 4-side perimeter locking and chemical sealed protection for tough worksites.",
        tag: "Maximum Retention",
        recommended: "V-2 / V-3 Chemical",
        iconName: "Building2",
        gradient: "from-slate-500/10 via-slate-400/5 to-transparent",
        accentColor: "text-slate-600 dark:text-slate-300",
      },
    ],
  },
  workflowAndDispatch: {
    bundles: {
      badge: "Complete Identification Bundles",
      title: "ID Card Holder + Lanyard Wearable Systems",
      subtitle: "Factory Packaged & Pre-Assembled",
      tier1: {
        tag: "Tier 1 • Basic Essential",
        title: "ID Card + Card Holder",
        desc: "Ideal for desktop badges, pocket cards, wallet storage, and standalone identity credentials without hanging attachments.",
        subtext: "Single unit or bulk cartons",
        linkText: "PVC Cards →",
        linkHref: "/id-card-printing/",
      },
      tier2: {
        tag: "Tier 2 • Full Enterprise System",
        popularBadge: "Most Popular",
        title: "PVC Card + Holder + Fish Hook + Printed Lanyard",
        desc: "The complete turnkey executive identification setup. Fully color-coordinated with your organization's pantone colors, logo, and staff credentials.",
        primaryButtonText: "Custom Lanyard Sets",
        primaryButtonHref: "/custom-printed-lanyard-printing/",
        secondaryButtonText: "Get Full Bundle Quote",
        secondaryButtonHref: "/request-a-quote/",
      },
    },
    quality: {
      title: "Holder Quality & Precision Compatibility",
      subtitle: "IDGen 8-Point Manufacturing & Tolerance Standards",
      points: [
        "Precision ISO CR80 (86 × 54 mm) Card Fit",
        "Strict Portrait & Landscape Alignment",
        "Engineered 4-Side Anti-Fallout Retention",
        "Universal 20mm Anti-Twist Aperture",
        "100% Virgin Polymer Optical Clarity",
        "Smooth Diamond-Finished Beveled Edges",
        "Heavy-Duty Chrome Swivel Dog Hooks",
        "Factory Direct Wholesale Guaranteed Pricing",
      ],
      note: "For benchmark V-1 and V-2 models, IDGen guarantees 100% virgin plastic resin, ultrasonic finished edges, and a standardized 20 mm lanyard aperture. For specialized models, physical sample validation is provided prior to mass production.",
    },
    orderingWorkflow: {
      eyebrow: "Fulfillment Pipeline",
      title: "Ordering ID Card Holders",
      lede: "A frictionless 6-step ordering process from requirement confirmation to express delivery.",
      steps: [
        {
          num: "01",
          title: "Tell Us Your Requirement",
          body: "Provide holder model code (if known), estimated quantity, card dimensions (e.g. 86×54mm), orientation, and application.",
          badge: "Inquiry",
        },
        {
          num: "02",
          title: "Select the Holder Model",
          body: "Choose between standard open slip (V-1/H-1), four-side lock (V-2/H-2), chemical sticker (V-3), or luxury metal/crystal.",
          badge: "Matching",
        },
        {
          num: "03",
          title: "Add Attachment Hardware",
          body: "Match with a 360° swivel chrome fish hook or dog clip engineered for our 20mm slot apertures.",
          badge: "Hardware",
        },
        {
          num: "04",
          title: "Pair Custom Printed Lanyards",
          body: "Coordinate custom sublimated satin lanyards with your organization's logo and official branding.",
          badge: "Branding",
        },
        {
          num: "05",
          title: "Sample & Order Approval",
          body: "Confirm specification details, digital proofs, and bulk tier wholesale pricing.",
          badge: "Sign-Off",
        },
        {
          num: "06",
          title: "72-Hour Factory Dispatch",
          body: "Approved orders undergo multi-point quality inspection and are dispatched within 72 hours via express courier.",
          badge: "Express Dispatch",
        },
      ],
    },
    expressDispatch: {
      badge: "Factory Speed Commitment",
      title: "72-Hour Express Dispatch",
      pill: "⚡ Guaranteed Timeline on Approved Orders",
      steps: [
        { step: "01", label: "Approval & Payment", desc: "Digital signoff released" },
        { step: "02", label: "Preparation", desc: "Batch picking & staging" },
        { step: "03", label: "Quality Check", desc: "Aperture & finish audit" },
        { step: "04", label: "72h Dispatch", desc: "Handover to express courier" },
      ],
      footerNote: "• 72-hour period refers to factory handover from IDGen Guwahati. Express courier transit time applies to final destination.",
      whatsappText: "Check Dispatch Timeline for Your City",
      whatsappHref: "https://wa.me/919207012084?text=Hi%20IDGen%2C%20I%20need%20urgent%20express%20dispatch%20for%20ID%20card%20holders.",
    },
    closingCta: {
      badge: "Direct Wholesale Factory Pricing",
      title: "Need the Right ID Card Holder?",
      description: "Tell us your Card Size + Orientation + Estimated Quantity and our engineers will calculate your instant wholesale estimate and sample kit.",
      primaryButton: {
        text: "Request Bulk Factory Quote",
        href: "/request-a-quote/",
      },
      whatsappButton: {
        text: "Instant WhatsApp Desk",
        href: "https://wa.me/919207012084?text=Hi%20IDGen%20Team%2C%20I%20would%20like%20a%20quote%20for%20ID%20card%20holders%20and%20lanyards.",
      },
      trustPoints: [
        "Wholesale Cartons in Stock",
        "Free Physical Sample Kits for Institutions",
        "Pan-India Express Logistics",
      ],
    },
  },
  faqs: {
    eyebrow: "FAQ",
    title: "Frequently Asked Questions",
    lede: "Common questions regarding card holder models, fittings, attachments, and order turnaround:",
    items: [
      {
        q: "What is an ID card holder?",
        a: "An ID card holder is an accessory used to carry and display an identification card while helping protect the card during use.",
      },
      {
        q: "Which ID card holder is suitable for a vertical card?",
        a: "V-1 is the standard vertical option. V-2 is the vertical four-side-lock option when additional retention is preferred.",
      },
      {
        q: "Which holder is suitable for a horizontal card?",
        a: "H-1 is the standard horizontal option, while H-2 provides four-side locking.",
      },
      {
        q: "What is a four-side-lock ID card holder?",
        a: "It is a holder designed to retain an ID card from four sides. IDGen offers V-2 and H-2 in this configuration.",
      },
      {
        q: "Can an ID card holder be connected to a lanyard?",
        a: "Yes. A compatible holder can be connected to a lanyard using an attachment such as a fish hook.",
      },
      {
        q: "What size card fits V-1?",
        a: "The specified V-1 card format is 86 × 54 mm.",
      },
      {
        q: "What size card fits V-2?",
        a: "The specified V-2 card format is 86 × 54 mm. Always confirm the actual card and holder dimensions before bulk ordering.",
      },
      {
        q: "Does IDGen provide metal ID card holders?",
        a: "Yes. A metal ID card holder is available as a premium holder option.",
      },
      {
        q: "Does IDGen provide crystal ID card holders?",
        a: "Yes. IDGen offers the CV-1 Crystal ID Card Holder.",
      },
      {
        q: "Can I order holders with custom printed lanyards?",
        a: "Yes. Compatible holders can be combined with custom printed lanyards.",
      },
      {
        q: "Can IDGen supply ID cards and holders together?",
        a: "Yes. ID cards and holders can be coordinated as part of the required identification setup.",
      },
      {
        q: "How quickly are orders dispatched?",
        a: "Eligible approved orders are dispatched within 72 hours after confirmation and payment, excluding courier transit time.",
      },
    ],
  },
};

export function getDynamicIdCardHolders(): DynamicIdCardHoldersData {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, "utf-8");
      const parsed = JSON.parse(raw);
      return {
        meta: { ...DEFAULT_ID_CARD_HOLDERS_DATA.meta, ...parsed.meta },
        hero: {
          ...DEFAULT_ID_CARD_HOLDERS_DATA.hero,
          ...parsed.hero,
          featureCards: parsed.hero?.featureCards || DEFAULT_ID_CARD_HOLDERS_DATA.hero.featureCards,
          trustBadges: parsed.hero?.trustBadges || DEFAULT_ID_CARD_HOLDERS_DATA.hero.trustBadges,
          slides: parsed.hero?.slides || DEFAULT_ID_CARD_HOLDERS_DATA.hero.slides,
        },
        quickSelection: {
          ...DEFAULT_ID_CARD_HOLDERS_DATA.quickSelection,
          ...parsed.quickSelection,
          items: parsed.quickSelection?.items || DEFAULT_ID_CARD_HOLDERS_DATA.quickSelection.items,
        },
        assemblyEcosystem: {
          ...DEFAULT_ID_CARD_HOLDERS_DATA.assemblyEcosystem,
          ...parsed.assemblyEcosystem,
          layers: parsed.assemblyEcosystem?.layers || DEFAULT_ID_CARD_HOLDERS_DATA.assemblyEcosystem.layers,
        },
        rangeMaster: {
          ...DEFAULT_ID_CARD_HOLDERS_DATA.rangeMaster,
          ...parsed.rangeMaster,
          models: parsed.rangeMaster?.models || DEFAULT_ID_CARD_HOLDERS_DATA.rangeMaster.models,
        },
        engineeringGuide: {
          ...DEFAULT_ID_CARD_HOLDERS_DATA.engineeringGuide,
          ...parsed.engineeringGuide,
          orientationCard: {
            ...DEFAULT_ID_CARD_HOLDERS_DATA.engineeringGuide.orientationCard,
            ...parsed.engineeringGuide?.orientationCard,
          },
          lockingCard: {
            ...DEFAULT_ID_CARD_HOLDERS_DATA.engineeringGuide.lockingCard,
            ...parsed.engineeringGuide?.lockingCard,
          },
          decisionSteps:
            parsed.engineeringGuide?.decisionSteps || DEFAULT_ID_CARD_HOLDERS_DATA.engineeringGuide.decisionSteps,
        },
        applications: {
          ...DEFAULT_ID_CARD_HOLDERS_DATA.applications,
          ...parsed.applications,
          items: parsed.applications?.items || DEFAULT_ID_CARD_HOLDERS_DATA.applications.items,
        },
        workflowAndDispatch: {
          ...DEFAULT_ID_CARD_HOLDERS_DATA.workflowAndDispatch,
          ...parsed.workflowAndDispatch,
          bundles: {
            ...DEFAULT_ID_CARD_HOLDERS_DATA.workflowAndDispatch.bundles,
            ...parsed.workflowAndDispatch?.bundles,
            tier1: {
              ...DEFAULT_ID_CARD_HOLDERS_DATA.workflowAndDispatch.bundles.tier1,
              ...parsed.workflowAndDispatch?.bundles?.tier1,
            },
            tier2: {
              ...DEFAULT_ID_CARD_HOLDERS_DATA.workflowAndDispatch.bundles.tier2,
              ...parsed.workflowAndDispatch?.bundles?.tier2,
            },
          },
          quality: {
            ...DEFAULT_ID_CARD_HOLDERS_DATA.workflowAndDispatch.quality,
            ...parsed.workflowAndDispatch?.quality,
            points:
              parsed.workflowAndDispatch?.quality?.points ||
              DEFAULT_ID_CARD_HOLDERS_DATA.workflowAndDispatch.quality.points,
          },
          orderingWorkflow: {
            ...DEFAULT_ID_CARD_HOLDERS_DATA.workflowAndDispatch.orderingWorkflow,
            ...parsed.workflowAndDispatch?.orderingWorkflow,
            steps:
              parsed.workflowAndDispatch?.orderingWorkflow?.steps ||
              DEFAULT_ID_CARD_HOLDERS_DATA.workflowAndDispatch.orderingWorkflow.steps,
          },
          expressDispatch: {
            ...DEFAULT_ID_CARD_HOLDERS_DATA.workflowAndDispatch.expressDispatch,
            ...parsed.workflowAndDispatch?.expressDispatch,
            steps:
              parsed.workflowAndDispatch?.expressDispatch?.steps ||
              DEFAULT_ID_CARD_HOLDERS_DATA.workflowAndDispatch.expressDispatch.steps,
          },
          closingCta: {
            ...DEFAULT_ID_CARD_HOLDERS_DATA.workflowAndDispatch.closingCta,
            ...parsed.workflowAndDispatch?.closingCta,
            trustPoints:
              parsed.workflowAndDispatch?.closingCta?.trustPoints ||
              DEFAULT_ID_CARD_HOLDERS_DATA.workflowAndDispatch.closingCta.trustPoints,
          },
        },
        faqs: {
          ...DEFAULT_ID_CARD_HOLDERS_DATA.faqs,
          ...parsed.faqs,
          items: parsed.faqs?.items || DEFAULT_ID_CARD_HOLDERS_DATA.faqs.items,
        },
      };
    }
  } catch (err) {
    console.error("Error reading dynamic-id-card-holders.json:", err);
  }
  return DEFAULT_ID_CARD_HOLDERS_DATA;
}

export function saveDynamicIdCardHolders(
  data: DynamicIdCardHoldersData
): DynamicIdCardHoldersData {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
  return data;
}

export function resetDynamicIdCardHolders(): DynamicIdCardHoldersData {
  saveDynamicIdCardHolders(DEFAULT_ID_CARD_HOLDERS_DATA);
  return DEFAULT_ID_CARD_HOLDERS_DATA;
}
