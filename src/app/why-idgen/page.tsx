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
  MessageSquare,
  Sparkles,
  Globe2,
  ChevronRight,
  Check,
  Clock,
  CheckCircle,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FaqList } from "@/components/ui/FaqList";
import { pageMetadata } from "@/lib/metadata";
import type { Faq } from "@/data/types";

export const metadata = pageMetadata({
  title: "Why Choose IDGen | ID Card Printing Experience Since 2014",
  description:
    "Discover IDGen, a Guwahati-based identity solutions company built on ID card printing experience since 2014, serving organizations across Assam and Northeast India.",
  path: "/why-idgen/",
});

const journey = [
  { year: "2014", label: "Identification Experience Begins", body: "Identification-product experience begins." },
  { year: "2014–2025", label: "Regional Experience", body: "ID card printing and identification-product supply across Northeast India." },
  { year: "2026", label: "IDGen Identity Solutions", body: "IDGen Identity Solutions." },
  { year: "Today", label: "Products + Digital Workflow + Structured Production", body: "IDGen represents the next stage of that journey." },
];

const whyChoose = [
  { icon: Target, title: "Identity-Focused", body: "IDGen is focused specifically on identification products and identification workflows." },
  { icon: Award, title: "Experience Since 2014", body: "Our identification-product experience dates back to 2014, giving us more than a decade of practical experience in this field." },
  { icon: MapPin, title: "Northeast India Experience", body: "We have experience supplying identification products to customers across the Northeast India market." },
  { icon: Workflow, title: "Structured Workflow", body: "Projects can follow a defined process from requirement through dispatch." },
  { icon: Layers, title: "Digital + Physical Workflow", body: "IDGen Studio connects digital data collection and approval with physical identification production." },
  { icon: Zap, title: "Bulk Capability", body: "Our production operation supports institutional and high-volume requirements." },
  { icon: PackageCheck, title: "Complete Identification Ecosystem", body: "Organizations can coordinate the relevant identification products and accessories required for their application." },
  { icon: Lock, title: "Data Confidentiality", body: "Your identification data is treated as confidential project information and handled for the agreed identification-related purpose." },
];

const productionSteps = [
  { num: "01", icon: ClipboardCheck, title: "Requirement", body: "We understand the required: Product, Quantity, Specifications, Personalization, Accessories, Delivery requirements." },
  { num: "02", icon: Database, title: "Data", body: "For personalized projects, the required information and photographs are prepared. Where appropriate, IDGen Studio can support digital data collection and organization." },
  { num: "03", icon: LayoutGrid, title: "Design", body: "Artwork and personalization are prepared according to the project requirements." },
  { num: "04", icon: Eye, title: "Preview", body: "Where applicable, the customer or organization can review the design and personalized information before production." },
  { num: "05", icon: CheckCircle2, title: "Approval", body: "Approved information and specifications are released for production." },
  { num: "06", icon: Printer, title: "Production", body: "The project moves into production according to the confirmed specifications." },
  { num: "07", icon: Wrench, title: "Assembly", body: "Where required, relevant components are assembled according to the selected configuration." },
  { num: "08", icon: ShieldCheck, title: "Quality Check", body: "Completed products are checked against the approved requirements." },
  { num: "09", icon: Truck, title: "Dispatch", body: "Completed and approved products are prepared for dispatch according to the applicable order timeline." },
];

const qualityCheckpoints = [
  { icon: LayoutGrid, title: "Design Check", body: "Artwork is checked against the approved requirements." },
  { icon: Database, title: "Data Check", body: "Personalized information is processed according to the supplied or approved data." },
  { icon: ClipboardCheck, title: "Specification Check", body: "Product specifications and required components are checked against the order." },
  { icon: Printer, title: "Production Check", body: "Completed products are checked during the production workflow." },
  { icon: Wrench, title: "Assembly Check", body: "Where applicable, the required combination of components is checked." },
  { icon: PackageCheck, title: "Final Check", body: "Completed materials are checked before dispatch. Our objective is to identify avoidable errors before the finished products reach the customer." },
];

const commitments = [
  { label: "Clear", body: "Customers should understand what they are ordering." },
  { label: "Organized", body: "Large projects should follow a structured workflow." },
  { label: "Reviewable", body: "Important information should be reviewed before production where applicable." },
  { label: "Accurate", body: "Products should follow approved information and specifications." },
  { label: "Scalable", body: "The workflow should support organizational and bulk requirements." },
  { label: "Practical", body: "The solution should match the actual application." },
  { label: "Confidential", body: "Customer-provided identification information should be treated as confidential project information." },
  { label: "Transparent", body: "Capabilities and timelines should be communicated realistically." },
];

const whoWeServe = [
  "Schools", "Colleges", "Universities", "Companies", "Corporate Offices",
  "Hospitals", "Industries", "Government Organizations", "NGOs",
  "Institutions", "Clubs", "Associations", "Events", "Membership Organizations",
];

const faqs: Faq[] = [
  { q: "What is IDGen?", a: "IDGen is a Guwahati-based identity solutions company providing identification products, customization and related digital and production workflows for organizations." },
  { q: "How long has IDGen been in the ID card business?", a: "The identification-product experience behind IDGen dates back to 2014. IDGen is the newer identity-focused brand built on that experience." },
  { q: "Has IDGen served customers across Northeast India?", a: "Yes. Our identification-product business has experience supplying customers and organizations across the Northeast India market." },
  { q: "Where is IDGen based?", a: "IDGen is based in Guwahati, Assam, India." },
  { q: "What does IDGen provide?", a: "IDGen provides identification products and services including ID card printing, student and employee identification, event cards, RFID cards, custom printed lanyards, holders, hooks, ultrasonic sealing and related workflows. Detailed product information is available on the relevant service pages." },
  { q: "Can IDGen handle bulk orders?", a: "Yes. IDGen supports organizational and high-volume identification requirements. Actual capacity depends on the product and project specifications." },
  { q: "Does IDGen provide digital data collection?", a: "Yes. IDGen Studio provides a digital workflow for suitable projects, including customized forms, link and QR-code sharing, data collection, ID card preview, organization review and approval." },
  { q: "Can ID cards be printed batch-wise?", a: "Yes. Suitable IDGen Studio projects can release approved records for batch-wise production." },
  { q: "How does IDGen handle student and employee data?", a: "IDGen treats customer-provided identification information as confidential project information and uses it for the agreed identification-related purpose. Organizations should provide only the information required for their project and follow their applicable privacy and data-handling policies." },
  { q: "Does IDGen manufacture every product in-house?", a: "No blanket in-house manufacturing claim is made for every product. Production methods vary by product and project. IDGen manages the required customization, production workflow, assembly and quality requirements according to the agreed specification." },
  { q: "What areas does IDGen serve?", a: "IDGen is based in Guwahati and serves organizations across Assam and the wider Northeast India market." },
];

const neStates = ["Assam", "Arunachal Pradesh", "Meghalaya", "Nagaland", "Manipur", "Mizoram", "Tripura", "Sikkim"];

const futureItems = [
  "Digital data collection", "Online workflows", "Faster approvals",
  "Better data organization", "ID card preview", "Batch-wise production",
  "Faster distribution", "Integrated identification products",
];

const projectItems = [
  "Personal information", "Photographs", "Card design", "Personalization",
  "Large quantities", "Data checking", "Product specifications", "Accessories",
  "Approval", "Production", "Assembly", "Quality checking", "Packaging", "Dispatch",
];

const qualityErrors = [
  "The name is incorrect", "The photograph is mismatched", "The ID number is wrong",
  "The department is incorrect", "The designation is incorrect", "Required information is missing",
  "The wrong specification is used", "The required accessory is missing",
];

const dataItems = [
  "Student names", "Employee names", "Photographs", "Student or employee ID numbers",
  "Classes / Courses", "Departments", "Designations", "Organization information",
  "QR-code information", "Barcode information", "Other personalization details",
];

const dashboardActions = [
  "View submitted forms", "Track how many people have completed the form",
  "Review information", "Edit information where required",
  "Approve individual records", "Approve batches", "Release all approved records together",
];

const responsiblePractices = [
  "Share only information required for the project",
  "Use authorized personnel for data submission and approval",
  "Review information before production",
  "Avoid unnecessary personal information",
  "Maintain appropriate access controls within their organization",
  "Follow their applicable privacy and data-handling policies",
];

const approachStepsDetailed = [
  { step: "01", name: "Requirement" },
  { step: "02", name: "Data" },
  { step: "03", name: "Design" },
  { step: "04", name: "Preview" },
  { step: "05", name: "Approval" },
  { step: "06", name: "Production" },
  { step: "07", name: "Quality Check" },
  { step: "08", name: "Dispatch" },
];

const clientOrderSamples = [
  { name: "Don Bosco Hr Sec School", location: "Gojapara, Assam", img: "/images/Order Deliver/Don Bosco Hr Sec School, gojapara 1.png" },
  { name: "Government of Assam", location: "Nagaon, Assam", img: "/images/Order Deliver/Government of assam,nagoan 1.jpeg" },
  { name: "Rayburn College", location: "Churachandpur, Manipur", img: "/images/Order Deliver/RAYBURN COLLAGE,MANIPUR 1.png" },
  { name: "CKB College", location: "Jorhat, Assam", img: "/images/Order Deliver/CKB COLLAGE,JORHAT 1.png" },
  { name: "Don Bosco School", location: "Itanagar, Arunachal", img: "/images/Order Deliver/DBS ITANAGAR 1.png" },
  { name: "Siang Lamin Memorial", location: "Lamin, Meghalaya", img: "/images/Order Deliver/Siang Lamin Pohthmi Memorial School,Lamin 1.png" },
];

export default function WhyIdgenPage() {
  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen selection:bg-[#009fe3]/20 selection:text-[#009fe3]">
      {/* ─────────────────────────────────────────────────────────────
          1. ULTRA-PREMIUM LUXURY LIGHT HERO SECTION
      ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200/90 pt-8 pb-16 lg:pt-14 lg:pb-24">
        {/* Soft atmospheric gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,159,227,0.12),rgba(255,255,255,0))]" />
        
        {/* Geometric subtle mesh */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #009fe3 1.5px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />

        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Typography & Structured Workflow */}
            <div className="lg:col-span-6 xl:col-span-7 space-y-7">
              {/* Premium Pill Badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#009fe3]/30 bg-gradient-to-r from-[#009fe3]/10 to-sky-50 px-4 py-1.5 shadow-xs">
                <span className="flex h-2 w-2 rounded-full bg-[#009fe3] animate-pulse" />
                <span className="text-xs font-extrabold text-[#009fe3] uppercase tracking-wider">
                  Identity Solutions Simplified
                </span>
                <span className="h-3 w-px bg-[#009fe3]/30" />
                <span className="text-[11px] font-semibold text-slate-600">Guwahati, Assam</span>
              </div>

              {/* Headline */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-black text-slate-950 tracking-tight leading-[1.06]">
                  Why Choose{" "}
                  <span className="bg-gradient-to-r from-[#009fe3] to-[#0077b6] bg-clip-text text-transparent">
                    IDGen?
                  </span>
                </h1>
                <div className="flex items-center gap-3">
                  <span className="h-1 w-10 rounded-full bg-[#009fe3]" />
                  <p className="text-lg sm:text-xl font-extrabold text-slate-800 tracking-tight">
                    Built on Identification Experience Dating Back to 2014
                  </p>
                </div>
              </div>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-[17px] text-slate-600 leading-relaxed max-w-2xl">
                IDGen is a Guwahati-based identity solutions company serving organizations across Assam and the wider Northeast India market. Our experience in ID card printing, identification products and organizational supply dates back to 2014.
              </p>

              {/* Architectural Approach Stepper Box */}
              <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-br from-slate-50/90 to-white p-6 shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-200/70 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Workflow className="h-4 w-4 text-[#009fe3]" />
                    <span className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                      Our Approach
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-[#009fe3] bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200/60">
                    8-Step Precision Workflow
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {approachStepsDetailed.map((item, idx) => (
                    <div
                      key={item.step}
                      className="group relative flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-2.5 shadow-2xs hover:border-[#009fe3]/50 hover:shadow-xs transition-all"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#009fe3]/10 text-[10px] font-black text-[#009fe3] group-hover:bg-[#009fe3] group-hover:text-white transition-colors">
                        {item.step}
                      </span>
                      <span className="text-xs font-bold text-slate-800 truncate">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-3.5 text-xs text-slate-500 italic">
                  Our goal is simple: make identification projects easier to plan, manage and complete.
                </p>
              </div>

              {/* Call to Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Link
                  href="/request-a-quote/"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#009fe3] to-[#0084be] px-8 py-4 text-sm font-bold text-white shadow-xl shadow-[#009fe3]/30 transition-all hover:shadow-[#009fe3]/45 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/services/"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-bold text-slate-800 shadow-xs transition-all hover:border-[#009fe3] hover:text-[#009fe3] hover:bg-sky-50/40 hover:-translate-y-0.5"
                >
                  <span>Explore Our Services</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Layered Luxury 3D Product Showcase */}
            <div className="lg:col-span-6 xl:col-span-5 relative">
              {/* Decorative background glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-sky-200/50 via-cyan-100/30 to-transparent rounded-[2.5rem] blur-2xl pointer-events-none" />

              {/* Main Primary Showcase Card */}
              <div className="relative rounded-[2rem] overflow-hidden border border-slate-200/80 bg-white shadow-2xl">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/images/why-idgen-cards-showcase-branded.jpg"
                    alt="IDGen customized PVC identity cards showcase"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Image Overlay Label */}
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-[11px] font-black uppercase tracking-wider text-cyan-300">
                        IDGen Official Identity Products
                      </span>
                    </div>
                    <p className="text-sm font-bold text-white leading-snug">
                      High-Precision PVC Cards &amp; Custom Lanyards
                    </p>
                  </div>
                </div>

                {/* Sub-card features bar */}
                <div className="p-4 bg-white grid grid-cols-2 gap-3 border-t border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-900 leading-tight">100% Verified</p>
                      <p className="text-[10px] text-slate-500">Zero Error Check</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-lg bg-[#009fe3]/10 text-[#009fe3] flex items-center justify-center shrink-0">
                      <Award className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-900 leading-tight">Since 2014</p>
                      <p className="text-[10px] text-slate-500">Northeast India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Layered Ecosystem Inset (Bottom Right) */}
              <div className="absolute -bottom-8 -right-4 hidden sm:flex items-center gap-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xl p-3 max-w-[280px] z-20 backdrop-blur-md">
                <div className="relative h-16 w-16 rounded-xl overflow-hidden shrink-0 border border-slate-100 bg-slate-50">
                  <Image
                    src="/images/why-idgen-complete-ecosystem-branded.jpg"
                    alt="IDGen complete ecosystem"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-950">Modular ID Sets</p>
                  <p className="text-[11px] text-slate-500">Cards • Lanyards • Holders</p>
                  <span className="inline-block mt-0.5 text-[10px] font-bold text-[#009fe3]">
                    Guwahati Facility →
                  </span>
                </div>
              </div>

              {/* Floating Live Badge (Top Left) */}
              <div className="absolute -top-5 -left-5 hidden sm:flex items-center gap-2 rounded-full bg-slate-900 text-white shadow-xl px-4 py-2 border border-slate-800 z-20">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                <span className="text-xs font-bold tracking-tight">Institutional &amp; Bulk Ready</span>
              </div>
            </div>
          </div>

          {/* Bottom Trust Indicators Strip */}
          <div className="mt-16 pt-8 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#009fe3]/10 text-[#009fe3] border border-[#009fe3]/20">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-base font-black text-slate-950">Dating to 2014</p>
                <p className="text-xs text-slate-500">A decade of experience</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#009fe3]/10 text-[#009fe3] border border-[#009fe3]/20">
                <Globe2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-base font-black text-slate-950">8 Northeast States</p>
                <p className="text-xs text-slate-500">Regional supply footprint</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#009fe3]/10 text-[#009fe3] border border-[#009fe3]/20">
                <Layers className="h-5 w-5" />
              </div>
              <div>
                <p className="text-base font-black text-slate-950">Digital + Physical</p>
                <p className="text-xs text-slate-500">IDGen Studio workflow</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#009fe3]/10 text-[#009fe3] border border-[#009fe3]/20">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-base font-black text-slate-950">Data Confidentiality</p>
                <p className="text-xs text-slate-500">Responsible data handling</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-12">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Why IDGen", path: "/why-idgen/" }]} />

        {/* ─────────────────────────────────────────────────────────────
            2. MORE THAN A NEW BRAND + CLEAR IDGEN-BRANDED CARDS
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-14 pt-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="inline-block rounded-full bg-[#009fe3]/10 border border-[#009fe3]/25 px-3.5 py-1 text-xs font-bold text-[#009fe3] uppercase tracking-wider mb-3">
                  Experience Since 2014
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  More Than a New Brand
                </h2>
              </div>

              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  While IDGen is the new identity-focused brand, our experience in ID card printing and identification-product supply dates back to 2014.
                </p>
                <p>
                  For more than a decade, our work has involved identification requirements for organizations and customers across Northeast India.
                </p>
                <p>
                  This experience has taught us that an identification project is rarely just about printing a card.
                </p>
                <p className="font-bold text-slate-900 text-sm pt-1">
                  It can involve:
                </p>
              </div>

              {/* 14 items grid */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                {projectItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-xs"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                IDGen brings this practical experience into a more structured identity-solutions workflow.
              </p>
            </div>

            {/* Right Photo & Journey Cards */}
            <div className="lg:col-span-6 space-y-6">
              {/* Crisp Clear "IDGen" Cards Showcase */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-white">
                <Image
                  src="/images/why-idgen-hero-branded.jpg"
                  alt="Clear IDGen branded PVC ID cards flatlay"
                  width={700}
                  height={450}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">
                    IDGen Personalized PVC ID Cards
                  </span>
                  <span className="text-xs font-bold text-[#009fe3]">
                    Students • Corporate • Healthcare • Events
                  </span>
                </div>
              </div>

              {/* Regional Experience & Journey */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm space-y-6">
                <div>
                  <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Serving Northeast India
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    Regional Identification Experience
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Our identification-product experience has been developed through serving customers across the Northeast India market. IDGen is based in Guwahati, Assam, providing a central base for serving organizations across the region.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {neStates.map((state) => (
                      <span
                        key={state}
                        className="rounded-full bg-sky-50 text-[#009fe3] border border-sky-200 px-3 py-1 text-[11px] font-bold"
                      >
                        {state}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#009fe3] mb-4">
                    Our Journey
                  </p>
                  <div className="space-y-4">
                    {journey.map((j) => (
                      <div key={j.year} className="flex gap-4 items-start">
                        <div className="flex h-11 w-20 shrink-0 items-center justify-center rounded-xl bg-[#009fe3]/10 border border-[#009fe3]/20">
                          <span className="font-mono text-[9px] font-black text-[#009fe3] text-center leading-tight">
                            {j.year}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">{j.label}</p>
                          <p className="text-xs text-slate-500 mt-0.5">{j.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-slate-500 italic">
                    IDGen represents the next stage of that journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            REAL CLIENT ORDERS DELIVERED ACROSS NORTHEAST INDIA (Photo Grid)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200/80">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold tracking-wider text-[#009fe3] uppercase">
                Proven Track Record
              </span>
              <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-950">
                Identification Sets Supplied Across Northeast India
              </h3>
              <p className="mt-2 text-sm text-slate-600 max-w-xl">
                Real photos of ID card orders and lanyard sets delivered to schools, colleges, government offices, and companies.
              </p>
            </div>
            <Link
              href="/services/"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3] hover:underline"
            >
              <span>View all services</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clientOrderSamples.map((client) => (
              <div
                key={client.name}
                className="group rounded-2xl border border-slate-200 bg-white p-3 shadow-xs hover:shadow-md hover:border-[#009fe3]/40 transition-all"
              >
                <div className="relative h-32 w-full rounded-xl overflow-hidden bg-slate-100 mb-2.5">
                  <Image
                    src={client.img}
                    alt={client.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-xs font-bold text-slate-900 truncate">{client.name}</p>
                <p className="text-[10px] text-slate-500 truncate">{client.location}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            3. WHY CHOOSE IDGEN — 8 CORE PILLARS
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-24 pt-8">
          <SectionHead
            eyebrow="Why Choose IDGen"
            title="Choosing an Identification Supplier Is Not Only About Finding Someone Who Can Print a Card"
            lede="For an organization, the real requirement may be: Data → Design → Personalization → Approval → Production → Accessories → Quality → Delivery. IDGen is built around this broader requirement."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((w) => (
              <FeatureCard key={w.title} icon={w.icon} title={w.title} body={w.body} />
            ))}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            4. DATA CONFIDENTIALITY & RESPONSIBLE HANDLING
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-24 pt-8">
          <div className="rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
            {/* Top Photo Banner */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900 border-b border-slate-200">
              <Image
                src="/images/why-idgen-data-security-light.jpg"
                alt="Data confidentiality and secure ID card issuance"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-6 left-6 sm:left-10 right-6 sm:right-10 text-white">
                <span className="inline-block rounded-full bg-[#009fe3] px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-2">
                  Privacy &amp; Security
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Data Confidentiality &amp; Responsible Handling
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                  Customer-provided identification information is treated as confidential project information.
                </p>
              </div>
            </div>

            {/* Content Body */}
            <div className="grid lg:grid-cols-12 gap-0">
              <div className="lg:col-span-6 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-slate-200 space-y-5">
                <h4 className="text-2xl font-extrabold text-slate-950">
                  Your Identification Data Deserves Care
                </h4>
                <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                  <p>
                    ID card projects require organizations to share personal information such as student names, employee names, photographs, identification numbers, departments, designations and other information required for personalization.
                  </p>
                  <p>
                    We understand that this information belongs to the organization and the individuals being identified.
                  </p>
                  <p>
                    At IDGen, we treat customer-provided identification data as confidential project information and handle it for the agreed identification-related purpose.
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    We do not need student or employee identification information for unrelated marketing purposes.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#009fe3]">
                    What Information May Be Provided?
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {dataItems.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[11px] text-slate-500 italic pt-1">
                    Only information required for the identification project should be provided.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 p-6 sm:p-10 bg-slate-50/60 space-y-6">
                {/* IDGen Studio preview in Data section */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#009fe3]/10 text-[#009fe3] border border-[#009fe3]/20">
                      <Lock className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <h5 className="font-bold text-slate-900 text-sm">
                        Data Confidentiality in IDGen Studio
                      </h5>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        When organizations use IDGen Studio, authorized users create a customized form and generate a link or QR code for sharing with students, parents or employees. Submitted information forms part of the organization&apos;s identification project, and authorized users can review and manage submissions before releasing them for production.
                      </p>
                      <div className="flex flex-wrap items-center gap-1 pt-1">
                        {["Form", "Link/QR", "Data", "Preview", "Submit", "Review", "Approve", "Production"].map((s, i, arr) => (
                          <span key={s} className="flex items-center gap-1">
                            <span className="rounded bg-[#009fe3]/10 text-[#009fe3] px-2 py-0.5 text-[10px] font-bold border border-[#009fe3]/20">
                              {s}
                            </span>
                            {i < arr.length - 1 && <ArrowRight className="h-2.5 w-2.5 text-slate-400" />}
                          </span>
                        ))}
                      </div>
                      <Link
                        href="/idgen-studio/"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3] hover:underline pt-2"
                      >
                        Explore IDGen Studio <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Responsible practices */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#009fe3]">
                    Responsible Data Practices
                  </p>
                  <ul className="space-y-2">
                    {responsiblePractices.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-slate-500 leading-relaxed pt-1">
                    IDGen&apos;s role is to support the identification-production workflow while treating information provided for that workflow with confidentiality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            5. ONE IDENTITY PARTNER (Clear "IDGen" Complete Ecosystem Photo)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-24 pt-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 lg:p-12 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-8 lg:items-center">
              <div className="lg:col-span-7 space-y-5">
                <span className="inline-block rounded-full bg-[#009fe3]/10 border border-[#009fe3]/20 px-3.5 py-1 text-xs font-bold text-[#009fe3] uppercase tracking-wider">
                  One Identity Partner
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  An Identification Project Can Require Several Connected Products
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Instead of treating every component as a completely separate requirement, IDGen can coordinate the relevant products according to the application.
                </p>

                <div className="grid gap-4 sm:grid-cols-2 pt-2">
                  {[
                    { label: "Standard Configuration", flow: ["ID Card", "Holder", "Hook", "Lanyard"] },
                    { label: "With Sealing", flow: ["ID Card", "Sealing", "Holder", "Hook", "Lanyard"] },
                  ].map((cfg) => (
                    <div
                      key={cfg.label}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-xs"
                    >
                      <p className="text-xs font-bold text-[#009fe3] mb-3">{cfg.label}</p>
                      <div className="flex flex-wrap items-center gap-1.5">
                        {cfg.flow.map((s, i, arr) => (
                          <span key={s} className="flex items-center gap-1.5">
                            <span className="rounded-lg bg-white text-slate-800 border border-slate-200 px-2.5 py-1 text-xs font-semibold shadow-xs">
                              {s}
                            </span>
                            {i < arr.length - 1 && <ArrowRight className="h-3 w-3 text-slate-400" />}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-slate-500">
                  The exact configuration depends on the application. For detailed specifications, visit the relevant service page.
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
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
                      className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:border-[#009fe3] hover:text-[#009fe3] transition-colors shadow-xs"
                    >
                      <span>{label}</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Complete IDGen Ecosystem Photo */}
              <div className="lg:col-span-5 relative">
                <div className="rounded-3xl overflow-hidden border-2 border-slate-100 shadow-xl bg-slate-50">
                  <Image
                    src="/images/why-idgen-complete-ecosystem-branded.jpg"
                    alt="IDGen complete identification set with holder, hook and lanyard"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-white border-t border-slate-100 text-center">
                    <p className="text-xs font-bold text-slate-800">
                      IDGen Coordinated Identification Ecosystem
                    </p>
                    <p className="text-[11px] text-slate-500">
                      IDGen Cards • Branded Lanyards • Acrylic Holders • Metal Hooks
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            6. PRODUCTION APPROACH (Clear "IDGen" Batches & QA Banner)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-24 pt-8">
          {/* Banner Photo */}
          <div className="relative overflow-hidden rounded-3xl h-64 sm:h-80 mb-10 shadow-xl border border-slate-200 bg-slate-900">
            <Image
              src="/images/why-idgen-production-batches-branded.jpg"
              alt="IDGen batch production and quality inspection"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-12 text-white">
              <span className="inline-block rounded-full bg-[#009fe3] px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-2 w-fit">
                Our Production Approach
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight max-w-lg">
                From Requirement to Finished Identification Product
              </h2>
              <p className="mt-2 text-sm text-slate-300 max-w-md">
                We use a structured approach to keep personalized and bulk projects organized.
              </p>
            </div>
          </div>

          {/* 9 steps cards */}
          <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {productionSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all duration-300 hover:border-[#009fe3]/50 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="text-7xl font-black font-mono leading-none text-[#009fe3]">
                      {step.num}
                    </span>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#009fe3]/10 text-[#009fe3] mb-4 border border-[#009fe3]/20 transition-all group-hover:bg-[#009fe3] group-hover:text-white group-hover:border-transparent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-extrabold text-slate-950 text-sm">
                    {step.num} — {step.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            7. QUALITY ASSURANCE (Inspection Photo & Error Checkpoints)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-24 pt-8">
          <div className="rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
            {/* QA Header with Inspection photo */}
            <div className="grid lg:grid-cols-12 gap-0 border-b border-slate-200">
              <div className="lg:col-span-7 p-8 sm:p-12 space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#009fe3]/20 bg-[#009fe3]/8 px-4 py-1.5 text-xs font-bold text-[#009fe3] uppercase tracking-wider">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Quality Assurance</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  Quality Is More Than How a Card Looks
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  For personalized identification products, physical print quality is only one part of the result. A card can look visually good and still be unusable if:
                </p>

                {/* 8 failure modes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {qualityErrors.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-xl border border-red-100 bg-red-50/80 px-3 py-2 text-xs text-slate-700"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-slate-500 pt-2 font-medium">
                  That is why our workflow gives importance to data, design, specification and approval checks.
                </p>
              </div>

              <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-0 bg-slate-100">
                <Image
                  src="/images/why-idgen-quality-inspection-light.jpg"
                  alt="Quality inspection under task lamp"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <p className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                    6 Quality Checkpoints
                  </p>
                  <p className="text-xs text-slate-200">
                    Error prevention before dispatch
                  </p>
                </div>
              </div>
            </div>

            {/* 6 Checkpoints Cards */}
            <div className="p-8 sm:p-12 space-y-8 bg-slate-50/50">
              <div>
                <h3 className="text-xl font-bold text-slate-950">
                  Our Quality Checkpoints
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Structured validation across every stage of the production lifecycle.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {qualityCheckpoints.map((qc) => {
                  const Icon = qc.icon;
                  return (
                    <div
                      key={qc.title}
                      className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition-all hover:border-[#009fe3]/40 hover:shadow-md"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#009fe3]/10 text-[#009fe3] mb-3.5 border border-[#009fe3]/20 transition-all group-hover:bg-[#009fe3] group-hover:text-white group-hover:border-transparent">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm">{qc.title}</h4>
                      <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">{qc.body}</p>
                    </div>
                  );
                })}
              </div>

              {/* Preview Box */}
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700 border border-amber-200">
                    <Eye className="h-5 w-5" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-amber-800">
                      Preview Before Production
                    </p>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      For large personalized orders, correcting a mistake after production can result in unnecessary rework. Where applicable, our workflow provides an opportunity to review names, photographs, ID numbers, classes, courses, departments, designations, other personalized information and card artwork. This is particularly valuable for large batches where one data error can affect an individual card.
                    </p>
                    <Link
                      href="/idgen-studio/"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3] hover:underline pt-1"
                    >
                      Explore IDGen Studio <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            8. IDGEN STUDIO (Clear "IDGen Studio" Software & Mockup Photo)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-24 pt-8">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <div className="grid lg:grid-cols-12">
              <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 space-y-6">
                <div>
                  <span className="inline-block rounded-full bg-[#009fe3]/10 border border-[#009fe3]/25 px-3.5 py-1 text-xs font-bold text-[#009fe3] uppercase tracking-wider mb-3">
                    IDGen Studio
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                    Connecting Digital Data With Physical Identification
                  </h2>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  IDGen Studio extends the identification workflow before physical production. Organizations can create a customized data-collection form according to their requirements and share it through a link or QR code.
                </p>

                <div>
                  <p className="text-xs font-bold text-slate-900 mb-2">A person can:</p>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {["Open", "Fill Information", "Upload Photo", "Preview ID Card", "Submit"].map((s, i, arr) => (
                      <span key={s} className="flex items-center gap-1.5">
                        <span className="rounded-full bg-[#009fe3]/10 text-[#009fe3] border border-[#009fe3]/20 px-3 py-1 text-xs font-bold">
                          {s}
                        </span>
                        {i < arr.length - 1 && <ArrowRight className="h-3 w-3 text-slate-400" />}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs text-slate-600 font-medium">
                    The organization can then review submissions through its dashboard. Authorized organization users can:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {dashboardActions.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Batch-wise callout */}
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 space-y-2">
                  <p className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                    Batch-Wise Production
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    One of the key advantages is that an organization does not necessarily have to wait for every person to complete the form before beginning production.
                  </p>
                  <p className="text-xs text-slate-700 font-medium">
                    For example: 500 Forms Completed → Approved → Batch 1 Printed — while additional people continue submitting information. Then: 400 More Completed → Approved → Batch 2 Printed.
                  </p>
                  <p className="text-xs text-slate-600">
                    This allows organizations to start distributing completed ID cards earlier instead of waiting for the entire population to complete the process.
                  </p>
                </div>

                <Link
                  href="/idgen-studio/"
                  className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3 text-sm font-bold text-white shadow-md shadow-[#009fe3]/25 transition hover:bg-[#0084be] hover:-translate-y-0.5"
                >
                  <span>Explore IDGen Studio</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-0 bg-slate-900">
                <Image
                  src="/images/why-idgen-studio-workflow-branded.jpg"
                  alt="IDGen Studio software workflow on laptop and mobile"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-slate-950/80 lg:via-transparent lg:to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider">
                    IDGen Studio Platform
                  </span>
                  <p className="text-sm font-bold text-white mt-0.5">
                    Live ID Card Preview on Submission
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            9. WHAT MAKES IDGEN DIFFERENT & ACTUAL REQUIREMENTS (Photo Showcase)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-24 pt-8">
          {/* Institutional Products Photo Banner */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-white mb-10">
            <div className="relative h-64 sm:h-80 w-full">
              <Image
                src="/images/why-idgen-institutional-grid-light.jpg"
                alt="Institutional ID cards and accessories lineup"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 sm:left-10 text-white">
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                  Tailored Configurations
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Identification Tailored for Every Sector
                </h3>
              </div>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* Left: What Makes IDGen Different */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="inline-block rounded-full bg-[#009fe3]/10 border border-[#009fe3]/25 px-3.5 py-1 text-xs font-bold text-[#009fe3] uppercase tracking-wider mb-2">
                  What Makes IDGen Different
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                  Experience + Technology + Production
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  IDGen combines three important areas.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { num: "01", title: "Identification Experience", body: "Experience dating back to 2014.", icon: Award },
                  { num: "02", title: "Digital Workflow", body: "IDGen Studio.", icon: Database },
                  { num: "03", title: "Physical Production", body: "Cards + Accessories + Customization + Assembly.", icon: Printer },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.num}
                      className="group flex gap-4 items-start rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition-all hover:border-[#009fe3]/40 hover:shadow-md"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#009fe3]/10 text-[#009fe3] border border-[#009fe3]/20 transition-all group-hover:bg-[#009fe3] group-hover:text-white group-hover:border-transparent">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 tracking-wider">
                          {item.num}
                        </p>
                        <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                        <p className="mt-1 text-xs text-slate-600">{item.body}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-xs">
                <p className="text-xs font-bold uppercase tracking-wider text-[#009fe3] mb-3">Together</p>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {["Experience", "Digital Workflow", "Production"].map((s, i, arr) => (
                    <span key={s} className="flex items-center gap-2">
                      <span className="rounded-full bg-[#009fe3]/10 text-[#009fe3] px-4 py-1 text-xs font-bold border border-[#009fe3]/25">
                        {s}
                      </span>
                      {i < arr.length - 1 && <ArrowRight className="h-3.5 w-3.5 text-slate-400" />}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-xs text-slate-500">
                  This is the foundation of the IDGen approach.
                </p>
              </div>

              {/* Honest about capabilities */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-2">
                <span className="text-xs font-bold tracking-wider text-[#009fe3] uppercase">
                  Honest About Our Capabilities
                </span>
                <h3 className="text-base font-extrabold text-slate-900">
                  Trust Requires Accurate Claims
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  IDGen does not describe every product as being manufactured 100% in-house. Production methods can vary depending on the product and project. Our role is to manage the required identity-product customization, production workflow, assembly and quality requirements according to the agreed specification.
                </p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  This allows us to communicate our capabilities accurately and transparently.
                </p>
              </div>
            </div>

            {/* Right: We Focus on the Actual Requirement */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="inline-block rounded-full bg-[#009fe3]/10 border border-[#009fe3]/25 px-3.5 py-1 text-xs font-bold text-[#009fe3] uppercase tracking-wider mb-2">
                  We Focus on the Actual Requirement
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                  Not Every Organization Needs the Same Identification Setup
                </h2>
              </div>

              <div className="space-y-3.5">
                {[
                  { label: "A school may need:", flow: ["Student ID Card", "Lanyard", "Holder"], bg: "bg-blue-50/70", border: "border-blue-200" },
                  { label: "An employee project may need:", flow: ["Employee ID Card", "Lanyard"], bg: "bg-emerald-50/70", border: "border-emerald-200" },
                  { label: "An event may need:", flow: ["Event Card", "Hook", "Lanyard"], bg: "bg-purple-50/70", border: "border-purple-200" },
                  { label: "An RFID project may need:", flow: ["RFID Card", "Required Identification Accessories"], bg: "bg-amber-50/70", border: "border-amber-200" },
                ].map(({ label, flow, bg, border }) => (
                  <div key={label} className={`rounded-2xl border ${border} ${bg} p-5 shadow-xs`}>
                    <p className="text-xs font-bold text-slate-700 mb-3">{label}</p>
                    <div className="flex flex-wrap items-center gap-2">
                      {flow.map((s, i, arr) => (
                        <span key={s} className="flex items-center gap-2">
                          <span className="rounded-xl bg-white text-slate-900 border border-slate-200 px-3 py-1.5 text-xs font-bold shadow-xs">
                            {s}
                          </span>
                          {i < arr.length - 1 && <ArrowRight className="h-3.5 w-3.5 text-slate-400" />}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                IDGen&apos;s role is to help determine the appropriate combination rather than forcing every customer into the same package.
              </p>
              <Link
                href="/services/"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3] hover:underline"
              >
                Explore Services <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            10. COMMITMENTS + WHO WE SERVE + FUTURE
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-24 pt-8">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* 8 Commitments */}
            <div className="lg:col-span-5 space-y-4">
              <SectionHead eyebrow="Our Commitment" title="What We Hold Ourselves To" />
              <div className="space-y-2.5 pt-2">
                {commitments.map(({ label, body }) => (
                  <div
                    key={label}
                    className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-xs transition-all hover:border-[#009fe3]/40 flex gap-3 items-start"
                  >
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 text-xs">{label}: </span>
                      <span className="text-xs text-slate-600">{body}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Who We Serve & Future */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <SectionHead
                  eyebrow="Who We Serve"
                  title="Organizations Across Northeast India"
                  lede="IDGen provides identification solutions for organizations including:"
                />
                <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {whoWeServe.map((org) => (
                    <div
                      key={org}
                      className="flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-white p-3.5 text-xs font-semibold text-slate-800 shadow-xs hover:border-[#009fe3]/30 transition-colors cursor-default"
                    >
                      <Building2 className="h-4 w-4 text-[#009fe3] shrink-0" />
                      <span>{org}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs text-slate-500">
                  Detailed requirements are covered on the relevant service pages rather than repeated here.
                </p>
                <Link
                  href="/services/"
                  className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#009fe3] hover:underline"
                >
                  Explore Services <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              {/* Northeast Regional Coverage & Future */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-3">
                  <div className="flex items-center gap-2">
                    <Globe2 className="h-4 w-4 text-[#009fe3]" />
                    <p className="text-xs font-bold uppercase tracking-wider text-[#009fe3]">
                      Serving Assam &amp; Northeast India
                    </p>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    IDGen is based in Guwahati, Assam and serves organizations across Assam and the wider Northeast India market.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {neStates.map((state) => (
                      <span
                        key={state}
                        className="rounded-full bg-sky-50 text-[#009fe3] border border-sky-200 px-2.5 py-1 text-[10px] font-bold"
                      >
                        {state}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-1 flex-wrap text-xs font-semibold text-[#009fe3]">
                    <Link href="/service-areas/assam/" className="hover:underline">
                      Assam →
                    </Link>
                    <Link href="/service-areas/assam/guwahati/" className="hover:underline">
                      Guwahati →
                    </Link>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#009fe3]">
                    Building IDGen for the Future
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Identification is changing. Organizations increasingly expect:
                  </p>
                  <div className="space-y-1.5">
                    {futureItems.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 pt-1 leading-relaxed">
                    IDGen is building its systems around these changing requirements. The objective is to make the entire identification process easier to manage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            11. IDGEN IN ONE SENTENCE
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-24 pt-8">
          <div className="relative overflow-hidden rounded-3xl border border-[#009fe3]/25 bg-gradient-to-br from-[#009fe3]/8 via-sky-50/60 to-white p-8 sm:p-14 text-center shadow-md">
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, #009fe3 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative z-10 max-w-3xl mx-auto space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#009fe3]/25 bg-white px-4 py-1.5 text-xs font-bold text-[#009fe3] uppercase tracking-wider shadow-xs">
                <Sparkles className="h-3.5 w-3.5" />
                <span>IDGen in One Sentence</span>
              </div>
              <blockquote className="text-base sm:text-xl font-bold text-slate-950 leading-relaxed">
                &ldquo;IDGen is an identity-solutions brand built on identification experience dating back to 2014, helping organizations across Northeast India manage personalized identification through products, digital workflows and structured production — with responsible handling of customer-provided identification data.&rdquo;
              </blockquote>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            12. FAQS
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-24 pt-8">
          <SectionHead align="center" eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mt-10 max-w-3xl mx-auto">
            <FaqList faqs={faqs} />
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            13. CLOSING CTA (Clean Light & Cyan Premium)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-24 pt-8 mb-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-14 px-6 sm:py-16 sm:px-12 lg:px-20 text-white shadow-2xl border border-slate-800">
            <div
              className="absolute inset-0 opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, #009fe3 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#009fe3] to-transparent" />
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#009fe3]/15 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold text-cyan-300 uppercase tracking-wider">
                <MessageSquare className="h-3.5 w-3.5" />
                <span>Need an Identity Solution?</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Tell Us What Your Organization Needs
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Whether you require student identification, employee cards, event badges, RFID cards, custom lanyards or a complete identification project, IDGen can help you determine the appropriate products and workflow.
              </p>

              <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 text-xs text-slate-400 font-medium max-w-2xl mx-auto">
                Requirement → Data → Design → Preview → Approval → Production → Quality Check → Dispatch
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <Link
                  href="/request-a-quote/"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/35 transition-all hover:bg-[#38bdf8] hover:shadow-xl hover:shadow-[#009fe3]/50 hover:-translate-y-0.5"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/services/"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/15 hover:-translate-y-0.5"
                >
                  <span>Explore Services</span>
                </Link>
                <Link
                  href="/idgen-studio/"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/15 hover:-translate-y-0.5"
                >
                  <span>Explore IDGen Studio</span>
                </Link>
                <Link
                  href="/contact-us/"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/15 hover:-translate-y-0.5"
                >
                  <span>Contact IDGen</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
