"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileSpreadsheet,
  Download,
  Copy,
  Check,
  GraduationCap,
  Briefcase,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckSquare,
  Square,
  AlertCircle,
  FileCheck2,
  Ticket,
  Radio,
  HelpCircle,
  ListChecks,
  Sliders,
  Send,
} from "lucide-react";
import { FlowChain } from "@/components/ui/FlowChain";

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
      className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:border-[#009fe3] hover:text-[#009fe3] transition shadow-2xs"
    >
      {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
      <span>{copied ? "Copied!" : label}</span>
    </button>
  );
}

/* ─────────────────────────────────────────────────────────────
   DATA ARRAYS (STRICTLY FROM USER'S DOCUMENT)
   ───────────────────────────────────────────────────────────── */

// 1. Student ID Card Data Template
const studentDataFields = [
  { field: "Student Name", purpose: "Printed student name" },
  { field: "Student ID / Admission Number", purpose: "Identification number" },
  { field: "Class", purpose: "Current class" },
  { field: "Section", purpose: "Class section" },
  { field: "Course", purpose: "Course/program" },
  { field: "Roll Number", purpose: "Academic identification" },
  { field: "Date of Birth", purpose: "If required" },
  { field: "Blood Group", purpose: "If required" },
  { field: "Parent Name", purpose: "If required" },
  { field: "Photograph", purpose: "Student photograph" },
  { field: "Institution", purpose: "Organization name" },
  { field: "QR Code Data", purpose: "Optional" },
  { field: "Barcode Data", purpose: "Optional" },
];

const studentFieldTypes = [
  { info: "Student Name", type: "Short Text", example: "Rahul Sharma" },
  { info: "Admission Number", type: "Alphanumeric", example: "ADM20260045" },
  { info: "Class", type: "Dropdown", example: "Class 10" },
  { info: "Section", type: "Dropdown", example: "A" },
  { info: "Roll Number", type: "Numeric", example: "25" },
  { info: "Date of Birth", type: "Date", example: "15/06/2012" },
  { info: "Blood Group", type: "Dropdown", example: "B+" },
  { info: "Parent Name", type: "Short Text", example: "Amit Sharma" },
  { info: "Mobile Number", type: "Mobile Number", example: "9876543210" },
  { info: "Photograph", type: "Photo Upload", example: "Student photo" },
  { info: "QR Code Data", type: "Text / Alphanumeric", example: "Student ID" },
  { info: "Barcode Data", type: "Text / Alphanumeric", example: "Admission Number" },
];

// 2. Employee ID Card Data Template
const employeeDataFields = [
  { field: "Employee Name", purpose: "Printed employee name" },
  { field: "Employee ID", purpose: "Employee identification" },
  { field: "Photograph", purpose: "Employee photo" },
  { field: "Designation", purpose: "Job designation" },
  { field: "Department", purpose: "Department" },
  { field: "Organization", purpose: "Company/institution" },
  { field: "Date of Joining", purpose: "If required" },
  { field: "Contact", purpose: "If required" },
  { field: "Email", purpose: "If required" },
  { field: "QR Code Data", purpose: "Optional" },
  { field: "Barcode Data", purpose: "Optional" },
];

const employeeFieldTypes = [
  { info: "Employee Name", type: "Short Text", example: "Amit Sharma" },
  { info: "Employee ID", type: "Alphanumeric", example: "EMP20260125" },
  { info: "Department", type: "Dropdown", example: "Accounts" },
  { info: "Designation", type: "Short Text / Dropdown", example: "Manager" },
  { info: "Date of Joining", type: "Date", example: "01/04/2026" },
  { info: "Mobile Number", type: "Mobile Number", example: "9876543210" },
  { info: "Email", type: "Email", example: "amit@company.com" },
  { info: "Photograph", type: "Photo Upload", example: "Employee photo" },
  { info: "QR Code Data", type: "Text / Alphanumeric", example: "Employee ID" },
  { info: "Barcode Data", type: "Text / Alphanumeric", example: "Employee ID" },
];

// 3. IDGen Studio Recommended Field Types
const studioFieldTypes = [
  { type: "Short Text", suitable: "Names, departments, designations", example: "Student Name" },
  { type: "Long Text", suitable: "Addresses, remarks", example: "Residential Address" },
  { type: "Numeric", suitable: "Numbers only", example: "Roll Number" },
  { type: "Alphanumeric", suitable: "Letters + numbers", example: "Student ID / Employee ID" },
  { type: "Email", suitable: "Email addresses", example: "user@example.com" },
  { type: "Mobile Number", suitable: "Mobile numbers", example: "9876543210" },
  { type: "Date", suitable: "Dates", example: "Date of Birth" },
  { type: "Dropdown", suitable: "One predefined option", example: "Class / Blood Group" },
  { type: "Multi-Select", suitable: "Multiple predefined options", example: "Activities" },
  { type: "Radio Button", suitable: "One selected option", example: "Category" },
  { type: "Checkbox", suitable: "Confirmation / agreement", example: "Declaration" },
  { type: "Photo Upload", suitable: "Identification photograph", example: "Student Photo" },
  { type: "File Upload", suitable: "Supporting files/documents", example: "Required Document" },
  { type: "Address", suitable: "Address information", example: "Residential Address" },
  { type: "QR Code Data", suitable: "Data used for QR generation", example: "Student ID / URL" },
  { type: "Barcode Data", suitable: "Data used for barcode generation", example: "Employee ID" },
  { type: "Custom Field", suitable: "Organization-specific information", example: "Campus / House" },
];

// 4. IDGen Studio Form Planning Worksheet
const studioWorksheetRows = [
  { name: "Student Name", type: "Short Text", format: "Rahul Sharma", req: "Yes", printed: "Yes", qr: "No", notes: "—" },
  { name: "Admission No.", type: "Alphanumeric", format: "ADM20260045", req: "Yes", printed: "Yes", qr: "Yes", notes: "Unique" },
  { name: "Class", type: "Dropdown", format: "Class 10", req: "Yes", printed: "Yes", qr: "No", notes: "—" },
  { name: "Section", type: "Dropdown", format: "A/B/C", req: "Yes", printed: "Yes", qr: "No", notes: "—" },
  { name: "Roll Number", type: "Numeric", format: "25", req: "Yes", printed: "Yes", qr: "No", notes: "—" },
  { name: "Photograph", type: "Photo Upload", format: "JPG/PNG", req: "Yes", printed: "Yes", qr: "No", notes: "Required" },
  { name: "Blood Group", type: "Dropdown", format: "B+", req: "Optional", printed: "Yes", qr: "No", notes: "—" },
  { name: "Parent Name", type: "Short Text", format: "Amit Sharma", req: "Optional", printed: "No", qr: "No", notes: "—" },
];

// 5. Bulk Project Checklist Items
const bulkChecklistItems = [
  "Organization name",
  "Organization address/contact",
  "Product required",
  "Quantity",
  "Card specification",
  "Single-side or double-side printing",
  "Final artwork",
  "Data file",
  "Photographs",
  "Photo-to-record matching",
  "QR/barcode information",
  "Holder requirement",
  "Hook requirement",
  "Lanyard requirement",
  "Lanyard width",
  "Attachment configuration",
  "RFID specification, if applicable",
  "Delivery location",
  "Required timeline",
  "Approval contact",
];

// 6. IDGen Studio Form Testing Checklist Items
const studioTestingChecklist = [
  "All required fields are included",
  "Correct field type is selected",
  "Numeric fields accept the intended values",
  "Alphanumeric fields accept the intended format",
  "Dropdown options are correct",
  "Date fields work correctly",
  "Mobile number field works correctly",
  "Email field validates correctly",
  "Photograph upload works",
  "QR/barcode information is correct",
  "ID card preview displays correctly",
  "Card information maps to the correct fields",
  "Required fields are enforced",
  "Optional fields remain optional",
  "Submission works correctly",
  "Organization can see the submission",
  "Organization can review/correct information where applicable",
  "Approval workflow works correctly",
  "Printing/batch workflow is ready",
];

export function TemplateResources() {
  const [checkedBulkItems, setCheckedBulkItems] = useState<Record<number, boolean>>({});
  const [checkedTestingItems, setCheckedTestingItems] = useState<Record<number, boolean>>({});

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
              <span>Academic Data Preparation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mt-2">
              Student ID Card Data Template
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl">
              Before starting a student ID card project, prepare the information that needs to be collected and printed.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() =>
                downloadCSV(
                  "Student_ID_Card_Data_Template",
                  ["Field", "Purpose"],
                  studentDataFields.map((s) => [s.field, s.purpose])
                )
              }
              className="inline-flex items-center gap-2 rounded-xl bg-[#009fe3] hover:bg-[#008bc9] text-white px-4 py-2 text-xs font-bold shadow-md shadow-[#009fe3]/20 transition"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download CSV</span>
            </button>
            <CopyButton
              text={studentDataFields.map((s) => `${s.field}: ${s.purpose}`).join("\n")}
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
              {studentDataFields.map((row) => (
                <tr key={row.field} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition">
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
                Recommended Field Types for Digital Collection
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                If the information will be collected through IDGen Studio, also define the appropriate field type.
              </p>
            </div>
            <CopyButton
              text={studentFieldTypes.map((s) => `${s.info} | ${s.type} | Example: ${s.example}`).join("\n")}
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
                {studentFieldTypes.map((row) => (
                  <tr key={row.info} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition">
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
              <span>Corporate Roster Preparation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mt-2">
              Employee ID Card Data Template
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl">
              Prepare the following information for employee and staff ID card projects.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() =>
                downloadCSV(
                  "Employee_ID_Card_Data_Template",
                  ["Field", "Purpose"],
                  employeeDataFields.map((s) => [s.field, s.purpose])
                )
              }
              className="inline-flex items-center gap-2 rounded-xl bg-[#009fe3] hover:bg-[#008bc9] text-white px-4 py-2 text-xs font-bold shadow-md shadow-[#009fe3]/20 transition"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download CSV</span>
            </button>
            <CopyButton
              text={employeeDataFields.map((s) => `${s.field}: ${s.purpose}`).join("\n")}
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
              {employeeDataFields.map((row) => (
                <tr key={row.field} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition">
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
                Recommended IDGen Studio Field Types
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                Standard digital field formats for corporate and employee card forms.
              </p>
            </div>
            <CopyButton
              text={employeeFieldTypes.map((s) => `${s.info} | ${s.type} | Example: ${s.example}`).join("\n")}
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
                {employeeFieldTypes.map((row) => (
                  <tr key={row.info} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition">
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
            <span>Digital Form Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
            IDGen Studio Form Planning Template
          </h2>
          <h3 className="text-lg sm:text-xl font-bold text-[#009fe3] dark:text-cyan-400">
            Plan Your Data Collection Before Creating the Form
          </h3>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            If you are using IDGen Studio, don&apos;t only decide what information to collect. Also decide how each information field should be entered. A properly planned form can make data collection easier for students, parents, employees and other end users while helping organizations maintain consistent information.
          </p>
        </div>

        {/* Recommended Field Types Master Matrix */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
              Recommended Field Types
            </h3>
            <CopyButton
              text={studioFieldTypes.map((f) => `${f.type}: ${f.suitable} (e.g. ${f.example})`).join("\n")}
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
                {studioFieldTypes.map((row) => (
                  <tr key={row.type} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition">
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
          <div className="rounded-2xl border border-amber-200 dark:border-amber-900/50 bg-amber-50/60 dark:bg-amber-950/30 p-4 text-xs sm:text-sm text-amber-900 dark:text-amber-200 flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <p>
              <strong className="font-bold">Important:</strong> Only publish field types that are actually available in the current IDGen Studio implementation. If a field type is not yet supported, mark it as planned/coming soon or remove it from the public template.
            </p>
          </div>
        </div>

        {/* How to Plan Each IDGen Studio Field (01 to 06) */}
        <div className="space-y-6 pt-4">
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
            How to Plan Each IDGen Studio Field
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Before creating a form, define the following for every field:
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-2 shadow-sm">
              <span className="text-xs font-mono font-black text-[#009fe3] dark:text-cyan-400 uppercase">
                01 — Field Name
              </span>
              <h4 className="font-extrabold text-slate-900 dark:text-white">What information is required?</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">Example: Student Name</p>
            </div>

            <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-2 shadow-sm">
              <span className="text-xs font-mono font-black text-[#009fe3] dark:text-cyan-400 uppercase">
                02 — Field Type
              </span>
              <h4 className="font-extrabold text-slate-900 dark:text-white">How should the information be entered?</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">Example: Short Text</p>
            </div>

            <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-2 shadow-sm">
              <span className="text-xs font-mono font-black text-[#009fe3] dark:text-cyan-400 uppercase">
                03 — Required or Optional
              </span>
              <h4 className="font-extrabold text-slate-900 dark:text-white">Does the user have to provide it?</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">Example: Required</p>
            </div>

            <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-2 shadow-sm">
              <span className="text-xs font-mono font-black text-[#009fe3] dark:text-cyan-400 uppercase">
                04 — Input Format
              </span>
              <h4 className="font-extrabold text-slate-900 dark:text-white">Define the expected format where necessary</h4>
              <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                <li>• Student ID → Alphanumeric (ADM20260045)</li>
                <li>• Roll Number → Numeric (25)</li>
                <li>• Date of Birth → Date (15/06/2012)</li>
                <li>• Mobile Number → Mobile Number (9876543210)</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-2 shadow-sm">
              <span className="text-xs font-mono font-black text-[#009fe3] dark:text-cyan-400 uppercase">
                05 — Selection Options
              </span>
              <h4 className="font-extrabold text-slate-900 dark:text-white">Define available options for selection fields</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Example: Blood Group → Dropdown: A+, A-, B+, B-, O+, O-, AB+, AB-
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-2 shadow-sm">
              <span className="text-xs font-mono font-black text-[#009fe3] dark:text-cyan-400 uppercase">
                06 — Card Usage
              </span>
              <h4 className="font-extrabold text-slate-900 dark:text-white">Identify how the collected data is used:</h4>
              <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-0.5">
                <li>• Appear on the ID card</li>
                <li>• Used to generate a QR code / barcode</li>
                <li>• Stored only in organization records</li>
              </ul>
            </div>
          </div>
        </div>

        {/* IDGen Studio Form Planning Worksheet */}
        <div className="space-y-4 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                IDGen Studio Form Planning Worksheet
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                Organizations can prepare their requirements using this structure:
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() =>
                  downloadCSV(
                    "IDGen_Studio_Form_Planning_Worksheet",
                    ["Field Name", "Field Type", "Example / Format", "Required?", "Printed on Card?", "QR/Barcode?", "Notes"],
                    studioWorksheetRows.map((s) => [s.name, s.type, s.format, s.req, s.printed, s.qr, s.notes])
                  )
                }
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] hover:bg-[#008bc9] text-white px-3.5 py-1.5 text-xs font-bold shadow-md transition"
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
                {studioWorksheetRows.map((row) => (
                  <tr key={row.name} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition text-xs">
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

          <p className="text-xs text-slate-500 dark:text-slate-400 italic">
            This worksheet can help the organization and IDGen team understand the form requirements before the actual form is created.
          </p>
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
              <span>Pre-Flight Checklist</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mt-2">
              Bulk ID Card Project Checklist
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Before sending a bulk ID card requirement to IDGen, prepare:
            </p>
          </div>

          <CopyButton text={bulkChecklistItems.map((item, i) => `${i + 1}. ${item}`).join("\n")} label="Copy Checklist" />
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {bulkChecklistItems.map((item, idx) => {
            const isChecked = !!checkedBulkItems[idx];
            return (
              <div
                key={item}
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
                  Spec Sheet
                </span>
                <CopyButton
                  text={`ID Card Specification Template:
Card Type: PVC / RFID / Event / Membership
Orientation: Portrait / Landscape
Printing: Single Side / Double Side
Personalization: Yes / No
Photo: Yes / No
QR Code: Yes / No
Barcode: Yes / No
Holder: Yes / No
Hook: Yes / No
Lanyard: Yes / No
Sealing: Yes / No
Quantity:
Required Delivery Date:
Additional Requirements:`}
                />
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                ID Card Specification Template
              </h3>

              <div className="rounded-2xl bg-slate-50 dark:bg-slate-950 p-4 font-mono text-xs text-slate-700 dark:text-slate-300 space-y-1.5 border border-slate-100 dark:border-slate-800">
                <p><strong>Card Type:</strong> PVC / RFID / Event / Membership</p>
                <p><strong>Orientation:</strong> Portrait / Landscape</p>
                <p><strong>Printing:</strong> Single Side / Double Side</p>
                <p><strong>Personalization:</strong> Yes / No</p>
                <p><strong>Photo:</strong> Yes / No</p>
                <p><strong>QR Code:</strong> Yes / No</p>
                <p><strong>Barcode:</strong> Yes / No</p>
                <p><strong>Holder:</strong> Yes / No</p>
                <p><strong>Hook:</strong> Yes / No</p>
                <p><strong>Lanyard:</strong> Yes / No</p>
                <p><strong>Sealing:</strong> Yes / No</p>
                <p><strong>Quantity:</strong> [Specify count]</p>
                <p><strong>Required Delivery Date:</strong> [Date]</p>
                <p><strong>Additional Requirements:</strong> [Details]</p>
              </div>
            </div>
          </div>

          {/* Card 2: Event Badge Planning Template */}
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-md flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                  Event Passes
                </span>
                <CopyButton
                  text={`Event Badge Planning Template:
Event Information:
Event Name:
Event Date:
Venue:
Expected Participants:
Required Quantity:

Badge Categories:
Delegate, Speaker, Organizer, VIP, Exhibitor, Staff, Volunteer, Other

Badge Requirements:
Card Type: PVC / Event Badge / Other
Orientation: Portrait / Landscape
Attachment: One Hook / Two Hooks / Other
Lanyard: Standard / Custom Printed
QR Code: Yes / No
Barcode: Yes / No
Sealing: Required / Not Required`}
                />
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                Event Badge Planning Template
              </h3>

              <div className="rounded-2xl bg-slate-50 dark:bg-slate-950 p-4 text-xs text-slate-700 dark:text-slate-300 space-y-2 border border-slate-100 dark:border-slate-800">
                <div>
                  <strong className="font-bold uppercase tracking-wider text-slate-400 text-[10px] block">Event Information</strong>
                  <p>Event Name • Event Date • Venue • Expected Participants • Required Quantity</p>
                </div>
                <div>
                  <strong className="font-bold uppercase tracking-wider text-slate-400 text-[10px] block">Badge Categories</strong>
                  <p>Delegate, Speaker, Organizer, VIP, Exhibitor, Staff, Volunteer, Other</p>
                </div>
                <div>
                  <strong className="font-bold uppercase tracking-wider text-slate-400 text-[10px] block">Badge Requirements</strong>
                  <p>Card Type: PVC / Event Badge | Orientation: Portrait / Landscape | Attachment: One Hook / Two Hooks | Lanyard: Standard / Custom | QR / Barcode | Sealing</p>
                </div>
              </div>
            </div>

            <Link href="/event-card-printing/" className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3] hover:underline pt-2">
              <span>Explore Event Cards</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Card 3: RFID Requirement Template */}
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-md flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                  Smart Chips
                </span>
                <CopyButton
                  text={`RFID Requirement Template:
Provide before requesting quotation:
- RFID technology
- Frequency (13.56 MHz / 125 kHz)
- Chip type (Mifare 1K / TK4100 / NTAG)
- Reader / system model
- Existing card specification
- Card format
- Personalization requirement
- Quantity
- Application (Attendance, Turnstile, Access Control)
- Required read/write functionality
- Existing system/integration requirements`}
                />
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                RFID Requirement Template
              </h3>

              <div className="rounded-2xl bg-slate-50 dark:bg-slate-950 p-4 text-xs text-slate-700 dark:text-slate-300 space-y-1.5 border border-slate-100 dark:border-slate-800">
                <p><strong>Before requesting an RFID quotation, provide:</strong></p>
                <p>• RFID technology &amp; Frequency</p>
                <p>• Chip type &amp; Reader/system model</p>
                <p>• Existing card specification &amp; Card format</p>
                <p>• Personalization requirement &amp; Quantity</p>
                <p>• Application &amp; Read/Write functionality</p>
                <p>• Existing system/integration requirements</p>
              </div>

              <p className="text-[11px] text-slate-500 dark:text-slate-400 italic">
                RFID requirements can vary significantly depending on the application, so confirm the required technology and system compatibility before production.
              </p>
            </div>

            <Link href="/rfid-card-printing/" className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3] hover:underline pt-2">
              <span>Explore RFID ID Cards</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
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
            <span>Digital Workflow Planning</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
            IDGen Studio Data Collection Planning
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            For projects using IDGen Studio, define the workflow before creating the form.
          </p>
        </div>

        {/* Planning Flow Chain */}
        <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-4 shadow-md">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Planning Flow Pipeline:</span>
          <FlowChain
            steps={[
              "Organization",
              "Required Information",
              "Field Types",
              "Required / Optional Fields",
              "Photograph Requirement",
              "Card Design",
              "QR / Barcode Requirement",
              "ID Card Preview",
              "Organization Review",
              "Approval",
              "Batch Printing / Print All",
            ]}
          />
          <p className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
            The detailed IDGen Studio workflow remains on <Link href="/idgen-studio/" className="text-[#009fe3] underline font-bold">/idgen-studio/</Link>. The Templates page is intended to help organizations prepare their requirements, rather than duplicate the complete IDGen Studio explanation.
          </p>
        </div>

        {/* Traditional vs IDGen Studio Comparison */}
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-sm space-y-3">
            <span className="text-xs font-black uppercase tracking-wider text-slate-400 block">
              Traditional Data Preparation
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Traditional Data File
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Excel Columns → Data Entry → Photograph Matching → Final File
            </p>
          </div>

          <div className="rounded-3xl border border-sky-200 dark:border-cyan-800/60 bg-sky-50/50 dark:bg-slate-900 p-6 sm:p-7 shadow-sm space-y-3">
            <span className="text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 block">
              Digital Studio Planning
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              IDGen Studio Planning
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Field Name → Field Type → Required/Optional → User Submission → Preview → Organization Review → Approval → Printing
            </p>
          </div>
        </div>

        {/* Studio Examples: Student & Employee Forms */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Student Form Example */}
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-md space-y-4">
            <h3 className="text-lg font-black text-slate-900 dark:text-white">
              IDGen Studio Example: Student Form
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">A school could structure its form as:</p>
            <div className="rounded-2xl bg-slate-50 dark:bg-slate-950 p-4 font-mono text-xs text-slate-700 dark:text-slate-300 space-y-1 border border-slate-100 dark:border-slate-800">
              <p>• Student Name → Short Text</p>
              <p>• Admission Number → Alphanumeric</p>
              <p>• Class → Dropdown</p>
              <p>• Section → Dropdown</p>
              <p>• Roll Number → Numeric</p>
              <p>• Date of Birth → Date</p>
              <p>• Blood Group → Dropdown</p>
              <p>• Parent Name → Short Text</p>
              <p>• Mobile Number → Mobile Number</p>
              <p>• Photograph → Photo Upload</p>
              <p>• QR Code Data → Student ID / Alphanumeric</p>
            </div>
            <p className="text-xs font-semibold text-[#009fe3] dark:text-cyan-400 pt-2 border-t border-slate-100 dark:border-slate-800">
              Then: Form → Student/Parent Submission → ID Card Preview → Submit → School Review → Approval → Batch Printing
            </p>
          </div>

          {/* Employee Form Example */}
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-md space-y-4">
            <h3 className="text-lg font-black text-slate-900 dark:text-white">
              IDGen Studio Example: Employee Form
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">A company could structure its form as:</p>
            <div className="rounded-2xl bg-slate-50 dark:bg-slate-950 p-4 font-mono text-xs text-slate-700 dark:text-slate-300 space-y-1 border border-slate-100 dark:border-slate-800">
              <p>• Employee Name → Short Text</p>
              <p>• Employee ID → Alphanumeric</p>
              <p>• Department → Dropdown</p>
              <p>• Designation → Short Text / Dropdown</p>
              <p>• Date of Joining → Date</p>
              <p>• Mobile Number → Mobile Number</p>
              <p>• Email → Email</p>
              <p>• Photograph → Photo Upload</p>
              <p>• QR Code Data → Employee ID</p>
            </div>
            <p className="text-xs font-semibold text-[#009fe3] dark:text-cyan-400 pt-2 border-t border-slate-100 dark:border-slate-800">
              Then: Form → Employee Submission → ID Card Preview → HR Review → Approval → Printing
            </p>
          </div>
        </div>

        {/* IDGen Studio Form Testing Checklist */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                IDGen Studio Form Testing Checklist
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Before sharing the form with students, parents, employees or other users, test:
              </p>
            </div>
            <CopyButton text={studioTestingChecklist.map((item, i) => `${i + 1}. ${item}`).join("\n")} label="Copy Testing Checklist" />
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {studioTestingChecklist.map((item, idx) => {
              const isChecked = !!checkedTestingItems[idx];
              return (
                <div
                  key={item}
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
              <span>Quote Specifications</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mt-2">
              Quote Preparation Template
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Before contacting IDGen, prepare:
            </p>
          </div>

          <CopyButton
            text={`Quote Preparation Template:
Organization:
City:
State:
Product:
Quantity:
Card Type:
Orientation:
Printing: Single / Double
Personalization: Yes / No
Accessories:
RFID: Yes / No
QR Code: Yes / No
Barcode: Yes / No
Artwork Available: Yes / No
Data Available: Yes / No
IDGen Studio Required: Yes / No
Delivery Location:
Required Timeline:
Additional Requirements:`}
            label="Copy Quote Spec"
          />
        </div>

        <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-md">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 font-mono text-xs text-slate-700 dark:text-slate-300">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
              <strong>Organization:</strong> [Name]
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
              <strong>City &amp; State:</strong> [Location]
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
              <strong>Product:</strong> [PVC / Lanyard / Kit]
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
              <strong>Quantity:</strong> [Count]
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
              <strong>Card Type:</strong> [PVC / RFID / Event]
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
              <strong>Orientation:</strong> [Portrait / Landscape]
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
              <strong>Printing:</strong> [Single / Double]
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
              <strong>Personalization:</strong> [Yes / No]
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
              <strong>Accessories:</strong> [Holder / Hook / Lanyard]
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
              <strong>RFID:</strong> [Yes / No]
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
              <strong>QR Code / Barcode:</strong> [Yes / No]
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
              <strong>Artwork &amp; Data:</strong> [Available / Needed]
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
              <strong>IDGen Studio Required:</strong> [Yes / No]
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
              <strong>Delivery Location:</strong> [Destination]
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
              <strong>Required Timeline:</strong> [Date]
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
            <Link
              href="/request-a-quote/"
              className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] hover:bg-[#008bc9] text-white px-6 py-2.5 text-xs font-extrabold shadow-md transition"
            >
              <span>Submit to Request a Quote →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: DOWNLOADABLE PROJECT RESOURCES
          ───────────────────────────────────────────────────────────── */}
      <section id="downloads" className="scroll-mt-28 space-y-8">
        <div className="space-y-3 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
            <Download className="h-3.5 w-3.5" />
            <span>Ready Download Files</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
            Downloadable Project Resources
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl">
            To make this page genuinely useful, IDGen provides downloadable templates that organizations can complete before requesting a quotation or starting a project.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Student ID Card Data Template",
              format: "XLSX / CSV",
              onClick: () =>
                downloadCSV(
                  "Student_ID_Card_Data_Template",
                  ["Field", "Purpose"],
                  studentDataFields.map((s) => [s.field, s.purpose])
                ),
            },
            {
              name: "Employee ID Card Data Template",
              format: "XLSX / CSV",
              onClick: () =>
                downloadCSV(
                  "Employee_ID_Card_Data_Template",
                  ["Field", "Purpose"],
                  employeeDataFields.map((s) => [s.field, s.purpose])
                ),
            },
            {
              name: "IDGen Studio Form Planning Template",
              format: "XLSX / CSV",
              onClick: () =>
                downloadCSV(
                  "IDGen_Studio_Form_Planning_Template",
                  ["Field Name", "Field Type", "Example / Format", "Required?", "Printed on Card?", "QR/Barcode?", "Notes"],
                  studioWorksheetRows.map((s) => [s.name, s.type, s.format, s.req, s.printed, s.qr, s.notes])
                ),
            },
            {
              name: "Bulk ID Card Project Checklist",
              format: "PDF / CSV",
              onClick: () =>
                downloadCSV(
                  "Bulk_ID_Card_Project_Checklist",
                  ["Item Number", "Checklist Item"],
                  bulkChecklistItems.map((item, i) => [i + 1, item])
                ),
            },
            {
              name: "ID Card Specification Checklist",
              format: "PDF / CSV",
              onClick: () =>
                downloadCSV(
                  "ID_Card_Specification_Checklist",
                  ["Specification Item", "Options"],
                  [
                    ["Card Type", "PVC / RFID / Event / Membership"],
                    ["Orientation", "Portrait / Landscape"],
                    ["Printing", "Single Side / Double Side"],
                    ["Personalization", "Yes / No"],
                    ["Accessories", "Holder / Hook / Lanyard / Sealing"],
                  ]
                ),
            },
            {
              name: "Event Badge Planning Template",
              format: "PDF / XLSX",
              onClick: () =>
                downloadCSV(
                  "Event_Badge_Planning_Template",
                  ["Section", "Details"],
                  [
                    ["Event Information", "Name, Date, Venue, Participants, Quantity"],
                    ["Badge Categories", "Delegate, Speaker, Organizer, VIP, Exhibitor, Staff, Volunteer"],
                    ["Badge Requirements", "PVC/Badge, Portrait/Landscape, 1/2 Hooks, Lanyard, QR"],
                  ]
                ),
            },
            {
              name: "RFID Requirement Checklist",
              format: "PDF / CSV",
              onClick: () =>
                downloadCSV(
                  "RFID_Requirement_Checklist",
                  ["Requirement Item", "Specification Detail"],
                  [
                    ["Technology", "13.56 MHz / 125 kHz"],
                    ["Chip Type", "Mifare 1K / TK4100 / NTAG"],
                    ["Reader Compatibility", "Specify reader make & model"],
                    ["Read/Write", "Encoding requirement"],
                  ]
                ),
            },
          ].map((item) => (
            <div
              key={item.name}
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
                onClick={item.onClick}
                className="h-9 w-9 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-[#009fe3] hover:text-white text-slate-600 dark:text-slate-300 flex items-center justify-center transition"
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
              Quality Assurance &amp; Efficiency
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              Why Prepare Your Requirement Before Ordering?
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              A properly prepared requirement can help reduce:
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Missing information",
              "Incorrect data",
              "Photograph mismatches",
              "Repeated communication",
              "Design corrections",
              "Production delays",
              "Avoidable reprints",
            ].map((reason) => (
              <div key={reason} className="flex items-center gap-2.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200">
                <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>{reason}</span>
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800 font-medium">
            It also helps IDGen understand your project more accurately before production begins.
          </p>
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
              <span>Identity Solutions Simplified</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Ready to Send Your Requirement?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Use the appropriate IDGen template to organize your project information before requesting a quotation.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/request-a-quote/"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#009fe3] hover:bg-[#008bc9] px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-[#009fe3]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#009fe3]/50 hover:-translate-y-0.5"
            >
              <span>Request a Quote →</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/idgen-studio/"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:border-cyan-300 hover:text-cyan-300 hover:-translate-y-0.5"
            >
              <span>Explore IDGen Studio</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:border-cyan-300 hover:text-cyan-300 hover:-translate-y-0.5"
            >
              <span>Contact IDGen</span>
            </Link>
          </div>

          {/* Tagline block */}
          <div className="relative z-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-300">
            <div>
              <p className="font-mono font-bold text-white text-sm">IDGen Templates</p>
              <p className="text-cyan-400 font-bold mt-0.5">Prepare Better. Collect Better. Print Better.</p>
            </div>
            <div className="text-slate-400 text-right sm:text-right font-mono">
              <p>Plan → Collect → Review → Approve → Print</p>
              <p className="text-slate-300 font-semibold">IDGen — Identity Solutions Simplified</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
