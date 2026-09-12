"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Layers,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sliders,
  Filter,
  Check,
  Maximize2,
  X,
  ExternalLink,
  Zap,
  Info,
  Grid,
  List,
  Link2,
  Copy,
} from "lucide-react";

export interface HookSelectionItem {
  id: string;
  code: string;
  name: string;
  req: string;
  badge: string;
  setup: string;
  category: "fish" | "onehook" | "twohook" | "set";
  image: string;
  alt: string;
  tagline: string;
  description: string;
  popular?: boolean;
  suitable: string[];
  specs: { k: string; v: string }[];
}

export const hookSelectionCatalog: HookSelectionItem[] = [
  {
    id: "fish-hook",
    code: "Fish Hook",
    name: "Fish Hook for ID Cards",
    req: "Connect ID card holder or badge to a lanyard",
    badge: "Attachment",
    setup: "ID Card → Holder → Fish Hook → Lanyard",
    category: "fish",
    image: "/images/Lanyard with Hook Samples/Sample 18 .jpg",
    alt: "Fish hook attachment for ID card holder and lanyard",
    popular: true,
    tagline: "The fish hook is an attachment option used to connect a suitable ID card holder or badge to a lanyard.",
    description:
      "A fish hook is an attachment used to connect a compatible ID card holder or badge to a lanyard. A typical setup is: ID Card → Holder → Fish Hook → Lanyard. Compatibility should be confirmed before ordering in bulk.",
    suitable: [
      "ID cards",
      "Employee cards",
      "Student cards",
      "Visitor cards",
      "Event badges",
      "Membership cards",
      "Institutional badges",
    ],
    specs: [
      { k: "Product", v: "Fish Hook Attachment" },
      { k: "Configuration", v: "ID Card → Holder → Fish Hook → Lanyard" },
      { k: "Compatible Holder", v: "V-1, V-2, H-1, H-2 & Compatible Holders" },
      { k: "Lanyard Width", v: "20 mm Lanyard" },
      { k: "Card Format", v: "86 × 54 mm ID Card" },
      { k: "Application", v: "Wearable Identification Systems" },
    ],
  },
  {
    id: "one-hook",
    code: "One Hook",
    name: "One Hook Configuration",
    req: "Single attachment point for standard badging",
    badge: "Configuration A",
    setup: "ID Card / Holder + One Hook + Lanyard",
    category: "onehook",
    image: "/images/Lanyard with Hook Samples/Sample 17 .jpg",
    alt: "One hook configuration for ID card lanyards",
    popular: true,
    tagline: "ID Card / Holder + One Hook + Lanyard. Suitable where a single attachment point is required.",
    description:
      "Different identification projects may require different attachment arrangements. The One Hook configuration is suitable where a single attachment point is required for standard student, employee, or visitor identification.",
    suitable: [
      "Student identification",
      "Employee identification",
      "Staff identification",
      "Visitor identification",
      "Institutional identification",
    ],
    specs: [
      { k: "Configuration", v: "ID Card / Holder + One Hook + Lanyard" },
      { k: "Attachment Points", v: "Single Attachment Point" },
      { k: "Lanyard Type", v: "Single Hook Lanyard" },
      { k: "Usage", v: "Standard Wearable Badging" },
    ],
  },
  {
    id: "two-hook",
    code: "Two Hooks",
    name: "Two-Hook Configuration",
    req: "Configurations where two attachment points are required",
    badge: "Configuration B",
    setup: "ID Card / Holder + Two Hooks + Lanyard",
    category: "twohook",
    image: "/images/idgen-event-card-one-hook-two-hook-configuration.jpg",
    alt: "Two hook configuration for ID card lanyards",
    popular: true,
    tagline: "ID Card / Holder + Two Hooks + Lanyard. Suitable where two attachment points are required.",
    description:
      "Suitable for configurations where two attachment points are required, such as event-specific configurations and wide event badges. The correct configuration depends on the card, holder and lanyard design.",
    suitable: [
      "Event badges",
      "Conference passes",
      "Delegates & Exhibitors",
      "Two-point suspension badges",
    ],
    specs: [
      { k: "Configuration", v: "ID Card / Holder + Two Hooks + Lanyard" },
      { k: "Attachment Points", v: "Two Attachment Points" },
      { k: "Recommended Event", v: "Explore Event Card Printing" },
      { k: "Application", v: "Event & Large Badge Rigging" },
    ],
  },
  {
    id: "complete-set",
    code: "Complete Setup",
    name: "Complete Identification Setup",
    req: "Card + Holder + Attachment + Lanyard",
    badge: "Full Setup",
    setup: "ID Card → Holder → Hook → Custom Printed Lanyard",
    category: "set",
    image: "/images/Lanyard with Hook Samples/Sample 25 .jpg",
    alt: "ID card holder hook and custom printed lanyard assembly",
    popular: true,
    tagline: "Card + Holder + Attachment + Lanyard supplied as a complete setup.",
    description:
      "Hooks can be supplied as part of a complete identification configuration. For example: 86 × 54 mm ID Card → Compatible Holder → Fish Hook → 20 mm Custom Printed Lanyard.",
    suitable: [
      "School batches",
      "Employee onboarding",
      "Institutional identification",
      "Events & Membership programmes",
    ],
    specs: [
      { k: "Tier 1", v: "Basic: ID Card + Holder" },
      { k: "Tier 2", v: "Wearable: ID Card + Holder + Hook + Lanyard" },
      { k: "Tier 3", v: "Branded: Card + Holder + Hook + Custom Lanyard" },
      { k: "Tier 4", v: "Complete: Card + Holder + Attachment + Lanyard" },
    ],
  },
];

export function QuickHookSelectionMatrix({
  data,
  catalog,
}: {
  data?: {
    badge?: string;
    title?: string;
    lede?: string;
    catalog?: HookSelectionItem[];
  };
  catalog?: HookSelectionItem[];
}) {
  const activeCatalog =
    catalog && catalog.length > 0
      ? catalog
      : data?.catalog && data.catalog.length > 0
      ? data.catalog
      : hookSelectionCatalog;

  const badgeText = data?.badge || "Attachment Selection";
  const titleText = data?.title || "Choosing the Right ID Card Hook";
  const ledeText =
    data?.lede ||
    "The appropriate hook depends on the holder, card configuration, lanyard and intended application.";

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const [selectedModalHook, setSelectedModalHook] = useState<HookSelectionItem | null>(null);
  const [copied, setCopied] = useState(false);

  // Reset copied state on hook change
  useEffect(() => {
    setCopied(false);
  }, [selectedModalHook]);

  // Check URL query parameters on mount to open specific hook popup
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const hookCode = params.get("hook");
      if (hookCode) {
        const found = activeCatalog.find(
          (h) => h.code.toLowerCase() === hookCode.toLowerCase()
        );
        if (found) {
          setSelectedModalHook(found);
          setTimeout(() => {
            const el = document.getElementById("quick-hook-selection-system");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }, 100);
        }
      }
    }
  }, [activeCatalog]);

  const handleCopyLink = () => {
    if (typeof window !== "undefined" && selectedModalHook) {
      const shareUrl = `${window.location.origin}${window.location.pathname}?hook=${selectedModalHook.code}#quick-hook-selection-system`;
      navigator.clipboard.writeText(shareUrl).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setSelectedModalHook(null);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const filteredItems = activeCatalog.filter((item) => {
    const matchesCat = activeCategory === "all" || item.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      q === "" ||
      item.name.toLowerCase().includes(q) ||
      item.code.toLowerCase().includes(q) ||
      item.req.toLowerCase().includes(q) ||
      item.setup.toLowerCase().includes(q) ||
      item.suitable.some((s) => s.toLowerCase().includes(q));

    return matchesCat && matchesSearch;
  });

  return (
    <section className="mt-10 sm:mt-14 scroll-mt-28" id="quick-hook-selection-system">
      {/* ── Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200/90 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{badgeText}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mt-2">
            {titleText}
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
            {ledeText}
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-2 self-start md:self-auto bg-slate-100 dark:bg-slate-800/80 p-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-700">
          <button
            onClick={() => setViewMode("grid")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition ${
              viewMode === "grid"
                ? "bg-white dark:bg-slate-900 text-[#009fe3] shadow-xs"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
            }`}
          >
            <Grid className="h-3.5 w-3.5" />
            <span>Cards</span>
          </button>
          <button
            onClick={() => setViewMode("table")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition ${
              viewMode === "table"
                ? "bg-white dark:bg-slate-900 text-[#009fe3] shadow-xs"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
            }`}
          >
            <List className="h-3.5 w-3.5" />
            <span>List</span>
          </button>
        </div>
      </div>

      {/* ── Search & Filter Controls ── */}
      <div className="mt-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-1.5">
          {[
            { id: "all", label: "All Configurations", count: activeCatalog.length },
            { id: "fish", label: "Fish Hook", count: activeCatalog.filter(c => c.category === "fish").length },
            { id: "onehook", label: "One Hook", count: activeCatalog.filter(c => c.category === "onehook").length },
            { id: "twohook", label: "Two Hooks", count: activeCatalog.filter(c => c.category === "twohook").length },
            { id: "set", label: "Complete Set", count: activeCatalog.filter(c => c.category === "set").length },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all duration-200 flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? "bg-[#009fe3] text-white shadow-md shadow-[#009fe3]/25 scale-[1.02]"
                  : "bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-[#009fe3]/60 hover:bg-sky-50/50 dark:hover:bg-slate-800"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  activeCategory === cat.id
                    ? "bg-white/20 text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        <div className="relative w-full lg:w-72">
          <input
            type="text"
            placeholder="Search by configuration or application..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2.5 pl-9 text-xs font-semibold text-slate-900 dark:text-white placeholder-slate-400 focus:border-[#009fe3] focus:outline-hidden shadow-2xs"
          />
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
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

      {/* ── 1. GRID VIEW ── */}
      {viewMode === "grid" && (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedModalHook(item)}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:shadow-2xl hover:border-[#009fe3]/80 transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 font-mono text-xs font-black uppercase text-[#009fe3] dark:text-cyan-400 bg-sky-50 dark:bg-slate-800 px-2.5 py-1 rounded-lg border border-sky-200/60 dark:border-slate-700">
                    <Link2 className="h-3 w-3" />
                    <span>{item.code}</span>
                  </span>

                  <span className="rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 px-2 py-0.5 text-[10px] font-bold">
                    {item.badge}
                  </span>
                </div>

                <div className="relative h-44 w-full rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/80 mb-4 flex items-center justify-center p-3 group-hover:bg-sky-50/30 transition">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover p-1 group-hover:scale-105 transition-transform duration-500 rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-2 right-2 rounded-lg bg-slate-900/80 text-white p-1.5 opacity-0 group-hover:opacity-100 transition">
                    <Maximize2 className="h-3.5 w-3.5" />
                  </div>
                </div>

                <h3 className="text-base font-black text-slate-900 dark:text-white group-hover:text-[#009fe3] transition-colors leading-snug">
                  {item.name}
                </h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  {item.tagline}
                </p>

                <div className="mt-3.5 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-[11px] font-bold text-slate-800 dark:text-slate-200">
                  <span className="text-[10px] text-slate-400 uppercase block">Setup</span>
                  {item.setup}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-[#009fe3] dark:text-cyan-400 group-hover:underline">
                <span>View Details</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── 2. TABLE VIEW ── */}
      {viewMode === "table" && (
        <div className="mt-8 overflow-x-auto rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-extrabold uppercase tracking-wider text-[11px]">
                <th className="py-4 px-4">Attachment Option</th>
                <th className="py-4 px-4">Requirement</th>
                <th className="py-4 px-4">Configuration</th>
                <th className="py-4 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredItems.map((h) => (
                <tr
                  key={h.id}
                  onClick={() => setSelectedModalHook(h)}
                  className="hover:bg-sky-50/50 dark:hover:bg-slate-800/60 cursor-pointer transition"
                >
                  <td className="py-3.5 px-4 font-extrabold text-slate-900 dark:text-white">
                    {h.name}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300">{h.req}</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-[#009fe3] dark:text-cyan-400">{h.setup}</td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedModalHook(h);
                      }}
                      className="inline-flex items-center gap-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-[#009fe3] hover:text-white px-3 py-1.5 text-[11px] font-bold text-slate-700 dark:text-slate-300 transition"
                    >
                      <span>View</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ── MODAL ── */}
      {selectedModalHook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border-2 border-[#009fe3]/50 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-2xl space-y-6"
          >
            <button
              onClick={() => setSelectedModalHook(null)}
              className="absolute top-5 right-5 rounded-full bg-slate-100 dark:bg-slate-800 p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-start gap-4">
              <div className="relative h-20 w-20 shrink-0 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950">
                <Image
                  src={selectedModalHook.image}
                  alt={selectedModalHook.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-xs font-black uppercase text-[#009fe3] bg-sky-50 dark:bg-slate-800 px-2 py-0.5 rounded">
                  {selectedModalHook.code}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  {selectedModalHook.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{selectedModalHook.tagline}</p>
              </div>
            </div>

            <div className="space-y-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
              <p>{selectedModalHook.description}</p>

              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 block mb-2">
                  Configuration Details
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {selectedModalHook.specs.map((s, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-2.5"
                    >
                      <span className="text-[10px] text-slate-400 block">{s.k}</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{s.v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 block mb-2">
                  Suitable For
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedModalHook.suitable.map((st, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">{st}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className={`inline-flex items-center gap-1.5 rounded-xl border px-4 py-3 text-xs font-bold transition-all ${
                    copied
                      ? "bg-emerald-50 border-emerald-200 text-emerald-600 dark:bg-emerald-950/40 dark:border-emerald-800/85 dark:text-emerald-400"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  <span>{copied ? "Link Copied!" : "Copy Link"}</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href="/request-a-quote/"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#009fe3] hover:bg-[#008bc9] text-white px-6 py-3 text-xs font-extrabold shadow-md transition"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/id-card-holders/"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-3 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
                >
                  <span>Explore ID Card Holders</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
