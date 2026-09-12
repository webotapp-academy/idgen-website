"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import {
  Layers,
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
  GraduationCap,
  Ticket,
  Sliders,
  Eye,
  Lock,
  Truck,
  Compass,
  Zap,
  Check,
  Award,
  Clock,
  MessageSquare,
} from "lucide-react";
import type {
  DynamicIdCardHoldersData,
  DynamicIdCardHoldersMeta,
  DynamicIdCardHoldersHero,
  DynamicIdCardHoldersQuickSelection,
  DynamicIdCardHoldersAssembly,
  DynamicIdCardHoldersRangeMaster,
  DynamicIdCardHoldersEngineeringGuide,
  DynamicIdCardHoldersApplications,
  DynamicIdCardHoldersWorkflowAndDispatch,
  DynamicIdCardHoldersFaqs,
  DynamicHolderModel,
} from "@/lib/dynamic-id-card-holders-types";
import type { HolderSlide } from "@/components/id-card-holders/HolderHeroCarousel";

function AdminIdCardHoldersContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "hero";
  const [data, setData] = useState<DynamicIdCardHoldersData | null>(null);
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
      const res = await fetch("/api/admin/id-card-holders");
      const json = await res.json();
      if (json.success && json.data) {
        setData(json.data);
      } else {
        setSaveError("Failed to load ID Card Holders data");
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
      setSaveError(null);
      setSaveSuccess(null);

      const res = await fetch("/api/admin/id-card-holders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });
      const json = await res.json();

      if (json.success) {
        setSaveSuccess("Entire ID Card Holders page published successfully!");
        setTimeout(() => setSaveSuccess(null), 4000);
      } else {
        setSaveError(json.error || "Failed to save page data");
      }
    } catch (err: any) {
      setSaveError(err.message || "Network error while saving");
    } finally {
      setSaving(false);
    }
  };

  const saveSection = async (sectionName: keyof DynamicIdCardHoldersData) => {
    if (!data) return;
    try {
      setSavingSection(sectionName);
      setSaveError(null);
      setSaveSuccess(null);

      const res = await fetch("/api/admin/id-card-holders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          section: sectionName,
          sectionData: data[sectionName],
        }),
      });
      const json = await res.json();

      if (json.success) {
        setSaveSuccess(`Section '${sectionName}' saved and synchronized!`);
        setTimeout(() => setSaveSuccess(null), 3500);
      } else {
        setSaveError(json.error || `Failed to save ${sectionName}`);
      }
    } catch (err: any) {
      setSaveError(err.message || "Network error while saving section");
    } finally {
      setSavingSection(null);
    }
  };

  const handleResetDefaults = async () => {
    if (!confirm("Are you sure you want to reset all ID Card Holders content back to factory defaults? Any custom edits will be lost.")) {
      return;
    }

    try {
      setSaving(true);
      setSaveError(null);
      setSaveSuccess(null);

      const res = await fetch("/api/admin/id-card-holders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "reset" }),
      });
      const json = await res.json();

      if (json.success && json.data) {
        setData(json.data);
        setSaveSuccess("Restored factory defaults successfully!");
        setTimeout(() => setSaveSuccess(null), 4000);
      } else {
        setSaveError(json.error || "Failed to reset defaults");
      }
    } catch (err: any) {
      setSaveError(err.message || "Network error while resetting");
    } finally {
      setSaving(false);
    }
  };

  if (loading || !data) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-4">
        <RefreshCw className="h-8 w-8 animate-spin text-cyan-400" />
        <p className="text-sm font-semibold text-slate-400">
          Loading ID Card Holders Dynamic Control Suite...
        </p>
      </div>
    );
  }

  const tabs = [
    { id: "hero", label: "Hero & Carousel", icon: Sparkles },
    { id: "quickSelection", label: "Quick Matrix", icon: Sliders },
    { id: "assembly", label: "Assembly Stack", icon: Layers },
    { id: "rangeMaster", label: "Holder Range", icon: Boxes },
    { id: "engineering", label: "Engineering Guide", icon: Compass },
    { id: "applications", label: "Applications", icon: Building2 },
    { id: "workflow", label: "Workflow & Dispatch", icon: Truck },
    { id: "faqs", label: "FAQs", icon: HelpCircle },
    { id: "meta", label: "SEO & Metadata", icon: Eye },
  ];

  return (
    <div className="space-y-6 pb-20">
      {/* ── TOP ACTION BAR ── */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 mb-1 uppercase tracking-wider">
            <Layers className="h-3.5 w-3.5" />
            <span>Product Page CMS Suite</span>
          </div>
          <h1 className="text-2xl font-black text-white">ID Card Holders Management</h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Real-time control over all 9 points of the ID Card Holders public catalog.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <Link
            href="/id-card-holders/"
            target="_blank"
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/80 px-3.5 py-2 text-xs font-bold text-slate-300 hover:bg-slate-800 hover:text-white transition"
          >
            <span>Preview Page</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>

          <button
            type="button"
            onClick={handleResetDefaults}
            disabled={saving}
            className="inline-flex items-center gap-1.5 rounded-xl border border-red-500/30 bg-red-950/20 px-3.5 py-2 text-xs font-bold text-red-300 hover:bg-red-900/30 transition disabled:opacity-50"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset Defaults</span>
          </button>

          <button
            type="button"
            onClick={saveWholePage}
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 px-5 py-2 text-xs font-black text-slate-950 shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-sky-400 transition active:scale-95 disabled:opacity-50"
          >
            {saving ? (
              <RefreshCw className="h-4 w-4 animate-spin" />
            ) : (
              <Save className="h-4 w-4" />
            )}
            <span>Publish Entire Page</span>
          </button>
        </div>
      </div>

      {/* ── NOTIFICATION TOASTS ── */}
      {saveSuccess && (
        <div className="flex items-center gap-2.5 rounded-2xl border border-emerald-500/30 bg-emerald-950/40 px-4 py-3 text-xs font-bold text-emerald-300 shadow-md animate-in fade-in">
          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
          <span>{saveSuccess}</span>
        </div>
      )}

      {saveError && (
        <div className="flex items-center gap-2.5 rounded-2xl border border-red-500/40 bg-red-950/50 px-4 py-3 text-xs font-bold text-red-300 shadow-md animate-in fade-in">
          <AlertCircle className="h-4 w-4 text-red-400 shrink-0" />
          <span>{saveError}</span>
        </div>
      )}

      {/* ── HORIZONTAL TAB STRIP ── */}
      <div className="flex flex-wrap items-center gap-2 pb-3 border-b border-slate-800">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                isActive
                  ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ─────────────────────────────────────────────────────────────
          TAB 1: HERO & CAROUSEL SLIDES
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "hero" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <h2 className="text-lg font-bold text-white">Hero &amp; Visual Showcase</h2>
              <p className="text-xs text-slate-400">Headlines, pill badge, specs strip, CTAs and hero visual slides.</p>
            </div>
            <button
              type="button"
              onClick={() => saveSection("hero")}
              disabled={savingSection === "hero"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-cyan-500 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-cyan-400 transition disabled:opacity-50"
            >
              {savingSection === "hero" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save Hero Section</span>
            </button>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Left: Copy & CTAs */}
            <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-sm font-bold text-cyan-300">Hero Typography &amp; CTAs</h3>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Badge Prefix</label>
                  <input
                    type="text"
                    value={data.hero.badgePrefix}
                    onChange={(e) =>
                      setData({ ...data, hero: { ...data.hero, badgePrefix: e.target.value } })
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white focus:border-cyan-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Badge Highlight</label>
                  <input
                    type="text"
                    value={data.hero.badgeHighlight}
                    onChange={(e) =>
                      setData({ ...data, hero: { ...data.hero, badgeHighlight: e.target.value } })
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white focus:border-cyan-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">H1 Title Prefix</label>
                <input
                  type="text"
                  value={data.hero.titlePrefix}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, titlePrefix: e.target.value } })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">H1 Gradient Highlight</label>
                <input
                  type="text"
                  value={data.hero.titleHighlight}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, titleHighlight: e.target.value } })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Description / Subtitle</label>
                <textarea
                  rows={4}
                  value={data.hero.description}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, description: e.target.value } })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white focus:border-cyan-500 focus:outline-none"
                />
              </div>

              {/* CTAs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-slate-800">
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">Primary CTA Text</label>
                  <input
                    type="text"
                    value={data.hero.primaryCta?.label || ""}
                    onChange={(e) =>
                      setData({
                        ...data,
                        hero: {
                          ...data.hero,
                          primaryCta: { ...data.hero.primaryCta, label: e.target.value },
                        },
                      })
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                  />
                  <input
                    type="text"
                    value={data.hero.primaryCta?.href || ""}
                    onChange={(e) =>
                      setData({
                        ...data,
                        hero: {
                          ...data.hero,
                          primaryCta: { ...data.hero.primaryCta, href: e.target.value },
                        },
                      })
                    }
                    className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-slate-300"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">Secondary CTA Text</label>
                  <input
                    type="text"
                    value={data.hero.secondaryCta?.label || ""}
                    onChange={(e) =>
                      setData({
                        ...data,
                        hero: {
                          ...data.hero,
                          secondaryCta: { ...data.hero.secondaryCta, label: e.target.value },
                        },
                      })
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                  />
                  <input
                    type="text"
                    value={data.hero.secondaryCta?.href || ""}
                    onChange={(e) =>
                      setData({
                        ...data,
                        hero: {
                          ...data.hero,
                          secondaryCta: { ...data.hero.secondaryCta, href: e.target.value },
                        },
                      })
                    }
                    className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-slate-300"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">Tertiary CTA Text</label>
                  <input
                    type="text"
                    value={data.hero.tertiaryCta?.label || ""}
                    onChange={(e) =>
                      setData({
                        ...data,
                        hero: {
                          ...data.hero,
                          tertiaryCta: { ...data.hero.tertiaryCta, label: e.target.value },
                        },
                      })
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                  />
                  <input
                    type="text"
                    value={data.hero.tertiaryCta?.href || ""}
                    onChange={(e) =>
                      setData({
                        ...data,
                        hero: {
                          ...data.hero,
                          tertiaryCta: { ...data.hero.tertiaryCta, href: e.target.value },
                        },
                      })
                    }
                    className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-slate-300"
                  />
                </div>
              </div>
            </div>

            {/* Right: Spec Strip & Trust Badges */}
            <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-sm font-bold text-cyan-300">Feature Cards (4 Spec Badges)</h3>
              <div className="grid grid-cols-2 gap-3">
                {data.hero.featureCards.map((card, idx) => (
                  <div key={idx} className="p-3 rounded-2xl border border-slate-800 bg-slate-950 space-y-1.5">
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">Badge #{idx + 1}</span>
                    <input
                      type="text"
                      value={card.title}
                      onChange={(e) => {
                        const updated = [...data.hero.featureCards];
                        updated[idx].title = e.target.value;
                        setData({ ...data, hero: { ...data.hero, featureCards: updated } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-xs text-white font-bold"
                      placeholder="Title"
                    />
                    <input
                      type="text"
                      value={card.subtitle}
                      onChange={(e) => {
                        const updated = [...data.hero.featureCards];
                        updated[idx].subtitle = e.target.value;
                        setData({ ...data, hero: { ...data.hero, featureCards: updated } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-[11px] text-slate-300"
                      placeholder="Subtitle"
                    />
                    <input
                      type="text"
                      value={card.iconName}
                      onChange={(e) => {
                        const updated = [...data.hero.featureCards];
                        updated[idx].iconName = e.target.value;
                        setData({ ...data, hero: { ...data.hero, featureCards: updated } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-[10px] text-slate-400 font-mono"
                      placeholder="Icon Name (e.g. ShieldCheck)"
                    />
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-800 space-y-2">
                <h4 className="text-xs font-bold text-slate-300">Trust Badges (Under CTAs)</h4>
                {data.hero.trustBadges.map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={badge}
                      onChange={(e) => {
                        const updated = [...data.hero.trustBadges];
                        updated[idx] = e.target.value;
                        setData({ ...data, hero: { ...data.hero, trustBadges: updated } });
                      }}
                      className="flex-1 rounded-xl border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-white"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const updated = data.hero.trustBadges.filter((_, i) => i !== idx);
                        setData({ ...data, hero: { ...data.hero, trustBadges: updated } });
                      }}
                      className="p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-slate-800"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    setData({
                      ...data,
                      hero: { ...data.hero, trustBadges: [...data.hero.trustBadges, "New Verified Standard"] },
                    });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:underline pt-1"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Add Trust Badge</span>
                </button>
              </div>
            </div>
          </div>

          {/* Slider Items Showcase */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-cyan-300">Hero Carousel Slides ({data.hero.slides.length})</h3>
                <p className="text-xs text-slate-400">Manage photographs, top badges, spec pills, and hub tags in the interactive 3D slider.</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  const newSlide: HolderSlide = {
                    id: `holder-slide-${Date.now()}`,
                    imageSrc: "/images/product-id-holders.jpg",
                    alt: "IDGen New ID Card Holder",
                    title: "New ID Card Holder",
                    category: "Holder",
                    topBadge: "New Model",
                    specPill: "100% Virgin Polymer",
                    bottomSpec: "Standard 86×54mm Fit",
                    hubTag: "GUWAHATI FACTORY",
                  };
                  setData({ ...data, hero: { ...data.hero, slides: [...data.hero.slides, newSlide] } });
                }}
                className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 border border-slate-700 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-slate-700"
              >
                <Plus className="h-3.5 w-3.5 text-cyan-400" />
                <span>Add Slide</span>
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {data.hero.slides.map((slide, idx) => (
                <div key={slide.id || idx} className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-cyan-400">Slide #{idx + 1}</span>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = data.hero.slides.filter((_, i) => i !== idx);
                          setData({ ...data, hero: { ...data.hero, slides: updated } });
                        }}
                        className="p-1 text-slate-500 hover:text-red-400 hover:bg-slate-900 rounded"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-900">
                      <Image src={slide.imageSrc} alt={slide.title} fill className="object-cover" />
                    </div>

                    <div>
                      <label className="block text-[10px] text-slate-400">Image Source / Upload</label>
                      <div className="flex items-center gap-1.5 mt-1">
                        <input
                          type="text"
                          value={slide.imageSrc}
                          onChange={(e) => {
                            const updated = [...data.hero.slides];
                            updated[idx].imageSrc = e.target.value;
                            setData({ ...data, hero: { ...data.hero, slides: updated } });
                          }}
                          className="flex-1 rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-xs text-white"
                        />
                        <label className="cursor-pointer p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-slate-700">
                          <UploadCloud className="h-4 w-4" />
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) =>
                              handleFileUpload(e, (url) => {
                                const updated = [...data.hero.slides];
                                updated[idx].imageSrc = url;
                                setData({ ...data, hero: { ...data.hero, slides: updated } });
                              })
                            }
                          />
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] text-slate-400">Title</label>
                      <input
                        type="text"
                        value={slide.title}
                        onChange={(e) => {
                          const updated = [...data.hero.slides];
                          updated[idx].title = e.target.value;
                          setData({ ...data, hero: { ...data.hero, slides: updated } });
                        }}
                        className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-xs text-white"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[10px] text-slate-400">Top Badge</label>
                        <input
                          type="text"
                          value={slide.topBadge}
                          onChange={(e) => {
                            const updated = [...data.hero.slides];
                            updated[idx].topBadge = e.target.value;
                            setData({ ...data, hero: { ...data.hero, slides: updated } });
                          }}
                          className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-slate-400">Spec Pill</label>
                        <input
                          type="text"
                          value={slide.specPill}
                          onChange={(e) => {
                            const updated = [...data.hero.slides];
                            updated[idx].specPill = e.target.value;
                            setData({ ...data, hero: { ...data.hero, slides: updated } });
                          }}
                          className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-xs text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] text-slate-400">Bottom Specs Bar</label>
                      <input
                        type="text"
                        value={slide.bottomSpec}
                        onChange={(e) => {
                          const updated = [...data.hero.slides];
                          updated[idx].bottomSpec = e.target.value;
                          setData({ ...data, hero: { ...data.hero, slides: updated } });
                        }}
                        className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-xs text-white"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 2: QUICK SELECTION MATRIX
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "quickSelection" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <h2 className="text-lg font-bold text-white">Quick Holder Selection Matrix</h2>
              <p className="text-xs text-slate-400">Header copy and quick fitment match table.</p>
            </div>
            <button
              type="button"
              onClick={() => saveSection("quickSelection")}
              disabled={savingSection === "quickSelection"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-cyan-500 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-cyan-400 transition disabled:opacity-50"
            >
              {savingSection === "quickSelection" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save Matrix</span>
            </button>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Eyebrow</label>
                <input
                  type="text"
                  value={data.quickSelection.eyebrow}
                  onChange={(e) =>
                    setData({
                      ...data,
                      quickSelection: { ...data.quickSelection, eyebrow: e.target.value },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-slate-400 mb-1">Section Title</label>
                <input
                  type="text"
                  value={data.quickSelection.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      quickSelection: { ...data.quickSelection, title: e.target.value },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Lede / Description</label>
              <textarea
                rows={2}
                value={data.quickSelection.lede}
                onChange={(e) =>
                  setData({
                    ...data,
                    quickSelection: { ...data.quickSelection, lede: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white"
              />
            </div>

            {/* Quick Match Items */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                  Quick Match Criteria Items ({data.quickSelection.items.length})
                </h3>
                <button
                  type="button"
                  onClick={() => {
                    setData({
                      ...data,
                      quickSelection: {
                        ...data.quickSelection,
                        items: [
                          ...data.quickSelection.items,
                          { req: "Custom requirement", option: "Custom Model", badge: "Custom" },
                        ],
                      },
                    });
                  }}
                  className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:underline"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Add Match Item</span>
                </button>
              </div>

              <div className="space-y-2">
                {data.quickSelection.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-3 rounded-2xl border border-slate-800 bg-slate-950"
                  >
                    <input
                      type="text"
                      placeholder="Requirement (e.g. Standard vertical card)"
                      value={item.req}
                      onChange={(e) => {
                        const updated = [...data.quickSelection.items];
                        updated[idx].req = e.target.value;
                        setData({
                          ...data,
                          quickSelection: { ...data.quickSelection, items: updated },
                        });
                      }}
                      className="flex-1 rounded-xl border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs text-white"
                    />
                    <input
                      type="text"
                      placeholder="Recommended Option (e.g. V-1)"
                      value={item.option}
                      onChange={(e) => {
                        const updated = [...data.quickSelection.items];
                        updated[idx].option = e.target.value;
                        setData({
                          ...data,
                          quickSelection: { ...data.quickSelection, items: updated },
                        });
                      }}
                      className="w-full sm:w-36 rounded-xl border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs text-cyan-300 font-bold"
                    />
                    <input
                      type="text"
                      placeholder="Badge (e.g. Standard Portrait)"
                      value={item.badge}
                      onChange={(e) => {
                        const updated = [...data.quickSelection.items];
                        updated[idx].badge = e.target.value;
                        setData({
                          ...data,
                          quickSelection: { ...data.quickSelection, items: updated },
                        });
                      }}
                      className="w-full sm:w-44 rounded-xl border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs text-slate-300"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const updated = data.quickSelection.items.filter((_, i) => i !== idx);
                        setData({
                          ...data,
                          quickSelection: { ...data.quickSelection, items: updated },
                        });
                      }}
                      className="p-1.5 rounded-xl text-slate-500 hover:text-red-400 hover:bg-slate-900"
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

      {/* ─────────────────────────────────────────────────────────────
          TAB 3: ASSEMBLY ECOSYSTEM (WHAT IS AN ID HOLDER?)
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "assembly" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <h2 className="text-lg font-bold text-white">Assembly Ecosystem (4-Layer Identification Stack)</h2>
              <p className="text-xs text-slate-400">Explains cards, holders, swivel hooks, and printed lanyards.</p>
            </div>
            <button
              type="button"
              onClick={() => saveSection("assemblyEcosystem")}
              disabled={savingSection === "assemblyEcosystem"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-cyan-500 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-cyan-400 transition disabled:opacity-50"
            >
              {savingSection === "assemblyEcosystem" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save Assembly</span>
            </button>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Eyebrow</label>
                <input
                  type="text"
                  value={data.assemblyEcosystem.eyebrow}
                  onChange={(e) =>
                    setData({
                      ...data,
                      assemblyEcosystem: { ...data.assemblyEcosystem, eyebrow: e.target.value },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-slate-400 mb-1">Section Title</label>
                <input
                  type="text"
                  value={data.assemblyEcosystem.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      assemblyEcosystem: { ...data.assemblyEcosystem, title: e.target.value },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Lede / Description</label>
              <textarea
                rows={2}
                value={data.assemblyEcosystem.lede}
                onChange={(e) =>
                  setData({
                    ...data,
                    assemblyEcosystem: { ...data.assemblyEcosystem, lede: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white"
              />
            </div>

            {/* 4 Layers Grid */}
            <div className="pt-4 border-t border-slate-800 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                Identification Stack Layers ({data.assemblyEcosystem.layers.length})
              </h3>

              <div className="grid gap-4 md:grid-cols-2">
                {data.assemblyEcosystem.layers.map((layer, idx) => (
                  <div key={layer.step || idx} className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-cyan-400">Layer {layer.step}</span>
                      <span className="text-[11px] text-slate-400">{layer.badge}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[10px] text-slate-400">Title</label>
                        <input
                          type="text"
                          value={layer.title}
                          onChange={(e) => {
                            const updated = [...data.assemblyEcosystem.layers];
                            updated[idx].title = e.target.value;
                            setData({
                              ...data,
                              assemblyEcosystem: { ...data.assemblyEcosystem, layers: updated },
                            });
                          }}
                          className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-xs text-white font-bold"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-slate-400">Subtitle</label>
                        <input
                          type="text"
                          value={layer.subtitle}
                          onChange={(e) => {
                            const updated = [...data.assemblyEcosystem.layers];
                            updated[idx].subtitle = e.target.value;
                            setData({
                              ...data,
                              assemblyEcosystem: { ...data.assemblyEcosystem, layers: updated },
                            });
                          }}
                          className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-xs text-slate-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] text-slate-400">Benefit / Summary</label>
                      <textarea
                        rows={2}
                        value={layer.benefit}
                        onChange={(e) => {
                          const updated = [...data.assemblyEcosystem.layers];
                          updated[idx].benefit = e.target.value;
                          setData({
                            ...data,
                            assemblyEcosystem: { ...data.assemblyEcosystem, layers: updated },
                          });
                        }}
                        className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-xs text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] text-slate-400">Image Source / Upload</label>
                      <div className="flex items-center gap-1.5 mt-1">
                        <input
                          type="text"
                          value={layer.img}
                          onChange={(e) => {
                            const updated = [...data.assemblyEcosystem.layers];
                            updated[idx].img = e.target.value;
                            setData({
                              ...data,
                              assemblyEcosystem: { ...data.assemblyEcosystem, layers: updated },
                            });
                          }}
                          className="flex-1 rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-xs text-white"
                        />
                        <label className="cursor-pointer p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-slate-700">
                          <UploadCloud className="h-4 w-4" />
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) =>
                              handleFileUpload(e, (url) => {
                                const updated = [...data.assemblyEcosystem.layers];
                                updated[idx].img = url;
                                setData({
                                  ...data,
                                  assemblyEcosystem: { ...data.assemblyEcosystem, layers: updated },
                                });
                              })
                            }
                          />
                        </label>
                      </div>
                    </div>

                    {/* Bullet details */}
                    <div>
                      <label className="block text-[10px] text-slate-400 mb-1">Key Technical Points (one per line)</label>
                      <textarea
                        rows={3}
                        value={layer.details.join("\n")}
                        onChange={(e) => {
                          const updated = [...data.assemblyEcosystem.layers];
                          updated[idx].details = e.target.value.split("\n").filter(Boolean);
                          setData({
                            ...data,
                            assemblyEcosystem: { ...data.assemblyEcosystem, layers: updated },
                          });
                        }}
                        className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-xs text-white"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 4: RANGE MASTER SHOWCASE (V-1, V-2, V-3, H-1, H-2, Metal, CV-1, Fish Hook)
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "rangeMaster" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <h2 className="text-lg font-bold text-white">ID Card Holder Range (Master Models)</h2>
              <p className="text-xs text-slate-400">Specifications, imagery, tags, and suitability points for all holder models.</p>
            </div>
            <button
              type="button"
              onClick={() => saveSection("rangeMaster")}
              disabled={savingSection === "rangeMaster"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-cyan-500 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-cyan-400 transition disabled:opacity-50"
            >
              {savingSection === "rangeMaster" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save Models Range</span>
            </button>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Eyebrow</label>
                <input
                  type="text"
                  value={data.rangeMaster.eyebrow}
                  onChange={(e) =>
                    setData({
                      ...data,
                      rangeMaster: { ...data.rangeMaster, eyebrow: e.target.value },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-slate-400 mb-1">Section Title</label>
                <input
                  type="text"
                  value={data.rangeMaster.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      rangeMaster: { ...data.rangeMaster, title: e.target.value },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Lede / Description</label>
              <textarea
                rows={2}
                value={data.rangeMaster.lede}
                onChange={(e) =>
                  setData({
                    ...data,
                    rangeMaster: { ...data.rangeMaster, lede: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white"
              />
            </div>

            {/* Model List Cards */}
            <div className="pt-4 border-t border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                  Catalog Models ({data.rangeMaster.models.length})
                </h3>
                <button
                  type="button"
                  onClick={() => {
                    const newModel: DynamicHolderModel = {
                      code: "Custom-1",
                      badge: "New Holder",
                      category: "vertical",
                      title: "Custom Holder Model",
                      tagline: "Custom engineered identification holder",
                      description: "New holder description and compatibility details.",
                      image: "/images/ID card holder/V-1/V-1.png",
                      alt: "Custom Holder Model",
                      highlightTag: "New Arrival",
                      specs: [
                        { k: "Capacity", v: "1 card" },
                        { k: "Orientation", v: "Vertical" },
                      ],
                      suitable: ["Corporate", "Student IDs"],
                      conclusion: "Standard custom recommendation.",
                    };
                    setData({
                      ...data,
                      rangeMaster: {
                        ...data.rangeMaster,
                        models: [...data.rangeMaster.models, newModel],
                      },
                    });
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 border border-slate-700 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-slate-700"
                >
                  <Plus className="h-3.5 w-3.5 text-cyan-400" />
                  <span>Add New Model</span>
                </button>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                {data.rangeMaster.models.map((model, idx) => (
                  <div key={model.code || idx} className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-3 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-sm font-black text-cyan-400">{model.code}</span>
                          <span className="text-[10px] uppercase font-bold bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                            {model.category}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            const updated = data.rangeMaster.models.filter((_, i) => i !== idx);
                            setData({
                              ...data,
                              rangeMaster: { ...data.rangeMaster, models: updated },
                            });
                          }}
                          className="p-1.5 text-slate-500 hover:text-red-400 hover:bg-slate-900 rounded"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[10px] text-slate-400">Model Code</label>
                          <input
                            type="text"
                            value={model.code}
                            onChange={(e) => {
                              const updated = [...data.rangeMaster.models];
                              updated[idx].code = e.target.value;
                              setData({
                                ...data,
                                rangeMaster: { ...data.rangeMaster, models: updated },
                              });
                            }}
                            className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-xs text-white font-mono"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] text-slate-400">Badge Label</label>
                          <input
                            type="text"
                            value={model.badge}
                            onChange={(e) => {
                              const updated = [...data.rangeMaster.models];
                              updated[idx].badge = e.target.value;
                              setData({
                                ...data,
                                rangeMaster: { ...data.rangeMaster, models: updated },
                              });
                            }}
                            className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-xs text-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] text-slate-400">Full Title</label>
                        <input
                          type="text"
                          value={model.title}
                          onChange={(e) => {
                            const updated = [...data.rangeMaster.models];
                            updated[idx].title = e.target.value;
                            setData({
                              ...data,
                              rangeMaster: { ...data.rangeMaster, models: updated },
                            });
                          }}
                          className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-xs text-white font-bold"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] text-slate-400">Tagline / Short Hook</label>
                        <input
                          type="text"
                          value={model.tagline}
                          onChange={(e) => {
                            const updated = [...data.rangeMaster.models];
                            updated[idx].tagline = e.target.value;
                            setData({
                              ...data,
                              rangeMaster: { ...data.rangeMaster, models: updated },
                            });
                          }}
                          className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-xs text-slate-300"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] text-slate-400">Description</label>
                        <textarea
                          rows={2}
                          value={model.description}
                          onChange={(e) => {
                            const updated = [...data.rangeMaster.models];
                            updated[idx].description = e.target.value;
                            setData({
                              ...data,
                              rangeMaster: { ...data.rangeMaster, models: updated },
                            });
                          }}
                          className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-xs text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] text-slate-400">Image Source / Upload</label>
                        <div className="flex items-center gap-1.5 mt-1">
                          <input
                            type="text"
                            value={model.image}
                            onChange={(e) => {
                              const updated = [...data.rangeMaster.models];
                              updated[idx].image = e.target.value;
                              setData({
                                ...data,
                                rangeMaster: { ...data.rangeMaster, models: updated },
                              });
                            }}
                            className="flex-1 rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-xs text-white"
                          />
                          <label className="cursor-pointer p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-slate-700">
                            <UploadCloud className="h-4 w-4" />
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) =>
                                handleFileUpload(e, (url) => {
                                  const updated = [...data.rangeMaster.models];
                                  updated[idx].image = url;
                                  setData({
                                    ...data,
                                    rangeMaster: { ...data.rangeMaster, models: updated },
                                  });
                                })
                              }
                            />
                          </label>
                        </div>
                      </div>

                      {/* Suitable Points */}
                      <div>
                        <label className="block text-[10px] text-slate-400 mb-1">Suitable For (one per line)</label>
                        <textarea
                          rows={2}
                          value={model.suitable.join("\n")}
                          onChange={(e) => {
                            const updated = [...data.rangeMaster.models];
                            updated[idx].suitable = e.target.value.split("\n").filter(Boolean);
                            setData({
                              ...data,
                              rangeMaster: { ...data.rangeMaster, models: updated },
                            });
                          }}
                          className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-xs text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] text-slate-400">Conclusion / Recommendation Note</label>
                        <input
                          type="text"
                          value={model.conclusion}
                          onChange={(e) => {
                            const updated = [...data.rangeMaster.models];
                            updated[idx].conclusion = e.target.value;
                            setData({
                              ...data,
                              rangeMaster: { ...data.rangeMaster, models: updated },
                            });
                          }}
                          className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-xs text-slate-300"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 5: ENGINEERING GUIDE & DECISION MATRIX
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "engineering" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <h2 className="text-lg font-bold text-white">Engineering Guide &amp; 5-Step Decision Matrix</h2>
              <p className="text-xs text-slate-400">Orientation vs locking engineering comparisons and interactive decision wizard.</p>
            </div>
            <button
              type="button"
              onClick={() => saveSection("engineeringGuide")}
              disabled={savingSection === "engineeringGuide"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-cyan-500 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-cyan-400 transition disabled:opacity-50"
            >
              {savingSection === "engineeringGuide" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save Guide</span>
            </button>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Card 1: Orientation */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
              <h3 className="text-sm font-bold text-cyan-300 flex items-center gap-2">
                <Compass className="h-4 w-4" />
                <span>Card 1: Orientation Engineering</span>
              </h3>

              <div>
                <label className="block text-xs text-slate-400 mb-1">Title</label>
                <input
                  type="text"
                  value={data.engineeringGuide.orientationCard.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      engineeringGuide: {
                        ...data.engineeringGuide,
                        orientationCard: {
                          ...data.engineeringGuide.orientationCard,
                          title: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">Description</label>
                <textarea
                  rows={2}
                  value={data.engineeringGuide.orientationCard.description}
                  onChange={(e) =>
                    setData({
                      ...data,
                      engineeringGuide: {
                        ...data.engineeringGuide,
                        orientationCard: {
                          ...data.engineeringGuide.orientationCard,
                          description: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>

              <div className="p-3 rounded-2xl border border-slate-800 bg-slate-950 space-y-2">
                <span className="text-[11px] font-bold text-cyan-400">Vertical Option</span>
                <input
                  type="text"
                  value={data.engineeringGuide.orientationCard.verticalTitle}
                  onChange={(e) =>
                    setData({
                      ...data,
                      engineeringGuide: {
                        ...data.engineeringGuide,
                        orientationCard: {
                          ...data.engineeringGuide.orientationCard,
                          verticalTitle: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-white font-bold"
                />
                <textarea
                  rows={2}
                  value={data.engineeringGuide.orientationCard.verticalDesc}
                  onChange={(e) =>
                    setData({
                      ...data,
                      engineeringGuide: {
                        ...data.engineeringGuide,
                        orientationCard: {
                          ...data.engineeringGuide.orientationCard,
                          verticalDesc: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-slate-300"
                />
              </div>

              <div className="p-3 rounded-2xl border border-slate-800 bg-slate-950 space-y-2">
                <span className="text-[11px] font-bold text-cyan-400">Horizontal Option</span>
                <input
                  type="text"
                  value={data.engineeringGuide.orientationCard.horizontalTitle}
                  onChange={(e) =>
                    setData({
                      ...data,
                      engineeringGuide: {
                        ...data.engineeringGuide,
                        orientationCard: {
                          ...data.engineeringGuide.orientationCard,
                          horizontalTitle: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-white font-bold"
                />
                <textarea
                  rows={2}
                  value={data.engineeringGuide.orientationCard.horizontalDesc}
                  onChange={(e) =>
                    setData({
                      ...data,
                      engineeringGuide: {
                        ...data.engineeringGuide,
                        orientationCard: {
                          ...data.engineeringGuide.orientationCard,
                          horizontalDesc: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-slate-300"
                />
              </div>
            </div>

            {/* Card 2: Locking */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
              <h3 className="text-sm font-bold text-cyan-300 flex items-center gap-2">
                <Lock className="h-4 w-4" />
                <span>Card 2: Retention &amp; Locking</span>
              </h3>

              <div>
                <label className="block text-xs text-slate-400 mb-1">Title</label>
                <input
                  type="text"
                  value={data.engineeringGuide.lockingCard.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      engineeringGuide: {
                        ...data.engineeringGuide,
                        lockingCard: {
                          ...data.engineeringGuide.lockingCard,
                          title: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">Description</label>
                <textarea
                  rows={2}
                  value={data.engineeringGuide.lockingCard.description}
                  onChange={(e) =>
                    setData({
                      ...data,
                      engineeringGuide: {
                        ...data.engineeringGuide,
                        lockingCard: {
                          ...data.engineeringGuide.lockingCard,
                          description: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>

              <div className="p-3 rounded-2xl border border-slate-800 bg-slate-950 space-y-2">
                <span className="text-[11px] font-bold text-cyan-400">Standard Slip-In</span>
                <input
                  type="text"
                  value={data.engineeringGuide.lockingCard.dropInTitle}
                  onChange={(e) =>
                    setData({
                      ...data,
                      engineeringGuide: {
                        ...data.engineeringGuide,
                        lockingCard: {
                          ...data.engineeringGuide.lockingCard,
                          dropInTitle: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-white font-bold"
                />
                <textarea
                  rows={2}
                  value={data.engineeringGuide.lockingCard.dropInDesc}
                  onChange={(e) =>
                    setData({
                      ...data,
                      engineeringGuide: {
                        ...data.engineeringGuide,
                        lockingCard: {
                          ...data.engineeringGuide.lockingCard,
                          dropInDesc: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-slate-300"
                />
              </div>

              <div className="p-3 rounded-2xl border border-slate-800 bg-slate-950 space-y-2">
                <span className="text-[11px] font-bold text-cyan-400">Four-Side Lock</span>
                <input
                  type="text"
                  value={data.engineeringGuide.lockingCard.fourSideTitle}
                  onChange={(e) =>
                    setData({
                      ...data,
                      engineeringGuide: {
                        ...data.engineeringGuide,
                        lockingCard: {
                          ...data.engineeringGuide.lockingCard,
                          fourSideTitle: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-white font-bold"
                />
                <textarea
                  rows={2}
                  value={data.engineeringGuide.lockingCard.fourSideDesc}
                  onChange={(e) =>
                    setData({
                      ...data,
                      engineeringGuide: {
                        ...data.engineeringGuide,
                        lockingCard: {
                          ...data.engineeringGuide.lockingCard,
                          fourSideDesc: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-slate-300"
                />
              </div>
            </div>
          </div>

          {/* Decision Steps */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-300">
              5 Decision Matrix Steps ({data.engineeringGuide.decisionSteps.length})
            </h3>

            <div className="space-y-3">
              {data.engineeringGuide.decisionSteps.map((step, idx) => (
                <div key={idx} className="p-4 rounded-2xl border border-slate-800 bg-slate-950 space-y-2">
                  <span className="font-mono text-xs font-bold text-cyan-400">Step {idx + 1}</span>
                  <input
                    type="text"
                    value={step.q}
                    onChange={(e) => {
                      const updated = [...data.engineeringGuide.decisionSteps];
                      updated[idx].q = e.target.value;
                      setData({
                        ...data,
                        engineeringGuide: { ...data.engineeringGuide, decisionSteps: updated },
                      });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs text-white font-bold"
                    placeholder="Step Question"
                  />
                  <input
                    type="text"
                    value={step.a}
                    onChange={(e) => {
                      const updated = [...data.engineeringGuide.decisionSteps];
                      updated[idx].a = e.target.value;
                      setData({
                        ...data,
                        engineeringGuide: { ...data.engineeringGuide, decisionSteps: updated },
                      });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs text-cyan-300"
                    placeholder="Answer Formula"
                  />
                  <textarea
                    rows={2}
                    value={step.detail}
                    onChange={(e) => {
                      const updated = [...data.engineeringGuide.decisionSteps];
                      updated[idx].detail = e.target.value;
                      setData({
                        ...data,
                        engineeringGuide: { ...data.engineeringGuide, decisionSteps: updated },
                      });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs text-slate-300"
                    placeholder="Technical Detail"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 6: MULTI-SECTOR APPLICATIONS GRID
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "applications" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <h2 className="text-lg font-bold text-white">ID Card Holder Applications Across Sectors</h2>
              <p className="text-xs text-slate-400">Industry applications cards, recommended holder models, and links.</p>
            </div>
            <button
              type="button"
              onClick={() => saveSection("applications")}
              disabled={savingSection === "applications"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-cyan-500 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-cyan-400 transition disabled:opacity-50"
            >
              {savingSection === "applications" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save Applications</span>
            </button>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Eyebrow</label>
                <input
                  type="text"
                  value={data.applications.eyebrow}
                  onChange={(e) =>
                    setData({
                      ...data,
                      applications: { ...data.applications, eyebrow: e.target.value },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-slate-400 mb-1">Section Title</label>
                <input
                  type="text"
                  value={data.applications.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      applications: { ...data.applications, title: e.target.value },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 pt-4 border-t border-slate-800">
              {data.applications.items.map((app, idx) => (
                <div key={idx} className="p-4 rounded-2xl border border-slate-800 bg-slate-950 space-y-2.5 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-cyan-400">Sector #{idx + 1}</span>
                      <input
                        type="text"
                        value={app.tag}
                        onChange={(e) => {
                          const updated = [...data.applications.items];
                          updated[idx].tag = e.target.value;
                          setData({ ...data, applications: { ...data.applications, items: updated } });
                        }}
                        className="rounded border border-slate-800 bg-slate-900 px-2 py-0.5 text-[10px] text-slate-300"
                        placeholder="Tag"
                      />
                    </div>

                    <input
                      type="text"
                      value={app.title}
                      onChange={(e) => {
                        const updated = [...data.applications.items];
                        updated[idx].title = e.target.value;
                        setData({ ...data, applications: { ...data.applications, items: updated } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-white font-bold"
                      placeholder="Title"
                    />

                    <textarea
                      rows={2}
                      value={app.desc}
                      onChange={(e) => {
                        const updated = [...data.applications.items];
                        updated[idx].desc = e.target.value;
                        setData({ ...data, applications: { ...data.applications, items: updated } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-slate-300"
                      placeholder="Description"
                    />

                    <div>
                      <label className="block text-[10px] text-slate-400">Recommended Model</label>
                      <input
                        type="text"
                        value={app.recommended}
                        onChange={(e) => {
                          const updated = [...data.applications.items];
                          updated[idx].recommended = e.target.value;
                          setData({ ...data, applications: { ...data.applications, items: updated } });
                        }}
                        className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-cyan-300 font-bold"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 7: WORKFLOW, BUNDLES, QUALITY & DISPATCH
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "workflow" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <h2 className="text-lg font-bold text-white">Workflow, Bundles, Quality &amp; 72-Hour Dispatch</h2>
              <p className="text-xs text-slate-400">Manage wearable package bundles, 8 quality points, 6-step workflow, and dispatch promise.</p>
            </div>
            <button
              type="button"
              onClick={() => saveSection("workflowAndDispatch")}
              disabled={savingSection === "workflowAndDispatch"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-cyan-500 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-cyan-400 transition disabled:opacity-50"
            >
              {savingSection === "workflowAndDispatch" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save Workflow &amp; Dispatch</span>
            </button>
          </div>

          <div className="space-y-6">
            {/* Bundles */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 space-y-4">
              <h3 className="text-sm font-bold text-cyan-300">Wearable Bundle Systems (Tier 1 &amp; Tier 2)</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 rounded-2xl border border-slate-800 bg-slate-950 space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Tier 1 Essential</span>
                  <input
                    type="text"
                    value={data.workflowAndDispatch.bundles.tier1.title}
                    onChange={(e) =>
                      setData({
                        ...data,
                        workflowAndDispatch: {
                          ...data.workflowAndDispatch,
                          bundles: {
                            ...data.workflowAndDispatch.bundles,
                            tier1: {
                              ...data.workflowAndDispatch.bundles.tier1,
                              title: e.target.value,
                            },
                          },
                        },
                      })
                    }
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-white font-bold"
                  />
                  <textarea
                    rows={2}
                    value={data.workflowAndDispatch.bundles.tier1.desc}
                    onChange={(e) =>
                      setData({
                        ...data,
                        workflowAndDispatch: {
                          ...data.workflowAndDispatch,
                          bundles: {
                            ...data.workflowAndDispatch.bundles,
                            tier1: {
                              ...data.workflowAndDispatch.bundles.tier1,
                              desc: e.target.value,
                            },
                          },
                        },
                      })
                    }
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-slate-300"
                  />
                </div>

                <div className="p-4 rounded-2xl border border-cyan-500/30 bg-slate-950 space-y-2">
                  <span className="text-[10px] font-bold text-cyan-400 uppercase">Tier 2 Full Enterprise Set</span>
                  <input
                    type="text"
                    value={data.workflowAndDispatch.bundles.tier2.title}
                    onChange={(e) =>
                      setData({
                        ...data,
                        workflowAndDispatch: {
                          ...data.workflowAndDispatch,
                          bundles: {
                            ...data.workflowAndDispatch.bundles,
                            tier2: {
                              ...data.workflowAndDispatch.bundles.tier2,
                              title: e.target.value,
                            },
                          },
                        },
                      })
                    }
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-white font-bold"
                  />
                  <textarea
                    rows={2}
                    value={data.workflowAndDispatch.bundles.tier2.desc}
                    onChange={(e) =>
                      setData({
                        ...data,
                        workflowAndDispatch: {
                          ...data.workflowAndDispatch,
                          bundles: {
                            ...data.workflowAndDispatch.bundles,
                            tier2: {
                              ...data.workflowAndDispatch.bundles.tier2,
                              desc: e.target.value,
                            },
                          },
                        },
                      })
                    }
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-slate-300"
                  />
                </div>
              </div>
            </div>

            {/* Quality Points */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
              <h3 className="text-sm font-bold text-cyan-300">8-Point Quality Benchmark</h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {data.workflowAndDispatch.quality.points.map((pt, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={pt}
                      onChange={(e) => {
                        const updated = [...data.workflowAndDispatch.quality.points];
                        updated[idx] = e.target.value;
                        setData({
                          ...data,
                          workflowAndDispatch: {
                            ...data.workflowAndDispatch,
                            quality: { ...data.workflowAndDispatch.quality, points: updated },
                          },
                        });
                      }}
                      className="flex-1 rounded-xl border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-white"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* 6-Step Workflow */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 space-y-4">
              <h3 className="text-sm font-bold text-cyan-300">6-Step Ordering Workflow</h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {data.workflowAndDispatch.orderingWorkflow.steps.map((step, idx) => (
                  <div key={step.num || idx} className="p-4 rounded-2xl border border-slate-800 bg-slate-950 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-black text-cyan-400">Step {step.num}</span>
                      <input
                        type="text"
                        value={step.badge}
                        onChange={(e) => {
                          const updated = [...data.workflowAndDispatch.orderingWorkflow.steps];
                          updated[idx].badge = e.target.value;
                          setData({
                            ...data,
                            workflowAndDispatch: {
                              ...data.workflowAndDispatch,
                              orderingWorkflow: {
                                ...data.workflowAndDispatch.orderingWorkflow,
                                steps: updated,
                              },
                            },
                          });
                        }}
                        className="rounded border border-slate-800 bg-slate-900 px-2 py-0.5 text-[10px] text-slate-400"
                      />
                    </div>
                    <input
                      type="text"
                      value={step.title}
                      onChange={(e) => {
                        const updated = [...data.workflowAndDispatch.orderingWorkflow.steps];
                        updated[idx].title = e.target.value;
                        setData({
                          ...data,
                          workflowAndDispatch: {
                            ...data.workflowAndDispatch,
                            orderingWorkflow: {
                              ...data.workflowAndDispatch.orderingWorkflow,
                              steps: updated,
                            },
                          },
                        });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-white font-bold"
                    />
                    <textarea
                      rows={2}
                      value={step.body}
                      onChange={(e) => {
                        const updated = [...data.workflowAndDispatch.orderingWorkflow.steps];
                        updated[idx].body = e.target.value;
                        setData({
                          ...data,
                          workflowAndDispatch: {
                            ...data.workflowAndDispatch,
                            orderingWorkflow: {
                              ...data.workflowAndDispatch.orderingWorkflow,
                              steps: updated,
                            },
                          },
                        });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-slate-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Express Dispatch Banner & Closing CTA */}
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
                <h3 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>72-Hour Express Dispatch</span>
                </h3>
                <input
                  type="text"
                  value={data.workflowAndDispatch.expressDispatch.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      workflowAndDispatch: {
                        ...data.workflowAndDispatch,
                        expressDispatch: {
                          ...data.workflowAndDispatch.expressDispatch,
                          title: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white font-bold"
                />
                <textarea
                  rows={2}
                  value={data.workflowAndDispatch.expressDispatch.footerNote}
                  onChange={(e) =>
                    setData({
                      ...data,
                      workflowAndDispatch: {
                        ...data.workflowAndDispatch,
                        expressDispatch: {
                          ...data.workflowAndDispatch.expressDispatch,
                          footerNote: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-300"
                />
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
                <h3 className="text-sm font-bold text-cyan-300 flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  <span>Closing Luxury CTA Band</span>
                </h3>
                <input
                  type="text"
                  value={data.workflowAndDispatch.closingCta.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      workflowAndDispatch: {
                        ...data.workflowAndDispatch,
                        closingCta: {
                          ...data.workflowAndDispatch.closingCta,
                          title: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white font-bold"
                />
                <textarea
                  rows={2}
                  value={data.workflowAndDispatch.closingCta.description}
                  onChange={(e) =>
                    setData({
                      ...data,
                      workflowAndDispatch: {
                        ...data.workflowAndDispatch,
                        closingCta: {
                          ...data.workflowAndDispatch.closingCta,
                          description: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-300"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 8: FREQUENTLY ASKED QUESTIONS (FAQs)
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "faqs" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <h2 className="text-lg font-bold text-white">Frequently Asked Questions</h2>
              <p className="text-xs text-slate-400">Add, edit, reorder or remove Q&amp;As for card holders and attachments.</p>
            </div>
            <button
              type="button"
              onClick={() => saveSection("faqs")}
              disabled={savingSection === "faqs"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-cyan-500 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-cyan-400 transition disabled:opacity-50"
            >
              {savingSection === "faqs" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save FAQs</span>
            </button>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                FAQ Items ({data.faqs.items.length})
              </h3>
              <button
                type="button"
                onClick={() => {
                  setData({
                    ...data,
                    faqs: {
                      ...data.faqs,
                      items: [
                        ...data.faqs.items,
                        { q: "New Question Title?", a: "Detailed answer explaining technical specifications and process." },
                      ],
                    },
                  });
                }}
                className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:underline"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add FAQ</span>
              </button>
            </div>

            <div className="space-y-3">
              {data.faqs.items.map((faq, idx) => (
                <div key={idx} className="p-4 rounded-2xl border border-slate-800 bg-slate-950 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-cyan-400">FAQ #{idx + 1}</span>
                    <button
                      type="button"
                      onClick={() => {
                        const updated = data.faqs.items.filter((_, i) => i !== idx);
                        setData({ ...data, faqs: { ...data.faqs, items: updated } });
                      }}
                      className="p-1 text-slate-500 hover:text-red-400 hover:bg-slate-900 rounded"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <input
                    type="text"
                    value={faq.q}
                    onChange={(e) => {
                      const updated = [...data.faqs.items];
                      updated[idx].q = e.target.value;
                      setData({ ...data, faqs: { ...data.faqs, items: updated } });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs text-white font-bold"
                    placeholder="Question"
                  />
                  <textarea
                    rows={2}
                    value={faq.a}
                    onChange={(e) => {
                      const updated = [...data.faqs.items];
                      updated[idx].a = e.target.value;
                      setData({ ...data, faqs: { ...data.faqs, items: updated } });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs text-slate-300"
                    placeholder="Answer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 9: SEO & METADATA
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "meta" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <h2 className="text-lg font-bold text-white">SEO &amp; Page Metadata</h2>
              <p className="text-xs text-slate-400">Page title, meta description, and canonical URL path.</p>
            </div>
            <button
              type="button"
              onClick={() => saveSection("meta")}
              disabled={savingSection === "meta"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-cyan-500 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-cyan-400 transition disabled:opacity-50"
            >
              {savingSection === "meta" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save Metadata</span>
            </button>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 space-y-4 max-w-2xl">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">SEO Title Tag</label>
              <input
                type="text"
                value={data.meta.title}
                onChange={(e) => setData({ ...data, meta: { ...data.meta, title: e.target.value } })}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Meta Description</label>
              <textarea
                rows={3}
                value={data.meta.description}
                onChange={(e) =>
                  setData({ ...data, meta: { ...data.meta, description: e.target.value } })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Canonical Path</label>
              <input
                type="text"
                value={data.meta.path}
                onChange={(e) => setData({ ...data, meta: { ...data.meta, path: e.target.value } })}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white font-mono"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminIdCardHoldersPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center">
          <RefreshCw className="h-8 w-8 animate-spin text-cyan-400" />
        </div>
      }
    >
      <AdminIdCardHoldersContent />
    </Suspense>
  );
}
