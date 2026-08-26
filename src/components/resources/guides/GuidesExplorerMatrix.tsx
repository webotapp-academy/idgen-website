"use client";

import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import {
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Boxes,
  GraduationCap,
  Briefcase,
  Layers,
  Radio,
  Sparkles,
  Ticket,
  QrCode,
  Calculator,
  Search,
  Filter,
  X,
  ExternalLink,
  ChevronRight,
  Shield,
  FileCheck2,
  Info,
  Maximize2,
  Grid,
  List,
  Check,
  Share2,
  Copy,
  Clock,
} from "lucide-react";
import { FlowChain } from "@/components/ui/FlowChain";

export interface GuideItem {
  number: string;
  title: string;
  category: "bulk" | "student" | "employee" | "accessories" | "events" | "tech" | "quote";
  body: string;
  listLabel?: string;
  list?: string[];
  workflow?: string[];
  note?: string;
  relatedHref?: string;
  icon: React.ElementType;
  tag: string;
  readTime: string;
  accentGradient: string;
  iconColor: string;
  badgeBg: string;
}

export const allGuides: GuideItem[] = [
  {
    number: "01",
    title: "How to Plan a Bulk ID Card Printing Project",
    category: "bulk",
    body: "Understand the information, photographs, quantity, card specifications, design approval and production requirements needed for a large ID card project.",
    relatedHref: "/id-card-printing/",
    icon: Boxes,
    tag: "Bulk Planning",
    readTime: "3 min read",
    accentGradient: "from-sky-500/10 via-cyan-500/5 to-transparent",
    iconColor: "text-[#009fe3] bg-sky-500/10 border-sky-500/20",
    badgeBg: "bg-sky-50 dark:bg-sky-950/50 text-[#009fe3] dark:text-cyan-300 border-sky-200/60 dark:border-sky-800",
  },
  {
    number: "02",
    title: "Student ID Card Requirements Checklist",
    category: "student",
    body: "Learn what schools and educational institutions should prepare before ordering student ID cards.",
    listLabel: "Typical information can include:",
    list: [
      "Student name",
      "Photograph",
      "Student ID / admission number",
      "Class",
      "Course",
      "Institution name",
      "QR code or barcode where required",
      "Required accessories",
    ],
    relatedHref: "/student-id-card-printing/",
    icon: GraduationCap,
    tag: "Education Checklist",
    readTime: "4 min read",
    accentGradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
    iconColor: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    badgeBg: "bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-300 border-blue-200/60 dark:border-blue-800",
  },
  {
    number: "03",
    title: "Employee ID Card Requirements",
    category: "employee",
    body: "A practical guide to preparing employee information, photographs, departments, designations, employee IDs and branding.",
    relatedHref: "/employee-id-card-printing/",
    icon: Briefcase,
    tag: "Corporate Roster",
    readTime: "3 min read",
    accentGradient: "from-cyan-500/10 via-teal-500/5 to-transparent",
    iconColor: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20",
    badgeBg: "bg-cyan-50 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-300 border-cyan-200/60 dark:border-cyan-800",
  },
  {
    number: "04",
    title: "ID Card + Holder + Hook + Lanyard: Which Setup Do You Need?",
    category: "accessories",
    body: "Understand the difference between different identification configurations:",
    list: [
      "Card only",
      "Card + holder",
      "Card + holder + hook + lanyard",
      "Complete wearable setup",
    ],
    note: "The master architecture already defines these as different identification configurations rather than separate customer types.",
    relatedHref: "/id-card-holders/",
    icon: Layers,
    tag: "Hardware Setups",
    readTime: "4 min read",
    accentGradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    iconColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    badgeBg: "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-300 border-emerald-200/60 dark:border-emerald-800",
  },
  {
    number: "05",
    title: "How to Choose an ID Card Holder",
    category: "accessories",
    body: "Understand portrait vs landscape orientation, holder type, card dimensions and attachment requirements.",
    relatedHref: "/id-card-holders/",
    icon: Layers,
    tag: "Holders & Attachments",
    readTime: "3 min read",
    accentGradient: "from-teal-500/10 via-cyan-500/5 to-transparent",
    iconColor: "text-teal-500 bg-teal-500/10 border-teal-500/20",
    badgeBg: "bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-300 border-teal-200/60 dark:border-teal-800",
  },
  {
    number: "06",
    title: "What Information Is Needed for RFID Card Printing?",
    category: "tech",
    body: "Before ordering RFID cards, organizations should provide the applicable RFID technology, frequency, chip, reader/system compatibility, card format and personalization requirements.",
    relatedHref: "/rfid-card-printing/",
    icon: Radio,
    tag: "Smart RFID",
    readTime: "4 min read",
    accentGradient: "from-purple-500/10 via-indigo-500/5 to-transparent",
    iconColor: "text-purple-500 bg-purple-500/10 border-purple-500/20",
    badgeBg: "bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-300 border-purple-200/60 dark:border-purple-800",
  },
  {
    number: "07",
    title: "Custom Printed Lanyard Planning Guide",
    category: "accessories",
    body: "Understand artwork, branding, colors, width and attachment requirements before ordering custom printed lanyards.",
    relatedHref: "/custom-printed-lanyard-printing/",
    icon: Sparkles,
    tag: "Lanyards",
    readTime: "3 min read",
    accentGradient: "from-amber-500/10 via-orange-500/5 to-transparent",
    iconColor: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    badgeBg: "bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-300 border-amber-200/60 dark:border-amber-800",
  },
  {
    number: "08",
    title: "Event Badge Planning Guide",
    category: "events",
    body: "Plan participant categories such as:",
    list: [
      "Delegate",
      "Speaker",
      "Organizer",
      "VIP",
      "Exhibitor",
      "Staff",
      "Volunteer",
    ],
    relatedHref: "/event-card-printing/",
    icon: Ticket,
    tag: "Events & Summits",
    readTime: "3 min read",
    accentGradient: "from-rose-500/10 via-orange-500/5 to-transparent",
    iconColor: "text-rose-500 bg-rose-500/10 border-rose-500/20",
    badgeBg: "bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-300 border-rose-200/60 dark:border-rose-800",
  },
  {
    number: "09",
    title: "How IDGen Studio Can Simplify ID Card Data Collection",
    category: "tech",
    body: "Understand the digital collection and preview workflow:",
    workflow: [
      "Form",
      "QR/Link",
      "Data & Photo",
      "Preview",
      "Organization Review",
      "Approval",
      "Production",
    ],
    note: "The master file specifically positions IDGen Studio around digital collection, preview, review, approval and batch production.",
    relatedHref: "/idgen-studio/",
    icon: QrCode,
    tag: "Digital Workflow",
    readTime: "5 min read",
    accentGradient: "from-cyan-500/15 via-sky-500/10 to-transparent",
    iconColor: "text-cyan-400 bg-cyan-500/20 border-cyan-400/30",
    badgeBg: "bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-300 border-cyan-300 dark:border-cyan-800",
  },
  {
    number: "10",
    title: "How to Prepare for Your ID Card Quote",
    category: "quote",
    body: "Before requesting a quotation, prepare:",
    list: [
      "Organization name",
      "City/state",
      "Product required",
      "Quantity",
      "Card specification",
      "Printing requirement",
      "Accessories",
      "Delivery location",
      "Existing artwork, if available",
      "Data readiness",
      "Required timeline",
    ],
    relatedHref: "/request-a-quote/",
    icon: Calculator,
    tag: "Quotation Prep",
    readTime: "4 min read",
    accentGradient: "from-slate-500/10 via-slate-400/5 to-transparent",
    iconColor: "text-slate-600 dark:text-slate-300 bg-slate-500/10 border-slate-500/20",
    badgeBg: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700",
  },
];

export function GuidesExplorerMatrix() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedGuideModal, setSelectedGuideModal] = useState<GuideItem | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setSelectedGuideModal(null);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const copyGuideChecklist = (guide: GuideItem) => {
    const textToCopy = `${guide.title}\n\n${guide.body}\n${
      guide.list ? guide.list.map((l) => `- ${l}`).join("\n") : ""
    }${guide.workflow ? `\nWorkflow: ${guide.workflow.join(" → ")}` : ""}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedIndex(guide.number);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const filteredGuides = allGuides.filter((guide) => {
    const matchesCat = activeCategory === "all" || guide.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      q === "" ||
      guide.title.toLowerCase().includes(q) ||
      guide.body.toLowerCase().includes(q) ||
      guide.tag.toLowerCase().includes(q) ||
      (guide.list && guide.list.some((l) => l.toLowerCase().includes(q))) ||
      (guide.workflow && guide.workflow.some((w) => w.toLowerCase().includes(q)));

    return matchesCat && matchesSearch;
  });

  return (
    <section className="mt-10 sm:mt-14" id="guides-explorer">
      {/* ── Section Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200/90 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Featured Documentation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white mt-2 tracking-tight">
            Featured Identification Guides
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
            Step-by-step checklists, specification sheets, and project workflows designed to help organizations plan and manage identification projects.
          </p>
        </div>

        {/* View Switcher Controls */}
        <div className="flex items-center gap-2 self-start md:self-auto bg-slate-100 dark:bg-slate-800/80 p-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-700">
          <button
            onClick={() => setViewMode("grid")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-extrabold transition ${
              viewMode === "grid"
                ? "bg-white dark:bg-slate-900 text-[#009fe3] shadow-xs"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Grid className="h-3.5 w-3.5" />
            <span>Grid Cards</span>
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-extrabold transition ${
              viewMode === "list"
                ? "bg-white dark:bg-slate-900 text-[#009fe3] shadow-xs"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <List className="h-3.5 w-3.5" />
            <span>Expanded Flow</span>
          </button>
        </div>
      </div>

      {/* ── Search & Filter Controls ── */}
      <div className="mt-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {[
            { id: "all", label: "All Guides", count: 10 },
            { id: "bulk", label: "Bulk Projects", count: 1 },
            { id: "student", label: "Student IDs", count: 1 },
            { id: "employee", label: "Employee IDs", count: 1 },
            { id: "accessories", label: "Holders & Lanyards", count: 3 },
            { id: "tech", label: "RFID & IDGen Studio", count: 2 },
            { id: "events", label: "Event Badges", count: 1 },
            { id: "quote", label: "Quote Preparation", count: 1 },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-[#009fe3] text-white shadow-md shadow-[#009fe3]/25 scale-[1.02]"
                  : "bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-[#009fe3]/60 hover:bg-sky-50/50 dark:hover:bg-slate-800"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  activeCategory === cat.id
                    ? "bg-white/20 text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full lg:w-72">
          <input
            type="text"
            placeholder="Search guides, checklists, specs..."
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

      {/* ═════════════════════════════════════════════════════════════
          1. GRID VIEW MODE (2-Column Ultra-Premium Visual Cards)
          ═════════════════════════════════════════════════════════════ */}
      {viewMode === "grid" && (
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {filteredGuides.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900/95 p-6 sm:p-7 shadow-sm hover:shadow-2xl hover:border-[#009fe3]/80 dark:hover:border-cyan-500/60 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Ambient Top Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.accentGradient} opacity-50 pointer-events-none`}
                />

                <div className="relative z-10 space-y-4">
                  {/* Top Bar with Number, Icon, Badges & Copy */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#009fe3] to-[#0284c7] font-mono text-xs font-black text-white shadow-md shadow-[#009fe3]/25">
                        {item.number}
                      </span>
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-xl border ${item.iconColor}`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[10px] font-extrabold uppercase border ${item.badgeBg}`}
                      >
                        {item.tag}
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => copyGuideChecklist(item)}
                        title="Copy Guide Checklist"
                        className="rounded-lg p-1.5 text-slate-400 hover:text-[#009fe3] hover:bg-sky-50 dark:hover:bg-slate-800 transition"
                      >
                        {copiedIndex === item.number ? (
                          <Check className="h-3.5 w-3.5 text-emerald-500" />
                        ) : (
                          <Copy className="h-3.5 w-3.5" />
                        )}
                      </button>
                      <button
                        onClick={() => setSelectedGuideModal(item)}
                        title="Expand 360° Modal"
                        className="rounded-lg p-1.5 text-slate-400 hover:text-[#009fe3] hover:bg-sky-50 dark:hover:bg-slate-800 transition"
                      >
                        <Maximize2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Title & Body */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-950 dark:text-white group-hover:text-[#009fe3] dark:group-hover:text-cyan-400 transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
                      {item.body}
                    </p>
                  </div>

                  {/* List / Checklist Pills */}
                  {item.list && (
                    <div className="space-y-2 pt-1">
                      {item.listLabel && (
                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                          {item.listLabel}
                        </span>
                      )}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {item.list.slice(0, 6).map((listItem, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 rounded-xl bg-slate-50/90 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60 px-2.5 py-1.5 text-[11px] font-semibold text-slate-800 dark:text-slate-200"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
                            <span className="truncate">{listItem}</span>
                          </div>
                        ))}
                      </div>
                      {item.list.length > 6 && (
                        <p className="text-[10px] font-bold text-[#009fe3] dark:text-cyan-400 pl-1">
                          + {item.list.length - 6} more checklist parameters
                        </p>
                      )}
                    </div>
                  )}

                  {/* Workflow Chain */}
                  {item.workflow && (
                    <div className="mt-2 rounded-2xl border border-cyan-400/30 bg-gradient-to-r from-sky-50/80 to-white dark:from-slate-850 dark:to-slate-800 p-3 shadow-inner">
                      <span className="text-[9px] font-mono font-black uppercase text-[#009fe3] dark:text-cyan-400 block mb-1.5">
                        Digital Workflow Sequence:
                      </span>
                      <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-bold text-slate-800 dark:text-slate-200">
                        {item.workflow.map((st, i) => (
                          <React.Fragment key={i}>
                            <span className="rounded-md bg-white dark:bg-slate-900 px-2 py-0.5 border border-slate-200/80 dark:border-slate-700">
                              {st}
                            </span>
                            {i < item.workflow!.length - 1 && (
                              <span className="text-[#009fe3] font-bold">→</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Note Callout */}
                  {item.note && (
                    <div className="rounded-xl border border-sky-200/70 dark:border-cyan-900/50 bg-sky-50/60 dark:bg-sky-950/30 p-3 text-[11px] leading-relaxed text-slate-700 dark:text-slate-300 flex items-start gap-2">
                      <Info className="h-3.5 w-3.5 text-[#009fe3] shrink-0 mt-0.5" />
                      <span>{item.note}</span>
                    </div>
                  )}
                </div>

                {/* Bottom Card Action Footer */}
                <div className="relative z-10 mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-400">
                    <Clock className="h-3 w-3" />
                    <span>{item.readTime}</span>
                  </span>

                  {item.relatedHref && (
                    <Link
                      href={item.relatedHref}
                      className="group/btn inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3]/10 hover:bg-[#009fe3] dark:bg-cyan-500/10 dark:hover:bg-[#009fe3] px-3.5 py-1.5 text-xs font-extrabold text-[#009fe3] hover:text-white dark:text-cyan-300 dark:hover:text-white transition-all duration-200"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ═════════════════════════════════════════════════════════════
          2. EXPANDED LIST VIEW MODE (Full-Width Rich Layout)
          ═════════════════════════════════════════════════════════════ */}
      {viewMode === "list" && (
        <div className="mt-8 space-y-6">
          {filteredGuides.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="group relative rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm hover:shadow-2xl hover:border-[#009fe3]/70 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1 space-y-4">
                    {/* Header Row */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 font-mono text-sm font-black text-[#009fe3] dark:text-cyan-400">
                        {item.number}
                      </span>
                      <span
                        className={`rounded-full px-3 py-1 text-[11px] font-bold border ${item.badgeBg}`}
                      >
                        {item.tag}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white group-hover:text-[#009fe3] dark:group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    {/* Main Body */}
                    <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
                      {item.body}
                    </p>

                    {/* Optional List Label */}
                    {item.listLabel && (
                      <p className="text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 pt-1">
                        {item.listLabel}
                      </p>
                    )}

                    {/* Optional Bullet List */}
                    {item.list && (
                      <div className="grid gap-2 sm:grid-cols-2 pt-1">
                        {item.list.map((listItem, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2.5 rounded-xl border border-slate-200/70 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/50 px-3.5 py-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs"
                          >
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                            <span>{listItem}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Optional Workflow Chain */}
                    {item.workflow && (
                      <div className="mt-3 rounded-2xl border-2 border-cyan-400/30 bg-gradient-to-r from-sky-50/80 via-white to-sky-50/50 dark:from-slate-850 dark:via-slate-800 dark:to-slate-850 p-4 shadow-inner">
                        <span className="text-[10px] font-mono font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 block mb-2">
                          Digital Workflow Sequence
                        </span>
                        <FlowChain steps={item.workflow} dark={false} />
                      </div>
                    )}

                    {/* Optional Note */}
                    {item.note && (
                      <div className="rounded-xl border border-sky-200/70 dark:border-cyan-900/50 bg-sky-50/60 dark:bg-sky-950/30 p-3.5 text-xs leading-relaxed text-slate-700 dark:text-slate-300 flex items-start gap-2.5">
                        <Info className="h-4 w-4 text-[#009fe3] shrink-0 mt-0.5" />
                        <span>{item.note}</span>
                      </div>
                    )}
                  </div>

                  {/* Related Page Deep-Link */}
                  {item.relatedHref && (
                    <div className="shrink-0 pt-2 lg:pt-0">
                      <Link
                        href={item.relatedHref}
                        className="group/btn inline-flex items-center gap-2 rounded-2xl border-2 border-[#009fe3]/30 bg-sky-50/50 dark:bg-slate-800/80 px-5 py-3 text-xs font-extrabold text-[#009fe3] dark:text-cyan-400 shadow-xs transition-all duration-200 hover:border-[#009fe3] hover:bg-[#009fe3] hover:text-white dark:hover:bg-[#009fe3] dark:hover:text-white hover:shadow-md hover:-translate-y-0.5"
                      >
                        <span>Explore Service Page</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ═════════════════════════════════════════════════════════════
          360° INTERACTIVE GUIDE MODAL DRAWER
          ═════════════════════════════════════════════════════════════ */}
      {selectedGuideModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-fadeIn">
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border-2 border-[#009fe3]/50 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-2xl space-y-6"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedGuideModal(null)}
              className="absolute top-5 right-5 rounded-full bg-slate-100 dark:bg-slate-800 p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#009fe3] font-mono text-base font-black text-white shadow-md">
                {selectedGuideModal.number}
              </span>
              <div className="space-y-1">
                <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-[10px] font-bold text-slate-600 dark:text-slate-300">
                  {selectedGuideModal.tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white">
                  {selectedGuideModal.title}
                </h3>
              </div>
            </div>

            {/* Body */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
              <p>{selectedGuideModal.body}</p>

              {/* List */}
              {selectedGuideModal.list && (
                <div className="space-y-2">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 block">
                    {selectedGuideModal.listLabel || "Checklist Parameters:"}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedGuideModal.list.map((li, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 rounded-xl bg-slate-50 dark:bg-slate-800 p-2.5 border border-slate-200/80 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200"
                      >
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span>{li}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Workflow */}
              {selectedGuideModal.workflow && (
                <div className="rounded-2xl border-2 border-cyan-400/30 bg-sky-50/70 dark:bg-slate-850 p-4 space-y-2">
                  <span className="text-[10px] font-mono font-black uppercase text-[#009fe3] dark:text-cyan-400 block">
                    Digital Flow Pipeline:
                  </span>
                  <FlowChain steps={selectedGuideModal.workflow} dark={false} />
                </div>
              )}

              {/* Note */}
              {selectedGuideModal.note && (
                <div className="rounded-xl bg-sky-50 dark:bg-sky-950/40 p-3.5 border border-sky-200 dark:border-cyan-900/60 text-xs text-slate-700 dark:text-slate-300">
                  <strong>Note: </strong> {selectedGuideModal.note}
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => copyGuideChecklist(selectedGuideModal)}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2.5 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 transition"
              >
                {copiedIndex === selectedGuideModal.number ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                    <span>Checklist Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy Full Checklist</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-2">
                {selectedGuideModal.relatedHref && (
                  <Link
                    href={selectedGuideModal.relatedHref}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] hover:bg-[#008bc9] text-white px-5 py-2.5 text-xs font-extrabold shadow-md transition"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
