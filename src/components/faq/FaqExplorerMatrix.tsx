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

export interface CategorizedFaqSection {
  name: string;
  badge: string;
  iconName?: string;
  relatedHref?: string;
  relatedLabel?: string;
  faqs: Faq[];
}

export const faqDataCategories: CategorizedFaqSection[] = [
  {
    name: "General",
    badge: "Company & Capabilities",
    relatedHref: "/why-idgen/",
    relatedLabel: "Why IDGen",
    faqs: [
      {
        q: "What does IDGen do?",
        a: "IDGen provides customized ID cards, printed lanyards, RFID cards, event badges, ID card accessories and digital identity workflows for organizations.",
      },
      {
        q: "Where is IDGen based?",
        a: "IDGen is based in Guwahati, Assam and serves organizations across Assam and the wider Northeast India market.",
      },
      {
        q: "Does IDGen handle bulk ID card printing?",
        a: "Yes. IDGen supports institutional and high-volume identification requirements, with actual capacity depending on product and project specifications.",
      },
    ],
  },
  {
    name: "ID Cards",
    badge: "Card Products & Formats",
    relatedHref: "/id-card-printing/",
    relatedLabel: "Explore ID Card Printing",
    faqs: [
      {
        q: "Can I order only ID cards?",
        a: "Yes. ID cards can be ordered without accessories where required.",
      },
      {
        q: "Can I order a complete ID card setup?",
        a: "Yes. Depending on the requirement, a setup can include an ID card, holder, hook, custom printed lanyard and applicable ultrasonic sealing.",
      },
      {
        q: "Can ID cards contain QR codes?",
        a: "Yes, where required. The actual function of a QR code depends on the supporting system or application.",
      },
      {
        q: "Can ID cards contain barcodes?",
        a: "Yes. Barcodes can be included according to the identification requirement.",
      },
    ],
  },
  {
    name: "Student ID Cards",
    badge: "Educational Institutions",
    relatedHref: "/student-id-card-printing/",
    relatedLabel: "Explore Student ID Cards",
    faqs: [
      {
        q: "Does IDGen print student ID cards?",
        a: "Yes. IDGen provides customized student ID cards for schools, colleges, universities and educational organizations.",
      },
      {
        q: "Can student ID cards be ordered in bulk?",
        a: "Yes. Institutional and high-volume student ID card projects are supported.",
      },
    ],
  },
  {
    name: "Employee ID Cards",
    badge: "Corporate & Staff",
    relatedHref: "/employee-id-card-printing/",
    relatedLabel: "Explore Employee ID Cards",
    faqs: [
      {
        q: "Does IDGen print employee ID cards?",
        a: "Yes. IDGen provides customized employee and staff identification for companies, offices, hospitals, industries and institutions.",
      },
    ],
  },
  {
    name: "Lanyards & Accessories",
    badge: "Wearable Hardware",
    relatedHref: "/custom-printed-lanyard-printing/",
    relatedLabel: "Explore Custom Lanyards",
    faqs: [
      {
        q: "Does IDGen provide custom printed lanyards?",
        a: "Yes. Custom printed lanyards can be supplied as part of an identification setup.",
      },
      {
        q: "Can I order holders separately?",
        a: "Yes. ID card holders can be supplied separately or combined with other identification products.",
      },
      {
        q: "Can I order hooks separately?",
        a: "Yes. ID card hooks and suitable attachments can be supplied according to the required configuration.",
      },
    ],
  },
  {
    name: "RFID",
    badge: "Smart Cards & Chips",
    relatedHref: "/rfid-card-printing/",
    relatedLabel: "Explore RFID Cards",
    faqs: [
      {
        q: "Does IDGen provide RFID cards?",
        a: "Yes. RFID cards can be produced according to the required RFID technology and compatible system specifications.",
      },
      {
        q: "Can you guarantee RFID compatibility without checking my system?",
        a: "No. RFID specifications should be confirmed against the reader/system and required technology before production.",
      },
    ],
  },
  {
    name: "IDGen Studio",
    badge: "Digital Identity Workflow",
    relatedHref: "/idgen-studio/",
    relatedLabel: "Explore IDGen Studio",
    faqs: [
      {
        q: "What is IDGen Studio?",
        a: "IDGen Studio is the digital identity workflow used to connect data collection and personalized ID card production for suitable projects.",
      },
      {
        q: "Can people submit their information through a QR code?",
        a: "The master content describes customized forms, shareable links and QR-code-based collection as part of the applicable IDGen Studio workflow.",
      },
      {
        q: "Can organizations review submissions before printing?",
        a: "Yes, for suitable IDGen Studio projects.",
      },
      {
        q: "Can approved records be printed batch-wise?",
        a: "Yes, where the configured IDGen Studio workflow supports batch production.",
      },
    ],
  },
  {
    name: "Pricing",
    badge: "Reference Rates & Quotes",
    relatedHref: "/pricing/",
    relatedLabel: "View Pricing Tiers",
    faqs: [
      {
        q: "How much does an ID card cost?",
        a: "The master pricing page uses reference pricing rather than a universal final price. Current reference prices documented in the master are ₹15 for single-side PVC ID card printing, ₹16 for double-side printing, ₹15 for a 20 mm custom printed lanyard, ₹35 for an event card and ₹45 for an RFID ID card, subject to specifications and order conditions.",
      },
      {
        q: "Is the listed price the final price?",
        a: "No. Final pricing depends on quantity, specifications, personalization, accessories and applicable delivery conditions.",
      },
    ],
  },
  {
    name: "Service Areas",
    badge: "Regional Coverage",
    relatedHref: "/service-areas/",
    relatedLabel: "Explore Service Areas",
    faqs: [
      {
        q: "Does IDGen serve only Guwahati?",
        a: "No. Guwahati is the primary base, while IDGen serves organizations across Assam and the wider Northeast India market.",
      },
      {
        q: "Does a city page mean IDGen has an office there?",
        a: "No. A city service-area page represents service coverage unless a physical branch is specifically listed. This distinction is already used throughout the master location architecture.",
      },
    ],
  },
  {
    name: "Data & Confidentiality",
    badge: "Security & Privacy",
    relatedHref: "/privacy-policy/",
    relatedLabel: "Privacy Policy",
    faqs: [
      {
        q: "Does IDGen handle identification information confidentially?",
        a: "IDGen treats customer-provided identification information as confidential project information and handles it for the agreed identification-related purpose.",
      },
      {
        q: "What information should an organization provide?",
        a: "Only information required for the identification project should be provided. Depending on the project, this may include names, photographs, identification numbers, classes, courses, departments, designations, QR-code information and barcode information.",
      },
    ],
  },
];

interface FaqExplorerMatrixProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}

export function FaqExplorerMatrix({
  selectedCategory,
  setSelectedCategory,
}: FaqExplorerMatrixProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Auto-expand first few questions or active search results
  useEffect(() => {
    if (searchQuery.trim() !== "") {
      const allOpen: Record<string, boolean> = {};
      faqDataCategories.forEach((cat) => {
        cat.faqs.forEach((faq, i) => {
          allOpen[`${cat.name}-${i}`] = true;
        });
      });
      setOpenItems(allOpen);
    }
  }, [searchQuery]);

  const toggleAccordion = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const copyAnswer = (faq: Faq, id: string) => {
    navigator.clipboard.writeText(`${faq.q}\n\n${faq.a}`);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Filter logic
  const filteredCategories = faqDataCategories
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
            <span>Interactive Knowledge Base</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white mt-2 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
            Search or filter through verified answers covering factory production, digital workflows, wearable hardware, and regional fulfillment.
          </p>
        </div>

        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          Showing {totalAnswerCount} of 25 Verified Questions
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
              25
            </span>
          </button>

          {faqDataCategories.map((cat) => (
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
                  const isOpen = openItems[itemId] !== undefined ? openItems[itemId] : idx === 0 && selectedCategory !== "all";

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
