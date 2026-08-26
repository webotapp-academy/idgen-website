"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Sparkles,
  Layers,
  ArrowRight,
  CheckCircle2,
  Check,
  Link2,
  Anchor,
  RotateCw,
  Zap,
  Lock,
} from "lucide-react";

type HookMode = "fish" | "onetwo" | "holder" | "set";

export function HookHeroShowcase() {
  const [activeMode, setActiveMode] = useState<HookMode>("fish");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col h-full justify-between gap-3.5">
      {/* ── Main 3D Realistic Showcase Stage ── */}
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
              <Sparkles className="h-3 w-3" />
              <span>
                {activeMode === "fish" && "Fish Hook Attachment"}
                {activeMode === "onetwo" && "1-Hook & 2-Hook"}
                {activeMode === "holder" && "Hook + Holder Setup"}
                {activeMode === "set" && "Complete Wearable Set"}
              </span>
            </span>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-200 hidden sm:inline">
              {activeMode === "fish" && "ID Card → Holder → Hook → Lanyard"}
              {activeMode === "onetwo" && "One Hook / Two Hooks"}
              {activeMode === "holder" && "86 × 54 mm Card + 20 mm Lanyard"}
              {activeMode === "set" && "Card + Holder + Hook + Lanyard"}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-0.5 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="h-3 w-3" />
              <span>Compatible Hardware</span>
            </span>
          </div>
        </div>

        {/* ── CENTRAL STAGE: Photorealistic Render / Mockup ── */}
        <div className="relative h-[380px] sm:h-[410px] w-full flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          {/* Studio Spotlight */}
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-sky-400/10 via-transparent to-transparent pointer-events-none" />

          {/* ═══════════════════════════════════════════════════════════
              MODE 1: FISH HOOK ATTACHMENT
              ═══════════════════════════════════════════════════════════ */}
          {activeMode === "fish" && (
            <div
              className={`relative flex flex-col items-center transition-all duration-700 ${
                isHovered ? "scale-[1.03] -translate-y-1" : "scale-100"
              }`}
            >
              <div className="relative h-64 w-64 sm:h-72 sm:w-72 rounded-2xl overflow-hidden border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl">
                <Image
                  src="/images/Lanyard with Hook Samples/Sample 18 .jpg"
                  alt="Fish hook attachment for ID card holder and lanyard"
                  fill
                  className="object-cover p-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="rounded-full bg-[#009fe3] px-2.5 py-0.5 text-[10px] font-black uppercase shadow-xs">
                    Fish Hook Attachment
                  </span>
                  <p className="text-xs font-bold mt-1 text-slate-100">
                    ID Card → Holder → Fish Hook → Lanyard
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════
              MODE 2: ONE HOOK VS TWO HOOK CONFIGURATION
              ═══════════════════════════════════════════════════════════ */}
          {activeMode === "onetwo" && (
            <div
              className={`relative flex flex-col items-center transition-all duration-700 ${
                isHovered ? "scale-[1.03] -translate-y-1" : "scale-100"
              }`}
            >
              <div className="relative h-64 w-64 sm:h-72 sm:w-72 rounded-2xl overflow-hidden border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl">
                <Image
                  src="/images/idgen-event-card-one-hook-two-hook-configuration.jpg"
                  alt="One hook and two hook configurations for ID card lanyards"
                  fill
                  className="object-cover p-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="rounded-full bg-amber-500 text-slate-950 px-2.5 py-0.5 text-[10px] font-black uppercase shadow-xs">
                    Configurations
                  </span>
                  <p className="text-xs font-bold mt-1 text-slate-100">
                    One Hook / Two-Hook Configurations
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════
              MODE 3: HOOK + ID CARD HOLDER
              ═══════════════════════════════════════════════════════════ */}
          {activeMode === "holder" && (
            <div
              className={`relative flex flex-col items-center transition-all duration-700 ${
                isHovered ? "scale-[1.03] -translate-y-1" : "scale-100"
              }`}
            >
              <div className="relative h-64 w-64 sm:h-72 sm:w-72 rounded-2xl overflow-hidden border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl">
                <Image
                  src="/images/Lanyard with Hook Samples/Sample 23 .jpg"
                  alt="ID card holder connected to hook attachment"
                  fill
                  className="object-cover p-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="rounded-full bg-emerald-500 text-slate-950 px-2.5 py-0.5 text-[10px] font-black uppercase shadow-xs">
                    Hook + Holder
                  </span>
                  <p className="text-xs font-bold mt-1 text-slate-100">
                    86 × 54 mm Card → Holder → Fish Hook → 20 mm Lanyard
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════
              MODE 4: COMPLETE IDENTIFICATION ASSEMBLY SET
              ═══════════════════════════════════════════════════════════ */}
          {activeMode === "set" && (
            <div
              className={`relative flex flex-col items-center transition-all duration-700 ${
                isHovered ? "scale-[1.03] -translate-y-1" : "scale-100"
              }`}
            >
              <div className="relative h-64 w-64 sm:h-72 sm:w-72 rounded-2xl overflow-hidden border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl">
                <Image
                  src="/images/Lanyard with Hook Samples/Sample 25 .jpg"
                  alt="ID card holder hook and custom printed lanyard assembly"
                  fill
                  className="object-cover p-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="rounded-full bg-[#009fe3] px-2.5 py-0.5 text-[10px] font-black uppercase shadow-xs">
                    Complete Setup
                  </span>
                  <p className="text-xs font-bold mt-1 text-slate-100">
                    Card + Holder + Hook + Lanyard
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── Mode Selection Tab Bar ── */}
        <div className="relative z-20 p-2.5 sm:p-3 border-t border-slate-200/90 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-md">
          <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
            {[
              { id: "fish", label: "Fish Hook", sub: "Standard Setup" },
              { id: "onetwo", label: "1 vs 2 Hooks", sub: "Configurations" },
              { id: "holder", label: "Hook + Holder", sub: "Pairing Setup" },
              { id: "set", label: "Complete Set", sub: "Wearable Setup" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveMode(tab.id as HookMode)}
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

      {/* ── Quick Hardware Specs Strip ── */}
      <div className="grid grid-cols-3 gap-2">
        <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-2.5 text-center shadow-2xs">
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase block">Configuration</span>
          <span className="text-xs font-black text-slate-900 dark:text-white">One / Two Hooks</span>
        </div>
        <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-2.5 text-center shadow-2xs">
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase block">Lanyard Fit</span>
          <span className="text-xs font-black text-[#009fe3] dark:text-cyan-400">20 mm Lanyard</span>
        </div>
        <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-2.5 text-center shadow-2xs">
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase block">Dispatch</span>
          <span className="text-xs font-black text-emerald-600 dark:text-emerald-400">72-Hour Dispatch</span>
        </div>
      </div>
    </div>
  );
}
