import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  Clock,
  Truck,
  Boxes,
  GraduationCap,
  Briefcase,
  Ticket,
  Hospital,
  Users,
  Anchor,
  FileCheck2,
  Lock,
  Eye,
  Sliders,
  ChevronRight,
  Shield,
  Zap,
  Check,
  PackageCheck,
  PhoneCall,
  MessageSquare,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FaqList } from "@/components/ui/FaqList";
import { CtaBand } from "@/components/ui/CtaBand";
import { FlowChain } from "@/components/ui/FlowChain";
import { JsonLd } from "@/components/seo/JsonLd";
import { productSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import { HolderHeroCarousel } from "@/components/id-card-holders/HolderHeroCarousel";
import { QuickHolderSelectionMatrix } from "@/components/id-card-holders/QuickHolderSelectionMatrix";
import { HolderAssemblyEcosystem } from "@/components/id-card-holders/HolderAssemblyEcosystem";
import { HolderRangeMasterShowcase } from "@/components/id-card-holders/HolderRangeMasterShowcase";
import { HolderEngineeringGuide } from "@/components/id-card-holders/HolderEngineeringGuide";
import { HolderApplicationsGrid } from "@/components/id-card-holders/HolderApplicationsGrid";
import { HolderWorkflowAndDispatch } from "@/components/id-card-holders/HolderWorkflowAndDispatch";
import { HolderScrollSpyNav, SectionAnchorButton } from "@/components/id-card-holders/HolderScrollSpy";
import type { Faq } from "@/data/types";

/* ─────────────────────────────────────────────────────────────
   SEO METADATA (Strictly from document)
   ───────────────────────────────────────────────────────────── */
export const metadata = pageMetadata({
  title: "ID Card Holders | Vertical, Horizontal & Lock Holders | IDGen",
  description:
    "ID card holders for schools, companies, institutions and events. Choose vertical, horizontal, four-side-lock, metal, crystal and chemical sticker holders from IDGen.",
  path: "/id-card-holders/",
});

/* ─────────────────────────────────────────────────────────────
   DOCUMENT DATA STRUCTURES (Strictly Document Content)
   ───────────────────────────────────────────────────────────── */

const quickSelectionData = [
  { req: "Standard vertical card", option: "V-1", badge: "Standard Portrait" },
  { req: "Vertical card with four-side locking", option: "V-2", badge: "Four-Side Lock" },
  { req: "Chemical sticker holder", option: "V-3", badge: "Chemical Sticker" },
  { req: "Standard horizontal card", option: "H-1", badge: "Standard Landscape" },
  { req: "Horizontal card with four-side locking", option: "H-2", badge: "Four-Side Lock" },
  { req: "Premium metal appearance", option: "Metal Holder", badge: "Premium Metal" },
  { req: "Premium crystal appearance", option: "CV-1 Crystal Holder", badge: "Executive Crystal" },
  { req: "Connect holder to lanyard", option: "Fish Hook", badge: "Attachment" },
];

const holderModels = [
  {
    code: "V-1",
    title: "V-1 — Vertical ID Card Holder",
    tagline: "Standard vertical holder designed for one ID card",
    description: "The V-1 is a standard vertical holder designed for one ID card.",
    image: "/images/ID card holder/V-1/V-1.png",
    specs: [
      { k: "Capacity", v: "1 card" },
      { k: "Orientation", v: "Vertical" },
      { k: "Material", v: "Plastic" },
      { k: "Finish", v: "Gloss" },
      { k: "Card format", v: "86 × 54 mm" },
      { k: "Lanyard hole", v: "20 mm" },
      { k: "Construction", v: "100% virgin plastic" },
    ],
    suitable: [
      "Student ID cards",
      "Employee ID cards",
      "Staff cards",
      "Office identification",
      "Visitor cards",
      "General institutional identification",
    ],
    conclusion: "V-1 is the standard choice for a portrait-oriented 86 × 54 mm card.",
  },
  {
    code: "V-2",
    title: "V-2 — Vertical Four-Side-Lock ID Card Holder",
    tagline: "Transparent vertical holder featuring a four-side locking design",
    description:
      "The V-2 is a transparent vertical holder featuring a four-side locking design. It is suitable when stronger retention of the card inside the holder is preferred.",
    image: "/images/ID card holder/V-2/V-2.png",
    specs: [
      { k: "Orientation", v: "Vertical" },
      { k: "Type", v: "Transparent" },
      { k: "Material", v: "Plastic" },
      { k: "Card format", v: "86 × 54 mm" },
      { k: "Lanyard hole", v: "20 mm" },
      { k: "Locking", v: "Four-side lock" },
      { k: "Construction", v: "100% virgin plastic" },
    ],
    suitable: [
      "Student identification",
      "Employee identification",
      "Institutional cards",
      "Visitor cards",
      "Everyday organizational identification",
    ],
    conclusion: "Choose V-2 when four-side card retention is preferred.",
  },
  {
    code: "V-3",
    title: "V-3 — Chemical Sticker ID Card Holder",
    tagline: "Vertical holder designed for chemical sticker format",
    description:
      "The V-3 is a vertical holder designed for applications requiring a chemical sticker holder format. It provides an alternative to standard open holder configurations.",
    image: "/images/ID card holder/IMG_20250117_172305.jpg",
    specs: [],
    suitable: [
      "Employee identification",
      "Student identification",
      "Institutional identification",
      "Office identification",
      "Other vertical card applications",
    ],
    conclusion:
      "Technical specifications and availability should be confirmed for the selected model before ordering.",
  },
  {
    code: "H-1",
    title: "H-1 — Horizontal ID Card Holder",
    tagline: "Standard horizontal holder designed for landscape cards",
    description:
      "The H-1 is a standard horizontal holder designed for landscape-oriented identification cards.",
    image: "/images/ID card holder/H-1/IMG_20250131_182906.jpg",
    specs: [
      { k: "Capacity", v: "1 card" },
      { k: "Orientation", v: "Horizontal" },
      { k: "Material", v: "Plastic" },
      { k: "Finish", v: "Gloss" },
      { k: "Lanyard hole", v: "20 mm" },
    ],
    suitable: [
      "Employee cards",
      "Corporate identification",
      "Event cards",
      "Conference badges",
      "Visitor cards",
      "Horizontal institutional cards",
    ],
    conclusion: "Choose H-1 for a standard landscape-oriented card.",
  },
  {
    code: "H-2",
    title: "H-2 — Horizontal Four-Side-Lock ID Card Holder",
    tagline: "Horizontal holder with four-side locking design",
    description:
      "The H-2 is a horizontal holder with a four-side locking design. It is suitable for landscape-oriented cards where additional card retention is preferred.",
    image: "/images/ID card holder/H-2/H-2.png",
    specs: [
      { k: "Orientation", v: "Horizontal" },
      { k: "Type", v: "Transparent" },
      { k: "Material", v: "Plastic" },
      { k: "Locking", v: "Four-side lock" },
      { k: "Lanyard hole", v: "20 mm" },
    ],
    suitable: [
      "Horizontal card + four-side retention → H-2",
    ],
    conclusion: "Horizontal card + four-side retention → H-2",
  },
  {
    code: "Metal",
    title: "Metal ID Card Holder",
    tagline: "Premium metallic holder for executive identification",
    description:
      "The Metal ID Card Holder is a premium holder option for organizations looking for a different appearance from standard plastic holders.",
    image: "/images/ID card holder/1f823cf1-0d85-4374-8360-3082d74d7b2d.jpg",
    specs: [],
    suitable: [
      "Corporate identification",
      "Premium employee cards",
      "Professional organizations",
      "Special events",
      "Institutional identification",
    ],
    conclusion:
      "Exact dimensions and construction depend on the selected model and should be confirmed before ordering.",
  },
  {
    code: "CV-1",
    title: "CV-1 Crystal ID Card Holder",
    tagline: "Distinctive, premium-style presentation",
    description:
      "The CV-1 Crystal ID Card Holder provides a more distinctive, premium-style presentation.",
    image: "/images/ID card holder/CV-1/CV-1..png",
    specs: [],
    suitable: [
      "Corporate identification",
      "Premium memberships",
      "Events",
      "Professional organizations",
      "Institutions",
      "Special identification applications",
    ],
    conclusion:
      "Exact dimensions and technical specifications should be confirmed for the selected model.",
  },
  {
    code: "Fish Hook",
    title: "Fish Hook — ID Card Holder Attachment",
    tagline: "Secure attachment to connect holder to lanyard",
    description:
      "A fish hook is an attachment used to connect a suitable ID card holder or badge to a lanyard.",
    image: "/images/Lanyard with Holder Samples/Sample 26.jpg",
    specs: [],
    suitable: [
      "Student cards",
      "Employee cards",
      "Visitor cards",
      "Event badges",
      "Membership cards",
      "Institutional identification",
    ],
    conclusion: "The correct attachment depends on the holder and lanyard configuration.",
    cta: {
      label: "Explore Custom Printed Lanyards →",
      href: "/custom-printed-lanyard-printing/",
    },
  },
];

const decisionGuideSteps = [
  {
    q: "1. Is your card portrait or landscape?",
    a: "Portrait → V series | Landscape → H series",
  },
  {
    q: "2. Do you need four-side locking?",
    a: "Yes → V-2 or H-2 | No → V-1 or H-1",
  },
  {
    q: "3. Do you require a specific chemical sticker configuration?",
    a: "Yes → V-3",
  },
  {
    q: "4. Do you want a premium appearance?",
    a: "Metal or CV-1 Crystal",
  },
  {
    q: "5. Do you need to connect the holder to a lanyard?",
    a: "Add a Fish Hook where compatible.",
  },
];

const applicationsList = [
  {
    title: "Schools & Educational Institutions",
    desc: "For student, teacher, staff and visitor identification.",
    link: { label: "Explore Student ID Card Printing →", href: "/student-id-card-printing/" },
    icon: GraduationCap,
  },
  {
    title: "Companies & Offices",
    desc: "For employees, staff, contractors and visitors.",
    link: { label: "Explore Employee ID Card Printing →", href: "/employee-id-card-printing/" },
    icon: Briefcase,
  },
  {
    title: "Events",
    desc: "For delegates, speakers, organizers, exhibitors and participants.",
    link: { label: "Explore Event Card Printing →", href: "/event-card-printing/" },
    icon: Ticket,
  },
  {
    title: "Hospitals & Institutions",
    desc: "For doctors, nurses, staff, administrators and visitors.",
    icon: Hospital,
  },
  {
    title: "Clubs & Associations",
    desc: "For membership and organizational identification.",
    icon: Users,
  },
];

const qualityPoints = [
  "Correct card fit",
  "Appropriate orientation",
  "Suitable card retention",
  "Compatible attachment",
  "Clean construction",
  "Appropriate material",
  "Professional appearance",
];

const orderingSteps = [
  {
    num: "01",
    title: "Tell Us Your Requirement",
    body: "Provide holder type if known, quantity, card dimensions, card orientation, and application.",
  },
  {
    num: "02",
    title: "Select the Holder",
    body: "Choose the suitable model based on your card and retention requirement.",
  },
  {
    num: "03",
    title: "Add Attachment",
    body: "Add a fish hook or another compatible attachment if required.",
  },
  {
    num: "04",
    title: "Add Lanyard",
    body: "Add a custom printed lanyard if required.",
  },
  {
    num: "05",
    title: "Confirm",
    body: "Confirm the product combination and quantity.",
  },
  {
    num: "06",
    title: "Dispatch",
    body: "After confirmation and payment, approved orders are prepared for dispatch according to the applicable product and order requirements.",
  },
];

const faqs: Faq[] = [
  {
    q: "What is an ID card holder?",
    a: "An ID card holder is an accessory used to carry and display an identification card while helping protect the card during use.",
  },
  {
    q: "Which ID card holder is suitable for a vertical card?",
    a: "V-1 is the standard vertical option. V-2 is the vertical four-side-lock option when additional retention is preferred.",
  },
  {
    q: "Which holder is suitable for a horizontal card?",
    a: "H-1 is the standard horizontal option, while H-2 provides four-side locking.",
  },
  {
    q: "What is a four-side-lock ID card holder?",
    a: "It is a holder designed to retain an ID card from four sides. IDGen offers V-2 and H-2 in this configuration.",
  },
  {
    q: "Can an ID card holder be connected to a lanyard?",
    a: "Yes. A compatible holder can be connected to a lanyard using an attachment such as a fish hook.",
  },
  {
    q: "What size card fits V-1?",
    a: "The specified V-1 card format is 86 × 54 mm.",
  },
  {
    q: "What size card fits V-2?",
    a: "The specified V-2 card format is 86 × 54 mm. Always confirm the actual card and holder dimensions before bulk ordering.",
  },
  {
    q: "Does IDGen provide metal ID card holders?",
    a: "Yes. A metal ID card holder is available as a premium holder option.",
  },
  {
    q: "Does IDGen provide crystal ID card holders?",
    a: "Yes. IDGen offers the CV-1 Crystal ID Card Holder.",
  },
  {
    q: "Can I order holders with custom printed lanyards?",
    a: "Yes. Compatible holders can be combined with custom printed lanyards.",
  },
  {
    q: "Can IDGen supply ID cards and holders together?",
    a: "Yes. ID cards and holders can be coordinated as part of the required identification setup.",
  },
  {
    q: "How quickly are orders dispatched?",
    a: "Eligible approved orders are dispatched within 72 hours after confirmation and payment, excluding courier transit time.",
  },
];

export default function IdCardHoldersPage() {
  return (
    <>
      <JsonLd
        data={productSchema({
          name: "ID Card Holders",
          description:
            "ID card holders for schools, companies, institutions and events. Choose vertical, horizontal, four-side-lock, metal, crystal and chemical sticker holders from IDGen.",
          path: "/id-card-holders/",
        })}
      />

      {/* ─────────────────────────────────────────────────────────────
          1. ULTRA-PREMIUM LIGHT/DARK HERO SECTION (ID Card Holders)
      ───────────────────────────────────────────────────────────── */}
      <section id="overview" className="relative overflow-hidden bg-white dark:bg-[#070d18] border-b border-slate-200/90 dark:border-slate-800/80 pt-8 pb-8 lg:pt-10 lg:pb-10 transition-colors scroll-mt-28">
        {/* Ambient background lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgba(0,159,227,0.12),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgba(0,159,227,0.2),rgba(7,13,24,0))] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #009fe3 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <Container className="relative z-10">
          {/* Breadcrumb row */}
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Products", path: "/products/" },
                { name: "ID Card Holders", path: "/id-card-holders/" },
              ]}
            />
          </div>

          <div className="grid gap-8 lg:gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Pill Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#009fe3]/30 bg-gradient-to-r from-[#009fe3]/10 via-sky-50 to-white dark:from-cyan-950/60 dark:via-slate-900 dark:to-slate-800 px-4 py-1.5 shadow-2xs">
                  <span className="flex h-2 w-2 rounded-full bg-[#009fe3] animate-pulse" />
                  <span className="text-xs font-black text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                    ID Card Holders &amp; Attachments
                  </span>
                  <span className="h-3 w-px bg-[#009fe3]/30" />
                  <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                    Direct Factory Supply
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-black text-slate-950 dark:text-white tracking-tight leading-[1.1]">
                  ID Card Holders for{" "}
                  <span className="bg-gradient-to-r from-[#009fe3] via-[#0284c7] to-[#0369a1] dark:from-[#38bdf8] dark:via-[#009fe3] dark:to-[#38bdf8] bg-clip-text text-transparent">
                    Schools, Companies, Institutions &amp; Events
                  </span>
                </h1>

                {/* Subtitle / Lede */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  IDGen provides ID card holders and card attachments for organizations that need a practical way to carry, protect and display identification cards. Our range includes vertical ID card holders, horizontal ID card holders, four-side-lock holders, chemical sticker holders, metal holders, crystal holders and fish hooks. Choose the holder according to your card orientation, card dimensions, retention requirement and attachment configuration.
                </p>
              </div>

              {/* Feature Spec Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-3 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
                    <ShieldCheck className="h-4 w-4 text-[#009fe3]" />
                    <span>100% Virgin</span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">Polycarbonate build</p>
                </div>
                <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-3 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
                    <Lock className="h-4 w-4 text-[#009fe3]" />
                    <span>4-Side Lock</span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">Anti-slip retention</p>
                </div>
                <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-3 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
                    <Sliders className="h-4 w-4 text-[#009fe3]" />
                    <span>86 × 54 mm</span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">Standard CR80 card fit</p>
                </div>
                <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-3 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
                    <Truck className="h-4 w-4 text-[#009fe3]" />
                    <span>24–48h</span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">Guwahati dispatch</p>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href="/request-a-quote/"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-[#009fe3]/25 transition-all duration-300 hover:bg-[#008bc9] hover:shadow-xl hover:shadow-[#009fe3]/40 hover:-translate-y-0.5"
                >
                  <span>Request a Holder Quote</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/custom-printed-lanyard-printing/"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-6 py-3.5 text-sm font-bold text-slate-800 dark:text-slate-200 shadow-2xs transition-all duration-300 hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 hover:bg-sky-50/40 dark:hover:bg-slate-700 hover:-translate-y-0.5"
                >
                  <span>Explore Lanyards</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/id-card-printing/"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-5 py-3.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition"
                >
                  <span>PVC ID Cards</span>
                </Link>
              </div>

              {/* Trust Badge Bar */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-xs font-medium text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Wholesale Factory Pricing</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>20mm Standard Lanyard Aperture</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Ready Stock in Guwahati</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Slider Showcase */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
              <HolderHeroCarousel />
            </div>
          </div>
        </Container>
      </section>

      {/* Dynamic Scroll Spy & Sticky Table of Contents Navigation Bar */}
      <HolderScrollSpyNav />

      <div className="bg-slate-50/60 dark:bg-slate-950/20">
        <Container className="pb-12 sm:pb-16 pt-4 sm:pt-6">

          {/* Quick Holder Selection Section */}
          <div>
            <QuickHolderSelectionMatrix />
          </div>

          {/* What Is an ID Card Holder? Section (Interactive Assembly Ecosystem) */}
          <div className="mt-16 sm:mt-20">
            <HolderAssemblyEcosystem />
          </div>

          {/* ID Card Holder Range Section (Master Showcase & Explorer) */}
          <HolderRangeMasterShowcase />

          {/* Engineering Guide: Orientation, Locking & 5-Step Decision Matrix */}
          <HolderEngineeringGuide />

          {/* Applications Grid across Industries */}
          <HolderApplicationsGrid />

          {/* Workflow, Quality, 72-Hour Express Dispatch & Luxury Closing CTA */}
          <HolderWorkflowAndDispatch />

          {/* Frequently Asked Questions Section */}
          <div id="faq" className="mt-16 sm:mt-20 scroll-mt-28">
            <div className="flex items-center justify-between">
              <SectionHead
                eyebrow="FAQ"
                title="Frequently Asked Questions"
                lede="Common questions regarding card holder models, fittings, attachments, and order turnaround:"
              />
              <SectionAnchorButton id="faq" title="FAQ" />
            </div>

            <div className="mt-8">
              <FaqList faqs={faqs} />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
