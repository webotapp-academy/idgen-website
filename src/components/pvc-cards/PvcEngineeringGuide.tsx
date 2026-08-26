"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sliders,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  CreditCard,
  Radio,
  Layers,
  Box,
  Flame,
} from "lucide-react";

export function PvcEngineeringGuide() {
  const [selectedFactor, setSelectedFactor] = useState<number>(0);

  const factors = [
    {
      num: "01",
      title: "1. Core Quality & Printhead Life",
      desc: "100% Virgin PVC vs Recycled Core Plastic.",
      detail: "Virgin PVC cards feature zero surface lumps, pinholes, or grey impurities, protecting desktop card printer thermal printheads from scratches and eliminating white printing artifacts.",
      icon: Box,
    },
    {
      num: "02",
      title: "2. Contactless Chip Protocol",
      desc: "13.56MHz Smart vs 125kHz Proximity.",
      detail: "Choose 13.56MHz Mifare 1K for encrypted multi-sector applications (canteen, library, biometric) and 125kHz TK4100 for standard turnstiles and vehicle parking boom barriers.",
      icon: Radio,
    },
    {
      num: "03",
      title: "3. Friction & Swipe Frequency",
      desc: "Lanyard badge vs daily magnetic swipe.",
      detail: "For cards subjected to high-friction daily swipes (POS loyalty or hotel doors), choose high-coercivity (2750 Oe) HiCo magnetic stripes with a protective 1-Mil thermal overlaminate.",
      icon: CreditCard,
    },
    {
      num: "04",
      title: "4. Wearable Ecosystem Compatibility",
      desc: "Card + Holder + Hook + Custom Lanyard.",
      detail: "Pair your PVC cards with our ultrasonic-sealed custom satin lanyards and V-2 Four-Side-Lock rigid holders for a complete institutional identification solution.",
      icon: Layers,
    },
  ];

  const coreOptions = [
    {
      title: "100% Virgin White PVC",
      badge: "IDGen Standard",
      desc: "Pure white virgin polymer with zero regrind impurities. Complies fully with ISO/IEC 7810 standards.",
      pros: ["Zero printhead damage", "Superior bend & snap resistance", "Vibrant dye-sublimation color"],
      icon: CreditCard,
      highlight: true,
    },
    {
      title: "Composite PET / PVC Core",
      badge: "High Heat Resistant",
      desc: "Multi-layer sandwich of 60% PVC and 40% PET polyester, engineered for heavy-duty thermal lamination.",
      pros: ["Withstands high heat lamination", "Extreme flexural durability", "Zero warping in hot climates"],
      icon: Layers,
      highlight: false,
    },
    {
      title: "Pre-Punched Slot PVC",
      badge: "No-Holder Option",
      desc: "Factory die-punched slot hole (vertical or horizontal) for direct clip/hook lanyard attachment without a holder.",
      pros: ["Cost-effective wearable setup", "Smooth burr-free punch edges", "Direct hook attachment"],
      icon: Box,
      highlight: false,
    },
  ];

  return (
    <section className="mt-16 sm:mt-20">
      {/* ── Section 1: 4 Decision Factors ── */}
      <div className="rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 lg:p-10 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
              <Sliders className="h-3.5 w-3.5" />
              <span>Decision Factors</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-2">
              Choosing the Right PVC Card Specification
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
              Consider these four core parameters when selecting PVC card substrates and chip configurations:
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

        {/* Dynamic Detail Alert */}
        <div className="mt-6 rounded-2xl bg-gradient-to-r from-[#071325] via-[#0B1E38] to-[#071325] text-white p-6 shadow-xl border border-cyan-500/20">
          <div className="flex items-start gap-4">
            <Sparkles className="h-5 w-5 text-cyan-300 shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] font-black uppercase text-cyan-300 tracking-wider">
                Engineering Recommendation: {factors[selectedFactor].title}
              </span>
              <p className="text-xs sm:text-sm text-slate-200 mt-1 font-medium leading-relaxed">
                {factors[selectedFactor].detail}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Section 2: PVC Substrate Formulation Matrix ── */}
      <div className="mt-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
              <CreditCard className="h-3.5 w-3.5" />
              <span>Substrate Formulations</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-2">
              PVC Core Quality &amp; Structure
            </h3>
          </div>

          <span className="text-xs font-semibold text-slate-500">
            Bank-grade virgin PVC core specifications
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {coreOptions.map((opt, idx) => {
            const Icon = opt.icon;

            return (
              <div
                key={idx}
                className={`rounded-3xl border-2 p-6 flex flex-col justify-between transition-all duration-300 ${
                  opt.highlight
                    ? "border-[#009fe3] bg-sky-50/40 dark:bg-slate-850 shadow-xl scale-[1.02]"
                    : "border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-10 w-10 rounded-2xl bg-[#009fe3]/10 text-[#009fe3] flex items-center justify-center font-bold">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                        opt.highlight
                          ? "bg-[#009fe3] text-white"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                      }`}
                    >
                      {opt.badge}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base font-black text-slate-900 dark:text-white">
                      {opt.title}
                    </h4>
                    <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {opt.desc}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                    {opt.pros.map((p, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
