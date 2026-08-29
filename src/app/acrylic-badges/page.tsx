import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Award,
  Magnet,
  Truck,
  Boxes,
  HelpCircle,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { productSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import { BadgeHeroCarousel } from "@/components/acrylic-badges/BadgeHeroCarousel";
import { QuickBadgeSelectionMatrix } from "@/components/acrylic-badges/QuickBadgeSelectionMatrix";
import { BadgeAnatomyEcosystem } from "@/components/acrylic-badges/BadgeAnatomyEcosystem";
import { BadgeRangeMasterShowcase } from "@/components/acrylic-badges/BadgeRangeMasterShowcase";
import { BadgeEngineeringGuide } from "@/components/acrylic-badges/BadgeEngineeringGuide";
import { BadgeApplicationsGrid } from "@/components/acrylic-badges/BadgeApplicationsGrid";
import { BadgeWorkflowAndDispatch } from "@/components/acrylic-badges/BadgeWorkflowAndDispatch";
import type { Faq } from "@/data/types";

/* ─────────────────────────────────────────────────────────────
   SEO METADATA (Strictly from document)
   ───────────────────────────────────────────────────────────── */
export const metadata = pageMetadata({
  title: "Custom Acrylic Badges & Executive Pins | High-Gloss PMMA Badges | IDGen",
  description:
    "Direct Guwahati factory manufacturing of precision laser-cut acrylic badges with high-grade magnetic backings and metallic pins for corporate staff, medical personnel, and executive events.",
  path: "/acrylic-badges/",
});

/* ─────────────────────────────────────────────────────────────
   FAQS (Document Content)
   ───────────────────────────────────────────────────────────── */
const faqs: Faq[] = [
  {
    q: "Will the magnetic backing damage suits or delicate clothing?",
    a: "No! Unlike traditional pins, our neodymium magnetic plates hold firmly through blazers, lab coats, and shirts without poking holes or damaging delicate fabric fibers.",
  },
  {
    q: "Can acrylic badges be cut into custom organic logo shapes?",
    a: "Yes, our CO2 laser cutting equipment allows any custom geometric or shield shape based on your logo outline.",
  },
  {
    q: "What is the minimum order quantity for custom acrylic badges?",
    a: "We cater to corporate orders starting from as low as 25 pieces up to large enterprise volumes of 5,000+ units.",
  },
  {
    q: "How durable is the UV printing on acrylic badges?",
    a: "Our 1440 DPI direct UV inks are cured with industrial LED UV lamps, creating a permanent, scratch-resistant, and chemical-resistant bond on cast PMMA acrylic.",
  },
  {
    q: "What is the standard production and delivery turnaround?",
    a: "Standard orders with approved staff rosters are produced in 48–72 hours at our Guwahati facility and dispatched across Assam and all 8 Northeast states.",
  },
];

export default function AcrylicBadgesPage() {
  return (
    <>
      <JsonLd
        data={productSchema({
          name: "Custom Acrylic Badges & Executive Pins",
          description:
            "Precision laser-cut acrylic badges with high-grade magnetic backings and safety pins.",
          path: "/acrylic-badges/",
        })}
      />

      {/* ─────────────────────────────────────────────────────────────
          1. ULTRA-PREMIUM LIGHT/DARK HERO SECTION (Acrylic Badges)
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
                { name: "Acrylic Badges", path: "/acrylic-badges/" },
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
                    Executive Identification
                  </span>
                  <span className="h-3 w-px bg-[#009fe3]/30" />
                  <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                    Laser-Cut Cast PMMA
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-black text-slate-950 dark:text-white tracking-tight leading-[1.1]">
                  Custom Laser-Cut Acrylic Badges{" "}
                  <span className="bg-gradient-to-r from-[#009fe3] via-[#0284c7] to-[#0369a1] dark:from-[#38bdf8] dark:via-[#009fe3] dark:to-[#38bdf8] bg-clip-text text-transparent">
                    &amp; Magnetic Pins
                  </span>
                </h1>

                {/* Subtitle / Lede */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Elevate your corporate brand, hospital staff, or executive delegates with glass-clear PMMA acrylic name tags. Manufactured in Guwahati with 1440 DPI direct UV printing and clothing-safe neodymium magnetic backings.
                </p>
              </div>

              {/* Feature Spec Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-3 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
                    <Shield className="h-4 w-4 text-[#009fe3]" />
                    <span>3mm PMMA</span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">Cast optical acrylic</p>
                </div>
                <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-3 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
                    <Sparkles className="h-4 w-4 text-[#009fe3]" />
                    <span>1440 DPI</span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">Direct UV printing</p>
                </div>
                <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-3 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
                    <Magnet className="h-4 w-4 text-[#009fe3]" />
                    <span>Triple Magnet</span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">Clothes-safe hold</p>
                </div>
                <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-3 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
                    <Truck className="h-4 w-4 text-[#009fe3]" />
                    <span>48–72h</span>
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
                  <span>Request a Free Quote</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="#selection-matrix"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-6 py-3.5 text-sm font-bold text-slate-800 dark:text-slate-200 shadow-2xs transition-all duration-300 hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 hover:bg-sky-50/40 dark:hover:bg-slate-700 hover:-translate-y-0.5"
                >
                  <span>Explore Badge Models</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/id-card-holders/"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-5 py-3.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition"
                >
                  <span>ID Card Holders</span>
                </Link>
              </div>

              {/* Trust Badge Bar */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-xs font-medium text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Zero Setup Charge on Bulk Orders</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Guwahati Factory Direct</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>100% Neodymium Magnets</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Slider Showcase */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
              <BadgeHeroCarousel />
            </div>
          </div>
        </Container>
      </section>

      <div className="bg-slate-50/60 dark:bg-slate-950/20">
        <Container className="pb-12 sm:pb-16 pt-4 sm:pt-6">
          {/* Quick Badge Selection & Model Matrix */}
          <QuickBadgeSelectionMatrix />

          {/* Badge Anatomy & Multi-Layer Engineering */}
          <BadgeAnatomyEcosystem />

          {/* Master Hardware Showcase */}
          <BadgeRangeMasterShowcase />

          {/* Fastener Comparison & Decision Guide */}
          <BadgeEngineeringGuide />

          {/* Sector Applications Grid */}
          <BadgeApplicationsGrid />

          {/* Ordering Workflow, Packaging & 72-Hour Dispatch */}
          <BadgeWorkflowAndDispatch />

          {/* Frequently Asked Questions */}
          <div className="mt-16 sm:mt-20">
            <SectionHead
              eyebrow="FAQ"
              title="Frequently Asked Questions About Acrylic Badges"
              lede="Direct answers regarding magnetic backings, custom contour shapes, minimum order quantities, and durability:"
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
