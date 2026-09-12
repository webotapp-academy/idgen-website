"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Magnet,
  Box,
  Award,
} from "lucide-react";

export interface MasterBadgeSection {
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

export const masterBadgeSections: MasterBadgeSection[] = [
  {
    code: "Executive Magnetic",
    badge: "Corporate Standard",
    title: "Executive Magnetic Acrylic Name Badges",
    tagline: "Ultra-clear PMMA acrylic with clothes-safe neodymium magnetic backings.",
    description:
      "Engineered for corporate executives, hospitality leaders, and retail managers. Features 3mm optical-grade PMMA with 1440 DPI direct UV printing, protected by an anti-scratch surface and secured with a triple neodymium magnet plate.",
    image: "/images/Acrylic Badges Samples/Sample 5.jpg",
    alt: "Doctor and Corporate Acrylic Badge Sample with Magnetic Attachment",
    setup: "3mm Cast PMMA + 1440 DPI UV + Triple Neodymium Magnet Plate",
    suitable: [
      "Corporate Staff & Executives",
      "Hospital Doctors & Specialists",
      "Luxury Hotel & Hospitality Teams",
      "Bank & Financial Branch Staff",
      "Executive Summit Delegates",
    ],
    specs: [
      { k: "Thickness", v: "3.0 mm Optical Cast PMMA" },
      { k: "Print Quality", v: "1440 DPI Direct UV Micro-Piezo" },
      { k: "Backing", v: "Triple N52 Neodymium Magnetic Plate" },
      { k: "Edge Finish", v: "Diamond Flame-Polished Bevel" },
    ],
    conclusion: "Zero fabric damage — safely attaches through suits, silk shirts, and heavy winter blazers.",
  },
  {
    code: "Contour Laser Cut",
    badge: "Custom Silhouette",
    title: "Precision Laser-Cut Custom Shape Badges",
    tagline: "Cut to the exact organic outline of your brand emblem, crest, or mascot.",
    description:
      "Break away from standard rectangles with precision CO2 laser cutting. Any complex geometry, institutional shield, star, or mascot silhouette can be manufactured with crystal flame-polished edges.",
    image: "/images/Acrylic Badges Samples/Sample 4.jpg",
    alt: "Custom Laser Cut Acrylic Crest Badge",
    setup: "Custom CO2 Laser Die-Cut + Sub-Surface UV + Dual Fastening",
    suitable: [
      "School & Academy Crests",
      "Sports Clubs & Youth Academies",
      "Brand Mascot & Promotion Pins",
      "Cultural & Heritage Foundations",
      "Event Organization Crests",
    ],
    specs: [
      { k: "Cutting Tolerance", v: "±0.1 mm Micro-Precision" },
      { k: "Shape Freedom", v: "100% Custom Organic Silhouette" },
      { k: "Finish", v: "Smooth Flame-Polished Edge" },
      { k: "Fastener", v: "Neodymium Magnet / Safety Pin" },
    ],
    conclusion: "Accurate contour die-cutting directly generated from your vector artwork.",
  },
  {
    code: "School & Prefect",
    badge: "Student Leadership",
    title: "School Leadership, Prefect & Award Badges",
    tagline: "High-contrast student badges with gold foil stars, house colors, and leadership titles.",
    description:
      "Durable, shatter-resistant badges for School Prefects, House Captains, Head Boys & Girls, and Academic Achievers. Designed with bright enamelled UV colors and child-safe rounded corners.",
    image: "/images/Acrylic Badges Samples/Sample 6.jpg",
    alt: "School Prefect and Award Badge with Gold Border",
    setup: "Cast Acrylic + Gold Metallic Border + Safety Pin / Magnet",
    suitable: [
      "School Prefects & Monitors",
      "House Captains & Vice-Captains",
      "Head Boy & Head Girl Badges",
      "100% Attendance & Star Badges",
      "Annual Academic Awardees",
    ],
    specs: [
      { k: "Durability", v: "Shatter-Resistant Cast PMMA" },
      { k: "Corner Style", v: "Child-Safe Rounded Perimeter" },
      { k: "Border Style", v: "Metallic Gold / Silver Inlay" },
      { k: "Attachment", v: "Safety Pin / Magnetic Option" },
    ],
    conclusion: "Long-lasting badges that withstand daily classroom wear and tear throughout the academic year.",
  },
  {
    code: "Metallic 3D Inlay",
    badge: "VIP Luxury",
    title: "Metallic Inlay & VIP Gold Border Badges",
    tagline: "Reflective mirror gold and silver foil underlays with deep optical acrylic faces.",
    description:
      "The pinnacle of executive prestige identification. Combines mirror brass/silver foil underlays with a thick 3.5mm crystal optical acrylic cap, delivering an exquisite 3D holographic depth effect.",
    image: "/images/Acrylic Badges Samples/Sample 2.jpg",
    alt: "Golden Metallic Inlay Acrylic Pin Badge",
    setup: "3.5mm Double Layer PMMA + Mirror Brass Foil + Dual Magnet Plate",
    suitable: [
      "VIP Guests & Dignitaries",
      "Government Summits & Conclaves",
      "Managing Directors & Founders",
      "Luxury Brand Store Managers",
      "Milestone Service Award Pins",
    ],
    specs: [
      { k: "Metallic Layer", v: "Gold / Silver Mirror Acrylic Foil" },
      { k: "Top Substrate", v: "High-Index Optical PMMA" },
      { k: "Visual Effect", v: "Deep 3D Holographic Inlay" },
      { k: "Fastener", v: "Heavy-Duty Dual Magnet Plate" },
    ],
    conclusion: "A jewelry-grade finish that commands immediate respect and prestige.",
  },
];

export function BadgeRangeMasterShowcase({
  data,
}: {
  data?: {
    badge?: string;
    title?: string;
    lede?: string;
    sections?: MasterBadgeSection[];
  };
} = {}) {
  const badgeTitle = data?.badge || "Master Hardware Showcase";
  const sectionTitle = data?.title || "Acrylic Badge Variants & Finishes";
  const sectionLede =
    data?.lede ||
    "Explore our specialized acrylic badge collections engineered for corporate executives, healthcare personnel, student leadership, and VIP summits.";
  const activeSections =
    data?.sections && data.sections.length > 0
      ? data.sections
      : masterBadgeSections;

  const [activeModelIndex, setActiveModelIndex] = useState(0);
  const activeModel = activeSections[activeModelIndex] || activeSections[0];

  return (
    <section className="mt-16 sm:mt-20">
      {/* ── Section Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200/90 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
            <Box className="h-3.5 w-3.5" />
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
          Showing Variant {activeModelIndex + 1} of {activeSections.length}
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
              <strong>Quality Guarantee: </strong>
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
