import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Waves,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Eye,
  Settings2,
  Boxes,
  GraduationCap,
  Building2,
  Ticket,
  Users,
  MapPin,
  HelpCircle,
  FileText,
  Workflow,
  BadgeCheck,
  Layers,
  AlertTriangle,
  Send,
  Zap,
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
import { pageMetadata } from "@/lib/metadata";
import { UltrasonicHeroCarousel } from "@/components/ultrasonic-sealing/UltrasonicHeroCarousel";
import type { Faq } from "@/data/types";

/* ── SEO Metadata (Strictly from document) ── */
export const metadata = pageMetadata({
  title: "Ultrasonic Sealing for ID Card Lanyards | IDGen",
  description:
    "Ultrasonic sealing for ID card lanyards and hook attachments. Cleaner lanyard assembly for school, employee, event and bulk ID card projects. One-hook and two-hook configurations available.",
  path: "/ultrasonic-sealing/",
});

/* ── Document Data Arrays (ALL Strictly from Document) ── */

const suitableOrganizations = [
  "Student ID card sets",
  "Employee ID card sets",
  "Institutional ID cards",
  "Event identification sets",
  "Membership identification",
  "Bulk organizational ID card projects",
];

const sealingDependOnFactors = [
  "Lanyard construction",
  "Attachment type",
  "Number of attachment points",
  "Material",
  "Required configuration",
  "Product design",
];

const traditionalHardwareIssues = [
  "Feel sharp",
  "Catch on clothing",
  "Develop surface corrosion over time",
  "Become visually untidy",
  "Require additional handling during assembly",
];

const coreAdvantages = [
  {
    icon: Sparkles,
    title: "A More Finished Appearance",
    body: "The sealed connection can create a cleaner-looking transition between the lanyard and attachment.",
  },
  {
    icon: ShieldCheck,
    title: "Reduced Exposure to Sharp Metal Parts",
    body: "Where the selected configuration allows it, ultrasonic sealing can reduce the amount of exposed metal hardware around the attachment area.",
  },
  {
    icon: Eye,
    title: "Better Long-Term Appearance",
    body: "Because the attachment can be integrated into the lanyard assembly, it can avoid some of the appearance issues associated with exposed metal hardware.",
  },
];

const compareTableRows = [
  ["Lanyard attachment", "Metal hardware", "Sealed attachment configuration"],
  ["Exposed metal", "Depends on design", "Can be reduced"],
  ["Sharp exposed edges", "Possible", "Can be reduced in suitable designs"],
  ["Rust/corrosion appearance", "Possible with exposed metal", "Reduced where exposed metal is eliminated/reduced"],
  ["Appearance", "Conventional", "Cleaner, integrated appearance"],
  ["Suitable for bulk ID projects", "Yes", "Yes"],
  ["Configuration", "Depends on hardware", "Depends on lanyard/material/attachment"],
];

const schoolUseCases = [
  "Student ID cards",
  "Teacher ID cards",
  "Staff ID cards",
  "School events",
  "Institutional programmes",
];

const companyUseCases = [
  "Employee ID cards",
  "Staff cards",
  "Corporate events",
  "Visitor identification",
  "Membership or access identification",
];

const processSteps = [
  {
    title: "01 - Select the Configuration",
    body: "Confirm: Lanyard, Hook, Holder (if required), Number of hooks, Sealing requirement.",
  },
  {
    title: "02 - Confirm Materials",
    body: "The lanyard and attachment materials are checked for suitability.",
  },
  {
    title: "03 - Prepare the Assembly",
    body: "The lanyard and attachment are positioned according to the required configuration.",
  },
  {
    title: "04 - Ultrasonic Sealing",
    body: "The appropriate sealing process is applied to create the required attachment.",
  },
  {
    title: "05 - Inspection",
    body: "The finished attachment is checked for: Position, Appearance, Attachment quality, Required configuration.",
  },
  {
    title: "06 - Complete Assembly",
    body: "The sealed lanyard is combined with the required identification components.",
  },
  {
    title: "07 - Final Quality Check",
    body: "The completed identification setup is checked before packaging and dispatch.",
  },
];

const qualityAspects = [
  "Correct hook configuration",
  "Correct sealing position",
  "Consistent appearance",
  "Proper attachment",
  "Correct lanyard orientation",
  "Required number of sealing points",
];

const attachmentOptions = [
  {
    title: "Option 1 - Conventional Attachment",
    badge: "Traditional",
    formula: ["Lanyard", "Hook"],
    desc: "Standard hardware loop assembly with conventional metal fastener.",
  },
  {
    title: "Option 2 - Single Ultrasonic Sealing",
    badge: "1-Point Seal",
    formula: ["Lanyard", "Hook", "1 Sealing Point"],
    desc: "Standard single hook lanyard with integrated acoustic fused weld.",
  },
  {
    title: "Option 3 - Two-Hook Ultrasonic Configuration",
    badge: "2-Point Seal",
    formula: ["Lanyard", "2 Hooks", "2 Sealing Points"],
    desc: "Dual corner hook lanyard for wide conference badges with two acoustic welds.",
  },
  {
    title: "Option 4 - Complete ID Card Assembly",
    badge: "Full Ecosystem",
    formula: ["ID Card", "Holder", "Hook(s)", "Ultrasonic Sealing", "Lanyard"],
    desc: "Complete pre-assembled identification set ready for institutional distribution.",
  },
];

const whyIdgenUsesSealing = [
  {
    icon: Sparkles,
    title: "Cleaner Appearance",
    body: "Creates a seamless, refined bond between fabric ribbon and hook hardware.",
  },
  {
    icon: ShieldCheck,
    title: "Reduced Exposure to Metal Hardware",
    body: "Eliminates bulky metal crimps and exposed sharp wire staples.",
  },
  {
    icon: BadgeCheck,
    title: "Reduced Risk of Sharp Edges",
    body: "Skin-friendly smooth finish that will not scratch necks or catch on clothing.",
  },
  {
    icon: Layers,
    title: "Better Visual Integration",
    body: "Attachment blends cleanly into the custom printed satin lanyard strap.",
  },
  {
    icon: Boxes,
    title: "Suitable for Bulk ID Projects",
    body: "High-speed automated factory consistency across thousands of badge units.",
  },
  {
    icon: Workflow,
    title: "Consistent Attachment Configuration",
    body: "Standardized loop tension and weld placement across entire institutional orders.",
  },
];

const eligibleOrganizations = [
  "Student ID cards",
  "Employee ID cards",
  "Staff ID cards",
  "Event cards",
  "Membership cards",
  "Institutional ID cards",
  "Corporate identification",
  "Bulk lanyard assemblies",
];

const faqs: Faq[] = [
  {
    q: "What is ultrasonic sealing in ID card lanyards?",
    a: "Ultrasonic sealing is a joining process that uses high-frequency mechanical vibration to create a sealed attachment between compatible materials in a lanyard assembly.",
  },
  {
    q: "Is ultrasonic sealing used with lanyards?",
    a: "Yes. IDGen uses ultrasonic sealing as an attachment option for suitable lanyard and hook configurations.",
  },
  {
    q: "Is ultrasonic sealing better than a metal attachment?",
    a: "It can provide a cleaner and more integrated attachment and can reduce exposed metal hardware in suitable configurations. The best method depends on the lanyard and attachment design.",
  },
  {
    q: "Can metal hooks rust?",
    a: "Exposed metal hardware can develop corrosion or surface deterioration depending on the metal, coating, environment and usage. Ultrasonic sealing can reduce exposed metal in suitable attachment configurations.",
  },
  {
    q: "Can ultrasonic sealing remove sharp metal edges?",
    a: "It can reduce exposure to certain metal attachment components where the design allows it, but the final configuration depends on the selected hook and lanyard.",
  },
  {
    q: "How many sealing points are required for one hook?",
    a: "A one-hook configuration generally requires one sealing point.",
  },
  {
    q: "How many sealing points are required for two hooks?",
    a: "A two-hook configuration generally requires two sealing points.",
  },
  {
    q: "Can event cards use ultrasonic sealing?",
    a: "Yes. Event cards can use ultrasonic sealing when the selected lanyard and hook configuration is suitable.",
  },
  {
    q: "Can ultrasonic sealing be added to a complete ID card set?",
    a: "Yes. A complete setup can include: ID Card + Holder + Hook + Ultrasonic Sealing + Lanyard.",
  },
  {
    q: "Can schools use ultrasonic-sealed lanyards?",
    a: "Yes. They can be used with suitable student, teacher and staff identification configurations.",
  },
  {
    q: "Can companies use ultrasonic-sealed lanyards?",
    a: "Yes. They can be used for suitable employee and organizational identification applications.",
  },
  {
    q: "Does ultrasonic sealing replace the ID card holder?",
    a: "No. Ultrasonic sealing is an attachment/assembly method. It does not replace a holder when a holder is required.",
  },
];

const internalLinks = [
  { topic: "Custom lanyards", href: "/custom-printed-lanyard-printing/" },
  { topic: "Event cards", href: "/event-card-printing/" },
  { topic: "ID Card Printing", href: "/id-card-printing/" },
  { topic: "Student ID Cards", href: "/student-id-card-printing/" },
  { topic: "Employee ID Cards", href: "/employee-id-card-printing/" },
  { topic: "Card Holders", href: "/id-card-holders/" },
  { topic: "ID Card Hooks", href: "/id-card-hooks/" },
  { topic: "Pricing", href: "/pricing/" },
  { topic: "Why IDGen", href: "/why-idgen/" },
  { topic: "Guwahati Hub", href: "/service-areas/assam/guwahati/" },
  { topic: "Assam Services", href: "/service-areas/assam/" },
  { topic: "Request a Quote", href: "/request-a-quote/" },
];

export default function UltrasonicSealingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Ultrasonic Sealing for ID Card Lanyards",
          description:
            "Ultrasonic sealing for ID card lanyards and hook attachments. Cleaner lanyard assembly for school, employee, event and bulk ID card projects. One-hook and two-hook configurations available.",
          path: "/ultrasonic-sealing/",
        })}
      />

      {/* ── 1. ULTRA-PREMIUM LIGHT/DARK HERO SECTION ── */}
      <section className="relative overflow-hidden bg-white dark:bg-[#070d18] border-b border-slate-200/90 dark:border-slate-800/80 pt-8 pb-14 lg:pt-12 lg:pb-16 transition-colors">
        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,159,227,0.08),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,159,227,0.18),rgba(255,255,255,0))] pointer-events-none" />
        <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-[#009fe3]/10 dark:bg-[#009fe3]/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-sky-400/10 dark:bg-cyan-500/10 blur-[100px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Eyebrow + Heading + Paragraph + Workflow Card + CTAs */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 dark:border-cyan-800/50 bg-sky-50 dark:bg-cyan-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#009fe3] dark:text-cyan-400 shadow-2xs">
                  <Waves className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                  <span>Ultrasonic Sealing for ID Card Lanyards</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight text-slate-950 dark:text-white leading-[1.15]">
                  A Cleaner Way to Attach{" "}
                  <span className="bg-gradient-to-r from-[#009fe3] via-[#0284c7] to-[#0369a1] dark:from-[#38bdf8] dark:via-[#009fe3] dark:to-[#38bdf8] bg-clip-text text-transparent">
                    Lanyards to ID Card Holders
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  IDGen provides ultrasonic sealing for ID card lanyard attachments, creating a finished connection between the lanyard and the required attachment configuration. Ultrasonic sealing can be used with suitable hooks and lanyard assemblies where a cleaner, more finished attachment is required.
                </p>
              </div>

              {/* Integrated Structured Workflow Card */}
              <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/60 dark:bg-slate-900/80 p-5 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Integrated Attachment Workflow</span>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                  Instead of relying only on a conventional exposed metal attachment, ultrasonic sealing creates an integrated finished lanyard assembly:
                </p>

                {/* Flow Chain */}
                <div className="rounded-xl border border-sky-200/90 dark:border-slate-800 bg-white dark:bg-slate-950 p-3.5 text-xs sm:text-[13px] font-bold text-slate-900 dark:text-cyan-300 tracking-wide flex flex-wrap items-center gap-x-2 gap-y-1.5 shadow-2xs">
                  <span>Configuration</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Materials</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Assembly</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Ultrasonic Sealing</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Inspection</span>
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
                  <span>Request an Ultrasonic Sealing Quote</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/custom-printed-lanyard-printing/"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-7 py-3.5 text-sm font-bold text-slate-800 dark:text-slate-200 shadow-2xs transition-all duration-300 hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 hover:bg-sky-50/40 dark:hover:bg-slate-700 hover:-translate-y-0.5"
                >
                  <span>Explore Custom Printed Lanyards</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Visual Slider Showcase */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
              <UltrasonicHeroCarousel />
            </div>
          </div>
        </Container>
      </section>

      <Container className="pb-14 pt-6 sm:pt-10">
        {/* ── 2. WHO IT IS USEFUL FOR ── */}
        <section className="mt-0">
          <div className="w-full">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
              <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                Organizational Applications
              </p>
              <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl md:text-[1.75rem] lg:text-[2rem] xl:text-[2.15rem] leading-[1.15] tracking-tighter w-full">
              It is particularly useful for organizations ordering:
            </h2>
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {suitableOrganizations.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 p-3.5 text-xs font-bold text-slate-900 dark:text-slate-100 shadow-2xs transition-all hover:border-[#009fe3]"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#009fe3] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. WHAT IS ULTRASONIC SEALING? ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  Technology Definition
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                What Is Ultrasonic Sealing?
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Ultrasonic sealing uses high-frequency mechanical vibration to join compatible materials through localized heat generated at the joining area. For ID card lanyard applications, the process can be used to secure the lanyard and attachment arrangement into a finished assembly.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                The exact sealing method depends on:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
                {sealingDependOnFactors.map((factor) => (
                  <div
                    key={factor}
                    className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3 text-xs font-bold text-slate-800 dark:text-slate-200"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                    <span>{factor}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs font-bold text-[#009fe3] dark:text-cyan-400 pt-2 border-t border-slate-100 dark:border-slate-800">
              The objective is to create a cleaner and more finished lanyard attachment.
            </p>
          </div>
        </section>

        {/* ── 4. WHY USE ULTRASONIC SEALING? & CORE ADVANTAGES ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Key Benefits"
            title="Why Use Ultrasonic Sealing?"
            lede="Traditional lanyard assemblies can use exposed metal attachment components. Ultrasonic sealing provides an alternative attachment method that reduces dependence on exposed metal attachment points in suitable configurations."
          />

          <div className="mt-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-lg space-y-4">
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Depending on the design and environment, exposed metal hardware may:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {traditionalHardwareIssues.map((issue) => (
                <div
                  key={issue}
                  className="flex items-center gap-2 rounded-xl border border-rose-200/60 dark:border-rose-900/40 bg-rose-50/40 dark:bg-rose-950/20 p-3 text-xs font-bold text-rose-900 dark:text-rose-300"
                >
                  <AlertTriangle className="h-4 w-4 text-rose-500 shrink-0" />
                  <span>{issue}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {coreAdvantages.map((adv) => (
              <FeatureCard key={adv.title} icon={adv.icon} title={adv.title} body={adv.body} />
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200/80 dark:border-amber-900/60 bg-amber-50/60 dark:bg-amber-950/30 p-4 text-xs text-amber-900 dark:text-amber-300 leading-relaxed flex items-start gap-2.5">
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
            <div>
              <span className="font-bold">Important: </span>
              Ultrasonic sealing does not make every lanyard or attachment configuration permanently corrosion-proof. Its suitability depends on the materials and construction used.
            </div>
          </div>
        </section>

        {/* ── 5. COMPARISON TABLE ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Specification Matrix"
            title="Ultrasonic Sealing vs Conventional Metal Attachment"
          />

          <div className="mt-8">
            <CompareTable
              columns={["Feature", "Conventional Exposed Metal Attachment", "Ultrasonic Sealing"]}
              rows={compareTableRows}
              highlightColumn={2}
            />
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
              The right method depends on the customer's product design and required attachment configuration.
            </p>
          </div>
        </section>

        {/* ── 6. ULTRASONIC SEALING FOR ID CARD LANYARDS (SETUP) ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  Wearable Integration
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Ultrasonic Sealing for ID Card Lanyards
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Ultrasonic sealing is primarily relevant to the lanyard attachment stage of an identification setup.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Typical Wearable System
                </span>
                <FlowChain steps={["ID Card", "Holder", "Hook", "Lanyard"]} />
              </div>

              <div className="rounded-2xl border border-sky-200/90 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-950 p-4 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#009fe3]">
                  With Ultrasonic Sealing
                </span>
                <FlowChain steps={["ID Card", "Holder", "Hook", "Ultrasonic Sealing", "Lanyard"]} />
              </div>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 italic">
              The exact assembly depends on the selected components.
            </p>
          </div>
        </section>

        {/* ── 7. ONE HOOK VS TWO HOOK SEALING ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Sealing Points"
            title="One Hook vs Two Hook Sealing"
            lede="The number of ultrasonic sealing points depends on the attachment configuration."
          />

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {/* One-Hook Configuration */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md space-y-4">
              <span className="rounded-full bg-sky-100 dark:bg-cyan-950/60 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 border border-sky-200 dark:border-cyan-800/50">
                One-Hook Configuration
              </span>
              <h3 className="text-lg font-black text-slate-900 dark:text-white">
                1 Hook + 1 Ultrasonic Sealing Point
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                For a lanyard using one hook, the required attachment can use 1 sealing point.
              </p>
              <div className="pt-2">
                <FlowChain steps={["Lanyard", "Ultrasonic Sealing", "Hook", "ID Card/Holder"]} />
              </div>
            </div>

            {/* Two-Hook Configuration */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md space-y-4">
              <span className="rounded-full bg-sky-100 dark:bg-cyan-950/60 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 border border-sky-200 dark:border-cyan-800/50">
                Two-Hook Configuration
              </span>
              <h3 className="text-lg font-black text-slate-900 dark:text-white">
                2 Hooks + 2 Ultrasonic Sealing Points
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                Some applications use two hooks with the lanyard, requiring 2 sealing points.
              </p>
              <div className="pt-2 space-y-2">
                <FlowChain steps={["Lanyard", "Ultrasonic Sealing", "Hook", "Card"]} />
                <FlowChain steps={["Lanyard", "Ultrasonic Sealing", "Hook", "Card"]} />
              </div>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              The final configuration should be confirmed according to the actual lanyard and card design.
            </p>
          </div>
        </section>

        {/* ── 8. ULTRASONIC SEALING FOR EVENT CARDS ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  Event Accreditation
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Ultrasonic Sealing for Event Cards
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Event identification can use different attachment configurations. Some event cards use Event Card + Lanyard + 1 Hook, while others use Event Card + Lanyard + 2 Hooks.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4 space-y-1">
                <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">One Hook</h4>
                <p className="text-xs text-[#009fe3] font-bold">1 Hook → 1 Sealing Point</p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4 space-y-1">
                <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">Two Hooks</h4>
                <p className="text-xs text-[#009fe3] font-bold">2 Hooks → 2 Sealing Points</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              This is why ultrasonic sealing should be quoted based on the complete event-card attachment configuration, rather than simply quoting one generic sealing charge.
            </p>

            <div>
              <Link
                href="/event-card-printing/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] transition hover:text-[#008bc9]"
              >
                <span>Explore Event Card Printing</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 9. ULTRASONIC SEALING FOR COMPLETE ID CARD SETS ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Coordinated Sets"
            title="Ultrasonic Sealing for Complete ID Card Sets"
            lede="Organizations can combine ultrasonic sealing with other identification components. This allows customers to order the required identification components as one coordinated setup."
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Setup 1
              </span>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                Standard Wearable Set
              </h3>
              <FlowChain steps={["ID Card", "Holder", "Hook", "Lanyard"]} />
            </div>

            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#009fe3]">
                Setup 2
              </span>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                Sealed Wearable Set
              </h3>
              <FlowChain steps={["ID Card", "Holder", "Hook", "Ultrasonic Sealing", "Lanyard"]} />
            </div>

            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-500">
                Setup 3
              </span>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                Complete Branded Identification Set
              </h3>
              <FlowChain steps={["Printed ID Card", "Holder", "Hook", "Ultrasonic Sealing", "Custom Printed Lanyard"]} />
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/id-card-printing/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] transition hover:text-[#008bc9]"
            >
              <span>Explore Complete ID Card Solutions</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>

        {/* ── 10. SCHOOLS & COMPANIES DEEP DIVES ── */}
        <section className="mt-20">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Schools */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3] dark:text-cyan-400 border border-sky-100 dark:border-cyan-800/40">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  Ultrasonic Sealing for Schools
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                  Schools can use sealed lanyard assemblies for:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {schoolUseCases.map((use) => (
                    <div key={use} className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                      <span>{use}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2">
                  <FlowChain steps={["Student ID Card", "Holder", "Hook", "Ultrasonic Sealing", "School Lanyard"]} />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                  The exact attachment configuration depends on the selected holder, hook and lanyard.
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

            {/* Companies */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3] dark:text-cyan-400 border border-sky-100 dark:border-cyan-800/40">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  Ultrasonic Sealing for Companies
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                  Companies can use ultrasonic-sealed lanyard assemblies for:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {companyUseCases.map((use) => (
                    <div key={use} className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                      <span>{use}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2">
                  <FlowChain steps={["Employee ID Card", "Holder", "Hook", "Ultrasonic Sealing", "Company Lanyard"]} />
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

        {/* ── 11. ULTRASONIC SEALING PROCESS (7 Steps) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Workflow Steps"
            title="Ultrasonic Sealing Process"
          />

          <div className="mt-8">
            <WorkflowSteps steps={processSteps} />
          </div>
        </section>

        {/* ── 12. QUALITY MATTERS IN LANYARD SEALING ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg space-y-5">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  Quality Standards
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Quality Matters in Lanyard Sealing
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                A sealed lanyard should not only look good. The finished assembly should also be checked for:
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {qualityAspects.map((aspect) => (
                <div
                  key={aspect}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3 text-xs font-bold text-slate-800 dark:text-slate-200"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                  <span>{aspect}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
              For bulk orders, consistency across the batch is particularly important.
            </p>
          </div>
        </section>

        {/* ── 13. ULTRASONIC SEALING PRICE ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  Pricing Logic
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Ultrasonic Sealing Price
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                The cost of ultrasonic sealing depends on the required configuration. Factors can include: Number of sealing points, Number of hooks, Lanyard type, Attachment configuration, Quantity, Complete-set requirement.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4 space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Basic Principle 1</span>
                <p className="text-base font-black text-slate-900 dark:text-white">1 Hook → 1 Sealing Point</p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4 space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#009fe3]">Basic Principle 2</span>
                <p className="text-base font-black text-slate-900 dark:text-white">2 Hooks → 2 Sealing Points</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400">
              The final price should therefore be calculated according to the actual configuration rather than assuming the same sealing quantity for every order.
            </p>

            <div>
              <Link
                href="/pricing/"
                className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-6 py-3 text-xs font-bold text-white shadow transition hover:bg-[#008bc9]"
              >
                <span>View IDGen Pricing</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 14. COMPLETE LANYARD ATTACHMENT OPTIONS ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Attachment Variations"
            title="Complete Lanyard Attachment Options"
            lede="Customers can choose the attachment configuration according to their application."
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {attachmentOptions.map((opt) => (
              <div
                key={opt.title}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md transition-all duration-300 hover:border-[#009fe3] hover:shadow-xl"
              >
                <div>
                  <span className="rounded-full bg-sky-100 dark:bg-cyan-950/60 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 border border-sky-200 dark:border-cyan-800/50">
                    {opt.badge}
                  </span>
                  <h3 className="mt-4 font-extrabold text-slate-900 dark:text-white text-base">
                    {opt.title}
                  </h3>
                  <div className="mt-4 pt-1">
                    <FlowChain steps={opt.formula} />
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {opt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              The recommended configuration depends on the card, holder, lanyard and application.
            </p>
          </div>
        </section>

        {/* ── 15. WHY IDGEN USES ULTRASONIC SEALING ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Engineering Rationale"
            title="Why IDGen Uses Ultrasonic Sealing"
            lede="IDGen uses ultrasonic sealing as an attachment option because it can provide a cleaner and more integrated alternative to certain exposed metal attachment arrangements."
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyIdgenUsesSealing.map((item) => (
              <FeatureCard key={item.title} icon={item.icon} title={item.title} body={item.body} />
            ))}
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              The final result depends on the selected materials, equipment and assembly design.
            </p>
          </div>
        </section>

        {/* ── 16. WHO CAN ORDER ULTRASONIC SEALING? ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-5">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  Target Audiences
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Who Can Order Ultrasonic Sealing?
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Ultrasonic sealing can be useful for organizations ordering:
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {eligibleOrganizations.map((org) => (
                <div
                  key={org}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3 text-xs font-bold text-slate-800 dark:text-slate-200"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                  <span>{org}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
              It is especially relevant when the customer wants a finished lanyard attachment rather than a loose lanyard and separate hardware.
            </p>
          </div>
        </section>

        {/* ── 17. FREQUENTLY ASKED QUESTIONS (Strictly 12 FAQs from Document) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Questions &amp; Answers"
            title="Frequently Asked Questions"
          />

          <div className="mt-8">
            <FaqList faqs={faqs} />
          </div>
        </section>

        {/* ── 18. NEED ULTRASONIC SEALING? (Closing CTA Band) ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-[#071322] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 h-64 w-64 bg-[#009fe3]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-3xl space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-950/80 border border-cyan-800/60 px-3.5 py-1 text-xs font-bold text-cyan-300 uppercase tracking-widest">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                <span>Get Started with Ultrasonic Sealing</span>
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                Need Ultrasonic Sealing?
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                Tell us: Number of ID cards, Lanyard type, Number of hooks, Holder requirement, One- or two-hook configuration, and whether you need the complete ID card set. We can then determine the appropriate sealing and assembly configuration.
              </p>

              <div className="pt-2 flex flex-wrap gap-3.5">
                <Link
                  href="/request-a-quote/"
                  className="rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/30 transition hover:bg-[#008bc9]"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/custom-printed-lanyard-printing/"
                  className="rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  Explore Custom Printed Lanyards
                </Link>
                <Link
                  href="/event-card-printing/"
                  className="rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  Explore Event Card Printing
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
              Ultrasonic Sealing &amp; Lanyard Assembly in Guwahati, Assam &amp; Northeast India
            </h3>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              IDGen provides automated ultrasonic sealing for school lanyards, employee credentials, and event badge attachments across Guwahati, Assam, and all 8 Northeast states.
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
