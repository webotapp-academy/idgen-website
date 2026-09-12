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
  CreditCard,
  Clock,
  Layers,
  Flame,
  Radio,
  Box,
  GraduationCap,
  Briefcase,
  Hospital,
} from "lucide-react";
import type {
  DynamicPvcCardsData,
  PvcSlide,
  PvcCatalogItem,
  PvcStackLayer,
  MasterPvcSection,
  PvcFactor,
  PvcFormulationOption,
  PvcApplicationItem,
  PvcOrderingStep,
  CtaButton,
  DynamicPvcCardsFaqItem,
} from "@/lib/dynamic-pvc-cards-types";

function AdminPvcCardsContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "hero";
  const [data, setData] = useState<DynamicPvcCardsData | null>(null);
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
      const res = await fetch("/api/admin/pvc-cards/");
      const json = await res.json();
      if (json.success && json.data) {
        setData(json.data);
      } else {
        setSaveError("Failed to load PVC Cards data");
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

  const handleSaveSection = async (sectionKey: keyof DynamicPvcCardsData) => {
    if (!data) return;
    try {
      setSavingSection(sectionKey);
      const res = await fetch("/api/admin/pvc-cards/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "save-section",
          section: sectionKey,
          data: data[sectionKey],
        }),
      });

      const json = await res.json();
      if (json.success) {
        setSaveSuccess(`Section "${sectionKey}" saved successfully!`);
        setTimeout(() => setSaveSuccess(null), 3000);
      } else {
        setSaveError(json.error || `Failed to save section ${sectionKey}`);
        setTimeout(() => setSaveError(null), 4000);
      }
    } catch (e: any) {
      setSaveError(e.message || "Error saving section");
      setTimeout(() => setSaveError(null), 4000);
    } finally {
      setSavingSection(null);
    }
  };

  const handleSaveAll = async () => {
    if (!data) return;
    try {
      setSaving(true);
      const res = await fetch("/api/admin/pvc-cards/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "save-all",
          data,
        }),
      });

      const json = await res.json();
      if (json.success) {
        setSaveSuccess("Entire PVC Cards page saved successfully!");
        setTimeout(() => setSaveSuccess(null), 3500);
      } else {
        setSaveError(json.error || "Failed to save data");
        setTimeout(() => setSaveError(null), 4000);
      }
    } catch (e: any) {
      setSaveError(e.message || "Error saving data");
      setTimeout(() => setSaveError(null), 4000);
    } finally {
      setSaving(false);
    }
  };

  const handleReset = async () => {
    if (!confirm("Are you sure you want to reset all PVC Cards content to factory defaults?")) {
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("/api/admin/pvc-cards/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "reset" }),
      });
      const json = await res.json();
      if (json.success) {
        setData(json.data);
        setSaveSuccess("Reset to default seed data successfully!");
        setTimeout(() => setSaveSuccess(null), 3500);
      } else {
        setSaveError(json.error || "Failed to reset");
      }
    } catch (e: any) {
      setSaveError(e.message || "Error resetting");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center p-8 text-center text-slate-400">
        <RefreshCw className="h-8 w-8 animate-spin text-[#009fe3] mb-4" />
        <p className="text-sm font-semibold">Loading PVC Cards page configurations...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center p-8 text-center text-rose-400">
        <AlertCircle className="h-8 w-8 mb-4" />
        <p className="text-sm font-semibold">{saveError || "Could not load data."}</p>
        <button
          onClick={fetchPageData}
          className="mt-4 px-4 py-2 bg-slate-800 text-white rounded-xl text-xs font-bold hover:bg-slate-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  const tabs = [
    { id: "hero", label: "Hero & Carousel", icon: Sparkles },
    { id: "quickSelection", label: "Selection Matrix", icon: Boxes },
    { id: "anatomy", label: "Anatomy & Layers", icon: Layers },
    { id: "rangeMaster", label: "Range Master", icon: CreditCard },
    { id: "engineeringGuide", label: "Engineering Guide", icon: Sliders },
    { id: "applications", label: "Applications", icon: Building2 },
    { id: "workflowAndDispatch", label: "Workflow & Dispatch", icon: Truck },
    { id: "faqs", label: "FAQs", icon: HelpCircle },
    { id: "seo", label: "SEO & Meta", icon: Eye },
  ];

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-3xl bg-slate-900/90 border border-slate-800 p-6 shadow-xl backdrop-blur-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#009fe3] animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-widest text-[#009fe3]">
              Dynamic Substrates & Smart Credentials
            </span>
          </div>
          <h1 className="text-2xl font-black text-white sm:text-3xl tracking-tight">
            PVC Cards Management
          </h1>
          <p className="text-xs text-slate-400 max-w-xl">
            Edit CR80 30-mil virgin PVC core specifications, RFID chip formats (Mifare 13.56MHz & TK4100 125kHz), magnetic stripes, layers, and dispatch flows in real time.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <Link
            href="/pvc-cards/"
            target="_blank"
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-xs font-bold text-slate-300 transition hover:bg-slate-700 hover:text-white"
          >
            <ExternalLink className="h-4 w-4" />
            <span>View Live Page</span>
          </Link>
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-2.5 text-xs font-bold text-rose-300 transition hover:bg-rose-500/20"
            title="Revert all changes to initial defaults"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Factory Reset</span>
          </button>
          <button
            onClick={handleSaveAll}
            disabled={saving}
            className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3] px-5 py-2.5 text-xs font-black text-white shadow-lg shadow-[#009fe3]/20 transition hover:bg-[#008bc9] disabled:opacity-50"
          >
            {saving ? (
              <RefreshCw className="h-4 w-4 animate-spin" />
            ) : (
              <Save className="h-4 w-4" />
            )}
            <span>{saving ? "Saving All..." : "Save Whole Page"}</span>
          </button>
        </div>
      </div>

      {/* Notifications */}
      {saveSuccess && (
        <div className="flex items-center gap-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-4 text-xs font-bold text-emerald-300 animate-fadeIn">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
          <span>{saveSuccess}</span>
        </div>
      )}
      {saveError && (
        <div className="flex items-center gap-3 rounded-2xl bg-rose-500/10 border border-rose-500/30 p-4 text-xs font-bold text-rose-300 animate-fadeIn">
          <AlertCircle className="h-5 w-5 shrink-0 text-rose-400" />
          <span>{saveError}</span>
        </div>
      )}

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 rounded-2xl bg-slate-900/60 p-2 border border-slate-800">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-black transition-all ${
                isActive
                  ? "bg-[#009fe3] text-white shadow-md shadow-[#009fe3]/25 scale-[1.02]"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ─────────────────────────────────────────────────────────────
          TAB 1: HERO & CAROUSEL
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "hero" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-lg font-black text-white">Hero Configuration</h2>
                <p className="text-xs text-slate-400">Headlines, badges, specs, and trust points</p>
              </div>
              <button
                onClick={() => handleSaveSection("hero")}
                disabled={savingSection === "hero"}
                className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 px-4 py-2 text-xs font-extrabold text-white border border-slate-700 transition"
              >
                {savingSection === "hero" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                <span>Save Hero</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Badge Title</label>
                <input
                  type="text"
                  value={data.hero.badge}
                  onChange={(e) => setData({ ...data, hero: { ...data.hero, badge: e.target.value } })}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Badge Subtitle</label>
                <input
                  type="text"
                  value={data.hero.badgeSub}
                  onChange={(e) => setData({ ...data, hero: { ...data.hero, badgeSub: e.target.value } })}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Main Heading</label>
                <input
                  type="text"
                  value={data.hero.title}
                  onChange={(e) => setData({ ...data, hero: { ...data.hero, title: e.target.value } })}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Gradient Highlight</label>
                <input
                  type="text"
                  value={data.hero.highlight}
                  onChange={(e) => setData({ ...data, hero: { ...data.hero, highlight: e.target.value } })}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-300 block mb-1">Description / Subtitle</label>
                <textarea
                  rows={3}
                  value={data.hero.description}
                  onChange={(e) => setData({ ...data, hero: { ...data.hero, description: e.target.value } })}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs font-semibold text-white focus:border-[#009fe3] focus:outline-hidden"
                />
              </div>
            </div>

            {/* Spec Strip Items */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <label className="text-xs font-bold text-slate-300 block">Feature Spec Strip (4 Blocks)</label>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {data.hero.specStrip.map((item, idx) => (
                  <div key={idx} className="rounded-2xl border border-slate-800 bg-slate-950 p-3.5 space-y-2">
                    <span className="text-[10px] font-black uppercase text-[#009fe3]">Block {idx + 1}</span>
                    <input
                      type="text"
                      placeholder="Title"
                      value={item.title}
                      onChange={(e) => {
                        const next = [...data.hero.specStrip];
                        next[idx].title = e.target.value;
                        setData({ ...data, hero: { ...data.hero, specStrip: next } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs font-bold text-white"
                    />
                    <input
                      type="text"
                      placeholder="Description"
                      value={item.desc}
                      onChange={(e) => {
                        const next = [...data.hero.specStrip];
                        next[idx].desc = e.target.value;
                        setData({ ...data, hero: { ...data.hero, specStrip: next } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-slate-300"
                    />
                    <input
                      type="text"
                      placeholder="Icon Name (CreditCard, Layers, Sparkles, Truck)"
                      value={item.iconName}
                      onChange={(e) => {
                        const next = [...data.hero.specStrip];
                        next[idx].iconName = e.target.value;
                        setData({ ...data, hero: { ...data.hero, specStrip: next } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-[11px] font-mono text-cyan-400"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="grid gap-4 sm:grid-cols-3 pt-4 border-t border-slate-800">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 block">Primary CTA</label>
                <input
                  type="text"
                  placeholder="Label"
                  value={data.hero.primaryCta.label}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, primaryCta: { ...data.hero.primaryCta, label: e.target.value } } })
                  }
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
                />
                <input
                  type="text"
                  placeholder="Href"
                  value={data.hero.primaryCta.href}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, primaryCta: { ...data.hero.primaryCta, href: e.target.value } } })
                  }
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-300 font-mono"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 block">Secondary CTA</label>
                <input
                  type="text"
                  placeholder="Label"
                  value={data.hero.secondaryCta.label}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, secondaryCta: { ...data.hero.secondaryCta, label: e.target.value } } })
                  }
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
                />
                <input
                  type="text"
                  placeholder="Href"
                  value={data.hero.secondaryCta.href}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, secondaryCta: { ...data.hero.secondaryCta, href: e.target.value } } })
                  }
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-300 font-mono"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 block">Tertiary CTA</label>
                <input
                  type="text"
                  placeholder="Label"
                  value={data.hero.tertiaryCta.label}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, tertiaryCta: { ...data.hero.tertiaryCta, label: e.target.value } } })
                  }
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
                />
                <input
                  type="text"
                  placeholder="Href"
                  value={data.hero.tertiaryCta.href}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, tertiaryCta: { ...data.hero.tertiaryCta, href: e.target.value } } })
                  }
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-300 font-mono"
                />
              </div>
            </div>

            {/* Trust Points */}
            <div className="space-y-2 pt-4 border-t border-slate-800">
              <label className="text-xs font-bold text-slate-300 block">Trust Bar Points</label>
              <div className="grid gap-2 sm:grid-cols-3">
                {data.hero.trustPoints.map((tp, idx) => (
                  <input
                    key={idx}
                    type="text"
                    value={tp}
                    onChange={(e) => {
                      const next = [...data.hero.trustPoints];
                      next[idx] = e.target.value;
                      setData({ ...data, hero: { ...data.hero, trustPoints: next } });
                    }}
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-200"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Carousel Slides */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-lg font-black text-white">Hero Visual Carousel Slides</h3>
                <p className="text-xs text-slate-400">Manage interactive cards in the auto-rotating hero slider</p>
              </div>
              <button
                onClick={() => {
                  const newSlide: PvcSlide = {
                    id: `pvc-slide-${Date.now()}`,
                    imageSrc: "/images/PVC Cards Samples/Sample 1.jpg",
                    alt: "Custom CR80 PVC Card",
                    title: "New PVC Card Specimen",
                    category: "CR80 30-Mil Format",
                    topBadge: "Direct Factory",
                    specPill: "Bank Grade",
                    bottomSpec: "85.6 × 54.0 mm • 0.76mm",
                    hubTag: "GUWAHATI FACTORY",
                  };
                  setData({
                    ...data,
                    hero: { ...data.hero, slides: [...data.hero.slides, newSlide] },
                  });
                }}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3]/20 text-[#009fe3] hover:bg-[#009fe3]/30 px-3 py-1.5 text-xs font-bold transition"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add Slide</span>
              </button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {data.hero.slides.map((slide, idx) => (
                <div key={slide.id} className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-3 relative group">
                  <button
                    onClick={() => {
                      const next = data.hero.slides.filter((_, i) => i !== idx);
                      setData({ ...data, hero: { ...data.hero, slides: next } });
                    }}
                    className="absolute top-3 right-3 text-slate-500 hover:text-rose-400 p-1.5 rounded-lg bg-slate-900"
                    title="Delete slide"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>

                  <div className="flex items-center gap-3">
                    <div className="relative h-20 w-28 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 shrink-0">
                      <Image src={slide.imageSrc} alt={slide.alt} fill className="object-cover" />
                    </div>
                    <div className="space-y-1 overflow-hidden">
                      <span className="text-[10px] font-black uppercase text-[#009fe3]">{slide.topBadge}</span>
                      <h4 className="text-xs font-extrabold text-white truncate">{slide.title}</h4>
                      <p className="text-[11px] text-slate-400 truncate">{slide.bottomSpec}</p>
                    </div>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-2 pt-2 border-t border-slate-800">
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 block">Title</label>
                      <input
                        type="text"
                        value={slide.title}
                        onChange={(e) => {
                          const next = [...data.hero.slides];
                          next[idx].title = e.target.value;
                          setData({ ...data, hero: { ...data.hero, slides: next } });
                        }}
                        className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 block">Top Badge</label>
                      <input
                        type="text"
                        value={slide.topBadge}
                        onChange={(e) => {
                          const next = [...data.hero.slides];
                          next[idx].topBadge = e.target.value;
                          setData({ ...data, hero: { ...data.hero, slides: next } });
                        }}
                        className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 block">Spec Pill</label>
                      <input
                        type="text"
                        value={slide.specPill}
                        onChange={(e) => {
                          const next = [...data.hero.slides];
                          next[idx].specPill = e.target.value;
                          setData({ ...data, hero: { ...data.hero, slides: next } });
                        }}
                        className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 block">Hub Tag</label>
                      <input
                        type="text"
                        value={slide.hubTag}
                        onChange={(e) => {
                          const next = [...data.hero.slides];
                          next[idx].hubTag = e.target.value;
                          setData({ ...data, hero: { ...data.hero, slides: next } });
                        }}
                        className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white font-mono"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-[10px] font-bold text-slate-400 block">Bottom Spec Details</label>
                      <input
                        type="text"
                        value={slide.bottomSpec}
                        onChange={(e) => {
                          const next = [...data.hero.slides];
                          next[idx].bottomSpec = e.target.value;
                          setData({ ...data, hero: { ...data.hero, slides: next } });
                        }}
                        className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-[10px] font-bold text-slate-400 block">Image Source / Upload</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={slide.imageSrc}
                          onChange={(e) => {
                            const next = [...data.hero.slides];
                            next[idx].imageSrc = e.target.value;
                            setData({ ...data, hero: { ...data.hero, slides: next } });
                          }}
                          className="flex-1 rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs font-mono text-slate-300"
                        />
                        <label className="cursor-pointer inline-flex items-center gap-1 bg-slate-800 hover:bg-slate-700 px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-200">
                          <UploadCloud className="h-3.5 w-3.5" />
                          <span>{uploadingField === `slide-${idx}` ? "..." : "Upload"}</span>
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
                                    const next = [...data.hero.slides];
                                    next[idx].imageSrc = url;
                                    setData({ ...data, hero: { ...data.hero, slides: next } });
                                  },
                                  `slide-${idx}`
                                );
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

      {/* ─────────────────────────────────────────────────────────────
          TAB 2: SELECTION MATRIX (MODELS PVC-01 to PVC-06)
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "quickSelection" && (
        <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">Card Selection Matrix &amp; Catalog</h2>
              <p className="text-xs text-slate-400">Manage filterable CR80 PVC catalog models and specifications</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  const newItem: PvcCatalogItem = {
                    id: `pvc-${Date.now()}`,
                    code: `PVC-0${data.quickSelection.catalog.length + 1}`,
                    title: "New PVC Model Variant",
                    category: "plain",
                    material: "100% Virgin Polyvinyl Chloride",
                    dimensions: "85.6 mm × 54.0 mm (0.76 mm / 30-Mil)",
                    print: "Thermal Transfer & Dye Sublimation (300 DPI)",
                    durability: "5+ Years UV Resistance",
                    img: "/images/PVC Cards Samples/Sample 1.jpg",
                    badge: "Bank Grade CR80",
                    description: "High quality solid virgin PVC card substrate.",
                    idealFor: ["Corporate Staff", "Student Passes"],
                  };
                  setData({
                    ...data,
                    quickSelection: {
                      ...data.quickSelection,
                      catalog: [...data.quickSelection.catalog, newItem],
                    },
                  });
                }}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3]/20 text-[#009fe3] hover:bg-[#009fe3]/30 px-3 py-1.5 text-xs font-bold transition"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add Card Model</span>
              </button>
              <button
                onClick={() => handleSaveSection("quickSelection")}
                disabled={savingSection === "quickSelection"}
                className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 px-4 py-2 text-xs font-extrabold text-white border border-slate-700 transition"
              >
                {savingSection === "quickSelection" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                <span>Save Catalog</span>
              </button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Badge Title</label>
              <input
                type="text"
                value={data.quickSelection.badge}
                onChange={(e) =>
                  setData({ ...data, quickSelection: { ...data.quickSelection, badge: e.target.value } })
                }
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs text-white"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Section Title</label>
              <input
                type="text"
                value={data.quickSelection.title}
                onChange={(e) =>
                  setData({ ...data, quickSelection: { ...data.quickSelection, title: e.target.value } })
                }
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs text-white"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Lede / Subtitle</label>
              <input
                type="text"
                value={data.quickSelection.lede}
                onChange={(e) =>
                  setData({ ...data, quickSelection: { ...data.quickSelection, lede: e.target.value } })
                }
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs text-white"
              />
            </div>
          </div>

          {/* Cards List */}
          <div className="space-y-4 pt-4 border-t border-slate-800">
            {data.quickSelection.catalog.map((item, idx) => (
              <div key={item.id} className="rounded-2xl border border-slate-800 bg-slate-950 p-5 space-y-4 relative">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-black uppercase text-[#009fe3] bg-slate-900 px-2 py-0.5 rounded">
                      {item.code}
                    </span>
                    <span className="text-xs font-black text-white">{item.title}</span>
                  </div>
                  <button
                    onClick={() => {
                      const next = data.quickSelection.catalog.filter((_, i) => i !== idx);
                      setData({ ...data, quickSelection: { ...data.quickSelection, catalog: next } });
                    }}
                    className="text-slate-500 hover:text-rose-400 p-1.5 rounded-lg bg-slate-900"
                    title="Delete item"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 block">Code</label>
                    <input
                      type="text"
                      value={item.code}
                      onChange={(e) => {
                        const next = [...data.quickSelection.catalog];
                        next[idx].code = e.target.value;
                        setData({ ...data, quickSelection: { ...data.quickSelection, catalog: next } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs font-mono text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 block">Title</label>
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => {
                        const next = [...data.quickSelection.catalog];
                        next[idx].title = e.target.value;
                        setData({ ...data, quickSelection: { ...data.quickSelection, catalog: next } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 block">Category (plain, rfid, prox, mag)</label>
                    <select
                      value={item.category}
                      onChange={(e) => {
                        const next = [...data.quickSelection.catalog];
                        next[idx].category = e.target.value as any;
                        setData({ ...data, quickSelection: { ...data.quickSelection, catalog: next } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white font-mono"
                    >
                      <option value="plain">plain (Standard Virgin PVC)</option>
                      <option value="rfid">rfid (13.56MHz Mifare)</option>
                      <option value="prox">prox (125kHz Proximity)</option>
                      <option value="mag">mag (HiCo MagStripe)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 block">Material</label>
                    <input
                      type="text"
                      value={item.material}
                      onChange={(e) => {
                        const next = [...data.quickSelection.catalog];
                        next[idx].material = e.target.value;
                        setData({ ...data, quickSelection: { ...data.quickSelection, catalog: next } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 block">Dimensions</label>
                    <input
                      type="text"
                      value={item.dimensions}
                      onChange={(e) => {
                        const next = [...data.quickSelection.catalog];
                        next[idx].dimensions = e.target.value;
                        setData({ ...data, quickSelection: { ...data.quickSelection, catalog: next } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 block">Print Compatibility</label>
                    <input
                      type="text"
                      value={item.print}
                      onChange={(e) => {
                        const next = [...data.quickSelection.catalog];
                        next[idx].print = e.target.value;
                        setData({ ...data, quickSelection: { ...data.quickSelection, catalog: next } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 block">Durability Rating</label>
                    <input
                      type="text"
                      value={item.durability}
                      onChange={(e) => {
                        const next = [...data.quickSelection.catalog];
                        next[idx].durability = e.target.value;
                        setData({ ...data, quickSelection: { ...data.quickSelection, catalog: next } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 block">Badge Tag</label>
                    <input
                      type="text"
                      value={item.badge}
                      onChange={(e) => {
                        const next = [...data.quickSelection.catalog];
                        next[idx].badge = e.target.value;
                        setData({ ...data, quickSelection: { ...data.quickSelection, catalog: next } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 block">Image Source</label>
                    <div className="flex gap-1.5">
                      <input
                        type="text"
                        value={item.img}
                        onChange={(e) => {
                          const next = [...data.quickSelection.catalog];
                          next[idx].img = e.target.value;
                          setData({ ...data, quickSelection: { ...data.quickSelection, catalog: next } });
                        }}
                        className="flex-1 rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs font-mono text-slate-300"
                      />
                      <label className="cursor-pointer inline-flex items-center gap-1 bg-slate-800 hover:bg-slate-700 px-2 py-1.5 rounded-lg text-xs text-slate-200">
                        <UploadCloud className="h-3 w-3" />
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
                                  const next = [...data.quickSelection.catalog];
                                  next[idx].img = url;
                                  setData({ ...data, quickSelection: { ...data.quickSelection, catalog: next } });
                                },
                                `cat-${idx}`
                              );
                            }
                          }}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label className="text-[10px] font-bold text-slate-400 block">Modal Description</label>
                    <textarea
                      rows={2}
                      value={item.description}
                      onChange={(e) => {
                        const next = [...data.quickSelection.catalog];
                        next[idx].description = e.target.value;
                        setData({ ...data, quickSelection: { ...data.quickSelection, catalog: next } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <label className="text-[10px] font-bold text-slate-400 block">Ideal For (comma-separated)</label>
                    <input
                      type="text"
                      value={item.idealFor.join(", ")}
                      onChange={(e) => {
                        const next = [...data.quickSelection.catalog];
                        next[idx].idealFor = e.target.value.split(",").map((s) => s.trim()).filter(Boolean);
                        setData({ ...data, quickSelection: { ...data.quickSelection, catalog: next } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 3: ANATOMY & MULTI-LAYER ENGINEERING
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "anatomy" && (
        <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">Anatomy &amp; Layer Architecture</h2>
              <p className="text-xs text-slate-400">The 4 physical layers that compose CR80 smart credentials</p>
            </div>
            <button
              onClick={() => handleSaveSection("anatomy")}
              disabled={savingSection === "anatomy"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 px-4 py-2 text-xs font-extrabold text-white border border-slate-700 transition"
            >
              {savingSection === "anatomy" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save Anatomy</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Badge</label>
              <input
                type="text"
                value={data.anatomy.badge}
                onChange={(e) => setData({ ...data, anatomy: { ...data.anatomy, badge: e.target.value } })}
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Title</label>
              <input
                type="text"
                value={data.anatomy.title}
                onChange={(e) => setData({ ...data, anatomy: { ...data.anatomy, title: e.target.value } })}
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Lede</label>
              <input
                type="text"
                value={data.anatomy.lede}
                onChange={(e) => setData({ ...data, anatomy: { ...data.anatomy, lede: e.target.value } })}
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
              />
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-800">
            {data.anatomy.layers.map((layer, idx) => (
              <div key={layer.step} className="rounded-2xl border border-slate-800 bg-slate-950 p-5 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="font-mono text-xs font-black uppercase text-[#009fe3]">
                    Layer {layer.step}: {layer.title}
                  </span>
                  <span className="text-xs font-bold text-slate-400">{layer.badge}</span>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 block">Title</label>
                    <input
                      type="text"
                      value={layer.title}
                      onChange={(e) => {
                        const next = [...data.anatomy.layers];
                        next[idx].title = e.target.value;
                        setData({ ...data, anatomy: { ...data.anatomy, layers: next } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 block">Subtitle</label>
                    <input
                      type="text"
                      value={layer.subtitle}
                      onChange={(e) => {
                        const next = [...data.anatomy.layers];
                        next[idx].subtitle = e.target.value;
                        setData({ ...data, anatomy: { ...data.anatomy, layers: next } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 block">Badge Tag</label>
                    <input
                      type="text"
                      value={layer.badge}
                      onChange={(e) => {
                        const next = [...data.anatomy.layers];
                        next[idx].badge = e.target.value;
                        setData({ ...data, anatomy: { ...data.anatomy, layers: next } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-[10px] font-bold text-slate-400 block">Material Specification</label>
                    <input
                      type="text"
                      value={layer.material}
                      onChange={(e) => {
                        const next = [...data.anatomy.layers];
                        next[idx].material = e.target.value;
                        setData({ ...data, anatomy: { ...data.anatomy, layers: next } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 block">Icon Name (Box, Radio, Sparkles, ShieldCheck)</label>
                    <input
                      type="text"
                      value={layer.iconName}
                      onChange={(e) => {
                        const next = [...data.anatomy.layers];
                        next[idx].iconName = e.target.value;
                        setData({ ...data, anatomy: { ...data.anatomy, layers: next } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs font-mono text-cyan-400"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <label className="text-[10px] font-bold text-slate-400 block">Performance Benefit</label>
                    <input
                      type="text"
                      value={layer.benefit}
                      onChange={(e) => {
                        const next = [...data.anatomy.layers];
                        next[idx].benefit = e.target.value;
                        setData({ ...data, anatomy: { ...data.anatomy, layers: next } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <label className="text-[10px] font-bold text-slate-400 block">Key Bullet Points (one per line)</label>
                    <textarea
                      rows={3}
                      value={layer.details.join("\n")}
                      onChange={(e) => {
                        const next = [...data.anatomy.layers];
                        next[idx].details = e.target.value.split("\n").filter(Boolean);
                        setData({ ...data, anatomy: { ...data.anatomy, layers: next } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white font-mono"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 4: RANGE MASTER SHOWCASE
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "rangeMaster" && (
        <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">Master Hardware Showcase</h2>
              <p className="text-xs text-slate-400">Detailed showcase tabs with engineering parameters and setups</p>
            </div>
            <button
              onClick={() => handleSaveSection("rangeMaster")}
              disabled={savingSection === "rangeMaster"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 px-4 py-2 text-xs font-extrabold text-white border border-slate-700 transition"
            >
              {savingSection === "rangeMaster" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save Showcase</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Badge</label>
              <input
                type="text"
                value={data.rangeMaster.badge}
                onChange={(e) => setData({ ...data, rangeMaster: { ...data.rangeMaster, badge: e.target.value } })}
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Title</label>
              <input
                type="text"
                value={data.rangeMaster.title}
                onChange={(e) => setData({ ...data, rangeMaster: { ...data.rangeMaster, title: e.target.value } })}
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Lede</label>
              <input
                type="text"
                value={data.rangeMaster.lede}
                onChange={(e) => setData({ ...data, rangeMaster: { ...data.rangeMaster, lede: e.target.value } })}
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
              />
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-800">
            {data.rangeMaster.sections.map((sec, idx) => (
              <div key={sec.code} className="rounded-2xl border border-slate-800 bg-slate-950 p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="font-mono text-xs font-black uppercase text-[#009fe3]">{sec.code}</span>
                  <span className="text-xs font-bold text-slate-400">{sec.badge}</span>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 block">Code</label>
                    <input
                      type="text"
                      value={sec.code}
                      onChange={(e) => {
                        const next = [...data.rangeMaster.sections];
                        next[idx].code = e.target.value;
                        setData({ ...data, rangeMaster: { ...data.rangeMaster, sections: next } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs font-mono text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 block">Badge</label>
                    <input
                      type="text"
                      value={sec.badge}
                      onChange={(e) => {
                        const next = [...data.rangeMaster.sections];
                        next[idx].badge = e.target.value;
                        setData({ ...data, rangeMaster: { ...data.rangeMaster, sections: next } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 block">Title</label>
                    <input
                      type="text"
                      value={sec.title}
                      onChange={(e) => {
                        const next = [...data.rangeMaster.sections];
                        next[idx].title = e.target.value;
                        setData({ ...data, rangeMaster: { ...data.rangeMaster, sections: next } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <label className="text-[10px] font-bold text-slate-400 block">Tagline</label>
                    <input
                      type="text"
                      value={sec.tagline}
                      onChange={(e) => {
                        const next = [...data.rangeMaster.sections];
                        next[idx].tagline = e.target.value;
                        setData({ ...data, rangeMaster: { ...data.rangeMaster, sections: next } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <label className="text-[10px] font-bold text-slate-400 block">Description</label>
                    <textarea
                      rows={2}
                      value={sec.description}
                      onChange={(e) => {
                        const next = [...data.rangeMaster.sections];
                        next[idx].description = e.target.value;
                        setData({ ...data, rangeMaster: { ...data.rangeMaster, sections: next } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-[10px] font-bold text-slate-400 block">Production Setup Text</label>
                    <input
                      type="text"
                      value={sec.setup}
                      onChange={(e) => {
                        const next = [...data.rangeMaster.sections];
                        next[idx].setup = e.target.value;
                        setData({ ...data, rangeMaster: { ...data.rangeMaster, sections: next } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 block">Image Source</label>
                    <input
                      type="text"
                      value={sec.image}
                      onChange={(e) => {
                        const next = [...data.rangeMaster.sections];
                        next[idx].image = e.target.value;
                        setData({ ...data, rangeMaster: { ...data.rangeMaster, sections: next } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs font-mono text-slate-300"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <label className="text-[10px] font-bold text-slate-400 block">Suitable Applications (comma-separated)</label>
                    <input
                      type="text"
                      value={sec.suitable.join(", ")}
                      onChange={(e) => {
                        const next = [...data.rangeMaster.sections];
                        next[idx].suitable = e.target.value.split(",").map((s) => s.trim()).filter(Boolean);
                        setData({ ...data, rangeMaster: { ...data.rangeMaster, sections: next } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <label className="text-[10px] font-bold text-slate-400 block">Quality Standard / Conclusion</label>
                    <input
                      type="text"
                      value={sec.conclusion}
                      onChange={(e) => {
                        const next = [...data.rangeMaster.sections];
                        next[idx].conclusion = e.target.value;
                        setData({ ...data, rangeMaster: { ...data.rangeMaster, sections: next } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 5: ENGINEERING GUIDE & CORE FORMULATIONS
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "engineeringGuide" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-lg font-black text-white">Decision Factors (4 Core Pillars)</h2>
                <p className="text-xs text-slate-400">Parameters guiding enterprise selection between plain, RFID, and magnetic options</p>
              </div>
              <button
                onClick={() => handleSaveSection("engineeringGuide")}
                disabled={savingSection === "engineeringGuide"}
                className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 px-4 py-2 text-xs font-extrabold text-white border border-slate-700 transition"
              >
                {savingSection === "engineeringGuide" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                <span>Save Engineering Guide</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Badge</label>
                <input
                  type="text"
                  value={data.engineeringGuide.badge}
                  onChange={(e) => setData({ ...data, engineeringGuide: { ...data.engineeringGuide, badge: e.target.value } })}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Title</label>
                <input
                  type="text"
                  value={data.engineeringGuide.title}
                  onChange={(e) => setData({ ...data, engineeringGuide: { ...data.engineeringGuide, title: e.target.value } })}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Lede</label>
                <input
                  type="text"
                  value={data.engineeringGuide.lede}
                  onChange={(e) => setData({ ...data, engineeringGuide: { ...data.engineeringGuide, lede: e.target.value } })}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 pt-4 border-t border-slate-800">
              {data.engineeringGuide.factors.map((factor, idx) => (
                <div key={factor.num} className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-2">
                  <span className="text-[10px] font-black uppercase text-[#009fe3]">{factor.num} • Pillar</span>
                  <input
                    type="text"
                    value={factor.title}
                    onChange={(e) => {
                      const next = [...data.engineeringGuide.factors];
                      next[idx].title = e.target.value;
                      setData({ ...data, engineeringGuide: { ...data.engineeringGuide, factors: next } });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs font-bold text-white"
                  />
                  <input
                    type="text"
                    value={factor.desc}
                    onChange={(e) => {
                      const next = [...data.engineeringGuide.factors];
                      next[idx].desc = e.target.value;
                      setData({ ...data, engineeringGuide: { ...data.engineeringGuide, factors: next } });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-slate-300"
                  />
                  <textarea
                    rows={2}
                    value={factor.detail}
                    onChange={(e) => {
                      const next = [...data.engineeringGuide.factors];
                      next[idx].detail = e.target.value;
                      setData({ ...data, engineeringGuide: { ...data.engineeringGuide, factors: next } });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-slate-400"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Substrate Formulations */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-xl space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <h3 className="text-lg font-black text-white">Substrate Formulations &amp; Core Options</h3>
              <p className="text-xs text-slate-400">Pure virgin vs composite heat resistant core options</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Section Title</label>
                <input
                  type="text"
                  value={data.engineeringGuide.fastenersTitle}
                  onChange={(e) =>
                    setData({ ...data, engineeringGuide: { ...data.engineeringGuide, fastenersTitle: e.target.value } })
                  }
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Section Lede</label>
                <input
                  type="text"
                  value={data.engineeringGuide.fastenersLede}
                  onChange={(e) =>
                    setData({ ...data, engineeringGuide: { ...data.engineeringGuide, fastenersLede: e.target.value } })
                  }
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 pt-4 border-t border-slate-800">
              {data.engineeringGuide.fasteners.map((opt, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-white">{opt.title}</span>
                    <span className="text-[10px] font-bold text-[#009fe3] bg-slate-900 px-2 py-0.5 rounded">
                      {opt.badge}
                    </span>
                  </div>

                  <input
                    type="text"
                    value={opt.title}
                    onChange={(e) => {
                      const next = [...data.engineeringGuide.fasteners];
                      next[idx].title = e.target.value;
                      setData({ ...data, engineeringGuide: { ...data.engineeringGuide, fasteners: next } });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                  />
                  <input
                    type="text"
                    value={opt.badge}
                    onChange={(e) => {
                      const next = [...data.engineeringGuide.fasteners];
                      next[idx].badge = e.target.value;
                      setData({ ...data, engineeringGuide: { ...data.engineeringGuide, fasteners: next } });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                  />
                  <textarea
                    rows={2}
                    value={opt.desc}
                    onChange={(e) => {
                      const next = [...data.engineeringGuide.fasteners];
                      next[idx].desc = e.target.value;
                      setData({ ...data, engineeringGuide: { ...data.engineeringGuide, fasteners: next } });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-slate-300"
                  />
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 block mb-1">Key Pros (comma separated)</label>
                    <input
                      type="text"
                      value={opt.pros.join(", ")}
                      onChange={(e) => {
                        const next = [...data.engineeringGuide.fasteners];
                        next[idx].pros = e.target.value.split(",").map((s) => s.trim()).filter(Boolean);
                        setData({ ...data, engineeringGuide: { ...data.engineeringGuide, fasteners: next } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 6: APPLICATIONS
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "applications" && (
        <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">Sector Applications</h2>
              <p className="text-xs text-slate-400">Institutional use cases across schools, universities, hospitals, and access gates</p>
            </div>
            <button
              onClick={() => handleSaveSection("applications")}
              disabled={savingSection === "applications"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 px-4 py-2 text-xs font-extrabold text-white border border-slate-700 transition"
            >
              {savingSection === "applications" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save Applications</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Badge</label>
              <input
                type="text"
                value={data.applications.badge}
                onChange={(e) => setData({ ...data, applications: { ...data.applications, badge: e.target.value } })}
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Title</label>
              <input
                type="text"
                value={data.applications.title}
                onChange={(e) => setData({ ...data, applications: { ...data.applications, title: e.target.value } })}
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Lede</label>
              <input
                type="text"
                value={data.applications.lede}
                onChange={(e) => setData({ ...data, applications: { ...data.applications, lede: e.target.value } })}
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 pt-4 border-t border-slate-800">
            {data.applications.applications.map((app, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase text-[#009fe3]">{app.tag}</span>
                  <span className="text-[10px] font-mono text-cyan-400">{app.iconName}</span>
                </div>
                <input
                  type="text"
                  value={app.title}
                  onChange={(e) => {
                    const next = [...data.applications.applications];
                    next[idx].title = e.target.value;
                    setData({ ...data, applications: { ...data.applications, applications: next } });
                  }}
                  className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs font-bold text-white"
                />
                <textarea
                  rows={3}
                  value={app.desc}
                  onChange={(e) => {
                    const next = [...data.applications.applications];
                    next[idx].desc = e.target.value;
                    setData({ ...data, applications: { ...data.applications, applications: next } });
                  }}
                  className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-slate-300"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Tag"
                    value={app.tag}
                    onChange={(e) => {
                      const next = [...data.applications.applications];
                      next[idx].tag = e.target.value;
                      setData({ ...data, applications: { ...data.applications, applications: next } });
                    }}
                    className="rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-[11px] text-white"
                  />
                  <input
                    type="text"
                    placeholder="Icon Name"
                    value={app.iconName}
                    onChange={(e) => {
                      const next = [...data.applications.applications];
                      next[idx].iconName = e.target.value;
                      setData({ ...data, applications: { ...data.applications, applications: next } });
                    }}
                    className="rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-[11px] text-cyan-400 font-mono"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Link URL"
                  value={app.link?.href || ""}
                  onChange={(e) => {
                    const next = [...data.applications.applications];
                    next[idx].link = {
                      href: e.target.value,
                      label: next[idx].link?.label || "Explore Service",
                    };
                    setData({ ...data, applications: { ...data.applications, applications: next } });
                  }}
                  className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs font-mono text-slate-400"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 7: WORKFLOW, DISPATCH & CLOSING CTA
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "workflowAndDispatch" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-lg font-black text-white">4-Step Production Pipeline</h2>
                <p className="text-xs text-slate-400">Step by step process from roster merge to thermal printing and tray packing</p>
              </div>
              <button
                onClick={() => handleSaveSection("workflowAndDispatch")}
                disabled={savingSection === "workflowAndDispatch"}
                className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 px-4 py-2 text-xs font-extrabold text-white border border-slate-700 transition"
              >
                {savingSection === "workflowAndDispatch" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                <span>Save Workflow &amp; Dispatch</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Workflow Badge</label>
                <input
                  type="text"
                  value={data.workflowAndDispatch.workflowBadge}
                  onChange={(e) =>
                    setData({ ...data, workflowAndDispatch: { ...data.workflowAndDispatch, workflowBadge: e.target.value } })
                  }
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Workflow Title</label>
                <input
                  type="text"
                  value={data.workflowAndDispatch.workflowTitle}
                  onChange={(e) =>
                    setData({ ...data, workflowAndDispatch: { ...data.workflowAndDispatch, workflowTitle: e.target.value } })
                  }
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Workflow Lede</label>
                <input
                  type="text"
                  value={data.workflowAndDispatch.workflowLede}
                  onChange={(e) =>
                    setData({ ...data, workflowAndDispatch: { ...data.workflowAndDispatch, workflowLede: e.target.value } })
                  }
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 pt-4 border-t border-slate-800">
              {data.workflowAndDispatch.orderingSteps.map((step, idx) => (
                <div key={step.num} className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-black text-[#009fe3]">{step.num}</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">{step.badge}</span>
                  </div>
                  <input
                    type="text"
                    value={step.title}
                    onChange={(e) => {
                      const next = [...data.workflowAndDispatch.orderingSteps];
                      next[idx].title = e.target.value;
                      setData({ ...data, workflowAndDispatch: { ...data.workflowAndDispatch, orderingSteps: next } });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-xs font-bold text-white"
                  />
                  <textarea
                    rows={3}
                    value={step.body}
                    onChange={(e) => {
                      const next = [...data.workflowAndDispatch.orderingSteps];
                      next[idx].body = e.target.value;
                      setData({ ...data, workflowAndDispatch: { ...data.workflowAndDispatch, orderingSteps: next } });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-xs text-slate-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dispatch Hub */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-xl space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <h3 className="text-lg font-black text-white">24–48h Dispatch &amp; Packaging</h3>
              <p className="text-xs text-slate-400">Guwahati factory fulfillment commitments and flow</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Dispatch Badge</label>
                <input
                  type="text"
                  value={data.workflowAndDispatch.dispatchBadge}
                  onChange={(e) =>
                    setData({ ...data, workflowAndDispatch: { ...data.workflowAndDispatch, dispatchBadge: e.target.value } })
                  }
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Dispatch Title</label>
                <input
                  type="text"
                  value={data.workflowAndDispatch.dispatchTitle}
                  onChange={(e) =>
                    setData({ ...data, workflowAndDispatch: { ...data.workflowAndDispatch, dispatchTitle: e.target.value } })
                  }
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Hub Tag</label>
                <input
                  type="text"
                  value={data.workflowAndDispatch.dispatchHubTag}
                  onChange={(e) =>
                    setData({ ...data, workflowAndDispatch: { ...data.workflowAndDispatch, dispatchHubTag: e.target.value } })
                  }
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>
              <div className="sm:col-span-3">
                <label className="text-xs font-bold text-slate-300 block mb-1">Dispatch Lede</label>
                <input
                  type="text"
                  value={data.workflowAndDispatch.dispatchLede}
                  onChange={(e) =>
                    setData({ ...data, workflowAndDispatch: { ...data.workflowAndDispatch, dispatchLede: e.target.value } })
                  }
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>
              <div className="sm:col-span-3">
                <label className="text-xs font-bold text-slate-300 block mb-1">Dispatch Flow Chain (comma-separated)</label>
                <input
                  type="text"
                  value={data.workflowAndDispatch.dispatchFlowSteps.join(", ")}
                  onChange={(e) =>
                    setData({
                      ...data,
                      workflowAndDispatch: {
                        ...data.workflowAndDispatch,
                        dispatchFlowSteps: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                      },
                    })
                  }
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white font-mono"
                />
              </div>
              <div className="sm:col-span-3">
                <label className="text-xs font-bold text-slate-300 block mb-1">Disclaimers &amp; Packaging Notes (one per line)</label>
                <textarea
                  rows={3}
                  value={data.workflowAndDispatch.dispatchDisclaimers.join("\n")}
                  onChange={(e) =>
                    setData({
                      ...data,
                      workflowAndDispatch: {
                        ...data.workflowAndDispatch,
                        dispatchDisclaimers: e.target.value.split("\n").filter(Boolean),
                      },
                    })
                  }
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white font-mono"
                />
              </div>
            </div>
          </div>

          {/* Closing CTA Banner */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-xl space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <h3 className="text-lg font-black text-white">Closing Call-To-Action Banner</h3>
              <p className="text-xs text-slate-400">Headlines, descriptions, and action buttons</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Badge</label>
                <input
                  type="text"
                  value={data.workflowAndDispatch.closingCtaBadge}
                  onChange={(e) =>
                    setData({ ...data, workflowAndDispatch: { ...data.workflowAndDispatch, closingCtaBadge: e.target.value } })
                  }
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Title</label>
                <input
                  type="text"
                  value={data.workflowAndDispatch.closingCtaTitle}
                  onChange={(e) =>
                    setData({ ...data, workflowAndDispatch: { ...data.workflowAndDispatch, closingCtaTitle: e.target.value } })
                  }
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-300 block mb-1">Lede / Description</label>
                <textarea
                  rows={2}
                  value={data.workflowAndDispatch.closingCtaLede}
                  onChange={(e) =>
                    setData({ ...data, workflowAndDispatch: { ...data.workflowAndDispatch, closingCtaLede: e.target.value } })
                  }
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Branding Title</label>
                <input
                  type="text"
                  value={data.workflowAndDispatch.closingCtaBrandingTitle}
                  onChange={(e) =>
                    setData({
                      ...data,
                      workflowAndDispatch: { ...data.workflowAndDispatch, closingCtaBrandingTitle: e.target.value },
                    })
                  }
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white font-mono"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Branding Location Subtitle</label>
                <input
                  type="text"
                  value={data.workflowAndDispatch.closingCtaBrandingLocation}
                  onChange={(e) =>
                    setData({
                      ...data,
                      workflowAndDispatch: { ...data.workflowAndDispatch, closingCtaBrandingLocation: e.target.value },
                    })
                  }
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 8: FAQS
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "faqs" && (
        <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">Frequently Asked Questions</h2>
              <p className="text-xs text-slate-400">Questions and answers regarding PVC cards, core substrates, and smart chip inlays</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  const newFaq: DynamicPvcCardsFaqItem = {
                    q: "New FAQ Question?",
                    a: "Answer explaining specifications, cards, or delivery details.",
                  };
                  setData({ ...data, faqs: { ...data.faqs, faqs: [...data.faqs.faqs, newFaq] } });
                }}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#009fe3]/20 text-[#009fe3] hover:bg-[#009fe3]/30 px-3 py-1.5 text-xs font-bold transition"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add FAQ</span>
              </button>
              <button
                onClick={() => handleSaveSection("faqs")}
                disabled={savingSection === "faqs"}
                className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 px-4 py-2 text-xs font-extrabold text-white border border-slate-700 transition"
              >
                {savingSection === "faqs" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                <span>Save FAQs</span>
              </button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Eyebrow</label>
              <input
                type="text"
                value={data.faqs.eyebrow}
                onChange={(e) => setData({ ...data, faqs: { ...data.faqs, eyebrow: e.target.value } })}
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Title</label>
              <input
                type="text"
                value={data.faqs.title}
                onChange={(e) => setData({ ...data, faqs: { ...data.faqs, title: e.target.value } })}
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Lede</label>
              <input
                type="text"
                value={data.faqs.lede}
                onChange={(e) => setData({ ...data, faqs: { ...data.faqs, lede: e.target.value } })}
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
              />
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-800">
            {data.faqs.faqs.map((faq, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-2 relative">
                <button
                  onClick={() => {
                    const next = data.faqs.faqs.filter((_, i) => i !== idx);
                    setData({ ...data, faqs: { ...data.faqs, faqs: next } });
                  }}
                  className="absolute top-3 right-3 text-slate-500 hover:text-rose-400 p-1.5 rounded-lg bg-slate-900"
                  title="Delete question"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
                <div className="pr-10">
                  <label className="text-[10px] font-bold text-slate-400 block mb-1">Question {idx + 1}</label>
                  <input
                    type="text"
                    value={faq.q}
                    onChange={(e) => {
                      const next = [...data.faqs.faqs];
                      next[idx].q = e.target.value;
                      setData({ ...data, faqs: { ...data.faqs, faqs: next } });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-xs font-bold text-white"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 block mb-1">Answer</label>
                  <textarea
                    rows={3}
                    value={faq.a}
                    onChange={(e) => {
                      const next = [...data.faqs.faqs];
                      next[idx].a = e.target.value;
                      setData({ ...data, faqs: { ...data.faqs, faqs: next } });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-xs text-slate-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 9: SEO & METADATA
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "seo" && (
        <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">SEO &amp; Meta Settings</h2>
              <p className="text-xs text-slate-400">Search engine title, meta description, and page canonical path</p>
            </div>
            <button
              onClick={() => handleSaveSection("seo")}
              disabled={savingSection === "seo"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 px-4 py-2 text-xs font-extrabold text-white border border-slate-700 transition"
            >
              {savingSection === "seo" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save SEO</span>
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Page Title Tag</label>
              <input
                type="text"
                value={data.seo.title}
                onChange={(e) => setData({ ...data, seo: { ...data.seo, title: e.target.value } })}
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs text-white focus:border-[#009fe3] focus:outline-hidden"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Meta Description</label>
              <textarea
                rows={3}
                value={data.seo.description}
                onChange={(e) => setData({ ...data, seo: { ...data.seo, description: e.target.value } })}
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs text-white focus:border-[#009fe3] focus:outline-hidden"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Canonical URL Path</label>
              <input
                type="text"
                value={data.seo.path}
                onChange={(e) => setData({ ...data, seo: { ...data.seo, path: e.target.value } })}
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs text-white font-mono"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminPvcCardsPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[400px] items-center justify-center p-8 text-slate-400">
          <RefreshCw className="h-8 w-8 animate-spin text-[#009fe3]" />
        </div>
      }
    >
      <AdminPvcCardsContent />
    </Suspense>
  );
}
