"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Maximize2,
  X,
  Search,
  Grid,
  List,
  Flame,
  Check,
} from "lucide-react";

export interface MedalCatalogItem {
  id: string;
  code: string;
  title: string;
  category: "championship" | "institutional" | "cutout" | "corporate" | "marathon" | "ribbon";
  material: string;
  finish: string;
  ribbon: string;
  diameter: string;
  img: string;
  badge: string;
  description: string;
  idealFor: string[];
}

export const medalCatalog: MedalCatalogItem[] = [
  {
    id: "znc-01",
    code: "ZNC-01",
    title: "High-Relief Die-Cast Gold Medal",
    category: "championship",
    material: "Eco-Friendly Zinc Alloy Die-Cast",
    finish: "Antique Gold Electroplate + Hand Buffing",
    ribbon: "25mm Full-Color Satin Sublimation",
    diameter: "65mm (3.5mm – 4.5mm thickness)",
    img: "/images/Zinc Medal/IMG_20260213_100040.jpg.jpeg",
    badge: "1st Place Gold",
    description:
      "Deep 3D sculpted victory laurel wreath with raised institutional crest and mirror-polished raised lettering.",
    idealFor: ["Sports Championships", "Tournament 1st Place", "Annual Sports Days", "Inter-College Meets"],
  },
  {
    id: "znc-02",
    code: "ZNC-02",
    title: "Custom Sublimation Satin Ribbon Assembly",
    category: "ribbon",
    material: "High-Density Silky Polyester Satin",
    finish: "Double-Sided Heat-Transfer Sublimation",
    ribbon: "25mm – 35mm V-Neck Sewn Ribbon",
    diameter: "Custom Length (850mm standard loop)",
    img: "/images/Zinc Medal/IMG20260213095826.jpg.jpeg",
    badge: "Satin Ribbon Assembly",
    description:
      "Full-bleed dye-sublimated neck ribbon with gradient event graphics, sponsor branding, and reinforced jump ring stitching.",
    idealFor: ["Corporate Marathon Ribbons", "School Event Badges", "Custom Organization Lanyards", "Tournament Branding"],
  },
  {
    id: "znc-03",
    code: "ZNC-03",
    title: "Antique Silver Institutional Award Medal",
    category: "institutional",
    material: "High-Density Eco Zinc Alloy",
    finish: "Antique Nickel / Silver Electroplate",
    ribbon: "25mm Custom Branded Ribbon",
    diameter: "60mm (3.5mm thickness)",
    img: "/images/Zinc Medal/IMG_20260213_100059.jpg.jpeg",
    badge: "2nd Place Silver",
    description:
      "Subtle antique matte shading in recessed areas that accentuates high-relief crest details and fine serif typography.",
    idealFor: ["University Convocations", "2nd Place Winners", "Academic Honor Rolls", "State Level Competitions"],
  },
  {
    id: "znc-04",
    code: "ZNC-04",
    title: "Custom Cutout Sports Championship Medal",
    category: "cutout",
    material: "Precision CNC Custom Milled Mold",
    finish: "Dual-Tone Plating + Soft Enamel",
    ribbon: "30mm Heavy-Duty V-Sewn Satin",
    diameter: "70mm Custom Geometric Cutout",
    img: "/images/Zinc Medal/madl.png",
    badge: "3D Cutout Mold",
    description:
      "Intricately pierced negative-space cutout design following the exact contours of the athletic federation silhouette.",
    idealFor: ["Football Leagues", "Martial Arts Tournaments", "Badminton Cups", "Cricket Championships"],
  },
  {
    id: "znc-05",
    code: "ZNC-05",
    title: "Corporate Award Medallion with Satin V-Neck",
    category: "corporate",
    material: "Polished Brass / Heavy Zinc",
    finish: "High-Gloss Mirror Gold / Chrome",
    ribbon: "Tricolor / Custom Corporate Ribbon",
    diameter: "55mm (3.5mm thickness)",
    img: "/images/Zinc Medal/1f4d1eda-3be4-44cf-a700-3288b93f849f.jpg",
    badge: "Corporate Honor",
    description:
      "Mirror-finish executive medallion crafted for long-service honors, sales leadership awards, and annual shareholder summits.",
    idealFor: ["Employee of the Year", "Sales Target Achievers", "Long Service Honors", "Executive Leadership"],
  },
  {
    id: "znc-06",
    code: "ZNC-06",
    title: "Bronze Marathon & Event Medallion",
    category: "marathon",
    material: "Die-Cast Zinc Alloy",
    finish: "Antique Copper / Bronze Treatment",
    ribbon: "25mm Sublimated Finisher Ribbon",
    diameter: "60mm (4mm thickness)",
    img: "/images/Zinc Medal/20dfd541-e04b-4fc4-944f-5127c3b4ec2e.jpg",
    badge: "3rd Place Bronze",
    description:
      "Warm rustic antique bronze finish with textured background stippling and bold finisher relief markings.",
    idealFor: ["3rd Place Awardees", "Marathon Finishers", "10K Run Participants", "Charity Cycling Rallies"],
  },
];

export function QuickMedalSelectionMatrix({
  data,
}: {
  data?: {
    badge?: string;
    title?: string;
    lede?: string;
    catalog?: MedalCatalogItem[];
  };
} = {}) {
  const badgeTitle = data?.badge || "Medal Selection Matrix";
  const sectionTitle = data?.title || "Die-Cast Zinc Medal Catalog";
  const sectionLede =
    data?.lede ||
    "Inspect real production medal specimens manufactured with high-density zinc alloy, multi-stage electroplating, and custom sublimated satin neck ribbons.";
  const activeCatalog =
    data?.catalog && data.catalog.length > 0 ? data.catalog : medalCatalog;

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const [selectedModalMedal, setSelectedModalMedal] = useState<MedalCatalogItem | null>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setSelectedModalMedal(null);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const filteredMedals = activeCatalog.filter((item) => {
    const matchesCat = activeCategory === "all" || item.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      q === "" ||
      item.title.toLowerCase().includes(q) ||
      item.code.toLowerCase().includes(q) ||
      item.material.toLowerCase().includes(q) ||
      item.finish.toLowerCase().includes(q) ||
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
            <span>{badgeTitle}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mt-2">
            {sectionTitle}
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
            {sectionLede}
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
            { id: "all", label: "All Medals" },
            { id: "championship", label: "Gold Championships" },
            { id: "institutional", label: "Silver Convocations" },
            { id: "marathon", label: "Bronze & Marathons" },
            { id: "cutout", label: "Custom 3D Cutouts" },
            { id: "corporate", label: "Corporate Honors" },
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
            placeholder="Search by medal code, finish, diameter..."
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
          {filteredMedals.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedModalMedal(item)}
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

                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-950 mb-4 flex items-center justify-center p-2">
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
                  {item.finish}
                </p>

                <div className="mt-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-[11px] font-semibold text-slate-700 dark:text-slate-300 flex items-center justify-between">
                  <span className="text-slate-400 uppercase text-[9px]">Diameter</span>
                  <span className="font-mono font-bold text-[#009fe3] dark:text-cyan-400">{item.diameter}</span>
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
                <th className="py-4 px-4">Medal Style</th>
                <th className="py-4 px-4">Core Alloy</th>
                <th className="py-4 px-4">Plating Finish</th>
                <th className="py-4 px-4">Ribbon Type</th>
                <th className="py-4 px-4">Diameter / Thickness</th>
                <th className="py-4 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredMedals.map((m) => (
                <tr
                  key={m.id}
                  onClick={() => setSelectedModalMedal(m)}
                  className="hover:bg-sky-50/40 dark:hover:bg-slate-800/60 cursor-pointer transition"
                >
                  <td className="py-3.5 px-4 font-mono font-bold text-[#009fe3] dark:text-cyan-400">
                    {m.code}
                  </td>
                  <td className="py-3.5 px-4 font-extrabold text-slate-900 dark:text-white">
                    {m.title}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300">{m.material}</td>
                  <td className="py-3.5 px-4 font-semibold text-slate-700 dark:text-slate-200">{m.finish}</td>
                  <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400">{m.ribbon}</td>
                  <td className="py-3.5 px-4 font-mono text-[11px] text-[#009fe3] dark:text-cyan-400">{m.diameter}</td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedModalMedal(m);
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

      {/* ── 360° MEDAL MODAL ── */}
      {selectedModalMedal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border-2 border-[#009fe3]/50 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-2xl space-y-6"
          >
            <button
              onClick={() => setSelectedModalMedal(null)}
              className="absolute top-5 right-5 rounded-full bg-slate-100 dark:bg-slate-800 p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-start gap-4">
              <div className="relative h-24 w-28 shrink-0 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-950">
                <Image
                  src={selectedModalMedal.img}
                  alt={selectedModalMedal.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-xs font-black uppercase text-[#009fe3] bg-sky-50 dark:bg-slate-800 px-2.5 py-0.5 rounded">
                  {selectedModalMedal.code} • {selectedModalMedal.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  {selectedModalMedal.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{selectedModalMedal.material}</p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
              <p>{selectedModalMedal.description}</p>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-3">
                  <span className="text-[10px] text-slate-400 uppercase block">Plating Finish</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{selectedModalMedal.finish}</span>
                </div>
                <div className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-3">
                  <span className="text-[10px] text-slate-400 uppercase block">Diameter &amp; Thickness</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{selectedModalMedal.diameter}</span>
                </div>
              </div>

              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 block mb-2">
                  Ideal Applications
                </span>
                <div className="grid grid-cols-2 gap-1.5">
                  {selectedModalMedal.idealFor.map((app, i) => (
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
                <span>Request a Quote for {selectedModalMedal.code}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                onClick={() => setSelectedModalMedal(null)}
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
