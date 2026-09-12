"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sliders,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Award,
  Flame,
  Shirt,
  Layers,
  Box,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Box,
  Sparkles,
  Shirt,
  Flame,
  Award,
  Sliders,
  Layers,
  ShieldCheck,
};

const defaultFactors = [
  {
    num: "01",
    title: "1. Medal Diameter & Thickness",
    desc: "50mm, 60mm, 65mm, 75mm (3.0mm to 5.0mm depth).",
    detail: "For standard school events, 50mm–60mm (3.5mm thick) provides the ideal balance of size and budget. For state championships and marathons, 65mm–75mm (4.0mm–5.0mm thick) delivers massive podium impact.",
    iconName: "Box",
    icon: Box,
  },
  {
    num: "02",
    title: "2. 2D Flat vs 3D Sculpted Relief",
    desc: "Single-plane graphic lines vs multi-level 3D contours.",
    detail: "3D sculpted relief allows rounded human muscle contours, architectural elevations, and curved animal mascots that cannot be represented in flat 2D lines.",
    iconName: "Sparkles",
    icon: Sparkles,
  },
  {
    num: "03",
    title: "3. Custom Satin Ribbon Width",
    desc: "20mm, 25mm, 30mm, 35mm V-Neck Sewn Satin.",
    detail: "Our standard 25mm–30mm silky polyester satin ribbons support double-sided full-color dye sublimation for sponsor logos, event dates, and dynamic gradient artwork.",
    iconName: "Shirt",
    icon: Shirt,
  },
  {
    num: "04",
    title: "4. Plating & Color Enamel Infill",
    desc: "Antique metal finish vs soft enamel color accents.",
    detail: "Choose Antique Gold/Silver/Bronze for traditional prestige, or add vibrant Pantone-matched soft enamel infills for multi-colored federation logos.",
    iconName: "Flame",
    icon: Flame,
  },
];

const defaultPlatingOptions = [
  {
    title: "Antique Gold Plating",
    badge: "1st Place",
    desc: "Rich golden electroplate with dark antique shadowing in recessed textures and mirror-polished highlights.",
    pros: ["Maximum 3D contrast", "Non-glare photographic clarity", "Resistant to finger smudges"],
    iconName: "Award",
    icon: Award,
    highlight: true,
  },
  {
    title: "Antique Silver Plating",
    badge: "2nd Place",
    desc: "Classic antique nickel/silver finish that brings out razor-sharp serif text and academic crest details.",
    pros: ["Elegant institutional look", "High-contrast relief definition", "Tarnish-proof lacquer seal"],
    iconName: "Award",
    icon: Award,
    highlight: false,
  },
  {
    title: "Antique Bronze / Copper",
    badge: "3rd Place / Finisher",
    desc: "Warm copper-bronze patina with rustic antique brushing, ideal for marathon finishers and 3rd place podiums.",
    pros: ["Authentic Olympic aesthetic", "Extremely durable finish", "Popular for marathon runs"],
    iconName: "Award",
    icon: Award,
    highlight: false,
  },
];

export function MedalEngineeringGuide({
  data,
}: {
  data?: {
    badge?: string;
    title?: string;
    description?: string;
    lede?: string;
    factors?: Array<{
      num: string;
      title: string;
      desc: string;
      detail: string;
      iconName?: string;
    }>;
    platingBadge?: string;
    platingTitle?: string;
    fastenersTitle?: string;
    fastenersLede?: string;
    platingOptions?: Array<{
      title: string;
      badge: string;
      desc: string;
      pros: string[];
      iconName?: string;
      highlight?: boolean;
    }>;
    fasteners?: Array<{
      title: string;
      badge: string;
      desc: string;
      pros: string[];
      iconName?: string;
      highlight?: boolean;
    }>;
  };
} = {}) {
  const badgeTitle = data?.badge || "Decision Factors";
  const sectionTitle = data?.title || "Custom Medal Engineering & Specifications";
  const sectionDesc =
    data?.lede ||
    data?.description ||
    "Consider these four technical parameters when designing custom zinc medals for your event:";
  const activeFactors =
    data?.factors && data.factors.length > 0 ? data.factors : defaultFactors;
  const platingBadge = data?.platingBadge || "Electroplate Finishes";
  const platingTitle =
    data?.fastenersTitle ||
    data?.platingTitle ||
    "Medal Electroplating & Patina Options";
  const activePlatingOptions =
    data?.fasteners && data.fasteners.length > 0
      ? data.fasteners
      : data?.platingOptions && data.platingOptions.length > 0
      ? data.platingOptions
      : defaultPlatingOptions;

  const [selectedFactor, setSelectedFactor] = useState<number>(0);
  const safeFactorIndex = selectedFactor < activeFactors.length ? selectedFactor : 0;
  const currentFactor = activeFactors[safeFactorIndex] || activeFactors[0];

  return (
    <section className="mt-16 sm:mt-20">
      {/* ── Section 1: 4 Decision Factors ── */}
      <div className="rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 lg:p-10 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
              <Sliders className="h-3.5 w-3.5" />
              <span>{badgeTitle}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-2">
              {sectionTitle}
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
              {sectionDesc}
            </p>
          </div>
        </div>

        {/* 4 Factor Cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {activeFactors.map((f, idx) => {
            const isSelected = safeFactorIndex === idx;
            const Icon =
              ((f as any).iconName && ICON_MAP[(f as any).iconName]) ||
              (f as any).icon ||
              Box;

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
                Engineering Recommendation: {currentFactor?.title}
              </span>
              <p className="text-xs sm:text-sm text-slate-200 mt-1 font-medium leading-relaxed">
                {currentFactor?.detail}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Section 2: Plating Comparison Matrix ── */}
      <div className="mt-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
              <Flame className="h-3.5 w-3.5" />
              <span>{platingBadge}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-2">
              {platingTitle}
            </h3>
          </div>

          <span className="text-xs font-semibold text-slate-500">
            Gold, Silver &amp; Bronze Podium Sets
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {activePlatingOptions.map((opt, idx) => {
            const Icon =
              ((opt as any).iconName && ICON_MAP[(opt as any).iconName]) ||
              (opt as any).icon ||
              Award;

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
