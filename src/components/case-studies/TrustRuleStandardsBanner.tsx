"use client";

import React from "react";
import {
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Lock,
  FileCheck2,
} from "lucide-react";

export const trustRuleItems = [
  "Organization name",
  "Location",
  "Organization type",
  "Requirement",
  "Quantity, where permitted",
  "Product configuration",
  "Project photographs",
  "Customer logo",
  "Workflow",
  "Outcome",
  "Testimonial",
];

export function TrustRuleStandardsBanner() {
  return (
    <div className="space-y-8 mt-16 sm:mt-20">
      {/* ── Trust Standards Card ── */}
      <div className="rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 lg:p-10 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 shadow-md">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Integrity Standard
              </span>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                Important Trust Rule
              </h3>
            </div>
          </div>

          <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1.5 rounded-full border border-emerald-500/30">
            Real Evidence Only
          </span>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl font-normal">
          Only real projects should be published. Where customer permission is available, a case study can include:
        </p>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {trustRuleItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/60 px-3.5 py-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-50/60 dark:bg-emerald-950/30 p-4 text-xs font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">
          The master file specifically recommends using real customer evidence rather than unsupported claims such as &ldquo;best&rdquo; or &ldquo;number one.&rdquo;
        </div>
      </div>

      {/* ── No Invented Case Studies Policy ── */}
      <div className="rounded-3xl border-2 border-amber-500/30 bg-amber-50/40 dark:bg-amber-950/20 p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-3">
          <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-400 shrink-0" />
          <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
            No Invented Case Studies Policy
          </h3>
        </div>

        <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          If a project cannot be publicly identified, use a neutral description such as:
        </p>

        <div className="rounded-2xl border border-amber-500/30 bg-white/90 dark:bg-slate-900/90 p-4 shadow-sm">
          <span className="font-extrabold text-slate-900 dark:text-white text-sm">
            Educational Institution — Assam
          </span>
          <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
            Student ID cards supplied for institutional use.
          </p>
        </div>

        <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
          Do not create fake client names, fake testimonials or fake project photographs.
        </p>
      </div>
    </div>
  );
}
