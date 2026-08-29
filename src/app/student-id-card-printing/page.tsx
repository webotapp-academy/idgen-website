import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  School,
  BookOpen,
  Building2,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  RefreshCw,
  QrCode,
  MapPin,
  ArrowRight,
  Database,
  Layers,
  Palette,
  Package,
  FileSpreadsheet,
  Check,
  CreditCard,
  Barcode,
  Users,
  Eye,
  Sliders,
  Award,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import { StudentHeroCarousel } from "@/components/student-id-card-printing/StudentHeroCarousel";
import { StudentOrgCarousel } from "@/components/student-id-card-printing/StudentOrgCarousel";
import { StudentWorkflowCarousel } from "@/components/student-id-card-printing/StudentWorkflowCarousel";
import { StudentCardAnatomy } from "@/components/student-id-card-printing/StudentCardAnatomy";
import type { Faq } from "@/data/types";

export const metadata = pageMetadata({
  title: "Student ID Card Printing | School, College & University ID Cards | IDGen",
  description:
    "Custom student ID card printing for schools, colleges, universities and educational institutions. Bulk PVC student cards with photo, QR code, lanyard, holder and complete ID solutions.",
  path: "/student-id-card-printing/",
});

const studentCardFields = [
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
];

const frontCardFields = [
  "Institution Logo",
  "Institution Name",
  "Student Photograph",
  "Student Name",
  "Class / Course",
  "Roll Number / ID Number",
];

const backCardFields = [
  "Admission Number",
  "Academic Session",
  "Date of Birth, if required",
  "Emergency / Contact Information, if required",
  "QR Code / Barcode, if required",
  "Institution Address",
];

const designElements = [
  { name: "Institution logo", icon: Building2 },
  { name: "Brand colours", icon: Palette },
  { name: "Typography", icon: Sparkles },
  { name: "Student photograph", icon: Users },
  { name: "Academic information", icon: GraduationCap },
  { name: "QR code", icon: QrCode },
  { name: "Barcode", icon: Barcode },
  { name: "Security elements", icon: ShieldCheck },
  { name: "Front and back layout", icon: Layers },
  { name: "Lanyard branding", icon: Sliders },
];

const lanyardCustomizations = [
  "Institution logo",
  "Institution name",
  "School / college branding",
  "Brand colours",
  "Academic session",
  "Repeating artwork",
];

const studioFields = [
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
];

const bulkRequirements = [
  "New admissions",
  "Existing students",
  "Multiple classes",
  "Multiple departments",
  "Multiple campuses",
  "Annual ID renewal",
  "Replacement cards",
];

const productionScheduleFactors = [
  "Number of students",
  "Data readiness",
  "Photograph readiness",
  "Design approval",
  "Card specification",
  "Accessories",
  "Assembly requirements",
  "Quality-control requirements",
];

const replacementReasons = [
  "Lost cards",
  "Damaged cards",
  "Incorrect information",
  "Photograph changes",
  "Course changes",
  "Class changes",
  "Other institutional requirements",
];

const qrCodeApplications = [
  "Student identification",
  "Record lookup",
  "Library systems",
  "Attendance systems",
  "Verification workflows",
  "Internal institutional systems",
];

const cardApplications = [
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
];

const assamCities = [
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
];

const whyChooseReasons = [
  {
    title: "Student-Focused Workflow",
    body: "Designed around student data, photographs and personalized card production.",
    icon: GraduationCap,
  },
  {
    title: "Bulk Requirements",
    body: "Suitable for large student batches and institutional requirements.",
    icon: Layers,
  },
  {
    title: "Preview Before Production",
    body: "Where applicable, student information can be reviewed before production.",
    icon: Eye,
  },
  {
    title: "Complete Identification",
    body: "Cards can be combined with holders, hooks and custom printed lanyards.",
    icon: Package,
  },
  {
    title: "Digital Data Workflow",
    body: "IDGen Studio can support student data and photograph collection.",
    icon: Database,
  },
  {
    title: "One Identification Partner",
    body: "Institutions can coordinate cards and required accessories through one identity-focused supplier.",
    icon: ShieldCheck,
  },
];

const pricingFactors = [
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
];

const eligibleOrganizations = [
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
];

const faqs: Faq[] = [
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

export default function StudentIdCardPrintingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Student ID Card Printing",
          description:
            "Custom student ID card printing for schools, colleges, universities and educational institutions. Bulk PVC student cards with photo, QR code, lanyard, holder and complete ID solutions.",
          path: "/student-id-card-printing/",
        })}
      />
      {/* ── 1. LUXURY UNIFIED HERO SECTION (DEFAULT LIGHT THEME) ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/60 via-white to-sky-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-12 sm:py-16 text-slate-900 dark:text-white border-b border-slate-200/80 dark:border-slate-800">
        {/* Background ambient lighting */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-sky-200/40 dark:bg-[#009fe3]/15 blur-[120px]" />
          <div className="absolute top-1/2 left-0 h-[400px] w-[400px] rounded-full bg-blue-100/40 dark:bg-blue-600/10 blur-[100px]" />
        </div>

        <Container className="relative z-10 space-y-10">
          {/* Top Hero Grid: Text on Left, Big A4 Image on Right - Equal Vertical Alignment */}
          <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch">
            {/* Left Column: Heading, Lede, Stats & CTAs */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Eyebrow badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 dark:border-cyan-800/50 bg-sky-100/80 dark:bg-cyan-950/60 px-4 py-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 backdrop-blur-md shadow-xs">
                  <GraduationCap className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                  <span className="uppercase tracking-wider">Educational Credential Specialist</span>
                </div>

                {/* Main Titles */}
                <div className="space-y-2.5">
                  <h1 className="text-3xl font-black sm:text-4xl lg:text-[2.65rem] leading-[1.12] tracking-tight text-slate-900 dark:text-white">
                    <span>Student ID Card Printing </span>
                    <span className="bg-gradient-to-r from-[#009fe3] via-[#0284c7] to-[#0369a1] dark:from-[#38bdf8] dark:via-[#009fe3] dark:to-[#38bdf8] bg-clip-text text-transparent">
                      Services
                    </span>
                  </h1>
                  <p className="text-base sm:text-lg font-extrabold text-[#009fe3] dark:text-cyan-400">
                    Student ID Cards for Schools, Colleges, Universities &amp; Educational Institutions
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300 leading-relaxed pt-1">
                    IDGen provides custom student ID card printing for educational institutions that need personalized identification cards for students.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    From a small class batch to a large institution-wide requirement, IDGen can manage the identification workflow from student data and photographs to personalized card production and final dispatch.
                  </p>
                </div>
              </div>

              {/* 4 Stats Chips */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                {[
                  { label: "Coverage", value: "Schools & Universities" },
                  { label: "Capacity", value: "Class to Institution Scale" },
                  { label: "Workflow", value: "Data to Dispatch" },
                  { label: "Options", value: "Cards + Wearable Kits" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-3.5 shadow-2xs space-y-0.5"
                  >
                    <p className="text-[10px] font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">{stat.label}</p>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  href="/request-a-quote/"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#009fe3]/30 transition-all duration-300 hover:bg-[#008bc9] hover:shadow-xl hover:-translate-y-0.5"
                >
                  <span>Request Student ID Card Quote</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/pricing/"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3] transition-all"
                >
                  <span>View ID Card Pricing</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Dynamic Sliding Showcase Carousel */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <StudentHeroCarousel />
            </div>
          </div>

          {/* Bottom Hero Panel: 16 Student ID Card Fields */}
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 backdrop-blur-md space-y-5 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-cyan-300">
                  Student ID cards can include:
                </p>
              </div>
              <span className="text-xs font-bold text-[#009fe3] dark:text-cyan-400 bg-sky-50 dark:bg-cyan-950/60 border border-sky-200 dark:border-cyan-800/50 px-3 py-1 rounded-full">
                16 Key Identification Elements
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
              {studentCardFields.map((field) => (
                <div
                  key={field}
                  className="flex items-center gap-2.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/80 px-3.5 py-2.5 text-xs font-bold text-slate-900 dark:text-slate-100 shadow-2xs hover:border-[#009fe3] hover:bg-white dark:hover:bg-slate-900 transition-all"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                  <span>{field}</span>
                </div>
              ))}
            </div>

            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
              ✦ The exact information depends on the institution&apos;s requirements.
            </p>
          </div>
        </Container>
      </section>

      <Container className="py-16 sm:py-20 space-y-20">

        {/* ── 3. PRINTING FOR EVERY TYPE OF INSTITUTION (CAROUSEL) ── */}
        <section>
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-xl space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">Institutional Scope</p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl leading-tight tracking-tight">
                Student ID Card Printing for Every Type of Institution
              </h2>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                The same student-ID workflow can be adapted to different educational environments.
              </p>
            </div>

            <StudentOrgCarousel />

            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 border-t border-slate-200/80 dark:border-slate-800 pt-4">
              ✦ One student ID card service can therefore support multiple educational environments without creating separate duplicate service pages.
            </p>
          </div>
        </section>

        {/* ── 4. WHAT CAN BE PRINTED ON A STUDENT ID CARD? (CARD ANATOMY) ── */}
        <section>
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-xl space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">Card Anatomy</p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl leading-tight tracking-tight">
                What Can Be Printed on a Student ID Card?
              </h2>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                A student ID card should contain the information required to identify the student clearly while avoiding unnecessary information.
              </p>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider pt-2">
                A typical student card may contain:
              </p>
            </div>

            <StudentCardAnatomy />

            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 border-t border-slate-200/80 dark:border-slate-800 pt-4">
              ✦ The final layout can be customized according to the institution&apos;s approved design.
            </p>
          </div>
        </section>

        {/* ── 5. STUDENT ID CARD DESIGN & BRANDING ── */}
        <section>
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-xl space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">Custom Branding</p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl leading-tight tracking-tight">
                Student ID Card Design
              </h2>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                A student ID card can be designed around the institution&apos;s existing visual identity.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              {/* Left Side: Artwork Showcase Container with Luxury Generated Image */}
              <div className="lg:col-span-6">
                <div className="relative mx-auto w-full">
                  <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#009fe3]/25 via-sky-400/20 to-blue-600/25 blur-2xl opacity-75" />
                  <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl group">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src="/images/student-id-card-design-branding-v1.jpg"
                        alt="Custom student ID card design and branding for schools and universities by IDGen"
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                      
                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/85 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-cyan-300 border border-white/15 shadow-sm">
                          <Palette className="h-3.5 w-3.5 text-cyan-400" />
                          <span>Brand Integration</span>
                        </span>
                        <span className="rounded-full bg-[#009fe3] px-3.5 py-1 text-xs font-black text-white shadow-md">
                          600 DPI Precision
                        </span>
                      </div>

                      {/* Bottom Info Bar */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-10">
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">Artwork &amp; Production</p>
                          <p className="text-xs sm:text-sm font-black">Institutional Visual Identity</p>
                        </div>
                        <span className="text-[10px] font-extrabold bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 shadow-sm">
                          Approved Reference
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: 10 Customization Elements (Luxury Bento Grid) */}
              <div className="lg:col-span-6 space-y-4">
                <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-7 shadow-xl space-y-5 backdrop-blur-md">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                      <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                        Customization can include:
                      </p>
                    </div>
                    <span className="text-[11px] font-bold text-[#009fe3] dark:text-cyan-400 bg-sky-50 dark:bg-cyan-950/60 border border-sky-200 dark:border-cyan-800/50 px-2.5 py-0.5 rounded-full">
                      10 Elements
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {designElements.map((item, idx) => {
                      const ItemIcon = item.icon;
                      return (
                        <div
                          key={item.name}
                          className="group relative flex items-center justify-between gap-2.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-b from-white to-slate-50/60 dark:from-slate-900 dark:to-slate-950 px-3.5 py-2.5 text-xs font-bold text-slate-900 dark:text-slate-100 shadow-2xs hover:border-[#009fe3] hover:shadow-sm transition-all duration-200 hover:-translate-y-0.5"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-sky-100/80 dark:bg-cyan-950/80 text-[#009fe3] dark:text-cyan-400 border border-sky-200/70 dark:border-cyan-800/50 group-hover:bg-[#009fe3] group-hover:text-white transition-colors duration-200">
                              <ItemIcon className="h-3.5 w-3.5" />
                            </div>
                            <span className="truncate group-hover:text-[#009fe3] dark:group-hover:text-cyan-300 transition-colors">
                              {item.name}
                            </span>
                          </div>
                          <span className="text-[10px] font-black text-slate-300 dark:text-slate-700 group-hover:text-[#009fe3] shrink-0">
                            {idx < 9 ? `0${idx + 1}` : idx + 1}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex items-start gap-2.5 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0 mt-0.5" />
                    <p>
                      Where an institution already has an approved design, the existing artwork can be used as the production reference.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. PVC STUDENT ID CARDS ── */}
        <section>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-2xl space-y-8 backdrop-blur-xl">
            {/* Ambient background glow */}
            <div className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[#009fe3]/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2">
                  <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                  <p className="text-xs font-bold tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">Card Specifications</p>
                  <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
                </div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white sm:text-3xl lg:text-4xl leading-tight tracking-tight">
                  PVC Student ID Cards
                </h2>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100/80 dark:bg-cyan-950/80 border border-sky-200/70 dark:border-cyan-800/50 px-3.5 py-1 text-xs font-extrabold text-[#009fe3] dark:text-cyan-400 shadow-2xs">
                <Sparkles className="h-3.5 w-3.5" />
                Standard 30-Mil CR80 PVC
              </span>
            </div>

            {/* 3 Luxury Bento Specification Cards */}
            <div className="relative z-10 grid gap-6 md:grid-cols-3">
              {/* Card 1 */}
              <div className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-7 shadow-lg hover:shadow-xl hover:border-[#009fe3] dark:hover:border-cyan-500 transition-all duration-300 hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100/80 dark:bg-cyan-950/80 text-[#009fe3] dark:text-cyan-400 border border-sky-200/70 dark:border-cyan-800/50 group-hover:bg-[#009fe3] group-hover:text-white transition-colors shadow-2xs">
                      <CreditCard className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-black text-slate-300 dark:text-slate-700 group-hover:text-[#009fe3] transition-colors">
                      01
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                      Variable Data
                    </span>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white mt-0.5">
                      Personalized Format
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                    IDGen provides personalized PVC ID cards for student identification requirements.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-bold text-slate-400">
                  <span>Photo &amp; Text</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">100% Individualized</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-7 shadow-lg hover:shadow-xl hover:border-[#009fe3] dark:hover:border-cyan-500 transition-all duration-300 hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100/80 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-200/70 dark:border-indigo-800/50 group-hover:bg-indigo-600 group-hover:text-white transition-colors shadow-2xs">
                      <Layers className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-black text-slate-300 dark:text-slate-700 group-hover:text-indigo-500 transition-colors">
                      02
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                      High-Capacity Batches
                    </span>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white mt-0.5">
                      Standardized Batches
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                    PVC cards are suitable for organizations that need a standardized card format for large batches of students.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-bold text-slate-400">
                  <span>Batch Output</span>
                  <span className="text-indigo-600 dark:text-indigo-400">Institutional Scale</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-7 shadow-lg hover:shadow-xl hover:border-[#009fe3] dark:hover:border-cyan-500 transition-all duration-300 hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100/80 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 border border-teal-200/70 dark:border-teal-800/50 group-hover:bg-teal-600 group-hover:text-white transition-colors shadow-2xs">
                      <Sliders className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-black text-slate-300 dark:text-slate-700 group-hover:text-teal-500 transition-colors">
                      03
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-teal-600 dark:text-teal-400">
                      Tailored Finishes
                    </span>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white mt-0.5">
                      Application Selection
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                    The card specification can be selected according to the required application, design and production requirements.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-bold text-slate-400">
                  <span>Configuration</span>
                  <span className="text-teal-600 dark:text-teal-400">Full Flexibility</span>
                </div>
              </div>
            </div>

            {/* Luxury Bottom Action Strip */}
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur-md">
              <div className="flex items-start gap-3 max-w-2xl">
                <CheckCircle2 className="h-5 w-5 text-[#009fe3] dark:text-cyan-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                  For exact card specifications and current pricing, refer to the relevant product and pricing information rather than duplicating those details throughout this page.
                </p>
              </div>
              <Link
                href="/pricing/"
                className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-6 py-3 text-xs sm:text-sm font-black text-white shadow-lg shadow-[#009fe3]/25 hover:bg-[#008bc9] hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 shrink-0"
              >
                <span>View ID Card Specifications &amp; Pricing</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 7. STUDENT ID CARD PRINTING PROCESS (CAROUSEL) ── */}
        <section>
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-xl space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">Production Workflow</p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl leading-tight tracking-tight">
                Student ID Card Printing Process
              </h2>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                A large student-ID project involves much more than printing names onto cards. IDGen uses a structured workflow.
              </p>
            </div>

            <StudentWorkflowCarousel />
          </div>
        </section>

        {/* ── 8. COMPLETE IDENTIFICATION SET (TIER CARDS) ── */}
        <section>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-2xl space-y-8 backdrop-blur-xl">
            <div className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[#009fe3]/10 blur-3xl" />
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs sm:text-sm font-black tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">Assembly Options</p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white sm:text-3xl lg:text-4xl leading-tight tracking-tight">
                Student ID Card + Complete Identification Set
              </h2>
              <p className="text-base sm:text-lg font-semibold text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl">
                An institution may need more than just the PVC card. IDGen allows student identification to be configured according to the actual requirement.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  tier: "01",
                  title: "Card Only",
                  card: "Student ID Card",
                  desc: "For institutions that already have accessories.",
                  icon: CreditCard,
                },
                {
                  tier: "02",
                  title: "Card + Holder",
                  card: "Student ID Card + Holder",
                  desc: "For protected card storage.",
                  icon: ShieldCheck,
                },
                {
                  tier: "03",
                  title: "Wearable Student ID",
                  card: "Student ID Card + Holder + Hook + Custom Printed Lanyard",
                  desc: "For students who need to wear their ID card.",
                  icon: Users,
                },
                {
                  tier: "04",
                  title: "Complete Student ID Setup",
                  card: "Student ID Card + Ultrasonic Sealing + Holder + Hook + Custom Printed Lanyard",
                  desc: "Maximum security and complete institutional wearable assembly.",
                  icon: Sparkles,
                  isHighlight: true,
                },
              ].map((item) => {
                const TierIcon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`group relative rounded-2xl border p-4 sm:p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                      item.isHighlight
                        ? "border-[#009fe3] bg-gradient-to-br from-sky-50/90 via-white to-sky-100/50 dark:from-sky-950/60 dark:via-slate-900 dark:to-slate-950 shadow-sky-500/10 ring-2 ring-[#009fe3]/30"
                        : "border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 hover:border-sky-300"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                          item.isHighlight
                            ? "bg-[#009fe3] text-white shadow-md shadow-[#009fe3]/30"
                            : "bg-sky-100/80 dark:bg-cyan-950/80 text-[#009fe3] dark:text-cyan-400 border border-sky-200/70 dark:border-cyan-800/50 group-hover:bg-[#009fe3] group-hover:text-white transition-colors"
                        }`}
                      >
                        <TierIcon className="h-5 w-5" />
                      </div>
                      <span
                        className={`text-[10px] font-black tracking-widest px-2.5 py-0.5 rounded-full ${
                          item.isHighlight
                            ? "bg-[#009fe3] text-white"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                        }`}
                      >
                        TIER {item.tier}
                      </span>
                    </div>

                    {item.isHighlight && (
                      <span className="inline-block text-[10px] font-black text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider mb-1">
                        ★ Full Wearable Kit
                      </span>
                    )}
                    <h3 className="text-base font-black text-slate-900 dark:text-white leading-tight">{item.title}</h3>
                    <p className="text-xs font-extrabold text-[#009fe3] dark:text-cyan-400 mt-1.5 leading-snug">
                      {item.card}
                    </p>
                    <p className="text-xs font-semibold text-slate-600 dark:text-slate-300 leading-relaxed mt-2">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur-md">
              <div className="flex items-start gap-3 max-w-2xl">
                <CheckCircle2 className="h-5 w-5 text-[#009fe3] dark:text-cyan-400 shrink-0 mt-0.5" />
                <p className="text-sm font-bold text-slate-700 dark:text-slate-200 leading-relaxed">
                  The appropriate configuration depends on the institution&apos;s card and attachment requirements.
                </p>
              </div>
              <Link
                href="/id-card-printing/"
                className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-6 py-3 text-xs sm:text-sm font-black text-white shadow-lg shadow-[#009fe3]/25 hover:bg-[#008bc9] hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 shrink-0"
              >
                <span>Explore Complete ID Card Setup</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 9. CUSTOM STUDENT ID LANYARDS ── */}
        <section>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-2xl space-y-8 backdrop-blur-xl">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs sm:text-sm font-black tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">Branded Accessories</p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white sm:text-3xl lg:text-4xl leading-tight tracking-tight">
                Custom Student ID Lanyards
              </h2>
              <p className="text-base sm:text-lg font-semibold text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl">
                Educational institutions can also customize their lanyards with:
              </p>
            </div>

            {/* 6 Customization Bento Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {lanyardCustomizations.map((item, idx) => (
                <div
                  key={item}
                  className="group relative flex items-center justify-between gap-3.5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-[#009fe3] dark:hover:border-cyan-500 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-100/80 dark:bg-cyan-950/80 text-[#009fe3] dark:text-cyan-400 border border-sky-200/70 dark:border-cyan-800/50 group-hover:bg-[#009fe3] group-hover:text-white transition-colors">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-[#009fe3] dark:group-hover:text-cyan-300 transition-colors">
                      {item}
                    </span>
                  </div>
                  <span className="text-xs font-black text-slate-300 dark:text-slate-700 group-hover:text-[#009fe3]">
                    0{idx + 1}
                  </span>
                </div>
              ))}
            </div>

            {/* Typical Setup Chain Visual */}
            <div className="rounded-3xl border-2 border-sky-200/90 dark:border-sky-800/60 bg-gradient-to-r from-sky-50 via-white to-sky-50/70 dark:from-slate-900 dark:via-slate-900/95 dark:to-slate-950 p-6 sm:p-7 space-y-4 shadow-md">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-[#009fe3] dark:text-cyan-400" />
                <p className="text-sm font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  A typical student identification setup can therefore be:
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
                {["Student ID Card", "Holder", "Hook", "Custom Printed Lanyard"].map((step, idx) => (
                  <div
                    key={step}
                    className="flex items-center justify-between rounded-2xl bg-white dark:bg-slate-800 px-4 py-3.5 border-2 border-sky-200/80 dark:border-slate-700 shadow-sm"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#009fe3] text-white text-xs font-black">
                        {idx + 1}
                      </span>
                      <span className="text-sm font-black text-slate-900 dark:text-white">
                        {step}
                      </span>
                    </div>
                    {idx < 3 && (
                      <span className="hidden lg:block text-[#009fe3] dark:text-cyan-400 font-black text-lg">
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur-md">
              <p className="text-sm font-bold text-slate-600 dark:text-slate-300">
                ✦ The lanyard can be supplied separately or coordinated as part of the overall student identification requirement.
              </p>
              <Link
                href="/custom-printed-lanyard-printing/"
                className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-6 py-3 text-xs sm:text-sm font-black text-white shadow-lg shadow-[#009fe3]/25 hover:bg-[#008bc9] hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 shrink-0"
              >
                <span>Explore Custom Printed Lanyard Printing</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 10. STUDENT ID CARD DATA COLLECTION (IDGEN STUDIO) ── */}
        <section>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-2xl space-y-8 backdrop-blur-xl">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs sm:text-sm font-black tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">Digital Workflow</p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white sm:text-3xl lg:text-4xl leading-tight tracking-tight">
                Student ID Card Data Collection
              </h2>
              <p className="text-base sm:text-lg font-semibold text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl">
                For institutions with hundreds or thousands of students, collecting photographs and information can become one of the most time-consuming parts of the project. IDGen Studio is designed to help organize this stage.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
              {/* Left Column: Digital Workflow Info */}
              <div className="lg:col-span-7 space-y-5">
                <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-5 sm:p-6 shadow-lg space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                    <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 dark:bg-cyan-950/60 border border-sky-200/80 dark:border-cyan-800/50 px-3 py-1 text-xs font-black text-[#009fe3] dark:text-cyan-400">
                      <Sparkles className="h-3.5 w-3.5" />
                      Digital Workflow Engine
                    </span>
                    <span className="text-xs font-black text-slate-400 dark:text-slate-500">IDGen Studio Cloud</span>
                  </div>

                  {/* 6-step flow */}
                  <div className="rounded-xl border-2 border-sky-200/80 dark:border-slate-800 bg-sky-50/60 dark:bg-slate-950 p-3 space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-wider text-slate-600 dark:text-slate-400">
                      End-to-End Digital Flow:
                    </p>
                    <div className="flex flex-wrap items-center gap-1.5 text-xs font-black">
                      {["Student Registration", "Data Collection", "Photograph", "Preview", "Approval", "Printing"].map((step, idx) => (
                        <React.Fragment key={step}>
                          <span className="inline-flex items-center rounded-lg bg-white dark:bg-slate-900 px-2.5 py-1.5 text-xs text-slate-900 dark:text-cyan-300 border border-sky-200/80 dark:border-slate-700 shadow-2xs">
                            {step}
                          </span>
                          {idx < 5 && (
                            <span className="text-[#009fe3] dark:text-cyan-400 font-black text-xs">
                              →
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">
                    Depending on the project, the workflow can help organizations organize:
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    {studioFields.map((field) => (
                      <div
                        key={field}
                        className="flex items-center gap-2 rounded-lg border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/90 px-3 py-2 text-xs font-extrabold text-slate-900 dark:text-slate-100 shadow-2xs hover:border-[#009fe3] transition-all"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                        <span>{field}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm font-bold text-slate-700 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-2">
                    This creates a connection between the student information and the final personalized ID card.
                  </p>
                </div>

                <Link
                  href="/idgen-studio/"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-6 py-3 text-sm font-black text-white shadow-lg shadow-[#009fe3]/30 transition-all duration-300 hover:bg-[#008bc9] hover:shadow-xl hover:-translate-y-0.5"
                >
                  <span>Explore IDGen Studio</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Right Column: Platform Image — A4 tall */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto w-full">
                  <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#009fe3]/25 via-cyan-500/20 to-blue-600/25 blur-2xl opacity-75" />
                  <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl group">
                    <div className="relative aspect-[3/4] w-full overflow-hidden">
                      <Image
                        src="/images/student-data-collection-workflow-v1.jpg"
                        alt="Student ID card data collection workflow — tablet with data entry form and printed student ID cards with camera"
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-10">
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">Digital Ingestion</p>
                          <p className="text-xs sm:text-sm font-black">Student Data &amp; Photo Collection</p>
                        </div>
                        <span className="text-[10px] font-extrabold bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                          Cloud Platform
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 11. BULK STUDENT ID CARD PRINTING ── */}
        <section>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-2xl space-y-8 backdrop-blur-xl">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs sm:text-sm font-black tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">Batch Scale</p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white sm:text-3xl lg:text-4xl leading-tight tracking-tight">
                Bulk Student ID Card Printing
              </h2>
              <p className="text-base sm:text-lg font-semibold text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl">
                Student ID card requirements are commonly bulk projects.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* Left Box: Single institution requirements */}
              <div className="rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xl space-y-5">
                <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-400 font-black">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <p className="text-sm sm:text-base font-black uppercase tracking-wider text-slate-900 dark:text-white">
                    A single institution may require cards for:
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {bulkRequirements.map((item, idx) => (
                    <div
                      key={item}
                      className="group flex items-center justify-between gap-2.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/90 px-4 py-3 text-sm font-extrabold text-slate-900 dark:text-slate-100 shadow-2xs hover:border-[#009fe3] transition-all"
                    >
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                      <span className="text-[10px] font-black text-slate-300 dark:text-slate-700 group-hover:text-[#009fe3]">
                        0{idx + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Box: Production Schedule Factors */}
              <div className="rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xl space-y-5">
                <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-black">
                    <Sliders className="h-5 w-5" />
                  </div>
                  <p className="text-sm sm:text-base font-black uppercase tracking-wider text-slate-900 dark:text-white">
                    Production schedule depends on:
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {productionScheduleFactors.map((factor, idx) => (
                    <div
                      key={factor}
                      className="group flex items-center justify-between gap-2.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/90 px-4 py-3 text-sm font-extrabold text-slate-900 dark:text-slate-100 shadow-2xs hover:border-indigo-500 transition-all"
                    >
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                        <span>{factor}</span>
                      </div>
                      <span className="text-[10px] font-black text-slate-300 dark:text-slate-700 group-hover:text-indigo-500">
                        0{idx + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur-md">
              <p className="text-sm font-bold text-slate-700 dark:text-slate-200 max-w-2xl leading-relaxed">
                For large requirements, the most important factor is not only printing capacity but data readiness and approval speed.
              </p>
              <Link
                href="/id-card-printing/"
                className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-6 py-3 text-xs sm:text-sm font-black text-white shadow-lg shadow-[#009fe3]/25 hover:bg-[#008bc9] hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 shrink-0"
              >
                <span>Explore Bulk ID Card Printing</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 12. NEW ACADEMIC SESSIONS & REPLACEMENTS ── */}
        <section>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-2xl space-y-8 backdrop-blur-xl">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Box 1: New Academic Sessions */}
              <div className="rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xl space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2">
                    <span className="h-px w-5 bg-[#009fe3]" aria-hidden="true" />
                    <p className="text-xs sm:text-sm font-black tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">Annual Ingestion</p>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                    Student ID Cards for New Academic Sessions
                  </h3>
                  <p className="text-sm font-bold text-slate-600 dark:text-slate-300">
                    Many institutions produce new ID cards at the beginning of an academic session.
                  </p>
                </div>

                {/* Workflow chain */}
                <div className="rounded-2xl border-2 border-sky-200/80 dark:border-slate-800 bg-sky-50/60 dark:bg-slate-950 p-4 space-y-3">
                  <p className="text-xs font-black uppercase text-slate-600 dark:text-slate-400">A typical annual workflow can be:</p>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-black">
                    {["Student Admission", "Data Collection", "Photograph Collection", "Card Design", "Preview", "Approval", "Bulk Printing", "Distribution"].map((step, idx) => (
                      <React.Fragment key={step}>
                        <span className="rounded-xl bg-white dark:bg-slate-900 px-3 py-1.5 text-xs text-slate-900 dark:text-cyan-300 border border-sky-200 dark:border-slate-700 shadow-2xs">
                          {step}
                        </span>
                        {idx < 7 && <span className="text-[#009fe3] text-sm font-black">→</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">
                  <p>
                    IDGen can support this workflow for new student batches and renewal projects.
                  </p>
                  <p>
                    Institutions can also maintain a standardized design so that future academic batches can be produced using the same identification system with updated student information.
                  </p>
                </div>
              </div>

              {/* Box 2: Replacement Student ID Cards */}
              <div className="rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xl space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2">
                    <span className="h-px w-5 bg-[#009fe3]" aria-hidden="true" />
                    <p className="text-xs sm:text-sm font-black tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">Ongoing Support</p>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                    Replacement Student ID Cards
                  </h3>
                  <p className="text-sm font-bold text-slate-600 dark:text-slate-300">
                    Student cards may sometimes need replacement because of:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {replacementReasons.map((reason, idx) => (
                    <div
                      key={reason}
                      className="group flex items-center justify-between gap-2.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/90 px-4 py-3 text-xs sm:text-sm font-extrabold text-slate-900 dark:text-slate-100 shadow-2xs hover:border-[#009fe3] transition-all"
                    >
                      <div className="flex items-center gap-2.5">
                        <RefreshCw className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                        <span>{reason}</span>
                      </div>
                      <span className="text-[10px] font-black text-slate-300 dark:text-slate-700 group-hover:text-[#009fe3]">
                        0{idx + 1}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                  <p>
                    Replacement requirements can be handled according to the institution&apos;s supplied data and production specifications.
                  </p>
                  <p>
                    For replacement orders, providing the correct student information and approved design reference helps reduce avoidable errors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 13. QR CODE / BARCODE & SECURITY ACCURACY ── */}
        <section>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-2xl space-y-8 backdrop-blur-xl">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* QR Code / Barcode Card */}
              <div className="rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xl space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2">
                    <QrCode className="h-5 w-5 text-[#009fe3]" />
                    <p className="text-xs sm:text-sm font-black tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">Digital Integration</p>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                    Student ID Cards With QR Code or Barcode
                  </h3>
                  <p className="text-sm font-bold text-slate-600 dark:text-slate-300">
                    Institutions may choose to include a QR code or barcode on student cards.
                  </p>
                </div>

                <p className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Possible applications include:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {qrCodeApplications.map((app) => (
                    <div
                      key={app}
                      className="flex items-center gap-2.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/90 px-4 py-3 text-xs sm:text-sm font-extrabold text-slate-900 dark:text-slate-100 shadow-2xs hover:border-[#009fe3] transition-all"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>

                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">
                  The QR code or barcode should be generated according to the institution&apos;s required data or system specifications.
                </p>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4">
                  <p className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400 leading-relaxed">
                    For RFID requirements, use the dedicated RFID service rather than treating RFID as a standard printed-card feature.
                  </p>
                  <Link
                    href="/rfid-card-printing/"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-[#009fe3] hover:text-white text-slate-900 dark:text-slate-100 px-6 py-3 text-xs sm:text-sm font-black transition-all shadow-sm"
                  >
                    <span>Explore RFID Card Printing</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Security & Accuracy Card */}
              <div className="rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xl space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-[#009fe3]" />
                    <p className="text-xs sm:text-sm font-black tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">Quality Control</p>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                    Student ID Card Security &amp; Accuracy
                  </h3>
                  <p className="text-sm font-bold text-slate-600 dark:text-slate-300">
                    A student ID card is a personalized identification document.
                  </p>
                </div>

                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">
                  For large batches, accuracy is particularly important because even a small data error can affect an individual student&apos;s card.
                </p>

                <p className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  IDGen&apos;s workflow therefore emphasizes:
                </p>
                
                <div className="rounded-2xl border-2 border-sky-200/80 dark:border-slate-800 bg-sky-50/60 dark:bg-slate-950 p-4 space-y-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-black">
                    {["Data", "Design", "Preview", "Approval", "Production", "Quality Check"].map((step, idx) => (
                      <React.Fragment key={step}>
                        <span className="rounded-xl bg-white dark:bg-slate-900 px-3.5 py-2 text-xs sm:text-sm text-slate-900 dark:text-cyan-300 border border-sky-200 dark:border-slate-700 shadow-2xs">
                          {step}
                        </span>
                        {idx < 5 && <span className="text-[#009fe3] text-sm font-black">→</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <p className="text-sm font-bold text-slate-700 dark:text-slate-300 leading-relaxed pt-2">
                  This helps provide an opportunity to identify errors before bulk production where applicable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 14. STUDENT ID CARD APPLICATIONS ── */}
        <section>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-2xl space-y-8 backdrop-blur-xl">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs sm:text-sm font-black tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">Campus Utilities</p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white sm:text-3xl lg:text-4xl leading-tight tracking-tight">
                Student ID Card Applications
              </h2>
              <p className="text-base sm:text-lg font-semibold text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl">
                Student identification cards can be used for:
              </p>
            </div>

            {/* 10 Campus Utilities Bento Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5 sm:gap-4">
              {cardApplications.map((app, idx) => (
                <div
                  key={app}
                  className="group relative flex items-center justify-between gap-3 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-[#009fe3] dark:hover:border-cyan-500 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-sky-100/80 dark:bg-cyan-950/80 text-[#009fe3] dark:text-cyan-400 border border-sky-200/70 dark:border-cyan-800/50 group-hover:bg-[#009fe3] group-hover:text-white transition-colors">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-[#009fe3] dark:group-hover:text-cyan-300 transition-colors">
                      {app}
                    </span>
                  </div>
                  <span className="text-[10px] font-black text-slate-300 dark:text-slate-700 group-hover:text-[#009fe3] shrink-0">
                    {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-sm font-bold text-slate-600 dark:text-slate-300 border-t border-slate-200/80 dark:border-slate-800 pt-4">
              ✦ The actual use depends on the institution&apos;s policies and systems.
            </p>
          </div>
        </section>

        {/* ── 15. ASSAM & NORTHEAST INDIA COVERAGE ── */}
        <section>
          <div className="relative overflow-hidden rounded-3xl border border-[#009fe3]/40 dark:border-sky-800/50 bg-gradient-to-br from-sky-600 via-[#009fe3] to-sky-500 p-6 sm:p-8 md:p-12 shadow-2xl space-y-8 text-white">
            {/* Ambient Lighting */}
            <div className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-white/15 blur-[100px]" />

            <div className="relative z-10 space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-white/80" aria-hidden="true" />
                <p className="text-xs sm:text-sm font-black tracking-widest text-white/90 uppercase">Regional Coverage</p>
                <span className="h-px w-6 bg-white/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl leading-tight tracking-tight">
                Student ID Card Printing in Assam &amp; Northeast India
              </h2>
              <p className="text-base sm:text-lg font-semibold text-sky-100 leading-relaxed max-w-4xl">
                IDGen is based in Guwahati, Assam and serves educational organizations across Assam and the wider Northeast India market.
              </p>
            </div>

            <div className="relative z-10 space-y-4">
              <p className="text-sm font-black uppercase tracking-wider text-white">
                Student ID card requirements can be supported for institutions in locations including:
              </p>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {assamCities.map((city) => (
                  <span
                    key={city}
                    className="inline-flex items-center gap-2 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 text-sm font-extrabold text-white shadow-sm hover:bg-white hover:text-[#009fe3] transition-all cursor-default"
                  >
                    <MapPin className="h-3.5 w-3.5 text-cyan-200" />
                    <span>{city}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-5 border-t border-white/20 flex flex-wrap items-center justify-between gap-5">
              <p className="text-sm font-bold text-sky-100">
                ✦ For location-specific information, use the relevant service-area pages.
              </p>
              <div className="flex flex-wrap items-center gap-3.5">
                <Link
                  href="/service-areas/assam/"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-[#009fe3] px-6 py-3 text-xs sm:text-sm font-black shadow-lg hover:bg-sky-50 transition-all hover:-translate-y-0.5"
                >
                  <span>Student ID Card Printing in Assam</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/service-areas/assam/guwahati/"
                  className="inline-flex items-center gap-2 rounded-full bg-white/20 border border-white/40 text-white px-6 py-3 text-xs sm:text-sm font-black backdrop-blur-md hover:bg-white hover:text-[#009fe3] transition-all hover:-translate-y-0.5"
                >
                  <span>Student ID Card Printing in Guwahati</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 16. WHY CHOOSE IDGEN FOR STUDENT ID CARDS ── */}
        <section>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-2xl space-y-8 backdrop-blur-xl">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs sm:text-sm font-black tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">Institutional Value</p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white sm:text-3xl lg:text-4xl leading-tight tracking-tight">
                Why Choose IDGen for Student ID Cards?
              </h2>
              <p className="text-base sm:text-lg font-semibold text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl">
                We should not repeat the entire Why IDGen page here. Instead, this page gives only the student-specific reasons:
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {whyChooseReasons.map((reason) => (
                <div
                  key={reason.title}
                  className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-7 shadow-lg hover:border-[#009fe3] dark:hover:border-cyan-500 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 space-y-5"
                >
                  <div className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-sky-50 dark:from-sky-950/60 dark:to-sky-900/30 border border-sky-200/60 dark:border-sky-800/40 text-[#009fe3] dark:text-cyan-400 shadow-md group-hover:scale-110 transition-transform">
                      <reason.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">{reason.title}</h3>
                      <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 leading-relaxed mt-2">{reason.body}</p>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-slate-400">
                    <span>Institutional Standard</span>
                    <span className="text-[#009fe3] dark:text-cyan-400">Verified</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur-md">
              <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
                For the broader company story, manufacturing capability and quality philosophy:
              </p>
              <Link
                href="/why-idgen/"
                className="group inline-flex items-center gap-2 text-sm sm:text-base font-black text-[#009fe3] dark:text-cyan-400 hover:underline shrink-0"
              >
                <span>Why Choose IDGen?</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 17. STUDENT ID CARD PRICING ── */}
        <section>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-2xl space-y-8 backdrop-blur-xl">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs sm:text-sm font-black tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">Pricing Architecture</p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white sm:text-3xl lg:text-4xl leading-tight tracking-tight">
                Student ID Card Pricing
              </h2>
              <p className="text-base sm:text-lg font-semibold text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl">
                Rather than repeating a large pricing table here, keep this page focused on student ID card service intent. The current pricing should live on the central pricing architecture.
              </p>
            </div>

            <div className="rounded-3xl border-2 border-sky-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <p className="text-sm sm:text-base font-black uppercase tracking-wider text-slate-900 dark:text-white">
                  Pricing may depend on:
                </p>
                <span className="text-xs font-black text-[#009fe3] dark:text-cyan-400 bg-sky-50 dark:bg-cyan-950/60 border border-sky-200 dark:border-cyan-800/50 px-3 py-1 rounded-full">
                  10 Cost Factors
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {pricingFactors.map((factor, idx) => (
                  <div
                    key={factor}
                    className="group flex items-center justify-between gap-2 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/90 px-3.5 py-3 text-xs sm:text-sm font-extrabold text-slate-900 dark:text-slate-100 shadow-2xs hover:border-[#009fe3] transition-all"
                  >
                    <div className="flex items-center gap-2 truncate">
                      <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                      <span className="truncate">{factor}</span>
                    </div>
                    <span className="text-[10px] font-black text-slate-300 dark:text-slate-700 group-hover:text-[#009fe3]">
                      {idx < 9 ? `0${idx + 1}` : idx + 1}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 pt-2 leading-relaxed">
                This keeps pricing centralized and prevents conflicting prices across multiple pages.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur-md">
              <p className="text-base font-black text-slate-900 dark:text-white">
                Need the Current Price?
              </p>
              <Link
                href="/pricing/"
                className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3.5 text-xs sm:text-sm font-black text-white shadow-lg shadow-[#009fe3]/25 hover:bg-[#008bc9] hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>View Student / ID Card Pricing</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 18. WHO CAN ORDER STUDENT ID CARDS? ── */}
        <section>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-2xl space-y-8 backdrop-blur-xl">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs sm:text-sm font-black tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">Eligibility &amp; Scope</p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white sm:text-3xl lg:text-4xl leading-tight tracking-tight">
                Who Can Order Student ID Cards?
              </h2>
              <p className="text-base sm:text-lg font-semibold text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl">
                Student ID card printing can be used by:
              </p>
            </div>

            {/* 10 Eligible Organization Bento Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5 sm:gap-4">
              {eligibleOrganizations.map((org, idx) => (
                <div
                  key={org}
                  className="group relative flex items-center justify-between gap-3 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-[#009fe3] dark:hover:border-cyan-500 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-100/80 dark:bg-cyan-950/80 text-[#009fe3] dark:text-cyan-400 border border-sky-200/70 dark:border-cyan-800/50 group-hover:bg-[#009fe3] group-hover:text-white transition-colors">
                      <School className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-[#009fe3] dark:group-hover:text-cyan-300 transition-colors">
                      {org}
                    </span>
                  </div>
                  <span className="text-[10px] font-black text-slate-300 dark:text-slate-700 group-hover:text-[#009fe3] shrink-0">
                    {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 19. FREQUENTLY ASKED QUESTIONS ── */}
        <section>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-2xl space-y-8 backdrop-blur-xl">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs sm:text-sm font-black tracking-widest text-[#009fe3] dark:text-cyan-400 uppercase">FAQ</p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white sm:text-3xl lg:text-4xl leading-tight tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <FaqList faqs={faqs} />
          </div>
        </section>

        {/* ── 20. QUICK ANSWER & START YOUR PROJECT CTA ── */}
        <section className="space-y-10">
          {/* Quick Answer Banner */}
          <div className="rounded-3xl border-2 border-sky-200/90 dark:border-slate-800 bg-gradient-to-br from-sky-50/90 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 md:p-10 shadow-xl space-y-4">
            <div className="flex items-center gap-2.5">
              <Sparkles className="h-5 w-5 text-[#009fe3] dark:text-cyan-400" />
              <h3 className="text-sm font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                Quick Answer — Student ID Card Printing
              </h3>
            </div>
            <p className="text-base font-semibold text-slate-700 dark:text-slate-200 leading-relaxed">
              IDGen provides customized student ID card printing for schools, colleges, universities, coaching institutes and other educational organizations. Student cards can include photographs, names, roll numbers, admission numbers, classes, courses, departments, academic sessions, QR codes and other required information. Bulk orders can also be combined with holders, hooks, custom printed lanyards and suitable ultrasonic-sealing configurations.
            </p>
          </div>

          {/* Start Your Project CTA Band */}
          <CtaBand
            title="Start Your Student ID Card Project"
            body="You don't need to prepare the entire project before contacting us. Send us: Approximate Quantity + Institution Type + Existing Design (if available) + Student Data Format + Required Accessories. IDGen can then help determine the appropriate production configuration."
            links={[
              { label: "Request Student ID Card Quote", href: "/request-a-quote/", primary: true },
              { label: "View Pricing", href: "/pricing/" },
              { label: "Explore IDGen Studio", href: "/idgen-studio/" },
              { label: "Contact IDGen", href: "/contact/" },
            ]}
          />
        </section>
      </Container>
    </>
  );
}
