"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  FileSpreadsheet,
  Sparkles,
  Save,
  RotateCcw,
  ExternalLink,
  Plus,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Layers,
  GraduationCap,
  Briefcase,
  ListChecks,
  Sliders,
  Send,
  Download,
  ShieldCheck,
  Tag,
  UploadCloud,
  Check,
  RefreshCw,
  Camera,
  Radio,
  Ticket,
} from "lucide-react";
import type {
  DynamicTemplatesData,
  DynamicTemplatesHero,
  DynamicTemplatesStudent,
  DynamicTemplatesEmployee,
  DynamicTemplatesStudioPlanning,
  DynamicTemplatesBulkChecklist,
  DynamicTemplatesSpecifications,
  DynamicTemplatesStudioWorkflow,
  DynamicTemplatesQuotePrep,
  DynamicTemplatesDownloads,
  DynamicTemplatesWhyPrepare,
  DynamicTemplatesClosingCta,
  DynamicTemplatesMeta,
  TemplateSlide,
  DynamicTemplatesFieldRow,
  DynamicTemplatesFieldTypeRow,
  StudioMasterFieldType,
  StudioPlanningStep,
  StudioWorksheetRow,
  DynamicTemplatesDownloadItem,
} from "@/lib/dynamic-templates-types";

function AdminTemplatesContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "hero";
  const [data, setData] = useState<DynamicTemplatesData | null>(null);
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
      const res = await fetch("/api/admin/templates");
      const json = await res.json();
      if (json.success && json.data) {
        setData(json.data);
      } else {
        setSaveError("Failed to load templates data");
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
      const res = await fetch("/api/admin/templates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });
      const json = await res.json();
      if (json.success) {
        setData(json.data);
        setSaveSuccess("Templates page saved & published successfully!");
        setTimeout(() => setSaveSuccess(null), 4000);
      } else {
        setSaveError(json.error || "Failed to save data");
      }
    } catch (e: any) {
      setSaveError(e.message || "Failed to save whole page");
    } finally {
      setSaving(false);
    }
  };

  const saveSection = async (sectionKey: keyof DynamicTemplatesData, sectionData: any) => {
    try {
      setSavingSection(sectionKey);
      setSaveError(null);
      const res = await fetch("/api/admin/templates", {
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
        setSaveError(json.error || "Failed to save section");
      }
    } catch (e: any) {
      setSaveError(e.message || "Failed to save section");
    } finally {
      setSavingSection(null);
    }
  };

  const resetToDefaults = async () => {
    if (!confirm("Are you sure you want to reset all Templates page content to factory defaults? Any custom changes will be lost.")) {
      return;
    }
    try {
      setSaving(true);
      const res = await fetch("/api/admin/templates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "reset" }),
      });
      const json = await res.json();
      if (json.success) {
        setData(json.data);
        setSaveSuccess("Templates page reset to factory defaults!");
        setTimeout(() => setSaveSuccess(null), 4000);
      } else {
        setSaveError(json.error || "Failed to reset");
      }
    } catch (e: any) {
      setSaveError(e.message || "Network error during reset");
    } finally {
      setSaving(false);
    }
  };

  if (loading || !data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <RefreshCw className="h-8 w-8 text-[#009fe3] animate-spin" />
        <p className="text-sm font-semibold text-slate-400">Loading Templates Editor...</p>
      </div>
    );
  }

  const tabs = [
    { id: "hero", label: "Hero & Meta", icon: Sparkles },
    { id: "student", label: "Student Template", icon: GraduationCap },
    { id: "employee", label: "Employee Template", icon: Briefcase },
    { id: "studioPlanning", label: "Studio Form Planning", icon: Sliders },
    { id: "bulkChecklist", label: "Bulk Checklist", icon: ListChecks },
    { id: "specifications", label: "Specifications & RFID", icon: Layers },
    { id: "studioWorkflow", label: "Studio Workflow", icon: RefreshCw },
    { id: "quotePrep", label: "Quote Prep", icon: Send },
    { id: "downloads", label: "Download Resources", icon: Download },
    { id: "whyPrepare", label: "Why Prepare", icon: ShieldCheck },
    { id: "closingCta", label: "Closing CTA", icon: Tag },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-20">
      {/* Top Header Card */}
      <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-[#071525] to-slate-900 p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-800/40 bg-cyan-950/60 px-3.5 py-1 text-xs font-bold text-cyan-300">
              <FileSpreadsheet className="h-3.5 w-3.5 text-cyan-400" />
              <span>DYNAMIC TEMPLATES CMS</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              ID Card Printing Templates &amp; Project Resources
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
              Dynamically manage all downloadable schemas, student &amp; employee templates, Studio form planning worksheets, checklists, and specifications on <span className="font-mono text-cyan-400">/templates/</span>.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/templates/"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700 px-4 py-2.5 text-xs font-bold text-slate-200 transition shadow-sm"
            >
              <ExternalLink className="h-4 w-4 text-cyan-400" />
              <span>Live Page</span>
            </Link>

            <button
              onClick={resetToDefaults}
              disabled={saving}
              className="inline-flex items-center gap-2 rounded-xl border border-red-900/50 bg-red-950/40 hover:bg-red-900/60 text-red-300 px-4 py-2.5 text-xs font-bold transition disabled:opacity-50"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Reset Defaults</span>
            </button>

            <button
              onClick={saveWholePage}
              disabled={saving}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#009fe3] to-[#0284c7] hover:from-[#008bc9] hover:to-[#0369a1] text-white px-5 py-2.5 text-xs font-extrabold shadow-lg shadow-[#009fe3]/25 transition disabled:opacity-50"
            >
              {saving ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
              <span>{saving ? "Saving..." : "Save All Changes"}</span>
            </button>
          </div>
        </div>

        {/* Global Notifications */}
        {saveSuccess && (
          <div className="mt-4 flex items-center gap-2.5 rounded-2xl bg-emerald-950/60 border border-emerald-800/60 px-4 py-3 text-xs font-bold text-emerald-300 animate-in fade-in slide-in-from-top-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>{saveSuccess}</span>
          </div>
        )}
        {saveError && (
          <div className="mt-4 flex items-center gap-2.5 rounded-2xl bg-red-950/60 border border-red-800/60 px-4 py-3 text-xs font-bold text-red-300 animate-in fade-in slide-in-from-top-2">
            <AlertCircle className="h-4 w-4 text-red-400 shrink-0" />
            <span>{saveError}</span>
          </div>
        )}
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap items-center gap-2 pb-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? "bg-[#009fe3] text-white shadow-lg shadow-[#009fe3]/30 scale-[1.02]"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
              }`}
            >
              <Icon className={`h-4 w-4 ${isActive ? "text-white" : "text-cyan-400"}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ─────────────────────────────────────────────────────────────
          TAB 1: HERO & META
          ───────────────────────────────────────────────────────────── */}
      {activeTab === "hero" && (
        <div className="space-y-6">
          {/* SEO Metadata Box */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-cyan-400" />
                <span>SEO Page Metadata</span>
              </h3>
              <button
                onClick={() => saveSection("meta", data.meta)}
                disabled={savingSection === "meta"}
                className="px-3 py-1.5 rounded-xl bg-cyan-950 text-cyan-300 hover:bg-cyan-900 border border-cyan-800/40 text-xs font-bold transition flex items-center gap-1.5"
              >
                {savingSection === "meta" ? <RefreshCw className="h-3 w-3 animate-spin" /> : <Save className="h-3 w-3" />}
                <span>Save Meta</span>
              </button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Meta Title</label>
                <input
                  type="text"
                  value={data.meta.title}
                  onChange={(e) => setData({ ...data, meta: { ...data.meta, title: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white focus:border-[#009fe3] outline-hidden"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Canonical Path</label>
                <input
                  type="text"
                  value={data.meta.path}
                  onChange={(e) => setData({ ...data, meta: { ...data.meta, path: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white focus:border-[#009fe3] outline-hidden"
                />
              </div>
              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Meta Description</label>
                <textarea
                  rows={2}
                  value={data.meta.description}
                  onChange={(e) => setData({ ...data, meta: { ...data.meta, description: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white focus:border-[#009fe3] outline-hidden"
                />
              </div>
            </div>
          </div>

          {/* Hero Section Content */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-cyan-400" />
                <span>Hero Content &amp; Headlines</span>
              </h3>
              <button
                onClick={() => saveSection("hero", data.hero)}
                disabled={savingSection === "hero"}
                className="px-3.5 py-2 rounded-xl bg-[#009fe3] hover:bg-[#008bc9] text-white text-xs font-bold transition flex items-center gap-1.5"
              >
                {savingSection === "hero" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                <span>Save Hero Section</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Pill Badge Left</label>
                <input
                  type="text"
                  value={data.hero.badge}
                  onChange={(e) => setData({ ...data, hero: { ...data.hero, badge: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white focus:border-[#009fe3] outline-hidden"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Pill Badge Right</label>
                <input
                  type="text"
                  value={data.hero.subBadge}
                  onChange={(e) => setData({ ...data, hero: { ...data.hero, subBadge: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white focus:border-[#009fe3] outline-hidden"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Main Heading Prefix</label>
                <input
                  type="text"
                  value={data.hero.h1Prefix}
                  onChange={(e) => setData({ ...data, hero: { ...data.hero, h1Prefix: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white focus:border-[#009fe3] outline-hidden"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Main Heading Gradient Text</label>
                <input
                  type="text"
                  value={data.hero.h1Gradient}
                  onChange={(e) => setData({ ...data, hero: { ...data.hero, h1Gradient: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white focus:border-[#009fe3] outline-hidden"
                />
              </div>
              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Paragraph 1 (Bold Highlight)</label>
                <textarea
                  rows={2}
                  value={data.hero.p1}
                  onChange={(e) => setData({ ...data, hero: { ...data.hero, p1: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white focus:border-[#009fe3] outline-hidden"
                />
              </div>
              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Paragraph 2 (Overview)</label>
                <textarea
                  rows={2}
                  value={data.hero.p2}
                  onChange={(e) => setData({ ...data, hero: { ...data.hero, p2: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white focus:border-[#009fe3] outline-hidden"
                />
              </div>
              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Paragraph 3 (Resource guidance)</label>
                <textarea
                  rows={2}
                  value={data.hero.p3}
                  onChange={(e) => setData({ ...data, hero: { ...data.hero, p3: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white focus:border-[#009fe3] outline-hidden"
                />
              </div>
            </div>

            {/* Trust Badges */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <label className="text-xs font-bold text-slate-300">Trust Badges (Under Hero Quick Links)</label>
              <div className="grid gap-3 sm:grid-cols-3">
                {data.hero.trustBadges.map((badge, idx) => (
                  <input
                    key={idx}
                    type="text"
                    value={badge}
                    onChange={(e) => {
                      const updated = [...data.hero.trustBadges];
                      updated[idx] = e.target.value;
                      setData({ ...data, hero: { ...data.hero, trustBadges: updated } });
                    }}
                    className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white focus:border-[#009fe3] outline-hidden"
                  />
                ))}
              </div>
            </div>

            {/* Hero Carousel Slides */}
            <div className="space-y-4 pt-6 border-t border-slate-800">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-extrabold text-white">Hero Showcase Carousel Slides</h4>
                  <p className="text-xs text-slate-400">Images, badges, specifications shown in the interactive hero card stack</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const newSlide: TemplateSlide = {
                      id: `slide-${Date.now()}`,
                      imageSrc: "/images/student-data-collection-workflow-v1.jpg",
                      alt: "New template slide",
                      title: "New Template Slide",
                      category: "Schema",
                      topBadge: "New Badge",
                      specPill: "Format",
                      bottomSpec: "Specifications",
                      hubTag: "EXCEL / STUDIO",
                    };
                    setData({
                      ...data,
                      hero: { ...data.hero, slides: [...data.hero.slides, newSlide] },
                    });
                  }}
                  className="px-3 py-1.5 rounded-xl bg-cyan-950 text-cyan-300 hover:bg-cyan-900 border border-cyan-800/40 text-xs font-bold transition flex items-center gap-1.5"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Add Slide</span>
                </button>
              </div>

              <div className="space-y-4">
                {data.hero.slides.map((slide, idx) => (
                  <div key={slide.id || idx} className="p-4 rounded-2xl border border-slate-800 bg-slate-950/80 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-cyan-400">Slide #{idx + 1}: {slide.title}</span>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = data.hero.slides.filter((_, i) => i !== idx);
                          setData({ ...data, hero: { ...data.hero, slides: updated } });
                        }}
                        className="text-slate-500 hover:text-red-400 transition"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      <div className="space-y-1 sm:col-span-2">
                        <label className="text-[11px] font-semibold text-slate-400">Slide Title</label>
                        <input
                          type="text"
                          value={slide.title}
                          onChange={(e) => {
                            const updated = [...data.hero.slides];
                            updated[idx].title = e.target.value;
                            setData({ ...data, hero: { ...data.hero, slides: updated } });
                          }}
                          className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs text-white"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[11px] font-semibold text-slate-400">Top Badge</label>
                        <input
                          type="text"
                          value={slide.topBadge}
                          onChange={(e) => {
                            const updated = [...data.hero.slides];
                            updated[idx].topBadge = e.target.value;
                            setData({ ...data, hero: { ...data.hero, slides: updated } });
                          }}
                          className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs text-white"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[11px] font-semibold text-slate-400">Spec Pill</label>
                        <input
                          type="text"
                          value={slide.specPill}
                          onChange={(e) => {
                            const updated = [...data.hero.slides];
                            updated[idx].specPill = e.target.value;
                            setData({ ...data, hero: { ...data.hero, slides: updated } });
                          }}
                          className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs text-white"
                        />
                      </div>

                      <div className="space-y-1 sm:col-span-2">
                        <label className="text-[11px] font-semibold text-slate-400">Image URL / Path</label>
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={slide.imageSrc}
                            onChange={(e) => {
                              const updated = [...data.hero.slides];
                              updated[idx].imageSrc = e.target.value;
                              setData({ ...data, hero: { ...data.hero, slides: updated } });
                            }}
                            className="flex-1 rounded-xl bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs text-white"
                          />
                          <label className="cursor-pointer px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition shrink-0 flex items-center gap-1">
                            <UploadCloud className="h-3.5 w-3.5" />
                            <span>Upload</span>
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
                                    setData({ ...data, hero: { ...data.hero, slides: updated } });
                                  },
                                  `slide-${idx}`
                                )
                              }
                            />
                          </label>
                        </div>
                      </div>

                      <div className="space-y-1 sm:col-span-2">
                        <label className="text-[11px] font-semibold text-slate-400">Bottom Feature Specs</label>
                        <input
                          type="text"
                          value={slide.bottomSpec}
                          onChange={(e) => {
                            const updated = [...data.hero.slides];
                            updated[idx].bottomSpec = e.target.value;
                            setData({ ...data, hero: { ...data.hero, slides: updated } });
                          }}
                          className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs text-white"
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
          TAB 2: STUDENT TEMPLATE
          ───────────────────────────────────────────────────────────── */}
      {activeTab === "student" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-cyan-400" />
                <span>Student ID Card Data Template</span>
              </h3>
              <button
                onClick={() => saveSection("student", data.student)}
                disabled={savingSection === "student"}
                className="px-3.5 py-2 rounded-xl bg-[#009fe3] hover:bg-[#008bc9] text-white text-xs font-bold transition flex items-center gap-1.5"
              >
                {savingSection === "student" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                <span>Save Student Template</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Badge</label>
                <input
                  type="text"
                  value={data.student.badge}
                  onChange={(e) => setData({ ...data, student: { ...data.student, badge: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Section Title</label>
                <input
                  type="text"
                  value={data.student.title}
                  onChange={(e) => setData({ ...data, student: { ...data.student, title: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                />
              </div>
              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Section Description</label>
                <input
                  type="text"
                  value={data.student.description}
                  onChange={(e) => setData({ ...data, student: { ...data.student, description: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                />
              </div>
            </div>

            {/* Table 1: Core Fields */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-extrabold text-white">Student Data Fields ({data.student.fields.length})</h4>
                <button
                  type="button"
                  onClick={() => {
                    setData({
                      ...data,
                      student: {
                        ...data.student,
                        fields: [...data.student.fields, { field: "New Field", purpose: "Field description" }],
                      },
                    });
                  }}
                  className="px-3 py-1.5 rounded-xl bg-cyan-950 text-cyan-300 hover:bg-cyan-900 border border-cyan-800/40 text-xs font-bold transition flex items-center gap-1.5"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Add Field</span>
                </button>
              </div>

              <div className="space-y-2">
                {data.student.fields.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-800 bg-slate-950">
                    <input
                      type="text"
                      value={f.field}
                      onChange={(e) => {
                        const updated = [...data.student.fields];
                        updated[idx].field = e.target.value;
                        setData({ ...data, student: { ...data.student, fields: updated } });
                      }}
                      placeholder="Field Name"
                      className="w-1/3 rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs text-white"
                    />
                    <input
                      type="text"
                      value={f.purpose}
                      onChange={(e) => {
                        const updated = [...data.student.fields];
                        updated[idx].purpose = e.target.value;
                        setData({ ...data, student: { ...data.student, fields: updated } });
                      }}
                      placeholder="Purpose"
                      className="flex-1 rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs text-white"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const updated = data.student.fields.filter((_, i) => i !== idx);
                        setData({ ...data, student: { ...data.student, fields: updated } });
                      }}
                      className="p-1.5 text-slate-500 hover:text-red-400 transition"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Table 2: Recommended Field Types */}
            <div className="space-y-3 pt-6 border-t border-slate-800">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-extrabold text-white">Recommended Field Types ({data.student.fieldTypes.length})</h4>
                  <p className="text-xs text-slate-400">Used for IDGen Studio form configuration</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setData({
                      ...data,
                      student: {
                        ...data.student,
                        fieldTypes: [
                          ...data.student.fieldTypes,
                          { info: "Field Info", type: "Short Text", example: "Example value" },
                        ],
                      },
                    });
                  }}
                  className="px-3 py-1.5 rounded-xl bg-cyan-950 text-cyan-300 hover:bg-cyan-900 border border-cyan-800/40 text-xs font-bold transition flex items-center gap-1.5"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Add Field Type</span>
                </button>
              </div>

              <div className="space-y-2">
                {data.student.fieldTypes.map((ft, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-800 bg-slate-950">
                    <input
                      type="text"
                      value={ft.info}
                      onChange={(e) => {
                        const updated = [...data.student.fieldTypes];
                        updated[idx].info = e.target.value;
                        setData({ ...data, student: { ...data.student, fieldTypes: updated } });
                      }}
                      placeholder="Information"
                      className="w-1/3 rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs text-white"
                    />
                    <input
                      type="text"
                      value={ft.type}
                      onChange={(e) => {
                        const updated = [...data.student.fieldTypes];
                        updated[idx].type = e.target.value;
                        setData({ ...data, student: { ...data.student, fieldTypes: updated } });
                      }}
                      placeholder="Type"
                      className="w-1/4 rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs text-cyan-400 font-mono"
                    />
                    <input
                      type="text"
                      value={ft.example}
                      onChange={(e) => {
                        const updated = [...data.student.fieldTypes];
                        updated[idx].example = e.target.value;
                        setData({ ...data, student: { ...data.student, fieldTypes: updated } });
                      }}
                      placeholder="Example"
                      className="flex-1 rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs text-white"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const updated = data.student.fieldTypes.filter((_, i) => i !== idx);
                        setData({ ...data, student: { ...data.student, fieldTypes: updated } });
                      }}
                      className="p-1.5 text-slate-500 hover:text-red-400 transition"
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
          TAB 3: EMPLOYEE TEMPLATE
          ───────────────────────────────────────────────────────────── */}
      {activeTab === "employee" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-cyan-400" />
                <span>Employee ID Card Data Template</span>
              </h3>
              <button
                onClick={() => saveSection("employee", data.employee)}
                disabled={savingSection === "employee"}
                className="px-3.5 py-2 rounded-xl bg-[#009fe3] hover:bg-[#008bc9] text-white text-xs font-bold transition flex items-center gap-1.5"
              >
                {savingSection === "employee" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                <span>Save Employee Template</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Badge</label>
                <input
                  type="text"
                  value={data.employee.badge}
                  onChange={(e) => setData({ ...data, employee: { ...data.employee, badge: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Section Title</label>
                <input
                  type="text"
                  value={data.employee.title}
                  onChange={(e) => setData({ ...data, employee: { ...data.employee, title: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                />
              </div>
              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Section Description</label>
                <input
                  type="text"
                  value={data.employee.description}
                  onChange={(e) => setData({ ...data, employee: { ...data.employee, description: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                />
              </div>
            </div>

            {/* Table 1: Core Fields */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-extrabold text-white">Employee Data Fields ({data.employee.fields.length})</h4>
                <button
                  type="button"
                  onClick={() => {
                    setData({
                      ...data,
                      employee: {
                        ...data.employee,
                        fields: [...data.employee.fields, { field: "New Field", purpose: "Field purpose" }],
                      },
                    });
                  }}
                  className="px-3 py-1.5 rounded-xl bg-cyan-950 text-cyan-300 hover:bg-cyan-900 border border-cyan-800/40 text-xs font-bold transition flex items-center gap-1.5"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Add Field</span>
                </button>
              </div>

              <div className="space-y-2">
                {data.employee.fields.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-800 bg-slate-950">
                    <input
                      type="text"
                      value={f.field}
                      onChange={(e) => {
                        const updated = [...data.employee.fields];
                        updated[idx].field = e.target.value;
                        setData({ ...data, employee: { ...data.employee, fields: updated } });
                      }}
                      placeholder="Field Name"
                      className="w-1/3 rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs text-white"
                    />
                    <input
                      type="text"
                      value={f.purpose}
                      onChange={(e) => {
                        const updated = [...data.employee.fields];
                        updated[idx].purpose = e.target.value;
                        setData({ ...data, employee: { ...data.employee, fields: updated } });
                      }}
                      placeholder="Purpose"
                      className="flex-1 rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs text-white"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const updated = data.employee.fields.filter((_, i) => i !== idx);
                        setData({ ...data, employee: { ...data.employee, fields: updated } });
                      }}
                      className="p-1.5 text-slate-500 hover:text-red-400 transition"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Table 2: Recommended Field Types */}
            <div className="space-y-3 pt-6 border-t border-slate-800">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-extrabold text-white">Recommended IDGen Studio Field Types ({data.employee.fieldTypes.length})</h4>
                  <p className="text-xs text-slate-400">Corporate roster formats</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setData({
                      ...data,
                      employee: {
                        ...data.employee,
                        fieldTypes: [
                          ...data.employee.fieldTypes,
                          { info: "Field Info", type: "Short Text", example: "Example" },
                        ],
                      },
                    });
                  }}
                  className="px-3 py-1.5 rounded-xl bg-cyan-950 text-cyan-300 hover:bg-cyan-900 border border-cyan-800/40 text-xs font-bold transition flex items-center gap-1.5"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Add Field Type</span>
                </button>
              </div>

              <div className="space-y-2">
                {data.employee.fieldTypes.map((ft, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-800 bg-slate-950">
                    <input
                      type="text"
                      value={ft.info}
                      onChange={(e) => {
                        const updated = [...data.employee.fieldTypes];
                        updated[idx].info = e.target.value;
                        setData({ ...data, employee: { ...data.employee, fieldTypes: updated } });
                      }}
                      placeholder="Information"
                      className="w-1/3 rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs text-white"
                    />
                    <input
                      type="text"
                      value={ft.type}
                      onChange={(e) => {
                        const updated = [...data.employee.fieldTypes];
                        updated[idx].type = e.target.value;
                        setData({ ...data, employee: { ...data.employee, fieldTypes: updated } });
                      }}
                      placeholder="Type"
                      className="w-1/4 rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs text-cyan-400 font-mono"
                    />
                    <input
                      type="text"
                      value={ft.example}
                      onChange={(e) => {
                        const updated = [...data.employee.fieldTypes];
                        updated[idx].example = e.target.value;
                        setData({ ...data, employee: { ...data.employee, fieldTypes: updated } });
                      }}
                      placeholder="Example"
                      className="flex-1 rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs text-white"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const updated = data.employee.fieldTypes.filter((_, i) => i !== idx);
                        setData({ ...data, employee: { ...data.employee, fieldTypes: updated } });
                      }}
                      className="p-1.5 text-slate-500 hover:text-red-400 transition"
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
          TAB 4: STUDIO FORM PLANNING
          ───────────────────────────────────────────────────────────── */}
      {activeTab === "studioPlanning" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                <Sliders className="h-4 w-4 text-cyan-400" />
                <span>IDGen Studio Form Planning Template</span>
              </h3>
              <button
                onClick={() => saveSection("studioPlanning", data.studioPlanning)}
                disabled={savingSection === "studioPlanning"}
                className="px-3.5 py-2 rounded-xl bg-[#009fe3] hover:bg-[#008bc9] text-white text-xs font-bold transition flex items-center gap-1.5"
              >
                {savingSection === "studioPlanning" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                <span>Save Studio Planning</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Badge</label>
                <input
                  type="text"
                  value={data.studioPlanning.badge}
                  onChange={(e) => setData({ ...data, studioPlanning: { ...data.studioPlanning, badge: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Title</label>
                <input
                  type="text"
                  value={data.studioPlanning.title}
                  onChange={(e) => setData({ ...data, studioPlanning: { ...data.studioPlanning, title: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                />
              </div>
              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Subtitle</label>
                <input
                  type="text"
                  value={data.studioPlanning.subtitle}
                  onChange={(e) => setData({ ...data, studioPlanning: { ...data.studioPlanning, subtitle: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                />
              </div>
              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Description</label>
                <textarea
                  rows={2}
                  value={data.studioPlanning.description}
                  onChange={(e) => setData({ ...data, studioPlanning: { ...data.studioPlanning, description: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                />
              </div>
              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-amber-400">Important Notice Banner</label>
                <textarea
                  rows={2}
                  value={data.studioPlanning.importantNotice}
                  onChange={(e) => setData({ ...data, studioPlanning: { ...data.studioPlanning, importantNotice: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-amber-900/60 px-3.5 py-2 text-xs text-amber-200"
                />
              </div>
            </div>

            {/* Worksheet Rows */}
            <div className="space-y-3 pt-6 border-t border-slate-800">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-extrabold text-white">Worksheet Example Rows ({data.studioPlanning.worksheetRows.length})</h4>
                  <p className="text-xs text-slate-400">Pre-built rows included in the downloadable Studio Form Planning worksheet</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setData({
                      ...data,
                      studioPlanning: {
                        ...data.studioPlanning,
                        worksheetRows: [
                          ...data.studioPlanning.worksheetRows,
                          { name: "Field", type: "Short Text", format: "Format", req: "Yes", printed: "Yes", qr: "No", notes: "—" },
                        ],
                      },
                    });
                  }}
                  className="px-3 py-1.5 rounded-xl bg-cyan-950 text-cyan-300 hover:bg-cyan-900 border border-cyan-800/40 text-xs font-bold transition flex items-center gap-1.5"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Add Row</span>
                </button>
              </div>

              <div className="space-y-2">
                {data.studioPlanning.worksheetRows.map((row, idx) => (
                  <div key={idx} className="flex flex-wrap items-center gap-2 p-2.5 rounded-xl border border-slate-800 bg-slate-950">
                    <input
                      type="text"
                      value={row.name}
                      onChange={(e) => {
                        const updated = [...data.studioPlanning.worksheetRows];
                        updated[idx].name = e.target.value;
                        setData({ ...data, studioPlanning: { ...data.studioPlanning, worksheetRows: updated } });
                      }}
                      placeholder="Name"
                      className="w-32 rounded-lg bg-slate-900 border border-slate-800 px-2.5 py-1 text-xs text-white"
                    />
                    <input
                      type="text"
                      value={row.type}
                      onChange={(e) => {
                        const updated = [...data.studioPlanning.worksheetRows];
                        updated[idx].type = e.target.value;
                        setData({ ...data, studioPlanning: { ...data.studioPlanning, worksheetRows: updated } });
                      }}
                      placeholder="Type"
                      className="w-28 rounded-lg bg-slate-900 border border-slate-800 px-2.5 py-1 text-xs text-cyan-400 font-mono"
                    />
                    <input
                      type="text"
                      value={row.format}
                      onChange={(e) => {
                        const updated = [...data.studioPlanning.worksheetRows];
                        updated[idx].format = e.target.value;
                        setData({ ...data, studioPlanning: { ...data.studioPlanning, worksheetRows: updated } });
                      }}
                      placeholder="Format"
                      className="flex-1 min-w-[120px] rounded-lg bg-slate-900 border border-slate-800 px-2.5 py-1 text-xs text-white"
                    />
                    <input
                      type="text"
                      value={row.req}
                      onChange={(e) => {
                        const updated = [...data.studioPlanning.worksheetRows];
                        updated[idx].req = e.target.value;
                        setData({ ...data, studioPlanning: { ...data.studioPlanning, worksheetRows: updated } });
                      }}
                      placeholder="Req?"
                      className="w-16 rounded-lg bg-slate-900 border border-slate-800 px-2.5 py-1 text-xs text-white"
                    />
                    <input
                      type="text"
                      value={row.printed}
                      onChange={(e) => {
                        const updated = [...data.studioPlanning.worksheetRows];
                        updated[idx].printed = e.target.value;
                        setData({ ...data, studioPlanning: { ...data.studioPlanning, worksheetRows: updated } });
                      }}
                      placeholder="Print?"
                      className="w-16 rounded-lg bg-slate-900 border border-slate-800 px-2.5 py-1 text-xs text-white"
                    />
                    <input
                      type="text"
                      value={row.qr}
                      onChange={(e) => {
                        const updated = [...data.studioPlanning.worksheetRows];
                        updated[idx].qr = e.target.value;
                        setData({ ...data, studioPlanning: { ...data.studioPlanning, worksheetRows: updated } });
                      }}
                      placeholder="QR?"
                      className="w-16 rounded-lg bg-slate-900 border border-slate-800 px-2.5 py-1 text-xs text-white"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const updated = data.studioPlanning.worksheetRows.filter((_, i) => i !== idx);
                        setData({ ...data, studioPlanning: { ...data.studioPlanning, worksheetRows: updated } });
                      }}
                      className="p-1 text-slate-500 hover:text-red-400 transition"
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
          TAB 5: BULK CHECKLIST
          ───────────────────────────────────────────────────────────── */}
      {activeTab === "bulkChecklist" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                <ListChecks className="h-4 w-4 text-cyan-400" />
                <span>Bulk ID Card Project Checklist</span>
              </h3>
              <button
                onClick={() => saveSection("bulkChecklist", data.bulkChecklist)}
                disabled={savingSection === "bulkChecklist"}
                className="px-3.5 py-2 rounded-xl bg-[#009fe3] hover:bg-[#008bc9] text-white text-xs font-bold transition flex items-center gap-1.5"
              >
                {savingSection === "bulkChecklist" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                <span>Save Checklist</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Badge</label>
                <input
                  type="text"
                  value={data.bulkChecklist.badge}
                  onChange={(e) => setData({ ...data, bulkChecklist: { ...data.bulkChecklist, badge: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Title</label>
                <input
                  type="text"
                  value={data.bulkChecklist.title}
                  onChange={(e) => setData({ ...data, bulkChecklist: { ...data.bulkChecklist, title: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                />
              </div>
              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Description</label>
                <input
                  type="text"
                  value={data.bulkChecklist.description}
                  onChange={(e) => setData({ ...data, bulkChecklist: { ...data.bulkChecklist, description: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                />
              </div>
            </div>

            {/* Checklist Items */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-extrabold text-white">Checklist Items ({data.bulkChecklist.items.length})</h4>
                <button
                  type="button"
                  onClick={() => {
                    setData({
                      ...data,
                      bulkChecklist: {
                        ...data.bulkChecklist,
                        items: [...data.bulkChecklist.items, "New checklist item"],
                      },
                    });
                  }}
                  className="px-3 py-1.5 rounded-xl bg-cyan-950 text-cyan-300 hover:bg-cyan-900 border border-cyan-800/40 text-xs font-bold transition flex items-center gap-1.5"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Add Checklist Item</span>
                </button>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                {data.bulkChecklist.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 rounded-xl border border-slate-800 bg-slate-950">
                    <span className="text-xs font-mono font-bold text-slate-500 w-6 text-center">{idx + 1}.</span>
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => {
                        const updated = [...data.bulkChecklist.items];
                        updated[idx] = e.target.value;
                        setData({ ...data, bulkChecklist: { ...data.bulkChecklist, items: updated } });
                      }}
                      className="flex-1 rounded-lg bg-slate-900 border border-slate-800 px-3 py-1 text-xs text-white"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const updated = data.bulkChecklist.items.filter((_, i) => i !== idx);
                        setData({ ...data, bulkChecklist: { ...data.bulkChecklist, items: updated } });
                      }}
                      className="p-1 text-slate-500 hover:text-red-400 transition"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 6: SPECIFICATIONS & RFID
          ───────────────────────────────────────────────────────────── */}
      {activeTab === "specifications" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                <Layers className="h-4 w-4 text-cyan-400" />
                <span>Card, Event Badge &amp; RFID Specifications</span>
              </h3>
              <button
                onClick={() => saveSection("specifications", data.specifications)}
                disabled={savingSection === "specifications"}
                className="px-3.5 py-2 rounded-xl bg-[#009fe3] hover:bg-[#008bc9] text-white text-xs font-bold transition flex items-center gap-1.5"
              >
                {savingSection === "specifications" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                <span>Save Specifications</span>
              </button>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {/* Card Spec */}
              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-950 space-y-3">
                <h4 className="text-sm font-extrabold text-white flex items-center gap-2">
                  <Tag className="h-3.5 w-3.5 text-cyan-400" />
                  <span>Card Spec Template</span>
                </h4>
                <div className="space-y-2">
                  <input
                    type="text"
                    value={data.specifications.cardSpec.title}
                    onChange={(e) =>
                      setData({
                        ...data,
                        specifications: {
                          ...data.specifications,
                          cardSpec: { ...data.specifications.cardSpec, title: e.target.value },
                        },
                      })
                    }
                    className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs text-white"
                  />
                  <textarea
                    rows={12}
                    value={data.specifications.cardSpec.rawText}
                    onChange={(e) =>
                      setData({
                        ...data,
                        specifications: {
                          ...data.specifications,
                          cardSpec: { ...data.specifications.cardSpec, rawText: e.target.value },
                        },
                      })
                    }
                    className="w-full rounded-xl bg-slate-900 border border-slate-800 p-3 font-mono text-xs text-slate-300"
                  />
                </div>
              </div>

              {/* Event Badge Spec */}
              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-950 space-y-3">
                <h4 className="text-sm font-extrabold text-white flex items-center gap-2">
                  <Ticket className="h-3.5 w-3.5 text-cyan-400" />
                  <span>Event Badge Template</span>
                </h4>
                <div className="space-y-2">
                  <input
                    type="text"
                    value={data.specifications.eventBadgeSpec.title}
                    onChange={(e) =>
                      setData({
                        ...data,
                        specifications: {
                          ...data.specifications,
                          eventBadgeSpec: { ...data.specifications.eventBadgeSpec, title: e.target.value },
                        },
                      })
                    }
                    className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs text-white"
                  />
                  <textarea
                    rows={12}
                    value={data.specifications.eventBadgeSpec.rawText}
                    onChange={(e) =>
                      setData({
                        ...data,
                        specifications: {
                          ...data.specifications,
                          eventBadgeSpec: { ...data.specifications.eventBadgeSpec, rawText: e.target.value },
                        },
                      })
                    }
                    className="w-full rounded-xl bg-slate-900 border border-slate-800 p-3 font-mono text-xs text-slate-300"
                  />
                </div>
              </div>

              {/* RFID Spec */}
              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-950 space-y-3">
                <h4 className="text-sm font-extrabold text-white flex items-center gap-2">
                  <Radio className="h-3.5 w-3.5 text-cyan-400" />
                  <span>RFID Requirement Template</span>
                </h4>
                <div className="space-y-2">
                  <input
                    type="text"
                    value={data.specifications.rfidSpec.title}
                    onChange={(e) =>
                      setData({
                        ...data,
                        specifications: {
                          ...data.specifications,
                          rfidSpec: { ...data.specifications.rfidSpec, title: e.target.value },
                        },
                      })
                    }
                    className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs text-white"
                  />
                  <textarea
                    rows={12}
                    value={data.specifications.rfidSpec.rawText}
                    onChange={(e) =>
                      setData({
                        ...data,
                        specifications: {
                          ...data.specifications,
                          rfidSpec: { ...data.specifications.rfidSpec, rawText: e.target.value },
                        },
                      })
                    }
                    className="w-full rounded-xl bg-slate-900 border border-slate-800 p-3 font-mono text-xs text-slate-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 7: STUDIO WORKFLOW
          ───────────────────────────────────────────────────────────── */}
      {activeTab === "studioWorkflow" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                <RefreshCw className="h-4 w-4 text-cyan-400" />
                <span>IDGen Studio Data Collection Planning</span>
              </h3>
              <button
                onClick={() => saveSection("studioWorkflow", data.studioWorkflow)}
                disabled={savingSection === "studioWorkflow"}
                className="px-3.5 py-2 rounded-xl bg-[#009fe3] hover:bg-[#008bc9] text-white text-xs font-bold transition flex items-center gap-1.5"
              >
                {savingSection === "studioWorkflow" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                <span>Save Workflow</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Badge</label>
                <input
                  type="text"
                  value={data.studioWorkflow.badge}
                  onChange={(e) => setData({ ...data, studioWorkflow: { ...data.studioWorkflow, badge: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Title</label>
                <input
                  type="text"
                  value={data.studioWorkflow.title}
                  onChange={(e) => setData({ ...data, studioWorkflow: { ...data.studioWorkflow, title: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                />
              </div>
              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Description</label>
                <input
                  type="text"
                  value={data.studioWorkflow.description}
                  onChange={(e) => setData({ ...data, studioWorkflow: { ...data.studioWorkflow, description: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                />
              </div>
            </div>

            {/* Pipeline Steps */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <h4 className="text-sm font-extrabold text-white">Flow Pipeline Steps ({data.studioWorkflow.flowSteps.length})</h4>
              <div className="flex flex-wrap gap-2">
                {data.studioWorkflow.flowSteps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 bg-slate-950 border border-slate-800 px-2.5 py-1 rounded-xl text-xs text-cyan-300">
                    <input
                      type="text"
                      value={step}
                      onChange={(e) => {
                        const updated = [...data.studioWorkflow.flowSteps];
                        updated[idx] = e.target.value;
                        setData({ ...data, studioWorkflow: { ...data.studioWorkflow, flowSteps: updated } });
                      }}
                      className="bg-transparent border-none outline-hidden w-28 text-white text-xs font-semibold"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const updated = data.studioWorkflow.flowSteps.filter((_, i) => i !== idx);
                        setData({ ...data, studioWorkflow: { ...data.studioWorkflow, flowSteps: updated } });
                      }}
                      className="text-slate-500 hover:text-red-400"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Testing Checklist */}
            <div className="space-y-3 pt-6 border-t border-slate-800">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-extrabold text-white">Studio Form Testing Checklist ({data.studioWorkflow.testingChecklist.items.length})</h4>
                <button
                  type="button"
                  onClick={() => {
                    setData({
                      ...data,
                      studioWorkflow: {
                        ...data.studioWorkflow,
                        testingChecklist: {
                          ...data.studioWorkflow.testingChecklist,
                          items: [...data.studioWorkflow.testingChecklist.items, "New verification step"],
                        },
                      },
                    });
                  }}
                  className="px-3 py-1.5 rounded-xl bg-cyan-950 text-cyan-300 hover:bg-cyan-900 border border-cyan-800/40 text-xs font-bold transition flex items-center gap-1.5"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Add Verification Item</span>
                </button>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                {data.studioWorkflow.testingChecklist.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 rounded-xl border border-slate-800 bg-slate-950">
                    <span className="text-xs font-mono font-bold text-slate-500 w-6 text-center">{idx + 1}.</span>
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => {
                        const updated = [...data.studioWorkflow.testingChecklist.items];
                        updated[idx] = e.target.value;
                        setData({
                          ...data,
                          studioWorkflow: {
                            ...data.studioWorkflow,
                            testingChecklist: { ...data.studioWorkflow.testingChecklist, items: updated },
                          },
                        });
                      }}
                      className="flex-1 rounded-lg bg-slate-900 border border-slate-800 px-3 py-1 text-xs text-white"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const updated = data.studioWorkflow.testingChecklist.items.filter((_, i) => i !== idx);
                        setData({
                          ...data,
                          studioWorkflow: {
                            ...data.studioWorkflow,
                            testingChecklist: { ...data.studioWorkflow.testingChecklist, items: updated },
                          },
                        });
                      }}
                      className="p-1 text-slate-500 hover:text-red-400 transition"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 8: QUOTE PREP
          ───────────────────────────────────────────────────────────── */}
      {activeTab === "quotePrep" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                <Send className="h-4 w-4 text-cyan-400" />
                <span>Quote Preparation Template</span>
              </h3>
              <button
                onClick={() => saveSection("quotePrep", data.quotePrep)}
                disabled={savingSection === "quotePrep"}
                className="px-3.5 py-2 rounded-xl bg-[#009fe3] hover:bg-[#008bc9] text-white text-xs font-bold transition flex items-center gap-1.5"
              >
                {savingSection === "quotePrep" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                <span>Save Quote Prep</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Badge</label>
                <input
                  type="text"
                  value={data.quotePrep.badge}
                  onChange={(e) => setData({ ...data, quotePrep: { ...data.quotePrep, badge: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Title</label>
                <input
                  type="text"
                  value={data.quotePrep.title}
                  onChange={(e) => setData({ ...data, quotePrep: { ...data.quotePrep, title: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                />
              </div>
              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Description</label>
                <input
                  type="text"
                  value={data.quotePrep.description}
                  onChange={(e) => setData({ ...data, quotePrep: { ...data.quotePrep, description: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400">CTA Label</label>
                <input
                  type="text"
                  value={data.quotePrep.ctaText}
                  onChange={(e) => setData({ ...data, quotePrep: { ...data.quotePrep, ctaText: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400">CTA Href</label>
                <input
                  type="text"
                  value={data.quotePrep.ctaHref}
                  onChange={(e) => setData({ ...data, quotePrep: { ...data.quotePrep, ctaHref: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                />
              </div>
              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Quick Copy Template String</label>
                <textarea
                  rows={8}
                  value={data.quotePrep.copyText}
                  onChange={(e) => setData({ ...data, quotePrep: { ...data.quotePrep, copyText: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 p-3 font-mono text-xs text-slate-300"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 9: DOWNLOADABLE RESOURCES
          ───────────────────────────────────────────────────────────── */}
      {activeTab === "downloads" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                <Download className="h-4 w-4 text-cyan-400" />
                <span>Downloadable Project Resources</span>
              </h3>
              <button
                onClick={() => saveSection("downloads", data.downloads)}
                disabled={savingSection === "downloads"}
                className="px-3.5 py-2 rounded-xl bg-[#009fe3] hover:bg-[#008bc9] text-white text-xs font-bold transition flex items-center gap-1.5"
              >
                {savingSection === "downloads" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                <span>Save Downloads</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Badge</label>
                <input
                  type="text"
                  value={data.downloads.badge}
                  onChange={(e) => setData({ ...data, downloads: { ...data.downloads, badge: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Title</label>
                <input
                  type="text"
                  value={data.downloads.title}
                  onChange={(e) => setData({ ...data, downloads: { ...data.downloads, title: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                />
              </div>
              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Description</label>
                <textarea
                  rows={2}
                  value={data.downloads.description}
                  onChange={(e) => setData({ ...data, downloads: { ...data.downloads, description: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                />
              </div>
            </div>

            {/* Downloadable Items */}
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-extrabold text-white">Files Available for Download ({data.downloads.items.length})</h4>
                <button
                  type="button"
                  onClick={() => {
                    setData({
                      ...data,
                      downloads: {
                        ...data.downloads,
                        items: [
                          ...data.downloads.items,
                          {
                            name: "New Downloadable Resource",
                            format: "CSV",
                            filename: "New_Resource",
                            headers: ["Header 1", "Header 2"],
                            rows: [["Sample 1", "Sample 2"]],
                          },
                        ],
                      },
                    });
                  }}
                  className="px-3 py-1.5 rounded-xl bg-cyan-950 text-cyan-300 hover:bg-cyan-900 border border-cyan-800/40 text-xs font-bold transition flex items-center gap-1.5"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Add File</span>
                </button>
              </div>

              <div className="space-y-3">
                {data.downloads.items.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl border border-slate-800 bg-slate-950/80 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-cyan-400">File #{idx + 1}: {item.name}</span>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = data.downloads.items.filter((_, i) => i !== idx);
                          setData({ ...data, downloads: { ...data.downloads, items: updated } });
                        }}
                        className="text-slate-500 hover:text-red-400 transition"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      <div className="space-y-1 sm:col-span-2">
                        <label className="text-[11px] font-semibold text-slate-400">Display Name</label>
                        <input
                          type="text"
                          value={item.name}
                          onChange={(e) => {
                            const updated = [...data.downloads.items];
                            updated[idx].name = e.target.value;
                            setData({ ...data, downloads: { ...data.downloads, items: updated } });
                          }}
                          className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs text-white"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[11px] font-semibold text-slate-400">Format Badge</label>
                        <input
                          type="text"
                          value={item.format}
                          onChange={(e) => {
                            const updated = [...data.downloads.items];
                            updated[idx].format = e.target.value;
                            setData({ ...data, downloads: { ...data.downloads, items: updated } });
                          }}
                          className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs text-white"
                        />
                      </div>
                      <div className="space-y-1 sm:col-span-3">
                        <label className="text-[11px] font-semibold text-slate-400">Download Filename (without extension)</label>
                        <input
                          type="text"
                          value={item.filename}
                          onChange={(e) => {
                            const updated = [...data.downloads.items];
                            updated[idx].filename = e.target.value;
                            setData({ ...data, downloads: { ...data.downloads, items: updated } });
                          }}
                          className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs text-white font-mono"
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
          TAB 10: WHY PREPARE
          ───────────────────────────────────────────────────────────── */}
      {activeTab === "whyPrepare" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-cyan-400" />
                <span>Why Prepare Your Requirement Before Ordering?</span>
              </h3>
              <button
                onClick={() => saveSection("whyPrepare", data.whyPrepare)}
                disabled={savingSection === "whyPrepare"}
                className="px-3.5 py-2 rounded-xl bg-[#009fe3] hover:bg-[#008bc9] text-white text-xs font-bold transition flex items-center gap-1.5"
              >
                {savingSection === "whyPrepare" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                <span>Save Quality Section</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Badge</label>
                <input
                  type="text"
                  value={data.whyPrepare.badge}
                  onChange={(e) => setData({ ...data, whyPrepare: { ...data.whyPrepare, badge: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Title</label>
                <input
                  type="text"
                  value={data.whyPrepare.title}
                  onChange={(e) => setData({ ...data, whyPrepare: { ...data.whyPrepare, title: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                />
              </div>
              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Subtitle / Prompt</label>
                <input
                  type="text"
                  value={data.whyPrepare.description}
                  onChange={(e) => setData({ ...data, whyPrepare: { ...data.whyPrepare, description: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                />
              </div>
              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Footer Note</label>
                <input
                  type="text"
                  value={data.whyPrepare.footerNote}
                  onChange={(e) => setData({ ...data, whyPrepare: { ...data.whyPrepare, footerNote: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                />
              </div>
            </div>

            {/* Reasons */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-extrabold text-white">Avoidable Risks &amp; Benefits ({data.whyPrepare.reasons.length})</h4>
                <button
                  type="button"
                  onClick={() => {
                    setData({
                      ...data,
                      whyPrepare: {
                        ...data.whyPrepare,
                        reasons: [...data.whyPrepare.reasons, "New reason"],
                      },
                    });
                  }}
                  className="px-3 py-1.5 rounded-xl bg-cyan-950 text-cyan-300 hover:bg-cyan-900 border border-cyan-800/40 text-xs font-bold transition flex items-center gap-1.5"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Add Point</span>
                </button>
              </div>

              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {data.whyPrepare.reasons.map((reason, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 rounded-xl border border-slate-800 bg-slate-950">
                    <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <input
                      type="text"
                      value={reason}
                      onChange={(e) => {
                        const updated = [...data.whyPrepare.reasons];
                        updated[idx] = e.target.value;
                        setData({ ...data, whyPrepare: { ...data.whyPrepare, reasons: updated } });
                      }}
                      className="flex-1 rounded-lg bg-slate-900 border border-slate-800 px-3 py-1 text-xs text-white"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const updated = data.whyPrepare.reasons.filter((_, i) => i !== idx);
                        setData({ ...data, whyPrepare: { ...data.whyPrepare, reasons: updated } });
                      }}
                      className="p-1 text-slate-500 hover:text-red-400 transition"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 11: CLOSING CTA
          ───────────────────────────────────────────────────────────── */}
      {activeTab === "closingCta" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                <Tag className="h-4 w-4 text-cyan-400" />
                <span>Closing CTA &amp; Brand Tagline</span>
              </h3>
              <button
                onClick={() => saveSection("closingCta", data.closingCta)}
                disabled={savingSection === "closingCta"}
                className="px-3.5 py-2 rounded-xl bg-[#009fe3] hover:bg-[#008bc9] text-white text-xs font-bold transition flex items-center gap-1.5"
              >
                {savingSection === "closingCta" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                <span>Save Closing CTA</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Badge</label>
                <input
                  type="text"
                  value={data.closingCta.badge}
                  onChange={(e) => setData({ ...data, closingCta: { ...data.closingCta, badge: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Heading</label>
                <input
                  type="text"
                  value={data.closingCta.title}
                  onChange={(e) => setData({ ...data, closingCta: { ...data.closingCta, title: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                />
              </div>
              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Description</label>
                <textarea
                  rows={2}
                  value={data.closingCta.description}
                  onChange={(e) => setData({ ...data, closingCta: { ...data.closingCta, description: e.target.value } })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Primary CTA Label</label>
                <input
                  type="text"
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
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Primary CTA Link</label>
                <input
                  type="text"
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
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                />
              </div>
            </div>

            {/* Tagline configuration */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <h4 className="text-sm font-extrabold text-white">Brand Tagline Banner</h4>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-400">Title</label>
                  <input
                    type="text"
                    value={data.closingCta.tagline.title}
                    onChange={(e) =>
                      setData({
                        ...data,
                        closingCta: {
                          ...data.closingCta,
                          tagline: { ...data.closingCta.tagline, title: e.target.value },
                        },
                      })
                    }
                    className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-1.5 text-xs text-white font-mono"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-400">Subtitle Motto</label>
                  <input
                    type="text"
                    value={data.closingCta.tagline.subtitle}
                    onChange={(e) =>
                      setData({
                        ...data,
                        closingCta: {
                          ...data.closingCta,
                          tagline: { ...data.closingCta.tagline, subtitle: e.target.value },
                        },
                      })
                    }
                    className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-1.5 text-xs text-cyan-400 font-semibold"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-400">Pipeline Stages</label>
                  <input
                    type="text"
                    value={data.closingCta.tagline.pipeline}
                    onChange={(e) =>
                      setData({
                        ...data,
                        closingCta: {
                          ...data.closingCta,
                          tagline: { ...data.closingCta.tagline, pipeline: e.target.value },
                        },
                      })
                    }
                    className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-1.5 text-xs text-white font-mono"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-400">Company Slogan</label>
                  <input
                    type="text"
                    value={data.closingCta.tagline.company}
                    onChange={(e) =>
                      setData({
                        ...data,
                        closingCta: {
                          ...data.closingCta,
                          tagline: { ...data.closingCta.tagline, company: e.target.value },
                        },
                      })
                    }
                    className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-1.5 text-xs text-slate-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminTemplatesPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-[400px]">
          <RefreshCw className="h-8 w-8 text-[#009fe3] animate-spin" />
        </div>
      }
    >
      <AdminTemplatesContent />
    </Suspense>
  );
}
