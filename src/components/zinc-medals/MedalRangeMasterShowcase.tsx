"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Box,
  Flame,
} from "lucide-react";

export interface MasterMedalSection {
  code: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
  setup: string;
  suitable: string[];
  specs: { k: string; v: string }[];
  conclusion: string;
}

export const masterMedalSections: MasterMedalSection[] = [
  {
    code: "Championship 3D Gold",
    badge: "1st Place Award",
    title: "3D High-Relief Championship Gold Medals",
    tagline: "Heavy-density zinc alloy with deep sculpted relief and antique gold plating.",
    description:
      "Engineered for high-stakes athletic championships, state-level tournaments, and annual sports days. Features multi-level 3D vector modeling, high-relief laurel crowns, and mirror-buffed raised typography.",
    image: "/images/Zinc Medal/IMG_20260213_100040.jpg.jpeg",
    alt: "Custom High-Relief Zinc Gold Medal with Ribbon",
    setup: "High-Density Zinc Alloy + Antique Gold Electroplate + 25mm Sublimated Satin Ribbon",
    suitable: [
      "School & College Annual Sports Meets",
      "State-Level Athletic Championships",
      "Football & Cricket League Champions",
      "Inter-College Basketball Tournaments",
      "Martial Arts Gold Medalists",
    ],
    specs: [
      { k: "Diameter", v: "65mm (3.5mm – 4.5mm thickness)" },
      { k: "Core Material", v: "Eco-Friendly Zinc Alloy" },
      { k: "Plating", v: "Antique Gold Electroplate" },
      { k: "Ribbon", v: "25mm Sublimation Full-Color Satin" },
    ],
    conclusion: "Heavyweight, prestigious feel that athletes will proudly cherish for decades.",
  },
  {
    code: "Antique Silver Honors",
    badge: "2nd Place / Academic",
    title: "Antique Silver Institutional Convocations & Honors",
    tagline: "Subtle antique matte electroplating that emphasizes micro-fine serif crest details.",
    description:
      "Crafted for university convocations, academic Olympiad toppers, and institutional merit awards. The antique nickel/silver electroplate darkens recesses while leaving raised crest emblems in brilliant silver.",
    image: "/images/Zinc Medal/IMG_20260213_100059.jpg.jpeg",
    alt: "Antique Silver Institutional Award Medal",
    setup: "Die-Cast Zinc + Antique Silver Electroplate + Custom V-Neck Satin Ribbon",
    suitable: [
      "University Convocation Honors",
      "National Science & Math Olympiads",
      "Institutional Merit List Achievers",
      "2nd Place Tournament Silver Winners",
      "Research Fellowship Distinctions",
    ],
    specs: [
      { k: "Diameter", v: "60mm (3.5mm thickness)" },
      { k: "Finish", v: "Antique Silver / Nickel Treatment" },
      { k: "Ribbon", v: "Custom Institutional V-Neck Satin" },
      { k: "Edge", v: "Rope Border / Smooth Bevel" },
    ],
    conclusion: "Refined academic gravitas suited for prestigious institutional stages.",
  },
  {
    code: "Custom Cutout Crest",
    badge: "3D Silhouette",
    title: "Precision Custom 3D Cutout Sports Medals",
    tagline: "Pierced negative space and organic silhouettes matching your tournament emblem.",
    description:
      "Break away from conventional round coins. Our CNC-milled steel dies allow intricate pierced negative spaces, floating emblems, and multi-tone enamel accents following your brand's unique silhouette.",
    image: "/images/Zinc Medal/madl.png",
    alt: "Custom Sports Championship Medal with Ribbon",
    setup: "CNC Milled Zinc Mold + Dual-Tone Plating + 30mm Heavy-Duty Satin Ribbon",
    suitable: [
      "Professional Sports Federations",
      "Marathon & Cycling Club Logos",
      "Youth Academy Identity Medals",
      "Esports & Gaming Championships",
      "Bespoke Cultural Festival Medals",
    ],
    specs: [
      { k: "Shape Freedom", v: "100% Custom Organic Silhouette" },
      { k: "Cutout Type", v: "Precision Pierced Negative Space" },
      { k: "Plating Options", v: "Dual-Tone (Gold + Black Nickel)" },
      { k: "Ribbon Attachment", v: "Integrated Heavy-Duty Top Loop" },
    ],
    conclusion: "Unmistakable custom brand identity that stands out from generic medals.",
  },
  {
    code: "Marathon & Corporate",
    badge: "Finisher & Corporate",
    title: "Marathon Finisher & Corporate Recognition Medallions",
    tagline: "Solid antique bronze and mirror chrome awards for corporate leagues and runners.",
    description:
      "Engineered for mass-participation marathons (5K, 10K, 21K, 42K) and corporate milestone honors. Features rugged textured backgrounds, commemorative date reliefs, and wide full-color sublimated ribbons.",
    image: "/images/Zinc Medal/20dfd541-e04b-4fc4-944f-5127c3b4ec2e.jpg",
    alt: "Bronze Marathon & Event Medallion",
    setup: "Solid Die-Molded Zinc + Antique Bronze Plating + 25mm Sublimated Satin Ribbon",
    suitable: [
      "City Marathons & Half-Marathons",
      "10K / 5K Community Fun Runs",
      "Corporate Fitness & Wellness Challenges",
      "Employee Milestone & Tenure Awards",
      "Charity Run Commemorations",
    ],
    specs: [
      { k: "Diameter", v: "60mm – 70mm (4.0mm thickness)" },
      { k: "Plating", v: "Antique Bronze / Copper Treatment" },
      { k: "Texturing", v: "Sandblast Recessed Background" },
      { k: "Ribbon", v: "Sublimated Finisher Gradient Ribbon" },
    ],
    conclusion: "High-volume manufacturing capacity with flawless consistency across thousands of units.",
  },
];

export function MedalRangeMasterShowcase({
  data,
}: {
  data?: {
    badge?: string;
    title?: string;
    lede?: string;
    sections?: MasterMedalSection[];
  };
} = {}) {
  const badgeTitle = data?.badge || "Master Hardware Showcase";
  const sectionTitle = data?.title || "Die-Cast Medal Styles & Finishes";
  const sectionLede =
    data?.lede ||
    "Explore our specialized medal collections engineered for championship podiums, university convocations, corporate milestones, and city marathons.";
  const activeSections =
    data?.sections && data.sections.length > 0 ? data.sections : masterMedalSections;

  const [activeModelIndex, setActiveModelIndex] = useState(0);
  const activeModel = activeSections[activeModelIndex] || activeSections[0];

  return (
    <section className="mt-16 sm:mt-20">
      {/* ── Section Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200/90 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
            <Award className="h-3.5 w-3.5" />
            <span>{badgeTitle}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mt-2">
            {sectionTitle}
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
            {sectionLede}
          </p>
        </div>

        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          Showing Style {activeModelIndex + 1} of {activeSections.length}
        </div>
      </div>

      {/* ── Navigation Strip ── */}
      <div className="mt-6 overflow-x-auto pb-2">
        <div className="flex items-center gap-2 min-w-max">
          {activeSections.map((model, idx) => (
            <button
              key={model.code}
              onClick={() => setActiveModelIndex(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-extrabold transition-all duration-200 ${
                activeModelIndex === idx
                  ? "bg-[#009fe3] text-white shadow-lg shadow-[#009fe3]/25 scale-[1.02]"
                  : "bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-[#009fe3]/60 hover:bg-sky-50/40 dark:hover:bg-slate-800"
              }`}
            >
              <span>{model.code}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                  activeModelIndex === idx
                    ? "bg-white/20 text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                }`}
              >
                {model.badge}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Active Detail Stage ── */}
      <div className="mt-6 relative overflow-hidden rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 lg:p-10 shadow-2xl">
        <div className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[#009fe3]/10 blur-3xl" />

        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative h-72 sm:h-80 w-full rounded-3xl overflow-hidden border-2 border-slate-200/80 dark:border-slate-800 bg-slate-950 p-2 shadow-inner flex items-center justify-center">
              <Image
                src={activeModel.image}
                alt={activeModel.alt}
                fill
                className="object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="mt-4 w-full rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-3 border border-slate-200/80 dark:border-slate-700/60 text-center">
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase block">
                Manufacturing Setup
              </span>
              <p className="text-xs font-black text-slate-800 dark:text-slate-200 mt-0.5">
                {activeModel.setup}
              </p>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-black uppercase text-[#009fe3] dark:text-cyan-400 bg-sky-50 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
                  {activeModel.code}
                </span>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                  {activeModel.badge}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1.5">
                {activeModel.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2 font-normal">
                {activeModel.description}
              </p>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              {activeModel.specs.map((s, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-2.5"
                >
                  <span className="text-[10px] text-slate-400 uppercase block">{s.k}</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{s.v}</span>
                </div>
              ))}
            </div>

            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                Recommended For
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {activeModel.suitable.map((st, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                    <span>{st}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-sky-50/80 dark:bg-sky-950/40 border border-sky-200/70 dark:border-cyan-900/40 p-4 text-xs font-semibold text-slate-700 dark:text-slate-200 leading-relaxed">
              <strong>Quality Standard: </strong>
              {activeModel.conclusion}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/request-a-quote/"
                className="inline-flex items-center gap-2 rounded-xl bg-[#009fe3] hover:bg-[#008bc9] text-white px-6 py-3 text-xs font-extrabold shadow-md transition"
              >
                <span>Request a Quote for {activeModel.code}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/pricing/"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-3 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
              >
                <span>View Pricing Tiers</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
