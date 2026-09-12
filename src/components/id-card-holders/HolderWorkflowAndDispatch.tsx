"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Clock,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Truck,
  PackageCheck,
  MessageSquare,
  PhoneCall,
  Sliders,
  Layers,
  Award,
  Zap,
} from "lucide-react";

export const orderingSteps = [
  {
    num: "01",
    title: "Tell Us Your Requirement",
    body: "Provide holder model code (if known), estimated quantity, card dimensions (e.g. 86×54mm), orientation, and application.",
    badge: "Inquiry",
  },
  {
    num: "02",
    title: "Select the Holder Model",
    body: "Choose between standard open slip (V-1/H-1), four-side lock (V-2/H-2), chemical sticker (V-3), or luxury metal/crystal.",
    badge: "Matching",
  },
  {
    num: "03",
    title: "Add Attachment Hardware",
    body: "Match with a 360° swivel chrome fish hook or dog clip engineered for our 20mm slot apertures.",
    badge: "Hardware",
  },
  {
    num: "04",
    title: "Pair Custom Printed Lanyards",
    body: "Coordinate custom sublimated satin lanyards with your organization's logo and official branding.",
    badge: "Branding",
  },
  {
    num: "05",
    title: "Sample & Order Approval",
    body: "Confirm specification details, digital proofs, and bulk tier wholesale pricing.",
    badge: "Sign-Off",
  },
  {
    num: "06",
    title: "72-Hour Factory Dispatch",
    body: "Approved orders undergo multi-point quality inspection and are dispatched within 72 hours via express courier.",
    badge: "Express Dispatch",
  },
];

export const qualityPoints = [
  "Precision ISO CR80 (86 × 54 mm) Card Fit",
  "Strict Portrait & Landscape Alignment",
  "Engineered 4-Side Anti-Fallout Retention",
  "Universal 20mm Anti-Twist Aperture",
  "100% Virgin Polymer Optical Clarity",
  "Smooth Diamond-Finished Beveled Edges",
  "Heavy-Duty Chrome Swivel Dog Hooks",
  "Factory Direct Wholesale Guaranteed Pricing",
];

import type { DynamicIdCardHoldersWorkflowAndDispatch } from "@/lib/dynamic-id-card-holders-types";

export function HolderWorkflowAndDispatch({
  data,
}: {
  data?: DynamicIdCardHoldersWorkflowAndDispatch;
} = {}) {
  const bundles = data?.bundles;
  const quality = data?.quality;
  const ordering = data?.orderingWorkflow;
  const dispatch = data?.expressDispatch;
  const closing = data?.closingCta;

  const currentQualityPoints = quality?.points && quality.points.length > 0 ? quality.points : qualityPoints;
  const currentOrderingSteps = ordering?.steps && ordering.steps.length > 0 ? ordering.steps : orderingSteps;

  return (
    <div className="space-y-16 sm:space-y-20 mt-16 sm:mt-20 scroll-mt-28" id="workflow-dispatch">
      {/* ═════════════════════════════════════════════════════════════
          SECTION 1: WEARABLE COMBINATIONS (BASIC VS FULL SET)
          ═════════════════════════════════════════════════════════════ */}
      <div className="relative overflow-hidden rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 lg:p-10 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
              <Layers className="h-4 w-4" />
              <span>{bundles?.badge || "Complete Identification Bundles"}</span>
            </span>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
              {bundles?.title || "ID Card Holder + Lanyard Wearable Systems"}
            </h3>
          </div>

          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            {bundles?.subtitle || "Factory Packaged & Pre-Assembled"}
          </span>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Combination A: Basic Desk Pass */}
          <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/50 p-6 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500">
                {bundles?.tier1?.tag || "Tier 1 • Basic Essential"}
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                {bundles?.tier1?.title || "ID Card + Card Holder"}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                {bundles?.tier1?.desc || "Ideal for desktop badges, pocket cards, wallet storage, and standalone identity credentials without hanging attachments."}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                {bundles?.tier1?.subtext || "Single unit or bulk cartons"}
              </span>
              <Link
                href={bundles?.tier1?.linkHref || "/id-card-printing/"}
                className="text-xs font-bold text-[#009fe3] dark:text-cyan-400 hover:underline"
              >
                {bundles?.tier1?.linkText || "PVC Cards →"}
              </Link>
            </div>
          </div>

          {/* Combination B: Full Wearable Set */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-[#009fe3]/70 dark:border-cyan-500/60 bg-gradient-to-br from-sky-500/10 via-white to-sky-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-900 p-6 flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                  {bundles?.tier2?.tag || "Tier 2 • Full Enterprise System"}
                </span>
                <span className="rounded-full bg-[#009fe3] text-white px-2.5 py-0.5 text-[10px] font-bold">
                  {bundles?.tier2?.popularBadge || "Most Popular"}
                </span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                {bundles?.tier2?.title || "PVC Card + Holder + Fish Hook + Printed Lanyard"}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {bundles?.tier2?.desc || "The complete turnkey executive identification setup. Fully color-coordinated with your organization's pantone colors, logo, and staff credentials."}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-700 flex flex-wrap items-center justify-between gap-3">
              <Link
                href={bundles?.tier2?.primaryButtonHref || "/custom-printed-lanyard-printing/"}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] hover:bg-[#0084be] text-white px-4 py-2 text-xs font-bold shadow-xs transition"
              >
                <span>{bundles?.tier2?.primaryButtonText || "Custom Lanyard Sets"}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>

              <Link
                href={bundles?.tier2?.secondaryButtonHref || "/request-a-quote/"}
                className="text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white underline"
              >
                {bundles?.tier2?.secondaryButtonText || "Get Full Bundle Quote"}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════
          SECTION 2: QUALITY & COMPATIBILITY BENCHMARKS
          ═════════════════════════════════════════════════════════════ */}
      <div className="overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 lg:p-10 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {quality?.title || "Holder Quality & Precision Compatibility"}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {quality?.subtitle || "IDGen 8-Point Manufacturing & Tolerance Standards"}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {currentQualityPoints.map((pt, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/60 p-3.5 text-xs font-bold text-slate-800 dark:text-slate-200"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
              <span>{pt}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-sky-50/60 dark:bg-slate-800/40 p-4 border border-sky-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>
            {quality?.note || (
              <>
                For benchmark <strong>V-1</strong> and <strong>V-2</strong> models, IDGen guarantees 100% virgin plastic resin, ultrasonic finished edges, and a standardized 20 mm lanyard aperture. For specialized models, physical sample validation is provided prior to mass production.
              </>
            )}
          </p>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════
          SECTION 3: 6-STEP ORDERING WORKFLOW
          ═════════════════════════════════════════════════════════════ */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
            <Sliders className="h-3.5 w-3.5" />
            <span>{ordering?.eyebrow || "Fulfillment Pipeline"}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-2">
            {ordering?.title || "Ordering ID Card Holders"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5">
            {ordering?.lede || "A frictionless 6-step ordering process from requirement confirmation to express delivery."}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {currentOrderingSteps.map((step) => (
            <div
              key={step.num}
              className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#009fe3] hover:shadow-lg dark:hover:border-cyan-500"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-black text-white bg-[#009fe3] px-2.5 py-1 rounded-xl shadow-xs">
                    {step.num}
                  </span>
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-full">
                    {step.badge}
                  </span>
                </div>

                <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#009fe3] dark:group-hover:text-cyan-400 transition-colors">
                  {step.title}
                </h4>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.body}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Verified Step</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════
          SECTION 4: 72-HOUR DISPATCH COMMITMENT BANNER
          ═════════════════════════════════════════════════════════════ */}
      <div className="relative overflow-hidden rounded-3xl border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-950 p-6 sm:p-8 lg:p-10 text-white shadow-2xl">
        <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-slate-950 font-black shadow-md">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-emerald-400">
                {dispatch?.badge || "Factory Speed Commitment"}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {dispatch?.title || "72-Hour Express Dispatch"}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3.5 py-1 text-xs font-bold text-emerald-300">
              {dispatch?.pill || "⚡ Guaranteed Timeline on Approved Orders"}
            </span>
          </div>
        </div>

        {/* Dispatch Step Chain */}
        <div className="relative z-10 mt-8 grid gap-4 sm:grid-cols-4">
          {(
            dispatch?.steps || [
              { step: "01", label: "Approval & Payment", desc: "Digital signoff released" },
              { step: "02", label: "Preparation", desc: "Batch picking & staging" },
              { step: "03", label: "Quality Check", desc: "Aperture & finish audit" },
              { step: "04", label: "72h Dispatch", desc: "Handover to express courier" },
            ]
          ).map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 relative"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-black text-emerald-400">
                  {item.step}
                </span>
                <PackageCheck className="h-4 w-4 text-slate-500" />
              </div>
              <h4 className="text-sm font-bold text-white">{item.label}</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="relative z-10 mt-6 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            {dispatch?.footerNote || "• 72-hour period refers to factory handover from IDGen Guwahati. Express courier transit time applies to final destination."}
          </p>
          <a
            href={dispatch?.whatsappHref || "https://wa.me/919207012084?text=Hi%20IDGen%2C%20I%20need%20urgent%20express%20dispatch%20for%20ID%20card%20holders."}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 font-bold text-emerald-400 hover:underline"
          >
            <span>{dispatch?.whatsappText || "Check Dispatch Timeline for Your City"}</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════
          SECTION 5: CLOSING LUXURY CTA BAND
          ═════════════════════════════════════════════════════════════ */}
      <div className="relative overflow-hidden rounded-3xl border-2 border-sky-400/40 bg-gradient-to-b from-slate-900 via-slate-900/95 to-[#07172c] p-8 sm:p-12 text-center text-white shadow-2xl">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#009fe3]/25 blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300">
            <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
            <span>{closing?.badge || "Direct Wholesale Factory Pricing"}</span>
          </div>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            {closing?.title || "Need the Right ID Card Holder?"}
          </h3>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {closing?.description || (
              <>
                Tell us your <strong className="text-white">Card Size + Orientation + Estimated Quantity</strong> and our engineers will calculate your instant wholesale estimate and sample kit.
              </>
            )}
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={closing?.primaryButton?.href || "/request-a-quote/"}
              className="inline-flex items-center gap-2 rounded-2xl bg-[#009fe3] hover:bg-[#0084be] text-white px-7 py-3.5 text-sm font-bold shadow-lg shadow-sky-500/25 transition-all hover:-translate-y-0.5"
            >
              <span>{closing?.primaryButton?.text || "Request Bulk Factory Quote"}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href={closing?.whatsappButton?.href || "https://wa.me/919207012084?text=Hi%20IDGen%20Team%2C%20I%20would%20like%20a%20quote%20for%20ID%20card%20holders%20and%20lanyards."}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-800/80 hover:bg-slate-800 px-6 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5"
            >
              <MessageSquare className="h-4 w-4 text-emerald-400" />
              <span>{closing?.whatsappButton?.text || "Instant WhatsApp Desk"}</span>
            </a>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            {(
              closing?.trustPoints || [
                "Wholesale Cartons in Stock",
                "Free Physical Sample Kits for Institutions",
                "Pan-India Express Logistics",
              ]
            ).map((point, idx) => (
              <span key={idx} className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                {point}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
