"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CreditCard,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Maximize2,
  X,
  Search,
  Grid,
  List,
  Radio,
  Check,
} from "lucide-react";

export interface PvcCatalogItem {
  id: string;
  code: string;
  title: string;
  category: "plain" | "rfid" | "prox" | "mag";
  material: string;
  dimensions: string;
  print: string;
  durability: string;
  img: string;
  badge: string;
  description: string;
  idealFor: string[];
}

export const pvcCatalog: PvcCatalogItem[] = [
  {
    id: "pvc-01",
    code: "PVC-01",
    title: "CR80 30-Mil Standard Virgin PVC Card",
    category: "plain",
    material: "100% Virgin Polyvinyl Chloride (Pure White Core)",
    dimensions: "85.6 mm × 54.0 mm (0.76 mm / 30-Mil)",
    print: "Thermal Transfer & Dye Sublimation (300 DPI)",
    durability: "5+ Years UV Resistance & Scratch Seal",
    img: "/images/PVC Cards Samples/Sample 1.jpg",
    badge: "Bank Grade CR80",
    description:
      "Bank-grade 30-mil virgin PVC with flawless optical whiteness, ensuring smooth printhead travel and vibrant edge-to-edge color reproduction.",
    idealFor: ["Employee ID Badges", "Student ID Cards", "Visitor Passes", "Membership Cards"],
  },
  {
    id: "pvc-02",
    code: "PVC-02",
    title: "Overlaminated Scratch-Proof Enterprise PVC Card",
    category: "plain",
    material: "Multi-Layer Composite PVC + Protective Clear Laminate",
    dimensions: "CR80 Standard (30-Mil / 0.76 mm)",
    print: "Sub-Surface Dye Sublimation + 1-Mil Overcoat",
    durability: "Heavy-Duty Abrasion & Moisture Shield",
    img: "/images/PVC Cards Samples/Sample 3.jpg",
    badge: "Overlaminated",
    description:
      "Heavy-duty protective thermal overlay shield that protects printed photographs and barcodes against friction, chemical exposure, and constant swipe wear.",
    idealFor: ["Industrial Plants", "Construction Sites", "Hospital Clinical Staff", "Daily Swipe Turnstiles"],
  },
  {
    id: "pvc-03",
    code: "PVC-03",
    title: "13.56MHz Mifare 1K Smart RFID PVC Card",
    category: "rfid",
    material: "Virgin PVC + Embedded 13.56MHz S50 Microchip",
    dimensions: "ISO/IEC 14443 Type A Standard (30-Mil)",
    print: "Full Color Variable Data + Direct UV / Sublimation",
    durability: "100,000 Read/Write Cycles (10-Yr Data Retention)",
    img: "/images/custom-rfid-id-card-printing.png",
    badge: "High Frequency 13.56MHz",
    description:
      "Contactless smart card with 1KB EEPROM storage for multi-application campus access, cashless canteen payments, and biometric attendance.",
    idealFor: ["University Campus ID", "Corporate Access Control", "Cashless Canteen", "Library Management"],
  },
  {
    id: "pvc-04",
    code: "PVC-04",
    title: "TK4100 125kHz Proximity Contactless Card",
    category: "prox",
    material: "Virgin PVC + Embedded 125kHz Copper Antenna",
    dimensions: "CR80 Standard (0.76 mm / 30-Mil)",
    print: "Edge-to-Edge Full Color + Chip Serial ID",
    durability: "Contactless Magnetic Induction Read",
    img: "/images/bulk-rfid-card-printing.jpg",
    badge: "Low Frequency 125kHz",
    description:
      "Standard low-frequency proximity card compatible with EM4100 / TK4100 turnstile readers, parking boom barriers, and time-clock terminals.",
    idealFor: ["Office Turnstiles", "Parking Gate Barriers", "Gym Access Gates", "Time & Attendance Clocks"],
  },
  {
    id: "pvc-05",
    code: "PVC-05",
    title: "HiCo Magnetic Stripe & QR Code PVC Card",
    category: "mag",
    material: "Virgin PVC + 2750 Oe High-Coercivity MagStripe",
    dimensions: "ISO 7811 3-Track Magnetic Standard",
    print: "Front Full Color + Back Encoded MagStripe",
    durability: "Resistant to Stray Demagnetization",
    img: "/images/idgen-membership-card-qr-barcode.jpg",
    badge: "HiCo 2750 Oe",
    description:
      "High-coercivity (2750 Oe) 3-track magnetic stripe card engineered to withstand magnetic erasure from mobile phones and everyday metal keys.",
    idealFor: ["Retail Loyalty Cards", "Hotel Room Keycards", "Club Membership Cards", "POS POS Terminal Swipes"],
  },
  {
    id: "pvc-06",
    code: "PVC-06",
    title: "Dual-Interface Hybrid RFID + MagStripe Card",
    category: "rfid",
    material: "Virgin PVC + 13.56MHz Chip + HiCo MagStripe",
    dimensions: "Dual Interface CR80 (0.80 mm)",
    print: "Double Sided 300 DPI Edge-to-Edge Print",
    durability: "Multi-Protocol Dual System Compatibility",
    img: "/images/PVC-ID-Card-Printing-for-Organizations.png",
    badge: "Hybrid Chip & Mag",
    description:
      "All-in-one dual credential integrating both contactless 13.56MHz RFID and contact magnetic stripe technology for legacy infrastructure migration.",
    idealFor: ["Enterprise Campuses", "Hospitality Resorts", "Transit Systems", "Legacy Access Upgrades"],
  },
];

export function QuickPvcSelectionMatrix() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const [selectedModalPvc, setSelectedModalPvc] = useState<PvcCatalogItem | null>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setSelectedModalPvc(null);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const filteredCards = pvcCatalog.filter((item) => {
    const matchesCat = activeCategory === "all" || item.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      q === "" ||
      item.title.toLowerCase().includes(q) ||
      item.code.toLowerCase().includes(q) ||
      item.material.toLowerCase().includes(q) ||
      item.dimensions.toLowerCase().includes(q) ||
      item.idealFor.some((s) => s.toLowerCase().includes(q));

    return matchesCat && matchesSearch;
  });

  return (
    <section className="mt-10 sm:mt-14" id="selection-matrix">
      {/* ── Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200/90 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Card Selection Matrix</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mt-2">
            CR80 PVC Card Substrates &amp; Chips
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
            Choose from pure virgin plain PVC, 13.56MHz Mifare smart cards, 125kHz proximity cards, and magnetic stripe credentials.
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
            <span>Table</span>
          </button>
        </div>
      </div>

      {/* ── Search & Filter Controls ── */}
      <div className="mt-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-1.5">
          {[
            { id: "all", label: "All Card Models" },
            { id: "plain", label: "Standard Plain PVC" },
            { id: "rfid", label: "13.56MHz Mifare RFID" },
            { id: "prox", label: "125kHz Proximity" },
            { id: "mag", label: "Magnetic Stripe" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-[#009fe3] text-white shadow-md shadow-[#009fe3]/25 scale-[1.02]"
                  : "bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-[#009fe3]/60 hover:bg-sky-50/50 dark:hover:bg-slate-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="relative w-full lg:w-72">
          <input
            type="text"
            placeholder="Search by code, chip, thickness..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2.5 pl-9 text-xs font-semibold text-slate-900 dark:text-white placeholder-slate-400 focus:border-[#009fe3] focus:outline-hidden shadow-2xs"
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

      {/* ── 1. GRID VIEW ── */}
      {viewMode === "grid" && (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCards.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedModalPvc(item)}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:shadow-2xl hover:border-[#009fe3]/80 transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-3">
                  <span className="font-mono text-xs font-black uppercase text-[#009fe3] dark:text-cyan-400 bg-sky-50 dark:bg-slate-800 px-2.5 py-0.5 rounded-lg border border-sky-200/60 dark:border-slate-700">
                    {item.code}
                  </span>
                  <span className="rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-0.5 text-[10px] font-bold">
                    {item.badge}
                  </span>
                </div>

                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-950 mb-4 flex items-center justify-center p-2">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-2.5 right-2.5 rounded-lg bg-slate-900/80 text-white p-1.5 opacity-0 group-hover:opacity-100 transition">
                    <Maximize2 className="h-4 w-4" />
                  </div>
                </div>

                <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white group-hover:text-[#009fe3] dark:group-hover:text-cyan-400 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  {item.material}
                </p>

                <div className="mt-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-[11px] font-semibold text-slate-700 dark:text-slate-300 flex items-center justify-between">
                  <span className="text-slate-400 uppercase text-[9px]">Dimensions</span>
                  <span className="font-mono font-bold text-[#009fe3] dark:text-cyan-400">{item.dimensions}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-[#009fe3] dark:text-cyan-400 group-hover:underline">
                <span>View Full Specifications</span>
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
                <th className="py-4 px-4">Code</th>
                <th className="py-4 px-4">Card Variant</th>
                <th className="py-4 px-4">Core Material</th>
                <th className="py-4 px-4">Dimensions / Thickness</th>
                <th className="py-4 px-4">Print Compatibility</th>
                <th className="py-4 px-4">Durability Cycle</th>
                <th className="py-4 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredCards.map((c) => (
                <tr
                  key={c.id}
                  onClick={() => setSelectedModalPvc(c)}
                  className="hover:bg-sky-50/40 dark:hover:bg-slate-800/60 cursor-pointer transition"
                >
                  <td className="py-3.5 px-4 font-mono font-bold text-[#009fe3] dark:text-cyan-400">
                    {c.code}
                  </td>
                  <td className="py-3.5 px-4 font-extrabold text-slate-900 dark:text-white">
                    {c.title}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300">{c.material}</td>
                  <td className="py-3.5 px-4 font-semibold text-slate-700 dark:text-slate-200">{c.dimensions}</td>
                  <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400">{c.print}</td>
                  <td className="py-3.5 px-4 font-mono text-[11px] text-emerald-600 dark:text-emerald-400">{c.durability}</td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedModalPvc(c);
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

      {/* ── 360° PVC CARD MODAL ── */}
      {selectedModalPvc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border-2 border-[#009fe3]/50 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-2xl space-y-6"
          >
            <button
              onClick={() => setSelectedModalPvc(null)}
              className="absolute top-5 right-5 rounded-full bg-slate-100 dark:bg-slate-800 p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-start gap-4">
              <div className="relative h-24 w-32 shrink-0 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-950">
                <Image
                  src={selectedModalPvc.img}
                  alt={selectedModalPvc.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-xs font-black uppercase text-[#009fe3] bg-sky-50 dark:bg-slate-800 px-2.5 py-0.5 rounded">
                  {selectedModalPvc.code} • {selectedModalPvc.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  {selectedModalPvc.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{selectedModalPvc.material}</p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
              <p>{selectedModalPvc.description}</p>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-3">
                  <span className="text-[10px] text-slate-400 uppercase block">Print Compatibility</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{selectedModalPvc.print}</span>
                </div>
                <div className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-3">
                  <span className="text-[10px] text-slate-400 uppercase block">Durability Rating</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{selectedModalPvc.durability}</span>
                </div>
              </div>

              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 block mb-2">
                  Ideal Applications
                </span>
                <div className="grid grid-cols-2 gap-1.5">
                  {selectedModalPvc.idealFor.map((app, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <Link
                href="/request-a-quote/"
                className="inline-flex items-center gap-2 rounded-xl bg-[#009fe3] hover:bg-[#008bc9] text-white px-6 py-3 text-xs font-extrabold shadow-md transition"
              >
                <span>Request a Quote for {selectedModalPvc.code}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                onClick={() => setSelectedModalPvc(null)}
                className="rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-3 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
