"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import {
  Sparkles,
  Save,
  RotateCcw,
  ExternalLink,
  Plus,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Building2,
  Boxes,
  ShieldCheck,
  HelpCircle,
  UploadCloud,
  RefreshCw,
  Sliders,
  Eye,
  Truck,
  Zap,
  Check,
  Award,
  Clock,
  Layers,
  Magnet,
  Shield,
  Briefcase,
  Hospital,
} from "lucide-react";
import type {
  DynamicAcrylicBadgesData,
  BadgeSlide,
  BadgeCatalogItem,
  BadgeStackLayer,
  MasterBadgeSection,
  BadgeFactor,
  BadgeFastenerOption,
  BadgeApplicationItem,
  BadgeOrderingStep,
  CtaButton,
  DynamicAcrylicBadgesFaqItem,
} from "@/lib/dynamic-acrylic-badges-types";

function AdminAcrylicBadgesContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "hero";
  const [data, setData] = useState<DynamicAcrylicBadgesData | null>(null);
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
      const res = await fetch("/api/admin/acrylic-badges/");
      const json = await res.json();
      if (json.success && json.data) {
        setData(json.data);
      } else {
        setSaveError("Failed to load Acrylic Badges data");
      }
    } catch (e: any) {
      setSaveError(e.message || "Network error loading data");
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (
    file: File,
    callback: (url: string) => void,
    fieldId?: string
  ) => {
    try {
      if (fieldId) setUploadingField(fieldId);
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/upload/", {
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
    } catch (e: any) {
      setSaveError(e.message || "Image upload failed");
      setTimeout(() => setSaveError(null), 4000);
    } finally {
      if (fieldId) setUploadingField(null);
    }
  };

  const handleSaveSection = async (sectionName: keyof DynamicAcrylicBadgesData) => {
    if (!data) return;
    try {
      setSavingSection(sectionName);
      setSaveSuccess(null);
      setSaveError(null);

      const res = await fetch("/api/admin/acrylic-badges/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          section: sectionName,
          sectionData: data[sectionName],
        }),
      });

      const json = await res.json();
      if (json.success) {
        setSaveSuccess(json.message || `Section '${sectionName}' saved!`);
        if (json.data) setData(json.data);
        setTimeout(() => setSaveSuccess(null), 3500);
      } else {
        setSaveError(json.error || "Failed to save section");
      }
    } catch (e: any) {
      setSaveError(e.message || "Network error saving section");
    } finally {
      setSavingSection(null);
    }
  };

  const handleSaveAll = async () => {
    if (!data) return;
    try {
      setSaving(true);
      setSaveSuccess(null);
      setSaveError(null);

      const res = await fetch("/api/admin/acrylic-badges/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });

      const json = await res.json();
      if (json.success) {
        setSaveSuccess("Entire Acrylic Badges page successfully published!");
        if (json.data) setData(json.data);
        setTimeout(() => setSaveSuccess(null), 3500);
      } else {
        setSaveError(json.error || "Failed to save entire page");
      }
    } catch (e: any) {
      setSaveError(e.message || "Network error saving page");
    } finally {
      setSaving(false);
    }
  };

  const handleReset = async () => {
    if (
      !confirm(
        "Are you sure you want to restore all Acrylic Badges data to factory defaults? Any custom modifications will be reset."
      )
    ) {
      return;
    }

    try {
      setSaving(true);
      setSaveSuccess(null);
      setSaveError(null);

      const res = await fetch("/api/admin/acrylic-badges/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "reset" }),
      });

      const json = await res.json();
      if (json.success) {
        setSaveSuccess("Reset to factory defaults completed!");
        if (json.data) setData(json.data);
        setTimeout(() => setSaveSuccess(null), 3500);
      } else {
        setSaveError(json.error || "Failed to reset");
      }
    } catch (e: any) {
      setSaveError(e.message || "Network error resetting");
    } finally {
      setSaving(false);
    }
  };

  const tabs = [
    { id: "hero", label: "Hero & Carousel", icon: Zap },
    { id: "quickSelection", label: "Catalog & Matrix", icon: Sliders },
    { id: "anatomy", label: "Badge Anatomy", icon: Layers },
    { id: "rangeMaster", label: "Master Showcase", icon: Boxes },
    { id: "engineeringGuide", label: "Fasteners & Guide", icon: Magnet },
    { id: "applications", label: "Sectors & Uses", icon: Building2 },
    { id: "workflowAndDispatch", label: "Workflow & Dispatch", icon: Truck },
    { id: "faqs", label: "FAQs", icon: HelpCircle },
    { id: "seo", label: "SEO & Meta", icon: Eye },
  ];

  if (loading) {
    return (
      <div className="flex h-[60vh] items-center justify-center flex-col gap-4">
        <RefreshCw className="h-8 w-8 animate-spin text-[#009fe3]" />
        <p className="text-sm font-bold text-slate-400">
          Loading Acrylic Badges Management...
        </p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="p-8 text-center bg-slate-900 border border-slate-800 rounded-3xl">
        <AlertCircle className="h-10 w-10 text-red-500 mx-auto mb-3" />
        <p className="text-base font-bold text-slate-200">
          Unable to load Acrylic Badges dynamic data.
        </p>
        <button
          onClick={fetchPageData}
          className="mt-4 px-4 py-2 bg-[#009fe3] text-white font-bold rounded-xl text-xs"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-20">
      {/* Top Header Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/60 border border-slate-800 p-6 sm:p-8 shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#009fe3]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#009fe3]/15 border border-[#009fe3]/30 text-[#009fe3] shadow-lg shadow-[#009fe3]/20 shrink-0">
              <Shield className="h-7 w-7" />
            </div>
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Acrylic Badges &amp; Pins Content Manager
                </h1>
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                  Live Dynamic
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
                Edit all 9 sections, hero slides, badge catalog, specs, and SEO metadata in real time.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/acrylic-badges/"
              target="_blank"
              className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-200 font-semibold text-xs hover:bg-slate-700 hover:text-white transition flex items-center gap-1.5 border border-slate-700 shadow-sm"
            >
              <span>Preview Page</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-70" />
            </Link>

            <button
              type="button"
              onClick={handleReset}
              disabled={saving}
              className="px-3.5 py-2.5 rounded-xl bg-slate-800/80 text-rose-300 font-semibold text-xs hover:bg-rose-950/40 hover:text-rose-200 transition flex items-center gap-1.5 border border-rose-500/30 disabled:opacity-50 shadow-sm"
              title="Reset to factory default seed data"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Factory Reset</span>
            </button>

            <button
              type="button"
              onClick={handleSaveAll}
              disabled={saving}
              className="px-6 py-2.5 rounded-xl bg-[#009fe3] text-white font-bold text-xs hover:bg-[#008bc9] shadow-lg shadow-[#009fe3]/25 transition flex items-center gap-2 disabled:opacity-50"
            >
              {saving ? (
                <RefreshCw className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <Save className="h-3.5 w-3.5" />
              )}
              <span>Publish All Changes</span>
            </button>
          </div>
        </div>

        {/* Notifications */}
        {saveSuccess && (
          <div className="mt-5 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
            <span>{saveSuccess}</span>
          </div>
        )}

        {saveError && (
          <div className="mt-5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-semibold flex items-center gap-2">
            <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
            <span>{saveError}</span>
          </div>
        )}
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 p-2 bg-slate-900/90 border border-slate-800 rounded-2xl backdrop-blur-md">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                isActive
                  ? "bg-[#009fe3] text-white shadow-md shadow-[#009fe3]/25"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              <Icon className={`h-4 w-4 ${isActive ? "text-white" : "text-cyan-400"}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ============================================================
          TAB 1: HERO & SLIDES
          ============================================================ */}
      {activeTab === "hero" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Zap className="h-4 w-4 text-cyan-400" />
              <span>Hero Header &amp; Visual Showcase</span>
            </h2>
            <button
              onClick={() => handleSaveSection("hero")}
              disabled={savingSection === "hero"}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#009fe3] text-white hover:bg-[#008bc9] shadow-md shadow-[#009fe3]/20 transition disabled:opacity-50"
            >
              {savingSection === "hero" ? (
                <RefreshCw className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <Save className="h-3.5 w-3.5" />
              )}
              <span>Save Hero Section</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Badge Eyebrow (e.g. EXECUTIVE IDENTIFICATION)
              </label>
              <input
                type="text"
                value={data.hero.badge}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: { ...data.hero, badge: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2.5 text-xs font-medium text-slate-100 placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-[#009fe3] transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Badge Subtitle Tag (e.g. Laser-Cut Cast PMMA)
              </label>
              <input
                type="text"
                value={data.hero.badgeSub}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: { ...data.hero, badgeSub: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2.5 text-xs font-medium text-slate-100 placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-[#009fe3] transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Main Headline
              </label>
              <input
                type="text"
                value={data.hero.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: { ...data.hero, title: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2.5 text-xs font-medium text-slate-100 placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-[#009fe3] transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Headline Highlight (Gradient Text)
              </label>
              <input
                type="text"
                value={data.hero.highlight}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: { ...data.hero, highlight: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2.5 text-xs font-medium text-slate-100 placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-[#009fe3] transition"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Hero Description / Lede
              </label>
              <textarea
                rows={3}
                value={data.hero.description}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: { ...data.hero, description: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2.5 text-xs font-medium text-slate-100 placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-[#009fe3] transition leading-relaxed"
              />
            </div>
          </div>

          {/* Feature Specs */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-cyan-400" />
              <span>Hero 4-Item Spec Strip</span>
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {data.hero.specStrip.map((spec, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800/90 p-4 space-y-2 bg-slate-950/70"
                >
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Spec Title
                    </label>
                    <input
                      type="text"
                      value={spec.title}
                      onChange={(e) => {
                        const updated = [...data.hero.specStrip];
                        updated[idx].title = e.target.value;
                        setData({
                          ...data,
                          hero: { ...data.hero, specStrip: updated },
                        });
                      }}
                      className="w-full rounded-xl border border-slate-700/80 bg-slate-900 px-3 py-1.5 text-xs font-bold text-white focus:outline-hidden focus:ring-2 focus:ring-[#009fe3]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Sub Description
                    </label>
                    <input
                      type="text"
                      value={spec.desc}
                      onChange={(e) => {
                        const updated = [...data.hero.specStrip];
                        updated[idx].desc = e.target.value;
                        setData({
                          ...data,
                          hero: { ...data.hero, specStrip: updated },
                        });
                      }}
                      className="w-full rounded-xl border border-slate-700/80 bg-slate-900 px-3 py-1.5 text-xs text-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#009fe3]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Carousel Slides */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-cyan-400" />
                <span>Hero Visual Slider Images ({data.hero.slides.length} Slides)</span>
              </h3>
              <button
                onClick={() => {
                  const newSlide: BadgeSlide = {
                    id: `badge-slide-${Date.now()}`,
                    imageSrc: "/images/product-acrylic-badges.jpg",
                    alt: "Custom acrylic badge showcase",
                    title: "New Badge Model",
                    category: "Executive",
                    topBadge: "Executive Series",
                    specPill: "1440 DPI UV",
                    bottomSpec: "3mm PMMA • Flame Polished • Neodymium Magnet",
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
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-[#009fe3]/10 text-[#009fe3] border border-[#009fe3]/30 hover:bg-[#009fe3]/20 transition"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add Slide</span>
              </button>
            </div>

            <div className="space-y-4">
              {data.hero.slides.map((slide, idx) => (
                <div
                  key={slide.id || idx}
                  className="rounded-2xl border border-slate-800/90 p-4 bg-slate-950/70 space-y-3"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-xs font-black text-slate-200">
                      Slide #{idx + 1}: {slide.title}
                    </span>
                    <button
                      onClick={() => {
                        const updated = data.hero.slides.filter(
                          (_, i) => i !== idx
                        );
                        setData({
                          ...data,
                          hero: { ...data.hero, slides: updated },
                        });
                      }}
                      className="text-rose-400 hover:text-rose-300 p-1 text-xs font-bold inline-flex items-center gap-1 transition"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      <span>Remove</span>
                    </button>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Slide Title
                      </label>
                      <input
                        type="text"
                        value={slide.title}
                        onChange={(e) => {
                          const updated = [...data.hero.slides];
                          updated[idx].title = e.target.value;
                          setData({
                            ...data,
                            hero: { ...data.hero, slides: updated },
                          });
                        }}
                        className="w-full rounded-xl border border-slate-700/80 bg-slate-900 px-3 py-1.5 text-xs text-white focus:outline-hidden focus:ring-2 focus:ring-[#009fe3]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Top Floating Badge
                      </label>
                      <input
                        type="text"
                        value={slide.topBadge}
                        onChange={(e) => {
                          const updated = [...data.hero.slides];
                          updated[idx].topBadge = e.target.value;
                          setData({
                            ...data,
                            hero: { ...data.hero, slides: updated },
                          });
                        }}
                        className="w-full rounded-xl border border-slate-700/80 bg-slate-900 px-3 py-1.5 text-xs text-white focus:outline-hidden focus:ring-2 focus:ring-[#009fe3]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Spec Pill (Top Right)
                      </label>
                      <input
                        type="text"
                        value={slide.specPill}
                        onChange={(e) => {
                          const updated = [...data.hero.slides];
                          updated[idx].specPill = e.target.value;
                          setData({
                            ...data,
                            hero: { ...data.hero, slides: updated },
                          });
                        }}
                        className="w-full rounded-xl border border-slate-700/80 bg-slate-900 px-3 py-1.5 text-xs text-white focus:outline-hidden focus:ring-2 focus:ring-[#009fe3]"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Image URL / File Upload
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={slide.imageSrc}
                          onChange={(e) => {
                            const updated = [...data.hero.slides];
                            updated[idx].imageSrc = e.target.value;
                            setData({
                              ...data,
                              hero: { ...data.hero, slides: updated },
                            });
                          }}
                          className="w-full rounded-xl border border-slate-700/80 bg-slate-900 px-3 py-1.5 text-xs text-white focus:outline-hidden focus:ring-2 focus:ring-[#009fe3]"
                        />
                        <label className="shrink-0 cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#009fe3]/40 bg-[#009fe3]/10 text-[#009fe3] text-xs font-bold hover:bg-[#009fe3]/20 transition">
                          <UploadCloud className="h-3.5 w-3.5" />
                          <span>Upload</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                handleFileUpload(file, (url) => {
                                  const updated = [...data.hero.slides];
                                  updated[idx].imageSrc = url;
                                  setData({
                                    ...data,
                                    hero: { ...data.hero, slides: updated },
                                  });
                                });
                              }
                            }}
                          />
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Hub Dispatch Tag
                      </label>
                      <input
                        type="text"
                        value={slide.hubTag}
                        onChange={(e) => {
                          const updated = [...data.hero.slides];
                          updated[idx].hubTag = e.target.value;
                          setData({
                            ...data,
                            hero: { ...data.hero, slides: updated },
                          });
                        }}
                        className="w-full rounded-xl border border-slate-700/80 bg-slate-900 px-3 py-1.5 text-xs text-white focus:outline-hidden focus:ring-2 focus:ring-[#009fe3]"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 2: CATALOG & SELECTION MATRIX
          ============================================================ */}
      {activeTab === "quickSelection" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Sliders className="h-4 w-4 text-cyan-400" />
              <span>Badge Selection Matrix &amp; Catalog</span>
            </h2>
            <button
              onClick={() => handleSaveSection("quickSelection")}
              disabled={savingSection === "quickSelection"}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#009fe3] text-white hover:bg-[#008bc9] shadow-md shadow-[#009fe3]/20 transition disabled:opacity-50"
            >
              {savingSection === "quickSelection" ? (
                <RefreshCw className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <Save className="h-3.5 w-3.5" />
              )}
              <span>Save Catalog Section</span>
            </button>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl grid gap-4 sm:grid-cols-3">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Badge Tag
              </label>
              <input
                type="text"
                value={data.quickSelection.badge}
                onChange={(e) =>
                  setData({
                    ...data,
                    quickSelection: {
                      ...data.quickSelection,
                      badge: e.target.value,
                    },
                  })
                }
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2.5 text-xs font-medium text-slate-100 placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-[#009fe3] transition"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Section Title
              </label>
              <input
                type="text"
                value={data.quickSelection.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    quickSelection: {
                      ...data.quickSelection,
                      title: e.target.value,
                    },
                  })
                }
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2.5 text-xs font-medium text-slate-100 placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-[#009fe3] transition"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Lede Description
              </label>
              <input
                type="text"
                value={data.quickSelection.lede}
                onChange={(e) =>
                  setData({
                    ...data,
                    quickSelection: {
                      ...data.quickSelection,
                      lede: e.target.value,
                    },
                  })
                }
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2.5 text-xs font-medium text-slate-100 placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-[#009fe3] transition"
              />
            </div>
          </div>

          {/* Catalog Items */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Boxes className="h-4 w-4 text-cyan-400" />
                <span>Badge Models ({data.quickSelection.catalog.length} Items)</span>
              </h3>
              <button
                onClick={() => {
                  const newItem: BadgeCatalogItem = {
                    id: `acr-${Date.now()}`,
                    code: `ACR-${data.quickSelection.catalog.length + 1}`,
                    title: "Custom Acrylic Name Tag",
                    category: "executive",
                    material: "3mm Optical Cast PMMA",
                    attachment: "Triple Neodymium Magnetic Plate",
                    finish: "Diamond Flame-Polished Edge",
                    img: "/images/Acrylic Badges Samples/Sample 1.jpg",
                    badge: "Executive Standard",
                    description: "High-grade laser cut badge with sub-surface direct UV printing.",
                    idealFor: ["Corporate Staff", "Hotel Executives", "Branch Managers"],
                  };
                  setData({
                    ...data,
                    quickSelection: {
                      ...data.quickSelection,
                      catalog: [...data.quickSelection.catalog, newItem],
                    },
                  });
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-[#009fe3]/10 text-[#009fe3] border border-[#009fe3]/30 hover:bg-[#009fe3]/20 transition"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add Badge Model</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {data.quickSelection.catalog.map((item, idx) => (
                <div
                  key={item.id || idx}
                  className="rounded-2xl border border-slate-800/90 p-4 bg-slate-950/70 space-y-3"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-xs font-black text-[#009fe3]">
                      {item.code} • {item.title}
                    </span>
                    <button
                      onClick={() => {
                        const updated = data.quickSelection.catalog.filter(
                          (_, i) => i !== idx
                        );
                        setData({
                          ...data,
                          quickSelection: {
                            ...data.quickSelection,
                            catalog: updated,
                          },
                        });
                      }}
                      className="text-rose-400 hover:text-rose-300 text-xs font-bold transition"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <div className="grid gap-2.5 sm:grid-cols-2">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Product Code
                      </label>
                      <input
                        type="text"
                        value={item.code}
                        onChange={(e) => {
                          const updated = [...data.quickSelection.catalog];
                          updated[idx].code = e.target.value;
                          setData({
                            ...data,
                            quickSelection: {
                              ...data.quickSelection,
                              catalog: updated,
                            },
                          });
                        }}
                        className="w-full rounded-xl border border-slate-700/80 bg-slate-900 px-3 py-1.5 text-xs text-white focus:outline-hidden focus:ring-2 focus:ring-[#009fe3]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Category
                      </label>
                      <select
                        value={item.category}
                        onChange={(e) => {
                          const updated = [...data.quickSelection.catalog];
                          updated[idx].category = e.target.value as any;
                          setData({
                            ...data,
                            quickSelection: {
                              ...data.quickSelection,
                              catalog: updated,
                            },
                          });
                        }}
                        className="w-full rounded-xl border border-slate-700/80 bg-slate-900 px-3 py-1.5 text-xs text-white focus:outline-hidden focus:ring-2 focus:ring-[#009fe3]"
                      >
                        <option value="executive">executive</option>
                        <option value="contour">contour</option>
                        <option value="medical">medical</option>
                        <option value="prefect">prefect</option>
                        <option value="metallic">metallic</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Badge Title
                      </label>
                      <input
                        type="text"
                        value={item.title}
                        onChange={(e) => {
                          const updated = [...data.quickSelection.catalog];
                          updated[idx].title = e.target.value;
                          setData({
                            ...data,
                            quickSelection: {
                              ...data.quickSelection,
                              catalog: updated,
                            },
                          });
                        }}
                        className="w-full rounded-xl border border-slate-700/80 bg-slate-900 px-3 py-1.5 text-xs font-bold text-white focus:outline-hidden focus:ring-2 focus:ring-[#009fe3]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Material
                      </label>
                      <input
                        type="text"
                        value={item.material}
                        onChange={(e) => {
                          const updated = [...data.quickSelection.catalog];
                          updated[idx].material = e.target.value;
                          setData({
                            ...data,
                            quickSelection: {
                              ...data.quickSelection,
                              catalog: updated,
                            },
                          });
                        }}
                        className="w-full rounded-xl border border-slate-700/80 bg-slate-900 px-3 py-1.5 text-xs text-white focus:outline-hidden focus:ring-2 focus:ring-[#009fe3]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Attachment
                      </label>
                      <input
                        type="text"
                        value={item.attachment}
                        onChange={(e) => {
                          const updated = [...data.quickSelection.catalog];
                          updated[idx].attachment = e.target.value;
                          setData({
                            ...data,
                            quickSelection: {
                              ...data.quickSelection,
                              catalog: updated,
                            },
                          });
                        }}
                        className="w-full rounded-xl border border-slate-700/80 bg-slate-900 px-3 py-1.5 text-xs text-white focus:outline-hidden focus:ring-2 focus:ring-[#009fe3]"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Image URL / File Upload
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={item.img}
                          onChange={(e) => {
                            const updated = [...data.quickSelection.catalog];
                            updated[idx].img = e.target.value;
                            setData({
                              ...data,
                              quickSelection: {
                                ...data.quickSelection,
                                catalog: updated,
                              },
                            });
                          }}
                          className="w-full rounded-xl border border-slate-700/80 bg-slate-900 px-3 py-1.5 text-xs text-white focus:outline-hidden focus:ring-2 focus:ring-[#009fe3]"
                        />
                        <label className="shrink-0 cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#009fe3]/40 bg-[#009fe3]/10 text-[#009fe3] text-xs font-bold hover:bg-[#009fe3]/20 transition">
                          <UploadCloud className="h-3.5 w-3.5" />
                          <span>Upload</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                handleFileUpload(file, (url) => {
                                  const updated = [...data.quickSelection.catalog];
                                  updated[idx].img = url;
                                  setData({
                                    ...data,
                                    quickSelection: {
                                      ...data.quickSelection,
                                      catalog: updated,
                                    },
                                  });
                                });
                              }
                            }}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 3: ANATOMY & MULTI-LAYER ECOSYSTEM
          ============================================================ */}
      {activeTab === "anatomy" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Layers className="h-4 w-4 text-cyan-400" />
              <span>Badge Anatomy &amp; Multi-Layer Ecosystem</span>
            </h2>
            <button
              onClick={() => handleSaveSection("anatomy")}
              disabled={savingSection === "anatomy"}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#009fe3] text-white hover:bg-[#008bc9] shadow-md shadow-[#009fe3]/20 transition disabled:opacity-50"
            >
              {savingSection === "anatomy" ? (
                <RefreshCw className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <Save className="h-3.5 w-3.5" />
              )}
              <span>Save Anatomy Section</span>
            </button>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl grid gap-4 sm:grid-cols-3">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Badge Eyebrow
              </label>
              <input
                type="text"
                value={data.anatomy.badge}
                onChange={(e) =>
                  setData({
                    ...data,
                    anatomy: { ...data.anatomy, badge: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2.5 text-xs font-medium text-slate-100 placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-[#009fe3] transition"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Section Title
              </label>
              <input
                type="text"
                value={data.anatomy.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    anatomy: { ...data.anatomy, title: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2.5 text-xs font-medium text-slate-100 placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-[#009fe3] transition"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Lede
              </label>
              <input
                type="text"
                value={data.anatomy.lede}
                onChange={(e) =>
                  setData({
                    ...data,
                    anatomy: { ...data.anatomy, lede: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2.5 text-xs font-medium text-slate-100 placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-[#009fe3] transition"
              />
            </div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Layers className="h-4 w-4 text-cyan-400" />
              <span>Layer Stack ({data.anatomy.layers.length} Layers)</span>
            </h3>
            <div className="space-y-4">
              {data.anatomy.layers.map((layer, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800/90 p-4 bg-slate-950/70 space-y-3"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-xs font-black text-white">
                      Layer {layer.step}: {layer.title}
                    </span>
                    <span className="text-[11px] font-bold text-[#009fe3] bg-[#009fe3]/10 px-2.5 py-0.5 rounded-full border border-[#009fe3]/30">
                      {layer.badge}
                    </span>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Title
                      </label>
                      <input
                        type="text"
                        value={layer.title}
                        onChange={(e) => {
                          const updated = [...data.anatomy.layers];
                          updated[idx].title = e.target.value;
                          setData({
                            ...data,
                            anatomy: { ...data.anatomy, layers: updated },
                          });
                        }}
                        className="w-full rounded-xl border border-slate-700/80 bg-slate-900 px-3 py-1.5 text-xs text-white focus:outline-hidden focus:ring-2 focus:ring-[#009fe3]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Subtitle
                      </label>
                      <input
                        type="text"
                        value={layer.subtitle}
                        onChange={(e) => {
                          const updated = [...data.anatomy.layers];
                          updated[idx].subtitle = e.target.value;
                          setData({
                            ...data,
                            anatomy: { ...data.anatomy, layers: updated },
                          });
                        }}
                        className="w-full rounded-xl border border-slate-700/80 bg-slate-900 px-3 py-1.5 text-xs text-white focus:outline-hidden focus:ring-2 focus:ring-[#009fe3]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Material &amp; Construction
                      </label>
                      <input
                        type="text"
                        value={layer.material}
                        onChange={(e) => {
                          const updated = [...data.anatomy.layers];
                          updated[idx].material = e.target.value;
                          setData({
                            ...data,
                            anatomy: { ...data.anatomy, layers: updated },
                          });
                        }}
                        className="w-full rounded-xl border border-slate-700/80 bg-slate-900 px-3 py-1.5 text-xs text-white focus:outline-hidden focus:ring-2 focus:ring-[#009fe3]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Benefit / Performance
                      </label>
                      <input
                        type="text"
                        value={layer.benefit}
                        onChange={(e) => {
                          const updated = [...data.anatomy.layers];
                          updated[idx].benefit = e.target.value;
                          setData({
                            ...data,
                            anatomy: { ...data.anatomy, layers: updated },
                          });
                        }}
                        className="w-full rounded-xl border border-slate-700/80 bg-slate-900 px-3 py-1.5 text-xs text-white focus:outline-hidden focus:ring-2 focus:ring-[#009fe3]"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 4: MASTER RANGE SHOWCASE
          ============================================================ */}
      {activeTab === "rangeMaster" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Boxes className="h-4 w-4 text-cyan-400" />
              <span>Master Showcase Variants &amp; Finishes</span>
            </h2>
            <button
              onClick={() => handleSaveSection("rangeMaster")}
              disabled={savingSection === "rangeMaster"}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#009fe3] text-white hover:bg-[#008bc9] shadow-md shadow-[#009fe3]/20 transition disabled:opacity-50"
            >
              {savingSection === "rangeMaster" ? (
                <RefreshCw className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <Save className="h-3.5 w-3.5" />
              )}
              <span>Save Master Showcase</span>
            </button>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            {data.rangeMaster.sections.map((sec, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800/90 p-4 bg-slate-950/70 space-y-3"
              >
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-xs font-black text-white">
                    Variant #{idx + 1}: {sec.code} — {sec.title}
                  </span>
                  <span className="text-[11px] font-bold text-[#009fe3] bg-[#009fe3]/10 px-2.5 py-0.5 rounded-full border border-[#009fe3]/30">
                    {sec.badge}
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Code
                    </label>
                    <input
                      type="text"
                      value={sec.code}
                      onChange={(e) => {
                        const updated = [...data.rangeMaster.sections];
                        updated[idx].code = e.target.value;
                        setData({
                          ...data,
                          rangeMaster: {
                            ...data.rangeMaster,
                            sections: updated,
                          },
                        });
                      }}
                      className="w-full rounded-xl border border-slate-700/80 bg-slate-900 px-3 py-1.5 text-xs text-white focus:outline-hidden focus:ring-2 focus:ring-[#009fe3]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      value={sec.title}
                      onChange={(e) => {
                        const updated = [...data.rangeMaster.sections];
                        updated[idx].title = e.target.value;
                        setData({
                          ...data,
                          rangeMaster: {
                            ...data.rangeMaster,
                            sections: updated,
                          },
                        });
                      }}
                      className="w-full rounded-xl border border-slate-700/80 bg-slate-900 px-3 py-1.5 text-xs text-white focus:outline-hidden focus:ring-2 focus:ring-[#009fe3]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Description
                    </label>
                    <textarea
                      rows={2}
                      value={sec.description}
                      onChange={(e) => {
                        const updated = [...data.rangeMaster.sections];
                        updated[idx].description = e.target.value;
                        setData({
                          ...data,
                          rangeMaster: {
                            ...data.rangeMaster,
                            sections: updated,
                          },
                        });
                      }}
                      className="w-full rounded-xl border border-slate-700/80 bg-slate-900 px-3 py-1.5 text-xs text-white focus:outline-hidden focus:ring-2 focus:ring-[#009fe3] leading-relaxed"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Hardware Setup
                    </label>
                    <input
                      type="text"
                      value={sec.setup}
                      onChange={(e) => {
                        const updated = [...data.rangeMaster.sections];
                        updated[idx].setup = e.target.value;
                        setData({
                          ...data,
                          rangeMaster: {
                            ...data.rangeMaster,
                            sections: updated,
                          },
                        });
                      }}
                      className="w-full rounded-xl border border-slate-700/80 bg-slate-900 px-3 py-1.5 text-xs text-white focus:outline-hidden focus:ring-2 focus:ring-[#009fe3]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Conclusion
                    </label>
                    <input
                      type="text"
                      value={sec.conclusion}
                      onChange={(e) => {
                        const updated = [...data.rangeMaster.sections];
                        updated[idx].conclusion = e.target.value;
                        setData({
                          ...data,
                          rangeMaster: {
                            ...data.rangeMaster,
                            sections: updated,
                          },
                        });
                      }}
                      className="w-full rounded-xl border border-slate-700/80 bg-slate-900 px-3 py-1.5 text-xs text-white focus:outline-hidden focus:ring-2 focus:ring-[#009fe3]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 5: FASTENERS & ENGINEERING GUIDE
          ============================================================ */}
      {activeTab === "engineeringGuide" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Magnet className="h-4 w-4 text-cyan-400" />
              <span>Decision Factors &amp; Fastener Options</span>
            </h2>
            <button
              onClick={() => handleSaveSection("engineeringGuide")}
              disabled={savingSection === "engineeringGuide"}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#009fe3] text-white hover:bg-[#008bc9] shadow-md shadow-[#009fe3]/20 transition disabled:opacity-50"
            >
              {savingSection === "engineeringGuide" ? (
                <RefreshCw className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <Save className="h-3.5 w-3.5" />
              )}
              <span>Save Guide Section</span>
            </button>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Sliders className="h-4 w-4 text-cyan-400" />
              <span>4 Decision Factors</span>
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {data.engineeringGuide.factors.map((factor, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800/90 p-4 bg-slate-950/70 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#009fe3]">
                      Factor {factor.num}
                    </span>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      value={factor.title}
                      onChange={(e) => {
                        const updated = [...data.engineeringGuide.factors];
                        updated[idx].title = e.target.value;
                        setData({
                          ...data,
                          engineeringGuide: {
                            ...data.engineeringGuide,
                            factors: updated,
                          },
                        });
                      }}
                      className="w-full rounded-xl border border-slate-700/80 bg-slate-900 px-3 py-1.5 text-xs font-bold text-white focus:outline-hidden focus:ring-2 focus:ring-[#009fe3]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Recommendation Detail
                    </label>
                    <textarea
                      rows={2}
                      value={factor.detail}
                      onChange={(e) => {
                        const updated = [...data.engineeringGuide.factors];
                        updated[idx].detail = e.target.value;
                        setData({
                          ...data,
                          engineeringGuide: {
                            ...data.engineeringGuide,
                            factors: updated,
                          },
                        });
                      }}
                      className="w-full rounded-xl border border-slate-700/80 bg-slate-900 px-3 py-1.5 text-xs text-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#009fe3] leading-relaxed"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Magnet className="h-4 w-4 text-cyan-400" />
              <span>Fastener Options (Neodymium, Safety Pin, Combo Clip)</span>
            </h3>
            <div className="grid gap-3 sm:grid-cols-3">
              {data.engineeringGuide.fasteners.map((opt, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800/90 p-4 bg-slate-950/70 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-white">
                      {opt.title}
                    </span>
                    <span className="text-[10px] font-bold text-[#009fe3] bg-[#009fe3]/10 px-2 py-0.5 rounded-full border border-[#009fe3]/30">
                      {opt.badge}
                    </span>
                  </div>
                  <textarea
                    rows={3}
                    value={opt.desc}
                    onChange={(e) => {
                      const updated = [...data.engineeringGuide.fasteners];
                      updated[idx].desc = e.target.value;
                      setData({
                        ...data,
                        engineeringGuide: {
                          ...data.engineeringGuide,
                          fasteners: updated,
                        },
                      });
                    }}
                    className="w-full rounded-xl border border-slate-700/80 bg-slate-900 px-3 py-1.5 text-xs text-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#009fe3] leading-relaxed"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 6: SECTORS & APPLICATIONS
          ============================================================ */}
      {activeTab === "applications" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Building2 className="h-4 w-4 text-cyan-400" />
              <span>Sector Applications Grid</span>
            </h2>
            <button
              onClick={() => handleSaveSection("applications")}
              disabled={savingSection === "applications"}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#009fe3] text-white hover:bg-[#008bc9] shadow-md shadow-[#009fe3]/20 transition disabled:opacity-50"
            >
              {savingSection === "applications" ? (
                <RefreshCw className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <Save className="h-3.5 w-3.5" />
              )}
              <span>Save Applications</span>
            </button>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl grid gap-4 sm:grid-cols-2">
            {data.applications.applications.map((app, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800/90 p-4 bg-slate-950/70 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-white">
                    {app.title}
                  </span>
                  <span className="text-[10px] font-bold text-[#009fe3] uppercase bg-[#009fe3]/10 px-2 py-0.5 rounded-full border border-[#009fe3]/30">
                    {app.tag}
                  </span>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    value={app.title}
                    onChange={(e) => {
                      const updated = [...data.applications.applications];
                      updated[idx].title = e.target.value;
                      setData({
                        ...data,
                        applications: {
                          ...data.applications,
                          applications: updated,
                        },
                      });
                    }}
                    className="w-full rounded-xl border border-slate-700/80 bg-slate-900 px-3 py-1.5 text-xs font-bold text-white focus:outline-hidden focus:ring-2 focus:ring-[#009fe3]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Description
                  </label>
                  <textarea
                    rows={2}
                    value={app.desc}
                    onChange={(e) => {
                      const updated = [...data.applications.applications];
                      updated[idx].desc = e.target.value;
                      setData({
                        ...data,
                        applications: {
                          ...data.applications,
                          applications: updated,
                        },
                      });
                    }}
                    className="w-full rounded-xl border border-slate-700/80 bg-slate-900 px-3 py-1.5 text-xs text-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#009fe3] leading-relaxed"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 7: WORKFLOW, DISPATCH & CLOSING CTA
          ============================================================ */}
      {activeTab === "workflowAndDispatch" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Truck className="h-4 w-4 text-cyan-400" />
              <span>Ordering Workflow, Dispatch &amp; Closing Section</span>
            </h2>
            <button
              onClick={() => handleSaveSection("workflowAndDispatch")}
              disabled={savingSection === "workflowAndDispatch"}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#009fe3] text-white hover:bg-[#008bc9] shadow-md shadow-[#009fe3]/20 transition disabled:opacity-50"
            >
              {savingSection === "workflowAndDispatch" ? (
                <RefreshCw className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <Save className="h-3.5 w-3.5" />
              )}
              <span>Save Workflow Section</span>
            </button>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Clock className="h-4 w-4 text-cyan-400" />
              <span>4-Step Ordering Workflow</span>
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {data.workflowAndDispatch.orderingSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800/90 p-4 bg-slate-950/70 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-black text-[#009fe3]">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">
                      {step.badge}
                    </span>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      value={step.title}
                      onChange={(e) => {
                        const updated = [
                          ...data.workflowAndDispatch.orderingSteps,
                        ];
                        updated[idx].title = e.target.value;
                        setData({
                          ...data,
                          workflowAndDispatch: {
                            ...data.workflowAndDispatch,
                            orderingSteps: updated,
                          },
                        });
                      }}
                      className="w-full rounded-xl border border-slate-700/80 bg-slate-900 px-2.5 py-1 text-xs font-bold text-white focus:outline-hidden focus:ring-2 focus:ring-[#009fe3]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Body
                    </label>
                    <textarea
                      rows={3}
                      value={step.body}
                      onChange={(e) => {
                        const updated = [
                          ...data.workflowAndDispatch.orderingSteps,
                        ];
                        updated[idx].body = e.target.value;
                        setData({
                          ...data,
                          workflowAndDispatch: {
                            ...data.workflowAndDispatch,
                            orderingSteps: updated,
                          },
                        });
                      }}
                      className="w-full rounded-xl border border-slate-700/80 bg-slate-900 px-2.5 py-1 text-xs text-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#009fe3] leading-relaxed"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Truck className="h-4 w-4 text-cyan-400" />
              <span>Dispatch Commitment &amp; Hub Details</span>
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  Dispatch Section Title
                </label>
                <input
                  type="text"
                  value={data.workflowAndDispatch.dispatchTitle}
                  onChange={(e) =>
                    setData({
                      ...data,
                      workflowAndDispatch: {
                        ...data.workflowAndDispatch,
                        dispatchTitle: e.target.value,
                      },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2.5 text-xs text-white focus:outline-hidden focus:ring-2 focus:ring-[#009fe3]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  Hub Tag (e.g. Guwahati Direct Hub)
                </label>
                <input
                  type="text"
                  value={data.workflowAndDispatch.dispatchHubTag}
                  onChange={(e) =>
                    setData({
                      ...data,
                      workflowAndDispatch: {
                        ...data.workflowAndDispatch,
                        dispatchHubTag: e.target.value,
                      },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2.5 text-xs text-white focus:outline-hidden focus:ring-2 focus:ring-[#009fe3]"
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-cyan-400" />
              <span>Closing Call-to-Action Banner</span>
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  CTA Headline
                </label>
                <input
                  type="text"
                  value={data.workflowAndDispatch.closingCtaTitle}
                  onChange={(e) =>
                    setData({
                      ...data,
                      workflowAndDispatch: {
                        ...data.workflowAndDispatch,
                        closingCtaTitle: e.target.value,
                      },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2.5 text-xs font-bold text-white focus:outline-hidden focus:ring-2 focus:ring-[#009fe3]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  CTA Badge
                </label>
                <input
                  type="text"
                  value={data.workflowAndDispatch.closingCtaBadge}
                  onChange={(e) =>
                    setData({
                      ...data,
                      workflowAndDispatch: {
                        ...data.workflowAndDispatch,
                        closingCtaBadge: e.target.value,
                      },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2.5 text-xs text-white focus:outline-hidden focus:ring-2 focus:ring-[#009fe3]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  CTA Lede
                </label>
                <textarea
                  rows={2}
                  value={data.workflowAndDispatch.closingCtaLede}
                  onChange={(e) =>
                    setData({
                      ...data,
                      workflowAndDispatch: {
                        ...data.workflowAndDispatch,
                        closingCtaLede: e.target.value,
                      },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2.5 text-xs text-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#009fe3] leading-relaxed"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 8: FAQS
          ============================================================ */}
      {activeTab === "faqs" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-cyan-400" />
              <span>Frequently Asked Questions ({data.faqs.faqs.length} FAQs)</span>
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  const newFaq: DynamicAcrylicBadgesFaqItem = {
                    q: "New question about acrylic badges?",
                    a: "Answer explanation for customer query.",
                  };
                  setData({
                    ...data,
                    faqs: { ...data.faqs, faqs: [...data.faqs.faqs, newFaq] },
                  });
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-[#009fe3]/10 text-[#009fe3] border border-[#009fe3]/30 hover:bg-[#009fe3]/20 transition"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add FAQ</span>
              </button>
              <button
                onClick={() => handleSaveSection("faqs")}
                disabled={savingSection === "faqs"}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#009fe3] text-white hover:bg-[#008bc9] shadow-md shadow-[#009fe3]/20 transition disabled:opacity-50"
              >
                {savingSection === "faqs" ? (
                  <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <Save className="h-3.5 w-3.5" />
                )}
                <span>Save FAQs</span>
              </button>
            </div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  FAQ Section Title
                </label>
                <input
                  type="text"
                  value={data.faqs.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      faqs: { ...data.faqs, title: e.target.value },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2 text-xs font-semibold text-white focus:outline-hidden focus:ring-2 focus:ring-[#009fe3]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  FAQ Section Lede
                </label>
                <input
                  type="text"
                  value={data.faqs.lede}
                  onChange={(e) =>
                    setData({
                      ...data,
                      faqs: { ...data.faqs, lede: e.target.value },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2 text-xs font-semibold text-white focus:outline-hidden focus:ring-2 focus:ring-[#009fe3]"
                />
              </div>
            </div>

            <div className="space-y-3 pt-2">
              {data.faqs.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800/90 p-4 bg-slate-950/70 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-300">
                      FAQ #{idx + 1}
                    </span>
                    <button
                      onClick={() => {
                        const updated = data.faqs.faqs.filter(
                          (_, i) => i !== idx
                        );
                        setData({
                          ...data,
                          faqs: { ...data.faqs, faqs: updated },
                        });
                      }}
                      className="text-rose-400 hover:text-rose-300 text-xs font-bold inline-flex items-center gap-1 transition"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      <span>Remove</span>
                    </button>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Question
                    </label>
                    <input
                      type="text"
                      value={faq.q}
                      onChange={(e) => {
                        const updated = [...data.faqs.faqs];
                        updated[idx].q = e.target.value;
                        setData({
                          ...data,
                          faqs: { ...data.faqs, faqs: updated },
                        });
                      }}
                      className="w-full rounded-xl border border-slate-700/80 bg-slate-900 px-3 py-1.5 text-xs font-bold text-white focus:outline-hidden focus:ring-2 focus:ring-[#009fe3]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Answer
                    </label>
                    <textarea
                      rows={2}
                      value={faq.a}
                      onChange={(e) => {
                        const updated = [...data.faqs.faqs];
                        updated[idx].a = e.target.value;
                        setData({
                          ...data,
                          faqs: { ...data.faqs, faqs: updated },
                        });
                      }}
                      className="w-full rounded-xl border border-slate-700/80 bg-slate-900 px-3 py-1.5 text-xs text-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#009fe3] leading-relaxed"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 9: SEO & META
          ============================================================ */}
      {activeTab === "seo" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Eye className="h-4 w-4 text-cyan-400" />
              <span>SEO &amp; OpenGraph Metadata</span>
            </h2>
            <button
              onClick={() => handleSaveSection("seo")}
              disabled={savingSection === "seo"}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#009fe3] text-white hover:bg-[#008bc9] shadow-md shadow-[#009fe3]/20 transition disabled:opacity-50"
            >
              {savingSection === "seo" ? (
                <RefreshCw className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <Save className="h-3.5 w-3.5" />
              )}
              <span>Save SEO Settings</span>
            </button>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Meta Title
              </label>
              <input
                type="text"
                value={data.seo.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    seo: { ...data.seo, title: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2.5 text-xs font-semibold text-white focus:outline-hidden focus:ring-2 focus:ring-[#009fe3]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Meta Description
              </label>
              <textarea
                rows={3}
                value={data.seo.description}
                onChange={(e) =>
                  setData({
                    ...data,
                    seo: { ...data.seo, description: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2.5 text-xs font-semibold text-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#009fe3] leading-relaxed"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Canonical URL Path
              </label>
              <input
                type="text"
                value={data.seo.path}
                onChange={(e) =>
                  setData({
                    ...data,
                    seo: { ...data.seo, path: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2.5 text-xs font-semibold text-white focus:outline-hidden focus:ring-2 focus:ring-[#009fe3]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminAcrylicBadgesPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-[60vh] items-center justify-center flex-col gap-4">
          <RefreshCw className="h-8 w-8 animate-spin text-[#009fe3]" />
          <p className="text-sm font-bold text-slate-500">Loading Dashboard...</p>
        </div>
      }
    >
      <AdminAcrylicBadgesContent />
    </Suspense>
  );
}
