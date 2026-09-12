import fs from "fs";
import path from "path";
import {
  DynamicStudentIdCardPrintingData,
  StudentHeroSlideItem,
  StudentOrgSlideItem,
  CardAnatomyField,
  StudentWorkflowConfigStep,
  StudentAssemblyTierItem,
  StudentWhyChooseReasonItem,
  StudentFaqItem,
} from "./dynamic-student-id-card-printing-types";

export * from "./dynamic-student-id-card-printing-types";

const DATA_FILE = path.join(
  process.cwd(),
  "src",
  "data",
  "dynamic-student-id-card-printing.json"
);

export const DEFAULT_STUDENT_HERO_SLIDES: StudentHeroSlideItem[] = [
  {
    id: "school-id-set",
    imageSrc: "/images/student-hero-slide-school-id.jpg",
    alt: "School Student ID Card with acrylic holder and custom printed satin lanyard made by IDGen",
    title: "School Student ID & Lanyard Set",
    category: "School ID",
    topBadge: "School Student ID",
    specPill: "Clear Acrylic Holder",
    bottomSpec: "Aarav Sharma • 10th Standard • QR & Barcode Pass",
    hubTag: "GUWAHATI FACTORY",
  },
  {
    id: "university-smart-card",
    imageSrc: "/images/student-hero-slide-university-smart.jpg",
    alt: "University RFID Smart Campus Pass with contactless chip and custom printed lanyard by IDGen",
    title: "University Smart Campus RFID Pass",
    category: "University",
    topBadge: "University Smart Pass",
    specPill: "13.56 MHz RFID / NFC",
    bottomSpec: "Ananya Roy • Computer Science • Smart Campus RFID",
    hubTag: "ASSAM DIRECT",
  },
  {
    id: "modular-kit",
    imageSrc: "/images/student-hero-slide-modular-kit.jpg",
    alt: "Complete Student ID kit with PVC card, acrylic holder, chrome hook and satin lanyard by IDGen",
    title: "Complete Student ID Modular Kit",
    category: "Full Kit",
    topBadge: "Complete Wearable Set",
    specPill: "Ultrasonic Sealed Hook",
    bottomSpec: "Card + Hard Holder + Metal Hook + Lanyard",
    hubTag: "ALL-IN-ONE",
  },
  {
    id: "bulk-batch",
    imageSrc: "/images/student-hero-slide-bulk-batch.jpg",
    alt: "High-volume bulk batch PVC student ID cards printed with variable photos and data by IDGen",
    title: "Institutional Bulk Batch Production",
    category: "Bulk Batch",
    topBadge: "Bulk Batch Ready",
    specPill: "10,000+ Daily Capacity",
    bottomSpec: "Multi-Class Batches • Photos • Variable Barcodes",
    hubTag: "EXPRESS DISPATCH",
  },
  {
    id: "rfid-campus-tap",
    imageSrc: "/images/student-hero-slide-rfid-turnstile.jpg",
    alt: "Student tapping contactless smart RFID ID card on campus turnstile access reader",
    title: "Smart Turnstile & Library Access",
    category: "Smart Access",
    topBadge: "Campus Access Tap",
    specPill: "Turnstile Sync",
    bottomSpec: "Rohit Das • NFC Access Granted • Attendance Sync",
    hubTag: "ZERO MISMATCH",
  },
];

export const DEFAULT_STUDENT_ORG_SLIDES: StudentOrgSlideItem[] = [
  {
    id: "schools",
    badge: "K-12 & High Schools",
    title: "Schools",
    categoryDesc:
      "Tailored student identification cards for structured school environments from foundational to senior levels.",
    forLabel: "For:",
    items: [
      "Primary schools",
      "Secondary schools",
      "Senior secondary schools",
      "Private schools",
      "Public schools",
      "Residential schools",
      "Boarding schools",
    ],
    iconName: "School",
    accentGradient: "from-blue-600 via-[#009fe3] to-cyan-400",
    bgGlow: "from-blue-500/15 via-[#009fe3]/10 to-transparent",
    pillColor:
      "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800/60",
  },
  {
    id: "colleges",
    badge: "Higher Education",
    title: "Colleges",
    categoryDesc:
      "Streamlined bulk ID production suited for multi-stream college departments, admissions, and annual sessions.",
    forLabel: "For:",
    items: [
      "Undergraduate students",
      "Postgraduate students",
      "Junior colleges",
      "Degree colleges",
      "Autonomous colleges",
      "Faculty & student bodies",
    ],
    iconName: "GraduationCap",
    accentGradient: "from-cyan-600 via-sky-500 to-blue-500",
    bgGlow: "from-cyan-500/15 via-sky-500/10 to-transparent",
    pillColor:
      "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/60 dark:text-cyan-300 dark:border-cyan-800/60",
  },
  {
    id: "universities",
    badge: "Campus Scale",
    title: "Universities",
    categoryDesc:
      "Campus-wide identity systems covering multiple faculties, hostelers, day scholars, research scholars, and staff.",
    forLabel: "For:",
    items: [
      "Multiple departments",
      "Different degree programmes",
      "Research scholars",
      "Campus library systems",
      "Hostel resident tracking",
      "Campus security checkpoints",
    ],
    iconName: "BookOpen",
    accentGradient: "from-sky-600 via-blue-600 to-indigo-600",
    bgGlow: "from-sky-500/15 via-blue-500/10 to-transparent",
    pillColor:
      "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-300 dark:border-sky-800/60",
  },
  {
    id: "coaching",
    badge: "Professional & Prep",
    title: "Coaching & Training Institutes",
    categoryDesc:
      "Fast-turnaround ID solutions for batch-based student enrollments, exam entries, and attendance validation.",
    forLabel: "For:",
    items: [
      "Competitive exam institutes",
      "Professional coaching centres",
      "Skill development centres",
      "Vocational training institutes",
      "Test prep centres",
      "Short-term study batches",
    ],
    iconName: "Building2",
    accentGradient: "from-teal-600 via-sky-500 to-blue-600",
    bgGlow: "from-teal-500/15 via-sky-500/10 to-transparent",
    pillColor:
      "bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-300 dark:border-teal-800/60",
  },
];

export const DEFAULT_FRONT_FIELDS: CardAnatomyField[] = [
  { id: "f1", name: "Institution Logo", category: "front", iconName: "Building2", hint: "High-resolution crest or emblem" },
  { id: "f2", name: "Institution Name", category: "front", iconName: "School", hint: "School, College, or University title" },
  { id: "f3", name: "Student Photograph", category: "front", iconName: "User", hint: "Clear passport-style photo" },
  { id: "f4", name: "Student Name", category: "front", iconName: "GraduationCap", hint: "Official enrolled student name" },
  { id: "f5", name: "Class / Course", category: "front", iconName: "BookOpen", hint: "Academic stream or program" },
  { id: "f6", name: "Roll Number / ID Number", category: "front", iconName: "CreditCard", hint: "Unique student identifier" },
];

export const DEFAULT_BACK_FIELDS: CardAnatomyField[] = [
  { id: "b1", name: "Admission Number", category: "back", iconName: "FileSpreadsheet", hint: "Permanent institutional record" },
  { id: "b2", name: "Academic Session", category: "back", iconName: "Calendar", hint: "Enrollment & validity year" },
  { id: "b3", name: "Date of Birth, if required", category: "back", iconName: "HeartPulse", hint: "Verified DOB record" },
  { id: "b4", name: "Emergency / Contact Information, if required", category: "back", iconName: "Phone", hint: "Parent/guardian contact" },
  { id: "b5", name: "QR Code / Barcode, if required", category: "back", iconName: "QrCode", hint: "Digital scanner lookup" },
  { id: "b6", name: "Institution Address", category: "back", iconName: "MapPin", hint: "Official campus premises location" },
];

export const DEFAULT_WORKFLOW_STEPS: StudentWorkflowConfigStep[] = [
  {
    step: "01",
    title: "Student Data",
    description: "The institution provides the required student information.",
    iconName: "FileSpreadsheet",
    badge: "Step 01 / Ingestion",
    categoryTag: "Data Ingestion",
    glowColor: "from-blue-600/20 via-[#009fe3]/15 to-transparent",
  },
  {
    step: "02",
    title: "Photograph Collection",
    description: "Student photographs are provided according to the agreed data format.",
    iconName: "Camera",
    badge: "Step 02 / Photos",
    categoryTag: "Image Formatting",
    glowColor: "from-cyan-600/20 via-sky-500/15 to-transparent",
  },
  {
    step: "03",
    title: "Data Preparation",
    description: "The information is organized for personalization and production.",
    iconName: "Layers",
    badge: "Step 03 / Data Prep",
    categoryTag: "Personalization Prep",
    glowColor: "from-sky-600/20 via-blue-500/15 to-transparent",
  },
  {
    step: "04",
    title: "Card Design Template",
    description: "The layout is prepared or verified against approved branding.",
    iconName: "Palette",
    badge: "Step 04 / Artwork",
    categoryTag: "Template Calibration",
    glowColor: "from-indigo-600/20 via-sky-500/15 to-transparent",
  },
  {
    step: "05",
    title: "Preview & Approval",
    description: "Where applicable, samples or digital proofs are reviewed.",
    iconName: "Eye",
    badge: "Step 05 / Proofing",
    categoryTag: "Digital Verification",
    glowColor: "from-teal-600/20 via-cyan-500/15 to-transparent",
  },
  {
    step: "06",
    title: "Card Printing",
    description: "Cards are printed with personalized details and photographs.",
    iconName: "Printer",
    badge: "Step 06 / Print Engine",
    categoryTag: "Thermal / Re-Transfer",
    glowColor: "from-blue-600/20 via-indigo-500/15 to-transparent",
  },
  {
    step: "07",
    title: "Quality Check",
    description: "Cards are reviewed for print clarity, data accuracy and alignment.",
    iconName: "ShieldCheck",
    badge: "Step 07 / Inspection",
    categoryTag: "Zero Mismatch QC",
    glowColor: "from-emerald-600/20 via-teal-500/15 to-transparent",
  },
  {
    step: "08",
    title: "Sorting & Packaging",
    description: "Cards are sorted by class, department or batch where required.",
    iconName: "Package",
    badge: "Step 08 / Collation",
    categoryTag: "Batch Organization",
    glowColor: "from-sky-600/20 via-cyan-500/15 to-transparent",
  },
  {
    step: "09",
    title: "Dispatch / Delivery",
    description: "The completed student cards are dispatched to the institution.",
    iconName: "Truck",
    badge: "Step 09 / Logistics",
    categoryTag: "Express Delivery",
    glowColor: "from-blue-600/20 via-sky-500/15 to-transparent",
  },
];

export const DEFAULT_ASSEMBLY_TIERS: StudentAssemblyTierItem[] = [
  {
    tier: "01",
    title: "Card Only",
    card: "Student ID Card",
    desc: "For institutions that already have accessories.",
    iconName: "CreditCard",
  },
  {
    tier: "02",
    title: "Card + Holder",
    card: "Student ID Card + Holder",
    desc: "For protected card storage.",
    iconName: "ShieldCheck",
  },
  {
    tier: "03",
    title: "Wearable Student ID",
    card: "Student ID Card + Holder + Hook + Custom Printed Lanyard",
    desc: "For students who need to wear their ID card.",
    iconName: "Users",
  },
  {
    tier: "04",
    title: "Complete Student ID Setup",
    card: "Student ID Card + Ultrasonic Sealing + Holder + Hook + Custom Printed Lanyard",
    desc: "Maximum security and complete institutional wearable assembly.",
    iconName: "Sparkles",
    isHighlight: true,
  },
];

export const DEFAULT_WHY_CHOOSE_REASONS: StudentWhyChooseReasonItem[] = [
  {
    title: "Student-Focused Workflow",
    body: "Designed around student data, photographs and personalized card production.",
    iconName: "GraduationCap",
  },
  {
    title: "Bulk Requirements",
    body: "Suitable for large student batches and institutional requirements.",
    iconName: "Layers",
  },
  {
    title: "Preview Before Production",
    body: "Where applicable, student information can be reviewed before production.",
    iconName: "Eye",
  },
  {
    title: "Complete Identification",
    body: "Cards can be combined with holders, hooks and custom printed lanyards.",
    iconName: "Package",
  },
  {
    title: "Digital Data Workflow",
    body: "IDGen Studio can support student data and photograph collection.",
    iconName: "Database",
  },
  {
    title: "One Identification Partner",
    body: "Institutions can coordinate cards and required accessories through one identity-focused supplier.",
    iconName: "ShieldCheck",
  },
];

export const DEFAULT_FAQS: StudentFaqItem[] = [
  {
    q: "What is a student ID card?",
    a: "A student ID card is a personalized identification card issued by an educational institution to identify a student and provide required institutional information.",
  },
  {
    q: "Can IDGen print student ID cards for schools?",
    a: "Yes. IDGen provides customized student ID card printing for schools and other educational institutions.",
  },
  {
    q: "Can colleges order student ID cards?",
    a: "Yes. The same student ID card printing service can be used for college students, including department-wise and batch-wise requirements.",
  },
  {
    q: "Does IDGen print university student ID cards?",
    a: "Yes. University student identification projects can include undergraduate, postgraduate and research-student cards according to the institution's requirements.",
  },
  {
    q: "Can student ID cards include photographs?",
    a: "Yes. Student photographs can be personalized onto the cards according to the supplied data and approved design.",
  },
  {
    q: "Can student ID cards include QR codes?",
    a: "Yes. QR codes or barcodes can be incorporated when required and when the required data is provided.",
  },
  {
    q: "Can student ID cards include lanyards?",
    a: "Yes. Student cards can be supplied with suitable holders, hooks and custom printed lanyards.",
  },
  {
    q: "Can I order student ID cards in bulk?",
    a: "Yes. Bulk student ID card projects can be handled according to quantity, data readiness, specifications and production requirements.",
  },
  {
    q: "Can IDGen collect student data?",
    a: "Yes. IDGen Studio is designed to support digital information and photograph collection for suitable projects.",
  },
  {
    q: "Can I see the card before printing?",
    a: "Where applicable, the workflow can include a preview and approval stage before production.",
  },
  {
    q: "Can student ID cards be replaced?",
    a: "Yes. Replacement cards can be produced according to the supplied student information and approved requirements.",
  },
];

export const DEFAULT_STUDENT_ID_CARD_PRINTING_DATA: DynamicStudentIdCardPrintingData = {
  hero: {
    badge: "Educational Credential Specialist",
    titlePrefix: "Student ID Card Printing ",
    titleHighlight: "Services",
    subtitle: "Student ID Cards for Schools, Colleges, Universities & Educational Institutions",
    lede: "IDGen provides custom student ID card printing for educational institutions that need personalized identification cards for students.",
    description:
      "From a small class batch to a large institution-wide requirement, IDGen can manage the identification workflow from student data and photographs to personalized card production and final dispatch.",
    stats: [
      { label: "Coverage", value: "Schools & Universities" },
      { label: "Capacity", value: "Class to Institution Scale" },
      { label: "Workflow", value: "Data to Dispatch" },
      { label: "Options", value: "Cards + Wearable Kits" },
    ],
    primaryCtaText: "Request Student ID Card Quote",
    primaryCtaLink: "/request-a-quote/",
    secondaryCtaText: "View ID Card Pricing",
    secondaryCtaLink: "/pricing/",
    studentCardFields: [
      "Student photograph",
      "Student name",
      "Admission / enrollment number",
      "Roll number",
      "Class / course",
      "Section",
      "Department",
      "Academic session",
      "Date of birth, where required",
      "Blood group, where required",
      "School / college / university name",
      "Institution logo",
      "QR code",
      "Barcode",
      "Contact information",
      "Other approved identification details",
    ],
    studentCardFieldsNote: "✦ The exact information depends on the institution's requirements.",
  },

  heroSlides: DEFAULT_STUDENT_HERO_SLIDES,

  scope: {
    eyebrow: "Institutional Scope",
    title: "Student ID Card Printing for Every Type of Institution",
    description: "The same student-ID workflow can be adapted to different educational environments.",
    footerNote:
      "✦ One student ID card service can therefore support multiple educational environments without creating separate duplicate service pages.",
    items: DEFAULT_STUDENT_ORG_SLIDES,
  },

  cardAnatomy: {
    eyebrow: "Card Anatomy",
    title: "What Can Be Printed on a Student ID Card?",
    description:
      "A student ID card should contain the information required to identify the student clearly while avoiding unnecessary information.",
    subheading: "A typical student card may contain:",
    footerNote: "✦ The final layout can be customized according to the institution's approved design.",
    frontFields: DEFAULT_FRONT_FIELDS,
    backFields: DEFAULT_BACK_FIELDS,
  },

  design: {
    eyebrow: "Custom Branding",
    title: "Student ID Card Design",
    description: "A student ID card can be designed around the institution's existing visual identity.",
    imageSrc: "/images/student-id-card-design-branding-v1.jpg",
    imageAlt: "Custom student ID card design and branding for schools and universities by IDGen",
    badgeTopLeft: "Brand Integration",
    badgeTopRight: "600 DPI Precision",
    footerTagline: "Artwork & Production",
    footerTitle: "Institutional Visual Identity",
    footerStatus: "Approved Reference",
    boxTitle: "Customization can include:",
    elements: [
      { name: "Institution logo", iconName: "Building2" },
      { name: "Brand colours", iconName: "Palette" },
      { name: "Typography", iconName: "Sparkles" },
      { name: "Student photograph", iconName: "Users" },
      { name: "Academic information", iconName: "GraduationCap" },
      { name: "QR code", iconName: "QrCode" },
      { name: "Barcode", iconName: "Barcode" },
      { name: "Security elements", iconName: "ShieldCheck" },
      { name: "Front and back layout", iconName: "Layers" },
      { name: "Lanyard branding", iconName: "Sliders" },
    ],
    note: "Where an institution already has an approved design, the existing artwork can be used as the production reference.",
  },

  pvc: {
    eyebrow: "Card Specifications",
    title: "PVC Student ID Cards",
    specPill: "Standard 30-Mil CR80 PVC",
    cards: [
      {
        number: "01",
        tag: "Variable Data",
        title: "Personalized Format",
        description: "IDGen provides personalized PVC ID cards for student identification requirements.",
        bottomLeft: "Photo & Text",
        bottomRight: "100% Individualized",
        iconName: "CreditCard",
        colorScheme: "cyan",
      },
      {
        number: "02",
        tag: "High-Capacity Batches",
        title: "Standardized Batches",
        description:
          "PVC cards are suitable for organizations that need a standardized card format for large batches of students.",
        bottomLeft: "Batch Output",
        bottomRight: "Institutional Scale",
        iconName: "Layers",
        colorScheme: "indigo",
      },
      {
        number: "03",
        tag: "Tailored Finishes",
        title: "Application Selection",
        description:
          "The card specification can be selected according to the required application, design and production requirements.",
        bottomLeft: "Configuration",
        bottomRight: "Full Flexibility",
        iconName: "Sliders",
        colorScheme: "teal",
      },
    ],
    footerNote:
      "For exact card specifications and current pricing, refer to the relevant product and pricing information rather than duplicating those details throughout this page.",
    footerCtaText: "View ID Card Specifications & Pricing",
    footerCtaLink: "/pricing/",
  },

  process: {
    eyebrow: "Production Workflow",
    title: "Student ID Card Printing Process",
    description:
      "A large student-ID project involves much more than printing names onto cards. IDGen uses a structured workflow.",
    steps: DEFAULT_WORKFLOW_STEPS,
  },

  assembly: {
    eyebrow: "Assembly Options",
    title: "Student ID Card + Complete Identification Set",
    description:
      "An institution may need more than just the PVC card. IDGen allows student identification to be configured according to the actual requirement.",
    tiers: DEFAULT_ASSEMBLY_TIERS,
    footerNote: "The appropriate configuration depends on the institution's card and attachment requirements.",
    footerCtaText: "Explore Complete ID Card Setup",
    footerCtaLink: "/id-card-printing/",
  },

  lanyards: {
    eyebrow: "Branded Accessories",
    title: "Custom Student ID Lanyards",
    description: "Educational institutions can also customize their lanyards with:",
    items: [
      "Institution logo",
      "Institution name",
      "School / college branding",
      "Brand colours",
      "Academic session",
      "Repeating artwork",
    ],
    setupBannerTitle: "A typical student identification setup can therefore be:",
    setupSteps: ["Student ID Card", "Holder", "Hook", "Custom Printed Lanyard"],
    footerNote: "✦ The lanyard can be supplied separately or coordinated as part of the overall student identification requirement.",
    footerCtaText: "Explore Custom Printed Lanyard Printing",
    footerCtaLink: "/custom-printed-lanyard-printing/",
  },

  studio: {
    eyebrow: "Digital Workflow",
    title: "Student ID Card Data Collection",
    description:
      "For institutions with hundreds or thousands of students, collecting photographs and information can become one of the most time-consuming parts of the project. IDGen Studio is designed to help organize this stage.",
    badge: "Digital Workflow Engine",
    cloudLabel: "IDGen Studio Cloud",
    flowTitle: "End-to-End Digital Flow:",
    flowSteps: [
      "Student Registration",
      "Data Collection",
      "Photograph",
      "Preview",
      "Approval",
      "Printing",
    ],
    subheading: "Depending on the project, the workflow can help organizations organize:",
    fields: [
      "Student names",
      "Admission numbers",
      "Roll numbers",
      "Classes",
      "Sections",
      "Courses",
      "Departments",
      "Academic sessions",
      "Photographs",
      "Other required information",
    ],
    closingNote: "This creates a connection between the student information and the final personalized ID card.",
    ctaText: "Explore IDGen Studio",
    ctaLink: "/idgen-studio/",
    imageSrc: "/images/student-data-collection-workflow-v1.jpg",
    imageAlt:
      "Student ID card data collection workflow — tablet with data entry form and printed student ID cards with camera",
    imageBadge: "Digital Ingestion",
    imageTitle: "Student Data & Photo Collection",
    imageTag: "Cloud Platform",
  },

  bulk: {
    eyebrow: "Batch Scale",
    title: "Bulk Student ID Card Printing",
    description: "Student ID card requirements are commonly bulk projects.",
    leftBoxTitle: "A single institution may require cards for:",
    bulkRequirements: [
      "New admissions",
      "Existing students",
      "Multiple classes",
      "Multiple departments",
      "Multiple campuses",
      "Annual ID renewal",
      "Replacement cards",
    ],
    rightBoxTitle: "Production schedule depends on:",
    productionScheduleFactors: [
      "Number of students",
      "Data readiness",
      "Photograph readiness",
      "Design approval",
      "Card specification",
      "Accessories",
      "Assembly requirements",
      "Quality-control requirements",
    ],
    footerNote:
      "For large requirements, the most important factor is not only printing capacity but data readiness and approval speed.",
    footerCtaText: "Explore Bulk ID Card Printing",
    footerCtaLink: "/id-card-printing/",
  },

  sessions: {
    box1Eyebrow: "Annual Ingestion",
    box1Title: "Student ID Cards for New Academic Sessions",
    box1Subtitle: "Many institutions produce new ID cards at the beginning of an academic session.",
    annualFlowTitle: "A typical annual workflow can be:",
    annualFlowSteps: [
      "Student Admission",
      "Data Collection",
      "Photograph Collection",
      "Card Design",
      "Preview",
      "Approval",
      "Bulk Printing",
      "Distribution",
    ],
    box1Paragraph1: "IDGen can support this workflow for new student batches and renewal projects.",
    box1Paragraph2:
      "Institutions can also maintain a standardized design so that future academic batches can be produced using the same identification system with updated student information.",

    box2Eyebrow: "Ongoing Support",
    box2Title: "Replacement Student ID Cards",
    box2Subtitle: "Student cards may sometimes need replacement because of:",
    replacementReasons: [
      "Lost cards",
      "Damaged cards",
      "Incorrect information",
      "Photograph changes",
      "Course changes",
      "Class changes",
      "Other institutional requirements",
    ],
    box2Paragraph1:
      "Replacement requirements can be handled according to the institution's supplied data and production specifications.",
    box2Paragraph2:
      "For replacement orders, providing the correct student information and approved design reference helps reduce avoidable errors.",
  },

  security: {
    qrEyebrow: "Digital Integration",
    qrTitle: "Student ID Cards With QR Code or Barcode",
    qrSubtitle: "Institutions may choose to include a QR code or barcode on student cards.",
    qrListTitle: "Possible applications include:",
    qrApplications: [
      "Student identification",
      "Record lookup",
      "Library systems",
      "Attendance systems",
      "Verification workflows",
      "Internal institutional systems",
    ],
    qrNote:
      "The QR code or barcode should be generated according to the institution's required data or system specifications.",
    rfidNote:
      "For RFID requirements, use the dedicated RFID service rather than treating RFID as a standard printed-card feature.",
    rfidCtaText: "Explore RFID Card Printing",
    rfidCtaLink: "/rfid-card-printing/",

    qcEyebrow: "Quality Control",
    qcTitle: "Student ID Card Security & Accuracy",
    qcSubtitle: "A student ID card is a personalized identification document.",
    qcParagraph1:
      "For large batches, accuracy is particularly important because even a small data error can affect an individual student's card.",
    qcWorkflowTitle: "IDGen's workflow therefore emphasizes:",
    qcWorkflowSteps: ["Data", "Design", "Preview", "Approval", "Production", "Quality Check"],
    qcParagraph2:
      "This helps provide an opportunity to identify errors before bulk production where applicable.",
  },

  applications: {
    eyebrow: "Campus Utilities",
    title: "Student ID Card Applications",
    description: "Student identification cards can be used for:",
    applications: [
      "Campus identification",
      "Student verification",
      "Library access",
      "Examination identification",
      "Institutional events",
      "Laboratory access",
      "Hostel identification",
      "Transportation identification",
      "Internal student services",
      "General campus identification",
    ],
    footerNote: "✦ The actual use depends on the institution's policies and systems.",
  },

  coverage: {
    eyebrow: "Regional Coverage",
    title: "Student ID Card Printing in Assam & Northeast India",
    description:
      "IDGen is based in Guwahati, Assam and serves educational organizations across Assam and the wider Northeast India market.",
    subheading: "Student ID card requirements can be supported for institutions in locations including:",
    cities: [
      "Guwahati",
      "Jorhat",
      "Dibrugarh",
      "Silchar",
      "Tezpur",
      "Nagaon",
      "Tinsukia",
      "Sivasagar",
      "Golaghat",
      "Bongaigaon",
      "Diphu",
      "North Lakhimpur",
      "Barpeta",
    ],
    footerNote: "✦ For location-specific information, use the relevant service-area pages.",
    cta1Text: "Student ID Card Printing in Assam",
    cta1Link: "/service-areas/assam/",
    cta2Text: "Student ID Card Printing in Guwahati",
    cta2Link: "/service-areas/assam/guwahati/",
  },

  whyChoose: {
    eyebrow: "Institutional Value",
    title: "Why Choose IDGen for Student ID Cards?",
    description:
      "We should not repeat the entire Why IDGen page here. Instead, this page gives only the student-specific reasons:",
    reasons: DEFAULT_WHY_CHOOSE_REASONS,
    footerNote: "For the broader company story, manufacturing capability and quality philosophy:",
    footerLinkText: "Why Choose IDGen?",
    footerLinkUrl: "/why-idgen/",
  },

  pricing: {
    eyebrow: "Pricing Architecture",
    title: "Student ID Card Pricing",
    description:
      "Rather than repeating a large pricing table here, keep this page focused on student ID card service intent. The current pricing should live on the central pricing architecture.",
    boxTitle: "Pricing may depend on:",
    badge: "10 Cost Factors",
    factors: [
      "Quantity",
      "Card specification",
      "Printing requirement",
      "Data/personalization",
      "Accessories",
      "Lanyard",
      "Holder",
      "Hook",
      "Sealing",
      "Delivery requirements",
    ],
    boxNote: "This keeps pricing centralized and prevents conflicting prices across multiple pages.",
    bottomText: "Need the Current Price?",
    ctaText: "View Student / ID Card Pricing",
    ctaLink: "/pricing/",
  },

  eligibleOrgs: {
    eyebrow: "Eligibility & Scope",
    title: "Who Can Order Student ID Cards?",
    description: "Student ID card printing can be used by:",
    organizations: [
      "Schools",
      "Colleges",
      "Universities",
      "Coaching institutes",
      "Training institutes",
      "Vocational institutes",
      "Professional institutes",
      "Educational organizations",
      "Hostels and residential institutions",
      "Other student-based organizations",
    ],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Frequently Asked Questions",
    faqs: DEFAULT_FAQS,
  },

  quickAnswerAndCta: {
    quickAnswerBadge: "Quick Answer — Student ID Card Printing",
    quickAnswerBody:
      "IDGen provides customized student ID card printing for schools, colleges, universities, coaching institutes and other educational organizations. Student cards can include photographs, names, roll numbers, admission numbers, classes, courses, departments, academic sessions, QR codes and other required information. Bulk orders can also be combined with holders, hooks, custom printed lanyards and suitable ultrasonic-sealing configurations.",
    ctaTitle: "Start Your Student ID Card Project",
    ctaBody:
      "You don't need to prepare the entire project before contacting us. Send us: Approximate Quantity + Institution Type + Existing Design (if available) + Student Data Format + Required Accessories. IDGen can then help determine the appropriate production configuration.",
    primaryButtonText: "Request Student ID Card Quote",
    primaryButtonLink: "/request-a-quote/",
    secondaryLinks: [
      { label: "View Pricing", href: "/pricing/" },
      { label: "Explore IDGen Studio", href: "/idgen-studio/" },
      { label: "Contact IDGen", href: "/contact-us/" },
    ],
  },

  metadata: {
    title: "Student ID Card Printing | School, College & University ID Cards | IDGen",
    description:
      "Custom student ID card printing for schools, colleges, universities and educational institutions. Bulk PVC student cards with photo, QR code, lanyard, holder and complete ID solutions.",
    path: "/student-id-card-printing/",
  },
};

export function getDynamicStudentIdCardPrinting(): DynamicStudentIdCardPrintingData {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const fileData = fs.readFileSync(DATA_FILE, "utf-8");
      const parsed = JSON.parse(fileData);
      return {
        ...DEFAULT_STUDENT_ID_CARD_PRINTING_DATA,
        ...parsed,
      };
    }
  } catch (error) {
    console.error("Error reading dynamic-student-id-card-printing.json:", error);
  }
  return DEFAULT_STUDENT_ID_CARD_PRINTING_DATA;
}

export function saveDynamicStudentIdCardPrinting(
  data: DynamicStudentIdCardPrintingData
): DynamicStudentIdCardPrintingData {
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
    return data;
  } catch (error) {
    console.error("Error saving dynamic-student-id-card-printing.json:", error);
    throw error;
  }
}

export function resetDynamicStudentIdCardPrinting(): DynamicStudentIdCardPrintingData {
  return saveDynamicStudentIdCardPrinting(DEFAULT_STUDENT_ID_CARD_PRINTING_DATA);
}
