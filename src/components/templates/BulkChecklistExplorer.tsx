"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Boxes,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  RotateCcw,
  Check,
} from "lucide-react";

export const bulkChecklistItems = [
  "Organization name",
  "Organization address / contact",
  "Product required",
  "Quantity",
  "Card specification",
  "Single-side or double-side printing",
  "Final artwork",
  "Data file",
  "Photographs",
  "Photo-to-record matching",
  "Required QR/barcode information",
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

export function BulkChecklistExplorer() {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
  });

  const toggleCheck = (idx: number) => {
    setCheckedItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const checkAll = () => {
    const all: Record<number, boolean> = {};
    bulkChecklistItems.forEach((_, i) => (all[i] = true));
    setCheckedItems(all);
  };

  const resetAll = () => {
    setCheckedItems({});
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / bulkChecklistItems.length) * 100);

  return (
    <section className="mt-16 sm:mt-20">
      <div className="rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 lg:p-10 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#009fe3]/10 dark:bg-cyan-500/10 text-[#009fe3] dark:text-cyan-400 border border-[#009fe3]/20 shadow-md">
              <Boxes className="h-6 w-6" />
            </div>
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                Institutional Quality Standard
              </span>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                Bulk ID Card Project Checklist
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block">
                Readiness Score
              </span>
              <span className="text-sm font-black text-[#009fe3] dark:text-cyan-400">
                {completedCount} of {bulkChecklistItems.length} Confirmed ({progressPercent}%)
              </span>
            </div>
            <button
              onClick={checkAll}
              className="rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-[#009fe3] hover:text-white px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 transition"
            >
              Select All
            </button>
            <button
              onClick={resetAll}
              title="Reset Checklist"
              className="rounded-xl border border-slate-200 dark:border-slate-700 p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white transition"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#009fe3] via-cyan-400 to-emerald-400 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* 20 Checklist Items Grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {bulkChecklistItems.map((item, idx) => {
            const isChecked = Boolean(checkedItems[idx]);

            return (
              <div
                key={idx}
                onClick={() => toggleCheck(idx)}
                className={`flex items-center gap-3 p-3.5 rounded-2xl border-2 transition-all duration-200 cursor-pointer select-none ${
                  isChecked
                    ? "border-emerald-500/70 bg-emerald-50/50 dark:bg-emerald-950/20 text-slate-900 dark:text-white shadow-2xs"
                    : "border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:border-slate-300"
                }`}
              >
                <div
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-lg border transition ${
                    isChecked
                      ? "bg-emerald-500 border-emerald-500 text-white"
                      : "border-slate-400 dark:border-slate-600 bg-white dark:bg-slate-800"
                  }`}
                >
                  {isChecked && <Check className="h-3.5 w-3.5" />}
                </div>
                <span className="text-xs font-bold leading-snug">{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
