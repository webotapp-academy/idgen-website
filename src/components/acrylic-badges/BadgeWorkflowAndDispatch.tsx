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
  Layers,
  Boxes,
  MessageSquare,
} from "lucide-react";
import { FlowChain } from "@/components/ui/FlowChain";

export const orderingSteps = [
  {
    num: "01",
    title: "1. Submit Logo & Staff Names",
    body: "Send us your vector artwork (AI/CDR/PDF) along with the staff excel roster for personalized name tags.",
    badge: "Vector Artwork",
  },
  {
    num: "02",
    title: "2. Select Attachment Type",
    body: "Choose between clothes-safe triple neodymium magnet plates or traditional stainless safety pins.",
    badge: "Fastener",
  },
  {
    num: "03",
    title: "3. Precision Laser & UV Printing",
    body: "Our Guwahati facility laser cuts PMMA acrylic to exact contours and applies 1440 DPI direct UV ink printing.",
    badge: "Production",
  },
  {
    num: "04",
    title: "4. Fast Dispatch Across Northeast",
    body: "Shipped in protective foam trays with 48–72h delivery to Assam, Meghalaya, Nagaland and all 8 NE states.",
    badge: "Dispatch",
  },
];

export function BadgeWorkflowAndDispatch({
  data,
}: {
  data?: {
    workflowBadge?: string;
    workflowTitle?: string;
    workflowLede?: string;
    orderingSteps?: Array<{
      num: string;
      title: string;
      body: string;
      badge: string;
    }>;
    dispatchBadge?: string;
    dispatchTitle?: string;
    dispatchHubTag?: string;
    dispatchLede?: string;
    dispatchFlowSteps?: string[];
    dispatchDisclaimers?: string[];
    closingCtaBadge?: string;
    closingCtaTitle?: string;
    closingCtaLede?: string;
    closingCtaButtons?: Array<{
      label: string;
      href: string;
      primary?: boolean;
    }>;
    closingCtaBrandingTitle?: string;
    closingCtaBrandingLocation?: string;
  };
} = {}) {
  const activeSteps =
    data?.orderingSteps && data.orderingSteps.length > 0
      ? data.orderingSteps
      : orderingSteps;

  const flowSteps =
    data?.dispatchFlowSteps && data.dispatchFlowSteps.length > 0
      ? data.dispatchFlowSteps
      : [
          "Vector Proof Approval",
          "Laser Cutting & UV Print",
          "Quality & Magnet Check",
          "Foam Tray Dispatch",
        ];

  const disclaimers =
    data?.dispatchDisclaimers && data.dispatchDisclaimers.length > 0
      ? data.dispatchDisclaimers
      : [
          "Badges are individually packed in anti-scratch sleeves and organized in custom high-density foam sorting trays for safe, pristine transit.",
          "Express courier transit time across Assam, Meghalaya, Arunachal Pradesh, Nagaland, Manipur, Mizoram, Tripura, and Sikkim is additional.",
        ];

  const defaultButtons = [
    { label: "Request a Free Quote", href: "/request-a-quote/", primary: true },
    { label: "Explore ID Card Holders", href: "/id-card-holders/" },
    { label: "View Full Products Range", href: "/products/" },
  ];

  const ctaButtons =
    data?.closingCtaButtons && data.closingCtaButtons.length > 0
      ? data.closingCtaButtons
      : defaultButtons;

  return (
    <div className="space-y-16 sm:space-y-20 mt-16 sm:mt-20">
      {/* ═════════════════════════════════════════════════════════════
          1. HOW TO ORDER CUSTOM ACRYLIC BADGES (4 Steps)
          ═════════════════════════════════════════════════════════════ */}
      <div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200/90 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
              <Clock className="h-3.5 w-3.5" />
              <span>{data?.workflowBadge || "Manufacturing Workflow"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-2">
              {data?.workflowTitle || "How We Craft Custom Acrylic Badges"}
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
              {data?.workflowLede ||
                "From vector artwork verification to precision CO2 laser contour cutting and express delivery across all 8 Northeast states."}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {activeSteps.map((step) => (
            <div
              key={step.num}
              className="relative rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-2xl font-black text-[#009fe3] dark:text-cyan-400">
                  {step.num}
                </span>
                <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase">
                  {step.badge}
                </span>
              </div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════
          2. 48–72H EXPRESS DISPATCH COMMITMENT
          ═════════════════════════════════════════════════════════════ */}
      <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 lg:p-10 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#009fe3] text-white shadow-lg shadow-[#009fe3]/30">
              <Truck className="h-6 w-6" />
            </div>
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                {data?.dispatchBadge || "Factory Express Turnaround"}
              </span>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                {data?.dispatchTitle || "48–72h Factory Dispatch"}
              </h3>
            </div>
          </div>

          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1.5 rounded-full border border-emerald-500/30">
            {data?.dispatchHubTag || "Guwahati Direct Hub"}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl font-normal">
          {data?.dispatchLede ||
            "For standard corporate orders with approved staff rosters, our streamlined production line operates on a strict factory fulfillment schedule:"}
        </p>

        <div className="pt-2">
          <FlowChain steps={flowSteps} />
        </div>

        <div className="border-t border-slate-100 dark:border-slate-800 pt-4 text-[11px] text-slate-500 dark:text-slate-400 space-y-2 leading-relaxed">
          {disclaimers.map((disc, i) => (
            <p key={i}>{disc}</p>
          ))}
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════
          3. NEED CUSTOM ACRYLIC BADGES? (Closing Section)
          ═════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0B1320] via-[#0e1a2e] to-[#071525] px-6 py-12 text-white sm:px-12 sm:py-16 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,159,227,0.25),rgba(255,255,255,0))] pointer-events-none" />
        <div className="pointer-events-none absolute -top-28 right-0 h-80 w-80 rounded-full bg-cyan-400/15 blur-[100px]" />

        <div className="relative z-10 space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold text-cyan-300 backdrop-blur-xs border border-white/10">
              <Sparkles className="h-3.5 w-3.5 text-cyan-300 animate-pulse" />
              <span>
                {data?.closingCtaBadge || "Direct Factory Manufacturing"}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              {data?.closingCtaTitle || "Ready to Order Custom Acrylic Badges?"}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {data?.closingCtaLede ||
                "Whether you need 25 magnetic badges for your medical clinic or 5,000 executive tags for a regional enterprise, IDGen delivers factory-direct precision from Guwahati."}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            {ctaButtons.map((btn, i) =>
              btn.primary ? (
                <Link
                  key={i}
                  href={btn.href}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#009fe3] hover:bg-[#008bc9] px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-[#009fe3]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#009fe3]/50 hover:-translate-y-0.5"
                >
                  <span>{btn.label}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              ) : (
                <Link
                  key={i}
                  href={btn.href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:border-cyan-300 hover:text-cyan-300 hover:-translate-y-0.5"
                >
                  <span>{btn.label}</span>
                </Link>
              )
            )}
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:end justify-between gap-3 text-[11px] text-slate-400">
            <p className="font-mono text-slate-300">
              {data?.closingCtaBrandingTitle ||
                "IDGen — Custom Acrylic Badges & Executive Pins"}
            </p>
            <p>
              {data?.closingCtaBrandingLocation ||
                "Guwahati, Assam • Direct Factory Production Across Northeast India"}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
