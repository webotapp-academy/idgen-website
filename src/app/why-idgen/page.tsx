import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Layers,
  Award,
  Eye,
  PackageCheck,
  CheckCircle2,
  MapPin,
  Workflow,
  ArrowRight,
  Building2,
  Database,
  Lock,
  Zap,
  Target,
  ClipboardCheck,
  Printer,
  Wrench,
  Truck,
  LayoutGrid,
  Sparkles,
  Globe2,
  Calendar,
  CheckCircle,
  HelpCircle,
  Sliders,
  Users,
  Quote,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FaqList } from "@/components/ui/FaqList";
import { PillarsCarousel } from "@/components/why-idgen/PillarsCarousel";
import { ProductionApproachCarousel } from "@/components/why-idgen/ProductionApproachCarousel";
import { pageMetadata } from "@/lib/metadata";
import type { Faq } from "@/data/types";

export const metadata = pageMetadata({
  title: "Why Choose IDGen | ID Card Printing Experience Since 2014",
  description:
    "Discover IDGen, a Guwahati-based identity solutions company built on ID card printing experience since 2014, serving organizations across Assam and Northeast India.",
  path: "/why-idgen/",
});

const approachSteps = [
  "Requirement",
  "Data",
  "Design",
  "Preview",
  "Approval",
  "Production",
  "Quality Check",
  "Dispatch",
];

const projectInvolves = [
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
];

const neStates = [
  "Assam",
  "Arunachal Pradesh",
  "Meghalaya",
  "Nagaland",
  "Manipur",
  "Mizoram",
  "Tripura",
  "Sikkim",
];

const journey = [
  {
    year: "2014",
    label: "Identification Experience Begins",
    body: "Our journey in ID card printing and identification-product supply begins.",
  },
  {
    year: "2014–2025",
    label: "Regional Experience",
    body: "Identification products are supplied to customers and organizations across Northeast India.",
  },
  {
    year: "2026",
    label: "IDGen Identity Solutions",
    body: "The experience is brought together under a dedicated identity-solutions brand.",
  },
  {
    year: "Today",
    label: "Products + Digital Workflow + Production",
    body: "IDGen combines identification products, digital workflows and structured production for modern organizational requirements.",
  },
];

const trustEvidence = [
  "Customer logos",
  "Customer testimonials",
  "Completed project photographs",
  "Real ID card batches",
  "Organization names, where permitted",
  "Case studies",
  "Years of experience",
  "Geographic coverage",
];

const whyChoose7 = [
  {
    icon: Target,
    title: "Identity-Focused",
    body: "IDGen is focused specifically on identification products and identification workflows.",
  },
  {
    icon: Award,
    title: "Experience Since 2014",
    body: "Our identification-product experience dates back to 2014, giving us more than a decade of practical experience in this field.",
  },
  {
    icon: MapPin,
    title: "Northeast India Experience",
    body: "We have experience supplying identification products to customers across the Northeast India market.",
  },
  {
    icon: Workflow,
    title: "Structured Workflow",
    body: "Projects can follow a defined process from requirement through dispatch.",
  },
  {
    icon: Layers,
    title: "Digital + Physical Workflow",
    body: "IDGen Studio connects digital data collection and approval with physical identification production.",
  },
  {
    icon: Zap,
    title: "Bulk Capability",
    body: "Our production operation supports institutional and high-volume requirements.",
  },
  {
    icon: PackageCheck,
    title: "Complete Identification Ecosystem",
    body: "Organizations can coordinate the relevant identification products and accessories required for their application.",
  },
];

const dataItems = [
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
];

const responsibleDataPractices = [
  "Share only information required for the project",
  "Use authorized personnel for data submission and approval",
  "Review information before production",
  "Avoid unnecessary personal information",
  "Maintain appropriate access controls within their organization",
  "Follow their applicable privacy and data-handling policies",
];

const productionSteps9 = [
  {
    num: "01",
    icon: ClipboardCheck,
    title: "Requirement",
    body: "We understand the required: Product, Quantity, Specifications, Personalization, Accessories, Delivery requirements.",
  },
  {
    num: "02",
    icon: Database,
    title: "Data",
    body: "For personalized projects, the required information and photographs are prepared. Where appropriate, IDGen Studio can support digital data collection and organization.",
  },
  {
    num: "03",
    icon: LayoutGrid,
    title: "Design",
    body: "Artwork and personalization are prepared according to the project requirements.",
  },
  {
    num: "04",
    icon: Eye,
    title: "Preview",
    body: "Where applicable, the customer or organization can review the design and personalized information before production.",
  },
  {
    num: "05",
    icon: CheckCircle2,
    title: "Approval",
    body: "Approved information and specifications are released for production.",
  },
  {
    num: "06",
    icon: Printer,
    title: "Production",
    body: "The project moves into production according to the confirmed specifications.",
  },
  {
    num: "07",
    icon: Wrench,
    title: "Assembly",
    body: "Where required, relevant components are assembled according to the selected configuration.",
  },
  {
    num: "08",
    icon: ShieldCheck,
    title: "Quality Check",
    body: "Completed products are checked against the approved requirements.",
  },
  {
    num: "09",
    icon: Truck,
    title: "Dispatch",
    body: "Completed and approved products are prepared for dispatch according to the applicable order timeline.",
  },
];

const qualityErrors = [
  "The name is incorrect",
  "The photograph is mismatched",
  "The ID number is wrong",
  "The department is incorrect",
  "The designation is incorrect",
  "Required information is missing",
  "The wrong specification is used",
  "The required accessory is missing",
];

const qualityCheckpoints = [
  {
    icon: LayoutGrid,
    title: "Design Check",
    body: "Artwork is checked against the approved requirements.",
  },
  {
    icon: Database,
    title: "Data Check",
    body: "Personalized information is processed according to the supplied or approved data.",
  },
  {
    icon: ClipboardCheck,
    title: "Specification Check",
    body: "Product specifications and required components are checked against the order.",
  },
  {
    icon: Printer,
    title: "Production Check",
    body: "Completed products are checked during the production workflow.",
  },
  {
    icon: Wrench,
    title: "Assembly Check",
    body: "Where applicable, the required combination of components is checked.",
  },
  {
    icon: PackageCheck,
    title: "Final Check",
    body: "Completed materials are checked before dispatch. Our objective is to identify avoidable errors before the finished products reach the customer.",
  },
];

const previewItems = [
  "Names",
  "Photographs",
  "ID numbers",
  "Classes",
  "Courses",
  "Departments",
  "Designations",
  "Other personalized information",
  "Card artwork",
];

const personCanFlow = [
  "Open",
  "Fill Information",
  "Upload Photo",
  "Preview ID Card",
  "Submit",
];

const dashboardCapabilities = [
  "View submitted forms",
  "Track how many people have completed the form",
  "Review information",
  "Edit information where required",
  "Approve individual records",
  "Approve batches",
  "Release all approved records together",
];

const studioFlow = [
  "Customized Form",
  "Link / QR Code",
  "Student / Parent / Employee Fills Form",
  "ID Card Preview",
  "Submission",
  "Organization Dashboard",
  "Review / Edit",
  "Approval",
  "Batch Printing or Print All",
  "Quality Check",
  "Distribution",
];

const batchWiseUseCases = [
  "New academic sessions",
  "Student admissions",
  "Employee onboarding",
  "Institutional registration",
  "Events",
  "Membership programmes",
];

const capacityFactors = [
  "Product type",
  "Quantity",
  "Personalization",
  "Artwork",
  "Data readiness",
  "Approval timing",
  "Assembly requirements",
  "Production conditions",
  "Quality-control requirements",
];

const bulkProjectDisciplines = [
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
];

const whatMakesDifferent = [
  {
    num: "01",
    title: "Identification Experience",
    body: "Experience dating back to 2014",
    icon: Award,
  },
  {
    num: "02",
    title: "Digital Workflow",
    body: "IDGen Studio",
    icon: Database,
  },
  {
    num: "03",
    title: "Physical Production",
    body: "Cards + Accessories + Customization + Assembly",
    icon: Printer,
  },
];

const focusActualRequirements = [
  {
    label: "A school may need:",
    flow: ["Student ID Card", "Lanyard", "Holder"],
    bg: "bg-blue-50/70",
    border: "border-blue-200",
  },
  {
    label: "An employee project may need:",
    flow: ["Employee ID Card", "Lanyard"],
    bg: "bg-emerald-50/70",
    border: "border-emerald-200",
  },
  {
    label: "An event may need:",
    flow: ["Event Card", "Hook", "Lanyard"],
    bg: "bg-purple-50/70",
    border: "border-purple-200",
  },
  {
    label: "An RFID project may need:",
    flow: ["RFID Card", "Required Identification Accessories"],
    bg: "bg-amber-50/70",
    border: "border-amber-200",
  },
];

const commitments = [
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
];

const whoWeServe = [
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
];

const futureExpectations = [
  "Digital data collection",
  "Online workflows",
  "Faster approvals",
  "Better data organization",
  "ID card preview",
  "Batch-wise production",
  "Faster distribution",
  "Integrated identification products",
];

const faqs: Faq[] = [
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
];

export default function WhyIdgenPage() {
  return (
    <div className="bg-[#f8fafc] dark:bg-[#070d18] text-slate-900 dark:text-slate-100 min-h-screen selection:bg-[#009fe3]/20 selection:text-[#009fe3] transition-colors">
      {/* ─────────────────────────────────────────────────────────────
          1. ULTRA-PREMIUM HERO SECTION (Zero Blank Gaps & Height-Matched)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white dark:bg-[#070d18] border-b border-slate-200/90 dark:border-slate-800/80 pt-8 pb-14 lg:pt-12 lg:pb-16 transition-colors">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgba(0,159,227,0.12),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgba(0,159,227,0.2),rgba(7,13,24,0))]" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #009fe3 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <Container className="relative z-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#009fe3]/30 bg-gradient-to-r from-[#009fe3]/10 via-sky-50 to-white dark:from-cyan-950/60 dark:via-slate-900 dark:to-slate-800 px-4 py-1.5 shadow-2xs">
                  <span className="flex h-2 w-2 rounded-full bg-[#009fe3] animate-pulse" />
                  <span className="text-xs font-black text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                    Identity Solutions Simplified
                  </span>
                  <span className="h-3 w-px bg-[#009fe3]/30" />
                  <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">Guwahati, Assam</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black text-slate-950 dark:text-white tracking-tight leading-[1.08]">
                  Why Choose{" "}
                  <span className="bg-gradient-to-r from-[#009fe3] via-[#0284c7] to-[#0369a1] dark:from-[#38bdf8] dark:via-[#009fe3] dark:to-[#38bdf8] bg-clip-text text-transparent">
                    IDGen?
                  </span>
                </h1>

                <div className="flex items-center gap-2.5 pt-0.5">
                  <span className="h-1 w-8 rounded-full bg-[#009fe3]" />
                  <p className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-200 tracking-tight">
                    Built on Identification Experience Dating Back to 2014
                  </p>
                </div>
              </div>

              <div className="space-y-3.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                <p>
                  IDGen is a Guwahati-based identity solutions company serving organizations across Assam and the wider Northeast India market.
                </p>
                <p>
                  Our experience in ID card printing, identification products and organizational supply dates back to 2014. Over the years, we have worked with customers and organizations across Northeast India, gaining practical experience in personalized ID cards, bulk requirements, identification accessories and organizational supply.
                </p>
                <p>
                  IDGen is the next stage of that experience — a dedicated identity-solutions brand focused on bringing products, digital workflows and production together into a more organized identification system.
                </p>
              </div>

              {/* Our Approach Flow */}
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/85 dark:bg-slate-900/90 p-4 sm:p-5 space-y-3 shadow-2xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
                    <Workflow className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                    <span>Our approach is:</span>
                  </div>
                  <span className="text-[11px] font-bold text-[#009fe3] dark:text-cyan-400 bg-sky-50 dark:bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-sky-200/60 dark:border-cyan-800/50">
                    8-Step Precision Flow
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  {approachSteps.map((step, idx) => (
                    <span key={step} className="flex items-center gap-1.5 sm:gap-2">
                      <span className="rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 sm:px-3 py-1 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-2xs">
                        {step}
                      </span>
                      {idx < approachSteps.length - 1 && (
                        <ArrowRight className="h-3 w-3 text-slate-400 dark:text-slate-500 shrink-0" />
                      )}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 italic pt-0.5">
                  Our goal is simple: make identification projects easier to plan, manage and complete.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <Link
                  href="/request-a-quote/"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#009fe3] to-[#0084be] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/25 transition-all hover:shadow-[#009fe3]/40 hover:-translate-y-0.5"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/services/"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-7 py-3.5 text-sm font-bold text-slate-800 dark:text-slate-200 shadow-2xs transition-all hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 hover:bg-sky-50/40 dark:hover:bg-slate-700 hover:-translate-y-0.5"
                >
                  <span>Explore Our Services</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Visual Showcase (Height Matched with Zero Blank Gaps) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              {/* Primary Showcase Card */}
              <div className="relative rounded-[2rem] overflow-hidden border-2 border-white dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl flex-1 min-h-[380px] sm:min-h-[420px] flex flex-col">
                <div className="relative flex-1 w-full overflow-hidden bg-slate-900">
                  <Image
                    src="/images/why-idgen-hero-showcase.jpg"
                    alt="IDGen Identity Solutions - Premium ID cards, custom lanyards, holders, and accessories"
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/20" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-bold text-white border border-white/15 shadow-md">
                      <Sparkles className="h-3 w-3 text-cyan-300 animate-pulse" />
                      <span>IDGen Identity Solutions</span>
                    </div>
                    <div className="rounded-full bg-[#009fe3] px-3 py-1 text-[11px] font-black text-white shadow-md">
                      Guwahati Hub
                    </div>
                  </div>

                  {/* Bottom Image Overlay Label */}
                  <div className="absolute bottom-4 left-5 right-5 text-white z-10">
                    <p className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider mb-0.5">
                      Guwahati, Assam • Serving Northeast India
                    </p>
                    <p className="text-sm font-extrabold text-white leading-snug">
                      Experience + Technology + Products + Production
                    </p>
                  </div>
                </div>

                {/* Sub-Card Trust Indicators (Bottom of card) */}
                <div className="p-3 bg-white dark:bg-slate-900 grid grid-cols-2 gap-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 p-2 border border-slate-100 dark:border-slate-700/80">
                    <div className="h-7 w-7 rounded-lg bg-[#009fe3]/10 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400 flex items-center justify-center shrink-0">
                      <Award className="h-4 w-4" />
                    </div>
                    <div className="truncate">
                      <p className="text-[11px] font-bold text-slate-900 dark:text-slate-100 leading-tight">Since 2014</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">Regional Experience</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 p-2 border border-slate-100 dark:border-slate-700/80">
                    <div className="h-7 w-7 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <Globe2 className="h-4 w-4" />
                    </div>
                    <div className="truncate">
                      <p className="text-[11px] font-bold text-slate-900 dark:text-slate-100 leading-tight">Northeast India</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">Assam &amp; 7 States</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Symmetrical Bottom Summary Micro-Bar */}
              <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-3.5 shadow-2xs flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#009fe3]/10 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400">
                    <Layers className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-slate-100">Digital + Physical Workflow</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">IDGen Studio &amp; Structured Production</p>
                  </div>
                </div>
                <Link
                  href="/services/"
                  className="shrink-0 text-xs font-bold text-[#009fe3] dark:text-cyan-400 hover:underline flex items-center gap-1"
                >
                  Explore <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Trust Indicators Strip */}
          <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#009fe3]/10 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400 border border-[#009fe3]/20 dark:border-cyan-800/50">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-black text-slate-950 dark:text-white">Dating to 2014</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">A decade of experience</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#009fe3]/10 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400 border border-[#009fe3]/20 dark:border-cyan-800/50">
                <Globe2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-black text-slate-950 dark:text-white">8 Northeast States</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Regional supply footprint</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#009fe3]/10 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400 border border-[#009fe3]/20 dark:border-cyan-800/50">
                <Layers className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-black text-slate-950 dark:text-white">Digital + Physical</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">IDGen Studio workflow</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#009fe3]/10 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400 border border-[#009fe3]/20 dark:border-cyan-800/50">
                <Lock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-black text-slate-950 dark:text-white">Data Confidentiality</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Responsible data handling</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-10">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Why IDGen", path: "/why-idgen/" },
          ]}
        />

        {/* ─────────────────────────────────────────────────────────────
            2. EXPERIENCE SINCE 2014 / MORE THAN A NEW BRAND (Zero Blank Gap)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-14 pt-4">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-3.5 py-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                  <Award className="h-3.5 w-3.5" />
                  <span>Experience Since 2014</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight">
                  More Than a New Brand
                </h2>
              </div>

              <div className="space-y-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  While IDGen is the new identity-focused brand, our experience in ID card printing and identification-product supply dates back to 2014.
                </p>
                <p>
                  For more than a decade, our work has involved identification requirements for organizations and customers across Northeast India.
                </p>
                <p>
                  This experience has taught us that an identification project is rarely just about printing a card.
                </p>
                <p className="font-bold text-slate-900 dark:text-slate-100 text-sm pt-1">
                  It can involve:
                </p>
              </div>

              {/* 14 items */}
              <div className="grid grid-cols-2 gap-2.5 pt-0.5">
                {projectInvolves.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 px-3.5 py-2.5 text-xs font-medium text-slate-700 dark:text-slate-300 shadow-2xs hover:border-[#009fe3]/40 transition-colors"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-sky-50/60 dark:bg-slate-800/80 p-4">
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-semibold leading-relaxed">
                  IDGen brings this practical experience into a more structured identity-solutions workflow.
                </p>
              </div>
            </div>

            {/* Right Photo & Workflow Highlights (Height Matched with Zero Blank Gaps) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              {/* Primary Showcase Card with Vertical Photo */}
              <div className="relative rounded-[2rem] overflow-hidden border-2 border-white dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl flex-1 min-h-[440px] sm:min-h-[480px] flex flex-col">
                <div className="relative flex-1 w-full overflow-hidden bg-slate-900">
                  <Image
                    src="/images/why-idgen-more-than-brand.jpg"
                    alt="IDGen fanned stack of smart ID cards and woven lanyards"
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/20" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-bold text-white border border-white/15 shadow-sm">
                      <Sparkles className="h-3 w-3 text-cyan-300" />
                      <span>IDGen Specialized Workflow</span>
                    </div>
                    <span className="rounded-full bg-[#009fe3] px-3 py-1 text-[11px] font-black text-white shadow-sm">
                      10+ Years
                    </span>
                  </div>

                  {/* Bottom Image Overlay Label */}
                  <div className="absolute bottom-4 left-5 right-5 text-white z-10">
                    <p className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider mb-0.5">
                      Since 2014
                    </p>
                    <p className="text-sm font-extrabold text-white leading-snug">
                      Structured Identity Solutions Workflow
                    </p>
                  </div>
                </div>

                {/* Sub-Card Indicators */}
                <div className="p-3 bg-white dark:bg-slate-900 grid grid-cols-2 gap-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 p-2 border border-slate-100 dark:border-slate-700/80">
                    <div className="h-7 w-7 rounded-lg bg-[#009fe3]/10 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400 flex items-center justify-center shrink-0">
                      <Award className="h-4 w-4" />
                    </div>
                    <div className="truncate">
                      <p className="text-[11px] font-bold text-slate-900 dark:text-slate-100 leading-tight">Dating to 2014</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">Field Experience</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 p-2 border border-slate-100 dark:border-slate-700/80">
                    <div className="h-7 w-7 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div className="truncate">
                      <p className="text-[11px] font-bold text-slate-900 dark:text-slate-100 leading-tight">Bulk &amp; Custom</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">Complete Supply</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Symmetrical Bottom Summary Micro-Bar */}
              <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-3.5 shadow-2xs flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#009fe3]/10 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400">
                    <Workflow className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-slate-100">Personalization + Accessories + Production</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">End-to-End Identification Operations</p>
                  </div>
                </div>
                <Link
                  href="/services/"
                  className="shrink-0 text-xs font-bold text-[#009fe3] dark:text-cyan-400 hover:underline flex items-center gap-1"
                >
                  Explore <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            3. SERVING NORTHEAST INDIA & OUR JOURNEY (Ultra-Premium Symmetrical Layout)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
            {/* Left Card: Serving Northeast India */}
            <div className="lg:col-span-6 rounded-[2.25rem] border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-white via-sky-50/30 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-3.5 py-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                  <Globe2 className="h-3.5 w-3.5" />
                  <span>Regional Focus • Northeast India</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight">
                  Serving Northeast India
                </h2>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Our identification-product experience has been developed through serving customers across the Northeast India market.
                </p>

                {/* 8-State Interactive Matrix */}
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/70 p-4 space-y-2.5 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                      Our regional focus includes:
                    </p>
                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-2 py-0.5 rounded-full border border-slate-200 dark:border-slate-700">
                      8 States
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                    {neStates.map((state, idx) => (
                      <div
                        key={state}
                        className="group flex flex-col justify-between rounded-xl border border-slate-200/90 dark:border-slate-700 bg-white dark:bg-slate-900 p-2.5 shadow-2xs hover:border-[#009fe3]/50 hover:shadow-xs transition-all"
                      >
                        <span className="text-[10px] font-black text-[#009fe3]/70 dark:text-cyan-400/80 group-hover:text-[#009fe3] dark:group-hover:text-cyan-300 font-mono">
                          0{idx + 1}
                        </span>
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-[#009fe3] dark:group-hover:text-cyan-300 transition-colors truncate">
                          {state}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Guwahati Central Base Highlight */}
              <div className="rounded-2xl border border-[#009fe3]/30 dark:border-cyan-800/50 bg-sky-50/80 dark:bg-slate-800/80 p-4 shadow-2xs flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#009fe3] text-white shadow-md shadow-[#009fe3]/30">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                      Guwahati Central Base
                    </span>
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    IDGen is based in Guwahati, Assam, providing a central base for serving organizations across the region.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Card: Our Journey (Connected Timeline) */}
            <div className="lg:col-span-6 rounded-[2.25rem] border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-white via-slate-50/50 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3.5 py-1 text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider mb-3">
                  <Calendar className="h-3.5 w-3.5 text-[#009fe3] dark:text-cyan-400" />
                  <span>Milestones &amp; Evolution</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight">
                  Our Journey
                </h3>
              </div>

              {/* Continuous Connected Timeline */}
              <div className="relative pl-6 sm:pl-8 space-y-3.5 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-[#009fe3] before:via-sky-300 before:to-[#009fe3]">
                {journey.map((item) => (
                  <div key={item.year} className="relative group">
                    {/* Node marker */}
                    <div className="absolute -left-6 sm:-left-8 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-slate-900 border-2 border-[#009fe3] shadow-md group-hover:scale-110 transition-transform">
                      <span className="h-2 w-2 rounded-full bg-[#009fe3]" />
                    </div>

                    {/* Milestone Content Card */}
                    <div className="rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/90 p-3.5 shadow-2xs group-hover:border-[#009fe3]/40 group-hover:shadow-xs transition-all">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-mono text-xs font-black text-[#009fe3] dark:text-cyan-400 bg-sky-50 dark:bg-cyan-950/60 px-2.5 py-0.5 rounded-md border border-sky-200/60 dark:border-cyan-800/50">
                          {item.year}
                        </span>
                        <span className="text-[11px] font-bold text-slate-900 dark:text-slate-100">{item.label}</span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Journey Quote Highlight */}
              <div className="rounded-2xl border border-[#009fe3]/25 dark:border-cyan-800/50 bg-sky-50/80 dark:bg-slate-800/80 p-3.5 flex items-center justify-between shadow-2xs">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                  <p className="text-xs font-bold text-[#009fe3] dark:text-cyan-400">
                    IDGen represents the next stage of that journey.
                  </p>
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-700">
                  Since 2014
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            4. ORGANIZATIONS ACROSS NORTHEAST INDIA (Ultra-Premium Redesign)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="rounded-[2.25rem] border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-white via-sky-50/20 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 p-7 sm:p-12 shadow-xl space-y-8 relative overflow-hidden">
            {/* Section Header */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-3.5 py-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider mb-3">
                <Building2 className="h-3.5 w-3.5" />
                <span>Regional Experience • Footprint</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
                Organizations Across Northeast India
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                Over the years, our identification business has supplied products to customers and organizations across Northeast India.
              </p>
            </div>

            {/* 5 Process Pillars */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/70 p-5 space-y-3 shadow-2xs">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                  Our experience includes projects involving:
                </p>
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-2.5 py-0.5 rounded-full border border-slate-200 dark:border-slate-700">
                  5 Operations Pillars
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-1">
                {[
                  { num: "01", name: "Personalization", icon: Users },
                  { num: "02", name: "Bulk Quantities", icon: Zap },
                  { num: "03", name: "Identification Accessories", icon: PackageCheck },
                  { num: "04", name: "Production", icon: Printer },
                  { num: "05", name: "Delivery", icon: Truck },
                ].map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.name}
                      className="group flex flex-col justify-between rounded-xl border border-slate-200/90 dark:border-slate-700 bg-white dark:bg-slate-900 p-3.5 shadow-2xs hover:border-[#009fe3]/50 hover:shadow-xs transition-all"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-black text-[#009fe3] dark:text-cyan-400 font-mono bg-sky-50 dark:bg-cyan-950/60 px-2 py-0.5 rounded-md border border-sky-200/50 dark:border-cyan-800/50">
                          {pillar.num}
                        </span>
                        <Icon className="h-4 w-4 text-slate-400 dark:text-slate-500 group-hover:text-[#009fe3] dark:group-hover:text-cyan-300 transition-colors" />
                      </div>
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-[#009fe3] dark:group-hover:text-cyan-300 transition-colors leading-snug">
                        {pillar.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Trust Philosophy Quote Card */}
            <div className="rounded-2xl border border-[#009fe3]/25 dark:border-cyan-800/50 bg-sky-50/90 dark:bg-slate-800/80 p-6 shadow-2xs space-y-3 relative overflow-hidden">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-[#009fe3] dark:text-cyan-400" />
                <span className="text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                  Our Trust Philosophy
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                Where customer permission is available, we recommend displaying real customer logos, testimonials and project photographs on this page.
              </p>
              <div className="rounded-xl bg-white dark:bg-slate-900 border border-sky-200/80 dark:border-slate-800 p-3.5 text-xs sm:text-sm font-black text-slate-950 dark:text-white shadow-2xs">
                &ldquo;Real evidence is more powerful than generic claims such as &apos;best&apos; or &apos;number one.&apos;&rdquo;
              </div>
            </div>

            {/* Recommended Trust Evidence Grid */}
            <div className="border-t border-slate-100 dark:border-slate-800 pt-6 space-y-4">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                  Recommended Trust Evidence
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Essential criteria recommended to establish verifiable institutional credibility.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {trustEvidence.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 px-3.5 py-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3]/40 transition-colors"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            5. WHY CHOOSE IDGEN? (Core Pillars Carousel)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          {/* Header Layout: 2-Line Headline + Right-Side Feature Box (Eliminates Blank Gap) */}
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end pb-8 border-b border-slate-100 dark:border-slate-800">
            {/* Left Content (2-Line Headline) */}
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-3.5 py-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                <Target className="h-3.5 w-3.5" />
                <span>Why Choose IDGen?</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.15rem] font-black text-slate-950 dark:text-white tracking-tight leading-[1.2] max-w-3xl">
                Choosing an Identification Supplier Is Not Only About Finding Someone Who Can Print a Card
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl pt-1">
                For an organization, the real requirement may be: Data &rarr; Design &rarr; Personalization &rarr; Approval &rarr; Production &rarr; Accessories &rarr; Quality &rarr; Delivery. IDGen is built around this broader requirement.
              </p>
            </div>

            {/* Right-Side Feature Card (Fills Right-Side Blank Space) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-sky-200/80 dark:border-slate-800 bg-gradient-to-br from-sky-50/80 via-white to-sky-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 p-5 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                      End-to-End Scope
                    </span>
                  </div>
                  <span className="text-[10px] font-black text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 px-2.5 py-0.5 rounded-full border border-sky-200 dark:border-slate-700 shadow-2xs">
                    Full Operations
                  </span>
                </div>
                <div className="rounded-xl bg-white dark:bg-slate-900 border border-sky-200/60 dark:border-slate-800 p-3 text-[11px] font-bold text-slate-800 dark:text-slate-200 leading-snug">
                  Data &rarr; Design &rarr; Personalization &rarr; Approval &rarr; Production &rarr; Delivery
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  We manage the complete operational scope from initial dataset setup to final localized dispatch.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <PillarsCarousel />
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            6. DATA CONFIDENTIALITY & RESPONSIBLE HANDLING (Ultra-Premium Redesign)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8">
          <div className="rounded-[2.25rem] border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden">
            {/* Header / Photo Banner */}
            <div className="relative h-64 sm:h-80 w-full bg-slate-900">
              <Image
                src="/images/why-idgen-data-security-light.jpg"
                alt="IDGen confidential handling of student and employee identification data"
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

              <div className="absolute top-4 left-6 right-6 flex items-center justify-between z-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-cyan-300 border border-white/15 shadow-md">
                  <Lock className="h-3.5 w-3.5 text-cyan-300 animate-pulse" />
                  <span>Data Security &amp; Confidentiality Protocol</span>
                </div>
                <span className="rounded-full bg-emerald-600 px-3 py-1 text-[11px] font-black text-white shadow-md">
                  Guaranteed Privacy
                </span>
              </div>

              <div className="absolute bottom-6 left-6 sm:left-10 right-6 text-white z-10">
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-1 block">
                  Data Confidentiality &amp; Responsible Handling
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                  Your Identification Data Deserves Care
                </h2>
              </div>
            </div>

            {/* Body Content */}
            <div className="p-6 sm:p-10 space-y-8">
              <div className="space-y-3.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
                <p>
                  ID card projects require organizations to share personal information such as student names, employee names, photographs, identification numbers, departments, designations and other information required for personalization.
                </p>
                <p>
                  We understand that this information belongs to the organization and the individuals being identified.
                </p>
                <p>
                  At IDGen, we treat customer-provided identification data as confidential project information and handle it for the agreed identification-related purpose.
                </p>
                <div className="rounded-2xl border border-[#009fe3]/25 dark:border-cyan-800/50 bg-sky-50/80 dark:bg-slate-800/80 p-4 text-slate-900 dark:text-slate-100 font-bold text-sm shadow-2xs">
                  When you share student or employee information with IDGen, we understand the responsibility that comes with handling that information.
                </div>
              </div>

              {/* What Information May Be Provided? (12 Items Grid) */}
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/70 p-6 space-y-4 shadow-2xs">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-extrabold text-slate-950 dark:text-white">
                      What Information May Be Provided?
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Depending on the project, organizations may provide:
                    </p>
                  </div>
                  <span className="text-[10px] font-bold text-[#009fe3] dark:text-cyan-400 bg-white dark:bg-slate-900 px-2.5 py-0.5 rounded-full border border-sky-200 dark:border-slate-700">
                    12 Data Types
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 pt-1">
                  {dataItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 rounded-xl border border-slate-200/90 dark:border-slate-700 bg-white dark:bg-slate-900 p-3 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3]/40 transition-colors"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 italic pt-1 border-t border-slate-200/60 dark:border-slate-800">
                  Only information required for the identification project should be provided.
                </p>
              </div>

              {/* Our Approach to Customer Data */}
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-xs">
                <div className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-[#009fe3] dark:text-cyan-400" />
                  <h3 className="text-base font-extrabold text-slate-950 dark:text-white">
                    Our Approach to Customer Data
                  </h3>
                </div>

                <div className="rounded-xl bg-slate-50 dark:bg-slate-800/80 p-4 border border-slate-200 dark:border-slate-700/80 space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                    Identification Workflow:
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs font-bold text-slate-800 dark:text-slate-200">
                    {["Customer Data", "Processing", "Personalization", "Production", "Quality Check", "Order Completion"].map((step, idx, arr) => (
                      <span key={step} className="flex items-center gap-1.5">
                        <span className="rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-2.5 py-1 text-slate-900 dark:text-slate-100 shadow-2xs">
                          {step}
                        </span>
                        {idx < arr.length - 1 && <ArrowRight className="h-3 w-3 text-slate-400 dark:text-slate-500 shrink-0" />}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  The information supplied for an identification project is used to fulfil the agreed identification requirement. We do not need student or employee identification information for unrelated marketing purposes.
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  For customer logos, organization names, testimonials, project photographs or case studies, appropriate customer permission should be obtained before publicly displaying identifiable information.
                </p>
              </div>

              {/* Data Confidentiality in IDGen Studio */}
              <div className="rounded-2xl border border-[#009fe3]/30 dark:border-cyan-800/50 bg-sky-50/90 dark:bg-slate-800/80 p-6 space-y-4 shadow-2xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Layers className="h-5 w-5 text-[#009fe3] dark:text-cyan-400" />
                    <h3 className="text-base font-extrabold text-slate-950 dark:text-white">
                      Data Confidentiality in IDGen Studio
                    </h3>
                  </div>
                  <span className="rounded-full bg-[#009fe3] px-3 py-0.5 text-[11px] font-black text-white">
                    Digital Portal
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Data confidentiality becomes especially important when organizations use IDGen Studio for digital data collection. An organization can create a customized data-collection form according to its requirements and generate a link and QR code for sharing with students, parents, employees or other authorized persons.
                </p>

                <div className="rounded-xl bg-white dark:bg-slate-900 p-4 border border-sky-200 dark:border-slate-800 space-y-2 shadow-2xs">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                    IDGen Studio Digital Flow:
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs font-bold text-slate-800 dark:text-slate-200">
                    {[
                      "Customized Form",
                      "Link / QR Code",
                      "Data + Photo",
                      "ID Card Preview",
                      "Submission",
                      "Dashboard",
                      "Review",
                      "Approval",
                      "Production",
                    ].map((step, idx, arr) => (
                      <span key={step} className="flex items-center gap-1.5">
                        <span className="rounded-lg bg-sky-50 dark:bg-cyan-950/60 text-[#009fe3] dark:text-cyan-400 border border-sky-200 dark:border-cyan-800/50 px-2 py-0.5 text-[11px] font-bold">
                          {step}
                        </span>
                        {idx < arr.length - 1 && <ArrowRight className="h-3 w-3 text-slate-300 dark:text-slate-600 shrink-0" />}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  The organization&apos;s submitted information forms part of its identification project. Where applicable, authorized organization users can review and manage submissions before releasing them for production.
                </p>
                <div>
                  <Link
                    href="/idgen-studio/"
                    className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-5 py-2 text-xs font-bold text-white shadow-md transition-transform hover:scale-105"
                  >
                    <span>Explore IDGen Studio</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Responsible Data Practices (6 Practices) */}
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/70 p-6 space-y-4 shadow-2xs">
                <div>
                  <h3 className="text-base font-extrabold text-slate-950 dark:text-white">
                    Responsible Data Practices
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    For projects involving large quantities of personal information, we encourage organizations to follow structured guidelines:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {responsibleDataPractices.map((item, idx) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-slate-200/90 dark:border-slate-700 bg-white dark:bg-slate-900 p-3.5 shadow-2xs hover:border-emerald-500/40 transition-colors"
                    >
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 font-mono text-xs font-bold">
                        {idx + 1}
                      </div>
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 pt-2 font-medium border-t border-slate-200/60 dark:border-slate-800">
                  IDGen&apos;s role is to support the identification-production workflow while treating information provided for that workflow with confidentiality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            7. ONE IDENTITY PARTNER (Ultra-Premium Redesign)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8">
          <div className="rounded-[2.25rem] border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-white via-sky-50/20 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 p-7 sm:p-10 shadow-xl">
            <div className="grid lg:grid-cols-12 gap-8 lg:items-stretch">
              <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  <span className="inline-block rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-3.5 py-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                    One Identity Partner
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight leading-tight">
                    An Identification Project Can Require Several Connected Products
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    Instead of treating every component as a completely separate requirement, IDGen can coordinate the relevant products according to the application.
                  </p>

                  <div className="space-y-2 pt-1">
                    <p className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
                      For example:
                    </p>
                    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 p-3.5 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs">
                      ID Card → Holder → Hook → Lanyard
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">or, where applicable:</p>
                    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 p-3.5 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs">
                      ID Card → Sealing → Holder → Hook → Lanyard
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    The exact configuration depends on the application. For detailed specifications, visit the relevant service page:
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: "ID Card Printing", href: "/id-card-printing/" },
                      { label: "Custom Printed Lanyards", href: "/custom-printed-lanyard-printing/" },
                      { label: "Event Card Printing", href: "/event-card-printing/" },
                      { label: "RFID Card Printing", href: "/rfid-card-printing/" },
                      { label: "ID Card Holders", href: "/id-card-holders/" },
                      { label: "ID Card Hooks", href: "/id-card-hooks/" },
                      { label: "Ultrasonic Sealing", href: "/ultrasonic-sealing/" },
                    ].map(({ label, href }) => (
                      <Link
                        key={label}
                        href={href}
                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3.5 py-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:border-[#009fe3] dark:hover:border-cyan-400 hover:text-[#009fe3] dark:hover:text-cyan-400 hover:shadow-xs transition-all"
                      >
                        <span>{label}</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side Showcase Image Frame */}
              <div className="lg:col-span-5 relative flex flex-col justify-between">
                <div className="relative rounded-[2rem] overflow-hidden border-2 border-white dark:border-slate-800 bg-slate-900 shadow-xl flex-1 min-h-[320px] sm:min-h-[360px] flex flex-col">
                  <Image
                    src="/images/why-idgen-complete-ecosystem-branded.jpg"
                    alt="IDGen ID cards lanyards and identification products ecosystem"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold text-cyan-300 border border-white/15">
                      <Sparkles className="h-3 w-3" />
                      <span>IDGen Complete Ecosystem</span>
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-5 right-5 text-white z-10">
                    <p className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                      Integrated Supply
                    </p>
                    <p className="text-sm font-extrabold text-white">
                      Cards + Sealing + Holders + Lanyards
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            8. OUR PRODUCTION APPROACH (9-Step Interactive Carousel)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8">
          <SectionHead
            eyebrow="Our Production Approach"
            title="From Requirement to Finished Identification Product"
            lede="We use a structured approach to keep personalized and bulk projects organized."
          />

          <div className="mt-8">
            <ProductionApproachCarousel />
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            9. QUALITY ASSURANCE (Ultra-Premium Redesign)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8">
          <div className="rounded-[2.25rem] border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden">
            {/* Header Banner */}
            <div className="relative h-60 sm:h-72 w-full bg-slate-900">
              <Image
                src="/images/hero-slide-modular-assembly.jpg"
                alt="IDGen quality inspection of personalized identification products"
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              <div className="absolute top-4 left-6 right-6 flex items-center justify-between z-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-cyan-300 border border-white/15">
                  <ClipboardCheck className="h-3.5 w-3.5" />
                  <span>Quality Assurance Standards</span>
                </span>
                <span className="rounded-full bg-[#009fe3] px-3 py-1 text-[11px] font-black text-white">
                  Zero Error Goal
                </span>
              </div>
              <div className="absolute bottom-6 left-6 sm:left-10 right-6 text-white z-10">
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-1 block">
                  Quality Assurance
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                  Quality Is More Than How a Card Looks
                </h2>
              </div>
            </div>

            <div className="p-6 sm:p-10 space-y-8">
              <div>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                  For personalized identification products, physical print quality is only one part of the result. A card can look visually good and still be unusable if:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-4">
                  {qualityErrors.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 rounded-xl border border-red-200/80 dark:border-red-900/50 bg-red-50/60 dark:bg-red-950/30 px-3.5 py-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200"
                    >
                      <div className="h-2 w-2 rounded-full bg-red-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 pt-3 font-medium">
                  That is why our workflow gives importance to data, design, specification and approval checks.
                </p>
              </div>

              {/* 6 Quality Checkpoints */}
              <div className="border-t border-slate-100 dark:border-slate-800 pt-8 space-y-4">
                <h3 className="text-xl font-black text-slate-950 dark:text-white">
                  Our Quality Checkpoints
                </h3>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {qualityCheckpoints.map((qc) => {
                    const Icon = qc.icon;
                    return (
                      <div
                        key={qc.title}
                        className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/70 p-5 shadow-2xs hover:border-[#009fe3]/40 transition-colors"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#009fe3]/10 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400 mb-3 border border-[#009fe3]/20 dark:border-cyan-800/50">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h4 className="font-extrabold text-slate-900 dark:text-slate-100 text-sm">{qc.title}</h4>
                        <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{qc.body}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Preview Before Production */}
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-2xs space-y-4">
                <h3 className="text-base font-extrabold text-slate-950 dark:text-white">
                  Preview Before Production
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  For large personalized orders, correcting a mistake after production can result in unnecessary rework. Where applicable, our workflow provides an opportunity to review:
                </p>

                <div className="flex flex-wrap gap-2">
                  {previewItems.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-sky-50 dark:bg-cyan-950/60 text-[#009fe3] dark:text-cyan-400 border border-sky-200 dark:border-cyan-800/50 px-3.5 py-1 text-xs font-bold shadow-2xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  This is particularly valuable for large batches where one data error can affect an individual card.
                </p>

                <div>
                  <Link
                    href="/idgen-studio/"
                    className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-5 py-2 text-xs font-bold text-white shadow-md transition-transform hover:scale-105"
                  >
                    <span>Explore IDGen Studio</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            10. IDGEN STUDIO (Ultra-Premium Redesign)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8">
          <div className="overflow-hidden rounded-[2.25rem] border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl space-y-8">
            <div className="relative h-64 sm:h-80 w-full bg-slate-900">
              <Image
                src="/images/why-idgen-studio-workflow-branded.jpg"
                alt="IDGen Studio digital identity workflow and live dashboard preview"
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              <div className="absolute top-4 left-6 right-6 flex items-center justify-between z-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-cyan-300 border border-white/15">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>IDGen Studio Software Platform</span>
                </span>
                <span className="rounded-full bg-[#009fe3] px-3 py-1 text-[11px] font-black text-white">
                  Digital Portal
                </span>
              </div>
              <div className="absolute bottom-6 left-6 sm:left-10 right-6 text-white z-10">
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-1 block">
                  IDGen Studio
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                  Connecting Digital Data With Physical Identification
                </h2>
              </div>
            </div>

            <div className="p-6 sm:p-10 space-y-8">
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
                IDGen Studio extends the identification workflow before physical production. Organizations can create a customized data-collection form according to their requirements and share it through a link or QR code.
              </p>

              {/* A Person Can */}
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/70 p-5 space-y-3 shadow-2xs">
                <p className="text-xs font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                  A person can:
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {personCanFlow.map((step, i) => (
                    <span key={step} className="flex items-center gap-2">
                      <span className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-3.5 py-1.5 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs">
                        {step}
                      </span>
                      {i < personCanFlow.length - 1 && <ArrowRight className="h-3 w-3 text-slate-400 dark:text-slate-500" />}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dashboard capabilities */}
              <div className="space-y-3">
                <p className="text-sm font-extrabold text-slate-900 dark:text-slate-100">
                  The organization can then review submissions through its dashboard. Authorized organization users can:
                </p>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {dashboardCapabilities.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-2xs">
                      <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Batch-Wise Production */}
              <div className="rounded-2xl border border-amber-300/80 dark:border-amber-800/60 bg-amber-50/60 dark:bg-amber-950/20 p-6 space-y-3 shadow-2xs">
                <h3 className="text-sm font-black text-amber-900 dark:text-amber-300 uppercase tracking-wider">
                  Batch-Wise Production
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  One of the key advantages is that an organization does not necessarily have to wait for every person to complete the form before beginning production.
                </p>
                <div className="space-y-2 text-xs font-bold text-slate-800 dark:text-slate-200">
                  <p className="text-slate-600 dark:text-slate-400">For example:</p>
                  <div className="rounded-xl bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-700 p-3.5 text-amber-950 dark:text-amber-200 font-black shadow-2xs">
                    500 Forms Completed → Approved → Batch 1 Printed
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-normal">while additional people continue submitting their information.</p>
                  <p className="text-slate-600 dark:text-slate-400">Then:</p>
                  <div className="rounded-xl bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-700 p-3.5 text-amber-950 dark:text-amber-200 font-black shadow-2xs">
                    400 More Completed → Approved → Batch 2 Printed
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 pt-1">
                  This allows organizations to start distributing completed ID cards earlier instead of waiting for the entire population to complete the process.
                </p>
              </div>

              {/* IDGen Studio Flow */}
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-2xs">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                  IDGen Studio Flow
                </h3>
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {studioFlow.map((step, i) => (
                    <span key={step} className="flex items-center gap-1.5">
                      <span className="rounded-lg bg-sky-50 dark:bg-cyan-950/60 text-[#009fe3] dark:text-cyan-400 border border-sky-200 dark:border-cyan-800/50 px-2.5 py-1 text-xs font-bold">
                        {step}
                      </span>
                      {i < studioFlow.length - 1 && <span className="text-slate-400 dark:text-slate-600 text-xs">↓</span>}
                    </span>
                  ))}
                </div>
                <div className="pt-2">
                  <Link
                    href="/idgen-studio/"
                    className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-6 py-2.5 text-xs font-bold text-white shadow-md transition-transform hover:scale-105"
                  >
                    <span>Explore IDGen Studio</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            11. WHY BATCH-WISE PRODUCTION MATTERS
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8">
          <div className="rounded-[2.25rem] border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-10 shadow-xl space-y-6">
            <div>
              <span className="inline-block rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-3.5 py-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider mb-2">
                Production Efficiency
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight leading-tight">
                Why Batch-Wise Production Matters
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/70 p-5 space-y-2">
                <p className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                  Traditional identification projects often follow:
                </p>
                <p className="text-xs font-extrabold text-slate-900 dark:text-slate-100">
                  Wait for Everyone → Prepare Everything → Print Everything → Distribute
                </p>
              </div>

              <div className="rounded-2xl border border-[#009fe3]/30 dark:border-cyan-800/50 bg-sky-50/50 dark:bg-cyan-950/30 p-5 space-y-2">
                <p className="text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                  A digital workflow can allow:
                </p>
                <p className="text-xs font-extrabold text-slate-950 dark:text-white">
                  Collect → Approve Ready Records → Print → Distribute
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">while remaining records continue through the process.</p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                This can be useful for:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {batchWiseUseCases.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 px-3.5 py-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-2xs">
                    <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-4 space-y-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <p className="font-extrabold text-slate-950 dark:text-white">
                The benefit is not simply faster printing.
              </p>
              <p>
                It is the ability to start distributing completed identification to ready individuals while the remaining data is still being collected.
              </p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            12. PRODUCTION CAPABILITY
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8">
          <div className="rounded-[2.25rem] border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-10 shadow-xl space-y-6">
            <div>
              <span className="inline-block rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-3.5 py-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider mb-2">
                Production Capability
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight leading-tight">
                Built for Institutional &amp; Bulk Requirements
              </h2>
            </div>

            {/* Capacity Stat Callout Box */}
            <div className="rounded-2xl border border-[#009fe3]/30 dark:border-cyan-800/50 bg-sky-50/80 dark:bg-slate-800/80 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
              <div>
                <p className="text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">Stated Production Capability</p>
                <p className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white mt-1">Up to 10,000 Identity Products / Day</p>
              </div>
              <span className="rounded-full bg-[#009fe3] px-4 py-1.5 text-xs font-black text-white shadow-sm shrink-0">
                Bulk Scalability
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              IDGen&apos;s stated production capability can reach up to 10,000 identity products per day, depending on product type and project requirements.
            </p>

            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                Actual project capacity can vary according to:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {capacityFactors.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/70 px-3.5 py-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200">
                    <div className="h-2 w-2 rounded-full bg-[#009fe3] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 italic">
              Capacity should therefore be confirmed against the specific project.
            </p>

            <div>
              <Link
                href="/id-card-printing/"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-5 py-2 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3] dark:hover:border-cyan-400 hover:text-[#009fe3] dark:hover:text-cyan-400 transition-colors"
              >
                <span>Explore ID Card Printing</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            13. EXPERIENCE THAT MATTERS IN BULK PROJECTS
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-900 dark:border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 sm:p-12 text-white shadow-2xl">
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#009fe3]/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative z-10 space-y-8">
              <div>
                <span className="inline-block rounded-full bg-[#009fe3]/20 border border-[#009fe3]/40 px-4 py-1.5 text-xs font-bold text-cyan-300 uppercase tracking-wider mb-3">
                  Scale &amp; Execution
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                  Experience That Matters in Bulk Projects
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                  Our experience since 2014 has provided practical exposure to the challenges associated with organizational identification.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-xs font-black uppercase tracking-wider text-cyan-400">
                  Large projects can involve:
                </p>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {bulkProjectDisciplines.map((item, idx) => (
                    <div
                      key={item.title}
                      className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10 hover:-translate-y-1 shadow-lg space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-black text-cyan-300 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-800/50">
                          0{idx + 1}
                        </span>
                        <div className="h-2 w-2 rounded-full bg-[#009fe3] group-hover:scale-150 transition-transform" />
                      </div>
                      <h3 className="text-sm font-black text-white group-hover:text-cyan-300 transition-colors pt-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#009fe3]/20 text-cyan-300 border border-[#009fe3]/30">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span>
                  This experience informs the way IDGen approaches organizational identification today.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            14. WHAT MAKES IDGEN DIFFERENT?
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8">
          <div className="rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-xl space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
              <div>
                <span className="inline-block rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-4 py-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider mb-2">
                  What Makes IDGen Different?
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight">
                  Experience + Technology + Production
                </h2>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                IDGen combines three important areas.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              {whatMakesDifferent.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.num}
                    className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/60 p-7 transition-all duration-300 hover:border-[#009fe3]/50 dark:hover:border-cyan-500/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 space-y-5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#009fe3]/10 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400 border border-[#009fe3]/20 dark:border-cyan-800/50 transition-all duration-300 group-hover:bg-[#009fe3] group-hover:text-white group-hover:shadow-md">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-black text-slate-400 dark:text-slate-500 font-mono uppercase tracking-wider bg-white dark:bg-slate-900 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 shadow-2xs">
                        {item.num}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-black text-slate-950 dark:text-white text-base group-hover:text-[#009fe3] dark:group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.body}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800 text-[11px] font-bold text-[#009fe3] dark:text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Core Distinction</span>
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="rounded-3xl border border-sky-200/80 dark:border-slate-800 bg-sky-50/80 dark:bg-slate-800/80 p-6 sm:p-8 text-center shadow-sm space-y-3">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                Together:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {["Experience", "Digital Workflow", "Production"].map((s, i, arr) => (
                  <span key={s} className="flex items-center gap-3">
                    <span className="rounded-full bg-white dark:bg-slate-800 text-slate-950 dark:text-slate-100 px-5 py-2 text-xs sm:text-sm font-black border border-sky-200 dark:border-slate-700 shadow-sm">
                      {s}
                    </span>
                    {i < arr.length - 1 && <ArrowRight className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />}
                  </span>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium pt-1">
                This is the foundation of the IDGen approach.
              </p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            15. WE FOCUS ON THE ACTUAL REQUIREMENT
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8">
          <div className="rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-xl space-y-8">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-6">
              <span className="inline-block rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-4 py-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider mb-2">
                We Focus on the Actual Requirement
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight">
                Not Every Organization Needs the Same Identification Setup
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {focusActualRequirements.map(({ label, flow, bg, border }) => (
                <div
                  key={label}
                  className={`rounded-3xl border ${border} dark:border-slate-800 ${bg} dark:bg-slate-800 p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow`}
                >
                  <p className="text-sm font-black text-slate-950 dark:text-white">{label}</p>
                  <div className="flex flex-wrap items-center gap-2">
                    {flow.map((s, i, arr) => (
                      <span key={s} className="flex items-center gap-2">
                        <span className="rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border border-slate-200/90 dark:border-slate-700 px-3.5 py-1.5 text-xs font-bold shadow-2xs">
                          {s}
                        </span>
                        {i < arr.length - 1 && <ArrowRight className="h-3.5 w-3.5 text-[#009fe3] dark:text-cyan-400" />}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-slate-100 dark:border-slate-800">
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-medium">
                IDGen&apos;s role is to help determine the appropriate combination rather than forcing every customer into the same package.
              </p>

              <Link
                href="/services/"
                className="group inline-flex items-center gap-2 rounded-full bg-slate-950 dark:bg-slate-800 px-6 py-2.5 text-xs font-bold text-white border border-transparent dark:border-slate-700 shadow-sm hover:bg-[#009fe3] transition-colors shrink-0"
              >
                <span>Explore Services</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            16. HONEST ABOUT OUR CAPABILITIES
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-white via-slate-50/50 to-sky-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 p-8 sm:p-12 shadow-xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <span className="inline-block rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-4 py-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                Honest About Our Capabilities
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight">
              Trust Requires Accurate Claims
            </h2>

            <div className="space-y-3.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
              <p className="font-extrabold text-slate-950 dark:text-white text-base sm:text-lg">
                IDGen does not describe every product as being manufactured 100% in-house.
              </p>
              <p>
                Production methods can vary depending on the product and project. Our role is to manage the required identity-product customization, production workflow, assembly and quality requirements according to the agreed specification.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-semibold pt-1">
                This allows us to communicate our capabilities accurately and transparently.
              </p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            17. OUR COMMITMENT
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8">
          <div className="rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-xl space-y-8">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-6">
              <SectionHead eyebrow="Our Commitment" title="What We Hold Ourselves To" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {commitments.map(({ label, body }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/70 p-5 shadow-2xs hover:border-emerald-500/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-md transition-all space-y-2.5"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <h3 className="font-black text-slate-950 dark:text-white text-sm">{label}</h3>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            18. WHO WE SERVE
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8">
          <div className="rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-xl space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
              <div>
                <span className="inline-block rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-4 py-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider mb-2">
                  Who We Serve
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight">
                  Identification Solutions for Organizations
                </h2>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  IDGen provides identification solutions for organizations including:
                </p>
              </div>

              <Link
                href="/services/"
                className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-5 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#38bdf8] transition-colors shrink-0"
              >
                <span>Explore Services</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {whoWeServe.map((org) => (
                <div
                  key={org}
                  className="group flex items-center gap-3 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/70 px-4 py-3 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3]/50 dark:hover:border-cyan-500/50 hover:bg-white dark:hover:bg-slate-800 hover:text-[#009fe3] dark:hover:text-cyan-400 hover:shadow-sm transition-all"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#009fe3]/10 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400 group-hover:bg-[#009fe3] group-hover:text-white transition-colors">
                    <Building2 className="h-3.5 w-3.5" />
                  </div>
                  <span className="truncate">{org}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium border-t border-slate-100 dark:border-slate-800 pt-4">
              Detailed requirements are covered on the relevant service pages rather than repeated here.
            </p>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            19. SERVING ASSAM & NORTHEAST INDIA
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8">
          <div className="rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-xl space-y-8">
            <div>
              <span className="inline-block rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-4 py-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider mb-2">
                Service Area
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight">
                Serving Assam &amp; Northeast India
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
              IDGen is based in Guwahati, Assam and serves organizations across Assam and the wider Northeast India market.
            </p>

            <div className="space-y-3">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                Our regional focus includes:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {neStates.map((state) => (
                  <div
                    key={state}
                    className="flex items-center gap-2.5 rounded-2xl bg-sky-50/70 dark:bg-slate-800/80 border border-sky-200/80 dark:border-slate-700 px-4 py-2.5 text-xs font-extrabold text-[#009fe3] dark:text-cyan-400 shadow-2xs"
                  >
                    <div className="h-2 w-2 rounded-full bg-[#009fe3]" />
                    <span>{state}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Our service-area pages provide more specific information for locations where dedicated local content is useful.
              </p>

              <div className="flex gap-4 flex-wrap text-xs font-extrabold text-[#009fe3] dark:text-cyan-400">
                <Link href="/service-areas/assam/" className="hover:underline flex items-center gap-1.5">
                  <span>ID Card Printing in Assam</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link href="/service-areas/assam/guwahati/" className="hover:underline flex items-center gap-1.5">
                  <span>ID Card Printing in Guwahati</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            20. OUR JOURNEY (Dedicated Timeline Section)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8">
          <div className="rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-xl space-y-8">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-6">
              <span className="inline-block rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-4 py-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider mb-2">
                Timeline
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight">
                Our Journey
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {journey.map((item) => (
                <div
                  key={item.year}
                  className="group relative rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/70 p-6 space-y-3 hover:border-[#009fe3]/50 dark:hover:border-cyan-500/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-black text-[#009fe3] dark:text-cyan-400 bg-white dark:bg-slate-900 px-3 py-1 rounded-full border border-sky-200 dark:border-slate-700 shadow-2xs">
                      {item.year}
                    </span>
                    <div className="h-2 w-2 rounded-full bg-[#009fe3] group-hover:scale-150 transition-transform" />
                  </div>
                  <h3 className="font-black text-slate-950 dark:text-white text-base">{item.label}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            21. BUILDING IDGEN FOR THE FUTURE
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8">
          <div className="rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-xl space-y-8">
            <div>
              <span className="inline-block rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-4 py-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider mb-2">
                The Future
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight">
                Building IDGen for the Future
              </h2>
            </div>

            <p className="text-base font-black text-slate-950 dark:text-white">
              Identification is changing.
            </p>

            <div className="space-y-3">
              <p className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-slate-100">
                Organizations increasingly expect:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {futureExpectations.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/80 px-4 py-3 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-4 border-t border-slate-100 dark:border-slate-800">
              <p>
                IDGen is building its systems around these changing requirements.
              </p>
              <p>
                The objective is not simply to print more cards.
              </p>
              <p className="font-black text-slate-950 dark:text-white text-base sm:text-lg pt-1 text-[#009fe3] dark:text-cyan-400">
                It is to make the entire identification process easier to manage.
              </p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            22. FREQUENTLY ASKED QUESTIONS
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8">
          <SectionHead align="center" eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mt-10 max-w-3xl mx-auto">
            <FaqList faqs={faqs} />
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            23. IDGEN IN ONE SENTENCE (Sleek Compact Luxury Quote Card)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-14 pt-4">
          <div className="relative overflow-hidden rounded-[2rem] border border-sky-200/70 dark:border-slate-800 bg-sky-50/60 dark:bg-slate-900 p-6 sm:p-8 shadow-sm">
            <div className="relative z-10 max-w-2xl mx-auto text-center space-y-3">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-sky-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3.5 py-1 text-[11px] font-extrabold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider shadow-2xs">
                <Sparkles className="h-3 w-3" />
                <span>IDGen in One Sentence</span>
              </div>

              <div className="relative pt-1 pb-1">
                <Quote className="absolute -top-1 -left-2 h-6 w-6 text-[#009fe3]/20 dark:text-cyan-400/20 -scale-x-100 pointer-events-none" />
                <blockquote className="text-xs sm:text-sm md:text-base font-bold text-slate-900 dark:text-slate-100 leading-relaxed px-4">
                  &ldquo;IDGen is an identity-solutions brand built on identification experience dating back to 2014, helping organizations across Northeast India manage personalized identification through products, digital workflows and structured production—with responsible handling of customer-provided identification data.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            24. NEED AN IDENTITY SOLUTION? (Compact Premium CTA Banner)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-8 pt-2">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-8 px-6 sm:py-9 sm:px-10 text-white shadow-xl border border-slate-800">
            {/* Subtle Accent Glows */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#009fe3]/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
              <span className="inline-block rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-[11px] font-extrabold text-cyan-300 uppercase tracking-wider backdrop-blur-md">
                Need an Identity Solution?
              </span>

              <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                Tell Us What Your Organization Needs
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
                Whether you require student identification, employee cards, event badges, RFID cards, custom lanyards or a complete identification project, IDGen can help you determine the appropriate products and workflow.
              </p>

              {/* Start With Your Requirement */}
              <div className="space-y-1.5 max-w-xl mx-auto pt-1">
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">
                  Start With Your Requirement
                </p>
                <div className="rounded-xl border border-white/10 bg-white/5 py-2 px-3 text-[11px] text-slate-300 font-semibold backdrop-blur-md">
                  Requirement → Data → Design → Preview → Approval → Production → Quality Check → Dispatch
                </div>
              </div>

              {/* Compact CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
                <Link
                  href="/request-a-quote/"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#009fe3]/30 transition-all hover:bg-[#38bdf8] hover:-translate-y-0.5"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/services/"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/15 hover:-translate-y-0.5"
                >
                  <span>Explore Services</span>
                </Link>
                <Link
                  href="/idgen-studio/"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/15 hover:-translate-y-0.5"
                >
                  <span>Explore IDGen Studio</span>
                </Link>
                <Link
                  href="/contact-us/"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/15 hover:-translate-y-0.5"
                >
                  <span>Contact IDGen</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            25. IDGEN — IDENTITY SOLUTIONS SIMPLIFIED (Footer Closing Banner)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-16 mb-10 text-center space-y-2.5">
          <h2 className="text-lg font-black text-slate-950 dark:text-white tracking-tight">
            IDGen — Identity Solutions Simplified
          </h2>
          <p className="text-xs font-black text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
            Built on Identification Experience Since 2014
          </p>
          <p className="text-xs text-slate-500 font-medium">
            Experience + Technology + Products + Production • Serving Organizations Across Northeast India
          </p>
        </section>
      </Container>
    </div>
  );
}
