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
  Lock,
  Anchor,
  Sliders,
  Maximize2,
  Check,
  Building2,
  Zap,
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
    title: "PVC Identity Card",
    subtitle: "Core Identification Media",
    badge: "CR80 Standard (86 × 54 mm)",
    material: "Multi-Layer Fused PVC Polyvinyl",
    benefit: "High-definition photo & credential print with optional smart RFID/NFC chip.",
    icon: CreditCard,
    img: "/images/product-pvc-cards.jpg",
    details: [
      "ISO/IEC 7810 CR80 Standard dimensions",
      "Thermal / Re-transfer edge-to-edge printing",
      "Compatible with barcodes, QR codes, and smart chips",
    ],
  },
  {
    step: "02",
    title: "Polycarbonate Card Holder",
    subtitle: "Structural Protection Frame",
    badge: "100% Virgin Grade Polymer",
    material: "High-Impact Optical Transparent Polymer",
    benefit: "Shields PVC card from daily abrasion, bending, UV exposure, and moisture.",
    icon: ShieldCheck,
    img: "/images/ID card holder/V-2/V-2.png",
    details: [
      "4-side perimeter snap-lock retention system",
      "Optical grade high-gloss crystal transparency",
      "Standard 20mm anti-twist lanyard aperture",
    ],
  },
  {
    step: "03",
    title: "Swivel Fish Hook Clip",
    subtitle: "Precision Articulation Hardware",
    badge: "360° Rotational Freedom",
    material: "Corrosion-Resistant Nickel Chrome Alloy",
    benefit: "Prevents lanyard twisting and allows instant badge detachment for swiping.",
    icon: Anchor,
    img: "/images/Lanyard with Holder Samples/Sample 26.jpg",
    details: [
      "Heavy-duty spring-loaded closure gate",
      "Full 360-degree smooth rotational swivel",
      "Snaps directly into all 20mm holder slots",
    ],
  },
  {
    step: "04",
    title: "Custom Printed Lanyard",
    subtitle: "Corporate Wearable Ribbon",
    badge: "Sublimated / Satin Finish",
    material: "High-Tensile Polyester Ribbon (16mm / 20mm)",
    benefit: "High-impact organizational branding worn comfortably around the neck.",
    icon: Sparkles,
    img: "/images/lanyard-hero-slide-20mm-satin.jpg",
    details: [
      "Full-color high-definition heat-transfer printing",
      "Ultrasonic seam weld & safety breakaway option",
      "Soft skin-friendly non-abrasive weave",
    ],
  },
];

import type { DynamicIdCardHoldersAssembly } from "@/lib/dynamic-id-card-holders-types";

const ICON_MAP: Record<string, React.ElementType> = {
  CreditCard,
  ShieldCheck,
  Anchor,
  Sparkles,
  Layers,
  Building2,
  Lock,
  Zap,
};

export function HolderAssemblyEcosystem({
  data,
}: {
  data?: DynamicIdCardHoldersAssembly;
} = {}) {
  const [activeLayerIndex, setActiveLayerIndex] = useState(1);
  const layers = data?.layers && data.layers.length > 0 ? data.layers : assemblyLayers;
  const activeLayer = layers[activeLayerIndex] || layers[0];

  return (
    <div className="relative overflow-hidden rounded-3xl border-2 border-sky-200/80 dark:border-sky-800/60 bg-gradient-to-b from-white via-sky-50/25 to-white dark:from-slate-900 dark:via-slate-900/95 dark:to-slate-950 p-6 sm:p-8 lg:p-12 shadow-xl shadow-sky-500/5 scroll-mt-28" id="holder-assembly-ecosystem">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[#009fe3]/15 dark:bg-cyan-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

      {/* Header Section */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
            <Layers className="h-3.5 w-3.5" />
            <span>{data?.eyebrow || "Modular Identification Stack"}</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white sm:text-3xl lg:text-4xl tracking-tight">
            {data?.title || "What Is an ID Card Holder?"}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {data?.lede || "An ID card holder is the critical protective interface in a wearable identification system. It shields the card from physical damage while mating seamlessly with lanyards and attachments."}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
            <ShieldCheck className="h-4 w-4" />
            <span>IDGen Complete Ecosystem</span>
          </span>
        </div>
      </div>

      {/* ── Interactive 4-Stage Flow Pipeline ── */}
      <div className="relative z-10 mt-8">
        <div className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
          <Sliders className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
          <span>Interactive 4-Part Identification Stack (Click Any Layer):</span>
        </div>

        {/* Pipeline Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {layers.map((layer, idx) => {
            const Icon = (layer as any).icon || ICON_MAP[(layer as any).iconName] || Layers;
            const isActive = activeLayerIndex === idx;
            return (
              <button
                key={layer.step}
                type="button"
                onClick={() => setActiveLayerIndex(idx)}
                className={`group relative flex flex-col items-start p-4 rounded-2xl border text-left transition-all duration-300 ${
                  isActive
                    ? "border-[#009fe3] bg-gradient-to-b from-sky-50 to-white dark:from-slate-800 dark:to-slate-900 shadow-md ring-2 ring-[#009fe3]/30 -translate-y-1"
                    : "border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-900"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <span
                    className={`font-mono text-xs font-black px-2 py-0.5 rounded-md ${
                      isActive
                        ? "bg-[#009fe3] text-white"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    Step {layer.step}
                  </span>
                  <Icon
                    className={`h-4 w-4 transition-colors ${
                      isActive
                        ? "text-[#009fe3] dark:text-cyan-400"
                        : "text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"
                    }`}
                  />
                </div>

                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {layer.title}
                </h3>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                  {layer.subtitle}
                </span>

                {/* Active Indicator bar */}
                {isActive && (
                  <div className="absolute bottom-0 inset-x-4 h-1 rounded-t-full bg-[#009fe3]" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Active Layer Deep Dive Showcase ── */}
      <div className="relative z-10 mt-8 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-6 sm:p-8 shadow-inner">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Visual Showcase Render */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative aspect-[4/3] w-full max-w-[340px] overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-950 p-4 border border-slate-200 dark:border-slate-700 shadow-md flex items-center justify-center group">
              <Image
                src={activeLayer.img}
                alt={activeLayer.title}
                fill
                className="object-contain p-3 transition-transform duration-500 group-hover:scale-108 drop-shadow-md"
              />
              <span className="absolute top-3 left-3 rounded-full bg-slate-900/85 text-white px-2.5 py-0.5 text-[11px] font-mono font-bold backdrop-blur-xs">
                Layer {activeLayer.step}
              </span>
            </div>
            <span className="mt-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
              {activeLayer.badge}
            </span>
          </div>

          {/* Layer Technical Details */}
          <div className="lg:col-span-7 space-y-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                <span>Part {activeLayer.step} of 04</span>
                <span>•</span>
                <span>{activeLayer.subtitle}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
                {activeLayer.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeLayer.benefit}
              </p>
            </div>

            {/* Material & Key Specs */}
            <div className="space-y-2 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
                <span className="text-slate-500 dark:text-slate-400 font-medium">Standard Material:</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">{activeLayer.material}</span>
              </div>
              <div className="space-y-1.5 pt-1">
                {activeLayer.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cross-system Coordination Callout */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs">
              <p className="text-slate-500 dark:text-slate-400">
                📦 IDGen supplies holders individually or as pre-assembled kits with lanyards.
              </p>
              <Link
                href="/request-a-quote/"
                className="inline-flex items-center gap-1.5 font-bold text-[#009fe3] dark:text-cyan-400 hover:underline"
              >
                <span>Bundle ID Set Quote</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
