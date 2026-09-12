"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Layers,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Box,
  Link2,
} from "lucide-react";

export interface MasterHookSection {
  code: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
  setup: string;
  suitable: string[];
  conclusion: string;
  cta?: { label: string; href: string };
}

export const masterHookSections: MasterHookSection[] = [
  {
    code: "Fish Hook",
    badge: "Attachment Option",
    title: "Fish Hook for ID Cards",
    tagline: "The fish hook is an attachment option used to connect a suitable ID card holder or badge to a lanyard.",
    description:
      "A fish hook is an attachment used to connect a compatible ID card holder or badge to a lanyard. A typical setup is: ID Card → Holder → Fish Hook → Lanyard. Compatibility should be confirmed before ordering in bulk.",
    image: "/images/Lanyard with Hook Samples/Sample 18 .jpg",
    alt: "Fish hook attachment for ID card holder and lanyard",
    setup: "ID Card → Holder → Fish Hook → Lanyard",
    suitable: [
      "ID cards",
      "Employee cards",
      "Student cards",
      "Visitor cards",
      "Event badges",
      "Membership cards",
      "Institutional badges",
    ],
    conclusion: "Compatibility should be confirmed before ordering in bulk.",
    cta: {
      label: "Explore ID Card Holders",
      href: "/id-card-holders/",
    },
  },
  {
    code: "Hook + Holder",
    badge: "Pairing Setup",
    title: "Hook + ID Card Holder",
    tagline: "The hook is normally used together with a compatible holder.",
    description:
      "The hook is normally used together with a compatible holder. Standard Configuration: ID Card → Holder → Hook → Lanyard. For example: 86 × 54 mm ID Card → Compatible Holder → Fish Hook → 20 mm Lanyard. The exact combination depends on the selected holder and attachment.",
    image: "/images/Lanyard with Hook Samples/Sample 23 .jpg",
    alt: "ID card holder connected to hook attachment",
    setup: "86 × 54 mm ID Card → Compatible Holder → Fish Hook → 20 mm Lanyard",
    suitable: [
      "V-1 Standard Vertical Holder",
      "V-2 Four-Side-Lock Vertical Holder",
      "H-1 Standard Horizontal Holder",
      "H-2 Four-Side-Lock Horizontal Holder",
      "Compatible card holders & badges",
    ],
    conclusion: "The exact combination depends on the selected holder and attachment.",
    cta: {
      label: "Explore ID Card Holders",
      href: "/id-card-holders/",
    },
  },
  {
    code: "One Hook",
    badge: "Configuration Format",
    title: "One Hook Configuration",
    tagline: "ID Card / Holder + One Hook + Lanyard.",
    description:
      "ID Card / Holder + One Hook + Lanyard. Suitable where a single attachment point is required. Different identification projects may require different attachment arrangements.",
    image: "/images/Lanyard with Hook Samples/Sample 17 .jpg",
    alt: "One hook configuration for ID card lanyards",
    setup: "ID Card / Holder + One Hook + Lanyard",
    suitable: [
      "Student identification",
      "Employee identification",
      "Staff identification",
      "Visitor identification",
      "Institutional identification",
    ],
    conclusion: "Suitable where a single attachment point is required.",
    cta: {
      label: "Request a Quote",
      href: "/request-a-quote/",
    },
  },
  {
    code: "Two Hooks",
    badge: "Event Configuration",
    title: "Two-Hook Configuration",
    tagline: "ID Card / Holder + Two Hooks + Lanyard.",
    description:
      "ID Card / Holder + Two Hooks + Lanyard. Suitable for configurations where two attachment points are required. The correct configuration depends on the card, holder and lanyard design.",
    image: "/images/idgen-event-card-one-hook-two-hook-configuration.jpg",
    alt: "One hook and two hook configurations for ID card lanyards",
    setup: "ID Card / Holder + Two Hooks + Lanyard",
    suitable: [
      "Event badges",
      "Conference passes",
      "Delegates, speakers & organizers",
      "Large-format badge rigging",
    ],
    conclusion: "The correct configuration depends on the card, holder and lanyard design.",
    cta: {
      label: "Explore Event Card Printing",
      href: "/event-card-printing/",
    },
  },
  {
    code: "Hook + Lanyard",
    badge: "Lanyard Compatibility",
    title: "ID Card Hook & Lanyard Compatibility",
    tagline: "ID card hooks are commonly used with lanyards to create wearable identification.",
    description:
      "A typical configuration is: ID Card → Holder → Fish Hook → 20 mm Custom Printed Lanyard. IDGen also provides custom printed lanyards that can carry: Organization name, Logo, Brand colours, Repeating artwork, and Custom text.",
    image: "/images/Lanyard with Hook Samples/Sample 19 .jpg",
    alt: "ID card hook connecting holder to custom printed lanyard",
    setup: "ID Card → Holder → Fish Hook → 20 mm Custom Printed Lanyard",
    suitable: [
      "Organization name",
      "Logo",
      "Brand colours",
      "Repeating artwork",
      "Custom text",
    ],
    conclusion: "Matches with 20 mm custom printed lanyards for full branding.",
    cta: {
      label: "Explore Custom Printed Lanyard Printing",
      href: "/custom-printed-lanyard-printing/",
    },
  },
];

export function HookRangeMasterShowcase({
  data,
}: {
  data?: {
    badge?: string;
    title?: string;
    lede?: string;
    sections?: MasterHookSection[];
  };
}) {
  const activeSections =
    data?.sections && data.sections.length > 0
      ? data.sections
      : masterHookSections;
  const badgeText = data?.badge || "Hardware Setups & Configurations";
  const titleText = data?.title || "Fish Hook & ID Card Hook Setups";
  const ledeText =
    data?.lede ||
    "Review detailed hook arrangements, holder pairing, lanyard compatibility, and configuration formats.";

  const [activeModelIndex, setActiveModelIndex] = useState(0);
  const safeIndex =
    activeModelIndex < activeSections.length ? activeModelIndex : 0;
  const activeModel = activeSections[safeIndex];

  return (
    <section className="mt-16 sm:mt-20 scroll-mt-28" id="hook-range-master-showcase">
      {/* ── Section Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200/90 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
            <Box className="h-3.5 w-3.5" />
            <span>{badgeText}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mt-2">
            {titleText}
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
            {ledeText}
          </p>
        </div>

        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          Showing Setup {safeIndex + 1} of {activeSections.length}
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
                safeIndex === idx
                  ? "bg-[#009fe3] text-white shadow-lg shadow-[#009fe3]/25 scale-[1.02]"
                  : "bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-[#009fe3]/60 hover:bg-sky-50/40 dark:hover:bg-slate-800"
              }`}
            >
              <span className="font-mono">{model.code}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                  safeIndex === idx
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
            <div className="relative h-72 sm:h-80 w-full rounded-3xl overflow-hidden border-2 border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-2 shadow-inner flex items-center justify-center">
              <Image
                src={activeModel.image}
                alt={activeModel.alt}
                fill
                className="object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="mt-4 w-full rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-3 border border-slate-200/80 dark:border-slate-700/60 text-center">
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase block">
                Configuration
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
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2">
                {activeModel.description}
              </p>
            </div>

            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                Suitable For
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
              <strong>Note: </strong>
              {activeModel.conclusion}
            </div>

            {activeModel.cta && (
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href={activeModel.cta.href}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#009fe3] hover:bg-[#008bc9] text-white px-6 py-3 text-xs font-extrabold shadow-md transition"
                >
                  <span>{activeModel.cta.label}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/request-a-quote/"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-3 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
