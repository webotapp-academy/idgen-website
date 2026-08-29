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
  Filter,
  Check,
  Eye,
  Building2,
  GraduationCap,
  Briefcase,
  Crown,
  Maximize2,
  X,
  ExternalLink,
  MessageSquare,
  HelpCircle,
  Zap,
  Info,
  ChevronLeft,
  ChevronRight,
  Shield,
  CreditCard,
  Grid,
  List,
} from "lucide-react";

export interface HolderItem {
  id: string;
  code: string;
  name: string;
  req: string;
  badge: string;
  category: "vertical" | "horizontal" | "executive" | "attachment";
  orientation: "Vertical (Portrait)" | "Horizontal (Landscape)" | "Universal / Hardware";
  cardFormat: string;
  lockType: "Standard Drop-In" | "Four-Side Lock" | "Chemical Sticker Seal" | "Executive Metal Frame" | "Optical Crystal Bevel" | "Swivel Attachment";
  retentionRating: number; // 1 to 5
  material: string;
  finish: string;
  lanyardHole: string;
  image: string;
  alt: string;
  tagline: string;
  description: string;
  popular?: boolean;
  premium?: boolean;
  securityBadge?: string;
  suitable: string[];
  specs: { k: string; v: string }[];
}

export const holderCatalog: HolderItem[] = [
  {
    id: "v1",
    code: "V-1",
    name: "Standard Vertical Holder",
    req: "Standard vertical card",
    badge: "Standard Portrait",
    category: "vertical",
    orientation: "Vertical (Portrait)",
    cardFormat: "86 × 54 mm (CR80 Portrait)",
    lockType: "Standard Drop-In",
    retentionRating: 4,
    material: "100% Virgin Plastic Polymer",
    finish: "High-Gloss Transparent",
    lanyardHole: "20 mm Standard Slot",
    image: "/images/ID card holder/V-1/V-1.png",
    alt: "V-1 Vertical Standard ID Card Holder",
    popular: true,
    tagline: "The industry-standard vertical holder for corporate and academic identity cards.",
    description: "The V-1 is our benchmark portrait holder designed for single CR80 cards. Made from 100% virgin polymer with high optical clarity, it provides everyday drop-in convenience and universal lanyard slot compatibility.",
    suitable: [
      "School & University Student Cards",
      "Corporate Office Employee Badges",
      "Visitor & Guest Access Cards",
      "Hospital Staff & Healthcare IDs",
    ],
    specs: [
      { k: "Capacity", v: "1 Standard CR80 Card" },
      { k: "Orientation", v: "Vertical (Portrait)" },
      { k: "Card Format", v: "86 × 54 mm" },
      { k: "Lanyard Aperture", v: "20 mm Anti-Twist" },
      { k: "Polymer Grade", v: "100% Virgin Polymer" },
      { k: "Finish", v: "Optical High-Gloss" },
    ],
  },
  {
    id: "v2",
    code: "V-2",
    name: "Vertical Four-Side-Lock Holder",
    req: "Vertical card with four-side locking",
    badge: "Four-Side Lock",
    category: "vertical",
    orientation: "Vertical (Portrait)",
    cardFormat: "86 × 54 mm (CR80 Portrait)",
    lockType: "Four-Side Lock",
    retentionRating: 5,
    material: "High-Impact Virgin Polymer",
    finish: "Crystal Transparent Gloss",
    lanyardHole: "20 mm Standard Slot",
    image: "/images/ID card holder/V-2/V-2.png",
    alt: "V-2 Vertical 4-Side Lock ID Card Holder",
    popular: true,
    securityBadge: "Maximum Retention",
    tagline: "Precision 4-corner snap-lock system that prevents cards from falling out.",
    description: "The V-2 features integrated four-side perimeter retention clips that securely lock the card inside the transparent frame. Ideal for active environments where card loss cannot be compromised.",
    suitable: [
      "Active Workforce & Manufacturing Plants",
      "Industrial & Logistics Staff Badges",
      "Healthcare & Emergency Services",
      "Daily Commute Corporate Identification",
    ],
    specs: [
      { k: "Capacity", v: "1 Standard CR80 Card" },
      { k: "Retention System", v: "4-Side Perimeter Snap Lock" },
      { k: "Orientation", v: "Vertical (Portrait)" },
      { k: "Card Format", v: "86 × 54 mm" },
      { k: "Lanyard Aperture", v: "20 mm Anti-Twist" },
      { k: "Polymer Grade", v: "100% Virgin Impact Polymer" },
    ],
  },
  {
    id: "v3",
    code: "V-3",
    name: "Chemical Sticker Vertical Holder",
    req: "Chemical sticker holder format",
    badge: "Chemical Sticker",
    category: "vertical",
    orientation: "Vertical (Portrait)",
    cardFormat: "86 × 54 mm (Vertical Sticker)",
    lockType: "Chemical Sticker Seal",
    retentionRating: 5,
    material: "Reinforced Protective Polymer",
    finish: "Ultra-Protective Glaze",
    lanyardHole: "20 mm Standard Slot",
    image: "/images/ID card holder/V-3/V-3.png",
    alt: "V-3 Chemical Sticker ID Card Holder",
    securityBadge: "Sealed Surface",
    tagline: "Specialized vertical holder engineered for chemical sticker application and sealed protection.",
    description: "The V-3 is tailored specifically for organizations utilizing chemical dome or adhesive sticker identification formats. It provides an airtight, dust-proof barrier that safeguards the printed chemical surface.",
    suitable: [
      "Heavy Industry & Engineering Badges",
      "Permanent Chemical Dome Badge Sets",
      "Moisture-Exposed & Outdoor Operations",
      "Specialized Security Personnel Cards",
    ],
    specs: [
      { k: "Format Style", v: "Chemical Sticker Specialized" },
      { k: "Orientation", v: "Vertical (Portrait)" },
      { k: "Card Format", v: "86 × 54 mm" },
      { k: "Lanyard Aperture", v: "20 mm Anti-Twist" },
      { k: "Environmental Guard", v: "High Scratch & Moisture Guard" },
    ],
  },
  {
    id: "h1",
    code: "H-1",
    name: "Standard Horizontal Holder",
    req: "Standard horizontal card",
    badge: "Standard Landscape",
    category: "horizontal",
    orientation: "Horizontal (Landscape)",
    cardFormat: "54 × 86 mm (CR80 Landscape)",
    lockType: "Standard Drop-In",
    retentionRating: 4,
    material: "100% Virgin Plastic Polymer",
    finish: "High-Gloss Transparent",
    lanyardHole: "20 mm Centered Top Slot",
    image: "/images/ID card holder/H-1/IMG_20250131_182906.jpg",
    alt: "H-1 Horizontal Standard ID Card Holder",
    popular: true,
    tagline: "Wide-format landscape holder engineered for standard horizontal cards and passes.",
    description: "The H-1 provides balanced, horizontal orientation for cards designed with landscape typography, wide corporate badges, and conference attendee credentials. Features a central 20mm slot for balanced hanging.",
    suitable: [
      "Corporate Executive Landscape Cards",
      "Conference & Event Attendee Passes",
      "Visitor Badges & Contractor Passes",
      "Institutional Landscape ID Credentials",
    ],
    specs: [
      { k: "Capacity", v: "1 Standard CR80 Card" },
      { k: "Orientation", v: "Horizontal (Landscape)" },
      { k: "Card Format", v: "54 × 86 mm" },
      { k: "Lanyard Aperture", v: "20 mm Centered Top Slot" },
      { k: "Polymer Grade", v: "100% Virgin Polymer" },
    ],
  },
  {
    id: "h2",
    code: "H-2",
    name: "Horizontal Four-Side-Lock Holder",
    req: "Horizontal card with four-side locking",
    badge: "Four-Side Lock",
    category: "horizontal",
    orientation: "Horizontal (Landscape)",
    cardFormat: "54 × 86 mm (CR80 Landscape)",
    lockType: "Four-Side Lock",
    retentionRating: 5,
    material: "High-Impact Virgin Polymer",
    finish: "Crystal Transparent Gloss",
    lanyardHole: "20 mm Centered Top Slot",
    image: "/images/ID card holder/H-2/H-2.png",
    alt: "H-2 Horizontal 4-Side Lock ID Card Holder",
    securityBadge: "Maximum Retention",
    tagline: "Horizontal landscape casing with four-corner locking tabs for uncompromised hold.",
    description: "Combining wide horizontal aesthetics with our heavy-duty four-side snap closure, the H-2 ensures horizontal cards remain firmly anchored inside the transparent casing during brisk movement and long shifts.",
    suitable: [
      "High-Movement Corporate Environments",
      "Aviation & Transport Horizontal Badges",
      "Hospitality & Event Operations Staff",
      "Enterprise Access Security Credentials",
    ],
    specs: [
      { k: "Retention System", v: "4-Side Perimeter Snap Lock" },
      { k: "Orientation", v: "Horizontal (Landscape)" },
      { k: "Card Format", v: "54 × 86 mm" },
      { k: "Lanyard Aperture", v: "20 mm Centered Top Slot" },
      { k: "Polymer Grade", v: "100% Virgin Impact Polymer" },
    ],
  },
  {
    id: "metal",
    code: "Metal Holder",
    name: "Executive Metallic ID Holder",
    req: "Premium metal appearance",
    badge: "Premium Metal",
    category: "executive",
    orientation: "Vertical (Portrait)",
    cardFormat: "86 × 54 mm (CR80 Standard)",
    lockType: "Executive Metal Frame",
    retentionRating: 5,
    material: "Brushed Aluminum Alloy Frame",
    finish: "Anodized Matte Metallic",
    lanyardHole: "Reinforced Metal Eyelet",
    image: "/images/ID card holder/1f823cf1-0d85-4374-8360-3082d74d7b2d.jpg",
    alt: "Executive Metal ID Card Holder",
    premium: true,
    tagline: "Solid brushed alloy metal frame delivering commanding presence and executive prestige.",
    description: "The IDGen Executive Metal Holder redefines corporate presentation. Crafted with CNC-machined aluminum alloy and a protective clear window, it gives executive badges substantial weight and sophisticated styling.",
    suitable: [
      "C-Suite & Board Members",
      "Executive Leadership & Directors",
      "Premium Corporate Delegations",
      "Luxury Hospitality & VIP Memberships",
    ],
    specs: [
      { k: "Frame Material", v: "Anodized Aluminum Alloy" },
      { k: "Window", v: "Anti-Scratch Polycarbonate" },
      { k: "Profile", v: "Ultra-Slim Metallic Bezel" },
      { k: "Weight", v: "Substantial Executive Weight" },
      { k: "Finish", v: "Matte Anodized Silver/Grey" },
    ],
  },
  {
    id: "cv1",
    code: "CV-1 Crystal",
    name: "Executive Crystal Optical Holder",
    req: "Premium crystal appearance",
    badge: "Executive Crystal",
    category: "executive",
    orientation: "Vertical (Portrait)",
    cardFormat: "86 × 54 mm (CR80 Portrait)",
    lockType: "Optical Crystal Bevel",
    retentionRating: 5,
    material: "Optical Grade Beveled Acrylic",
    finish: "Diamond-Polished Crystal Gloss",
    lanyardHole: "Integrated 20 mm Top Slot",
    image: "/images/ID card holder/CV-1/CV-1..png",
    alt: "CV-1 Crystal Acrylic ID Card Holder",
    premium: true,
    tagline: "Diamond-beveled optical acrylic casing creating a luminous 3D glass reflection.",
    description: "The CV-1 Crystal Holder is the gold standard for distinguished, high-profile identity presentation. Featuring beveled prismatic edges and ultra-pure optical acrylic, it transforms employee cards into statement pieces.",
    suitable: [
      "Executive & Corporate Headquarters",
      "VIP Diplomatic & Summit Credentials",
      "Private Club & Elite Memberships",
      "High-End Institutional Badges",
    ],
    specs: [
      { k: "Material", v: "Optical Grade High-Density Acrylic" },
      { k: "Edge Treatment", v: "Diamond-Cut Beveled Facets" },
      { k: "Refraction", v: "High-Gloss Crystal Prism Effect" },
      { k: "Orientation", v: "Vertical (Portrait)" },
      { k: "Lanyard Aperture", v: "Integrated 20 mm Slot" },
    ],
  },
  {
    id: "hook",
    code: "Fish Hook",
    name: "Chrome Swivel Dog Hook Hardware",
    req: "Connect holder to lanyard",
    badge: "Attachment",
    category: "attachment",
    orientation: "Universal / Hardware",
    cardFormat: "Universal Lanyard Fitment",
    lockType: "Swivel Attachment",
    retentionRating: 5,
    material: "Nickel-Plated Chrome Alloy",
    finish: "Polished Chrome Mirror",
    lanyardHole: "Engages All 20 mm Slots",
    image: "/images/Lanyard with Holder Samples/Sample 26.jpg",
    alt: "Chrome Swivel Fish Hook Lanyard Attachment",
    tagline: "Heavy-duty 360-degree swivel clip connecting holders securely to lanyards.",
    description: "Our precision-engineered fish hook attachment features a spring-loaded gate and full 360° rotational swivel. It snaps smoothly into the 20mm slot of all IDGen holders without binding or twisting.",
    suitable: [
      "Universal Satin & Polyester Lanyards",
      "High-Cycle Daily Wear & Swiping",
      "Quick-Release Card Detachments",
      "All Vertical & Horizontal Holders",
    ],
    specs: [
      { k: "Hardware Type", v: "Spring-Loaded Swivel Dog Hook" },
      { k: "Plating", v: "Corrosion-Resistant Chrome" },
      { k: "Swivel", v: "360° Free Rotation" },
      { k: "Engagement", v: "Snaps to All IDGen 20mm Slots" },
      { k: "Tensile Strength", v: "Industrial Grade Retention" },
    ],
  },
];

export function QuickHolderSelectionMatrix() {
  const [activeTab, setActiveTab] = useState<"all" | "vertical" | "horizontal" | "executive" | "attachment">("all");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const [selectedHolder, setSelectedHolder] = useState<HolderItem | null>(null);

  // Interactive Recommender Wizard State
  const [wizardOrientation, setWizardOrientation] = useState<"vertical" | "horizontal" | "executive">("vertical");
  const [wizardLock, setWizardLock] = useState<"standard" | "lock" | "special">("lock");

  // Filter items based on active tab
  const filteredHolders = holderCatalog.filter((item) => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  // Calculate recommendation based on wizard selections
  const getWizardRecommendation = () => {
    if (wizardOrientation === "executive") {
      return wizardLock === "standard"
        ? holderCatalog.find((h) => h.code === "Metal Holder")!
        : holderCatalog.find((h) => h.code === "CV-1 Crystal")!;
    }
    if (wizardOrientation === "horizontal") {
      return wizardLock === "lock"
        ? holderCatalog.find((h) => h.code === "H-2")!
        : holderCatalog.find((h) => h.code === "H-1")!;
    }
    // Vertical
    if (wizardLock === "special") {
      return holderCatalog.find((h) => h.code === "V-3")!;
    }
    if (wizardLock === "lock") {
      return holderCatalog.find((h) => h.code === "V-2")!;
    }
    return holderCatalog.find((h) => h.code === "V-1")!;
  };

  const recommendedModel = getWizardRecommendation();

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

  const maxIndex = Math.max(0, filteredHolders.length - itemsPerPage);

  // Reset index when changing active tab
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-play (autosliding)
  useEffect(() => {
    if (isPaused || viewMode !== "grid") return;
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, handleNext, viewMode]);

  return (
    <section className="relative overflow-hidden pt-0 pb-8 scroll-mt-28" id="quick-holder-selection-system">
      {/* ── Background Glow & Grid Accents ── */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[450px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-sky-400/10 via-[#009fe3]/15 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      {/* ── Section Header ── */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-gradient-to-r from-sky-500/10 via-cyan-500/10 to-sky-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#009fe3] dark:text-cyan-400 shadow-xs">
          <Sparkles className="h-3.5 w-3.5 text-[#009fe3] dark:text-cyan-400 animate-pulse" />
          <span>Interactive Fitment & Selection Matrix</span>
        </div>

        <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
          Quick Holder Selection <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009fe3] to-sky-500">System</span>
        </h2>

        <p className="mt-4 text-base text-slate-600 dark:text-slate-300 sm:text-lg">
          Match the exact holder model engineered for your ID card orientation, security retention level, and executive presentation requirement.
        </p>

        {/* Feature Trust Badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs font-semibold text-slate-700 dark:text-slate-300">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 px-3 py-1 shadow-2xs">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
            <span>Fits 86 × 54 mm Standard (CR80)</span>
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 px-3 py-1 shadow-2xs">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
            <span>Universal 20mm Lanyard Slot</span>
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 px-3 py-1 shadow-2xs">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
            <span>100% Virgin Grade Polymer</span>
          </span>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════
          INTERACTIVE SMART MATCH FINDER (WIZARD PANEL)
          ═════════════════════════════════════════════════════════════ */}
      <div className="mb-12 overflow-hidden rounded-3xl border-2 border-sky-200/80 dark:border-sky-800/60 bg-gradient-to-b from-white via-sky-50/20 to-white dark:from-slate-900 dark:via-slate-900/95 dark:to-slate-950 p-6 sm:p-8 lg:p-10 shadow-xl shadow-sky-500/5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200/80 dark:border-slate-800">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
              <Zap className="h-4 w-4" />
              <span>Instant Match Recommender</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
              Not sure which holder fits your setup?
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Select your card orientation &amp; desired retention level to see your factory-recommended match:
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="h-4 w-4" />
              <span>Guaranteed 100% Fitment</span>
            </span>
          </div>
        </div>

        {/* Wizard Interactive Form + Live Recommendation Box */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left: Interactive Step Selectors */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Card Orientation */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                Step 1 • Card Format &amp; Orientation
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => setWizardOrientation("vertical")}
                  className={`flex flex-col items-start p-3.5 rounded-2xl border text-left transition-all duration-200 ${
                    wizardOrientation === "vertical"
                      ? "border-[#009fe3] bg-sky-50/80 dark:bg-sky-950/40 text-slate-900 dark:text-white ring-2 ring-[#009fe3]/40 shadow-sm"
                      : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className="text-xs font-black text-[#009fe3] dark:text-cyan-400">86 × 54 mm</span>
                    <span className="text-base">↕</span>
                  </div>
                  <span className="text-sm font-bold">Vertical (Portrait)</span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Corporate &amp; Student Cards</span>
                </button>

                <button
                  type="button"
                  onClick={() => setWizardOrientation("horizontal")}
                  className={`flex flex-col items-start p-3.5 rounded-2xl border text-left transition-all duration-200 ${
                    wizardOrientation === "horizontal"
                      ? "border-[#009fe3] bg-sky-50/80 dark:bg-sky-950/40 text-slate-900 dark:text-white ring-2 ring-[#009fe3]/40 shadow-sm"
                      : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className="text-xs font-black text-[#009fe3] dark:text-cyan-400">54 × 86 mm</span>
                    <span className="text-base">↔</span>
                  </div>
                  <span className="text-sm font-bold">Horizontal (Landscape)</span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Conferences &amp; Events</span>
                </button>

                <button
                  type="button"
                  onClick={() => setWizardOrientation("executive")}
                  className={`flex flex-col items-start p-3.5 rounded-2xl border text-left transition-all duration-200 ${
                    wizardOrientation === "executive"
                      ? "border-[#009fe3] bg-sky-50/80 dark:bg-sky-950/40 text-slate-900 dark:text-white ring-2 ring-[#009fe3]/40 shadow-sm"
                      : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className="text-xs font-black text-amber-500">VIP / Executive</span>
                    <Crown className="h-3.5 w-3.5 text-amber-500" />
                  </div>
                  <span className="text-sm font-bold">Executive / Luxury</span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Crystal &amp; Metallic Finish</span>
                </button>
              </div>
            </div>

            {/* Step 2: Locking & Security Level */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                Step 2 • Retention &amp; Security Level
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => setWizardLock("standard")}
                  className={`flex flex-col items-start p-3.5 rounded-2xl border text-left transition-all duration-200 ${
                    wizardLock === "standard"
                      ? "border-[#009fe3] bg-sky-50/80 dark:bg-sky-950/40 text-slate-900 dark:text-white ring-2 ring-[#009fe3]/40 shadow-sm"
                      : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-1 text-slate-600 dark:text-slate-400">
                    <Unlock className="h-3.5 w-3.5 text-slate-500" />
                    <span className="text-xs font-bold">Drop-In Slot</span>
                  </div>
                  <span className="text-sm font-bold">Standard Open Slip</span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Easy slide-in &amp; swipe access</span>
                </button>

                <button
                  type="button"
                  onClick={() => setWizardLock("lock")}
                  className={`flex flex-col items-start p-3.5 rounded-2xl border text-left transition-all duration-200 ${
                    wizardLock === "lock"
                      ? "border-[#009fe3] bg-sky-50/80 dark:bg-sky-950/40 text-slate-900 dark:text-white ring-2 ring-[#009fe3]/40 shadow-sm"
                      : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-1 text-emerald-600 dark:text-emerald-400">
                    <Lock className="h-3.5 w-3.5" />
                    <span className="text-xs font-bold">Recommended</span>
                  </div>
                  <span className="text-sm font-bold">4-Side Lock Grip</span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Zero card fallout guarantee</span>
                </button>

                {wizardOrientation === "executive" ? (
                  <button
                    type="button"
                    onClick={() => setWizardLock("special")}
                    className={`flex flex-col items-start p-3.5 rounded-2xl border text-left transition-all duration-200 ${
                      wizardLock === "special"
                        ? "border-[#009fe3] bg-sky-50/80 dark:bg-sky-950/40 text-slate-900 dark:text-white ring-2 ring-[#009fe3]/40 shadow-sm"
                        : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-1.5 mb-1 text-amber-500">
                      <Crown className="h-3.5 w-3.5" />
                      <span className="text-xs font-bold">Optical Acrylic</span>
                    </div>
                    <span className="text-sm font-bold">CV-1 Crystal Bevel</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Prismatic reflective shine</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setWizardLock("special")}
                    className={`flex flex-col items-start p-3.5 rounded-2xl border text-left transition-all duration-200 ${
                      wizardLock === "special"
                        ? "border-[#009fe3] bg-sky-50/80 dark:bg-sky-950/40 text-slate-900 dark:text-white ring-2 ring-[#009fe3]/40 shadow-sm"
                        : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-1.5 mb-1 text-sky-600 dark:text-cyan-400">
                      <Shield className="h-3.5 w-3.5" />
                      <span className="text-xs font-bold">Specialty</span>
                    </div>
                    <span className="text-sm font-bold">Chemical Sticker / Dome</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Airtight sealed barrier</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right: Live Dynamic Match Spotlight Card */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border-2 border-emerald-400/40 bg-gradient-to-br from-emerald-500/10 via-slate-900/90 to-slate-950 p-6 sm:p-7 text-white shadow-2xl">
              {/* Radiant back glow */}
              <div className="pointer-events-none absolute -top-12 -right-12 h-44 w-44 rounded-full bg-emerald-400/20 blur-2xl" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 text-slate-950 px-3 py-1 text-xs font-black shadow-sm">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                  <span>Optimal Match: {recommendedModel.code}</span>
                </span>
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                  {recommendedModel.badge}
                </span>
              </div>

              {/* Product Visual & Details */}
              <div className="relative z-10 mt-5 flex items-center gap-5">
                <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-2xl bg-slate-800/90 border border-slate-700 flex items-center justify-center p-2 shadow-inner group">
                  <Image
                    src={recommendedModel.image}
                    alt={recommendedModel.alt}
                    width={96}
                    height={112}
                    className="h-full w-full object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="space-y-1.5 flex-1 min-w-0">
                  <h4 className="text-lg font-black text-white truncate">
                    {recommendedModel.name}
                  </h4>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {recommendedModel.tagline}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="text-[11px] font-semibold bg-slate-800 text-sky-300 px-2 py-0.5 rounded-md border border-slate-700">
                      {recommendedModel.cardFormat.split(" ")[0]} {recommendedModel.cardFormat.split(" ")[1]}
                    </span>
                    <span className="text-[11px] font-semibold bg-slate-800 text-emerald-300 px-2 py-0.5 rounded-md border border-slate-700">
                      {recommendedModel.lockType}
                    </span>
                  </div>
                </div>
              </div>

              {/* Recommendation Actions */}
              <div className="relative z-10 mt-6 pt-5 border-t border-slate-800 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedHolder(recommendedModel)}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-slate-100 text-slate-950 px-4 py-2.5 text-xs font-bold shadow-md transition-all duration-200"
                >
                  <Eye className="h-3.5 w-3.5 text-slate-900" />
                  <span>Inspect Specs</span>
                </button>

                <a
                  href={`https://wa.me/919207012084?text=Hi%20IDGen%20Team%2C%20I%20need%20a%20bulk%20quote%20for%20the%20${recommendedModel.code}%20(${recommendedModel.name})%20ID%20card%20holder.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#009fe3] hover:bg-[#0084be] text-white px-4 py-2.5 text-xs font-bold shadow-md transition-all duration-200"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════
          TAB FILTER & VIEW TOGGLE CONTROLS
          ═════════════════════════════════════════════════════════════ */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 ${
              activeTab === "all"
                ? "bg-white dark:bg-slate-800 text-[#009fe3] dark:text-cyan-400 shadow-xs"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            All Options ({holderCatalog.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("vertical")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 ${
              activeTab === "vertical"
                ? "bg-white dark:bg-slate-800 text-[#009fe3] dark:text-cyan-400 shadow-xs"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Vertical / Portrait (3)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("horizontal")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 ${
              activeTab === "horizontal"
                ? "bg-white dark:bg-slate-800 text-[#009fe3] dark:text-cyan-400 shadow-xs"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Horizontal / Landscape (2)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("executive")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 ${
              activeTab === "executive"
                ? "bg-white dark:bg-slate-800 text-amber-500 shadow-xs"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Executive &amp; VIP (2)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("attachment")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 ${
              activeTab === "attachment"
                ? "bg-white dark:bg-slate-800 text-[#009fe3] dark:text-cyan-400 shadow-xs"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Attachments (1)
          </button>
        </div>

        {/* View Mode Toggle: Grid vs Table */}
        <div className="flex items-center justify-end gap-2">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 hidden sm:inline">
            Layout:
          </span>
          <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              title="Visual Cards Grid"
              className={`p-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === "grid"
                  ? "bg-white dark:bg-slate-800 text-[#009fe3] dark:text-cyan-400 shadow-xs"
                  : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Grid className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setViewMode("table")}
              title="Comparison Matrix Table"
              className={`p-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === "table"
                  ? "bg-white dark:bg-slate-800 text-[#009fe3] dark:text-cyan-400 shadow-xs"
                  : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════
          VIEW 1: ULTRA-PREMIUM 3D VISUAL CARDS GRID
          ═════════════════════════════════════════════════════════════ */}
      {viewMode === "grid" && (
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
                Slide {currentIndex + 1} of {maxIndex + 1} ({filteredHolders.length} Items)
              </span>
            </div>

            {filteredHolders.length > itemsPerPage && (
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
              {filteredHolders.map((item) => (
                <div
                  key={item.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#009fe3]/70 dark:hover:border-cyan-500/60 hover:shadow-xl hover:shadow-sky-500/10 shrink-0"
                  style={{
                    width: `calc(${100 / itemsPerPage}% - ${(1.25 * (itemsPerPage - 1)) / itemsPerPage}rem)`,
                  }}
                >
                  {/* Ambient top light */}
                  <div className="pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full bg-[#009fe3]/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-40" />

                  <div>
                    {/* Top Badge & Code Row */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-1.5">
                        <span className="rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-3 py-1 text-xs font-mono font-black shadow-xs">
                          {item.code}
                        </span>
                        {item.popular && (
                          <span className="rounded-full bg-[#009fe3]/10 text-[#009fe3] dark:text-cyan-400 border border-[#009fe3]/20 px-2 py-0.5 text-[10px] font-bold">
                            Most Popular
                          </span>
                        )}
                        {item.premium && (
                          <span className="rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 px-2 py-0.5 text-[10px] font-bold flex items-center gap-1">
                            <Crown className="h-2.5 w-2.5" />
                            Executive
                          </span>
                        )}
                      </div>

                      <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                        {item.badge}
                      </span>
                    </div>

                    {/* Central Visual Showcase */}
                    <div
                      onClick={() => setSelectedHolder(item)}
                      className="relative h-44 w-full cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/60 dark:from-slate-800/60 dark:to-slate-900/80 border border-slate-100 dark:border-slate-800/80 p-3 flex items-center justify-center group-hover:border-sky-300 dark:group-hover:border-sky-700 transition-colors"
                    >
                      <Image
                        src={item.image}
                        alt={item.alt}
                        width={180}
                        height={160}
                        className="h-full w-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-108"
                      />
                      <div className="absolute bottom-2 right-2 rounded-lg bg-black/60 backdrop-blur-xs text-white p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="h-3 w-3" />
                      </div>
                    </div>

                    {/* Product Meta & Requirement Info */}
                    <div className="mt-4 space-y-2">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                        <CreditCard className="h-3.5 w-3.5 text-[#009fe3]" />
                        <span>Your Requirement:</span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#009fe3] dark:group-hover:text-cyan-400 transition-colors">
                        {item.req}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                        {item.tagline}
                      </p>
                    </div>

                    {/* Quick Spec Pills */}
                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 dark:bg-slate-800/90 px-2 py-0.5 text-[11px] font-medium text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                        {item.orientation.split(" ")[0]}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 dark:bg-slate-800/90 px-2 py-0.5 text-[11px] font-medium text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
                        <Lock className="h-2.5 w-2.5 text-emerald-500" />
                        {item.lockType}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Action Bar */}
                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedHolder(item)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-2 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    >
                      <Eye className="h-3.5 w-3.5 text-slate-500" />
                      <span>Specs</span>
                    </button>

                    <a
                      href={`https://wa.me/919207012084?text=Hi%20IDGen%20Team%2C%20I%20am%20interested%20in%20ordering%20the%20${item.code}%20ID%20Card%20Holder.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1 rounded-xl bg-[#009fe3] hover:bg-[#0084be] text-white px-3.5 py-2 text-xs font-bold shadow-xs transition-colors"
                      title="Enquire on WhatsApp"
                    >
                      <span>Enquire</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ═════════════════════════════════════════════════════════════
          VIEW 2: ULTRA-PREMIUM COMPARISON MATRIX TABLE
          ═════════════════════════════════════════════════════════════ */}
      {viewMode === "table" && (
        <div className="overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-xl shadow-slate-200/40 dark:shadow-black/40">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-950/80 text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                <tr>
                  <th className="px-5 py-4 min-w-[200px]">Holder Model</th>
                  <th className="px-5 py-4 min-w-[190px]">Matched Requirement</th>
                  <th className="px-5 py-4 min-w-[150px]">Card Format</th>
                  <th className="px-5 py-4 min-w-[170px]">Locking &amp; Retention</th>
                  <th className="px-5 py-4 min-w-[160px]">Material Grade</th>
                  <th className="px-5 py-4 text-right min-w-[140px]">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80 font-medium">
                {filteredHolders.map((item) => (
                  <tr
                    key={item.id}
                    className="transition-colors hover:bg-sky-50/40 dark:hover:bg-slate-800/50 group"
                  >
                    {/* Model & Thumbnail */}
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div
                          onClick={() => setSelectedHolder(item)}
                          className="relative h-12 w-11 shrink-0 cursor-pointer overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-1 flex items-center justify-center group-hover:border-[#009fe3] transition-colors"
                        >
                          <Image
                            src={item.image}
                            alt={item.alt}
                            width={44}
                            height={48}
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-mono font-black text-slate-900 dark:text-white group-hover:text-[#009fe3] dark:group-hover:text-cyan-400">
                              {item.code}
                            </span>
                            <span className="rounded-full bg-sky-100 dark:bg-sky-950/80 text-[#009fe3] dark:text-cyan-400 px-2 py-0.2 text-[10px] font-bold">
                              {item.badge}
                            </span>
                          </div>
                          <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">
                            {item.name}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Matched Requirement */}
                    <td className="px-5 py-3.5 font-semibold text-slate-800 dark:text-slate-200">
                      {item.req}
                    </td>

                    {/* Card Format */}
                    <td className="px-5 py-3.5 text-xs font-mono text-slate-600 dark:text-slate-400">
                      <span className="inline-flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">
                        {item.cardFormat}
                      </span>
                    </td>

                    {/* Locking & Retention */}
                    <td className="px-5 py-3.5">
                      <div className="space-y-1">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 dark:text-slate-200">
                          {item.lockType === "Four-Side Lock" ? (
                            <Lock className="h-3.5 w-3.5 text-emerald-500" />
                          ) : item.lockType === "Standard Drop-In" ? (
                            <Unlock className="h-3.5 w-3.5 text-sky-500" />
                          ) : (
                            <Shield className="h-3.5 w-3.5 text-amber-500" />
                          )}
                          <span>{item.lockType}</span>
                        </span>
                        {/* Retention Rating Dots */}
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`h-1.5 w-3 rounded-full ${
                                i < item.retentionRating
                                  ? "bg-[#009fe3] dark:bg-cyan-400"
                                  : "bg-slate-200 dark:bg-slate-700"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </td>

                    {/* Material Grade */}
                    <td className="px-5 py-3.5 text-xs text-slate-600 dark:text-slate-400">
                      <span className="line-clamp-1">{item.material}</span>
                      <span className="text-[11px] text-slate-400 dark:text-slate-500 block">{item.lanyardHole}</span>
                    </td>

                    {/* Action */}
                    <td className="px-5 py-3.5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => setSelectedHolder(item)}
                          className="rounded-lg p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                          title="View Full Specifications"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <a
                          href={`https://wa.me/919207012084?text=Hi%20IDGen%20Team%2C%20I%20am%20interested%20in%20the%20${item.code}%20holder.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-xl bg-[#009fe3] hover:bg-[#0084be] text-white px-3 py-1.5 text-xs font-bold transition-colors"
                        >
                          <span>Order</span>
                          <ArrowRight className="h-3 w-3" />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ═════════════════════════════════════════════════════════════
          GOLDEN RULES & FITMENT GUIDE (PREMIUM VISUAL INFOGRAPHIC)
          ═════════════════════════════════════════════════════════════ */}
      <div className="mt-12 overflow-hidden rounded-3xl border border-sky-200/80 dark:border-sky-800/50 bg-gradient-to-br from-white via-sky-50/30 to-white dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 p-6 sm:p-8 lg:p-10 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-slate-800">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
              <Info className="h-4 w-4" />
              <span>Engineering &amp; Fitment Guidelines</span>
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl mt-1">
              Golden Rules for Error-Free ID Holder Selection
            </h3>
          </div>

          <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Guaranteed compatibility with all IDGen lanyard attachment clips
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {/* Rule 1: Aspect Ratio & Orientation */}
          <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-5 shadow-xs transition-all hover:border-[#009fe3]">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-[#009fe3] dark:text-cyan-400">
                <Sliders className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[11px] font-black uppercase text-slate-400">Rule 1</span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Orientation Alignment</h4>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Always pair cards strictly with matching orientation frames:
            </p>
            <div className="mt-3 space-y-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
              <div className="flex items-center justify-between">
                <span>• Portrait Card (86×54mm)</span>
                <span className="text-[#009fe3] dark:text-cyan-400 font-mono">→ V-Series</span>
              </div>
              <div className="flex items-center justify-between">
                <span>• Landscape Card (54×86mm)</span>
                <span className="text-[#009fe3] dark:text-cyan-400 font-mono">→ H-Series</span>
              </div>
            </div>
          </div>

          {/* Rule 2: Locking & Security Level */}
          <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-5 shadow-xs transition-all hover:border-emerald-500">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Lock className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[11px] font-black uppercase text-slate-400">Rule 2</span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Active Retention Locking</h4>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              For field engineers, factory teams, or frequent movement, specify <strong className="text-slate-900 dark:text-white">4-Side Lock (V-2 / H-2)</strong> to eliminate lost badges.
            </p>
            <div className="mt-3 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50/60 dark:bg-emerald-950/40 p-3 rounded-xl border border-emerald-500/20 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span>Prevents card fallout during brisk motion</span>
            </div>
          </div>

          {/* Rule 3: Universal 20mm Lanyard Aperture */}
          <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-5 shadow-xs transition-all hover:border-amber-500">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[11px] font-black uppercase text-slate-400">Rule 3</span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">20mm Anti-Twist Aperture</h4>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Every IDGen holder features a standardized 20mm slot, enabling quick attachment to <strong className="text-slate-900 dark:text-white">Fish Hooks, Dog Clips &amp; Lanyards</strong> without binding.
            </p>
            <div className="mt-3 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span>Standard Aperture Slot:</span>
              <span className="font-mono font-bold text-amber-600 dark:text-amber-400">20.0 mm</span>
            </div>
          </div>
        </div>

        {/* Bottom Callout Notice */}
        <div className="mt-6 pt-5 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>
            💡 <strong>Factory Recommendation:</strong> Always verify physical sample dimensions with our team prior to mass printing &amp; assembly.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919207012084?text=Hi%20IDGen%2C%20I%20would%20like%20to%20request%20physical%20samples%20of%20your%20ID%20card%20holders."
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#009fe3] dark:text-cyan-400 hover:underline inline-flex items-center gap-1"
            >
              <span>Request Physical Sample Kit</span>
              <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════
          INTERACTIVE SPECIFICATION INSPECTION MODAL
          ═════════════════════════════════════════════════════════════ */}
      {selectedHolder && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedHolder(null)}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-2xl shadow-black/60"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-2.5">
                <span className="font-mono font-black text-lg text-white bg-slate-900 dark:bg-white dark:text-slate-900 px-3 py-1 rounded-xl">
                  {selectedHolder.code}
                </span>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {selectedHolder.name}
                  </h3>
                  <span className="text-xs text-[#009fe3] dark:text-cyan-400 font-semibold">
                    {selectedHolder.badge} • {selectedHolder.orientation}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedHolder(null)}
                className="rounded-xl p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="mt-6 grid gap-6 sm:grid-cols-12 items-start">
              {/* Product Visual */}
              <div className="sm:col-span-5 flex flex-col items-center">
                <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-800/80 dark:to-slate-900 p-4 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                  <Image
                    src={selectedHolder.image}
                    alt={selectedHolder.alt}
                    width={200}
                    height={200}
                    className="h-full w-full object-contain drop-shadow-xl"
                  />
                </div>
                <span className="mt-2 text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                  {selectedHolder.material}
                </span>
              </div>

              {/* Technical Specifications */}
              <div className="sm:col-span-7 space-y-4">
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedHolder.description}
                </p>

                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                    Key Specifications
                  </h4>
                  <div className="space-y-1.5 text-xs bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                    {selectedHolder.specs.map((s, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-slate-500 dark:text-slate-400">{s.k}:</span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">{s.v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                    Ideal Applications
                  </h4>
                  <div className="grid grid-cols-1 gap-1 text-xs text-slate-700 dark:text-slate-300">
                    {selectedHolder.suitable.slice(0, 3).map((use, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                        <span className="line-clamp-1">{use}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedHolder(null)}
                className="rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-2.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Close
              </button>

              <a
                href={`https://wa.me/919207012084?text=Hi%20IDGen%20Team%2C%20I%20want%20to%20order%20the%20${selectedHolder.code}%20(${selectedHolder.name})%20ID%20card%20holder.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] hover:bg-[#0084be] text-white px-5 py-2.5 text-xs font-bold shadow-md"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Chat on WhatsApp for {selectedHolder.code}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
