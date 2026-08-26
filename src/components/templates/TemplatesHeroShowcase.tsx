"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Briefcase,
  Boxes,
  Layers,
  Copy,
  Check,
  FileSpreadsheet,
  QrCode,
  Radio,
} from "lucide-react";

type TemplatePillar = "student" | "employee" | "bulk" | "spec";

export function TemplatesHeroShowcase() {
  const [activePillar, setActivePillar] = useState<TemplatePillar>("student");
  const [isHovered, setIsHovered] = useState(false);
  const [copiedPillar, setCopiedPillar] = useState<string | null>(null);

  const copyHeaders = (type: string, headers: string) => {
    navigator.clipboard.writeText(headers);
    setCopiedPillar(type);
    setTimeout(() => setCopiedPillar(null), 2000);
  };

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
              <FileSpreadsheet className="h-3 w-3" />
              <span>
                {activePillar === "student" && "Student CSV Schema"}
                {activePillar === "employee" && "Employee CSV Schema"}
                {activePillar === "bulk" && "Bulk Project Checklist"}
                {activePillar === "spec" && "Card Specification Matrix"}
              </span>
            </span>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-200 hidden sm:inline">
              {activePillar === "student" && "10 Recommended Columns"}
              {activePillar === "employee" && "9 Staff Data Fields"}
              {activePillar === "bulk" && "20 Pre-Flight Checks"}
              {activePillar === "spec" && "11 Material & Finishes Options"}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-0.5 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-3 w-3" />
              <span>Excel &amp; CSV Ready</span>
            </span>
          </div>
        </div>

        {/* ── Central Stage Showcase ── */}
        <div className="relative h-[380px] sm:h-[410px] w-full flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-sky-400/10 via-transparent to-transparent pointer-events-none" />

          {/* ═══════════════════════════════════════════════════════════
              PILLAR 1: STUDENT DATA SCHEMA
              ═══════════════════════════════════════════════════════════ */}
          {activePillar === "student" && (
            <div
              className={`relative flex flex-col items-center transition-all duration-700 w-full max-w-sm ${
                isHovered ? "scale-[1.02] -translate-y-1" : "scale-100"
              }`}
            >
              <div className="relative h-64 w-full rounded-2xl overflow-hidden border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-lg bg-sky-500/10 text-[#009fe3] flex items-center justify-center font-bold">
                      <GraduationCap className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">Student Roster Template</h4>
                      <p className="text-[9px] text-slate-500">Standard spreadsheet column structure</p>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      copyHeaders(
                        "student",
                        "Student Name,Student ID,Class,Section,Course,Roll Number,Photograph,Institution,QR Code,Barcode"
                      )
                    }
                    className="flex items-center gap-1 text-[10px] font-bold text-[#009fe3] bg-sky-50 dark:bg-slate-800 px-2 py-1 rounded-lg hover:bg-[#009fe3] hover:text-white transition"
                  >
                    {copiedPillar === "student" ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-500" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>Copy CSV</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-1.5 py-1 text-[10px]">
                  {[
                    "1. Student Name",
                    "2. Student ID",
                    "3. Class & Section",
                    "4. Course / Program",
                    "5. Roll Number",
                    "6. Photo File (JPG)",
                    "7. Institution Name",
                    "8. Barcode / QR Code",
                  ].map((field, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg bg-slate-50 dark:bg-slate-800/80 p-1.5 border border-slate-100 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-semibold truncate"
                    >
                      {field}
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
              PILLAR 2: EMPLOYEE DATA SCHEMA
              ═══════════════════════════════════════════════════════════ */}
          {activePillar === "employee" && (
            <div
              className={`relative flex flex-col items-center transition-all duration-700 w-full max-w-sm ${
                isHovered ? "scale-[1.02] -translate-y-1" : "scale-100"
              }`}
            >
              <div className="relative h-64 w-full rounded-2xl overflow-hidden border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-lg bg-cyan-500/10 text-cyan-500 flex items-center justify-center font-bold">
                      <Briefcase className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">Employee Roster Template</h4>
                      <p className="text-[9px] text-slate-500">Corporate &amp; staff credential fields</p>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      copyHeaders(
                        "employee",
                        "Employee Name,Employee ID,Photograph,Designation,Department,Organization,Contact,QR Code,Barcode"
                      )
                    }
                    className="flex items-center gap-1 text-[10px] font-bold text-cyan-600 bg-cyan-50 dark:bg-slate-800 px-2 py-1 rounded-lg hover:bg-cyan-600 hover:text-white transition"
                  >
                    {copiedPillar === "employee" ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-500" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>Copy CSV</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-1.5 py-1 text-[10px]">
                  {[
                    "1. Employee Name",
                    "2. Employee ID",
                    "3. Job Designation",
                    "4. Department",
                    "5. Company Name",
                    "6. Photo Match ID",
                    "7. Contact Number",
                    "8. Digital QR / Barcode",
                  ].map((field, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg bg-slate-50 dark:bg-slate-800/80 p-1.5 border border-slate-100 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-semibold truncate"
                    >
                      {field}
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-bold text-cyan-600 dark:text-cyan-400">
                  <span>Explore Employee ID Card Printing</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════
              PILLAR 3: BULK 20-POINT CHECKLIST
              ═══════════════════════════════════════════════════════════ */}
          {activePillar === "bulk" && (
            <div
              className={`relative flex flex-col items-center transition-all duration-700 w-full max-w-sm ${
                isHovered ? "scale-[1.02] -translate-y-1" : "scale-100"
              }`}
            >
              <div className="relative h-64 w-full rounded-2xl overflow-hidden border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
                      <Boxes className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">Bulk 20-Point Checklist</h4>
                      <p className="text-[9px] text-slate-500">Pre-flight production verification</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
                    20 Checks
                  </span>
                </div>

                <div className="space-y-1 py-1 text-[10px]">
                  {[
                    "Card Specifications & Single/Double Print",
                    "Final Vector Logo Artwork & Brand Colors",
                    "Data File & Photo-to-Record Matching",
                    "Lanyard Width, Attachment & Ultrasonic Sealing",
                    "Delivery Location & Production Timeline",
                  ].map((chk, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="h-3 w-3 text-emerald-500 shrink-0" />
                      <span className="truncate">{chk}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                  <span>View 20-Point Checklist</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════
              PILLAR 4: CARD SPECIFICATION MATRIX
              ═══════════════════════════════════════════════════════════ */}
          {activePillar === "spec" && (
            <div
              className={`relative flex flex-col items-center transition-all duration-700 w-full max-w-sm ${
                isHovered ? "scale-[1.02] -translate-y-1" : "scale-100"
              }`}
            >
              <div className="relative h-64 w-full rounded-2xl overflow-hidden border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold">
                      <Layers className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">Card Spec Options</h4>
                      <p className="text-[9px] text-slate-500">Material, format &amp; hardware matrix</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-purple-600 bg-purple-50 dark:bg-purple-950 px-2 py-0.5 rounded">
                    11 Options
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-1.5 py-1 text-[10px]">
                  {[
                    "Card Type: PVC / RFID / Event",
                    "Orientation: Portrait / Landscape",
                    "Print: Single / Double Side",
                    "Personalization: Yes / No",
                    "Photo & Barcode: Yes / No",
                    "Holder & Hook: Yes / No",
                  ].map((opt, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg bg-slate-50 dark:bg-slate-800/80 p-1.5 border border-slate-100 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-semibold truncate"
                    >
                      {opt}
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-bold text-purple-600 dark:text-purple-400">
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
              { id: "student", label: "Student CSV", sub: "10 Fields" },
              { id: "employee", label: "Employee CSV", sub: "9 Fields" },
              { id: "bulk", label: "Bulk Checklist", sub: "20 Checks" },
              { id: "spec", label: "Card Specs", sub: "11 Options" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActivePillar(tab.id as TemplatePillar)}
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
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase block">Formats</span>
          <span className="text-xs font-black text-slate-900 dark:text-white">Excel &amp; CSV Ready</span>
        </div>
        <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-2.5 text-center shadow-2xs">
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase block">Templates</span>
          <span className="text-xs font-black text-[#009fe3] dark:text-cyan-400">8 Project Templates</span>
        </div>
        <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-2.5 text-center shadow-2xs">
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase block">Pre-Flight</span>
          <span className="text-xs font-black text-emerald-600 dark:text-emerald-400">100% Data Accuracy</span>
        </div>
      </div>
    </div>
  );
}
