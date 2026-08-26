"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CreditCard,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Maximize2,
  Layers,
  Radio,
  Sliders,
  Check,
} from "lucide-react";

type PvcMode = "cr80" | "rfid" | "prox" | "mag";

export function PvcHeroShowcase() {
  const [activeMode, setActiveMode] = useState<PvcMode>("cr80");
  const [isHovered, setIsHovered] = useState(false);

  const modes = {
    cr80: {
      code: "PVC-01",
      title: "30-Mil CR80 Virgin PVC Card",
      badge: "Standard CR80",
      material: "100% Virgin White Polyvinyl Chloride",
      thickness: "30-Mil (0.76 mm Bank Grade)",
      print: "Edge-to-Edge Thermal Sublimation + UV Seal",
      image: "/images/PVC Cards Samples/Sample 1.jpg",
      alt: "30-Mil Virgin PVC Smart Card Sample",
    },
    rfid: {
      code: "PVC-03",
      title: "13.56MHz Mifare 1K Smart Card",
      badge: "High Frequency",
      material: "Virgin PVC + Embedded 13.56MHz Chip",
      thickness: "ISO/IEC 14443 Type A Standard",
      print: "100,000 Read/Write Cycle Contactless",
      image: "/images/custom-rfid-id-card-printing.png",
      alt: "13.56MHz Mifare RFID Smart PVC Card",
    },
    prox: {
      code: "PVC-04",
      title: "125kHz TK4100 Proximity Card",
      badge: "Low Frequency",
      material: "Virgin PVC + Embedded Copper Coil",
      thickness: "EM4100 / TK4100 Protocol Compatible",
      print: "Turnstile & Access Control Standard",
      image: "/images/bulk-rfid-card-printing.jpg",
      alt: "125kHz TK4100 Contactless Proximity Card",
    },
    mag: {
      code: "PVC-02",
      title: "Overlaminated Scratch-Proof Card",
      badge: "Heavy Duty",
      material: "Multi-Layer PVC + Protective Film",
      thickness: "HiCo Magnetic Stripe / Variable Barcode",
      print: "Anti-Scratch & Moisture Resistant",
      image: "/images/PVC Cards Samples/Sample 3.jpg",
      alt: "Overlaminated Scratch Proof PVC Card Sample",
    },
  };

  const current = modes[activeMode];

  return (
    <div className="flex flex-col h-full justify-between gap-3.5">
      {/* ── Main 3D Showcase Stage ── */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative overflow-hidden rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-gradient-to-b from-slate-50/90 via-white to-sky-50/40 dark:from-slate-900 dark:via-slate-900/95 dark:to-slate-950 shadow-2xl shadow-slate-200/60 dark:shadow-black/60 transition-all duration-500"
      >
        {/* Ambient Backlight Glows */}
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-400/20 dark:bg-cyan-500/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#009fe3]/15 dark:bg-[#009fe3]/20 blur-3xl pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #009fe3 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Top Floating Glass Header */}
        <div className="relative z-20 flex items-center justify-between p-3.5 sm:p-4 border-b border-slate-100 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#009fe3] text-white px-3 py-1 text-xs font-black shadow-sm">
              <CreditCard className="h-3 w-3" />
              <span>{current.code}</span>
            </span>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-200 hidden sm:inline">
              {current.title}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-0.5 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-3 w-3" />
              <span>{current.badge}</span>
            </span>
          </div>
        </div>

        {/* ── Central Stage Showcase ── */}
        <div className="relative h-[380px] sm:h-[410px] w-full flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-sky-400/10 via-transparent to-transparent pointer-events-none" />

          <div
            className={`relative flex flex-col items-center transition-all duration-700 w-full max-w-sm ${
              isHovered ? "scale-[1.03] -translate-y-1" : "scale-100"
            }`}
          >
            <div className="relative h-60 sm:h-64 w-full rounded-2xl overflow-hidden border-2 border-slate-200/90 dark:border-slate-800 bg-slate-950 shadow-2xl p-2">
              <Image
                src={current.image}
                alt={current.alt}
                fill
                priority
                className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                    100% Virgin Core
                  </span>
                  <h4 className="text-sm font-black text-white">{current.title}</h4>
                </div>
                <span className="rounded-lg bg-white/20 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-white">
                  30-Mil CR80
                </span>
              </div>
            </div>

            <div className="mt-3 w-full rounded-2xl bg-white/90 dark:bg-slate-900/90 p-3 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center justify-between text-xs font-semibold">
              <span className="text-slate-600 dark:text-slate-300 truncate max-w-[70%]">
                <strong className="text-slate-900 dark:text-white">Print: </strong>
                {current.print}
              </span>
              <span className="text-[10px] font-mono font-bold text-[#009fe3]">
                Guwahati Direct
              </span>
            </div>
          </div>
        </div>

        {/* ── Mode Selection Tab Bar ── */}
        <div className="relative z-20 p-2.5 sm:p-3 border-t border-slate-200/90 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-md">
          <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
            {[
              { id: "cr80", label: "30-Mil Plain", sub: "Virgin PVC" },
              { id: "rfid", label: "13.56MHz RFID", sub: "Mifare 1K" },
              { id: "prox", label: "125kHz Prox", sub: "TK4100 Chip" },
              { id: "mag", label: "Overlaminated", sub: "Anti-Scratch" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveMode(tab.id as PvcMode)}
                className={`flex flex-col items-center py-2 px-1 rounded-xl transition-all duration-200 text-center ${
                  activeMode === tab.id
                    ? "bg-[#009fe3] text-white shadow-md font-extrabold scale-[1.02]"
                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/60 font-medium"
                }`}
              >
                <span className="text-xs sm:text-[13px] leading-tight font-bold">{tab.label}</span>
                <span
                  className={`text-[10px] leading-tight mt-0.5 ${
                    activeMode === tab.id ? "text-cyan-100" : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {tab.sub}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Quick Spec Strip ── */}
      <div className="grid grid-cols-3 gap-2">
        <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-2.5 text-center shadow-2xs">
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase block">Standard</span>
          <span className="text-xs font-black text-slate-900 dark:text-white">CR80 (85.6x54mm)</span>
        </div>
        <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-2.5 text-center shadow-2xs">
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase block">Thickness</span>
          <span className="text-xs font-black text-[#009fe3] dark:text-cyan-400">30-Mil (0.76mm)</span>
        </div>
        <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-2.5 text-center shadow-2xs">
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase block">Quality</span>
          <span className="text-xs font-black text-emerald-600 dark:text-emerald-400">100% Virgin Core</span>
        </div>
      </div>
    </div>
  );
}
