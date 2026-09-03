import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Radio,
  GraduationCap,
  Building2,
  Hospital,
  Users,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Eye,
  Settings2,
  Boxes,
  Cpu,
  MapPin,
  HelpCircle,
  FileText,
  Workflow,
  BadgeCheck,
  Layers,
  AlertTriangle,
  Send,
  Palette,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FlowChain } from "@/components/ui/FlowChain";
import { WorkflowSteps } from "@/components/ui/WorkflowSteps";
import { CompareTable } from "@/components/ui/CompareTable";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema-org";
import { RfidHeroCarousel } from "@/components/rfid-card-printing/RfidHeroCarousel";
import { pageMetadata } from "@/lib/metadata";
import type { Faq } from "@/data/types";

/* ── SEO Metadata (Strictly from document) ── */
export const metadata = pageMetadata({
  title: "RFID Card Printing | Custom RFID ID Cards for Organizations | IDGen",
  description:
    "Custom RFID card printing for schools, companies, institutions and organizations. Personalized RFID ID cards matched to compatible readers and systems, with bulk printing and accessory options.",
  path: "/rfid-card-printing/",
});

/* ── Document Data Arrays (ALL Strictly from Document) ── */

const orgTypes = [
  "Schools and educational institutions",
  "Colleges and universities",
  "Companies",
  "Corporate offices",
  "Hospitals",
  "Industries",
  "Government organizations",
  "Membership organizations",
  "Clubs and associations",
  "Other institutions",
];

const typicalCardItems = [
  "Photograph",
  "Name",
  "ID number",
  "Organization name",
  "Department / class",
  "Designation",
  "Logo",
  "QR code or barcode where required",
  "RFID component",
];

const customFields = [
  "Organization logo",
  "Organization name",
  "Cardholder photograph",
  "Name",
  "ID number",
  "Employee number",
  "Student number",
  "Department",
  "Designation",
  "Class",
  "Course",
  "Validity",
  "Contact information",
  "QR code",
  "Barcode",
  "Other approved information",
];

const compatibilityFactors = [
  "RFID frequency",
  "Chip technology",
  "Reader compatibility",
  "Existing access-control system",
  "Attendance system",
  "Software",
  "Required read range",
  "Encoding requirements",
  "Existing card infrastructure",
];

const sectorApplications = [
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    body: "Possible applications include: Student identification, Faculty identification, Staff identification, Campus access, Library systems, Attendance systems, and other compatible institutional systems.",
  },
  {
    icon: Building2,
    title: "Companies",
    body: "Possible applications include: Employee identification, Access-control systems, Attendance systems, Internal identification, Visitor-management systems, and other compatible RFID applications.",
  },
  {
    icon: Hospital,
    title: "Hospitals & Institutions",
    body: "RFID cards may be used for: Staff identification, Employee access, Visitor identification, and internal identification systems.",
  },
  {
    icon: Users,
    title: "Clubs & Membership Organizations",
    body: "RFID cards can be used where membership identification needs to work with a compatible RFID reader or system.",
  },
  {
    icon: Radio,
    title: "Events",
    body: "RFID-enabled cards may be suitable for applications where electronic identification or access is required.",
  },
];

const workflowSteps = [
  {
    title: "01 - Understand the Requirement",
    body: "We identify: Application, Quantity, Card format, Printing requirement, Existing RFID system, Reader/system compatibility, Encoding requirements, if applicable.",
  },
  {
    title: "02 - Confirm RFID Specification",
    body: "The required RFID technology is confirmed against the customer's system information, existing card or other available specifications.",
  },
  {
    title: "03 - Prepare Card Design",
    body: "The visual card design is prepared according to the organization's requirements.",
  },
  {
    title: "04 - Data Preparation",
    body: "Personalized information and photographs are organized where required.",
  },
  {
    title: "05 - Preview & Approval",
    body: "The design and relevant information are reviewed before production where applicable.",
  },
  {
    title: "06 - Production",
    body: "The approved RFID cards are produced according to the confirmed specifications.",
  },
  {
    title: "07 - Quality Check",
    body: "Cards are checked against the approved requirements and project specifications.",
  },
  {
    title: "08 - Dispatch",
    body: "Completed cards are packaged and dispatched according to the applicable order timeline.",
  },
];

const bulkSectors = [
  "Schools",
  "Colleges",
  "Universities",
  "Companies",
  "Hospitals",
  "Industries",
  "Institutions",
  "Government organizations",
  "Membership organizations",
];

const setupConfigurations = [
  {
    title: "RFID Card Only",
    badge: "Standalone Card",
    formula: ["RFID Card"],
    desc: "Direct RFID cards when existing holders and lanyards are already available.",
  },
  {
    title: "RFID Card + Holder",
    badge: "Protected Card",
    formula: ["RFID Card", "Holder"],
    desc: "RFID card paired with durable clear protective polycarbonate holder.",
  },
  {
    title: "Wearable RFID Identification",
    badge: "Complete Assembly",
    formula: ["RFID Card", "Holder", "Hook", "Custom Printed Lanyard"],
    desc: "Complete wearable institutional setup ready for daily campus or workplace tap access.",
  },
];

const existingSystemChecklist = [
  "Existing RFID card sample",
  "Reader model",
  "System details",
  "Chip/frequency information",
  "Existing card photograph",
  "Required card dimensions",
  "Required printing",
  "Required quantity",
];

const compareTableRows = [
  ["Printed identification", "Yes", "Yes"],
  ["Photograph", "Yes", "Yes"],
  ["Organization branding", "Yes", "Yes"],
  ["ID number", "Yes", "Yes"],
  ["RFID functionality", "—", "Yes"],
  ["Requires compatible RFID system", "—", "Yes"],
  ["Suitable for electronic identification", "—", "Depending on system"],
  ["Custom artwork", "Yes", "Yes"],
];

const qualityAspects = [
  {
    title: "Printed Information",
    desc: "Checking the approved visual design and personalized information.",
  },
  {
    title: "Card Specification",
    desc: "Checking the required card format and project specification.",
  },
  {
    title: "RFID Compatibility",
    desc: "Confirming that the selected RFID technology matches the customer's specified system where the required information is available.",
  },
  {
    title: "Data / Encoding",
    desc: "Where encoding is part of the project, the required data structure and encoding requirements should be confirmed before production.",
  },
  {
    title: "Final Inspection",
    desc: "Completed cards are checked according to the applicable project requirements before dispatch.",
  },
];

const whyChooseIdgen = [
  {
    icon: ShieldCheck,
    title: "Complete Identification Approach",
    body: "IDGen can provide the printed RFID card as part of a wider identification requirement.",
  },
  {
    icon: Cpu,
    title: "System-Focused Specification",
    body: "The RFID card should be matched to the customer's existing system rather than selected only by appearance.",
  },
  {
    icon: Palette,
    title: "Personalized Printing",
    body: "Cards can be customized with organization and cardholder information.",
  },
  {
    icon: Boxes,
    title: "Bulk Capability",
    body: "IDGen supports institutional and high-volume identification requirements.",
  },
  {
    icon: Workflow,
    title: "Structured Workflow",
    body: "Requirement → Specification → Design → Data → Preview → Production → Quality Check → Dispatch.",
  },
  {
    icon: Layers,
    title: "Accessories Available",
    body: "Where required, RFID cards can be combined with holders, hooks and custom printed lanyards.",
  },
  {
    icon: Eye,
    title: "Digital Data Workflow",
    body: "IDGen Studio can support suitable projects requiring structured information and photograph collection.",
  },
];

const allEligibleSectors = [
  "Schools",
  "Colleges",
  "Universities",
  "Companies",
  "Corporate offices",
  "Hospitals",
  "Industries",
  "Government organizations",
  "NGOs",
  "Clubs",
  "Associations",
  "Membership organizations",
  "Institutions",
];

const faqs: Faq[] = [
  {
    q: "What is an RFID ID card?",
    a: "An RFID ID card is a printed identification card containing an RFID component that can communicate with a compatible RFID reader or system.",
  },
  {
    q: "Can RFID cards be customized?",
    a: "Yes. RFID cards can be printed with organization branding, photographs, names, identification numbers, departments and other required information.",
  },
  {
    q: "Can an RFID card be used as an employee ID card?",
    a: "Yes, where the organization's existing employee access, attendance or identification system supports the selected RFID technology.",
  },
  {
    q: "Can students use RFID ID cards?",
    a: "Yes. Educational institutions can use RFID-enabled student cards where their existing RFID system supports the required card technology.",
  },
  {
    q: "Does every RFID card work with every RFID reader?",
    a: "No. RFID cards must be compatible with the reader and system being used. Frequency, chip technology and system specifications need to be considered.",
  },
  {
    q: "Can I send my existing RFID card?",
    a: "Yes. Providing an existing card sample can help determine the required specification for a replacement or customized card project.",
  },
  {
    q: "Can IDGen print photographs and names on RFID cards?",
    a: "Yes. RFID cards can be customized with photographs, names, ID numbers, organization branding and other approved information.",
  },
  {
    q: "Can RFID cards be supplied with lanyards?",
    a: "Yes. Depending on the requirement, RFID cards can be combined with holders, hooks and custom printed lanyards.",
  },
  {
    q: "Can IDGen handle bulk RFID card orders?",
    a: "Yes. IDGen supports bulk identification projects. The required RFID specification should be confirmed before production.",
  },
  {
    q: "Does IDGen encode RFID cards?",
    a: "Encoding requirements depend on the project and RFID system. The required encoding specification should be confirmed before quotation and production.",
  },
];

const internalLinks = [
  { topic: "General ID cards", href: "/id-card-printing/" },
  { topic: "Student application", href: "/student-id-card-printing/" },
  { topic: "Employee application", href: "/employee-id-card-printing/" },
  { topic: "Custom lanyards", href: "/custom-printed-lanyard-printing/" },
  { topic: "Card Holders", href: "/id-card-holders/" },
  { topic: "Hooks", href: "/id-card-hooks/" },
  { topic: "Data collection", href: "/idgen-studio/" },
  { topic: "Pricing", href: "/pricing/" },
  { topic: "Why IDGen", href: "/why-idgen/" },
  { topic: "Assam Services", href: "/service-areas/assam/" },
  { topic: "Guwahati Services", href: "/service-areas/assam/guwahati/" },
  { topic: "Request a Quote", href: "/request-a-quote/" },
];

export default function RfidCardPrintingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "RFID Card Printing",
          description:
            "Custom RFID card printing for schools, companies, institutions and organizations. Personalized RFID ID cards matched to compatible readers and systems, with bulk printing and accessory options.",
          path: "/rfid-card-printing/",
        })}
      />

      {/* ── 1. ULTRA-PREMIUM LIGHT/DARK HERO SECTION ── */}
      <section className="relative overflow-hidden bg-white dark:bg-[#070d18] border-b border-slate-200/90 dark:border-slate-800/80 pt-8 pb-14 lg:pt-12 lg:pb-16 transition-colors">
        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,159,227,0.08),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,159,227,0.18),rgba(255,255,255,0))] pointer-events-none" />
        <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-[#009fe3]/10 dark:bg-[#009fe3]/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-sky-400/10 dark:bg-cyan-500/10 blur-[100px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Eyebrow + Heading + Paragraph + Workflow Card + CTAs */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 dark:border-cyan-800/50 bg-sky-50 dark:bg-cyan-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#009fe3] dark:text-cyan-400 shadow-2xs">
                  <Radio className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                  <span>RFID Card Printing</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight text-slate-950 dark:text-white leading-[1.15]">
                  Customized RFID ID Cards{" "}
                  <span className="bg-gradient-to-r from-[#009fe3] via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                    for Organizations, Access &amp; Identification
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  IDGen provides customized RFID card printing for organizations that need identification cards with RFID functionality. RFID cards can combine printed visual identification with an embedded RFID component, allowing the card to be used with a compatible RFID-based system.
                </p>
              </div>

              {/* Integrated Structured Advisory Card */}
              <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/60 dark:bg-slate-900/80 p-5 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                  <ShieldCheck className="h-4 w-4" />
                  <span>System-Focused Specification</span>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                  The RFID technology and card specification should be selected according to the reader, system and application in which the card will be used:
                </p>

                {/* Workflow Chain */}
                <div className="rounded-xl border border-sky-200/90 dark:border-slate-800 bg-white dark:bg-slate-950 p-3.5 text-xs sm:text-[13px] font-bold text-slate-900 dark:text-cyan-300 tracking-wide flex flex-wrap items-center gap-x-2 gap-y-1.5 shadow-2xs">
                  <span>Requirement</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Specification</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Design</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Data</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Preview</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Production</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Quality Check</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Dispatch</span>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <Link
                  href="/request-a-quote/"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/25 transition-all duration-300 hover:bg-[#008bc9] hover:shadow-xl hover:shadow-[#009fe3]/40 hover:-translate-y-0.5"
                >
                  <span>Request an RFID Card Quote</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/id-card-printing/"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-7 py-3.5 text-sm font-bold text-slate-800 dark:text-slate-200 shadow-2xs transition-all duration-300 hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 hover:bg-sky-50/40 dark:hover:bg-slate-700 hover:-translate-y-0.5"
                >
                  <span>Explore ID Card Printing</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase (Interactive RFID Suite Carousel) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <RfidHeroCarousel />
            </div>
          </div>
        </Container>
      </section>

      <Container className="pb-14 pt-6 sm:pt-10">
        {/* ── 2. ORGANIZATIONAL SUITABILITY ── */}
        <section className="mt-0">
          <div className="w-full">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
              <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                Institutional Deployment
              </p>
              <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl md:text-[1.75rem] lg:text-[2rem] xl:text-[2.15rem] leading-[1.15] tracking-tighter w-full">
              Customized RFID cards for organizations across sectors
            </h2>
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              They can be customized for organizations such as:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {orgTypes.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 p-3 text-xs font-bold text-slate-900 dark:text-slate-100 shadow-2xs transition-all hover:border-[#009fe3]"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#009fe3] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. WHAT IS AN RFID ID CARD? & DUAL IDENTIFICATION ── */}
        <section className="mt-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left: Reader interaction photo */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto w-full">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#009fe3]/25 via-cyan-500/15 to-blue-600/20 blur-xl opacity-70" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src="/images/rfid-id-card-reader-identification.jpg"
                      alt="RFID ID card used with compatible RFID reader system"
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-xs font-bold text-cyan-300 border border-white/15 shadow-sm">
                        <Cpu className="h-3 w-3 text-cyan-400" />
                        <span>RFID Inlay</span>
                      </span>
                      <span className="rounded-full bg-[#009fe3] px-3 py-1 text-xs font-black text-white shadow-md">
                        IDGen
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <div className="rounded-2xl border border-white/15 bg-slate-950/80 backdrop-blur-md p-3.5 shadow-xl flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">
                            Reader Verification
                          </p>
                          <p className="text-xs sm:text-sm font-black text-white">
                            Contactless RFID Interaction
                          </p>
                        </div>
                        <span className="text-[10px] font-bold text-slate-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                          Tested
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Dual Identification Scope */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2">
                  <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                  <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                    Technology Concept
                  </p>
                  <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  What Is an RFID ID Card?
                </h2>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  An RFID ID card is an identification card containing an RFID component that can communicate with a compatible RFID reader. Unlike a standard printed ID card, an RFID card can provide both:
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm space-y-1.5">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                    Purpose 1
                  </span>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                    1. Identification
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    People can visually identify the cardholder from the printed information.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm space-y-1.5">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                    Purpose 2
                  </span>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                    2. RFID Interaction
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    The RFID component can interact with a compatible reader or system.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-950 p-4 space-y-2">
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  A typical card can contain:
                </p>
                <div className="flex flex-wrap gap-2">
                  {typicalCardItems.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1 rounded-lg border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="h-3 w-3 text-[#009fe3]" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 italic pt-1">
                  The exact RFID technology depends on the customer's existing system and application.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. RFID CARD APPLICATIONS (SECTORS) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Sector Applications"
            title="RFID Card Applications"
            lede="RFID cards can be used for different applications depending on the RFID technology and the customer's system."
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sectorApplications.map((app) => (
              <div
                key={app.title}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md transition-all duration-300 hover:border-[#009fe3] hover:shadow-xl"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3] dark:text-cyan-400 border border-sky-100 dark:border-cyan-800/40 shadow-xs">
                    <app.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-extrabold text-slate-900 dark:text-white text-base">
                    {app.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                    {app.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200/80 dark:border-amber-900/60 bg-amber-50/60 dark:bg-amber-950/30 p-4 text-xs text-amber-900 dark:text-amber-300 leading-relaxed flex items-start gap-2.5">
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
            <div>
              <span className="font-bold">Important: </span>
              RFID functionality depends on the card technology, reader, software and system being used. The card should therefore be matched to the customer's existing RFID infrastructure before production.
            </div>
          </div>
        </section>

        {/* ── 5. RFID TECHNOLOGY MUST MATCH YOUR SYSTEM ── */}
        <section className="mt-20">
          <div className="rounded-3xl border-2 border-sky-200 dark:border-slate-800 bg-gradient-to-br from-sky-50/70 via-white to-sky-50/30 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 p-8 sm:p-10 shadow-xl space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  Crucial Requirement
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                RFID Technology Must Match Your System
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                This is one of the most important things to understand before ordering RFID cards. <span className="font-bold text-slate-900 dark:text-white">Not every RFID card works with every RFID reader.</span>
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                The required card depends on factors such as:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {compatibilityFactors.map((factor) => (
                  <div
                    key={factor}
                    className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-950 p-3 text-xs font-bold text-slate-900 dark:text-slate-100 shadow-2xs"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#009fe3] shrink-0" />
                    <span>{factor}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-sky-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-5 space-y-3 shadow-xs">
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                Therefore, before production, customers should provide the relevant reader/card specification, existing card sample, chip details or system information, where available.
              </p>
              <p className="text-xs font-bold text-[#009fe3] dark:text-cyan-400">
                IDGen can then determine the required card specification for the project.
              </p>
            </div>
          </div>
        </section>

        {/* ── 6. RFID CARD CUSTOMIZATION & CARD ELEMENTS ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Print Customization"
            title="RFID Card Customization"
            lede="The visible side of the RFID card can be customized according to the organization's branding and identification requirements."
          />

          <div className="mt-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
              Typical information may include:
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {customFields.map((field) => (
                <div
                  key={field}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3 text-xs font-bold text-slate-800 dark:text-slate-200"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#009fe3] shrink-0" />
                  <span>{field}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 pt-2 italic">
              The final design depends on the organization's requirements.
            </p>
          </div>
        </section>

        {/* ── 7. STUDENT & EMPLOYEE DEEP DIVES ── */}
        <section className="mt-20">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Student Identification Card */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3] dark:text-cyan-400 border border-sky-100 dark:border-cyan-800/40">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  RFID Card for Student Identification
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                  Educational institutions can use RFID-enabled student cards where their existing system supports RFID.
                </p>

                <div className="pt-2">
                  <FlowChain steps={["Student Info", "Photo", "Institution Branding", "RFID"]} />
                </div>

                <div className="pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Possible applications can include compatible:
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
                    <li>• Attendance systems</li>
                    <li>• Library systems</li>
                    <li>• Access systems</li>
                    <li>• Campus identification systems</li>
                    <li>• Other institutional applications</li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                  The RFID card specification must match the institution's existing infrastructure.
                </p>
                <Link
                  href="/student-id-card-printing/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] transition hover:text-[#008bc9]"
                >
                  <span>Explore Student ID Card Printing</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Employee ID Card */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3] dark:text-cyan-400 border border-sky-100 dark:border-cyan-800/40">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  RFID Employee ID Cards
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                  Companies can use RFID-enabled employee cards where their access, attendance or identification infrastructure supports RFID.
                </p>

                <div className="pt-2">
                  <FlowChain steps={["Employee Photo", "Name", "Employee ID", "Department", "Company Branding", "RFID"]} />
                </div>

                <div className="pt-2">
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    Depending on the system, the same card may be used for compatible identification and access applications.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link
                  href="/employee-id-card-printing/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] transition hover:text-[#008bc9]"
                >
                  <span>Explore Employee ID Card Printing</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. RFID CARD PRINTING PROCESS (8 Steps) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Workflow Structure"
            title="RFID Card Printing Process"
            lede="IDGen follows a structured workflow for customized RFID card projects."
          />

          <div className="mt-8">
            <WorkflowSteps steps={workflowSteps} />
          </div>
        </section>

        {/* ── 9. RFID CARD PRINTING FOR BULK ORDERS ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="High-Volume Deployment"
            title="RFID Card Printing for Bulk Orders"
            lede="RFID projects can involve hundreds or thousands of cards. IDGen supports bulk identification requirements."
          />

          <div className="mt-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg space-y-6">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
              Bulk production for:
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {bulkSectors.map((sector) => (
                <div
                  key={sector}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3 text-xs font-bold text-slate-800 dark:text-slate-200"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#009fe3] shrink-0" />
                  <span>{sector}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                For bulk RFID projects, it is particularly important to confirm the RFID technology and system compatibility before production. Large projects can also benefit from structured data preparation and preview workflows.
              </p>
              <div>
                <Link
                  href="/id-card-printing/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] transition hover:text-[#008bc9]"
                >
                  <span>Explore Bulk ID Card Printing</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. RFID CARD + LANYARD + HOLDER ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Component Assembly"
            title="RFID Card + Lanyard + Holder"
            lede="An RFID card can be supplied as part of a larger identification setup where required."
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {setupConfigurations.map((cfg) => (
              <div
                key={cfg.title}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md transition-all duration-300 hover:border-[#009fe3] hover:shadow-xl"
              >
                <div>
                  <span className="rounded-full bg-sky-100 dark:bg-cyan-950/60 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 border border-sky-200 dark:border-cyan-800/50">
                    {cfg.badge}
                  </span>
                  <h3 className="mt-4 font-extrabold text-slate-900 dark:text-white text-lg">
                    {cfg.title}
                  </h3>
                  <div className="mt-4 pt-2">
                    <FlowChain steps={cfg.formula} />
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {cfg.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/id-card-holders/"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-5 py-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3] hover:text-[#009fe3]"
            >
              <span>Explore ID Card Holders</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/custom-printed-lanyard-printing/"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-5 py-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3] hover:text-[#009fe3]"
            >
              <span>Explore Custom Printed Lanyards</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>

        {/* ── 11. RFID CARDS FOR EXISTING SYSTEMS (CHECKLIST) ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  Compatibility Checklist
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                RFID Cards for Existing Systems
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                If an organization already has an RFID system, the most important information is the existing system specification. Before requesting a quotation, customers should ideally provide:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {existingSystemChecklist.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3 text-xs font-bold text-slate-900 dark:text-slate-100"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#009fe3] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 italic pt-2">
              This helps reduce the risk of supplying a card that is physically correct but incompatible with the customer's RFID system.
            </p>
          </div>
        </section>

        {/* ── 12. RFID CARD PRINTING VS STANDARD ID CARD (COMPARISON TABLE) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Comparison Matrix"
            title="RFID Card Printing vs Standard ID Card"
          />

          <div className="mt-8">
            <CompareTable
              columns={["Feature", "Standard ID Card", "RFID ID Card"]}
              rows={compareTableRows}
              highlightColumn={2}
            />
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
              An RFID card should be selected when the organization actually requires RFID functionality supported by its existing or planned system.
            </p>
          </div>
        </section>

        {/* ── 13. RFID CARD QUALITY & VERIFICATION ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Quality Assurance"
            title="RFID Card Quality &amp; Verification"
            lede="For RFID projects, quality involves more than the printed appearance. IDGen's workflow considers:"
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {qualityAspects.map((aspect) => (
              <div
                key={aspect.title}
                className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm space-y-2"
              >
                <div className="flex items-center gap-2 text-[#009fe3]">
                  <CheckCircle2 className="h-4 w-4" />
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-sm">
                    {aspect.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {aspect.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 14. RFID CARD DATA & DIGITAL WORKFLOW ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  Digital Integration
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                RFID Card Data &amp; Digital Workflow
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                For large personalized RFID projects, the card may contain both printed and electronically associated information. For example:
              </p>
            </div>

            <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-950 p-4">
              <FlowChain steps={["Student Data", "Photograph", "Card Design", "RFID Information", "Preview", "Approval", "Production"]} />
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400">
              IDGen Studio can support the data-collection and card-preview side of suitable identification projects.
            </p>

            <div>
              <Link
                href="/idgen-studio/"
                className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-6 py-3 text-xs font-bold text-white shadow transition hover:bg-[#008bc9]"
              >
                <span>Explore IDGen Studio</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 15. WHY CHOOSE IDGEN FOR RFID CARD PRINTING? ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Core Competence"
            title="Why Choose IDGen for RFID Card Printing?"
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseIdgen.map((item) => (
              <FeatureCard key={item.title} icon={item.icon} title={item.title} body={item.body} />
            ))}
          </div>
        </section>

        {/* ── 16. WHO CAN USE RFID ID CARDS? ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-5">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  Eligibility &amp; Suitability
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Who Can Use RFID ID Cards?
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                RFID card projects can be suitable for:
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
              {allEligibleSectors.map((sector) => (
                <div
                  key={sector}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-2.5 text-xs font-bold text-slate-800 dark:text-slate-200"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                  <span>{sector}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
              The suitability depends on the organization's RFID application and system compatibility.
            </p>
          </div>
        </section>

        {/* ── 17. FREQUENTLY ASKED QUESTIONS (Strictly 10 FAQs from Document) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Questions &amp; Answers"
            title="Frequently Asked Questions"
          />

          <div className="mt-8">
            <FaqList faqs={faqs} />
          </div>
        </section>

        {/* ── 18. NEED RFID CARD PRINTING? (Closing CTA Band) ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-[#071322] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 h-64 w-64 bg-[#009fe3]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-3xl space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-950/80 border border-cyan-800/60 px-3.5 py-1 text-xs font-bold text-cyan-300 uppercase tracking-widest">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                <span>Specification Check</span>
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                Need RFID Card Printing?
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                Tell us what RFID system you are using, what quantity you need and what information should be printed on the card.
              </p>

              <div className="rounded-2xl border border-white/15 bg-white/5 p-4 text-xs text-slate-300">
                For the fastest specification check, share an existing RFID card or the relevant reader/system details if available.
              </div>

              <div className="pt-2 flex flex-wrap gap-3.5">
                <Link
                  href="/request-a-quote/"
                  className="rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/30 transition hover:bg-[#008bc9]"
                >
                  Request an RFID Card Quote
                </Link>
                <Link
                  href="/request-a-quote/"
                  className="rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  Send Existing Card Details
                </Link>
                <Link
                  href="/id-card-printing/"
                  className="rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  Explore ID Card Printing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 19. GEOGRAPHIC / INTERNAL LINKING REFERENCE DIRECTORY ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm">
            <div className="flex items-center gap-2 text-[#009fe3] dark:text-cyan-400 mb-3">
              <MapPin className="h-4 w-4" />
              <span className="text-xs font-bold tracking-widest uppercase">
                Assam &amp; Northeast India Hub
              </span>
            </div>
            <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
              RFID Card Printing in Guwahati, Assam &amp; Across Northeast India
            </h3>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              IDGen supplies customized RFID ID card printing, attendance cards, smart campus cards, and access control credentials across Guwahati, Assam, and all Northeast regions.
            </p>

            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                Related IDGen Solutions &amp; Directories:
              </p>
              <div className="flex flex-wrap gap-2">
                {internalLinks.map((item) => (
                  <Link
                    key={item.topic}
                    href={item.href}
                    className="inline-flex items-center gap-1 rounded-lg border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 transition hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400"
                  >
                    <span>{item.topic}</span>
                    <ArrowRight className="h-3 w-3 opacity-60" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
