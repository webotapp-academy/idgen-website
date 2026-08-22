import React from "react";
import Image from "next/image";
import Link from "next/link";
import { OrgApplicationsCarousel } from "@/components/id-card-printing/OrgApplicationsCarousel";
import { WorkflowCarousel } from "@/components/id-card-printing/WorkflowCarousel";
import {
  IdCard,
  GraduationCap,
  Building2,
  Ticket,
  Radio,
  Users,
  ClipboardCheck,
  Database,
  Palette,
  Eye,
  CheckCircle2,
  Printer,
  Wrench,
  Sliders,
  Truck,
  Camera,
  User,
  Hash,
  QrCode,
  Layers,
  ShieldCheck,
  RefreshCw,
  MapPin,
  Workflow,
  Zap,
  Monitor,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Package,
  Hospital,
  Factory,
  Landmark,
  Heart,
  CalendarDays,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { WorkflowSteps } from "@/components/ui/WorkflowSteps";
import { CompareTable } from "@/components/ui/CompareTable";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import type { Faq } from "@/data/types";

/* ── SEO Metadata (from document) ── */
export const metadata = pageMetadata({
  title: "ID Card Printing | Custom PVC & Bulk ID Cards | IDGen",
  description:
    "IDGen provides custom PVC ID card printing and bulk personalized ID cards for schools, colleges, companies, hospitals, institutions and events across Assam and Northeast India.",
  path: "/id-card-printing/",
});

/* ── Data Arrays (ALL from document only) ── */

const cardInfoItems = [
  "Photograph",
  "Name",
  "Identification number",
  "Organization name",
  "Department",
  "Designation",
  "Class or course",
  "Contact information",
  "QR code",
  "Barcode",
  "Other required identification information",
];

const orgTypes = [
  { icon: GraduationCap, title: "Student ID Cards", body: "For student identification in educational institutions.", href: "/student-id-card-printing/" },
  { icon: Building2, title: "Employee & Staff ID Cards", body: "For companies, offices, institutions and organizations.", href: "/employee-id-card-printing/" },
  { icon: Ticket, title: "Event Cards", body: "For conferences, exhibitions, seminars, workshops and other events.", href: "/event-card-printing/" },
  { icon: Radio, title: "RFID Cards", body: "For applications requiring compatible RFID technology.", href: "/rfid-card-printing/" },
  { icon: Users, title: "Visitor & Institutional Identification", body: "For organizations requiring visitor, contractor, member or other identification cards." },
];

const bulkProjectTypes = [
  "New academic-year ID cards",
  "Student batches",
  "Employee onboarding",
  "Staff identification",
  "University batches",
  "Institutional renewals",
  "Event participants",
  "Membership cards",
  "Visitor identification",
  "Large organizational replacement projects",
];

const workflowSteps = [
  { title: "01 — Requirement", body: "We understand: Card type, Quantity, Organization, Required information, Design requirements, Card specification, Additional requirements." },
  { title: "02 — Data Preparation", body: "For personalized orders, customer information and photographs are prepared for production. Data may be supplied by the organization or collected through IDGen Studio, where applicable." },
  { title: "03 — Design Preparation", body: "The required card artwork is prepared according to the organization's branding and specifications." },
  { title: "04 — Data & Design Preview", body: "Where applicable, the customer can review the personalized information and card design before production." },
  { title: "05 — Approval", body: "Production proceeds after the required information, artwork and specifications are approved." },
  { title: "06 — Card Printing", body: "Approved cards move into the production process." },
  { title: "07 — Quality Check", body: "Finished cards are checked against the applicable approved requirements." },
  { title: "08 — Accessories & Assembly", body: "If required, the cards can be combined with appropriate identification accessories. For example: ID Card → Holder → Hook → Lanyard." },
  { title: "09 — Packaging & Dispatch", body: "Completed orders are prepared for dispatch according to the applicable order timeline." },
];

const personalInfo = ["Name", "Photograph", "ID number", "Date of birth, where required"];
const orgInfo = ["Organization name", "Department", "Designation", "Employee number", "Student roll number", "Admission number"];
const eduInfo = ["Class", "Section", "Course", "Academic year", "Institution name"];
const digitalInfo = ["QR code", "Barcode", "Other machine-readable information where required"];

const designElements = [
  "Organization logo",
  "Brand colours",
  "Institutional colours",
  "Department colours",
  "Photograph",
  "Identification details",
  "QR codes",
  "Barcodes",
  "Security or identification elements",
  "Front and back information",
];

const studioUseCases = [
  "Student batches",
  "Employee onboarding",
  "Institutional renewals",
  "University identification",
  "Event participants",
  "Membership organizations",
];

const configRows = [
  ["Basic identification", "ID Card"],
  ["Protected card", "ID Card + Holder"],
  ["Wearable identification", "ID Card + Holder + Hook + Lanyard"],
  ["Complete wearable setup", "ID Card + Sealing + Holder + Hook + Lanyard"],
  ["RFID application", "Compatible RFID Card"],
  ["Event identification", "Event Card + required attachment configuration"],
];

const institutionTypes = [
  { icon: GraduationCap, title: "Educational Institutions", body: "Student, faculty and staff identification." },
  { icon: Building2, title: "Companies", body: "Employee and staff identification." },
  { icon: Hospital, title: "Hospitals", body: "Staff and institutional identification." },
  { icon: Factory, title: "Industries", body: "Employee and workforce identification." },
  { icon: Landmark, title: "Government Organizations", body: "Official institutional identification requirements." },
  { icon: Heart, title: "NGOs & Associations", body: "Member, staff and organizational identification." },
  { icon: CalendarDays, title: "Events", body: "Participant and event identification." },
];

const qualityChecks = [
  { title: "Data", body: "Is the information based on the approved data?" },
  { title: "Photograph", body: "Is the photograph matched with the correct record?" },
  { title: "Design", body: "Does the card follow the approved layout?" },
  { title: "Identification", body: "Are the required numbers and details present?" },
  { title: "Print", body: "Does the finished card meet the required production specification?" },
  { title: "Final Order", body: "Does the completed order correspond with the requested quantity and configuration?" },
];

const newCardTypes = ["New students", "New employees", "New members", "New staff", "New institutions", "New organizations"];
const renewalTypes = ["New academic years", "Employee renewals", "Expired cards", "Damaged cards", "Lost-card replacement", "Updated organizational information"];

const whyIdgenReasons = [
  { icon: Workflow, title: "Structured Process", body: "Requirement → Data → Design → Preview → Approval → Production → Quality Check → Dispatch" },
  { icon: Zap, title: "Bulk Capability", body: "Suitable for institutional and high-volume personalized requirements." },
  { icon: Database, title: "Data-Aware Production", body: "Personalized card production begins with organized information and photographs." },
  { icon: Eye, title: "Preview Before Production", body: "Where applicable, customers can review the design and personalized information before production." },
  { icon: Package, title: "Complete Identification Options", body: "Cards can be combined with holders, hooks, lanyards and suitable sealing configurations." },
  { icon: Monitor, title: "Digital Workflow", body: "IDGen Studio can support data collection and preview for suitable projects." },
  { icon: MapPin, title: "Guwahati-Based", body: "IDGen is based in Guwahati and serves organizations across Assam and Northeast India." },
];

const orderSteps = [
  { title: "Step 1 — Tell Us Your Requirement", body: "Tell us the card type, approximate quantity and application." },
  { title: "Step 2 — Share Data", body: "Provide the required information and photographs." },
  { title: "Step 3 — Share Design", body: "Provide your existing artwork or discuss the required design." },
  { title: "Step 4 — Review", body: "Review the applicable design and personalized information." },
  { title: "Step 5 — Approve", body: "Approve the final requirements." },
  { title: "Step 6 — Production", body: "The approved project moves into production." },
  { title: "Step 7 — Quality Check", body: "The finished cards are checked against the applicable requirements." },
  { title: "Step 8 — Dispatch", body: "The completed order is prepared and dispatched." },
];

const faqs: Faq[] = [
  { q: "What type of ID cards does IDGen print?", a: "IDGen provides customized identification cards for students, employees, staff, institutions, visitors, members, events and other organizational applications." },
  { q: "Does IDGen provide PVC ID card printing?", a: "Yes. IDGen provides customized PVC ID card printing for organizational identification requirements." },
  { q: "Does IDGen handle bulk ID card printing?", a: "Yes. Bulk and institutional ID card printing is an important part of the service, including large personalized batches." },
  { q: "Can I print photographs and names on the cards?", a: "Yes. Personalized information such as photographs, names, identification numbers and organizational details can be included according to the approved design." },
  { q: "Can I order only the ID card?", a: "Yes. Organizations can order ID cards without accessories if they already have their own holders, hooks or lanyards." },
  { q: "Can I order ID cards with lanyards?", a: "Yes. ID cards can be combined with suitable holders, hooks and custom printed lanyards." },
  { q: "Can I get a complete ID card set?", a: "Yes. Depending on the application, a complete setup can include: ID Card + Ultrasonic Sealing + Holder + Hook + Custom Printed Lanyard." },
  { q: "Can IDGen collect student or employee data?", a: "IDGen Studio can support digital data and photograph collection for suitable projects." },
  { q: "Can I check the card before printing?", a: "Where applicable, the workflow includes a preview and approval stage before production." },
  { q: "How many ID cards can IDGen print?", a: "IDGen supports high-volume production requirements. Actual capacity depends on product type, quantity, personalization, data readiness and project specifications." },
  { q: "How long does ID card printing take?", a: "The production and dispatch timeline depends on the quantity, personalization, artwork approval and project requirements. A specific timeline should be confirmed when requesting a quotation." },
];

/* ── Page Component ── */
export default function IdCardPrintingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "ID Card Printing",
          description: "Custom PVC ID card printing and bulk personalized ID cards for schools, colleges, companies, hospitals, institutions and events across Assam and Northeast India.",
          path: "/id-card-printing/",
        })}
      />

      {/* ── ULTRA-PREMIUM LIGHT HERO SECTION ── */}
      <section className="relative overflow-hidden bg-white dark:bg-[#070d18] border-b border-slate-200/90 dark:border-slate-800/80 pt-8 pb-14 lg:pt-12 lg:pb-16 transition-colors">
        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,159,227,0.08),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,159,227,0.18),rgba(255,255,255,0))] pointer-events-none" />
        <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-[#009fe3]/10 dark:bg-[#009fe3]/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-sky-400/10 dark:bg-cyan-500/10 blur-[100px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
            {/* Left Column: Eyebrow + Heading + Paragraph + Workflow Card + CTAs */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 dark:border-cyan-800/50 bg-sky-50 dark:bg-cyan-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#009fe3] dark:text-cyan-400 shadow-2xs">
                  <IdCard className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                  <span>ID Card Printing</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight text-slate-950 dark:text-white leading-[1.15]">
                  Custom PVC ID Card Printing for Organizations
                </h1>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  IDGen provides custom PVC ID card printing for schools, colleges, universities, companies, hospitals, institutions, organizations and events across Assam and Northeast India.
                </p>
              </div>

              {/* Integrated Structured Workflow Card */}
              <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/60 dark:bg-slate-900/80 p-5 shadow-xs space-y-3">
                <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                  We help organizations turn their approved information and designs into professionally personalized identification cards through a structured process:
                </p>

                {/* Workflow Chain */}
                <div className="rounded-xl border border-sky-200/90 dark:border-slate-800 bg-white dark:bg-slate-950 p-3.5 text-xs sm:text-[13px] font-bold text-slate-900 dark:text-cyan-300 tracking-wide flex flex-wrap items-center gap-x-2 gap-y-1.5 shadow-2xs">
                  <span>Requirement</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Data</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Design</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Preview</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Approval</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Printing</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Quality Check</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Dispatch</span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Whether you need a small organizational batch or a large institutional order, IDGen can help you plan the appropriate card specification, personalization and production workflow.
                </p>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <Link
                  href="/request-a-quote/"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/25 transition-all duration-300 hover:bg-[#008bc9] hover:shadow-xl hover:shadow-[#009fe3]/40 hover:-translate-y-0.5"
                >
                  <span>Request an ID Card Quote</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/pricing/"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-7 py-3.5 text-sm font-bold text-slate-800 dark:text-slate-200 shadow-2xs transition-all duration-300 hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 hover:bg-sky-50/40 dark:hover:bg-slate-700 hover:-translate-y-0.5"
                >
                  <span>View ID Card Pricing</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Single Ultra-Premium Branded Card Showcase Image Symmetrically Aligned */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative h-full min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] w-full rounded-3xl overflow-hidden border-2 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-xl group flex flex-col justify-between">
                <Image
                  src="/images/PVC-ID-Card-Printing-for-Organizations.png"
                  alt="Custom PVC ID cards printed by IDGen for organizational identification"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                {/* Subtle gradient overlay for badge readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />

                {/* Top Floating Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-cyan-300 border border-white/15 shadow-sm">
                    <Sparkles className="h-3 w-3 text-cyan-400" />
                    <span>Custom PVC Cards</span>
                  </span>
                  <span className="rounded-full bg-[#009fe3] px-3 py-1 text-xs font-black text-white shadow-md">
                    IDGen
                  </span>
                </div>

                {/* Bottom Floating Info Badge */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="rounded-2xl border border-white/15 bg-slate-950/80 backdrop-blur-md p-3.5 shadow-xl flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">Precision Personalization</p>
                      <p className="text-xs sm:text-sm font-black text-white">Full-Color PVC Identity Cards</p>
                    </div>
                    <span className="text-[10px] font-bold text-slate-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">Guwahati Central</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="pb-14 pt-4 sm:pt-6">
        {/* ── 2. CUSTOM PVC ID CARD PRINTING ── */}
        <section className="mt-0">
          <div className="w-full">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
              <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">Custom PVC ID Card Printing</p>
              <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl md:text-[1.75rem] lg:text-[2rem] xl:text-[2.15rem] leading-[1.15] tracking-tighter w-full md:whitespace-nowrap">
              A professional ID card does more than display a person's name
            </h2>
          </div>
          
          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Side: Premium Image (Nano Banana Generated) */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative mx-auto w-full">
                {/* Backlight glow */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#009fe3]/25 via-cyan-500/15 to-blue-600/20 blur-xl opacity-70" />

                {/* Card Container */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src="/images/Precision-Print-Quality-Idgen.png"
                      alt="Custom PVC ID cards printed with precision personalization by IDGen"
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    {/* Top Badge */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-xs font-bold text-cyan-300 border border-white/15 shadow-sm">
                        <Sparkles className="h-3 w-3 text-cyan-400" />
                        <span>Precision Print Quality</span>
                      </span>
                      <span className="rounded-full bg-[#009fe3] px-3 py-1 text-xs font-black text-white shadow-md">
                        IDGen
                      </span>
                    </div>

                    {/* Bottom Info Bar */}
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <div className="rounded-2xl border border-white/15 bg-slate-950/80 backdrop-blur-md p-3.5 shadow-xl flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">100% Customized</p>
                          <p className="text-xs sm:text-sm font-black text-white">Full-Color PVC Identification Cards</p>
                        </div>
                        <span className="text-[10px] font-bold text-slate-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">Guwahati</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Sleek Glassmorphic Card Container (No Blank Gaps) */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="rounded-3xl border border-sky-100 dark:border-slate-800 bg-gradient-to-br from-sky-50/60 via-white to-sky-50/30 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 p-6 sm:p-7 shadow-xl backdrop-blur-md space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 bg-sky-100/80 dark:bg-cyan-950/60 border border-sky-200 dark:border-cyan-800/50 px-3.5 py-1.5 rounded-full">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Configurable Data Fields</span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">11 Card Elements</span>
                </div>

                <p className="text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                  A professional ID card can combine the following personalized features:
                </p>

                {/* 11 Card Feature Pills Grid (11th spans full width so NO gap) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {cardInfoItems.map((item, idx) => (
                    <div
                      key={item}
                      className={`flex items-center gap-2.5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-950/90 px-3.5 py-2.5 text-xs font-bold text-slate-900 dark:text-slate-100 shadow-2xs hover:border-[#009fe3] hover:shadow-sm dark:hover:border-cyan-400 transition-all ${
                        idx === cardInfoItems.length - 1 ? "sm:col-span-2" : ""
                      }`}
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Summary Info Card */}
                <div className="rounded-2xl border border-sky-200/80 dark:border-slate-800 bg-white dark:bg-slate-950 p-4 space-y-1.5 shadow-2xs">
                  <p className="text-xs font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
                    The exact information depends on the purpose of your card.
                  </p>
                  <p className="text-xs font-bold text-slate-900 dark:text-slate-100 leading-relaxed">
                    IDGen produces customized cards according to the <span className="text-[#009fe3] dark:text-cyan-400 font-extrabold">approved design, supplied data and required specifications</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. ID CARDS FOR DIFFERENT ORGANIZATIONS (CAROUSEL) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Applications"
            title="ID Cards for Different Organizations"
            lede="The same core ID card printing service can support different identification requirements."
          />
          <div className="mt-8">
            <OrgApplicationsCarousel />
          </div>
        </section>

        {/* ── 4. BULK ID CARD PRINTING ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/40 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-xl space-y-8">
            {/* Header Block inside Section Container */}
            <div className="w-full space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">Bulk ID Card Printing</p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl lg:text-[2.15rem] leading-[1.15] tracking-tight">
                Large-Volume ID Card Printing for Institutions
              </h2>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
                IDGen supports bulk personalized ID card printing for organizations that need hundreds or thousands of cards in a single project.
              </p>
            </div>

            {/* 2-Column Balanced Cards Grid */}
            <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
              {/* Left Column: Glassmorphic Bulk Use-Cases Card (Tight Spacing, No Middle Gap) */}
              <div className="lg:col-span-6 flex flex-col justify-start rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-5 sm:p-6 shadow-md space-y-4 backdrop-blur-md">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 bg-sky-50 dark:bg-cyan-950/60 border border-sky-200/80 dark:border-cyan-800/50 px-3.5 py-1.5 rounded-full">
                    <Package className="h-3.5 w-3.5" />
                    <span>High-Volume Applications</span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">10 Project Types</span>
                </div>

                <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  Bulk projects may include:
                </p>

                {/* 10 Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {bulkProjectTypes.map((item, idx) => (
                    <div
                      key={item}
                      className={`flex items-center gap-2.5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/80 px-3.5 py-2.5 text-xs font-bold text-slate-900 dark:text-slate-100 shadow-2xs hover:border-[#009fe3] hover:bg-white dark:hover:bg-slate-900 transition-all ${
                        idx === bulkProjectTypes.length - 1 ? "sm:col-span-2" : ""
                      }`}
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Dark Guarantee Showcase Card */}
              <div className="lg:col-span-6 relative overflow-hidden rounded-2xl border border-slate-900 dark:border-slate-800 bg-slate-950 p-5 sm:p-7 text-white shadow-2xl flex flex-col justify-between space-y-5">
                {/* Decorative Ambient Background Glow */}
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#009fe3]/25 blur-3xl pointer-events-none" />
                <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />

                <div className="relative space-y-4">
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-cyan-300 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full w-fit backdrop-blur-md">
                    <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
                    <span>Institutional Consistency Standard</span>
                  </div>

                  <div className="space-y-1.5">
                    <p className="text-sm font-bold text-slate-100 leading-relaxed">
                      For bulk orders, the challenge is not simply printing a large number of cards.
                    </p>
                    <p className="text-xs font-medium text-slate-300">
                      It is maintaining consistency across:
                    </p>
                  </div>

                  {/* Factor Badges */}
                  <div className="rounded-xl border border-white/15 bg-white/10 backdrop-blur-md p-3.5 space-y-2 shadow-inner">
                    <div className="flex flex-wrap gap-1.5">
                      {["Data", "Photographs", "Design", "Identification Numbers", "Card Layout", "Production", "Quality"].map((factor) => (
                        <span key={factor} className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900/90 px-2.5 py-1.5 text-[11px] font-bold text-cyan-300 border border-cyan-500/30">
                          <Sparkles className="h-3 w-3 text-cyan-400" />
                          <span>{factor}</span>
                        </span>
                      ))}
                    </div>
                    <p className="text-[10px] font-mono text-slate-400 pt-1 border-t border-white/10">
                      Data + Photographs + Design + Identification Numbers + Card Layout + Production + Quality
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    That&apos;s why IDGen follows a structured workflow for personalized projects.
                  </p>
                </div>

                {/* Action Link Button */}
                <div className="relative pt-3 border-t border-white/10">
                  <Link
                    href="/request-a-quote/"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#009fe3] px-6 py-3 text-xs font-bold text-white shadow-lg shadow-[#009fe3]/30 transition-all duration-300 hover:bg-[#008bc9] hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <span>Request Bulk ID Card Quote</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. ONE ID CARD PRINTING WORKFLOW (INTERACTIVE 9-STAGE CAROUSEL) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Production Workflow"
            title="One ID Card Printing Workflow"
            lede="From Data to Finished Card"
          />
          <div className="mt-8">
            <WorkflowCarousel />
          </div>
        </section>

        {/* ── 6. WHAT INFORMATION CAN BE PRINTED ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-xl space-y-8">
            {/* Header Block inside Section Container */}
            <div className="w-full space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">Card Personalization</p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl lg:text-[2.15rem] leading-[1.15] tracking-tight">
                What Information Can Be Printed on an ID Card?
              </h2>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
                IDGen can personalize cards according to the customer&apos;s approved data and design. Typical information may include:
              </p>
            </div>

            {/* 4 Category Cards Grid */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
              {[
                { title: "Personal Information", items: personalInfo, icon: User, badge: "Personal Data" },
                { title: "Organizational Information", items: orgInfo, icon: Building2, badge: "Org Data" },
                { title: "Educational Information", items: eduInfo, icon: GraduationCap, badge: "Academic Data" },
                { title: "Digital Identification", items: digitalInfo, icon: QrCode, badge: "Digital Tags" },
              ].map((group) => {
                const IconComponent = group.icon;
                return (
                  <div
                    key={group.title}
                    className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-5 shadow-sm hover:shadow-xl hover:border-[#009fe3] dark:hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between group space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 dark:bg-slate-800 text-[#009fe3] dark:text-cyan-400 border border-sky-100 dark:border-slate-700 transition-colors group-hover:bg-[#009fe3] group-hover:text-white group-hover:border-[#009fe3]">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full">
                          {group.badge}
                        </span>
                      </div>

                      <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#009fe3] dark:group-hover:text-cyan-400 transition-colors">
                        {group.title}
                      </h3>

                      <ul className="space-y-1.5 pt-1">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 rounded-lg bg-slate-50/70 dark:bg-slate-950/70 px-2.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 border border-slate-100 dark:border-slate-800/80"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500">
                        {group.items.length} Field Types
                      </span>
                      <span className="text-[11px] font-bold text-[#009fe3] dark:text-cyan-400">
                        Customizable
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Highlight Notice Box */}
            <div className="rounded-2xl border border-sky-200/70 dark:border-slate-800 bg-white/90 dark:bg-slate-950 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#009fe3]/10 text-[#009fe3] dark:text-cyan-400">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                  The final card content is determined by your organization&apos;s exact requirements and specifications.
                </p>
              </div>
              <Link
                href="/request-a-quote/"
                className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-[#008bc9] hover:shadow-lg transition-all shrink-0"
              >
                <span>Request Custom Layout</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 7. ID CARD DESIGN & BRANDING ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Design & Branding"
            title="ID Card Design & Branding"
            lede="Your ID card can be designed around your organization's visual identity."
          />

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Side: Premium Branded Image */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative mx-auto w-full">
                {/* Backlight glow */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#009fe3]/25 via-cyan-500/15 to-blue-600/20 blur-xl opacity-70" />

                {/* Card Container */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src="/images/ID-Card-Design-&-Branding-Idgen.png"
                      alt="ID card design and brand-aligned visual identity customization by IDGen"
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-cyan-300 border border-white/15 shadow-sm">
                        <Palette className="h-3.5 w-3.5 text-cyan-400" />
                        <span>Visual Identity Alignment</span>
                      </span>
                      <span className="rounded-full bg-[#009fe3] px-3 py-1 text-xs font-black text-white shadow-md">
                        IDGen
                      </span>
                    </div>

                    {/* Bottom Info Bar */}
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <div className="rounded-2xl border border-white/15 bg-slate-950/80 backdrop-blur-md p-3.5 shadow-xl flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">Brand-Matched Layouts</p>
                          <p className="text-xs sm:text-sm font-black text-white">Full Front & Back Artwork</p>
                        </div>
                        <span className="text-[10px] font-bold text-slate-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">Guwahati</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Design Elements Glassmorphic Card */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="rounded-3xl border border-sky-100 dark:border-slate-800 bg-gradient-to-br from-sky-50/60 via-white to-sky-50/30 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 p-6 sm:p-7 shadow-xl backdrop-blur-md space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 bg-sky-100/80 dark:bg-cyan-950/60 border border-sky-200 dark:border-cyan-800/50 px-3.5 py-1.5 rounded-full">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Artwork Specifications</span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">10 Design Elements</span>
                </div>

                <p className="text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                  Possible design elements include:
                </p>

                {/* 10 Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {designElements.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-950/90 px-3.5 py-2.5 text-xs font-bold text-slate-900 dark:text-slate-100 shadow-2xs hover:border-[#009fe3] hover:shadow-sm dark:hover:border-cyan-400 transition-all"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Info Text Box */}
                <div className="rounded-2xl border border-sky-200/80 dark:border-slate-800 bg-white dark:bg-slate-950 p-4 space-y-2 shadow-2xs text-xs leading-relaxed">
                  <p className="text-slate-700 dark:text-slate-300">
                    For organizations with existing artwork, IDGen can work according to the <strong className="text-slate-950 dark:text-white font-bold">supplied design requirements</strong>.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 pt-1.5 border-t border-slate-100 dark:border-slate-800/80">
                    For new requirements, the design can be prepared according to the <strong className="text-[#009fe3] dark:text-cyan-400 font-bold">agreed specification</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. BULK PERSONALIZED DATA ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-xl space-y-8">
            {/* Header Block inside Section Container */}
            <div className="w-full space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">Data-Driven Production</p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl lg:text-[2.15rem] leading-[1.15] tracking-tight">
                ID Card Printing for Bulk Personalized Data
              </h2>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
                Large ID card projects require more than a card printer.
              </p>
            </div>

            {/* 2 Balanced Cards Grid */}
            <div className="grid gap-6 lg:grid-cols-12 items-stretch">
              {/* Left Card: 2,000 Card Personalization Complexity */}
              <div className="lg:col-span-6 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-5 sm:p-6 shadow-md flex flex-col justify-between space-y-5 backdrop-blur-md">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 bg-sky-50 dark:bg-cyan-950/60 border border-sky-200/80 dark:border-cyan-800/50 px-3.5 py-1.5 rounded-full">
                      <Database className="h-3.5 w-3.5" />
                      <span>Scale Complexity</span>
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">2,000+ Records</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    Consider an organization producing 2,000 personalized cards. Every card may contain a different:
                  </p>

                  {/* 5 Field Pills */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {["Name", "Photograph", "ID Number", "Department", "Designation"].map((field) => (
                      <span
                        key={field}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-3 py-1.5 text-xs font-bold text-slate-900 dark:text-slate-100 shadow-2xs"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] dark:text-cyan-400" />
                        <span>{field}</span>
                      </span>
                    ))}
                  </div>

                  <div className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/80 p-3 text-[11px] font-mono text-slate-600 dark:text-slate-400">
                    Name + Photograph + ID Number + Department + Designation
                  </div>
                </div>

                <div className="rounded-xl border border-amber-200/80 dark:border-amber-900/50 bg-amber-50/60 dark:bg-amber-950/30 p-3.5 flex items-center gap-2.5">
                  <span className="flex h-2 w-2 rounded-full bg-amber-500 shrink-0" />
                  <p className="text-xs font-semibold text-amber-900 dark:text-amber-300">
                    A single data error can affect an individual card.
                  </p>
                </div>
              </div>

              {/* Right Card: Dark Quality Integrity Workflow */}
              <div className="lg:col-span-6 relative overflow-hidden rounded-2xl border border-slate-900 dark:border-slate-800 bg-slate-950 p-5 sm:p-7 text-white shadow-2xl flex flex-col justify-between space-y-5">
                {/* Decorative Ambient Background Glow */}
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#009fe3]/25 blur-3xl pointer-events-none" />
                <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />

                <div className="relative space-y-4">
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-cyan-300 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full w-fit backdrop-blur-md">
                    <Workflow className="h-3.5 w-3.5 text-cyan-400" />
                    <span>Error-Prevention Architecture</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    For this reason, IDGen places importance on the relationship between:
                  </p>

                  {/* 5-Step Process Flow Visual */}
                  <div className="rounded-xl border border-white/15 bg-white/10 backdrop-blur-md p-3.5 space-y-2 shadow-inner">
                    <div className="flex flex-wrap items-center gap-1.5 text-xs font-bold">
                      {["Data", "Design", "Preview", "Approval", "Production"].map((step, idx) => (
                        <React.Fragment key={step}>
                          <span className="inline-flex items-center rounded-lg bg-slate-900/90 px-2.5 py-1.5 text-cyan-300 border border-cyan-500/30">
                            {step}
                          </span>
                          {idx < 4 && (
                            <span className="text-[#009fe3] dark:text-cyan-400 font-extrabold px-0.5">
                              →
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    Where applicable, personalized information can be reviewed before the production stage.
                  </p>
                </div>

                <div className="relative pt-3 border-t border-white/10">
                  <p className="text-xs font-bold text-cyan-300 leading-relaxed">
                    The objective is to identify avoidable errors before large-volume production whenever possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. IDGEN STUDIO FOR DATA COLLECTION ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-xl space-y-8">
            {/* Header Block inside Section Container */}
            <div className="w-full space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">Digital Workflow</p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl lg:text-[2.15rem] leading-[1.15] tracking-tight">
                IDGen Studio for ID Card Data Collection
              </h2>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
                Organizations that need to collect information and photographs from large numbers of people can use IDGen Studio, where applicable.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              {/* Left Side: Digital Workflow Glassmorphic Card */}
              <div className="lg:col-span-6 order-1 lg:order-1">
                <div className="rounded-3xl border border-sky-100 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-7 shadow-md space-y-5 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 bg-sky-50 dark:bg-cyan-950/60 border border-sky-200/80 dark:border-cyan-800/50 px-3.5 py-1.5 rounded-full">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>Automated Pipeline</span>
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">6 Use-Cases</span>
                  </div>

                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    The digital workflow is designed to connect the data-collection stage with ID card production.
                  </p>

                  {/* Workflow Chain Visual */}
                  <div className="rounded-2xl border border-sky-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950 p-3.5 space-y-2 shadow-2xs">
                    <div className="flex flex-wrap items-center gap-1.5 text-xs font-bold">
                      {["Data Collection", "Photograph", "Card Data", "Preview", "Approval", "Printing"].map((step, idx) => (
                        <React.Fragment key={step}>
                          <span className="inline-flex items-center rounded-lg bg-white dark:bg-slate-900 px-2.5 py-1.5 text-slate-900 dark:text-cyan-300 border border-sky-200/60 dark:border-slate-700">
                            {step}
                          </span>
                          {idx < 5 && (
                            <span className="text-[#009fe3] dark:text-cyan-400 font-extrabold px-0.5">
                              →
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 pt-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      This can be useful for:
                    </p>

                    {/* 6 Use Cases Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {studioUseCases.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2.5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/90 px-3.5 py-2.5 text-xs font-bold text-slate-900 dark:text-slate-100 shadow-2xs hover:border-[#009fe3] hover:bg-white dark:hover:bg-slate-900 hover:shadow-sm dark:hover:border-cyan-400 transition-all"
                        >
                          <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Explore IDGen Studio Link Button */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                    <Link
                      href="/idgen-studio/"
                      className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-6 py-3 text-xs font-bold text-white shadow-lg shadow-[#009fe3]/30 transition-all duration-300 hover:bg-[#008bc9] hover:shadow-xl hover:-translate-y-0.5"
                    >
                      <span>Explore IDGen Studio</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500">Digital Ingestion</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Premium Studio Platform Image */}
              <div className="lg:col-span-6 order-2 lg:order-2">
                <div className="relative mx-auto w-full">
                  {/* Backlight glow */}
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#009fe3]/25 via-cyan-500/15 to-blue-600/20 blur-xl opacity-70" />

                  {/* Card Container */}
                  <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl group">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src="/images/IDGen-Studio-for -D.png"
                        alt="IDGen Studio digital data collection platform interface for streamlined ID card printing"
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-cyan-300 border border-white/15 shadow-sm">
                          <Database className="h-3.5 w-3.5 text-cyan-400" />
                          <span>Digital Data Platform</span>
                        </span>
                        <span className="rounded-full bg-[#009fe3] px-3 py-1 text-xs font-black text-white shadow-md">
                          IDGen Studio
                        </span>
                      </div>

                      {/* Bottom Info Bar */}
                      <div className="absolute bottom-4 left-4 right-4 z-10">
                        <div className="rounded-2xl border border-white/15 bg-slate-950/80 backdrop-blur-md p-3.5 shadow-xl flex items-center justify-between">
                          <div>
                            <p className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">Automated Data Ingestion</p>
                            <p className="text-xs sm:text-sm font-black text-white">Direct Photo & Field Synchronization</p>
                          </div>
                          <span className="text-[10px] font-bold text-slate-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">Cloud Platform</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. COMPLETE IDENTIFICATION SETUP ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-xl space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">Configuration Options</p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl leading-tight tracking-tight">
                ID Card Printing + Complete Identification Setup
              </h2>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                Some organizations need only the card. Others need the entire wearable identification setup. IDGen can help coordinate the required components according to the application.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Card Only", config: "PVC ID Card", tier: 1, icon: "01" },
                { title: "Card + Holder", config: "PVC ID Card + Card Holder", tier: 2, icon: "02" },
                { title: "Wearable ID", config: "PVC ID Card + Holder + Hook + Custom Printed Lanyard", tier: 3, icon: "03" },
                { title: "Complete Identification Set", config: "PVC ID Card + Ultrasonic Sealing + Holder + Hook + Custom Printed Lanyard", tier: 4, icon: "04" },
              ].map((tier, idx) => (
                <div key={tier.title} className={`group relative rounded-2xl border p-5 shadow-md space-y-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${idx === 3 ? "border-[#009fe3]/40 bg-gradient-to-br from-sky-50 to-white dark:from-sky-950/40 dark:to-slate-900" : "border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90"}`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-black tracking-widest px-2.5 py-1 rounded-full ${idx === 3 ? "bg-[#009fe3] text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"}`}>
                      TIER {tier.icon}
                    </span>
                    {idx === 3 && <span className="text-[10px] font-black text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">Most Complete</span>}
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">{tier.title}</h3>
                    <p className="text-xs font-semibold text-[#009fe3] dark:text-cyan-400 mt-1.5 leading-relaxed">{tier.config}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 border-t border-slate-200/80 dark:border-slate-800 pt-4">
              ✦ The exact configuration depends on the type of identification required.
            </p>
          </div>
        </section>

        {/* ── 11. CHOOSING THE RIGHT CONFIGURATION ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-xl space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">Setup Guide</p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl leading-tight tracking-tight">
                Choosing the Right ID Card Configuration
              </h2>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Different organizations have different requirements.</p>
            </div>
            {/* Premium table */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-md">
              <div className="grid grid-cols-2 bg-gradient-to-r from-[#009fe3] to-sky-500 px-5 py-3.5">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-white">Requirement</span>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-white">Typical Configuration</span>
              </div>
              {configRows.map(([req, cfg], idx) => (
                <div key={req} className={`grid grid-cols-2 px-5 py-3.5 transition-colors ${idx % 2 === 0 ? "bg-white dark:bg-slate-900/90" : "bg-slate-50/80 dark:bg-slate-900/60"} hover:bg-sky-50/60 dark:hover:bg-sky-950/20`}>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 pr-4">{req}</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">{cfg}</span>
                </div>
              ))}
            </div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 border-t border-slate-200/80 dark:border-slate-800 pt-4">
              ✦ The appropriate combination should be selected according to the intended use.
            </p>
          </div>
        </section>

        {/* ── 12. ID CARD PRINTING FOR INSTITUTIONS ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-xl space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">Institutional Applications</p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl leading-tight tracking-tight">
                ID Card Printing for Institutions
              </h2>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">IDGen&apos;s ID card printing service can support organizational projects such as:</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {institutionTypes.map((inst) => (
                <div key={inst.title} className="group flex flex-col gap-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-5 shadow-md hover:border-[#009fe3]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-sky-50 dark:from-sky-950/60 dark:to-sky-900/30 border border-sky-200/60 dark:border-sky-800/40 text-[#009fe3] dark:text-cyan-400 shadow-sm group-hover:scale-110 transition-transform">
                    <inst.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">{inst.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">{inst.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 border-t border-slate-200/80 dark:border-slate-800 pt-4">
              ✦ For detailed application-specific requirements, see the relevant solution page.
            </p>
          </div>
        </section>

        {/* ── 13. WHY BULK NEEDS STRUCTURED PROCESS ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 dark:from-slate-950 dark:via-slate-900 p-6 sm:p-8 md:p-10 shadow-xl space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-cyan-400" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-cyan-400 uppercase">Bulk Process</p>
                <span className="h-px w-6 bg-cyan-400/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl leading-tight tracking-tight">
                Why Bulk ID Card Printing Needs a Structured Process
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Left: Context description */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4 backdrop-blur-sm">
                <p className="text-sm leading-relaxed text-slate-300">
                  When an organization orders a few cards, manual checking may be manageable.
                </p>
                <p className="text-sm leading-relaxed text-slate-300">
                  When the requirement becomes hundreds or thousands of personalized cards, the process becomes more complex.
                </p>
                <p className="text-sm font-bold text-white">A bulk project may involve:</p>
                <div className="grid grid-cols-2 gap-2">
                  {["Hundreds of photographs", "Hundreds of names", "Hundreds of identification numbers", "Multiple departments", "Different design requirements", "Large quantities of physical cards"].map((item) => (
                    <div key={item} className="rounded-xl border border-cyan-400/20 bg-cyan-950/30 px-3 py-2.5 text-xs font-semibold text-cyan-200 text-center">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              {/* Right: Conclusion highlight */}
              <div className="rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-950/60 to-sky-950/40 p-6 flex flex-col justify-center space-y-5 backdrop-blur-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#009fe3]/20 border border-[#009fe3]/30">
                  <Layers className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-widest text-cyan-400 mb-3">IDGen Approach</p>
                  <p className="text-base font-bold text-white leading-relaxed">
                    IDGen therefore approaches bulk printing as a{" "}
                    <span className="text-cyan-300">data + production workflow</span>, rather than simply a printing job.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Data Management", "Production Workflow", "Quality Control"].map((tag) => (
                    <span key={tag} className="rounded-full bg-white/10 border border-white/10 px-3 py-1 text-[11px] font-bold text-white">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 14. QUALITY CHECKS ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-xl space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">Quality Assurance</p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl leading-tight tracking-tight">
                ID Card Quality Checks
              </h2>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                For personalized ID cards, quality includes both the physical card and the information printed on it.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Depending on the project, checks can include:</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {qualityChecks.map((check, idx) => (
                <div key={check.title} className="group relative rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-5 shadow-md hover:border-[#009fe3]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#009fe3]/5 to-transparent rounded-bl-3xl" />
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-sky-50 dark:from-sky-950/60 dark:to-sky-900/30 border border-sky-200/60 dark:border-sky-800/40 text-[#009fe3] dark:text-cyan-400">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">{check.title}</h3>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{check.body}</p>
                </div>
              ))}
            </div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 border-t border-slate-200/80 dark:border-slate-800 pt-4">
              ✦ Where additional accessories are ordered, the applicable configuration is also checked.
            </p>
          </div>
        </section>

        {/* ── 15. NEW & RENEWAL PROJECTS ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-xl space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">Project Types</p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl leading-tight tracking-tight">
                ID Card Printing for New &amp; Renewal Projects
              </h2>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">IDGen can support both new identification projects and replacement/renewal requirements.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#009fe3]/30 dark:border-sky-800/40 bg-gradient-to-br from-sky-50 to-white dark:from-sky-950/30 dark:to-slate-900 p-6 shadow-md space-y-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#009fe3]/15 border border-[#009fe3]/25 text-[#009fe3] dark:text-cyan-400">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white">New ID Cards</h3>
                </div>
                <ul className="space-y-2.5">
                  {newCardTypes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-300/60 dark:border-slate-700/60 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 p-6 shadow-md space-y-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/15 border border-cyan-400/25 text-cyan-400">
                    <RefreshCw className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-white">Renewal Projects</h3>
                </div>
                <ul className="space-y-2.5">
                  {renewalTypes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 border-t border-slate-200/80 dark:border-slate-800 pt-4">
              ✦ The project workflow depends on the organization&apos;s requirements.
            </p>
          </div>
        </section>

        {/* ── 16. WHEN YOU NEED MORE ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-xl space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">Flexible Options</p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl leading-tight tracking-tight">
                When You Need More Than ID Card Printing
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Card Printing Only",
                  desc: "If your organization already has its own holders and lanyards, you may only need:",
                  highlight: "ID Card Printing",
                  num: "01",
                },
                {
                  title: "Complete Wearable Setup",
                  desc: "If you need a complete wearable setup, you can combine:",
                  highlight: "ID Card + Holder + Hook + Lanyard",
                  num: "02",
                },
                {
                  title: "With Ultrasonic Sealing",
                  desc: "If your configuration requires ultrasonic sealing:",
                  highlight: "ID Card + Ultrasonic Sealing + Holder + Hook + Lanyard",
                  num: "03",
                },
              ].map((item) => (
                <div key={item.title} className="group rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-5 shadow-md hover:border-[#009fe3]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black tracking-widest text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full">{item.num}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">{item.desc}</p>
                  </div>
                  <p className="text-xs font-bold text-[#009fe3] dark:text-cyan-400 bg-sky-50 dark:bg-sky-950/40 border border-sky-200/60 dark:border-sky-800/40 rounded-xl px-3 py-2">{item.highlight}</p>
                </div>
              ))}
            </div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 border-t border-slate-200/80 dark:border-slate-800 pt-4">
              ✦ This allows you to order the components you actually need rather than automatically purchasing a complete set.
            </p>
          </div>
        </section>

        {/* ── 17. ASSAM & NORTHEAST INDIA ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-[#009fe3]/30 dark:border-sky-800/40 bg-gradient-to-br from-sky-600 via-[#009fe3] to-sky-500 p-6 sm:p-8 md:p-10 shadow-2xl space-y-8 relative overflow-hidden">
            {/* Decorative background dots */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-6 right-10 h-40 w-40 rounded-full bg-white blur-3xl" />
              <div className="absolute bottom-4 left-10 h-32 w-32 rounded-full bg-white blur-2xl" />
            </div>
            <div className="relative space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-white/70" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-white/80 uppercase">Service Coverage</p>
                <span className="h-px w-6 bg-white/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl leading-tight tracking-tight">
                ID Card Printing Across Assam &amp; Northeast India
              </h2>
              <p className="text-sm font-medium text-sky-100 leading-relaxed max-w-2xl">
                IDGen is based in <strong className="text-white">Guwahati, Assam</strong>, and serves organizational identification requirements across Assam and the wider Northeast India market.
              </p>
            </div>
            <div className="relative">
              <p className="text-sm font-bold text-white mb-4">For location-specific information:</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/service-areas/assam/" className="group inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-white hover:text-[#009fe3] shadow-sm">
                  <MapPin className="h-3.5 w-3.5" /> ID Card Printing in Assam →
                </Link>
                <Link href="/service-areas/assam/guwahati/" className="group inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-white hover:text-[#009fe3] shadow-sm">
                  <MapPin className="h-3.5 w-3.5" /> ID Card Printing in Guwahati →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 18. WHY CHOOSE IDGEN ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-xl space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">Why IDGen</p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl leading-tight tracking-tight">
                Why Choose IDGen for ID Card Printing?
              </h2>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">IDGen&apos;s approach is built around the complete identification workflow.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {whyIdgenReasons.map((reason, idx) => (
                <div key={reason.title} className="group rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-5 shadow-md hover:border-[#009fe3]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-sky-50 dark:from-sky-950/60 dark:to-sky-900/30 border border-sky-200/60 dark:border-sky-800/40 text-[#009fe3] dark:text-cyan-400 shadow-sm group-hover:scale-110 transition-transform">
                    <reason.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">{reason.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-1.5">{reason.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-slate-200/80 dark:border-slate-800 pt-4">
              <Link href="/why-idgen/" className="inline-flex items-center gap-2 text-sm font-bold text-[#009fe3] dark:text-cyan-400 hover:underline group">
                Why IDGen? <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 19. HOW TO ORDER ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-xl space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">Ordering Process</p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl leading-tight tracking-tight">
                How to Order ID Cards
              </h2>
            </div>
            <WorkflowSteps steps={orderSteps} />
            <div className="border-t border-slate-200/80 dark:border-slate-800 pt-4">
              <Link href="/request-a-quote/" className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/30 transition-all duration-300 hover:bg-[#008bc9] hover:shadow-xl hover:-translate-y-0.5 group">
                Request an ID Card Quote <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 20. FAQ ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-xl space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">FAQ</p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl leading-tight tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>
            <FaqList faqs={faqs} />
          </div>
        </section>

        {/* ── 21. CLOSING CTA ── */}
        <div className="mt-16">
          <CtaBand
            title="Need ID Card Printing?"
            body="Tell us: What type of ID card do you need? How many cards do you need? Do you already have the data and design? Do you need only cards or a complete wearable ID set? IDGen can help you determine the appropriate configuration."
            links={[
              { label: "Request an ID Card Quote", href: "/request-a-quote/", primary: true },
              { label: "View ID Card Pricing", href: "/pricing/" },
              { label: "Explore Student ID Cards", href: "/student-id-card-printing/" },
              { label: "Explore Employee ID Cards", href: "/employee-id-card-printing/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
