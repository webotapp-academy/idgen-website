"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import {
  Link2,
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
  Anchor,
  Zap,
  Check,
  Award,
  Clock,
  MessageSquare,
  Layers,
} from "lucide-react";
import type {
  DynamicIdCardHooksData,
  DynamicIdCardHooksHero,
  DynamicIdCardHooksQuickSelection,
  DynamicIdCardHooksAssembly,
  DynamicIdCardHooksRangeMaster,
  DynamicIdCardHooksEngineeringGuide,
  DynamicIdCardHooksApplications,
  DynamicIdCardHooksWorkflowAndDispatch,
  DynamicIdCardHooksFaqs,
  DynamicIdCardHooksSeo,
  HookSlide,
  HookSelectionItem,
  HookStackLayer,
  MasterHookSection,
  HookFactor,
  HookUseItem,
  CompleteSetTier,
  HookOrderingStep,
  CtaButton,
  DynamicIdCardHooksFaqItem,
} from "@/lib/dynamic-id-card-hooks-types";

function AdminIdCardHooksContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "hero";
  const [data, setData] = useState<DynamicIdCardHooksData | null>(null);
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
      const res = await fetch("/api/admin/id-card-hooks");
      const json = await res.json();
      if (json.success && json.data) {
        setData(json.data);
      } else {
        setSaveError("Failed to load ID Card Hooks data");
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

      const res = await fetch("/api/admin/id-card-hooks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });
      const json = await res.json();

      if (json.success) {
        setSaveSuccess("Entire ID Card Hooks page published successfully!");
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

  const saveSection = async (sectionName: keyof DynamicIdCardHooksData) => {
    if (!data) return;
    try {
      setSavingSection(sectionName);
      setSaveError(null);
      setSaveSuccess(null);

      const res = await fetch("/api/admin/id-card-hooks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          section: sectionName,
          sectionData: data[sectionName],
        }),
      });
      const json = await res.json();

      if (json.success) {
        setSaveSuccess(`Section "${sectionName}" saved successfully!`);
        setTimeout(() => setSaveSuccess(null), 3500);
      } else {
        setSaveError(json.error || `Failed to save section ${sectionName}`);
      }
    } catch (err: any) {
      setSaveError(err.message || "Network error while saving section");
    } finally {
      setSavingSection(null);
    }
  };

  const handleResetDefaults = async () => {
    if (
      !confirm(
        "Are you sure you want to restore the ID Card Hooks page to original factory defaults? All custom changes will be replaced."
      )
    ) {
      return;
    }

    try {
      setLoading(true);
      setSaveError(null);
      const res = await fetch("/api/admin/id-card-hooks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "reset" }),
      });
      const json = await res.json();
      if (json.success && json.data) {
        setData(json.data);
        setSaveSuccess("ID Card Hooks page restored to factory defaults!");
        setTimeout(() => setSaveSuccess(null), 4000);
      } else {
        setSaveError(json.error || "Reset failed");
      }
    } catch (e: any) {
      setSaveError(e.message || "Failed to reset");
    } finally {
      setLoading(false);
    }
  };

  if (loading || !data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <RefreshCw className="h-8 w-8 animate-spin text-cyan-400" />
        <p className="text-sm font-semibold text-slate-400">
          Loading ID Card Hooks CMS...
        </p>
      </div>
    );
  }

  const tabs = [
    { id: "hero", label: "Hero & Carousel", icon: Sparkles },
    { id: "quickSelection", label: "Quick Selection", icon: Sliders },
    { id: "assembly", label: "Assembly Ecosystem", icon: Layers },
    { id: "rangeMaster", label: "Catalog & Setups", icon: Boxes },
    { id: "engineeringGuide", label: "Engineering Guide", icon: ShieldCheck },
    { id: "applications", label: "Applications", icon: GraduationCap },
    { id: "workflowAndDispatch", label: "Workflow & Dispatch", icon: Clock },
    { id: "faqs", label: "Institutional FAQs", icon: HelpCircle },
    { id: "seo", label: "SEO & Meta", icon: Eye },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900/90 border border-slate-800 p-5 sm:p-6 rounded-3xl shadow-xl">
        <div>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-cyan-400 mb-1">
            <Link2 className="h-4 w-4" />
            <span>ID Card Hooks &amp; Attachments CMS</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            ID Card Hooks Control Panel
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Dynamic content management for the public{" "}
            <code className="text-cyan-300">/id-card-hooks/</code> page.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/id-card-hooks/"
            target="_blank"
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs flex items-center gap-2 border border-slate-700 transition"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            <span>View Live Page</span>
          </Link>
          <button
            onClick={handleResetDefaults}
            className="px-4 py-2.5 rounded-xl bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 font-semibold text-xs flex items-center gap-2 border border-rose-800/50 transition"
            title="Restore original factory defaults"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset Defaults</span>
          </button>
          <button
            onClick={saveWholePage}
            disabled={saving}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/20 transition disabled:opacity-50"
          >
            {saving ? (
              <RefreshCw className="h-4 w-4 animate-spin" />
            ) : (
              <Save className="h-4 w-4" />
            )}
            <span>{saving ? "Publishing..." : "Publish Full Page"}</span>
          </button>
        </div>
      </div>

      {/* Notifications */}
      {saveSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs font-bold flex items-center gap-2.5 shadow-lg animate-fade-in">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          <span>{saveSuccess}</span>
        </div>
      )}
      {saveError && (
        <div className="p-4 rounded-2xl bg-rose-950/80 border border-rose-500/50 text-rose-300 text-xs font-bold flex items-center gap-2.5 shadow-lg animate-fade-in">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{saveError}</span>
        </div>
      )}

      {/* Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-3 border-b border-slate-800">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-extrabold transition-all whitespace-nowrap ${
                isActive
                  ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 scale-[1.02]"
                  : "bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ─────────────────────────────────────────────────────────────
          TAB 1: HERO & SLIDES
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "hero" && (
        <div className="bg-slate-900/70 border border-slate-800 p-6 sm:p-8 rounded-3xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">Hero Section &amp; Visual Slider</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Edit main headings, badges, configuration formula, spec cards, and slider images.
              </p>
            </div>
            <button
              onClick={() => saveSection("hero")}
              disabled={savingSection === "hero"}
              className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex items-center gap-1.5 transition self-start disabled:opacity-50"
            >
              <Save className="h-3.5 w-3.5" />
              <span>{savingSection === "hero" ? "Saving..." : "Save Hero Section"}</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Badge Title</label>
              <input
                type="text"
                value={data.hero.badge}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: { ...data.hero, badge: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:border-cyan-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Badge Subtitle</label>
              <input
                type="text"
                value={data.hero.badgeSub}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: { ...data.hero, badgeSub: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:border-cyan-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Main Title Prefix</label>
              <input
                type="text"
                value={data.hero.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: { ...data.hero, title: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:border-cyan-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Highlighted Title</label>
              <input
                type="text"
                value={data.hero.highlight}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: { ...data.hero, highlight: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:border-cyan-500 outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-300 mb-1">Description / Lede</label>
              <textarea
                rows={3}
                value={data.hero.description}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: { ...data.hero, description: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:border-cyan-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Configuration Label</label>
              <input
                type="text"
                value={data.hero.typicalConfigLabel}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: { ...data.hero, typicalConfigLabel: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:border-cyan-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Configuration Formula</label>
              <input
                type="text"
                value={data.hero.typicalConfigValue}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: { ...data.hero, typicalConfigValue: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:border-cyan-500 outline-none"
              />
            </div>
          </div>

          {/* 4 Spec Strip Items */}
          <div className="pt-4 border-t border-slate-800 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Hero Spec Strip Cards
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {data.hero.specStrip.map((spec, idx) => (
                <div key={idx} className="p-3.5 bg-slate-950 border border-slate-800 rounded-2xl space-y-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase">Card {idx + 1}</span>
                  <input
                    type="text"
                    placeholder="Title"
                    value={spec.title}
                    onChange={(e) => {
                      const updated = [...data.hero.specStrip];
                      updated[idx].title = e.target.value;
                      setData({
                        ...data,
                        hero: { ...data.hero, specStrip: updated },
                      });
                    }}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                  />
                  <input
                    type="text"
                    placeholder="Description"
                    value={spec.desc}
                    onChange={(e) => {
                      const updated = [...data.hero.specStrip];
                      updated[idx].desc = e.target.value;
                      setData({
                        ...data,
                        hero: { ...data.hero, specStrip: updated },
                      });
                    }}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Slides Manager */}
          <div className="pt-4 border-t border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Hero Showcase Slides ({data.hero.slides.length})
              </h3>
              <button
                type="button"
                onClick={() => {
                  const newSlide: HookSlide = {
                    id: `slide-${Date.now()}`,
                    imageSrc: "/images/product-hooks-hardware.jpg",
                    alt: "ID Card Hook Hardware",
                    title: "New ID Card Hook Slide",
                    category: "Hook Type",
                    topBadge: "Hardware",
                    specPill: "Specifications",
                    bottomSpec: "Spec line details",
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
                className="px-3 py-1.5 rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-300 text-xs font-bold flex items-center gap-1.5 hover:bg-cyan-900"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add Slide</span>
              </button>
            </div>

            <div className="space-y-4">
              {data.hero.slides.map((slide, sIdx) => (
                <div
                  key={slide.id || sIdx}
                  className="p-4 bg-slate-950 border border-slate-800 rounded-2xl grid gap-4 lg:grid-cols-12 items-center"
                >
                  <div className="lg:col-span-3 flex flex-col items-center gap-2">
                    <div className="relative h-28 w-28 rounded-xl overflow-hidden border border-slate-800 bg-slate-900">
                      <Image
                        src={slide.imageSrc}
                        alt={slide.alt || "slide"}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                    <label className="cursor-pointer text-[11px] font-bold text-cyan-400 hover:underline flex items-center gap-1">
                      <UploadCloud className="h-3.5 w-3.5" />
                      <span>Change Image</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            handleFileUpload(file, (url) => {
                              const updated = [...data.hero.slides];
                              updated[sIdx].imageSrc = url;
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

                  <div className="lg:col-span-8 grid gap-2 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Title"
                      value={slide.title}
                      onChange={(e) => {
                        const updated = [...data.hero.slides];
                        updated[sIdx].title = e.target.value;
                        setData({
                          ...data,
                          hero: { ...data.hero, slides: updated },
                        });
                      }}
                      className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                    />
                    <input
                      type="text"
                      placeholder="Top Badge"
                      value={slide.topBadge}
                      onChange={(e) => {
                        const updated = [...data.hero.slides];
                        updated[sIdx].topBadge = e.target.value;
                        setData({
                          ...data,
                          hero: { ...data.hero, slides: updated },
                        });
                      }}
                      className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                    />
                    <input
                      type="text"
                      placeholder="Spec Pill"
                      value={slide.specPill}
                      onChange={(e) => {
                        const updated = [...data.hero.slides];
                        updated[sIdx].specPill = e.target.value;
                        setData({
                          ...data,
                          hero: { ...data.hero, slides: updated },
                        });
                      }}
                      className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                    />
                    <input
                      type="text"
                      placeholder="Bottom Spec Text"
                      value={slide.bottomSpec}
                      onChange={(e) => {
                        const updated = [...data.hero.slides];
                        updated[sIdx].bottomSpec = e.target.value;
                        setData({
                          ...data,
                          hero: { ...data.hero, slides: updated },
                        });
                      }}
                      className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>

                  <div className="lg:col-span-1 flex justify-end">
                    <button
                      type="button"
                      onClick={() => {
                        const updated = data.hero.slides.filter((_, i) => i !== sIdx);
                        setData({
                          ...data,
                          hero: { ...data.hero, slides: updated },
                        });
                      }}
                      className="p-2 text-rose-400 hover:text-rose-300 hover:bg-rose-950/40 rounded-xl"
                      title="Delete slide"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 2: QUICK HOOK SELECTION MATRIX
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "quickSelection" && (
        <div className="bg-slate-900/70 border border-slate-800 p-6 sm:p-8 rounded-3xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">Quick Hook Selection Matrix</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Manage matrix headings and hardware selection catalog items.
              </p>
            </div>
            <button
              onClick={() => saveSection("quickSelection")}
              disabled={savingSection === "quickSelection"}
              className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex items-center gap-1.5 transition self-start disabled:opacity-50"
            >
              <Save className="h-3.5 w-3.5" />
              <span>{savingSection === "quickSelection" ? "Saving..." : "Save Matrix"}</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Badge</label>
              <input
                type="text"
                value={data.quickSelection.badge}
                onChange={(e) =>
                  setData({
                    ...data,
                    quickSelection: { ...data.quickSelection, badge: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Title</label>
              <input
                type="text"
                value={data.quickSelection.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    quickSelection: { ...data.quickSelection, title: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-300 mb-1">Lede</label>
              <textarea
                rows={2}
                value={data.quickSelection.lede}
                onChange={(e) =>
                  setData({
                    ...data,
                    quickSelection: { ...data.quickSelection, lede: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white"
              />
            </div>
          </div>

          {/* Catalog Items */}
          <div className="pt-4 border-t border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Matrix Catalog Models ({data.quickSelection.catalog.length})
              </h3>
              <button
                type="button"
                onClick={() => {
                  const newItem: HookSelectionItem = {
                    id: `hook-${Date.now()}`,
                    code: "Custom Hook",
                    name: "New Attachment Option",
                    req: "Requirements details",
                    badge: "Option",
                    setup: "Card → Holder → Hook → Lanyard",
                    category: "onehook",
                    image: "/images/Lanyard with Hook Samples/Sample 18 .jpg",
                    alt: "ID Card Hook",
                    tagline: "Tagline summary",
                    description: "Full description text",
                    popular: false,
                    suitable: ["ID cards", "Badges"],
                    specs: [{ k: "Configuration", v: "Standard" }],
                  };
                  setData({
                    ...data,
                    quickSelection: {
                      ...data.quickSelection,
                      catalog: [...data.quickSelection.catalog, newItem],
                    },
                  });
                }}
                className="px-3 py-1.5 rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-300 text-xs font-bold flex items-center gap-1.5 hover:bg-cyan-900"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add Item</span>
              </button>
            </div>

            <div className="space-y-4">
              {data.quickSelection.catalog.map((item, cIdx) => (
                <div
                  key={item.id || cIdx}
                  className="p-5 bg-slate-950 border border-slate-800 rounded-2xl space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-cyan-400">{item.code}</span>
                      <span className="text-xs text-slate-400">— {item.name}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const updated = data.quickSelection.catalog.filter((_, i) => i !== cIdx);
                        setData({
                          ...data,
                          quickSelection: { ...data.quickSelection, catalog: updated },
                        });
                      }}
                      className="p-1.5 text-rose-400 hover:text-rose-300 rounded-lg"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-0.5">Code</label>
                      <input
                        type="text"
                        value={item.code}
                        onChange={(e) => {
                          const updated = [...data.quickSelection.catalog];
                          updated[cIdx].code = e.target.value;
                          setData({
                            ...data,
                            quickSelection: { ...data.quickSelection, catalog: updated },
                          });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-0.5">Name</label>
                      <input
                        type="text"
                        value={item.name}
                        onChange={(e) => {
                          const updated = [...data.quickSelection.catalog];
                          updated[cIdx].name = e.target.value;
                          setData({
                            ...data,
                            quickSelection: { ...data.quickSelection, catalog: updated },
                          });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-0.5">Category</label>
                      <select
                        value={item.category}
                        onChange={(e) => {
                          const updated = [...data.quickSelection.catalog];
                          updated[cIdx].category = e.target.value as any;
                          setData({
                            ...data,
                            quickSelection: { ...data.quickSelection, catalog: updated },
                          });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                      >
                        <option value="fish">fish (Fish Hook)</option>
                        <option value="onehook">onehook (One Hook)</option>
                        <option value="twohook">twohook (Two Hooks)</option>
                        <option value="set">set (Complete Set)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-0.5">Setup Formula</label>
                      <input
                        type="text"
                        value={item.setup}
                        onChange={(e) => {
                          const updated = [...data.quickSelection.catalog];
                          updated[cIdx].setup = e.target.value;
                          setData({
                            ...data,
                            quickSelection: { ...data.quickSelection, catalog: updated },
                          });
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-0.5">Image Path</label>
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={item.image}
                          onChange={(e) => {
                            const updated = [...data.quickSelection.catalog];
                            updated[cIdx].image = e.target.value;
                            setData({
                              ...data,
                              quickSelection: { ...data.quickSelection, catalog: updated },
                            });
                          }}
                          className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                        />
                        <label className="cursor-pointer px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-400 rounded-lg text-xs font-bold flex items-center gap-1 shrink-0">
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
                                  updated[cIdx].image = url;
                                  setData({
                                    ...data,
                                    quickSelection: { ...data.quickSelection, catalog: updated },
                                  });
                                });
                              }
                            }}
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-400 block mb-0.5">Description</label>
                    <textarea
                      rows={2}
                      value={item.description}
                      onChange={(e) => {
                        const updated = [...data.quickSelection.catalog];
                        updated[cIdx].description = e.target.value;
                        setData({
                          ...data,
                          quickSelection: { ...data.quickSelection, catalog: updated },
                        });
                      }}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 3: ASSEMBLY ECOSYSTEM
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "assembly" && (
        <div className="bg-slate-900/70 border border-slate-800 p-6 sm:p-8 rounded-3xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">What Is an ID Card Hook / Assembly Ecosystem</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Manage the 4-layer interactive assembly breakdown.
              </p>
            </div>
            <button
              onClick={() => saveSection("assembly")}
              disabled={savingSection === "assembly"}
              className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex items-center gap-1.5 transition self-start disabled:opacity-50"
            >
              <Save className="h-3.5 w-3.5" />
              <span>{savingSection === "assembly" ? "Saving..." : "Save Assembly"}</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Badge</label>
              <input
                type="text"
                value={data.assembly.badge}
                onChange={(e) =>
                  setData({
                    ...data,
                    assembly: { ...data.assembly, badge: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Title</label>
              <input
                type="text"
                value={data.assembly.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    assembly: { ...data.assembly, title: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-300 mb-1">Lede</label>
              <textarea
                rows={2}
                value={data.assembly.lede}
                onChange={(e) =>
                  setData({
                    ...data,
                    assembly: { ...data.assembly, lede: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white"
              />
            </div>
          </div>

          {/* Layers */}
          <div className="pt-4 border-t border-slate-800 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Assembly Layers ({data.assembly.layers.length})
            </h3>

            <div className="space-y-4">
              {data.assembly.layers.map((layer, lIdx) => (
                <div
                  key={lIdx}
                  className="p-5 bg-slate-950 border border-slate-800 rounded-2xl space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-cyan-400">
                      Step {layer.step} • {layer.title}
                    </span>
                    <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full">
                      {layer.badge}
                    </span>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <input
                      type="text"
                      placeholder="Title"
                      value={layer.title}
                      onChange={(e) => {
                        const updated = [...data.assembly.layers];
                        updated[lIdx].title = e.target.value;
                        setData({
                          ...data,
                          assembly: { ...data.assembly, layers: updated },
                        });
                      }}
                      className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                    />
                    <input
                      type="text"
                      placeholder="Subtitle"
                      value={layer.subtitle}
                      onChange={(e) => {
                        const updated = [...data.assembly.layers];
                        updated[lIdx].subtitle = e.target.value;
                        setData({
                          ...data,
                          assembly: { ...data.assembly, layers: updated },
                        });
                      }}
                      className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                    />
                    <input
                      type="text"
                      placeholder="Badge"
                      value={layer.badge}
                      onChange={(e) => {
                        const updated = [...data.assembly.layers];
                        updated[lIdx].badge = e.target.value;
                        setData({
                          ...data,
                          assembly: { ...data.assembly, layers: updated },
                        });
                      }}
                      className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Component Role"
                      value={layer.material}
                      onChange={(e) => {
                        const updated = [...data.assembly.layers];
                        updated[lIdx].material = e.target.value;
                        setData({
                          ...data,
                          assembly: { ...data.assembly, layers: updated },
                        });
                      }}
                      className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                    />
                    <input
                      type="text"
                      placeholder="Purpose / Benefit"
                      value={layer.benefit}
                      onChange={(e) => {
                        const updated = [...data.assembly.layers];
                        updated[lIdx].benefit = e.target.value;
                        setData({
                          ...data,
                          assembly: { ...data.assembly, layers: updated },
                        });
                      }}
                      className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 4: HARDWARE SETUPS & RANGE MASTER SHOWCASE
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "rangeMaster" && (
        <div className="bg-slate-900/70 border border-slate-800 p-6 sm:p-8 rounded-3xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">Hardware Setups &amp; Range Master Catalog</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Manage hardware arrangements, holder pairing, and lanyard compatibility showcase.
              </p>
            </div>
            <button
              onClick={() => saveSection("rangeMaster")}
              disabled={savingSection === "rangeMaster"}
              className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex items-center gap-1.5 transition self-start disabled:opacity-50"
            >
              <Save className="h-3.5 w-3.5" />
              <span>{savingSection === "rangeMaster" ? "Saving..." : "Save Catalog"}</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Badge</label>
              <input
                type="text"
                value={data.rangeMaster.badge}
                onChange={(e) =>
                  setData({
                    ...data,
                    rangeMaster: { ...data.rangeMaster, badge: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Title</label>
              <input
                type="text"
                value={data.rangeMaster.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    rangeMaster: { ...data.rangeMaster, title: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-300 mb-1">Lede</label>
              <textarea
                rows={2}
                value={data.rangeMaster.lede}
                onChange={(e) =>
                  setData({
                    ...data,
                    rangeMaster: { ...data.rangeMaster, lede: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white"
              />
            </div>
          </div>

          {/* Sections List */}
          <div className="pt-4 border-t border-slate-800 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Showcase Setups ({data.rangeMaster.sections.length})
            </h3>

            <div className="space-y-4">
              {data.rangeMaster.sections.map((sec, secIdx) => (
                <div
                  key={secIdx}
                  className="p-5 bg-slate-950 border border-slate-800 rounded-2xl space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-cyan-400">
                      {sec.code} • {sec.title}
                    </span>
                    <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full">
                      {sec.badge}
                    </span>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Title"
                      value={sec.title}
                      onChange={(e) => {
                        const updated = [...data.rangeMaster.sections];
                        updated[secIdx].title = e.target.value;
                        setData({
                          ...data,
                          rangeMaster: { ...data.rangeMaster, sections: updated },
                        });
                      }}
                      className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                    />
                    <input
                      type="text"
                      placeholder="Setup Formula"
                      value={sec.setup}
                      onChange={(e) => {
                        const updated = [...data.rangeMaster.sections];
                        updated[secIdx].setup = e.target.value;
                        setData({
                          ...data,
                          rangeMaster: { ...data.rangeMaster, sections: updated },
                        });
                      }}
                      className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-400 block mb-0.5">Description</label>
                    <textarea
                      rows={2}
                      value={sec.description}
                      onChange={(e) => {
                        const updated = [...data.rangeMaster.sections];
                        updated[secIdx].description = e.target.value;
                        setData({
                          ...data,
                          rangeMaster: { ...data.rangeMaster, sections: updated },
                        });
                      }}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 5: ENGINEERING GUIDE
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "engineeringGuide" && (
        <div className="bg-slate-900/70 border border-slate-800 p-6 sm:p-8 rounded-3xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">Engineering Guide &amp; 4 Decision Factors</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Edit 4 decision factors, simple rule, and quality compatibility standards.
              </p>
            </div>
            <button
              onClick={() => saveSection("engineeringGuide")}
              disabled={savingSection === "engineeringGuide"}
              className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex items-center gap-1.5 transition self-start disabled:opacity-50"
            >
              <Save className="h-3.5 w-3.5" />
              <span>{savingSection === "engineeringGuide" ? "Saving..." : "Save Guide"}</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Badge</label>
              <input
                type="text"
                value={data.engineeringGuide.badge}
                onChange={(e) =>
                  setData({
                    ...data,
                    engineeringGuide: { ...data.engineeringGuide, badge: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Title</label>
              <input
                type="text"
                value={data.engineeringGuide.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    engineeringGuide: { ...data.engineeringGuide, title: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-300 mb-1">Simple Rule Formula</label>
              <input
                type="text"
                value={data.engineeringGuide.compatibilityRule}
                onChange={(e) =>
                  setData({
                    ...data,
                    engineeringGuide: { ...data.engineeringGuide, compatibilityRule: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white"
              />
            </div>
          </div>

          {/* Factors */}
          <div className="pt-4 border-t border-slate-800 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              4 Decision Factors
            </h3>

            <div className="grid gap-3 sm:grid-cols-2">
              {data.engineeringGuide.factors.map((factor, fIdx) => (
                <div key={fIdx} className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-cyan-400 font-bold">{factor.num}</span>
                    <input
                      type="text"
                      placeholder="Title"
                      value={factor.title}
                      onChange={(e) => {
                        const updated = [...data.engineeringGuide.factors];
                        updated[fIdx].title = e.target.value;
                        setData({
                          ...data,
                          engineeringGuide: { ...data.engineeringGuide, factors: updated },
                        });
                      }}
                      className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-white flex-1 ml-2"
                    />
                  </div>
                  <textarea
                    rows={2}
                    placeholder="Short summary"
                    value={factor.desc}
                    onChange={(e) => {
                      const updated = [...data.engineeringGuide.factors];
                      updated[fIdx].desc = e.target.value;
                      setData({
                        ...data,
                        engineeringGuide: { ...data.engineeringGuide, factors: updated },
                      });
                    }}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                  />
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
        <div className="bg-slate-900/70 border border-slate-800 p-6 sm:p-8 rounded-3xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">ID Card Hook Uses &amp; Applications</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Edit student, corporate, event, and institutional usage cards.
              </p>
            </div>
            <button
              onClick={() => saveSection("applications")}
              disabled={savingSection === "applications"}
              className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex items-center gap-1.5 transition self-start disabled:opacity-50"
            >
              <Save className="h-3.5 w-3.5" />
              <span>{savingSection === "applications" ? "Saving..." : "Save Applications"}</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Badge</label>
              <input
                type="text"
                value={data.applications.badge}
                onChange={(e) =>
                  setData({
                    ...data,
                    applications: { ...data.applications, badge: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Title</label>
              <input
                type="text"
                value={data.applications.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    applications: { ...data.applications, title: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white"
              />
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Applications List ({data.applications.uses.length})
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {data.applications.uses.map((item, uIdx) => (
                <div key={uIdx} className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-2">
                  <input
                    type="text"
                    placeholder="Title"
                    value={item.title}
                    onChange={(e) => {
                      const updated = [...data.applications.uses];
                      updated[uIdx].title = e.target.value;
                      setData({
                        ...data,
                        applications: { ...data.applications, uses: updated },
                      });
                    }}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white font-bold"
                  />
                  <textarea
                    rows={2}
                    placeholder="Description"
                    value={item.desc}
                    onChange={(e) => {
                      const updated = [...data.applications.uses];
                      updated[uIdx].desc = e.target.value;
                      setData({
                        ...data,
                        applications: { ...data.applications, uses: updated },
                      });
                    }}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 7: WORKFLOW & DISPATCH
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "workflowAndDispatch" && (
        <div className="bg-slate-900/70 border border-slate-800 p-6 sm:p-8 rounded-3xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">Workflow, Bulk Orders, Dispatch &amp; Closing CTA</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Manage 4 complete set tiers, bulk checklist, 6-step ordering, 72h dispatch, and final lead CTA.
              </p>
            </div>
            <button
              onClick={() => saveSection("workflowAndDispatch")}
              disabled={savingSection === "workflowAndDispatch"}
              className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex items-center gap-1.5 transition self-start disabled:opacity-50"
            >
              <Save className="h-3.5 w-3.5" />
              <span>{savingSection === "workflowAndDispatch" ? "Saving..." : "Save Workflow"}</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Complete Sets Title</label>
              <input
                type="text"
                value={data.workflowAndDispatch.completeSetsTitle}
                onChange={(e) =>
                  setData({
                    ...data,
                    workflowAndDispatch: {
                      ...data.workflowAndDispatch,
                      completeSetsTitle: e.target.value,
                    },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Bulk Orders Title</label>
              <input
                type="text"
                value={data.workflowAndDispatch.bulkTitle}
                onChange={(e) =>
                  setData({
                    ...data,
                    workflowAndDispatch: {
                      ...data.workflowAndDispatch,
                      bulkTitle: e.target.value,
                    },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Dispatch Title</label>
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
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Closing CTA Title</label>
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
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white"
              />
            </div>
          </div>

          {/* 4 Tiers */}
          <div className="pt-4 border-t border-slate-800 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              4 Identification Set Tiers
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {data.workflowAndDispatch.tiers.map((tier, tIdx) => (
                <div key={tIdx} className="p-3.5 bg-slate-950 border border-slate-800 rounded-2xl space-y-2">
                  <span className="text-[10px] font-mono text-cyan-400 font-bold">{tier.tier}</span>
                  <input
                    type="text"
                    placeholder="Name"
                    value={tier.name}
                    onChange={(e) => {
                      const updated = [...data.workflowAndDispatch.tiers];
                      updated[tIdx].name = e.target.value;
                      setData({
                        ...data,
                        workflowAndDispatch: { ...data.workflowAndDispatch, tiers: updated },
                      });
                    }}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white font-bold"
                  />
                  <input
                    type="text"
                    placeholder="Setup Formula"
                    value={tier.setupFormula}
                    onChange={(e) => {
                      const updated = [...data.workflowAndDispatch.tiers];
                      updated[tIdx].setupFormula = e.target.value;
                      setData({
                        ...data,
                        workflowAndDispatch: { ...data.workflowAndDispatch, tiers: updated },
                      });
                    }}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 8: INSTITUTIONAL FAQS
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "faqs" && (
        <div className="bg-slate-900/70 border border-slate-800 p-6 sm:p-8 rounded-3xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">Institutional FAQs</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Add, edit, or reorder frequently asked questions.
              </p>
            </div>
            <button
              onClick={() => saveSection("faqs")}
              disabled={savingSection === "faqs"}
              className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex items-center gap-1.5 transition self-start disabled:opacity-50"
            >
              <Save className="h-3.5 w-3.5" />
              <span>{savingSection === "faqs" ? "Saving..." : "Save FAQs"}</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Section Title</label>
              <input
                type="text"
                value={data.faqs.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    faqs: { ...data.faqs, title: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Eyebrow</label>
              <input
                type="text"
                value={data.faqs.eyebrow}
                onChange={(e) =>
                  setData({
                    ...data,
                    faqs: { ...data.faqs, eyebrow: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white"
              />
            </div>
          </div>

          {/* Q&A List */}
          <div className="pt-4 border-t border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                FAQ Items ({data.faqs.faqs.length})
              </h3>
              <button
                type="button"
                onClick={() => {
                  const newFaq: DynamicIdCardHooksFaqItem = {
                    q: "New question?",
                    a: "Answer details here.",
                  };
                  setData({
                    ...data,
                    faqs: { ...data.faqs, faqs: [...data.faqs.faqs, newFaq] },
                  });
                }}
                className="px-3 py-1.5 rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-300 text-xs font-bold flex items-center gap-1.5 hover:bg-cyan-900"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add FAQ</span>
              </button>
            </div>

            <div className="space-y-3">
              {data.faqs.faqs.map((faq, fIdx) => (
                <div
                  key={fIdx}
                  className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <input
                      type="text"
                      placeholder="Question"
                      value={faq.q}
                      onChange={(e) => {
                        const updated = [...data.faqs.faqs];
                        updated[fIdx].q = e.target.value;
                        setData({
                          ...data,
                          faqs: { ...data.faqs, faqs: updated },
                        });
                      }}
                      className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white font-bold"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const updated = data.faqs.faqs.filter((_, i) => i !== fIdx);
                        setData({
                          ...data,
                          faqs: { ...data.faqs, faqs: updated },
                        });
                      }}
                      className="p-1.5 text-rose-400 hover:text-rose-300 rounded-lg"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <textarea
                    rows={2}
                    placeholder="Answer"
                    value={faq.a}
                    onChange={(e) => {
                      const updated = [...data.faqs.faqs];
                      updated[fIdx].a = e.target.value;
                      setData({
                        ...data,
                        faqs: { ...data.faqs, faqs: updated },
                      });
                    }}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 9: SEO & META
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "seo" && (
        <div className="bg-slate-900/70 border border-slate-800 p-6 sm:p-8 rounded-3xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">SEO &amp; Search Engine Metadata</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Configure meta title, meta description, and indexing path.
              </p>
            </div>
            <button
              onClick={() => saveSection("seo")}
              disabled={savingSection === "seo"}
              className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex items-center gap-1.5 transition self-start disabled:opacity-50"
            >
              <Save className="h-3.5 w-3.5" />
              <span>{savingSection === "seo" ? "Saving..." : "Save SEO"}</span>
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Page Title Tag</label>
              <input
                type="text"
                value={data.seo.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    seo: { ...data.seo, title: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:border-cyan-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Meta Description</label>
              <textarea
                rows={3}
                value={data.seo.description}
                onChange={(e) =>
                  setData({
                    ...data,
                    seo: { ...data.seo, description: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:border-cyan-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Canonical Path</label>
              <input
                type="text"
                value={data.seo.path}
                onChange={(e) =>
                  setData({
                    ...data,
                    seo: { ...data.seo, path: e.target.value },
                  })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:border-cyan-500 outline-none"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminIdCardHooksPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-[50vh]">
          <RefreshCw className="h-8 w-8 animate-spin text-cyan-400" />
        </div>
      }
    >
      <AdminIdCardHooksContent />
    </Suspense>
  );
}
