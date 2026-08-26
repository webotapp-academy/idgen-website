import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Truck,
  Boxes,
  Layers,
  Flame,
  HelpCircle,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { productSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import { MedalHeroShowcase } from "@/components/zinc-medals/MedalHeroShowcase";
import { QuickMedalSelectionMatrix } from "@/components/zinc-medals/QuickMedalSelectionMatrix";
import { MedalAnatomyEcosystem } from "@/components/zinc-medals/MedalAnatomyEcosystem";
import { MedalRangeMasterShowcase } from "@/components/zinc-medals/MedalRangeMasterShowcase";
import { MedalEngineeringGuide } from "@/components/zinc-medals/MedalEngineeringGuide";
import { MedalApplicationsGrid } from "@/components/zinc-medals/MedalApplicationsGrid";
import { MedalWorkflowAndDispatch } from "@/components/zinc-medals/MedalWorkflowAndDispatch";
import type { Faq } from "@/data/types";

/* ─────────────────────────────────────────────────────────────
   SEO METADATA (Strictly from document)
   ───────────────────────────────────────────────────────────── */
export const metadata = pageMetadata({
  title: "Custom Die-Cast Zinc Medals & Awards | Antique Gold, Silver & Bronze | IDGen",
  description:
    "High-relief die-cast zinc alloy medals with full-color custom satin neck ribbons. Manufactured for school sports days, corporate marathons, academic excellence, and institutional awards across Northeast India.",
  path: "/zinc-medals/",
});

/* ─────────────────────────────────────────────────────────────
   FAQS (Document Content)
   ───────────────────────────────────────────────────────────── */
const faqs: Faq[] = [
  {
    q: "What is the weight and feel of zinc alloy medals compared to iron or plastic?",
    a: "Zinc alloy is heavy, solid, and dense, giving a luxury feel when worn around the neck. Unlike stamped iron, zinc allows intricate 3D rounded contours and cutouts without rusting.",
  },
  {
    q: "Can we print custom text or sponsor logos on the neck ribbons?",
    a: "Yes! Our satin ribbons are printed using high-definition dye sublimation, allowing full-color gradient logos, event dates, and sponsor names on both sides.",
  },
  {
    q: "What is the typical production timeline for custom medals?",
    a: "Custom mold die-casting typically takes 7–10 days for production and dispatch from our Guwahati regional hub.",
  },
  {
    q: "What diameters and thicknesses are available for custom medals?",
    a: "We manufacture standard 50mm, 60mm, 65mm, and 75mm medal diameters with thicknesses ranging from 3.0mm to 5.0mm for a deep, high-relief sculpted effect.",
  },
  {
    q: "Do you supply complete Gold, Silver, and Bronze podium sets?",
    a: "Yes, we provide matching 1st, 2nd, and 3rd place podium medal sets with coordinated Antique Gold, Antique Silver, and Antique Bronze electroplating.",
  },
];

export default function ZincMedalsPage() {
  return (
    <>
      <JsonLd
        data={productSchema({
          name: "Custom Die-Cast Zinc Medals & Awards",
          description:
            "High-relief die-cast zinc alloy medals with customized satin ribbons.",
          path: "/zinc-medals/",
        })}
      />

      {/* ─────────────────────────────────────────────────────────────
          1. ULTRA-PREMIUM LIGHT/DARK HERO SECTION (Standard Brand Theme)
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
                { name: "Zinc Medals", path: "/zinc-medals/" },
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
                    Awards &amp; Recognition
                  </span>
                  <span className="h-3 w-px bg-[#009fe3]/30" />
                  <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                    3D Die-Cast Eco Zinc Alloy
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-black text-slate-950 dark:text-white tracking-tight leading-[1.1]">
                  Custom Die-Cast Zinc Medals{" "}
                  <span className="bg-gradient-to-r from-[#009fe3] via-[#0284c7] to-[#0369a1] dark:from-[#38bdf8] dark:via-[#009fe3] dark:to-[#38bdf8] bg-clip-text text-transparent">
                    &amp; Championship Awards
                  </span>
                </h1>

                {/* Subtitle / Lede */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Celebrate sporting victories, academic achievements, and corporate milestones with high-relief die-cast zinc medals. Featuring antique gold, silver, and bronze plating paired with custom-printed satin neck ribbons.
                </p>
              </div>

              {/* Feature Spec Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-3 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
                    <Award className="h-4 w-4 text-[#009fe3]" />
                    <span>Eco Zinc Alloy</span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">High-density solid metal</p>
                </div>
                <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-3 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
                    <Flame className="h-4 w-4 text-[#009fe3]" />
                    <span>Antique Plating</span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">Gold / Silver / Bronze</p>
                </div>
                <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-3 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
                    <Sparkles className="h-4 w-4 text-[#009fe3]" />
                    <span>Satin Ribbon</span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">Full-color sublimated</p>
                </div>
                <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-3 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
                    <Truck className="h-4 w-4 text-[#009fe3]" />
                    <span>Guwahati Hub</span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">All 8 NE States</p>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href="/request-a-quote/"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#009fe3] px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-[#009fe3]/25 transition-all duration-300 hover:bg-[#008bc9] hover:shadow-xl hover:shadow-[#009fe3]/40 hover:-translate-y-0.5"
                >
                  <span>Request Medal Quote</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="#selection-matrix"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-6 py-3.5 text-sm font-bold text-slate-800 dark:text-slate-200 shadow-2xs transition-all duration-300 hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 hover:bg-sky-50/40 dark:hover:bg-slate-700 hover:-translate-y-0.5"
                >
                  <span>Explore Medal Catalog</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/event-card-printing/"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-5 py-3.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition"
                >
                  <span>Event Credentials</span>
                </Link>
              </div>

              {/* Trust Badge Bar */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-xs font-medium text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Free 3D Digital Vector Proof</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Guwahati Factory Supply</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Complete Gold/Silver/Bronze Sets</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Hero Showcase */}
            <div className="lg:col-span-5 flex flex-col">
              <MedalHeroShowcase />
            </div>
          </div>
        </Container>
      </section>

      <div className="bg-slate-50/60 dark:bg-slate-950/20">
        <Container className="pb-12 sm:pb-16 pt-4 sm:pt-6">
          {/* Quick Medal Selection & Model Matrix */}
          <QuickMedalSelectionMatrix />

          {/* Medal Anatomy & Multi-Layer Engineering */}
          <MedalAnatomyEcosystem />

          {/* Master Hardware Showcase */}
          <MedalRangeMasterShowcase />

          {/* Plating Comparison & Decision Guide */}
          <MedalEngineeringGuide />

          {/* Event Applications Grid */}
          <MedalApplicationsGrid />

          {/* Ordering Workflow, Packaging & Dispatch */}
          <MedalWorkflowAndDispatch />

          {/* Frequently Asked Questions */}
          <div className="mt-16 sm:mt-20">
            <SectionHead
              eyebrow="FAQ"
              title="Frequently Asked Questions About Custom Medals"
              lede="Direct answers regarding zinc alloy weight, custom neck ribbons, production timelines, and plating finishes:"
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
