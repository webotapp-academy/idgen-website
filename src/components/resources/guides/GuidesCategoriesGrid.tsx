"use client";

import React from "react";
import Link from "next/link";
import {
  Boxes,
  GraduationCap,
  Briefcase,
  Layers,
  Ticket,
  Radio,
  Calculator,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  BookOpen,
  Tag,
  Award,
} from "lucide-react";
import type { DynamicCategoriesGrid } from "@/lib/dynamic-guides-types";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  Boxes,
  GraduationCap,
  Briefcase,
  Layers,
  Ticket,
  Radio,
  Calculator,
  Sparkles,
  BookOpen,
  Tag,
  Award,
};

export function GuidesCategoriesGrid({ data }: { data: DynamicCategoriesGrid }) {
  const categories = data?.categories || [];

  return (
    <section className="mt-16 sm:mt-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{data?.eyebrow || "Sector Architecture"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-2">
            {data?.title || "Guide Categories"}
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
            {data?.lede ||
              "Browse our comprehensive documentation by industry sector, identification hardware, and digital technology."}
          </p>
        </div>

        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          {data?.badgeText || `${categories.length} Specialized Resource Categories`}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((cat, idx) => {
          const Icon = CATEGORY_ICONS[cat.iconName] || Boxes;

          return (
            <Link
              key={idx}
              href={cat.link}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-xl hover:border-[#009fe3]/70 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  cat.gradient || "from-sky-500/10 via-blue-500/5 to-transparent"
                } opacity-40 pointer-events-none`}
              />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white dark:bg-slate-800 shadow-md ${
                      cat.accentColor || "text-[#009fe3]"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-0.5 text-[10px] font-bold text-slate-700 dark:text-slate-300">
                    {cat.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-black text-slate-900 dark:text-white group-hover:text-[#009fe3] dark:group-hover:text-cyan-400 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-400 font-normal">
                    {cat.desc}
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-[#009fe3] dark:text-cyan-400">
                <span>View Service Guide</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
