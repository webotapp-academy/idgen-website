import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Tag,
  GraduationCap,
  Building2,
  Ticket,
  Users,
  Palette,
  Repeat,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Eye,
  Settings2,
  Boxes,
  BadgeCheck,
  Waves,
  MapPin,
  Check,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FlowChain } from "@/components/ui/FlowChain";
import { WorkflowSteps } from "@/components/ui/WorkflowSteps";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import type { Faq } from "@/data/types";

/* ── SEO Metadata (Strictly from document) ── */
export const metadata = pageMetadata({
  title: "Custom Printed Lanyard Printing | 20mm ID Card Lanyards | IDGen",
  description:
    "Custom printed 20mm lanyards for ID cards, students, employees, organizations and events. Add your logo, branding and artwork. Bulk lanyard printing by IDGen.",
  path: "/custom-printed-lanyard-printing/",
});

/* ── Document Data Arrays (ALL Strictly from Document) ── */

const customElements = [
  "Organization logo",
  "Organization name",
  "Brand colours",
  "Text",
  "Repeating logo pattern",
  "Event branding",
  "Department branding",
  "Approved artwork",
];

const suitableFor = [
  "Student identification",
  "Employee identification",
  "Staff identification",
  "Institutional identification",
  "Membership identification",
  "Event badges",
  "Conferences",
  "Seminars",
  "Corporate programs",
  "Promotional identification",
];

const printingOptions = [
  {
    title: "Organization Branding",
    pattern: "LOGO  •  ORGANIZATION NAME  •  LOGO  •  ORGANIZATION NAME",
    desc: "Your organization's official logo and name positioned with balanced spacing and clear legibility along the strap.",
  },
  {
    title: "Repeating Brand Pattern",
    pattern: "REPEATING LOGO / GRAPHIC PATTERN",
    desc: "A repeating logo or graphic can be used across the length of the lanyard.",
  },
  {
    title: "Event Branding",
    pattern: "EVENT NAME  •  LOGO  •  SPONSOR BRANDING",
    desc: "Event name, logo, sponsor branding or approved event artwork can be incorporated into the design.",
  },
  {
    title: "Department Branding",
    pattern: "DEPARTMENT  •  CATEGORY  •  ORGANIZATION",
    desc: "Different designs can be prepared for departments, categories or organizational groups where required.",
  },
];

const printableItems = [
  "Company logo",
  "School logo",
  "College or university branding",
  "Organization name",
  "Event name",
  "Brand colours",
  "Department name",
  "Short text",
  "Repeating patterns",
  "Sponsor logos",
  "Approved graphics",
];

const applicationCards = [
  {
    icon: GraduationCap,
    title: "Student Identification",
    body: "Custom lanyards can complement student ID cards with school or institutional branding.",
    linkText: "Explore Student ID Card Printing",
    href: "/student-id-card-printing/",
  },
  {
    icon: Building2,
    title: "Employee Identification",
    body: "Companies can use branded lanyards to create a consistent employee identification system.",
    linkText: "Explore Employee ID Card Printing",
    href: "/employee-id-card-printing/",
  },
  {
    icon: Ticket,
    title: "Events",
    body: "Event organizers can use branded lanyards alongside event cards and the required attachment configuration.",
    linkText: "Explore Event Card Printing",
    href: "/event-card-printing/",
  },
  {
    icon: Users,
    title: "General Organizational Identification",
    body: "Lanyards can also be used by institutions, hospitals, associations, clubs and other organizations requiring wearable identification.",
    linkText: "Explore ID Card Printing",
    href: "/id-card-printing/",
  },
];

const bulkRequirements = [
  "Student batches",
  "Employee batches",
  "Institutional programs",
  "Corporate identification",
  "Conferences",
  "Events",
  "Membership programs",
  "Organizational campaigns",
];

const artworkProcessSteps = [
  {
    title: "01 - Share Your Branding",
    body: "Provide your logo, artwork or branding requirements.",
  },
  {
    title: "02 - Select the Lanyard",
    body: "Confirm the required lanyard width and specification.",
  },
  {
    title: "03 - Artwork Preparation",
    body: "The artwork is prepared according to the selected lanyard format.",
  },
  {
    title: "04 - Preview",
    body: "Review the proposed design before production.",
  },
  {
    title: "05 - Approval",
    body: "Production begins after the required artwork and specifications are approved.",
  },
  {
    title: "06 - Production",
    body: "The approved lanyards move into production.",
  },
  {
    title: "07 - Quality Check",
    body: "Finished lanyards are checked against the approved requirements.",
  },
  {
    title: "08 - Dispatch",
    body: "The completed order is prepared for dispatch.",
  },
];

const whyUseLanyards = [
  {
    icon: ShieldCheck,
    title: "Consistent Branding",
    body: "A branded lanyard helps maintain a consistent visual identity across students, employees, staff, members or event participants.",
  },
  {
    icon: Eye,
    title: "Easy Identification",
    body: "A common lanyard design can make organizational identification easier to recognize.",
  },
  {
    icon: Sparkles,
    title: "Professional Appearance",
    body: "Matching lanyards can create a more organized appearance than using unrelated or plain accessories.",
  },
  {
    icon: Boxes,
    title: "Bulk Customization",
    body: "One design can be reproduced across large quantities for institutional requirements.",
  },
  {
    icon: BadgeCheck,
    title: "Works With Your Existing ID Cards",
    body: "If you already have ID cards, custom printed lanyards can be ordered as an accessory without necessarily replacing the cards.",
  },
];

const designGuidelines = [
  "Clear",
  "Repeated consistently",
  "Properly spaced",
  "Suitable for the available printing area",
  "Consistent with your brand identity",
];

const qualityFactors = [
  "Lanyard width",
  "Printing quality",
  "Artwork accuracy",
  "Attachment configuration",
  "Quantity",
  "Intended application",
  "Compatibility with the ID card setup",
];

const configTiers = [
  {
    title: "Lanyard Only",
    badge: "Accessory Only",
    formula: ["20 mm Custom Printed Lanyard"],
    desc: "Direct custom printed lanyards ready to attach to existing card holders or keys.",
  },
  {
    title: "Wearable Identification",
    badge: "Standard Bundle",
    formula: ["ID Card", "Holder", "Hook", "Lanyard"],
    desc: "Complete matching wearable setup with high-resolution PVC ID cards and protective holders.",
  },
  {
    title: "Complete Configuration",
    badge: "Integrated Assembly",
    formula: ["ID Card", "Ultrasonic Sealing", "Holder", "Hook", "Custom Printed Lanyard"],
    desc: "Factory pre-assembled solution with acoustic ultrasonic welded joint seals for maximum longevity.",
  },
];

const orderSteps = [
  {
    title: "Step 1 - Tell Us Your Quantity",
    body: "Provide the approximate number of lanyards required.",
  },
  {
    title: "Step 2 - Share Your Artwork",
    body: "Send your logo, existing artwork or branding requirements.",
  },
  {
    title: "Step 3 - Confirm Specification",
    body: "Confirm the lanyard width and required attachment configuration.",
  },
  {
    title: "Step 4 - Review Artwork",
    body: "Check the proposed artwork before production.",
  },
  {
    title: "Step 5 - Approve",
    body: "Approve the artwork and order specifications.",
  },
  {
    title: "Step 6 - Production",
    body: "The approved order moves into production.",
  },
  {
    title: "Step 7 - Quality Check",
    body: "The finished lanyards are checked against the approved requirements.",
  },
  {
    title: "Step 8 - Dispatch",
    body: "The completed order is prepared for dispatch.",
  },
];

const faqs: Faq[] = [
  {
    q: "What is a custom printed lanyard?",
    a: "A custom printed lanyard is a wearable strap customized with an organization's logo, name, colours, text or artwork and used to carry an ID card or badge.",
  },
  {
    q: "What size lanyard does IDGen provide?",
    a: "The standard lanyard featured by IDGen is a 20 mm custom printed lanyard.",
  },
  {
    q: "Can I print my company logo on the lanyard?",
    a: "Yes. Organization logos, names, colours, text and approved artwork can be incorporated into the lanyard design.",
  },
  {
    q: "Can schools order custom printed lanyards?",
    a: "Yes. Custom lanyards can be used with student and staff identification systems. For the complete student identification solution, see Student ID Card Printing (/student-id-card-printing/).",
  },
  {
    q: "Can I order lanyards for employees?",
    a: "Yes. Companies can order branded lanyards for employee and staff identification. See Employee ID Card Printing (/employee-id-card-printing/).",
  },
  {
    q: "Can I order lanyards for an event?",
    a: "Yes. Custom printed lanyards can be produced for conferences, seminars, exhibitions and other events. See Event Card Printing (/event-card-printing/).",
  },
  {
    q: "Can I order only lanyards?",
    a: "Yes. You can order custom printed lanyards separately if you already have your ID cards and other accessories.",
  },
  {
    q: "Can I order lanyards with ID cards?",
    a: "Yes. Lanyards can be included as part of a broader identification order.",
  },
  {
    q: "Can ultrasonic sealing be added?",
    a: "Yes. Ultrasonic sealing can be included for suitable lanyard attachment configurations.",
  },
  {
    q: "Can I order custom lanyards in bulk?",
    a: "Yes. Bulk quantities can be quoted according to quantity, artwork and specification.",
  },
  {
    q: "Can I use my existing design?",
    a: "Yes. Customer-supplied artwork can be used where it meets the required production specifications.",
  },
];

const internalLinks = [
  { topic: "Main ID card service", href: "/id-card-printing/" },
  { topic: "Student IDs", href: "/student-id-card-printing/" },
  { topic: "Employee IDs", href: "/employee-id-card-printing/" },
  { topic: "Event cards", href: "/event-card-printing/" },
  { topic: "RFID Cards", href: "/rfid-card-printing/" },
  { topic: "Ultrasonic sealing", href: "/ultrasonic-sealing/" },
  { topic: "Holders", href: "/id-card-holders/" },
  { topic: "Hooks", href: "/id-card-hooks/" },
  { topic: "Pricing", href: "/pricing/" },
  { topic: "IDGen Studio", href: "/idgen-studio/" },
  { topic: "Why IDGen", href: "/why-idgen/" },
  { topic: "Guwahati Services", href: "/service-areas/assam/guwahati/" },
  { topic: "Assam Services", href: "/service-areas/assam/" },
];

export default function CustomPrintedLanyardPrintingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Custom Printed Lanyard Printing",
          description:
            "Custom 20mm printed lanyards for ID cards, organizations and events. Add your logo, branding and artwork. Bulk lanyard printing by IDGen.",
          path: "/custom-printed-lanyard-printing/",
        })}
      />

      {/* ── 1. ULTRA-PREMIUM HERO SECTION (Styled like ID Card Printing) ── */}
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
                  <Tag className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                  <span>Custom Printed Lanyard Printing</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight text-slate-950 dark:text-white leading-[1.15]">
                  Custom 20 mm Printed Lanyards for ID Cards, Organizations &amp; Events
                </h1>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  IDGen provides custom printed lanyard printing for organizations that need branded, professional and consistent identification accessories. Our standard offering includes 20 mm custom printed lanyards, suitable for student ID cards, employee identification, institutional programs, events, conferences, memberships and other organizational applications.
                </p>
              </div>

              {/* Integrated Structured Workflow Card */}
              <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/60 dark:bg-slate-900/80 p-5 shadow-xs space-y-3">
                <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                  A typical identification arrangement is:
                </p>

                {/* Flow Chain */}
                <div className="rounded-xl border border-sky-200/90 dark:border-slate-800 bg-white dark:bg-slate-950 p-3.5 text-xs sm:text-[13px] font-bold text-slate-900 dark:text-cyan-300 tracking-wide flex flex-wrap items-center gap-x-2 gap-y-1.5 shadow-2xs">
                  <span>ID Card</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Holder/Attachment</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Hook</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Custom Printed Lanyard</span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  The exact attachment depends on the application.
                </p>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <Link
                  href="/request-a-quote/"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/25 transition-all duration-300 hover:bg-[#008bc9] hover:shadow-xl hover:shadow-[#009fe3]/40 hover:-translate-y-0.5"
                >
                  <span>Request a Lanyard Quote</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/pricing/"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-7 py-3.5 text-sm font-bold text-slate-800 dark:text-slate-200 shadow-2xs transition-all duration-300 hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 hover:bg-sky-50/40 dark:hover:bg-slate-700 hover:-translate-y-0.5"
                >
                  <span>View Lanyard Pricing</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Ultra-Premium Hero Image Generated with Nano Banana */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative h-full min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] w-full rounded-3xl overflow-hidden border-2 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-xl group flex flex-col justify-between">
                <Image
                  src="/images/custom-printed-lanyard-printing-idgen.jpg"
                  alt="Custom printed 20mm ID card lanyards by IDGen"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                {/* Gradient overlay for badge readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent pointer-events-none" />

                {/* Top Floating Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-cyan-300 border border-white/15 shadow-sm">
                    <Sparkles className="h-3 w-3 text-cyan-400" />
                    <span>20 mm Satin Lanyards</span>
                  </span>
                  <span className="rounded-full bg-[#009fe3] px-3 py-1 text-xs font-black text-white shadow-md">
                    IDGen
                  </span>
                </div>

                {/* Bottom Floating Info Badge */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="rounded-2xl border border-white/15 bg-slate-950/80 backdrop-blur-md p-3.5 shadow-xl flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">
                        Custom Sublimation
                      </p>
                      <p className="text-xs sm:text-sm font-black text-white">
                        Full-Color Branded Lanyards
                      </p>
                    </div>
                    <span className="text-[10px] font-bold text-slate-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                      Guwahati Hub
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="pb-14 pt-6 sm:pt-10">
        {/* ── 2. CUSTOMIZATION PARAMETERS SECTION ── */}
        <section className="mt-0">
          <div className="w-full">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
              <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                Custom Lanyard Specifications
              </p>
              <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl md:text-[1.75rem] lg:text-[2rem] xl:text-[2.15rem] leading-[1.15] tracking-tighter w-full">
              Lanyards can be customized with your organization branding
            </h2>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Side: Macro Branding Image */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative mx-auto w-full">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#009fe3]/25 via-cyan-500/15 to-blue-600/20 blur-xl opacity-70" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src="/images/20mm-custom-printed-lanyard-branding.jpg"
                      alt="20mm custom printed lanyard with organization branding"
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-xs font-bold text-cyan-300 border border-white/15 shadow-sm">
                        <Sparkles className="h-3 w-3 text-cyan-400" />
                        <span>High-Definition Print</span>
                      </span>
                      <span className="rounded-full bg-[#009fe3] px-3 py-1 text-xs font-black text-white shadow-md">
                        20 mm
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <div className="rounded-2xl border border-white/15 bg-slate-950/80 backdrop-blur-md p-3.5 shadow-xl flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">
                            Continuous Dye Sublimation
                          </p>
                          <p className="text-xs sm:text-sm font-black text-white">
                            Satin Polyester Ribbon
                          </p>
                        </div>
                        <span className="text-[10px] font-bold text-slate-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                          IDGen
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Sleek Glassmorphic Parameters Container */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="rounded-3xl border border-sky-100 dark:border-slate-800 bg-gradient-to-br from-sky-50/60 via-white to-sky-50/30 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 p-6 sm:p-7 shadow-xl backdrop-blur-md space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 bg-sky-100/80 dark:bg-cyan-950/60 border border-sky-200 dark:border-cyan-800/50 px-3.5 py-1.5 rounded-full">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Customizable Features</span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    8 Parameters
                  </span>
                </div>

                <p className="text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                  Lanyards can be customized with your:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {customElements.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-950/90 px-3.5 py-2.5 text-xs font-bold text-slate-900 dark:text-slate-100 shadow-2xs hover:border-[#009fe3] hover:shadow-sm dark:hover:border-cyan-400 transition-all"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href="/request-a-quote/"
                    className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-5 py-2.5 text-xs font-bold text-white shadow transition hover:bg-[#008bc9]"
                  >
                    <span>Request a Lanyard Quote</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href="/pricing/"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-5 py-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs transition hover:border-[#009fe3] hover:text-[#009fe3]"
                  >
                    <span>View Lanyard Pricing</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. WHAT IS CUSTOM PRINTED LANYARD PRINTING? ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  Identification Concept
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl leading-tight">
                What Is Custom Printed Lanyard Printing?
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                A custom printed lanyard is a branded neck strap used to carry an ID card, badge or other identification credential. Instead of using a plain lanyard, organizations can print their logo, name, colours or repeating branding directly onto the lanyard.
              </p>

              <div className="pt-4 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  A typical identification arrangement is:
                </p>
                <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-950/60 p-4">
                  <FlowChain steps={["ID Card", "Holder/Attachment", "Hook", "Custom Printed Lanyard"]} />
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                  The exact attachment depends on the application.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. 20 MM CUSTOM PRINTED LANYARDS & SUITABLE FOR ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Product Specification"
            title="20 mm Custom Printed Lanyards"
            lede="IDGen offers 20 mm custom printed lanyards for organizational identification requirements. The 20 mm width provides a practical surface for displaying branding while maintaining the lanyard's role as a wearable identification accessory."
          />

          <div className="mt-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
              Suitable for:
            </h3>

            <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {suitableFor.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 p-3.5 text-xs font-bold text-slate-800 dark:text-slate-200 transition-all hover:border-[#009fe3] hover:shadow-sm"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#009fe3] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-sky-200/80 dark:border-slate-800 bg-sky-50/40 dark:bg-slate-950/60 p-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              <span className="font-bold text-slate-900 dark:text-white">Note: </span>
              For application-specific requirements, the appropriate card, holder and attachment configuration should be selected separately.
            </div>
          </div>
        </section>

        {/* ── 5. CUSTOM LANYARD PRINTING OPTIONS ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Branding Styles"
            title="Custom Lanyard Printing Options"
            lede="Your lanyard can be designed around your organization's existing branding."
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {printingOptions.map((opt) => (
              <div
                key={opt.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-lg transition-all duration-300 hover:border-[#009fe3] hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center gap-2.5 text-[#009fe3] dark:text-cyan-400">
                    <Palette className="h-5 w-5" />
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                      {opt.title}
                    </h3>
                  </div>

                  <div className="mt-4 rounded-xl bg-slate-950 p-3 border border-white/10 font-mono text-xs text-cyan-300 font-bold tracking-wider">
                    {opt.pattern}
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                    {opt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. WHAT CAN BE PRINTED ON A LANYARD? ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  Artwork Inclusions
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl leading-tight">
                What Can Be Printed on a Lanyard?
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Depending on the artwork, a custom lanyard may include:
              </p>

              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {printableItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 px-3.5 py-2.5 text-xs font-bold text-slate-900 dark:text-slate-100"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#009fe3] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <p className="text-xs font-bold text-[#009fe3] dark:text-cyan-400">
                  The final artwork should be checked and approved before production.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. LANYARD PRINTING FOR DIFFERENT APPLICATIONS ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Sector Use Cases"
            title="Lanyard Printing for Different Applications"
            lede="IDGen's custom lanyards can be used across different identification requirements."
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {applicationCards.map((app) => (
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
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {app.body}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <Link
                    href={app.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 transition hover:text-[#008bc9]"
                  >
                    <span>{app.linkText}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 8. LANYARD + ID CARD SETUP (With Complete Setup Image) ── */}
        <section className="mt-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Image of Complete Setup */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto w-full">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#009fe3]/25 via-cyan-500/15 to-blue-600/20 blur-xl opacity-70" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src="/images/id-card-lanyard-holder-hook-setup.jpg"
                      alt="ID card with holder hook and custom printed lanyard"
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-xs font-bold text-cyan-300 border border-white/15 shadow-sm">
                        <Sparkles className="h-3 w-3 text-cyan-400" />
                        <span>Complete Setup</span>
                      </span>
                      <span className="rounded-full bg-[#009fe3] px-3 py-1 text-xs font-black text-white shadow-md">
                        IDGen
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <div className="rounded-2xl border border-white/15 bg-slate-950/80 backdrop-blur-md p-3.5 shadow-xl flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">
                            Matching Identification
                          </p>
                          <p className="text-xs sm:text-sm font-black text-white">
                            Card + Holder + Hook + Lanyard
                          </p>
                        </div>
                        <span className="text-[10px] font-bold text-slate-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                          Ready to Wear
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Setup Details & Configurations */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2">
                  <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                  <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                    System Configuration
                  </p>
                  <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  Lanyard + ID Card Setup
                </h2>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  A lanyard is normally only one part of the final wearable identification setup. Depending on the requirement, it can be combined with:
                </p>
              </div>

              <div className="space-y-3">
                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                    Option 1
                  </span>
                  <FlowChain steps={["ID Card", "Holder", "Hook", "Lanyard"]} />
                </div>

                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                    Option 2 (Ultrasonic Sealed)
                  </span>
                  <FlowChain steps={["ID Card", "Ultrasonic Sealing", "Holder", "Hook", "Lanyard"]} />
                </div>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                The correct configuration depends on the type of card, holder, attachment and intended use.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-1">
                <Link
                  href="/id-card-printing/"
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3] hover:text-[#009fe3]"
                >
                  <span>Explore ID Card Printing</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/id-card-holders/"
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3] hover:text-[#009fe3]"
                >
                  <span>Explore ID Card Holders</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/id-card-hooks/"
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3] hover:text-[#009fe3]"
                >
                  <span>Explore ID Card Hooks</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/ultrasonic-sealing/"
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3] hover:text-[#009fe3]"
                >
                  <span>Explore Ultrasonic Sealing</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. CUSTOM LANYARD PRINTING FOR BULK ORDERS (With Bulk Image) ── */}
        <section className="mt-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2">
                  <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                  <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                    Institutional Capacity
                  </p>
                  <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  Custom Lanyard Printing for Bulk Orders
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  Custom lanyards are particularly useful when an organization needs consistent branding across a large group of people.
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Typical bulk requirements include:
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  {bulkRequirements.map((req) => (
                    <div
                      key={req}
                      className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 text-xs font-bold text-slate-900 dark:text-slate-100 shadow-2xs"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#009fe3] shrink-0" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400">
                For bulk orders, the quotation depends on the required quantity, specification, artwork and configuration.
              </p>

              <div>
                <Link
                  href="/request-a-quote/"
                  className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/25 transition hover:bg-[#008bc9]"
                >
                  <span>Request a Bulk Lanyard Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Bulk Image */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto w-full">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#009fe3]/25 via-cyan-500/15 to-blue-600/20 blur-xl opacity-70" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src="/images/bulk-custom-lanyard-printing-idgen.jpg"
                      alt="Bulk custom printed lanyards for organizational ID cards"
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-xs font-bold text-cyan-300 border border-white/15 shadow-sm">
                        <Sparkles className="h-3 w-3 text-cyan-400" />
                        <span>Factory Production</span>
                      </span>
                      <span className="rounded-full bg-[#009fe3] px-3 py-1 text-xs font-black text-white shadow-md">
                        Bulk Orders
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <div className="rounded-2xl border border-white/15 bg-slate-950/80 backdrop-blur-md p-3.5 shadow-xl flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">
                            Quality Audited
                          </p>
                          <p className="text-xs sm:text-sm font-black text-white">
                            Packaged for Immediate Dispatch
                          </p>
                        </div>
                        <span className="text-[10px] font-bold text-slate-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                          Guwahati
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. LANYARD ARTWORK PROCESS (8 Steps) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Production Workflow"
            title="Lanyard Artwork Process"
            lede="A well-prepared artwork helps ensure the final lanyard matches the organization's branding."
          />

          <div className="mt-8">
            <WorkflowSteps steps={artworkProcessSteps} />
          </div>
        </section>

        {/* ── 11. WHY USE CUSTOM PRINTED LANYARDS? ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Key Benefits"
            title="Why Use Custom Printed Lanyards?"
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUseLanyards.map((b) => (
              <FeatureCard key={b.title} icon={b.icon} title={b.title} body={b.body} />
            ))}
          </div>
        </section>

        {/* ── 12. CUSTOM LANYARD DESIGN ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  Design Guidelines
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Custom Lanyard Design
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                A good lanyard design should remain readable and visually consistent when repeated along the strap.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-200/90 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-950/80 p-5 space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                Recommended Design Elements:
              </p>
              <p className="font-mono text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                Logo + Organization Name + Brand Pattern
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Keep important elements:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {designGuidelines.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3 text-xs font-bold text-slate-800 dark:text-slate-200"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#009fe3] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 pt-2">
              IDGen can work from customer-supplied artwork or the approved design requirements for the project.
            </p>
          </div>
        </section>

        {/* ── 13. LANYARD QUALITY CONSIDERATIONS ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Evaluation Standards"
            title="Lanyard Quality Considerations"
            lede="For bulk organizational requirements, the lanyard should be evaluated as part of the complete identification setup."
          />

          <div className="mt-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Important considerations include:
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {qualityFactors.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3.5 text-xs font-bold text-slate-800 dark:text-slate-200"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#009fe3] shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
              Where the lanyard is being supplied with other identification components, the complete configuration should be confirmed before production.
            </p>
          </div>
        </section>

        {/* ── 14. ULTRASONIC SEALING WITH LANYARD ATTACHMENTS (With Ultrasonic Image) ── */}
        <section className="mt-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  Finishing Option
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Ultrasonic Sealing With Lanyard Attachments
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                For suitable identification configurations, IDGen also provides ultrasonic sealing as an attachment/finishing option.
              </p>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Ultrasonic sealing can be used to create a more integrated attachment between the lanyard and selected components.
              </p>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                It is particularly relevant when the customer wants a finished identification assembly rather than simply receiving loose lanyards.
              </p>
              <div className="pt-3">
                <Link
                  href="/ultrasonic-sealing/"
                  className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-6 py-3 text-xs font-bold text-white shadow transition hover:bg-[#008bc9]"
                >
                  <span>Learn About Ultrasonic Sealing</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Ultrasonic Photo */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto w-full">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#009fe3]/25 via-cyan-500/15 to-blue-600/20 blur-xl opacity-70" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src="/images/ultrasonic-sealed-lanyard-attachment.jpg"
                      alt="Ultrasonic sealed lanyard attachment for ID card"
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-xs font-bold text-cyan-300 border border-white/15 shadow-sm">
                        <Waves className="h-3 w-3 text-cyan-400" />
                        <span>Acoustic Fusion</span>
                      </span>
                      <span className="rounded-full bg-[#009fe3] px-3 py-1 text-xs font-black text-white shadow-md">
                        Welded Loop
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <div className="rounded-2xl border border-white/15 bg-slate-950/80 backdrop-blur-md p-3.5 shadow-xl flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">
                            Smooth &amp; Tear-Proof
                          </p>
                          <p className="text-xs sm:text-sm font-black text-white">
                            Zero Metal Staples
                          </p>
                        </div>
                        <span className="text-[10px] font-bold text-slate-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                          Guwahati
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 15. CUSTOM LANYARDS AS PART OF A COMPLETE IDENTIFICATION ORDER ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Order Configurations"
            title="Custom Lanyards as Part of a Complete Identification Order"
            lede="Organizations can purchase lanyards separately or combine them with other identification products. This allows customers to select only the components required for their project."
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {configTiers.map((tier) => (
              <div
                key={tier.title}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md transition-all duration-300 hover:border-[#009fe3] hover:shadow-xl"
              >
                <div>
                  <span className="rounded-full bg-sky-100 dark:bg-cyan-950/60 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 border border-sky-200 dark:border-cyan-800/50">
                    {tier.badge}
                  </span>
                  <h3 className="mt-4 font-extrabold text-slate-900 dark:text-white text-lg">
                    {tier.title}
                  </h3>
                  <div className="mt-4 pt-2">
                    <FlowChain steps={tier.formula} />
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {tier.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/pricing/"
              className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/25 transition hover:bg-[#008bc9]"
            >
              <span>View Complete Pricing</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* ── 16. HOW TO ORDER CUSTOM PRINTED LANYARDS (8 Steps) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Step-by-Step"
            title="How to Order Custom Printed Lanyards"
          />

          <div className="mt-8">
            <WorkflowSteps steps={orderSteps} />
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/request-a-quote/"
              className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/25 transition hover:bg-[#008bc9]"
            >
              <span>Request a Quote</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* ── 17. CUSTOM PRINTED LANYARD PRICE ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  Pricing Policy
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Custom Printed Lanyard Price
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                The current price should be maintained centrally on the IDGen Pricing page rather than duplicating quantity-based pricing across multiple service pages. This keeps pricing consistent across the website and prevents different pages from showing outdated prices.
              </p>

              <div className="mt-6 rounded-2xl border border-sky-200/90 dark:border-slate-800 bg-gradient-to-br from-sky-50/70 to-white dark:from-slate-950 dark:to-slate-900 p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                      Standard Product
                    </span>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white mt-1">
                      20 mm Custom Printed Lanyard
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Subject to current quotation, quantity and applicable specifications.
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="text-3xl font-black text-slate-900 dark:text-white">
                      ₹15 <span className="text-xs font-normal text-slate-500 dark:text-slate-400">/ piece</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/pricing/"
                  className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/25 transition hover:bg-[#008bc9]"
                >
                  <span>View Current Lanyard Pricing</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 18. FREQUENTLY ASKED QUESTIONS (Strictly 11 FAQs from Document) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Questions &amp; Answers"
            title="Frequently Asked Questions"
          />

          <div className="mt-8">
            <FaqList faqs={faqs} />
          </div>
        </section>

        {/* ── 19. NEED CUSTOM PRINTED LANYARDS? (Closing CTA Band) ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-[#071322] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 h-64 w-64 bg-[#009fe3]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-3xl space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-950/80 border border-cyan-800/60 px-3.5 py-1 text-xs font-bold text-cyan-300 uppercase tracking-widest">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                <span>Get Started with IDGen</span>
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                Need Custom Printed Lanyards?
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                Whether you need branded lanyards for students, employees, organizations, members or events, IDGen can provide custom printed lanyards according to your approved branding and application requirements.
              </p>

              <div className="pt-2">
                <FlowChain
                  steps={[
                    "20 mm Custom Printed Lanyards",
                    "Custom Branding",
                    "Artwork Approval",
                    "Production",
                    "Quality Check",
                    "Dispatch",
                  ]}
                  dark
                />
              </div>

              <div className="pt-4 flex flex-wrap gap-3.5">
                <Link
                  href="/request-a-quote/"
                  className="rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/30 transition hover:bg-[#008bc9]"
                >
                  Request a Lanyard Quote
                </Link>
                <Link
                  href="/pricing/"
                  className="rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 20. GEOGRAPHIC / INTERNAL LINKING REFERENCE DIRECTORY ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm">
            <div className="flex items-center gap-2 text-[#009fe3] dark:text-cyan-400 mb-3">
              <MapPin className="h-4 w-4" />
              <span className="text-xs font-bold tracking-widest uppercase">
                Assam &amp; Northeast India Hub
              </span>
            </div>
            <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
              Direct ID Card &amp; Lanyard Printing Services Across Northeast India
            </h3>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              IDGen supplies custom lanyard printing in Guwahati, custom printed lanyards in Assam, ID card lanyard printing in Guwahati, and bulk lanyard printing across all Northeast India regions.
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
