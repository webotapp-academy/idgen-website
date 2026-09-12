"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Sparkles,
  Save,
  RotateCcw,
  ExternalLink,
  Plus,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Layers,
  Building2,
  Boxes,
  ShieldCheck,
  HelpCircle,
  Camera,
  Sliders,
  Check,
  Globe,
  Package,
  Workflow,
  Printer,
  UploadCloud,
  Tag,
  RefreshCw,
  Ticket,
  Users,
  Trophy,
  Palette,
  QrCode,
  Waves,
  MapPin,
  ClipboardList,
  FileCheck,
  Zap,
} from "lucide-react";
import type {
  DynamicEventCardPrintingData,
  EventHeroSlideItem,
  EventFormatItem,
  EventCategoryItem,
  EventProcessStepItem,
  EventSolutionItem,
  EventInfoRequirementGroup,
  EventQualityCheckItem,
  EventFaqItem,
  EventConfigPackageItem,
  EventInternalLinkItem,
} from "@/lib/dynamic-event-card-printing-types";

function AdminEventCardPrintingContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "hero";
  const [data, setData] = useState<DynamicEventCardPrintingData | null>(null);
  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingField, setUploadingField] = useState<string | null>(null);
  const [saveSuccess, setSaveSuccess] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);

  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  useEffect(() => {
    fetchPageData();
  }, []);

  const fetchPageData = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/event-card-printing");
      const json = await res.json();
      if (json.success && json.data) {
        setData(json.data);
      } else {
        setSaveError("Failed to load Event Card Printing data");
      }
    } catch (e: any) {
      setSaveError(e.message || "Network error loading data");
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    callback: (url: string) => void,
    fieldId?: string
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploadingField(fieldId || "uploading");
      const form = new FormData();
      form.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: form,
      });
      const json = await res.json();

      if (json.success && json.url) {
        callback(json.url);
        setSaveSuccess("Image uploaded successfully!");
        setTimeout(() => setSaveSuccess(null), 3000);
      } else {
        setSaveError(json.error || "Failed to upload image");
      }
    } catch (e: any) {
      setSaveError(e.message || "Error uploading image");
    } finally {
      setUploadingField(null);
    }
  };

  const handleSaveWholePage = async () => {
    if (!data) return;
    try {
      setSaving(true);
      setSaveSuccess(null);
      setSaveError(null);

      const res = await fetch("/api/admin/event-card-printing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });
      const json = await res.json();

      if (json.success) {
        setSaveSuccess("Event Card Printing page published successfully!");
        if (json.data) setData(json.data);
        setTimeout(() => setSaveSuccess(null), 4000);
      } else {
        setSaveError(json.error || "Failed to save whole page");
      }
    } catch (e: any) {
      setSaveError(e.message || "Network error saving page");
    } finally {
      setSaving(false);
    }
  };

  const handleSaveSection = async (sectionKey: keyof DynamicEventCardPrintingData) => {
    if (!data) return;
    try {
      setSaving(true);
      setSaveSuccess(null);
      setSaveError(null);

      const res = await fetch("/api/admin/event-card-printing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          section: sectionKey,
          sectionData: data[sectionKey],
        }),
      });
      const json = await res.json();

      if (json.success) {
        setSaveSuccess(`Section '${sectionKey}' saved and live!`);
        if (json.data) setData(json.data);
        setTimeout(() => setSaveSuccess(null), 3000);
      } else {
        setSaveError(json.error || `Failed to save section ${sectionKey}`);
      }
    } catch (e: any) {
      setSaveError(e.message || "Network error saving section");
    } finally {
      setSaving(false);
    }
  };

  const handleResetToDefaults = async () => {
    if (!confirm("Are you sure you want to restore factory defaults for Event Card Printing? All custom changes will be reset.")) {
      return;
    }
    try {
      setSaving(true);
      setSaveSuccess(null);
      setSaveError(null);

      const res = await fetch("/api/admin/event-card-printing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "reset" }),
      });
      const json = await res.json();

      if (json.success && json.data) {
        setData(json.data);
        setSaveSuccess("Factory defaults restored successfully!");
        setTimeout(() => setSaveSuccess(null), 4000);
      } else {
        setSaveError(json.error || "Failed to reset");
      }
    } catch (e: any) {
      setSaveError(e.message || "Network error resetting");
    } finally {
      setSaving(false);
    }
  };

  const renderImageUploadField = (
    label: string,
    value: string,
    onChange: (val: string) => void,
    fieldId: string
  ) => {
    const isUploading = uploadingField === fieldId;
    return (
      <div className="space-y-2 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
        <label className="text-xs font-bold text-slate-300 flex items-center gap-2">
          <Camera className="h-3.5 w-3.5 text-cyan-400" />
          <span>{label}</span>
        </label>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Thumbnail preview */}
          <div className="relative h-16 w-16 rounded-xl overflow-hidden bg-slate-900 border border-slate-700 shrink-0">
            {value ? (
              <img
                src={value}
                alt="Preview"
                className="h-full w-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center text-slate-600 text-[10px]">
                No image
              </div>
            )}
            {isUploading && (
              <div className="absolute inset-0 bg-slate-950/80 flex items-center justify-center">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent" />
              </div>
            )}
          </div>

          {/* URL Input */}
          <input
            type="text"
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder="/images/example.jpg or /uploads/..."
            className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
          />

          {/* Direct File Upload Button */}
          <label
            className={`cursor-pointer inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-colors ${
              isUploading
                ? "bg-slate-800 text-slate-500 border-slate-700 cursor-not-allowed"
                : "bg-cyan-950/80 text-cyan-300 border-cyan-700/60 hover:bg-cyan-900 hover:text-white"
            }`}
          >
            <UploadCloud className="h-4 w-4" />
            <span>{isUploading ? "Uploading..." : "Upload"}</span>
            <input
              type="file"
              accept="image/*"
              disabled={isUploading}
              className="hidden"
              onChange={(e) => {
                handleFileUpload(e, onChange, fieldId);
              }}
            />
          </label>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-3 text-slate-400">
        <RefreshCw className="h-8 w-8 animate-spin text-cyan-400" />
        <p className="text-sm font-semibold">Loading Event Card CMS Suite...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="p-8 text-center text-rose-400 space-y-4">
        <p>Failed to load data. Please refresh or check connection.</p>
        <button
          onClick={fetchPageData}
          className="px-4 py-2 rounded-xl bg-slate-800 text-white text-xs font-bold"
        >
          Try Again
        </button>
      </div>
    );
  }

  const TABS = [
    { id: "hero", label: "01. Hero & Workflow", icon: Sparkles },
    { id: "slides", label: "02. Hero 1:1 Carousel", icon: Camera },
    { id: "what_is", label: "03. Concept & Attendees", icon: HelpCircle },
    { id: "custom_fields", label: "04. Custom Fields & Specimen", icon: Sliders },
    { id: "formats_attachment", label: "05. Formats & 1 vs 2 Hook", icon: Building2 },
    { id: "ultrasonic_balance", label: "06. Ultrasonic & Wear Balance", icon: Waves },
    { id: "categories_branding", label: "07. Categories & Branding", icon: Palette },
    { id: "personalization_bulk", label: "08. Personalization & Bulk", icon: Package },
    { id: "process_solutions", label: "09. Process & Solutions", icon: Workflow },
    { id: "comparison", label: "10. Card Comparison", icon: Layers },
    { id: "info_quality", label: "11. Quotation Checklist & QA", icon: ShieldCheck },
    { id: "pricing_why", label: "12. Pricing & Why IDGen", icon: CheckCircle2 },
    { id: "faq_closing_seo", label: "13. FAQ, Banner & SEO", icon: Globe },
  ];

  return (
    <div className="space-y-6 pb-24">
      {/* Header Banner */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-500/20 shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              100% Dynamic Content Suite
            </span>
            <span className="text-xs text-slate-400">/event-card-printing</span>
          </div>
          <h1 className="text-2xl font-black text-white flex items-center gap-2">
            <Ticket className="h-6 w-6 text-cyan-400" />
            Event Card Printing CMS
          </h1>
          <p className="text-xs text-slate-400 max-w-2xl">
            Manage all 22 sections: Hero carousel, 1-hook vs 2-hook configurations, color-coded attendee categories, event branding hierarchy, 9-step production pipeline, and direct image uploads.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <Link
            href="/event-card-printing"
            target="_blank"
            className="px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition flex items-center gap-1.5"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            View Live
          </Link>
          <button
            onClick={handleResetToDefaults}
            disabled={saving}
            className="px-3.5 py-2 rounded-xl bg-rose-950/50 hover:bg-rose-900/60 text-rose-300 text-xs font-bold border border-rose-800/40 transition flex items-center gap-1.5"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Factory Reset
          </button>
          <button
            onClick={handleSaveWholePage}
            disabled={saving}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-[#009fe3] hover:from-cyan-400 hover:to-[#008bc9] text-white text-xs font-extrabold shadow-lg shadow-cyan-500/25 transition flex items-center gap-2 disabled:opacity-50"
          >
            <Save className="h-4 w-4" />
            <span>{saving ? "Publishing..." : "Publish Whole Page"}</span>
          </button>
        </div>
      </div>

      {/* Notifications */}
      {saveSuccess && (
        <div className="p-4 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-2 shadow-lg animate-in fade-in slide-in-from-top-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
          <span>{saveSuccess}</span>
        </div>
      )}
      {saveError && (
        <div className="p-4 rounded-xl bg-rose-950/70 border border-rose-500/40 text-rose-300 text-xs font-bold flex items-center gap-2 shadow-lg animate-in fade-in slide-in-from-top-2">
          <AlertCircle className="h-4 w-4 text-rose-400 shrink-0" />
          <span>{saveError}</span>
        </div>
      )}

      {/* Tab Navigation Pill Bar */}
      <div className="flex flex-wrap items-center gap-2 pb-3 border-b border-slate-800">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-cyan-950/90 text-cyan-300 border border-cyan-500/50 shadow-md shadow-cyan-950/50"
                  : "bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 border border-slate-800"
              }`}
            >
              <Icon className={`h-3.5 w-3.5 ${isActive ? "text-cyan-400" : "text-slate-400"}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ─────────────────────────────────────────────────────────────
          TAB 1: HERO & WORKFLOW
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "hero" && (
        <div className="space-y-6 rounded-2xl bg-slate-900/90 border border-slate-800 p-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-cyan-400" />
                Hero & Identification Workflow
              </h2>
              <p className="text-xs text-slate-400">
                Main eyebrow badge, split title, introductory lede, 8-step workflow chain, and CTAs.
              </p>
            </div>
            <button
              onClick={() => handleSaveSection("hero")}
              disabled={saving}
              className="px-4 py-2 rounded-xl bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-700/50 text-xs font-bold transition flex items-center gap-1.5"
            >
              <Save className="h-3.5 w-3.5" />
              Save Hero
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300">Badge Label</label>
              <input
                type="text"
                value={data.hero.badge}
                onChange={(e) =>
                  setData({ ...data, hero: { ...data.hero, badge: e.target.value } })
                }
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300">Main Title Prefix</label>
              <input
                type="text"
                value={data.hero.title}
                onChange={(e) =>
                  setData({ ...data, hero: { ...data.hero, title: e.target.value } })
                }
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <div className="space-y-1 sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">Gradient Highlight Text</label>
              <input
                type="text"
                value={data.hero.titleHighlight}
                onChange={(e) =>
                  setData({ ...data, hero: { ...data.hero, titleHighlight: e.target.value } })
                }
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <div className="space-y-1 sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">Hero Description</label>
              <textarea
                rows={3}
                value={data.hero.description}
                onChange={(e) =>
                  setData({ ...data, hero: { ...data.hero, description: e.target.value } })
                }
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <div className="space-y-1 sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">Workflow Box Heading</label>
              <input
                type="text"
                value={data.hero.workflowHeading}
                onChange={(e) =>
                  setData({ ...data, hero: { ...data.hero, workflowHeading: e.target.value } })
                }
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">Workflow Chain Steps (Ordered)</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {data.hero.workflowChain.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <span className="text-[10px] text-cyan-400 font-mono">{idx + 1}.</span>
                    <input
                      type="text"
                      value={step}
                      onChange={(e) => {
                        const newChain = [...data.hero.workflowChain];
                        newChain[idx] = e.target.value;
                        setData({ ...data, hero: { ...data.hero, workflowChain: newChain } });
                      }}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2 py-1 text-xs text-white focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300">Primary CTA Text</label>
              <input
                type="text"
                value={data.hero.primaryCtaText}
                onChange={(e) =>
                  setData({ ...data, hero: { ...data.hero, primaryCtaText: e.target.value } })
                }
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300">Primary CTA Link</label>
              <input
                type="text"
                value={data.hero.primaryCtaLink}
                onChange={(e) =>
                  setData({ ...data, hero: { ...data.hero, primaryCtaLink: e.target.value } })
                }
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300">Secondary CTA Text</label>
              <input
                type="text"
                value={data.hero.secondaryCtaText}
                onChange={(e) =>
                  setData({ ...data, hero: { ...data.hero, secondaryCtaText: e.target.value } })
                }
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300">Secondary CTA Link</label>
              <input
                type="text"
                value={data.hero.secondaryCtaLink}
                onChange={(e) =>
                  setData({ ...data, hero: { ...data.hero, secondaryCtaLink: e.target.value } })
                }
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
              />
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 2: HERO 1:1 CAROUSEL
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "slides" && (
        <div className="space-y-6 rounded-2xl bg-slate-900/90 border border-slate-800 p-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white flex items-center gap-2">
                <Camera className="h-5 w-5 text-cyan-400" />
                Hero 1:1 Showcase Carousel ({data.heroSlides.length} Slides)
              </h2>
              <p className="text-xs text-slate-400">
                Add, reorder, or edit specimen slides with live thumbnail upload and floating specification pills.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  const newSlide: EventHeroSlideItem = {
                    id: `event-slide-${Date.now()}`,
                    imageSrc: "/images/idgen-custom-event-card-printing.jpg",
                    alt: "Custom Event Badge Specimen",
                    title: "Executive Event Pass",
                    category: "Summit Pass",
                    topBadge: "VIP Badge",
                    specPill: "Dual Hooks",
                    bottomSpec: "Attendee Name • VIP Pass • Event Summit",
                    hubTag: "SUMMIT READY",
                  };
                  setData({ ...data, heroSlides: [...data.heroSlides, newSlide] });
                }}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold transition flex items-center gap-1.5"
              >
                <Plus className="h-3.5 w-3.5 text-cyan-400" />
                Add Slide
              </button>
              <button
                onClick={() => handleSaveSection("heroSlides")}
                disabled={saving}
                className="px-4 py-2 rounded-xl bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-700/50 text-xs font-bold transition flex items-center gap-1.5"
              >
                <Save className="h-3.5 w-3.5" />
                Save Slides
              </button>
            </div>
          </div>

          <div className="grid gap-6">
            {data.heroSlides.map((slide, idx) => (
              <div
                key={slide.id || idx}
                className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4 relative"
              >
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    Slide #{idx + 1} — {slide.title || "Untitled Slide"}
                  </span>
                  <button
                    onClick={() => {
                      const updated = data.heroSlides.filter((_, i) => i !== idx);
                      setData({ ...data, heroSlides: updated });
                    }}
                    className="text-rose-400 hover:text-rose-300 text-xs font-semibold flex items-center gap-1"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    Delete
                  </button>
                </div>

                {/* Direct Image Upload Field */}
                {renderImageUploadField(
                  "Slide Image (1:1 Ratio recommended)",
                  slide.imageSrc,
                  (url) => {
                    const updated = [...data.heroSlides];
                    updated[idx].imageSrc = url;
                    setData({ ...data, heroSlides: updated });
                  },
                  `slide-${idx}`
                )}

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-300">Slide Title</label>
                    <input
                      type="text"
                      value={slide.title}
                      onChange={(e) => {
                        const updated = [...data.heroSlides];
                        updated[idx].title = e.target.value;
                        setData({ ...data, heroSlides: updated });
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-300">Top-Left Floating Badge</label>
                    <input
                      type="text"
                      value={slide.topBadge}
                      onChange={(e) => {
                        const updated = [...data.heroSlides];
                        updated[idx].topBadge = e.target.value;
                        setData({ ...data, heroSlides: updated });
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-300">Top-Right Spec Pill</label>
                    <input
                      type="text"
                      value={slide.specPill}
                      onChange={(e) => {
                        const updated = [...data.heroSlides];
                        updated[idx].specPill = e.target.value;
                        setData({ ...data, heroSlides: updated });
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-300">Bottom Hub Tag</label>
                    <input
                      type="text"
                      value={slide.hubTag}
                      onChange={(e) => {
                        const updated = [...data.heroSlides];
                        updated[idx].hubTag = e.target.value;
                        setData({ ...data, heroSlides: updated });
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-[11px] font-bold text-slate-300">Bottom Spec Bar Text</label>
                    <input
                      type="text"
                      value={slide.bottomSpec}
                      onChange={(e) => {
                        const updated = [...data.heroSlides];
                        updated[idx].bottomSpec = e.target.value;
                        setData({ ...data, heroSlides: updated });
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-[11px] font-bold text-slate-300">Image Alt Text (SEO)</label>
                    <input
                      type="text"
                      value={slide.alt}
                      onChange={(e) => {
                        const updated = [...data.heroSlides];
                        updated[idx].alt = e.target.value;
                        setData({ ...data, heroSlides: updated });
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 3: CONCEPT & ATTENDEES
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "what_is" && (
        <div className="space-y-6 rounded-2xl bg-slate-900/90 border border-slate-800 p-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-cyan-400" />
                What Is an Event Card & Attendee Identification
              </h2>
              <p className="text-xs text-slate-400">
                Definition statement and 11 identified attendee types (Speakers, VIPs, Delegates, Organizers).
              </p>
            </div>
            <button
              onClick={() => handleSaveSection("whatIs")}
              disabled={saving}
              className="px-4 py-2 rounded-xl bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-700/50 text-xs font-bold transition flex items-center gap-1.5"
            >
              <Save className="h-3.5 w-3.5" />
              Save Concept
            </button>
          </div>

          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Eyebrow</label>
                <input
                  type="text"
                  value={data.whatIs.eyebrow}
                  onChange={(e) =>
                    setData({ ...data, whatIs: { ...data.whatIs, eyebrow: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Section Title</label>
                <input
                  type="text"
                  value={data.whatIs.title}
                  onChange={(e) =>
                    setData({ ...data, whatIs: { ...data.whatIs, title: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
              <div className="space-y-1 sm:col-span-2">
                <label className="text-xs font-bold text-slate-300">Description</label>
                <textarea
                  rows={3}
                  value={data.whatIs.description}
                  onChange={(e) =>
                    setData({ ...data, whatIs: { ...data.whatIs, description: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
              <div className="space-y-1 sm:col-span-2">
                <label className="text-xs font-bold text-slate-300">Attendees Heading</label>
                <input
                  type="text"
                  value={data.whatIs.attendeesHeading}
                  onChange={(e) =>
                    setData({ ...data, whatIs: { ...data.whatIs, attendeesHeading: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-300">Attendee Roles List</label>
                <button
                  onClick={() => {
                    setData({
                      ...data,
                      whatIs: { ...data.whatIs, attendees: [...data.whatIs.attendees, "New Attendee"] },
                    });
                  }}
                  className="text-cyan-400 hover:text-cyan-300 text-xs font-bold flex items-center gap-1"
                >
                  <Plus className="h-3 w-3" /> Add Role
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {data.whatIs.attendees.map((attendee, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <input
                      type="text"
                      value={attendee}
                      onChange={(e) => {
                        const updated = [...data.whatIs.attendees];
                        updated[idx] = e.target.value;
                        setData({ ...data, whatIs: { ...data.whatIs, attendees: updated } });
                      }}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                    />
                    <button
                      onClick={() => {
                        const updated = data.whatIs.attendees.filter((_, i) => i !== idx);
                        setData({ ...data, whatIs: { ...data.whatIs, attendees: updated } });
                      }}
                      className="text-slate-500 hover:text-rose-400 p-1"
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 4: CUSTOM FIELDS & SPECIMEN
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "custom_fields" && (
        <div className="space-y-6 rounded-2xl bg-slate-900/90 border border-slate-800 p-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white flex items-center gap-2">
                <Sliders className="h-5 w-5 text-cyan-400" />
                Custom Event Card Fields & Specimen Box
              </h2>
              <p className="text-xs text-slate-400">
                13 customizable participant data fields and the layout specimen mock card.
              </p>
            </div>
            <button
              onClick={() => handleSaveSection("customFields")}
              disabled={saving}
              className="px-4 py-2 rounded-xl bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-700/50 text-xs font-bold transition flex items-center gap-1.5"
            >
              <Save className="h-3.5 w-3.5" />
              Save Fields
            </button>
          </div>

          <div className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Eyebrow</label>
                <input
                  type="text"
                  value={data.customFields.eyebrow}
                  onChange={(e) =>
                    setData({ ...data, customFields: { ...data.customFields, eyebrow: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Title</label>
                <input
                  type="text"
                  value={data.customFields.title}
                  onChange={(e) =>
                    setData({ ...data, customFields: { ...data.customFields, title: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Lede Subtitle</label>
                <input
                  type="text"
                  value={data.customFields.lede}
                  onChange={(e) =>
                    setData({ ...data, customFields: { ...data.customFields, lede: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
            </div>

            {/* Specimen Box Sub-Editor */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
              <h3 className="text-xs font-black text-cyan-300 uppercase tracking-wider">
                Specimen Layout Mock Card Data
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-400">Event Logo Text</label>
                  <input
                    type="text"
                    value={data.customFields.specimen.eventLogoText}
                    onChange={(e) =>
                      setData({
                        ...data,
                        customFields: {
                          ...data.customFields,
                          specimen: { ...data.customFields.specimen, eventLogoText: e.target.value },
                        },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-400">Event Name</label>
                  <input
                    type="text"
                    value={data.customFields.specimen.eventName}
                    onChange={(e) =>
                      setData({
                        ...data,
                        customFields: {
                          ...data.customFields,
                          specimen: { ...data.customFields.specimen, eventName: e.target.value },
                        },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-400">Participant Name</label>
                  <input
                    type="text"
                    value={data.customFields.specimen.participantName}
                    onChange={(e) =>
                      setData({
                        ...data,
                        customFields: {
                          ...data.customFields,
                          specimen: { ...data.customFields.specimen, participantName: e.target.value },
                        },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-400">Category Badge</label>
                  <input
                    type="text"
                    value={data.customFields.specimen.categoryBadge}
                    onChange={(e) =>
                      setData({
                        ...data,
                        customFields: {
                          ...data.customFields,
                          specimen: { ...data.customFields.specimen, categoryBadge: e.target.value },
                        },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
              </div>
            </div>

            {/* Fields List */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-300">Personalized Field Badges</label>
                <button
                  onClick={() => {
                    setData({
                      ...data,
                      customFields: {
                        ...data.customFields,
                        fields: [...data.customFields.fields, "New Field"],
                      },
                    });
                  }}
                  className="text-cyan-400 hover:text-cyan-300 text-xs font-bold flex items-center gap-1"
                >
                  <Plus className="h-3 w-3" /> Add Field
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {data.customFields.fields.map((fld, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <input
                      type="text"
                      value={fld}
                      onChange={(e) => {
                        const updated = [...data.customFields.fields];
                        updated[idx] = e.target.value;
                        setData({ ...data, customFields: { ...data.customFields, fields: updated } });
                      }}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                    />
                    <button
                      onClick={() => {
                        const updated = data.customFields.fields.filter((_, i) => i !== idx);
                        setData({ ...data, customFields: { ...data.customFields, fields: updated } });
                      }}
                      className="text-slate-500 hover:text-rose-400 p-1"
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 5: FORMATS & 1 VS 2 HOOK
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "formats_attachment" && (
        <div className="space-y-6 rounded-2xl bg-slate-900/90 border border-slate-800 p-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white flex items-center gap-2">
                <Building2 className="h-5 w-5 text-cyan-400" />
                Event Card Formats & 1-Hook vs 2-Hook Configurations
              </h2>
              <p className="text-xs text-slate-400">
                Conference/Exhibition/Seminar card cards, comparison photo upload, and dual hook options.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleSaveSection("eventTypes")}
                disabled={saving}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold transition flex items-center gap-1"
              >
                <Save className="h-3.5 w-3.5" /> Save Formats
              </button>
              <button
                onClick={() => handleSaveSection("attachment")}
                disabled={saving}
                className="px-4 py-2 rounded-xl bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-700/50 text-xs font-bold transition flex items-center gap-1.5"
              >
                <Save className="h-3.5 w-3.5" /> Save Attachment
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {/* Direct Image Upload for Comparison Photo */}
            {renderImageUploadField(
              "1-Hook vs 2-Hook Comparison Showcase Image",
              data.attachment.image,
              (url) => setData({ ...data, attachment: { ...data.attachment, image: url } }),
              "attachment-img"
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Option 1 Heading</label>
                <input
                  type="text"
                  value={data.attachment.option1.heading}
                  onChange={(e) =>
                    setData({
                      ...data,
                      attachment: {
                        ...data.attachment,
                        option1: { ...data.attachment.option1, heading: e.target.value },
                      },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Option 2 Heading</label>
                <input
                  type="text"
                  value={data.attachment.option2.heading}
                  onChange={(e) =>
                    setData({
                      ...data,
                      attachment: {
                        ...data.attachment,
                        option2: { ...data.attachment.option2, heading: e.target.value },
                      },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Option 1 Note</label>
                <input
                  type="text"
                  value={data.attachment.option1.note}
                  onChange={(e) =>
                    setData({
                      ...data,
                      attachment: {
                        ...data.attachment,
                        option1: { ...data.attachment.option1, note: e.target.value },
                      },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Option 2 Note</label>
                <input
                  type="text"
                  value={data.attachment.option2.note}
                  onChange={(e) =>
                    setData({
                      ...data,
                      attachment: {
                        ...data.attachment,
                        option2: { ...data.attachment.option2, note: e.target.value },
                      },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
            </div>

            {/* Event Format Cards */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-black text-cyan-300 uppercase tracking-wider">
                Event Format Cards ({data.eventTypes.types.length})
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {data.eventTypes.types.map((type, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                    <input
                      type="text"
                      value={type.title}
                      onChange={(e) => {
                        const updated = [...data.eventTypes.types];
                        updated[idx].title = e.target.value;
                        setData({ ...data, eventTypes: { ...data.eventTypes, types: updated } });
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs font-bold text-white"
                    />
                    <textarea
                      rows={2}
                      value={type.body}
                      onChange={(e) => {
                        const updated = [...data.eventTypes.types];
                        updated[idx].body = e.target.value;
                        setData({ ...data, eventTypes: { ...data.eventTypes, types: updated } });
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 6: ULTRASONIC & WEAR BALANCE
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "ultrasonic_balance" && (
        <div className="space-y-6 rounded-2xl bg-slate-900/90 border border-slate-800 p-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white flex items-center gap-2">
                <Waves className="h-5 w-5 text-cyan-400" />
                Ultrasonic Sealing & Wearable Balance
              </h2>
              <p className="text-xs text-slate-400">
                Acoustic welded attachment flows (one vs two points) and anti-flip ergonomic rationale.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleSaveSection("ultrasonic")}
                disabled={saving}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold transition flex items-center gap-1"
              >
                <Save className="h-3.5 w-3.5" /> Save Ultrasonic
              </button>
              <button
                onClick={() => handleSaveSection("rightAttachment")}
                disabled={saving}
                className="px-4 py-2 rounded-xl bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-700/50 text-xs font-bold transition flex items-center gap-1.5"
              >
                <Save className="h-3.5 w-3.5" /> Save Balance
              </button>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
              <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                Ultrasonic Sealing Parameters
              </h3>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-300">Title</label>
                <input
                  type="text"
                  value={data.ultrasonic.title}
                  onChange={(e) =>
                    setData({ ...data, ultrasonic: { ...data.ultrasonic, title: e.target.value } })
                  }
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-300">Description</label>
                <textarea
                  rows={3}
                  value={data.ultrasonic.description}
                  onChange={(e) =>
                    setData({ ...data, ultrasonic: { ...data.ultrasonic, description: e.target.value } })
                  }
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-300">CTA Link</label>
                <input
                  type="text"
                  value={data.ultrasonic.ctaLink}
                  onChange={(e) =>
                    setData({ ...data, ultrasonic: { ...data.ultrasonic, ctaLink: e.target.value } })
                  }
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
              <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                Why Event Cards Need Right Attachment
              </h3>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-300">Title</label>
                <input
                  type="text"
                  value={data.rightAttachment.title}
                  onChange={(e) =>
                    setData({ ...data, rightAttachment: { ...data.rightAttachment, title: e.target.value } })
                  }
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-300">Description</label>
                <textarea
                  rows={3}
                  value={data.rightAttachment.description}
                  onChange={(e) =>
                    setData({ ...data, rightAttachment: { ...data.rightAttachment, description: e.target.value } })
                  }
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-300">Footer Note</label>
                <textarea
                  rows={2}
                  value={data.rightAttachment.note}
                  onChange={(e) =>
                    setData({ ...data, rightAttachment: { ...data.rightAttachment, note: e.target.value } })
                  }
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 7: CATEGORIES & BRANDING
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "categories_branding" && (
        <div className="space-y-6 rounded-2xl bg-slate-900/90 border border-slate-800 p-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white flex items-center gap-2">
                <Palette className="h-5 w-5 text-cyan-400" />
                Color-Coded Attendee Categories & Visual Branding
              </h2>
              <p className="text-xs text-slate-400">
                10 attendee color cards (Delegate, Speaker, VIP, Sponsor) and 11 branding hierarchy elements.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleSaveSection("categories")}
                disabled={saving}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold transition flex items-center gap-1"
              >
                <Save className="h-3.5 w-3.5" /> Save Categories
              </button>
              <button
                onClick={() => handleSaveSection("branding")}
                disabled={saving}
                className="px-4 py-2 rounded-xl bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-700/50 text-xs font-bold transition flex items-center gap-1.5"
              >
                <Save className="h-3.5 w-3.5" /> Save Branding
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {/* Category Cards */}
            <div className="space-y-3">
              <h3 className="text-xs font-black text-cyan-300 uppercase tracking-wider">
                10 Attendee Color-Coded Categories
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {data.categories.categories.map((cat, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400">Role #{idx + 1}</label>
                    <input
                      type="text"
                      value={cat.name}
                      onChange={(e) => {
                        const updated = [...data.categories.categories];
                        updated[idx].name = e.target.value;
                        setData({ ...data, categories: { ...data.categories, categories: updated } });
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-xs font-bold text-white"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Branding Elements */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-black text-cyan-300 uppercase tracking-wider">
                11 Event Branding Elements
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {data.branding.elements.map((elem, idx) => (
                  <input
                    key={idx}
                    type="text"
                    value={elem}
                    onChange={(e) => {
                      const updated = [...data.branding.elements];
                      updated[idx] = e.target.value;
                      setData({ ...data, branding: { ...data.branding, elements: updated } });
                    }}
                    className="bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 8: PERSONALIZATION & BULK
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "personalization_bulk" && (
        <div className="space-y-6 rounded-2xl bg-slate-900/90 border border-slate-800 p-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white flex items-center gap-2">
                <Package className="h-5 w-5 text-cyan-400" />
                Personalized Data & Bulk Event Production
              </h2>
              <p className="text-xs text-slate-400">
                Participant data collection workflow, IDGen Studio integration, and bulk order quotation factors.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleSaveSection("personalization")}
                disabled={saving}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold transition flex items-center gap-1"
              >
                <Save className="h-3.5 w-3.5" /> Save Personalization
              </button>
              <button
                onClick={() => handleSaveSection("bulk")}
                disabled={saving}
                className="px-4 py-2 rounded-xl bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-700/50 text-xs font-bold transition flex items-center gap-1.5"
              >
                <Save className="h-3.5 w-3.5" /> Save Bulk
              </button>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
              <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                Personalized Event Badges
              </h3>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-300">Title</label>
                <input
                  type="text"
                  value={data.personalization.title}
                  onChange={(e) =>
                    setData({ ...data, personalization: { ...data.personalization, title: e.target.value } })
                  }
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-300">Description</label>
                <textarea
                  rows={2}
                  value={data.personalization.description}
                  onChange={(e) =>
                    setData({ ...data, personalization: { ...data.personalization, description: e.target.value } })
                  }
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-300">CTA Link (IDGen Studio)</label>
                <input
                  type="text"
                  value={data.personalization.ctaLink}
                  onChange={(e) =>
                    setData({ ...data, personalization: { ...data.personalization, ctaLink: e.target.value } })
                  }
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
              <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                Bulk Events Requirements
              </h3>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-300">Title</label>
                <input
                  type="text"
                  value={data.bulk.title}
                  onChange={(e) =>
                    setData({ ...data, bulk: { ...data.bulk, title: e.target.value } })
                  }
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-300">Lede Subtitle</label>
                <textarea
                  rows={2}
                  value={data.bulk.lede}
                  onChange={(e) =>
                    setData({ ...data, bulk: { ...data.bulk, lede: e.target.value } })
                  }
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-300">Footer Note</label>
                <input
                  type="text"
                  value={data.bulk.footerNote}
                  onChange={(e) =>
                    setData({ ...data, bulk: { ...data.bulk, footerNote: e.target.value } })
                  }
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 9: PROCESS & SOLUTIONS
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "process_solutions" && (
        <div className="space-y-6 rounded-2xl bg-slate-900/90 border border-slate-800 p-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white flex items-center gap-2">
                <Workflow className="h-5 w-5 text-cyan-400" />
                9-Step Production Lifecycle & Event Solutions
              </h2>
              <p className="text-xs text-slate-400">
                Full 9-step production workflow steps and 6 tailored event solutions.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleSaveSection("process")}
                disabled={saving}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold transition flex items-center gap-1"
              >
                <Save className="h-3.5 w-3.5" /> Save Process
              </button>
              <button
                onClick={() => handleSaveSection("solutions")}
                disabled={saving}
                className="px-4 py-2 rounded-xl bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-700/50 text-xs font-bold transition flex items-center gap-1.5"
              >
                <Save className="h-3.5 w-3.5" /> Save Solutions
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {/* 9 Process Steps */}
            <div className="space-y-3">
              <h3 className="text-xs font-black text-cyan-300 uppercase tracking-wider">
                9 Production Lifecycle Steps
              </h3>
              <div className="grid gap-3 sm:grid-cols-3">
                {data.process.steps.map((step, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                    <input
                      type="text"
                      value={step.title}
                      onChange={(e) => {
                        const updated = [...data.process.steps];
                        updated[idx].title = e.target.value;
                        setData({ ...data, process: { ...data.process, steps: updated } });
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-xs font-bold text-white"
                    />
                    <textarea
                      rows={2}
                      value={step.body}
                      onChange={(e) => {
                        const updated = [...data.process.steps];
                        updated[idx].body = e.target.value;
                        setData({ ...data, process: { ...data.process, steps: updated } });
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-slate-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* 6 Solutions */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-black text-cyan-300 uppercase tracking-wider">
                6 Event Solutions by Format
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {data.solutions.solutions.map((sol, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                    <input
                      type="text"
                      value={sol.type}
                      onChange={(e) => {
                        const updated = [...data.solutions.solutions];
                        updated[idx].type = e.target.value;
                        setData({ ...data, solutions: { ...data.solutions, solutions: updated } });
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-xs font-bold text-cyan-400"
                    />
                    <textarea
                      rows={2}
                      value={sol.desc}
                      onChange={(e) => {
                        const updated = [...data.solutions.solutions];
                        updated[idx].desc = e.target.value;
                        setData({ ...data, solutions: { ...data.solutions, solutions: updated } });
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-slate-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 10: CARD COMPARISON
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "comparison" && (
        <div className="space-y-6 rounded-2xl bg-slate-900/90 border border-slate-800 p-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white flex items-center gap-2">
                <Layers className="h-5 w-5 text-cyan-400" />
                Event vs Student vs Employee ID Cards
              </h2>
              <p className="text-xs text-slate-400">
                Cross-service differentiation with setup flow chains and direct links.
              </p>
            </div>
            <button
              onClick={() => handleSaveSection("comparison")}
              disabled={saving}
              className="px-4 py-2 rounded-xl bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-700/50 text-xs font-bold transition flex items-center gap-1.5"
            >
              <Save className="h-3.5 w-3.5" />
              Save Comparison
            </button>
          </div>

          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Title</label>
                <input
                  type="text"
                  value={data.comparison.title}
                  onChange={(e) =>
                    setData({ ...data, comparison: { ...data.comparison, title: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Footer Note</label>
                <input
                  type="text"
                  value={data.comparison.footerNote}
                  onChange={(e) =>
                    setData({ ...data, comparison: { ...data.comparison, footerNote: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
              <div className="space-y-1 sm:col-span-2">
                <label className="text-xs font-bold text-slate-300">Description</label>
                <textarea
                  rows={2}
                  value={data.comparison.description}
                  onChange={(e) =>
                    setData({ ...data, comparison: { ...data.comparison, description: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 pt-2">
              {data.comparison.items.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider">
                    {item.type}
                  </span>
                  <div className="text-xs font-mono text-slate-300">
                    {item.setup.join(" → ")}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 11: QUOTATION CHECKLIST & QA
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "info_quality" && (
        <div className="space-y-6 rounded-2xl bg-slate-900/90 border border-slate-800 p-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-cyan-400" />
                Quotation Checklist & Quality Assurance Checks
              </h2>
              <p className="text-xs text-slate-400">
                4 information checklist groups and 5 essential quality inspection factors.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleSaveSection("informationNeeded")}
                disabled={saving}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold transition flex items-center gap-1"
              >
                <Save className="h-3.5 w-3.5" /> Save Checklist
              </button>
              <button
                onClick={() => handleSaveSection("qualityChecks")}
                disabled={saving}
                className="px-4 py-2 rounded-xl bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-700/50 text-xs font-bold transition flex items-center gap-1.5"
              >
                <Save className="h-3.5 w-3.5" /> Save QA
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {/* Checklist Groups */}
            <div className="space-y-3">
              <h3 className="text-xs font-black text-cyan-300 uppercase tracking-wider">
                4 Quotation Information Groups
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {data.informationNeeded.groups.map((grp, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                    <input
                      type="text"
                      value={grp.title}
                      onChange={(e) => {
                        const updated = [...data.informationNeeded.groups];
                        updated[idx].title = e.target.value;
                        setData({ ...data, informationNeeded: { ...data.informationNeeded, groups: updated } });
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-xs font-bold text-cyan-400"
                    />
                    <ul className="space-y-1 text-xs text-slate-300">
                      {grp.items.map((it, i) => (
                        <li key={i} className="truncate">• {it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality Checks */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-black text-cyan-300 uppercase tracking-wider">
                5 Quality Assurance Checkpoints
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {data.qualityChecks.checks.map((qc, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                    <input
                      type="text"
                      value={qc.title}
                      onChange={(e) => {
                        const updated = [...data.qualityChecks.checks];
                        updated[idx].title = e.target.value;
                        setData({ ...data, qualityChecks: { ...data.qualityChecks, checks: updated } });
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-xs font-bold text-white"
                    />
                    <textarea
                      rows={2}
                      value={qc.body}
                      onChange={(e) => {
                        const updated = [...data.qualityChecks.checks];
                        updated[idx].body = e.target.value;
                        setData({ ...data, qualityChecks: { ...data.qualityChecks, checks: updated } });
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-slate-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 12: PRICING & WHY IDGEN
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "pricing_why" && (
        <div className="space-y-6 rounded-2xl bg-slate-900/90 border border-slate-800 p-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                Pricing Factors & Why Choose IDGen
              </h2>
              <p className="text-xs text-slate-400">
                10 quotation pricing factors, 3 pricing CTA buttons, and 8-step coordination pipeline.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleSaveSection("pricing")}
                disabled={saving}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold transition flex items-center gap-1"
              >
                <Save className="h-3.5 w-3.5" /> Save Pricing
              </button>
              <button
                onClick={() => handleSaveSection("whyChoose")}
                disabled={saving}
                className="px-4 py-2 rounded-xl bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-700/50 text-xs font-bold transition flex items-center gap-1.5"
              >
                <Save className="h-3.5 w-3.5" /> Save Why IDGen
              </button>
            </div>
          </div>

          <div className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Pricing Title</label>
                <input
                  type="text"
                  value={data.pricing.title}
                  onChange={(e) =>
                    setData({ ...data, pricing: { ...data.pricing, title: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
              <div className="space-y-1 sm:col-span-2">
                <label className="text-xs font-bold text-slate-300">Pricing Policy Description</label>
                <input
                  type="text"
                  value={data.pricing.description}
                  onChange={(e) =>
                    setData({ ...data, pricing: { ...data.pricing, description: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
            </div>

            {/* Pricing Factors */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300">10 Pricing Factors</label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {data.pricing.factors.map((factor, idx) => (
                  <input
                    key={idx}
                    type="text"
                    value={factor}
                    onChange={(e) => {
                      const updated = [...data.pricing.factors];
                      updated[idx] = e.target.value;
                      setData({ ...data, pricing: { ...data.pricing, factors: updated } });
                    }}
                    className="bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                  />
                ))}
              </div>
            </div>

            {/* Why Choose IDGen */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3 pt-4">
              <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                Why Choose IDGen Coordination Chain
              </h3>
              <div className="space-y-2">
                <input
                  type="text"
                  value={data.whyChoose.title}
                  onChange={(e) =>
                    setData({ ...data, whyChoose: { ...data.whyChoose, title: e.target.value } })
                  }
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white font-bold"
                />
                <textarea
                  rows={2}
                  value={data.whyChoose.description}
                  onChange={(e) =>
                    setData({ ...data, whyChoose: { ...data.whyChoose, description: e.target.value } })
                  }
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 13: FAQ, BANNER, DIRECTORY & SEO
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "faq_closing_seo" && (
        <div className="space-y-6 rounded-2xl bg-slate-900/90 border border-slate-800 p-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white flex items-center gap-2">
                <Globe className="h-5 w-5 text-cyan-400" />
                FAQs, Closing Banner, Regional Directory & SEO
              </h2>
              <p className="text-xs text-slate-400">
                12 FAQs, 4 config package cards, summary banner, Northeast hub links, and meta tags.
              </p>
            </div>
            <button
              onClick={handleSaveWholePage}
              disabled={saving}
              className="px-4 py-2 rounded-xl bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-700/50 text-xs font-bold transition flex items-center gap-1.5"
            >
              <Save className="h-3.5 w-3.5" />
              Publish All
            </button>
          </div>

          <div className="space-y-6">
            {/* SEO Meta */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
              <h3 className="text-xs font-black text-cyan-300 uppercase tracking-wider">
                SEO Metadata
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-300">SEO Page Title</label>
                  <input
                    type="text"
                    value={data.metadata.title}
                    onChange={(e) =>
                      setData({ ...data, metadata: { ...data.metadata, title: e.target.value } })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-300">Canonical Path</label>
                  <input
                    type="text"
                    value={data.metadata.path}
                    onChange={(e) =>
                      setData({ ...data, metadata: { ...data.metadata, path: e.target.value } })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
                <div className="space-y-1 sm:col-span-2">
                  <label className="text-[11px] font-bold text-slate-300">Meta Description</label>
                  <textarea
                    rows={2}
                    value={data.metadata.description}
                    onChange={(e) =>
                      setData({ ...data, metadata: { ...data.metadata, description: e.target.value } })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
              </div>
            </div>

            {/* Closing CTA Packages */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
              <h3 className="text-xs font-black text-cyan-300 uppercase tracking-wider">
                4 Closing Package Formula Cards
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {data.closingCta.packages.map((pkg, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                    <input
                      type="text"
                      value={pkg.title}
                      onChange={(e) => {
                        const updated = [...data.closingCta.packages];
                        updated[idx].title = e.target.value;
                        setData({ ...data, closingCta: { ...data.closingCta, packages: updated } });
                      }}
                      className="w-full bg-slate-950 border border-slate-700 rounded px-2 py-1 text-xs font-bold text-cyan-400"
                    />
                    <input
                      type="text"
                      value={pkg.badge}
                      onChange={(e) => {
                        const updated = [...data.closingCta.packages];
                        updated[idx].badge = e.target.value;
                        setData({ ...data, closingCta: { ...data.closingCta, packages: updated } });
                      }}
                      className="w-full bg-slate-950 border border-slate-700 rounded px-2 py-1 text-[11px] text-white"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* 12 FAQs */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-black text-cyan-300 uppercase tracking-wider">
                  Frequently Asked Questions ({data.faq.faqs.length})
                </h3>
                <button
                  onClick={() => {
                    const newFaq: EventFaqItem = {
                      q: "New question?",
                      a: "Answer to the new question.",
                    };
                    setData({ ...data, faq: { ...data.faq, faqs: [...data.faq.faqs, newFaq] } });
                  }}
                  className="text-cyan-400 hover:text-cyan-300 text-xs font-bold flex items-center gap-1"
                >
                  <Plus className="h-3 w-3" /> Add FAQ
                </button>
              </div>
              <div className="space-y-3">
                {data.faq.faqs.map((faq, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-cyan-400">Q{idx + 1}.</span>
                      <button
                        onClick={() => {
                          const updated = data.faq.faqs.filter((_, i) => i !== idx);
                          setData({ ...data, faq: { ...data.faq, faqs: updated } });
                        }}
                        className="text-slate-500 hover:text-rose-400 p-1"
                      >
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </div>
                    <input
                      type="text"
                      value={faq.q}
                      onChange={(e) => {
                        const updated = [...data.faq.faqs];
                        updated[idx].q = e.target.value;
                        setData({ ...data, faq: { ...data.faq, faqs: updated } });
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs font-bold text-white"
                    />
                    <textarea
                      rows={2}
                      value={faq.a}
                      onChange={(e) => {
                        const updated = [...data.faq.faqs];
                        updated[idx].a = e.target.value;
                        setData({ ...data, faq: { ...data.faq, faqs: updated } });
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminEventCardPrintingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[70vh] flex flex-col items-center justify-center gap-3 text-slate-400">
          <RefreshCw className="h-8 w-8 animate-spin text-cyan-400" />
          <p className="text-sm font-semibold">Loading Event Card CMS...</p>
        </div>
      }
    >
      <AdminEventCardPrintingContent />
    </Suspense>
  );
}
