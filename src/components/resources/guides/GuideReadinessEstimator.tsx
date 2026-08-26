"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  HelpCircle,
  FileCheck2,
  RotateCcw,
} from "lucide-react";

interface ReadinessItem {
  id: string;
  label: string;
  sub: string;
  weight: number;
}

const checklistItems: ReadinessItem[] = [
  {
    id: "org",
    label: "Organization & Delivery Location",
    sub: "Organization name, city/state, and primary dispatch address confirmed",
    weight: 15,
  },
  {
    id: "product",
    label: "Product Required & Estimated Quantity",
    sub: "Target card count and product type (Student, Employee, Event, RFID)",
    weight: 20,
  },
  {
    id: "specs",
    label: "Card Specifications & Printing Mode",
    sub: "Single vs dual-sided, CR80 standard PVC, glossy/matte finish, or smart RFID chip",
    weight: 20,
  },
  {
    id: "data",
    label: "Personalized Information & Photos",
    sub: "Excel/CSV roster spreadsheet or ready for IDGen Studio digital link/QR collection",
    weight: 20,
  },
  {
    id: "acc",
    label: "Accessories & Wearable Hardware",
    sub: "Card holder model (V/H series), 360° swivel fish hook, and custom printed lanyards",
    weight: 15,
  },
  {
    id: "timeline",
    label: "Target Timeline & Artwork Readiness",
    sub: "Existing vector logo branding and desired completion/distribution deadline",
    weight: 10,
  },
];

export function GuideReadinessEstimator() {
  const [checkedIds, setCheckedIds] = useState<string[]>([
    "org",
    "product",
    "specs",
  ]);

  const toggleItem = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculateScore = () => {
    return checklistItems.reduce((acc, item) => {
      return checkedIds.includes(item.id) ? acc + item.weight : acc;
    }, 0);
  };

  const score = calculateScore();

  return (
    <section className="mt-16 sm:mt-20">
      <div className="relative overflow-hidden rounded-3xl border-2 border-[#009fe3]/40 bg-gradient-to-br from-slate-900 via-[#07172c] to-[#040e1c] p-6 sm:p-8 lg:p-10 text-white shadow-2xl">
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -top-28 -right-28 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Interactive Checklist */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-cyan-300">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Guide 10 Interactive Tool</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black mt-2">
                Project Readiness Estimator
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Check what items your organization has ready to determine your production timeline and quotation accuracy.
              </p>
            </div>

            <div className="space-y-2.5">
              {checklistItems.map((item) => {
                const isChecked = checkedIds.includes(item.id);

                return (
                  <div
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className={`flex items-start gap-3.5 p-3.5 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${
                      isChecked
                        ? "border-cyan-400/80 bg-cyan-950/40 text-white shadow-sm"
                        : "border-white/10 bg-white/[0.04] text-slate-400 hover:border-white/20 hover:text-slate-200"
                    }`}
                  >
                    <div
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-lg border mt-0.5 transition ${
                        isChecked
                          ? "bg-[#009fe3] border-[#009fe3] text-white shadow-xs"
                          : "border-slate-500 bg-slate-900"
                      }`}
                    >
                      {isChecked && <CheckCircle2 className="h-4 w-4" />}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-extrabold text-white">
                        {item.label}
                      </h4>
                      <p className="text-[11px] text-slate-300 mt-0.5">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Score Meter & Action */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 rounded-3xl border-2 border-white/15 bg-white/[0.06] p-6 sm:p-8 backdrop-blur-md">
            <div>
              <span className="text-[11px] font-mono font-black uppercase text-cyan-300 tracking-wider block mb-2">
                Project Readiness Score
              </span>

              <div className="flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl font-black text-white">
                  {score}%
                </span>
                <span className="text-xs font-bold text-slate-300">
                  {score === 100
                    ? "Ready for Instant Production"
                    : score >= 60
                    ? "Ready for Quote & Proofing"
                    : "Planning Phase"}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mt-4 h-3 w-full rounded-full bg-slate-800 border border-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#009fe3] via-cyan-400 to-emerald-400 transition-all duration-500"
                  style={{ width: `${score}%` }}
                />
              </div>

              {/* Recommendation Box */}
              <div className="mt-6 rounded-2xl bg-black/40 border border-white/10 p-4 text-xs space-y-2">
                <span className="text-[10px] font-black uppercase text-cyan-300 block">
                  Next Step Recommendation
                </span>
                <p className="text-slate-200 leading-relaxed font-medium">
                  {score >= 70
                    ? "Your project parameters are well-defined. Submit your quotation request to receive factory-direct wholesale pricing and instant digital layout proofs."
                    : "For projects with pending data, IDGen Studio can deploy customized digital collection forms to gather photographs and student/employee records automatically."}
                </p>
              </div>
            </div>

            <div className="space-y-2.5 pt-2">
              <Link
                href="/request-a-quote/"
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-[#009fe3] hover:bg-[#008bc9] py-3.5 text-xs font-extrabold text-white shadow-lg shadow-[#009fe3]/30 transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Request a Project Quote</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/idgen-studio/"
                className="flex w-full items-center justify-center gap-1.5 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 py-3 text-xs font-bold text-white transition hover:border-cyan-300 hover:text-cyan-300"
              >
                <span>Explore IDGen Studio Data Flow</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
