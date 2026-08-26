"use client";

import React from "react";
import Link from "next/link";
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

export const faqTopicCards = [
  {
    category: "General",
    title: "Capabilities & Northeast Reach",
    desc: "IDGen provides customized ID cards, lanyards, RFID cards, event badges and digital workflows from our Guwahati, Assam hub.",
    icon: Boxes,
    gradient: "from-sky-500/10 via-blue-500/5 to-transparent",
    accentColor: "text-[#009fe3]",
    linkText: "View General FAQs",
    targetCategory: "General",
  },
  {
    category: "ID Cards",
    title: "Cards & Complete Setups",
    desc: "Order single cards or complete wearable sets with protective holders, hooks, custom printed lanyards, and ultrasonic sealing.",
    icon: Layers,
    gradient: "from-cyan-500/10 via-sky-500/5 to-transparent",
    accentColor: "text-cyan-500",
    linkText: "View ID Card FAQs",
    targetCategory: "ID Cards",
  },
  {
    category: "IDGen Studio",
    title: "Digital Data Collection",
    desc: "Collect student or employee records via online forms and shareable QR links with live digital card previews before printing.",
    icon: QrCode,
    gradient: "from-purple-500/10 via-indigo-500/5 to-transparent",
    accentColor: "text-purple-500",
    linkText: "View Studio FAQs",
    targetCategory: "IDGen Studio",
  },
  {
    category: "Pricing",
    title: "Transparent Reference Pricing",
    desc: "Reference rates: ₹15 single-side PVC, ₹16 double-side PVC, ₹15 custom 20mm lanyard, ₹35 event card, and ₹45 RFID card.",
    icon: Calculator,
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    accentColor: "text-emerald-500",
    linkText: "View Pricing FAQs",
    targetCategory: "Pricing",
  },
  {
    category: "RFID",
    title: "RFID Chip Compatibility",
    desc: "RFID cards are manufactured according to your required frequency, chip model, and reader/system compatibility specifications.",
    icon: Radio,
    gradient: "from-indigo-500/10 via-blue-500/5 to-transparent",
    accentColor: "text-indigo-500",
    linkText: "View RFID FAQs",
    targetCategory: "RFID",
  },
  {
    category: "Data & Privacy",
    title: "Confidential Data Security",
    desc: "All customer-provided identification information, photographs, and records are treated as strictly confidential project data.",
    icon: Lock,
    gradient: "from-rose-500/10 via-orange-500/5 to-transparent",
    accentColor: "text-rose-500",
    linkText: "View Privacy FAQs",
    targetCategory: "Data & Confidentiality",
  },
];

interface FaqTopicMatrixProps {
  onSelectCategory: (categoryName: string) => void;
}

export function FaqTopicMatrix({ onSelectCategory }: FaqTopicMatrixProps) {
  return (
    <section className="mt-16 sm:mt-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Topic Highlights</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-2">
            Explore Questions by Topic
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
            Quickly navigate to answers covering pricing, digital data collection, wearable hardware, and technical compatibility.
          </p>
        </div>

        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          6 Core Knowledge Areas
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {faqTopicCards.map((topic, idx) => {
          const Icon = topic.icon;

          return (
            <div
              key={idx}
              onClick={() => onSelectCategory(topic.targetCategory)}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-xl hover:border-[#009fe3]/70 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${topic.gradient} opacity-50 pointer-events-none`}
              />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white dark:bg-slate-800 shadow-md ${topic.accentColor}`}
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
