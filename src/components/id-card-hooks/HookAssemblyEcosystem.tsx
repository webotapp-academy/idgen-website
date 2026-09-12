"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Layers,
  CreditCard,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Box,
  Anchor,
} from "lucide-react";

interface StackLayer {
  step: string;
  title: string;
  subtitle: string;
  badge: string;
  material: string;
  benefit: string;
  icon: React.ElementType;
  img: string;
  details: string[];
}

const assemblyLayers: StackLayer[] = [
  {
    step: "01",
    title: "ID Card",
    subtitle: "86 × 54 mm Identification Card",
    badge: "Personalized Card",
    material: "PVC Identification Card",
    benefit: "Core identification credentials, photograph, student/employee details and barcode.",
    icon: CreditCard,
    img: "/images/product-pvc-cards.jpg",
    details: [
      "86 × 54 mm standard card dimensions",
      "Student identification & Employee identification",
      "Compatible with holder drop-in and four-side lock",
    ],
  },
  {
    step: "02",
    title: "ID Card Holder",
    subtitle: "Protective Display Holder",
    badge: "V-1 / V-2 / H-1 / H-2",
    material: "Vertical or Horizontal ID Card Holder",
    benefit: "Protects and displays the card with a dedicated attachment aperture.",
    icon: Box,
    img: "/images/ID card holder/V-2/V-2.png",
    details: [
      "Vertical and horizontal orientations available",
      "Standard and four-side-lock options",
      "Attachment slot for connecting hook",
    ],
  },
  {
    step: "03",
    title: "Hook / Attachment",
    subtitle: "Connection Component",
    badge: "Fish Hook / One or Two Hooks",
    material: "ID Card Hook Attachment",
    benefit: "Provides the connection between the ID card holder and the lanyard.",
    icon: Anchor,
    img: "/images/Lanyard with Hook Samples/Sample 18 .jpg",
    details: [
      "Instead of attaching card directly to lanyard, hook provides the connection",
      "Small but important component of a complete wearable setup",
      "Available in One Hook, Two Hooks, or Fish Hook",
    ],
  },
  {
    step: "04",
    title: "Custom Printed Lanyard",
    subtitle: "Wearable Lanyard",
    badge: "20 mm Lanyard",
    material: "Custom Printed Lanyard Ribbon",
    benefit: "Carries organization name, logo, brand colours, repeating artwork and custom text.",
    icon: Sparkles,
    img: "/images/custom-printed-lanyard-printing-idgen.jpg",
    details: [
      "Organization name, Logo, Brand colours",
      "Repeating artwork & Custom text",
      "Connects to hook to complete wearable setup",
    ],
  },
];

const ICON_MAP: Record<string, React.ElementType> = {
  CreditCard,
  Box,
  Anchor,
  Sparkles,
  Layers,
  ShieldCheck,
  CheckCircle2,
};

export function HookAssemblyEcosystem({
  data,
}: {
  data?: {
    badge?: string;
    title?: string;
    lede?: string;
    note?: string;
    layers?: Array<{
      step: string;
      title: string;
      subtitle: string;
      badge: string;
      material: string;
      benefit: string;
      iconName?: string;
      img: string;
      details: string[];
    }>;
  };
}) {
  const activeLayers =
    data?.layers && data.layers.length > 0 ? data.layers : assemblyLayers;
  const badgeText = data?.badge || "Typical Identification Setup";
  const titleText = data?.title || "What Is an ID Card Hook?";
  const ledeText =
    data?.lede ||
    "An ID card hook is an attachment component used to connect an ID card holder or badge to a lanyard. Instead of attaching the card directly to the lanyard, the hook provides the connection between the two components.";

  const [activeLayerIndex, setActiveLayerIndex] = useState(2);
  const safeIndex =
    activeLayerIndex < activeLayers.length ? activeLayerIndex : 0;
  const activeLayer = activeLayers[safeIndex];

  return (
    <section className="mt-16 sm:mt-20 scroll-mt-28" id="hook-assembly-ecosystem">
      {/* ── Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200/90 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
            <Layers className="h-3.5 w-3.5" />
            <span>{badgeText}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mt-2">
            {titleText}
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
            {ledeText}
          </p>
        </div>
      </div>

      {/* ── Main Interactive Split ── */}
      <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-stretch">
        {/* Left Column: Stack Layers */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
          {activeLayers.map((layer, idx) => {
            const isSelected = safeIndex === idx;
            const iconName = (layer as any).iconName;
            const Icon =
              (layer as any).icon ||
              (iconName && ICON_MAP[iconName] ? ICON_MAP[iconName] : null) ||
              Box;

            return (
              <div
                key={layer.step}
                onClick={() => setActiveLayerIndex(idx)}
                className={`group relative flex items-center justify-between p-4 sm:p-4.5 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "border-[#009fe3] bg-gradient-to-r from-sky-50 via-white to-sky-50/50 dark:from-slate-800 dark:via-slate-800/90 dark:to-slate-800 shadow-xl shadow-sky-500/10 scale-[1.02]"
                    : "border-slate-200/90 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/40"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl font-mono text-sm font-black transition-all ${
                      isSelected
                        ? "bg-[#009fe3] text-white shadow-md shadow-[#009fe3]/30"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-black uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Step {layer.step}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          isSelected
                            ? "bg-[#009fe3]/15 text-[#009fe3] dark:text-cyan-300"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                        }`}
                      >
                        {layer.badge}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white leading-tight mt-0.5">
                      {layer.title}
                    </h3>
                  </div>
                </div>

                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-full transition-transform ${
                    isSelected
                      ? "bg-[#009fe3] text-white rotate-90"
                      : "text-slate-400 group-hover:translate-x-1"
                  }`}
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            );
          })}

          <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/50 p-3 text-center">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
              Typical Identification Setup Flow
            </span>
            <div className="flex items-center justify-center gap-1.5 text-xs font-black text-slate-800 dark:text-slate-200">
              <span>ID Card</span>
              <span className="text-[#009fe3]">↓</span>
              <span>Holder</span>
              <span className="text-[#009fe3]">↓</span>
              <span className="text-emerald-500 font-extrabold underline">Hook</span>
              <span className="text-[#009fe3]">↓</span>
              <span>Lanyard</span>
            </div>
          </div>
        </div>

        {/* Right Column: Active Layer Detail */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="relative h-full overflow-hidden rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <span className="text-[11px] font-mono font-black uppercase text-[#009fe3] dark:text-cyan-400">
                    Step {activeLayer.step} • {activeLayer.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-0.5">
                    {activeLayer.title}
                  </h3>
                </div>

                <span className="rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  {activeLayer.badge}
                </span>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-12 items-center">
                <div className="sm:col-span-5 relative h-48 sm:h-52 w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-2 shadow-inner">
                  <Image
                    src={activeLayer.img}
                    alt={activeLayer.title}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>

                <div className="sm:col-span-7 space-y-3.5">
                  <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-3.5 border border-slate-200/70 dark:border-slate-700/60">
                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase block mb-0.5">
                      Component Role
                    </span>
                    <p className="text-xs font-extrabold text-slate-900 dark:text-white">
                      {activeLayer.material}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-sky-50/60 dark:bg-sky-950/30 p-3.5 border border-sky-200/60 dark:border-cyan-900/40">
                    <span className="text-[10px] font-bold text-sky-600 dark:text-cyan-400 uppercase block mb-0.5">
                      Connection Purpose
                    </span>
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                      {activeLayer.benefit}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-2 border-t border-slate-100 dark:border-slate-800 pt-5">
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                  Key Points
                </span>
                {activeLayer.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                This makes the hook a small but important component of a complete wearable identification setup.
              </p>
              <Link
                href="/id-card-holders/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 hover:underline"
              >
                <span>Explore ID Card Holders</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
