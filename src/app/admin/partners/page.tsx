"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import {
  Users,
  Search,
  Trash2,
  Mail,
  Phone,
  MapPin,
  Building,
  Calendar,
  X,
  Handshake,
  Sparkles,
  Save,
  RotateCcw,
  ExternalLink,
  Plus,
  CheckCircle2,
  AlertCircle,
  Layers,
  UploadCloud,
  Check,
  RefreshCw,
  Camera,
  Tag,
  Wrench,
  BadgeCheck,
  HelpCircle,
  FileSpreadsheet,
} from "lucide-react";
import type {
  DynamicPartnersData,
  DynamicPartnersHero,
  DynamicPartnersWhyPartner,
  DynamicPartnersStrengths,
  DynamicPartnersModels,
  DynamicPartnersOfferings,
  DynamicPartnersWhyModelWorks,
  DynamicPartnersGoodProfile,
  DynamicPartnersExperienceAndStudio,
  DynamicPartnersWorkflows,
  DynamicPartnersDivision,
  DynamicPartnersTermsAndTerritory,
  DynamicPartnersApplication,
  DynamicPartnersFaqs,
  DynamicPartnersClosingCta,
  DynamicPartnersRegionalDirectory,
  DynamicPartnersMeta,
} from "@/lib/dynamic-partners-types";

interface PartnerRecord {
  id: string;
  type: "quote" | "partner";
  name: string;
  organization?: string;
  email: string;
  phone?: string;
  city?: string;
  message?: string;
  status: "new" | "in_review" | "contacted" | "closed";
  createdAt: string;
}

function AdminPartnersContent() {
  const [mainMode, setMainMode] = useState<"cms" | "crm">("cms");
  
  // CMS State
  const [data, setData] = useState<DynamicPartnersData | null>(null);
  const [cmsTab, setCmsTab] = useState<string>("hero");
  const [loadingCms, setLoadingCms] = useState(true);
  const [saving, setSaving] = useState(false);
  const [savingSection, setSavingSection] = useState<string | null>(null);
  const [uploadingField, setUploadingField] = useState<string | null>(null);
  const [saveSuccess, setSaveSuccess] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);

  // CRM State (Existing Inquiries)
  const [partners, setPartners] = useState<PartnerRecord[]>([]);
  const [loadingCrm, setLoadingCrm] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedPartner, setSelectedPartner] = useState<PartnerRecord | null>(null);

  useEffect(() => {
    fetchCmsData();
    fetchPartners();
  }, []);

  const fetchCmsData = async () => {
    try {
      setLoadingCms(true);
      const res = await fetch("/api/admin/partners");
      const json = await res.json();
      if (json.success && json.data) {
        setData(json.data);
      } else {
        setSaveError("Failed to load Partners CMS data");
      }
    } catch (e: any) {
      setSaveError(e.message || "Network error loading CMS data");
    } finally {
      setLoadingCms(false);
    }
  };

  const fetchPartners = async () => {
    try {
      setLoadingCrm(true);
      const res = await fetch("/api/admin/leads/?type=partner");
      const json = await res.json();
      if (json.success) {
        setPartners(json.leads || []);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingCrm(false);
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
      const res = await fetch("/api/admin/partners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });
      const json = await res.json();
      if (json.success) {
        setData(json.data);
        setSaveSuccess("Partners page saved & published successfully!");
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

  const saveSection = async (sectionKey: keyof DynamicPartnersData, sectionData: any) => {
    try {
      setSavingSection(sectionKey);
      setSaveError(null);
      const res = await fetch("/api/admin/partners", {
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
    if (!confirm("Are you sure you want to reset all Partners page content to factory defaults? Custom CMS changes will be lost.")) {
      return;
    }
    try {
      setSaving(true);
      const res = await fetch("/api/admin/partners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "reset" }),
      });
      const json = await res.json();
      if (json.success) {
        setData(json.data);
        setSaveSuccess("Partners page reset to factory defaults!");
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

  const updateStatus = async (id: string, status: string) => {
    try {
      const res = await fetch("/api/admin/leads/", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      const json = await res.json();
      if (json.success) {
        fetchPartners();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const deletePartner = async (id: string) => {
    if (!confirm("Are you sure you want to delete this partner inquiry?")) return;
    try {
      const res = await fetch(`/api/admin/leads/?id=${id}`, { method: "DELETE" });
      const json = await res.json();
      if (json.success) {
        fetchPartners();
        if (selectedPartner?.id === id) setSelectedPartner(null);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const filteredPartners = partners.filter((p) => {
    return (
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      (p.organization || "").toLowerCase().includes(search.toLowerCase()) ||
      (p.city || "").toLowerCase().includes(search.toLowerCase()) ||
      p.email.toLowerCase().includes(search.toLowerCase())
    );
  });

  const cmsTabs = [
    { id: "hero", label: "Hero & Showcase", icon: Sparkles },
    { id: "whyPartner", label: "CapEx & Strengths", icon: Wrench },
    { id: "models", label: "4 Partner Models", icon: Handshake },
    { id: "offerings", label: "Offerings & Synergies", icon: Layers },
    { id: "workflows", label: "Workflows & Roles", icon: RefreshCw },
    { id: "terms", label: "Territory & Application", icon: Tag },
    { id: "faqs", label: "FAQs & Closing CTA", icon: HelpCircle },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-20">
      {/* Top Header Banner */}
      <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-[#071525] to-slate-900 p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-800/40 bg-cyan-950/60 px-3.5 py-1 text-xs font-bold text-cyan-300">
              <Handshake className="h-3.5 w-3.5 text-cyan-400" />
              <span>PARTNER PROGRAM HUB</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              IDGen Partner &amp; Reseller Program Management
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
              Dynamically customize public page content, partnership models, offerings, and manage inbound channel partner applications.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* Main Mode Toggle: CMS vs CRM */}
            <div className="inline-flex rounded-2xl border border-slate-800 bg-slate-950 p-1">
              <button
                onClick={() => setMainMode("cms")}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition ${
                  mainMode === "cms"
                    ? "bg-[#009fe3] text-white shadow-md shadow-[#009fe3]/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Page Content (CMS)
              </button>
              <button
                onClick={() => setMainMode("crm")}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 ${
                  mainMode === "crm"
                    ? "bg-teal-600 text-white shadow-md shadow-teal-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <span>Partner Inquiries</span>
                {partners.length > 0 && (
                  <span className="bg-white/20 text-white px-1.5 py-0.2 rounded-full text-[10px]">
                    {partners.length}
                  </span>
                )}
              </button>
            </div>

            <Link
              href="/partners/"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700 px-4 py-2.5 text-xs font-bold text-slate-200 transition shadow-sm"
            >
              <ExternalLink className="h-4 w-4 text-cyan-400" />
              <span>Live Page</span>
            </Link>

            {mainMode === "cms" && (
              <>
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
              </>
            )}
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

      {/* ─────────────────────────────────────────────────────────────
          MODE 1: CMS PAGE EDITOR
          ───────────────────────────────────────────────────────────── */}
      {mainMode === "cms" && (
        <div className="space-y-6">
          {loadingCms || !data ? (
            <div className="flex flex-col items-center justify-center min-h-[350px] space-y-3">
              <RefreshCw className="h-8 w-8 text-[#009fe3] animate-spin" />
              <p className="text-xs font-bold text-slate-400">Loading Partners CMS Data...</p>
            </div>
          ) : (
            <>
              {/* CMS Sub-Tabs Navigation */}
              <div className="flex flex-wrap items-center gap-2 pb-2">
                {cmsTabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = cmsTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setCmsTab(tab.id)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
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

              {/* TAB 1: HERO & SHOWCASE CARD */}
              {cmsTab === "hero" && (
                <div className="space-y-6">
                  {/* Meta */}
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
                          className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-400">Canonical Path</label>
                        <input
                          type="text"
                          value={data.meta.path}
                          onChange={(e) => setData({ ...data, meta: { ...data.meta, path: e.target.value } })}
                          className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                        />
                      </div>
                      <div className="sm:col-span-2 space-y-1.5">
                        <label className="text-xs font-bold text-slate-400">Meta Description</label>
                        <textarea
                          rows={2}
                          value={data.meta.description}
                          onChange={(e) => setData({ ...data, meta: { ...data.meta, description: e.target.value } })}
                          className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Hero Content */}
                  <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-6">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                        <Handshake className="h-4 w-4 text-cyan-400" />
                        <span>Hero Section Content</span>
                      </h3>
                      <button
                        onClick={() => saveSection("hero", data.hero)}
                        disabled={savingSection === "hero"}
                        className="px-3.5 py-2 rounded-xl bg-[#009fe3] hover:bg-[#008bc9] text-white text-xs font-bold transition flex items-center gap-1.5"
                      >
                        {savingSection === "hero" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                        <span>Save Hero</span>
                      </button>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-400">Pill Badge</label>
                        <input
                          type="text"
                          value={data.hero.badge}
                          onChange={(e) => setData({ ...data, hero: { ...data.hero, badge: e.target.value } })}
                          className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-400">Main H1 Title</label>
                        <input
                          type="text"
                          value={data.hero.h1}
                          onChange={(e) => setData({ ...data, hero: { ...data.hero, h1: e.target.value } })}
                          className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                        />
                      </div>
                      <div className="sm:col-span-2 space-y-1.5">
                        <label className="text-xs font-bold text-slate-400">Subtitle Tagline</label>
                        <input
                          type="text"
                          value={data.hero.subtitle}
                          onChange={(e) => setData({ ...data, hero: { ...data.hero, subtitle: e.target.value } })}
                          className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                        />
                      </div>
                      <div className="sm:col-span-2 space-y-1.5">
                        <label className="text-xs font-bold text-slate-400">Main Description</label>
                        <textarea
                          rows={3}
                          value={data.hero.description}
                          onChange={(e) => setData({ ...data, hero: { ...data.hero, description: e.target.value } })}
                          className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-400">Division Callout Badge</label>
                        <input
                          type="text"
                          value={data.hero.responsibilityBadge}
                          onChange={(e) => setData({ ...data, hero: { ...data.hero, responsibilityBadge: e.target.value } })}
                          className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-400">Division Highlight Text</label>
                        <input
                          type="text"
                          value={data.hero.responsibilityHighlight}
                          onChange={(e) => setData({ ...data, hero: { ...data.hero, responsibilityHighlight: e.target.value } })}
                          className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2 text-xs text-white"
                        />
                      </div>
                    </div>

                    {/* Local Partner Model Steps */}
                    <div className="space-y-3 pt-4 border-t border-slate-800">
                      <h4 className="text-xs font-bold text-slate-300">Local Partner Model Pipeline Steps</h4>
                      <div className="grid gap-2 sm:grid-cols-3">
                        {data.hero.modelSteps.map((step, idx) => (
                          <input
                            key={idx}
                            type="text"
                            value={step}
                            onChange={(e) => {
                              const updated = [...data.hero.modelSteps];
                              updated[idx] = e.target.value;
                              setData({ ...data, hero: { ...data.hero, modelSteps: updated } });
                            }}
                            className="rounded-xl bg-slate-950 border border-slate-800 px-3 py-1.5 text-xs text-white"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Right Showcase Card */}
                    <div className="space-y-4 pt-6 border-t border-slate-800">
                      <h4 className="text-sm font-extrabold text-white">Hero Showcase Card</h4>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="space-y-1 sm:col-span-2">
                          <label className="text-[11px] font-semibold text-slate-400">Card Image URL</label>
                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              value={data.hero.showcaseCard.imageSrc}
                              onChange={(e) =>
                                setData({
                                  ...data,
                                  hero: {
                                    ...data.hero,
                                    showcaseCard: { ...data.hero.showcaseCard, imageSrc: e.target.value },
                                  },
                                })
                              }
                              className="flex-1 rounded-xl bg-slate-950 border border-slate-800 px-3 py-1.5 text-xs text-white"
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
                                      setData({
                                        ...data,
                                        hero: {
                                          ...data.hero,
                                          showcaseCard: { ...data.hero.showcaseCard, imageSrc: url },
                                        },
                                      });
                                    },
                                    "showcaseCard"
                                  )
                                }
                              />
                            </label>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <label className="text-[11px] font-semibold text-slate-400">Top Badge</label>
                          <input
                            type="text"
                            value={data.hero.showcaseCard.topBadge}
                            onChange={(e) =>
                              setData({
                                ...data,
                                hero: {
                                  ...data.hero,
                                  showcaseCard: { ...data.hero.showcaseCard, topBadge: e.target.value },
                                },
                              })
                            }
                            className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-1.5 text-xs text-white"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[11px] font-semibold text-slate-400">Sub Title</label>
                          <input
                            type="text"
                            value={data.hero.showcaseCard.subTitle}
                            onChange={(e) =>
                              setData({
                                ...data,
                                hero: {
                                  ...data.hero,
                                  showcaseCard: { ...data.hero.showcaseCard, subTitle: e.target.value },
                                },
                              })
                            }
                            className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-1.5 text-xs text-white"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[11px] font-semibold text-slate-400">Main Title</label>
                          <input
                            type="text"
                            value={data.hero.showcaseCard.mainTitle}
                            onChange={(e) =>
                              setData({
                                ...data,
                                hero: {
                                  ...data.hero,
                                  showcaseCard: { ...data.hero.showcaseCard, mainTitle: e.target.value },
                                },
                              })
                            }
                            className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-1.5 text-xs text-white"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[11px] font-semibold text-slate-400">Region Badge</label>
                          <input
                            type="text"
                            value={data.hero.showcaseCard.regionBadge}
                            onChange={(e) =>
                              setData({
                                ...data,
                                hero: {
                                  ...data.hero,
                                  showcaseCard: { ...data.hero.showcaseCard, regionBadge: e.target.value },
                                },
                              })
                            }
                            className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-1.5 text-xs text-white"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: CAPEX & STRENGTHS */}
              {cmsTab === "whyPartner" && (
                <div className="space-y-6">
                  {/* Why Partner */}
                  <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                        <Wrench className="h-4 w-4 text-cyan-400" />
                        <span>Why Partner With IDGen (CapEx Barrier)</span>
                      </h3>
                      <button
                        onClick={() => saveSection("whyPartner", data.whyPartner)}
                        disabled={savingSection === "whyPartner"}
                        className="px-3 py-1.5 rounded-xl bg-cyan-950 text-cyan-300 hover:bg-cyan-900 border border-cyan-800/40 text-xs font-bold transition flex items-center gap-1.5"
                      >
                        {savingSection === "whyPartner" ? <RefreshCw className="h-3 w-3 animate-spin" /> : <Save className="h-3 w-3" />}
                        <span>Save CapEx Section</span>
                      </button>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-400">Eyebrow</label>
                        <input
                          type="text"
                          value={data.whyPartner.eyebrow}
                          onChange={(e) => setData({ ...data, whyPartner: { ...data.whyPartner, eyebrow: e.target.value } })}
                          className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-1.5 text-xs text-white"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-400">Title</label>
                        <input
                          type="text"
                          value={data.whyPartner.title}
                          onChange={(e) => setData({ ...data, whyPartner: { ...data.whyPartner, title: e.target.value } })}
                          className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-1.5 text-xs text-white"
                        />
                      </div>
                      <div className="sm:col-span-2 space-y-1.5">
                        <label className="text-xs font-bold text-slate-400">Value Callout</label>
                        <textarea
                          rows={2}
                          value={data.whyPartner.valueCallout}
                          onChange={(e) => setData({ ...data, whyPartner: { ...data.whyPartner, valueCallout: e.target.value } })}
                          className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-1.5 text-xs text-white"
                        />
                      </div>
                    </div>

                    {/* Equipment list */}
                    <div className="space-y-2 pt-3 border-t border-slate-800">
                      <label className="text-xs font-bold text-slate-300">Required Equipment List</label>
                      <div className="grid gap-2 sm:grid-cols-3">
                        {data.whyPartner.equipmentList.map((eq, idx) => (
                          <input
                            key={idx}
                            type="text"
                            value={eq}
                            onChange={(e) => {
                              const updated = [...data.whyPartner.equipmentList];
                              updated[idx] = e.target.value;
                              setData({ ...data, whyPartner: { ...data.whyPartner, equipmentList: updated } });
                            }}
                            className="rounded-xl bg-slate-950 border border-slate-800 px-3 py-1.5 text-xs text-white"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Strengths */}
                  <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-cyan-400" />
                        <span>A Partnership Built Around Your Strengths</span>
                      </h3>
                      <button
                        onClick={() => saveSection("partnerStrengths", data.partnerStrengths)}
                        disabled={savingSection === "partnerStrengths"}
                        className="px-3 py-1.5 rounded-xl bg-cyan-950 text-cyan-300 hover:bg-cyan-900 border border-cyan-800/40 text-xs font-bold transition flex items-center gap-1.5"
                      >
                        {savingSection === "partnerStrengths" ? <RefreshCw className="h-3 w-3 animate-spin" /> : <Save className="h-3 w-3" />}
                        <span>Save Strengths</span>
                      </button>
                    </div>

                    <div className="space-y-3">
                      {data.partnerStrengths.strengths.map((str, idx) => (
                        <div key={idx} className="p-3 rounded-xl border border-slate-800 bg-slate-950 space-y-2">
                          <input
                            type="text"
                            value={str.title}
                            onChange={(e) => {
                              const updated = [...data.partnerStrengths.strengths];
                              updated[idx].title = e.target.value;
                              setData({ ...data, partnerStrengths: { ...data.partnerStrengths, strengths: updated } });
                            }}
                            className="w-full rounded-lg bg-slate-900 border border-slate-800 px-3 py-1 text-xs text-white font-bold"
                          />
                          <input
                            type="text"
                            value={str.desc}
                            onChange={(e) => {
                              const updated = [...data.partnerStrengths.strengths];
                              updated[idx].desc = e.target.value;
                              setData({ ...data, partnerStrengths: { ...data.partnerStrengths, strengths: updated } });
                            }}
                            className="w-full rounded-lg bg-slate-900 border border-slate-800 px-3 py-1 text-xs text-slate-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: 4 PARTNER MODELS */}
              {cmsTab === "models" && (
                <div className="space-y-6">
                  <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-6">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                        <Handshake className="h-4 w-4 text-cyan-400" />
                        <span>Four Partnership Models</span>
                      </h3>
                      <button
                        onClick={() => saveSection("models", data.models)}
                        disabled={savingSection === "models"}
                        className="px-3.5 py-2 rounded-xl bg-[#009fe3] hover:bg-[#008bc9] text-white text-xs font-bold transition flex items-center gap-1.5"
                      >
                        {savingSection === "models" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                        <span>Save All Models</span>
                      </button>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-2">
                      {/* Model 1: Reseller */}
                      <div className="p-5 rounded-2xl border border-slate-800 bg-slate-950 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-cyan-400">Model 1: Reseller</span>
                        </div>
                        <input
                          type="text"
                          value={data.models.reseller.title}
                          onChange={(e) =>
                            setData({
                              ...data,
                              models: {
                                ...data.models,
                                reseller: { ...data.models.reseller, title: e.target.value },
                              },
                            })
                          }
                          className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs text-white font-bold"
                        />
                        <input
                          type="text"
                          value={data.models.reseller.tag}
                          onChange={(e) =>
                            setData({
                              ...data,
                              models: {
                                ...data.models,
                                reseller: { ...data.models.reseller, tag: e.target.value },
                              },
                            })
                          }
                          className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs text-cyan-300"
                        />
                        <textarea
                          rows={3}
                          value={data.models.reseller.desc}
                          onChange={(e) =>
                            setData({
                              ...data,
                              models: {
                                ...data.models,
                                reseller: { ...data.models.reseller, desc: e.target.value },
                              },
                            })
                          }
                          className="w-full rounded-xl bg-slate-900 border border-slate-800 p-2.5 text-xs text-slate-300"
                        />
                      </div>

                      {/* Model 2: Referral */}
                      <div className="p-5 rounded-2xl border border-slate-800 bg-slate-950 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-cyan-400">Model 2: Referral</span>
                        </div>
                        <input
                          type="text"
                          value={data.models.referral.title}
                          onChange={(e) =>
                            setData({
                              ...data,
                              models: {
                                ...data.models,
                                referral: { ...data.models.referral, title: e.target.value },
                              },
                            })
                          }
                          className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs text-white font-bold"
                        />
                        <input
                          type="text"
                          value={data.models.referral.tag}
                          onChange={(e) =>
                            setData({
                              ...data,
                              models: {
                                ...data.models,
                                referral: { ...data.models.referral, tag: e.target.value },
                              },
                            })
                          }
                          className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs text-cyan-300"
                        />
                        <textarea
                          rows={3}
                          value={data.models.referral.desc}
                          onChange={(e) =>
                            setData({
                              ...data,
                              models: {
                                ...data.models,
                                referral: { ...data.models.referral, desc: e.target.value },
                              },
                            })
                          }
                          className="w-full rounded-xl bg-slate-900 border border-slate-800 p-2.5 text-xs text-slate-300"
                        />
                      </div>

                      {/* Model 3: School ERP */}
                      <div className="p-5 rounded-2xl border border-slate-800 bg-slate-950 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-cyan-400">Model 3: School ERP</span>
                        </div>
                        <input
                          type="text"
                          value={data.models.erp.title}
                          onChange={(e) =>
                            setData({
                              ...data,
                              models: {
                                ...data.models,
                                erp: { ...data.models.erp, title: e.target.value },
                              },
                            })
                          }
                          className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs text-white font-bold"
                        />
                        <input
                          type="text"
                          value={data.models.erp.tag}
                          onChange={(e) =>
                            setData({
                              ...data,
                              models: {
                                ...data.models,
                                erp: { ...data.models.erp, tag: e.target.value },
                              },
                            })
                          }
                          className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs text-cyan-300"
                        />
                        <textarea
                          rows={3}
                          value={data.models.erp.desc}
                          onChange={(e) =>
                            setData({
                              ...data,
                              models: {
                                ...data.models,
                                erp: { ...data.models.erp, desc: e.target.value },
                              },
                            })
                          }
                          className="w-full rounded-xl bg-slate-900 border border-slate-800 p-2.5 text-xs text-slate-300"
                        />
                      </div>

                      {/* Model 4: Technology Integration */}
                      <div className="p-5 rounded-2xl border border-slate-800 bg-slate-950 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-cyan-400">Model 4: Tech Integration</span>
                        </div>
                        <input
                          type="text"
                          value={data.models.tech.title}
                          onChange={(e) =>
                            setData({
                              ...data,
                              models: {
                                ...data.models,
                                tech: { ...data.models.tech, title: e.target.value },
                              },
                            })
                          }
                          className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs text-white font-bold"
                        />
                        <input
                          type="text"
                          value={data.models.tech.tag}
                          onChange={(e) =>
                            setData({
                              ...data,
                              models: {
                                ...data.models,
                                tech: { ...data.models.tech, tag: e.target.value },
                              },
                            })
                          }
                          className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs text-cyan-300"
                        />
                        <textarea
                          rows={3}
                          value={data.models.tech.desc}
                          onChange={(e) =>
                            setData({
                              ...data,
                              models: {
                                ...data.models,
                                tech: { ...data.models.tech, desc: e.target.value },
                              },
                            })
                          }
                          className="w-full rounded-xl bg-slate-900 border border-slate-800 p-2.5 text-xs text-slate-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: OFFERINGS & SYNERGIES */}
              {cmsTab === "offerings" && (
                <div className="space-y-6">
                  {/* Offerings */}
                  <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                        <Layers className="h-4 w-4 text-cyan-400" />
                        <span>Product Portfolio (Cards &amp; Accessories)</span>
                      </h3>
                      <button
                        onClick={() => saveSection("offerings", data.offerings)}
                        disabled={savingSection === "offerings"}
                        className="px-3 py-1.5 rounded-xl bg-cyan-950 text-cyan-300 hover:bg-cyan-900 border border-cyan-800/40 text-xs font-bold transition flex items-center gap-1.5"
                      >
                        {savingSection === "offerings" ? <RefreshCw className="h-3 w-3 animate-spin" /> : <Save className="h-3 w-3" />}
                        <span>Save Offerings</span>
                      </button>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-300">Identification Cards</label>
                        <div className="space-y-1.5">
                          {data.offerings.identificationCards.map((card, idx) => (
                            <input
                              key={idx}
                              type="text"
                              value={card}
                              onChange={(e) => {
                                const updated = [...data.offerings.identificationCards];
                                updated[idx] = e.target.value;
                                setData({ ...data, offerings: { ...data.offerings, identificationCards: updated } });
                              }}
                              className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-1 text-xs text-white"
                            />
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-300">Identification Accessories</label>
                        <div className="space-y-1.5">
                          {data.offerings.accessories.map((acc, idx) => (
                            <input
                              key={idx}
                              type="text"
                              value={acc}
                              onChange={(e) => {
                                const updated = [...data.offerings.accessories];
                                updated[idx] = e.target.value;
                                setData({ ...data, offerings: { ...data.offerings, accessories: updated } });
                              }}
                              className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-1 text-xs text-white"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Why Model Works */}
                  <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                        <BadgeCheck className="h-4 w-4 text-cyan-400" />
                        <span>Why This Model Works &amp; Target Organizations</span>
                      </h3>
                      <button
                        onClick={() => saveSection("whyModelWorks", data.whyModelWorks)}
                        disabled={savingSection === "whyModelWorks"}
                        className="px-3 py-1.5 rounded-xl bg-cyan-950 text-cyan-300 hover:bg-cyan-900 border border-cyan-800/40 text-xs font-bold transition flex items-center gap-1.5"
                      >
                        {savingSection === "whyModelWorks" ? <RefreshCw className="h-3 w-3 animate-spin" /> : <Save className="h-3 w-3" />}
                        <span>Save Section</span>
                      </button>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      {data.whyModelWorks.cards.map((card, idx) => (
                        <div key={idx} className="p-3 rounded-xl border border-slate-800 bg-slate-950 space-y-1.5">
                          <input
                            type="text"
                            value={card.title}
                            onChange={(e) => {
                              const updated = [...data.whyModelWorks.cards];
                              updated[idx].title = e.target.value;
                              setData({ ...data, whyModelWorks: { ...data.whyModelWorks, cards: updated } });
                            }}
                            className="w-full rounded-lg bg-slate-900 border border-slate-800 px-2.5 py-1 text-xs text-white font-bold"
                          />
                          <textarea
                            rows={4}
                            value={card.desc}
                            onChange={(e) => {
                              const updated = [...data.whyModelWorks.cards];
                              updated[idx].desc = e.target.value;
                              setData({ ...data, whyModelWorks: { ...data.whyModelWorks, cards: updated } });
                            }}
                            className="w-full rounded-lg bg-slate-900 border border-slate-800 p-2 text-xs text-slate-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 5: WORKFLOWS & ROLES */}
              {cmsTab === "workflows" && (
                <div className="space-y-6">
                  {/* Detailed 9 Steps */}
                  <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                        <RefreshCw className="h-4 w-4 text-cyan-400" />
                        <span>Reseller Order Workflow (9 Steps)</span>
                      </h3>
                      <button
                        onClick={() => saveSection("detailedWorkflows", data.detailedWorkflows)}
                        disabled={savingSection === "detailedWorkflows"}
                        className="px-3.5 py-2 rounded-xl bg-[#009fe3] hover:bg-[#008bc9] text-white text-xs font-bold transition flex items-center gap-1.5"
                      >
                        {savingSection === "detailedWorkflows" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                        <span>Save Workflows</span>
                      </button>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {data.detailedWorkflows.resellerSteps.map((step, idx) => (
                        <div key={idx} className="p-3 rounded-xl border border-slate-800 bg-slate-950 space-y-1.5">
                          <span className="text-xs font-mono font-bold text-cyan-400">Step {step.step}</span>
                          <input
                            type="text"
                            value={step.title}
                            onChange={(e) => {
                              const updated = [...data.detailedWorkflows.resellerSteps];
                              updated[idx].title = e.target.value;
                              setData({
                                ...data,
                                detailedWorkflows: { ...data.detailedWorkflows, resellerSteps: updated },
                              });
                            }}
                            className="w-full rounded-lg bg-slate-900 border border-slate-800 px-2.5 py-1 text-xs text-white font-bold"
                          />
                          <textarea
                            rows={2}
                            value={step.desc}
                            onChange={(e) => {
                              const updated = [...data.detailedWorkflows.resellerSteps];
                              updated[idx].desc = e.target.value;
                              setData({
                                ...data,
                                detailedWorkflows: { ...data.detailedWorkflows, resellerSteps: updated },
                              });
                            }}
                            className="w-full rounded-lg bg-slate-900 border border-slate-800 p-2 text-xs text-slate-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Division of Roles */}
                  <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                        <span>What IDGen Provides vs Expectations</span>
                      </h3>
                      <button
                        onClick={() => saveSection("divisionOfRoles", data.divisionOfRoles)}
                        disabled={savingSection === "divisionOfRoles"}
                        className="px-3 py-1.5 rounded-xl bg-cyan-950 text-cyan-300 hover:bg-cyan-900 border border-cyan-800/40 text-xs font-bold transition flex items-center gap-1.5"
                      >
                        {savingSection === "divisionOfRoles" ? <RefreshCw className="h-3 w-3 animate-spin" /> : <Save className="h-3 w-3" />}
                        <span>Save Roles</span>
                      </button>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-300">What IDGen Provides</label>
                        {data.divisionOfRoles.idgenProvides.map((p, idx) => (
                          <input
                            key={idx}
                            type="text"
                            value={p}
                            onChange={(e) => {
                              const updated = [...data.divisionOfRoles.idgenProvides];
                              updated[idx] = e.target.value;
                              setData({ ...data, divisionOfRoles: { ...data.divisionOfRoles, idgenProvides: updated } });
                            }}
                            className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-1 text-xs text-white"
                          />
                        ))}
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-300">What We Expect From Partners</label>
                        {data.divisionOfRoles.partnerExpects.map((exp, idx) => (
                          <input
                            key={idx}
                            type="text"
                            value={exp}
                            onChange={(e) => {
                              const updated = [...data.divisionOfRoles.partnerExpects];
                              updated[idx] = e.target.value;
                              setData({ ...data, divisionOfRoles: { ...data.divisionOfRoles, partnerExpects: updated } });
                            }}
                            className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-1 text-xs text-white"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 6: TERMS & APPLICATION */}
              {cmsTab === "terms" && (
                <div className="space-y-6">
                  {/* Territory & Legal Clarifications */}
                  <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                        <Tag className="h-4 w-4 text-cyan-400" />
                        <span>Territory, Franchise Clarification &amp; Commercials</span>
                      </h3>
                      <button
                        onClick={() => saveSection("termsAndTerritory", data.termsAndTerritory)}
                        disabled={savingSection === "termsAndTerritory"}
                        className="px-3.5 py-2 rounded-xl bg-[#009fe3] hover:bg-[#008bc9] text-white text-xs font-bold transition flex items-center gap-1.5"
                      >
                        {savingSection === "termsAndTerritory" ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                        <span>Save Terms</span>
                      </button>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="p-4 rounded-2xl border border-slate-800 bg-slate-950 space-y-2">
                        <label className="text-xs font-bold text-slate-300">Territory Focus</label>
                        <textarea
                          rows={4}
                          value={data.termsAndTerritory.territoryDesc}
                          onChange={(e) =>
                            setData({
                              ...data,
                              termsAndTerritory: { ...data.termsAndTerritory, territoryDesc: e.target.value },
                            })
                          }
                          className="w-full rounded-xl bg-slate-900 border border-slate-800 p-2.5 text-xs text-white"
                        />
                      </div>

                      <div className="p-4 rounded-2xl border border-amber-900/40 bg-slate-950 space-y-2">
                        <label className="text-xs font-bold text-amber-400">Franchise Clarification</label>
                        <textarea
                          rows={4}
                          value={data.termsAndTerritory.franchiseAlertDesc}
                          onChange={(e) =>
                            setData({
                              ...data,
                              termsAndTerritory: { ...data.termsAndTerritory, franchiseAlertDesc: e.target.value },
                            })
                          }
                          className="w-full rounded-xl bg-slate-900 border border-amber-900/60 p-2.5 text-xs text-amber-200"
                        />
                      </div>

                      <div className="p-4 rounded-2xl border border-slate-800 bg-slate-950 space-y-2">
                        <label className="text-xs font-bold text-slate-300">Commercial Terms</label>
                        <textarea
                          rows={4}
                          value={data.termsAndTerritory.commercialDesc}
                          onChange={(e) =>
                            setData({
                              ...data,
                              termsAndTerritory: { ...data.termsAndTerritory, commercialDesc: e.target.value },
                            })
                          }
                          className="w-full rounded-xl bg-slate-900 border border-slate-800 p-2.5 text-xs text-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Application Section Guidance */}
                  <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                        <FileSpreadsheet className="h-4 w-4 text-cyan-400" />
                        <span>Application Requirements &amp; Specimen Kit</span>
                      </h3>
                      <button
                        onClick={() => saveSection("applicationSection", data.applicationSection)}
                        disabled={savingSection === "applicationSection"}
                        className="px-3 py-1.5 rounded-xl bg-cyan-950 text-cyan-300 hover:bg-cyan-900 border border-cyan-800/40 text-xs font-bold transition flex items-center gap-1.5"
                      >
                        {savingSection === "applicationSection" ? <RefreshCw className="h-3 w-3 animate-spin" /> : <Save className="h-3 w-3" />}
                        <span>Save Application Info</span>
                      </button>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-400">Application Badge</label>
                        <input
                          type="text"
                          value={data.applicationSection.badge}
                          onChange={(e) =>
                            setData({
                              ...data,
                              applicationSection: { ...data.applicationSection, badge: e.target.value },
                            })
                          }
                          className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-1.5 text-xs text-white"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-400">Application Title</label>
                        <input
                          type="text"
                          value={data.applicationSection.title}
                          onChange={(e) =>
                            setData({
                              ...data,
                              applicationSection: { ...data.applicationSection, title: e.target.value },
                            })
                          }
                          className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-1.5 text-xs text-white"
                        />
                      </div>
                      <div className="sm:col-span-2 space-y-1.5">
                        <label className="text-xs font-bold text-slate-400">Specimen Kit Image URL</label>
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={data.applicationSection.specimenImageSrc}
                            onChange={(e) =>
                              setData({
                                ...data,
                                applicationSection: {
                                  ...data.applicationSection,
                                  specimenImageSrc: e.target.value,
                                },
                              })
                            }
                            className="flex-1 rounded-xl bg-slate-950 border border-slate-800 px-3 py-1.5 text-xs text-white"
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
                                    setData({
                                      ...data,
                                      applicationSection: {
                                        ...data.applicationSection,
                                        specimenImageSrc: url,
                                      },
                                    });
                                  },
                                  "specimenKit"
                                )
                              }
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 7: FAQS & CLOSING CTA */}
              {cmsTab === "faqs" && (
                <div className="space-y-6">
                  {/* FAQs */}
                  <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                        <HelpCircle className="h-4 w-4 text-cyan-400" />
                        <span>Partner Program FAQs ({data.faqs.items.length})</span>
                      </h3>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setData({
                              ...data,
                              faqs: {
                                ...data.faqs,
                                items: [...data.faqs.items, { q: "New Question", a: "New Answer" }],
                              },
                            });
                          }}
                          className="px-3 py-1.5 rounded-xl bg-cyan-950 text-cyan-300 hover:bg-cyan-900 border border-cyan-800/40 text-xs font-bold transition flex items-center gap-1.5"
                        >
                          <Plus className="h-3.5 w-3.5" />
                          <span>Add FAQ</span>
                        </button>
                        <button
                          onClick={() => saveSection("faqs", data.faqs)}
                          disabled={savingSection === "faqs"}
                          className="px-3 py-1.5 rounded-xl bg-[#009fe3] hover:bg-[#008bc9] text-white text-xs font-bold transition flex items-center gap-1.5"
                        >
                          {savingSection === "faqs" ? <RefreshCw className="h-3 w-3 animate-spin" /> : <Save className="h-3 w-3" />}
                          <span>Save FAQs</span>
                        </button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {data.faqs.items.map((faq, idx) => (
                        <div key={idx} className="p-3.5 rounded-xl border border-slate-800 bg-slate-950 space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold text-cyan-400">FAQ #{idx + 1}</span>
                            <button
                              type="button"
                              onClick={() => {
                                const updated = data.faqs.items.filter((_, i) => i !== idx);
                                setData({ ...data, faqs: { ...data.faqs, items: updated } });
                              }}
                              className="text-slate-500 hover:text-red-400"
                            >
                              <Trash2 className="h-4 w-4" />
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
                            className="w-full rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs text-white font-bold"
                          />
                          <textarea
                            rows={2}
                            value={faq.a}
                            onChange={(e) => {
                              const updated = [...data.faqs.items];
                              updated[idx].a = e.target.value;
                              setData({ ...data, faqs: { ...data.faqs, items: updated } });
                            }}
                            className="w-full rounded-lg bg-slate-900 border border-slate-800 p-2.5 text-xs text-slate-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Closing CTA */}
                  <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-cyan-400" />
                        <span>Closing CTA &amp; Equation</span>
                      </h3>
                      <button
                        onClick={() => saveSection("closingCta", data.closingCta)}
                        disabled={savingSection === "closingCta"}
                        className="px-3 py-1.5 rounded-xl bg-cyan-950 text-cyan-300 hover:bg-cyan-900 border border-cyan-800/40 text-xs font-bold transition flex items-center gap-1.5"
                      >
                        {savingSection === "closingCta" ? <RefreshCw className="h-3 w-3 animate-spin" /> : <Save className="h-3 w-3" />}
                        <span>Save Closing CTA</span>
                      </button>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-400">Heading</label>
                        <input
                          type="text"
                          value={data.closingCta.title}
                          onChange={(e) =>
                            setData({ ...data, closingCta: { ...data.closingCta, title: e.target.value } })
                          }
                          className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-1.5 text-xs text-white"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-400">Badge</label>
                        <input
                          type="text"
                          value={data.closingCta.badge}
                          onChange={(e) =>
                            setData({ ...data, closingCta: { ...data.closingCta, badge: e.target.value } })
                          }
                          className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-1.5 text-xs text-white"
                        />
                      </div>
                      <div className="sm:col-span-2 space-y-1.5">
                        <label className="text-xs font-bold text-slate-400">Equation Text Banner</label>
                        <textarea
                          rows={2}
                          value={data.closingCta.equationText}
                          onChange={(e) =>
                            setData({ ...data, closingCta: { ...data.closingCta, equationText: e.target.value } })
                          }
                          className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-1.5 text-xs text-cyan-300 font-bold"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          MODE 2: CRM PARTNER INQUIRIES & LEADS (PRESERVED)
          ───────────────────────────────────────────────────────────── */}
      {mainMode === "crm" && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search partners by business, name or city..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-[#009fe3]"
              />
            </div>

            <div className="text-xs text-slate-400">
              Showing <span className="text-white font-bold">{filteredPartners.length}</span> channel partner inquiries
            </div>
          </div>

          {loadingCrm ? (
            <div className="flex justify-center py-12">
              <RefreshCw className="h-6 w-6 text-teal-400 animate-spin" />
            </div>
          ) : filteredPartners.length === 0 ? (
            <div className="text-center py-12 rounded-2xl border border-slate-800 bg-slate-900/40 text-slate-500 text-xs">
              No partner inquiries found matching your query.
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-slate-800 bg-slate-950 text-slate-400 uppercase font-bold">
                    <tr>
                      <th className="px-5 py-3.5">Partner / Business</th>
                      <th className="px-5 py-3.5">Contact</th>
                      <th className="px-5 py-3.5">Location</th>
                      <th className="px-5 py-3.5">Date</th>
                      <th className="px-5 py-3.5">Status</th>
                      <th className="px-5 py-3.5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {filteredPartners.map((p) => (
                      <tr key={p.id} className="hover:bg-slate-800/40 transition">
                        <td className="px-5 py-3.5">
                          <button
                            onClick={() => setSelectedPartner(p)}
                            className="text-left font-bold text-white hover:text-cyan-400"
                          >
                            {p.name}
                          </button>
                          {p.organization && (
                            <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                              <Building className="h-3 w-3" />
                              <span>{p.organization}</span>
                            </div>
                          )}
                        </td>
                        <td className="px-5 py-3.5 space-y-0.5">
                          <div className="text-slate-300 flex items-center gap-1">
                            <Mail className="h-3 w-3 text-slate-500" />
                            <span>{p.email}</span>
                          </div>
                          {p.phone && (
                            <div className="text-slate-400 flex items-center gap-1">
                              <Phone className="h-3 w-3 text-slate-500" />
                              <span>{p.phone}</span>
                            </div>
                          )}
                        </td>
                        <td className="px-5 py-3.5 text-slate-300">
                          {p.city ? (
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3 text-teal-400" />
                              <span>{p.city}</span>
                            </span>
                          ) : (
                            <span className="text-slate-600">—</span>
                          )}
                        </td>
                        <td className="px-5 py-3.5 text-slate-400">
                          {p.createdAt ? new Date(p.createdAt).toLocaleDateString() : "—"}
                        </td>
                        <td className="px-5 py-3.5">
                          <select
                            value={p.status}
                            onChange={(e) => updateStatus(p.id, e.target.value)}
                            className="bg-slate-950 border border-slate-800 text-[11px] rounded-lg px-2 py-1 text-slate-300 font-semibold focus:border-[#009fe3] outline-hidden"
                          >
                            <option value="new">New</option>
                            <option value="in_review">In Review</option>
                            <option value="contacted">Contacted</option>
                            <option value="closed">Closed</option>
                          </select>
                        </td>
                        <td className="px-5 py-3.5 text-right">
                          <button
                            onClick={() => deletePartner(p.id)}
                            className="p-1 text-slate-500 hover:text-red-400 transition"
                            title="Delete Inquiry"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Modal for Details */}
          {selectedPartner && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4">
              <div className="w-full max-w-lg rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl space-y-4 animate-in fade-in">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <h3 className="text-base font-extrabold text-white">Partner Application Details</h3>
                  <button onClick={() => setSelectedPartner(null)} className="text-slate-400 hover:text-white">
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="text-slate-500 font-bold block">Applicant Name</label>
                    <p className="text-white text-sm font-bold">{selectedPartner.name}</p>
                  </div>
                  {selectedPartner.organization && (
                    <div>
                      <label className="text-slate-500 font-bold block">Business / Company Name</label>
                      <p className="text-white font-semibold">{selectedPartner.organization}</p>
                    </div>
                  )}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-slate-500 font-bold block">Email Address</label>
                      <p className="text-cyan-400">{selectedPartner.email}</p>
                    </div>
                    <div>
                      <label className="text-slate-500 font-bold block">Phone Number</label>
                      <p className="text-white">{selectedPartner.phone || "—"}</p>
                    </div>
                  </div>
                  <div>
                    <label className="text-slate-500 font-bold block">Operating City</label>
                    <p className="text-white">{selectedPartner.city || "—"}</p>
                  </div>
                  {selectedPartner.message && (
                    <div>
                      <label className="text-slate-500 font-bold block">Business Overview / Inquiry Message</label>
                      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 leading-relaxed whitespace-pre-wrap mt-1">
                        {selectedPartner.message}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-800 flex justify-end">
                  <button
                    onClick={() => setSelectedPartner(null)}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function AdminPartnersPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-[400px]">
          <RefreshCw className="h-8 w-8 text-[#009fe3] animate-spin" />
        </div>
      }
    >
      <AdminPartnersContent />
    </Suspense>
  );
}
