import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Ticket,
  Presentation,
  Store,
  Building2,
  Trophy,
  School,
  Link as LinkIcon,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Eye,
  ShieldCheck,
  Users,
  Palette,
  QrCode,
  Waves,
  MapPin,
  ClipboardList,
  Layers,
  FileCheck,
  Zap,
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
  title: "Event Card Printing | Custom Event Badges & Lanyards | IDGen",
  description:
    "Custom event card printing for conferences, exhibitions, seminars, workshops and corporate events. Personalized event badges with lanyards, one or two hooks and ultrasonic sealing options.",
  path: "/event-card-printing/",
});

/* ── Document Data Arrays (ALL Strictly from Document) ── */

const attendeesIdentified = [
  "Participants",
  "Delegates",
  "Speakers",
  "Organizers",
  "Staff",
  "Volunteers",
  "Exhibitors",
  "Sponsors",
  "VIP guests",
  "Media representatives",
  "Visitors",
];

const customCardFields = [
  "Participant name",
  "Photograph",
  "Organization",
  "Designation",
  "Participant category",
  "Registration number",
  "Event name",
  "Event logo",
  "Sponsor branding",
  "QR code",
  "Barcode",
  "Department",
  "Other event-specific information",
];

const eventCategoriesList = [
  { name: "Delegate", color: "border-blue-500/30 bg-blue-50/60 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300" },
  { name: "Speaker", color: "border-emerald-500/30 bg-emerald-50/60 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300" },
  { name: "Organizer", color: "border-amber-500/30 bg-amber-50/60 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300" },
  { name: "Staff", color: "border-purple-500/30 bg-purple-50/60 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300" },
  { name: "Exhibitor", color: "border-cyan-500/30 bg-cyan-50/60 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300" },
  { name: "Sponsor", color: "border-rose-500/30 bg-rose-50/60 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300" },
  { name: "VIP", color: "border-yellow-500/30 bg-yellow-50/60 dark:bg-yellow-950/40 text-yellow-700 dark:text-yellow-300" },
  { name: "Media", color: "border-indigo-500/30 bg-indigo-50/60 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300" },
  { name: "Volunteer", color: "border-teal-500/30 bg-teal-50/60 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300" },
  { name: "Visitor", color: "border-slate-500/30 bg-slate-50/60 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300" },
];

const eventTypes = [
  {
    icon: Presentation,
    title: "Conference Cards",
    body: "Suitable for business conferences, industry conferences, academic conferences, and professional conferences. Typical identification: Conference Card + Lanyard + Hook.",
  },
  {
    icon: Building2,
    title: "Seminar & Workshop Cards",
    body: "Suitable for seminars, workshops, training programmes, and educational programmes. Cards can identify participants, speakers, trainers and organizers.",
  },
  {
    icon: Store,
    title: "Exhibition & Trade Show Badges",
    body: "Suitable for exhibitions, trade fairs, trade shows, and product exhibitions. Different card designs can be used for: Visitor, Exhibitor, Organizer, Speaker, VIP.",
  },
  {
    icon: Users,
    title: "Corporate Event Cards",
    body: "Suitable for corporate meetings, annual events, employee programmes, dealer meets, conferences, and product launches. Event branding can be incorporated into the card design.",
  },
  {
    icon: School,
    title: "School & Institutional Events",
    body: "Suitable for annual functions, cultural programmes, sports events, academic programmes, workshops, and institutional conferences.",
    href: "/student-id-card-printing/",
  },
  {
    icon: Trophy,
    title: "Sports Event Cards",
    body: "Suitable for sports tournaments, competitions, school sports events, college events, marathon events, and institutional sports programmes. Different categories can be identified through card design and participant information.",
  },
];

const eventSolutions = [
  {
    type: "Conferences",
    setup: ["Personalized Event Card", "Lanyard", "Hook"],
    desc: "Suitable for delegates, speakers, organizers and VIPs.",
  },
  {
    type: "Exhibitions",
    setup: ["Exhibition Badge", "Lanyard", "Attachment"],
    desc: "Different badge categories can identify exhibitors, visitors and organizers.",
  },
  {
    type: "Corporate Events",
    setup: ["Branded Event Card", "Lanyard", "Hook"],
    desc: "Designed around corporate branding and participant categories.",
  },
  {
    type: "Workshops",
    setup: ["Workshop Badge", "Lanyard"],
    desc: "Suitable for participants, trainers and organizers.",
  },
  {
    type: "Sports Events",
    setup: ["Participant Card", "Lanyard", "Attachment"],
    desc: "Suitable for tournaments and institutional sporting events.",
  },
  {
    type: "Institutional Programmes",
    setup: ["Event Card", "Lanyard", "Hook"],
    desc: "Suitable for schools, colleges, universities and other institutions.",
  },
];

const bulkSupportedFactors = [
  "Number of participants",
  "Card specification",
  "Personalization",
  "Artwork",
  "Categories",
  "Attachment configuration",
  "Data readiness",
  "Required delivery timeline",
];

const processSteps = [
  {
    title: "01 - Event Requirement",
    body: "Tell us: Event type, Approximate quantity, Event date, Card requirement, Personalization requirement, Attachment requirement.",
  },
  {
    title: "02 - Share Participant Data",
    body: "Provide the participant information and photographs where personalization is required.",
  },
  {
    title: "03 - Share Artwork",
    body: "Provide the event logo, branding and design requirements.",
  },
  {
    title: "04 - Select Attachment",
    body: "Choose the required configuration: One Hook + Lanyard or Two Hooks + Lanyard. If ultrasonic sealing is required, the sealing configuration will correspond to the attachment setup.",
  },
  {
    title: "05 - Preview",
    body: "The design and personalized information can be reviewed where applicable.",
  },
  {
    title: "06 - Approval",
    body: "Production begins after the required specifications and artwork are approved.",
  },
  {
    title: "07 - Production",
    body: "The event cards and required components move into production.",
  },
  {
    title: "08 - Quality Check",
    body: "Finished materials are checked against the approved requirements.",
  },
  {
    title: "09 - Dispatch",
    body: "The completed order is prepared for dispatch according to the applicable project timeline.",
  },
];

const qualityChecks = [
  { title: "Personalization", body: "Names, photographs and registration information." },
  { title: "Artwork", body: "Event branding and approved design." },
  { title: "Specifications", body: "Card size and required printing specifications." },
  { title: "Attachment", body: "Correct hook and lanyard configuration." },
  { title: "Final Assembly", body: "Where applicable, the complete wearable setup is checked before dispatch." },
];

const informationNeeded = [
  {
    title: "Basic Information",
    items: ["Event name", "Event date", "Quantity", "Event location", "Required delivery date"],
  },
  {
    title: "Card Information",
    items: ["Card size", "Single or double-sided printing", "Personalization requirement", "Photograph requirement", "QR/barcode requirement"],
  },
  {
    title: "Branding",
    items: ["Event logo", "Organization logo", "Sponsor logos", "Artwork", "Brand colours"],
  },
  {
    title: "Attachment",
    items: ["One-hook configuration", "Two-hook configuration", "Lanyard requirement", "Ultrasonic sealing requirement"],
  },
];

const brandingElements = [
  "Event logo",
  "Event name",
  "Organizer logo",
  "Sponsor logos",
  "Brand colours",
  "Event theme",
  "Category",
  "Participant information",
  "QR codes",
  "Barcodes",
  "Custom graphics",
];

const pricingFactors = [
  "Quantity",
  "Card specification",
  "Printing",
  "Personalization",
  "Artwork",
  "Lanyard",
  "Hook configuration",
  "Ultrasonic sealing",
  "Packaging",
  "Delivery requirements",
];

const configPackages = [
  {
    title: "Event Card",
    badge: "Direct Pass",
    formula: ["Custom Printed Event Card"],
    desc: "Card-only option when organizers already have their own accessories or clips.",
  },
  {
    title: "Wearable Event Badge",
    badge: "Single-Point Setup",
    formula: ["Event Card", "Hook", "Lanyard"],
    desc: "Standard conference setup with central hook clip and branded lanyard.",
  },
  {
    title: "Two-Point Event Badge",
    badge: "Anti-Flip Setup",
    formula: ["Event Card", "Two Hooks", "Lanyard"],
    desc: "Dual corner hook attachment preventing badges from flipping during summits.",
  },
  {
    title: "Sealed Configuration",
    badge: "Ultrasonic Assembly",
    formula: ["Event Card", "Hook Configuration", "Ultrasonic Sealing", "Lanyard"],
    desc: "Integrated acoustic welded ribbon loops for seamless, staple-free badge security.",
  },
];

const faqs: Faq[] = [
  {
    q: "What is an event card?",
    a: "An event card is a customized identification badge used to identify participants, delegates, speakers, organizers, exhibitors, staff, VIPs or other event attendees.",
  },
  {
    q: "Can event cards include photographs?",
    a: "Yes. Personalized event cards can include photographs when required and supplied as part of the event data.",
  },
  {
    q: "Can event cards include QR codes?",
    a: "Yes. QR codes can be included when required as part of the approved card design.",
  },
  {
    q: "Can event cards include sponsor logos?",
    a: "Yes. Sponsor and partner branding can be incorporated into the approved event-card artwork.",
  },
  {
    q: "Do event cards use holders?",
    a: "Event cards can use different attachment configurations. The required setup may use a lanyard and one or two hooks rather than a conventional card holder.",
  },
  {
    q: "Can event cards use two hooks?",
    a: "Yes. A two-hook configuration can be used where the event-card design requires two attachment points.",
  },
  {
    q: "How many ultrasonic sealing points are required?",
    a: "For the configurations used by IDGen, one-hook setups use one sealing point and two-hook setups use two sealing points.",
  },
  {
    q: "Can I order event cards with lanyards?",
    a: "Yes. Event cards can be supplied with the required lanyard and hook configuration.",
  },
  {
    q: "Can I order only event cards?",
    a: "Yes. Event cards can be ordered separately when the customer already has the required accessories.",
  },
  {
    q: "Can event cards be personalized?",
    a: "Yes. Participant names, photographs, organizations, categories, registration numbers and other required information can be personalized.",
  },
  {
    q: "Can IDGen handle bulk event cards?",
    a: "Yes. IDGen supports bulk event-card requirements, subject to quantity, specification, personalization and production requirements.",
  },
  {
    q: "Can I review the event cards before production?",
    a: "Where applicable, the design and personalized information can be reviewed before production.",
  },
];

const internalLinks = [
  { topic: "Custom lanyards", href: "/custom-printed-lanyard-printing/" },
  { topic: "Ultrasonic sealing", href: "/ultrasonic-sealing/" },
  { topic: "Hooks", href: "/id-card-hooks/" },
  { topic: "Event card pricing", href: "/pricing/" },
  { topic: "Student identification", href: "/student-id-card-printing/" },
  { topic: "Employee identification", href: "/employee-id-card-printing/" },
  { topic: "Digital data collection", href: "/idgen-studio/" },
  { topic: "Main ID card service", href: "/id-card-printing/" },
  { topic: "Why IDGen", href: "/why-idgen/" },
  { topic: "Guwahati service", href: "/service-areas/assam/guwahati/" },
  { topic: "Assam service", href: "/service-areas/assam/" },
  { topic: "Request a Quote", href: "/request-a-quote/" },
];

export default function EventCardPrintingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Event Card Printing",
          description:
            "Custom event cards and badges for conferences, exhibitions, seminars, workshops and corporate events. Personalized event badges with lanyards, one or two hooks and ultrasonic sealing options.",
          path: "/event-card-printing/",
        })}
      />

      {/* ── 1. ULTRA-PREMIUM LIGHT/DARK HERO SECTION ── */}
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
                  <Ticket className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                  <span>Event Card Printing</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight text-slate-950 dark:text-white leading-[1.15]">
                  Custom Event Cards &amp; Badges for Conferences, Exhibitions, Seminars &amp; Events
                </h1>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  IDGen provides custom printed event cards and badges for conferences, seminars, exhibitions, workshops, corporate events, institutional programmes, trade shows, cultural events, sports events and other organized gatherings. Event cards can be personalized with participant information, event branding, organization logos, photographs, QR codes, barcodes, categories and other required information. Depending on the event format, the card can be supplied with the appropriate lanyard and hook configuration, including one-hook or two-hook arrangements.
                </p>
              </div>

              {/* Integrated Structured Workflow Card */}
              <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/60 dark:bg-slate-900/80 p-5 shadow-xs space-y-3">
                <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                  Event Identification Workflow:
                </p>

                {/* Flow Chain */}
                <div className="rounded-xl border border-sky-200/90 dark:border-slate-800 bg-white dark:bg-slate-950 p-3.5 text-xs sm:text-[13px] font-bold text-slate-900 dark:text-cyan-300 tracking-wide flex flex-wrap items-center gap-x-2 gap-y-1.5 shadow-2xs">
                  <span>Event Data</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Card Design</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Preview</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Approval</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Printing</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Attachment</span>
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
                  <span>Request Event Card Quote</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/pricing/"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-7 py-3.5 text-sm font-bold text-slate-800 dark:text-slate-200 shadow-2xs transition-all duration-300 hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 hover:bg-sky-50/40 dark:hover:bg-slate-700 hover:-translate-y-0.5"
                >
                  <span>View Event Card Pricing</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Image with Visible IDGen Brand */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative h-full min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] w-full rounded-3xl overflow-hidden border-2 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-xl group flex flex-col justify-between">
                <Image
                  src="/images/idgen-custom-event-card-printing.jpg"
                  alt="Custom event card printing with lanyard and hook by IDGen"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent pointer-events-none" />

                {/* Top Floating Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-cyan-300 border border-white/15 shadow-sm">
                    <Sparkles className="h-3 w-3 text-cyan-400" />
                    <span>Conference Pass</span>
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
                        Accreditation Solutions
                      </p>
                      <p className="text-xs sm:text-sm font-black text-white">
                        Full-Color Personalized Badges
                      </p>
                    </div>
                    <span className="text-[10px] font-bold text-slate-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                      IDGen Guwahati
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="pb-14 pt-6 sm:pt-10">
        {/* ── 2. WHAT IS AN EVENT CARD? & WHO IT IDENTIFIES ── */}
        <section className="mt-0">
          <div className="w-full">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
              <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                Identification Scope
              </p>
              <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl md:text-[1.75rem] lg:text-[2rem] xl:text-[2.15rem] leading-[1.15] tracking-tighter w-full">
              What Is an Event Card?
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 max-w-3xl">
              An event card is a personalized identification card or badge used to identify people attending or working at an event. The card can be designed according to the event's branding and identification requirements.
            </p>
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              It can identify:
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {attendeesIdentified.map((person) => (
                <div
                  key={person}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 p-3 text-xs font-bold text-slate-900 dark:text-slate-100 shadow-2xs transition-all hover:border-[#009fe3]"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#009fe3] shrink-0" />
                  <span>{person}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. CUSTOM EVENT CARD PRINTING & SPECIMEN ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Customization Fields"
            title="Custom Event Card Printing"
            lede="Every event can have different identification requirements. IDGen can customize event cards with required information."
          />

          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left: Custom fields grid */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-lg space-y-4">
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  Available personalized card elements:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {customCardFields.map((field) => (
                    <div
                      key={field}
                      className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-2.5 text-xs font-bold text-slate-800 dark:text-slate-200"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                      <span>{field}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Example Layout Specimen Box */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border-2 border-[#009fe3]/40 bg-gradient-to-br from-slate-950 via-slate-900 to-[#071526] p-7 text-white shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                    Layout Specimen
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">Example Structure</span>
                </div>

                <div className="space-y-2 text-center py-2">
                  <div className="text-xs font-mono tracking-widest text-cyan-300 font-bold uppercase">
                    EVENT LOGO
                  </div>
                  <div className="text-sm sm:text-base font-black text-white uppercase tracking-tight">
                    ANNUAL BUSINESS CONFERENCE 2026
                  </div>
                  <div className="pt-2 text-base font-extrabold text-white">SUMIT GUPTA</div>
                  <div className="text-xs text-cyan-400 font-bold">IDGen</div>
                  <div className="inline-block mt-2 rounded-full bg-[#009fe3] px-4 py-1 text-xs font-black text-white">
                    DELEGATE
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 pt-1">
                    Registration No. 10254
                  </div>
                </div>

                <div className="border-t border-white/10 pt-3 text-center">
                  <p className="text-xs text-slate-400 italic">
                    The final information and design depend on the event requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. EVENT CARD TYPES ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Event Formats"
            title="Event Card Types"
            lede="IDGen can produce event identification cards for different event categories."
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {eventTypes.map((type) => (
              <div
                key={type.title}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md transition-all duration-300 hover:border-[#009fe3] hover:shadow-xl"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3] dark:text-cyan-400 border border-sky-100 dark:border-cyan-800/40 shadow-xs">
                    <type.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-extrabold text-slate-900 dark:text-white text-base">
                    {type.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                    {type.body}
                  </p>
                </div>

                {type.href && (
                  <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <Link
                      href={type.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] transition hover:text-[#008bc9]"
                    >
                      <span>Explore Student ID Cards</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. EVENT CARD + LANYARD + HOOK (ONE-HOOK VS TWO-HOOK) ── */}
        <section className="mt-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Real Comparison Photo Generated with Nano Banana */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto w-full">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#009fe3]/25 via-cyan-500/15 to-blue-600/20 blur-xl opacity-70" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src="/images/idgen-event-card-one-hook-two-hook-configuration.jpg"
                      alt="Event card one-hook and two-hook lanyard attachment configurations with IDGen branding"
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-xs font-bold text-cyan-300 border border-white/15 shadow-sm">
                        <Sparkles className="h-3 w-3 text-cyan-400" />
                        <span>Attachment Options</span>
                      </span>
                      <span className="rounded-full bg-[#009fe3] px-3 py-1 text-xs font-black text-white shadow-md">
                        IDGen
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <div className="rounded-2xl border border-white/15 bg-slate-950/80 backdrop-blur-md p-3.5 shadow-xl flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">
                            1-Hook vs 2-Hook
                          </p>
                          <p className="text-xs sm:text-sm font-black text-white">
                            Single vs Anti-Flip Dual Attachment
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
            </div>

            {/* Right Column: Attachment Details */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2">
                  <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                  <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                    Hardware Attachment
                  </p>
                  <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  Event Card + Lanyard + Hook
                </h2>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Event cards are commonly designed as a wearable identification system. Unlike standard employee or student ID cards, event badges may use different attachment configurations depending on the card format and lanyard design.
                </p>
              </div>

              <div className="space-y-3">
                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                    One-Hook Configuration
                  </span>
                  <FlowChain steps={["Event Card", "One Hook", "Lanyard"]} />
                  <p className="text-xs text-slate-500 dark:text-slate-400 pt-1">
                    This configuration may be suitable where the card has a single attachment point.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                    Two-Hook Configuration
                  </span>
                  <FlowChain steps={["Event Card", "Two Hooks", "Lanyard"]} />
                  <p className="text-xs text-slate-500 dark:text-slate-400 pt-1">
                    This configuration can be used where the event card requires attachment at two points.
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                The correct configuration depends on the card design and attachment requirement.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-1">
                <Link
                  href="/custom-printed-lanyard-printing/"
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3] hover:text-[#009fe3]"
                >
                  <span>Explore Custom Printed Lanyard Printing</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/id-card-hooks/"
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3] hover:text-[#009fe3]"
                >
                  <span>Explore ID Card Hooks</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. ULTRASONIC SEALING FOR EVENT CARDS ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  Acoustic Fusion
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Ultrasonic Sealing for Event Cards
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 max-w-3xl">
                Where ultrasonic sealing is required, the sealing arrangement corresponds to the attachment configuration. This allows the attachment to be integrated into the required lanyard configuration.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-950/80 p-5 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                  One-Hook Event Setup
                </span>
                <FlowChain steps={["Event Card", "One Hook", "One Ultrasonic Sealing Point", "Lanyard"]} />
              </div>

              <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-950/80 p-5 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                  Two-Hook Event Setup
                </span>
                <FlowChain steps={["Event Card", "Two Hooks", "Two Ultrasonic Sealing Points", "Lanyard"]} />
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/ultrasonic-sealing/"
                className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-6 py-3 text-xs font-bold text-white shadow transition hover:bg-[#008bc9]"
              >
                <span>Explore Ultrasonic Sealing</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 7. WHY EVENT CARDS NEED THE RIGHT ATTACHMENT ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-5">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  Wearable Balance
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Why Event Cards Need the Right Attachment
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                An event card is not only a printed badge. The final wearable setup depends on:
              </p>
            </div>

            <div className="rounded-2xl border border-sky-200/80 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-950 p-4">
              <FlowChain steps={["Card Design", "Attachment Position", "Hook Configuration", "Lanyard"]} />
            </div>

            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              An incorrect attachment configuration can affect how the badge hangs or is worn. That is why IDGen can determine the appropriate configuration based on the event card design and customer requirements before production.
            </p>
          </div>
        </section>

        {/* ── 8. EVENT CARD CATEGORIES ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Tier Segregation"
            title="Event Card Categories"
            lede="Large events may require different identification categories. Each category can have its own design, colour treatment, text or other visual identification elements."
          />

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {eventCategoriesList.map((cat) => (
              <div
                key={cat.name}
                className={`flex items-center justify-between rounded-2xl border p-4 shadow-sm ${cat.color}`}
              >
                <span className="text-sm font-extrabold uppercase tracking-wider">{cat.name}</span>
                <span className="text-[10px] font-bold opacity-75">{cat.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── 9. EVENT BRANDING & EXAMPLE BRANDING STRUCTURE ── */}
        <section className="mt-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left: Branding elements */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  Visual Identity
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Event Branding
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Event cards can become part of the overall visual identity of an event. Branding can include:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                {brandingElements.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-2.5 text-xs font-bold text-slate-900 dark:text-slate-100"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Example Branding Structure Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border-2 border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-xl space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                  Example Branding Structure
                </span>

                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4 space-y-2 text-center font-mono text-xs font-bold text-slate-800 dark:text-slate-200">
                  <div className="text-cyan-500">EVENT LOGO</div>
                  <div className="text-slate-400">↓</div>
                  <div className="text-slate-900 dark:text-white">EVENT NAME</div>
                  <div className="text-slate-400">↓</div>
                  <div className="text-slate-900 dark:text-white">PARTICIPANT NAME</div>
                  <div className="text-slate-400">↓</div>
                  <div className="text-slate-700 dark:text-slate-300">ORGANIZATION</div>
                  <div className="text-slate-400">↓</div>
                  <div className="text-[#009fe3]">CATEGORY</div>
                  <div className="text-slate-400">↓</div>
                  <div className="text-slate-500">QR / BARCODE</div>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 italic text-center">
                  The final design is prepared according to the approved event artwork.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. PERSONALIZED EVENT CARDS ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  Data Ingestion
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Personalized Event Cards
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 max-w-3xl">
                For events requiring personalized badges, IDGen can process participant information and photographs according to the supplied data.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-950 p-4">
              <FlowChain steps={["Participant Data", "Photograph", "Badge Design", "Preview", "Approval", "Printing"]} />
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400">
              For larger events, the digital data workflow can be supported through IDGen Studio, where applicable.
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

        {/* ── 11. EVENT CARD PRINTING FOR BULK EVENTS ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Mass Production"
            title="Event Card Printing for Bulk Events"
            lede="Event requirements can range from small programmes to large conferences involving thousands of participants. IDGen can support bulk event-card requirements."
          />

          <div className="mt-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Bulk requirements evaluated by:
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {bulkSupportedFactors.map((f) => (
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
              For large personalized orders, having the participant data ready before production can significantly simplify the workflow.
            </p>
          </div>
        </section>

        {/* ── 12. EVENT CARD PRINTING PROCESS (9 Steps) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Production Lifecycle"
            title="Event Card Printing Process"
          />

          <div className="mt-8">
            <WorkflowSteps steps={processSteps} />
          </div>
        </section>

        {/* ── 13. EVENT CARD SOLUTIONS BY EVENT TYPE ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Tailored Solutions"
            title="Event Card Solutions by Event Type"
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {eventSolutions.map((sol) => (
              <div
                key={sol.type}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md transition-all duration-300 hover:border-[#009fe3] hover:shadow-xl"
              >
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                    {sol.type}
                  </span>
                  <div className="mt-3">
                    <FlowChain steps={sol.setup} />
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                    {sol.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 14. EVENT CARD VS STUDENT OR EMPLOYEE ID CARD ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  Comparative Purpose
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Event Card vs Student or Employee ID Card
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Event cards are generally created for a specific event or programme, whereas student and employee ID cards are normally used for ongoing organizational identification.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#009fe3]">
                  Event Identification
                </span>
                <FlowChain steps={["Event", "Participant", "Badge", "Lanyard"]} />
              </div>

              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#009fe3]">
                  Student Identification
                </span>
                <FlowChain steps={["Student", "Institution", "ID Card", "Holder/Lanyard"]} />
              </div>

              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#009fe3]">
                  Employee Identification
                </span>
                <FlowChain steps={["Employee", "Company", "ID Card", "Holder/Lanyard"]} />
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400">
              If the requirement is an ongoing student or employee identification system, use the relevant dedicated service page.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/student-id-card-printing/"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-5 py-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3] hover:text-[#009fe3]"
              >
                <span>Student ID Card Printing</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/employee-id-card-printing/"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-5 py-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3] hover:text-[#009fe3]"
              >
                <span>Employee ID Card Printing</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 15. WHAT INFORMATION DO WE NEED? ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Quotation Checklist"
            title="What Information Do We Need?"
            lede="To prepare an event-card quotation, customers should ideally provide the following information to help determine the appropriate event-card configuration."
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {informationNeeded.map((grp) => (
              <div
                key={grp.title}
                className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md space-y-3"
              >
                <h3 className="font-extrabold text-slate-900 dark:text-white text-sm uppercase tracking-wider text-[#009fe3]">
                  {grp.title}
                </h3>
                <ul className="space-y-2">
                  {grp.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── 16. EVENT CARD QUALITY CHECKS ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Quality Assurance"
            title="Event Card Quality Checks"
            lede="For personalized event badges, IDGen's quality workflow focuses on both the printed information and the final configuration."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {qualityChecks.map((qc) => (
              <div
                key={qc.title}
                className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm space-y-2"
              >
                <div className="flex items-center gap-2 text-[#009fe3]">
                  <CheckCircle2 className="h-4 w-4" />
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-sm">
                    {qc.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {qc.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 17. EVENT CARD PRICING ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  Transparent Quotes
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Event Card Pricing
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Event-card pricing depends on the required configuration rather than only the printed card. Factors may include:
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
              {pricingFactors.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-2.5 text-xs font-bold text-slate-800 dark:text-slate-200"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              This keeps the service page focused on the solution while the dedicated pricing pages handle current price information.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/pricing/"
                className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-6 py-3 text-xs font-bold text-white shadow transition hover:bg-[#008bc9]"
              >
                <span>View Event Card Pricing</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/pricing/"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-5 py-3 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3] hover:text-[#009fe3]"
              >
                <span>View Custom Printed Lanyard Pricing</span>
              </Link>
              <Link
                href="/pricing/"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-5 py-3 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3] hover:text-[#009fe3]"
              >
                <span>View Ultrasonic Sealing Pricing</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── 18. WHY CHOOSE IDGEN FOR EVENT CARDS? ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  End-to-End Coordination
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Why Choose IDGen for Event Cards?
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                For event identification, the important part is not just printing the badge. IDGen can coordinate the complete requirement:
              </p>
            </div>

            <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-950 p-4">
              <FlowChain steps={["Event Data", "Design", "Preview", "Card Printing", "Hook/Lanyard Configuration", "Sealing", "Quality Check", "Dispatch"]} />
            </div>

            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              This allows event organizers to define the required identification setup before production instead of coordinating each component independently.
            </p>

            <div>
              <Link
                href="/request-a-quote/"
                className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/25 transition hover:bg-[#008bc9]"
              >
                <span>Request an Event Card Quote</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 19. FREQUENTLY ASKED QUESTIONS (Strictly 12 FAQs from Document) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Questions &amp; Answers"
            title="Frequently Asked Questions"
          />

          <div className="mt-8">
            <FaqList faqs={faqs} />
          </div>
        </section>

        {/* ── 20. NEED EVENT CARDS? (Closing CTA Band) ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-[#071322] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 h-64 w-64 bg-[#009fe3]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-3xl space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-950/80 border border-cyan-800/60 px-3.5 py-1 text-xs font-bold text-cyan-300 uppercase tracking-widest">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                <span>Event Solutions</span>
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                Need Event Cards?
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                Whether you are organizing a conference, exhibition, seminar, workshop, corporate event, sports programme or institutional event, IDGen can provide customized event cards according to the required identification configuration.
              </p>

              <div className="grid gap-3 sm:grid-cols-2 pt-2">
                {configPackages.map((pkg) => (
                  <div key={pkg.title} className="rounded-2xl border border-white/15 bg-white/5 p-4 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                      {pkg.badge}
                    </span>
                    <h4 className="font-extrabold text-white text-sm">{pkg.title}</h4>
                    <FlowChain steps={pkg.formula} dark />
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-3.5">
                <Link
                  href="/request-a-quote/"
                  className="rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/30 transition hover:bg-[#008bc9]"
                >
                  Request Event Card Quote
                </Link>
                <Link
                  href="/pricing/"
                  className="rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  View Event Card Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 21. SUMMARY BANNER (Strictly from Document) ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-900 p-8 sm:p-10 shadow-sm text-center space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#009fe3]">
              IDGen Event Card Printing
            </span>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              Custom Event Identification for Conferences, Exhibitions &amp; Events
            </h2>
            <div className="flex justify-center pt-2">
              <FlowChain steps={["Data", "Design", "Preview", "Approval", "Printing", "Attachment", "Quality Check", "Dispatch"]} />
            </div>
          </div>
        </section>

        {/* ── 22. GEOGRAPHIC / INTERNAL LINKING REFERENCE DIRECTORY ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm">
            <div className="flex items-center gap-2 text-[#009fe3] dark:text-cyan-400 mb-3">
              <MapPin className="h-4 w-4" />
              <span className="text-xs font-bold tracking-widest uppercase">
                Assam &amp; Northeast India Hub
              </span>
            </div>
            <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
              Event Card Printing in Guwahati, Assam &amp; Across Northeast India
            </h3>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              IDGen provides fast-turnaround event card printing in Guwahati, Assam, and across all 8 Northeast states for conferences, expos, sports tournaments, and summits.
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
