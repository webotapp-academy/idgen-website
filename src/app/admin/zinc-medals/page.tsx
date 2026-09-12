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
  Flame,
  Shirt,
  Trophy,
  Activity,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import type {
  DynamicZincMedalsData,
  MedalSlide,
  MedalCatalogItem,
  MedalStackLayer,
  MasterMedalSection,
  MedalFactor,
  MedalPlatingOption,
  MedalApplicationItem,
  MedalOrderingStep,
  CtaButton,
  DynamicZincMedalsFaqItem,
} from "@/lib/dynamic-zinc-medals-types";

function AdminZincMedalsContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "hero";
  const [data, setData] = useState<DynamicZincMedalsData | null>(null);
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
      const res = await fetch("/api/admin/zinc-medals/");
      const json = await res.json();
      if (json.success && json.data) {
        setData(json.data);
      } else {
        setSaveError("Failed to load Zinc Medals data");
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

  const handleSaveSection = async (sectionName: keyof DynamicZincMedalsData) => {
    if (!data) return;
    try {
      setSavingSection(sectionName);
      setSaveSuccess(null);
      setSaveError(null);

      const res = await fetch("/api/admin/zinc-medals/", {
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

      const res = await fetch("/api/admin/zinc-medals/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });

      const json = await res.json();
      if (json.success) {
        setSaveSuccess("Entire Zinc Medals page successfully published!");
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
        "Are you sure you want to restore all Zinc Medals data to factory defaults? Any custom modifications will be reset."
      )
    ) {
      return;
    }

    try {
      setSaving(true);
      setSaveSuccess(null);
      setSaveError(null);

      const res = await fetch("/api/admin/zinc-medals/", {
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
    { id: "anatomy", label: "Medal Anatomy", icon: Layers },
    { id: "rangeMaster", label: "Master Showcase", icon: Boxes },
    { id: "engineeringGuide", label: "Specs & Finishes", icon: Flame },
    { id: "applications", label: "Applications", icon: Trophy },
    { id: "workflowAndDispatch", label: "Workflow & Dispatch", icon: Truck },
    { id: "faqs", label: "FAQs", icon: HelpCircle },
    { id: "seo", label: "SEO & Meta", icon: Eye },
  ];

  if (loading) {
    return (
      <div className="flex h-[60vh] items-center justify-center flex-col gap-4">
        <RefreshCw className="h-8 w-8 animate-spin text-[#009fe3]" />
        <p className="text-sm font-bold text-slate-400">
          Loading Zinc Medals Management...
        </p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="p-8 text-center bg-slate-900 border border-slate-800 rounded-3xl">
        <AlertCircle className="h-10 w-10 text-red-500 mx-auto mb-3" />
        <p className="text-base font-bold text-slate-200">
          Unable to load Zinc Medals dynamic data.
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
              <Award className="h-7 w-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-black uppercase tracking-wider bg-[#009fe3]/20 text-cyan-300 px-2.5 py-0.5 rounded-full border border-[#009fe3]/30">
                  Dynamic Page Editor
                </span>
                <span className="text-[10px] font-bold text-slate-400">
                  /zinc-medals/
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white">
                Custom Die-Cast Zinc Medals Management
              </h1>
              <p className="text-xs text-slate-400 mt-1 max-w-xl">
                Edit hero content, medal catalog, 3D anatomy layers, finish showcase, technical parameters, applications, dispatch workflows, FAQs, and SEO tags.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/zinc-medals/"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700/80 transition"
            >
              <ExternalLink className="h-3.5 w-3.5 text-cyan-400" />
              <span>Preview Live Page</span>
            </Link>

            <button
              onClick={handleReset}
              disabled={saving}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 border border-rose-800/60 transition disabled:opacity-50"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset Defaults</span>
            </button>

            <button
              onClick={handleSaveAll}
              disabled={saving}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-black bg-gradient-to-r from-[#009fe3] to-cyan-500 hover:from-[#008bc9] hover:to-cyan-400 text-white shadow-lg shadow-[#009fe3]/25 transition-all hover:scale-[1.02] disabled:opacity-50"
            >
              {saving ? (
                <RefreshCw className="h-4 w-4 animate-spin" />
              ) : (
                <Save className="h-4 w-4" />
              )}
              <span>Publish All Changes</span>
            </button>
          </div>
        </div>
      </div>

      {/* Status Notifications */}
      {saveSuccess && (
        <div className="flex items-center gap-2.5 bg-emerald-950/80 border border-emerald-700/80 text-emerald-200 px-4 py-3 rounded-2xl text-xs font-bold animate-fadeIn">
          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
          <span>{saveSuccess}</span>
        </div>
      )}

      {saveError && (
        <div className="flex items-center gap-2.5 bg-rose-950/80 border border-rose-700/80 text-rose-200 px-4 py-3 rounded-2xl text-xs font-bold animate-fadeIn">
          <AlertCircle className="h-4 w-4 text-rose-400 shrink-0" />
          <span>{saveError}</span>
        </div>
      )}

      {/* Horizontal Nav Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-3 border-b border-slate-800">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-extrabold whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? "bg-[#009fe3] text-white shadow-lg shadow-[#009fe3]/20 scale-[1.02]"
                  : "bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
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
                Badge Eyebrow (e.g. AWARDS &amp; RECOGNITION)
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
                Badge Subtitle Tag (e.g. 3D Die-Cast Eco Zinc Alloy)
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
                Hero Description / Paragraph
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
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2.5 text-xs font-medium text-slate-100 placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-[#009fe3] transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Primary CTA (Button Label &amp; URL)
              </label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Label"
                  value={data.hero.primaryCta.label}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: {
                        ...data.hero,
                        primaryCta: {
                          ...data.hero.primaryCta,
                          label: e.target.value,
                        },
                      },
                    })
                  }
                  className="rounded-xl border border-slate-700/80 bg-slate-950 px-3 py-2 text-xs font-medium text-slate-100"
                />
                <input
                  type="text"
                  placeholder="Href"
                  value={data.hero.primaryCta.href}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: {
                        ...data.hero,
                        primaryCta: {
                          ...data.hero.primaryCta,
                          href: e.target.value,
                        },
                      },
                    })
                  }
                  className="rounded-xl border border-slate-700/80 bg-slate-950 px-3 py-2 text-xs font-medium text-slate-100"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Secondary CTA (Button Label &amp; URL)
              </label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Label"
                  value={data.hero.secondaryCta.label}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: {
                        ...data.hero,
                        secondaryCta: {
                          ...data.hero.secondaryCta,
                          label: e.target.value,
                        },
                      },
                    })
                  }
                  className="rounded-xl border border-slate-700/80 bg-slate-950 px-3 py-2 text-xs font-medium text-slate-100"
                />
                <input
                  type="text"
                  placeholder="Href"
                  value={data.hero.secondaryCta.href}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: {
                        ...data.hero,
                        secondaryCta: {
                          ...data.hero.secondaryCta,
                          href: e.target.value,
                        },
                      },
                    })
                  }
                  className="rounded-xl border border-slate-700/80 bg-slate-950 px-3 py-2 text-xs font-medium text-slate-100"
                />
              </div>
            </div>
          </div>

          {/* Feature Specs Strip */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <h3 className="text-xs font-black uppercase text-slate-300 tracking-wider">
              Hero 4-Item Spec Strip
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {data.hero.specStrip.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800 bg-slate-950 p-3.5 space-y-2"
                >
                  <span className="text-[10px] font-bold text-cyan-400 uppercase">
                    Spec #{idx + 1}
                  </span>
                  <input
                    type="text"
                    value={item.title}
                    placeholder="Title"
                    onChange={(e) => {
                      const updated = [...data.hero.specStrip];
                      updated[idx].title = e.target.value;
                      setData({
                        ...data,
                        hero: { ...data.hero, specStrip: updated },
                      });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                  />
                  <input
                    type="text"
                    value={item.desc}
                    placeholder="Description"
                    onChange={(e) => {
                      const updated = [...data.hero.specStrip];
                      updated[idx].desc = e.target.value;
                      setData({
                        ...data,
                        hero: { ...data.hero, specStrip: updated },
                      });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Hero Slider Images */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-black text-white">
                  Hero Showcase Carousel Slides
                </h3>
                <p className="text-xs text-slate-400">
                  Manage the 5 rotating slides with custom badges and photography.
                </p>
              </div>
              <button
                onClick={() => {
                  const newSlide: MedalSlide = {
                    id: `slide-${Date.now()}`,
                    imageSrc: "/images/product-zinc-medals.jpg",
                    alt: "New Medal Slide",
                    title: "New Medal Presentation",
                    category: "Championship",
                    topBadge: "3D Die-Cast",
                    specPill: "Antique Finish",
                    bottomSpec: "Eco Zinc Alloy • High-Relief",
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
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#009fe3]/20 hover:bg-[#009fe3]/30 text-cyan-300 border border-[#009fe3]/40 transition"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add Slide</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.hero.slides.map((slide, idx) => (
                <div
                  key={slide.id}
                  className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-3 relative group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase text-cyan-400">
                      Slide {idx + 1}
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
                      className="text-slate-500 hover:text-rose-400 p-1"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
                    <Image
                      src={slide.imageSrc}
                      alt={slide.title}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                    <label className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center cursor-pointer transition-opacity text-xs font-bold text-white">
                      <UploadCloud className="h-6 w-6 mb-1 text-cyan-400" />
                      <span>Replace Photo</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            handleFileUpload(
                              file,
                              (url) => {
                                const updated = [...data.hero.slides];
                                updated[idx].imageSrc = url;
                                setData({
                                  ...data,
                                  hero: { ...data.hero, slides: updated },
                                });
                              },
                              `hero-slide-${idx}`
                            );
                          }
                        }}
                      />
                    </label>
                  </div>

                  <input
                    type="text"
                    value={slide.imageSrc}
                    placeholder="Image URL"
                    onChange={(e) => {
                      const updated = [...data.hero.slides];
                      updated[idx].imageSrc = e.target.value;
                      setData({
                        ...data,
                        hero: { ...data.hero, slides: updated },
                      });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                  />

                  <input
                    type="text"
                    value={slide.title}
                    placeholder="Slide Title"
                    onChange={(e) => {
                      const updated = [...data.hero.slides];
                      updated[idx].title = e.target.value;
                      setData({
                        ...data,
                        hero: { ...data.hero, slides: updated },
                      });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs font-bold text-white"
                  />

                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={slide.topBadge}
                      placeholder="Top Badge"
                      onChange={(e) => {
                        const updated = [...data.hero.slides];
                        updated[idx].topBadge = e.target.value;
                        setData({
                          ...data,
                          hero: { ...data.hero, slides: updated },
                        });
                      }}
                      className="rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-[11px] text-white"
                    />
                    <input
                      type="text"
                      value={slide.specPill}
                      placeholder="Spec Pill"
                      onChange={(e) => {
                        const updated = [...data.hero.slides];
                        updated[idx].specPill = e.target.value;
                        setData({
                          ...data,
                          hero: { ...data.hero, slides: updated },
                        });
                      }}
                      className="rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-[11px] text-white"
                    />
                  </div>

                  <input
                    type="text"
                    value={slide.bottomSpec}
                    placeholder="Bottom Spec String"
                    onChange={(e) => {
                      const updated = [...data.hero.slides];
                      updated[idx].bottomSpec = e.target.value;
                      setData({
                        ...data,
                        hero: { ...data.hero, slides: updated },
                      });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-[11px] text-white"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 2: QUICK SELECTION & CATALOG MATRIX
          ============================================================ */}
      {activeTab === "quickSelection" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Sliders className="h-4 w-4 text-cyan-400" />
              <span>Medal Models Catalog &amp; Selection Matrix</span>
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
              <span>Save Catalog</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Catalog Badge Eyebrow
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
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2 text-xs font-medium text-slate-100"
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
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2 text-xs font-medium text-slate-100"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Section Lede Description
              </label>
              <textarea
                rows={2}
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
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2 text-xs font-medium text-slate-100"
              />
            </div>
          </div>

          {/* Catalog Items */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white">
                Catalog Specimen Models ({data.quickSelection.catalog.length})
              </h3>
              <button
                onClick={() => {
                  const newItem: MedalCatalogItem = {
                    id: `znc-new-${Date.now()}`,
                    code: "ZNC-07",
                    title: "New Custom Medal Specimen",
                    category: "championship",
                    material: "Eco-Friendly Zinc Alloy",
                    finish: "Antique Gold Electroplate",
                    ribbon: "25mm Sublimated Satin",
                    diameter: "65mm (4.0mm thickness)",
                    img: "/images/Zinc Medal/IMG_20260213_100040.jpg.jpeg",
                    badge: "Custom Edition",
                    description: "High-relief 3D sculpted championship award.",
                    idealFor: ["Tournaments", "Championships"],
                  };
                  setData({
                    ...data,
                    quickSelection: {
                      ...data.quickSelection,
                      catalog: [...data.quickSelection.catalog, newItem],
                    },
                  });
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#009fe3]/20 hover:bg-[#009fe3]/30 text-cyan-300 border border-[#009fe3]/40 transition"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add Medal Model</span>
              </button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {data.quickSelection.catalog.map((item, idx) => (
                <div
                  key={item.id}
                  className="rounded-3xl border border-slate-800 bg-slate-900/90 p-5 space-y-3.5 relative group shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-black text-cyan-400 bg-slate-950 px-2 py-0.5 rounded-md border border-slate-800">
                      {item.code}
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
                      className="text-slate-500 hover:text-rose-400 p-1"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                    <label className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center cursor-pointer transition-opacity text-xs font-bold text-white">
                      <UploadCloud className="h-6 w-6 mb-1 text-cyan-400" />
                      <span>Upload Medal Photo</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            handleFileUpload(
                              file,
                              (url) => {
                                const updated = [
                                  ...data.quickSelection.catalog,
                                ];
                                updated[idx].img = url;
                                setData({
                                  ...data,
                                  quickSelection: {
                                    ...data.quickSelection,
                                    catalog: updated,
                                  },
                                });
                              },
                              `catalog-${idx}`
                            );
                          }
                        }}
                      />
                    </label>
                  </div>

                  <input
                    type="text"
                    value={item.img}
                    placeholder="Image Path"
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
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-[11px] text-slate-300"
                  />

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 block mb-0.5">
                        Code
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
                        className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-white font-bold"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 block mb-0.5">
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
                        className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2 py-1 text-xs text-white"
                      >
                        <option value="championship">Championship</option>
                        <option value="institutional">Institutional</option>
                        <option value="cutout">Cutout</option>
                        <option value="corporate">Corporate</option>
                        <option value="marathon">Marathon</option>
                        <option value="ribbon">Ribbon</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-400 block mb-0.5">
                      Model Title
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
                      className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-white font-bold"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-400 block mb-0.5">
                      Finish / Plating
                    </label>
                    <input
                      type="text"
                      value={item.finish}
                      onChange={(e) => {
                        const updated = [...data.quickSelection.catalog];
                        updated[idx].finish = e.target.value;
                        setData({
                          ...data,
                          quickSelection: {
                            ...data.quickSelection,
                            catalog: updated,
                          },
                        });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-400 block mb-0.5">
                      Diameter &amp; Thickness
                    </label>
                    <input
                      type="text"
                      value={item.diameter}
                      onChange={(e) => {
                        const updated = [...data.quickSelection.catalog];
                        updated[idx].diameter = e.target.value;
                        setData({
                          ...data,
                          quickSelection: {
                            ...data.quickSelection,
                            catalog: updated,
                          },
                        });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-400 block mb-0.5">
                      Description
                    </label>
                    <textarea
                      rows={2}
                      value={item.description}
                      onChange={(e) => {
                        const updated = [...data.quickSelection.catalog];
                        updated[idx].description = e.target.value;
                        setData({
                          ...data,
                          quickSelection: {
                            ...data.quickSelection,
                            catalog: updated,
                          },
                        });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 3: MEDAL ANATOMY ECOSYSTEM
          ============================================================ */}
      {activeTab === "anatomy" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Layers className="h-4 w-4 text-cyan-400" />
              <span>Medal Anatomy &amp; Manufacturing Ecosystem</span>
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
              <span>Save Anatomy</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Anatomy Badge
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
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2 text-xs font-medium text-slate-100"
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
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2 text-xs font-medium text-slate-100"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Section Lede
              </label>
              <textarea
                rows={2}
                value={data.anatomy.lede}
                onChange={(e) =>
                  setData({
                    ...data,
                    anatomy: { ...data.anatomy, lede: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2 text-xs font-medium text-slate-100"
              />
            </div>
          </div>

          {/* 4 Stack Layers */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white">
              Anatomy 4 Core Layers
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {data.anatomy.layers.map((layer, idx) => (
                <div
                  key={layer.step}
                  className="rounded-3xl border border-slate-800 bg-slate-900/90 p-5 space-y-3 relative group shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-black text-cyan-400 bg-slate-950 px-2 py-0.5 rounded-md border border-slate-800">
                      Layer {layer.step}
                    </span>
                    <input
                      type="text"
                      value={layer.badge}
                      placeholder="Badge"
                      onChange={(e) => {
                        const updated = [...data.anatomy.layers];
                        updated[idx].badge = e.target.value;
                        setData({
                          ...data,
                          anatomy: { ...data.anatomy, layers: updated },
                        });
                      }}
                      className="rounded-lg border border-slate-800 bg-slate-950 px-2 py-1 text-[11px] text-emerald-400 font-bold"
                    />
                  </div>

                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                    <Image
                      src={layer.img}
                      alt={layer.title}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                    <label className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center cursor-pointer transition-opacity text-xs font-bold text-white">
                      <UploadCloud className="h-6 w-6 mb-1 text-cyan-400" />
                      <span>Upload Layer Photo</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            handleFileUpload(
                              file,
                              (url) => {
                                const updated = [...data.anatomy.layers];
                                updated[idx].img = url;
                                setData({
                                  ...data,
                                  anatomy: {
                                    ...data.anatomy,
                                    layers: updated,
                                  },
                                });
                              },
                              `anatomy-${idx}`
                            );
                          }
                        }}
                      />
                    </label>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-400 block mb-0.5">
                      Layer Title
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
                      className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-white font-bold"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-400 block mb-0.5">
                      Substrate &amp; Material
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
                      className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-400 block mb-0.5">
                      Functional Performance Benefit
                    </label>
                    <textarea
                      rows={2}
                      value={layer.benefit}
                      onChange={(e) => {
                        const updated = [...data.anatomy.layers];
                        updated[idx].benefit = e.target.value;
                        setData({
                          ...data,
                          anatomy: { ...data.anatomy, layers: updated },
                        });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 4: MASTER SHOWCASE (RANGE MASTER)
          ============================================================ */}
      {activeTab === "rangeMaster" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Boxes className="h-4 w-4 text-cyan-400" />
              <span>Master Styles &amp; Finishes Showcase</span>
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
              <span>Save Showcase</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Showcase Badge
              </label>
              <input
                type="text"
                value={data.rangeMaster.badge}
                onChange={(e) =>
                  setData({
                    ...data,
                    rangeMaster: {
                      ...data.rangeMaster,
                      badge: e.target.value,
                    },
                  })
                }
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2 text-xs font-medium text-slate-100"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Section Title
              </label>
              <input
                type="text"
                value={data.rangeMaster.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    rangeMaster: {
                      ...data.rangeMaster,
                      title: e.target.value,
                    },
                  })
                }
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2 text-xs font-medium text-slate-100"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Section Lede
              </label>
              <textarea
                rows={2}
                value={data.rangeMaster.lede}
                onChange={(e) =>
                  setData({
                    ...data,
                    rangeMaster: {
                      ...data.rangeMaster,
                      lede: e.target.value,
                    },
                  })
                }
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2 text-xs font-medium text-slate-100"
              />
            </div>
          </div>

          <div className="space-y-6">
            {data.rangeMaster.sections.map((sec, idx) => (
              <div
                key={sec.code}
                className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 space-y-4 shadow-xl"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-black text-cyan-400 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                      {sec.code}
                    </span>
                    <span className="text-xs font-bold text-slate-400">
                      {sec.badge}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      const updated = data.rangeMaster.sections.filter(
                        (_, i) => i !== idx
                      );
                      setData({
                        ...data,
                        rangeMaster: {
                          ...data.rangeMaster,
                          sections: updated,
                        },
                      });
                    }}
                    className="text-slate-500 hover:text-rose-400 p-1"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                <div className="grid gap-4 sm:grid-cols-12 items-center">
                  <div className="sm:col-span-4 relative aspect-square rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 group">
                    <Image
                      src={sec.image}
                      alt={sec.alt}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                    <label className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center cursor-pointer transition-opacity text-xs font-bold text-white">
                      <UploadCloud className="h-6 w-6 mb-1 text-cyan-400" />
                      <span>Upload Photo</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            handleFileUpload(
                              file,
                              (url) => {
                                const updated = [
                                  ...data.rangeMaster.sections,
                                ];
                                updated[idx].image = url;
                                setData({
                                  ...data,
                                  rangeMaster: {
                                    ...data.rangeMaster,
                                    sections: updated,
                                  },
                                });
                              },
                              `showcase-${idx}`
                            );
                          }
                        }}
                      />
                    </label>
                  </div>

                  <div className="sm:col-span-8 space-y-3">
                    <input
                      type="text"
                      value={sec.title}
                      placeholder="Title"
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
                      className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm font-bold text-white"
                    />

                    <input
                      type="text"
                      value={sec.tagline}
                      placeholder="Tagline"
                      onChange={(e) => {
                        const updated = [...data.rangeMaster.sections];
                        updated[idx].tagline = e.target.value;
                        setData({
                          ...data,
                          rangeMaster: {
                            ...data.rangeMaster,
                            sections: updated,
                          },
                        });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-slate-300"
                    />

                    <textarea
                      rows={2}
                      value={sec.description}
                      placeholder="Description"
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
                      className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-white"
                    />

                    <input
                      type="text"
                      value={sec.setup}
                      placeholder="Manufacturing Setup"
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
                      className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-cyan-300 font-medium"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 5: ENGINEERING GUIDE & PLATING OPTIONS
          ============================================================ */}
      {activeTab === "engineeringGuide" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Flame className="h-4 w-4 text-cyan-400" />
              <span>Technical Parameters &amp; Plating Finishes</span>
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
              <span>Save Engineering Guide</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Factors Badge
              </label>
              <input
                type="text"
                value={data.engineeringGuide.badge}
                onChange={(e) =>
                  setData({
                    ...data,
                    engineeringGuide: {
                      ...data.engineeringGuide,
                      badge: e.target.value,
                    },
                  })
                }
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2 text-xs font-medium text-slate-100"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Section Title
              </label>
              <input
                type="text"
                value={data.engineeringGuide.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    engineeringGuide: {
                      ...data.engineeringGuide,
                      title: e.target.value,
                    },
                  })
                }
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2 text-xs font-medium text-slate-100"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Description / Lede
              </label>
              <textarea
                rows={2}
                value={data.engineeringGuide.lede}
                onChange={(e) =>
                  setData({
                    ...data,
                    engineeringGuide: {
                      ...data.engineeringGuide,
                      lede: e.target.value,
                    },
                  })
                }
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2 text-xs font-medium text-slate-100"
              />
            </div>
          </div>

          {/* 4 Decision Factors */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white">
              4 Decision Factors
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {data.engineeringGuide.factors.map((f, idx) => (
                <div
                  key={f.num}
                  className="rounded-2xl border border-slate-800 bg-slate-900/90 p-4 space-y-2.5 shadow-md"
                >
                  <span className="font-mono text-xs font-black text-cyan-400">
                    Factor {f.num}
                  </span>
                  <input
                    type="text"
                    value={f.title}
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
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-white font-bold"
                  />
                  <input
                    type="text"
                    value={f.desc}
                    onChange={(e) => {
                      const updated = [...data.engineeringGuide.factors];
                      updated[idx].desc = e.target.value;
                      setData({
                        ...data,
                        engineeringGuide: {
                          ...data.engineeringGuide,
                          factors: updated,
                        },
                      });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-[11px] text-slate-300"
                  />
                  <textarea
                    rows={2}
                    value={f.detail}
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
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-[11px] text-slate-400"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Plating Options */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white">
              Medal Electroplating &amp; Patina Options (Gold, Silver, Bronze)
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {data.engineeringGuide.fasteners.map((opt, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-slate-800 bg-slate-900/90 p-5 space-y-3 shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-cyan-400">
                      Option #{idx + 1}
                    </span>
                    <input
                      type="text"
                      value={opt.badge}
                      placeholder="Badge"
                      onChange={(e) => {
                        const updated = [
                          ...data.engineeringGuide.fasteners,
                        ];
                        updated[idx].badge = e.target.value;
                        setData({
                          ...data,
                          engineeringGuide: {
                            ...data.engineeringGuide,
                            fasteners: updated,
                          },
                        });
                      }}
                      className="rounded-lg border border-slate-800 bg-slate-950 px-2 py-0.5 text-[10px] text-emerald-400 font-bold"
                    />
                  </div>

                  <input
                    type="text"
                    value={opt.title}
                    onChange={(e) => {
                      const updated = [
                        ...data.engineeringGuide.fasteners,
                      ];
                      updated[idx].title = e.target.value;
                      setData({
                        ...data,
                        engineeringGuide: {
                          ...data.engineeringGuide,
                          fasteners: updated,
                        },
                      });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-white font-bold"
                  />

                  <textarea
                    rows={2}
                    value={opt.desc}
                    onChange={(e) => {
                      const updated = [
                        ...data.engineeringGuide.fasteners,
                      ];
                      updated[idx].desc = e.target.value;
                      setData({
                        ...data,
                        engineeringGuide: {
                          ...data.engineeringGuide,
                          fasteners: updated,
                        },
                      });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-slate-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 6: APPLICATIONS GRID
          ============================================================ */}
      {activeTab === "applications" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Trophy className="h-4 w-4 text-cyan-400" />
              <span>Event Applications Across Tournaments</span>
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

          <div className="grid gap-4 sm:grid-cols-2 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Badge
              </label>
              <input
                type="text"
                value={data.applications.badge}
                onChange={(e) =>
                  setData({
                    ...data,
                    applications: {
                      ...data.applications,
                      badge: e.target.value,
                    },
                  })
                }
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2 text-xs font-medium text-slate-100"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Title
              </label>
              <input
                type="text"
                value={data.applications.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    applications: {
                      ...data.applications,
                      title: e.target.value,
                    },
                  })
                }
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2 text-xs font-medium text-slate-100"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Description / Lede
              </label>
              <textarea
                rows={2}
                value={data.applications.lede}
                onChange={(e) =>
                  setData({
                    ...data,
                    applications: {
                      ...data.applications,
                      lede: e.target.value,
                    },
                  })
                }
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2 text-xs font-medium text-slate-100"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white">
                Application Categories ({data.applications.applications.length})
              </h3>
              <button
                onClick={() => {
                  const newApp: MedalApplicationItem = {
                    title: "New Sector Application",
                    desc: "Custom die-cast medals for awards.",
                    iconName: "Trophy",
                    gradient: "from-sky-500/10 via-blue-500/5 to-transparent",
                    accentColor: "text-[#009fe3]",
                    tag: "Custom",
                  };
                  setData({
                    ...data,
                    applications: {
                      ...data.applications,
                      applications: [
                        ...data.applications.applications,
                        newApp,
                      ],
                    },
                  });
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#009fe3]/20 hover:bg-[#009fe3]/30 text-cyan-300 border border-[#009fe3]/40 transition"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add Application</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.applications.applications.map((app, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-slate-800 bg-slate-900/90 p-5 space-y-3 shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <input
                      type="text"
                      value={app.tag}
                      placeholder="Tag"
                      onChange={(e) => {
                        const updated = [...data.applications.applications];
                        updated[idx].tag = e.target.value;
                        setData({
                          ...data,
                          applications: {
                            ...data.applications,
                            applications: updated,
                          },
                        });
                      }}
                      className="rounded-md border border-slate-800 bg-slate-950 px-2 py-0.5 text-[10px] text-cyan-300 font-bold uppercase"
                    />
                    <button
                      onClick={() => {
                        const updated =
                          data.applications.applications.filter(
                            (_, i) => i !== idx
                          );
                        setData({
                          ...data,
                          applications: {
                            ...data.applications,
                            applications: updated,
                          },
                        });
                      }}
                      className="text-slate-500 hover:text-rose-400 p-1"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <input
                    type="text"
                    value={app.title}
                    placeholder="Title"
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
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-white font-bold"
                  />

                  <textarea
                    rows={2}
                    value={app.desc}
                    placeholder="Description"
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
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-slate-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 7: WORKFLOW & REGIONAL DISPATCH
          ============================================================ */}
      {activeTab === "workflowAndDispatch" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Truck className="h-4 w-4 text-cyan-400" />
              <span>Ordering Workflow, Packaging &amp; Dispatch</span>
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
              <span>Save Workflow</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Workflow Badge
              </label>
              <input
                type="text"
                value={data.workflowAndDispatch.workflowBadge}
                onChange={(e) =>
                  setData({
                    ...data,
                    workflowAndDispatch: {
                      ...data.workflowAndDispatch,
                      workflowBadge: e.target.value,
                    },
                  })
                }
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2 text-xs font-medium text-slate-100"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Workflow Title
              </label>
              <input
                type="text"
                value={data.workflowAndDispatch.workflowTitle}
                onChange={(e) =>
                  setData({
                    ...data,
                    workflowAndDispatch: {
                      ...data.workflowAndDispatch,
                      workflowTitle: e.target.value,
                    },
                  })
                }
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2 text-xs font-medium text-slate-100"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Workflow Lede
              </label>
              <textarea
                rows={2}
                value={data.workflowAndDispatch.workflowLede}
                onChange={(e) =>
                  setData({
                    ...data,
                    workflowAndDispatch: {
                      ...data.workflowAndDispatch,
                      workflowLede: e.target.value,
                    },
                  })
                }
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2 text-xs font-medium text-slate-100"
              />
            </div>
          </div>

          {/* 4 Steps */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white">4 Ordering Steps</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {data.workflowAndDispatch.orderingSteps.map((step, idx) => (
                <div
                  key={step.num}
                  className="rounded-2xl border border-slate-800 bg-slate-900/90 p-4 space-y-2.5 shadow-md"
                >
                  <span className="font-mono text-xs font-black text-cyan-400">
                    Step {step.num}
                  </span>
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
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-white font-bold"
                  />
                  <textarea
                    rows={2}
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
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-[11px] text-slate-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Closing CTA Banner */}
          <div className="grid gap-4 sm:grid-cols-2 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <div className="sm:col-span-2">
              <h3 className="text-sm font-black text-white">
                Closing Call-To-Action Banner
              </h3>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Banner Eyebrow
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
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2 text-xs font-medium text-slate-100"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Banner Headline
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
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2 text-xs font-medium text-slate-100"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Banner Subtitle
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
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2 text-xs font-medium text-slate-100"
              />
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
              <span>Frequently Asked Questions</span>
            </h2>
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

          <div className="grid gap-4 sm:grid-cols-2 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Eyebrow
              </label>
              <input
                type="text"
                value={data.faqs.eyebrow}
                onChange={(e) =>
                  setData({
                    ...data,
                    faqs: { ...data.faqs, eyebrow: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2 text-xs font-medium text-slate-100"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Title
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
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2 text-xs font-medium text-slate-100"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Lede
              </label>
              <textarea
                rows={2}
                value={data.faqs.lede}
                onChange={(e) =>
                  setData({
                    ...data,
                    faqs: { ...data.faqs, lede: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2 text-xs font-medium text-slate-100"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white">
                Questions &amp; Answers ({data.faqs.faqs.length})
              </h3>
              <button
                onClick={() => {
                  const newFaq: DynamicZincMedalsFaqItem = {
                    q: "New question?",
                    a: "Answer to the new question.",
                  };
                  setData({
                    ...data,
                    faqs: { ...data.faqs, faqs: [...data.faqs.faqs, newFaq] },
                  });
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#009fe3]/20 hover:bg-[#009fe3]/30 text-cyan-300 border border-[#009fe3]/40 transition"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add FAQ</span>
              </button>
            </div>

            <div className="space-y-3">
              {data.faqs.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800 bg-slate-900/90 p-4 space-y-2 shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-cyan-400">
                      Q#{idx + 1}
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
                      className="text-slate-500 hover:text-rose-400 p-1"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <input
                    type="text"
                    value={faq.q}
                    placeholder="Question"
                    onChange={(e) => {
                      const updated = [...data.faqs.faqs];
                      updated[idx].q = e.target.value;
                      setData({
                        ...data,
                        faqs: { ...data.faqs, faqs: updated },
                      });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs font-bold text-white"
                  />
                  <textarea
                    rows={2}
                    value={faq.a}
                    placeholder="Answer"
                    onChange={(e) => {
                      const updated = [...data.faqs.faqs];
                      updated[idx].a = e.target.value;
                      setData({
                        ...data,
                        faqs: { ...data.faqs, faqs: updated },
                      });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-slate-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 9: SEO & METADATA
          ============================================================ */}
      {activeTab === "seo" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Eye className="h-4 w-4 text-cyan-400" />
              <span>SEO Tags &amp; Search Engine Metadata</span>
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

          <div className="grid gap-4 sm:grid-cols-2 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <div className="sm:col-span-2">
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
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2.5 text-xs font-medium text-slate-100"
              />
            </div>

            <div className="sm:col-span-2">
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
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2.5 text-xs font-medium text-slate-100"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Canonical Path
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
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-3.5 py-2.5 text-xs font-medium text-slate-100"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminZincMedalsPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-[60vh] items-center justify-center flex-col gap-4">
          <RefreshCw className="h-8 w-8 animate-spin text-[#009fe3]" />
          <p className="text-sm font-bold text-slate-400">
            Loading Zinc Medals Admin...
          </p>
        </div>
      }
    >
      <AdminZincMedalsContent />
    </Suspense>
  );
}
