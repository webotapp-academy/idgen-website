"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Sparkles,
  Layers,
  ArrowRight,
  CheckCircle2,
  Sliders,
  QrCode,
  Check,
  Cpu,
  BadgeCheck,
  Building2,
  User,
  Radio,
} from "lucide-react";

type ModelMode = "v2" | "h2" | "cv1" | "set";

export function HolderHeroShowcase() {
  const [activeMode, setActiveMode] = useState<ModelMode>("v2");
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
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08] pointer-events-none"
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
                {activeMode === "v2" && "V-2 Series"}
                {activeMode === "h2" && "H-2 Series"}
                {activeMode === "cv1" && "CV-1 Series"}
                {activeMode === "set" && "Full Set System"}
              </span>
            </span>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
              {activeMode === "v2" && "Vertical 4-Side Lock"}
              {activeMode === "h2" && "Horizontal 4-Side Lock"}
              {activeMode === "cv1" && "Executive Optical Crystal"}
              {activeMode === "set" && "Holder + Lanyard + Hook"}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-0.5 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="h-3 w-3" />
              <span>100% Virgin Polymer</span>
            </span>
          </div>
        </div>

        {/* ── CENTRAL STAGE: Photorealistic Render / Mockup ── */}
        <div className="relative h-[380px] sm:h-[410px] w-full flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          {/* Visual Reflection & Studio Spotlights */}
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-sky-400/10 via-transparent to-transparent pointer-events-none" />

          {/* ═══════════════════════════════════════════════════════════
              MODE 1: V-2 VERTICAL 4-SIDE LOCK WITH IDGEN CORPORATE CARD
              ═══════════════════════════════════════════════════════════ */}
          {activeMode === "v2" && (
            <div
              className={`relative flex flex-col items-center transition-all duration-700 ${
                isHovered ? "scale-[1.03] -translate-y-1" : "scale-100"
              }`}
            >
              {/* Branded Lanyard Ribbon at Top */}
              <div className="relative z-10 -mb-2 flex flex-col items-center">
                <div className="h-14 w-12 bg-gradient-to-r from-[#07172c] via-[#0B1E38] to-[#07172c] rounded-t-sm shadow-md flex items-center justify-center border-x border-cyan-500/30 overflow-hidden relative">
                  {/* Lanyard texture stripes */}
                  <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,#fff,#fff_2px,transparent_2px,transparent_4px)]" />
                  <span className="text-[7px] font-black tracking-widest text-cyan-300 uppercase rotate-90 whitespace-nowrap drop-shadow-sm">
                    IDGEN • OFFICIAL
                  </span>
                </div>

                {/* Ultrasonic Sealing Seam & Chrome Rivet */}
                <div className="h-2 w-8 bg-[#0B1E38] border-y border-cyan-400/40 relative z-10" />

                {/* Chrome Swivel Dog Hook Hardware */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="h-3.5 w-5 rounded-full border-2 border-slate-300 bg-gradient-to-r from-slate-200 via-white to-slate-400 shadow-sm" />
                  <div className="h-5 w-3.5 -mt-1 rounded-sm bg-gradient-to-r from-slate-300 via-white to-slate-400 shadow-md border border-slate-300 flex items-center justify-center">
                    <div className="h-2.5 w-1 bg-slate-500/40 rounded-full" />
                  </div>
                </div>
              </div>

              {/* ── Real Polycarbonate 4-Side Lock Transparent Casing ── */}
              <div className="relative w-[230px] sm:w-[250px] rounded-[18px] p-2 bg-gradient-to-b from-white/90 via-sky-100/40 to-white/90 dark:from-slate-800/90 dark:via-slate-800/50 dark:to-slate-900/90 border-[3px] border-sky-300/80 dark:border-cyan-500/50 shadow-2xl backdrop-blur-md">
                {/* Top 20mm Lanyard Slot Aperture */}
                <div className="mx-auto -mt-1 mb-1.5 h-2.5 w-14 rounded-full bg-slate-800/80 border border-white/60 shadow-inner flex items-center justify-center">
                  <div className="h-1 w-10 bg-slate-900 rounded-full" />
                </div>

                {/* 4-Side Perimeter Lock Tabs */}
                <div className="absolute top-1/4 -left-1 h-5 w-1.5 rounded-r-sm bg-sky-400 dark:bg-cyan-400 shadow-sm" />
                <div className="absolute top-2/3 -left-1 h-5 w-1.5 rounded-r-sm bg-sky-400 dark:bg-cyan-400 shadow-sm" />
                <div className="absolute top-1/4 -right-1 h-5 w-1.5 rounded-l-sm bg-sky-400 dark:bg-cyan-400 shadow-sm" />
                <div className="absolute top-2/3 -right-1 h-5 w-1.5 rounded-l-sm bg-sky-400 dark:bg-cyan-400 shadow-sm" />

                {/* ── Ultra-Premium Official IDGen Corporate ID Card ── */}
                <div className="relative rounded-[12px] overflow-hidden bg-gradient-to-br from-[#0B1320] via-[#0e1d35] to-[#071322] text-white p-3.5 shadow-lg border border-cyan-500/30">
                  {/* Subtle Card Background Geometry */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#009fe3]/15 rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-cyan-500/10 rounded-full blur-xl pointer-events-none" />

                  {/* Card Header with Prominent IDGen Logo */}
                  <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2">
                    <div className="flex items-center gap-1.5">
                      <div className="h-6 w-16 relative">
                        <Image
                          src="/images/logo-dark-theme.svg"
                          alt="IDGen Logo"
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      <span className="text-[8px] font-black uppercase tracking-wider text-cyan-300">
                        OFFICIAL ID
                      </span>
                    </div>
                  </div>

                  {/* Employee Photo & Identification */}
                  <div className="relative z-10 mt-3 flex items-center gap-3">
                    <div className="relative h-14 w-14 rounded-xl overflow-hidden border-2 border-cyan-400/80 shadow-md bg-gradient-to-tr from-slate-800 to-slate-700 flex items-center justify-center shrink-0">
                      <Image
                        src="/images/why-idgen-hero-light.jpg"
                        alt="Employee Portrait"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 ring-1 ring-white/20 inset-ring" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-black text-white tracking-tight leading-tight truncate">
                        Aarav Mehta
                      </p>
                      <p className="text-[10px] font-bold text-cyan-400 leading-tight truncate mt-0.5">
                        Sr. Operations Lead
                      </p>
                      <p className="text-[9px] text-slate-400 font-mono mt-1">
                        ID: <span className="text-white font-bold">IDG-8920-NE</span>
                      </p>
                    </div>
                  </div>

                  {/* Card Data Grid & Holographic Seal */}
                  <div className="relative z-10 mt-3 pt-2 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[8px] uppercase tracking-wider text-slate-400 font-semibold block">
                        Enterprise Hub
                      </span>
                      <span className="text-[9px] font-extrabold text-slate-200">
                        Guwahati, Assam
                      </span>
                    </div>

                    {/* Holographic Security Emblem */}
                    <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-amber-400 via-cyan-300 to-emerald-400 p-[1px] shadow-sm flex items-center justify-center">
                      <div className="h-full w-full rounded-full bg-[#0B1320] flex items-center justify-center text-[7px] font-black text-cyan-300">
                        <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
                      </div>
                    </div>
                  </div>

                  {/* Machine Readable Micro Barcode */}
                  <div className="relative z-10 mt-2.5 pt-1.5 border-t border-white/5 flex items-center justify-between text-[8px] font-mono text-slate-400">
                    <div className="flex gap-[1.5px] items-center h-2.5">
                      <div className="w-[1.5px] h-full bg-slate-300" />
                      <div className="w-[1px] h-full bg-slate-400" />
                      <div className="w-[2px] h-full bg-cyan-400" />
                      <div className="w-[1px] h-full bg-slate-300" />
                      <div className="w-[2px] h-full bg-slate-400" />
                      <div className="w-[1px] h-full bg-cyan-300" />
                      <div className="w-[3px] h-full bg-slate-300" />
                      <div className="w-[1px] h-full bg-slate-400" />
                    </div>
                    <span className="text-[8px] text-cyan-400 font-bold">CR80 • 86×54mm</span>
                  </div>
                </div>

                {/* Crystal Glass Reflection Diagonal Sweep */}
                <div className="absolute inset-0 rounded-[16px] bg-gradient-to-tr from-transparent via-white/25 to-white/40 pointer-events-none" />
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════
              MODE 2: H-2 HORIZONTAL 4-SIDE LOCK WITH IDGEN BADGE
              ═══════════════════════════════════════════════════════════ */}
          {activeMode === "h2" && (
            <div
              className={`relative flex flex-col items-center transition-all duration-700 ${
                isHovered ? "scale-[1.03] -translate-y-1" : "scale-100"
              }`}
            >
              {/* Lanyard Clip Top */}
              <div className="relative z-10 -mb-2 flex flex-col items-center">
                <div className="h-10 w-16 bg-gradient-to-r from-[#07172c] via-[#0B1E38] to-[#07172c] rounded-t-sm shadow-md flex items-center justify-center border-x border-cyan-500/30 overflow-hidden relative">
                  <span className="text-[8px] font-black tracking-widest text-cyan-300 uppercase whitespace-nowrap">
                    IDGEN • VERIFIED
                  </span>
                </div>
                <div className="h-4 w-4 rounded-full border-2 border-slate-300 bg-gradient-to-r from-slate-200 via-white to-slate-400 shadow-sm" />
              </div>

              {/* ── Horizontal Polycarbonate Transparent Casing ── */}
              <div className="relative w-[300px] sm:w-[340px] rounded-[18px] p-2 bg-gradient-to-b from-white/90 via-sky-100/40 to-white/90 dark:from-slate-800/90 dark:via-slate-800/50 dark:to-slate-900/90 border-[3px] border-sky-300/80 dark:border-cyan-500/50 shadow-2xl backdrop-blur-md">
                {/* Dual 20mm Lanyard Holes */}
                <div className="flex justify-center gap-3 -mt-1 mb-1.5">
                  <div className="h-2 w-10 rounded-full bg-slate-800/80 border border-white/60 shadow-inner" />
                </div>

                {/* Horizontal IDGen Corporate ID Card */}
                <div className="relative rounded-[12px] overflow-hidden bg-gradient-to-br from-[#0B1320] via-[#0d1c33] to-[#061221] text-white p-3.5 shadow-lg border border-cyan-500/30">
                  <div className="grid grid-cols-12 gap-3 items-center">
                    {/* Left Photo */}
                    <div className="col-span-4 flex flex-col items-center">
                      <div className="relative h-16 w-16 rounded-xl overflow-hidden border-2 border-cyan-400 shadow-md">
                        <Image
                          src="/images/why-idgen-hero-light.jpg"
                          alt="IDGen Executive"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="mt-1 text-[8px] font-mono text-cyan-300 font-bold">
                        IDG-CORP-44
                      </span>
                    </div>

                    {/* Right Corporate Info */}
                    <div className="col-span-8 space-y-1">
                      <div className="flex items-center justify-between border-b border-white/10 pb-1">
                        <div className="h-5 w-16 relative">
                          <Image
                            src="/images/logo-dark-theme.svg"
                            alt="IDGen Logo"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="rounded-md bg-[#009fe3]/20 border border-[#009fe3]/40 px-1.5 py-0.5 text-[8px] font-black text-cyan-300">
                          H-2 LOCK
                        </span>
                      </div>
                      <p className="text-xs font-black text-white leading-tight">
                        Vikramaditya Roy
                      </p>
                      <p className="text-[10px] font-bold text-cyan-400">
                        Executive Conference Delegate
                      </p>
                      <div className="flex items-center justify-between pt-1 text-[8px] text-slate-300">
                        <span>Access Level: All Halls</span>
                        <QrCode className="h-4 w-4 text-cyan-300" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glass sheen */}
                <div className="absolute inset-0 rounded-[16px] bg-gradient-to-tr from-transparent via-white/20 to-white/35 pointer-events-none" />
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════
              MODE 3: CV-1 OPTICAL CRYSTAL BEVELED HOLDER
              ═══════════════════════════════════════════════════════════ */}
          {activeMode === "cv1" && (
            <div
              className={`relative flex flex-col items-center transition-all duration-700 ${
                isHovered ? "scale-[1.03] -translate-y-1" : "scale-100"
              }`}
            >
              {/* Heavy Chrome Clip */}
              <div className="relative z-10 -mb-2 flex flex-col items-center">
                <div className="h-4 w-6 rounded-t-md bg-gradient-to-r from-slate-400 via-white to-slate-400 border border-slate-300 shadow-md" />
              </div>

              {/* Optical Acrylic Crystal Hard Case */}
              <div className="relative w-[230px] sm:w-[250px] rounded-[22px] p-2.5 bg-gradient-to-b from-white/95 via-sky-50/50 to-white/95 dark:from-slate-850 dark:via-slate-800 dark:to-slate-900 border-[4px] border-cyan-200/90 dark:border-cyan-500/60 shadow-2xl backdrop-blur-xl">
                {/* High-Gloss Beveled Rim */}
                <div className="rounded-[14px] overflow-hidden bg-gradient-to-br from-slate-950 via-[#0c182a] to-slate-950 p-4 border border-amber-400/40 text-white shadow-xl">
                  {/* VIP Header */}
                  <div className="flex items-center justify-between border-b border-amber-400/30 pb-2">
                    <div className="h-6 w-16 relative">
                      <Image
                        src="/images/logo-dark-theme.svg"
                        alt="IDGen Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="rounded-full bg-amber-400/20 border border-amber-400/50 px-2 py-0.5 text-[8px] font-black text-amber-300 tracking-wider">
                      VIP PASS
                    </span>
                  </div>

                  {/* Gold-Embossed Visuals */}
                  <div className="my-3 text-center">
                    <div className="mx-auto h-14 w-14 rounded-full p-[2px] bg-gradient-to-tr from-amber-400 via-yellow-200 to-amber-500 shadow-md">
                      <div className="relative h-full w-full rounded-full overflow-hidden">
                        <Image
                          src="/images/why-idgen-hero-light.jpg"
                          alt="VIP Cardholder"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <p className="mt-2 text-xs font-black text-white">Ananya Sen</p>
                    <p className="text-[9px] font-bold text-amber-300">
                      Chief Guest &amp; Speaker
                    </p>
                  </div>

                  {/* Micro chip icon & Security watermark */}
                  <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[8px] text-slate-400">
                    <div className="flex items-center gap-1 text-cyan-300">
                      <Cpu className="h-3 w-3" />
                      <span>CV-1 Crystal Series</span>
                    </div>
                    <span className="font-mono text-amber-400">IDG-VIP-01</span>
                  </div>
                </div>

                {/* Deep Crystal Refraction Layer */}
                <div className="absolute inset-0 rounded-[20px] bg-gradient-to-tr from-transparent via-cyan-400/10 to-white/40 pointer-events-none" />
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════
              MODE 4: COMPLETE MODULAR SET (HOLDER + HOOK + LANYARD)
              ═══════════════════════════════════════════════════════════ */}
          {activeMode === "set" && (
            <div
              className={`relative h-full w-full max-w-[380px] rounded-2xl overflow-hidden border border-slate-200/90 dark:border-slate-700 bg-slate-900 shadow-xl transition-all duration-700 ${
                isHovered ? "scale-[1.02]" : "scale-100"
              }`}
            >
              <Image
                src="/images/product-id-holders.jpg"
                alt="Complete IDGen ID card holder and lanyard assembly"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

              {/* Overlay IDGen Brand Emblem */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                <div className="h-6 w-20 relative bg-white/90 backdrop-blur-md rounded-lg px-2 py-1 shadow-md">
                  <Image
                    src="/images/finallogolight.svg"
                    alt="IDGen Logo"
                    fill
                    className="object-contain p-0.5"
                  />
                </div>
                <span className="rounded-full bg-[#009fe3] text-white px-3 py-0.5 text-[10px] font-black shadow-md">
                  Turnkey Modular Set
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 z-10">
                <div className="rounded-xl border border-white/20 bg-slate-950/80 backdrop-blur-md p-2.5 text-white flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-wider text-cyan-300">
                      All-in-One Assembly
                    </p>
                    <p className="text-xs font-black">
                      Card Holder + Fish Hook + Satin Lanyard
                    </p>
                  </div>
                  <span className="text-[9px] font-bold bg-white/10 px-2 py-1 rounded-md text-slate-200">
                    Guwahati Hub
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Floating Spec Badge at Bottom Right */}
          <div className="absolute bottom-3 right-3 z-20 hidden sm:block">
            <div className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1.5 shadow-md flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200">
                Official IDGen Specimen
              </span>
            </div>
          </div>
        </div>

        {/* ── Bottom Specifications Grid ── */}
        <div className="relative z-20 bg-slate-50/95 dark:bg-slate-950/95 border-t border-slate-100 dark:border-slate-800 px-3.5 py-2.5 sm:px-5">
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="rounded-xl border border-slate-200/70 dark:border-slate-800 bg-white dark:bg-slate-900 p-1.5 sm:p-2">
              <span className="block text-[9px] sm:text-[10px] font-bold uppercase text-slate-600 dark:text-slate-400">
                Dimensions
              </span>
              <span className="font-extrabold text-slate-900 dark:text-white truncate block text-[11px] sm:text-xs">
                86 × 54 mm (CR80)
              </span>
            </div>
            <div className="rounded-xl border border-slate-200/70 dark:border-slate-800 bg-white dark:bg-slate-900 p-1.5 sm:p-2">
              <span className="block text-[9px] sm:text-[10px] font-bold uppercase text-slate-600 dark:text-slate-400">
                Retention
              </span>
              <span className="font-extrabold text-[#009fe3] dark:text-cyan-400 truncate block text-[11px] sm:text-xs">
                {activeMode === "v2" && "4-Side Snap Lock"}
                {activeMode === "h2" && "4-Side Snap Lock"}
                {activeMode === "cv1" && "Crystal Bevel Grip"}
                {activeMode === "set" && "Fish Hook & Lanyard"}
              </span>
            </div>
            <div className="rounded-xl border border-slate-200/70 dark:border-slate-800 bg-white dark:bg-slate-900 p-1.5 sm:p-2">
              <span className="block text-[9px] sm:text-[10px] font-bold uppercase text-slate-600 dark:text-slate-400">
                Aperture Slot
              </span>
              <span className="font-extrabold text-slate-900 dark:text-white truncate block text-[11px] sm:text-xs">
                20 mm Standard
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Interactive Model Switcher Tabs ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <button
          onClick={() => setActiveMode("v2")}
          className={`flex flex-col items-start rounded-2xl p-2.5 sm:p-3 text-left transition-all duration-300 border ${
            activeMode === "v2"
              ? "border-[#009fe3] bg-[#009fe3]/10 dark:bg-cyan-950/50 shadow-md shadow-[#009fe3]/10 ring-2 ring-[#009fe3]/30"
              : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-850"
          }`}
        >
          <div className="flex items-center justify-between w-full">
            <span
              className={`font-mono text-xs font-black px-2 py-0.5 rounded-md ${
                activeMode === "v2"
                  ? "bg-[#009fe3] text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              }`}
            >
              V-2 Lock
            </span>
            {activeMode === "v2" && (
              <span className="h-2 w-2 rounded-full bg-[#009fe3] animate-pulse" />
            )}
          </div>
          <span className="mt-1 text-xs font-bold text-slate-900 dark:text-slate-100">
            Portrait Lock
          </span>
          <span className="text-[10px] text-slate-600 dark:text-slate-400">
            IDGen Corporate Card
          </span>
        </button>

        <button
          onClick={() => setActiveMode("h2")}
          className={`flex flex-col items-start rounded-2xl p-2.5 sm:p-3 text-left transition-all duration-300 border ${
            activeMode === "h2"
              ? "border-[#009fe3] bg-[#009fe3]/10 dark:bg-cyan-950/50 shadow-md shadow-[#009fe3]/10 ring-2 ring-[#009fe3]/30"
              : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-850"
          }`}
        >
          <div className="flex items-center justify-between w-full">
            <span
              className={`font-mono text-xs font-black px-2 py-0.5 rounded-md ${
                activeMode === "h2"
                  ? "bg-[#009fe3] text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              }`}
            >
              H-2 Lock
            </span>
            {activeMode === "h2" && (
              <span className="h-2 w-2 rounded-full bg-[#009fe3] animate-pulse" />
            )}
          </div>
          <span className="mt-1 text-xs font-bold text-slate-900 dark:text-slate-100">
            Landscape Lock
          </span>
          <span className="text-[10px] text-slate-600 dark:text-slate-400">
            IDGen Conference Pass
          </span>
        </button>

        <button
          onClick={() => setActiveMode("cv1")}
          className={`flex flex-col items-start rounded-2xl p-2.5 sm:p-3 text-left transition-all duration-300 border ${
            activeMode === "cv1"
              ? "border-[#009fe3] bg-[#009fe3]/10 dark:bg-cyan-950/50 shadow-md shadow-[#009fe3]/10 ring-2 ring-[#009fe3]/30"
              : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-850"
          }`}
        >
          <div className="flex items-center justify-between w-full">
            <span
              className={`font-mono text-xs font-black px-2 py-0.5 rounded-md ${
                activeMode === "cv1"
                  ? "bg-[#009fe3] text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              }`}
            >
              CV-1 Crystal
            </span>
            {activeMode === "cv1" && (
              <span className="h-2 w-2 rounded-full bg-[#009fe3] animate-pulse" />
            )}
          </div>
          <span className="mt-1 text-xs font-bold text-slate-900 dark:text-slate-100">
            Executive Crystal
          </span>
          <span className="text-[10px] text-slate-600 dark:text-slate-400">
            IDGen VIP Gold Badge
          </span>
        </button>

        <button
          onClick={() => setActiveMode("set")}
          className={`flex flex-col items-start rounded-2xl p-2.5 sm:p-3 text-left transition-all duration-300 border ${
            activeMode === "set"
              ? "border-[#009fe3] bg-[#009fe3]/10 dark:bg-cyan-950/50 shadow-md shadow-[#009fe3]/10 ring-2 ring-[#009fe3]/30"
              : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-850"
          }`}
        >
          <div className="flex items-center justify-between w-full">
            <span
              className={`font-mono text-xs font-black px-2 py-0.5 rounded-md ${
                activeMode === "set"
                  ? "bg-[#009fe3] text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              }`}
            >
              Full Set
            </span>
            {activeMode === "set" && (
              <span className="h-2 w-2 rounded-full bg-[#009fe3] animate-pulse" />
            )}
          </div>
          <span className="mt-1 text-xs font-bold text-slate-900 dark:text-slate-100">
            Modular Setup
          </span>
          <span className="text-[10px] text-slate-600 dark:text-slate-400">
            Holder + Hook + Lanyard
          </span>
        </button>
      </div>
    </div>
  );
}
