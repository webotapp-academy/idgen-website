"use client";

import React, { useState } from "react";
import {
  Building2,
  School,
  User,
  GraduationCap,
  BookOpen,
  CreditCard,
  FileSpreadsheet,
  Calendar,
  HeartPulse,
  Phone,
  QrCode,
  MapPin,
  Barcode,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Eye,
  Layers,
} from "lucide-react";

interface CardFieldItem {
  id: string;
  name: string;
  category: "front" | "back";
  icon: React.ElementType;
  hint: string;
}

const frontFields: CardFieldItem[] = [
  { id: "f1", name: "Institution Logo", category: "front", icon: Building2, hint: "High-resolution crest or emblem" },
  { id: "f2", name: "Institution Name", category: "front", icon: School, hint: "School, College, or University title" },
  { id: "f3", name: "Student Photograph", category: "front", icon: User, hint: "Clear passport-style photo" },
  { id: "f4", name: "Student Name", category: "front", icon: GraduationCap, hint: "Official enrolled student name" },
  { id: "f5", name: "Class / Course", category: "front", icon: BookOpen, hint: "Academic stream or program" },
  { id: "f6", name: "Roll Number / ID Number", category: "front", icon: CreditCard, hint: "Unique student identifier" },
];

const backFields: CardFieldItem[] = [
  { id: "b1", name: "Admission Number", category: "back", icon: FileSpreadsheet, hint: "Permanent institutional record" },
  { id: "b2", name: "Academic Session", category: "back", icon: Calendar, hint: "Enrollment & validity year" },
  { id: "b3", name: "Date of Birth, if required", category: "back", icon: HeartPulse, hint: "Verified DOB record" },
  { id: "b4", name: "Emergency / Contact Information, if required", category: "back", icon: Phone, hint: "Parent/guardian contact" },
  { id: "b5", name: "QR Code / Barcode, if required", category: "back", icon: QrCode, hint: "Digital scanner lookup" },
  { id: "b6", name: "Institution Address", category: "back", icon: MapPin, hint: "Official campus premises location" },
];

export function StudentCardAnatomy() {
  const [activeSide, setActiveSide] = useState<"both" | "front" | "back">("both");
  const [hoveredField, setHoveredField] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      {/* Side Toggle for Mobile / Quick Focus */}
      <div className="flex sm:hidden items-center justify-center">
        <div className="inline-flex p-1 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <button
            onClick={() => setActiveSide("both")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeSide === "both"
                ? "bg-[#009fe3] text-white shadow-sm"
                : "text-slate-600 dark:text-slate-400"
            }`}
          >
            Both Sides
          </button>
          <button
            onClick={() => setActiveSide("front")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeSide === "front"
                ? "bg-[#009fe3] text-white shadow-sm"
                : "text-slate-600 dark:text-slate-400"
            }`}
          >
            Front Side
          </button>
          <button
            onClick={() => setActiveSide("back")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeSide === "back"
                ? "bg-[#009fe3] text-white shadow-sm"
                : "text-slate-600 dark:text-slate-400"
            }`}
          >
            Back Side
          </button>
        </div>
      </div>

      {/* Main Showcase Grid */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* ── FRONT SIDE ANATOMY CARD ── */}
        <div
          className={`relative overflow-hidden rounded-3xl border-2 border-sky-200/90 dark:border-sky-800/60 bg-gradient-to-b from-white via-sky-50/30 to-white dark:from-slate-900 dark:via-slate-900/95 dark:to-slate-950 p-6 sm:p-8 shadow-xl transition-all duration-300 hover:shadow-2xl ${
            activeSide === "back" ? "hidden lg:block opacity-40" : "block"
          }`}
        >
          {/* Ambient light glow */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#009fe3]/15 blur-3xl" />

          {/* Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#009fe3] to-sky-600 text-white shadow-md shadow-[#009fe3]/25">
                <CreditCard className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#009fe3] dark:text-cyan-400">
                  Card Face Layout
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  Front
                </h3>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#009fe3] px-3.5 py-1 text-xs font-black text-white shadow-sm">
              <Sparkles className="h-3 w-3" />
              Primary Display
            </span>
          </div>

          {/* Realistic Front Card Specimen Preview */}
          <div className="relative z-10 my-6 rounded-2xl border border-sky-300/60 dark:border-sky-700/60 bg-gradient-to-br from-white via-sky-50/50 to-blue-50/40 dark:from-slate-800 dark:via-slate-850 dark:to-slate-900 p-4 sm:p-5 shadow-inner backdrop-blur-md">
            {/* Top Card Header Strip */}
            <div className="flex items-center justify-between border-b border-sky-200/80 dark:border-slate-700 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#009fe3] text-white font-black text-xs shadow-xs">
                  <Building2 className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[11px] font-black uppercase tracking-tight text-slate-900 dark:text-white leading-none">
                    Institution Name
                  </p>
                  <p className="text-[9px] font-bold text-[#009fe3] dark:text-cyan-400 mt-0.5">
                    Institution Logo &amp; Branding
                  </p>
                </div>
              </div>
              <div className="h-3.5 w-7 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 shadow-2xs border border-amber-300/80" />
            </div>

            {/* Middle Photo & Info Grid */}
            <div className="grid grid-cols-12 gap-3.5 pt-3.5 items-center">
              {/* Photo Box */}
              <div className="col-span-4 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700 bg-white dark:bg-slate-900 p-2 text-center flex flex-col items-center justify-center min-h-[90px] shadow-2xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 dark:bg-sky-950 text-[#009fe3] dark:text-cyan-400 mb-1">
                  <User className="h-5 w-5" />
                </div>
                <span className="text-[9px] font-extrabold text-slate-600 dark:text-slate-300 leading-tight">
                  Student Photo
                </span>
              </div>

              {/* Data Fields Specimen */}
              <div className="col-span-8 space-y-1.5">
                <div className="rounded-lg bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-700 px-2.5 py-1 shadow-2xs">
                  <span className="text-[8px] font-bold uppercase text-slate-400">Student Name</span>
                  <p className="text-xs font-black text-slate-900 dark:text-white leading-tight">John Doe</p>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="rounded-lg bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-700 px-2 py-1 shadow-2xs">
                    <span className="text-[8px] font-bold uppercase text-slate-400">Class / Course</span>
                    <p className="text-[10px] font-bold text-slate-800 dark:text-slate-200 leading-tight">B.Sc / Grade 12</p>
                  </div>
                  <div className="rounded-lg bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-700 px-2 py-1 shadow-2xs">
                    <span className="text-[8px] font-bold uppercase text-slate-400">Roll / ID</span>
                    <p className="text-[10px] font-bold text-[#009fe3] dark:text-cyan-400 leading-tight">STU-2026-089</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6 Front Items List */}
          <div className="relative z-10 space-y-2.5">
            <p className="text-[11px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Front Side Field Checklist:
            </p>
            {frontFields.map((field, idx) => {
              const ItemIcon = field.icon;
              const isHovered = hoveredField === field.id;
              return (
                <div
                  key={field.id}
                  onMouseEnter={() => setHoveredField(field.id)}
                  onMouseLeave={() => setHoveredField(null)}
                  className={`group flex items-center justify-between gap-3 rounded-2xl border p-3 transition-all duration-200 ${
                    isHovered
                      ? "border-[#009fe3] bg-sky-50/80 dark:bg-sky-950/50 shadow-sm translate-x-1"
                      : "border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 hover:border-sky-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-sky-100/80 dark:bg-sky-950/80 text-[#009fe3] dark:text-cyan-400 border border-sky-200/70 dark:border-sky-800/60 shadow-2xs">
                      <ItemIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-xs font-black text-slate-900 dark:text-white group-hover:text-[#009fe3] dark:group-hover:text-cyan-300 transition-colors">
                        {field.name}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black text-slate-300 dark:text-slate-600">
                      0{idx + 1}
                    </span>
                    <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── BACK SIDE ANATOMY CARD ── */}
        <div
          className={`relative overflow-hidden rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-slate-900 dark:via-slate-900/95 dark:to-slate-950 p-6 sm:p-8 shadow-xl transition-all duration-300 hover:shadow-2xl ${
            activeSide === "front" ? "hidden lg:block opacity-40" : "block"
          }`}
        >
          {/* Ambient light glow */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-slate-400/10 dark:bg-cyan-500/10 blur-3xl" />

          {/* Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-800 dark:to-slate-700 text-white shadow-md">
                <Barcode className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Card Reverse Layout
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  Back
                </h3>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-800 dark:bg-slate-700 px-3.5 py-1 text-xs font-black text-slate-100 shadow-sm">
              <ShieldCheck className="h-3 w-3 text-cyan-400" />
              Verification &amp; Contact
            </span>
          </div>

          {/* Realistic Back Card Specimen Preview */}
          <div className="relative z-10 my-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-slate-50 via-white to-slate-100/60 dark:from-slate-800 dark:via-slate-850 dark:to-slate-900 p-4 sm:p-5 shadow-inner backdrop-blur-md">
            {/* Top Magnetic Strip / Header Graphic Simulation */}
            <div className="h-5 w-full rounded-md bg-slate-800 dark:bg-slate-950 mb-3 flex items-center justify-between px-3">
              <span className="text-[7px] font-mono text-slate-400">ENCRYPTED IDENTITY RECORD</span>
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </div>

            {/* Middle Data Fields + QR Grid */}
            <div className="grid grid-cols-12 gap-3 items-center">
              <div className="col-span-8 space-y-1">
                <div className="flex justify-between text-[9px] border-b border-slate-200/80 dark:border-slate-700 pb-0.5">
                  <span className="font-bold text-slate-500">Admission No:</span>
                  <span className="font-mono font-bold text-slate-800 dark:text-slate-200">ADM-84920</span>
                </div>
                <div className="flex justify-between text-[9px] border-b border-slate-200/80 dark:border-slate-700 pb-0.5">
                  <span className="font-bold text-slate-500">Academic Session:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">2026 – 2027</span>
                </div>
                <div className="flex justify-between text-[9px] border-b border-slate-200/80 dark:border-slate-700 pb-0.5">
                  <span className="font-bold text-slate-500">Date of Birth:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">14 / 08 / 2008</span>
                </div>
                <div className="flex justify-between text-[9px]">
                  <span className="font-bold text-slate-500">Emergency Contact:</span>
                  <span className="font-bold text-[#009fe3] dark:text-cyan-400">+91 98765 43210</span>
                </div>
              </div>

              {/* QR / Barcode Specimen Box */}
              <div className="col-span-4 flex flex-col items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 shadow-2xs">
                <QrCode className="h-9 w-9 text-slate-800 dark:text-slate-200" />
                <span className="text-[7px] font-mono text-slate-500 mt-0.5">SCAN VERIFY</span>
              </div>
            </div>

            {/* Bottom Address Strip */}
            <div className="mt-3 pt-2 border-t border-slate-200/80 dark:border-slate-700 flex items-center gap-1.5 text-[8px] text-slate-500">
              <MapPin className="h-3 w-3 text-red-500 shrink-0" />
              <span className="truncate">Campus Address: Institutional Premises, Guwahati, Assam</span>
            </div>
          </div>

          {/* 6 Back Items List */}
          <div className="relative z-10 space-y-2.5">
            <p className="text-[11px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Back Side Field Checklist:
            </p>
            {backFields.map((field, idx) => {
              const ItemIcon = field.icon;
              const isHovered = hoveredField === field.id;
              return (
                <div
                  key={field.id}
                  onMouseEnter={() => setHoveredField(field.id)}
                  onMouseLeave={() => setHoveredField(null)}
                  className={`group flex items-center justify-between gap-3 rounded-2xl border p-3 transition-all duration-200 ${
                    isHovered
                      ? "border-slate-600 bg-slate-100 dark:bg-slate-800 shadow-sm translate-x-1"
                      : "border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-2xs">
                      <ItemIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-xs font-black text-slate-900 dark:text-white group-hover:text-[#009fe3] dark:group-hover:text-cyan-300 transition-colors">
                        {field.name}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black text-slate-300 dark:text-slate-600">
                      0{idx + 1}
                    </span>
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
