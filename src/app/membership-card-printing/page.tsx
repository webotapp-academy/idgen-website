import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Eye,
  Settings2,
  Boxes,
  GraduationCap,
  Building2,
  Hotel,
  Users,
  MapPin,
  HelpCircle,
  FileText,
  Workflow,
  BadgeCheck,
  Layers,
  AlertTriangle,
  Send,
  QrCode,
  Barcode,
  Radio,
  Lock,
  RefreshCw,
  Dumbbell,
  HeartHandshake,
  Layout,
  Palette,
  Gamepad2,
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
import { MembershipHeroCarousel } from "@/components/membership-card-printing/MembershipHeroCarousel";
import type { Faq } from "@/data/types";

/* ── SEO Metadata (Strictly from document) ── */
export const metadata = pageMetadata({
  title: "Membership Card Printing | Custom PVC Membership Cards | IDGen",
  description:
    "Custom membership card printing for clubs, gyms, associations, hotels, NGOs and organizations. Personalized PVC membership cards with photos, QR codes, barcodes and branding by IDGen.",
  path: "/membership-card-printing/",
});

/* ── Document Data Arrays (ALL Strictly from Document) ── */

const personalizedInfoItems = [
  "Member photograph",
  "Member name",
  "Membership number",
  "Membership category",
  "Membership plan",
  "Joining date",
  "Validity date",
  "Organization name",
  "Organization logo",
  "QR code",
  "Barcode",
  "Other organization-approved information",
];

const memberCardFunctions = [
  "Identify members",
  "Verify membership",
  "Display membership category",
  "Show membership validity",
  "Support loyalty programmes",
  "Support check-in",
  "Display membership numbers",
  "Connect members with compatible digital systems",
  "Support compatible access-control systems",
];

const customCardElements = [
  "Organization logo",
  "Organization name",
  "Brand colours",
  "Member photograph",
  "Member name",
  "Membership number",
  "Membership category",
  "Membership plan",
  "Joining date",
  "Expiry date",
  "QR code",
  "Barcode",
  "Custom graphics",
  "Terms or instructions",
];

const orgTypesSectors = [
  {
    title: "Gameszone & Gaming Arenas",
    desc: "Rechargeable play passes, VIP gaming cards, time-tracking credentials, and access cards for gamezones, VR lounges, arcade parlours, and entertainment centers.",
    items: ["Gamezone Play Cards", "Rechargeable Arcade Passes", "VR Arena Credentials", "VIP Gamer Passes", "Time-Tracking Cards", "Amusement Park Passes"],
  },
  {
    title: "Clubs",
    desc: "Membership cards for sports clubs, social clubs, cultural clubs, recreation clubs, country clubs, hobby clubs, and community clubs.",
    items: ["Sports clubs", "Social clubs", "Cultural clubs", "Recreation clubs", "Country clubs", "Hobby clubs", "Community clubs"],
  },
  {
    title: "Associations",
    desc: "Suitable for professional associations, trade associations, business associations, industry organizations, community associations, and social organizations.",
    items: ["Professional associations", "Trade associations", "Business associations", "Industry organizations", "Community associations", "Social organizations"],
  },
  {
    title: "Gyms & Fitness Centres",
    desc: "Membership cards displaying member name, photograph, membership number, plan, and validity date.",
    items: ["Member Name", "Photograph", "Membership Number", "Membership Plan", "Validity"],
  },
  {
    title: "Hotels & Resorts",
    desc: "Membership cards for suitable membership, loyalty or guest programmes.",
    items: ["Membership programmes", "Loyalty schemes", "Guest credentials"],
  },
  {
    title: "NGOs & Community Organizations",
    desc: "Cards to identify members, volunteers, coordinators, field teams, and registered participants.",
    items: ["Members", "Volunteers", "Coordinators", "Field teams", "Registered participants"],
  },
];

const qrFunctions = [
  "Identify a member",
  "Retrieve membership information",
  "Support verification",
  "Connect to a digital profile",
  "Support check-in",
  "Link to an organization-controlled webpage or system",
];

const barcodeApplications = [
  "Member identification",
  "Check-in",
  "Membership verification",
  "Internal record lookup",
  "Compatible scanning systems",
];

const bulkScenarios = [
  "New member registration",
  "Annual membership renewal",
  "Membership programme launches",
  "Club member batches",
  "Association membership",
  "Gym memberships",
  "Corporate membership programmes",
  "Replacement cards",
];

const dashboardActions = [
  "Monitor submitted forms",
  "Review member information",
  "Correct/edit submitted information",
  "Approve records",
  "Approve cards batch-wise",
  "Approve all ready records together",
  "Send approved records for production",
];

const confidentialityDataTypes = [
  "Member names",
  "Photographs",
  "Membership numbers",
  "Contact information",
  "Membership categories",
  "Validity dates",
  "Other identification information",
];

const reverseSideElements = [
  "Terms and conditions",
  "Contact information",
  "Emergency information",
  "Membership instructions",
  "QR/barcode",
  "Organization address",
  "Other approved information",
];

const replacementTriggers = [
  "New members",
  "Renewing members",
  "Lost cards",
  "Damaged cards",
  "Updated photographs",
  "Changed membership categories",
  "Updated validity periods",
];

const pricingFactors = [
  "Quantity",
  "Card specification",
  "Single- or double-side printing",
  "Personalization",
  "Photograph/data requirements",
  "QR/barcode requirements",
  "RFID requirements",
  "Holder requirements",
  "Lanyard requirements",
  "Packaging",
  "Delivery",
];

const productionSteps = [
  { title: "01 - Requirement", body: "Share your membership-card requirements and approximate quantity." },
  { title: "02 - Member Data", body: "Provide member information and photographs, or use IDGen Studio where applicable." },
  { title: "03 - Design", body: "Finalize the card artwork and required information." },
  { title: "04 - Preview", body: "Review the design and personalized member information." },
  { title: "05 - Approval", body: "Approve the final records and design." },
  { title: "06 - Production", body: "Approved cards move into production." },
  { title: "07 - Quality Check", body: "Finished cards are checked against the approved requirements." },
  { title: "08 - Assembly", body: "Where required, cards can be combined with suitable holders, hooks and lanyards." },
  { title: "09 - Dispatch", body: "Completed and approved materials are prepared for dispatch according to the applicable order timeline." },
];

const setupPackages = [
  {
    title: "Card Only",
    badge: "Standalone Card",
    formula: ["Membership Card"],
    desc: "Personalized PVC membership card for wallet carry.",
  },
  {
    title: "Wearable",
    badge: "Visible Badge",
    formula: ["Membership Card", "Holder", "Hook", "Lanyard"],
    desc: "Complete wearable setup with 20 mm custom lanyard and holder.",
  },
  {
    title: "Technology-Enabled",
    badge: "RFID Credential",
    formula: ["RFID Membership Card", "Compatible Identification System"],
    desc: "Smart RFID card matched to existing access/attendance system.",
  },
  {
    title: "Digital Workflow",
    badge: "IDGen Studio",
    formula: ["IDGen Studio", "Member Data", "Preview", "Approval", "Production"],
    desc: "Digital member self-onboarding and batch-wise print management.",
  },
];

const whyChooseIdgen = [
  { icon: ShieldCheck, title: "Specialized Identification Experience", body: "IDGen's identification-product experience dates back to 2014, with customers and organizational requirements across Northeast India." },
  { icon: Palette, title: "Customized Membership Cards", body: "Cards can be personalized according to your membership structure and branding." },
  { icon: Boxes, title: "Bulk Production", body: "Suitable for organizations managing larger member batches." },
  { icon: Eye, title: "Digital Data Workflow", body: "IDGen Studio can support structured member data collection and card preview where applicable." },
  { icon: RefreshCw, title: "Batch-Wise Approval", body: "Organizations can approve suitable records progressively rather than necessarily waiting for every member record to be ready." },
  { icon: Layers, title: "Complete Identification Accessories", body: "Where required, membership cards can be combined with holders, hooks and custom printed lanyards." },
  { icon: Workflow, title: "One Identity Partner", body: "Organizations can coordinate card printing and related identification components through one provider." },
];

const eligibleSectors = [
  "Clubs",
  "Associations",
  "NGOs",
  "Gyms",
  "Fitness centres",
  "Sports clubs",
  "Games zones",
  "Entertainment centres",
  "Hotels",
  "Resorts",
  "Spas",
  "Restaurants",
  "Cafés",
  "Food parks",
  "Recreation centres",
  "Professional organizations",
  "Community organizations",
  "Alumni organizations",
  "Other membership programmes",
];

const faqs: Faq[] = [
  { q: "What is a membership ID card?", a: "A membership ID card is a personalized card issued to a registered member of an organization, club, business or membership programme." },
  { q: "Can IDGen print custom membership cards?", a: "Yes. IDGen provides customized membership card printing with member information, photographs, branding, membership numbers, validity and other required details." },
  { q: "Can membership cards include photographs?", a: "Yes. Member photographs can be included where required." },
  { q: "Can membership cards have QR codes?", a: "Yes. QR codes can be printed on membership cards where required. Their actual functionality depends on the organization's supporting system." },
  { q: "Can membership cards have barcodes?", a: "Yes. Barcodes can be included for compatible identification and verification systems." },
  { q: "Can you print RFID membership cards?", a: "RFID membership cards can be considered where the required RFID technology, chip, frequency, reader and software system are compatible." },
  { q: "Can membership cards be printed in bulk?", a: "Yes. IDGen supports bulk membership-card requirements according to quantity, data readiness, design and specifications." },
  { q: "Can membership cards be supplied with lanyards?", a: "Yes. A suitable membership card can be combined with an ID card holder, hook and 20 mm custom printed lanyard where a wearable setup is required." },
  { q: "Can IDGen collect member information digitally?", a: "Yes. IDGen Studio can support customized data collection and card preview for suitable projects." },
  { q: "Can membership cards be printed batch-wise?", a: "Where the configured IDGen Studio workflow supports it, organizations can review and approve suitable records in batches rather than waiting for all member records to be completed." },
  { q: "How much does membership card printing cost?", a: "The price depends on quantity, card specification, personalization, printing requirements, accessories and other project requirements. A quotation should be requested for the exact specification." },
];

const internalLinks = [
  { topic: "General ID cards", href: "/id-card-printing/" },
  { topic: "RFID membership cards", href: "/rfid-card-printing/" },
  { topic: "Custom lanyards", href: "/custom-printed-lanyard-printing/" },
  { topic: "Card Holders", href: "/id-card-holders/" },
  { topic: "Hooks", href: "/id-card-hooks/" },
  { topic: "Digital data collection", href: "/idgen-studio/" },
  { topic: "Why IDGen", href: "/why-idgen/" },
  { topic: "Pricing", href: "/pricing/" },
  { topic: "Service Areas", href: "/service-areas/assam/" },
  { topic: "Request a Quote", href: "/request-a-quote/" },
];

export default function MembershipCardPrintingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Membership Card Printing",
          description:
            "Custom membership card printing for clubs, gyms, associations, hotels, NGOs and organizations. Personalized PVC membership cards with photos, QR codes, barcodes and branding by IDGen.",
          path: "/membership-card-printing/",
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
                  <Award className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                  <span>Membership Card Printing</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight text-slate-950 dark:text-white leading-[1.15]">
                  Custom Membership ID Card Printing for{" "}
                  <span className="bg-gradient-to-r from-[#009fe3] via-[#0284c7] to-[#0369a1] dark:from-[#38bdf8] dark:via-[#009fe3] dark:to-[#38bdf8] bg-clip-text text-transparent">
                    Gameszones, Clubs, Gyms, Associations &amp; Organizations
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  IDGen provides custom membership card printing for gameszones, gaming arenas, arcade parlours, clubs, associations, NGOs, gyms, sports clubs, hotels, resorts, recreational organizations, professional bodies, institutions and other membership-based organizations.
                </p>
              </div>

              {/* Integrated Structured Workflow Card */}
              <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/60 dark:bg-slate-900/80 p-5 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Membership Card Workflow</span>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                  End-to-end institutional workflow from member data collection to final dispatch:
                </p>

                {/* Flow Chain */}
                <div className="rounded-xl border border-sky-200/90 dark:border-slate-800 bg-white dark:bg-slate-950 p-3.5 text-xs sm:text-[13px] font-bold text-slate-900 dark:text-cyan-300 tracking-wide flex flex-wrap items-center gap-x-2 gap-y-1.5 shadow-2xs">
                  <span>Member Data</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Design</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Preview</span>
                  <span className="text-[#009fe3] dark:text-cyan-400">→</span>
                  <span>Approval</span>
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
                  <span>Request a Membership Card Quote</span>
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

            {/* Right Column: Hero Visual Slider Showcase */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
              <MembershipHeroCarousel />
            </div>
          </div>
        </Container>
      </section>

      <Container className="pb-14 pt-6 sm:pt-10">
        {/* ── 2. PERSONALIZED CARD INFORMATION ── */}
        <section className="mt-0">
          <div className="w-full">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
              <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                Personalized Data Printing
              </p>
              <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl md:text-[1.75rem] lg:text-[2rem] xl:text-[2.15rem] leading-[1.15] tracking-tighter w-full">
              We produce personalized membership cards with information such as:
            </h2>
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {personalizedInfoItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 p-3 text-xs font-bold text-slate-900 dark:text-slate-100 shadow-2xs transition-all hover:border-[#009fe3]"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#009fe3] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800 leading-relaxed font-medium">
              Membership cards can be used for member identification, membership verification, loyalty programmes, check-in and compatible identification or access systems, depending on the organization's requirements.
            </p>
          </div>
        </section>

        {/* ── 3. WHAT IS A MEMBERSHIP ID CARD? ── */}
        <section className="mt-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left: Card designs image */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto w-full">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#009fe3]/25 via-cyan-500/15 to-blue-600/20 blur-xl opacity-70" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src="/images/idgen-membership-card-designs-club-gym-association.png"
                      alt="Custom membership card designs for clubs gyms and associations"
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-xs font-bold text-cyan-300 border border-white/15 shadow-sm">
                        <Award className="h-3 w-3 text-cyan-400" />
                        <span>Member Identification</span>
                      </span>
                      <span className="rounded-full bg-[#009fe3] px-3 py-1 text-xs font-black text-white shadow-md">
                        IDGen
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <div className="rounded-2xl border border-white/15 bg-slate-950/80 backdrop-blur-md p-3.5 shadow-xl flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">
                            Registered Member Credentials
                          </p>
                          <p className="text-xs sm:text-sm font-black text-white">
                            Clubs, Gyms &amp; Associations
                          </p>
                        </div>
                        <span className="text-[10px] font-bold text-slate-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                          Specimen
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Definition & Capabilities */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2">
                  <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                  <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                    Definition &amp; Utility
                  </p>
                  <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  What Is a Membership ID Card?
                </h2>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  A membership ID card is a personalized card issued to a registered member of a club, association, business, organization or membership programme.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  A membership card can help an organization:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {memberCardFunctions.map((fn) => (
                    <div
                      key={fn}
                      className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                      <span>{fn}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                The exact information and functionality depend on the organization's membership programme.
              </p>
            </div>
          </div>
        </section>

        {/* ── 4. CUSTOM MEMBERSHIP CARDS — DESIGNED AROUND YOUR ORGANIZATION ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Tailored Design"
            title="Custom Membership Cards"
            lede="Designed Around Your Organization. Membership cards can be customized according to your organization's branding, membership structure and operational requirements."
          />

          <div className="mt-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
              Possible card elements include:
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {customCardElements.map((elem) => (
                <div
                  key={elem}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3 text-xs font-bold text-slate-800 dark:text-slate-200"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#009fe3] shrink-0" />
                  <span>{elem}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800 italic">
              You can provide your existing artwork or discuss the required card design with IDGen.
            </p>
          </div>
        </section>

        {/* ── 5. PVC MEMBERSHIP CARD PRINTING ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  Durable PVC Construction
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                PVC Membership Card Printing
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                IDGen can produce personalized PVC membership cards for organizations that require durable, professional-looking membership identification.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-950 p-4">
              <FlowChain steps={["PVC Card", "Member Information", "Photograph", "Membership Number", "Branding"]} />
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              The exact card specification depends on the organization's requirements. For bulk requirements, the card design and member data can be prepared and approved before production.
            </p>

            <div>
              <Link
                href="/id-card-printing/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] transition hover:text-[#008bc9]"
              >
                <span>Explore ID Card Printing</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 6. MEMBERSHIP CARDS FOR GAMESZONE & DIFFERENT ORGANIZATIONS (6 Sectors) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Industry Adaptability"
            title="Membership Cards for Gameszone & Different Organizations"
            lede="One membership-card service can support gameszones, clubs, gyms, and different types of organizations while maintaining each organization's branding."
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {orgTypesSectors.map((sector) => (
              <div
                key={sector.title}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md transition-all duration-300 hover:border-[#009fe3] hover:shadow-xl"
              >
                <div className="space-y-3">
                  <h3 className="font-black text-slate-900 dark:text-white text-lg">
                    {sector.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                    {sector.desc}
                  </p>
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {sector.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-2 py-0.5 text-[11px] font-semibold text-slate-700 dark:text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6b. DEDICATED GAMESZONE & GAMING ARENA SECTION ── */}
        <section className="mt-20">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-cyan-500/30 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 sm:p-12 text-white shadow-2xl space-y-8">
            {/* Ambient Background Glow */}
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-purple-500/15 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-bold text-cyan-400 backdrop-blur-md">
                  <Gamepad2 className="h-4 w-4" />
                  <span>Gaming &amp; Entertainment Solutions</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                  Gameszone &amp; Gaming Arena <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">Membership Cards</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  IDGen produces custom PVC play cards, rechargeable arcade credentials, RFID contactless passes, and VIP gamer cards tailored specifically for gameszones, VR lounges, esports arenas, arcade parlours, and amusement centers.
                </p>
              </div>

              <Link
                href="/request-a-quote/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-xs font-extrabold text-white shadow-lg shadow-cyan-500/25 transition hover:scale-105 active:scale-95 shrink-0"
              >
                <span>Request Gameszone Quote</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* 4 Key Gameszone Features Grid */}
            <div className="relative z-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md space-y-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  <RefreshCw className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-white">Rechargeable Play Passes</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  High-durability cards designed for repeated balance recharges and tap-to-play system integration.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md space-y-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
                  <Radio className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-white">RFID Contactless Smartcards</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  13.56MHz Mifare &amp; 125kHz Proximity chip credentials for instant turnstile and simulator access.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md space-y-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-white">VIP &amp; Tiered Member Cards</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Gold, Platinum, and Elite Gamer cards with custom metallic finishes and loyalty perk tracking.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md space-y-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <QrCode className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-white">QR Code &amp; Time Passes</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Scannable QR codes for hourly session tracking, VR simulator booking, and member verification.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. SCANNABLE CREDENTIALS: QR CODES & BARCODES ── */}
        <section className="mt-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left: QR/Barcode visual */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto w-full">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#009fe3]/25 via-cyan-500/15 to-blue-600/20 blur-xl opacity-70" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src="/images/idgen-membership-card-qr-barcode.jpg"
                      alt="Membership card with QR code and barcode for member identification"
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-xs font-bold text-cyan-300 border border-white/15 shadow-sm">
                        <QrCode className="h-3 w-3 text-cyan-400" />
                        <span>Scannable Identifiers</span>
                      </span>
                      <span className="rounded-full bg-[#009fe3] px-3 py-1 text-xs font-black text-white shadow-md">
                        IDGen
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <div className="rounded-2xl border border-white/15 bg-slate-950/80 backdrop-blur-md p-3.5 shadow-xl flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">
                            Digital System Link
                          </p>
                          <p className="text-xs sm:text-sm font-black text-white">
                            QR Code &amp; Barcode Credentials
                          </p>
                        </div>
                        <span className="text-[10px] font-bold text-slate-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                          Scannable
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: QR Code & Barcode Breakdown */}
            <div className="lg:col-span-6 space-y-6">
              {/* QR Code Section */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-[#009fe3]">
                  <QrCode className="h-5 w-5" />
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    Membership Cards With QR Codes
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  A QR code can be included where an organization wants a scannable identifier on the membership card. Depending on the organization's system, a QR code may be used to:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {qrFunctions.map((fn) => (
                    <div key={fn} className="flex items-center gap-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                      <span>{fn}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-amber-200/80 dark:border-amber-900/60 bg-amber-50/60 dark:bg-amber-950/30 p-3 text-xs text-amber-900 dark:text-amber-300 flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <span className="font-bold">Important: </span>
                    IDGen does not claim that a QR code automatically provides membership management or access control. The functionality depends on the organization's software/system.
                  </span>
                </div>
              </div>

              {/* Barcode Section */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                <div className="inline-flex items-center gap-2 text-[#009fe3]">
                  <Barcode className="h-5 w-5" />
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    Membership Cards With Barcodes
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  Barcodes can be included on membership cards where an organization uses barcode-based identification or verification. Possible applications include:
                </p>
                <div className="flex flex-wrap gap-2">
                  {barcodeApplications.map((app) => (
                    <span key={app} className="rounded-lg border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {app}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                  The barcode format and implementation should be confirmed according to the customer's existing system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. RFID, LANYARDS & HOLDERS INTEGRATION ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="System Integration"
            title="Technology-Enabled &amp; Wearable Accessories"
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {/* RFID Membership Cards */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3]">
                  <Radio className="h-5 w-5" />
                </div>
                <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                  RFID Membership Cards
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  For organizations requiring technology-enabled membership identification, RFID membership cards may be considered where compatible hardware and software systems are available.
                </p>
                <FlowChain steps={["Card", "Chip", "Frequency", "Reader", "Software/System"]} />
              </div>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                <Link href="/rfid-card-printing/" className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3]">
                  <span>Explore RFID Card Printing</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Custom Printed Lanyards */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3]">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                  Membership Cards With Lanyards
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  Some organizations may want members to visibly wear their membership cards. IDGen provides 20 mm custom printed lanyards customized with organization branding.
                </p>
                <FlowChain steps={["Membership Card", "Holder", "Hook", "Custom Printed Lanyard"]} />
              </div>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                <Link href="/custom-printed-lanyard-printing/" className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3]">
                  <span>Explore Custom Printed Lanyards</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Membership Card Holders */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                  Membership Card Holders
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  Where membership cards are intended to be worn, a suitable holder can be added. Correct holder selection depends on card orientation, dimensions, and retention requirement.
                </p>
                <FlowChain steps={["Membership Card", "Holder", "Hook", "Lanyard"]} />
              </div>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                <Link href="/id-card-holders/" className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3]">
                  <span>Explore ID Card Holders</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. BULK MEMBERSHIP CARD PRINTING ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="High-Volume Deployment"
            title="Bulk Membership Card Printing"
            lede="IDGen can support membership organizations requiring cards for larger groups. For larger orders, an organized member-data workflow can help reduce manual production errors."
          />

          <div className="mt-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg space-y-6">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
              Bulk requirements may include:
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {bulkScenarios.map((sc) => (
                <div
                  key={sc}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3 text-xs font-bold text-slate-800 dark:text-slate-200"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#009fe3] shrink-0" />
                  <span>{sc}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#009fe3]">
                Typical Bulk Workflow:
              </span>
              <FlowChain steps={["Member Data", "Design", "Preview", "Approval", "Bulk Production", "Quality Check", "Dispatch"]} />
              <p className="text-xs text-slate-500 dark:text-slate-400 pt-1 italic">
                The exact production timeline depends on quantity, data readiness, artwork approval and project specifications.
              </p>
            </div>
          </div>
        </section>

        {/* ── 10. IDGEN STUDIO & BATCH-WISE PRINTING ── */}
        <section className="mt-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left: Studio visual */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto w-full">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#009fe3]/25 via-cyan-500/15 to-blue-600/20 blur-xl opacity-70" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src="/images/idgen-studio-membership-data-collection-preview.jpg"
                      alt="IDGen Studio membership data collection and card preview workflow"
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-xs font-bold text-cyan-300 border border-white/15 shadow-sm">
                        <Eye className="h-3 w-3 text-cyan-400" />
                        <span>Digital Data Workflow</span>
                      </span>
                      <span className="rounded-full bg-[#009fe3] px-3 py-1 text-xs font-black text-white shadow-md">
                        IDGen Studio
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <div className="rounded-2xl border border-white/15 bg-slate-950/80 backdrop-blur-md p-3.5 shadow-xl flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">
                            Batch-Wise Approvals
                          </p>
                          <p className="text-xs sm:text-sm font-black text-white">
                            Print When Members Are Ready
                          </p>
                        </div>
                        <span className="text-[10px] font-bold text-slate-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                          Automated
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Studio & Batch-Wise Explanation */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2">
                  <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                  <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                    Self-Onboarding &amp; Admin Dashboard
                  </p>
                  <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  IDGen Studio for Membership Cards
                </h2>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Organizations collecting information from many members can use IDGen Studio, where applicable, to support the data-collection and card-preview workflow.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Member Submission Workflow:
                </span>
                <FlowChain steps={["Open Link/QR", "Fill Form", "Upload Photograph", "Preview Card", "Submit"]} />
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#009fe3]">
                  Batch-Wise Membership Card Printing — Print When Members Are Ready:
                </span>
                <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold">
                  <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-2.5">
                    Batch 1 → Approve → Print
                  </div>
                  <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-2.5">
                    Batch 2 → Approve → Print
                  </div>
                  <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-2.5">
                    Batch 3 → Approve → Print
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/idgen-studio/"
                  className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-6 py-3 text-xs font-bold text-white shadow transition hover:bg-[#008bc9]"
                >
                  <span>Explore IDGen Studio</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 11. DATA CONFIDENTIALITY & PRIVACY ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-5">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <Lock className="h-4 w-4 text-[#009fe3]" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  Data Protection Policy
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Membership Card Data &amp; Confidentiality
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Membership card projects may involve personal information such as member names, photographs, membership numbers, contact information, membership categories, validity dates, and other identification details.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-950 p-5 space-y-2">
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                IDGen understands that this information should be handled confidentially and only for the agreed identification/production purpose, subject to the organization's requirements and applicable operational controls. For digital collection through IDGen Studio, organizations should collect only the information required for their membership workflow.
              </p>
            </div>

            <div>
              <Link href="/why-idgen/" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3]">
                <span>Explore Why IDGen</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 12. CARD DESIGN SPECIMEN & REPLACEMENT ── */}
        <section className="mt-20">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Front & Reverse Design Specimen */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3]">
                  <Layout className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  Membership Card Design
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                  A membership card can be designed to make the organization's identity immediately recognizable.
                </p>

                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#009fe3] block mb-1">
                    Front Specimen Example:
                  </span>
                  <FlowChain steps={["Logo", "Photo", "Member Name", "Member No.", "Category", "Validity", "QR Code"]} />
                </div>

                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                    Reverse Side Information (Where Required):
                  </span>
                  <div className="grid grid-cols-2 gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300">
                    {reverseSideElements.map((elem) => (
                      <span key={elem}>• {elem}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Replacement & Renewal Triggers */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3]">
                  <RefreshCw className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  Membership Card Replacement &amp; Renewal
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                  Membership programmes may require cards for:
                </p>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  {replacementTriggers.map((trig) => (
                    <div key={trig} className="flex items-center gap-1.5 text-xs font-bold text-slate-800 dark:text-slate-200">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                      <span>{trig}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  The required card data can be updated according to the organization's approved process before production.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 13. PRICING FACTORS ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  Transparent Calculation
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Membership Card Pricing
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Membership card pricing depends on factors such as:
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {pricingFactors.map((factor) => (
                <div
                  key={factor}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-2.5 text-xs font-bold text-slate-800 dark:text-slate-200"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                  <span>{factor}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
              Rather than giving a misleading universal price, IDGen should quote according to the actual membership-card specification.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/pricing/"
                className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-6 py-3 text-xs font-bold text-white shadow transition hover:bg-[#008bc9]"
              >
                <span>View IDGen Pricing</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/request-a-quote/"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-3 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3]"
              >
                <span>Request a Membership Card Quote</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 14. 9-STEP PRODUCTION PROCESS ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Execution Pipeline"
            title="Membership Card Production Process"
          />

          <div className="mt-8">
            <WorkflowSteps steps={productionSteps} />
          </div>
        </section>

        {/* ── 15. COMPLETE IDENTIFICATION SETUP PACKAGES ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Configuration Packages"
            title="Membership Cards + Complete Identification Setup"
            lede="Organizations can choose only the components they require."
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {setupPackages.map((pkg) => (
              <div
                key={pkg.title}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md transition-all duration-300 hover:border-[#009fe3] hover:shadow-xl"
              >
                <div>
                  <span className="rounded-full bg-sky-100 dark:bg-cyan-950/60 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 border border-sky-200 dark:border-cyan-800/50">
                    {pkg.badge}
                  </span>
                  <h3 className="mt-4 font-extrabold text-slate-900 dark:text-white text-base">
                    {pkg.title}
                  </h3>
                  <div className="mt-4 pt-1">
                    <FlowChain steps={pkg.formula} />
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {pkg.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              The components should be selected according to the organization's actual membership programme.
            </p>
          </div>
        </section>

        {/* ── 16. WHY CHOOSE IDGEN FOR MEMBERSHIP CARDS? ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Key Benefits"
            title="Why Choose IDGen for Membership Cards?"
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseIdgen.map((item) => (
              <FeatureCard key={item.title} icon={item.icon} title={item.title} body={item.body} />
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link href="/why-idgen/" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3]">
              <span>Learn Why Choose IDGen</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>

        {/* ── 17. WHO CAN USE CUSTOM MEMBERSHIP CARDS? (18 Sectors) ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-5">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  Target Organizations
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Who Can Use Custom Membership Cards?
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                IDGen can support membership-card requirements for:
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
              {eligibleSectors.map((sec) => (
                <div
                  key={sec}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-2.5 text-xs font-bold text-slate-800 dark:text-slate-200"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                  <span>{sec}</span>
                </div>
              ))}
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

        {/* ── 19. NEED CUSTOM MEMBERSHIP CARDS? (Closing CTA Band) ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-[#071322] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 h-64 w-64 bg-[#009fe3]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-3xl space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-950/80 border border-cyan-800/60 px-3.5 py-1 text-xs font-bold text-cyan-300 uppercase tracking-widest">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                <span>Identification Setup</span>
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                Need Custom Membership Cards?
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                Whether you need membership cards for a club, gym, association, hotel, resort, NGO, sports organization, professional body or other membership programme, IDGen can help you plan the required card and identification setup.
              </p>

              <div className="pt-2 flex flex-wrap gap-3.5">
                <Link
                  href="/request-a-quote/"
                  className="rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/30 transition hover:bg-[#008bc9]"
                >
                  Request a Membership Card Quote
                </Link>
                <Link
                  href="/idgen-studio/"
                  className="rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  Explore IDGen Studio
                </Link>
                <Link
                  href="/pricing/"
                  className="rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  View Pricing
                </Link>
                <Link
                  href="/contact/"
                  className="rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  Contact IDGen
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
              Membership Card Printing by IDGen — Custom Membership Identification for Organizations Across Northeast India
            </h3>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              IDGen supplies personalized PVC membership cards, scannable QR/barcode credentials, and smart RFID membership badges for clubs, gyms, hotels, and associations across Guwahati, Assam, and all 8 Northeast states.
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
