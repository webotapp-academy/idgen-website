"use client";

import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  Briefcase,
  Ticket,
  Radio,
  Layers,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export const caseCategories = [
  {
    title: "Student ID Card Projects",
    desc: "Examples may include school, college or university identification projects.",
    requirementLabel: "Typical requirement:",
    requirement: "Student data + photographs + PVC ID cards + lanyards + holders.",
    icon: GraduationCap,
    gradient: "from-sky-500/10 via-blue-500/5 to-transparent",
    accentColor: "text-[#009fe3]",
    link: "/student-id-card-printing/",
    tag: "Education",
  },
  {
    title: "Employee Identification Projects",
    desc: "Employee and staff identification for companies, offices, hospitals, industries and institutions.",
    requirementLabel: "Typical requirement:",
    requirement: "Employee roster + department designations + photo matching + staff badges.",
    icon: Briefcase,
    gradient: "from-cyan-500/10 via-sky-500/5 to-transparent",
    accentColor: "text-cyan-500",
    link: "/employee-id-card-printing/",
    tag: "Corporate",
  },
  {
    title: "Event Identification Projects",
    desc: "Event cards, delegate badges, organizer badges, VIP identification and lanyard configurations.",
    requirementLabel: "Typical requirement:",
    requirement: "Tiered participant credentials + two-hook rigging + fast turnaround.",
    icon: Ticket,
    gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
    accentColor: "text-amber-500",
    link: "/event-card-printing/",
    tag: "Conferences",
  },
  {
    title: "RFID Identification Projects",
    desc: "Projects requiring printed RFID cards according to a compatible RFID system.",
    requirementLabel: "Typical requirement:",
    requirement: "Compatible RFID chip + frequency alignment + reader protocol verification.",
    icon: Radio,
    gradient: "from-purple-500/10 via-indigo-500/5 to-transparent",
    accentColor: "text-purple-500",
    link: "/rfid-card-printing/",
    tag: "Smart Chips",
  },
  {
    title: "Complete Wearable Identification",
    desc: "Projects combining ID Card + Holder + Hook + Custom Printed Lanyard or applicable complete configurations.",
    requirementLabel: "Typical requirement:",
    requirement: "Card + Holder + Hook + Custom Printed Lanyard complete assembly.",
    icon: Layers,
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    accentColor: "text-emerald-500",
    link: "/id-card-holders/",
    tag: "Full Setups",
  },
];

export function CaseStudyCategoriesGrid() {
  return (
    <section className="mt-16 sm:mt-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Sector Categories</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-2">
            Case Study Categories
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
            Explore project case studies structured across academic, corporate, event, and smart technology domains.
          </p>
        </div>

        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          5 Core Project Domains
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {caseCategories.map((cat, idx) => {
          const Icon = cat.icon;

          return (
            <div
              key={idx}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-xl hover:border-[#009fe3]/70 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-50 pointer-events-none`}
              />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white dark:bg-slate-800 shadow-md ${cat.accentColor}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-0.5 text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase">
                    {cat.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white group-hover:text-[#009fe3] dark:group-hover:text-cyan-400 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-slate-600 dark:text-slate-400 font-normal">
                    {cat.desc}
                  </p>
                </div>

                {cat.requirement && (
                  <div className="rounded-xl bg-slate-50/90 dark:bg-slate-800/80 p-3 border border-slate-200/60 dark:border-slate-700/60 text-xs">
                    <span className="text-[10px] font-black uppercase text-[#009fe3] dark:text-cyan-400 block mb-0.5">
                      {cat.requirementLabel}
                    </span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {cat.requirement}
                    </span>
                  </div>
                )}
              </div>

              <div className="relative z-10 mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-[#009fe3] dark:text-cyan-400">
                <Link href={cat.link} className="hover:underline flex items-center gap-1.5">
                  <span>Explore Service</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
