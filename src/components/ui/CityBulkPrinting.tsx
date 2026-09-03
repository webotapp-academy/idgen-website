"use client";

import Link from "next/link";
import {
  Layers,
  Hash,
  CreditCard,
  Camera,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Phone,
  CheckCircle2,
  Zap,
} from "lucide-react";

import type { BulkInputItem } from "@/lib/dynamic-locations-types";

interface CityBulkPrintingProps {
  cityName: string;
  stateName: string;
  isGuwahati?: boolean;
  bulkEyebrow?: string;
  bulkSubBadge?: string;
  bulkTitle?: string;
  bulkDesc?: string;
  bulkHighlights?: string[];
  bulkInputsTitle?: string;
  bulkInputsDesc?: string;
  bulkInputsStepTag?: string;
  customBulkInputs?: BulkInputItem[];
  bulkBottomNote?: string;
  bulkCta1Text?: string;
  bulkCta2Text?: string;
}

export function CityBulkPrinting({
  cityName,
  stateName,
  isGuwahati = false,
  bulkEyebrow,
  bulkSubBadge,
  bulkTitle,
  bulkDesc,
  bulkHighlights,
  bulkInputsTitle,
  bulkInputsDesc,
  bulkInputsStepTag,
  customBulkInputs,
  bulkBottomNote,
  bulkCta1Text,
  bulkCta2Text,
}: CityBulkPrintingProps) {
  const defaultInputs = [
    {
      step: "01",
      title: customBulkInputs?.[0]?.title || "Target Quantity",
      description:
        customBulkInputs?.[0]?.description ||
        `50 to 50,000+ units with batch-wise staggered production for ${cityName} institutions.`,
      icon: Hash,
      colorClass: "from-cyan-500/20 to-blue-500/10 text-cyan-500 dark:text-cyan-400 border-cyan-500/30",
      badge: customBulkInputs?.[0]?.badge || "Scalable Volume",
    },
    {
      step: "02",
      title: customBulkInputs?.[1]?.title || "Card & RFID Type",
      description:
        customBulkInputs?.[1]?.description ||
        "Standard CR80 PVC, 125kHz Proximity, or 13.56MHz Mifare smartcards.",
      icon: CreditCard,
      colorClass: "from-blue-500/20 to-indigo-500/10 text-blue-500 dark:text-blue-400 border-blue-500/30",
      badge: customBulkInputs?.[1]?.badge || "Credential Spec",
    },
    {
      step: "03",
      title: customBulkInputs?.[2]?.title || "Data & Photographs",
      description:
        customBulkInputs?.[2]?.description ||
        "Spreadsheet records, photo archives, or live IDGen Studio digital portal.",
      icon: Camera,
      colorClass: "from-emerald-500/20 to-teal-500/10 text-emerald-500 dark:text-emerald-400 border-emerald-500/30",
      badge: customBulkInputs?.[2]?.badge || "Data Processing",
    },
    {
      step: "04",
      title: customBulkInputs?.[3]?.title || "Accessories & Delivery",
      description:
        customBulkInputs?.[3]?.description ||
        `Custom printed lanyards, card holders & express doorstep dispatch to ${cityName}.`,
      icon: PackageCheck,
      colorClass: "from-amber-500/20 to-orange-500/10 text-amber-500 dark:text-amber-400 border-amber-500/30",
      badge: customBulkInputs?.[3]?.badge || "Full Ecosystem",
    },
  ];

  const highlights =
    bulkHighlights && bulkHighlights.length > 0
      ? bulkHighlights
      : ["Up to 10,000+ IDs / Day", "100% Optical Quality Check", "Free Pre-Production Physical Sample"];

  return (
    <section aria-labelledby="bulk-printing-heading" className="relative">
      {/* Decorative ambient background glows */}
      <div className="absolute -top-12 -right-12 -z-10 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 -z-10 h-72 w-72 rounded-full bg-accent/15 blur-3xl pointer-events-none" />

      {/* Main Glassmorphic Container Card */}
      <div className="relative rounded-[2.5rem] border border-slate-200/90 dark:border-white/10 bg-gradient-to-br from-white via-slate-50/60 to-white dark:from-[#0b1320] dark:via-[#0e1726] dark:to-[#070d18] p-6 sm:p-9 lg:p-10 shadow-2xl shadow-slate-900/5 dark:shadow-black/60 backdrop-blur-xl overflow-hidden space-y-8">
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 hero-grid-pattern opacity-40 dark:opacity-20 pointer-events-none" />

        {/* Top Header Block */}
        <div className="relative z-10 space-y-4">
          {/* Eyebrow Live Badge */}
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-accent/30 bg-accent-soft/40 dark:bg-accent/10 px-3.5 py-1.5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-accent">
              {bulkEyebrow || "High-Capacity Production • Institutional Fulfillment"}
            </span>
            <span className="hidden sm:inline-flex items-center rounded-md bg-accent/20 px-2 py-0.5 text-[10px] font-bold text-accent">
              {bulkSubBadge || (isGuwahati ? "Guwahati Direct Hub" : `${cityName} Priority Route`)}
            </span>
          </div>

          {/* Main Title & Icon Header */}
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-cyan-500/10 border border-accent/30 text-accent shadow-sm">
              <Layers className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>
            <div className="min-w-0 flex-1">
              <h2
                id="bulk-printing-heading"
                className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-foreground"
              >
                {bulkTitle || `Bulk ID Card Printing in ${cityName}`}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted max-w-3xl leading-relaxed">
                {bulkDesc ||
                  `IDGen supports institutional and high-volume identification requirements across ${cityName}, ${stateName}. For larger projects (schools, colleges, university batches, corporate renewals), our cleanroom workflows ensure reliable color calibration and prompt doorstep dispatch.`}
              </p>
            </div>
          </div>

          {/* Quick Capability Highlights */}
          <div className="pt-1 flex flex-wrap gap-2 sm:gap-3 text-xs">
            {highlights.map((hl, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-1 text-foreground font-medium backdrop-blur-sm shadow-xs"
              >
                {idx === 0 ? (
                  <Zap className="h-3.5 w-3.5 text-accent" />
                ) : idx === 1 ? (
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                ) : (
                  <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                )}
                <span>{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* The 4 Key Inputs: With Dedicated Icon for Each */}
        <div className="relative z-10 rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-[#0e1726]/80 p-5 sm:p-7 backdrop-blur-xl shadow-lg shadow-slate-900/5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-200/80 dark:border-white/10">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-accent">
                {bulkInputsTitle || `Key Inputs for Large Institutional Orders in ${cityName}:`}
              </p>
              <p className="text-xs text-muted mt-0.5">
                {bulkInputsDesc ||
                  "Provide these four details to receive an instant, accurate quotation tailored to your timeline."}
              </p>
            </div>
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-lg self-start sm:self-auto">
              {bulkInputsStepTag || "Step 1 of 4 Preparation"}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {defaultInputs.map((input) => {
              const Icon = input.icon;
              return (
                <div
                  key={input.step}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 dark:border-white/10 bg-slate-50/70 dark:bg-white/[0.03] p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-white dark:hover:bg-white/[0.07] hover:shadow-lg hover:shadow-accent/5"
                >
                  <div>
                    {/* Top Row: Icon and Step badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br border ${input.colorClass} shadow-xs transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-mono font-extrabold text-muted/70 bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 px-2 py-0.5 rounded-full">
                        {input.step}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-sm font-bold text-foreground group-hover:text-accent transition-colors">
                      {input.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-muted leading-relaxed">
                      {input.description}
                    </p>
                  </div>

                  {/* Micro Badge */}
                  <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/70">
                      {input.badge}
                    </span>
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Verification & Action Bar */}
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-2 text-xs text-muted max-w-xl">
            <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
            <p className="leading-relaxed">
              {bulkBottomNote ||
                `Actual production capacity is matched to product and project specifications for ${cityName}. Qualified bulk projects receive physical pre-production sample proofs for institutional sign-off.`}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto shrink-0">
            <Link
              href="/contact-us/"
              className="flex-1 sm:flex-none text-center rounded-full border border-slate-300 dark:border-white/20 bg-white/80 dark:bg-white/5 px-4 py-2.5 text-xs font-semibold text-foreground transition hover:border-accent hover:text-accent flex items-center justify-center gap-1.5 shadow-xs"
            >
              <Phone className="h-3.5 w-3.5 text-accent" />
              <span>{bulkCta1Text || "Talk to Specialist"}</span>
            </Link>
            <Link
              href="/request-a-quote/"
              className="flex-1 sm:flex-none text-center rounded-full bg-accent px-6 py-2.5 text-xs font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:bg-accent-hover btn-glow flex items-center justify-center gap-1.5"
            >
              <span>{bulkCta2Text || `Request a ${cityName} Bulk Quote`}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
