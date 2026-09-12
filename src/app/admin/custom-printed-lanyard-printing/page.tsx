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
} from "lucide-react";
import type {
  DynamicCustomPrintedLanyardPrintingData,
  LanyardHeroSlideItem,
  LanyardPrintingOptionItem,
  LanyardApplicationCardItem,
  LanyardArtworkStepItem,
  LanyardBenefitItem,
  LanyardConfigTierItem,
  LanyardOrderStepItem,
  LanyardFaqItem,
} from "@/lib/dynamic-custom-printed-lanyard-printing-types";

function AdminCustomPrintedLanyardPrintingContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "hero";
  const [data, setData] = useState<DynamicCustomPrintedLanyardPrintingData | null>(null);
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
      const res = await fetch("/api/admin/custom-printed-lanyard-printing");
      const json = await res.json();
      if (json.success && json.data) {
        setData(json.data);
      } else {
        setSaveError("Failed to load Custom Printed Lanyard Printing data");
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

      const res = await fetch("/api/admin/custom-printed-lanyard-printing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });

      const json = await res.json();
      if (json.success) {
        setData(json.data);
        setSaveSuccess("All custom lanyard page changes published successfully!");
        setTimeout(() => setSaveSuccess(null), 4000);
      } else {
        setSaveError(json.error || "Save failed");
      }
    } catch (e: any) {
      setSaveError(e.message || "Network error during save");
    } finally {
      setSaving(false);
    }
  };

  const handleSaveSection = async (sectionKey: string, sectionData: any) => {
    try {
      setSaving(true);
      setSaveSuccess(null);
      setSaveError(null);

      const res = await fetch("/api/admin/custom-printed-lanyard-printing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ section: sectionKey, sectionData }),
      });

      const json = await res.json();
      if (json.success) {
        setData(json.data);
        setSaveSuccess(`Section '${sectionKey}' saved and updated!`);
        setTimeout(() => setSaveSuccess(null), 4000);
      } else {
        setSaveError(json.error || "Section save failed");
      }
    } catch (e: any) {
      setSaveError(e.message || "Network error during section save");
    } finally {
      setSaving(false);
    }
  };

  const handleResetToDefaults = async () => {
    if (
      !confirm(
        "Are you sure you want to reset the Custom Printed Lanyard Printing page to factory defaults? All custom changes will be overwritten."
      )
    ) {
      return;
    }

    try {
      setSaving(true);
      setSaveSuccess(null);
      setSaveError(null);

      const res = await fetch("/api/admin/custom-printed-lanyard-printing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "reset" }),
      });

      const json = await res.json();
      if (json.success) {
        setData(json.data);
        setSaveSuccess("Restored factory defaults successfully!");
        setTimeout(() => setSaveSuccess(null), 4000);
      } else {
        setSaveError(json.error || "Reset failed");
      }
    } catch (e: any) {
      setSaveError(e.message || "Network error during reset");
    } finally {
      setSaving(false);
    }
  };

  // Reusable Image Upload & Preview Row
  const renderImageUploadField = (
    label: string,
    value: string | undefined,
    onChange: (val: string) => void,
    fieldId: string
  ) => {
    const isUploading = uploadingField === fieldId;
    return (
      <div className="space-y-1.5">
        <label className="block text-xs font-bold text-slate-300">{label}</label>
        <div className="flex items-center gap-3">
          {/* Live Thumbnail Preview */}
          <div className="relative h-12 w-16 shrink-0 rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-inner flex items-center justify-center">
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
              <Camera className="h-4 w-4 text-slate-600" />
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
        <p className="text-sm font-semibold">Loading Custom Lanyard CMS Suite...</p>
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
    { id: "custom_elements", label: "03. 20mm Custom Elements", icon: Sliders },
    { id: "what_is_suitable", label: "04. Concept & Suitable Uses", icon: HelpCircle },
    { id: "printing_printable", label: "05. Print Options & Items", icon: Printer },
    { id: "applications", label: "06. Sector Applications", icon: Building2 },
    { id: "setup", label: "07. Complete Setup Specimen", icon: Layers },
    { id: "bulk", label: "08. Bulk Production Orders", icon: Package },
    { id: "workflow_benefits", label: "09. Artwork Flow & Benefits", icon: Workflow },
    { id: "design_quality", label: "10. Design & Quality QA", icon: ShieldCheck },
    { id: "ultrasonic_config", label: "11. Ultrasonic & Configs", icon: Boxes },
    { id: "ordering_pricing_faq", label: "12. Order, ₹15 Card & FAQ", icon: CheckCircle2 },
    { id: "cta_directory_seo", label: "13. Banner, Directory & SEO", icon: Globe },
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
            <span className="text-xs text-slate-400">/custom-printed-lanyard-printing</span>
          </div>
          <h1 className="text-2xl font-black text-white flex items-center gap-2">
            <Tag className="h-6 w-6 text-cyan-400" />
            Custom Printed Lanyard CMS
          </h1>
          <p className="text-xs text-slate-400 max-w-2xl">
            Edit all 22 sections: Hero carousel, 20mm specifications, identification workflows, printing methods, bulk order criteria, ultrasonic sealing, ₹15 pricing specimen, and live image uploads.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <Link
            href="/custom-printed-lanyard-printing"
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
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 text-xs font-black shadow-lg shadow-cyan-500/25 transition flex items-center gap-2"
          >
            {saving ? (
              <RefreshCw className="h-4 w-4 animate-spin" />
            ) : (
              <Save className="h-4 w-4" />
            )}
            Publish All Changes
          </button>
        </div>
      </div>

      {/* Notifications */}
      {saveSuccess && (
        <div className="flex items-center gap-2.5 p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold animate-in fade-in">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
          <span>{saveSuccess}</span>
        </div>
      )}
      {saveError && (
        <div className="flex items-center gap-2.5 p-4 rounded-xl bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs font-semibold animate-in fade-in">
          <AlertCircle className="h-4 w-4 shrink-0 text-rose-400" />
          <span>{saveError}</span>
        </div>
      )}

      {/* Tabs Navigation */}
      <div className="flex flex-wrap items-center gap-2 pb-3 border-b border-slate-800">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold border transition ${
                isActive
                  ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-md shadow-cyan-500/10"
                  : "bg-slate-900/60 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-200"
              }`}
            >
              <Icon className={`h-3.5 w-3.5 ${isActive ? "text-cyan-400" : "text-slate-500"}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-6">

        {/* 01. HERO & WORKFLOW */}
        {activeTab === "hero" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-lg font-black text-white flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-cyan-400" />
                  Hero Section & Workflow Intro
                </h2>
                <p className="text-xs text-slate-400">
                  Headline, badge, description copy, workflow arrangement chain, and primary/secondary CTAs.
                </p>
              </div>
              <button
                onClick={() => handleSaveSection("hero", data.hero)}
                disabled={saving}
                className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold flex items-center gap-1.5 transition"
              >
                <Save className="h-3.5 w-3.5" />
                Save Hero
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Top Pill Badge</label>
                <input
                  type="text"
                  value={data.hero.badge}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, badge: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Title Highlight (Gradient Words)</label>
                <input
                  type="text"
                  value={data.hero.titleHighlight}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, titleHighlight: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-300 mb-1">Main H1 Title Template</label>
                <input
                  type="text"
                  value={data.hero.title}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, title: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-300 mb-1">Description Paragraph</label>
                <textarea
                  rows={3}
                  value={data.hero.description}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, description: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Workflow Chain Box */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                  Typical Arrangement Chain Card
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Workflow Heading</label>
                  <input
                    type="text"
                    value={data.hero.workflowHeading}
                    onChange={(e) =>
                      setData({ ...data, hero: { ...data.hero, workflowHeading: e.target.value } })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Workflow Note</label>
                  <input
                    type="text"
                    value={data.hero.workflowNote}
                    onChange={(e) =>
                      setData({ ...data, hero: { ...data.hero, workflowNote: e.target.value } })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">Chain Steps</label>
                <div className="space-y-2">
                  {data.hero.workflowChain.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-xs font-mono text-cyan-400 w-6">{idx + 1}.</span>
                      <input
                        type="text"
                        value={step}
                        onChange={(e) => {
                          const updated = [...data.hero.workflowChain];
                          updated[idx] = e.target.value;
                          setData({ ...data, hero: { ...data.hero, workflowChain: updated } });
                        }}
                        className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                      />
                      <button
                        onClick={() => {
                          const updated = data.hero.workflowChain.filter((_, i) => i !== idx);
                          setData({ ...data, hero: { ...data.hero, workflowChain: updated } });
                        }}
                        className="p-1.5 text-rose-400 hover:text-rose-300 rounded-lg"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => {
                      setData({
                        ...data,
                        hero: {
                          ...data.hero,
                          workflowChain: [...data.hero.workflowChain, "New Step"],
                        },
                      });
                    }}
                    className="px-3 py-1.5 rounded-lg bg-cyan-950/60 text-cyan-300 border border-cyan-800/40 text-xs font-semibold flex items-center gap-1 hover:bg-cyan-900/60"
                  >
                    <Plus className="h-3.5 w-3.5" />
                    Add Chain Step
                  </button>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Primary CTA Text</label>
                <input
                  type="text"
                  value={data.hero.primaryCtaText}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, primaryCtaText: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Primary CTA Link</label>
                <input
                  type="text"
                  value={data.hero.primaryCtaLink}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, primaryCtaLink: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Secondary CTA Text</label>
                <input
                  type="text"
                  value={data.hero.secondaryCtaText}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, secondaryCtaText: e.target.value } })
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Secondary CTA Link</label>
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

        {/* 02. HERO 1:1 CAROUSEL SLIDES */}
        {activeTab === "slides" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-lg font-black text-white flex items-center gap-2">
                  <Camera className="h-5 w-5 text-cyan-400" />
                  Hero 1:1 Carousel Slides ({data.heroSlides.length})
                </h2>
                <p className="text-xs text-slate-400">
                  Upload images, customize badges, category tags, and pill specifications for the rotating hero specimen showcase.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const newSlide: LanyardHeroSlideItem = {
                      id: `lanyard-slide-${Date.now()}`,
                      imageSrc: "/images/20mm-custom-printed-lanyard-branding.jpg",
                      alt: "Custom Printed Satin Lanyard",
                      title: "New Specimen Lanyard",
                      category: "Corporate & Institutional",
                      topBadge: "Full Wearable Kit",
                      specPill: "Card + Holder + Lanyard",
                      bottomSpec: "20mm Satin Specimen • High Definition",
                      hubTag: "FACTORY DIRECT",
                    };
                    setData({ ...data, heroSlides: [...data.heroSlides, newSlide] });
                  }}
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <Plus className="h-3.5 w-3.5" />
                  Add Slide
                </button>
                <button
                  onClick={() => handleSaveSection("heroSlides", data.heroSlides)}
                  disabled={saving}
                  className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <Save className="h-3.5 w-3.5" />
                  Save Slides
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.heroSlides.map((slide, idx) => (
                <div
                  key={slide.id || idx}
                  className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 relative group"
                >
                  <div className="flex items-center justify-between border-b border-slate-800/60 pb-2">
                    <span className="text-xs font-bold text-cyan-400">Slide #{idx + 1}</span>
                    <button
                      onClick={() => {
                        const updated = data.heroSlides.filter((_, i) => i !== idx);
                        setData({ ...data, heroSlides: updated });
                      }}
                      className="text-rose-400 hover:text-rose-300 p-1"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  {renderImageUploadField(
                    "Slide Image (1:1 Ratio Recommended)",
                    slide.imageSrc,
                    (url) => {
                      const updated = [...data.heroSlides];
                      updated[idx].imageSrc = url;
                      setData({ ...data, heroSlides: updated });
                    },
                    `slide-image-${idx}`
                  )}

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400">Title</label>
                      <input
                        type="text"
                        value={slide.title}
                        onChange={(e) => {
                          const updated = [...data.heroSlides];
                          updated[idx].title = e.target.value;
                          setData({ ...data, heroSlides: updated });
                        }}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400">Alt Text</label>
                      <input
                        type="text"
                        value={slide.alt}
                        onChange={(e) => {
                          const updated = [...data.heroSlides];
                          updated[idx].alt = e.target.value;
                          setData({ ...data, heroSlides: updated });
                        }}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400">Top Badge</label>
                      <input
                        type="text"
                        value={slide.topBadge}
                        onChange={(e) => {
                          const updated = [...data.heroSlides];
                          updated[idx].topBadge = e.target.value;
                          setData({ ...data, heroSlides: updated });
                        }}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400">Spec Pill</label>
                      <input
                        type="text"
                        value={slide.specPill}
                        onChange={(e) => {
                          const updated = [...data.heroSlides];
                          updated[idx].specPill = e.target.value;
                          setData({ ...data, heroSlides: updated });
                        }}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400">Bottom Spec</label>
                      <input
                        type="text"
                        value={slide.bottomSpec}
                        onChange={(e) => {
                          const updated = [...data.heroSlides];
                          updated[idx].bottomSpec = e.target.value;
                          setData({ ...data, heroSlides: updated });
                        }}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400">Hub / Tag Pill</label>
                      <input
                        type="text"
                        value={slide.hubTag}
                        onChange={(e) => {
                          const updated = [...data.heroSlides];
                          updated[idx].hubTag = e.target.value;
                          setData({ ...data, heroSlides: updated });
                        }}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 03. 20MM CUSTOM ELEMENTS */}
        {activeTab === "custom_elements" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-lg font-black text-white flex items-center gap-2">
                  <Sliders className="h-5 w-5 text-cyan-400" />
                  20 mm Custom Printed Lanyard Elements
                </h2>
                <p className="text-xs text-slate-400">
                  Macro photo upload, 8 custom parameter badges, side badge container, and quotation CTAs.
                </p>
              </div>
              <button
                onClick={() => handleSaveSection("customElements", data.customElements)}
                disabled={saving}
                className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold flex items-center gap-1.5 transition"
              >
                <Save className="h-3.5 w-3.5" />
                Save 20mm Section
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Eyebrow</label>
                <input
                  type="text"
                  value={data.customElements.eyebrow}
                  onChange={(e) =>
                    setData({
                      ...data,
                      customElements: { ...data.customElements, eyebrow: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Title</label>
                <input
                  type="text"
                  value={data.customElements.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      customElements: { ...data.customElements, title: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Macro Image Upload */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
              <h3 className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                Macro Image & Overlays
              </h3>
              {renderImageUploadField(
                "20mm Lanyard Macro Specimen Image",
                data.customElements.image,
                (url) =>
                  setData({
                    ...data,
                    customElements: { ...data.customElements, image: url },
                  }),
                "custom-elements-img"
              )}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400">Image Badge</label>
                  <input
                    type="text"
                    value={data.customElements.imageBadge}
                    onChange={(e) =>
                      setData({
                        ...data,
                        customElements: { ...data.customElements, imageBadge: e.target.value },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400">Width Badge</label>
                  <input
                    type="text"
                    value={data.customElements.imageWidthBadge}
                    onChange={(e) =>
                      setData({
                        ...data,
                        customElements: { ...data.customElements, imageWidthBadge: e.target.value },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400">Footer Tag</label>
                  <input
                    type="text"
                    value={data.customElements.imageFooterTag}
                    onChange={(e) =>
                      setData({
                        ...data,
                        customElements: { ...data.customElements, imageFooterTag: e.target.value },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400">Footer Subtitle</label>
                  <input
                    type="text"
                    value={data.customElements.imageFooterSubtitle}
                    onChange={(e) =>
                      setData({
                        ...data,
                        customElements: { ...data.customElements, imageFooterSubtitle: e.target.value },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[11px] font-semibold text-slate-400">Footer Title</label>
                  <input
                    type="text"
                    value={data.customElements.imageFooterTitle}
                    onChange={(e) =>
                      setData({
                        ...data,
                        customElements: { ...data.customElements, imageFooterTitle: e.target.value },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Elements Badges Grid */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                  Customization Elements Badges ({data.customElements.elements.length})
                </h3>
                <button
                  onClick={() => {
                    setData({
                      ...data,
                      customElements: {
                        ...data.customElements,
                        elements: [...data.customElements.elements, "New Parameter Badge"],
                      },
                    });
                  }}
                  className="px-2.5 py-1 rounded-lg bg-cyan-950/60 text-cyan-300 border border-cyan-800/40 text-xs font-semibold flex items-center gap-1"
                >
                  <Plus className="h-3 w-3" />
                  Add Badge
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {data.customElements.elements.map((el, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={el}
                      onChange={(e) => {
                        const updated = [...data.customElements.elements];
                        updated[idx] = e.target.value;
                        setData({
                          ...data,
                          customElements: { ...data.customElements, elements: updated },
                        });
                      }}
                      className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                    />
                    <button
                      onClick={() => {
                        const updated = data.customElements.elements.filter((_, i) => i !== idx);
                        setData({
                          ...data,
                          customElements: { ...data.customElements, elements: updated },
                        });
                      }}
                      className="text-rose-400 hover:text-rose-300 p-1"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Primary CTA Text</label>
                <input
                  type="text"
                  value={data.customElements.primaryCtaText}
                  onChange={(e) =>
                    setData({
                      ...data,
                      customElements: { ...data.customElements, primaryCtaText: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Primary CTA Link</label>
                <input
                  type="text"
                  value={data.customElements.primaryCtaLink}
                  onChange={(e) =>
                    setData({
                      ...data,
                      customElements: { ...data.customElements, primaryCtaLink: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Secondary CTA Text</label>
                <input
                  type="text"
                  value={data.customElements.secondaryCtaText}
                  onChange={(e) =>
                    setData({
                      ...data,
                      customElements: { ...data.customElements, secondaryCtaText: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Secondary CTA Link</label>
                <input
                  type="text"
                  value={data.customElements.secondaryCtaLink}
                  onChange={(e) =>
                    setData({
                      ...data,
                      customElements: { ...data.customElements, secondaryCtaLink: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* 04. CONCEPT & SUITABLE USES */}
        {activeTab === "what_is_suitable" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-lg font-black text-white flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-cyan-400" />
                  Concept Definition & Suitable Applications
                </h2>
                <p className="text-xs text-slate-400">
                  What is custom lanyard printing definition, 4-tier arrangement card, and 10 suitable organization use cases.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleSaveSection("whatIs", data.whatIs)}
                  disabled={saving}
                  className="px-3.5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <Save className="h-3.5 w-3.5" />
                  Save Definition
                </button>
                <button
                  onClick={() => handleSaveSection("suitableFor", data.suitableFor)}
                  disabled={saving}
                  className="px-3.5 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <Save className="h-3.5 w-3.5" />
                  Save Suitable For
                </button>
              </div>
            </div>

            {/* What is section */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
              <h3 className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                Section: What is Custom Printed Lanyard Printing?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Eyebrow</label>
                  <input
                    type="text"
                    value={data.whatIs.eyebrow}
                    onChange={(e) =>
                      setData({ ...data, whatIs: { ...data.whatIs, eyebrow: e.target.value } })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Title</label>
                  <input
                    type="text"
                    value={data.whatIs.title}
                    onChange={(e) =>
                      setData({ ...data, whatIs: { ...data.whatIs, title: e.target.value } })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-slate-300 mb-1">Description</label>
                  <textarea
                    rows={3}
                    value={data.whatIs.description}
                    onChange={(e) =>
                      setData({ ...data, whatIs: { ...data.whatIs, description: e.target.value } })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Arrangement Chain */}
              <div className="pt-2 border-t border-slate-800/80 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-300">Arrangement Chain Steps</label>
                  <button
                    onClick={() => {
                      setData({
                        ...data,
                        whatIs: {
                          ...data.whatIs,
                          arrangementChain: [...data.whatIs.arrangementChain, "New Element"],
                        },
                      });
                    }}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                  >
                    + Add Element
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {data.whatIs.arrangementChain.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-xs font-mono text-cyan-400 w-5">{idx + 1}.</span>
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => {
                          const updated = [...data.whatIs.arrangementChain];
                          updated[idx] = e.target.value;
                          setData({
                            ...data,
                            whatIs: { ...data.whatIs, arrangementChain: updated },
                          });
                        }}
                        className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                      />
                      <button
                        onClick={() => {
                          const updated = data.whatIs.arrangementChain.filter((_, i) => i !== idx);
                          setData({
                            ...data,
                            whatIs: { ...data.whatIs, arrangementChain: updated },
                          });
                        }}
                        className="text-rose-400 hover:text-rose-300 p-1"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">Arrangement Note</label>
                  <input
                    type="text"
                    value={data.whatIs.arrangementNote}
                    onChange={(e) =>
                      setData({
                        ...data,
                        whatIs: { ...data.whatIs, arrangementNote: e.target.value },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Suitable for section */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
              <h3 className="text-xs font-bold text-teal-300 uppercase tracking-wider">
                Section: What Are Custom Printed Lanyards Suitable For?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Eyebrow</label>
                  <input
                    type="text"
                    value={data.suitableFor.eyebrow}
                    onChange={(e) =>
                      setData({
                        ...data,
                        suitableFor: { ...data.suitableFor, eyebrow: e.target.value },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Title</label>
                  <input
                    type="text"
                    value={data.suitableFor.title}
                    onChange={(e) =>
                      setData({
                        ...data,
                        suitableFor: { ...data.suitableFor, title: e.target.value },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-slate-300 mb-1">Lede / Intro</label>
                  <input
                    type="text"
                    value={data.suitableFor.lede}
                    onChange={(e) =>
                      setData({
                        ...data,
                        suitableFor: { ...data.suitableFor, lede: e.target.value },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Suitable items */}
              <div className="pt-2 border-t border-slate-800/80 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-300">
                    Use Case Items ({data.suitableFor.items.length})
                  </label>
                  <button
                    onClick={() => {
                      setData({
                        ...data,
                        suitableFor: {
                          ...data.suitableFor,
                          items: [...data.suitableFor.items, "New Use Case"],
                        },
                      });
                    }}
                    className="text-xs font-semibold text-teal-400 hover:text-teal-300"
                  >
                    + Add Use Case
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {data.suitableFor.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-xs font-mono text-teal-400 w-5">{idx + 1}.</span>
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => {
                          const updated = [...data.suitableFor.items];
                          updated[idx] = e.target.value;
                          setData({
                            ...data,
                            suitableFor: { ...data.suitableFor, items: updated },
                          });
                        }}
                        className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                      />
                      <button
                        onClick={() => {
                          const updated = data.suitableFor.items.filter((_, i) => i !== idx);
                          setData({
                            ...data,
                            suitableFor: { ...data.suitableFor, items: updated },
                          });
                        }}
                        className="text-rose-400 hover:text-rose-300 p-1"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">Footer Note</label>
                  <input
                    type="text"
                    value={data.suitableFor.footerNote}
                    onChange={(e) =>
                      setData({
                        ...data,
                        suitableFor: { ...data.suitableFor, footerNote: e.target.value },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 05. PRINT OPTIONS & ITEMS */}
        {activeTab === "printing_printable" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-lg font-black text-white flex items-center gap-2">
                  <Printer className="h-5 w-5 text-cyan-400" />
                  Printing Methods & Printable Items
                </h2>
                <p className="text-xs text-slate-400">
                  Custom branding options (repeat patterns vs centered vs dual-side) and 11 printable elements.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleSaveSection("printingOptions", data.printingOptions)}
                  disabled={saving}
                  className="px-3.5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <Save className="h-3.5 w-3.5" />
                  Save Print Options
                </button>
                <button
                  onClick={() => handleSaveSection("printableItems", data.printableItems)}
                  disabled={saving}
                  className="px-3.5 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <Save className="h-3.5 w-3.5" />
                  Save Printable Items
                </button>
              </div>
            </div>

            {/* Printing Options */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                  Printing Options ({data.printingOptions.options.length})
                </h3>
                <button
                  onClick={() => {
                    const newOpt: LanyardPrintingOptionItem = {
                      title: "New Printing Method",
                      pattern: "Logo • Org Name • Motif",
                      desc: "Description of the layout, finish, and printing technique.",
                    };
                    setData({
                      ...data,
                      printingOptions: {
                        ...data.printingOptions,
                        options: [...data.printingOptions.options, newOpt],
                      },
                    });
                  }}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  + Add Option
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.printingOptions.options.map((opt, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-2 relative"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-cyan-400">Option #{idx + 1}</span>
                      <button
                        onClick={() => {
                          const updated = data.printingOptions.options.filter((_, i) => i !== idx);
                          setData({
                            ...data,
                            printingOptions: { ...data.printingOptions, options: updated },
                          });
                        }}
                        className="text-rose-400 hover:text-rose-300 p-1"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400">Title</label>
                      <input
                        type="text"
                        value={opt.title}
                        onChange={(e) => {
                          const updated = [...data.printingOptions.options];
                          updated[idx].title = e.target.value;
                          setData({
                            ...data,
                            printingOptions: { ...data.printingOptions, options: updated },
                          });
                        }}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400">Pattern Specimen</label>
                      <input
                        type="text"
                        value={opt.pattern}
                        onChange={(e) => {
                          const updated = [...data.printingOptions.options];
                          updated[idx].pattern = e.target.value;
                          setData({
                            ...data,
                            printingOptions: { ...data.printingOptions, options: updated },
                          });
                        }}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400">Description</label>
                      <textarea
                        rows={2}
                        value={opt.desc}
                        onChange={(e) => {
                          const updated = [...data.printingOptions.options];
                          updated[idx].desc = e.target.value;
                          setData({
                            ...data,
                            printingOptions: { ...data.printingOptions, options: updated },
                          });
                        }}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Printable Items */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-teal-300 uppercase tracking-wider">
                  Printable Elements ({data.printableItems.items.length})
                </h3>
                <button
                  onClick={() => {
                    setData({
                      ...data,
                      printableItems: {
                        ...data.printableItems,
                        items: [...data.printableItems.items, "New Printable Element"],
                      },
                    });
                  }}
                  className="text-xs font-semibold text-teal-400 hover:text-teal-300"
                >
                  + Add Element
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {data.printableItems.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-xs font-mono text-teal-400 w-5">{idx + 1}.</span>
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => {
                        const updated = [...data.printableItems.items];
                        updated[idx] = e.target.value;
                        setData({
                          ...data,
                          printableItems: { ...data.printableItems, items: updated },
                        });
                      }}
                      className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                    />
                    <button
                      onClick={() => {
                        const updated = data.printableItems.items.filter((_, i) => i !== idx);
                        setData({
                          ...data,
                          printableItems: { ...data.printableItems, items: updated },
                        });
                      }}
                      className="text-rose-400 hover:text-rose-300 p-1"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 06. SECTOR APPLICATIONS */}
        {activeTab === "applications" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-lg font-black text-white flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-cyan-400" />
                  Sector Application Cards ({data.applicationCards.cards.length})
                </h2>
                <p className="text-xs text-slate-400">
                  Student, Employee, Event & Conference, and Institutional sector cards with direct internal routing links.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const newCard: LanyardApplicationCardItem = {
                      iconName: "Building2",
                      title: "New Sector Application",
                      body: "Describe application requirements, accessories, and user roles.",
                      linkText: "View Solutions",
                      href: "/id-card-printing",
                    };
                    setData({
                      ...data,
                      applicationCards: {
                        ...data.applicationCards,
                        cards: [...data.applicationCards.cards, newCard],
                      },
                    });
                  }}
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <Plus className="h-3.5 w-3.5" />
                  Add Sector Card
                </button>
                <button
                  onClick={() => handleSaveSection("applicationCards", data.applicationCards)}
                  disabled={saving}
                  className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <Save className="h-3.5 w-3.5" />
                  Save Sector Cards
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.applicationCards.cards.map((card, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 relative group"
                >
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-xs font-bold text-cyan-400">Card #{idx + 1}</span>
                    <button
                      onClick={() => {
                        const updated = data.applicationCards.cards.filter((_, i) => i !== idx);
                        setData({
                          ...data,
                          applicationCards: { ...data.applicationCards, cards: updated },
                        });
                      }}
                      className="text-rose-400 hover:text-rose-300 p-1"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400">Icon Name</label>
                      <input
                        type="text"
                        value={card.iconName}
                        onChange={(e) => {
                          const updated = [...data.applicationCards.cards];
                          updated[idx].iconName = e.target.value;
                          setData({
                            ...data,
                            applicationCards: { ...data.applicationCards, cards: updated },
                          });
                        }}
                        placeholder="GraduationCap, Briefcase, Users, Building2"
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400">Card Title</label>
                      <input
                        type="text"
                        value={card.title}
                        onChange={(e) => {
                          const updated = [...data.applicationCards.cards];
                          updated[idx].title = e.target.value;
                          setData({
                            ...data,
                            applicationCards: { ...data.applicationCards, cards: updated },
                          });
                        }}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400">Body Description</label>
                    <textarea
                      rows={2}
                      value={card.body}
                      onChange={(e) => {
                        const updated = [...data.applicationCards.cards];
                        updated[idx].body = e.target.value;
                        setData({
                          ...data,
                          applicationCards: { ...data.applicationCards, cards: updated },
                        });
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400">Link Text</label>
                      <input
                        type="text"
                        value={card.linkText}
                        onChange={(e) => {
                          const updated = [...data.applicationCards.cards];
                          updated[idx].linkText = e.target.value;
                          setData({
                            ...data,
                            applicationCards: { ...data.applicationCards, cards: updated },
                          });
                        }}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400">Link Href</label>
                      <input
                        type="text"
                        value={card.href}
                        onChange={(e) => {
                          const updated = [...data.applicationCards.cards];
                          updated[idx].href = e.target.value;
                          setData({
                            ...data,
                            applicationCards: { ...data.applicationCards, cards: updated },
                          });
                        }}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 07. COMPLETE SETUP SPECIMEN */}
        {activeTab === "setup" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-lg font-black text-white flex items-center gap-2">
                  <Layers className="h-5 w-5 text-cyan-400" />
                  Complete Setup: Card + Holder + Hook + Lanyard
                </h2>
                <p className="text-xs text-slate-400">
                  Specimen image upload, standard vs ultrasonic sealed setup options, and engineering quick links.
                </p>
              </div>
              <button
                onClick={() => handleSaveSection("lanyardSetup", data.lanyardSetup)}
                disabled={saving}
                className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold flex items-center gap-1.5 transition"
              >
                <Save className="h-3.5 w-3.5" />
                Save Setup Section
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Eyebrow</label>
                <input
                  type="text"
                  value={data.lanyardSetup.eyebrow}
                  onChange={(e) =>
                    setData({
                      ...data,
                      lanyardSetup: { ...data.lanyardSetup, eyebrow: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Title</label>
                <input
                  type="text"
                  value={data.lanyardSetup.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      lanyardSetup: { ...data.lanyardSetup, title: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-300 mb-1">Description</label>
                <textarea
                  rows={2}
                  value={data.lanyardSetup.description}
                  onChange={(e) =>
                    setData({
                      ...data,
                      lanyardSetup: { ...data.lanyardSetup, description: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Specimen image upload */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
              <h3 className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                Setup Specimen Image & Labels
              </h3>
              {renderImageUploadField(
                "Setup Specimen Image",
                data.lanyardSetup.image,
                (url) =>
                  setData({
                    ...data,
                    lanyardSetup: { ...data.lanyardSetup, image: url },
                  }),
                "setup-specimen-img"
              )}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400">Image Badge</label>
                  <input
                    type="text"
                    value={data.lanyardSetup.imageBadge}
                    onChange={(e) =>
                      setData({
                        ...data,
                        lanyardSetup: { ...data.lanyardSetup, imageBadge: e.target.value },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400">Footer Tag</label>
                  <input
                    type="text"
                    value={data.lanyardSetup.imageFooterTag}
                    onChange={(e) =>
                      setData({
                        ...data,
                        lanyardSetup: { ...data.lanyardSetup, imageFooterTag: e.target.value },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400">Footer Title</label>
                  <input
                    type="text"
                    value={data.lanyardSetup.imageFooterTitle}
                    onChange={(e) =>
                      setData({
                        ...data,
                        lanyardSetup: { ...data.lanyardSetup, imageFooterTitle: e.target.value },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Options 1 & 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <label className="block text-xs font-bold text-cyan-300">Option 1 Heading</label>
                <input
                  type="text"
                  value={data.lanyardSetup.option1Heading}
                  onChange={(e) =>
                    setData({
                      ...data,
                      lanyardSetup: { ...data.lanyardSetup, option1Heading: e.target.value },
                    })
                  }
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                />
                <label className="block text-[11px] font-semibold text-slate-400">Chain Steps</label>
                {data.lanyardSetup.option1Chain.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={step}
                      onChange={(e) => {
                        const updated = [...data.lanyardSetup.option1Chain];
                        updated[idx] = e.target.value;
                        setData({
                          ...data,
                          lanyardSetup: { ...data.lanyardSetup, option1Chain: updated },
                        });
                      }}
                      className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                    />
                    <button
                      onClick={() => {
                        const updated = data.lanyardSetup.option1Chain.filter((_, i) => i !== idx);
                        setData({
                          ...data,
                          lanyardSetup: { ...data.lanyardSetup, option1Chain: updated },
                        });
                      }}
                      className="text-rose-400 p-1"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <label className="block text-xs font-bold text-teal-300">Option 2 Heading</label>
                <input
                  type="text"
                  value={data.lanyardSetup.option2Heading}
                  onChange={(e) =>
                    setData({
                      ...data,
                      lanyardSetup: { ...data.lanyardSetup, option2Heading: e.target.value },
                    })
                  }
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                />
                <label className="block text-[11px] font-semibold text-slate-400">Chain Steps</label>
                {data.lanyardSetup.option2Chain.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={step}
                      onChange={(e) => {
                        const updated = [...data.lanyardSetup.option2Chain];
                        updated[idx] = e.target.value;
                        setData({
                          ...data,
                          lanyardSetup: { ...data.lanyardSetup, option2Chain: updated },
                        });
                      }}
                      className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                    />
                    <button
                      onClick={() => {
                        const updated = data.lanyardSetup.option2Chain.filter((_, i) => i !== idx);
                        setData({
                          ...data,
                          lanyardSetup: { ...data.lanyardSetup, option2Chain: updated },
                        });
                      }}
                      className="text-rose-400 p-1"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 08. BULK PRODUCTION ORDERS */}
        {activeTab === "bulk" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-lg font-black text-white flex items-center gap-2">
                  <Package className="h-5 w-5 text-cyan-400" />
                  Bulk Production Orders & Factory Capacity
                </h2>
                <p className="text-xs text-slate-400">
                  Bulk production factory image, 6 quotation inquiry requirements, and express quotation CTA.
                </p>
              </div>
              <button
                onClick={() => handleSaveSection("bulkOrders", data.bulkOrders)}
                disabled={saving}
                className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold flex items-center gap-1.5 transition"
              >
                <Save className="h-3.5 w-3.5" />
                Save Bulk Section
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Eyebrow</label>
                <input
                  type="text"
                  value={data.bulkOrders.eyebrow}
                  onChange={(e) =>
                    setData({
                      ...data,
                      bulkOrders: { ...data.bulkOrders, eyebrow: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Title</label>
                <input
                  type="text"
                  value={data.bulkOrders.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      bulkOrders: { ...data.bulkOrders, title: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-300 mb-1">Description</label>
                <textarea
                  rows={2}
                  value={data.bulkOrders.description}
                  onChange={(e) =>
                    setData({
                      ...data,
                      bulkOrders: { ...data.bulkOrders, description: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Factory Image Upload */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
              <h3 className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                Bulk Factory Image
              </h3>
              {renderImageUploadField(
                "Factory Production Specimen Image",
                data.bulkOrders.image,
                (url) =>
                  setData({
                    ...data,
                    bulkOrders: { ...data.bulkOrders, image: url },
                  }),
                "bulk-orders-img"
              )}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400">Image Badge</label>
                  <input
                    type="text"
                    value={data.bulkOrders.imageBadge}
                    onChange={(e) =>
                      setData({
                        ...data,
                        bulkOrders: { ...data.bulkOrders, imageBadge: e.target.value },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400">Footer Tag</label>
                  <input
                    type="text"
                    value={data.bulkOrders.imageFooterTag}
                    onChange={(e) =>
                      setData({
                        ...data,
                        bulkOrders: { ...data.bulkOrders, imageFooterTag: e.target.value },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400">Footer Title</label>
                  <input
                    type="text"
                    value={data.bulkOrders.imageFooterTitle}
                    onChange={(e) =>
                      setData({
                        ...data,
                        bulkOrders: { ...data.bulkOrders, imageFooterTitle: e.target.value },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Requirements list */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-300">
                  Bulk Inquiry Requirements ({data.bulkOrders.requirements.length})
                </label>
                <button
                  onClick={() => {
                    setData({
                      ...data,
                      bulkOrders: {
                        ...data.bulkOrders,
                        requirements: [...data.bulkOrders.requirements, "New Requirement"],
                      },
                    });
                  }}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  + Add Requirement
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {data.bulkOrders.requirements.map((req, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-xs font-mono text-cyan-400 w-5">{idx + 1}.</span>
                    <input
                      type="text"
                      value={req}
                      onChange={(e) => {
                        const updated = [...data.bulkOrders.requirements];
                        updated[idx] = e.target.value;
                        setData({
                          ...data,
                          bulkOrders: { ...data.bulkOrders, requirements: updated },
                        });
                      }}
                      className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                    />
                    <button
                      onClick={() => {
                        const updated = data.bulkOrders.requirements.filter((_, i) => i !== idx);
                        setData({
                          ...data,
                          bulkOrders: { ...data.bulkOrders, requirements: updated },
                        });
                      }}
                      className="text-rose-400 hover:text-rose-300 p-1"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 09. ARTWORK FLOW & BENEFITS */}
        {activeTab === "workflow_benefits" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-lg font-black text-white flex items-center gap-2">
                  <Workflow className="h-5 w-5 text-cyan-400" />
                  Artwork Workflow & Institutional Benefits
                </h2>
                <p className="text-xs text-slate-400">
                  8-step artwork preparation process and 5 core institutional benefits with icons.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleSaveSection("artworkProcess", data.artworkProcess)}
                  disabled={saving}
                  className="px-3.5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <Save className="h-3.5 w-3.5" />
                  Save Artwork Steps
                </button>
                <button
                  onClick={() => handleSaveSection("whyUseLanyards", data.whyUseLanyards)}
                  disabled={saving}
                  className="px-3.5 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <Save className="h-3.5 w-3.5" />
                  Save Benefits
                </button>
              </div>
            </div>

            {/* Artwork Steps */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                  8-Step Artwork Preparation Flow
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {data.artworkProcess.steps.map((st, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-2">
                    <span className="text-xs font-bold text-cyan-400">Step #{idx + 1}</span>
                    <input
                      type="text"
                      value={st.title}
                      onChange={(e) => {
                        const updated = [...data.artworkProcess.steps];
                        updated[idx].title = e.target.value;
                        setData({
                          ...data,
                          artworkProcess: { ...data.artworkProcess, steps: updated },
                        });
                      }}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                    />
                    <textarea
                      rows={2}
                      value={st.body}
                      onChange={(e) => {
                        const updated = [...data.artworkProcess.steps];
                        updated[idx].body = e.target.value;
                        setData({
                          ...data,
                          artworkProcess: { ...data.artworkProcess, steps: updated },
                        });
                      }}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Why Use Lanyards Benefits */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-teal-300 uppercase tracking-wider">
                  Why Use Custom Printed Lanyards ({data.whyUseLanyards.items.length})
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {data.whyUseLanyards.items.map((it, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-teal-400">Benefit #{idx + 1}</span>
                      <input
                        type="text"
                        value={it.iconName}
                        onChange={(e) => {
                          const updated = [...data.whyUseLanyards.items];
                          updated[idx].iconName = e.target.value;
                          setData({
                            ...data,
                            whyUseLanyards: { ...data.whyUseLanyards, items: updated },
                          });
                        }}
                        placeholder="Icon name (e.g. ShieldCheck, Eye, Layers)"
                        className="w-40 bg-slate-950 border border-slate-700 rounded-lg px-2 py-1 text-xs text-white focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                    <input
                      type="text"
                      value={it.title}
                      onChange={(e) => {
                        const updated = [...data.whyUseLanyards.items];
                        updated[idx].title = e.target.value;
                        setData({
                          ...data,
                          whyUseLanyards: { ...data.whyUseLanyards, items: updated },
                        });
                      }}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                    />
                    <textarea
                      rows={2}
                      value={it.body}
                      onChange={(e) => {
                        const updated = [...data.whyUseLanyards.items];
                        updated[idx].body = e.target.value;
                        setData({
                          ...data,
                          whyUseLanyards: { ...data.whyUseLanyards, items: updated },
                        });
                      }}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 10. DESIGN & QUALITY QA */}
        {activeTab === "design_quality" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-lg font-black text-white flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-cyan-400" />
                  Design Guidelines & Quality Considerations
                </h2>
                <p className="text-xs text-slate-400">
                  Recommended formula (Logo + Org Name + Accent), 6 design rules, and 7 quality factors.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleSaveSection("designGuidelines", data.designGuidelines)}
                  disabled={saving}
                  className="px-3.5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <Save className="h-3.5 w-3.5" />
                  Save Guidelines
                </button>
                <button
                  onClick={() =>
                    handleSaveSection("qualityConsiderations", data.qualityConsiderations)
                  }
                  disabled={saving}
                  className="px-3.5 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <Save className="h-3.5 w-3.5" />
                  Save Quality Factors
                </button>
              </div>
            </div>

            {/* Design Guidelines */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
              <h3 className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                Section: Design Guidelines for 20 mm Lanyards
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Recommended Formula Box</label>
                  <input
                    type="text"
                    value={data.designGuidelines.recommendedFormula}
                    onChange={(e) =>
                      setData({
                        ...data,
                        designGuidelines: {
                          ...data.designGuidelines,
                          recommendedFormula: e.target.value,
                        },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Guidelines Heading</label>
                  <input
                    type="text"
                    value={data.designGuidelines.guidelinesHeading}
                    onChange={(e) =>
                      setData({
                        ...data,
                        designGuidelines: {
                          ...data.designGuidelines,
                          guidelinesHeading: e.target.value,
                        },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Guidelines points */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-300">Guidelines Points</label>
                {data.designGuidelines.guidelines.map((gl, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-xs font-mono text-cyan-400 w-5">{idx + 1}.</span>
                    <input
                      type="text"
                      value={gl}
                      onChange={(e) => {
                        const updated = [...data.designGuidelines.guidelines];
                        updated[idx] = e.target.value;
                        setData({
                          ...data,
                          designGuidelines: { ...data.designGuidelines, guidelines: updated },
                        });
                      }}
                      className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                    />
                    <button
                      onClick={() => {
                        const updated = data.designGuidelines.guidelines.filter((_, i) => i !== idx);
                        setData({
                          ...data,
                          designGuidelines: { ...data.designGuidelines, guidelines: updated },
                        });
                      }}
                      className="text-rose-400 hover:text-rose-300 p-1"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality Considerations */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
              <h3 className="text-xs font-bold text-teal-300 uppercase tracking-wider">
                Section: Quality Considerations for Custom Lanyards
              </h3>
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-300">Quality Factors</label>
                {data.qualityConsiderations.factors.map((fc, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-xs font-mono text-teal-400 w-5">{idx + 1}.</span>
                    <input
                      type="text"
                      value={fc}
                      onChange={(e) => {
                        const updated = [...data.qualityConsiderations.factors];
                        updated[idx] = e.target.value;
                        setData({
                          ...data,
                          qualityConsiderations: { ...data.qualityConsiderations, factors: updated },
                        });
                      }}
                      className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                    />
                    <button
                      onClick={() => {
                        const updated = data.qualityConsiderations.factors.filter((_, i) => i !== idx);
                        setData({
                          ...data,
                          qualityConsiderations: { ...data.qualityConsiderations, factors: updated },
                        });
                      }}
                      className="text-rose-400 hover:text-rose-300 p-1"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 11. ULTRASONIC & CONFIGS */}
        {activeTab === "ultrasonic_config" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-lg font-black text-white flex items-center gap-2">
                  <Boxes className="h-5 w-5 text-cyan-400" />
                  Ultrasonic Sealing & Configuration Tiers
                </h2>
                <p className="text-xs text-slate-400">
                  Ultrasonic sealing technology image and description, plus 3 complete configuration tiers (Standard, Executive, Premium).
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleSaveSection("ultrasonicSealing", data.ultrasonicSealing)}
                  disabled={saving}
                  className="px-3.5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <Save className="h-3.5 w-3.5" />
                  Save Ultrasonic
                </button>
                <button
                  onClick={() =>
                    handleSaveSection("completeConfigurations", data.completeConfigurations)
                  }
                  disabled={saving}
                  className="px-3.5 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <Save className="h-3.5 w-3.5" />
                  Save Configurations
                </button>
              </div>
            </div>

            {/* Ultrasonic Sealing */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
              <h3 className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                Section: Ultrasonic Sealing for Custom Lanyards
              </h3>
              {renderImageUploadField(
                "Ultrasonic Sealed Attachment Specimen Image",
                data.ultrasonicSealing.image,
                (url) =>
                  setData({
                    ...data,
                    ultrasonicSealing: { ...data.ultrasonicSealing, image: url },
                  }),
                "ultrasonic-img"
              )}
              <div className="space-y-2">
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">Paragraph 1</label>
                  <textarea
                    rows={2}
                    value={data.ultrasonicSealing.paragraph1}
                    onChange={(e) =>
                      setData({
                        ...data,
                        ultrasonicSealing: { ...data.ultrasonicSealing, paragraph1: e.target.value },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">Paragraph 2</label>
                  <textarea
                    rows={2}
                    value={data.ultrasonicSealing.paragraph2}
                    onChange={(e) =>
                      setData({
                        ...data,
                        ultrasonicSealing: { ...data.ultrasonicSealing, paragraph2: e.target.value },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">Paragraph 3</label>
                  <textarea
                    rows={2}
                    value={data.ultrasonicSealing.paragraph3}
                    onChange={(e) =>
                      setData({
                        ...data,
                        ultrasonicSealing: { ...data.ultrasonicSealing, paragraph3: e.target.value },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Complete Configuration Tiers */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-teal-300 uppercase tracking-wider">
                  Complete Configuration Tiers ({data.completeConfigurations.tiers.length})
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {data.completeConfigurations.tiers.map((tr, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-2">
                    <span className="text-xs font-bold text-teal-400">Tier #{idx + 1}</span>
                    <input
                      type="text"
                      value={tr.title}
                      onChange={(e) => {
                        const updated = [...data.completeConfigurations.tiers];
                        updated[idx].title = e.target.value;
                        setData({
                          ...data,
                          completeConfigurations: {
                            ...data.completeConfigurations,
                            tiers: updated,
                          },
                        });
                      }}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2 py-1 text-xs text-white focus:border-cyan-400 focus:outline-none font-bold"
                    />
                    <input
                      type="text"
                      value={tr.badge}
                      onChange={(e) => {
                        const updated = [...data.completeConfigurations.tiers];
                        updated[idx].badge = e.target.value;
                        setData({
                          ...data,
                          completeConfigurations: {
                            ...data.completeConfigurations,
                            tiers: updated,
                          },
                        });
                      }}
                      placeholder="Badge pill"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2 py-1 text-xs text-white focus:border-cyan-400 focus:outline-none"
                    />
                    <textarea
                      rows={3}
                      value={tr.desc}
                      onChange={(e) => {
                        const updated = [...data.completeConfigurations.tiers];
                        updated[idx].desc = e.target.value;
                        setData({
                          ...data,
                          completeConfigurations: {
                            ...data.completeConfigurations,
                            tiers: updated,
                          },
                        });
                      }}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2 py-1 text-xs text-white focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 12. ORDER, ₹15 CARD & FAQ */}
        {activeTab === "ordering_pricing_faq" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-lg font-black text-white flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                  How to Order, ₹15/piece Card & FAQs
                </h2>
                <p className="text-xs text-slate-400">
                  8 ordering steps, standard ₹15 price specimen card, and 11 accordion Q&A pairs.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleSaveSection("howToOrder", data.howToOrder)}
                  disabled={saving}
                  className="px-3.5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <Save className="h-3.5 w-3.5" />
                  Save Order Steps
                </button>
                <button
                  onClick={() => handleSaveSection("pricing", data.pricing)}
                  disabled={saving}
                  className="px-3.5 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <Save className="h-3.5 w-3.5" />
                  Save Pricing Card
                </button>
                <button
                  onClick={() => handleSaveSection("faq", data.faq)}
                  disabled={saving}
                  className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <Save className="h-3.5 w-3.5" />
                  Save FAQs
                </button>
              </div>
            </div>

            {/* Pricing specimen card */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
              <h3 className="text-xs font-bold text-teal-300 uppercase tracking-wider">
                Standard ₹15/piece Product Card
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Product Badge</label>
                  <input
                    type="text"
                    value={data.pricing.standardProductBadge}
                    onChange={(e) =>
                      setData({
                        ...data,
                        pricing: { ...data.pricing, standardProductBadge: e.target.value },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Product Name</label>
                  <input
                    type="text"
                    value={data.pricing.standardProductName}
                    onChange={(e) =>
                      setData({
                        ...data,
                        pricing: { ...data.pricing, standardProductName: e.target.value },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Price Value</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={data.pricing.price}
                      onChange={(e) =>
                        setData({
                          ...data,
                          pricing: { ...data.pricing, price: e.target.value },
                        })
                      }
                      className="w-24 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white font-bold focus:border-cyan-400 focus:outline-none"
                    />
                    <input
                      type="text"
                      value={data.pricing.unit}
                      onChange={(e) =>
                        setData({
                          ...data,
                          pricing: { ...data.pricing, unit: e.target.value },
                        })
                      }
                      className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="md:col-span-3">
                  <label className="block text-xs font-bold text-slate-300 mb-1">Product Subtitle Note</label>
                  <input
                    type="text"
                    value={data.pricing.standardProductNote}
                    onChange={(e) =>
                      setData({
                        ...data,
                        pricing: { ...data.pricing, standardProductNote: e.target.value },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-indigo-300 uppercase tracking-wider">
                  Frequently Asked Questions ({data.faq.faqs.length})
                </h3>
                <button
                  onClick={() => {
                    const newFaq: LanyardFaqItem = {
                      q: "New Question Title?",
                      a: "Clear and authoritative response answering institutional inquiries.",
                    };
                    setData({
                      ...data,
                      faq: { ...data.faq, faqs: [...data.faq.faqs, newFaq] },
                    });
                  }}
                  className="text-xs font-semibold text-indigo-400 hover:text-indigo-300"
                >
                  + Add FAQ
                </button>
              </div>

              <div className="space-y-3">
                {data.faq.faqs.map((fq, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-indigo-400">Q#{idx + 1}</span>
                      <button
                        onClick={() => {
                          const updated = data.faq.faqs.filter((_, i) => i !== idx);
                          setData({ ...data, faq: { ...data.faq, faqs: updated } });
                        }}
                        className="text-rose-400 hover:text-rose-300 p-1"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <input
                      type="text"
                      value={fq.q}
                      onChange={(e) => {
                        const updated = [...data.faq.faqs];
                        updated[idx].q = e.target.value;
                        setData({ ...data, faq: { ...data.faq, faqs: updated } });
                      }}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white font-semibold focus:border-cyan-400 focus:outline-none"
                    />
                    <textarea
                      rows={2}
                      value={fq.a}
                      onChange={(e) => {
                        const updated = [...data.faq.faqs];
                        updated[idx].a = e.target.value;
                        setData({ ...data, faq: { ...data.faq, faqs: updated } });
                      }}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 13. BANNER, DIRECTORY & SEO */}
        {activeTab === "cta_directory_seo" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-lg font-black text-white flex items-center gap-2">
                  <Globe className="h-5 w-5 text-cyan-400" />
                  Bottom Banner, Regional Directory & SEO
                </h2>
                <p className="text-xs text-slate-400">
                  Closing conversion CTA banner, Assam manufacturing hub directory links, and Google search metadata.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleSaveSection("closingCta", data.closingCta)}
                  disabled={saving}
                  className="px-3.5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <Save className="h-3.5 w-3.5" />
                  Save Banner
                </button>
                <button
                  onClick={() =>
                    handleSaveSection("geographicDirectory", data.geographicDirectory)
                  }
                  disabled={saving}
                  className="px-3.5 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <Save className="h-3.5 w-3.5" />
                  Save Directory
                </button>
                <button
                  onClick={() => handleSaveSection("metadata", data.metadata)}
                  disabled={saving}
                  className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <Save className="h-3.5 w-3.5" />
                  Save SEO
                </button>
              </div>
            </div>

            {/* Closing CTA */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
              <h3 className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                Closing Conversion Banner
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Badge</label>
                  <input
                    type="text"
                    value={data.closingCta.badge}
                    onChange={(e) =>
                      setData({
                        ...data,
                        closingCta: { ...data.closingCta, badge: e.target.value },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Title</label>
                  <input
                    type="text"
                    value={data.closingCta.title}
                    onChange={(e) =>
                      setData({
                        ...data,
                        closingCta: { ...data.closingCta, title: e.target.value },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-slate-300 mb-1">Description</label>
                  <textarea
                    rows={2}
                    value={data.closingCta.description}
                    onChange={(e) =>
                      setData({
                        ...data,
                        closingCta: { ...data.closingCta, description: e.target.value },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Geographic directory */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
              <h3 className="text-xs font-bold text-teal-300 uppercase tracking-wider">
                Assam & NE Hub Directory Links ({data.geographicDirectory.links.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {data.geographicDirectory.links.map((lk, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={lk.topic}
                      onChange={(e) => {
                        const updated = [...data.geographicDirectory.links];
                        updated[idx].topic = e.target.value;
                        setData({
                          ...data,
                          geographicDirectory: {
                            ...data.geographicDirectory,
                            links: updated,
                          },
                        });
                      }}
                      className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-cyan-400 focus:outline-none font-semibold"
                    />
                    <input
                      type="text"
                      value={lk.href}
                      onChange={(e) => {
                        const updated = [...data.geographicDirectory.links];
                        updated[idx].href = e.target.value;
                        setData({
                          ...data,
                          geographicDirectory: {
                            ...data.geographicDirectory,
                            links: updated,
                          },
                        });
                      }}
                      className="w-48 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-400 focus:border-cyan-400 focus:outline-none"
                    />
                    <button
                      onClick={() => {
                        const updated = data.geographicDirectory.links.filter((_, i) => i !== idx);
                        setData({
                          ...data,
                          geographicDirectory: {
                            ...data.geographicDirectory,
                            links: updated,
                          },
                        });
                      }}
                      className="text-rose-400 hover:text-rose-300 p-1"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* SEO Metadata */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
              <h3 className="text-xs font-bold text-indigo-300 uppercase tracking-wider">
                Search Engine Optimization (SEO Metadata)
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Meta Title</label>
                  <input
                    type="text"
                    value={data.metadata.title}
                    onChange={(e) =>
                      setData({
                        ...data,
                        metadata: { ...data.metadata, title: e.target.value },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Meta Description</label>
                  <textarea
                    rows={2}
                    value={data.metadata.description}
                    onChange={(e) =>
                      setData({
                        ...data,
                        metadata: { ...data.metadata, description: e.target.value },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default function AdminCustomPrintedLanyardPrintingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center text-slate-400">
          Loading Custom Lanyard Admin...
        </div>
      }
    >
      <AdminCustomPrintedLanyardPrintingContent />
    </Suspense>
  );
}
