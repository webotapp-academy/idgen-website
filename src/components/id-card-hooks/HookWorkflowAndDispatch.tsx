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
  MessageSquare,
} from "lucide-react";
import { FlowChain } from "@/components/ui/FlowChain";

export const hookOrderingSteps = [
  {
    num: "01",
    title: "01 — Tell Us Your Requirement",
    body: "Provide the required quantity and application.",
    badge: "Requirement",
  },
  {
    num: "02",
    title: "02 — Share Your Holder Details",
    body: "Tell us the holder model if known. For example: V-1 / V-2 / H-1 / H-2.",
    badge: "Holder Details",
  },
  {
    num: "03",
    title: "03 — Confirm Attachment",
    body: "Specify whether you require: One hook, Two hooks, Fish hook, or another compatible attachment.",
    badge: "Attachment",
  },
  {
    num: "04",
    title: "04 — Confirm Lanyard",
    body: "If required, specify your lanyard type and width.",
    badge: "Lanyard",
  },
  {
    num: "05",
    title: "05 — Confirm Quantity",
    body: "Confirm the number of complete sets or individual hooks required.",
    badge: "Quantity",
  },
  {
    num: "06",
    title: "06 — Order Confirmation",
    body: "After the configuration and quantity are confirmed, the order can be processed according to the applicable product requirements.",
    badge: "Confirmation",
  },
];

export const bulkRequirementsList = [
  "School batches",
  "Employee onboarding",
  "Institutional identification",
  "Events",
  "Membership programmes",
  "Visitor identification",
  "Annual ID-card replacement",
];

export function HookWorkflowAndDispatch() {
  return (
    <div className="space-y-16 sm:space-y-20 mt-16 sm:mt-20">
      {/* ═════════════════════════════════════════════════════════════
          1. HOOKS FOR COMPLETE IDENTIFICATION SETS
          ═════════════════════════════════════════════════════════════ */}
      <div className="relative overflow-hidden rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 lg:p-10 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
              <Layers className="h-4 w-4" />
              <span>Complete Identification Sets</span>
            </span>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
              Hooks for Complete Identification Sets
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              Hooks can be supplied as part of a complete identification configuration.
            </p>
          </div>

          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            The exact components depend on the application.
          </span>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Basic */}
          <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/50 p-5 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Tier 01
              </span>
              <h4 className="text-base font-extrabold text-slate-900 dark:text-white mt-1">
                Basic
              </h4>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                ID Card + Holder
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 font-mono text-[11px] font-bold text-slate-700 dark:text-slate-300">
              ID Card + Holder
            </div>
          </div>

          {/* Wearable */}
          <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/50 p-5 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                Tier 02
              </span>
              <h4 className="text-base font-extrabold text-slate-900 dark:text-white mt-1">
                Wearable
              </h4>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                ID Card + Holder + Hook + Lanyard
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 font-mono text-[11px] font-bold text-[#009fe3] dark:text-cyan-400">
              ID Card + Holder + Hook + Lanyard
            </div>
          </div>

          {/* Branded Wearable Setup */}
          <div className="rounded-2xl border-2 border-sky-300 dark:border-cyan-500/50 bg-sky-50/50 dark:bg-slate-850 p-5 flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                  Tier 03
                </span>
                <span className="rounded-full bg-[#009fe3] text-white px-2 py-0.5 text-[9px] font-black">
                  BRANDED
                </span>
              </div>
              <h4 className="text-base font-extrabold text-slate-900 dark:text-white mt-1">
                Branded Wearable Setup
              </h4>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                ID Card + Holder + Hook + Custom Printed Lanyard
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-sky-200 dark:border-slate-700 font-mono text-[11px] font-bold text-slate-900 dark:text-white">
              Card + Holder + Hook + Custom Lanyard
            </div>
          </div>

          {/* Complete Identification Setup */}
          <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/50 p-5 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-500">
                Tier 04
              </span>
              <h4 className="text-base font-extrabold text-slate-900 dark:text-white mt-1">
                Complete Setup
              </h4>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Card + Holder + Attachment + Lanyard
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 font-mono text-[11px] font-bold text-emerald-500">
              Card + Holder + Attachment + Lanyard
            </div>
          </div>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════
          2. ID CARD HOOKS FOR BULK ORDERS
          ═════════════════════════════════════════════════════════════ */}
      <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-6 sm:p-8 lg:p-10 space-y-6">
        <div className="space-y-2">
          <span className="text-[11px] font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
            Institutional Supply
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            ID Card Hooks for Bulk Orders
          </h2>
        </div>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 max-w-3xl">
          ID card hooks are commonly ordered in quantities matching institutional or organizational identification requirements.
        </p>

        <div className="space-y-3">
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
            Bulk requirements may include:
          </span>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {bulkRequirementsList.map((req, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 rounded-xl bg-white dark:bg-slate-900 p-3 border border-slate-200/60 dark:border-slate-800"
              >
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">{req}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-white dark:bg-slate-950 p-5 border border-slate-200/80 dark:border-slate-800 space-y-2">
          <span className="text-[11px] font-black uppercase text-[#009fe3] dark:text-cyan-400">
            When requesting a bulk quotation, provide:
          </span>
          <p className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200 leading-relaxed">
            Quantity + Holder Type + Hook Type + Lanyard Requirement
          </p>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 pt-1">
            This helps ensure that the components are compatible before the order is prepared.
          </p>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════
          3. HOW TO ORDER ID CARD HOOKS (6 Steps)
          ═════════════════════════════════════════════════════════════ */}
      <div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200/90 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
              <Clock className="h-3.5 w-3.5" />
              <span>Order Process</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-2">
              How to Order ID Card Hooks
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
              Follow these 6 steps to coordinate a compatible bulk identification setup.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hookOrderingSteps.map((step) => (
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
          4. 72-HOUR DISPATCH COMMITMENT
          ═════════════════════════════════════════════════════════════ */}
      <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 lg:p-10 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#009fe3] text-white shadow-lg shadow-[#009fe3]/30">
              <Truck className="h-6 w-6" />
            </div>
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                Dispatch Commitment
              </span>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                72-Hour Dispatch
              </h3>
            </div>
          </div>

          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1.5 rounded-full border border-emerald-500/30">
            Eligible Approved Orders
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
          For eligible approved orders, IDGen&apos;s applicable dispatch commitment is:
        </p>

        <div className="pt-2">
          <FlowChain steps={["Confirmation + Payment", "Preparation", "Quality Check", "Dispatch"]} />
        </div>

        <div className="border-t border-slate-100 dark:border-slate-800 pt-4 text-[11px] text-slate-500 dark:text-slate-400 space-y-2 leading-relaxed">
          <p>
            Where the 72-hour dispatch commitment applies, it refers to dispatch from IDGen, not final courier delivery. Courier transit time is additional.
          </p>
          <p>
            For large or customized requirements, timing may depend on: Quantity, Product availability, Holder configuration, Hook configuration, Lanyard requirement, and Order specifications.
          </p>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════
          5. NEED ID CARD HOOKS? (Closing Section)
          ═════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0B1320] via-[#0e1a2e] to-[#071525] px-6 py-12 text-white sm:px-12 sm:py-16 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,159,227,0.25),rgba(255,255,255,0))] pointer-events-none" />
        <div className="pointer-events-none absolute -top-28 right-0 h-80 w-80 rounded-full bg-cyan-400/15 blur-[100px]" />

        <div className="relative z-10 space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold text-cyan-300 backdrop-blur-xs border border-white/10">
              <Sparkles className="h-3.5 w-3.5 text-cyan-300 animate-pulse" />
              <span>IDGen Identification Attachments</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Need ID Card Hooks?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Whether you need hooks for student ID cards, employee cards, institutional identification or events, IDGen can help coordinate the appropriate attachment with your holder and lanyard configuration.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 max-w-xl">
            <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-widest block mb-1.5">
              Tell Us:
            </span>
            <p className="text-xs font-mono font-bold text-white tracking-wide">
              Card/Holder + Hook Requirement + Lanyard + Quantity
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/request-a-quote/"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#009fe3] hover:bg-[#008bc9] px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-[#009fe3]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#009fe3]/50 hover:-translate-y-0.5"
            >
              <span>Request a Quote</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/id-card-holders/"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:border-cyan-300 hover:text-cyan-300 hover:-translate-y-0.5"
            >
              <span>Explore ID Card Holders</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/custom-printed-lanyard-printing/"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:border-cyan-300 hover:text-cyan-300 hover:-translate-y-0.5"
            >
              <span>Explore Custom Printed Lanyard Printing</span>
            </Link>
            <Link
              href="/contact-us/"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:border-cyan-300 hover:text-cyan-300 hover:-translate-y-0.5"
            >
              <span>Contact IDGen</span>
            </Link>
          </div>

          <div className="pt-8 border-t border-white/10 space-y-1.5 text-[11px] text-slate-400">
            <p className="font-bold text-slate-350 uppercase tracking-widest text-[9px] text-[#009fe3] dark:text-cyan-400">
              IDGen — ID Card Attachments
            </p>
            <p className="font-bold text-white text-xs">
              Connect Your Card. Wear Your Identity.
            </p>
            <p className="font-mono text-slate-300">
              ID Card → Holder → Hook → Lanyard
            </p>
            <p className="text-[10px] text-slate-500">
              IDGen — Identity Solutions Simplified
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
