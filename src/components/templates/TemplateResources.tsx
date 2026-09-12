"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Download,
  Copy,
  Check,
  GraduationCap,
  Briefcase,
  Layers,
  Sparkles,
  ArrowRight,
  CheckSquare,
  Square,
  AlertCircle,
  ListChecks,
  Sliders,
  Send,
} from "lucide-react";
import { FlowChain } from "@/components/ui/FlowChain";
import type { DynamicTemplatesData } from "@/lib/dynamic-templates-types";

// Utility to export real CSV files
function downloadCSV(filename: string, headers: string[], rows: (string | number)[][]) {
  const csvContent =
    "data:text/csv;charset=utf-8," +
    [headers.join(","), ...rows.map((e) => e.map((val) => `"${String(val).replace(/"/g, '""')}"`).join(","))].join(
      "\n"
    );
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `${filename}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Copy helper button
function CopyButton({ text, label = "Copy Data" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:border-[#009fe3] hover:text-[#009fe3] transition shadow-2xs cursor-pointer"
    >
      {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
      <span>{copied ? "Copied!" : label}</span>
    </button>
  );
}

export function TemplateResources({ data }: { data: DynamicTemplatesData }) {
  const [checkedBulkItems, setCheckedBulkItems] = useState<Record<number, boolean>>({});
  const [checkedTestingItems, setCheckedTestingItems] = useState<Record<number, boolean>>({});

  const studentData = data.student;
  const employeeData = data.employee;
  const studioPlanning = data.studioPlanning;
  const bulkData = data.bulkChecklist;
  const specsData = data.specifications;
  const workflowData = data.studioWorkflow;
  const quoteData = data.quotePrep;
  const downloadsData = data.downloads;
  const whyData = data.whyPrepare;
  const closingData = data.closingCta;

  const toggleBulk = (index: number) => {
    setCheckedBulkItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleTesting = (index: number) => {
    setCheckedTestingItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: STUDENT ID CARD DATA TEMPLATE
          ───────────────────────────────────────────────────────────── */}
      <section id="student-template" className="scroll-mt-28 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
              <GraduationCap className="h-3.5 w-3.5" />
              <span>{studentData.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mt-2">
              {studentData.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl">
              {studentData.description}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() =>
                downloadCSV(
                  "Student_ID_Card_Data_Template",
                  ["Field", "Purpose"],
                  studentData.fields.map((s) => [s.field, s.purpose])
                )
              }
              className="inline-flex items-center gap-2 rounded-xl bg-[#009fe3] hover:bg-[#008bc9] text-white px-4 py-2 text-xs font-bold shadow-md shadow-[#009fe3]/20 transition cursor-pointer"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download CSV</span>
            </button>
            <CopyButton
              text={studentData.fields.map((s) => `${s.field}: ${s.purpose}`).join("\n")}
              label="Copy Fields"
            />
          </div>
        </div>

        {/* Core Field Table */}
        <div className="overflow-x-auto rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-bold uppercase text-slate-500 dark:text-slate-400">
              <tr>
                <th className="px-6 py-4">Field</th>
                <th className="px-6 py-4">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {studentData.fields.map((row, idx) => (
                <tr key={`${row.field}-${idx}`} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition">
                  <td className="px-6 py-3.5 font-bold text-slate-900 dark:text-white">{row.field}</td>
                  <td className="px-6 py-3.5 text-slate-600 dark:text-slate-300">{row.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recommended Field Types for Digital Collection */}
        <div className="space-y-4 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                {studentData.fieldTypesHeading}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                {studentData.fieldTypesDescription}
              </p>
            </div>
            <CopyButton
              text={studentData.fieldTypes.map((s) => `${s.info} | ${s.type} | Example: ${s.example}`).join("\n")}
            />
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-bold uppercase text-slate-500 dark:text-slate-400">
                <tr>
                  <th className="px-6 py-4">Information</th>
                  <th className="px-6 py-4">Recommended Field Type</th>
                  <th className="px-6 py-4">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {studentData.fieldTypes.map((row, idx) => (
                  <tr key={`${row.info}-${idx}`} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition">
                    <td className="px-6 py-3.5 font-bold text-slate-900 dark:text-white">{row.info}</td>
                    <td className="px-6 py-3.5 font-mono text-xs font-semibold text-[#009fe3] dark:text-cyan-400">
                      {row.type}
                    </td>
                    <td className="px-6 py-3.5 text-slate-600 dark:text-slate-300">{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: EMPLOYEE ID CARD DATA TEMPLATE
          ───────────────────────────────────────────────────────────── */}
      <section id="employee-template" className="scroll-mt-28 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
              <Briefcase className="h-3.5 w-3.5" />
              <span>{employeeData.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mt-2">
              {employeeData.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl">
              {employeeData.description}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() =>
                downloadCSV(
                  "Employee_ID_Card_Data_Template",
                  ["Field", "Purpose"],
                  employeeData.fields.map((s) => [s.field, s.purpose])
                )
              }
              className="inline-flex items-center gap-2 rounded-xl bg-[#009fe3] hover:bg-[#008bc9] text-white px-4 py-2 text-xs font-bold shadow-md shadow-[#009fe3]/20 transition cursor-pointer"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download CSV</span>
            </button>
            <CopyButton
              text={employeeData.fields.map((s) => `${s.field}: ${s.purpose}`).join("\n")}
              label="Copy Fields"
            />
          </div>
        </div>

        {/* Core Field Table */}
        <div className="overflow-x-auto rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-bold uppercase text-slate-500 dark:text-slate-400">
              <tr>
                <th className="px-6 py-4">Field</th>
                <th className="px-6 py-4">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {employeeData.fields.map((row, idx) => (
                <tr key={`${row.field}-${idx}`} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition">
                  <td className="px-6 py-3.5 font-bold text-slate-900 dark:text-white">{row.field}</td>
                  <td className="px-6 py-3.5 text-slate-600 dark:text-slate-300">{row.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recommended IDGen Studio Field Types */}
        <div className="space-y-4 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                {employeeData.fieldTypesHeading}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                {employeeData.fieldTypesDescription}
              </p>
            </div>
            <CopyButton
              text={employeeData.fieldTypes.map((s) => `${s.info} | ${s.type} | Example: ${s.example}`).join("\n")}
            />
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-bold uppercase text-slate-500 dark:text-slate-400">
                <tr>
                  <th className="px-6 py-4">Information</th>
                  <th className="px-6 py-4">Recommended Field Type</th>
                  <th className="px-6 py-4">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {employeeData.fieldTypes.map((row, idx) => (
                  <tr key={`${row.info}-${idx}`} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition">
                    <td className="px-6 py-3.5 font-bold text-slate-900 dark:text-white">{row.info}</td>
                    <td className="px-6 py-3.5 font-mono text-xs font-semibold text-[#009fe3] dark:text-cyan-400">
                      {row.type}
                    </td>
                    <td className="px-6 py-3.5 text-slate-600 dark:text-slate-300">{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: IDGEN STUDIO FORM PLANNING TEMPLATE
          ───────────────────────────────────────────────────────────── */}
      <section id="studio-form-planning" className="scroll-mt-28 space-y-10">
        <div className="space-y-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
            <Sliders className="h-3.5 w-3.5" />
            <span>{studioPlanning.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
            {studioPlanning.title}
          </h2>
          <h3 className="text-lg sm:text-xl font-bold text-[#009fe3] dark:text-cyan-400">
            {studioPlanning.subtitle}
          </h3>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            {studioPlanning.description}
          </p>
        </div>

        {/* Recommended Field Types Master Matrix */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
              {studioPlanning.fieldTypesHeading}
            </h3>
            <CopyButton
              text={studioPlanning.fieldTypes.map((f) => `${f.type}: ${f.suitable} (e.g. ${f.example})`).join("\n")}
            />
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-bold uppercase text-slate-500 dark:text-slate-400">
                <tr>
                  <th className="px-6 py-4">Field Type</th>
                  <th className="px-6 py-4">Suitable For</th>
                  <th className="px-6 py-4">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {studioPlanning.fieldTypes.map((row, idx) => (
                  <tr key={`${row.type}-${idx}`} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition">
                    <td className="px-6 py-3.5 font-mono text-xs font-bold text-[#009fe3] dark:text-cyan-400">
                      {row.type}
                    </td>
                    <td className="px-6 py-3.5 text-slate-700 dark:text-slate-300">{row.suitable}</td>
                    <td className="px-6 py-3.5 text-slate-500 dark:text-slate-400">{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Important implementation note */}
          {studioPlanning.importantNotice && (
            <div className="rounded-2xl border border-amber-200 dark:border-amber-900/50 bg-amber-50/60 dark:bg-amber-950/30 p-4 text-xs sm:text-sm text-amber-900 dark:text-amber-200 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <p>{studioPlanning.importantNotice}</p>
            </div>
          )}
        </div>

        {/* How to Plan Each IDGen Studio Field */}
        <div className="space-y-6 pt-4">
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
            {studioPlanning.stepsHeading}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            {studioPlanning.stepsDescription}
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {studioPlanning.steps.map((step, idx) => (
              <div
                key={`${step.stepNumber}-${idx}`}
                className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-2 shadow-sm"
              >
                <span className="text-xs font-mono font-black text-[#009fe3] dark:text-cyan-400 uppercase">
                  {step.stepNumber} — {step.title}
                </span>
                <h4 className="font-extrabold text-slate-900 dark:text-white">{step.question}</h4>
                {step.example && <p className="text-xs text-slate-600 dark:text-slate-400">Example: {step.example}</p>}
                {step.points && step.points.length > 0 && (
                  <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 pt-1">
                    {step.points.map((pt, pIdx) => (
                      <li key={pIdx}>• {pt}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* IDGen Studio Form Planning Worksheet */}
        <div className="space-y-4 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                {studioPlanning.worksheetHeading}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                {studioPlanning.worksheetDescription}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() =>
                  downloadCSV(
                    "IDGen_Studio_Form_Planning_Worksheet",
                    ["Field Name", "Field Type", "Example / Format", "Required?", "Printed on Card?", "QR/Barcode?", "Notes"],
                    studioPlanning.worksheetRows.map((s) => [s.name, s.type, s.format, s.req, s.printed, s.qr, s.notes])
                  )
                }
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] hover:bg-[#008bc9] text-white px-3.5 py-1.5 text-xs font-bold shadow-md transition cursor-pointer"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Download Worksheet</span>
              </button>
            </div>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-bold uppercase text-slate-500 dark:text-slate-400">
                <tr>
                  <th className="px-4 py-3.5">Field Name</th>
                  <th className="px-4 py-3.5">Field Type</th>
                  <th className="px-4 py-3.5">Example / Format</th>
                  <th className="px-4 py-3.5">Required?</th>
                  <th className="px-4 py-3.5">Printed on Card?</th>
                  <th className="px-4 py-3.5">QR/Barcode?</th>
                  <th className="px-4 py-3.5">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {studioPlanning.worksheetRows.map((row, idx) => (
                  <tr key={`${row.name}-${idx}`} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition text-xs">
                    <td className="px-4 py-3 font-bold text-slate-900 dark:text-white">{row.name}</td>
                    <td className="px-4 py-3 font-mono font-semibold text-[#009fe3] dark:text-cyan-400">{row.type}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{row.format}</td>
                    <td className="px-4 py-3 font-semibold">{row.req}</td>
                    <td className="px-4 py-3 font-semibold">{row.printed}</td>
                    <td className="px-4 py-3 font-semibold">{row.qr}</td>
                    <td className="px-4 py-3 text-slate-400">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {studioPlanning.worksheetFootnote && (
            <p className="text-xs text-slate-500 dark:text-slate-400 italic">
              {studioPlanning.worksheetFootnote}
            </p>
          )}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: BULK ID CARD PROJECT CHECKLIST
          ───────────────────────────────────────────────────────────── */}
      <section id="bulk-checklist" className="scroll-mt-28 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
              <ListChecks className="h-3.5 w-3.5" />
              <span>{bulkData.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mt-2">
              {bulkData.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
              {bulkData.description}
            </p>
          </div>

          <CopyButton text={bulkData.items.map((item, i) => `${i + 1}. ${item}`).join("\n")} label="Copy Checklist" />
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {bulkData.items.map((item, idx) => {
            const isChecked = !!checkedBulkItems[idx];
            return (
              <div
                key={`${item}-${idx}`}
                onClick={() => toggleBulk(idx)}
                className={`flex items-center gap-3 p-4 rounded-2xl border transition cursor-pointer select-none ${
                  isChecked
                    ? "bg-sky-50/80 dark:bg-cyan-950/30 border-[#009fe3] text-slate-900 dark:text-white shadow-xs"
                    : "bg-white dark:bg-slate-900 border-slate-200/90 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                {isChecked ? (
                  <CheckSquare className="h-5 w-5 text-[#009fe3] shrink-0" />
                ) : (
                  <Square className="h-5 w-5 text-slate-400 shrink-0" />
                )}
                <span className="text-xs sm:text-sm font-semibold">{item}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: SPECIFICATION, EVENT BADGE & RFID TEMPLATES
          ───────────────────────────────────────────────────────────── */}
      <section id="specifications" className="scroll-mt-28 space-y-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Card 1: ID Card Specification Template */}
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-md flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                  {specsData.cardSpec.badge}
                </span>
                <CopyButton text={specsData.cardSpec.rawText} />
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                {specsData.cardSpec.title}
              </h3>

              <div className="rounded-2xl bg-slate-50 dark:bg-slate-950 p-4 font-mono text-xs text-slate-700 dark:text-slate-300 space-y-1.5 border border-slate-100 dark:border-slate-800">
                {specsData.cardSpec.rawText.split("\n").map((line, idx) => {
                  const parts = line.split(":");
                  if (parts.length > 1) {
                    return (
                      <p key={idx}>
                        <strong>{parts[0]}:</strong> {parts.slice(1).join(":")}
                      </p>
                    );
                  }
                  return <p key={idx}>{line}</p>;
                })}
              </div>
            </div>
          </div>

          {/* Card 2: Event Badge Planning Template */}
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-md flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                  {specsData.eventBadgeSpec.badge}
                </span>
                <CopyButton text={specsData.eventBadgeSpec.rawText} />
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                {specsData.eventBadgeSpec.title}
              </h3>

              <div className="rounded-2xl bg-slate-50 dark:bg-slate-950 p-4 text-xs text-slate-700 dark:text-slate-300 space-y-2 border border-slate-100 dark:border-slate-800">
                <div>
                  <strong className="font-bold uppercase tracking-wider text-slate-400 text-[10px] block">Event Information</strong>
                  <p>{specsData.eventBadgeSpec.eventInfo}</p>
                </div>
                <div>
                  <strong className="font-bold uppercase tracking-wider text-slate-400 text-[10px] block">Badge Categories</strong>
                  <p>{specsData.eventBadgeSpec.badgeCategories}</p>
                </div>
                <div>
                  <strong className="font-bold uppercase tracking-wider text-slate-400 text-[10px] block">Badge Requirements</strong>
                  <p>{specsData.eventBadgeSpec.badgeRequirements}</p>
                </div>
              </div>
            </div>

            {specsData.eventBadgeSpec.linkHref && (
              <Link href={specsData.eventBadgeSpec.linkHref} className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3] hover:underline pt-2">
                <span>{specsData.eventBadgeSpec.linkText || "Explore Event Cards"}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            )}
          </div>

          {/* Card 3: RFID Requirement Template */}
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-md flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                  {specsData.rfidSpec.badge}
                </span>
                <CopyButton text={specsData.rfidSpec.rawText} />
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                {specsData.rfidSpec.title}
              </h3>

              <div className="rounded-2xl bg-slate-50 dark:bg-slate-950 p-4 text-xs text-slate-700 dark:text-slate-300 space-y-1.5 border border-slate-100 dark:border-slate-800">
                <p><strong>Before requesting an RFID quotation, provide:</strong></p>
                {specsData.rfidSpec.points.map((pt, idx) => (
                  <p key={idx}>• {pt}</p>
                ))}
              </div>

              {specsData.rfidSpec.note && (
                <p className="text-[11px] text-slate-500 dark:text-slate-400 italic">
                  {specsData.rfidSpec.note}
                </p>
              )}
            </div>

            {specsData.rfidSpec.linkHref && (
              <Link href={specsData.rfidSpec.linkHref} className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3] hover:underline pt-2">
                <span>{specsData.rfidSpec.linkText || "Explore RFID ID Cards"}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: IDGEN STUDIO DATA COLLECTION PLANNING
          ───────────────────────────────────────────────────────────── */}
      <section id="studio-workflow-planning" className="scroll-mt-28 space-y-10">
        <div className="space-y-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
            <Layers className="h-3.5 w-3.5" />
            <span>{workflowData.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
            {workflowData.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            {workflowData.description}
          </p>
        </div>

        {/* Planning Flow Chain */}
        <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-4 shadow-md">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">{workflowData.flowPipelineHeading}</span>
          <FlowChain steps={workflowData.flowSteps} />
          {workflowData.flowFootnote && (
            <p className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
              {workflowData.flowFootnote}
            </p>
          )}
        </div>

        {/* Traditional vs IDGen Studio Comparison */}
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-sm space-y-3">
            <span className="text-xs font-black uppercase tracking-wider text-slate-400 block">
              {workflowData.comparisonTraditional.badge}
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {workflowData.comparisonTraditional.title}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              {workflowData.comparisonTraditional.description}
            </p>
          </div>

          <div className="rounded-3xl border border-sky-200 dark:border-cyan-800/60 bg-sky-50/50 dark:bg-slate-900 p-6 sm:p-7 shadow-sm space-y-3">
            <span className="text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 block">
              {workflowData.comparisonStudio.badge}
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {workflowData.comparisonStudio.title}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              {workflowData.comparisonStudio.description}
            </p>
          </div>
        </div>

        {/* Studio Examples: Student & Employee Forms */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Student Form Example */}
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-md space-y-4">
            <h3 className="text-lg font-black text-slate-900 dark:text-white">
              {workflowData.studentExample.title}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">{workflowData.studentExample.intro}</p>
            <div className="rounded-2xl bg-slate-50 dark:bg-slate-950 p-4 font-mono text-xs text-slate-700 dark:text-slate-300 space-y-1 border border-slate-100 dark:border-slate-800">
              {workflowData.studentExample.fields.map((f, idx) => (
                <p key={idx}>{f}</p>
              ))}
            </div>
            {workflowData.studentExample.workflowText && (
              <p className="text-xs font-semibold text-[#009fe3] dark:text-cyan-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                {workflowData.studentExample.workflowText}
              </p>
            )}
          </div>

          {/* Employee Form Example */}
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-md space-y-4">
            <h3 className="text-lg font-black text-slate-900 dark:text-white">
              {workflowData.employeeExample.title}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">{workflowData.employeeExample.intro}</p>
            <div className="rounded-2xl bg-slate-50 dark:bg-slate-950 p-4 font-mono text-xs text-slate-700 dark:text-slate-300 space-y-1 border border-slate-100 dark:border-slate-800">
              {workflowData.employeeExample.fields.map((f, idx) => (
                <p key={idx}>{f}</p>
              ))}
            </div>
            {workflowData.employeeExample.workflowText && (
              <p className="text-xs font-semibold text-[#009fe3] dark:text-cyan-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                {workflowData.employeeExample.workflowText}
              </p>
            )}
          </div>
        </div>

        {/* IDGen Studio Form Testing Checklist */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                {workflowData.testingChecklist.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                {workflowData.testingChecklist.description}
              </p>
            </div>
            <CopyButton
              text={workflowData.testingChecklist.items.map((item, i) => `${i + 1}. ${item}`).join("\n")}
              label="Copy Testing Checklist"
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {workflowData.testingChecklist.items.map((item, idx) => {
              const isChecked = !!checkedTestingItems[idx];
              return (
                <div
                  key={`${item}-${idx}`}
                  onClick={() => toggleTesting(idx)}
                  className={`flex items-center gap-3 p-3.5 rounded-2xl border transition cursor-pointer select-none ${
                    isChecked
                      ? "bg-sky-50/80 dark:bg-cyan-950/30 border-[#009fe3] text-slate-900 dark:text-white shadow-xs"
                      : "bg-white dark:bg-slate-900 border-slate-200/90 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  {isChecked ? (
                    <CheckSquare className="h-4 w-4 text-[#009fe3] shrink-0" />
                  ) : (
                    <Square className="h-4 w-4 text-slate-400 shrink-0" />
                  )}
                  <span className="text-xs font-semibold">{item}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: QUOTE PREPARATION TEMPLATE
          ───────────────────────────────────────────────────────────── */}
      <section id="quote-prep" className="scroll-mt-28 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
              <Send className="h-3.5 w-3.5" />
              <span>{quoteData.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mt-2">
              {quoteData.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
              {quoteData.description}
            </p>
          </div>

          <CopyButton text={quoteData.copyText} label="Copy Quote Spec" />
        </div>

        <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-md">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 font-mono text-xs text-slate-700 dark:text-slate-300">
            {quoteData.fields.map((field, idx) => (
              <div
                key={`${field.label}-${idx}`}
                className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800"
              >
                <strong>{field.label}:</strong> {field.placeholder}
              </div>
            ))}
          </div>

          {quoteData.ctaHref && (
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <Link
                href={quoteData.ctaHref}
                className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] hover:bg-[#008bc9] text-white px-6 py-2.5 text-xs font-extrabold shadow-md transition"
              >
                <span>{quoteData.ctaText}</span>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: DOWNLOADABLE PROJECT RESOURCES
          ───────────────────────────────────────────────────────────── */}
      <section id="downloads" className="scroll-mt-28 space-y-8">
        <div className="space-y-3 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
            <Download className="h-3.5 w-3.5" />
            <span>{downloadsData.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
            {downloadsData.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl">
            {downloadsData.description}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {downloadsData.items.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="flex items-center justify-between p-5 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md hover:border-[#009fe3] transition"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                  {item.format}
                </span>
                <h4 className="text-sm font-extrabold text-slate-900 dark:text-white mt-1">
                  {item.name}
                </h4>
              </div>

              <button
                onClick={() => downloadCSV(item.filename, item.headers, item.rows)}
                className="h-9 w-9 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-[#009fe3] hover:text-white text-slate-600 dark:text-slate-300 flex items-center justify-center transition cursor-pointer"
                title={`Download ${item.name}`}
              >
                <Download className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 9: WHY PREPARE YOUR REQUIREMENT BEFORE ORDERING?
          ───────────────────────────────────────────────────────────── */}
      <section id="why-prepare" className="scroll-mt-28 space-y-8">
        <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
              {whyData.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {whyData.title}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {whyData.description}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {whyData.reasons.map((reason, idx) => (
              <div
                key={`${reason}-${idx}`}
                className="flex items-center gap-2.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200"
              >
                <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>{reason}</span>
              </div>
            ))}
          </div>

          {whyData.footerNote && (
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800 font-medium">
              {whyData.footerNote}
            </p>
          )}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 10: READY TO SEND YOUR REQUIREMENT? & TAGLINE
          ───────────────────────────────────────────────────────────── */}
      <section className="mt-16 sm:mt-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0B1320] via-[#0e1a2e] to-[#071525] px-6 py-12 text-white sm:px-12 sm:py-16 shadow-2xl space-y-8">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,159,227,0.25),rgba(255,255,255,0))] pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold text-cyan-300 backdrop-blur-xs border border-white/10">
              <Sparkles className="h-3.5 w-3.5 text-cyan-300 animate-pulse" />
              <span>{closingData.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              {closingData.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {closingData.description}
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center gap-3 pt-2">
            {closingData.primaryCta && (
              <Link
                href={closingData.primaryCta.href}
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#009fe3] hover:bg-[#008bc9] px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-[#009fe3]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#009fe3]/50 hover:-translate-y-0.5"
              >
                <span>{closingData.primaryCta.label}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
            {closingData.secondaryCtas?.map((sec, idx) => (
              <Link
                key={`${sec.label}-${idx}`}
                href={sec.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:border-cyan-300 hover:text-cyan-300 hover:-translate-y-0.5"
              >
                <span>{sec.label}</span>
                {idx === 0 && <ArrowRight className="h-4 w-4" />}
              </Link>
            ))}
          </div>

          {/* Tagline block */}
          {closingData.tagline && (
            <div className="relative z-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-300">
              <div>
                <p className="font-mono font-bold text-white text-sm">{closingData.tagline.title}</p>
                <p className="text-cyan-400 font-bold mt-0.5">{closingData.tagline.subtitle}</p>
              </div>
              <div className="text-slate-400 text-left sm:text-right font-mono">
                <p>{closingData.tagline.pipeline}</p>
                <p className="text-slate-300 font-semibold">{closingData.tagline.company}</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
