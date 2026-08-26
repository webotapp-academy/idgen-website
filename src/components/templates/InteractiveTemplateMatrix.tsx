"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Briefcase,
  Boxes,
  Ticket,
  Radio,
  QrCode,
  Copy,
  Check,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  FileSpreadsheet,
  Info,
} from "lucide-react";
import { FlowChain } from "@/components/ui/FlowChain";

export const studentFields = [
  { field: "Student Name", purpose: "Printed name", sample: "Rahul Sharma" },
  { field: "Student ID", purpose: "Identification number", sample: "STU-2026-042" },
  { field: "Class", purpose: "Current class", sample: "Class 10" },
  { field: "Section", purpose: "Class section", sample: "Section A" },
  { field: "Course", purpose: "Course/program", sample: "Science Stream" },
  { field: "Roll Number", purpose: "Academic identification", sample: "Roll No. 14" },
  { field: "Photograph", purpose: "Student photo", sample: "STU_2026_042.jpg" },
  { field: "Institution", purpose: "Organization name", sample: "Don Bosco School" },
  { field: "QR Code", purpose: "Optional", sample: "https://verify.idgen.in/s/042" },
  { field: "Barcode", purpose: "Optional", sample: "CODE128_98273" },
];

export const employeeFields = [
  { field: "Employee Name", purpose: "Printed name", sample: "Priyanka Das" },
  { field: "Employee ID", purpose: "Employee identification", sample: "EMP-8021" },
  { field: "Photograph", purpose: "Employee photo", sample: "EMP_8021.jpg" },
  { field: "Designation", purpose: "Job designation", sample: "Operations Manager" },
  { field: "Department", purpose: "Department", sample: "Logistics & Supply" },
  { field: "Organization", purpose: "Company/institution", sample: "IDGen Solutions Ltd." },
  { field: "Contact", purpose: "If required", sample: "+91 98765 43210" },
  { field: "QR Code", purpose: "Optional", sample: "vCard / Verification URL" },
  { field: "Barcode", purpose: "Optional", sample: "CODE39_8021" },
];

export const cardSpecOptions = [
  { label: "Card Type", options: "PVC / RFID / Event / Membership", defaultVal: "30-Mil CR80 PVC" },
  { label: "Orientation", options: "Portrait / Landscape", defaultVal: "Portrait (Vertical)" },
  { label: "Printing", options: "Single Side / Double Side", defaultVal: "Double Side Full Color" },
  { label: "Personalization", options: "Yes / No", defaultVal: "Variable Data & Photo" },
  { label: "Photo", options: "Yes / No", defaultVal: "High-Res Biometric JPG" },
  { label: "QR Code", options: "Yes / No", defaultVal: "Custom URL Dynamic QR" },
  { label: "Barcode", options: "Yes / No", defaultVal: "Code 128 / Code 39" },
  { label: "Holder", options: "Yes / No", defaultVal: "V-2 Four-Side-Lock Vertical" },
  { label: "Hook", options: "Yes / No", defaultVal: "360° Swivel Fish Hook" },
  { label: "Lanyard", options: "Yes / No", defaultVal: "20 mm Satin Custom Printed" },
  { label: "Sealing", options: "Yes / No", defaultVal: "Ultrasonic Sealed End-Loop" },
];

export const eventCategories = [
  "Delegate",
  "Speaker",
  "Organizer",
  "VIP",
  "Exhibitor",
  "Staff",
  "Volunteer",
];

export const rfidChecklist = [
  "RFID technology",
  "Frequency",
  "Chip",
  "Reader/system",
  "Existing card specification",
  "Card format",
  "Personalization requirement",
  "Quantity",
  "Application",
];

export const studioWorkflowSteps = [
  "Organization",
  "Required Fields",
  "Photo Requirement",
  "Card Design",
  "Preview",
  "Organization Review",
  "Approval",
  "Production",
];

export function InteractiveTemplateMatrix() {
  const [activeTab, setActiveTab] = useState<string>("student");
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const copyToClipboard = (type: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const studentCsvHeader = studentFields.map((f) => f.field).join(",");
  const employeeCsvHeader = employeeFields.map((f) => f.field).join(",");

  return (
    <section className="mt-10 sm:mt-14" id="template-matrix">
      {/* ── Section Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200/90 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Pre-Flight Schemas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mt-2">
            Interactive Project Templates
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
            Choose a template below to view recommended data fields, copy CSV headers for Excel, and review specification requirements.
          </p>
        </div>

        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          6 Project Templates
        </div>
      </div>

      {/* ── Tab Switcher ── */}
      <div className="mt-6 flex flex-wrap items-center gap-2">
        {[
          { id: "student", label: "Student ID Template", icon: GraduationCap },
          { id: "employee", label: "Employee ID Template", icon: Briefcase },
          { id: "spec", label: "Card Specification Matrix", icon: Boxes },
          { id: "event", label: "Event Badge Template", icon: Ticket },
          { id: "rfid", label: "RFID Requirement Template", icon: Radio },
          { id: "studio", label: "IDGen Studio Planning", icon: QrCode },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-extrabold transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-[#009fe3] text-white shadow-md shadow-[#009fe3]/25 scale-[1.02]"
                  : "bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-[#009fe3]/60 hover:bg-sky-50/50 dark:hover:bg-slate-800"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ── Active Template Display Card ── */}
      <div className="mt-6">
        {/* ═════════════════════════════════════════════════════════════
            1. STUDENT ID CARD DATA TEMPLATE
            ═════════════════════════════════════════════════════════════ */}
        {activeTab === "student" && (
          <div className="rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-[#009fe3] border border-sky-500/20">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white">
                    Student ID Card Data Template
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Recommended spreadsheet fields for schools, colleges &amp; universities
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                <button
                  onClick={() => copyToClipboard("student-csv", studentCsvHeader)}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-[#009fe3]/30 bg-sky-50 dark:bg-slate-800 px-3.5 py-2 text-xs font-bold text-[#009fe3] dark:text-cyan-300 hover:bg-[#009fe3] hover:text-white transition shadow-2xs"
                >
                  {copiedType === "student-csv" ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                      <span>Headers Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy CSV Column Headers</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-inner">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 font-extrabold uppercase text-[11px] tracking-wider border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="px-4 py-3.5">Field Name</th>
                    <th className="px-4 py-3.5">Purpose</th>
                    <th className="px-4 py-3.5 font-mono text-[#009fe3]">Sample Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {studentFields.map((row, idx) => (
                    <tr
                      key={row.field}
                      className="hover:bg-sky-50/40 dark:hover:bg-slate-800/50 transition-colors"
                    >
                      <td className="px-4 py-3 font-bold text-slate-900 dark:text-white">
                        <span className="inline-flex items-center gap-1.5">
                          <span className="font-mono text-[10px] text-slate-400">0{idx + 1}</span>
                          <span>{row.field}</span>
                        </span>
                      </td>
                      <td className="px-4 py-3 text-slate-600 dark:text-slate-300">
                        {row.purpose}
                      </td>
                      <td className="px-4 py-3 font-mono text-xs text-slate-500 dark:text-slate-400">
                        {row.sample}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Save your file as <code className="text-[#009fe3] font-bold">students.csv</code> or <code className="text-[#009fe3] font-bold">.xlsx</code> with matching photograph filenames.
              </p>
              <Link
                href="/student-id-card-printing/"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 hover:underline"
              >
                <span>Explore Student ID Card Printing</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* ═════════════════════════════════════════════════════════════
            2. EMPLOYEE ID CARD DATA TEMPLATE
            ═════════════════════════════════════════════════════════════ */}
        {activeTab === "employee" && (
          <div className="rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white">
                    Employee ID Card Data Template
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Recommended fields for corporate, healthcare, industry &amp; office staff
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                <button
                  onClick={() => copyToClipboard("employee-csv", employeeCsvHeader)}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-cyan-400/30 bg-cyan-50 dark:bg-slate-800 px-3.5 py-2 text-xs font-bold text-cyan-600 dark:text-cyan-300 hover:bg-cyan-600 hover:text-white transition shadow-2xs"
                >
                  {copiedType === "employee-csv" ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                      <span>Headers Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy CSV Column Headers</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-inner">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 font-extrabold uppercase text-[11px] tracking-wider border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="px-4 py-3.5">Field Name</th>
                    <th className="px-4 py-3.5">Purpose</th>
                    <th className="px-4 py-3.5 font-mono text-cyan-600 dark:text-cyan-400">Sample Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {employeeFields.map((row, idx) => (
                    <tr
                      key={row.field}
                      className="hover:bg-cyan-50/30 dark:hover:bg-slate-800/50 transition-colors"
                    >
                      <td className="px-4 py-3 font-bold text-slate-900 dark:text-white">
                        <span className="inline-flex items-center gap-1.5">
                          <span className="font-mono text-[10px] text-slate-400">0{idx + 1}</span>
                          <span>{row.field}</span>
                        </span>
                      </td>
                      <td className="px-4 py-3 text-slate-600 dark:text-slate-300">
                        {row.purpose}
                      </td>
                      <td className="px-4 py-3 font-mono text-xs text-slate-500 dark:text-slate-400">
                        {row.sample}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed flex items-start gap-2">
              <Info className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" />
              <span>
                The master employee page already identifies photographs, names, employee IDs, designations, departments, company branding and QR/barcode information as possible employee-card data.
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <Link
                href="/employee-id-card-printing/"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 hover:underline"
              >
                <span>Explore Employee ID Card Printing</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* ═════════════════════════════════════════════════════════════
            3. CARD SPECIFICATION MATRIX
            ═════════════════════════════════════════════════════════════ */}
        {activeTab === "spec" && (
          <div className="rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex items-center gap-3 pb-5 border-b border-slate-100 dark:border-slate-800">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-500 border border-purple-500/20">
                <Boxes className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white">
                  ID Card Specification Template
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Select and confirm material, finish, hardware &amp; security parameters
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {cardSpecOptions.map((row) => (
                <div
                  key={row.label}
                  className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/60 p-4 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-slate-900 dark:text-white">
                      {row.label}
                    </span>
                    <span className="rounded-md bg-purple-50 dark:bg-purple-950/60 border border-purple-200/60 dark:border-purple-800 px-2 py-0.5 font-mono text-[10px] font-bold text-purple-600 dark:text-purple-300">
                      {row.options}
                    </span>
                  </div>
                  <div className="mt-2 text-[11px] font-semibold text-slate-600 dark:text-slate-400">
                    <span className="text-slate-400">Default Spec: </span>
                    <span className="text-slate-800 dark:text-slate-200">{row.defaultVal}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <Link
                href="/id-card-holders/"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 hover:underline"
              >
                <span>Explore Compatible Holders</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/id-card-hooks/"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 hover:underline"
              >
                <span>Explore ID Card Hooks</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* ═════════════════════════════════════════════════════════════
            4. EVENT BADGE PLANNING TEMPLATE
            ═════════════════════════════════════════════════════════════ */}
        {activeTab === "event" && (
          <div className="rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex items-center gap-3 pb-5 border-b border-slate-100 dark:border-slate-800">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
                <Ticket className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white">
                  Event Badge Planning Template
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Pre-event participant categories, registration fields &amp; rigging configurations
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-4">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Field</span>
                <span className="text-xs font-extrabold text-slate-900 dark:text-white">Event Name</span>
              </div>
              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-4">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Field</span>
                <span className="text-xs font-extrabold text-slate-900 dark:text-white">Event Date</span>
              </div>
              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-4">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Field</span>
                <span className="text-xs font-extrabold text-slate-900 dark:text-white">Venue / City</span>
              </div>
              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-4">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Field</span>
                <span className="text-xs font-extrabold text-slate-900 dark:text-white">Expected Participants</span>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-850 p-5 space-y-3">
              <span className="text-xs font-black text-slate-900 dark:text-white block">
                Standard Badge Categories:
              </span>
              <div className="flex flex-wrap gap-2">
                {eventCategories.map((cat) => (
                  <span
                    key={cat}
                    className="rounded-xl border border-amber-500/30 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 px-3 py-1 text-xs font-bold"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 text-xs">
              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-3.5">
                <span className="text-[10px] font-bold text-slate-400 block mb-1">Attachment:</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">One Hook / Two Hooks / Other</span>
              </div>
              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-3.5">
                <span className="text-[10px] font-bold text-slate-400 block mb-1">Lanyard:</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">Standard / Custom Printed</span>
              </div>
              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-3.5">
                <span className="text-[10px] font-bold text-slate-400 block mb-1">Sealing:</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">Required / Not Required</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end">
              <Link
                href="/event-card-printing/"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 hover:underline"
              >
                <span>Explore Event Card Printing</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* ═════════════════════════════════════════════════════════════
            5. RFID REQUIREMENT TEMPLATE
            ═════════════════════════════════════════════════════════════ */}
        {activeTab === "rfid" && (
          <div className="rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex items-center gap-3 pb-5 border-b border-slate-100 dark:border-slate-800">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                <Radio className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white">
                  RFID Requirement Template
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Before requesting an RFID quotation, provide:
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {rfidChecklist.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-3.5 shadow-2xs"
                >
                  <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0" />
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-indigo-500/30 bg-indigo-50/50 dark:bg-indigo-950/30 p-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              The master file explicitly recommends confirming these details before RFID production.
            </div>

            <div className="pt-2 flex items-center justify-end">
              <Link
                href="/rfid-card-printing/"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 hover:underline"
              >
                <span>Explore RFID Card Printing</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* ═════════════════════════════════════════════════════════════
            6. IDGEN STUDIO PLANNING TEMPLATE
            ═════════════════════════════════════════════════════════════ */}
        {activeTab === "studio" && (
          <div className="rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex items-center gap-3 pb-5 border-b border-slate-100 dark:border-slate-800">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
                <QrCode className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white">
                  IDGen Studio Data Collection Planning Template
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  For suitable projects, define:
                </p>
              </div>
            </div>

            <div className="rounded-2xl border-2 border-cyan-400/30 bg-sky-50/60 dark:bg-slate-850 p-5 space-y-3">
              <span className="text-xs font-mono font-black uppercase text-[#009fe3] dark:text-cyan-400 block">
                Digital Identity Pipeline:
              </span>
              <FlowChain steps={studioWorkflowSteps} dark={false} />
            </div>

            <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              The detailed digital workflow remains owned by <code className="text-[#009fe3] font-bold">/idgen-studio/</code>, so this Templates page provides preparation resources rather than duplicating the complete software explanation.
            </div>

            <div className="pt-2 flex items-center justify-end">
              <Link
                href="/idgen-studio/"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 hover:underline"
              >
                <span>Explore IDGen Studio</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
