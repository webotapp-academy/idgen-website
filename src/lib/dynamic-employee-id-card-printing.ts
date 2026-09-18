import fs from "fs";
import path from "path";
import { DynamicEmployeeIdCardPrintingData } from "./dynamic-employee-id-card-printing-types";

export * from "./dynamic-employee-id-card-printing-types";

export const DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA: DynamicEmployeeIdCardPrintingData = {
  hero: {
    badge: "Employee ID Card Printing",
    badgeSub: "Corporate & Staff",
    title: "Custom Employee ID Cards",
    titleHighlight: "for Companies, Offices & Organizations",
    description:
      "IDGen provides custom employee ID card printing for companies, offices, institutions, hospitals, industries, NGOs, organizations and other workplaces.",
    personalizationTitle: "Employee ID cards can be personalized with:",
    personalizationItems: [
      "Employee name",
      "Employee photograph",
      "Employee ID",
      "Designation",
      "Department",
      "Company name",
      "Company logo",
      "Joining information",
      "Contact information",
      "QR codes",
      "Barcodes",
      "Other organization-required information",
    ],
    note:
      "Whether you are onboarding new employees, replacing existing cards or producing ID cards for an entire workforce, IDGen can organize the printing requirement around your employee data and approved design.",
    primaryCtaText: "Request Employee ID Card Quote",
    primaryCtaLink: "/request-a-quote/",
    secondaryCtaText: "See ID Card Printing Options",
    secondaryCtaLink: "/id-card-printing/",

    eyebrowBadge: "Employee ID Card Printing",
    eyebrowScope: "Corporate & Staff",
    titlePrefix: "Custom Employee ID Cards ",
    personalizationBadge: "Custom Fields",
    ledeNote:
      "Whether you are onboarding new employees, replacing existing cards or producing ID cards for an entire workforce, IDGen can organize the printing requirement around your employee data and approved design.",
  },

  heroSlides: [
    {
      id: "executive-id",
      imageSrc: "/images/employee-hero-slide-executive-id.jpg",
      alt: "Executive corporate employee ID card with holographic seal and custom satin lanyard manufactured by IDGen",
      title: "Executive Corporate Employee ID Cards",
      category: "Executive",
      topBadge: "Executive ID Badge",
      specPill: "Holographic Seal",
      bottomSpec: "Arjun Mehta • Chief Technology Officer • QR Pass",
      hubTag: "GUWAHATI HUB",
    },
    {
      id: "corporate-set",
      imageSrc: "/images/employee-hero-slide-corporate-set.jpg",
      alt: "Corporate employee ID cards with metal clips and custom printed satin lanyards made by IDGen",
      title: "Enterprise Staff & Office Credentials",
      category: "Corporate",
      topBadge: "Corporate Staff ID",
      specPill: "30-Mil Gloss PVC",
      bottomSpec: "Sarah Jenkins • Senior Software Engineer • Dept Sets",
      hubTag: "ASSAM DIRECT",
    },
    {
      id: "rfid-access",
      imageSrc: "/images/employee-hero-slide-rfid-access.jpg",
      alt: "Contactless 13.56 MHz RFID smart employee ID card tapping turnstile access control reader",
      title: "13.56 MHz RFID / NFC Access Badges",
      category: "Smart Access",
      topBadge: "Smart Turnstile Tap",
      specPill: "13.56 MHz RFID",
      bottomSpec: "Priya Sen • Senior Product Manager • Turnstile Sync",
      hubTag: "ZERO MISMATCH",
    },
    {
      id: "modular-kit",
      imageSrc: "/images/employee-hero-slide-modular-kit.jpg",
      alt: "Complete modular corporate wearable set with ID card, holder, retractable reel and custom lanyard by IDGen",
      title: "Complete Modular Wearable ID Kit",
      category: "Modular Kit",
      topBadge: "Complete Wearable Set",
      specPill: "Retractable Reel",
      bottomSpec: "Alex Chen • Smoked Case + Reel + Satin Lanyard",
      hubTag: "ALL-IN-ONE",
    },
    {
      id: "bulk-batch",
      imageSrc: "/images/employee-hero-slide-bulk-batch.jpg",
      alt: "High-volume bulk batch corporate employee ID cards printed with variable photos and department codes by IDGen",
      title: "Workforce Bulk Batch Production",
      category: "Bulk Batch",
      topBadge: "Bulk Workforce Ready",
      specPill: "10,000+ Daily Capacity",
      bottomSpec: "Multi-Department Batches • Barcodes • Fast Dispatch",
      hubTag: "EXPRESS DISPATCH",
    },
  ],

  modernWorkplaces: {
    badge: "Modern Workplaces",
    eyebrow: "Modern Workplaces",
    title: "Employee Identification for Modern Workplaces",
    description:
      "An employee ID card is more than a card carrying a person's name. It can serve as a visible identification tool across the workplace.",
    items: [
      {
        title: "Employee recognition",
        iconName: "Award",
        desc: "Instills identity, pride, and official company affiliation for every team member.",
      },
      {
        title: "Workplace identification",
        iconName: "Building2",
        desc: "Clear on-site visual credentialing across office floors, branches, and facilities.",
      },
      {
        title: "Department identification",
        iconName: "Layers",
        desc: "Color-coded and role-based categorization for fast cross-functional coordination.",
      },
      {
        title: "Visitor and staff differentiation",
        iconName: "UserCheck",
        desc: "Instantly distinguishes authorized workforce members from outside guests.",
      },
      {
        title: "Internal administration",
        iconName: "FileCheck",
        desc: "Streamlines HR record management, payroll tracking, and equipment allocation.",
      },
      {
        title: "Events and meetings",
        iconName: "Users",
        desc: "Professional corporate representation at conferences, trade expos, and board meets.",
      },
      {
        title: "Access-related identification systems",
        iconName: "ShieldCheck",
        desc: "Works seamlessly with QR scanners, barcodes, and automated RFID turnstiles.",
      },
      {
        title: "Organization branding",
        iconName: "Sparkles",
        desc: "Reinforces unified brand colors, logos, and executive corporate aesthetics.",
      },
    ],
    footerNote:
      "IDGen helps organizations create employee ID cards around their actual workplace requirements rather than using a one-size-fits-all design.",
  },

  solutionsSection: {
    badge: "Workforce Categories",
    title: "Employee ID Card Solutions",
    description:
      "Different organizations have different workforce structures. Instead of creating separate pages for every type of employee card, this page covers the major employee-identification requirements in one place.",
  },

  solutions: [
    {
      id: "corporate",
      title: "Corporate Employee ID Cards",
        badge: "Corporate & Offices",
        description:
          "For companies and corporate offices requiring professional employee identification.",
        typicalItems: [
          "Employee Photo",
          "Employee Name",
          "Employee ID",
          "Designation",
          "Department",
          "Company Branding",
        ],
        iconName: "Building2",
        image: "/images/sol-companies-idgen-v2.jpg",
        accent: "from-blue-600 to-cyan-500",
      },
      {
        id: "staff",
        title: "Staff ID Cards",
        badge: "Offices & Institutions",
        description:
          "Suitable for staff members working in offices, institutions, hospitals, schools, colleges and other organizations. The design can distinguish staff categories where required.",
        typicalItems: [
          "Staff Photograph",
          "Staff Name & Role",
          "Staff Category Markers",
          "Institution Logo & Info",
          "Access & Verification",
        ],
        iconName: "Users",
        image:
          "/images/ID Card Full Set Samples/High-quality Employee ID Cards and Staff Identity Cards delivered to clients in Guwahati and Assam.jpg",
        accent: "from-emerald-600 to-teal-500",
      },
      {
        id: "industries",
        title: "Employee ID Cards for Industries",
        badge: "Industrial & Manufacturing",
        description:
          "Industrial organizations may require identification structured according to the organization's identification system for different workforce tiers.",
        involvesList: [
          "Permanent employees",
          "Supervisors",
          "Technicians",
          "Production staff",
          "Administrative staff",
          "Contract workforce",
        ],
        iconName: "Factory",
        image: "/images/why-idgen-production-batches-branded.jpg",
        accent: "from-amber-600 to-orange-500",
      },
      {
        id: "hospitals",
        title: "Hospital Employee ID Cards",
        badge: "Healthcare & Clinics",
        description:
          "Hospitals and healthcare organizations can adapt their card designs according to the organization's requirements for all clinical and support staff.",
        involvesList: [
          "Doctors",
          "Nurses",
          "Administrative staff",
          "Technicians",
          "Support staff",
          "Other authorized personnel",
        ],
        iconName: "Hospital",
        image: "/images/Order Deliver/MY SARAH,JORHAT 1.png",
        accent: "from-cyan-600 to-sky-500",
      },
      {
        id: "ngo",
        title: "NGO & Institutional ID Cards",
        badge: "Non-Profit & Social",
        description:
          "For non-profit organizations, voluntary associations, community teams, and institutional projects with field verification requirements.",
        involvesList: [
          "Core staff members",
          "Field coordinators",
          "Volunteers",
          "Project directors",
          "Authorized representatives",
        ],
        iconName: "HeartHandshake",
        image: "/images/service-pvc-id-card-printing.jpg",
        accent: "from-purple-600 to-pink-500",
      },
    ],

  cardAnatomy: {
    badge: "Card Layout",
    eyebrow: "Card Layout",
    title: "Employee ID Card Design",
    description:
      "A professional employee ID card should make important information easy to identify.",
    footerNote: "The actual information depends on the organization's requirements.",
    frontFields: [
      {
        id: "f1",
        name: "Company Logo",
        category: "front",
        iconName: "Building2",
        hint: "Official corporate emblem & branding",
      },
      {
        id: "f2",
        name: "Employee Photograph",
        category: "front",
        iconName: "User",
        hint: "High-resolution passport photograph",
      },
      {
        id: "f3",
        name: "Employee Name",
        category: "front",
        iconName: "User",
        hint: "Full official employee name",
      },
      {
        id: "f4",
        name: "Designation",
        category: "front",
        iconName: "Briefcase",
        hint: "Role / job title",
      },
      {
        id: "f5",
        name: "Employee ID",
        category: "front",
        iconName: "CreditCard",
        hint: "Unique alphanumeric staff code",
      },
    ],
    backFields: [
      {
        id: "b1",
        name: "Company information",
        category: "back",
        iconName: "Building2",
        hint: "Office address & registered details",
      },
      {
        id: "b2",
        name: "Emergency/contact information where required",
        category: "back",
        iconName: "Phone",
        hint: "Emergency phone & blood group",
      },
      {
        id: "b3",
        name: "QR code or barcode",
        category: "back",
        iconName: "QrCode",
        hint: "Machine-readable digital verification",
      },
      {
        id: "b4",
        name: "Terms or instructions",
        category: "back",
        iconName: "FileText",
        hint: "Cardholder responsibilities & return instructions",
      },
      {
        id: "b5",
        name: "Verification information",
        category: "back",
        iconName: "ShieldCheck",
        hint: "Authorized signatory / validity details",
      },
    ],
  },

  personalization: {
    badge: "Personalization",
    eyebrow: "Variable Data Fields",
    title: "Employee ID Card Personalization",
    description:
      "IDGen can personalize employee cards using organization-supplied employee data. For example:",
    fields: [
      { field: "Employee Name", example: "Rahul Sharma", iconName: "Users" },
      { field: "Employee ID", example: "EMP1024", iconName: "CreditCard" },
      { field: "Designation", example: "Sales Executive", iconName: "Briefcase" },
      { field: "Department", example: "Sales", iconName: "Layers" },
      { field: "Photograph", example: "Employee Photo", iconName: "Eye" },
      { field: "Joining Date", example: "Organization-defined", iconName: "Clock" },
      { field: "QR Code", example: "Organization-defined", iconName: "QrCode" },
    ],
    footerNote:
      "The actual fields can be customized according to the company's identification requirements.",
  },

  onboarding: {
    badge: "HR Workflow",
    eyebrow: "HR Workflow",
    title: "New Employee Onboarding",
    description: "Employee ID printing is often connected with employee onboarding.",
    workflowTitle: "A typical workflow can be:",
    steps: [
      "Employee Data",
      "Photograph",
      "ID Card Design",
      "Preview",
      "Approval",
      "Printing",
    ],
    paragraphs: [
      "This can help organizations maintain a consistent ID-card format when new employees join.",
      "For larger employee batches, organizations can also use IDGen Studio for structured data and photograph collection where applicable.",
    ],
    paragraph1:
      "This can help organizations maintain a consistent ID-card format when new employees join.",
    paragraph2:
      "For larger employee batches, organizations can also use IDGen Studio for structured data and photograph collection where applicable.",
    ctaText: "Explore IDGen Studio",
    ctaLink: "/idgen-studio/",
  },

  replacement: {
    badge: "Card Reissue",
    eyebrow: "Card Reissue",
    title: "Employee ID Card Replacement",
    description: "Organizations may also require replacement cards because of:",
    reasons: [
      "Lost cards",
      "Damaged cards",
      "Employee information changes",
      "Design changes",
      "Department changes",
      "Employee designation changes",
      "Company rebranding",
      "Annual renewal",
    ],
    footerNote:
      "The replacement requirement can be processed using the organization's approved employee information and card design.",
  },

  departments: {
    badge: "Department Categorization",
    eyebrow: "Department Categorization",
    title: "Department-Wise Employee Identification",
    description:
      "Organizations with multiple departments can maintain a common card design while differentiating departments through approved design elements.",
    chainTitle: "For example:",
    departments: ["Management", "HR", "Finance", "Sales", "Operations", "IT"],
    items: ["Management", "HR", "Finance", "Sales", "Operations", "IT"],
    paragraphs: [
      "The exact approach can be defined according to the organization's internal identification requirements.",
      "This can be especially useful for larger organizations with multiple departments or locations.",
    ],
    paragraph1:
      "The exact approach can be defined according to the organization's internal identification requirements.",
    paragraph2:
      "This can be especially useful for larger organizations with multiple departments or locations.",
  },

  digitalId: {
    badge: "Machine-Readable Technology",
    eyebrow: "Machine-Readable Technology",
    title: "Employee ID Cards With Digital Identification",
    description:
      "Where required, employee cards can incorporate machine-readable elements such as:",
    technologies: [
      { name: "QR codes", desc: "Dynamic scanner lookup", iconName: "QrCode" },
      { name: "Barcodes", desc: "1D Code 128 / Code 39", iconName: "Barcode" },
      { name: "RFID technology", desc: "13.56 MHz & 125 kHz smart chips", iconName: "CreditCard" },
    ],
    qrTitle: "QR codes",
    qrSub: "Dynamic scanner lookup",
    barcodeTitle: "Barcodes",
    barcodeSub: "1D Code 128 / Code 39",
    rfidTitle: "RFID technology",
    rfidSub: "13.56 MHz & 125 kHz smart chips",
    footerNote:
      "The technology selected should match the organization's intended use and compatible system.",
    ctaText: "Explore RFID Card Printing",
    ctaLink: "/rfid-card-printing/",
  },

  completeSetup: {
    badge: "Complete Wearable Kit",
    eyebrow: "Complete Wearable Kit",
    title: "Employee ID Card Complete Setup",
    description: "An employee identification project may require more than the printed card.",
    comboPill: "Employee ID Card + Holder + Hook + Custom Printed Lanyard",
    setupHeading:
      "Depending on the organization's requirements, the identification setup can include:",
    setupPillText: "Employee ID Card + Holder + Hook + Custom Printed Lanyard",
    footerNote:
      "For suitable configurations, additional finishing or attachment requirements can also be included. Rather than repeating the specifications of each accessory on this page, those details are covered on their dedicated pages.",
    links: [
      { label: "Explore Custom Printed Lanyards", url: "/custom-printed-lanyard-printing/" },
      { label: "Explore ID Card Holders", url: "/id-card-holders/" },
      { label: "Explore ID Card Hooks", url: "/id-card-hooks/" },
    ],
    link1Text: "Explore Custom Printed Lanyards",
    link1Href: "/custom-printed-lanyard-printing/",
    link2Text: "Explore ID Card Holders",
    link2Href: "/id-card-holders/",
    link3Text: "Explore ID Card Hooks",
    link3Href: "/id-card-hooks/",
  },

  bulk: {
    badge: "Bulk Production",
    eyebrow: "Bulk Production",
    title: "Employee ID Card Printing for Bulk Requirements",
    description: "Companies may need employee cards for:",
    requirements: [
      "New employee onboarding",
      "Entire workforce",
      "Multiple departments",
      "Multiple branches",
      "Annual renewal",
      "Large recruitment drives",
      "Organization-wide replacement",
    ],
    bulkRequirements: [
      "New employee onboarding",
      "Entire workforce",
      "Multiple departments",
      "Multiple branches",
      "Annual renewal",
      "Large recruitment drives",
      "Organization-wide replacement",
    ],
    factorsTitle: "For large projects, the most important factors are usually:",
    factorsPill:
      "Employee Data + Photographs + Approved Design + Quantity + Required Configuration",
    factorsText:
      "Employee Data + Photographs + Approved Design + Quantity + Required Configuration",
    footerNote:
      "IDGen's main ID card printing service covers the broader bulk-production process.",
    ctaText: "Explore ID Card Printing & Bulk Orders",
    ctaLink: "/id-card-printing/",
  },

  dataRequirements: {
    badge: "Data Organization",
    eyebrow: "Data Organization",
    title: "Employee ID Card Data & Photo Requirements",
    description:
      "For personalized employee cards, customers should provide the required employee information in an organized format.",
    structureTitle: "A typical data structure may include:",
    pillars: [
      "Employee ID",
      "Employee Name",
      "Designation",
      "Department",
      "Photograph",
      "Other Required Information",
    ],
    dataPillars: [
      "Employee ID",
      "Employee Name",
      "Designation",
      "Department",
      "Photograph",
      "Other Required Information",
    ],
    paragraphs: [
      "Photographs should be clearly associated with the correct employee record.",
      "For large batches, structured data preparation can help reduce personalization errors.",
    ],
    paragraph1: "Photographs should be clearly associated with the correct employee record.",
    paragraph2:
      "For large batches, structured data preparation can help reduce personalization errors.",
    ctaText: "Explore IDGen Studio",
    ctaLink: "/idgen-studio/",
  },

  previewApproval: {
    badge: "Verification Before Print",
    eyebrow: "Verification Before Print",
    title: "Employee ID Card Preview & Approval",
    description:
      "Before production, organizations can review the required design and employee information where applicable.",
    checkpointsTitle: "This provides an opportunity to identify issues such as:",
    issues: [
      "Incorrect employee name",
      "Incorrect photograph",
      "Wrong employee ID",
      "Incorrect designation",
      "Incorrect department",
      "Missing information",
      "Design errors",
    ],
    previewIssues: [
      "Incorrect employee name",
      "Incorrect photograph",
      "Wrong employee ID",
      "Incorrect designation",
      "Incorrect department",
      "Missing information",
      "Design errors",
    ],
    objectiveNote:
      "The objective is simple: Review important information before bulk production.",
    objectiveText:
      "The objective is simple: Review important information before bulk production.",
    ctaText: "Why IDGen Workflow",
    ctaLink: "/why-idgen/",
    linkText: "For the complete production and quality workflow, see Why IDGen →",
    linkHref: "/why-idgen/",
  },

  pricing: {
    badge: "Transparent Pricing",
    eyebrow: "Transparent Pricing",
    title: "Employee ID Card Pricing",
    paragraphs: [
      "Employee ID card pricing depends on the selected card specification, quantity, personalization requirements and other components.",
      "Instead of duplicating pricing tables across multiple service pages, IDGen maintains pricing in the central pricing system.",
      "This keeps prices easier to maintain when specifications or quantities change.",
    ],
    paragraph1:
      "Employee ID card pricing depends on the selected card specification, quantity, personalization requirements and other components.",
    paragraph2:
      "Instead of duplicating pricing tables across multiple service pages, IDGen maintains pricing in the central pricing system.",
    paragraph3:
      "This keeps prices easier to maintain when specifications or quantities change.",
    ctaText: "View Current ID Card Pricing",
    ctaLink: "/pricing/",
  },

  whoCanOrder: {
    badge: "Client Base",
    eyebrow: "Client Base",
    title: "Who Can Order Employee ID Cards?",
    description: "IDGen's employee ID card service can be used by:",
    clients: [
      "Private companies",
      "Corporate offices",
      "Startups",
      "Factories",
      "Industries",
      "Hospitals",
      "Schools",
      "Colleges",
      "Universities",
      "NGOs",
      "Government organizations",
      "Institutions",
      "Associations",
      "Other workplaces",
    ],
    footerNote:
      "The card design and information can be adapted to the organization's requirements.",
  },

  coverage: {
    badge: "Regional Hub",
    eyebrow: "Regional Hub",
    title: "Employee ID Card Printing in Assam",
    description:
      "IDGen is based in Guwahati, Assam, serving organizations across Assam and the wider Northeast India market. Employee identification requirements can be handled for organizations in locations including:",
    locations: [
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
      "Other Assam locations",
    ],
    footerNote:
      "For location-specific information, use the relevant service-area page rather than duplicating local SEO content here.",
    links: [
      { label: "ID Card Printing in Assam", url: "/service-areas/assam/" },
      { label: "ID Card Printing in Guwahati", url: "/service-areas/assam/guwahati/" },
    ],
    cta1Text: "ID Card Printing in Assam",
    cta1Link: "/service-areas/assam/",
    cta2Text: "ID Card Printing in Guwahati",
    cta2Link: "/service-areas/assam/guwahati/",
  },

  whyChoose: {
    badge: "Core Strengths",
    eyebrow: "Core Strengths",
    title: "Why Choose IDGen for Employee ID Cards?",
    pillars: [
      {
        title: "Employee-Focused Personalization",
        desc: "Cards can be customized around employee data and organizational requirements.",
        iconName: "Users",
      },
      {
        title: "Structured Data Workflow",
        desc: "Employee information and photographs can be organized for personalization.",
        iconName: "Database",
      },
      {
        title: "Preview Before Production",
        desc: "Where applicable, important employee information can be reviewed before production.",
        iconName: "Eye",
      },
      {
        title: "Complete Identification Options",
        desc: "Cards can be combined with required accessories.",
        iconName: "Layers",
      },
      {
        title: "Bulk Capability",
        desc: "Suitable for workforce-wide and institutional requirements.",
        iconName: "Factory",
      },
      {
        title: "Digital Workflow",
        desc: "IDGen Studio can support suitable employee data-collection projects.",
        iconName: "Sparkles",
      },
    ],
    ctaText: "Why IDGen Capabilities",
    ctaLink: "/why-idgen/",
    linkText: "Explore complete company capabilities on Why Choose IDGen →",
    linkHref: "/why-idgen/",
  },

  howToOrder: {
    badge: "Step-by-Step Guide",
    eyebrow: "Step-by-Step Guide",
    title: "How to Order Employee ID Cards",
    steps: [
      {
        num: "01",
        title: "Share Your Requirement",
        desc: "Tell us the approximate number of employee cards and required specifications.",
      },
      {
        num: "02",
        title: "Share Employee Data",
        desc: "Provide the employee information and photographs.",
      },
      {
        num: "03",
        title: "Confirm Design",
        desc: "Provide your existing design or discuss the required card layout.",
      },
      {
        num: "04",
        title: "Review",
        desc: "Review the required information and design where applicable.",
      },
      {
        num: "05",
        title: "Approve",
        desc: "Approve the final requirements.",
      },
      {
        num: "06",
        title: "Production",
        desc: "The approved order moves into production.",
      },
      {
        num: "07",
        title: "Quality Check & Dispatch",
        desc: "Completed cards are checked and prepared for dispatch.",
      },
    ],
    ctaText: "Request Employee ID Card Quote",
    ctaLink: "/request-a-quote/",
  },

  faq: {
    eyebrow: "FAQ",
    title: "Frequently Asked Questions",
    lede: "Clear answers to common questions about custom employee ID card printing, customization, and bulk ordering.",
    faqs: [
      {
        q: "What is an employee ID card?",
        a: "An employee ID card is a personalized identification card issued by an organization to identify its employees and display relevant employee and organizational information.",
      },
      {
        q: "What information can be printed on an employee ID card?",
        a: "Common information includes the employee's photograph, name, employee ID, designation, department, company name and logo. QR codes, barcodes and other information can also be included where required.",
      },
      {
        q: "Can employee ID cards be customized?",
        a: "Yes. The card design, information fields and organization branding can be customized according to the company's requirements.",
      },
      {
        q: "Can you print employee ID cards in bulk?",
        a: "Yes. IDGen supports bulk personalized ID card requirements for organizations.",
      },
      {
        q: "Can I order employee ID cards with lanyards?",
        a: "Yes. Employee cards can be combined with suitable holders, hooks and custom printed lanyards according to the required setup.",
      },
      {
        q: "Can employee ID cards include QR codes or barcodes?",
        a: "Yes. QR codes and barcodes can be included where required and where the supplied information supports their generation.",
      },
      {
        q: "Can employee ID cards use RFID?",
        a: "Yes. RFID cards are available for suitable identification requirements. The RFID technology should be selected according to the organization's compatible system.",
      },
      {
        q: "Can employees collect their information digitally?",
        a: "For suitable projects, IDGen Studio can support digital information and photograph collection and card preview.",
      },
      {
        q: "How much does an employee ID card cost?",
        a: "Pricing depends on the card specification, quantity and personalization requirements. Current pricing is maintained on the central IDGen pricing page.",
      },
    ],
  },

  quickAnswer: {
    title: "Employee ID Card Printing — Quick Answer",
    badge: "Employee ID Card Printing — Quick Answer",
    text: "IDGen provides customized employee ID card printing for companies, offices, industries, hospitals, institutions and organizations. Employee cards can include photographs, names, employee IDs, designations, departments, company branding and QR or barcode information. Bulk employee projects can be managed through structured data, design, preview, approval, production and quality-check workflows.",
  },

  closingCta: {
    title: "Ready to Print Employee ID Cards?",
    body: "Whether you are onboarding a few employees or preparing identification for an entire workforce, start with your employee data, quantity and required card format.",
    description:
      "Whether you are onboarding a few employees or preparing identification for an entire workforce, start with your employee data, quantity and required card format.",
    flowStepsText:
      "Employee Data → Design → Preview → Approval → Production → Quality Check → Dispatch",
    workflowPill:
      "Employee Data → Design → Preview → Approval → Production → Quality Check → Dispatch",
    primaryCtaText: "Request a Quote",
    primaryCtaLink: "/request-a-quote/",
    secondaryCtaText: "View Pricing",
    secondaryCtaLink: "/pricing/",
    tertiaryCtaText: "Explore IDGen Studio",
    tertiaryCtaLink: "/idgen-studio/",
    primaryBtnText: "Request a Quote",
    primaryBtnLink: "/request-a-quote/",
    secondaryBtnText: "View Pricing",
    secondaryBtnLink: "/pricing/",
    studioBtnText: "Explore IDGen Studio",
    studioBtnLink: "/idgen-studio/",
  },

  metadata: {
    title: "Employee ID Card Printing | Custom Company & Staff ID Cards | IDGen",
    description:
      "Custom employee ID card printing for companies, offices, industries, hospitals and organizations. Personalized staff cards, bulk printing, QR/barcode options and complete ID card setups by IDGen.",
    path: "/employee-id-card-printing/",
  },
};

const DATA_FILE_PATH = path.join(
  process.cwd(),
  "src",
  "data",
  "dynamic-employee-id-card-printing.json"
);

export function getDynamicEmployeeIdCardPrinting(): DynamicEmployeeIdCardPrintingData {
  try {
    if (!fs.existsSync(DATA_FILE_PATH)) {
      saveDynamicEmployeeIdCardPrinting(DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA);
      return DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA;
    }
    const raw = fs.readFileSync(DATA_FILE_PATH, "utf-8");
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA,
      ...parsed,
      hero: { ...DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.hero, ...(parsed.hero || {}) },
      heroSlides: parsed.heroSlides || DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.heroSlides,
      modernWorkplaces: {
        ...DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.modernWorkplaces,
        ...(parsed.modernWorkplaces || {}),
        badge: parsed.modernWorkplaces?.badge || parsed.modernWorkplaces?.eyebrow || DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.modernWorkplaces.badge,
        items: Array.isArray(parsed.modernWorkplaces?.items) && parsed.modernWorkplaces.items.length > 0
          ? parsed.modernWorkplaces.items
          : (Array.isArray(parsed.modernWorkplaces?.uses) && parsed.modernWorkplaces.uses.length > 0
            ? parsed.modernWorkplaces.uses
            : DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.modernWorkplaces.items),
        uses: Array.isArray(parsed.modernWorkplaces?.uses) && parsed.modernWorkplaces.uses.length > 0
          ? parsed.modernWorkplaces.uses
          : (Array.isArray(parsed.modernWorkplaces?.items) && parsed.modernWorkplaces.items.length > 0
            ? parsed.modernWorkplaces.items
            : DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.modernWorkplaces.uses),
      },
      solutionsSection: {
        ...DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.solutionsSection,
        ...(parsed.solutionsSection || {}),
      },
      solutions: Array.isArray(parsed.solutions)
        ? parsed.solutions
        : (parsed.solutions?.solutions || DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.solutions),
      cardAnatomy: {
        ...DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.cardAnatomy,
        ...(parsed.cardAnatomy || {}),
      },
      personalization: {
        ...DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.personalization,
        ...(parsed.personalization || {}),
      },
      onboarding: {
        ...DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.onboarding,
        ...(parsed.onboarding || {}),
        badge: parsed.onboarding?.badge || parsed.onboarding?.eyebrow || DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.onboarding.badge,
        paragraphs: Array.isArray(parsed.onboarding?.paragraphs) && parsed.onboarding.paragraphs.length > 0
          ? parsed.onboarding.paragraphs
          : [parsed.onboarding?.paragraph1, parsed.onboarding?.paragraph2].filter(Boolean) as string[] || DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.onboarding.paragraphs,
      },
      replacement: {
        ...DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.replacement,
        ...(parsed.replacement || {}),
        badge: parsed.replacement?.badge || parsed.replacement?.eyebrow || DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.replacement.badge,
      },
      departments: {
        ...DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.departments,
        ...(parsed.departments || {}),
        badge: parsed.departments?.badge || parsed.departments?.eyebrow || DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.departments.badge,
        departments: Array.isArray(parsed.departments?.departments) && parsed.departments.departments.length > 0
          ? parsed.departments.departments
          : (Array.isArray(parsed.departments?.items) && parsed.departments.items.length > 0
            ? parsed.departments.items
            : DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.departments.departments),
        items: Array.isArray(parsed.departments?.items) && parsed.departments.items.length > 0
          ? parsed.departments.items
          : (Array.isArray(parsed.departments?.departments) && parsed.departments.departments.length > 0
            ? parsed.departments.departments
            : DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.departments.items),
        paragraphs: Array.isArray(parsed.departments?.paragraphs) && parsed.departments.paragraphs.length > 0
          ? parsed.departments.paragraphs
          : [parsed.departments?.paragraph1, parsed.departments?.paragraph2].filter(Boolean) as string[] || DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.departments.paragraphs,
      },
      digitalId: {
        ...DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.digitalId,
        ...(parsed.digitalId || {}),
        badge: parsed.digitalId?.badge || parsed.digitalId?.eyebrow || DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.digitalId.badge,
        technologies: Array.isArray(parsed.digitalId?.technologies) && parsed.digitalId.technologies.length > 0
          ? parsed.digitalId.technologies
          : DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.digitalId.technologies,
      },
      completeSetup: {
        ...DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.completeSetup,
        ...(parsed.completeSetup || {}),
        badge: parsed.completeSetup?.badge || parsed.completeSetup?.eyebrow || DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.completeSetup.badge,
        comboPill: parsed.completeSetup?.comboPill || parsed.completeSetup?.setupPillText || DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.completeSetup.comboPill,
        links: Array.isArray(parsed.completeSetup?.links) && parsed.completeSetup.links.length > 0
          ? parsed.completeSetup.links
          : DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.completeSetup.links,
      },
      bulk: {
        ...DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.bulk,
        ...(parsed.bulk || {}),
        badge: parsed.bulk?.badge || parsed.bulk?.eyebrow || DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.bulk.badge,
        requirements: Array.isArray(parsed.bulk?.requirements) && parsed.bulk.requirements.length > 0
          ? parsed.bulk.requirements
          : (Array.isArray(parsed.bulk?.bulkRequirements) && parsed.bulk.bulkRequirements.length > 0
            ? parsed.bulk.bulkRequirements
            : DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.bulk.requirements),
        bulkRequirements: Array.isArray(parsed.bulk?.bulkRequirements) && parsed.bulk.bulkRequirements.length > 0
          ? parsed.bulk.bulkRequirements
          : (Array.isArray(parsed.bulk?.requirements) && parsed.bulk.requirements.length > 0
            ? parsed.bulk.requirements
            : DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.bulk.bulkRequirements),
        factorsPill: parsed.bulk?.factorsPill || parsed.bulk?.factorsText || DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.bulk.factorsPill,
      },
      dataRequirements: {
        ...DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.dataRequirements,
        ...(parsed.dataRequirements || {}),
        badge: parsed.dataRequirements?.badge || parsed.dataRequirements?.eyebrow || DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.dataRequirements.badge,
        pillars: Array.isArray(parsed.dataRequirements?.pillars) && parsed.dataRequirements.pillars.length > 0
          ? parsed.dataRequirements.pillars
          : (Array.isArray(parsed.dataRequirements?.dataPillars) && parsed.dataRequirements.dataPillars.length > 0
            ? parsed.dataRequirements.dataPillars
            : DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.dataRequirements.pillars),
        dataPillars: Array.isArray(parsed.dataRequirements?.dataPillars) && parsed.dataRequirements.dataPillars.length > 0
          ? parsed.dataRequirements.dataPillars
          : (Array.isArray(parsed.dataRequirements?.pillars) && parsed.dataRequirements.pillars.length > 0
            ? parsed.dataRequirements.pillars
            : DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.dataRequirements.dataPillars),
        paragraphs: Array.isArray(parsed.dataRequirements?.paragraphs) && parsed.dataRequirements.paragraphs.length > 0
          ? parsed.dataRequirements.paragraphs
          : [parsed.dataRequirements?.paragraph1, parsed.dataRequirements?.paragraph2].filter(Boolean) as string[] || DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.dataRequirements.paragraphs,
      },
      previewApproval: {
        ...DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.previewApproval,
        ...(parsed.previewApproval || {}),
        badge: parsed.previewApproval?.badge || parsed.previewApproval?.eyebrow || DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.previewApproval.badge,
        issues: Array.isArray(parsed.previewApproval?.issues) && parsed.previewApproval.issues.length > 0
          ? parsed.previewApproval.issues
          : (Array.isArray(parsed.previewApproval?.previewIssues) && parsed.previewApproval.previewIssues.length > 0
            ? parsed.previewApproval.previewIssues
            : DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.previewApproval.issues),
        previewIssues: Array.isArray(parsed.previewApproval?.previewIssues) && parsed.previewApproval.previewIssues.length > 0
          ? parsed.previewApproval.previewIssues
          : (Array.isArray(parsed.previewApproval?.issues) && parsed.previewApproval.issues.length > 0
            ? parsed.previewApproval.issues
            : DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.previewApproval.previewIssues),
      },
      pricing: {
        ...DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.pricing,
        ...(parsed.pricing || {}),
        badge: parsed.pricing?.badge || parsed.pricing?.eyebrow || DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.pricing.badge,
        paragraphs: Array.isArray(parsed.pricing?.paragraphs) && parsed.pricing.paragraphs.length > 0
          ? parsed.pricing.paragraphs
          : [parsed.pricing?.paragraph1, parsed.pricing?.paragraph2, parsed.pricing?.paragraph3].filter(Boolean) as string[] || DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.pricing.paragraphs,
      },
      whoCanOrder: {
        ...DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.whoCanOrder,
        ...(parsed.whoCanOrder || {}),
        badge: parsed.whoCanOrder?.badge || parsed.whoCanOrder?.eyebrow || DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.whoCanOrder.badge,
      },
      coverage: {
        ...DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.coverage,
        ...(parsed.coverage || {}),
        badge: parsed.coverage?.badge || parsed.coverage?.eyebrow || DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.coverage.badge,
        links: Array.isArray(parsed.coverage?.links) && parsed.coverage.links.length > 0
          ? parsed.coverage.links
          : DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.coverage.links,
      },
      whyChoose: {
        ...DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.whyChoose,
        ...(parsed.whyChoose || {}),
        badge: parsed.whyChoose?.badge || parsed.whyChoose?.eyebrow || DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.whyChoose.badge,
      },
      howToOrder: {
        ...DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.howToOrder,
        ...(parsed.howToOrder || {}),
        badge: parsed.howToOrder?.badge || parsed.howToOrder?.eyebrow || DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.howToOrder.badge,
      },
      faq: {
        ...DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.faq,
        ...(parsed.faq || {}),
      },
      quickAnswer: {
        ...DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.quickAnswer,
        ...(parsed.quickAnswer || {}),
      },
      closingCta: {
        ...DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.closingCta,
        ...(parsed.closingCta || {}),
        description: parsed.closingCta?.description || parsed.closingCta?.body || DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.closingCta.description,
        body: parsed.closingCta?.body || parsed.closingCta?.description || DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.closingCta.body,
        workflowPill: parsed.closingCta?.workflowPill || parsed.closingCta?.flowStepsText || DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.closingCta.workflowPill,
        flowStepsText: parsed.closingCta?.flowStepsText || parsed.closingCta?.workflowPill || DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.closingCta.flowStepsText,
        primaryCtaText: parsed.closingCta?.primaryCtaText || parsed.closingCta?.primaryBtnText || DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.closingCta.primaryCtaText,
        primaryCtaLink: parsed.closingCta?.primaryCtaLink || parsed.closingCta?.primaryBtnLink || DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.closingCta.primaryCtaLink,
        secondaryCtaText: parsed.closingCta?.secondaryCtaText || parsed.closingCta?.secondaryBtnText || DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.closingCta.secondaryCtaText,
        secondaryCtaLink: parsed.closingCta?.secondaryCtaLink || parsed.closingCta?.secondaryBtnLink || DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.closingCta.secondaryCtaLink,
        tertiaryCtaText: parsed.closingCta?.tertiaryCtaText || parsed.closingCta?.studioBtnText || DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.closingCta.tertiaryCtaText,
        tertiaryCtaLink: parsed.closingCta?.tertiaryCtaLink || parsed.closingCta?.studioBtnLink || DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.closingCta.tertiaryCtaLink,
      },
      metadata: {
        ...DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA.metadata,
        ...(parsed.metadata || {}),
      },
    };
  } catch (err) {
    console.error("Error reading dynamic employee ID card data:", err);
    return DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA;
  }
}

export function saveDynamicEmployeeIdCardPrinting(
  data: DynamicEmployeeIdCardPrintingData
): void {
  try {
    const dir = path.dirname(DATA_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(data, null, 2), "utf-8");
  } catch (err) {
    console.error("Error saving dynamic employee ID card data:", err);
  }
}

export function resetDynamicEmployeeIdCardPrinting(): DynamicEmployeeIdCardPrintingData {
  saveDynamicEmployeeIdCardPrinting(DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA);
  return DEFAULT_EMPLOYEE_ID_CARD_PRINTING_DATA;
}
