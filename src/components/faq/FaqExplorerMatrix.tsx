"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  HelpCircle,
  Search,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ChevronDown,
  X,
  Copy,
  Check,
  Filter,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import type { Faq } from "@/data/types";
import type { DynamicFaqExplorerMatrix, DynamicFaqCategorySection } from "@/lib/dynamic-faq-types";

export type CategorizedFaqSection = DynamicFaqCategorySection;

interface FaqExplorerMatrixProps {
  data: DynamicFaqExplorerMatrix;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}

export function FaqExplorerMatrix({
  data,
  selectedCategory,
  setSelectedCategory,
}: FaqExplorerMatrixProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = data?.categories || [];

  // Auto-expand first few questions or active search results
  useEffect(() => {
    if (searchQuery.trim() !== "") {
      const allOpen: Record<string, boolean> = {};
      categories.forEach((cat) => {
        cat.faqs.forEach((_, i) => {
          allOpen[`${cat.name}-${i}`] = true;
        });
      });
      setOpenItems(allOpen);
    }
  }, [searchQuery, categories]);

  const toggleAccordion = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const copyAnswer = (faq: Faq, id: string) => {
    navigator.clipboard.writeText(`${faq.q}\n\n${faq.a}`);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Filter logic
  const filteredCategories = categories
    .map((cat) => {
      const matchesCategory =
        selectedCategory === "all" ||
        cat.name.toLowerCase() === selectedCategory.toLowerCase();

      const q = searchQuery.toLowerCase().trim();
      const filteredFaqs = cat.faqs.filter((faq) => {
        if (q === "") return true;
        return (
          faq.q.toLowerCase().includes(q) ||
          faq.a.toLowerCase().includes(q) ||
          cat.name.toLowerCase().includes(q) ||
          cat.badge.toLowerCase().includes(q)
        );
      });

      return {
        ...cat,
        faqs: filteredFaqs,
        visible: matchesCategory && filteredFaqs.length > 0,
      };
    })
    .filter((cat) => cat.visible);

  const totalAllQuestions = categories.reduce((acc, cat) => acc + cat.faqs.length, 0);
  const totalAnswerCount = filteredCategories.reduce(
    (acc, cat) => acc + cat.faqs.length,
    0
  );

  return (
    <section className="mt-10 sm:mt-14" id="faq-explorer">
      {/* ── Section Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200/90 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>{data?.eyebrow || "Interactive Knowledge Base"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white mt-2 tracking-tight">
            {data?.title || "Frequently Asked Questions"}
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
            {data?.lede ||
              "Search or filter through verified answers covering factory production, digital workflows, wearable hardware, and regional fulfillment."}
          </p>
        </div>

        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          Showing {totalAnswerCount} of {totalAllQuestions} Verified Questions
        </div>
      </div>

      {/* ── Search & Filter Controls ── */}
      <div className="mt-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all duration-200 ${
              selectedCategory === "all"
                ? "bg-[#009fe3] text-white shadow-md shadow-[#009fe3]/25 scale-[1.02]"
                : "bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-[#009fe3]/60 hover:bg-sky-50/50 dark:hover:bg-slate-800"
            }`}
          >
            <span>All Questions</span>
            <span
              className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                selectedCategory === "all"
                  ? "bg-white/20 text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-500"
              }`}
            >
              {totalAllQuestions}
            </span>
          </button>

          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all duration-200 ${
                selectedCategory.toLowerCase() === cat.name.toLowerCase()
                  ? "bg-[#009fe3] text-white shadow-md shadow-[#009fe3]/25 scale-[1.02]"
                  : "bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-[#009fe3]/60 hover:bg-sky-50/50 dark:hover:bg-slate-800"
              }`}
            >
              <span>{cat.name}</span>
              <span
                className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  selectedCategory.toLowerCase() === cat.name.toLowerCase()
                    ? "bg-white/20 text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                }`}
              >
                {cat.faqs.length}
              </span>
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full lg:w-72">
          <input
            type="text"
            placeholder="Search all questions & answers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2.5 pl-9 text-xs font-semibold text-slate-900 dark:text-white placeholder-slate-400 focus:border-[#009fe3] focus:outline-hidden shadow-2xs"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 dark:hover:text-white"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* ── Categorized Questions List ── */}
      <div className="mt-8 space-y-10 sm:space-y-12">
        {filteredCategories.length === 0 ? (
          <div className="rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800 p-12 text-center space-y-3 bg-white dark:bg-slate-900">
            <HelpCircle className="h-10 w-10 text-slate-400 mx-auto" />
            <h3 className="text-lg font-black text-slate-900 dark:text-white">
              No matching questions found
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Try searching with different keywords or switch category filter to view all questions.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] text-white px-4 py-2 text-xs font-bold shadow-sm"
            >
              <span>Reset Search &amp; Filters</span>
            </button>
          </div>
        ) : (
          filteredCategories.map((category) => (
            <div
              key={category.name}
              className="rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Category Header */}
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800/80 pb-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex rounded-full border border-[#009fe3]/30 bg-sky-50 dark:bg-slate-800 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 shadow-2xs">
                    {category.name}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                    {category.name} Questions
                  </h3>
                </div>

                {category.relatedHref && (
                  <Link
                    href={category.relatedHref}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] dark:text-cyan-400 hover:underline self-start sm:self-auto"
                  >
                    <span>{category.relatedLabel || "Related Service"}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
              </div>

              {/* Accordion Questions */}
              <div className="space-y-3.5">
                {category.faqs.map((faq, idx) => {
                  const itemId = `${category.name}-${idx}`;
                  const isOpen =
                    openItems[itemId] !== undefined
                      ? openItems[itemId]
                      : idx === 0 && selectedCategory !== "all";

                  return (
                    <div
                      key={idx}
                      className={`overflow-hidden rounded-2xl border-2 transition-all duration-200 ${
                        isOpen
                          ? "border-[#009fe3]/70 bg-gradient-to-br from-sky-50/50 via-white to-sky-50/30 dark:from-slate-850 dark:via-slate-900 dark:to-slate-850 shadow-md"
                          : "border-slate-200/80 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700"
                      }`}
                    >
                      <button
                        onClick={() => toggleAccordion(itemId)}
                        className="flex w-full items-start justify-between p-4 sm:p-5 text-left transition-colors"
                      >
                        <div className="flex items-start gap-3.5 pr-4">
                          <span
                            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg font-mono text-[11px] font-black transition ${
                              isOpen
                                ? "bg-[#009fe3] text-white shadow-xs"
                                : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                            }`}
                          >
                            Q
                          </span>
                          <span className="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-snug">
                            {faq.q}
                          </span>
                        </div>

                        <div
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 ${
                            isOpen
                              ? "rotate-180 bg-[#009fe3] text-white border-[#009fe3]"
                              : "border-slate-200 dark:border-slate-700 text-slate-400 bg-white dark:bg-slate-800"
                          }`}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="border-t border-slate-100 dark:border-slate-800 px-4 sm:px-5 pb-5 pt-3 animate-fadeIn">
                          <div className="rounded-xl bg-white/80 dark:bg-slate-950/60 p-4 border border-slate-200/60 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                            <p className="flex-1">{faq.a}</p>

                            <div className="flex items-center gap-2 shrink-0 self-end sm:self-start">
                              <button
                                onClick={() => copyAnswer(faq, itemId)}
                                title="Copy Question & Answer"
                                className="inline-flex items-center gap-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-2.5 py-1 text-[11px] font-bold text-slate-600 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-slate-800 transition"
                              >
                                {copiedId === itemId ? (
                                  <>
                                    <Check className="h-3 w-3 text-emerald-500" />
                                    <span className="text-emerald-600">Copied!</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="h-3 w-3" />
                                    <span>Copy</span>
                                  </>
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
