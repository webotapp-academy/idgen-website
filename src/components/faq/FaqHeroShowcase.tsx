"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HelpCircle,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Calculator,
  QrCode,
  MapPin,
  Lock,
  Boxes,
  Layers,
  Check,
} from "lucide-react";

type FaqPillar = "pricing" | "studio" | "coverage" | "security";

export function FaqHeroShowcase() {
  const [activePillar, setActivePillar] = useState<FaqPillar>("pricing");
  const [isHovered, setIsHovered] = useState(false);

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
              <HelpCircle className="h-3 w-3" />
              <span>
                {activePillar === "pricing" && "Pricing FAQ"}
                {activePillar === "studio" && "IDGen Studio FAQ"}
                {activePillar === "coverage" && "Service Area FAQ"}
                {activePillar === "security" && "Data & Privacy FAQ"}
              </span>
            </span>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-200 hidden sm:inline">
              {activePillar === "pricing" && "Transparent Reference Rates"}
              {activePillar === "studio" && "Digital Identity Workflow"}
              {activePillar === "coverage" && "Guwahati HQ & Northeast"}
              {activePillar === "security" && "Confidential Handling"}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-0.5 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-3 w-3" />
              <span>25+ Answers</span>
            </span>
          </div>
        </div>

        {/* ── Central Stage Showcase ── */}
        <div className="relative h-[380px] sm:h-[410px] w-full flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-sky-400/10 via-transparent to-transparent pointer-events-none" />

          {/* ═══════════════════════════════════════════════════════════
              PILLAR 1: PRICING TRANSPARENCY
              ═══════════════════════════════════════════════════════════ */}
          {activePillar === "pricing" && (
            <div
              className={`relative flex flex-col items-center transition-all duration-700 w-full max-w-sm ${
                isHovered ? "scale-[1.03] -translate-y-1" : "scale-100"
              }`}
            >
              <div className="relative h-60 w-full rounded-2xl overflow-hidden border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-sky-500/10 text-[#009fe3] flex items-center justify-center font-bold">
                      <Calculator className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">How much does an ID card cost?</h4>
                      <p className="text-[10px] text-slate-500">Transparent factory reference pricing</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
                    Direct Rates
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 py-2 text-xs">
                  <div className="rounded-xl bg-slate-50 dark:bg-slate-800/80 p-2 border border-slate-100 dark:border-slate-700">
                    <span className="text-[10px] text-slate-400 block">Single-Side PVC</span>
                    <span className="text-sm font-black text-slate-900 dark:text-white">₹15 <span className="text-[10px] font-normal text-slate-400">/ card</span></span>
                  </div>
                  <div className="rounded-xl bg-slate-50 dark:bg-slate-800/80 p-2 border border-slate-100 dark:border-slate-700">
                    <span className="text-[10px] text-slate-400 block">Double-Side PVC</span>
                    <span className="text-sm font-black text-slate-900 dark:text-white">₹16 <span className="text-[10px] font-normal text-slate-400">/ card</span></span>
                  </div>
                  <div className="rounded-xl bg-slate-50 dark:bg-slate-800/80 p-2 border border-slate-100 dark:border-slate-700">
                    <span className="text-[10px] text-slate-400 block">20mm Custom Lanyard</span>
                    <span className="text-sm font-black text-[#009fe3]">₹15 <span className="text-[10px] font-normal text-slate-400">/ pc</span></span>
                  </div>
                  <div className="rounded-xl bg-slate-50 dark:bg-slate-800/80 p-2 border border-slate-100 dark:border-slate-700">
                    <span className="text-[10px] text-slate-400 block">RFID Smart Card</span>
                    <span className="text-sm font-black text-purple-600 dark:text-purple-400">₹45 <span className="text-[10px] font-normal text-slate-400">/ card</span></span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-bold text-[#009fe3]">
                  <span>Explore Reference Pricing</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════
              PILLAR 2: IDGEN STUDIO WORKFLOW
              ═══════════════════════════════════════════════════════════ */}
          {activePillar === "studio" && (
            <div
              className={`relative flex flex-col items-center transition-all duration-700 w-full max-w-sm ${
                isHovered ? "scale-[1.03] -translate-y-1" : "scale-100"
              }`}
            >
              <div className="relative h-60 w-full rounded-2xl overflow-hidden border-2 border-cyan-400/40 bg-gradient-to-br from-slate-900 to-[#071325] shadow-xl p-4 text-white flex flex-col justify-between">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center">
                      <QrCode className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-white">What is IDGen Studio?</h4>
                      <p className="text-[9px] text-slate-400">Digital Data Collection &amp; Instant Proofing</p>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono font-bold text-cyan-300 bg-cyan-500/20 px-2 py-0.5 rounded">
                    Digital Flow
                  </span>
                </div>

                <div className="space-y-1.5 py-1 text-[11px]">
                  {[
                    "Customized forms & shareable QR links",
                    "Direct student/employee record collection",
                    "Live digital card layout preview",
                    "Organization approval before batch print",
                  ].map((s, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-200">
                      <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">{s}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-bold text-cyan-300">
                  <span>Explore IDGen Studio</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════
              PILLAR 3: REGIONAL SERVICE COVERAGE
              ═══════════════════════════════════════════════════════════ */}
          {activePillar === "coverage" && (
            <div
              className={`relative flex flex-col items-center transition-all duration-700 w-full max-w-sm ${
                isHovered ? "scale-[1.03] -translate-y-1" : "scale-100"
              }`}
            >
              <div className="relative h-60 w-full rounded-2xl overflow-hidden border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-lg bg-sky-500/10 text-[#009fe3] flex items-center justify-center">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">Where is IDGen based?</h4>
                      <p className="text-[9px] text-slate-500">Guwahati HQ • All 8 Northeast States</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#009fe3] bg-sky-50 dark:bg-slate-800 px-2 py-0.5 rounded">
                    Regional Hub
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-1.5 text-xs py-1">
                  {[
                    "Assam (Guwahati Hub)",
                    "Arunachal Pradesh",
                    "Meghalaya (Shillong)",
                    "Manipur (Imphal)",
                    "Nagaland (Kohima)",
                    "Tripura, Mizoram, Sikkim",
                  ].map((state, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                      <Check className="h-3 w-3 text-emerald-500 shrink-0" />
                      <span className="text-[10px] font-semibold truncate">{state}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-bold text-[#009fe3]">
                  <span>Explore Service Areas</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════
              PILLAR 4: DATA & CONFIDENTIALITY
              ═══════════════════════════════════════════════════════════ */}
          {activePillar === "security" && (
            <div
              className={`relative flex flex-col items-center transition-all duration-700 w-full max-w-sm ${
                isHovered ? "scale-[1.03] -translate-y-1" : "scale-100"
              }`}
            >
              <div className="relative h-60 w-full rounded-2xl overflow-hidden border-2 border-emerald-500/40 bg-white dark:bg-slate-900 shadow-xl p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                      <Lock className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">Confidential Data Handling</h4>
                      <p className="text-[9px] text-slate-500">Institutional Privacy Assurance</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
                    Confidential
                  </span>
                </div>

                <div className="space-y-1.5 text-xs py-1">
                  {[
                    "Strictly used for agreed ID production",
                    "Biometric photograph confidentiality",
                    "Secure digital transmission pipelines",
                    "Zero unauthorized data sharing",
                  ].map((sec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                      <span className="text-[11px] font-medium">{sec}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                  <span>Privacy Policy &amp; Terms</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── Mode Selection Tab Bar ── */}
        <div className="relative z-20 p-2.5 sm:p-3 border-t border-slate-200/90 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-md">
          <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
            {[
              { id: "pricing", label: "Pricing", sub: "Reference Rates" },
              { id: "studio", label: "IDGen Studio", sub: "Digital Flow" },
              { id: "coverage", label: "Coverage", sub: "Guwahati & NE" },
              { id: "security", label: "Security", sub: "Data Privacy" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActivePillar(tab.id as FaqPillar)}
                className={`flex flex-col items-center py-2 px-1 rounded-xl transition-all duration-200 text-center ${
                  activePillar === tab.id
                    ? "bg-[#009fe3] text-white shadow-md font-extrabold scale-[1.02]"
                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/60 font-medium"
                }`}
              >
                <span className="text-xs sm:text-[13px] leading-tight font-bold">{tab.label}</span>
                <span
                  className={`text-[10px] leading-tight mt-0.5 ${
                    activePillar === tab.id ? "text-cyan-100" : "text-slate-500 dark:text-slate-400"
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
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase block">Categories</span>
          <span className="text-xs font-black text-slate-900 dark:text-white">10 FAQ Sectors</span>
        </div>
        <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-2.5 text-center shadow-2xs">
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase block">Answers</span>
          <span className="text-xs font-black text-[#009fe3] dark:text-cyan-400">25+ Clarifications</span>
        </div>
        <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-2.5 text-center shadow-2xs">
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase block">Support</span>
          <span className="text-xs font-black text-emerald-600 dark:text-emerald-400">Guwahati Helpdesk</span>
        </div>
      </div>
    </div>
  );
}
