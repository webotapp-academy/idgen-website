"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sliders,
  Boxes,
  GraduationCap,
  Briefcase,
  Layers,
  Radio,
  FileCheck2,
  Ticket,
  QrCode,
  Calculator,
  Check,
} from "lucide-react";

type ShowcasePillar = "bulk" | "studio" | "student" | "wearable";

export function GuidesHeroShowcase() {
  const [activePillar, setActivePillar] = useState<ShowcasePillar>("bulk");
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
              <BookOpen className="h-3 w-3" />
              <span>
                {activePillar === "bulk" && "Guide 01: Bulk Planning"}
                {activePillar === "studio" && "Guide 09: Digital Workflow"}
                {activePillar === "student" && "Guide 02: Student Checklist"}
                {activePillar === "wearable" && "Guide 04: Wearable Setup"}
              </span>
            </span>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-200 hidden sm:inline">
              {activePillar === "bulk" && "Production Readiness"}
              {activePillar === "studio" && "IDGen Studio Digital Flow"}
              {activePillar === "student" && "Institutional Requirements"}
              {activePillar === "wearable" && "Card + Holder + Hook + Lanyard"}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-0.5 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-3 w-3" />
              <span>10 Practical Guides</span>
            </span>
          </div>
        </div>

        {/* ── Central Stage Showcase ── */}
        <div className="relative h-[380px] sm:h-[410px] w-full flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-sky-400/10 via-transparent to-transparent pointer-events-none" />

          {/* ═══════════════════════════════════════════════════════════
              PILLAR 1: BULK ID CARD PLANNING
              ═══════════════════════════════════════════════════════════ */}
          {activePillar === "bulk" && (
            <div
              className={`relative flex flex-col items-center transition-all duration-700 w-full max-w-sm ${
                isHovered ? "scale-[1.03] -translate-y-1" : "scale-100"
              }`}
            >
              <div className="relative h-60 w-full rounded-2xl overflow-hidden border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-sky-500/10 text-[#009fe3] flex items-center justify-center font-bold">
                      <Boxes className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">Bulk Project Checklist</h4>
                      <p className="text-[10px] text-slate-500">Information, specifications &amp; approvals</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
                    Guide 1
                  </span>
                </div>

                <div className="space-y-1.5 text-xs py-2">
                  {[
                    "Personalized Information & CSV Roster",
                    "High-Resolution Biometric Photographs",
                    "Card Specifications (CR80 PVC / RFID)",
                    "Design Proof Review & Formal Approval",
                    "Quality Inspection & Batched Production",
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0" />
                      <span className="text-[11px] font-medium truncate">{step}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-bold text-[#009fe3]">
                  <span>Explore Bulk ID Card Printing</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════
              PILLAR 2: IDGEN STUDIO DIGITAL WORKFLOW
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
                      <h4 className="text-xs font-extrabold text-white">IDGen Studio Digital Flow</h4>
                      <p className="text-[9px] text-slate-400">Online Data Collection &amp; Live Card Preview</p>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono font-bold text-cyan-300 bg-cyan-500/20 px-2 py-0.5 rounded">
                    Guide 9
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-1.5 py-1 text-[10px]">
                  {[
                    "1. Custom Form",
                    "2. QR / Link Share",
                    "3. Data & Photo",
                    "4. Live Card Preview",
                    "5. Org Review",
                    "6. Batch Approval",
                  ].map((s, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg bg-white/5 border border-white/10 p-1.5 flex items-center gap-1.5 text-slate-200"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      <span className="font-semibold truncate">{s}</span>
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
              PILLAR 3: STUDENT & EMPLOYEE REQUIREMENTS
              ═══════════════════════════════════════════════════════════ */}
          {activePillar === "student" && (
            <div
              className={`relative flex flex-col items-center transition-all duration-700 w-full max-w-sm ${
                isHovered ? "scale-[1.03] -translate-y-1" : "scale-100"
              }`}
            >
              <div className="relative h-60 w-full rounded-2xl overflow-hidden border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-lg bg-sky-500/10 text-[#009fe3] flex items-center justify-center">
                      <GraduationCap className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">Student Checklist</h4>
                      <p className="text-[9px] text-slate-500">Guide 2 &amp; Guide 3 Specifications</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#009fe3] bg-sky-50 dark:bg-slate-800 px-2 py-0.5 rounded">
                    Guide 2 &amp; 3
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs py-1">
                  {[
                    "Student / Employee Name",
                    "Photograph Specifications",
                    "ID / Admission Number",
                    "Class / Department",
                    "Course / Designation",
                    "QR Code & Barcode",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                      <Check className="h-3 w-3 text-emerald-500 shrink-0" />
                      <span className="text-[10px] font-semibold truncate">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-bold text-[#009fe3]">
                  <span>Explore Student ID Card Printing</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════
              PILLAR 4: WEARABLE SETUP GUIDE
              ═══════════════════════════════════════════════════════════ */}
          {activePillar === "wearable" && (
            <div
              className={`relative flex flex-col items-center transition-all duration-700 w-full max-w-sm ${
                isHovered ? "scale-[1.03] -translate-y-1" : "scale-100"
              }`}
            >
              <div className="relative h-60 w-full rounded-2xl overflow-hidden border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                      <Layers className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">Wearable Setups</h4>
                      <p className="text-[9px] text-slate-500">Guide 4: Which Setup Do You Need?</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
                    Guide 4
                  </span>
                </div>

                <div className="space-y-1.5 text-xs py-1">
                  {[
                    "Tier 1: Card only",
                    "Tier 2: Card + holder",
                    "Tier 3: Card + holder + hook + lanyard",
                    "Tier 4: Complete wearable setup",
                  ].map((tier, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg bg-slate-50 dark:bg-slate-800/80 p-1.5 border border-slate-200/60 dark:border-slate-700/60 text-[11px] font-bold text-slate-800 dark:text-slate-200"
                    >
                      {tier}
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                  <span>Explore ID Card Holders</span>
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
              { id: "bulk", label: "Bulk Planning", sub: "Guide 1" },
              { id: "studio", label: "IDGen Studio", sub: "Guide 9" },
              { id: "student", label: "Checklists", sub: "Guide 2 & 3" },
              { id: "wearable", label: "Wearable Setup", sub: "Guide 4" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActivePillar(tab.id as ShowcasePillar)}
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
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase block">Guides</span>
          <span className="text-xs font-black text-slate-900 dark:text-white">10 Practical Guides</span>
        </div>
        <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-2.5 text-center shadow-2xs">
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase block">Categories</span>
          <span className="text-xs font-black text-[#009fe3] dark:text-cyan-400">7 Core Sectors</span>
        </div>
        <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-2.5 text-center shadow-2xs">
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase block">Coverage</span>
          <span className="text-xs font-black text-emerald-600 dark:text-emerald-400">Free Project Planning</span>
        </div>
      </div>
    </div>
  );
}
