"use client";

import React, { useState } from "react";
import {
  Building2,
  User,
  CreditCard,
  Briefcase,
  QrCode,
  MapPin,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Barcode,
  FileText,
  AlertCircle
} from "lucide-react";

import Image from "next/image";

const FIELD_ICONS: Record<string, React.ElementType> = {
  Building2,
  User,
  CreditCard,
  Briefcase,
  QrCode,
  MapPin,
  Phone,
  ShieldCheck,
  FileText,
  Barcode,
  AlertCircle,
};

export interface DynamicCardFieldItem {
  id: string;
  name: string;
  category: "front" | "back";
  iconName?: string;
  icon?: React.ElementType;
  hint: string;
}

const defaultFrontFields: DynamicCardFieldItem[] = [
  { id: "f1", name: "Company Logo", category: "front", iconName: "Building2", icon: Building2, hint: "Official corporate emblem & branding" },
  { id: "f2", name: "Employee Photograph", category: "front", iconName: "User", icon: User, hint: "High-resolution passport photograph" },
  { id: "f3", name: "Employee Name", category: "front", iconName: "User", icon: User, hint: "Full official employee name" },
  { id: "f4", name: "Designation", category: "front", iconName: "Briefcase", icon: Briefcase, hint: "Role / job title" },
  { id: "f5", name: "Employee ID", category: "front", iconName: "CreditCard", icon: CreditCard, hint: "Unique alphanumeric staff code" },
];

const defaultBackFields: DynamicCardFieldItem[] = [
  { id: "b1", name: "Company information", category: "back", iconName: "Building2", icon: Building2, hint: "Office address & registered details" },
  { id: "b2", name: "Emergency/contact information where required", category: "back", iconName: "Phone", icon: Phone, hint: "Emergency phone & blood group" },
  { id: "b3", name: "QR code or barcode", category: "back", iconName: "QrCode", icon: QrCode, hint: "Machine-readable digital verification" },
  { id: "b4", name: "Terms or instructions", category: "back", iconName: "FileText", icon: FileText, hint: "Cardholder responsibilities & return instructions" },
  { id: "b5", name: "Verification information", category: "back", iconName: "ShieldCheck", icon: ShieldCheck, hint: "Authorized signatory / validity details" },
];

export interface EmployeeCardAnatomyProps {
  frontFields?: DynamicCardFieldItem[];
  backFields?: DynamicCardFieldItem[];
  frontCardImage?: string;
  backCardImage?: string;
}

export function EmployeeCardAnatomy({
  frontFields: initialFront,
  backFields: initialBack,
  frontCardImage,
  backCardImage,
}: EmployeeCardAnatomyProps = {}) {
  const frontFields = (initialFront && initialFront.length > 0) ? initialFront : defaultFrontFields;
  const backFields = (initialBack && initialBack.length > 0) ? initialBack : defaultBackFields;

  const [activeSide, setActiveSide] = useState<"both" | "front" | "back">("both");
  const [hoveredField, setHoveredField] = useState<string | null>(null);
  const [showFrontProof, setShowFrontProof] = useState(!!frontCardImage);
  const [showBackProof, setShowBackProof] = useState(!!backCardImage);

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
                  Card Face Structure
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  Front
                </h3>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#009fe3] px-3.5 py-1 text-xs font-black text-white shadow-sm">
              <Sparkles className="h-3 w-3" />
              Primary Identification
            </span>
          </div>

          {/* Front Card Specimen Preview OR Uploaded Proof */}
          <div className="relative z-10 my-6">
            {frontCardImage && (
              <div className="flex justify-end mb-2">
                <button
                  type="button"
                  onClick={() => setShowFrontProof(!showFrontProof)}
                  className="text-xs font-bold text-[#009fe3] dark:text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Sparkles className="h-3 w-3" />
                  {showFrontProof ? "View Layout Wireframe" : "View Uploaded Front Proof"}
                </button>
              </div>
            )}

            {frontCardImage && showFrontProof ? (
              <div className="relative aspect-[1.586/1] w-full rounded-2xl overflow-hidden border-2 border-sky-300 dark:border-sky-700 shadow-md">
                <Image
                  src={frontCardImage}
                  alt="Employee ID Card Front Proof"
                  fill
                  unoptimized
                  className="object-contain bg-slate-950"
                />
              </div>
            ) : (
              <div className="rounded-2xl border border-sky-300/60 dark:border-sky-700/60 bg-gradient-to-br from-white via-sky-50/50 to-blue-50/40 dark:from-slate-800 dark:via-slate-850 dark:to-slate-900 p-4 sm:p-5 shadow-inner backdrop-blur-md">
                {/* Top Card Header Strip */}
                <div className="flex items-center justify-between border-b border-sky-200/80 dark:border-slate-700 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#009fe3] text-white font-black text-xs shadow-xs">
                      <Building2 className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-tight text-slate-900 dark:text-white leading-none">
                        Company Name
                      </p>
                      <p className="text-[9px] font-bold text-[#009fe3] dark:text-cyan-400 mt-0.5">
                        Company Logo &amp; Branding
                      </p>
                    </div>
                  </div>
                  <div className="h-3.5 w-8 rounded-full bg-gradient-to-r from-cyan-400 to-[#009fe3] shadow-2xs border border-cyan-300/80" />
                </div>

                {/* Middle Photo & Info Grid */}
                <div className="grid grid-cols-12 gap-3.5 pt-3.5 items-center">
                  {/* Photo Box */}
                  <div className="col-span-4 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700 bg-white dark:bg-slate-900 p-2 text-center flex flex-col items-center justify-center min-h-[95px] shadow-2xs">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 dark:bg-sky-950 text-[#009fe3] dark:text-cyan-400 mb-1">
                      <User className="h-5 w-5" />
                    </div>
                    <span className="text-[9px] font-extrabold text-slate-600 dark:text-slate-300 leading-tight">
                      Employee Photo
                    </span>
                  </div>

                  {/* Data Fields Specimen */}
                  <div className="col-span-8 space-y-1.5">
                    <div className="rounded-lg bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-700 px-2.5 py-1 shadow-2xs">
                      <span className="text-[8px] font-bold uppercase text-slate-400">Employee Name</span>
                      <p className="text-xs font-black text-slate-950 dark:text-white leading-tight">Rahul Sharma</p>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                      <div className="rounded-lg bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-700 px-2 py-1 shadow-2xs">
                        <span className="text-[8px] font-bold uppercase text-slate-400">Designation</span>
                        <p className="text-[10px] font-bold text-slate-800 dark:text-slate-200 leading-tight truncate">Sales Executive</p>
                      </div>
                      <div className="rounded-lg bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-700 px-2 py-1 shadow-2xs">
                        <span className="text-[8px] font-bold uppercase text-slate-400">Employee ID</span>
                        <p className="text-[10px] font-bold text-[#009fe3] dark:text-cyan-400 leading-tight">EMP1024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Front Items List */}
          <div className="relative z-10 space-y-2.5">
            <p className="text-[11px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Front Side Information Breakdown:
            </p>
            {frontFields.map((field, idx) => {
              const ItemIcon = field.icon || (field.iconName && FIELD_ICONS[field.iconName]) || CreditCard;
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
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">{field.hint}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black text-slate-300 dark:text-slate-600 font-mono">
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
                  Card Reverse Details
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  Back
                </h3>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-800 dark:bg-slate-700 px-3.5 py-1 text-xs font-black text-slate-100 shadow-sm">
              <ShieldCheck className="h-3 w-3 text-cyan-400" />
              Verification &amp; Terms
            </span>
          </div>

          {/* Back Card Specimen Preview OR Uploaded Proof */}
          <div className="relative z-10 my-6">
            {backCardImage && (
              <div className="flex justify-end mb-2">
                <button
                  type="button"
                  onClick={() => setShowBackProof(!showBackProof)}
                  className="text-xs font-bold text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <Sparkles className="h-3 w-3 text-cyan-400" />
                  {showBackProof ? "View Layout Wireframe" : "View Uploaded Back Proof"}
                </button>
              </div>
            )}

            {backCardImage && showBackProof ? (
              <div className="relative aspect-[1.586/1] w-full rounded-2xl overflow-hidden border-2 border-slate-700 shadow-md">
                <Image
                  src={backCardImage}
                  alt="Employee ID Card Back Proof"
                  fill
                  unoptimized
                  className="object-contain bg-slate-950"
                />
              </div>
            ) : (
              <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-slate-50 via-white to-slate-100/60 dark:from-slate-800 dark:via-slate-850 dark:to-slate-900 p-4 sm:p-5 shadow-inner backdrop-blur-md">
                {/* Top Corporate Disclaimer Strip */}
                <div className="h-5 w-full rounded-md bg-slate-800 dark:bg-slate-950 mb-3 flex items-center justify-between px-3">
                  <span className="text-[7px] font-mono text-slate-400 uppercase">OFFICIAL CORPORATE CREDENTIAL</span>
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                </div>

                {/* Middle Data Fields + QR Grid */}
                <div className="grid grid-cols-12 gap-3 items-center">
                  <div className="col-span-8 space-y-1">
                    <div className="flex justify-between text-[9px] border-b border-slate-200/80 dark:border-slate-700 pb-0.5">
                      <span className="font-bold text-slate-500">Company Information:</span>
                      <span className="font-mono font-bold text-slate-800 dark:text-slate-200">Guwahati, Assam</span>
                    </div>
                    <div className="flex justify-between text-[9px] border-b border-slate-200/80 dark:border-slate-700 pb-0.5">
                      <span className="font-bold text-slate-500">Emergency / Contact:</span>
                      <span className="font-bold text-[#009fe3] dark:text-cyan-400">+91 92070 12084</span>
                    </div>
                    <div className="flex justify-between text-[9px] border-b border-slate-200/80 dark:border-slate-700 pb-0.5">
                      <span className="font-bold text-slate-500">Terms / Instructions:</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">Non-Transferable</span>
                    </div>
                    <div className="flex justify-between text-[9px]">
                      <span className="font-bold text-slate-500">Verification:</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">Authorized Signatory</span>
                    </div>
                  </div>

                  {/* QR / Barcode Specimen Box */}
                  <div className="col-span-4 flex flex-col items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 shadow-2xs">
                    <QrCode className="h-9 w-9 text-slate-800 dark:text-slate-200" />
                    <span className="text-[7px] font-mono text-slate-500 mt-0.5">QR / BARCODE</span>
                  </div>
                </div>

                {/* Bottom Note */}
                <div className="mt-3 pt-2 border-t border-slate-200/80 dark:border-slate-700 flex items-center gap-1.5 text-[8px] text-slate-500">
                  <AlertCircle className="h-3 w-3 text-amber-500 shrink-0" />
                  <span className="truncate">Property of the organization. If found, please return to office address.</span>
                </div>
              </div>
            )}
          </div>

          {/* Back Items List */}
          <div className="relative z-10 space-y-2.5">
            <p className="text-[11px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Back Side Information Breakdown:
            </p>
            {backFields.map((field, idx) => {
              const ItemIcon = field.icon || (field.iconName && FIELD_ICONS[field.iconName]) || ShieldCheck;
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
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">{field.hint}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black text-slate-300 dark:text-slate-600 font-mono">
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
