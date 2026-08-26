import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Truck,
  Boxes,
  Layers,
  Radio,
  HelpCircle,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { productSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import { PvcHeroShowcase } from "@/components/pvc-cards/PvcHeroShowcase";
import { QuickPvcSelectionMatrix } from "@/components/pvc-cards/QuickPvcSelectionMatrix";
import { PvcAnatomyEcosystem } from "@/components/pvc-cards/PvcAnatomyEcosystem";
import { PvcRangeMasterShowcase } from "@/components/pvc-cards/PvcRangeMasterShowcase";
import { PvcEngineeringGuide } from "@/components/pvc-cards/PvcEngineeringGuide";
import { PvcApplicationsGrid } from "@/components/pvc-cards/PvcApplicationsGrid";
import { PvcWorkflowAndDispatch } from "@/components/pvc-cards/PvcWorkflowAndDispatch";
import type { Faq } from "@/data/types";

/* ─────────────────────────────────────────────────────────────
   SEO METADATA (Strictly from document)
   ───────────────────────────────────────────────────────────── */
export const metadata = pageMetadata({
  title: "30-Mil CR80 PVC Smart Cards | Virgin PVC Core Cards | IDGen",
  description:
    "Bank-grade 30-mil (0.76mm) CR80 virgin PVC smart cards manufactured for enterprise employee badges, student ID cards, RFID access cards, and membership programs across Northeast India.",
  path: "/pvc-cards/",
});

/* ─────────────────────────────────────────────────────────────
   FAQS (Document Content)
   ───────────────────────────────────────────────────────────── */
const faqs: Faq[] = [
  {
    q: "What is the difference between virgin PVC and recycled PVC cards?",
    a: "Virgin PVC cards feature pure white core plastic without imperfections, ensuring card printer printheads do not snag or cause white speckles. They also offer 3x higher resistance to snapping or delamination.",
  },
  {
    q: "Can we print metallic foil, holographic overlays, or UV security text on PVC cards?",
    a: "Yes! IDGen offers security overlays including high-resolution 3D custom holograms, invisible UV microtext, and gold/silver foil stamping.",
  },
  {
    q: "What is the standard dimension and thickness of CR80 cards?",
    a: "CR80 is the international credit-card size standard measuring exactly 85.6 mm × 54.0 mm with a standard 30-mil (0.76 mm) thickness compliant with ISO/IEC 7810.",
  },
  {
    q: "Are IDGen PVC cards compatible with RFID smart chips and access systems?",
    a: "Yes, our cards are available with embedded 13.56MHz Mifare 1K chips, 125kHz TK4100 proximity inlays, or high-coercivity (2750 Oe) magnetic stripes.",
  },
  {
    q: "What is the dispatch turnaround for custom printed PVC cards?",
    a: "Standard batches with approved data rosters are produced and dispatched in 24–48 hours from our Guwahati factory across Assam and all 8 Northeast states.",
  },
];

export default function PvcCardsPage() {
  return (
    <>
      <JsonLd
        data={productSchema({
          name: "30-Mil CR80 PVC Smart Cards",
          description:
            "Bank-grade 30-mil CR80 virgin PVC smart cards for ID badges and access control.",
          path: "/pvc-cards/",
        })}
      />

      {/* ─────────────────────────────────────────────────────────────
          1. ULTRA-PREMIUM LIGHT/DARK HERO SECTION (PVC Cards Hub)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white dark:bg-[#070d18] border-b border-slate-200/90 dark:border-slate-800/80 pt-8 pb-8 lg:pt-10 lg:pb-10 transition-colors">
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
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Products", path: "/products/" },
                { name: "PVC Cards", path: "/pvc-cards/" },
              ]}
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Pill Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#009fe3]/30 bg-gradient-to-r from-[#009fe3]/10 via-sky-50 to-white dark:from-cyan-950/60 dark:via-slate-900 dark:to-slate-800 px-4 py-1.5 shadow-2xs">
                  <span className="flex h-2 w-2 rounded-full bg-[#009fe3] animate-pulse" />
                  <span className="text-xs font-black text-[#009fe3] dark:text-cyan-400 uppercase tracking-wider">
                    Core Media &amp; Credentials
                  </span>
                  <span className="h-3 w-px bg-[#009fe3]/30" />
                  <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                    100% Virgin White Core
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-black text-slate-950 dark:text-white tracking-tight leading-[1.1]">
                  30-Mil CR80 Virgin PVC{" "}
                  <span className="bg-gradient-to-r from-[#009fe3] via-[#0284c7] to-[#0369a1] dark:from-[#38bdf8] dark:via-[#009fe3] dark:to-[#38bdf8] bg-clip-text text-transparent">
                    Smart Cards
                  </span>
                </h1>

                {/* Subtitle / Lede */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  The gold standard for identity credentials. IDGen supplies bank-grade 30-mil (0.76mm) CR80 virgin PVC cards with high-definition dye sublimation printing, protective overlaminate, and embedded RFID smart chips.
                </p>
              </div>

              {/* Feature Spec Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-3 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
                    <CreditCard className="h-4 w-4 text-[#009fe3]" />
                    <span>CR80 Format</span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">85.6 × 54.0 mm</p>
                </div>
                <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-3 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
                    <Layers className="h-4 w-4 text-[#009fe3]" />
                    <span>30-Mil Depth</span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">0.76mm bank grade</p>
                </div>
                <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-3 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
                    <Sparkles className="h-4 w-4 text-[#009fe3]" />
                    <span>300 DPI</span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">Dye sublimation</p>
                </div>
                <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-3 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
                    <Truck className="h-4 w-4 text-[#009fe3]" />
                    <span>24–48h</span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">Factory dispatch</p>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href="/request-a-quote/"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-[#009fe3]/25 transition-all duration-300 hover:bg-[#008bc9] hover:shadow-xl hover:shadow-[#009fe3]/40 hover:-translate-y-0.5"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="#selection-matrix"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-6 py-3.5 text-sm font-bold text-slate-800 dark:text-slate-200 shadow-2xs transition-all duration-300 hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 hover:bg-sky-50/40 dark:hover:bg-slate-700 hover:-translate-y-0.5"
                >
                  <span>Explore Card Models</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/id-card-holders/"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-5 py-3.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition"
                >
                  <span>Compatible Holders</span>
                </Link>
              </div>

              {/* Trust Badge Bar */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-xs font-medium text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>100% Virgin Polymer Core</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Guwahati Factory Direct</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Mifare &amp; TK4100 RFID Ready</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Hero Showcase */}
            <div className="lg:col-span-5 flex flex-col">
              <PvcHeroShowcase />
            </div>
          </div>
        </Container>
      </section>

      <div className="bg-slate-50/60 dark:bg-slate-950/20">
        <Container className="pb-12 sm:pb-16 pt-4 sm:pt-6">
          {/* Quick PVC Selection & Model Matrix */}
          <QuickPvcSelectionMatrix />

          {/* PVC Card Anatomy & Multi-Layer Engineering */}
          <PvcAnatomyEcosystem />

          {/* Master Hardware Showcase */}
          <PvcRangeMasterShowcase />

          {/* Formulation Comparison & Decision Guide */}
          <PvcEngineeringGuide />

          {/* Sector Applications Grid */}
          <PvcApplicationsGrid />

          {/* Ordering Workflow, Packaging & Dispatch */}
          <PvcWorkflowAndDispatch />

          {/* Frequently Asked Questions */}
          <div className="mt-16 sm:mt-20">
            <SectionHead
              eyebrow="FAQ"
              title="Frequently Asked Questions About PVC Cards"
              lede="Direct answers regarding virgin vs recycled PVC, security overlays, CR80 standards, and chip compatibility:"
            />

            <div className="mt-8">
              <FaqList faqs={faqs} />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
