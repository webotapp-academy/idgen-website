"use client";

import React from "react";
import {
  FileCheck2,
  Sparkles,
  Layers,
  ArrowRight,
  CheckCircle2,
  Box,
  MapPin,
  Camera,
  MessageSquare,
  ClipboardList,
} from "lucide-react";
import { FlowChain } from "@/components/ui/FlowChain";

export const formatSteps = [
  { num: "01", name: "Organization", desc: "Who the project was for.", icon: Box },
  { num: "02", name: "Location", desc: "City and state.", icon: MapPin },
  { num: "03", name: "Requirement", desc: "What the organization needed.", icon: ClipboardList },
  { num: "04", name: "Product", desc: "Cards, lanyards, holders, hooks, RFID or other products.", icon: Layers },
  {
    num: "05",
    name: "Workflow",
    desc: "Data → Design → Preview → Approval → Production → Quality Check → Dispatch.",
    icon: FileCheck2,
    hasWorkflow: true,
  },
  { num: "06", name: "Finished Project", desc: "Real photographs of the completed products.", icon: Camera },
  { num: "07", name: "Project Notes", desc: "Important specifications or lessons from the project.", icon: Sparkles },
  { num: "08", name: "Customer Feedback", desc: "Only with permission.", icon: MessageSquare },
];

const standardWorkflowSteps = [
  "Data",
  "Design",
  "Preview",
  "Approval",
  "Production",
  "Quality Check",
  "Dispatch",
];

export function CaseStudyFormatTimeline() {
  return (
    <section className="mt-16 sm:mt-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200/90 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
            <ClipboardList className="h-3.5 w-3.5" />
            <span>Standardized Structure</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mt-2">
            Case Study Format
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
            Each published case study follows the same 8-part documentation structure:
          </p>
        </div>

        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          8 Standardized Documentation Fields
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {formatSteps.map((step) => {
          const Icon = step.icon;

          return (
            <div
              key={step.num}
              className="group relative flex flex-col justify-between rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-xl hover:border-[#009fe3]/60 transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-black text-[#009fe3] dark:text-cyan-400 bg-sky-50 dark:bg-slate-800 px-2 py-0.5 rounded-lg border border-sky-200/60 dark:border-slate-700">
                    Step {step.num}
                  </span>
                  <Icon className="h-4 w-4 text-slate-400 group-hover:text-[#009fe3] transition-colors" />
                </div>

                <h3 className="text-base font-black text-slate-900 dark:text-white group-hover:text-[#009fe3] dark:group-hover:text-cyan-400 transition-colors">
                  {step.name}
                </h3>
                <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                  {step.desc}
                </p>

                {step.hasWorkflow && (
                  <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <FlowChain steps={standardWorkflowSteps} dark={false} />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
