"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Clock,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Truck,
  PackageCheck,
  Layers,
  Boxes,
  Award,
} from "lucide-react";
import { FlowChain } from "@/components/ui/FlowChain";

export const orderingSteps = [
  {
    num: "01",
    title: "1. Mold & 3D Artwork Design",
    body: "We convert your logo or emblem into a 3D high-relief vector proof showing exact bevels and text depth.",
    badge: "3D Design",
  },
  {
    num: "02",
    title: "2. Die-Casting & Electroplating",
    body: "High-pressure zinc die-casting followed by electroplating in antique gold, silver, or bronze.",
    badge: "Electroplate",
  },
  {
    num: "03",
    title: "3. Ribbon Sublimation & Assembly",
    body: "Matching 25mm satin neck ribbons printed in full color and stitched to the medal loop.",
    badge: "Satin Ribbon",
  },
  {
    num: "04",
    title: "4. QC & Bulk Express Delivery",
    body: "Each medal is individually polybagged and shipped across Guwahati, Shillong, Itanagar and all NE states.",
    badge: "Delivery",
  },
];

export function MedalWorkflowAndDispatch() {
  return (
    <div className="space-y-16 sm:space-y-20 mt-16 sm:mt-20">
      {/* ═════════════════════════════════════════════════════════════
          1. HOW CUSTOM ZINC MEDALS ARE PRODUCED (4 Steps)
          ═════════════════════════════════════════════════════════════ */}
      <div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200/90 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
              <Clock className="h-3.5 w-3.5" />
              <span>Manufacturing Steps</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-2">
              How Custom Zinc Medals Are Produced
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
              From 3D digital vector proofs and steel mold engraving to die-casting, electroplating, and ribbon assembly.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {orderingSteps.map((step) => (
            <div
              key={step.num}
              className="relative rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-2xl font-black text-[#009fe3] dark:text-cyan-400">
                  {step.num}
                </span>
                <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase">
                  {step.badge}
                </span>
              </div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════
          2. 7-10 DAY PRODUCTION & BULK DISPATCH PIPELINE
          ═════════════════════════════════════════════════════════════ */}
      <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 lg:p-10 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#009fe3] text-white shadow-lg shadow-[#009fe3]/30">
              <Truck className="h-6 w-6" />
            </div>
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                Regional Hub Fulfillment
              </span>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                Northeast India Express Dispatch
              </h3>
            </div>
          </div>

          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1.5 rounded-full border border-emerald-500/30">
            Guwahati Direct Center
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl font-normal">
          Custom steel mold engraving and high-volume zinc die-casting follow a strict, reliable timeline:
        </p>

        <div className="pt-2">
          <FlowChain steps={["3D Vector Proof", "Steel Die Tooling", "Zinc Die-Casting", "Electroplating", "Ribbon Stitch", "Guwahati Dispatch"]} />
        </div>

        <div className="border-t border-slate-100 dark:border-slate-800 pt-4 text-[11px] text-slate-500 dark:text-slate-400 space-y-2 leading-relaxed">
          <p>
            Each medal is individually packed in protective sleeves, and batches are sorted by category (Gold, Silver, Bronze) for effortless event day distribution.
          </p>
          <p>
            Direct delivery to sports complexes, schools, universities, and corporate offices across all 8 Northeast states.
          </p>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════
          3. READY TO PLAN YOUR AWARDS? (Closing Banner)
          ═════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0B1320] via-[#0e1a2e] to-[#071525] px-6 py-12 text-white sm:px-12 sm:py-16 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,159,227,0.25),rgba(255,255,255,0))] pointer-events-none" />
        <div className="pointer-events-none absolute -top-28 right-0 h-80 w-80 rounded-full bg-cyan-400/15 blur-[100px]" />

        <div className="relative z-10 space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold text-cyan-300 backdrop-blur-xs border border-white/10">
              <Sparkles className="h-3.5 w-3.5 text-cyan-300 animate-pulse" />
              <span>Championship &amp; Recognition Awards</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Planning a Sports Meet, Marathon or Annual Awards?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Get instant 3D digital artwork proofs and factory-direct pricing for custom die-cast zinc medals with customized satin neck ribbons.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/request-a-quote/"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#009fe3] hover:bg-[#008bc9] px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-[#009fe3]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#009fe3]/50 hover:-translate-y-0.5"
            >
              <span>Request Medal Quote</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/event-card-printing/"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:border-cyan-300 hover:text-cyan-300 hover:-translate-y-0.5"
            >
              <span>Event Card Credentials</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/products/"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:border-cyan-300 hover:text-cyan-300 hover:-translate-y-0.5"
            >
              <span>View All Products</span>
            </Link>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] text-slate-400">
            <p className="font-mono text-slate-300">
              IDGen — Custom Die-Cast Zinc Medals &amp; Tournament Awards
            </p>
            <p>Guwahati, Assam • Direct Factory Supply Across Northeast India</p>
          </div>
        </div>
      </section>
    </div>
  );
}
