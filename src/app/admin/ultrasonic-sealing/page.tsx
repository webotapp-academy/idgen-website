"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Waves,
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
  Check,
  Globe,
  Workflow,
  UploadCloud,
  Tag,
  RefreshCw,
  GraduationCap,
  Ticket,
  MapPin,
  ClipboardList,
  Sliders,
  Settings2,
  AlertTriangle,
  Eye,
  BadgeCheck,
  DollarSign,
} from "lucide-react";
import type {
  DynamicUltrasonicSealingData,
  DynamicUltrasonicHero,
  DynamicUltrasonicSuitableOrganizations,
  DynamicUltrasonicWhatIs,
  DynamicUltrasonicWhyUse,
  DynamicUltrasonicCompareTable,
  DynamicUltrasonicWearableIntegration,
  DynamicUltrasonicSealingPoints,
  DynamicUltrasonicEventCards,
  DynamicUltrasonicCompleteSets,
  DynamicUltrasonicSchoolsAndCompanies,
  DynamicUltrasonicProcessWorkflow,
  DynamicUltrasonicQualityAspects,
  DynamicUltrasonicPricingLogic,
  DynamicUltrasonicAttachmentOptions,
  DynamicUltrasonicWhyIdgenUses,
  DynamicUltrasonicEligibleOrganizations,
  DynamicUltrasonicFaqs,
  DynamicUltrasonicClosingCta,
  DynamicUltrasonicRegionalDirectory,
  DynamicUltrasonicMeta,
} from "@/lib/dynamic-ultrasonic-sealing-types";
import type { UltrasonicSlide } from "@/components/ultrasonic-sealing/UltrasonicHeroCarousel";

function AdminUltrasonicSealingContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "hero";
  const [data, setData] = useState<DynamicUltrasonicSealingData | null>(null);
  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [savingSection, setSavingSection] = useState<string | null>(null);
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
      const res = await fetch("/api/admin/ultrasonic-sealing");
      const json = await res.json();
      if (json.success && json.data) {
        setData(json.data);
      } else {
        setSaveError("Failed to load Ultrasonic Sealing data");
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
      if (fieldId) setUploadingField(fieldId);
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });
      const json = await res.json();

      if (json.success && json.url) {
        callback(json.url);
        setSaveSuccess("Image uploaded successfully!");
        setTimeout(() => setSaveSuccess(null), 3000);
      } else {
        setSaveError(json.error || "Image upload failed");
        setTimeout(() => setSaveError(null), 4000);
      }
    } catch (err: any) {
      setSaveError(err.message || "Upload network failure");
      setTimeout(() => setSaveError(null), 4000);
    } finally {
      if (fieldId) setUploadingField(null);
    }
  };

  const saveWholePage = async () => {
    if (!data) return;
    try {
      setSaving(true);
      const res = await fetch("/api/admin/ultrasonic-sealing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });
      const json = await res.json();
      if (json.success) {
        setSaveSuccess("Ultrasonic Sealing page saved and published successfully!");
        setTimeout(() => setSaveSuccess(null), 4000);
      } else {
        setSaveError(json.error || "Failed to save page");
        setTimeout(() => setSaveError(null), 4000);
      }
    } catch (err: any) {
      setSaveError(err.message || "Save network error");
      setTimeout(() => setSaveError(null), 4000);
    } finally {
      setSaving(false);
    }
  };

  const saveSection = async (sectionName: keyof DynamicUltrasonicSealingData, sectionData: any) => {
    try {
      setSavingSection(sectionName);
      const res = await fetch("/api/admin/ultrasonic-sealing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          section: sectionName,
          sectionData,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setSaveSuccess(`Section '${sectionName}' saved and published!`);
        setTimeout(() => setSaveSuccess(null), 3500);
      } else {
        setSaveError(json.error || `Failed to save ${sectionName}`);
        setTimeout(() => setSaveError(null), 4000);
      }
    } catch (err: any) {
      setSaveError(err.message || "Network error");
      setTimeout(() => setSaveError(null), 4000);
    } finally {
      setSavingSection(null);
    }
  };

  const handleReset = async () => {
    if (
      !window.confirm(
        "Are you sure you want to reset all Ultrasonic Sealing content to original factory defaults? Any unsaved edits will be replaced."
      )
    ) {
      return;
    }

    try {
      setSaving(true);
      const res = await fetch("/api/admin/ultrasonic-sealing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "reset" }),
      });
      const json = await res.json();
      if (json.success && json.data) {
        setData(json.data);
        setSaveSuccess("Page reset to factory defaults successfully!");
        setTimeout(() => setSaveSuccess(null), 4000);
      } else {
        setSaveError(json.error || "Failed to reset page");
        setTimeout(() => setSaveError(null), 4000);
      }
    } catch (err: any) {
      setSaveError(err.message || "Reset failed");
      setTimeout(() => setSaveError(null), 4000);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
        <RefreshCw className="h-8 w-8 animate-spin text-[#009fe3]" />
        <p className="text-sm font-semibold text-slate-400">Loading Ultrasonic Sealing CMS...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
        <AlertCircle className="h-10 w-10 text-rose-500" />
        <p className="text-slate-300">Failed to load Ultrasonic Sealing data</p>
        <button
          onClick={fetchPageData}
          className="rounded-xl bg-[#009fe3] px-4 py-2 text-sm font-bold text-white hover:bg-[#008bc9]"
        >
          Retry
        </button>
      </div>
    );
  }

  const tabs = [
    { id: "hero", label: "Hero & Slides", icon: Sparkles },
    { id: "organizations", label: "Organizations", icon: Building2 },
    { id: "whatIs", label: "What is Sealing", icon: Waves },
    { id: "whyUse", label: "Benefits & Metal Issues", icon: ShieldCheck },
    { id: "compareTable", label: "Comparison Table", icon: Settings2 },
    { id: "wearableIntegration", label: "Wearable Flows", icon: Layers },
    { id: "sealingPoints", label: "1-Hook vs 2-Hook", icon: Sliders },
    { id: "eventCards", label: "Event Cards", icon: Ticket },
    { id: "completeSets", label: "Complete Sets", icon: Boxes },
    { id: "schoolsAndCompanies", label: "School & Corporate", icon: GraduationCap },
    { id: "processWorkflow", label: "Process Steps", icon: Workflow },
    { id: "qualityAndPricing", label: "QA & Pricing", icon: DollarSign },
    { id: "optionsAndWhy", label: "Attachment Options", icon: ClipboardList },
    { id: "faqsAndHub", label: "FAQs, CTA & Hub", icon: HelpCircle },
    { id: "meta", label: "SEO Meta", icon: Globe },
  ];

  return (
    <div className="mx-auto max-w-7xl pb-20 pt-2 text-slate-100">
      {/* Header Bar */}
      <div className="sticky top-0 z-30 mb-8 flex flex-col gap-4 rounded-3xl border border-slate-800 bg-[#09111e]/90 p-5 shadow-2xl backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#009fe3] to-cyan-400 text-white shadow-lg shadow-[#009fe3]/25">
            <Waves className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-black tracking-tight text-white sm:text-2xl">
                Ultrasonic Sealing CMS
              </h1>
              <span className="rounded-full bg-cyan-950 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-cyan-400 border border-cyan-800/60">
                Live Dynamic
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Customize lanyard acoustic fusion slides, attachment points, wearability flows, and QA
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <Link
            href="/ultrasonic-sealing/"
            target="_blank"
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/80 px-3.5 py-2 text-xs font-bold text-slate-200 hover:border-cyan-400 hover:text-white"
          >
            <span>Live Page</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>

          <button
            onClick={handleReset}
            disabled={saving}
            className="inline-flex items-center gap-1.5 rounded-xl border border-rose-900/60 bg-rose-950/40 px-3.5 py-2 text-xs font-bold text-rose-300 hover:bg-rose-900/60 hover:text-white"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset Defaults</span>
          </button>

          <button
            onClick={saveWholePage}
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#009fe3] to-cyan-500 px-5 py-2 text-xs font-extrabold text-white shadow-lg shadow-[#009fe3]/30 hover:opacity-95 disabled:opacity-50"
          >
            {saving ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
            <span>Save Whole Page</span>
          </button>
        </div>
      </div>

      {/* Notifications */}
      {saveSuccess && (
        <div className="mb-6 flex items-center gap-3 rounded-2xl border border-emerald-500/40 bg-emerald-950/70 p-4 text-sm font-semibold text-emerald-300 shadow-xl">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
          <span>{saveSuccess}</span>
        </div>
      )}
      {saveError && (
        <div className="mb-6 flex items-center gap-3 rounded-2xl border border-rose-500/40 bg-rose-950/70 p-4 text-sm font-semibold text-rose-300 shadow-xl">
          <AlertCircle className="h-5 w-5 shrink-0 text-rose-400" />
          <span>{saveError}</span>
        </div>
      )}

      {/* Tab Navigation */}
      <div className="mb-8 flex flex-wrap gap-2 rounded-2xl border border-slate-800/80 bg-[#09111e] p-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 text-xs font-extrabold transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#009fe3] text-white shadow-md shadow-[#009fe3]/30"
                  : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: HERO & SLIDES */}
      {/* ========================================================================= */}
      {activeTab === "hero" && (
        <div className="space-y-8">
          <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div>
                <h2 className="text-lg font-black text-white">Hero Header & Workflow</h2>
                <p className="text-xs text-slate-400">Headlines, descriptions, and advisory workflow steps</p>
              </div>
              <button
                onClick={() => saveSection("hero", data.hero)}
                disabled={savingSection === "hero"}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#008bc9] disabled:opacity-50"
              >
                {savingSection === "hero" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                <span>Save Hero</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-bold text-slate-300">Top Eyebrow Badge</label>
                <input
                  type="text"
                  value={data.hero.badge}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: { ...data.hero, badge: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white focus:border-[#009fe3] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">Advisory Top Badge</label>
                <input
                  type="text"
                  value={data.hero.advisoryBadge}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: { ...data.hero, advisoryBadge: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white focus:border-[#009fe3] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">H1 Heading (Primary)</label>
                <input
                  type="text"
                  value={data.hero.h1}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: { ...data.hero, h1: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white focus:border-[#009fe3] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">H1 Heading (Gradient Highlight)</label>
                <input
                  type="text"
                  value={data.hero.h1Gradient}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: { ...data.hero, h1Gradient: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white focus:border-[#009fe3] focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-300">Description Paragraph</label>
                <textarea
                  rows={3}
                  value={data.hero.description}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: { ...data.hero, description: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white focus:border-[#009fe3] focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-300">Advisory Title</label>
                <input
                  type="text"
                  value={data.hero.advisoryTitle}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: { ...data.hero, advisoryTitle: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white focus:border-[#009fe3] focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-300">
                  Advisory Workflow Steps (comma-separated)
                </label>
                <input
                  type="text"
                  value={data.hero.advisorySteps.join(", ")}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: {
                        ...data.hero,
                        advisorySteps: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white focus:border-[#009fe3] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">Primary CTA Label</label>
                <input
                  type="text"
                  value={data.hero.primaryCta.label}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: {
                        ...data.hero,
                        primaryCta: { ...data.hero.primaryCta, label: e.target.value },
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white focus:border-[#009fe3] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">Primary CTA Link</label>
                <input
                  type="text"
                  value={data.hero.primaryCta.href}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: {
                        ...data.hero,
                        primaryCta: { ...data.hero.primaryCta, href: e.target.value },
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white focus:border-[#009fe3] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">Secondary CTA Label</label>
                <input
                  type="text"
                  value={data.hero.secondaryCta.label}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: {
                        ...data.hero,
                        secondaryCta: { ...data.hero.secondaryCta, label: e.target.value },
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white focus:border-[#009fe3] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">Secondary CTA Link</label>
                <input
                  type="text"
                  value={data.hero.secondaryCta.href}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: {
                        ...data.hero,
                        secondaryCta: { ...data.hero.secondaryCta, href: e.target.value },
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white focus:border-[#009fe3] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Hero Carousel Slides Editor */}
          <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div>
                <h2 className="text-lg font-black text-white">
                  Ultrasonic Fusion Slides ({data.hero.slides.length})
                </h2>
                <p className="text-xs text-slate-400">
                  Upload images, customize badges, specifications, and hub tags
                </p>
              </div>
              <button
                onClick={() => {
                  const newSlide: UltrasonicSlide = {
                    id: `ultrasonic-slide-${Date.now()}`,
                    imageSrc: "/images/idgen-ultrasonic-lanyard-sealing.jpg",
                    alt: "Custom Ultrasonic Sealing Specimen",
                    title: "New Ultrasonic Lanyard Fusion",
                    category: "Acoustic Seal",
                    topBadge: "Acoustic Fusion Weld",
                    specPill: "Zero Metal Staples",
                    bottomSpec: "Acoustic Weld • High Tensile Bond",
                    hubTag: "GUWAHATI FACTORY",
                  };
                  setData({
                    ...data,
                    hero: {
                      ...data.hero,
                      slides: [...data.hero.slides, newSlide],
                    },
                  });
                }}
                className="inline-flex items-center gap-1.5 rounded-xl border border-[#009fe3] bg-[#009fe3]/10 px-3.5 py-1.5 text-xs font-bold text-cyan-300 hover:bg-[#009fe3] hover:text-white"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add Slide</span>
              </button>
            </div>

            <div className="space-y-6">
              {data.hero.slides.map((slide, idx) => (
                <div
                  key={slide.id || idx}
                  className="rounded-2xl border border-slate-800/90 bg-slate-900/80 p-5 shadow-lg space-y-4"
                >
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-cyan-400">
                      <Waves className="h-4 w-4 text-[#009fe3]" />
                      <span>Slide #{idx + 1} &mdash; {slide.title}</span>
                    </span>
                    {data.hero.slides.length > 1 && (
                      <button
                        onClick={() => {
                          const updated = data.hero.slides.filter((_, i) => i !== idx);
                          setData({
                            ...data,
                            hero: { ...data.hero, slides: updated },
                          });
                        }}
                        className="rounded-lg p-1.5 text-slate-500 hover:bg-rose-950/60 hover:text-rose-400"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>

                  <div className="grid gap-4 sm:grid-cols-12">
                    {/* Image Preview & Upload */}
                    <div className="sm:col-span-4 flex flex-col items-center gap-3">
                      <div className="relative aspect-square w-full max-w-[200px] overflow-hidden rounded-2xl border-2 border-slate-700 bg-black/40">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={slide.imageSrc}
                          alt={slide.alt}
                          className="h-full w-full object-cover"
                        />
                        {uploadingField === `slide-${idx}` && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-xs">
                            <RefreshCw className="h-6 w-6 animate-spin text-[#009fe3]" />
                          </div>
                        )}
                      </div>

                      <label className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-cyan-500/40 bg-cyan-950/40 px-3 py-1.5 text-[11px] font-bold text-cyan-300 hover:bg-cyan-900/60">
                        <UploadCloud className="h-3.5 w-3.5" />
                        <span>Upload Slide Image</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) =>
                            handleFileUpload(
                              e,
                              (url) => {
                                const updated = [...data.hero.slides];
                                updated[idx].imageSrc = url;
                                setData({
                                  ...data,
                                  hero: { ...data.hero, slides: updated },
                                });
                              },
                              `slide-${idx}`
                            )
                          }
                        />
                      </label>
                      <input
                        type="text"
                        placeholder="Image URL"
                        value={slide.imageSrc}
                        onChange={(e) => {
                          const updated = [...data.hero.slides];
                          updated[idx].imageSrc = e.target.value;
                          setData({
                            ...data,
                            hero: { ...data.hero, slides: updated },
                          });
                        }}
                        className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-[11px] text-slate-300"
                      />
                    </div>

                    {/* Metadata Fields */}
                    <div className="sm:col-span-8 grid gap-3 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <label className="text-[11px] font-bold text-slate-400">Slide Title</label>
                        <input
                          type="text"
                          value={slide.title}
                          onChange={(e) => {
                            const updated = [...data.hero.slides];
                            updated[idx].title = e.target.value;
                            setData({ ...data, hero: { ...data.hero, slides: updated } });
                          }}
                          className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-white focus:border-[#009fe3]"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-slate-400">Top Badge</label>
                        <input
                          type="text"
                          value={slide.topBadge}
                          onChange={(e) => {
                            const updated = [...data.hero.slides];
                            updated[idx].topBadge = e.target.value;
                            setData({ ...data, hero: { ...data.hero, slides: updated } });
                          }}
                          className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-white focus:border-[#009fe3]"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-slate-400">Spec Pill Badge</label>
                        <input
                          type="text"
                          value={slide.specPill}
                          onChange={(e) => {
                            const updated = [...data.hero.slides];
                            updated[idx].specPill = e.target.value;
                            setData({ ...data, hero: { ...data.hero, slides: updated } });
                          }}
                          className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-white focus:border-[#009fe3]"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="text-[11px] font-bold text-slate-400">Bottom Spec Bar</label>
                        <input
                          type="text"
                          value={slide.bottomSpec}
                          onChange={(e) => {
                            const updated = [...data.hero.slides];
                            updated[idx].bottomSpec = e.target.value;
                            setData({ ...data, hero: { ...data.hero, slides: updated } });
                          }}
                          className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-white focus:border-[#009fe3]"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-slate-400">Hub / Status Tag</label>
                        <input
                          type="text"
                          value={slide.hubTag}
                          onChange={(e) => {
                            const updated = [...data.hero.slides];
                            updated[idx].hubTag = e.target.value;
                            setData({ ...data, hero: { ...data.hero, slides: updated } });
                          }}
                          className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-white focus:border-[#009fe3]"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-slate-400">Alt Description</label>
                        <input
                          type="text"
                          value={slide.alt}
                          onChange={(e) => {
                            const updated = [...data.hero.slides];
                            updated[idx].alt = e.target.value;
                            setData({ ...data, hero: { ...data.hero, slides: updated } });
                          }}
                          className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-white focus:border-[#009fe3]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: ORGANIZATIONS */}
      {/* ========================================================================= */}
      {activeTab === "organizations" && (
        <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">Target Organizations</h2>
              <p className="text-xs text-slate-400">Organizations benefiting from ultrasonic sealing</p>
            </div>
            <button
              onClick={() => saveSection("suitableOrganizations", data.suitableOrganizations)}
              disabled={savingSection === "suitableOrganizations"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#008bc9] disabled:opacity-50"
            >
              {savingSection === "suitableOrganizations" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save Organizations</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-bold text-slate-300">Eyebrow</label>
              <input
                type="text"
                value={data.suitableOrganizations.eyebrow}
                onChange={(e) =>
                  setData({
                    ...data,
                    suitableOrganizations: {
                      ...data.suitableOrganizations,
                      eyebrow: e.target.value,
                    },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300">Section Title</label>
              <input
                type="text"
                value={data.suitableOrganizations.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    suitableOrganizations: {
                      ...data.suitableOrganizations,
                      title: e.target.value,
                    },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div className="sm:col-span-2">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-300">
                  Target Organizations ({data.suitableOrganizations.items.length})
                </label>
                <button
                  onClick={() =>
                    setData({
                      ...data,
                      suitableOrganizations: {
                        ...data.suitableOrganizations,
                        items: [...data.suitableOrganizations.items, "New Organization Program"],
                      },
                    })
                  }
                  className="inline-flex items-center gap-1 rounded-lg border border-cyan-500/40 px-2 py-1 text-[11px] font-bold text-cyan-300 hover:bg-cyan-900/40"
                >
                  <Plus className="h-3 w-3" />
                  <span>Add Item</span>
                </button>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                {data.suitableOrganizations.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => {
                        const updated = [...data.suitableOrganizations.items];
                        updated[idx] = e.target.value;
                        setData({
                          ...data,
                          suitableOrganizations: {
                            ...data.suitableOrganizations,
                            items: updated,
                          },
                        });
                      }}
                      className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-white"
                    />
                    <button
                      onClick={() => {
                        const updated = data.suitableOrganizations.items.filter((_, i) => i !== idx);
                        setData({
                          ...data,
                          suitableOrganizations: {
                            ...data.suitableOrganizations,
                            items: updated,
                          },
                        });
                      }}
                      className="p-1 text-slate-500 hover:text-rose-400"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: WHAT IS SEALING */}
      {/* ========================================================================= */}
      {activeTab === "whatIs" && (
        <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">What Is Ultrasonic Sealing?</h2>
              <p className="text-xs text-slate-400">Technology definition and dependency factors</p>
            </div>
            <button
              onClick={() => saveSection("whatIsSealing", data.whatIsSealing)}
              disabled={savingSection === "whatIsSealing"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#008bc9] disabled:opacity-50"
            >
              {savingSection === "whatIsSealing" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save Section</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-bold text-slate-300">Eyebrow</label>
              <input
                type="text"
                value={data.whatIsSealing.eyebrow}
                onChange={(e) =>
                  setData({
                    ...data,
                    whatIsSealing: { ...data.whatIsSealing, eyebrow: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300">Title</label>
              <input
                type="text"
                value={data.whatIsSealing.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    whatIsSealing: { ...data.whatIsSealing, title: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">Description</label>
              <textarea
                rows={3}
                value={data.whatIsSealing.description}
                onChange={(e) =>
                  setData({
                    ...data,
                    whatIsSealing: { ...data.whatIsSealing, description: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">Factors Title</label>
              <input
                type="text"
                value={data.whatIsSealing.factorsTitle}
                onChange={(e) =>
                  setData({
                    ...data,
                    whatIsSealing: { ...data.whatIsSealing, factorsTitle: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">
                Method Dependency Factors (comma-separated)
              </label>
              <textarea
                rows={2}
                value={data.whatIsSealing.factors.join(", ")}
                onChange={(e) =>
                  setData({
                    ...data,
                    whatIsSealing: {
                      ...data.whatIsSealing,
                      factors: e.target.value
                        .split(",")
                        .map((s) => s.trim())
                        .filter(Boolean),
                    },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">Footnote Text</label>
              <input
                type="text"
                value={data.whatIsSealing.footnote}
                onChange={(e) =>
                  setData({
                    ...data,
                    whatIsSealing: { ...data.whatIsSealing, footnote: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: BENEFITS & HARDWARE ISSUES */}
      {/* ========================================================================= */}
      {activeTab === "whyUse" && (
        <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">Why Use Ultrasonic Sealing?</h2>
              <p className="text-xs text-slate-400">Metal hardware issues and core acoustic fusion advantages</p>
            </div>
            <button
              onClick={() => saveSection("whyUseSealing", data.whyUseSealing)}
              disabled={savingSection === "whyUseSealing"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#008bc9] disabled:opacity-50"
            >
              {savingSection === "whyUseSealing" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save Benefits</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-bold text-slate-300">Eyebrow</label>
              <input
                type="text"
                value={data.whyUseSealing.eyebrow}
                onChange={(e) =>
                  setData({
                    ...data,
                    whyUseSealing: { ...data.whyUseSealing, eyebrow: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300">Title</label>
              <input
                type="text"
                value={data.whyUseSealing.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    whyUseSealing: { ...data.whyUseSealing, title: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">Lede</label>
              <textarea
                rows={2}
                value={data.whyUseSealing.lede}
                onChange={(e) =>
                  setData({
                    ...data,
                    whyUseSealing: { ...data.whyUseSealing, lede: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">
                Traditional Hardware Pain Points (comma-separated)
              </label>
              <textarea
                rows={2}
                value={data.whyUseSealing.hardwareIssues.join(", ")}
                onChange={(e) =>
                  setData({
                    ...data,
                    whyUseSealing: {
                      ...data.whyUseSealing,
                      hardwareIssues: e.target.value
                        .split(",")
                        .map((s) => s.trim())
                        .filter(Boolean),
                    },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-rose-300"
              />
            </div>
          </div>

          {/* Advantages Cards */}
          <div className="space-y-3">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-300">
              Core Advantages
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {data.whyUseSealing.advantages.map((adv, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 space-y-2"
                >
                  <div>
                    <label className="text-[10px] font-bold text-slate-400">Icon Name</label>
                    <input
                      type="text"
                      value={adv.iconName}
                      onChange={(e) => {
                        const updated = [...data.whyUseSealing.advantages];
                        updated[idx].iconName = e.target.value;
                        setData({
                          ...data,
                          whyUseSealing: { ...data.whyUseSealing, advantages: updated },
                        });
                      }}
                      className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-cyan-300"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400">Title</label>
                    <input
                      type="text"
                      value={adv.title}
                      onChange={(e) => {
                        const updated = [...data.whyUseSealing.advantages];
                        updated[idx].title = e.target.value;
                        setData({
                          ...data,
                          whyUseSealing: { ...data.whyUseSealing, advantages: updated },
                        });
                      }}
                      className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400">Body</label>
                    <textarea
                      rows={2}
                      value={adv.body}
                      onChange={(e) => {
                        const updated = [...data.whyUseSealing.advantages];
                        updated[idx].body = e.target.value;
                        setData({
                          ...data,
                          whyUseSealing: { ...data.whyUseSealing, advantages: updated },
                        });
                      }}
                      className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-slate-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Warning Box */}
          <div className="rounded-2xl border border-amber-900/50 bg-amber-950/20 p-4 space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Disclaimer Box
            </h3>
            <div className="grid gap-3 sm:grid-cols-3">
              <div>
                <label className="text-[10px] font-bold text-amber-200">Highlight Prefix</label>
                <input
                  type="text"
                  value={data.whyUseSealing.warningBox.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      whyUseSealing: {
                        ...data.whyUseSealing,
                        warningBox: { ...data.whyUseSealing.warningBox, title: e.target.value },
                      },
                    })
                  }
                  className="mt-1 w-full rounded-lg border border-amber-800/80 bg-slate-950 px-2.5 py-1 text-xs text-white"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-[10px] font-bold text-amber-200">Warning Text</label>
                <textarea
                  rows={2}
                  value={data.whyUseSealing.warningBox.text}
                  onChange={(e) =>
                    setData({
                      ...data,
                      whyUseSealing: {
                        ...data.whyUseSealing,
                        warningBox: { ...data.whyUseSealing.warningBox, text: e.target.value },
                      },
                    })
                  }
                  className="mt-1 w-full rounded-lg border border-amber-800/80 bg-slate-950 px-2.5 py-1 text-xs text-white"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 5: COMPARISON TABLE */}
      {/* ========================================================================= */}
      {activeTab === "compareTable" && (
        <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">Comparison Table</h2>
              <p className="text-xs text-slate-400">
                Conventional exposed metal attachment vs Ultrasonic sealing
              </p>
            </div>
            <button
              onClick={() => saveSection("compareTable", data.compareTable)}
              disabled={savingSection === "compareTable"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#008bc9] disabled:opacity-50"
            >
              {savingSection === "compareTable" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save Table</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-bold text-slate-300">Eyebrow</label>
              <input
                type="text"
                value={data.compareTable.eyebrow}
                onChange={(e) =>
                  setData({
                    ...data,
                    compareTable: { ...data.compareTable, eyebrow: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300">Title</label>
              <input
                type="text"
                value={data.compareTable.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    compareTable: { ...data.compareTable, title: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">Conclusion Text</label>
              <textarea
                rows={2}
                value={data.compareTable.conclusionText}
                onChange={(e) =>
                  setData({
                    ...data,
                    compareTable: { ...data.compareTable, conclusionText: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-300">
              Table Rows ({data.compareTable.rows.length})
            </h3>
            {data.compareTable.rows.map((row, rIdx) => (
              <div
                key={rIdx}
                className="grid gap-2 sm:grid-cols-12 rounded-xl border border-slate-800/80 bg-slate-950 p-3 items-center"
              >
                <div className="sm:col-span-5">
                  <label className="text-[10px] text-slate-500 font-bold">Feature Name</label>
                  <input
                    type="text"
                    value={row[0] || ""}
                    onChange={(e) => {
                      const updated = [...data.compareTable.rows];
                      updated[rIdx][0] = e.target.value;
                      setData({ ...data, compareTable: { ...data.compareTable, rows: updated } });
                    }}
                    className="mt-0.5 w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-white font-bold"
                  />
                </div>
                <div className="sm:col-span-3">
                  <label className="text-[10px] text-slate-500 font-bold">Conventional Metal</label>
                  <input
                    type="text"
                    value={row[1] || ""}
                    onChange={(e) => {
                      const updated = [...data.compareTable.rows];
                      updated[rIdx][1] = e.target.value;
                      setData({ ...data, compareTable: { ...data.compareTable, rows: updated } });
                    }}
                    className="mt-0.5 w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-slate-300"
                  />
                </div>
                <div className="sm:col-span-4">
                  <label className="text-[10px] text-slate-500 font-bold">Ultrasonic Sealing</label>
                  <input
                    type="text"
                    value={row[2] || ""}
                    onChange={(e) => {
                      const updated = [...data.compareTable.rows];
                      updated[rIdx][2] = e.target.value;
                      setData({ ...data, compareTable: { ...data.compareTable, rows: updated } });
                    }}
                    className="mt-0.5 w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-cyan-300 font-bold"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 6: WEARABLE INTEGRATION */}
      {/* ========================================================================= */}
      {activeTab === "wearableIntegration" && (
        <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">Wearable Integration</h2>
              <p className="text-xs text-slate-400">Typical Wearable System vs Ultrasonic Fused System</p>
            </div>
            <button
              onClick={() => saveSection("wearableIntegration", data.wearableIntegration)}
              disabled={savingSection === "wearableIntegration"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#008bc9] disabled:opacity-50"
            >
              {savingSection === "wearableIntegration" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save Flows</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-bold text-slate-300">Eyebrow</label>
              <input
                type="text"
                value={data.wearableIntegration.eyebrow}
                onChange={(e) =>
                  setData({
                    ...data,
                    wearableIntegration: { ...data.wearableIntegration, eyebrow: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300">Title</label>
              <input
                type="text"
                value={data.wearableIntegration.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    wearableIntegration: { ...data.wearableIntegration, title: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">Description</label>
              <textarea
                rows={2}
                value={data.wearableIntegration.description}
                onChange={(e) =>
                  setData({
                    ...data,
                    wearableIntegration: { ...data.wearableIntegration, description: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            {/* Typical Flow */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 space-y-2">
              <label className="text-xs font-bold text-slate-300">Typical Flow Label</label>
              <input
                type="text"
                value={data.wearableIntegration.typicalFlow.label}
                onChange={(e) =>
                  setData({
                    ...data,
                    wearableIntegration: {
                      ...data.wearableIntegration,
                      typicalFlow: { ...data.wearableIntegration.typicalFlow, label: e.target.value },
                    },
                  })
                }
                className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-white"
              />
              <label className="text-xs font-bold text-slate-300">Steps (comma-separated)</label>
              <input
                type="text"
                value={data.wearableIntegration.typicalFlow.steps.join(", ")}
                onChange={(e) =>
                  setData({
                    ...data,
                    wearableIntegration: {
                      ...data.wearableIntegration,
                      typicalFlow: {
                        ...data.wearableIntegration.typicalFlow,
                        steps: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                      },
                    },
                  })
                }
                className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-slate-300"
              />
            </div>

            {/* Sealed Flow */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 space-y-2">
              <label className="text-xs font-bold text-slate-300">Sealed Flow Label</label>
              <input
                type="text"
                value={data.wearableIntegration.sealedFlow.label}
                onChange={(e) =>
                  setData({
                    ...data,
                    wearableIntegration: {
                      ...data.wearableIntegration,
                      sealedFlow: { ...data.wearableIntegration.sealedFlow, label: e.target.value },
                    },
                  })
                }
                className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-white"
              />
              <label className="text-xs font-bold text-slate-300">Steps (comma-separated)</label>
              <input
                type="text"
                value={data.wearableIntegration.sealedFlow.steps.join(", ")}
                onChange={(e) =>
                  setData({
                    ...data,
                    wearableIntegration: {
                      ...data.wearableIntegration,
                      sealedFlow: {
                        ...data.wearableIntegration.sealedFlow,
                        steps: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                      },
                    },
                  })
                }
                className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-cyan-300 font-bold"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">Footnote Text</label>
              <input
                type="text"
                value={data.wearableIntegration.footnote}
                onChange={(e) =>
                  setData({
                    ...data,
                    wearableIntegration: { ...data.wearableIntegration, footnote: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 7: 1-HOOK VS 2-HOOK SEALING */}
      {/* ========================================================================= */}
      {activeTab === "sealingPoints" && (
        <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">One Hook vs Two Hook Sealing</h2>
              <p className="text-xs text-slate-400">Single vs dual acoustic fusion points</p>
            </div>
            <button
              onClick={() => saveSection("sealingPoints", data.sealingPoints)}
              disabled={savingSection === "sealingPoints"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#008bc9] disabled:opacity-50"
            >
              {savingSection === "sealingPoints" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save Sealing Points</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-bold text-slate-300">Eyebrow</label>
              <input
                type="text"
                value={data.sealingPoints.eyebrow}
                onChange={(e) =>
                  setData({
                    ...data,
                    sealingPoints: { ...data.sealingPoints, eyebrow: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300">Title</label>
              <input
                type="text"
                value={data.sealingPoints.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    sealingPoints: { ...data.sealingPoints, title: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">Lede</label>
              <input
                type="text"
                value={data.sealingPoints.lede}
                onChange={(e) =>
                  setData({
                    ...data,
                    sealingPoints: { ...data.sealingPoints, lede: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            {/* One Hook Block */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 space-y-2">
              <label className="text-xs font-bold text-cyan-300">1-Hook Badge</label>
              <input
                type="text"
                value={data.sealingPoints.oneHook.badge}
                onChange={(e) =>
                  setData({
                    ...data,
                    sealingPoints: {
                      ...data.sealingPoints,
                      oneHook: { ...data.sealingPoints.oneHook, badge: e.target.value },
                    },
                  })
                }
                className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-white"
              />
              <label className="text-xs font-bold text-cyan-300">1-Hook Title</label>
              <input
                type="text"
                value={data.sealingPoints.oneHook.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    sealingPoints: {
                      ...data.sealingPoints,
                      oneHook: { ...data.sealingPoints.oneHook, title: e.target.value },
                    },
                  })
                }
                className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-white font-bold"
              />
              <label className="text-xs font-bold text-slate-400">Description</label>
              <textarea
                rows={2}
                value={data.sealingPoints.oneHook.desc}
                onChange={(e) =>
                  setData({
                    ...data,
                    sealingPoints: {
                      ...data.sealingPoints,
                      oneHook: { ...data.sealingPoints.oneHook, desc: e.target.value },
                    },
                  })
                }
                className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-slate-300"
              />
              <label className="text-xs font-bold text-slate-400">Steps (comma-separated)</label>
              <input
                type="text"
                value={data.sealingPoints.oneHook.steps.join(", ")}
                onChange={(e) =>
                  setData({
                    ...data,
                    sealingPoints: {
                      ...data.sealingPoints,
                      oneHook: {
                        ...data.sealingPoints.oneHook,
                        steps: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                      },
                    },
                  })
                }
                className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-slate-300"
              />
            </div>

            {/* Two Hook Block */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 space-y-2">
              <label className="text-xs font-bold text-cyan-300">2-Hook Badge</label>
              <input
                type="text"
                value={data.sealingPoints.twoHook.badge}
                onChange={(e) =>
                  setData({
                    ...data,
                    sealingPoints: {
                      ...data.sealingPoints,
                      twoHook: { ...data.sealingPoints.twoHook, badge: e.target.value },
                    },
                  })
                }
                className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-white"
              />
              <label className="text-xs font-bold text-cyan-300">2-Hook Title</label>
              <input
                type="text"
                value={data.sealingPoints.twoHook.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    sealingPoints: {
                      ...data.sealingPoints,
                      twoHook: { ...data.sealingPoints.twoHook, title: e.target.value },
                    },
                  })
                }
                className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-white font-bold"
              />
              <label className="text-xs font-bold text-slate-400">Description</label>
              <textarea
                rows={2}
                value={data.sealingPoints.twoHook.desc}
                onChange={(e) =>
                  setData({
                    ...data,
                    sealingPoints: {
                      ...data.sealingPoints,
                      twoHook: { ...data.sealingPoints.twoHook, desc: e.target.value },
                    },
                  })
                }
                className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-slate-300"
              />
              <label className="text-xs font-bold text-slate-400">Flow 1 (comma-separated)</label>
              <input
                type="text"
                value={data.sealingPoints.twoHook.flow1.join(", ")}
                onChange={(e) =>
                  setData({
                    ...data,
                    sealingPoints: {
                      ...data.sealingPoints,
                      twoHook: {
                        ...data.sealingPoints.twoHook,
                        flow1: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                      },
                    },
                  })
                }
                className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-slate-300"
              />
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 8: EVENT CARDS */}
      {/* ========================================================================= */}
      {activeTab === "eventCards" && (
        <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">Ultrasonic Sealing for Event Cards</h2>
              <p className="text-xs text-slate-400">Accreditation badge attachment specifications</p>
            </div>
            <button
              onClick={() => saveSection("eventCards", data.eventCards)}
              disabled={savingSection === "eventCards"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#008bc9] disabled:opacity-50"
            >
              {savingSection === "eventCards" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save Event Cards</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-bold text-slate-300">Eyebrow</label>
              <input
                type="text"
                value={data.eventCards.eyebrow}
                onChange={(e) =>
                  setData({
                    ...data,
                    eventCards: { ...data.eventCards, eyebrow: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300">Title</label>
              <input
                type="text"
                value={data.eventCards.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    eventCards: { ...data.eventCards, title: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">Description</label>
              <textarea
                rows={2}
                value={data.eventCards.description}
                onChange={(e) =>
                  setData({
                    ...data,
                    eventCards: { ...data.eventCards, description: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            {/* One Hook Event Card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 space-y-2">
              <label className="text-xs font-bold text-slate-300">One Hook Card Title</label>
              <input
                type="text"
                value={data.eventCards.oneHookCard.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    eventCards: {
                      ...data.eventCards,
                      oneHookCard: { ...data.eventCards.oneHookCard, title: e.target.value },
                    },
                  })
                }
                className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-white"
              />
              <label className="text-xs font-bold text-slate-300">Formula Text</label>
              <input
                type="text"
                value={data.eventCards.oneHookCard.formula}
                onChange={(e) =>
                  setData({
                    ...data,
                    eventCards: {
                      ...data.eventCards,
                      oneHookCard: { ...data.eventCards.oneHookCard, formula: e.target.value },
                    },
                  })
                }
                className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-cyan-300 font-bold"
              />
            </div>

            {/* Two Hook Event Card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 space-y-2">
              <label className="text-xs font-bold text-slate-300">Two Hook Card Title</label>
              <input
                type="text"
                value={data.eventCards.twoHookCard.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    eventCards: {
                      ...data.eventCards,
                      twoHookCard: { ...data.eventCards.twoHookCard, title: e.target.value },
                    },
                  })
                }
                className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-white"
              />
              <label className="text-xs font-bold text-slate-300">Formula Text</label>
              <input
                type="text"
                value={data.eventCards.twoHookCard.formula}
                onChange={(e) =>
                  setData({
                    ...data,
                    eventCards: {
                      ...data.eventCards,
                      twoHookCard: { ...data.eventCards.twoHookCard, formula: e.target.value },
                    },
                  })
                }
                className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-cyan-300 font-bold"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">Advisory Text</label>
              <textarea
                rows={2}
                value={data.eventCards.infoText}
                onChange={(e) =>
                  setData({
                    ...data,
                    eventCards: { ...data.eventCards, infoText: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 9: COMPLETE SETS */}
      {/* ========================================================================= */}
      {activeTab === "completeSets" && (
        <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">Complete ID Card Sets</h2>
              <p className="text-xs text-slate-400">Coordinated setups: Standard, Sealed, and Branded</p>
            </div>
            <button
              onClick={() => saveSection("completeSets", data.completeSets)}
              disabled={savingSection === "completeSets"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#008bc9] disabled:opacity-50"
            >
              {savingSection === "completeSets" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save Sets</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-bold text-slate-300">Eyebrow</label>
              <input
                type="text"
                value={data.completeSets.eyebrow}
                onChange={(e) =>
                  setData({
                    ...data,
                    completeSets: { ...data.completeSets, eyebrow: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300">Title</label>
              <input
                type="text"
                value={data.completeSets.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    completeSets: { ...data.completeSets, title: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">Lede</label>
              <textarea
                rows={2}
                value={data.completeSets.lede}
                onChange={(e) =>
                  setData({
                    ...data,
                    completeSets: { ...data.completeSets, lede: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            {/* Setups */}
            {(["setup1", "setup2", "setup3"] as const).map((key) => (
              <div key={key} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 space-y-2">
                <label className="text-xs font-bold text-cyan-300">Badge</label>
                <input
                  type="text"
                  value={data.completeSets[key].badge}
                  onChange={(e) =>
                    setData({
                      ...data,
                      completeSets: {
                        ...data.completeSets,
                        [key]: { ...data.completeSets[key], badge: e.target.value },
                      },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-white"
                />
                <label className="text-xs font-bold text-cyan-300">Title</label>
                <input
                  type="text"
                  value={data.completeSets[key].title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      completeSets: {
                        ...data.completeSets,
                        [key]: { ...data.completeSets[key], title: e.target.value },
                      },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-white font-bold"
                />
                <label className="text-xs font-bold text-slate-400">Steps (comma-separated)</label>
                <input
                  type="text"
                  value={data.completeSets[key].steps.join(", ")}
                  onChange={(e) =>
                    setData({
                      ...data,
                      completeSets: {
                        ...data.completeSets,
                        [key]: {
                          ...data.completeSets[key],
                          steps: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                        },
                      },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-slate-300"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 10: SCHOOL & CORPORATE */}
      {/* ========================================================================= */}
      {activeTab === "schoolsAndCompanies" && (
        <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">Schools & Companies Deep Dives</h2>
              <p className="text-xs text-slate-400">Educational programs and corporate identity use cases</p>
            </div>
            <button
              onClick={() => saveSection("schoolsAndCompanies", data.schoolsAndCompanies)}
              disabled={savingSection === "schoolsAndCompanies"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#008bc9] disabled:opacity-50"
            >
              {savingSection === "schoolsAndCompanies" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save Deep Dives</span>
            </button>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Schools */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 border-b border-slate-800 pb-2">
                <GraduationCap className="h-5 w-5 text-[#009fe3]" />
                <h3 className="font-black text-white text-sm">Schools Ultrasonic Configuration</h3>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">Title</label>
                <input
                  type="text"
                  value={data.schoolsAndCompanies.schools.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      schoolsAndCompanies: {
                        ...data.schoolsAndCompanies,
                        schools: { ...data.schoolsAndCompanies.schools, title: e.target.value },
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">Description</label>
                <textarea
                  rows={2}
                  value={data.schoolsAndCompanies.schools.description}
                  onChange={(e) =>
                    setData({
                      ...data,
                      schoolsAndCompanies: {
                        ...data.schoolsAndCompanies,
                        schools: { ...data.schoolsAndCompanies.schools, description: e.target.value },
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">
                  Use Cases (comma-separated)
                </label>
                <textarea
                  rows={2}
                  value={data.schoolsAndCompanies.schools.useCases.join(", ")}
                  onChange={(e) =>
                    setData({
                      ...data,
                      schoolsAndCompanies: {
                        ...data.schoolsAndCompanies,
                        schools: {
                          ...data.schoolsAndCompanies.schools,
                          useCases: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                        },
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">
                  Steps (comma-separated)
                </label>
                <input
                  type="text"
                  value={data.schoolsAndCompanies.schools.steps.join(", ")}
                  onChange={(e) =>
                    setData({
                      ...data,
                      schoolsAndCompanies: {
                        ...data.schoolsAndCompanies,
                        schools: {
                          ...data.schoolsAndCompanies.schools,
                          steps: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                        },
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-white"
                />
              </div>
            </div>

            {/* Companies */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 border-b border-slate-800 pb-2">
                <Building2 className="h-5 w-5 text-[#009fe3]" />
                <h3 className="font-black text-white text-sm">Companies Ultrasonic Configuration</h3>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">Title</label>
                <input
                  type="text"
                  value={data.schoolsAndCompanies.companies.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      schoolsAndCompanies: {
                        ...data.schoolsAndCompanies,
                        companies: { ...data.schoolsAndCompanies.companies, title: e.target.value },
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">Description</label>
                <textarea
                  rows={2}
                  value={data.schoolsAndCompanies.companies.description}
                  onChange={(e) =>
                    setData({
                      ...data,
                      schoolsAndCompanies: {
                        ...data.schoolsAndCompanies,
                        companies: { ...data.schoolsAndCompanies.companies, description: e.target.value },
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">
                  Use Cases (comma-separated)
                </label>
                <textarea
                  rows={2}
                  value={data.schoolsAndCompanies.companies.useCases.join(", ")}
                  onChange={(e) =>
                    setData({
                      ...data,
                      schoolsAndCompanies: {
                        ...data.schoolsAndCompanies,
                        companies: {
                          ...data.schoolsAndCompanies.companies,
                          useCases: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                        },
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">
                  Steps (comma-separated)
                </label>
                <input
                  type="text"
                  value={data.schoolsAndCompanies.companies.steps.join(", ")}
                  onChange={(e) =>
                    setData({
                      ...data,
                      schoolsAndCompanies: {
                        ...data.schoolsAndCompanies,
                        companies: {
                          ...data.schoolsAndCompanies.companies,
                          steps: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                        },
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-white"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 11: PROCESS WORKFLOW */}
      {/* ========================================================================= */}
      {activeTab === "processWorkflow" && (
        <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">
                Ultrasonic Sealing Process ({data.processWorkflow.steps.length} Steps)
              </h2>
              <p className="text-xs text-slate-400">Step-by-step factory production lifecycle</p>
            </div>
            <button
              onClick={() => saveSection("processWorkflow", data.processWorkflow)}
              disabled={savingSection === "processWorkflow"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#008bc9] disabled:opacity-50"
            >
              {savingSection === "processWorkflow" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save Workflow</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-bold text-slate-300">Eyebrow</label>
              <input
                type="text"
                value={data.processWorkflow.eyebrow}
                onChange={(e) =>
                  setData({
                    ...data,
                    processWorkflow: { ...data.processWorkflow, eyebrow: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300">Title</label>
              <input
                type="text"
                value={data.processWorkflow.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    processWorkflow: { ...data.processWorkflow, title: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
              />
            </div>
          </div>

          <div className="space-y-3">
            {data.processWorkflow.steps.map((step, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 space-y-2"
              >
                <span className="text-[11px] font-black uppercase tracking-wider text-cyan-400">
                  Step {idx + 1}
                </span>
                <input
                  type="text"
                  value={step.title}
                  onChange={(e) => {
                    const updated = [...data.processWorkflow.steps];
                    updated[idx].title = e.target.value;
                    setData({
                      ...data,
                      processWorkflow: { ...data.processWorkflow, steps: updated },
                    });
                  }}
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs font-bold text-white"
                />
                <textarea
                  rows={2}
                  value={step.body}
                  onChange={(e) => {
                    const updated = [...data.processWorkflow.steps];
                    updated[idx].body = e.target.value;
                    setData({
                      ...data,
                      processWorkflow: { ...data.processWorkflow, steps: updated },
                    });
                  }}
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-slate-300"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 12: QA & PRICING */}
      {/* ========================================================================= */}
      {activeTab === "qualityAndPricing" && (
        <div className="space-y-8">
          {/* Quality Standards */}
          <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div>
                <h2 className="text-lg font-black text-white">Quality Assurance & Inspection</h2>
                <p className="text-xs text-slate-400">Inspection factors for batch consistency</p>
              </div>
              <button
                onClick={() => saveSection("qualityAspects", data.qualityAspects)}
                disabled={savingSection === "qualityAspects"}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#008bc9] disabled:opacity-50"
              >
                {savingSection === "qualityAspects" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                <span>Save QA</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-bold text-slate-300">Eyebrow</label>
                <input
                  type="text"
                  value={data.qualityAspects.eyebrow}
                  onChange={(e) =>
                    setData({
                      ...data,
                      qualityAspects: { ...data.qualityAspects, eyebrow: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">Title</label>
                <input
                  type="text"
                  value={data.qualityAspects.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      qualityAspects: { ...data.qualityAspects, title: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-300">Description</label>
                <textarea
                  rows={2}
                  value={data.qualityAspects.description}
                  onChange={(e) =>
                    setData({
                      ...data,
                      qualityAspects: { ...data.qualityAspects, description: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-300">
                  Inspection Aspects (comma-separated)
                </label>
                <textarea
                  rows={3}
                  value={data.qualityAspects.aspects.join(", ")}
                  onChange={(e) =>
                    setData({
                      ...data,
                      qualityAspects: {
                        ...data.qualityAspects,
                        aspects: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
                />
              </div>
            </div>
          </div>

          {/* Pricing Logic */}
          <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div>
                <h2 className="text-lg font-black text-white">Pricing Logic & Principles</h2>
                <p className="text-xs text-slate-400">Basic calculation principles and pricing advisory</p>
              </div>
              <button
                onClick={() => saveSection("pricingLogic", data.pricingLogic)}
                disabled={savingSection === "pricingLogic"}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#008bc9] disabled:opacity-50"
              >
                {savingSection === "pricingLogic" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                <span>Save Pricing</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-bold text-slate-300">Title</label>
                <input
                  type="text"
                  value={data.pricingLogic.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      pricingLogic: { ...data.pricingLogic, title: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">Principle 1</label>
                <input
                  type="text"
                  value={data.pricingLogic.principle1.text}
                  onChange={(e) =>
                    setData({
                      ...data,
                      pricingLogic: {
                        ...data.pricingLogic,
                        principle1: { ...data.pricingLogic.principle1, text: e.target.value },
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white font-bold"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">Principle 2</label>
                <input
                  type="text"
                  value={data.pricingLogic.principle2.text}
                  onChange={(e) =>
                    setData({
                      ...data,
                      pricingLogic: {
                        ...data.pricingLogic,
                        principle2: { ...data.pricingLogic.principle2, text: e.target.value },
                      },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white font-bold"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">Advisory Text</label>
                <input
                  type="text"
                  value={data.pricingLogic.infoText}
                  onChange={(e) =>
                    setData({
                      ...data,
                      pricingLogic: { ...data.pricingLogic, infoText: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 13: ATTACHMENT OPTIONS & WHY IDGEN USES */}
      {/* ========================================================================= */}
      {activeTab === "optionsAndWhy" && (
        <div className="space-y-8">
          {/* Attachment Options */}
          <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div>
                <h2 className="text-lg font-black text-white">Attachment Options ({data.attachmentOptions.items.length})</h2>
                <p className="text-xs text-slate-400">Conventional vs Single vs Dual vs Complete kit</p>
              </div>
              <button
                onClick={() => saveSection("attachmentOptions", data.attachmentOptions)}
                disabled={savingSection === "attachmentOptions"}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#008bc9] disabled:opacity-50"
              >
                {savingSection === "attachmentOptions" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                <span>Save Options</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {data.attachmentOptions.items.map((opt, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 space-y-2">
                  <label className="text-[10px] font-bold text-cyan-400">Badge</label>
                  <input
                    type="text"
                    value={opt.badge}
                    onChange={(e) => {
                      const updated = [...data.attachmentOptions.items];
                      updated[idx].badge = e.target.value;
                      setData({ ...data, attachmentOptions: { ...data.attachmentOptions, items: updated } });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2 py-1 text-xs text-cyan-300"
                  />
                  <label className="text-[10px] font-bold text-slate-300">Title</label>
                  <input
                    type="text"
                    value={opt.title}
                    onChange={(e) => {
                      const updated = [...data.attachmentOptions.items];
                      updated[idx].title = e.target.value;
                      setData({ ...data, attachmentOptions: { ...data.attachmentOptions, items: updated } });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2 py-1 text-xs text-white font-bold"
                  />
                  <label className="text-[10px] font-bold text-slate-300">Formula (comma-separated)</label>
                  <input
                    type="text"
                    value={opt.formula.join(", ")}
                    onChange={(e) => {
                      const updated = [...data.attachmentOptions.items];
                      updated[idx].formula = e.target.value.split(",").map((s) => s.trim()).filter(Boolean);
                      setData({ ...data, attachmentOptions: { ...data.attachmentOptions, items: updated } });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2 py-1 text-xs text-slate-300"
                  />
                  <label className="text-[10px] font-bold text-slate-400">Description</label>
                  <textarea
                    rows={2}
                    value={opt.desc}
                    onChange={(e) => {
                      const updated = [...data.attachmentOptions.items];
                      updated[idx].desc = e.target.value;
                      setData({ ...data, attachmentOptions: { ...data.attachmentOptions, items: updated } });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2 py-1 text-xs text-slate-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Why IDGen Uses */}
          <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div>
                <h2 className="text-lg font-black text-white">Why IDGen Uses Ultrasonic Sealing ({data.whyIdgenUses.features.length})</h2>
                <p className="text-xs text-slate-400">Engineering rationale and manufacturing advantages</p>
              </div>
              <button
                onClick={() => saveSection("whyIdgenUses", data.whyIdgenUses)}
                disabled={savingSection === "whyIdgenUses"}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#008bc9] disabled:opacity-50"
              >
                {savingSection === "whyIdgenUses" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                <span>Save Rationale</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.whyIdgenUses.features.map((feat, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 space-y-2">
                  <div>
                    <label className="text-[10px] font-bold text-slate-400">Icon Name</label>
                    <input
                      type="text"
                      value={feat.iconName}
                      onChange={(e) => {
                        const updated = [...data.whyIdgenUses.features];
                        updated[idx].iconName = e.target.value;
                        setData({ ...data, whyIdgenUses: { ...data.whyIdgenUses, features: updated } });
                      }}
                      className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-cyan-300"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400">Title</label>
                    <input
                      type="text"
                      value={feat.title}
                      onChange={(e) => {
                        const updated = [...data.whyIdgenUses.features];
                        updated[idx].title = e.target.value;
                        setData({ ...data, whyIdgenUses: { ...data.whyIdgenUses, features: updated } });
                      }}
                      className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-white font-bold"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400">Body</label>
                    <textarea
                      rows={2}
                      value={feat.body}
                      onChange={(e) => {
                        const updated = [...data.whyIdgenUses.features];
                        updated[idx].body = e.target.value;
                        setData({ ...data, whyIdgenUses: { ...data.whyIdgenUses, features: updated } });
                      }}
                      className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-slate-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 14: FAQS, CTA & HUB */}
      {/* ========================================================================= */}
      {activeTab === "faqsAndHub" && (
        <div className="space-y-8">
          {/* FAQs */}
          <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div>
                <h2 className="text-lg font-black text-white">Frequently Asked Questions ({data.faqs.items.length})</h2>
                <p className="text-xs text-slate-400">Questions & Answers from document</p>
              </div>
              <button
                onClick={() => saveSection("faqs", data.faqs)}
                disabled={savingSection === "faqs"}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#008bc9] disabled:opacity-50"
              >
                {savingSection === "faqs" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                <span>Save FAQs</span>
              </button>
            </div>

            <div className="space-y-3">
              {data.faqs.items.map((faq, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 space-y-2">
                  <span className="text-[10px] font-black uppercase text-cyan-400">FAQ #{idx + 1}</span>
                  <input
                    type="text"
                    value={faq.q}
                    onChange={(e) => {
                      const updated = [...data.faqs.items];
                      updated[idx].q = e.target.value;
                      setData({ ...data, faqs: { ...data.faqs, items: updated } });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs font-bold text-white"
                  />
                  <textarea
                    rows={2}
                    value={faq.a}
                    onChange={(e) => {
                      const updated = [...data.faqs.items];
                      updated[idx].a = e.target.value;
                      setData({ ...data, faqs: { ...data.faqs, items: updated } });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-slate-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Closing CTA */}
          <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div>
                <h2 className="text-lg font-black text-white">Closing Call to Action & Regional Hub</h2>
                <p className="text-xs text-slate-400">Quote inquiry banner and Guwahati Hub directory</p>
              </div>
              <button
                onClick={() => {
                  saveSection("closingCta", data.closingCta);
                  saveSection("regionalDirectory", data.regionalDirectory);
                }}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#008bc9]"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save CTAs & Hub</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-bold text-slate-300">CTA Title</label>
                <input
                  type="text"
                  value={data.closingCta.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      closingCta: { ...data.closingCta, title: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300">Regional Hub Tag</label>
                <input
                  type="text"
                  value={data.regionalDirectory.hubTag}
                  onChange={(e) =>
                    setData({
                      ...data,
                      regionalDirectory: { ...data.regionalDirectory, hubTag: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-300">CTA Description</label>
                <textarea
                  rows={2}
                  value={data.closingCta.description}
                  onChange={(e) =>
                    setData({
                      ...data,
                      closingCta: { ...data.closingCta, description: e.target.value },
                    })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 15: SEO META */}
      {/* ========================================================================= */}
      {activeTab === "meta" && (
        <div className="rounded-3xl border border-slate-800 bg-[#0c1424] p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">SEO & Search Metadata</h2>
              <p className="text-xs text-slate-400">Page title and search engine description</p>
            </div>
            <button
              onClick={() => saveSection("meta", data.meta)}
              disabled={savingSection === "meta"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#008bc9] disabled:opacity-50"
            >
              {savingSection === "meta" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save Meta</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">Page Meta Title</label>
              <input
                type="text"
                value={data.meta.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    meta: { ...data.meta, title: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white focus:border-[#009fe3]"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">Meta Description</label>
              <textarea
                rows={3}
                value={data.meta.description}
                onChange={(e) =>
                  setData({
                    ...data,
                    meta: { ...data.meta, description: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white focus:border-[#009fe3]"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300">Canonical Path</label>
              <input
                type="text"
                value={data.meta.path}
                onChange={(e) =>
                  setData({
                    ...data,
                    meta: { ...data.meta, path: e.target.value },
                  })
                }
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white focus:border-[#009fe3]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminUltrasonicSealingPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center">
          <RefreshCw className="h-8 w-8 animate-spin text-[#009fe3]" />
        </div>
      }
    >
      <AdminUltrasonicSealingContent />
    </Suspense>
  );
}
