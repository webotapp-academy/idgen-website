import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Users,
  Factory,
  Hospital,
  HeartHandshake,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  RefreshCw,
  QrCode,
  MapPin,
  ArrowRight,
  Database,
  Layers,
  FileSpreadsheet,
  Check,
  CreditCard,
  Barcode,
  Eye,
  Sliders,
  Award,
  Clock,
  Truck,
  Briefcase,
  UserCheck,
  FileCheck,
  BadgeCheck,
  HelpCircle,
  LucideIcon
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import { EmployeeSolutionsCarousel } from "@/components/employee-id-card-printing/EmployeeSolutionsCarousel";
import { EmployeeCardAnatomy } from "@/components/employee-id-card-printing/EmployeeCardAnatomy";
import type { Faq } from "@/data/types";

export const metadata = pageMetadata({
  title: "Employee ID Card Printing | Custom Company & Staff ID Cards | IDGen",
  description:
    "Custom employee ID card printing for companies, offices, industries, hospitals and organizations. Personalized staff cards, bulk printing, QR/barcode options and complete ID card setups by IDGen.",
  path: "/employee-id-card-printing/",
});

const personalizationItems = [
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
];

const modernWorkplaceUses = [
  { title: "Employee recognition", icon: Award, desc: "Instills identity, pride, and official company affiliation for every team member." },
  { title: "Workplace identification", icon: Building2, desc: "Clear on-site visual credentialing across office floors, branches, and facilities." },
  { title: "Department identification", icon: Layers, desc: "Color-coded and role-based categorization for fast cross-functional coordination." },
  { title: "Visitor and staff differentiation", icon: UserCheck, desc: "Instantly distinguishes authorized workforce members from outside guests." },
  { title: "Internal administration", icon: FileCheck, desc: "Streamlines HR record management, payroll tracking, and equipment allocation." },
  { title: "Events and meetings", icon: Users, desc: "Professional corporate representation at conferences, trade expos, and board meets." },
  { title: "Access-related identification systems", icon: ShieldCheck, desc: "Works seamlessly with QR scanners, barcodes, and automated RFID turnstiles." },
  { title: "Organization branding", icon: Sparkles, desc: "Reinforces unified brand colors, logos, and executive corporate aesthetics." },
];

const samplePersonalizationFields = [
  { field: "Employee Name", example: "Rahul Sharma", icon: Users },
  { field: "Employee ID", example: "EMP1024", icon: CreditCard },
  { field: "Designation", example: "Sales Executive", icon: Briefcase },
  { field: "Department", example: "Sales", icon: Layers },
  { field: "Photograph", example: "Employee Photo", icon: Eye },
  { field: "Joining Date", example: "Organization-defined", icon: Clock },
  { field: "QR Code", example: "Organization-defined", icon: QrCode },
];

const onboardingSteps = [
  "Employee Data",
  "Photograph",
  "ID Card Design",
  "Preview",
  "Approval",
  "Printing",
];

const replacementReasons = [
  "Lost cards",
  "Damaged cards",
  "Employee information changes",
  "Design changes",
  "Department changes",
  "Employee designation changes",
  "Company rebranding",
  "Annual renewal",
];

const departmentsExample = [
  "Management",
  "HR",
  "Finance",
  "Sales",
  "Operations",
  "IT",
];

const bulkRequirementsList = [
  "New employee onboarding",
  "Entire workforce",
  "Multiple departments",
  "Multiple branches",
  "Annual renewal",
  "Large recruitment drives",
  "Organization-wide replacement",
];

const dataPillars = [
  "Employee ID",
  "Employee Name",
  "Designation",
  "Department",
  "Photograph",
  "Other Required Information",
];

const previewIssues = [
  "Incorrect employee name",
  "Incorrect photograph",
  "Wrong employee ID",
  "Incorrect designation",
  "Incorrect department",
  "Missing information",
  "Design errors",
];

const whoCanOrderList = [
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
];

const assamLocations = [
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
];

const whyChoosePillars = [
  {
    title: "Employee-Focused Personalization",
    desc: "Cards can be customized around employee data and organizational requirements.",
    icon: Users,
  },
  {
    title: "Structured Data Workflow",
    desc: "Employee information and photographs can be organized for personalization.",
    icon: Database,
  },
  {
    title: "Preview Before Production",
    desc: "Where applicable, important employee information can be reviewed before production.",
    icon: Eye,
  },
  {
    title: "Complete Identification Options",
    desc: "Cards can be combined with required accessories.",
    icon: Layers,
  },
  {
    title: "Bulk Capability",
    desc: "Suitable for workforce-wide and institutional requirements.",
    icon: Factory,
  },
  {
    title: "Digital Workflow",
    desc: "IDGen Studio can support suitable employee data-collection projects.",
    icon: Sparkles,
  },
];

const orderSteps = [
  { num: "01", title: "Share Your Requirement", desc: "Tell us the approximate number of employee cards and required specifications." },
  { num: "02", title: "Share Employee Data", desc: "Provide the employee information and photographs." },
  { num: "03", title: "Confirm Design", desc: "Provide your existing design or discuss the required card layout." },
  { num: "04", title: "Review", desc: "Review the required information and design where applicable." },
  { num: "05", title: "Approve", desc: "Approve the final requirements." },
  { num: "06", title: "Production", desc: "The approved order moves into production." },
  { num: "07", title: "Quality Check & Dispatch", desc: "Completed cards are checked and prepared for dispatch." },
];

const faqs: Faq[] = [
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
];

export default function EmployeeIdCardPrintingPage() {
  return (
    <div className="bg-[#f8fafc] dark:bg-[#070d18] text-slate-900 dark:text-slate-100 min-h-screen selection:bg-[#009fe3]/20 selection:text-[#009fe3] transition-colors">
      <JsonLd
        data={serviceSchema({
          name: "Employee ID Card Printing",
          description:
            "Custom employee ID card printing for companies, offices, industries, hospitals and organizations. Personalized staff cards, bulk printing, QR/barcode options and complete ID card setups by IDGen.",
          path: "/employee-id-card-printing/",
        })}
      />

      {/* ─────────────────────────────────────────────────────────────
          1. ULTRA-PREMIUM HERO SECTION (Document Copy + Height-Matched Visual)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white dark:bg-[#070d18] border-b border-slate-200/90 dark:border-slate-800/80 pt-8 pb-14 lg:pt-12 lg:pb-16 transition-colors">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgba(0,159,227,0.12),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgba(0,159,227,0.2),rgba(7,13,24,0))]" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #009fe3 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <Container className="relative z-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#009fe3]/30 bg-gradient-to-r from-[#009fe3]/10 via-sky-50 to-white dark:from-cyan-950/60 dark:via-slate-900 dark:to-slate-800 px-4 py-1.5 shadow-2xs">
                  <span className="flex h-2 w-2 rounded-full bg-[#009fe3] animate-pulse" />
                  <span className="text-xs font-black text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                    Employee ID Card Printing
                  </span>
                  <span className="h-3 w-px bg-[#009fe3]/30" />
                  <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">Corporate &amp; Staff</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[3.2rem] font-black text-slate-950 dark:text-white tracking-tight leading-[1.1]">
                  Custom Employee ID Cards for{" "}
                  <span className="bg-gradient-to-r from-[#009fe3] via-[#0284c7] to-[#0369a1] dark:from-[#38bdf8] dark:via-[#009fe3] dark:to-[#38bdf8] bg-clip-text text-transparent">
                    Companies, Offices &amp; Organizations
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  IDGen provides custom employee ID card printing for companies, offices, institutions, hospitals, industries, NGOs, organizations and other workplaces.
                </p>
              </div>

              {/* Personalization Info Card Strip */}
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/90 p-4 sm:p-5 space-y-3 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                    <span>Employee ID cards can be personalized with:</span>
                  </span>
                  <span className="text-[11px] font-bold text-[#009fe3] dark:text-cyan-400 bg-sky-50 dark:bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-sky-200/60 dark:border-cyan-800/50">
                    Custom Fields
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {personalizationItems.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 sm:px-3 py-1 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs"
                    >
                      <CheckCircle2 className="h-3 w-3 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                Whether you are onboarding new employees, replacing existing cards or producing ID cards for an entire workforce, IDGen can organize the printing requirement around your employee data and approved design.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <Link
                  href="/request-a-quote/"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#009fe3] to-[#0084be] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/25 transition-all hover:shadow-[#009fe3]/40 hover:-translate-y-0.5"
                >
                  <span>Request Employee ID Card Quote</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/id-card-printing/"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-7 py-3.5 text-sm font-bold text-slate-800 dark:text-slate-200 shadow-2xs transition-all hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 hover:bg-sky-50/40 dark:hover:bg-slate-700 hover:-translate-y-0.5"
                >
                  <span>See ID Card Printing Options</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Visual Showcase */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div className="relative rounded-[2rem] overflow-hidden border-2 border-white dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl flex-1 min-h-[380px] sm:min-h-[420px] flex flex-col">
                <div className="relative flex-1 w-full overflow-hidden bg-slate-950">
                  <Image
                    src="/images/employee-id-card-printing-idgen.jpg"
                    alt="Custom employee ID card printing for companies by IDGen"
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/20" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-bold text-white border border-white/15 shadow-md">
                      <Sparkles className="h-3 w-3 text-cyan-300 animate-pulse" />
                      <span>Corporate &amp; Staff Credentials</span>
                    </div>
                    <div className="rounded-full bg-[#009fe3] px-3 py-1 text-[11px] font-black text-white shadow-md">
                      Direct Hub
                    </div>
                  </div>

                  {/* Bottom Image Overlay Label */}
                  <div className="absolute bottom-4 left-5 right-5 text-white z-10">
                    <p className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider mb-0.5">
                      Guwahati, Assam • Direct Factory Printing
                    </p>
                    <p className="text-sm font-extrabold text-white leading-snug">
                      Custom Employee Cards + Holders + Satin Lanyards
                    </p>
                  </div>
                </div>

                {/* Sub-Card Indicators */}
                <div className="p-3 bg-white dark:bg-slate-900 grid grid-cols-2 gap-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 p-2 border border-slate-100 dark:border-slate-700/80">
                    <div className="h-7 w-7 rounded-lg bg-[#009fe3]/10 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400 flex items-center justify-center shrink-0">
                      <Briefcase className="h-4 w-4" />
                    </div>
                    <div className="truncate">
                      <p className="text-[11px] font-bold text-slate-900 dark:text-slate-100 leading-tight">Corporate Standard</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">30-Mil PVC Quality</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 p-2 border border-slate-100 dark:border-slate-700/80">
                    <div className="h-7 w-7 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <div className="truncate">
                      <p className="text-[11px] font-bold text-slate-900 dark:text-slate-100 leading-tight">Zero Errors</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">Preview &amp; Verified</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Summary Micro-Bar */}
              <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-3.5 shadow-2xs flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#009fe3]/10 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400">
                    <Database className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-slate-100">IDGen Studio HR Workflow</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">Employee Data &amp; Photo Collection</p>
                  </div>
                </div>
                <Link
                  href="/idgen-studio/"
                  className="shrink-0 text-xs font-bold text-[#009fe3] dark:text-cyan-400 hover:underline flex items-center gap-1"
                >
                  Explore <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-10">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services/" },
            { name: "Employee ID Card Printing", path: "/employee-id-card-printing/" },
          ]}
        />

        {/* ─────────────────────────────────────────────────────────────
            2. EMPLOYEE IDENTIFICATION FOR MODERN WORKPLACES
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-14 pt-4">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-3.5 py-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
              <Building2 className="h-3.5 w-3.5" />
              <span>Modern Workplaces</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
              Employee Identification for Modern Workplaces
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              An employee ID card is more than a card carrying a person&apos;s name. It can serve as a visible identification tool across the workplace.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {modernWorkplaceUses.map((use, idx) => {
              const UseIcon = use.icon;
              return (
                <div
                  key={use.title}
                  className="group rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:border-[#009fe3]/50 hover:shadow-md transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#009fe3]/10 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400 group-hover:bg-[#009fe3] group-hover:text-white transition-colors">
                      <UseIcon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-black text-slate-300 dark:text-slate-600 font-mono">
                      0{idx + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-slate-950 dark:text-white group-hover:text-[#009fe3] dark:group-hover:text-cyan-300 transition-colors">
                      {use.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      {use.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-sky-50/80 dark:bg-slate-800/80 p-4 text-center">
            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-bold">
              IDGen helps organizations create employee ID cards around their actual workplace requirements rather than using a one-size-fits-all design.
            </p>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            3. EMPLOYEE ID CARD SOLUTIONS (Interactive Carousel)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-3.5 py-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
              <Briefcase className="h-3.5 w-3.5" />
              <span>Workforce Categories</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
              Employee ID Card Solutions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              Different organizations have different workforce structures. Instead of creating separate pages for every type of employee card, this page covers the major employee-identification requirements in one place.
            </p>
          </div>

          <EmployeeSolutionsCarousel />
        </section>

        {/* ─────────────────────────────────────────────────────────────
            4. EMPLOYEE ID CARD DESIGN (Front & Back Anatomy)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-3.5 py-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
              <Sliders className="h-3.5 w-3.5" />
              <span>Card Layout</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
              Employee ID Card Design
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              A professional employee ID card should make important information easy to identify.
            </p>
          </div>

          <EmployeeCardAnatomy />

          <p className="text-xs text-center text-slate-500 dark:text-slate-400 mt-4 italic">
            The actual information depends on the organization&apos;s requirements.
          </p>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            5. EMPLOYEE ID CARD PERSONALIZATION
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-xl space-y-8">
            <div className="text-center max-w-3xl mx-auto flex flex-col items-center space-y-2 border-b border-slate-100 dark:border-slate-800 pb-6">
              <span className="inline-block rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-4 py-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                Variable Data Fields
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
                Employee ID Card Personalization
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium">
                IDGen can personalize employee cards using organization-supplied employee data. For example:
              </p>
            </div>

            {/* Table Representation */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-black uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="px-6 py-4">Field</th>
                    <th className="px-6 py-4">Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900">
                  {samplePersonalizationFields.map((row) => {
                    const RowIcon = row.icon;
                    return (
                      <tr key={row.field} className="hover:bg-sky-50/50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="px-6 py-3.5 font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                          <RowIcon className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                          <span>{row.field}</span>
                        </td>
                        <td className="px-6 py-3.5 font-medium text-slate-600 dark:text-slate-300">
                          {row.example}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-4 text-center">
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-bold">
                The actual fields can be customized according to the company&apos;s identification requirements.
              </p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            6. NEW EMPLOYEE ONBOARDING
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-white via-sky-50/20 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 p-8 sm:p-12 shadow-xl space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-block rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-4 py-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                HR Workflow
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
                New Employee Onboarding
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                Employee ID printing is often connected with employee onboarding.
              </p>
            </div>

            {/* Stepper Flow */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-2xs space-y-3">
              <p className="text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 text-center">
                A typical workflow can be:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                {onboardingSteps.map((step, idx) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="rounded-xl bg-sky-50 dark:bg-slate-800 border border-sky-200 dark:border-slate-700 px-3.5 py-1.5 text-xs font-black text-slate-900 dark:text-slate-100 shadow-2xs">
                      {step}
                    </span>
                    {idx < onboardingSteps.length - 1 && (
                      <ArrowRight className="h-3.5 w-3.5 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                    )}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium max-w-3xl mx-auto text-center">
              <p>
                This can help organizations maintain a consistent ID-card format when new employees join.
              </p>
              <p>
                For larger employee batches, organizations can also use IDGen Studio for structured data and photograph collection where applicable.
              </p>
            </div>

            <div className="flex justify-center pt-2">
              <Link
                href="/idgen-studio/"
                className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3 text-sm font-bold text-white shadow-md shadow-[#009fe3]/25 hover:bg-[#0084be] transition-all"
              >
                <span>Explore IDGen Studio</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            7. EMPLOYEE ID CARD REPLACEMENT
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-3.5 py-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Card Reissue</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
              Employee ID Card Replacement
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              Organizations may also require replacement cards because of:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {replacementReasons.map((reason) => (
              <div
                key={reason}
                className="flex items-center gap-2.5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3]/40 transition-colors"
              >
                <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                <span>{reason}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-sky-50 dark:bg-slate-800/80 p-4 text-center">
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-bold">
              The replacement requirement can be processed using the organization&apos;s approved employee information and card design.
            </p>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            8. DEPARTMENT-WISE EMPLOYEE IDENTIFICATION
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-xl space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-block rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-4 py-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                Department Categorization
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
                Department-Wise Employee Identification
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                Organizations with multiple departments can maintain a common card design while differentiating departments through approved design elements.
              </p>
            </div>

            {/* Department Example Chain */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-5 space-y-3">
              <p className="text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 text-center">
                For example:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                {departmentsExample.map((dept, idx) => (
                  <span key={dept} className="flex items-center gap-2">
                    <span className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-4 py-2 text-xs font-black text-slate-800 dark:text-slate-200 shadow-2xs">
                      {dept}
                    </span>
                    {idx < departmentsExample.length - 1 && (
                      <ArrowRight className="h-3.5 w-3.5 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                    )}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium max-w-3xl mx-auto text-center">
              <p>
                The exact approach can be defined according to the organization&apos;s internal identification requirements.
              </p>
              <p>
                This can be especially useful for larger organizations with multiple departments or locations.
              </p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            9. EMPLOYEE ID CARDS WITH DIGITAL IDENTIFICATION
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-white via-slate-50/50 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 p-8 sm:p-12 shadow-xl space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-block rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-4 py-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                Machine-Readable Technology
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
                Employee ID Cards With Digital Identification
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                Where required, employee cards can incorporate machine-readable elements such as:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 max-w-4xl mx-auto">
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 text-center space-y-2 shadow-2xs">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400 mx-auto">
                  <QrCode className="h-6 w-6" />
                </div>
                <h3 className="font-black text-slate-900 dark:text-white text-base">QR codes</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Dynamic scanner lookup</p>
              </div>

              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 text-center space-y-2 shadow-2xs">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400 mx-auto">
                  <Barcode className="h-6 w-6" />
                </div>
                <h3 className="font-black text-slate-900 dark:text-white text-base">Barcodes</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">1D Code 128 / Code 39</p>
              </div>

              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 text-center space-y-2 shadow-2xs">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400 mx-auto">
                  <CreditCard className="h-6 w-6" />
                </div>
                <h3 className="font-black text-slate-900 dark:text-white text-base">RFID technology</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">13.56 MHz &amp; 125 kHz smart chips</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-center max-w-2xl mx-auto">
              The technology selected should match the organization&apos;s intended use and compatible system.
            </p>

            <div className="flex justify-center pt-2">
              <Link
                href="/rfid-card-printing/"
                className="group inline-flex items-center gap-2 rounded-full border border-[#009fe3] text-[#009fe3] dark:text-cyan-400 px-7 py-3 text-sm font-bold bg-white dark:bg-slate-800 shadow-2xs hover:bg-[#009fe3] hover:text-white transition-all"
              >
                <span>Explore RFID Card Printing</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            10. EMPLOYEE ID CARD COMPLETE SETUP
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-xl space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-block rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-4 py-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                Complete Wearable Kit
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
                Employee ID Card Complete Setup
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                An employee identification project may require more than the printed card.
              </p>
            </div>

            {/* Complete Setup Pill */}
            <div className="max-w-2xl mx-auto rounded-2xl border border-sky-200 dark:border-slate-800 bg-sky-50/70 dark:bg-slate-800/70 p-5 text-center space-y-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 block">
                Depending on the organization&apos;s requirements, the identification setup can include:
              </span>
              <div className="rounded-xl bg-white dark:bg-slate-900 border border-sky-200/80 dark:border-slate-700 p-3 text-sm sm:text-base font-black text-slate-950 dark:text-white shadow-2xs">
                Employee ID Card + Holder + Hook + Custom Printed Lanyard
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium text-center max-w-3xl mx-auto">
              For suitable configurations, additional finishing or attachment requirements can also be included. Rather than repeating the specifications of each accessory on this page, those details are covered on their dedicated pages.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="/custom-printed-lanyard-printing/"
                className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-5 py-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 hover:border-[#009fe3] hover:text-[#009fe3] transition-colors"
              >
                <span>Explore Custom Printed Lanyards</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/id-card-holders/"
                className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-5 py-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 hover:border-[#009fe3] hover:text-[#009fe3] transition-colors"
              >
                <span>Explore ID Card Holders</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/id-card-hooks/"
                className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-5 py-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 hover:border-[#009fe3] hover:text-[#009fe3] transition-colors"
              >
                <span>Explore ID Card Hooks</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            11. EMPLOYEE ID CARD PRINTING FOR BULK REQUIREMENTS
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-xl space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-block rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-4 py-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                Bulk Production
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
                Employee ID Card Printing for Bulk Requirements
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                Companies may need employee cards for:
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
              {bulkRequirementsList.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/70 p-3.5 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="max-w-2xl mx-auto rounded-2xl border border-sky-200 dark:border-slate-800 bg-sky-50 dark:bg-slate-800 p-4 text-center space-y-1">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                For large projects, the most important factors are usually:
              </span>
              <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">
                Employee Data + Photographs + Approved Design + Quantity + Required Configuration
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-center">
              IDGen&apos;s main ID card printing service covers the broader bulk-production process.
            </p>

            <div className="flex justify-center pt-1">
              <Link
                href="/id-card-printing/"
                className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3 text-sm font-bold text-white shadow-md hover:bg-[#0084be] transition-colors"
              >
                <span>Explore ID Card Printing &amp; Bulk Orders</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            12. EMPLOYEE ID CARD DATA & PHOTO REQUIREMENTS
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-white via-sky-50/20 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 p-8 sm:p-12 shadow-xl space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-block rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-4 py-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                Data Organization
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
                Employee ID Card Data &amp; Photo Requirements
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                For personalized employee cards, customers should provide the required employee information in an organized format.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-3 shadow-2xs">
              <p className="text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 text-center">
                A typical data structure may include:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pt-1">
                {dataPillars.map((pillar) => (
                  <div
                    key={pillar}
                    className="flex items-center gap-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs"
                  >
                    <div className="h-2 w-2 rounded-full bg-[#009fe3]" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium max-w-3xl mx-auto text-center">
              <p>
                Photographs should be clearly associated with the correct employee record.
              </p>
              <p>
                For large batches, structured data preparation can help reduce personalization errors.
              </p>
            </div>

            <div className="flex justify-center pt-1">
              <Link
                href="/idgen-studio/"
                className="inline-flex items-center gap-2 rounded-full border border-[#009fe3] text-[#009fe3] dark:text-cyan-400 px-7 py-3 text-sm font-bold bg-white dark:bg-slate-800 shadow-2xs hover:bg-[#009fe3] hover:text-white transition-all"
              >
                <span>Explore IDGen Studio</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            13. EMPLOYEE ID CARD PREVIEW & APPROVAL
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-xl space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-block rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-4 py-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                Verification Before Print
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
                Employee ID Card Preview &amp; Approval
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                Before production, organizations can review the required design and employee information where applicable.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-5 space-y-3">
              <p className="text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 text-center">
                This provides an opportunity to identify issues such as:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 pt-1">
                {previewIssues.map((issue) => (
                  <div
                    key={issue}
                    className="flex items-center gap-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-3 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                    <span>{issue}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-xl mx-auto rounded-2xl border border-sky-200 dark:border-slate-800 bg-sky-50 dark:bg-slate-800 p-4 text-center">
              <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                The objective is simple: Review important information before bulk production.
              </p>
            </div>

            <div className="flex justify-center pt-1">
              <Link
                href="/why-idgen/"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#009fe3] dark:text-cyan-400 hover:underline"
              >
                <span>For the complete production and quality workflow, see Why IDGen →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            14. EMPLOYEE ID CARD PRICING
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-xl space-y-6">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-block rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-4 py-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                Transparent Pricing
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
                Employee ID Card Pricing
              </h2>
            </div>

            <div className="space-y-3 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium max-w-3xl mx-auto text-center">
              <p>
                Employee ID card pricing depends on the selected card specification, quantity, personalization requirements and other components.
              </p>
              <p>
                Instead of duplicating pricing tables across multiple service pages, IDGen maintains pricing in the central pricing system.
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                This keeps prices easier to maintain when specifications or quantities change.
              </p>
            </div>

            <div className="flex justify-center pt-2">
              <Link
                href="/pricing/"
                className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-8 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#0084be] transition-colors"
              >
                <span>View Current ID Card Pricing</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            15. WHO CAN ORDER EMPLOYEE ID CARDS?
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-3.5 py-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
              <Building2 className="h-3.5 w-3.5" />
              <span>Client Base</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
              Who Can Order Employee ID Cards?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              IDGen&apos;s employee ID card service can be used by:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {whoCanOrderList.map((client) => (
              <div
                key={client}
                className="flex items-center gap-2.5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3]/40 transition-colors"
              >
                <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                <span>{client}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-center text-slate-500 dark:text-slate-400 mt-4 italic">
            The card design and information can be adapted to the organization&apos;s requirements.
          </p>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            16. EMPLOYEE ID CARD PRINTING IN ASSAM
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-xl space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-block rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-4 py-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                Regional Hub
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
                Employee ID Card Printing in Assam
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                IDGen is based in Guwahati, Assam, serving organizations across Assam and the wider Northeast India market. Employee identification requirements can be handled for organizations in locations including:
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
              {assamLocations.map((loc) => (
                <div
                  key={loc}
                  className="flex items-center gap-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-3 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs"
                >
                  <MapPin className="h-3.5 w-3.5 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                  <span>{loc}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 text-center max-w-2xl mx-auto">
              For location-specific information, use the relevant service-area page rather than duplicating local SEO content here.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
              <Link
                href="/service-areas/assam/"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#009fe3] px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-[#0084be] transition-colors"
              >
                <span>ID Card Printing in Assam</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/service-areas/assam/guwahati/"
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-6 py-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3] hover:text-[#009fe3] transition-colors"
              >
                <span>ID Card Printing in Guwahati</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            17. WHY CHOOSE IDGEN FOR EMPLOYEE ID CARDS?
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-3.5 py-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
              <Award className="h-3.5 w-3.5" />
              <span>Core Strengths</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
              Why Choose IDGen for Employee ID Cards?
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoosePillars.map((pillar) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm space-y-3 hover:border-[#009fe3]/50 transition-all flex flex-col justify-between"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#009fe3]/10 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400">
                    <PillarIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-950 dark:text-white">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed font-medium">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center pt-8">
            <Link
              href="/why-idgen/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#009fe3] dark:text-cyan-400 hover:underline"
            >
              <span>Explore complete company capabilities on Why Choose IDGen →</span>
            </Link>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            18. HOW TO ORDER EMPLOYEE ID CARDS
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-xl space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-block rounded-full bg-[#009fe3]/10 dark:bg-cyan-950/60 border border-[#009fe3]/25 dark:border-cyan-800/50 px-4 py-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                Step-by-Step Guide
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
                How to Order Employee ID Cards
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {orderSteps.map((step) => (
                <div
                  key={step.num}
                  className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/70 p-5 space-y-2 shadow-2xs"
                >
                  <span className="font-mono text-xs font-black text-[#009fe3] dark:text-cyan-400 bg-white dark:bg-slate-900 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700">
                    {step.num}
                  </span>
                  <h3 className="font-black text-slate-950 dark:text-white text-sm pt-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center pt-2">
              <Link
                href="/request-a-quote/"
                className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-[#009fe3]/25 hover:bg-[#0084be] transition-all"
              >
                <span>Request Employee ID Card Quote</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            19. FREQUENTLY ASKED QUESTIONS
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <SectionHead
            align="center"
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            lede="Clear answers to common questions about custom employee ID card printing, customization, and bulk ordering."
          />
          <div className="mt-10 max-w-3xl mx-auto">
            <FaqList faqs={faqs} />
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            20. EMPLOYEE ID CARD PRINTING — QUICK ANSWER
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8">
          <div className="rounded-3xl border border-[#009fe3]/30 dark:border-cyan-800/50 bg-gradient-to-br from-sky-50 via-white to-sky-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="h-5 w-5 text-[#009fe3] dark:text-cyan-400" />
              <h3 className="text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                Employee ID Card Printing — Quick Answer
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
              IDGen provides customized employee ID card printing for companies, offices, industries, hospitals, institutions and organizations. Employee cards can include photographs, names, employee IDs, designations, departments, company branding and QR or barcode information. Bulk employee projects can be managed through structured data, design, preview, approval, production and quality-check workflows.
            </p>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            21. READY TO PRINT EMPLOYEE ID CARDS? (Bottom CTA Banner)
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-20 pt-8">
          <div className="rounded-[2.5rem] bg-gradient-to-r from-slate-950 via-[#004b75] to-slate-950 text-white p-8 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#009fe3]/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Ready to Print Employee ID Cards?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                Whether you are onboarding a few employees or preparing identification for an entire workforce, start with your employee data, quantity and required card format.
              </p>
            </div>

            {/* Workflow Flow Badge in CTA */}
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-4 text-xs sm:text-sm font-black text-cyan-300">
                Employee Data &rarr; Design &rarr; Preview &rarr; Approval &rarr; Production &rarr; Quality Check &rarr; Dispatch
              </div>
            </div>

            <div className="relative z-10 flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <Link
                href="/request-a-quote/"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg hover:bg-cyan-50 transition-all hover:scale-105"
              >
                <span>Request a Quote</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/pricing/"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-7 py-3.5 text-sm font-bold text-white hover:bg-white/20 transition-all"
              >
                <span>View Pricing</span>
              </Link>
              <Link
                href="/idgen-studio/"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/50 bg-cyan-950/40 text-cyan-300 px-7 py-3.5 text-sm font-bold hover:bg-cyan-900/60 transition-all"
              >
                <span>Explore IDGen Studio</span>
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
