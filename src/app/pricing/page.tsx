import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IndianRupee,
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
  Radio,
  Calculator,
  MessageSquare,
  Truck,
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
import type { Faq } from "@/data/types";

/* ── SEO Metadata (Strictly from document) ── */
export const metadata = pageMetadata({
  title: "ID Card Printing Price & Lanyard Pricing | IDGen",
  description:
    "Check IDGen reference pricing for PVC ID cards, custom printed lanyards, event cards and RFID cards. Get a customized quote for bulk identity requirements.",
  path: "/pricing/",
});

/* ── Document Data Arrays (ALL Strictly from Document) ── */

const quickPricingTable = [
  { service: "PVC ID Card - Single Side", price: "₹15 / card", path: "/id-card-printing/" },
  { service: "PVC ID Card - Double Side", price: "₹16 / card", path: "/id-card-printing/" },
  { service: "20 mm Custom Printed Lanyard", price: "₹15 / piece", path: "/custom-printed-lanyard-printing/" },
  { service: "Event Card", price: "₹35 / card", path: "/event-card-printing/" },
  { service: "RFID ID Card", price: "₹45 / card", path: "/rfid-card-printing/" },
];

const lanyardSuitableFor = [
  "Student identification",
  "Employee identification",
  "Institutional identification",
  "Events",
  "Conferences",
  "Membership identification",
];

const rfidChecklist = [
  "RFID frequency",
  "Chip/type",
  "Card format",
  "Reader/system compatibility",
  "Quantity",
];

const priceAffectingFactors = [
  { title: "Quantity", desc: "Larger quantities may have different commercial pricing." },
  { title: "Printing", desc: "Single-side and double-side printing have different pricing." },
  { title: "Card Specification", desc: "Card material, thickness, format and other specifications can affect the final price." },
  { title: "Personalization", desc: "Individual names, photographs, ID numbers, QR codes and barcodes may affect the production workflow." },
  { title: "Accessories", desc: "The final identification setup may include Holder, Hook, Lanyard, and Ultrasonic sealing." },
  { title: "Data Preparation", desc: "Projects requiring structured data and photograph preparation may have different workflow requirements." },
  { title: "Design", desc: "Existing print-ready artwork and design preparation can have different requirements." },
  { title: "Delivery", desc: "Courier or transportation charges may depend on destination, shipment size and applicable delivery terms." },
];

const setupTiers = [
  {
    title: "Card Only",
    badge: "Standalone Card",
    formula: ["ID Card"],
    desc: "For organizations that already have their accessories.",
  },
  {
    title: "Card + Holder",
    badge: "Protected Card",
    formula: ["ID Card", "Holder"],
    desc: "For organizations requiring card protection.",
  },
  {
    title: "Wearable Setup",
    badge: "Standard Assembly",
    formula: ["ID Card", "Holder", "Hook", "Lanyard"],
    desc: "For everyday student, employee or institutional identification.",
  },
  {
    title: "Complete Wearable Setup",
    badge: "Ultrasonic Sealed",
    formula: ["ID Card", "Ultrasonic Sealing", "Holder", "Hook", "Lanyard"],
    desc: "For requirements where lanyard attachment and finishing are part of the final assembly.",
  },
];

const studentSectors = [
  "Schools",
  "Colleges",
  "Universities",
  "Coaching institutions",
  "Training institutes",
  "Educational organizations",
];

const employeeSectors = [
  "Companies",
  "Offices",
  "Hospitals",
  "Industries",
  "Institutions",
  "Organizations",
];

const bulkFactors = [
  "Total quantity",
  "Card type",
  "Single/double-side printing",
  "Data personalization",
  "Photograph processing",
  "Lanyards",
  "Holders",
  "Hooks",
  "Ultrasonic sealing",
  "Packaging",
  "Dispatch requirements",
];

const typicalBulkProjects = [
  "1,000+ cards",
  "5,000+ cards",
  "10,000+ cards",
];

const pricingDirectory = [
  { requirement: "PVC ID Card Printing", page: "ID Card Printing", href: "/id-card-printing/" },
  { requirement: "Student ID Cards", page: "Student ID Cards", href: "/student-id-card-printing/" },
  { requirement: "Employee ID Cards", page: "Employee ID Cards", href: "/employee-id-card-printing/" },
  { requirement: "Custom Printed Lanyards", page: "Custom Printed Lanyards", href: "/custom-printed-lanyard-printing/" },
  { requirement: "Event Cards", page: "Event Card Printing", href: "/event-card-printing/" },
  { requirement: "RFID Cards", page: "RFID Card Printing", href: "/rfid-card-printing/" },
  { requirement: "Ultrasonic Sealing", page: "Ultrasonic Sealing", href: "/ultrasonic-sealing/" },
  { requirement: "ID Card Holders", page: "ID Card Holders", href: "/id-card-holders/" },
  { requirement: "ID Card Hooks", page: "ID Card Hooks", href: "/id-card-hooks/" },
  { requirement: "Digital Data Collection", page: "IDGen Studio", href: "/idgen-studio/" },
];

const priceChangeReasons = [
  "Product specifications",
  "Quantity",
  "Raw material costs",
  "Customization requirements",
  "Accessory selection",
  "Production requirements",
  "Packaging",
  "Delivery requirements",
];

const quoteInputFormula = [
  "Quantity",
  "Product",
  "Card Specification",
  "Printing",
  "Accessories",
  "Delivery Location",
];

const faqs: Faq[] = [
  {
    q: "How much does an ID card cost at IDGen?",
    a: "Reference pricing starts at ₹15 per PVC ID card for single-side printing and ₹16 per card for double-side printing, subject to the applicable specifications and order conditions.",
  },
  {
    q: "How much does a custom printed lanyard cost?",
    a: "The reference price for a 20 mm custom printed lanyard is ₹15 per piece.",
  },
  {
    q: "How much does an event card cost?",
    a: "The reference price for an event card is ₹35 per card. The complete event identification setup may cost more depending on lanyards, hooks and sealing requirements.",
  },
  {
    q: "How much does an RFID ID card cost?",
    a: "The reference price for an RFID ID card is ₹45 per card, subject to RFID type, specifications and compatibility requirements.",
  },
  {
    q: "Do ID card prices include lanyards?",
    a: "Not necessarily. Card printing and accessories such as lanyards, holders and hooks should be considered according to the selected configuration.",
  },
  {
    q: "Do bulk orders have different pricing?",
    a: "Bulk project pricing can vary according to quantity, specifications, personalization, accessories and production requirements. Request a quotation for the exact project.",
  },
  {
    q: "Is the listed price the final price?",
    a: "The prices shown are reference prices. The final quotation depends on the confirmed product specifications, quantity, customization, accessories and applicable delivery conditions.",
  },
  {
    q: "Can I order only ID cards?",
    a: "Yes. Customers can order ID cards without accessories where required.",
  },
  {
    q: "Can I order a complete ID card set?",
    a: "Yes. Depending on the requirement, a complete setup can include the ID card, holder, hook, lanyard and applicable ultrasonic sealing.",
  },
  {
    q: "Does delivery come under the listed price?",
    a: "Delivery conditions depend on the order and destination. Confirm applicable delivery charges and terms when requesting the quotation.",
  },
];

const internalLinks = [
  { topic: "ID Card Printing", href: "/id-card-printing/" },
  { topic: "Student ID Cards", href: "/student-id-card-printing/" },
  { topic: "Employee ID Cards", href: "/employee-id-card-printing/" },
  { topic: "Custom Lanyards", href: "/custom-printed-lanyard-printing/" },
  { topic: "Event Cards", href: "/event-card-printing/" },
  { topic: "RFID Cards", href: "/rfid-card-printing/" },
  { topic: "Ultrasonic Sealing", href: "/ultrasonic-sealing/" },
  { topic: "ID Card Holders", href: "/id-card-holders/" },
  { topic: "ID Card Hooks", href: "/id-card-hooks/" },
  { topic: "IDGen Studio", href: "/idgen-studio/" },
  { topic: "Request a Quote", href: "/request-a-quote/" },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "IDGen Pricing",
          description:
            "Transparent reference pricing for PVC ID cards, custom printed lanyards, event cards and RFID cards by IDGen.",
          path: "/pricing/",
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
                  <IndianRupee className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                  <span>IDGen Pricing</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight text-slate-950 dark:text-white leading-[1.15]">
                  ID Card, Lanyard &amp; Identity Product Pricing
                </h1>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  IDGen provides customized identity products and related services for schools, colleges, universities, companies, institutions, events and organizations. Our pricing depends on the product, quantity, customization, data requirements, accessories and finishing configuration. Use the pricing below as a reference for common requirements. For bulk or customized projects, request a quotation based on your exact specifications.
                </p>
              </div>

              {/* Integrated Reference Banner */}
              <div className="rounded-2xl border border-sky-100 dark:border-slate-800 bg-sky-50/60 dark:bg-slate-900/80 p-5 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Transparent Reference Rates</span>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                  PVC ID Cards from <span className="text-[#009fe3] font-bold">₹15/card</span> • 20 mm Lanyards from <span className="text-[#009fe3] font-bold">₹15/pc</span> • Event Cards from <span className="text-[#009fe3] font-bold">₹35/card</span> • RFID Cards from <span className="text-[#009fe3] font-bold">₹45/card</span>
                </p>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <Link
                  href="/request-a-quote/"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/25 transition-all duration-300 hover:bg-[#008bc9] hover:shadow-xl hover:shadow-[#009fe3]/40 hover:-translate-y-0.5"
                >
                  <span>Request a Bulk Quote</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-7 py-3.5 text-sm font-bold text-slate-800 dark:text-slate-200 shadow-2xs transition-all duration-300 hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 hover:bg-sky-50/40 dark:hover:bg-slate-700 hover:-translate-y-0.5"
                >
                  <span>Contact IDGen</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative h-full min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] w-full rounded-3xl overflow-hidden border-2 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-xl group flex flex-col justify-between">
                <Image
                  src="/images/idgen-id-card-printing-pricing.jpg"
                  alt="IDGen ID card printing and identity product pricing"
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
                    <span>Direct Factory Rates</span>
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
                        Institutional Wholesale
                      </p>
                      <p className="text-xs sm:text-sm font-black text-white">
                        Cards, Lanyards &amp; RFID Credentials
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
        {/* ── 2. QUICK PRICING GUIDE (REFERENCE TABLE) ── */}
        <section className="mt-0">
          <div className="w-full">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
              <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                Reference Rates
              </p>
              <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl md:text-[1.75rem] lg:text-[2rem] xl:text-[2.15rem] leading-[1.15] tracking-tighter w-full">
              Quick Pricing Guide
            </h2>
          </div>

          <div className="mt-8 overflow-x-auto rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-bold text-slate-500 uppercase">
                <tr>
                  <th className="px-6 py-4">Service / Product</th>
                  <th className="px-6 py-4 text-right">Reference Price</th>
                  <th className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {quickPricingTable.map((row) => (
                  <tr key={row.service} className="hover:bg-slate-50/50 dark:hover:bg-slate-950/50 transition">
                    <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">{row.service}</td>
                    <td className="px-6 py-4 font-mono font-bold text-[#009fe3] dark:text-cyan-400 text-right">{row.price}</td>
                    <td className="px-6 py-4 text-center">
                      <Link href={row.path} className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3] hover:underline">
                        <span>Details</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 italic">
            Prices shown are reference prices and may vary according to quantity, specifications, customization, data requirements and applicable order conditions.
          </p>
        </section>

        {/* ── 3. DETAILED PRODUCT REFERENCE PRICING CARDS ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Category Breakdown"
            title="Product &amp; Service Pricing Deep-Dives"
          />

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {/* PVC ID Card Printing Price */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3]">
                  <CreditCardIcon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  PVC ID Card Printing Price
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                  Standard PVC ID Cards. IDGen provides customized PVC ID card printing for organizational identification requirements.
                </p>

                <div className="grid gap-3 sm:grid-cols-2 pt-2">
                  <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3.5 space-y-1">
                    <span className="text-[11px] font-bold text-slate-500 uppercase">Single-Side Printing</span>
                    <p className="text-lg font-black text-[#009fe3]">₹15 / card</p>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400">Printed on one side.</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3.5 space-y-1">
                    <span className="text-[11px] font-bold text-slate-500 uppercase">Double-Side Printing</span>
                    <p className="text-lg font-black text-[#009fe3]">₹16 / card</p>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400">Printed on both sides.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link href="/id-card-printing/" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3]">
                  <span>Explore ID Card Printing</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Custom Printed Lanyard Price */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3]">
                  <Layers className="h-5 w-5" />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    Custom Printed Lanyard Price
                  </h3>
                  <span className="text-lg font-black text-[#009fe3]">₹15 / lanyard</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                  20 mm Custom Printed Lanyard. Produced with organization branding, names, logos, colours and repeating artwork according to approved design.
                </p>

                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                    Suitable for:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {lanyardSuitableFor.map((item) => (
                      <span key={item} className="rounded-md border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link href="/custom-printed-lanyard-printing/" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3]">
                  <span>Explore Custom Printed Lanyard Printing</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Event Card Price */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3]">
                  <Ticket className="h-5 w-5" />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    Event Card Price
                  </h3>
                  <span className="text-lg font-black text-[#009fe3]">₹35 / card</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                  Customized Event Card. Customized for conferences, seminars, exhibitions, institutional programmes and other events.
                </p>

                <div className="pt-2 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#009fe3] block">
                    Supported Formats:
                  </span>
                  <FlowChain steps={["Event Card", "One Hook", "Lanyard"]} />
                  <FlowChain steps={["Event Card", "Two Hooks", "Lanyard"]} />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link href="/event-card-printing/" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3]">
                  <span>Explore Event Card Printing</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* RFID ID Card Price */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3]">
                  <Radio className="h-5 w-5" />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    RFID ID Card Price
                  </h3>
                  <span className="text-lg font-black text-[#009fe3]">₹45 / card</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                  Customized RFID ID Card. Pricing depends on selected RFID technology, card specification and system compatibility requirements.
                </p>

                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                    Before confirming, verify:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {rfidChecklist.map((item) => (
                      <span key={item} className="rounded-md border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link href="/rfid-card-printing/" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3]">
                  <span>Explore RFID Card Printing</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. WHAT AFFECTS ID CARD PRICING? (9 FACTORS) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Cost Determinants"
            title="What Affects ID Card Pricing?"
            lede="The price of an identification project is not determined only by the card itself. Important factors include:"
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {priceAffectingFactors.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm space-y-2">
                <h3 className="font-extrabold text-slate-900 dark:text-white text-base">{item.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. COMPLETE ID CARD SETUP (4 TIERS) ── */}
        <section className="mt-20">
          {/* Component visual photo showcase */}
          <div className="mb-10">
            <div className="relative mx-auto w-full max-w-4xl">
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl group">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src="/images/idgen-id-card-lanyard-holder-hook-pricing.jpg"
                    alt="ID card, custom lanyard, holder and hook pricing components"
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-white z-10">
                    <div>
                      <span className="rounded-full bg-[#009fe3] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">
                        Complete Component Assembly
                      </span>
                      <p className="text-lg font-black text-white mt-1">
                        Card + Holder + Hook + Lanyard + Ultrasonic Sealing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <SectionHead
            eyebrow="Configuration Packages"
            title="Complete ID Card Setup"
            lede="Customers do not always need only the card. A complete identification setup can combine multiple components."
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {setupTiers.map((tier) => (
              <div
                key={tier.title}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md transition-all duration-300 hover:border-[#009fe3] hover:shadow-xl"
              >
                <div>
                  <span className="rounded-full bg-sky-100 dark:bg-cyan-950/60 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 border border-sky-200 dark:border-cyan-800/50">
                    {tier.badge}
                  </span>
                  <h3 className="mt-4 font-extrabold text-slate-900 dark:text-white text-base">
                    {tier.title}
                  </h3>
                  <div className="mt-4 pt-1">
                    <FlowChain steps={tier.formula} />
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {tier.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/id-card-holders/" className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-5 py-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3]">
              <span>Explore ID Card Holders</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link href="/id-card-hooks/" className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-5 py-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3]">
              <span>Explore ID Card Hooks</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link href="/ultrasonic-sealing/" className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-5 py-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-[#009fe3]">
              <span>Explore Ultrasonic Sealing</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>

        {/* ── 6. USE-CASE DEEP DIVES (STUDENT, EMPLOYEE, BULK) ── */}
        <section className="mt-20">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Student ID Card Pricing */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3]">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  Student ID Card Pricing
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                  Student identification projects can include:
                </p>
                <FlowChain steps={["Student ID Card", "Lanyard", "Holder", "Hook"]} />
                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Applies to:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {studentSectors.map((s) => (
                      <span key={s} className="rounded border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-2 py-0.5 text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link href="/student-id-card-printing/" className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3]">
                  <span>Explore Student ID Card Printing</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Employee ID Card Pricing */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3]">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  Employee ID Card Pricing
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                  Employee identification requirements can include:
                </p>
                <FlowChain steps={["Employee ID Card", "Holder", "Hook", "Custom Printed Lanyard"]} />
                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Suitable for:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {employeeSectors.map((s) => (
                      <span key={s} className="rounded border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-2 py-0.5 text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link href="/employee-id-card-printing/" className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3]">
                  <span>Explore Employee ID Card Printing</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Bulk ID Card Pricing */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-md flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 dark:bg-cyan-950/50 text-[#009fe3]">
                  <Boxes className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  Bulk ID Card Pricing
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                  For large institutional orders, the best approach is to calculate pricing based on complete project requirements.
                </p>
                <div className="pt-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Typical Bulk Projects:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {typicalBulkProjects.map((p) => (
                      <span key={p} className="rounded-lg border border-sky-200 dark:border-cyan-800 bg-sky-50 dark:bg-cyan-950 px-2.5 py-1 text-xs font-extrabold text-[#009fe3] dark:text-cyan-400">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link href="/request-a-quote/" className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3]">
                  <span>Request Bulk ID Card Quote</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. PRINT-READY VS CUSTOMIZED ORDERS ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
                  Order Readiness
                </p>
                <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Print-Ready vs Customized Orders
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Pricing can differ depending on whether your artwork and production data are already prepared.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-5 space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Print-Ready Order
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  You provide: Final artwork, Correct production data, and Required specifications. The order moves directly into production workflow after confirmation.
                </p>
              </div>

              <div className="rounded-2xl border border-sky-200 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-950 p-5 space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#009fe3]">
                  Customized Order
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  IDGen coordinates:
                </p>
                <FlowChain steps={["Data", "Design", "Personalization", "Preview", "Approval", "Production"]} />
              </div>
            </div>

            <div>
              <Link href="/why-idgen/" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3]">
                <span>Explore Our Process</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 8. IDGEN PRICING BY REQUIREMENT DIRECTORY ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Service Directory"
            title="IDGen Pricing by Requirement"
            lede="Select your target product requirement to view complete specification documentation."
          />

          <div className="mt-8 overflow-x-auto rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-bold text-slate-500 uppercase">
                <tr>
                  <th className="px-6 py-4">Requirement</th>
                  <th className="px-6 py-4">Best Page Link</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {pricingDirectory.map((row) => (
                  <tr key={row.requirement} className="hover:bg-slate-50/50 dark:hover:bg-slate-950/50 transition">
                    <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">{row.requirement}</td>
                    <td className="px-6 py-4">
                      <Link href={row.href} className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3] hover:underline">
                        <span>{row.page}</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 9. WHY PRICES MAY CHANGE & NEED A CUSTOM QUOTE? ── */}
        <section className="mt-20">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Why Prices May Change */}
            <div className="rounded-3xl border border-amber-200/80 dark:border-amber-900/60 bg-amber-50/60 dark:bg-amber-950/30 p-8 shadow-md flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    Why Prices May Change
                  </h3>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  Reference pricing can change because of:
                </p>
                <div className="grid grid-cols-2 gap-1.5 text-xs font-bold text-slate-800 dark:text-slate-200">
                  {priceChangeReasons.map((r) => (
                    <span key={r}>• {r}</span>
                  ))}
                </div>
              </div>

              <p className="text-xs text-amber-900 dark:text-amber-300 pt-3 border-t border-amber-200/60 dark:border-amber-900/40 italic">
                Therefore, the price shown on this page should always be treated as a reference price unless explicitly marked as a fixed price.
              </p>
            </div>

            {/* Need a Custom Quote? */}
            <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-md flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#009fe3]">
                  <Calculator className="h-5 w-5" />
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    Need a Custom Quote?
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                  If your requirement includes multiple products, don't calculate everything separately. Send IDGen:
                </p>
                <FlowChain steps={quoteInputFormula} />
                <div className="rounded-xl border border-sky-100 dark:border-slate-800 bg-sky-50/50 dark:bg-slate-950 p-3 text-xs text-slate-700 dark:text-slate-300">
                  <span className="font-bold text-[#009fe3]">Example: </span>
                  2,500 student ID cards + 20 mm lanyards + holders + hooks
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                <Link href="/request-a-quote/" className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-6 py-2.5 text-xs font-bold text-white shadow">
                  <span>Request a Quote</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. FREQUENTLY ASKED QUESTIONS (Strictly 10 FAQs from Document) ── */}
        <section className="mt-20">
          <SectionHead
            eyebrow="Questions &amp; Answers"
            title="Frequently Asked Questions"
          />

          <div className="mt-8">
            <FaqList faqs={faqs} />
          </div>
        </section>

        {/* ── 11. PRICING IN ONE ANSWER (SUMMARY CALLOUT) ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-sky-200 dark:border-slate-800 bg-sky-50/70 dark:bg-slate-900 p-8 shadow-lg space-y-3">
            <div className="inline-flex items-center gap-2 text-[#009fe3] dark:text-cyan-400">
              <Sparkles className="h-4 w-4" />
              <h3 className="text-base font-extrabold uppercase tracking-wider">
                Pricing in One Answer
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 font-semibold leading-relaxed">
              IDGen's reference pricing includes PVC ID cards from ₹15 per card for single-side printing, ₹16 for double-side printing, 20 mm custom printed lanyards at ₹15 per piece, event cards at ₹35 per card and RFID ID cards at ₹45 per card. Final pricing depends on quantity, specifications, personalization, accessories and applicable order conditions.
            </p>
          </div>
        </section>

        {/* ── 12. GET YOUR EXACT IDGEN QUOTE (CLOSING CTA BAND) ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-[#071322] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 h-64 w-64 bg-[#009fe3]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-3xl space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-950/80 border border-cyan-800/60 px-3.5 py-1 text-xs font-bold text-cyan-300 uppercase tracking-widest">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                <span>Project Quote</span>
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                Get Your Exact IDGen Quote
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                Have a requirement? Send us: <span className="font-bold text-cyan-300">Product + Quantity + Specification + Accessories + Delivery Location</span>. We'll help determine the appropriate configuration and quotation.
              </p>

              <div className="pt-2 flex flex-wrap gap-3.5">
                <Link
                  href="/request-a-quote/"
                  className="rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#009fe3]/30 transition hover:bg-[#008bc9]"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/contact/"
                  className="rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  WhatsApp IDGen
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

        {/* ── 13. GEOGRAPHIC / INTERNAL LINKING REFERENCE DIRECTORY ── */}
        <section className="mt-20">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm">
            <div className="flex items-center gap-2 text-[#009fe3] dark:text-cyan-400 mb-3">
              <MapPin className="h-4 w-4" />
              <span className="text-xs font-bold tracking-widest uppercase">
                Assam &amp; Northeast India Hub
              </span>
            </div>
            <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
              ID Card Printing Price &amp; Lanyard Pricing in Guwahati, Assam &amp; Northeast India
            </h3>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              IDGen provides transparent reference pricing and direct factory quotations for PVC ID cards, custom printed lanyards, RFID cards, and event credentials across Guwahati, Assam, and all 8 Northeast states.
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

function CreditCardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}
