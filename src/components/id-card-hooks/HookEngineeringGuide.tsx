"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sliders,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  Zap,
  Check,
  ChevronRight,
  Shield,
  Box,
  Layers,
  Users,
} from "lucide-react";

export function HookEngineeringGuide() {
  const [selectedFactor, setSelectedFactor] = useState<number>(0);

  const factors = [
    {
      num: "01",
      title: "1. Holder Type",
      desc: "Check the attachment point on your ID card holder.",
      detail: "Confirm the attachment hole or slot on your selected holder (e.g. V-1, V-2, H-1, H-2, CV-1 Crystal, or Metal Holder) to ensure compatible hook ingress.",
      icon: Box,
    },
    {
      num: "02",
      title: "2. Card Configuration",
      desc: "Confirm whether the card is being used inside a holder or as a direct badge attachment.",
      detail: "Determine whether the card will be housed within an ID card holder or punched directly for badge-clip attachment.",
      icon: Layers,
    },
    {
      num: "03",
      title: "3. Lanyard",
      desc: "Check the lanyard width and attachment arrangement.",
      detail: "Check whether you are pairing with a 16 mm, 20 mm, or custom printed lanyard, and whether a single hook or two-hook arrangement is needed.",
      icon: Sliders,
    },
    {
      num: "04",
      title: "4. Application",
      desc: "Consider whether the setup is intended for: Daily student use, Employee identification, Visitor identification, Events, Membership, Institutional use.",
      detail: "Match the hardware to your operational environment, from everyday classroom wear to executive summits and institutional supply.",
      icon: Users,
    },
  ];

  const qualityPoints = [
    "Secure attachment",
    "Compatibility with the holder",
    "Compatibility with the lanyard",
    "Consistent construction",
    "Appropriate connection for the intended use",
  ];

  return (
    <section className="mt-16 sm:mt-20 scroll-mt-28" id="hook-engineering-guide">
      {/* ── Section 1: Choosing the Right ID Card Hook (4 Factors) ── */}
      <div className="rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 lg:p-10 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
              <Sliders className="h-3.5 w-3.5" />
              <span>Decision Factors</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-2">
              Choosing the Right ID Card Hook
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
              The correct hook should not be selected based only on appearance. Consider these four factors:
            </p>
          </div>
        </div>

        {/* 4 Factor Cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {factors.map((f, idx) => {
            const isSelected = selectedFactor === idx;
            const Icon = f.icon;

            return (
              <div
                key={f.num}
                onClick={() => setSelectedFactor(idx)}
                className={`rounded-2xl border-2 p-5 flex flex-col justify-between transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "border-[#009fe3] bg-sky-50/70 dark:bg-slate-800 shadow-md scale-[1.02]"
                    : "border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/40 hover:border-slate-300"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-black text-[#009fe3] dark:text-cyan-400">
                      {f.num} • Factor
                    </span>
                    <Icon className="h-4 w-4 text-slate-400" />
                  </div>
                  <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {f.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 text-[11px] font-bold text-[#009fe3]">
                  <span>{isSelected ? "Active Factor" : "Select Factor"}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Simple Rule Banner */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#071325] via-[#0B1E38] to-[#071325] text-white p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl border border-cyan-500/20">
          <div className="space-y-1">
            <span className="text-[10px] font-black uppercase text-cyan-300 tracking-wider">
              Simple Rule
            </span>
            <p className="text-lg sm:text-xl font-black">
              Holder → Compatible Hook → Lanyard
            </p>
          </div>
          <p className="text-xs font-medium text-slate-300 max-w-md md:text-right">
            If you are unsure which hook is appropriate, provide the holder model, card size and lanyard type when requesting a quotation.
          </p>
        </div>
      </div>

      {/* ── Section 2: Quality & Compatibility ── */}
      <div className="mt-12 rounded-3xl border-2 border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-950/20 p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-emerald-500/20">
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Quality &amp; Compatibility
            </span>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
              A Suitable ID Card Hook Should Provide:
            </h3>
          </div>

          <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/60 px-3 py-1.5 rounded-full border border-emerald-500/30">
            Assembly Standard
          </span>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {qualityPoints.map((pt, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-emerald-500/20 bg-white/90 dark:bg-slate-900/90 p-4 shadow-2xs flex items-center gap-3"
            >
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                {pt}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-white/80 dark:bg-slate-900/80 p-4 border border-emerald-500/20 text-xs font-medium text-slate-700 dark:text-slate-300 leading-relaxed space-y-1">
          <p>
            <strong>Assembly Note: </strong> Because hooks are part of a larger identification assembly, compatibility is more important than choosing a hook in isolation.
          </p>
          <p className="text-slate-500 dark:text-slate-400">
            For bulk orders, confirm the complete configuration before production or dispatch.
          </p>
        </div>
      </div>
    </section>
  );
}
