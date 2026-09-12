"use client";

import React from "react";
import {
  Boxes,
  GraduationCap,
  Briefcase,
  Layers,
  Radio,
  QrCode,
  Calculator,
  MapPin,
  Lock,
  ArrowRight,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import type { DynamicFaqTopicMatrix } from "@/lib/dynamic-faq-types";

const TOPIC_ICONS: Record<string, React.ElementType> = {
  Boxes,
  Layers,
  QrCode,
  Calculator,
  Radio,
  Lock,
  GraduationCap,
  Briefcase,
  MapPin,
  Sparkles,
  HelpCircle,
};

interface FaqTopicMatrixProps {
  data: DynamicFaqTopicMatrix;
  onSelectCategory: (categoryName: string) => void;
}

export function FaqTopicMatrix({ data, onSelectCategory }: FaqTopicMatrixProps) {
  const topics = data?.topics || [];

  return (
    <section className="mt-16 sm:mt-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{data?.eyebrow || "Topic Highlights"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-2">
            {data?.title || "Explore Questions by Topic"}
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
            {data?.lede ||
              "Quickly navigate to answers covering pricing, digital data collection, wearable hardware, and technical compatibility."}
          </p>
        </div>

        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          {data?.badgeText || `${topics.length} Core Knowledge Areas`}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic, idx) => {
          const Icon = TOPIC_ICONS[topic.iconName] || Boxes;

          return (
            <div
              key={idx}
              onClick={() => onSelectCategory(topic.targetCategory)}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-xl hover:border-[#009fe3]/70 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  topic.gradient || "from-sky-500/10 via-blue-500/5 to-transparent"
                } opacity-50 pointer-events-none`}
              />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white dark:bg-slate-800 shadow-md ${
                      topic.accentColor || "text-[#009fe3]"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-0.5 text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase">
                    {topic.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white group-hover:text-[#009fe3] dark:group-hover:text-cyan-400 transition-colors">
                    {topic.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-slate-600 dark:text-slate-400 font-normal">
                    {topic.desc}
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-[#009fe3] dark:text-cyan-400">
                <span>{topic.linkText}</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
