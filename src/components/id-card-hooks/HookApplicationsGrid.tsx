"use client";

import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  Briefcase,
  Ticket,
  Building2,
  Users,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

export const hookUsesList = [
  {
    title: "Student Identification",
    desc: "Hooks can connect student ID card holders to school or institutional lanyards.",
    link: { label: "Explore Student ID Card Printing", href: "/student-id-card-printing/" },
    icon: GraduationCap,
    gradient: "from-sky-500/10 via-blue-500/5 to-transparent",
    accentColor: "text-[#009fe3]",
    tag: "Schools & Colleges",
  },
  {
    title: "Employee Identification",
    desc: "Suitable hook configurations can be used with employee and staff identification.",
    link: { label: "Explore Employee ID Card Printing", href: "/employee-id-card-printing/" },
    icon: Briefcase,
    gradient: "from-cyan-500/10 via-sky-500/5 to-transparent",
    accentColor: "text-cyan-500",
    tag: "Corporate & Staff",
  },
  {
    title: "Events",
    desc: "Hooks can be used with suitable event-card and lanyard configurations.",
    link: { label: "Explore Event Card Printing", href: "/event-card-printing/" },
    icon: Ticket,
    gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
    accentColor: "text-amber-500",
    tag: "Conferences & Summits",
  },
  {
    title: "Institutions",
    desc: "Suitable for organizational, institutional and membership identification systems. The final configuration should always be matched to the holder and card being used.",
    icon: Building2,
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    accentColor: "text-emerald-500",
    tag: "Organizations & Memberships",
  },
];

export const commonWearableUses = [
  "Student identification",
  "Employee identification",
  "Staff identification",
  "Visitor identification",
  "Event badges",
  "Membership identification",
  "Institutional identification",
];

export function HookApplicationsGrid() {
  return (
    <section className="mt-16 sm:mt-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Applications</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-2">
            ID Card Hook Uses
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
            ID card hooks can be used with different identification applications.
          </p>
        </div>

        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          Wearable Identification Systems
        </div>
      </div>

      {/* Main 4 Uses Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {hookUsesList.map((item, idx) => {
          const Icon = item.icon;

          return (
            <div
              key={idx}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-xl hover:border-[#009fe3]/70 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-40 pointer-events-none`}
              />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-white dark:bg-slate-800 shadow-md ${item.accentColor}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-0.5 text-[10px] font-bold text-slate-700 dark:text-slate-300">
                    {item.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-black text-slate-900 dark:text-white group-hover:text-[#009fe3] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.desc}
                  </p>
                </div>
              </div>

              {item.link ? (
                <div className="relative z-10 mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                  <Link
                    href={item.link.href}
                    className="inline-flex items-center gap-1.5 text-xs font-black text-[#009fe3] dark:text-cyan-400 group-hover:underline"
                  >
                    <span>{item.link.label}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              ) : (
                <div className="relative z-10 mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 text-xs font-bold text-slate-500">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Matched Configuration</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Common Uses Strip */}
      <div className="mt-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-6">
        <span className="text-[11px] font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 block mb-3">
          Hooks are commonly used as part of wearable identification systems for:
        </span>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {commonWearableUses.map((use, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{use}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
