"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Layers,
  Sparkles,
  ShieldCheck,
  Lock,
  Unlock,
  CheckCircle2,
  ArrowRight,
  Sliders,
  Crown,
  Eye,
  Building2,
  Maximize2,
  X,
  MessageSquare,
  Zap,
  ChevronLeft,
  ChevronRight,
  Shield,
  CreditCard,
  Grid,
  Check,
  Award,
  Box,
} from "lucide-react";

export interface MasterHolderModel {
  code: string;
  badge: string;
  category: "vertical" | "horizontal" | "executive" | "attachment";
  title: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
  popular?: boolean;
  premium?: boolean;
  specs: { k: string; v: string }[];
  suitable: string[];
  conclusion: string;
  highlightTag: string;
}

export const masterHolderModels: MasterHolderModel[] = [
  {
    code: "V-1",
    badge: "Standard Portrait",
    category: "vertical",
    title: "V-1 — Vertical Standard ID Card Holder",
    tagline: "The industry-standard vertical holder for portrait-oriented cards",
    description: "The V-1 is our benchmark portrait holder designed for standard 86 × 54 mm ID cards. Molded from 100% virgin polymer with high optical clarity, it provides everyday drop-in convenience, gloss finish, and universal lanyard slot compatibility.",
    image: "/images/ID card holder/V-1/V-1.png",
    alt: "V-1 Vertical Standard ID Card Holder",
    popular: true,
    highlightTag: "Most Popular Portrait",
    specs: [
      { k: "Capacity", v: "1 Standard CR80 Card" },
      { k: "Orientation", v: "Vertical (Portrait)" },
      { k: "Material", v: "100% Virgin Plastic Polymer" },
      { k: "Finish", v: "Optical Gloss Transparent" },
      { k: "Card Format", v: "86 × 54 mm (CR80)" },
      { k: "Lanyard Hole", v: "20 mm Standard Slot" },
      { k: "Retention", v: "Standard Open Slip-In" },
    ],
    suitable: [
      "Student ID cards",
      "Employee ID cards",
      "Staff cards",
      "Office identification",
      "Visitor cards",
      "General institutional identification",
    ],
    conclusion: "V-1 is the standard factory choice for a portrait-oriented 86 × 54 mm card.",
  },
  {
    code: "V-2",
    badge: "Four-Side Lock",
    category: "vertical",
    title: "V-2 — Vertical Four-Side-Lock ID Card Holder",
    tagline: "Transparent vertical holder featuring four-side locking perimeter clips",
    description: "The V-2 is a heavy-duty transparent vertical holder featuring an integrated four-side perimeter lock. It firmly secures the card inside the frame, completely eliminating accidental slip-outs during active physical movement.",
    image: "/images/ID card holder/V-2/V-2.png",
    alt: "V-2 Vertical 4-Side Lock ID Card Holder",
    popular: true,
    highlightTag: "Maximum Retention Lock",
    specs: [
      { k: "Capacity", v: "1 Standard CR80 Card" },
      { k: "Locking Type", v: "4-Side Perimeter Snap Lock" },
      { k: "Orientation", v: "Vertical (Portrait)" },
      { k: "Material", v: "High-Impact Virgin Polymer" },
      { k: "Card Format", v: "86 × 54 mm" },
      { k: "Lanyard Hole", v: "20 mm Standard Slot" },
      { k: "Optical Clarity", v: "Crystal Transparent" },
    ],
    suitable: [
      "Active workforce & field staff",
      "Student identification",
      "Employee identification",
      "Institutional cards",
      "Visitor cards",
      "Everyday organizational identification",
    ],
    conclusion: "Choose V-2 when maximum four-side card retention is required.",
  },
  {
    code: "V-3",
    badge: "Chemical Sticker",
    category: "vertical",
    title: "V-3 — Chemical Sticker ID Card Holder",
    tagline: "Vertical holder designed for chemical dome and sticker format cards",
    description: "The V-3 is a specialized vertical holder designed for identification formats requiring chemical sticker or resin dome badge encapsulation. It provides an airtight, scratch-resistant barrier safeguarding delicate printed surfaces.",
    image: "/images/ID card holder/V-3/V-3.png",
    alt: "V-3 Chemical Sticker ID Card Holder",
    highlightTag: "Sealed Surface Protection",
    specs: [
      { k: "Format Style", v: "Chemical Sticker Sealed" },
      { k: "Orientation", v: "Vertical (Portrait)" },
      { k: "Card Format", v: "86 × 54 mm" },
      { k: "Lanyard Hole", v: "20 mm Standard Slot" },
      { k: "Environmental Guard", v: "High Scratch & Chemical Guard" },
      { k: "Material", v: "Impact Protective Polymer" },
    ],
    suitable: [
      "Heavy industry & engineering badges",
      "Permanent chemical sticker sets",
      "Employee identification",
      "Student identification",
      "Office identification",
      "Moisture-exposed operations",
    ],
    conclusion: "Technical specifications and availability should be confirmed for V-3 prior to ordering.",
  },
  {
    code: "H-1",
    badge: "Standard Landscape",
    category: "horizontal",
    title: "H-1 — Horizontal Standard ID Card Holder",
    tagline: "Standard horizontal holder designed for landscape-oriented cards",
    description: "The H-1 is our standard horizontal holder designed specifically for landscape-oriented identification cards. Features a centered 20mm slot for balanced hanging on lanyards without tilting.",
    image: "/images/ID card holder/H-1/IMG_20250131_182906.jpg",
    alt: "H-1 Horizontal Standard ID Card Holder",
    popular: true,
    highlightTag: "Standard Landscape",
    specs: [
      { k: "Capacity", v: "1 Standard CR80 Card" },
      { k: "Orientation", v: "Horizontal (Landscape)" },
      { k: "Material", v: "100% Virgin Plastic Polymer" },
      { k: "Finish", v: "High-Gloss Transparent" },
      { k: "Card Format", v: "54 × 86 mm" },
      { k: "Lanyard Hole", v: "20 mm Centered Top Slot" },
    ],
    suitable: [
      "Employee cards",
      "Corporate identification",
      "Event cards",
      "Conference badges",
      "Visitor cards",
      "Horizontal institutional cards",
    ],
    conclusion: "Choose H-1 for a standard landscape-oriented card.",
  },
  {
    code: "H-2",
    badge: "Four-Side Lock",
    category: "horizontal",
    title: "H-2 — Horizontal Four-Side-Lock ID Card Holder",
    tagline: "Horizontal holder with four-side locking perimeter design",
    description: "The H-2 provides landscape orientation with our heavy-duty four-side snap-lock frame. It keeps wide-format cards rigidly enclosed, preventing accidental card fallout during movement.",
    image: "/images/ID card holder/H-2/H-2.png",
    alt: "H-2 Horizontal 4-Side Lock ID Card Holder",
    highlightTag: "Landscape 4-Side Lock",
    specs: [
      { k: "Retention System", v: "4-Side Perimeter Snap Lock" },
      { k: "Orientation", v: "Horizontal (Landscape)" },
      { k: "Material", v: "High-Impact Virgin Polymer" },
      { k: "Card Format", v: "54 × 86 mm" },
      { k: "Lanyard Hole", v: "20 mm Centered Top Slot" },
      { k: "Type", v: "Crystal Transparent" },
    ],
    suitable: [
      "Horizontal card + four-side retention → H-2",
      "Corporate conference badges",
      "Aviation & transport identification",
      "Enterprise staff security passes",
    ],
    conclusion: "Horizontal card + four-side retention → H-2.",
  },
  {
    code: "Metal",
    badge: "Premium Metal",
    category: "executive",
    title: "Metal ID Card Holder",
    tagline: "Premium metallic holder for executive identification",
    description: "The Metal ID Card Holder is a premium holder option for organizations looking for a prestigious appearance beyond standard plastic holders. Built with a CNC-machined alloy frame and protective front window.",
    image: "/images/ID card holder/1f823cf1-0d85-4374-8360-3082d74d7b2d.jpg",
    alt: "Executive Metal ID Card Holder",
    premium: true,
    highlightTag: "Executive Metal Alloy",
    specs: [
      { k: "Frame Material", v: "Anodized Aluminum Alloy" },
      { k: "Protective Window", v: "Scratch-Resistant Polycarbonate" },
      { k: "Weight", v: "Solid Executive Weight" },
      { k: "Orientation", v: "Vertical / Portrait" },
      { k: "Finish", v: "Matte Anodized Metallic" },
    ],
    suitable: [
      "Corporate identification",
      "Premium employee cards",
      "Professional organizations",
      "Special events & summits",
      "Institutional identification",
    ],
    conclusion: "Exact dimensions and construction depend on the selected model and should be confirmed before ordering.",
  },
  {
    code: "CV-1",
    badge: "Executive Crystal",
    category: "executive",
    title: "CV-1 Crystal ID Card Holder",
    tagline: "Distinctive, diamond-beveled premium optical presentation",
    description: "The CV-1 Crystal ID Card Holder provides a distinctive, premium-style presentation. Its diamond-cut beveled acrylic edges refract light to create an executive glass-like showcase for VIP credentials.",
    image: "/images/ID card holder/CV-1/CV-1..png",
    alt: "CV-1 Crystal ID Card Holder",
    premium: true,
    highlightTag: "Optical Crystal Bevel",
    specs: [
      { k: "Material", v: "Optical Grade High-Density Acrylic" },
      { k: "Edge Treatment", v: "Diamond-Cut Beveled Facets" },
      { k: "Refraction", v: "Prismatic Glass Reflection" },
      { k: "Orientation", v: "Vertical (Portrait)" },
      { k: "Lanyard Slot", v: "Integrated 20 mm Slot" },
    ],
    suitable: [
      "Corporate identification",
      "Premium memberships",
      "Events & VIP Summits",
      "Professional organizations",
      "Institutions",
      "Special identification applications",
    ],
    conclusion: "Exact dimensions and technical specifications should be confirmed for the selected model.",
  },
  {
    code: "Fish Hook",
    badge: "Attachment",
    category: "attachment",
    title: "Fish Hook — ID Card Holder Attachment",
    tagline: "Secure attachment to connect holder to lanyard",
    description: "A fish hook is an attachment used to connect a suitable ID card holder or badge to a lanyard. Features a 360-degree rotational swivel and spring-loaded snap clip that fits all IDGen 20mm apertures.",
    image: "/images/Lanyard with Holder Samples/Sample 26.jpg",
    alt: "Fish Hook ID Card Holder Attachment",
    highlightTag: "360° Swivel Hardware",
    specs: [
      { k: "Hardware Type", v: "Spring-Loaded Swivel Dog Hook" },
      { k: "Plating", v: "Polished Nickel-Chrome" },
      { k: "Swivel Mechanism", v: "360° Full Rotational Swivel" },
      { k: "Compatibility", v: "Mates with All 20 mm Slots" },
    ],
    suitable: [
      "Student cards",
      "Employee cards",
      "Visitor cards",
      "Event badges",
    ],
    conclusion: "Essential attachment for connecting ID card holders to printed lanyards.",
  },
];

import type { DynamicIdCardHoldersRangeMaster } from "@/lib/dynamic-id-card-holders-types";

export function HolderRangeMasterShowcase({
  data,
}: {
  data?: DynamicIdCardHoldersRangeMaster;
} = {}) {
  const activeModels = data?.models && data.models.length > 0 ? data.models : masterHolderModels;
  const [selectedCode, setSelectedCode] = useState<string>("V-2");
  const [activeTab, setActiveTab] = useState<"specs" | "suitable" | "overview">("specs");
  const [displayMode, setDisplayMode] = useState<"stage" | "grid">("grid");

  const currentModel = activeModels.find((m) => m.code === selectedCode) || activeModels[0];

  // Carousel slider state & logic
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  // Responsive items count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else if (window.innerWidth < 1280) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, masterHolderModels.length - itemsPerPage);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-play (autosliding)
  useEffect(() => {
    if (isPaused || displayMode !== "grid") return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, handleNext, displayMode]);

  return (
    <section className="relative mt-16 sm:mt-20 scroll-mt-28" id="holder-catalog">
      {/* ── Section Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
            <Box className="h-3.5 w-3.5" />
            <span>{data?.eyebrow || "IDGen Manufacturing Catalog"}</span>
          </div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">
            {data?.title || "ID Card Holder Range"}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
            {data?.lede || "Explore our complete line of portrait, landscape, four-side-lock, metal, crystal, and chemical sticker card holders engineered for durability and flawless lanyard fit."}
          </p>
        </div>

        {/* View Switcher: Interactive Stage vs Grid */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400">View Style:</span>
          <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setDisplayMode("stage")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                displayMode === "stage"
                  ? "bg-white dark:bg-slate-800 text-[#009fe3] dark:text-cyan-400 shadow-xs"
                  : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Interactive Stage
            </button>
            <button
              type="button"
              onClick={() => setDisplayMode("grid")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                displayMode === "grid"
                  ? "bg-white dark:bg-slate-800 text-[#009fe3] dark:text-cyan-400 shadow-xs"
                  : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              All Cards Grid
            </button>
          </div>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════
          VIEW 1: INTERACTIVE SPOTLIGHT STAGE
          ═════════════════════════════════════════════════════════════ */}
      {displayMode === "stage" && (
        <div className="space-y-6">
          {/* Quick Model Navigation Strip */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {activeModels.map((m) => {
              const isSelected = m.code === selectedCode;
              return (
                <button
                  key={m.code}
                  type="button"
                  onClick={() => setSelectedCode(m.code)}
                  className={`shrink-0 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border text-xs font-bold transition-all duration-200 ${
                    isSelected
                      ? "border-[#009fe3] bg-gradient-to-r from-sky-50 to-white dark:from-slate-800 dark:to-slate-900 text-slate-900 dark:text-white shadow-md ring-2 ring-[#009fe3]/30 -translate-y-0.5"
                      : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  <span
                    className={`font-mono text-xs font-black px-2 py-0.5 rounded-lg ${
                      isSelected
                        ? "bg-[#009fe3] text-white"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    {m.code}
                  </span>
                  <span>{m.badge}</span>
                  {m.premium && <Crown className="h-3 w-3 text-amber-500" />}
                </button>
              );
            })}
          </div>

          {/* ── Main Stage Showcase Box ── */}
          <div className="relative overflow-hidden rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 lg:p-10 shadow-2xl shadow-slate-200/50 dark:shadow-black/50">
            {/* Ambient Lighting Orbs */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />

            <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
              {/* Left: Studio Product Visual Showcase */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative aspect-[4/3] w-full max-w-[380px] overflow-hidden rounded-3xl bg-gradient-to-b from-slate-50 via-slate-100/70 to-slate-200/60 dark:from-slate-800 dark:via-slate-800/80 dark:to-slate-950 p-6 border border-slate-200 dark:border-slate-700 shadow-xl flex items-center justify-center group">
                  <Image
                    src={currentModel.image}
                    alt={currentModel.alt}
                    fill
                    priority
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-110 drop-shadow-2xl"
                  />

                  {/* Top Floating Badges */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5">
                    <span className="rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-3 py-1 font-mono text-xs font-black shadow-md">
                      {currentModel.code}
                    </span>
                    <span className="rounded-full bg-emerald-500/90 text-white px-2.5 py-0.5 text-[10px] font-bold shadow-xs">
                      {currentModel.highlightTag}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 text-[10px] font-bold bg-white/90 dark:bg-slate-900/90 px-2 py-1 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                    High-Res Studio Render
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  <span>100% Guaranteed IDGen Quality</span>
                </div>
              </div>

              {/* Right: Technical Breakdown & Tabs */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="rounded-full bg-sky-100 dark:bg-sky-950 text-[#009fe3] dark:text-cyan-400 border border-[#009fe3]/20 px-2.5 py-0.5 text-xs font-bold">
                      {currentModel.badge}
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                      {currentModel.category} Series
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                    {currentModel.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {currentModel.description}
                  </p>
                </div>

                {/* Sub-Tabs: Specs | Suitable For | Overview */}
                <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab("specs")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      activeTab === "specs"
                        ? "bg-[#009fe3] text-white shadow-xs"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    Specifications ({currentModel.specs.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("suitable")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      activeTab === "suitable"
                        ? "bg-[#009fe3] text-white shadow-xs"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    Suitable Applications ({currentModel.suitable.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("overview")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      activeTab === "overview"
                        ? "bg-[#009fe3] text-white shadow-xs"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    Summary Note
                  </button>
                </div>

                {/* Tab Content 1: Specs Grid */}
                {activeTab === "specs" && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {currentModel.specs.map((s, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-800/60 p-3"
                      >
                        <span className="block text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                          {s.k}
                        </span>
                        <span className="text-xs font-bold text-slate-900 dark:text-slate-100 mt-0.5 block">
                          {s.v}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tab Content 2: Suitable For */}
                {activeTab === "suitable" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentModel.suitable.map((use, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/50 p-2.5 text-xs font-medium text-slate-800 dark:text-slate-200"
                      >
                        <CheckCircle2 className="h-4 w-4 text-[#009fe3] dark:text-cyan-400 shrink-0" />
                        <span>{use}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tab Content 3: Overview Conclusion */}
                {activeTab === "overview" && (
                  <div className="rounded-2xl border border-sky-200/60 dark:border-sky-800/40 bg-sky-50/50 dark:bg-sky-950/30 p-4 text-xs font-medium text-slate-700 dark:text-slate-300">
                    <p className="font-bold text-[#009fe3] dark:text-cyan-400 mb-1">Factory Recommendation:</p>
                    <p>{currentModel.conclusion}</p>
                  </div>
                )}

                {/* Action Buttons Row */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <a
                    href={`https://wa.me/919207012084?text=Hi%20IDGen%20Team%2C%20I%20am%20interested%20in%20a%20bulk%20order%20of%20the%20${currentModel.code}%20(${currentModel.title})%20ID%20card%20holder.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl bg-[#009fe3] hover:bg-[#0084be] text-white px-5 py-3 text-xs font-bold shadow-md shadow-sky-500/20 transition-all hover:-translate-y-0.5"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Get Instant Quote for {currentModel.code}</span>
                  </a>

                  <Link
                    href="/request-a-quote/"
                    className="inline-flex items-center gap-1.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition"
                  >
                    <span>Request Physical Sample</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═════════════════════════════════════════════════════════════
          VIEW 2: FULL ALL-MODELS COMPARISON GRID
          ═════════════════════════════════════════════════════════════ */}
      {displayMode === "grid" && (
        <div
          className="relative space-y-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Top Carousel Navigation Controls & Indicator */}
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#009fe3] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Slide {currentIndex + 1} of {maxIndex + 1} ({activeModels.length} Models)
              </span>
            </div>

            {activeModels.length > itemsPerPage && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous slide"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 shadow-2xs hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 active:scale-95 transition"
                >
                  <ChevronLeft className="h-4.5 w-4.5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next slide"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 shadow-2xs hover:border-[#009fe3] hover:text-[#009fe3] dark:hover:text-cyan-400 active:scale-95 transition"
                >
                  <ChevronRight className="h-4.5 w-4.5" />
                </button>
              </div>
            )}
          </div>

          {/* Carousel Track Window */}
          <div className="overflow-hidden rounded-3xl p-1">
            <div
              className="flex transition-transform duration-500 ease-out gap-5"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage + (itemsPerPage === 1 ? 0 : 1.25))}%)`,
              }}
            >
              {activeModels.map((holder) => (
                <div
                  key={holder.code}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#009fe3] hover:shadow-xl dark:hover:border-cyan-500 shrink-0"
                  style={{
                    width: `calc(${100 / itemsPerPage}% - ${(1.25 * (itemsPerPage - 1)) / itemsPerPage}rem)`,
                  }}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-xs font-black text-white bg-slate-900 dark:bg-white dark:text-slate-900 px-2.5 py-1 rounded-xl">
                        {holder.code}
                      </span>
                      <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[10px] font-bold text-slate-600 dark:text-slate-300">
                        {holder.badge}
                      </span>
                    </div>

                    {/* Visual */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-950 p-3 border border-slate-100 dark:border-slate-800 flex items-center justify-center">
                      <Image
                        src={holder.image}
                        alt={holder.alt}
                        fill
                        className="object-contain p-2 transition-transform duration-300 group-hover:scale-108"
                      />
                    </div>

                    <div className="mt-4 space-y-1.5">
                      <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#009fe3] dark:group-hover:text-cyan-400 transition-colors">
                        {holder.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                        {holder.description}
                      </p>
                    </div>

                    {/* Specs Pill List */}
                    <div className="mt-3 space-y-1 text-[11px] bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                      {holder.specs.slice(0, 3).map((s, idx) => (
                        <div key={idx} className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                          <span className="text-slate-400 dark:text-slate-500">{s.k}:</span>
                          <span className="font-semibold">{s.v}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action */}
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCode(holder.code);
                        setDisplayMode("stage");
                      }}
                      className="flex-1 rounded-xl bg-slate-100 dark:bg-slate-800 px-3 py-2 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                    >
                      Stage View
                    </button>
                    <a
                      href={`https://wa.me/919207012084?text=Hi%20IDGen%2C%20I%20want%20to%20order%20the%20${holder.code}%20holder.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-[#009fe3] hover:bg-[#0084be] text-white px-3 py-2 text-xs font-bold shadow-xs transition"
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
