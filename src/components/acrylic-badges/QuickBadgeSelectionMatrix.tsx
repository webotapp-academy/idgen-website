"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Maximize2,
  X,
  Search,
  Grid,
  List,
  Magnet,
  Check,
} from "lucide-react";

export interface BadgeCatalogItem {
  id: string;
  code: string;
  title: string;
  category: "executive" | "contour" | "medical" | "prefect" | "metallic";
  material: string;
  attachment: string;
  finish: string;
  img: string;
  badge: string;
  description: string;
  idealFor: string[];
}

export const badgeCatalog: BadgeCatalogItem[] = [
  {
    id: "acr-01",
    code: "ACR-01",
    title: "Crystal Clear Executive Name Badge",
    category: "executive",
    material: "3mm High-Gloss Cast PMMA Acrylic",
    attachment: "Triple Neodymium Magnetic Plate",
    finish: "Diamond Flame-Polished Edge",
    img: "/images/Acrylic Badges Samples/Sample 1.jpg",
    badge: "Executive Standard",
    description:
      "Optically clear PMMA name badge with crisp sub-surface 1440 DPI UV printing and clothes-safe magnetic backing.",
    idealFor: ["Corporate Staff", "Hotel Executives", "Branch Managers", "Conference Delegates"],
  },
  {
    id: "acr-02",
    code: "ACR-02",
    title: "Golden Metallic Inlay Acrylic Pin",
    category: "metallic",
    material: "Dual Layer Acrylic + Brass Mirror Inlay",
    attachment: "Dual Magnet / Pin Combo",
    finish: "Laser Chamfered Gold Border",
    img: "/images/Acrylic Badges Samples/Sample 2.jpg",
    badge: "Metallic Inlay",
    description:
      "Reflective metallic foil underlay with transparent optical acrylic face for a luxurious premium shimmer.",
    idealFor: ["VIP Passes", "Award Recipients", "Executive Directors", "Leadership Crests"],
  },
  {
    id: "acr-03",
    code: "ACR-03",
    title: "High-Gloss Corporate Crest Badge",
    category: "contour",
    material: "3mm Cast Acrylic",
    attachment: "Neodymium Magnet Plate",
    finish: "Full Bleed Direct UV Print",
    img: "/images/Acrylic Badges Samples/Sample 3.jpg",
    badge: "Corporate Crest",
    description:
      "High-contrast brand crest badge engineered to match exact company logo Pantone color codes.",
    idealFor: ["Bank Personnel", "IT Enterprise Teams", "Automotive Showrooms", "Real Estate Staff"],
  },
  {
    id: "acr-04",
    code: "ACR-04",
    title: "Precision Laser Cut Shape Badge",
    category: "contour",
    material: "CO2 Laser Contour Cut PMMA",
    attachment: "Stainless Safety Pin or Magnet",
    finish: "Smooth Flame-Polished Bevel",
    img: "/images/Acrylic Badges Samples/Sample 4.jpg",
    badge: "Custom Silhouette",
    description:
      "Custom cut to match the exact organic outline of your organizational emblem or mascot silhouette.",
    idealFor: ["Sports Clubs", "Event Volunteers", "Festival Organizers", "Brand Ambassadors"],
  },
  {
    id: "acr-05",
    code: "ACR-05",
    title: "Doctor & Hospital Staff Magnetic Pin",
    category: "medical",
    material: "Anti-Bacterial UV Sealed PMMA",
    attachment: "Clothes-Safe Triple Magnet",
    finish: "Scratch-Resistant Protective Coat",
    img: "/images/Acrylic Badges Samples/Sample 5.jpg",
    badge: "Healthcare Grade",
    description:
      "Sterilizable, wipeable acrylic name tag with bold designation titles and doctor photograph.",
    idealFor: ["Doctors & Surgeons", "Hospital Nurses", "Diagnostic Labs", "Clinic Practitioners"],
  },
  {
    id: "acr-06",
    code: "ACR-06",
    title: "VIP Executive Gold Border Badge",
    category: "metallic",
    material: "3.5mm Double Layer PMMA",
    attachment: "Heavy Duty Dual Magnet",
    finish: "Mirror Gold Foil Beveled Edge",
    img: "/images/Acrylic Badges Samples/Sample 6.jpg",
    badge: "VIP Edition",
    description:
      "Ultra-premium gold-bordered badge designed for high-profile summits and senior government dignitaries.",
    idealFor: ["Summit Speakers", "Government Delegations", "Board Members", "Chief Guests"],
  },
  {
    id: "acr-07",
    code: "ACR-07",
    title: "Custom Curved Institutional Crest",
    category: "contour",
    material: "3mm Crystal Acrylic",
    attachment: "Safety Pin or Magnet",
    finish: "Micro-Polished Perimeter",
    img: "/images/Acrylic Badges Samples/Sample 7.jpg",
    badge: "Contour Crest",
    description:
      "Elegantly curved institutional badge providing a refined 3D depth effect for university and academy crests.",
    idealFor: ["University Faculty", "Academy Alumni", "Trust Foundations", "Cultural Societies"],
  },
  {
    id: "acr-08",
    code: "ACR-08",
    title: "Frosted Matt Finish Acrylic Tag",
    category: "executive",
    material: "Frosted Matte Cast PMMA",
    attachment: "Neodymium Magnetic Backing",
    finish: "Anti-Glare Frosted Satin Face",
    img: "/images/Acrylic Badges Samples/Sample 8.jpg",
    badge: "Frosted Matte",
    description:
      "Contemporary anti-glare frosted finish that eliminates surface reflections under bright showroom lighting.",
    idealFor: ["Tech Startups", "Architect Studios", "Modern Boutique Staff", "Creative Agencies"],
  },
  {
    id: "acr-09",
    code: "ACR-09",
    title: "Double-Layer 3D Acrylic Badge",
    category: "prefect",
    material: "Dual 2mm+2mm Acrylic Sandwich",
    attachment: "Butterfly Clutch / Pin / Magnet",
    finish: "3D Raised Element Layering",
    img: "/images/Acrylic Badges Samples/Sample 9.jpg",
    badge: "3D Layered",
    description:
      "Multi-layered acrylic badge with raised 3D logo emblems for student prefects, captains, and house leaders.",
    idealFor: ["School Prefects", "House Captains", "Head Boys & Girls", "Sports Champions"],
  },
  {
    id: "acr-10",
    code: "ACR-10",
    title: "Heavy Duty Neodymium Magnetic Backing",
    category: "executive",
    material: "Reinforced ABS + 3x N52 Magnets",
    attachment: "3M High-Tack Adhesive Plate",
    finish: "Encapsulated Corrosion-Proof",
    img: "/images/Acrylic Badges Samples/Sample 10.jpg",
    badge: "Hardware Backing",
    description:
      "Industrial-grade triple neodymium magnetic plate capable of holding through heavy blazers, tweed, and lab coats.",
    idealFor: ["Uniform Blouses", "Suit Blazers", "Medical Aprons", "Delicate Silk Wear"],
  },
];

export function QuickBadgeSelectionMatrix({
  data,
}: {
  data?: {
    badge?: string;
    title?: string;
    lede?: string;
    catalog?: BadgeCatalogItem[];
  };
} = {}) {
  const badgeTitle = data?.badge || "Badge Selection Matrix";
  const sectionTitle = data?.title || "Acrylic Badge Models & Styles";
  const sectionLede =
    data?.lede ||
    "Review real production badge models manufactured with cast PMMA acrylic sheets, direct UV printing, and neodymium magnetic backings.";
  const activeCatalog =
    data?.catalog && data.catalog.length > 0 ? data.catalog : badgeCatalog;

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const [selectedModalBadge, setSelectedModalBadge] = useState<BadgeCatalogItem | null>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setSelectedModalBadge(null);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const filteredBadges = activeCatalog.filter((item) => {
    const matchesCat = activeCategory === "all" || item.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      q === "" ||
      item.title.toLowerCase().includes(q) ||
      item.code.toLowerCase().includes(q) ||
      item.material.toLowerCase().includes(q) ||
      item.attachment.toLowerCase().includes(q) ||
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
            { id: "all", label: "All Models" },
            { id: "executive", label: "Executive Magnetic" },
            { id: "contour", label: "Custom Contour Shapes" },
            { id: "medical", label: "Healthcare & Doctor Tags" },
            { id: "prefect", label: "School Prefects & Awards" },
            { id: "metallic", label: "Gold & Metallic Inlay" },
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
            placeholder="Search by code, material, shape..."
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
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {filteredBadges.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedModalBadge(item)}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm hover:shadow-2xl hover:border-[#009fe3]/80 transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-2.5">
                  <span className="font-mono text-xs font-black uppercase text-[#009fe3] dark:text-cyan-400 bg-sky-50 dark:bg-slate-800 px-2 py-0.5 rounded-lg border border-sky-200/60 dark:border-slate-700">
                    {item.code}
                  </span>
                  <span className="rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 text-[9px] font-bold">
                    {item.badge}
                  </span>
                </div>

                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-950 mb-3 flex items-center justify-center p-2">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-2 right-2 rounded-lg bg-slate-900/80 text-white p-1.5 opacity-0 group-hover:opacity-100 transition">
                    <Maximize2 className="h-3.5 w-3.5" />
                  </div>
                </div>

                <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white group-hover:text-[#009fe3] transition-colors leading-snug line-clamp-1">
                  {item.title}
                </h3>
                <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                  {item.material}
                </p>

                <div className="mt-2.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-[10px] font-semibold text-slate-700 dark:text-slate-300 truncate">
                  <span className="text-slate-400 block text-[9px] uppercase">Fastener</span>
                  {item.attachment}
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-bold text-[#009fe3] dark:text-cyan-400 group-hover:underline">
                <span>View Details</span>
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
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
                <th className="py-4 px-4">Model Name</th>
                <th className="py-4 px-4">Acrylic Material</th>
                <th className="py-4 px-4">Attachment Option</th>
                <th className="py-4 px-4">Edge Finish</th>
                <th className="py-4 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredBadges.map((b) => (
                <tr
                  key={b.id}
                  onClick={() => setSelectedModalBadge(b)}
                  className="hover:bg-sky-50/50 dark:hover:bg-slate-800/60 cursor-pointer transition"
                >
                  <td className="py-3.5 px-4 font-mono font-bold text-[#009fe3] dark:text-cyan-400">
                    {b.code}
                  </td>
                  <td className="py-3.5 px-4 font-extrabold text-slate-900 dark:text-white">
                    {b.title}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300">{b.material}</td>
                  <td className="py-3.5 px-4 font-semibold text-slate-700 dark:text-slate-200">{b.attachment}</td>
                  <td className="py-3.5 px-4 font-mono text-[11px] text-emerald-600 dark:text-emerald-400">{b.finish}</td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedModalBadge(b);
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

      {/* ── 360° BADGE MODAL ── */}
      {selectedModalBadge && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border-2 border-[#009fe3]/50 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-2xl space-y-6"
          >
            <button
              onClick={() => setSelectedModalBadge(null)}
              className="absolute top-5 right-5 rounded-full bg-slate-100 dark:bg-slate-800 p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-start gap-4">
              <div className="relative h-24 w-24 shrink-0 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-950">
                <Image
                  src={selectedModalBadge.img}
                  alt={selectedModalBadge.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-xs font-black uppercase text-[#009fe3] bg-sky-50 dark:bg-slate-800 px-2.5 py-0.5 rounded">
                  {selectedModalBadge.code} • {selectedModalBadge.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  {selectedModalBadge.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{selectedModalBadge.material}</p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
              <p>{selectedModalBadge.description}</p>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-3">
                  <span className="text-[10px] text-slate-400 uppercase block">Fastener Attachment</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{selectedModalBadge.attachment}</span>
                </div>
                <div className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-3">
                  <span className="text-[10px] text-slate-400 uppercase block">Edge Treatment</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{selectedModalBadge.finish}</span>
                </div>
              </div>

              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 block mb-2">
                  Ideal Applications
                </span>
                <div className="grid grid-cols-2 gap-1.5">
                  {selectedModalBadge.idealFor.map((app, i) => (
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
                <span>Request a Quote for {selectedModalBadge.code}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                onClick={() => setSelectedModalBadge(null)}
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
