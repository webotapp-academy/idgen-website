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
import type { DynamicIdCardHooksWorkflowAndDispatch } from "@/lib/dynamic-id-card-hooks-types";

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

const defaultTiers = [
  {
    tier: "Tier 01",
    name: "Basic",
    desc: "ID Card + Holder",
    setupFormula: "ID Card + Holder",
  },
  {
    tier: "Tier 02",
    name: "Wearable",
    desc: "ID Card + Holder + Hook + Lanyard",
    setupFormula: "ID Card + Holder + Hook + Lanyard",
  },
  {
    tier: "Tier 03",
    name: "Branded Wearable Setup",
    desc: "ID Card + Holder + Hook + Custom Printed Lanyard",
    setupFormula: "Card + Holder + Hook + Custom Lanyard",
    isBranded: true,
    badge: "BRANDED",
  },
  {
    tier: "Tier 04",
    name: "Complete Setup",
    desc: "Card + Holder + Attachment + Lanyard",
    setupFormula: "Card + Holder + Attachment + Lanyard",
  },
];

export function HookWorkflowAndDispatch({
  data,
}: {
  data?: DynamicIdCardHooksWorkflowAndDispatch;
}) {
  const activeTiers = data?.tiers && data.tiers.length > 0 ? data.tiers : defaultTiers;
  const activeBulkReqs =
    data?.bulkRequirements && data.bulkRequirements.length > 0
      ? data.bulkRequirements
      : bulkRequirementsList;
  const activeOrderingSteps =
    data?.orderingSteps && data.orderingSteps.length > 0
      ? data.orderingSteps
      : hookOrderingSteps;
  const activeFlowSteps =
    data?.dispatchFlowSteps && data.dispatchFlowSteps.length > 0
      ? data.dispatchFlowSteps
      : ["Confirmation + Payment", "Preparation", "Quality Check", "Dispatch"];
  const activeDisclaimers =
    data?.dispatchDisclaimers && data.dispatchDisclaimers.length > 0
      ? data.dispatchDisclaimers
      : [
          "Where the 72-hour dispatch commitment applies, it refers to dispatch from IDGen, not final courier delivery. Courier transit time is additional.",
          "For large or customized requirements, timing may depend on: Quantity, Product availability, Holder configuration, Hook configuration, Lanyard requirement, and Order specifications.",
        ];

  const completeSetsBadge = data?.completeSetsBadge || "Complete Identification Sets";
  const completeSetsTitle = data?.completeSetsTitle || "Hooks for Complete Identification Sets";
  const completeSetsLede =
    data?.completeSetsLede || "Hooks can be supplied as part of a complete identification configuration.";
  const completeSetsNote =
    data?.completeSetsNote || "The exact components depend on the application.";

  const bulkBadge = data?.bulkBadge || "Institutional Supply";
  const bulkTitle = data?.bulkTitle || "ID Card Hooks for Bulk Orders";
  const bulkLede =
    data?.bulkLede ||
    "ID card hooks are commonly ordered in quantities matching institutional or organizational identification requirements.";
  const bulkFormulaTitle = data?.bulkFormulaTitle || "When requesting a bulk quotation, provide:";
  const bulkFormula =
    data?.bulkFormula || "Quantity + Holder Type + Hook Type + Lanyard Requirement";
  const bulkFormulaNote =
    data?.bulkFormulaNote ||
    "This helps ensure that the components are compatible before the order is prepared.";

  const orderProcessBadge = data?.orderProcessBadge || "Order Process";
  const orderProcessTitle = data?.orderProcessTitle || "How to Order ID Card Hooks";
  const orderProcessLede =
    data?.orderProcessLede ||
    "Follow these 6 steps to coordinate a compatible bulk identification setup.";

  const dispatchBadge = data?.dispatchBadge || "Dispatch Commitment";
  const dispatchTitle = data?.dispatchTitle || "72-Hour Dispatch";
  const dispatchEligibleTag = data?.dispatchEligibleTag || "Eligible Approved Orders";
  const dispatchLede =
    data?.dispatchLede || "For eligible approved orders, IDGen's applicable dispatch commitment is:";

  const closingCtaBadge = data?.closingCtaBadge || "IDGen Identification Attachments";
  const closingCtaTitle = data?.closingCtaTitle || "Need ID Card Hooks?";
  const closingCtaLede =
    data?.closingCtaLede ||
    "Whether you need hooks for student ID cards, employee cards, institutional identification or events, IDGen can help coordinate the appropriate attachment with your holder and lanyard configuration.";
  const closingCtaTellUsTitle = data?.closingCtaTellUsTitle || "Tell Us:";
  const closingCtaTellUsFormula =
    data?.closingCtaTellUsFormula || "Card/Holder + Hook Requirement + Lanyard + Quantity";
  const closingCtaCategory = data?.closingCtaCategory || "IDGen — ID Card Attachments";
  const closingCtaHeadline =
    data?.closingCtaHeadline || "Connect Your Card. Wear Your Identity.";
  const closingCtaFormula = data?.closingCtaFormula || "ID Card → Holder → Hook → Lanyard";
  const closingCtaBranding = data?.closingCtaBranding || "IDGen — Identity Solutions Simplified";

  const closingButtons =
    data?.closingCtaButtons && data.closingCtaButtons.length > 0
      ? data.closingCtaButtons
      : [
          {
            label: "Request a Quote",
            href: "/request-a-quote/",
            primary: true,
          },
          {
            label: "Explore ID Card Holders",
            href: "/id-card-holders/",
          },
          {
            label: "Explore Custom Printed Lanyard Printing",
            href: "/custom-printed-lanyard-printing/",
          },
          {
            label: "Contact IDGen",
            href: "/contact-us/",
          },
        ];

  return (
    <div className="space-y-16 sm:space-y-20 mt-16 sm:mt-20 scroll-mt-28" id="hook-workflow-dispatch">
      {/* ═════════════════════════════════════════════════════════════
          1. HOOKS FOR COMPLETE IDENTIFICATION SETS
          ═════════════════════════════════════════════════════════════ */}
      <div className="relative overflow-hidden rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 lg:p-10 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
              <Layers className="h-4 w-4" />
              <span>{completeSetsBadge}</span>
            </span>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
              {completeSetsTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              {completeSetsLede}
            </p>
          </div>

          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            {completeSetsNote}
          </span>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {activeTiers.map((tier, idx) => {
            const isBranded = tier.isBranded;
            return (
              <div
                key={idx}
                className={`rounded-2xl p-5 flex flex-col justify-between ${
                  isBranded
                    ? "border-2 border-sky-300 dark:border-cyan-500/50 bg-sky-50/50 dark:bg-slate-850 shadow-md"
                    : "border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/50"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-black uppercase tracking-wider ${
                        isBranded
                          ? "text-[#009fe3] dark:text-cyan-400"
                          : idx === 3
                          ? "text-emerald-500"
                          : "text-slate-400 dark:text-slate-500"
                      }`}
                    >
                      {tier.tier}
                    </span>
                    {tier.badge && (
                      <span className="rounded-full bg-[#009fe3] text-white px-2 py-0.5 text-[9px] font-black">
                        {tier.badge}
                      </span>
                    )}
                  </div>
                  <h4 className="text-base font-extrabold text-slate-900 dark:text-white mt-1">
                    {tier.name}
                  </h4>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {tier.desc}
                  </p>
                </div>
                <div
                  className={`mt-4 pt-3 font-mono text-[11px] font-bold ${
                    isBranded
                      ? "border-t border-sky-200 dark:border-slate-700 text-slate-900 dark:text-white"
                      : idx === 3
                      ? "border-t border-slate-200/60 dark:border-slate-700/60 text-emerald-500"
                      : "border-t border-slate-200/60 dark:border-slate-700/60 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  {tier.setupFormula}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════
          2. ID CARD HOOKS FOR BULK ORDERS
          ═════════════════════════════════════════════════════════════ */}
      <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-6 sm:p-8 lg:p-10 space-y-6">
        <div className="space-y-2">
          <span className="text-[11px] font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
            {bulkBadge}
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            {bulkTitle}
          </h2>
        </div>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 max-w-3xl">
          {bulkLede}
        </p>

        <div className="space-y-3">
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
            Bulk requirements may include:
          </span>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {activeBulkReqs.map((req, idx) => (
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
            {bulkFormulaTitle}
          </span>
          <p className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200 leading-relaxed">
            {bulkFormula}
          </p>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 pt-1">
            {bulkFormulaNote}
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
              <span>{orderProcessBadge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-2">
              {orderProcessTitle}
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
              {orderProcessLede}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {activeOrderingSteps.map((step, idx) => (
            <div
              key={step.num || idx}
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
                {dispatchBadge}
              </span>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                {dispatchTitle}
              </h3>
            </div>
          </div>

          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1.5 rounded-full border border-emerald-500/30">
            {dispatchEligibleTag}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
          {dispatchLede}
        </p>

        <div className="pt-2">
          <FlowChain steps={activeFlowSteps} />
        </div>

        <div className="border-t border-slate-100 dark:border-slate-800 pt-4 text-[11px] text-slate-500 dark:text-slate-400 space-y-2 leading-relaxed">
          {activeDisclaimers.map((disc, idx) => (
            <p key={idx}>{disc}</p>
          ))}
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
              <span>{closingCtaBadge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              {closingCtaTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {closingCtaLede}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 max-w-xl">
            <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-widest block mb-1.5">
              {closingCtaTellUsTitle}
            </span>
            <p className="text-xs font-mono font-bold text-white tracking-wide">
              {closingCtaTellUsFormula}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            {closingButtons.map((btn, idx) => {
              if (btn.primary) {
                return (
                  <Link
                    key={idx}
                    href={btn.href}
                    className="group inline-flex items-center gap-2.5 rounded-full bg-[#009fe3] hover:bg-[#008bc9] px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-[#009fe3]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#009fe3]/50 hover:-translate-y-0.5"
                  >
                    <span>{btn.label}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                );
              }
              return (
                <Link
                  key={idx}
                  href={btn.href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:border-cyan-300 hover:text-cyan-300 hover:-translate-y-0.5"
                >
                  <span>{btn.label}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              );
            })}
          </div>

          <div className="pt-8 border-t border-white/10 space-y-1.5 text-[11px] text-slate-400">
            <p className="font-bold text-slate-350 uppercase tracking-widest text-[9px] text-[#009fe3] dark:text-cyan-400">
              {closingCtaCategory}
            </p>
            <p className="font-bold text-white text-xs">
              {closingCtaHeadline}
            </p>
            <p className="font-mono text-slate-300">
              {closingCtaFormula}
            </p>
            <p className="text-[10px] text-slate-500">
              {closingCtaBranding}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
