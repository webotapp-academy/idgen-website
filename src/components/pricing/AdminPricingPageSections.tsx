"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Save,
  RotateCcw,
  Plus,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Eye,
  EyeOff,
  Upload,
  ImageIcon,
  ArrowRight,
  ShieldCheck,
  IndianRupee,
  Layers,
  GraduationCap,
  Building2,
  Boxes,
  MapPin,
  Calculator,
  AlertTriangle,
  FolderKanban,
  HelpCircle,
  Search,
} from "lucide-react";
import type { DynamicPricingPageData, PricingSlideData } from "@/lib/dynamic-pricing-types";
import type { PricingAdminTab } from "@/app/admin/pricing/page";

const presetImages = [
  { label: "PVC Cards Pricing", url: "/images/idgen-id-card-printing-pricing.jpg" },
  { label: "Custom Lanyards", url: "/images/idgen-id-card-lanyard-holder-hook-pricing.jpg" },
  { label: "RFID Smartcards", url: "/images/bulk-rfid-card-printing.jpg" },
  { label: "Event Badges", url: "/images/event-card-printing-lanyard-idgen.jpg" },
  { label: "Wearable Setup", url: "/images/why-idgen-complete-ecosystem-branded.jpg" },
  { label: "Polycarbonate Holders", url: "/images/product-id-holders.jpg" },
  { label: "Hooks Hardware", url: "/images/product-hooks-hardware.jpg" },
  { label: "Acrylic Badges", url: "/images/product-acrylic-badges.jpg" },
];

interface AdminPricingPageSectionsProps {
  mainSection: PricingAdminTab;
  pageData: DynamicPricingPageData | null;
  setPageData: React.Dispatch<React.SetStateAction<DynamicPricingPageData | null>>;
  savingSection: string | null;
  onSaveSection: <K extends keyof DynamicPricingPageData>(
    section: K,
    data: DynamicPricingPageData[K]
  ) => Promise<void>;
  onSaveFullPage: () => Promise<void>;
  onResetPage: () => Promise<void>;
  onSlideImageUpload: (e: React.ChangeEvent<HTMLInputElement>, slideIndex: number) => Promise<void>;
}

export function AdminPricingPageSections({
  mainSection,
  pageData,
  setPageData,
  savingSection,
  onSaveSection,
  onSaveFullPage,
  onResetPage,
  onSlideImageUpload,
}: AdminPricingPageSectionsProps) {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number | null>(null);

  if (!pageData) {
    return (
      <div className="p-12 text-center rounded-3xl bg-slate-900 border border-slate-800 text-slate-400 animate-pulse">
        Loading pricing page sections...
      </div>
    );
  }

  // ──────────────────────────────────────────────────────────────────────────
  // TAB: HERO & CAROUSEL SLIDES
  // ──────────────────────────────────────────────────────────────────────────
  if (mainSection === "hero") {
    return (
      <div className="space-y-8">
        {/* Hero Section Header & Action */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900 border border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold mb-2">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Section: Hero &amp; Carousel Showcase</span>
            </div>
            <h2 className="text-xl font-black text-white">Hero Header, Rates Banner &amp; Image Carousel</h2>
            <p className="text-xs text-slate-400 mt-1">
              Customize the headline, rates ribbon, call-to-action buttons, and all slides in the hero slider.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onSaveSection("hero", pageData.hero)}
              disabled={savingSection === "hero"}
              className="px-4 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-lg shadow-teal-500/20 transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              <Save className="h-4 w-4" />
              <span>{savingSection === "hero" ? "Saving..." : "Save Hero Text"}</span>
            </button>
            <button
              onClick={() => onSaveSection("heroSlides", pageData.heroSlides)}
              disabled={savingSection === "heroSlides"}
              className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              <Save className="h-4 w-4" />
              <span>{savingSection === "heroSlides" ? "Saving..." : "Save Slides"}</span>
            </button>
          </div>
        </div>

        {/* Hero Copy Fields */}
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6">
          <h3 className="text-sm font-extrabold text-white uppercase tracking-wider text-teal-400 border-b border-slate-800 pb-3">
            Hero Headline &amp; Text
          </h3>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">Eyebrow Pill</label>
              <input
                type="text"
                value={pageData.hero.eyebrow}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    hero: { ...pageData.hero, eyebrow: e.target.value },
                  })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-teal-500"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">Main Title Prefix</label>
              <input
                type="text"
                value={pageData.hero.title}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    hero: { ...pageData.hero, title: e.target.value },
                  })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-teal-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Highlight Gradient Title
              </label>
              <input
                type="text"
                value={pageData.hero.highlightText}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    hero: { ...pageData.hero, highlightText: e.target.value },
                  })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-cyan-300 font-bold focus:outline-none focus:border-teal-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-300 mb-1.5">Hero Description</label>
              <textarea
                rows={3}
                value={pageData.hero.description}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    hero: { ...pageData.hero, description: e.target.value },
                  })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 focus:outline-none focus:border-teal-500"
              />
            </div>
          </div>

          {/* Reference Rates Banner */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-cyan-900/40 space-y-4">
            <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
              Transparent Reference Rates Ribbon
            </h4>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1">Ribbon Eyebrow</label>
                <input
                  type="text"
                  value={pageData.hero.ratesBanner.eyebrow}
                  onChange={(e) =>
                    setPageData({
                      ...pageData,
                      hero: {
                        ...pageData.hero,
                        ratesBanner: {
                          ...pageData.hero.ratesBanner,
                          eyebrow: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-teal-500"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-400 mb-1">Ribbon Summary Text</label>
                <textarea
                  rows={2}
                  value={pageData.hero.ratesBanner.text}
                  onChange={(e) =>
                    setPageData({
                      ...pageData,
                      hero: {
                        ...pageData.hero,
                        ratesBanner: {
                          ...pageData.hero.ratesBanner,
                          text: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-teal-500"
                />
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-teal-400 uppercase">Primary CTA Button</span>
              <input
                type="text"
                placeholder="Button Label"
                value={pageData.hero.ctaPrimary.text}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    hero: {
                      ...pageData.hero,
                      ctaPrimary: { ...pageData.hero.ctaPrimary, text: e.target.value },
                    },
                  })
                }
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white"
              />
              <input
                type="text"
                placeholder="Destination Link"
                value={pageData.hero.ctaPrimary.href}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    hero: {
                      ...pageData.hero,
                      ctaPrimary: { ...pageData.hero.ctaPrimary, href: e.target.value },
                    },
                  })
                }
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400"
              />
            </div>
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase">Secondary CTA Button</span>
              <input
                type="text"
                placeholder="Button Label"
                value={pageData.hero.ctaSecondary.text}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    hero: {
                      ...pageData.hero,
                      ctaSecondary: { ...pageData.hero.ctaSecondary, text: e.target.value },
                    },
                  })
                }
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white"
              />
              <input
                type="text"
                placeholder="Destination Link"
                value={pageData.hero.ctaSecondary.href}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    hero: {
                      ...pageData.hero,
                      ctaSecondary: { ...pageData.hero.ctaSecondary, href: e.target.value },
                    },
                  })
                }
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400"
              />
            </div>
          </div>
        </div>

        {/* Hero Slides Manager */}
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-sm font-extrabold text-white uppercase tracking-wider text-cyan-400">
                Hero Carousel Slides ({pageData.heroSlides.length})
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Manage slide images, rates tags, categories, and technical pills.
              </p>
            </div>
            <button
              onClick={() => {
                const newSlide: PricingSlideData = {
                  id: `slide-${Date.now()}`,
                  imageSrc: "/images/idgen-id-card-printing-pricing.jpg",
                  alt: "IDGen New Product Pricing",
                  title: "New Product Title",
                  category: "Product Category",
                  priceTag: "From ₹15 / pc",
                  topBadge: "Top Badge",
                  specPill: "Spec Pill",
                  bottomSpec: "Spec Details • Highlights",
                  hubTag: "DIRECT FACTORY",
                  isActive: true,
                };
                setPageData({
                  ...pageData,
                  heroSlides: [...pageData.heroSlides, newSlide],
                });
              }}
              className="px-3.5 py-2 rounded-xl bg-cyan-950/80 border border-cyan-800/60 hover:bg-cyan-900 text-cyan-300 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Add Slide</span>
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {pageData.heroSlides.map((slide, idx) => (
              <div
                key={slide.id || idx}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-5 space-y-4 hover:border-cyan-800/60 transition"
              >
                {/* Slide Top Bar */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-cyan-400">
                    Slide #{idx + 1}: {slide.category || "Untitled"}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        const updated = [...pageData.heroSlides];
                        updated[idx] = { ...updated[idx], isActive: slide.isActive === false ? true : false };
                        setPageData({ ...pageData, heroSlides: updated });
                      }}
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border ${
                        slide.isActive !== false
                          ? "bg-emerald-950 text-emerald-300 border-emerald-800/50"
                          : "bg-slate-900 text-slate-400 border-slate-800"
                      }`}
                    >
                      {slide.isActive !== false ? "Active" : "Disabled"}
                    </button>
                    <button
                      onClick={() => {
                        const updated = pageData.heroSlides.filter((_, i) => i !== idx);
                        setPageData({ ...pageData, heroSlides: updated });
                      }}
                      className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-950/30 transition"
                      title="Delete slide"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Slide Image Preview & Upload */}
                <div className="grid grid-cols-12 gap-3 items-center">
                  <div className="col-span-4 relative h-24 rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
                    <Image
                      src={slide.imageSrc}
                      alt={slide.alt || "Slide preview"}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="col-span-8 space-y-2">
                    <input
                      type="text"
                      placeholder="Image URL"
                      value={slide.imageSrc}
                      onChange={(e) => {
                        const updated = [...pageData.heroSlides];
                        updated[idx] = { ...updated[idx], imageSrc: e.target.value };
                        setPageData({ ...pageData, heroSlides: updated });
                      }}
                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-white"
                    />
                    <div className="flex items-center gap-2">
                      <label className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-[11px] text-teal-300 font-semibold flex items-center gap-1 cursor-pointer">
                        <Upload className="h-3 w-3" />
                        <span>Upload File</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => onSlideImageUpload(e, idx)}
                        />
                      </label>
                    </div>
                  </div>
                </div>

                {/* Presets */}
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-500 font-bold uppercase">Quick Preset Images:</span>
                  <div className="flex flex-wrap gap-1">
                    {presetImages.map((p) => (
                      <button
                        key={p.url}
                        type="button"
                        onClick={() => {
                          const updated = [...pageData.heroSlides];
                          updated[idx] = { ...updated[idx], imageSrc: p.url };
                          setPageData({ ...pageData, heroSlides: updated });
                        }}
                        className="px-2 py-0.5 rounded text-[10px] bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-700 transition"
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Slide Details */}
                <div className="grid gap-3 sm:grid-cols-2 text-xs">
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Slide Title</label>
                    <input
                      type="text"
                      value={slide.title}
                      onChange={(e) => {
                        const updated = [...pageData.heroSlides];
                        updated[idx] = { ...updated[idx], title: e.target.value };
                        setPageData({ ...pageData, heroSlides: updated });
                      }}
                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Price Tag Pill</label>
                    <input
                      type="text"
                      value={slide.priceTag}
                      onChange={(e) => {
                        const updated = [...pageData.heroSlides];
                        updated[idx] = { ...updated[idx], priceTag: e.target.value };
                        setPageData({ ...pageData, heroSlides: updated });
                      }}
                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-teal-300 font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Top Badge Pill</label>
                    <input
                      type="text"
                      value={slide.topBadge}
                      onChange={(e) => {
                        const updated = [...pageData.heroSlides];
                        updated[idx] = { ...updated[idx], topBadge: e.target.value };
                        setPageData({ ...pageData, heroSlides: updated });
                      }}
                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Spec Pill</label>
                    <input
                      type="text"
                      value={slide.specPill}
                      onChange={(e) => {
                        const updated = [...pageData.heroSlides];
                        updated[idx] = { ...updated[idx], specPill: e.target.value };
                        setPageData({ ...pageData, heroSlides: updated });
                      }}
                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-white"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] text-slate-400 mb-1">Bottom Specs Summary</label>
                    <input
                      type="text"
                      value={slide.bottomSpec}
                      onChange={(e) => {
                        const updated = [...pageData.heroSlides];
                        updated[idx] = { ...updated[idx], bottomSpec: e.target.value };
                        setPageData({ ...pageData, heroSlides: updated });
                      }}
                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Hub Tag</label>
                    <input
                      type="text"
                      value={slide.hubTag}
                      onChange={(e) => {
                        const updated = [...pageData.heroSlides];
                        updated[idx] = { ...updated[idx], hubTag: e.target.value };
                        setPageData({ ...pageData, heroSlides: updated });
                      }}
                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-amber-300 font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Category</label>
                    <input
                      type="text"
                      value={slide.category}
                      onChange={(e) => {
                        const updated = [...pageData.heroSlides];
                        updated[idx] = { ...updated[idx], category: e.target.value };
                        setPageData({ ...pageData, heroSlides: updated });
                      }}
                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-white"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ──────────────────────────────────────────────────────────────────────────
  // TAB: COST DETERMINANTS & SETUP TIERS
  // ──────────────────────────────────────────────────────────────────────────
  if (mainSection === "cost") {
    return (
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900 border border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold mb-2">
              <Boxes className="h-3.5 w-3.5" />
              <span>Section: Cost Determinants &amp; Setup Tiers</span>
            </div>
            <h2 className="text-xl font-black text-white">What Affects ID Card Pricing &amp; Setup Formulas</h2>
            <p className="text-xs text-slate-400 mt-1">
              Configure the 8 price-affecting determinant cards and the 4 identification setup tiers.
            </p>
          </div>
          <button
            onClick={() => onSaveSection("costDeterminants", pageData.costDeterminants)}
            disabled={savingSection === "costDeterminants"}
            className="px-4 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-lg shadow-teal-500/20 transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
          >
            <Save className="h-4 w-4" />
            <span>{savingSection === "costDeterminants" ? "Saving..." : "Save Cost Factors"}</span>
          </button>
        </div>

        {/* Cost Factors Section Header */}
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">Section Eyebrow</label>
              <input
                type="text"
                value={pageData.costDeterminants.eyebrow}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    costDeterminants: { ...pageData.costDeterminants, eyebrow: e.target.value },
                  })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">Section Title</label>
              <input
                type="text"
                value={pageData.costDeterminants.title}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    costDeterminants: { ...pageData.costDeterminants, title: e.target.value },
                  })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-300 mb-1.5">Section Lede Text</label>
              <input
                type="text"
                value={pageData.costDeterminants.lede}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    costDeterminants: { ...pageData.costDeterminants, lede: e.target.value },
                  })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300"
              />
            </div>
          </div>

          {/* Factors Grid */}
          <div className="space-y-4 pt-4 border-t border-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-teal-400">
                Determinant Factor Cards ({pageData.costDeterminants.factors.length})
              </span>
              <button
                onClick={() => {
                  const updated = [
                    ...pageData.costDeterminants.factors,
                    { title: "New Factor", desc: "Description of the factor." },
                  ];
                  setPageData({
                    ...pageData,
                    costDeterminants: { ...pageData.costDeterminants, factors: updated },
                  });
                }}
                className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-teal-300 text-xs font-bold flex items-center gap-1"
              >
                <Plus className="h-3 w-3" />
                <span>Add Factor</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {pageData.costDeterminants.factors.map((f, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 relative group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-teal-400 uppercase">Factor #{idx + 1}</span>
                    <button
                      onClick={() => {
                        const updated = pageData.costDeterminants.factors.filter((_, i) => i !== idx);
                        setPageData({
                          ...pageData,
                          costDeterminants: { ...pageData.costDeterminants, factors: updated },
                        });
                      }}
                      className="text-slate-500 hover:text-rose-400 p-1"
                      title="Delete"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <input
                    type="text"
                    value={f.title}
                    onChange={(e) => {
                      const updated = [...pageData.costDeterminants.factors];
                      updated[idx] = { ...updated[idx], title: e.target.value };
                      setPageData({
                        ...pageData,
                        costDeterminants: { ...pageData.costDeterminants, factors: updated },
                      });
                    }}
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-bold text-white"
                  />
                  <textarea
                    rows={3}
                    value={f.desc}
                    onChange={(e) => {
                      const updated = [...pageData.costDeterminants.factors];
                      updated[idx] = { ...updated[idx], desc: e.target.value };
                      setPageData({
                        ...pageData,
                        costDeterminants: { ...pageData.costDeterminants, factors: updated },
                      });
                    }}
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ──────────────────────────────────────────────────────────────────────────
  // TAB: USE CASES (STUDENT, EMPLOYEE, BULK)
  // ──────────────────────────────────────────────────────────────────────────
  if (mainSection === "usecases") {
    return (
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900 border border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold mb-2">
              <GraduationCap className="h-3.5 w-3.5" />
              <span>Section: Use-Case Deep Dives</span>
            </div>
            <h2 className="text-xl font-black text-white">Student, Employee &amp; Bulk Project Cards</h2>
            <p className="text-xs text-slate-400 mt-1">
              Customize workflow chains, sector tags, project quantities, and destination URLs.
            </p>
          </div>
          <button
            onClick={() => onSaveSection("useCases", pageData.useCases)}
            disabled={savingSection === "useCases"}
            className="px-4 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-lg shadow-teal-500/20 transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
          >
            <Save className="h-4 w-4" />
            <span>{savingSection === "useCases" ? "Saving..." : "Save Use Cases"}</span>
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Student ID Cards */}
          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 space-y-4">
            <div className="flex items-center gap-2 text-teal-400">
              <GraduationCap className="h-5 w-5" />
              <h3 className="text-sm font-extrabold uppercase tracking-wider">Student ID Card Card</h3>
            </div>
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Title</label>
              <input
                type="text"
                value={pageData.useCases.student.title}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    useCases: {
                      ...pageData.useCases,
                      student: { ...pageData.useCases.student, title: e.target.value },
                    },
                  })
                }
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Description</label>
              <input
                type="text"
                value={pageData.useCases.student.desc}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    useCases: {
                      ...pageData.useCases,
                      student: { ...pageData.useCases.student, desc: e.target.value },
                    },
                  })
                }
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300"
              />
            </div>
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">
                Assembly Chain Steps (comma-separated)
              </label>
              <input
                type="text"
                value={pageData.useCases.student.steps.join(", ")}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    useCases: {
                      ...pageData.useCases,
                      student: {
                        ...pageData.useCases.student,
                        steps: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                      },
                    },
                  })
                }
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-cyan-300"
              />
            </div>
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">
                Applies To (comma-separated tags)
              </label>
              <input
                type="text"
                value={pageData.useCases.student.appliesTo.join(", ")}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    useCases: {
                      ...pageData.useCases,
                      student: {
                        ...pageData.useCases.student,
                        appliesTo: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                      },
                    },
                  })
                }
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200"
              />
            </div>
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
              <input
                type="text"
                placeholder="Link Text"
                value={pageData.useCases.student.linkText}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    useCases: {
                      ...pageData.useCases,
                      student: { ...pageData.useCases.student, linkText: e.target.value },
                    },
                  })
                }
                className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-white"
              />
              <input
                type="text"
                placeholder="Link URL"
                value={pageData.useCases.student.linkHref}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    useCases: {
                      ...pageData.useCases,
                      student: { ...pageData.useCases.student, linkHref: e.target.value },
                    },
                  })
                }
                className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-400"
              />
            </div>
          </div>

          {/* Employee ID Cards */}
          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 space-y-4">
            <div className="flex items-center gap-2 text-teal-400">
              <Building2 className="h-5 w-5" />
              <h3 className="text-sm font-extrabold uppercase tracking-wider">Employee ID Card Card</h3>
            </div>
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Title</label>
              <input
                type="text"
                value={pageData.useCases.employee.title}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    useCases: {
                      ...pageData.useCases,
                      employee: { ...pageData.useCases.employee, title: e.target.value },
                    },
                  })
                }
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Description</label>
              <input
                type="text"
                value={pageData.useCases.employee.desc}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    useCases: {
                      ...pageData.useCases,
                      employee: { ...pageData.useCases.employee, desc: e.target.value },
                    },
                  })
                }
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300"
              />
            </div>
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">
                Assembly Chain Steps (comma-separated)
              </label>
              <input
                type="text"
                value={pageData.useCases.employee.steps.join(", ")}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    useCases: {
                      ...pageData.useCases,
                      employee: {
                        ...pageData.useCases.employee,
                        steps: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                      },
                    },
                  })
                }
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-cyan-300"
              />
            </div>
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">
                Suitable For (comma-separated tags)
              </label>
              <input
                type="text"
                value={pageData.useCases.employee.suitableFor.join(", ")}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    useCases: {
                      ...pageData.useCases,
                      employee: {
                        ...pageData.useCases.employee,
                        suitableFor: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                      },
                    },
                  })
                }
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200"
              />
            </div>
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
              <input
                type="text"
                placeholder="Link Text"
                value={pageData.useCases.employee.linkText}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    useCases: {
                      ...pageData.useCases,
                      employee: { ...pageData.useCases.employee, linkText: e.target.value },
                    },
                  })
                }
                className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-white"
              />
              <input
                type="text"
                placeholder="Link URL"
                value={pageData.useCases.employee.linkHref}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    useCases: {
                      ...pageData.useCases,
                      employee: { ...pageData.useCases.employee, linkHref: e.target.value },
                    },
                  })
                }
                className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-400"
              />
            </div>
          </div>

          {/* Bulk ID Cards */}
          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 space-y-4">
            <div className="flex items-center gap-2 text-teal-400">
              <Boxes className="h-5 w-5" />
              <h3 className="text-sm font-extrabold uppercase tracking-wider">Bulk ID Card Card</h3>
            </div>
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Title</label>
              <input
                type="text"
                value={pageData.useCases.bulk.title}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    useCases: {
                      ...pageData.useCases,
                      bulk: { ...pageData.useCases.bulk, title: e.target.value },
                    },
                  })
                }
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Description</label>
              <textarea
                rows={2}
                value={pageData.useCases.bulk.desc}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    useCases: {
                      ...pageData.useCases,
                      bulk: { ...pageData.useCases.bulk, desc: e.target.value },
                    },
                  })
                }
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300"
              />
            </div>
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">
                Typical Projects (comma-separated)
              </label>
              <input
                type="text"
                value={pageData.useCases.bulk.typicalProjects.join(", ")}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    useCases: {
                      ...pageData.useCases,
                      bulk: {
                        ...pageData.useCases.bulk,
                        typicalProjects: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                      },
                    },
                  })
                }
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-cyan-300 font-bold"
              />
            </div>
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
              <input
                type="text"
                placeholder="Link Text"
                value={pageData.useCases.bulk.linkText}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    useCases: {
                      ...pageData.useCases,
                      bulk: { ...pageData.useCases.bulk, linkText: e.target.value },
                    },
                  })
                }
                className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-white"
              />
              <input
                type="text"
                placeholder="Link URL"
                value={pageData.useCases.bulk.linkHref}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    useCases: {
                      ...pageData.useCases,
                      bulk: { ...pageData.useCases.bulk, linkHref: e.target.value },
                    },
                  })
                }
                className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-400"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ──────────────────────────────────────────────────────────────────────────
  // TAB: ORDER READINESS & DIRECTORY
  // ──────────────────────────────────────────────────────────────────────────
  if (mainSection === "readiness") {
    return (
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900 border border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold mb-2">
              <FolderKanban className="h-3.5 w-3.5" />
              <span>Section: Order Readiness &amp; Directory</span>
            </div>
            <h2 className="text-xl font-black text-white">Print-Ready vs Custom &amp; Service Directory</h2>
            <p className="text-xs text-slate-400 mt-1">
              Manage artwork readiness comparison cards and the 10-row product directory links.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onSaveSection("orderReadiness", pageData.orderReadiness)}
              disabled={savingSection === "orderReadiness"}
              className="px-4 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-lg shadow-teal-500/20 transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              <Save className="h-4 w-4" />
              <span>{savingSection === "orderReadiness" ? "Saving..." : "Save Readiness"}</span>
            </button>
            <button
              onClick={() => onSaveSection("pricingDirectory", pageData.pricingDirectory)}
              disabled={savingSection === "pricingDirectory"}
              className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              <Save className="h-4 w-4" />
              <span>{savingSection === "pricingDirectory" ? "Saving..." : "Save Directory"}</span>
            </button>
          </div>
        </div>

        {/* Order Readiness Card */}
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6">
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-teal-400 border-b border-slate-800 pb-3">
            Print-Ready vs Customized Orders
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Eyebrow</label>
              <input
                type="text"
                value={pageData.orderReadiness.eyebrow}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    orderReadiness: { ...pageData.orderReadiness, eyebrow: e.target.value },
                  })
                }
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-300 mb-1">Title</label>
              <input
                type="text"
                value={pageData.orderReadiness.title}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    orderReadiness: { ...pageData.orderReadiness, title: e.target.value },
                  })
                }
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
              />
            </div>
            <div className="sm:col-span-3">
              <label className="block text-xs font-bold text-slate-300 mb-1">Description</label>
              <input
                type="text"
                value={pageData.orderReadiness.desc}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    orderReadiness: { ...pageData.orderReadiness, desc: e.target.value },
                  })
                }
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 pt-2">
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-slate-300 uppercase">Print-Ready Box</span>
              <input
                type="text"
                value={pageData.orderReadiness.printReady.title}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    orderReadiness: {
                      ...pageData.orderReadiness,
                      printReady: { ...pageData.orderReadiness.printReady, title: e.target.value },
                    },
                  })
                }
                className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
              />
              <textarea
                rows={3}
                value={pageData.orderReadiness.printReady.desc}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    orderReadiness: {
                      ...pageData.orderReadiness,
                      printReady: { ...pageData.orderReadiness.printReady, desc: e.target.value },
                    },
                  })
                }
                className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300"
              />
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-cyan-900/40 space-y-2">
              <span className="text-xs font-bold text-cyan-400 uppercase">Customized Box</span>
              <input
                type="text"
                value={pageData.orderReadiness.customized.title}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    orderReadiness: {
                      ...pageData.orderReadiness,
                      customized: { ...pageData.orderReadiness.customized, title: e.target.value },
                    },
                  })
                }
                className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
              />
              <textarea
                rows={2}
                value={pageData.orderReadiness.customized.desc}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    orderReadiness: {
                      ...pageData.orderReadiness,
                      customized: { ...pageData.orderReadiness.customized, desc: e.target.value },
                    },
                  })
                }
                className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300"
              />
              <input
                type="text"
                placeholder="Steps (comma-separated)"
                value={pageData.orderReadiness.customized.steps.join(", ")}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    orderReadiness: {
                      ...pageData.orderReadiness,
                      customized: {
                        ...pageData.orderReadiness.customized,
                        steps: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                      },
                    },
                  })
                }
                className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-cyan-300"
              />
            </div>
          </div>
        </div>

        {/* Pricing Directory Table */}
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-cyan-400">
                IDGen Pricing by Requirement Directory ({pageData.pricingDirectory.items.length})
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Manage service requirement labels, target pages, and destination URLs.
              </p>
            </div>
            <button
              onClick={() => {
                const updated = [
                  ...pageData.pricingDirectory.items,
                  { requirement: "New Service Requirement", page: "Target Service Page", href: "/pricing/" },
                ];
                setPageData({
                  ...pageData,
                  pricingDirectory: { ...pageData.pricingDirectory, items: updated },
                });
              }}
              className="px-3.5 py-2 rounded-xl bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 font-bold text-xs flex items-center gap-1 cursor-pointer"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Add Directory Row</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-bold uppercase text-[11px]">
                  <th className="py-2.5 px-3">Requirement</th>
                  <th className="py-2.5 px-3">Best Page Link Label</th>
                  <th className="py-2.5 px-3">Href Link URL</th>
                  <th className="py-2.5 px-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {pageData.pricingDirectory.items.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02]">
                    <td className="py-2.5 px-3">
                      <input
                        type="text"
                        value={row.requirement}
                        onChange={(e) => {
                          const updated = [...pageData.pricingDirectory.items];
                          updated[idx] = { ...updated[idx], requirement: e.target.value };
                          setPageData({
                            ...pageData,
                            pricingDirectory: { ...pageData.pricingDirectory, items: updated },
                          });
                        }}
                        className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-white font-bold"
                      />
                    </td>
                    <td className="py-2.5 px-3">
                      <input
                        type="text"
                        value={row.page}
                        onChange={(e) => {
                          const updated = [...pageData.pricingDirectory.items];
                          updated[idx] = { ...updated[idx], page: e.target.value };
                          setPageData({
                            ...pageData,
                            pricingDirectory: { ...pageData.pricingDirectory, items: updated },
                          });
                        }}
                        className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-teal-300"
                      />
                    </td>
                    <td className="py-2.5 px-3">
                      <input
                        type="text"
                        value={row.href}
                        onChange={(e) => {
                          const updated = [...pageData.pricingDirectory.items];
                          updated[idx] = { ...updated[idx], href: e.target.value };
                          setPageData({
                            ...pageData,
                            pricingDirectory: { ...pageData.pricingDirectory, items: updated },
                          });
                        }}
                        className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400"
                      />
                    </td>
                    <td className="py-2.5 px-3 text-right">
                      <button
                        onClick={() => {
                          const updated = pageData.pricingDirectory.items.filter((_, i) => i !== idx);
                          setPageData({
                            ...pageData,
                            pricingDirectory: { ...pageData.pricingDirectory, items: updated },
                          });
                        }}
                        className="p-1.5 text-slate-500 hover:text-rose-400"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  // ──────────────────────────────────────────────────────────────────────────
  // TAB: PRICE CHANGES & CUSTOM QUOTE
  // ──────────────────────────────────────────────────────────────────────────
  if (mainSection === "quotes") {
    return (
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900 border border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold mb-2">
              <Calculator className="h-3.5 w-3.5" />
              <span>Section: Price Changes &amp; Custom Quote</span>
            </div>
            <h2 className="text-xl font-black text-white">Why Prices Change &amp; Custom Quote Calculation</h2>
            <p className="text-xs text-slate-400 mt-1">
              Customize the disclaimer box, price change reasons, and custom quotation input formula.
            </p>
          </div>
          <button
            onClick={() => onSaveSection("priceChangesAndQuote", pageData.priceChangesAndQuote)}
            disabled={savingSection === "priceChangesAndQuote"}
            className="px-4 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-lg shadow-teal-500/20 transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
          >
            <Save className="h-4 w-4" />
            <span>{savingSection === "priceChangesAndQuote" ? "Saving..." : "Save Section"}</span>
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Why Prices May Change */}
          <div className="rounded-3xl bg-slate-900 border border-amber-800/40 p-6 space-y-4">
            <div className="flex items-center gap-2 text-amber-400">
              <AlertTriangle className="h-5 w-5" />
              <h3 className="text-sm font-extrabold uppercase tracking-wider">Why Prices May Change Box</h3>
            </div>
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Title</label>
              <input
                type="text"
                value={pageData.priceChangesAndQuote.priceChanges.title}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    priceChangesAndQuote: {
                      ...pageData.priceChangesAndQuote,
                      priceChanges: {
                        ...pageData.priceChangesAndQuote.priceChanges,
                        title: e.target.value,
                      },
                    },
                  })
                }
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Description</label>
              <input
                type="text"
                value={pageData.priceChangesAndQuote.priceChanges.desc}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    priceChangesAndQuote: {
                      ...pageData.priceChangesAndQuote,
                      priceChanges: {
                        ...pageData.priceChangesAndQuote.priceChanges,
                        desc: e.target.value,
                      },
                    },
                  })
                }
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300"
              />
            </div>
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">
                Reasons Bullets (comma-separated)
              </label>
              <textarea
                rows={3}
                value={pageData.priceChangesAndQuote.priceChanges.reasons.join(", ")}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    priceChangesAndQuote: {
                      ...pageData.priceChangesAndQuote,
                      priceChanges: {
                        ...pageData.priceChangesAndQuote.priceChanges,
                        reasons: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                      },
                    },
                  })
                }
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200"
              />
            </div>
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Disclaimer Text</label>
              <textarea
                rows={2}
                value={pageData.priceChangesAndQuote.priceChanges.disclaimer}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    priceChangesAndQuote: {
                      ...pageData.priceChangesAndQuote,
                      priceChanges: {
                        ...pageData.priceChangesAndQuote.priceChanges,
                        disclaimer: e.target.value,
                      },
                    },
                  })
                }
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-amber-200"
              />
            </div>
          </div>

          {/* Need a Custom Quote? */}
          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 space-y-4">
            <div className="flex items-center gap-2 text-teal-400">
              <Calculator className="h-5 w-5" />
              <h3 className="text-sm font-extrabold uppercase tracking-wider">Need a Custom Quote? Box</h3>
            </div>
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Title</label>
              <input
                type="text"
                value={pageData.priceChangesAndQuote.customQuote.title}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    priceChangesAndQuote: {
                      ...pageData.priceChangesAndQuote,
                      customQuote: {
                        ...pageData.priceChangesAndQuote.customQuote,
                        title: e.target.value,
                      },
                    },
                  })
                }
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Description</label>
              <input
                type="text"
                value={pageData.priceChangesAndQuote.customQuote.desc}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    priceChangesAndQuote: {
                      ...pageData.priceChangesAndQuote,
                      customQuote: {
                        ...pageData.priceChangesAndQuote.customQuote,
                        desc: e.target.value,
                      },
                    },
                  })
                }
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300"
              />
            </div>
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">
                Formula Steps (comma-separated)
              </label>
              <input
                type="text"
                value={pageData.priceChangesAndQuote.customQuote.formula.join(", ")}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    priceChangesAndQuote: {
                      ...pageData.priceChangesAndQuote,
                      customQuote: {
                        ...pageData.priceChangesAndQuote.customQuote,
                        formula: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                      },
                    },
                  })
                }
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-cyan-300"
              />
            </div>
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Example Format Text</label>
              <input
                type="text"
                value={pageData.priceChangesAndQuote.customQuote.exampleText}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    priceChangesAndQuote: {
                      ...pageData.priceChangesAndQuote,
                      customQuote: {
                        ...pageData.priceChangesAndQuote.customQuote,
                        exampleText: e.target.value,
                      },
                    },
                  })
                }
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
              />
            </div>
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
              <input
                type="text"
                placeholder="Button Text"
                value={pageData.priceChangesAndQuote.customQuote.buttonText}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    priceChangesAndQuote: {
                      ...pageData.priceChangesAndQuote,
                      customQuote: {
                        ...pageData.priceChangesAndQuote.customQuote,
                        buttonText: e.target.value,
                      },
                    },
                  })
                }
                className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-white"
              />
              <input
                type="text"
                placeholder="Button Href"
                value={pageData.priceChangesAndQuote.customQuote.buttonHref}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    priceChangesAndQuote: {
                      ...pageData.priceChangesAndQuote,
                      customQuote: {
                        ...pageData.priceChangesAndQuote.customQuote,
                        buttonHref: e.target.value,
                      },
                    },
                  })
                }
                className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-400"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ──────────────────────────────────────────────────────────────────────────
  // TAB: FAQS & PRICING IN ONE ANSWER
  // ──────────────────────────────────────────────────────────────────────────
  if (mainSection === "faqs") {
    return (
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900 border border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold mb-2">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Section: FAQs &amp; Summary</span>
            </div>
            <h2 className="text-xl font-black text-white">Frequently Asked Questions &amp; Summary Callout</h2>
            <p className="text-xs text-slate-400 mt-1">
              Edit the 10 pricing FAQs and the Pricing in One Answer callout box.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onSaveSection("faqsSection", pageData.faqsSection)}
              disabled={savingSection === "faqsSection"}
              className="px-4 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-lg shadow-teal-500/20 transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              <Save className="h-4 w-4" />
              <span>{savingSection === "faqsSection" ? "Saving..." : "Save FAQs"}</span>
            </button>
            <button
              onClick={() => onSaveSection("pricingSummary", pageData.pricingSummary)}
              disabled={savingSection === "pricingSummary"}
              className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              <Save className="h-4 w-4" />
              <span>{savingSection === "pricingSummary" ? "Saving..." : "Save Summary"}</span>
            </button>
          </div>
        </div>

        {/* Pricing in One Answer Summary */}
        <div className="rounded-3xl bg-slate-900 border border-cyan-900/50 p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-cyan-400">
            <Sparkles className="h-4 w-4" />
            <h3 className="text-sm font-extrabold uppercase tracking-wider">
              Pricing in One Answer (Summary Callout)
            </h3>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">Callout Title</label>
            <input
              type="text"
              value={pageData.pricingSummary.title}
              onChange={(e) =>
                setPageData({
                  ...pageData,
                  pricingSummary: { ...pageData.pricingSummary, title: e.target.value },
                })
              }
              className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white font-bold"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">Summary Description</label>
            <textarea
              rows={3}
              value={pageData.pricingSummary.description}
              onChange={(e) =>
                setPageData({
                  ...pageData,
                  pricingSummary: { ...pageData.pricingSummary, description: e.target.value },
                })
              }
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 leading-relaxed"
            />
          </div>
        </div>

        {/* FAQ List Editor */}
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-teal-400">
                Frequently Asked Questions ({pageData.faqsSection.faqs.length})
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Questions will expand and collapse interactively on the live page.
              </p>
            </div>
            <button
              onClick={() => {
                const updated = [
                  ...pageData.faqsSection.faqs,
                  { q: "New Question Title?", a: "Detailed answer explaining the policy or rate." },
                ];
                setPageData({
                  ...pageData,
                  faqsSection: { ...pageData.faqsSection, faqs: updated },
                });
              }}
              className="px-3.5 py-2 rounded-xl bg-teal-950/80 border border-teal-800/60 text-teal-300 font-bold text-xs flex items-center gap-1 cursor-pointer"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Add FAQ</span>
            </button>
          </div>

          <div className="space-y-4">
            {pageData.faqsSection.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 relative"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-teal-400 uppercase">Question #{idx + 1}</span>
                  <button
                    onClick={() => {
                      const updated = pageData.faqsSection.faqs.filter((_, i) => i !== idx);
                      setPageData({
                        ...pageData,
                        faqsSection: { ...pageData.faqsSection, faqs: updated },
                      });
                    }}
                    className="text-slate-500 hover:text-rose-400 p-1"
                    title="Delete Question"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div>
                  <input
                    type="text"
                    value={faq.q}
                    onChange={(e) => {
                      const updated = [...pageData.faqsSection.faqs];
                      updated[idx] = { ...updated[idx], q: e.target.value };
                      setPageData({
                        ...pageData,
                        faqsSection: { ...pageData.faqsSection, faqs: updated },
                      });
                    }}
                    className="w-full px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white font-bold"
                  />
                </div>
                <div>
                  <textarea
                    rows={2}
                    value={faq.a}
                    onChange={(e) => {
                      const updated = [...pageData.faqsSection.faqs];
                      updated[idx] = { ...updated[idx], a: e.target.value };
                      setPageData({
                        ...pageData,
                        faqsSection: { ...pageData.faqsSection, faqs: updated },
                      });
                    }}
                    className="w-full px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ──────────────────────────────────────────────────────────────────────────
  // TAB: CLOSING CTA & REGIONAL HUB
  // ──────────────────────────────────────────────────────────────────────────
  if (mainSection === "closing") {
    return (
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900 border border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold mb-2">
              <MapPin className="h-3.5 w-3.5" />
              <span>Section: Closing CTA &amp; Regional Hub</span>
            </div>
            <h2 className="text-xl font-black text-white">Project Quote Banner &amp; Assam/Northeast Hub</h2>
            <p className="text-xs text-slate-400 mt-1">
              Configure the bottom lead generation CTA band and the regional internal linking hub.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onSaveSection("closingCta", pageData.closingCta)}
              disabled={savingSection === "closingCta"}
              className="px-4 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-lg shadow-teal-500/20 transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              <Save className="h-4 w-4" />
              <span>{savingSection === "closingCta" ? "Saving..." : "Save CTA"}</span>
            </button>
            <button
              onClick={() => onSaveSection("geographicHub", pageData.geographicHub)}
              disabled={savingSection === "geographicHub"}
              className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              <Save className="h-4 w-4" />
              <span>{savingSection === "geographicHub" ? "Saving..." : "Save Hub"}</span>
            </button>
          </div>
        </div>

        {/* Closing CTA */}
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6">
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-3">
            Closing Project Quote Banner
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Badge</label>
              <input
                type="text"
                value={pageData.closingCta.badge}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    closingCta: { ...pageData.closingCta, badge: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Main Heading</label>
              <input
                type="text"
                value={pageData.closingCta.title}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    closingCta: { ...pageData.closingCta, title: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white font-bold"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-300 mb-1">Description</label>
              <textarea
                rows={2}
                value={pageData.closingCta.description}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    closingCta: { ...pageData.closingCta, description: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300"
              />
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <span className="text-xs font-bold text-slate-400 uppercase">Action Buttons</span>
            <div className="grid gap-3 sm:grid-cols-3">
              {pageData.closingCta.buttons.map((btn, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="text-[10px] font-bold text-teal-400 uppercase">Button #{idx + 1}</span>
                  <input
                    type="text"
                    value={btn.text}
                    onChange={(e) => {
                      const updated = [...pageData.closingCta.buttons];
                      updated[idx] = { ...updated[idx], text: e.target.value };
                      setPageData({
                        ...pageData,
                        closingCta: { ...pageData.closingCta, buttons: updated },
                      });
                    }}
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                  />
                  <input
                    type="text"
                    value={btn.href}
                    onChange={(e) => {
                      const updated = [...pageData.closingCta.buttons];
                      updated[idx] = { ...updated[idx], href: e.target.value };
                      setPageData({
                        ...pageData,
                        closingCta: { ...pageData.closingCta, buttons: updated },
                      });
                    }}
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Geographic Regional Hub */}
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6">
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-teal-400 border-b border-slate-800 pb-3">
            Guwahati &amp; Northeast India Hub Section
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Hub Tag</label>
              <input
                type="text"
                value={pageData.geographicHub.hubTag}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    geographicHub: { ...pageData.geographicHub, hubTag: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-cyan-300 font-bold"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Heading</label>
              <input
                type="text"
                value={pageData.geographicHub.title}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    geographicHub: { ...pageData.geographicHub, title: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white font-bold"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-300 mb-1">Description</label>
              <textarea
                rows={2}
                value={pageData.geographicHub.description}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    geographicHub: { ...pageData.geographicHub, description: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300"
              />
            </div>
          </div>

          {/* Related Links */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase">
                Related Directory Links ({pageData.geographicHub.relatedLinks.length})
              </span>
              <button
                onClick={() => {
                  const updated = [
                    ...pageData.geographicHub.relatedLinks,
                    { topic: "New Solution Topic", href: "/pricing/" },
                  ];
                  setPageData({
                    ...pageData,
                    geographicHub: { ...pageData.geographicHub, relatedLinks: updated },
                  });
                }}
                className="px-3 py-1 rounded-lg bg-slate-800 text-xs font-bold text-teal-300"
              >
                + Add Link
              </button>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {pageData.geographicHub.relatedLinks.map((link, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5 relative">
                  <button
                    onClick={() => {
                      const updated = pageData.geographicHub.relatedLinks.filter((_, i) => i !== idx);
                      setPageData({
                        ...pageData,
                        geographicHub: { ...pageData.geographicHub, relatedLinks: updated },
                      });
                    }}
                    className="absolute top-2 right-2 text-slate-500 hover:text-rose-400"
                  >
                    <Trash2 className="h-3 w-3" />
                  </button>
                  <input
                    type="text"
                    value={link.topic}
                    onChange={(e) => {
                      const updated = [...pageData.geographicHub.relatedLinks];
                      updated[idx] = { ...updated[idx], topic: e.target.value };
                      setPageData({
                        ...pageData,
                        geographicHub: { ...pageData.geographicHub, relatedLinks: updated },
                      });
                    }}
                    className="w-5/6 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                  />
                  <input
                    type="text"
                    value={link.href}
                    onChange={(e) => {
                      const updated = [...pageData.geographicHub.relatedLinks];
                      updated[idx] = { ...updated[idx], href: e.target.value };
                      setPageData({
                        ...pageData,
                        geographicHub: { ...pageData.geographicHub, relatedLinks: updated },
                      });
                    }}
                    className="w-full px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-400"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ──────────────────────────────────────────────────────────────────────────
  // TAB: SEO METADATA
  // ──────────────────────────────────────────────────────────────────────────
  if (mainSection === "seo") {
    return (
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900 border border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold mb-2">
              <Search className="h-3.5 w-3.5" />
              <span>Section: SEO &amp; Meta Tags</span>
            </div>
            <h2 className="text-xl font-black text-white">Search Engine Optimization &amp; Schema</h2>
            <p className="text-xs text-slate-400 mt-1">
              Configure Google title tag, meta description, and rich snippet schemas.
            </p>
          </div>
          <button
            onClick={() => onSaveSection("seo", pageData.seo)}
            disabled={savingSection === "seo"}
            className="px-4 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-lg shadow-teal-500/20 transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
          >
            <Save className="h-4 w-4" />
            <span>{savingSection === "seo" ? "Saving..." : "Save SEO"}</span>
          </button>
        </div>

        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6">
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">Meta Title Tag</label>
            <input
              type="text"
              value={pageData.seo.title}
              onChange={(e) =>
                setPageData({
                  ...pageData,
                  seo: { ...pageData.seo, title: e.target.value },
                })
              }
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white font-semibold"
            />
            <span className="text-[11px] text-slate-500 mt-1 block">
              Character count: {pageData.seo.title.length} (recommended 50-60)
            </span>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">Meta Description</label>
            <textarea
              rows={3}
              value={pageData.seo.description}
              onChange={(e) =>
                setPageData({
                  ...pageData,
                  seo: { ...pageData.seo, description: e.target.value },
                })
              }
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed"
            />
            <span className="text-[11px] text-slate-500 mt-1 block">
              Character count: {pageData.seo.description.length} (recommended 140-160)
            </span>
          </div>

          {/* Google SERP Preview Card */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
              Google Search Result Snippet Preview
            </span>
            <p className="text-xs text-teal-400 truncate">https://idgen.com/pricing/</p>
            <h4 className="text-sm font-semibold text-sky-400 hover:underline cursor-pointer truncate">
              {pageData.seo.title}
            </h4>
            <p className="text-xs text-slate-400 line-clamp-2">{pageData.seo.description}</p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
