"use client";

import React from "react";
import Link from "next/link";
import {
  Calculator,
  ArrowRight,
  Sparkles,
  FileCheck2,
  CheckCircle2,
} from "lucide-react";

export const quotePrepFields = [
  { label: "Organization Name", sub: "School, company or institution" },
  { label: "City & State", sub: "Delivery destination (Assam / Northeast)" },
  { label: "Product Required", sub: "Student IDs, Employee Cards, RFID, Event Badges" },
  { label: "Quantity", sub: "Batch volume or annual requirement" },
  { label: "Card Type", sub: "CR80 PVC / RFID / Smart Card / Metallic" },
  { label: "Printing Mode", sub: "Single Side / Double Side full-color" },
  { label: "Accessories", sub: "Holder (V/H), Hook, Lanyard, Ultrasonic Sealing" },
  { label: "Artwork Available", sub: "Yes / No (Logo & brand colors ready)", options: "Yes / No" },
  { label: "Data Available", sub: "Yes / No (Roster file & photos ready)", options: "Yes / No" },
  { label: "Delivery Location", sub: "Physical campus / office pin code" },
  { label: "Required Timeline", sub: "Standard (72h dispatch) / Urgent" },
  { label: "Additional Requirements", sub: "Barcodes, QR codes, signature strips" },
];

export function QuotePrepInteractiveForm() {
  return (
    <section className="mt-16 sm:mt-20">
      <div className="rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 lg:p-10 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-[#009fe3] border border-sky-500/20 shadow-md">
              <Calculator className="h-6 w-6" />
            </div>
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                Preparation Blueprint
              </span>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                Quote Preparation Template
              </h3>
            </div>
          </div>

          <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
            Before contacting IDGen, prepare:
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {quotePrepFields.map((field, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/60 p-4 space-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-slate-900 dark:text-white">
                  {field.label}
                </span>
                {field.options && (
                  <span className="rounded bg-sky-100 dark:bg-sky-950 text-[#009fe3] px-2 py-0.5 text-[10px] font-mono font-bold">
                    {field.options}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                {field.sub}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
            Having these 12 parameters confirmed ensures a same-day quotation and instant digital layout proof.
          </p>
          <Link
            href="/request-a-quote/"
            className="inline-flex items-center gap-2 rounded-2xl bg-[#009fe3] hover:bg-[#008bc9] text-white px-6 py-3 text-xs font-extrabold shadow-md transition hover:-translate-y-0.5"
          >
            <span>Request a Project Quotation</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
