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
  Video,
  Play,
  Tv,
  QrCode,
  Laptop,
  CheckSquare,
  FileSpreadsheet,
  Workflow,
  Ticket,
  Users,
  LayoutDashboard,
} from "lucide-react";
import type {
  DynamicIdgenStudioData,
  StudioVideoConfig,
  StudioStepItem,
  StudioOrganizationItem,
  DynamicIdgenStudioFaqItem,
} from "@/lib/dynamic-idgen-studio-types";

function VideoEditor({
  title,
  subtitle,
  video,
  onChange,
  onUpload,
  uploadingId,
  idPrefix,
}: {
  title: string;
  subtitle: string;
  video: StudioVideoConfig;
  onChange: (updated: StudioVideoConfig) => void;
  onUpload: (file: File, callback: (url: string) => void, fieldId?: string) => void;
  uploadingId: string | null;
  idPrefix: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div>
          <h4 className="text-xs font-black uppercase tracking-wider text-[#009fe3] flex items-center gap-1.5">
            <Video className="h-4 w-4" />
            <span>{title}</span>
          </h4>
          <p className="text-[11px] text-slate-400">{subtitle}</p>
        </div>

        {/* Dual Mode Switcher */}
        <div className="inline-flex items-center rounded-xl bg-slate-900 p-1 border border-slate-800">
          <button
            type="button"
            onClick={() => onChange({ ...video, sourceType: "mp4" })}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              video.sourceType === "mp4"
                ? "bg-[#009fe3] text-white shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            MP4 Video
          </button>
          <button
            type="button"
            onClick={() => onChange({ ...video, sourceType: "youtube" })}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              video.sourceType === "youtube"
                ? "bg-red-600 text-white shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            YouTube Embed
          </button>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {video.sourceType === "mp4" ? (
          <div className="sm:col-span-2 space-y-1">
            <label className="text-[10px] font-bold text-slate-400 block">
              MP4 Video Source (File URL or Upload MP4)
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="https://domain.com/video.mp4 or /videos/studio.mp4"
                value={video.mp4Url}
                onChange={(e) => onChange({ ...video, mp4Url: e.target.value })}
                className="flex-1 rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-xs font-mono text-white"
              />
              <label className="cursor-pointer inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 px-3 py-2 rounded-lg text-xs font-bold text-slate-200">
                <UploadCloud className="h-3.5 w-3.5" />
                <span>{uploadingId === `${idPrefix}-mp4` ? "Uploading..." : "Upload MP4"}</span>
                <input
                  type="file"
                  accept="video/mp4,video/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      onUpload(file, (url) => onChange({ ...video, mp4Url: url }), `${idPrefix}-mp4`);
                    }
                  }}
                />
              </label>
            </div>
          </div>
        ) : (
          <div className="sm:col-span-2 space-y-1">
            <label className="text-[10px] font-bold text-slate-400 block">
              YouTube Video URL or Video ID
            </label>
            <input
              type="text"
              placeholder="https://www.youtube.com/watch?v=... or https://youtu.be/..."
              value={video.youtubeUrl}
              onChange={(e) => onChange({ ...video, youtubeUrl: e.target.value })}
              className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-xs font-mono text-red-400"
            />
          </div>
        )}

        <div className="sm:col-span-2 space-y-1">
          <label className="text-[10px] font-bold text-slate-400 block">
            Poster Thumbnail Image URL
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="/images/poster.jpg"
              value={video.poster}
              onChange={(e) => onChange({ ...video, poster: e.target.value })}
              className="flex-1 rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-xs font-mono text-white"
            />
            <label className="cursor-pointer inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 px-3 py-2 rounded-lg text-xs font-bold text-slate-200">
              <UploadCloud className="h-3.5 w-3.5" />
              <span>{uploadingId === `${idPrefix}-poster` ? "..." : "Upload Poster"}</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    onUpload(file, (url) => onChange({ ...video, poster: url }), `${idPrefix}-poster`);
                  }
                }}
              />
            </label>
          </div>
        </div>

        <div>
          <label className="text-[10px] font-bold text-slate-400 block">Video Display Title</label>
          <input
            type="text"
            value={video.title || ""}
            onChange={(e) => onChange({ ...video, title: e.target.value })}
            className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-xs text-white"
          />
        </div>

        <div>
          <label className="text-[10px] font-bold text-slate-400 block">YouTube Channel Link URL</label>
          <input
            type="text"
            value={video.youtubeLinkHref || ""}
            onChange={(e) => onChange({ ...video, youtubeLinkHref: e.target.value })}
            className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-xs font-mono text-slate-300"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="text-[10px] font-bold text-slate-400 block">Video Description</label>
          <textarea
            rows={2}
            value={video.description || ""}
            onChange={(e) => onChange({ ...video, description: e.target.value })}
            className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-xs text-white"
          />
        </div>
      </div>
    </div>
  );
}

function AdminIdgenStudioContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "hero";
  const [data, setData] = useState<DynamicIdgenStudioData | null>(null);
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
      const res = await fetch("/api/admin/idgen-studio/");
      const json = await res.json();
      if (json.success && json.data) {
        setData(json.data);
      } else {
        setSaveError("Failed to load IDGen Studio data");
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
        setSaveSuccess("File uploaded successfully!");
        setTimeout(() => setSaveSuccess(null), 3000);
      } else {
        setSaveError(json.error || "File upload failed");
        setTimeout(() => setSaveError(null), 4000);
      }
    } catch (e: any) {
      setSaveError(e.message || "File upload failed");
      setTimeout(() => setSaveError(null), 4000);
    } finally {
      if (fieldId) setUploadingField(null);
    }
  };

  const handleSaveSection = async (sectionKey: keyof DynamicIdgenStudioData) => {
    if (!data) return;
    try {
      setSavingSection(sectionKey);
      const res = await fetch("/api/admin/idgen-studio/", {
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
      const res = await fetch("/api/admin/idgen-studio/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "save-all",
          data,
        }),
      });

      const json = await res.json();
      if (json.success) {
        setSaveSuccess("Entire IDGen Studio page saved successfully!");
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
    if (!confirm("Are you sure you want to reset all IDGen Studio content to factory defaults?")) {
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("/api/admin/idgen-studio/", {
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
        <p className="text-sm font-semibold">Loading IDGen Studio configurations...</p>
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
    { id: "hero", label: "Hero & Banner Video", icon: Sparkles },
    { id: "actionVideo", label: "Action Video & Demo", icon: Video },
    { id: "workflowSteps", label: "9-Step Workflow", icon: Workflow },
    { id: "organizations", label: "Organizations", icon: Building2 },
    { id: "twoSides", label: "Two Sides & Dashboard", icon: LayoutDashboard },
    { id: "whyComparison", label: "Why & Comparison", icon: CheckCircle2 },
    { id: "journeyPlanning", label: "Journey & Planning", icon: Clock },
    { id: "fullDemoClosing", label: "Full Demo & Closing", icon: Tv },
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
              Digital Data Collection &amp; Batch Production
            </span>
          </div>
          <h1 className="text-2xl font-black text-white sm:text-3xl tracking-tight">
            IDGen Studio Management
          </h1>
          <p className="text-xs text-slate-400 max-w-xl">
            Control all 17 page sections, dual-option video players (MP4 &amp; YouTube), QR codes, form planning templates, and batch workflows.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <Link
            href="/idgen-studio/"
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
          TAB 1: HERO & BANNER VIDEO
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "hero" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-lg font-black text-white">Hero Section Configuration</h2>
                <p className="text-xs text-slate-400">Headlines, badges, descriptions, and flow chain</p>
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
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs text-white"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Subtitle Slogan</label>
                <input
                  type="text"
                  value={data.hero.slogan}
                  onChange={(e) => setData({ ...data, hero: { ...data.hero, slogan: e.target.value } })}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs text-white font-bold text-[#009fe3]"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Main Heading Prefix</label>
                <input
                  type="text"
                  value={data.hero.titlePrefix}
                  onChange={(e) => setData({ ...data, hero: { ...data.hero, titlePrefix: e.target.value } })}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs text-white"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Gradient Highlight Title</label>
                <input
                  type="text"
                  value={data.hero.titleHighlight}
                  onChange={(e) => setData({ ...data, hero: { ...data.hero, titleHighlight: e.target.value } })}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs text-white"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-300 block mb-1">Paragraph 1</label>
                <textarea
                  rows={3}
                  value={data.hero.description1}
                  onChange={(e) => setData({ ...data, hero: { ...data.hero, description1: e.target.value } })}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs text-white"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-300 block mb-1">Paragraph 2</label>
                <textarea
                  rows={2}
                  value={data.hero.description2}
                  onChange={(e) => setData({ ...data, hero: { ...data.hero, description2: e.target.value } })}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs text-white"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-300 block mb-1">Flow Chain Steps (comma-separated)</label>
                <input
                  type="text"
                  value={data.hero.flowChainSteps.join(", ")}
                  onChange={(e) =>
                    setData({
                      ...data,
                      hero: {
                        ...data.hero,
                        flowChainSteps: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                      },
                    })
                  }
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs text-white font-mono"
                />
              </div>
            </div>

            {/* CTAs */}
            <div className="grid gap-4 sm:grid-cols-2 pt-4 border-t border-slate-800">
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
            </div>

            {/* Banner Video Editor */}
            <div className="pt-4 border-t border-slate-800">
              <VideoEditor
                title="Hero Banner Video Player"
                subtitle="Controls the video right beside the hero headlines"
                video={data.hero.bannerVideo}
                onChange={(updated) => setData({ ...data, hero: { ...data.hero, bannerVideo: updated } })}
                onUpload={handleFileUpload}
                uploadingId={uploadingField}
                idPrefix="hero-banner"
              />
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 2: ACTION VIDEO & TRY DEMO
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "actionVideo" && (
        <div className="space-y-6">
          {/* Action Video Section */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-lg font-black text-white">"See IDGen Studio in Action" Video</h2>
                <p className="text-xs text-slate-400">Section 2 dedicated workflow demonstration</p>
              </div>
              <button
                onClick={() => handleSaveSection("actionVideo")}
                disabled={savingSection === "actionVideo"}
                className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 px-4 py-2 text-xs font-extrabold text-white border border-slate-700 transition"
              >
                {savingSection === "actionVideo" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                <span>Save Action Video</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Eyebrow</label>
                <input
                  type="text"
                  value={data.actionVideo.eyebrow}
                  onChange={(e) => setData({ ...data, actionVideo: { ...data.actionVideo, eyebrow: e.target.value } })}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Title</label>
                <input
                  type="text"
                  value={data.actionVideo.title}
                  onChange={(e) => setData({ ...data, actionVideo: { ...data.actionVideo, title: e.target.value } })}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Lede</label>
                <input
                  type="text"
                  value={data.actionVideo.lede}
                  onChange={(e) => setData({ ...data, actionVideo: { ...data.actionVideo, lede: e.target.value } })}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>
              <div className="sm:col-span-3">
                <label className="text-xs font-bold text-slate-300 block mb-1">Journey Pipeline (comma-separated)</label>
                <input
                  type="text"
                  value={data.actionVideo.journeyPipeline.join(", ")}
                  onChange={(e) =>
                    setData({
                      ...data,
                      actionVideo: {
                        ...data.actionVideo,
                        journeyPipeline: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                      },
                    })
                  }
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white font-mono"
                />
              </div>
            </div>

            <VideoEditor
              title="Action Video Player"
              subtitle="Dual option player: MP4 video or YouTube embed"
              video={data.actionVideo.video}
              onChange={(updated) => setData({ ...data, actionVideo: { ...data.actionVideo, video: updated } })}
              onUpload={handleFileUpload}
              uploadingId={uploadingField}
              idPrefix="action-video"
            />
          </div>

          {/* Try Demo Section */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-lg font-black text-white">Try IDGen Studio Yourself (Interactive Demo)</h3>
                <p className="text-xs text-slate-400">QR code option, demo live form button, and process steps</p>
              </div>
              <button
                onClick={() => handleSaveSection("tryDemo")}
                disabled={savingSection === "tryDemo"}
                className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 px-4 py-2 text-xs font-extrabold text-white border border-slate-700 transition"
              >
                {savingSection === "tryDemo" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                <span>Save Try Demo</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Section Title</label>
                <input
                  type="text"
                  value={data.tryDemo.title}
                  onChange={(e) => setData({ ...data, tryDemo: { ...data.tryDemo, title: e.target.value } })}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Title Highlight</label>
                <input
                  type="text"
                  value={data.tryDemo.titleHighlight}
                  onChange={(e) => setData({ ...data, tryDemo: { ...data.tryDemo, titleHighlight: e.target.value } })}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-[#009fe3]"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-300 block mb-1">Description</label>
                <textarea
                  rows={2}
                  value={data.tryDemo.description}
                  onChange={(e) => setData({ ...data, tryDemo: { ...data.tryDemo, description: e.target.value } })}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 pt-4 border-t border-slate-800">
              {/* Option 1: QR Code */}
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-3">
                <h4 className="text-xs font-black uppercase text-[#009fe3]">Option 1: QR Code Card</h4>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 block">Title</label>
                  <input
                    type="text"
                    value={data.tryDemo.option1Subtitle}
                    onChange={(e) => setData({ ...data, tryDemo: { ...data.tryDemo, option1Subtitle: e.target.value } })}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 block">Custom QR Code Image URL (Leave blank to use default SVG)</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Optional custom QR image URL"
                      value={data.tryDemo.option1QrImage}
                      onChange={(e) => setData({ ...data, tryDemo: { ...data.tryDemo, option1QrImage: e.target.value } })}
                      className="flex-1 rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white font-mono"
                    />
                    <label className="cursor-pointer inline-flex items-center gap-1 bg-slate-800 hover:bg-slate-700 px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-200">
                      <UploadCloud className="h-3 w-3" />
                      <span>{uploadingField === "qr-image" ? "..." : "Upload"}</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            handleFileUpload(file, (url) => setData({ ...data, tryDemo: { ...data.tryDemo, option1QrImage: url } }), "qr-image");
                          }
                        }}
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 block">QR Subtitle / Note</label>
                  <input
                    type="text"
                    value={data.tryDemo.option1Note}
                    onChange={(e) => setData({ ...data, tryDemo: { ...data.tryDemo, option1Note: e.target.value } })}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
              </div>

              {/* Option 2: Live Form */}
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-3">
                <h4 className="text-xs font-black uppercase text-[#009fe3]">Option 2: Live Form Card</h4>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 block">Title</label>
                  <input
                    type="text"
                    value={data.tryDemo.option2Subtitle}
                    onChange={(e) => setData({ ...data, tryDemo: { ...data.tryDemo, option2Subtitle: e.target.value } })}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 block">Button Text</label>
                  <input
                    type="text"
                    value={data.tryDemo.option2ButtonText}
                    onChange={(e) => setData({ ...data, tryDemo: { ...data.tryDemo, option2ButtonText: e.target.value } })}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 block">Button Link (Href)</label>
                  <input
                    type="text"
                    value={data.tryDemo.option2ButtonHref}
                    onChange={(e) => setData({ ...data, tryDemo: { ...data.tryDemo, option2ButtonHref: e.target.value } })}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white font-mono"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 block">What you can experience (comma-separated)</label>
                  <textarea
                    rows={2}
                    value={data.tryDemo.option2Experiences.join(", ")}
                    onChange={(e) =>
                      setData({
                        ...data,
                        tryDemo: {
                          ...data.tryDemo,
                          option2Experiences: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                        },
                      })
                    }
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 3: 9-STEP WORKFLOW
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "workflowSteps" && (
        <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">9-Step Workflow Pipeline</h2>
              <p className="text-xs text-slate-400">Step by step operational breakdown from Form creation to batch printing</p>
            </div>
            <button
              onClick={() => handleSaveSection("workflowSteps")}
              disabled={savingSection === "workflowSteps"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 px-4 py-2 text-xs font-extrabold text-white border border-slate-700 transition"
            >
              {savingSection === "workflowSteps" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save 9 Steps</span>
            </button>
          </div>

          <div className="space-y-4">
            {data.workflowSteps.steps.map((step, idx) => (
              <div key={step.num} className="rounded-2xl border border-slate-800 bg-slate-950 p-5 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="font-mono text-xs font-black uppercase text-[#009fe3]">
                    Step {step.num}: {step.title}
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 block">Title</label>
                    <input
                      type="text"
                      value={step.title}
                      onChange={(e) => {
                        const next = [...data.workflowSteps.steps];
                        next[idx].title = e.target.value;
                        setData({ ...data, workflowSteps: { ...data.workflowSteps, steps: next } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 block">Description</label>
                    <input
                      type="text"
                      value={step.desc}
                      onChange={(e) => {
                        const next = [...data.workflowSteps.steps];
                        next[idx].desc = e.target.value;
                        setData({ ...data, workflowSteps: { ...data.workflowSteps, steps: next } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                    />
                  </div>
                  {step.schoolExamples && (
                    <div className="sm:col-span-2">
                      <label className="text-[10px] font-bold text-slate-400 block">School Examples (comma-separated)</label>
                      <input
                        type="text"
                        value={step.schoolExamples.join(", ")}
                        onChange={(e) => {
                          const next = [...data.workflowSteps.steps];
                          next[idx].schoolExamples = e.target.value.split(",").map((s) => s.trim()).filter(Boolean);
                          setData({ ...data, workflowSteps: { ...data.workflowSteps, steps: next } });
                        }}
                        className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                      />
                    </div>
                  )}
                  {step.channels && (
                    <div className="sm:col-span-2">
                      <label className="text-[10px] font-bold text-slate-400 block">Distribution Channels (comma-separated)</label>
                      <input
                        type="text"
                        value={step.channels.join(", ")}
                        onChange={(e) => {
                          const next = [...data.workflowSteps.steps];
                          next[idx].channels = e.target.value.split(",").map((s) => s.trim()).filter(Boolean);
                          setData({ ...data, workflowSteps: { ...data.workflowSteps, steps: next } });
                        }}
                        className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                      />
                    </div>
                  )}
                  {step.note && (
                    <div className="sm:col-span-2">
                      <label className="text-[10px] font-bold text-slate-400 block">Note</label>
                      <input
                        type="text"
                        value={step.note}
                        onChange={(e) => {
                          const next = [...data.workflowSteps.steps];
                          next[idx].note = e.target.value;
                          setData({ ...data, workflowSteps: { ...data.workflowSteps, steps: next } });
                        }}
                        className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-slate-300"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 4: ORGANIZATIONS
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "organizations" && (
        <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">IDGen Studio for Different Organizations</h2>
              <p className="text-xs text-slate-400">Schools, Colleges, Companies, and Events operational workflows</p>
            </div>
            <button
              onClick={() => handleSaveSection("organizations")}
              disabled={savingSection === "organizations"}
              className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 px-4 py-2 text-xs font-extrabold text-white border border-slate-700 transition"
            >
              {savingSection === "organizations" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
              <span>Save Organizations</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {data.organizations.organizations.map((org, idx) => (
              <div key={org.id} className="rounded-2xl border border-slate-800 bg-slate-950 p-5 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs font-black uppercase text-[#009fe3]">{org.title}</span>
                  <span className="text-[10px] font-mono text-cyan-400">{org.iconName}</span>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-400 block">Title</label>
                  <input
                    type="text"
                    value={org.title}
                    onChange={(e) => {
                      const next = [...data.organizations.organizations];
                      next[idx].title = e.target.value;
                      setData({ ...data, organizations: { ...data.organizations, organizations: next } });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white font-bold"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-400 block">Description</label>
                  <textarea
                    rows={2}
                    value={org.desc}
                    onChange={(e) => {
                      const next = [...data.organizations.organizations];
                      next[idx].desc = e.target.value;
                      setData({ ...data, organizations: { ...data.organizations, organizations: next } });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-400 block">Typical Flow Description</label>
                  <textarea
                    rows={2}
                    value={org.typicalFlow}
                    onChange={(e) => {
                      const next = [...data.organizations.organizations];
                      next[idx].typicalFlow = e.target.value;
                      setData({ ...data, organizations: { ...data.organizations, organizations: next } });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-cyan-300"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 block">Link Text</label>
                    <input
                      type="text"
                      value={org.linkText}
                      onChange={(e) => {
                        const next = [...data.organizations.organizations];
                        next[idx].linkText = e.target.value;
                        setData({ ...data, organizations: { ...data.organizations, organizations: next } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 block">Link URL</label>
                    <input
                      type="text"
                      value={org.linkHref}
                      onChange={(e) => {
                        const next = [...data.organizations.organizations];
                        next[idx].linkHref = e.target.value;
                        setData({ ...data, organizations: { ...data.organizations, organizations: next } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-xs font-mono text-slate-400"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 5: TWO SIDES & DASHBOARD
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "twoSides" && (
        <div className="space-y-6">
          {/* Two Sides */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-lg font-black text-white">Two Sides of Experience</h2>
                <p className="text-xs text-slate-400">End user vs organization workflow steps</p>
              </div>
              <button
                onClick={() => handleSaveSection("twoSides")}
                disabled={savingSection === "twoSides"}
                className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 px-4 py-2 text-xs font-extrabold text-white border border-slate-700 transition"
              >
                {savingSection === "twoSides" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                <span>Save Two Sides</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-2">
                <label className="text-xs font-bold text-slate-300 block">End User Steps (one per line)</label>
                <textarea
                  rows={6}
                  value={data.twoSides.endUserSteps.join("\n")}
                  onChange={(e) =>
                    setData({
                      ...data,
                      twoSides: {
                        ...data.twoSides,
                        endUserSteps: e.target.value.split("\n").filter(Boolean),
                      },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-xs text-white font-mono"
                />
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-2">
                <label className="text-xs font-bold text-slate-300 block">Organization Steps (one per line)</label>
                <textarea
                  rows={6}
                  value={data.twoSides.organizationSteps.join("\n")}
                  onChange={(e) =>
                    setData({
                      ...data,
                      twoSides: {
                        ...data.twoSides,
                        organizationSteps: e.target.value.split("\n").filter(Boolean),
                      },
                    })
                  }
                  className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-xs text-white font-mono"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-300 block mb-1">Footer Connecting Note</label>
                <input
                  type="text"
                  value={data.twoSides.footerNote}
                  onChange={(e) => setData({ ...data, twoSides: { ...data.twoSides, footerNote: e.target.value } })}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2 text-xs text-white"
                />
              </div>
            </div>
          </div>

          {/* Dashboard Section */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-lg font-black text-white">IDGen Studio Dashboard Status Rows</h3>
                <p className="text-xs text-slate-400">Total required, submitted, reviewed, approved, and printed</p>
              </div>
              <button
                onClick={() => handleSaveSection("dashboard")}
                disabled={savingSection === "dashboard"}
                className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 px-4 py-2 text-xs font-extrabold text-white border border-slate-700 transition"
              >
                {savingSection === "dashboard" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                <span>Save Dashboard</span>
              </button>
            </div>

            <div className="space-y-3">
              {data.dashboard.rows.map((row, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <input
                    type="text"
                    value={row.status}
                    onChange={(e) => {
                      const next = [...data.dashboard.rows];
                      next[idx].status = e.target.value;
                      setData({ ...data, dashboard: { ...data.dashboard, rows: next } });
                    }}
                    className="flex-1 rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs font-bold text-white"
                  />
                  <input
                    type="text"
                    value={row.count}
                    onChange={(e) => {
                      const next = [...data.dashboard.rows];
                      next[idx].count = e.target.value;
                      setData({ ...data, dashboard: { ...data.dashboard, rows: next } });
                    }}
                    className="w-36 rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs font-mono font-bold text-[#009fe3]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 6: WHY & COMPARISON
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "whyComparison" && (
        <div className="space-y-6">
          {/* Why Section */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-lg font-black text-white">Why IDGen Studio (6 Value Cards)</h2>
                <p className="text-xs text-slate-400">Core business & operational advantages</p>
              </div>
              <button
                onClick={() => handleSaveSection("why")}
                disabled={savingSection === "why"}
                className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 px-4 py-2 text-xs font-extrabold text-white border border-slate-700 transition"
              >
                {savingSection === "why" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                <span>Save Why Studio</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.why.cards.map((card, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-2">
                  <input
                    type="text"
                    value={card.title}
                    onChange={(e) => {
                      const next = [...data.why.cards];
                      next[idx].title = e.target.value;
                      setData({ ...data, why: { ...data.why, cards: next } });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs font-bold text-white"
                  />
                  <textarea
                    rows={3}
                    value={card.desc}
                    onChange={(e) => {
                      const next = [...data.why.cards];
                      next[idx].desc = e.target.value;
                      setData({ ...data, why: { ...data.why, cards: next } });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-slate-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Section */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-lg font-black text-white">Traditional vs IDGen Studio Comparison Rows</h3>
                <p className="text-xs text-slate-400">Head-to-head comparison table</p>
              </div>
              <button
                onClick={() => handleSaveSection("comparison")}
                disabled={savingSection === "comparison"}
                className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 px-4 py-2 text-xs font-extrabold text-white border border-slate-700 transition"
              >
                {savingSection === "comparison" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                <span>Save Comparison</span>
              </button>
            </div>

            <div className="space-y-3">
              {data.comparison.rows.map((row, idx) => (
                <div key={idx} className="grid grid-cols-3 gap-2">
                  <input
                    type="text"
                    placeholder="Aspect"
                    value={row.aspect}
                    onChange={(e) => {
                      const next = [...data.comparison.rows];
                      next[idx].aspect = e.target.value;
                      setData({ ...data, comparison: { ...data.comparison, rows: next } });
                    }}
                    className="rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1.5 text-xs font-bold text-white"
                  />
                  <input
                    type="text"
                    placeholder="Traditional"
                    value={row.traditional}
                    onChange={(e) => {
                      const next = [...data.comparison.rows];
                      next[idx].traditional = e.target.value;
                      setData({ ...data, comparison: { ...data.comparison, rows: next } });
                    }}
                    className="rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1.5 text-xs text-slate-400"
                  />
                  <input
                    type="text"
                    placeholder="IDGen Studio"
                    value={row.studio}
                    onChange={(e) => {
                      const next = [...data.comparison.rows];
                      next[idx].studio = e.target.value;
                      setData({ ...data, comparison: { ...data.comparison, rows: next } });
                    }}
                    className="rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1.5 text-xs font-bold text-[#009fe3]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 7: JOURNEY & PLANNING
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "journeyPlanning" && (
        <div className="space-y-6">
          {/* Journey Section */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-lg font-black text-white">The Complete Journey (9 Numbered Stages)</h2>
                <p className="text-xs text-slate-400">Scan → Fill → Upload → Preview → Submit → Review → Approve → Print → Distribute</p>
              </div>
              <button
                onClick={() => handleSaveSection("journey")}
                disabled={savingSection === "journey"}
                className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 px-4 py-2 text-xs font-extrabold text-white border border-slate-700 transition"
              >
                {savingSection === "journey" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                <span>Save Journey</span>
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {data.journey.steps.map((step, idx) => (
                <div key={idx} className="rounded-xl border border-slate-800 bg-slate-950 p-3 space-y-1.5">
                  <span className="text-[10px] font-mono font-black text-[#009fe3]">{step.num}</span>
                  <input
                    type="text"
                    value={step.title}
                    onChange={(e) => {
                      const next = [...data.journey.steps];
                      next[idx].title = e.target.value;
                      setData({ ...data, journey: { ...data.journey, steps: next } });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-xs font-bold text-white"
                  />
                  <input
                    type="text"
                    value={step.sub}
                    onChange={(e) => {
                      const next = [...data.journey.steps];
                      next[idx].sub = e.target.value;
                      setData({ ...data, journey: { ...data.journey, steps: next } });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-xs text-slate-400"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Form Planning Fields */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-lg font-black text-white">Form Planning Specifications</h3>
                <p className="text-xs text-slate-400">Requirement and field types table</p>
              </div>
              <button
                onClick={() => handleSaveSection("formPlanning")}
                disabled={savingSection === "formPlanning"}
                className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 px-4 py-2 text-xs font-extrabold text-white border border-slate-700 transition"
              >
                {savingSection === "formPlanning" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                <span>Save Form Planning</span>
              </button>
            </div>

            <div className="space-y-2">
              {data.formPlanning.fields.map((f, idx) => (
                <div key={idx} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Requirement"
                    value={f.requirement}
                    onChange={(e) => {
                      const next = [...data.formPlanning.fields];
                      next[idx].requirement = e.target.value;
                      setData({ ...data, formPlanning: { ...data.formPlanning, fields: next } });
                    }}
                    className="flex-1 rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1.5 text-xs text-white"
                  />
                  <input
                    type="text"
                    placeholder="Field Type"
                    value={f.fieldType}
                    onChange={(e) => {
                      const next = [...data.formPlanning.fields];
                      next[idx].fieldType = e.target.value;
                      setData({ ...data, formPlanning: { ...data.formPlanning, fields: next } });
                    }}
                    className="w-48 rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1.5 text-xs font-mono text-[#009fe3]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 8: FULL DEMO & CLOSING
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "fullDemoClosing" && (
        <div className="space-y-6">
          {/* Full Demo Video */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-lg font-black text-white">Full Demonstration Video (Bottom Player)</h2>
                <p className="text-xs text-slate-400">Section 16 walkthrough video player (MP4 / YouTube)</p>
              </div>
              <button
                onClick={() => handleSaveSection("fullDemo")}
                disabled={savingSection === "fullDemo"}
                className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 px-4 py-2 text-xs font-extrabold text-white border border-slate-700 transition"
              >
                {savingSection === "fullDemo" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                <span>Save Full Demo Video</span>
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Title</label>
                <input
                  type="text"
                  value={data.fullDemo.title}
                  onChange={(e) => setData({ ...data, fullDemo: { ...data.fullDemo, title: e.target.value } })}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Subtitle</label>
                <input
                  type="text"
                  value={data.fullDemo.subtitle}
                  onChange={(e) => setData({ ...data, fullDemo: { ...data.fullDemo, subtitle: e.target.value } })}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>
            </div>

            <VideoEditor
              title="Full Demo Video Player"
              subtitle="Dual option player: MP4 video or YouTube embed"
              video={data.fullDemo.video}
              onChange={(updated) => setData({ ...data, fullDemo: { ...data.fullDemo, video: updated } })}
              onUpload={handleFileUpload}
              uploadingId={uploadingField}
              idPrefix="full-demo"
            />
          </div>

          {/* Closing CTA */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-lg font-black text-white">Closing Call To Action Banner</h3>
                <p className="text-xs text-slate-400">Headlines, slogan, action buttons, and footer branding</p>
              </div>
              <button
                onClick={() => handleSaveSection("closingCta")}
                disabled={savingSection === "closingCta"}
                className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 px-4 py-2 text-xs font-extrabold text-white border border-slate-700 transition"
              >
                {savingSection === "closingCta" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                <span>Save Closing CTA</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Title</label>
                <input
                  type="text"
                  value={data.closingCta.title}
                  onChange={(e) => setData({ ...data, closingCta: { ...data.closingCta, title: e.target.value } })}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Slogan</label>
                <input
                  type="text"
                  value={data.closingCta.slogan}
                  onChange={(e) => setData({ ...data, closingCta: { ...data.closingCta, slogan: e.target.value } })}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-[#009fe3]"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-300 block mb-1">Description</label>
                <textarea
                  rows={2}
                  value={data.closingCta.description}
                  onChange={(e) => setData({ ...data, closingCta: { ...data.closingCta, description: e.target.value } })}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Branding Title</label>
                <input
                  type="text"
                  value={data.closingCta.brandingTitle}
                  onChange={(e) => setData({ ...data, closingCta: { ...data.closingCta, brandingTitle: e.target.value } })}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs font-mono text-white"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Branding Steps</label>
                <input
                  type="text"
                  value={data.closingCta.brandingSteps}
                  onChange={(e) => setData({ ...data, closingCta: { ...data.closingCta, brandingSteps: e.target.value } })}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-300"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          TAB 9: FAQS
      ───────────────────────────────────────────────────────────── */}
      {activeTab === "faqs" && (
        <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-black text-white">Frequently Asked Questions</h2>
              <p className="text-xs text-slate-400">Questions &amp; answers on online form access, photo upload, and batch printing</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  const newFaq: DynamicIdgenStudioFaqItem = {
                    q: "New Studio Question?",
                    a: "Answer explaining studio workflows, digital submissions or batch printing.",
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

          <div className="space-y-4">
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
          TAB 10: SEO & METADATA
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

export default function AdminIdgenStudioPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[400px] items-center justify-center p-8 text-slate-400">
          <RefreshCw className="h-8 w-8 animate-spin text-[#009fe3]" />
        </div>
      }
    >
      <AdminIdgenStudioContent />
    </Suspense>
  );
}
