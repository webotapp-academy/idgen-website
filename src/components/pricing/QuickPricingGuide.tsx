"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import {
  CreditCard,
  Layers,
  Boxes,
  Anchor,
  BadgeCheck,
  Award,
  Ticket,
  Radio,
  ArrowRight,
  Search,
  CheckCircle2,
  Sparkles,
  SlidersHorizontal,
  Table as TableIcon,
  LayoutGrid,
  ShieldCheck,
  ExternalLink,
  ChevronRight,
  Info,
  IndianRupee,
} from "lucide-react";
import type { PricingItemData } from "@/lib/dynamic-pricing";

export interface QuickPricingGuideProps {
  initialItems?: PricingItemData[];
}

function getIconForProduct(item: { category: string; modelCode?: string; id?: string }): React.ElementType {
  if (item.modelCode === "CV-1" || item.id?.includes("crystal")) return Sparkles;
  if (item.category === "holders" || item.id?.includes("holder")) return Boxes;
  if (item.id === "swivel-hook" || item.id?.includes("hook")) return Anchor;
  if (item.category === "lanyards" || item.id?.includes("lanyard")) return Layers;
  if (item.id === "event-card" || item.id?.includes("event")) return Ticket;
  if (item.id === "rfid-card" || item.id?.includes("rfid") || item.id?.includes("nfc")) return Radio;
  if (item.id === "acrylic-badge" || item.id?.includes("badge")) return BadgeCheck;
  if (item.id === "zinc-medal" || item.id?.includes("medal")) return Award;
  return CreditCard;
}

export function QuickPricingGuide({ initialItems }: QuickPricingGuideProps) {
  const [items, setItems] = useState<PricingItemData[]>(initialItems || []);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"table" | "cards">("table");

  // Sync / fetch latest pricing dynamically
  useEffect(() => {
    async function loadFreshPricing() {
      try {
        const res = await fetch("/api/pricing");
        const data = await res.json();
        if (data.success && Array.isArray(data.items) && data.items.length > 0) {
          setItems(data.items);
        }
      } catch (e) {
        console.error("Failed to revalidate public pricing:", e);
      }
    }
    loadFreshPricing();
  }, []);

  // Update if initialItems prop updates from SSR
  useEffect(() => {
    if (initialItems && initialItems.length > 0) {
      setItems(initialItems);
    }
  }, [initialItems]);

  // Dynamic Category Tabs with live counts
  const categoryTabs = useMemo(() => {
    const activeList = items.filter((i) => i.isActive !== false);
    return [
      { id: "all", label: "All Products", count: activeList.length },
      {
        id: "holders",
        label: "ID Card Holders (V-1, H-1, V-2)",
        count: activeList.filter((i) => i.category === "holders").length,
        highlight: true,
      },
      {
        id: "cards",
        label: "PVC & RFID Cards",
        count: activeList.filter((i) => i.category === "cards").length,
      },
      {
        id: "lanyards",
        label: "Lanyards & Hardware",
        count: activeList.filter((i) => i.category === "lanyards").length,
      },
      {
        id: "badges",
        label: "Badges & Medals",
        count: activeList.filter((i) => i.category === "badges").length,
      },
    ];
  }, [items]);

  // Filter items based on tab and search
  const filteredItems = useMemo(() => {
    return items
      .filter((item) => item.isActive !== false)
      .filter((item) => {
        const matchesTab = activeTab === "all" || item.category === activeTab;
        const query = searchQuery.trim().toLowerCase();
        if (!query) return matchesTab;

        const matchesSearch =
          item.name.toLowerCase().includes(query) ||
          item.modelCode?.toLowerCase().includes(query) ||
          item.description?.toLowerCase().includes(query) ||
          item.price.toLowerCase().includes(query) ||
          item.categoryLabel?.toLowerCase().includes(query) ||
          (item.orientation && item.orientation.toLowerCase().includes(query)) ||
          (item.badge && item.badge.toLowerCase().includes(query));

        return matchesTab && matchesSearch;
      });
  }, [items, activeTab, searchQuery]);

  return (
    <section className="mt-0">
      {/* ── Section Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200/80 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 mb-2.5">
            <span className="h-px w-6 bg-[#009fe3]" aria-hidden="true" />
            <p className="text-xs font-bold tracking-widest text-[#009fe3] uppercase">
              Factory Direct Reference Rates
            </p>
            <span className="h-px w-6 bg-[#009fe3]/40" aria-hidden="true" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
            Quick Pricing Guide
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            Transparent unit reference pricing for all IDGen identity cards, accessories, lanyards, holders (V-1, H-1, V-2, CV-1), badges, and medals.
          </p>
        </div>

        {/* View Switcher & Live Counter */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900 p-1 shadow-inner">
            <button
              onClick={() => setViewMode("table")}
              className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                viewMode === "table"
                  ? "bg-white dark:bg-slate-800 text-[#009fe3] dark:text-cyan-400 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white"
              }`}
              title="Table View"
            >
              <TableIcon className="h-3.5 w-3.5" />
              <span>Table</span>
            </button>
            <button
              onClick={() => setViewMode("cards")}
              className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                viewMode === "cards"
                  ? "bg-white dark:bg-slate-800 text-[#009fe3] dark:text-cyan-400 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white"
              }`}
              title="Visual Cards View"
            >
              <LayoutGrid className="h-3.5 w-3.5" />
              <span>Cards</span>
            </button>
          </div>

          <Link
            href="/request-a-quote/"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#009fe3] hover:bg-[#008bc9] text-white px-5 py-2 text-xs font-bold shadow-md shadow-[#009fe3]/25 transition hover:shadow-lg hover:-translate-y-0.5"
          >
            <span>Get Custom Quote</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {/* ── Filter Controls & Search Bar ── */}
      <div className="mt-6 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categoryTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#009fe3] text-white shadow-md shadow-[#009fe3]/30 scale-[1.02]"
                    : tab.highlight
                    ? "bg-sky-50 dark:bg-cyan-950/40 text-[#009fe3] dark:text-cyan-400 border border-sky-200 dark:border-cyan-800/60 hover:bg-sky-100 dark:hover:bg-cyan-900/50"
                    : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] font-black ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Search Box */}
        <div className="relative min-w-[240px] sm:min-w-[280px]">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search V-1, H-1, V-2, cards, lanyard..."
            className="w-full rounded-full border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 pl-10 pr-4 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:border-[#009fe3] focus:outline-none focus:ring-2 focus:ring-[#009fe3]/20 shadow-xs transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* ── Special Focus Alert for ID Card Holders (V-1 / H-1 / V-2) ── */}
      {(activeTab === "holders" || activeTab === "all") && !searchQuery && (
        <div className="mt-5 rounded-2xl border border-sky-200/80 dark:border-cyan-900/60 bg-gradient-to-r from-sky-50/90 via-sky-50/40 to-transparent dark:from-cyan-950/40 dark:via-cyan-950/20 dark:to-transparent p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#009fe3] text-white shadow-md shadow-[#009fe3]/25">
              <Boxes className="h-4 w-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
                  ID Card Holder Model Range
                </span>
                <span className="rounded-full bg-sky-200/70 dark:bg-cyan-900/80 px-2 py-0.2 text-[10px] font-bold text-slate-900 dark:text-cyan-200">
                  Separate Model Pricing
                </span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 mt-0.5">
                Benchmark <strong className="text-slate-950 dark:text-white">V-1 (₹6)</strong> portrait &amp;{" "}
                <strong className="text-slate-950 dark:text-white">H-1 (₹6)</strong> landscape standard drop-in, or heavy-duty{" "}
                <strong className="text-[#009fe3] dark:text-cyan-400">V-2 (₹7) / H-2 (₹7)</strong> 4-side perimeter lock.
              </p>
            </div>
          </div>
          <Link
            href="/id-card-holders/"
            className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 hover:underline shrink-0"
          >
            <span>Compare Holder Specs</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      )}

      {/* ── MAIN CONTENT VIEW (TABLE OR CARDS) ── */}
      {filteredItems.length === 0 ? (
        <div className="mt-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-12 text-center space-y-3">
          <p className="text-sm font-bold text-slate-600 dark:text-slate-400">
            No products match your search query "{searchQuery}".
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveTab("all");
            }}
            className="rounded-full bg-[#009fe3] px-4 py-1.5 text-xs font-bold text-white shadow hover:bg-[#008bc9] transition cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : viewMode === "table" ? (
        /* ── TABLE VIEW (Elevated, Responsive & Modern) ── */
        <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-950/80 text-[11px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  <th className="py-4 pl-6 pr-4">Product / Specification</th>
                  <th className="py-4 px-3 hidden sm:table-cell">Model / SKU</th>
                  <th className="py-4 px-3 hidden md:table-cell">Orientation / Format</th>
                  <th className="py-4 px-4 text-right">Reference Price</th>
                  <th className="py-4 pl-4 pr-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                {filteredItems.map((item) => {
                  const ItemIcon = getIconForProduct(item);
                  const isHolder = item.category === "holders";
                  const isV2 = item.modelCode === "V-2" || item.modelCode === "H-2";

                  return (
                    <tr
                      key={item.id}
                      className="group hover:bg-sky-50/30 dark:hover:bg-cyan-950/10 transition-colors duration-150"
                    >
                      {/* Product Name + Icon + Badges + Specs */}
                      <td className="py-4 pl-6 pr-4 align-middle">
                        <div className="flex items-start gap-3.5">
                          <div
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border transition-all duration-200 group-hover:scale-105 shadow-2xs ${
                              isHolder
                                ? "bg-sky-50 dark:bg-cyan-950/60 border-sky-200 dark:border-cyan-800 text-[#009fe3] dark:text-cyan-400"
                                : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                            }`}
                          >
                            <ItemIcon className="h-5 w-5" />
                          </div>

                          <div className="space-y-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="font-bold text-slate-950 dark:text-white group-hover:text-[#009fe3] dark:group-hover:text-cyan-400 transition-colors">
                                {item.name}
                              </span>
                              {item.badge && (
                                <span
                                  className={`rounded-full px-2 py-0.5 text-[10px] font-black uppercase tracking-wider ${
                                    isV2
                                      ? "bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-800"
                                      : item.badge.includes("Popular") || item.badge.includes("Best")
                                      ? "bg-sky-100 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-300 border border-sky-200 dark:border-cyan-800"
                                      : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                                  }`}
                                >
                                  {item.badge}
                                </span>
                              )}
                            </div>

                            <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 max-w-xl">
                              {item.description}
                            </p>

                            {/* Mobile only Model + Orientation tags */}
                            <div className="flex flex-wrap gap-1.5 sm:hidden pt-1">
                              {item.modelCode && (
                                <span className="rounded bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 font-mono text-[10px] font-bold text-slate-700 dark:text-slate-300">
                                  {item.modelCode}
                                </span>
                              )}
                              {item.orientation && (
                                <span className="rounded bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 text-[10px] font-semibold text-slate-600 dark:text-slate-400">
                                  {item.orientation}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Model Code / SKU */}
                      <td className="py-4 px-3 hidden sm:table-cell align-middle">
                        <span className="inline-block rounded-lg border border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800 px-2.5 py-1 font-mono text-xs font-black text-slate-800 dark:text-slate-200 shadow-2xs">
                          {item.modelCode || "—"}
                        </span>
                      </td>

                      {/* Orientation / Format */}
                      <td className="py-4 px-3 hidden md:table-cell align-middle">
                        <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                          {item.orientation || "Standard CR80"}
                        </span>
                      </td>

                      {/* Reference Price */}
                      <td className="py-4 px-4 text-right align-middle">
                        <div className="inline-flex flex-col items-end">
                          <span className="font-mono text-base sm:text-lg font-black text-[#009fe3] dark:text-cyan-400 tracking-tight">
                            {item.price}{" "}
                            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                              {item.unit}
                            </span>
                          </span>
                          <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">
                            Bulk tier applies
                          </span>
                        </div>
                      </td>

                      {/* Action Links */}
                      <td className="py-4 pl-4 pr-6 text-right align-middle">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            href={item.path || "/pricing/"}
                            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-200 shadow-2xs transition-all hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400"
                          >
                            <span>Details</span>
                            <ArrowRight className="h-3 w-3" />
                          </Link>
                          <Link
                            href="/request-a-quote/"
                            className="hidden sm:inline-flex items-center gap-1 rounded-lg bg-slate-900 hover:bg-[#009fe3] dark:bg-white dark:hover:bg-cyan-400 text-white dark:text-slate-900 px-3 py-1.5 text-xs font-bold shadow-2xs transition-colors"
                          >
                            <span>Quote</span>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* ── CARDS GRID VIEW ── */
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => {
            const ItemIcon = getIconForProduct(item);
            const isHolder = item.category === "holders";
            const isV2 = item.modelCode === "V-2" || item.modelCode === "H-2";

            return (
              <div
                key={item.id}
                className="group rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md transition-all duration-300 hover:border-[#009fe3]/50 hover:shadow-xl hover:-translate-y-0.5 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3.5">
                  {/* Card Header: Icon + Badge + Price */}
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border transition-transform duration-300 group-hover:scale-105 shadow-2xs ${
                        isHolder
                          ? "bg-sky-50 dark:bg-cyan-950/60 border-sky-200 dark:border-cyan-800 text-[#009fe3] dark:text-cyan-400"
                          : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      <ItemIcon className="h-5 w-5" />
                    </div>

                    <div className="text-right">
                      <span className="font-mono text-lg font-black text-[#009fe3] dark:text-cyan-400">
                        {item.price}
                      </span>
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block -mt-1">
                        {item.unit}
                      </span>
                    </div>
                  </div>

                  {/* Title & SKU */}
                  <div>
                    <div className="flex flex-wrap items-center gap-1.5 mb-1">
                      {item.modelCode && (
                        <span className="rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-0.5 font-mono text-[11px] font-black text-slate-800 dark:text-slate-200">
                          {item.modelCode}
                        </span>
                      )}
                      {item.badge && (
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                            isV2
                              ? "bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200"
                              : "bg-sky-50 dark:bg-cyan-950 text-[#009fe3] dark:text-cyan-300 border border-sky-200"
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900 dark:text-white leading-snug group-hover:text-[#009fe3] dark:group-hover:text-cyan-400 transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
                    {item.description}
                  </p>

                  {/* Feature Specs */}
                  <div className="space-y-1.5 pt-1">
                    {item.specs?.slice(0, 3).map((s) => (
                      <div
                        key={s}
                        className="flex items-center gap-1.5 text-[11px] font-medium text-slate-700 dark:text-slate-300"
                      >
                        <CheckCircle2 className="h-3 w-3 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                  <Link
                    href={item.path || "/pricing/"}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#009fe3] dark:text-cyan-400 hover:underline"
                  >
                    <span>View Details</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href="/request-a-quote/"
                    className="rounded-full bg-slate-900 hover:bg-[#009fe3] dark:bg-white dark:hover:bg-cyan-400 text-white dark:text-slate-900 px-3.5 py-1.5 text-xs font-bold shadow-2xs transition-colors"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ── Footer Information & Guarantee Bar ── */}
      <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60 p-4 text-xs text-slate-600 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <Info className="h-4 w-4 text-[#009fe3] shrink-0" />
          <span>
            <strong>Note:</strong> Reference prices exclude GST and freight. Bulk volumes (1,000+ to 10,000+ units) receive custom tier discounts.
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="inline-flex items-center gap-1 font-bold text-slate-700 dark:text-slate-300">
            <ShieldCheck className="h-3.5 w-3.5 text-[#009fe3]" />
            100% Virgin Materials
          </span>
          <span className="hidden md:inline text-slate-300 dark:text-slate-700">•</span>
          <span className="hidden md:inline-flex items-center gap-1 font-bold text-slate-700 dark:text-slate-300">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            Cleanroom Inspected
          </span>
        </div>
      </div>
    </section>
  );
}
