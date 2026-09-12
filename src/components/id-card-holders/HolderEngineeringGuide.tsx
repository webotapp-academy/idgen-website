"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sliders,
  Lock,
  Unlock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  Zap,
  Check,
  ChevronRight,
  CreditCard,
  Building2,
  Compass,
} from "lucide-react";

import type { DynamicIdCardHoldersEngineeringGuide } from "@/lib/dynamic-id-card-holders-types";

const defaultDecisionSteps = [
  {
    q: "Step 1 • What is your card orientation?",
    a: "Portrait → Vertical Holder (V-Series) | Landscape → Horizontal Holder (H-Series)",
    detail: "Match the physical card orientation to avoid awkward tilted display.",
    recommended: ["V-1", "V-2", "H-1", "H-2"],
  },
  {
    q: "Step 2 • Do you need extra retention security?",
    a: "Standard everyday → V-1 / H-1 | Active movement → V-2 / H-2 (4-Side Lock)",
    detail: "Four-side locking tabs physically capture card corners, preventing accidental slippage during daily commutes or factory shifts.",
    recommended: ["V-2", "H-2"],
  },
  {
    q: "Step 3 • Is your card using a chemical sticker format?",
    a: "Chemical dome / sticker format → V-3 Chemical Sticker Holder",
    detail: "Specially formulated recessed frame providing sealed protection for resin dome badges.",
    recommended: ["V-3"],
  },
  {
    q: "Step 4 • Is this for executive or VIP leadership presentation?",
    a: "Executive appearance → Metal ID Holder or CV-1 Crystal Optical Acrylic",
    detail: "Machined aluminum alloy or diamond-beveled crystal acrylic for commanding corporate presence.",
    recommended: ["Metal Holder", "CV-1 Crystal"],
  },
  {
    q: "Step 5 • Do you need lanyard hardware attachments?",
    a: "Holder to Lanyard connection → Precision Chrome Fish Hook",
    detail: "Full 360-degree rotational swivel with spring gate that snaps into any 20mm slot.",
    recommended: ["Fish Hook"],
  },
];

export function HolderEngineeringGuide({
  data,
}: {
  data?: DynamicIdCardHoldersEngineeringGuide;
} = {}) {
  const [selectedDecisionStep, setSelectedDecisionStep] = useState<number>(0);
  const decisionSteps =
    data?.decisionSteps && data.decisionSteps.length > 0
      ? data.decisionSteps
      : defaultDecisionSteps;
  const orient = data?.orientationCard;
  const lock = data?.lockingCard;

  return (
    <section className="mt-16 sm:mt-20 scroll-mt-28" id="engineering-guide">
      {/* ── Visual Comparison: Orientation & Locking ── */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* ── CARD 1: Vertical vs Horizontal ── */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xl">
          {/* Ambient Glow */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-sky-400/10 blur-3xl" />

          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
            <Compass className="h-4 w-4" />
            <span>{orient?.tag || "Orientation Engineering"}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
            {orient?.title || "Vertical vs Horizontal Holders"}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {orient?.description || "Selecting between portrait and landscape holders depends strictly on your printed card artwork layout."}
          </p>

          <div className="mt-6 space-y-4">
            {/* Vertical Option */}
            <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/60 p-4 transition hover:border-[#009fe3]">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 dark:text-white text-sm">
                  {orient?.verticalTitle || "Vertical (Portrait) Holders"}
                </span>
                <span className="font-mono text-xs font-bold text-[#009fe3] dark:text-cyan-400 bg-sky-100 dark:bg-sky-950 px-2 py-0.5 rounded-md">
                  {orient?.verticalDim || "86 × 54 mm"}
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                {orient?.verticalDesc || "Use when card is taller than wide (Corporate staff, student badges)."}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5 pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
                {["V-1", "V-2", "V-3", "Metal", "CV-1"].map((m) => (
                  <span key={m} className="font-mono text-[11px] font-bold bg-white dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* Horizontal Option */}
            <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/60 p-4 transition hover:border-[#009fe3]">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 dark:text-white text-sm">
                  {orient?.horizontalTitle || "Horizontal (Landscape) Holders"}
                </span>
                <span className="font-mono text-xs font-bold text-[#009fe3] dark:text-cyan-400 bg-sky-100 dark:bg-sky-950 px-2 py-0.5 rounded-md">
                  {orient?.horizontalDim || "54 × 86 mm"}
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                {orient?.horizontalDesc || "Use when card is wider than tall (Conferences, visitor passes, event credentials)."}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5 pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
                {["H-1", "H-2"].map((m) => (
                  <span key={m} className="font-mono text-[11px] font-bold bg-white dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── CARD 2: Standard vs Four-Side Lock ── */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xl">
          {/* Ambient Glow */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <Lock className="h-4 w-4" />
            <span>{lock?.tag || "Retention Engineering"}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
            {lock?.title || "Standard vs Four-Side Lock"}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {lock?.description || "The fundamental distinction between standard and four-side-lock is card retention under active physical motion."}
          </p>

          <div className="mt-6 space-y-4">
            {/* Standard Drop-In */}
            <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/60 p-4 transition hover:border-sky-400">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Unlock className="h-4 w-4 text-sky-500" />
                  <span className="font-bold text-slate-900 dark:text-white text-sm">
                    {lock?.dropInTitle || "Standard Drop-In (V-1 / H-1)"}
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded text-slate-700 dark:text-slate-300">
                  Easy Slide
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                {lock?.dropInDesc || "Ideal for general office environments, daily card swiping, and quick card removal."}
              </p>
            </div>

            {/* Four-Side Lock */}
            <div className="rounded-2xl border-2 border-emerald-500/40 bg-emerald-50/40 dark:bg-emerald-950/20 p-4 transition hover:border-emerald-500">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Lock className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="font-bold text-slate-900 dark:text-white text-sm">
                    {lock?.fourSideTitle || "Four-Side Lock (V-2 / H-2)"}
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase bg-emerald-500 text-white px-2 py-0.5 rounded">
                  Max Security
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                {lock?.fourSideDesc || "Four precision corner snap-pins physically hold card edges. Zero card loss during high physical movement."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── 5-Step Decision Matrix Interactive Navigator ── */}
      <div className="mt-12 overflow-hidden rounded-3xl border-2 border-sky-200/80 dark:border-sky-800/60 bg-gradient-to-br from-white via-sky-50/20 to-white dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 p-6 sm:p-8 lg:p-10 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
              <Zap className="h-4 w-4" />
              <span>{data?.eyebrow || "Decision Guide"}</span>
            </span>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
              {data?.decisionStepsTitle || "Which Holder Should You Choose?"}
            </h3>
          </div>

          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            {data?.decisionStepsLede || "5-Step Factory Selection Protocol"}
          </span>
        </div>

        {/* Step Cards Grid */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {decisionSteps.map((step, idx) => {
            const isSelected = selectedDecisionStep === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedDecisionStep(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? "border-[#009fe3] bg-sky-50/90 dark:bg-sky-950/50 ring-2 ring-[#009fe3]/40 shadow-md -translate-y-1"
                    : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                <div>
                  <span
                    className={`font-mono text-[11px] font-black px-2 py-0.5 rounded-md ${
                      isSelected
                        ? "bg-[#009fe3] text-white"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                    }`}
                  >
                    Step 0{idx + 1}
                  </span>
                  <p className="text-xs font-bold text-slate-900 dark:text-white mt-2.5 line-clamp-2">
                    {step.q.split("•")[1] || step.q}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-[11px] font-bold text-[#009fe3] dark:text-cyan-400">
                  <span>View Match</span>
                  <ChevronRight className="h-3 w-3" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep-Dive Callout */}
        <div className="mt-6 rounded-2xl border border-sky-200 dark:border-sky-800 bg-white dark:bg-slate-900/90 p-5 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                {decisionSteps[selectedDecisionStep].q}
              </div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                {decisionSteps[selectedDecisionStep].a}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {decisionSteps[selectedDecisionStep].detail}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={`https://wa.me/919207012084?text=Hi%20IDGen%2C%20help%20me%20choose%20the%20right%20holder%20for%3A%20${encodeURIComponent(decisionSteps[selectedDecisionStep].q)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] hover:bg-[#0084be] text-white px-4 py-2.5 text-xs font-bold shadow-xs transition"
              >
                <span>Consult Factory Engineer</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
