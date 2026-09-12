"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  BookOpen,
  Sparkles,
  Save,
  RotateCcw,
  ExternalLink,
  Plus,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Boxes,
  GraduationCap,
  Briefcase,
  Layers,
  Radio,
  Ticket,
  QrCode,
  Calculator,
  ShieldCheck,
  Truck,
  Sliders,
  Check,
  Clock,
  ArrowRight,
  Info,
} from "lucide-react";
import type {
  DynamicGuidesData,
  DynamicGuidesHero,
  DynamicHeroShowcase,
  DynamicExplorerMatrix,
  DynamicReadinessEstimator,
  DynamicCategoriesGrid,
  DynamicGuidesClosingCta,
  DynamicGuidesMeta,
  DynamicGuideItem,
  DynamicHeroShowcasePillar,
} from "@/lib/dynamic-guides-types";

function AdminGuidesContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "hero";
  const [data, setData] = useState<DynamicGuidesData | null>(null);
  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [savingSection, setSavingSection] = useState<string | null>(null);
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
      const res = await fetch("/api/admin/guides");
      const json = await res.json();
      if (json.success && json.data) {
        setData(json.data);
      } else {
        setSaveError("Failed to load Guides data");
      }
    } catch (e: any) {
      setSaveError(e.message || "Network error loading data");
    } finally {
      setLoading(false);
    }
  };

  const handleSaveSection = async (sectionKey: keyof DynamicGuidesData) => {
    if (!data) return;
    try {
      setSaving(true);
      setSavingSection(sectionKey);
      setSaveSuccess(null);
      setSaveError(null);

      const res = await fetch("/api/admin/guides", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          section: sectionKey,
          sectionData: data[sectionKey],
        }),
      });

      const json = await res.json();
      if (json.success) {
        setSaveSuccess(`Section '${sectionKey}' saved and updated!`);
        setTimeout(() => setSaveSuccess(null), 3000);
      } else {
        setSaveError(json.error || "Failed to save section");
      }
    } catch (e: any) {
      setSaveError(e.message || "Error saving data");
    } finally {
      setSaving(false);
      setSavingSection(null);
    }
  };

  const handleSaveAll = async () => {
    if (!data) return;
    try {
      setSaving(true);
      setSaveSuccess(null);
      setSaveError(null);

      const res = await fetch("/api/admin/guides", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });

      const json = await res.json();
      if (json.success) {
        setSaveSuccess("Entire Guides page saved and published successfully!");
        setTimeout(() => setSaveSuccess(null), 3500);
      } else {
        setSaveError(json.error || "Failed to save entire page");
      }
    } catch (e: any) {
      setSaveError(e.message || "Error saving page");
    } finally {
      setSaving(false);
    }
  };

  const handleResetDefaults = async () => {
    if (
      !confirm(
        "Are you sure you want to reset all Guides sections back to factory defaults? Any custom edits will be reverted."
      )
    ) {
      return;
    }

    try {
      setSaving(true);
      const res = await fetch("/api/admin/guides", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "reset" }),
      });

      const json = await res.json();
      if (json.success && json.data) {
        setData(json.data);
        setSaveSuccess("Restored all sections to factory default configuration!");
        setTimeout(() => setSaveSuccess(null), 3500);
      }
    } catch (e: any) {
      setSaveError(e.message || "Error resetting defaults");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[450px]">
        <div className="flex flex-col items-center gap-3 text-slate-400">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent" />
          <p className="text-xs font-semibold uppercase tracking-wider">Loading Guides Data...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="p-8 text-center bg-rose-950/20 border border-rose-500/30 rounded-2xl text-rose-300 space-y-3">
        <AlertCircle className="h-8 w-8 mx-auto" />
        <h3 className="font-bold text-sm">Failed to load Guides data</h3>
        <button
          onClick={fetchPageData}
          className="px-4 py-2 bg-rose-500/20 hover:bg-rose-500/30 rounded-lg text-xs font-bold transition"
        >
          Try Reloading
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16">
      {/* ── Header Bar ── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900/90 border border-slate-800 p-5 rounded-3xl shadow-xl backdrop-blur-md">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 shadow-md">
              <BookOpen className="h-5 w-5" />
            </span>
            <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Guides &amp; Resources CMS
            </h1>
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/60 font-bold">
              Dynamic v1.0
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Control all 7 sections of the <code className="text-cyan-300">/resources/guides/</code> hub.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <Link
            href="/resources/guides/"
            target="_blank"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300 hover:text-white border border-slate-700 transition shadow-sm"
          >
            <ExternalLink className="h-3.5 w-3.5 text-cyan-400" />
            <span>Preview Live Page</span>
          </Link>

          <button
            onClick={handleResetDefaults}
            disabled={saving}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-950/40 hover:bg-rose-900/50 text-xs font-bold text-rose-300 border border-rose-800/40 transition shadow-sm"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset Defaults</span>
          </button>

          <button
            onClick={handleSaveAll}
            disabled={saving}
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-[#009fe3] to-cyan-500 hover:from-[#008bc9] hover:to-cyan-400 text-slate-950 text-xs font-black transition shadow-lg shadow-cyan-500/20 disabled:opacity-50"
          >
            <Save className="h-4 w-4" />
            <span>{saving ? "Saving Changes..." : "Publish All Changes"}</span>
          </button>
        </div>
      </div>

      {/* Notifications */}
      {saveSuccess && (
        <div className="p-3.5 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2.5 animate-fadeIn">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
          <span className="font-semibold">{saveSuccess}</span>
        </div>
      )}
      {saveError && (
        <div className="p-3.5 rounded-2xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2.5 animate-fadeIn">
          <AlertCircle className="h-4 w-4 shrink-0 text-rose-400" />
          <span className="font-semibold">{saveError}</span>
        </div>
      )}

      {/* ── Section Tabs ── */}
      <div className="flex flex-wrap gap-1.5 p-1.5 bg-slate-900/80 border border-slate-800 rounded-2xl">
        {[
          { id: "hero", label: "1. Hero Section", icon: Sparkles },
          { id: "showcase", label: "2. Showcase Pillars", icon: Boxes },
          { id: "matrix", label: "3. Guides Matrix & Items", icon: BookOpen },
          { id: "estimator", label: "4. Readiness Estimator", icon: Calculator },
          { id: "categories", label: "5. Sector Categories", icon: Layers },
          { id: "closing", label: "6. Closing CTA & SEO", icon: ShieldCheck },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition ${
                isActive
                  ? "bg-cyan-500 text-slate-950 shadow-md font-extrabold"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ═════════════════════════════════════════════════════════════
          TAB 1: HERO SECTION
          ═════════════════════════════════════════════════════════════ */}
      {activeTab === "hero" && (
        <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div>
              <h2 className="text-base font-bold text-white">Hero Header &amp; Feature Strip</h2>
              <p className="text-xs text-slate-400">Configure title text, badges, lede paragraph, spec pills, and CTAs.</p>
            </div>
            <button
              onClick={() => handleSaveSection("hero")}
              disabled={saving}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 text-xs font-bold transition"
            >
              <Save className="h-3.5 w-3.5" />
              <span>{savingSection === "hero" ? "Saving..." : "Save Section"}</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-[11px] font-bold text-slate-400 block mb-1">Badge Prefix</label>
              <input
                type="text"
                value={data.hero.badgePrefix}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: { ...data.hero, badgePrefix: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="text-[11px] font-bold text-slate-400 block mb-1">Badge Highlight</label>
              <input
                type="text"
                value={data.hero.badgeHighlight}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: { ...data.hero, badgeHighlight: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="text-[11px] font-bold text-slate-400 block mb-1">Title Prefix</label>
              <input
                type="text"
                value={data.hero.titlePrefix}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: { ...data.hero, titlePrefix: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="text-[11px] font-bold text-slate-400 block mb-1">Title Highlight (Gradient)</label>
              <input
                type="text"
                value={data.hero.titleHighlight}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: { ...data.hero, titleHighlight: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
          </div>

          <div>
            <label className="text-[11px] font-bold text-slate-400 block mb-1">Lede Description Paragraph</label>
            <textarea
              rows={3}
              value={data.hero.description}
              onChange={(e) =>
                setData({
                  ...data,
                  hero: { ...data.hero, description: e.target.value },
                })
              }
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white"
            />
          </div>

          {/* Feature Spec Strip Cards */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Spec Strip Cards (4 Cards)</h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {data.hero.featureCards.map((card, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <div>
                    <label className="text-[10px] font-mono text-slate-400">Card {idx + 1} Title</label>
                    <input
                      type="text"
                      value={card.title}
                      onChange={(e) => {
                        const updated = [...data.hero.featureCards];
                        updated[idx].title = e.target.value;
                        setData({ ...data, hero: { ...data.hero, featureCards: updated } });
                      }}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-slate-400">Subtitle</label>
                    <input
                      type="text"
                      value={card.subtitle}
                      onChange={(e) => {
                        const updated = [...data.hero.featureCards];
                        updated[idx].subtitle = e.target.value;
                        setData({ ...data, hero: { ...data.hero, featureCards: updated } });
                      }}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-slate-400">Icon Name</label>
                    <input
                      type="text"
                      value={card.iconName}
                      onChange={(e) => {
                        const updated = [...data.hero.featureCards];
                        updated[idx].iconName = e.target.value;
                        setData({ ...data, hero: { ...data.hero, featureCards: updated } });
                      }}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Buttons / CTAs</h3>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-[10px] font-mono font-bold text-cyan-400">Primary CTA</span>
                <input
                  type="text"
                  placeholder="Label"
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
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
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
                        primaryCta: { ...data.hero.primaryCta, href: e.target.value },
                      },
                    })
                  }
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-[10px] font-mono font-bold text-cyan-400">Secondary CTA</span>
                <input
                  type="text"
                  placeholder="Label"
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
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
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
                        secondaryCta: { ...data.hero.secondaryCta, href: e.target.value },
                      },
                    })
                  }
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-[10px] font-mono font-bold text-cyan-400">Tertiary CTA</span>
                <input
                  type="text"
                  placeholder="Label"
                  value={data.hero.tertiaryCta.label}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: {
                        ...data.hero,
                        tertiaryCta: { ...data.hero.tertiaryCta, label: e.target.value },
                      },
                    })
                  }
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                />
                <input
                  type="text"
                  placeholder="Href"
                  value={data.hero.tertiaryCta.href}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: {
                        ...data.hero,
                        tertiaryCta: { ...data.hero.tertiaryCta, href: e.target.value },
                      },
                    })
                  }
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                />
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="space-y-2">
            <label className="text-[11px] font-bold text-slate-400 block">Trust Badges (comma-separated)</label>
            <input
              type="text"
              value={data.hero.trustBadges.join(", ")}
              onChange={(e) =>
                setData({
                  ...data,
                  hero: {
                    ...data.hero,
                    trustBadges: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                  },
                })
              }
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
            />
          </div>
        </div>
      )}

      {/* ═════════════════════════════════════════════════════════════
          TAB 2: SHOWCASE PILLARS (HERO 3D STAGE)
          ═════════════════════════════════════════════════════════════ */}
      {activeTab === "showcase" && (
        <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div>
              <h2 className="text-base font-bold text-white">Hero Showcase Pillars</h2>
              <p className="text-xs text-slate-400">
                Manage the interactive 3D showcase pillars displayed on the right of the Hero section.
              </p>
            </div>
            <button
              onClick={() => handleSaveSection("heroShowcase")}
              disabled={saving}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 text-xs font-bold transition"
            >
              <Save className="h-3.5 w-3.5" />
              <span>{savingSection === "heroShowcase" ? "Saving..." : "Save Section"}</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-[11px] font-bold text-slate-400 block mb-1">Top Right Badge</label>
              <input
                type="text"
                value={data.heroShowcase.badge}
                onChange={(e) =>
                  setData({
                    ...data,
                    heroShowcase: { ...data.heroShowcase, badge: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
          </div>

          {/* Quick Specs Bottom Strip */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Bottom Spec Metrics</h3>
            <div className="grid gap-3 sm:grid-cols-3">
              {data.heroShowcase.quickSpecs.map((sp, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <span className="text-[10px] font-mono text-slate-500">Metric {idx + 1}</span>
                  <input
                    type="text"
                    placeholder="Label"
                    value={sp.label}
                    onChange={(e) => {
                      const updated = [...data.heroShowcase.quickSpecs];
                      updated[idx].label = e.target.value;
                      setData({
                        ...data,
                        heroShowcase: { ...data.heroShowcase, quickSpecs: updated },
                      });
                    }}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2 py-1 text-xs text-white"
                  />
                  <input
                    type="text"
                    placeholder="Value"
                    value={sp.value}
                    onChange={(e) => {
                      const updated = [...data.heroShowcase.quickSpecs];
                      updated[idx].value = e.target.value;
                      setData({
                        ...data,
                        heroShowcase: { ...data.heroShowcase, quickSpecs: updated },
                      });
                    }}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2 py-1 text-xs text-white font-bold"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Pillars List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Showcase Pillars ({data.heroShowcase.pillars.length})
              </h3>
              <button
                onClick={() => {
                  const newPillar: DynamicHeroShowcasePillar = {
                    id: `pillar-${Date.now()}`,
                    tabLabel: "New Pillar",
                    tabSub: "Guide",
                    guidePill: "Guide: New Topic",
                    headerSubtitle: "Interactive Overview",
                    cardTitle: "Pillar Title",
                    cardSubtitle: "Subheading description",
                    cardBadge: "Ready",
                    cardIcon: "BookOpen",
                    themeStyle: "light",
                    items: ["Item 1", "Item 2", "Item 3"],
                    footerLinkText: "Explore More",
                    footerLinkHref: "/resources/guides/",
                  };
                  setData({
                    ...data,
                    heroShowcase: {
                      ...data.heroShowcase,
                      pillars: [...data.heroShowcase.pillars, newPillar],
                    },
                  });
                }}
                className="flex items-center gap-1.5 px-3 py-1 bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 rounded-lg text-xs font-bold transition"
              >
                <Plus className="h-3 w-3" />
                <span>Add Pillar</span>
              </button>
            </div>

            <div className="space-y-4">
              {data.heroShowcase.pillars.map((pillar, pIdx) => (
                <div
                  key={pillar.id}
                  className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 relative"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-cyan-400">
                      Pillar #{pIdx + 1}: {pillar.tabLabel} ({pillar.id})
                    </span>
                    <button
                      onClick={() => {
                        const updated = data.heroShowcase.pillars.filter((_, i) => i !== pIdx);
                        setData({
                          ...data,
                          heroShowcase: { ...data.heroShowcase, pillars: updated },
                        });
                      }}
                      className="p-1 text-slate-500 hover:text-rose-400 transition"
                      title="Delete Pillar"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                      <label className="text-[10px] font-mono text-slate-400">Tab Label</label>
                      <input
                        type="text"
                        value={pillar.tabLabel}
                        onChange={(e) => {
                          const updated = [...data.heroShowcase.pillars];
                          updated[pIdx].tabLabel = e.target.value;
                          setData({ ...data, heroShowcase: { ...data.heroShowcase, pillars: updated } });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2 py-1.5 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-slate-400">Tab Sub</label>
                      <input
                        type="text"
                        value={pillar.tabSub}
                        onChange={(e) => {
                          const updated = [...data.heroShowcase.pillars];
                          updated[pIdx].tabSub = e.target.value;
                          setData({ ...data, heroShowcase: { ...data.heroShowcase, pillars: updated } });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2 py-1.5 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-slate-400">Guide Pill Tag</label>
                      <input
                        type="text"
                        value={pillar.guidePill}
                        onChange={(e) => {
                          const updated = [...data.heroShowcase.pillars];
                          updated[pIdx].guidePill = e.target.value;
                          setData({ ...data, heroShowcase: { ...data.heroShowcase, pillars: updated } });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2 py-1.5 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-slate-400">Theme Style</label>
                      <select
                        value={pillar.themeStyle}
                        onChange={(e: any) => {
                          const updated = [...data.heroShowcase.pillars];
                          updated[pIdx].themeStyle = e.target.value;
                          setData({ ...data, heroShowcase: { ...data.heroShowcase, pillars: updated } });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2 py-1.5 text-xs text-white"
                      >
                        <option value="light">Light Card</option>
                        <option value="cyan">Cyan / Dark Gradient</option>
                        <option value="emerald">Emerald Tier Style</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <div>
                      <label className="text-[10px] font-mono text-slate-400">Card Title</label>
                      <input
                        type="text"
                        value={pillar.cardTitle}
                        onChange={(e) => {
                          const updated = [...data.heroShowcase.pillars];
                          updated[pIdx].cardTitle = e.target.value;
                          setData({ ...data, heroShowcase: { ...data.heroShowcase, pillars: updated } });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2 py-1.5 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-slate-400">Card Subtitle</label>
                      <input
                        type="text"
                        value={pillar.cardSubtitle}
                        onChange={(e) => {
                          const updated = [...data.heroShowcase.pillars];
                          updated[pIdx].cardSubtitle = e.target.value;
                          setData({ ...data, heroShowcase: { ...data.heroShowcase, pillars: updated } });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2 py-1.5 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-slate-400">Card Badge</label>
                      <input
                        type="text"
                        value={pillar.cardBadge}
                        onChange={(e) => {
                          const updated = [...data.heroShowcase.pillars];
                          updated[pIdx].cardBadge = e.target.value;
                          setData({ ...data, heroShowcase: { ...data.heroShowcase, pillars: updated } });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2 py-1.5 text-xs text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-slate-400 block mb-1">
                      Checklist / Step Items (one per line)
                    </label>
                    <textarea
                      rows={3}
                      value={pillar.items.join("\n")}
                      onChange={(e) => {
                        const updated = [...data.heroShowcase.pillars];
                        updated[pIdx].items = e.target.value.split("\n").filter(Boolean);
                        setData({ ...data, heroShowcase: { ...data.heroShowcase, pillars: updated } });
                      }}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-xs text-white font-mono"
                    />
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="text-[10px] font-mono text-slate-400">Footer Link Text</label>
                      <input
                        type="text"
                        value={pillar.footerLinkText}
                        onChange={(e) => {
                          const updated = [...data.heroShowcase.pillars];
                          updated[pIdx].footerLinkText = e.target.value;
                          setData({ ...data, heroShowcase: { ...data.heroShowcase, pillars: updated } });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2 py-1.5 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-slate-400">Footer Link Href</label>
                      <input
                        type="text"
                        value={pillar.footerLinkHref}
                        onChange={(e) => {
                          const updated = [...data.heroShowcase.pillars];
                          updated[pIdx].footerLinkHref = e.target.value;
                          setData({ ...data, heroShowcase: { ...data.heroShowcase, pillars: updated } });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2 py-1.5 text-xs text-white"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ═════════════════════════════════════════════════════════════
          TAB 3: GUIDES EXPLORER MATRIX & ITEMS
          ═════════════════════════════════════════════════════════════ */}
      {activeTab === "matrix" && (
        <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div>
              <h2 className="text-base font-bold text-white">Featured Guides Explorer Matrix</h2>
              <p className="text-xs text-slate-400">
                Manage header text, filter categories, and all {data.explorerMatrix.guides.length} step-by-step guides.
              </p>
            </div>
            <button
              onClick={() => handleSaveSection("explorerMatrix")}
              disabled={saving}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 text-xs font-bold transition"
            >
              <Save className="h-3.5 w-3.5" />
              <span>{savingSection === "explorerMatrix" ? "Saving..." : "Save Section"}</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-[11px] font-bold text-slate-400 block mb-1">Eyebrow Badge</label>
              <input
                type="text"
                value={data.explorerMatrix.eyebrow}
                onChange={(e) =>
                  setData({
                    ...data,
                    explorerMatrix: { ...data.explorerMatrix, eyebrow: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="text-[11px] font-bold text-slate-400 block mb-1">Section Title</label>
              <input
                type="text"
                value={data.explorerMatrix.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    explorerMatrix: { ...data.explorerMatrix, title: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
          </div>

          <div>
            <label className="text-[11px] font-bold text-slate-400 block mb-1">Lede Paragraph</label>
            <textarea
              rows={2}
              value={data.explorerMatrix.lede}
              onChange={(e) =>
                setData({
                  ...data,
                  explorerMatrix: { ...data.explorerMatrix, lede: e.target.value },
                })
              }
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white"
            />
          </div>

          {/* Guide Items List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Practical Guides ({data.explorerMatrix.guides.length})
              </h3>
              <button
                onClick={() => {
                  const nextNum = (data.explorerMatrix.guides.length + 1).toString().padStart(2, "0");
                  const newGuide: DynamicGuideItem = {
                    number: nextNum,
                    title: "New Practical Guide",
                    category: "bulk",
                    body: "Detailed practical guidance description...",
                    iconName: "BookOpen",
                    tag: "Planning",
                    readTime: "3 min read",
                  };
                  setData({
                    ...data,
                    explorerMatrix: {
                      ...data.explorerMatrix,
                      guides: [...data.explorerMatrix.guides, newGuide],
                    },
                  });
                }}
                className="flex items-center gap-1.5 px-3 py-1 bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 rounded-lg text-xs font-bold transition"
              >
                <Plus className="h-3 w-3" />
                <span>Add Guide</span>
              </button>
            </div>

            <div className="space-y-4">
              {data.explorerMatrix.guides.map((guide, gIdx) => (
                <div
                  key={guide.number + gIdx}
                  className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-300 font-mono text-xs font-black">
                        {guide.number}
                      </span>
                      <span className="text-sm font-bold text-white">{guide.title}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400">
                        {guide.category}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        const updated = data.explorerMatrix.guides.filter((_, i) => i !== gIdx);
                        setData({
                          ...data,
                          explorerMatrix: { ...data.explorerMatrix, guides: updated },
                        });
                      }}
                      className="p-1 text-slate-500 hover:text-rose-400 transition"
                      title="Delete Guide"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-4">
                    <div>
                      <label className="text-[10px] font-mono text-slate-400">Number</label>
                      <input
                        type="text"
                        value={guide.number}
                        onChange={(e) => {
                          const updated = [...data.explorerMatrix.guides];
                          updated[gIdx].number = e.target.value;
                          setData({ ...data, explorerMatrix: { ...data.explorerMatrix, guides: updated } });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2 py-1 text-xs text-white font-mono"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-slate-400">Category Tag</label>
                      <input
                        type="text"
                        value={guide.category}
                        onChange={(e) => {
                          const updated = [...data.explorerMatrix.guides];
                          updated[gIdx].category = e.target.value;
                          setData({ ...data, explorerMatrix: { ...data.explorerMatrix, guides: updated } });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2 py-1 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-slate-400">Display Badge Tag</label>
                      <input
                        type="text"
                        value={guide.tag}
                        onChange={(e) => {
                          const updated = [...data.explorerMatrix.guides];
                          updated[gIdx].tag = e.target.value;
                          setData({ ...data, explorerMatrix: { ...data.explorerMatrix, guides: updated } });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2 py-1 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-slate-400">Read Time</label>
                      <input
                        type="text"
                        value={guide.readTime}
                        onChange={(e) => {
                          const updated = [...data.explorerMatrix.guides];
                          updated[gIdx].readTime = e.target.value;
                          setData({ ...data, explorerMatrix: { ...data.explorerMatrix, guides: updated } });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2 py-1 text-xs text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-slate-400">Title</label>
                    <input
                      type="text"
                      value={guide.title}
                      onChange={(e) => {
                        const updated = [...data.explorerMatrix.guides];
                        updated[gIdx].title = e.target.value;
                        setData({ ...data, explorerMatrix: { ...data.explorerMatrix, guides: updated } });
                      }}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-slate-400">Body</label>
                    <textarea
                      rows={2}
                      value={guide.body}
                      onChange={(e) => {
                        const updated = [...data.explorerMatrix.guides];
                        updated[gIdx].body = e.target.value;
                        setData({ ...data, explorerMatrix: { ...data.explorerMatrix, guides: updated } });
                      }}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-xs text-white"
                    />
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="text-[10px] font-mono text-slate-400">Checklist Items (one per line)</label>
                      <textarea
                        rows={3}
                        value={guide.list?.join("\n") || ""}
                        onChange={(e) => {
                          const updated = [...data.explorerMatrix.guides];
                          const lines = e.target.value.split("\n").filter(Boolean);
                          updated[gIdx].list = lines.length > 0 ? lines : undefined;
                          setData({ ...data, explorerMatrix: { ...data.explorerMatrix, guides: updated } });
                        }}
                        placeholder="e.g. Student name..."
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-xs text-white font-mono"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-slate-400">Workflow Steps (one per line)</label>
                      <textarea
                        rows={3}
                        value={guide.workflow?.join("\n") || ""}
                        onChange={(e) => {
                          const updated = [...data.explorerMatrix.guides];
                          const lines = e.target.value.split("\n").filter(Boolean);
                          updated[gIdx].workflow = lines.length > 0 ? lines : undefined;
                          setData({ ...data, explorerMatrix: { ...data.explorerMatrix, guides: updated } });
                        }}
                        placeholder="e.g. Form, QR, Preview..."
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-xs text-white font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="text-[10px] font-mono text-slate-400">Related Service Page Link</label>
                      <input
                        type="text"
                        value={guide.relatedHref || ""}
                        onChange={(e) => {
                          const updated = [...data.explorerMatrix.guides];
                          updated[gIdx].relatedHref = e.target.value;
                          setData({ ...data, explorerMatrix: { ...data.explorerMatrix, guides: updated } });
                        }}
                        placeholder="/student-id-card-printing/"
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2 py-1.5 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-slate-400">Special Note / Tip</label>
                      <input
                        type="text"
                        value={guide.note || ""}
                        onChange={(e) => {
                          const updated = [...data.explorerMatrix.guides];
                          updated[gIdx].note = e.target.value || undefined;
                          setData({ ...data, explorerMatrix: { ...data.explorerMatrix, guides: updated } });
                        }}
                        placeholder="Optional note..."
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2 py-1.5 text-xs text-white"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ═════════════════════════════════════════════════════════════
          TAB 4: READINESS ESTIMATOR
          ═════════════════════════════════════════════════════════════ */}
      {activeTab === "estimator" && (
        <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div>
              <h2 className="text-base font-bold text-white">Project Readiness Estimator Tool</h2>
              <p className="text-xs text-slate-400">
                Manage the checklist questions, score weights, and dynamic recommendation logic.
              </p>
            </div>
            <button
              onClick={() => handleSaveSection("readinessEstimator")}
              disabled={saving}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 text-xs font-bold transition"
            >
              <Save className="h-3.5 w-3.5" />
              <span>{savingSection === "readinessEstimator" ? "Saving..." : "Save Section"}</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-[11px] font-bold text-slate-400 block mb-1">Eyebrow</label>
              <input
                type="text"
                value={data.readinessEstimator.eyebrow}
                onChange={(e) =>
                  setData({
                    ...data,
                    readinessEstimator: { ...data.readinessEstimator, eyebrow: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="text-[11px] font-bold text-slate-400 block mb-1">Title</label>
              <input
                type="text"
                value={data.readinessEstimator.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    readinessEstimator: { ...data.readinessEstimator, title: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
          </div>

          <div>
            <label className="text-[11px] font-bold text-slate-400 block mb-1">Lede Description</label>
            <textarea
              rows={2}
              value={data.readinessEstimator.lede}
              onChange={(e) =>
                setData({
                  ...data,
                  readinessEstimator: { ...data.readinessEstimator, lede: e.target.value },
                })
              }
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white"
            />
          </div>

          {/* Checklist Items */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Checklist Questions &amp; Score Weights
            </h3>
            <div className="space-y-3">
              {data.readinessEstimator.checklist.map((item, idx) => (
                <div key={item.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 grid gap-3 sm:grid-cols-12 items-center">
                  <div className="sm:col-span-1 text-center font-mono text-xs font-bold text-cyan-400">
                    {idx + 1}
                  </div>
                  <div className="sm:col-span-5">
                    <input
                      type="text"
                      value={item.label}
                      onChange={(e) => {
                        const updated = [...data.readinessEstimator.checklist];
                        updated[idx].label = e.target.value;
                        setData({
                          ...data,
                          readinessEstimator: { ...data.readinessEstimator, checklist: updated },
                        });
                      }}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div className="sm:col-span-4">
                    <input
                      type="text"
                      value={item.sub}
                      onChange={(e) => {
                        const updated = [...data.readinessEstimator.checklist];
                        updated[idx].sub = e.target.value;
                        setData({
                          ...data,
                          readinessEstimator: { ...data.readinessEstimator, checklist: updated },
                        });
                      }}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-300"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono text-slate-500">Weight:</span>
                      <input
                        type="number"
                        value={item.weight}
                        onChange={(e) => {
                          const updated = [...data.readinessEstimator.checklist];
                          updated[idx].weight = Number(e.target.value);
                          setData({
                            ...data,
                            readinessEstimator: { ...data.readinessEstimator, checklist: updated },
                          });
                        }}
                        className="w-16 bg-slate-900 border border-slate-800 rounded-lg px-2 py-1.5 text-xs text-white font-mono text-center"
                      />
                      <span className="text-[10px] text-slate-500">%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Dynamic Recommendations</h3>
            <div className="space-y-3">
              <div>
                <label className="text-[11px] font-bold text-emerald-400 block mb-1">
                  High Score (≥ 70%) Recommendation
                </label>
                <textarea
                  rows={2}
                  value={data.readinessEstimator.highScoreRecommendation}
                  onChange={(e) =>
                    setData({
                      ...data,
                      readinessEstimator: {
                        ...data.readinessEstimator,
                        highScoreRecommendation: e.target.value,
                      },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white"
                />
              </div>
              <div>
                <label className="text-[11px] font-bold text-cyan-400 block mb-1">
                  Planning Score (&lt; 70%) Recommendation
                </label>
                <textarea
                  rows={2}
                  value={data.readinessEstimator.lowScoreRecommendation}
                  onChange={(e) =>
                    setData({
                      ...data,
                      readinessEstimator: {
                        ...data.readinessEstimator,
                        lowScoreRecommendation: e.target.value,
                      },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═════════════════════════════════════════════════════════════
          TAB 5: SECTOR CATEGORIES GRID
          ═════════════════════════════════════════════════════════════ */}
      {activeTab === "categories" && (
        <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div>
              <h2 className="text-base font-bold text-white">Sector Categories Grid</h2>
              <p className="text-xs text-slate-400">
                Manage the institutional sector cards linking to specific services.
              </p>
            </div>
            <button
              onClick={() => handleSaveSection("categoriesGrid")}
              disabled={saving}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 text-xs font-bold transition"
            >
              <Save className="h-3.5 w-3.5" />
              <span>{savingSection === "categoriesGrid" ? "Saving..." : "Save Section"}</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className="text-[11px] font-bold text-slate-400 block mb-1">Eyebrow</label>
              <input
                type="text"
                value={data.categoriesGrid.eyebrow}
                onChange={(e) =>
                  setData({
                    ...data,
                    categoriesGrid: { ...data.categoriesGrid, eyebrow: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="text-[11px] font-bold text-slate-400 block mb-1">Title</label>
              <input
                type="text"
                value={data.categoriesGrid.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    categoriesGrid: { ...data.categoriesGrid, title: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="text-[11px] font-bold text-slate-400 block mb-1">Badge Count Text</label>
              <input
                type="text"
                value={data.categoriesGrid.badgeText}
                onChange={(e) =>
                  setData({
                    ...data,
                    categoriesGrid: { ...data.categoriesGrid, badgeText: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Category Cards ({data.categoriesGrid.categories.length})
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.categoriesGrid.categories.map((cat, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-cyan-400 font-bold">Category #{idx + 1}</span>
                    <input
                      type="text"
                      value={cat.tag}
                      placeholder="Tag"
                      onChange={(e) => {
                        const updated = [...data.categoriesGrid.categories];
                        updated[idx].tag = e.target.value;
                        setData({ ...data, categoriesGrid: { ...data.categoriesGrid, categories: updated } });
                      }}
                      className="w-28 bg-slate-900 border border-slate-800 rounded px-2 py-0.5 text-[10px] text-slate-300 text-right"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-slate-400">Title</label>
                    <input
                      type="text"
                      value={cat.title}
                      onChange={(e) => {
                        const updated = [...data.categoriesGrid.categories];
                        updated[idx].title = e.target.value;
                        setData({ ...data, categoriesGrid: { ...data.categoriesGrid, categories: updated } });
                      }}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-slate-400">Description</label>
                    <textarea
                      rows={2}
                      value={cat.desc}
                      onChange={(e) => {
                        const updated = [...data.categoriesGrid.categories];
                        updated[idx].desc = e.target.value;
                        setData({ ...data, categoriesGrid: { ...data.categoriesGrid, categories: updated } });
                      }}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-xs text-white"
                    />
                  </div>
                  <div className="grid gap-2 grid-cols-2">
                    <div>
                      <label className="text-[10px] font-mono text-slate-400">Icon</label>
                      <input
                        type="text"
                        value={cat.iconName}
                        onChange={(e) => {
                          const updated = [...data.categoriesGrid.categories];
                          updated[idx].iconName = e.target.value;
                          setData({ ...data, categoriesGrid: { ...data.categoriesGrid, categories: updated } });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2 py-1 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-slate-400">Target Link</label>
                      <input
                        type="text"
                        value={cat.link}
                        onChange={(e) => {
                          const updated = [...data.categoriesGrid.categories];
                          updated[idx].link = e.target.value;
                          setData({ ...data, categoriesGrid: { ...data.categoriesGrid, categories: updated } });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2 py-1 text-xs text-white"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ═════════════════════════════════════════════════════════════
          TAB 6: CLOSING CTA & SEO META
          ═════════════════════════════════════════════════════════════ */}
      {activeTab === "closing" && (
        <div className="space-y-6">
          {/* Closing CTA */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <h2 className="text-base font-bold text-white">Closing Banner CTA</h2>
                <p className="text-xs text-slate-400">
                  Configure the ultra-luxury dark banner at the bottom of the page.
                </p>
              </div>
              <button
                onClick={() => handleSaveSection("closingCta")}
                disabled={saving}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 text-xs font-bold transition"
              >
                <Save className="h-3.5 w-3.5" />
                <span>{savingSection === "closingCta" ? "Saving..." : "Save Banner"}</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-[11px] font-bold text-slate-400 block mb-1">Badge</label>
                <input
                  type="text"
                  value={data.closingCta.badge}
                  onChange={(e) =>
                    setData({
                      ...data,
                      closingCta: { ...data.closingCta, badge: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
              <div>
                <label className="text-[11px] font-bold text-slate-400 block mb-1">Title</label>
                <input
                  type="text"
                  value={data.closingCta.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      closingCta: { ...data.closingCta, title: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-400 block mb-1">Description</label>
              <textarea
                rows={2}
                value={data.closingCta.description}
                onChange={(e) =>
                  setData({
                    ...data,
                    closingCta: { ...data.closingCta, description: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-[10px] font-mono font-bold text-cyan-400">Primary Button</span>
                <input
                  type="text"
                  placeholder="Label"
                  value={data.closingCta.primaryCta.label}
                  onChange={(e) =>
                    setData({
                      ...data,
                      closingCta: {
                        ...data.closingCta,
                        primaryCta: { ...data.closingCta.primaryCta, label: e.target.value },
                      },
                    })
                  }
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                />
                <input
                  type="text"
                  placeholder="Href"
                  value={data.closingCta.primaryCta.href}
                  onChange={(e) =>
                    setData({
                      ...data,
                      closingCta: {
                        ...data.closingCta,
                        primaryCta: { ...data.closingCta.primaryCta, href: e.target.value },
                      },
                    })
                  }
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-[10px] font-mono font-bold text-cyan-400">Secondary Button</span>
                <input
                  type="text"
                  placeholder="Label"
                  value={data.closingCta.secondaryCta.label}
                  onChange={(e) =>
                    setData({
                      ...data,
                      closingCta: {
                        ...data.closingCta,
                        secondaryCta: { ...data.closingCta.secondaryCta, label: e.target.value },
                      },
                    })
                  }
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                />
                <input
                  type="text"
                  placeholder="Href"
                  value={data.closingCta.secondaryCta.href}
                  onChange={(e) =>
                    setData({
                      ...data,
                      closingCta: {
                        ...data.closingCta,
                        secondaryCta: { ...data.closingCta.secondaryCta, href: e.target.value },
                      },
                    })
                  }
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-[10px] font-mono font-bold text-cyan-400">Tertiary Button</span>
                <input
                  type="text"
                  placeholder="Label"
                  value={data.closingCta.tertiaryCta.label}
                  onChange={(e) =>
                    setData({
                      ...data,
                      closingCta: {
                        ...data.closingCta,
                        tertiaryCta: { ...data.closingCta.tertiaryCta, label: e.target.value },
                      },
                    })
                  }
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                />
                <input
                  type="text"
                  placeholder="Href"
                  value={data.closingCta.tertiaryCta.href}
                  onChange={(e) =>
                    setData({
                      ...data,
                      closingCta: {
                        ...data.closingCta,
                        tertiaryCta: { ...data.closingCta.tertiaryCta, href: e.target.value },
                      },
                    })
                  }
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-[11px] font-bold text-slate-400 block mb-1">Footer Brand Title</label>
                <input
                  type="text"
                  value={data.closingCta.footerTitle}
                  onChange={(e) =>
                    setData({
                      ...data,
                      closingCta: { ...data.closingCta, footerTitle: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
              <div>
                <label className="text-[11px] font-bold text-slate-400 block mb-1">Footer Subtitle</label>
                <input
                  type="text"
                  value={data.closingCta.footerSubtitle}
                  onChange={(e) =>
                    setData({
                      ...data,
                      closingCta: { ...data.closingCta, footerSubtitle: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
            </div>
          </div>

          {/* SEO Metadata */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <h2 className="text-base font-bold text-white">SEO &amp; OpenGraph Metadata</h2>
                <p className="text-xs text-slate-400">Search engine title, meta description and canonical URL.</p>
              </div>
              <button
                onClick={() => handleSaveSection("meta")}
                disabled={saving}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 text-xs font-bold transition"
              >
                <Save className="h-3.5 w-3.5" />
                <span>{savingSection === "meta" ? "Saving..." : "Save Meta"}</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-[11px] font-bold text-slate-400 block mb-1">Meta Title</label>
                <input
                  type="text"
                  value={data.meta.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      meta: { ...data.meta, title: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
              <div>
                <label className="text-[11px] font-bold text-slate-400 block mb-1">Path</label>
                <input
                  type="text"
                  value={data.meta.path}
                  onChange={(e) =>
                    setData({
                      ...data,
                      meta: { ...data.meta, path: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white font-mono"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-400 block mb-1">Meta Description</label>
              <textarea
                rows={2}
                value={data.meta.description}
                onChange={(e) =>
                  setData({
                    ...data,
                    meta: { ...data.meta, description: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminGuidesPage() {
  return (
    <Suspense
      fallback={
        <div className="p-8 text-center text-slate-500 text-xs font-semibold">
          Loading Guides Admin Control Panel...
        </div>
      }
    >
      <AdminGuidesContent />
    </Suspense>
  );
}
