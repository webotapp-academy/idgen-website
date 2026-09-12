"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Sparkles,
  Save,
  RotateCcw,
  ExternalLink,
  Plus,
  Trash2,
  UploadCloud,
  CheckCircle2,
  AlertCircle,
  Layers,
  Building2,
  Boxes,
  Cpu,
  ShieldCheck,
  MapPin,
  HelpCircle,
  Flame,
  ArrowRight,
  Eye,
  Camera,
  Play,
  MessageCircle,
  FileText,
  Sliders,
  Check,
  ChevronRight,
  Globe,
  Package,
  Award,
  Lock,
  Workflow,
  Target,
  ClipboardCheck,
  Printer,
  Wrench,
  Truck,
  Quote,
  X,
  Edit,
  User,
  QrCode,
  GraduationCap,
  Ticket,
  Radio,
  Users,
} from "lucide-react";
import type {
  DynamicIdCardPrintingData,
  IdCardSlideItem,
  OrgApplicationConfigItem,
  WorkflowConfigStep,
  InfoCategoryGroup,
  AccessoriesConfigRow,
  InstitutionItem,
  QualityCheckpointItem,
  WhyIdgenReasonItem,
  OrderWorkflowStep,
  FaqItem,
} from "@/lib/dynamic-id-card-printing-types";

function AdminIdCardPrintingContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "hero";
  const [data, setData] = useState<DynamicIdCardPrintingData | null>(null);
  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [uploadingField, setUploadingField] = useState<string | null>(null);

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
      const res = await fetch("/api/admin/id-card-printing");
      const json = await res.json();
      if (json.success && json.data) {
        setData(json.data);
      } else {
        setSaveError("Failed to load ID Card Printing data");
      }
    } catch (e: any) {
      setSaveError(e.message || "Network error loading ID Card Printing data");
    } finally {
      setLoading(false);
    }
  };

  const handleSaveWholePage = async () => {
    if (!data) return;
    try {
      setSaving(true);
      setSaveSuccess(null);
      setSaveError(null);

      const res = await fetch("/api/admin/id-card-printing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });

      const json = await res.json();
      if (json.success) {
        setSaveSuccess("ID Card Printing page saved and published live!");
        if (json.data) setData(json.data);
      } else {
        setSaveError(json.error || "Failed to save page data");
      }
    } catch (e: any) {
      setSaveError(e.message || "Error saving page data");
    } finally {
      setSaving(false);
    }
  };

  const handleSaveSection = async (sectionKey: keyof DynamicIdCardPrintingData) => {
    if (!data) return;
    try {
      setSaving(true);
      setSaveSuccess(null);
      setSaveError(null);

      const res = await fetch("/api/admin/id-card-printing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          section: sectionKey,
          sectionData: data[sectionKey],
        }),
      });

      const json = await res.json();
      if (json.success) {
        setSaveSuccess(`Section '${sectionKey}' saved and published!`);
        if (json.data) setData(json.data);
      } else {
        setSaveError(json.error || "Failed to save section");
      }
    } catch (e: any) {
      setSaveError(e.message || "Error saving section");
    } finally {
      setSaving(false);
    }
  };

  const handleResetDefaults = async () => {
    if (!confirm("Are you sure you want to reset ID Card Printing to factory defaults? All custom changes will be overwritten.")) {
      return;
    }
    try {
      setSaving(true);
      setSaveSuccess(null);
      setSaveError(null);

      const res = await fetch("/api/admin/id-card-printing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "reset" }),
      });

      const json = await res.json();
      if (json.success && json.data) {
        setData(json.data);
        setSaveSuccess("Restored to factory default configuration!");
      } else {
        setSaveError(json.error || "Failed to reset");
      }
    } catch (e: any) {
      setSaveError(e.message || "Error resetting data");
    } finally {
      setSaving(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, callback: (url: string) => void) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploadingField("uploading");
      const form = new FormData();
      form.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: form,
      });
      const json = await res.json();

      if (json.success && json.url) {
        callback(json.url);
        setSaveSuccess("Image uploaded successfully!");
      } else {
        setSaveError(json.error || "Failed to upload image");
      }
    } catch (e: any) {
      setSaveError(e.message || "Error uploading image");
    } finally {
      setUploadingField(null);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent" />
        <p className="text-slate-400 text-sm font-medium">Loading ID Card Printing CMS...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="p-8 text-center text-rose-400">
        <AlertCircle className="h-10 w-10 mx-auto mb-3" />
        <p>Could not load ID Card Printing configuration.</p>
        <button
          onClick={fetchPageData}
          className="mt-4 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-20">
      {/* Top Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-md shadow-cyan-500/50" />
            <h1 className="text-2xl font-black text-white tracking-tight">ID Card Printing CMS</h1>
            <span className="text-[11px] font-bold uppercase tracking-wider bg-cyan-950 text-cyan-400 border border-cyan-800/60 px-2.5 py-0.5 rounded-full">
              Point-By-Point Suite
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
            Customize all 17 sections of the <strong className="text-cyan-300">/id-card-printing</strong> page in real time: hero slides, workflows, bulk batch parameters, data fields, branding, studio, accessories, and FAQs.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <Link
            href="/id-card-printing"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
          >
            <Eye className="h-3.5 w-3.5 text-cyan-400" />
            <span>Preview Page</span>
            <ExternalLink className="h-3 w-3 text-slate-400" />
          </Link>

          <button
            onClick={handleResetDefaults}
            disabled={saving}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-rose-950/40 text-slate-300 hover:text-rose-300 border border-slate-800 hover:border-rose-900/60 transition disabled:opacity-50"
            title="Reset to factory defaults"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset</span>
          </button>

          <button
            onClick={handleSaveWholePage}
            disabled={saving}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 shadow-lg shadow-cyan-500/20 transition disabled:opacity-50"
          >
            <Save className="h-4 w-4" />
            <span>{saving ? "Publishing..." : "Save & Publish"}</span>
          </button>
        </div>
      </div>

      {/* Feedback Alerts */}
      {saveSuccess && (
        <div className="rounded-2xl border border-emerald-500/40 bg-emerald-950/40 px-4 py-3 text-xs font-semibold text-emerald-300 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>{saveSuccess}</span>
          </div>
          <button onClick={() => setSaveSuccess(null)} className="text-emerald-400 hover:text-white">
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {saveError && (
        <div className="rounded-2xl border border-rose-500/40 bg-rose-950/40 px-4 py-3 text-xs font-semibold text-rose-300 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-rose-400 shrink-0" />
            <span>{saveError}</span>
          </div>
          <button onClick={() => setSaveError(null)} className="text-rose-400 hover:text-white">
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Tabs Row */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3">
        {[
          { id: "hero", label: "Hero & Slides", icon: Sparkles },
          { id: "customPvc", label: "Custom PVC & Fields", icon: Layers },
          { id: "applications", label: "Applications Carousel", icon: Building2 },
          { id: "bulk", label: "Bulk Capacity", icon: Package },
          { id: "workflow", label: "9-Step Workflow", icon: Workflow },
          { id: "cardInfo", label: "Printable Data", icon: User },
          { id: "branding", label: "Design & Artwork", icon: Sparkles },
          { id: "bulkData", label: "Data Quality & Studio", icon: Cpu },
          { id: "accessories", label: "Accessories Config", icon: Boxes },
          { id: "orgs", label: "Sectors & QC", icon: ShieldCheck },
          { id: "whyIdgen", label: "Why IDGen & Order Steps", icon: Award },
          { id: "faqs", label: "FAQs & CTAs", icon: HelpCircle },
          { id: "seo", label: "SEO Metadata", icon: Globe },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition ${
                isActive
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm"
                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-800"
              }`}
            >
              <Icon className={`h-3.5 w-3.5 ${isActive ? "text-cyan-400" : "text-slate-500"}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: HERO & SLIDES                                                      */}
      {/* ========================================================================= */}
      {activeTab === "hero" && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-base font-bold text-white">Hero Headings &amp; CTAs</h2>
                <p className="text-xs text-slate-400">Primary headline, workflow chain, and quotation buttons</p>
              </div>
              <button
                onClick={() => handleSaveSection("hero")}
                disabled={saving}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md transition"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Hero</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Eyebrow Badge</label>
                <input
                  type="text"
                  value={data.hero.eyebrow}
                  onChange={(e) => setData({ ...data, hero: { ...data.hero, eyebrow: e.target.value } })}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Title Prefix</label>
                <input
                  type="text"
                  value={data.hero.title}
                  onChange={(e) => setData({ ...data, hero: { ...data.hero, title: e.target.value } })}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Title Gradient Highlight</label>
                <input
                  type="text"
                  value={data.hero.titleHighlight}
                  onChange={(e) => setData({ ...data, hero: { ...data.hero, titleHighlight: e.target.value } })}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-cyan-300"
                />
              </div>

              <div className="sm:col-span-3 space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Description Paragraph</label>
                <textarea
                  rows={2}
                  value={data.hero.description}
                  onChange={(e) => setData({ ...data, hero: { ...data.hero, description: e.target.value } })}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-xs text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Primary CTA Text</label>
                <input
                  type="text"
                  value={data.hero.primaryCtaText}
                  onChange={(e) => setData({ ...data, hero: { ...data.hero, primaryCtaText: e.target.value } })}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Primary CTA Link</label>
                <input
                  type="text"
                  value={data.hero.primaryCtaLink}
                  onChange={(e) => setData({ ...data, hero: { ...data.hero, primaryCtaLink: e.target.value } })}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white font-mono"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Secondary CTA Text</label>
                <input
                  type="text"
                  value={data.hero.secondaryCtaText}
                  onChange={(e) => setData({ ...data, hero: { ...data.hero, secondaryCtaText: e.target.value } })}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white"
                />
              </div>
            </div>

            {/* Workflow Chain Pills */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Hero Workflow Ribbon Stages ({data.hero.workflowChain.length} steps)
              </label>
              <div className="flex flex-wrap gap-2">
                {data.hero.workflowChain.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-1 bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-1">
                    <input
                      type="text"
                      value={step}
                      onChange={(e) => {
                        const newChain = [...data.hero.workflowChain];
                        newChain[idx] = e.target.value;
                        setData({ ...data, hero: { ...data.hero, workflowChain: newChain } });
                      }}
                      className="bg-transparent text-xs font-bold text-cyan-300 w-24 focus:outline-none"
                    />
                    <button
                      onClick={() => {
                        const newChain = data.hero.workflowChain.filter((_, i) => i !== idx);
                        setData({ ...data, hero: { ...data.hero, workflowChain: newChain } });
                      }}
                      className="text-slate-500 hover:text-rose-400"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => {
                    const newChain = [...data.hero.workflowChain, "New Stage"];
                    setData({ ...data, hero: { ...data.hero, workflowChain: newChain } });
                  }}
                  className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-xl font-bold"
                >
                  + Add Stage
                </button>
              </div>
            </div>
          </div>

          {/* Hero Slides Editor */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-base font-bold text-white">Showcase Carousel Slides ({data.hero.slides.length})</h3>
                <p className="text-xs text-slate-400">Manage interactive cards in the Hero 1:1 showcase</p>
              </div>
              <button
                onClick={() => {
                  const newSlide: IdCardSlideItem = {
                    id: "slide-" + Date.now(),
                    imageSrc: "/images/Precision-Print-Quality-Idgen.png",
                    alt: "New ID Card Spec",
                    title: "New ID Card Specimen",
                    category: "Custom",
                    topBadge: "New Badge",
                    specPill: "Gloss PVC",
                    bottomSpec: "Card Specification • Direct Hub",
                    hubTag: "GUWAHATI HUB",
                  };
                  setData({ ...data, hero: { ...data.hero, slides: [...data.hero.slides, newSlide] } });
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add Slide</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.hero.slides.map((slide, idx) => (
                <div key={slide.id} className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-3">
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-800">
                    <Image src={slide.imageSrc} alt={slide.title} fill className="object-cover" />
                    <button
                      onClick={() => {
                        const newSlides = data.hero.slides.filter((_, i) => i !== idx);
                        setData({ ...data, hero: { ...data.hero, slides: newSlides } });
                      }}
                      className="absolute top-2 right-2 p-1 rounded bg-slate-950/80 text-slate-400 hover:text-rose-400 border border-white/10"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Title"
                      value={slide.title}
                      onChange={(e) => {
                        const newSlides = [...data.hero.slides];
                        newSlides[idx].title = e.target.value;
                        setData({ ...data, hero: { ...data.hero, slides: newSlides } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white font-bold"
                    />

                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Top Badge"
                        value={slide.topBadge}
                        onChange={(e) => {
                          const newSlides = [...data.hero.slides];
                          newSlides[idx].topBadge = e.target.value;
                          setData({ ...data, hero: { ...data.hero, slides: newSlides } });
                        }}
                        className="rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-xs text-cyan-300"
                      />
                      <input
                        type="text"
                        placeholder="Spec Pill"
                        value={slide.specPill}
                        onChange={(e) => {
                          const newSlides = [...data.hero.slides];
                          newSlides[idx].specPill = e.target.value;
                          setData({ ...data, hero: { ...data.hero, slides: newSlides } });
                        }}
                        className="rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-xs text-slate-200"
                      />
                    </div>

                    <input
                      type="text"
                      placeholder="Bottom Spec Line"
                      value={slide.bottomSpec}
                      onChange={(e) => {
                        const newSlides = [...data.hero.slides];
                        newSlides[idx].bottomSpec = e.target.value;
                        setData({ ...data, hero: { ...data.hero, slides: newSlides } });
                      }}
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-slate-300 font-mono"
                    />

                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={slide.imageSrc}
                        onChange={(e) => {
                          const newSlides = [...data.hero.slides];
                          newSlides[idx].imageSrc = e.target.value;
                          setData({ ...data, hero: { ...data.hero, slides: newSlides } });
                        }}
                        className="flex-1 rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-[11px] text-slate-400 font-mono"
                      />
                      <label className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer">
                        <UploadCloud className="h-3.5 w-3.5" />
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) =>
                            handleFileUpload(e, (url) => {
                              const newSlides = [...data.hero.slides];
                              newSlides[idx].imageSrc = url;
                              setData({ ...data, hero: { ...data.hero, slides: newSlides } });
                            })
                          }
                        />
                      </label>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: CUSTOM PVC & DATA FIELDS                                           */}
      {/* ========================================================================= */}
      {activeTab === "customPvc" && (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-base font-bold text-white">Custom PVC Cards &amp; 11 Data Fields</h2>
              <p className="text-xs text-slate-400">Headings, showcase image, and the personalized fields pill grid</p>
            </div>
            <button
              onClick={() => handleSaveSection("customPvcSection")}
              disabled={saving}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md transition"
            >
              <Save className="h-3.5 w-3.5" />
              <span>Save Section</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Eyebrow</label>
              <input
                type="text"
                value={data.customPvcSection.eyebrow}
                onChange={(e) =>
                  setData({
                    ...data,
                    customPvcSection: { ...data.customPvcSection, eyebrow: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Title</label>
              <input
                type="text"
                value={data.customPvcSection.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    customPvcSection: { ...data.customPvcSection, title: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Image URL</label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={data.customPvcSection.imageSrc}
                  onChange={(e) =>
                    setData({
                      ...data,
                      customPvcSection: { ...data.customPvcSection, imageSrc: e.target.value },
                    })
                  }
                  className="flex-1 rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-200 font-mono"
                />
                <label className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer">
                  <UploadCloud className="h-4 w-4" />
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) =>
                      handleFileUpload(e, (url) =>
                        setData({
                          ...data,
                          customPvcSection: { ...data.customPvcSection, imageSrc: url },
                        })
                      )
                    }
                  />
                </label>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Image Top Badge</label>
              <input
                type="text"
                value={data.customPvcSection.imageTopBadge}
                onChange={(e) =>
                  setData({
                    ...data,
                    customPvcSection: { ...data.customPvcSection, imageTopBadge: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white"
              />
            </div>
          </div>

          {/* Configurable Card Info Items Grid */}
          <div className="pt-4 border-t border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Configurable Card Data Fields ({data.customPvcSection.cardInfoItems.length})
              </label>
              <button
                onClick={() => {
                  const newItems = [...data.customPvcSection.cardInfoItems, "New Data Field"];
                  setData({
                    ...data,
                    customPvcSection: { ...data.customPvcSection, cardInfoItems: newItems },
                  });
                }}
                className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs rounded-xl font-bold"
              >
                + Add Field
              </button>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {data.customPvcSection.cardInfoItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950 p-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => {
                      const newItems = [...data.customPvcSection.cardInfoItems];
                      newItems[idx] = e.target.value;
                      setData({
                        ...data,
                        customPvcSection: { ...data.customPvcSection, cardInfoItems: newItems },
                      });
                    }}
                    className="flex-1 bg-transparent text-xs text-white focus:outline-none font-medium"
                  />
                  <button
                    onClick={() => {
                      const newItems = data.customPvcSection.cardInfoItems.filter((_, i) => i !== idx);
                      setData({
                        ...data,
                        customPvcSection: { ...data.customPvcSection, cardInfoItems: newItems },
                      });
                    }}
                    className="text-slate-600 hover:text-rose-400"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: APPLICATIONS CAROUSEL                                              */}
      {/* ========================================================================= */}
      {activeTab === "applications" && (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-base font-bold text-white">Applications Carousel Items ({data.applicationsSection.items.length})</h2>
              <p className="text-xs text-slate-400">Student, Employee, Event, RFID, and Institutional Cards</p>
            </div>
            <button
              onClick={() => handleSaveSection("applicationsSection")}
              disabled={saving}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md transition"
            >
              <Save className="h-3.5 w-3.5" />
              <span>Save Section</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Title"
              value={data.applicationsSection.title}
              onChange={(e) =>
                setData({
                  ...data,
                  applicationsSection: { ...data.applicationsSection, title: e.target.value },
                })
              }
              className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white"
            />
            <input
              type="text"
              placeholder="Title Highlight"
              value={data.applicationsSection.titleHighlight}
              onChange={(e) =>
                setData({
                  ...data,
                  applicationsSection: { ...data.applicationsSection, titleHighlight: e.target.value },
                })
              }
              className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-cyan-300"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.applicationsSection.items.map((app, idx) => (
              <div key={app.id || idx} className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-800">
                  <Image src={app.imageSrc} alt={app.title} fill className="object-cover" />
                </div>
                <input
                  type="text"
                  value={app.title}
                  onChange={(e) => {
                    const newItems = [...data.applicationsSection.items];
                    newItems[idx].title = e.target.value;
                    setData({
                      ...data,
                      applicationsSection: { ...data.applicationsSection, items: newItems },
                    });
                  }}
                  className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white font-bold"
                />
                <textarea
                  rows={2}
                  value={app.body}
                  onChange={(e) => {
                    const newItems = [...data.applicationsSection.items];
                    newItems[idx].body = e.target.value;
                    setData({
                      ...data,
                      applicationsSection: { ...data.applicationsSection, items: newItems },
                    });
                  }}
                  className="w-full rounded-lg border border-slate-800 bg-slate-900 p-2 text-xs text-slate-300"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Badge"
                    value={app.badge}
                    onChange={(e) => {
                      const newItems = [...data.applicationsSection.items];
                      newItems[idx].badge = e.target.value;
                      setData({
                        ...data,
                        applicationsSection: { ...data.applicationsSection, items: newItems },
                      });
                    }}
                    className="rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-[11px] text-cyan-300"
                  />
                  <input
                    type="text"
                    placeholder="Spec"
                    value={app.spec}
                    onChange={(e) => {
                      const newItems = [...data.applicationsSection.items];
                      newItems[idx].spec = e.target.value;
                      setData({
                        ...data,
                        applicationsSection: { ...data.applicationsSection, items: newItems },
                      });
                    }}
                    className="rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-[11px] text-slate-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: BULK CAPACITY                                                      */}
      {/* ========================================================================= */}
      {activeTab === "bulk" && (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-base font-bold text-white">Bulk Institutional Capacity</h2>
              <p className="text-xs text-slate-400">High-volume projects, consistency equation, and institutional guarantee</p>
            </div>
            <button
              onClick={() => handleSaveSection("bulkSection")}
              disabled={saving}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md transition"
            >
              <Save className="h-3.5 w-3.5" />
              <span>Save Section</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Title</label>
              <input
                type="text"
                value={data.bulkSection.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    bulkSection: { ...data.bulkSection, title: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Equation Text</label>
              <input
                type="text"
                value={data.bulkSection.factorEquation}
                onChange={(e) =>
                  setData({
                    ...data,
                    bulkSection: { ...data.bulkSection, factorEquation: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-cyan-300 font-mono"
              />
            </div>
          </div>

          {/* Bulk Project Types List */}
          <div className="pt-4 border-t border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                10 Bulk Project Types
              </label>
              <button
                onClick={() => {
                  const newTypes = [...data.bulkSection.bulkProjectTypes, "New Bulk Type"];
                  setData({
                    ...data,
                    bulkSection: { ...data.bulkSection, bulkProjectTypes: newTypes },
                  });
                }}
                className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs rounded-xl font-bold"
              >
                + Add Type
              </button>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              {data.bulkSection.bulkProjectTypes.map((type, idx) => (
                <div key={idx} className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950 p-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                  <input
                    type="text"
                    value={type}
                    onChange={(e) => {
                      const newTypes = [...data.bulkSection.bulkProjectTypes];
                      newTypes[idx] = e.target.value;
                      setData({
                        ...data,
                        bulkSection: { ...data.bulkSection, bulkProjectTypes: newTypes },
                      });
                    }}
                    className="flex-1 bg-transparent text-xs text-white focus:outline-none"
                  />
                  <button
                    onClick={() => {
                      const newTypes = data.bulkSection.bulkProjectTypes.filter((_, i) => i !== idx);
                      setData({
                        ...data,
                        bulkSection: { ...data.bulkSection, bulkProjectTypes: newTypes },
                      });
                    }}
                    className="text-slate-600 hover:text-rose-400"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 5: 9-STEP WORKFLOW                                                    */}
      {/* ========================================================================= */}
      {activeTab === "workflow" && (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-base font-bold text-white">One ID Card Printing Workflow (9 Stages)</h2>
              <p className="text-xs text-slate-400">Carousel cards showing the entire pathway from Requirement to Dispatch</p>
            </div>
            <button
              onClick={() => handleSaveSection("workflowSection")}
              disabled={saving}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md transition"
            >
              <Save className="h-3.5 w-3.5" />
              <span>Save Section</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.workflowSection.steps.map((step, idx) => (
              <div key={step.num} className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-cyan-400 font-mono">{step.num}</span>
                  <span className="text-[10px] bg-slate-900 border border-slate-800 text-slate-400 px-2 py-0.5 rounded">
                    {step.badge}
                  </span>
                </div>
                <input
                  type="text"
                  value={step.title}
                  onChange={(e) => {
                    const newSteps = [...data.workflowSection.steps];
                    newSteps[idx].title = e.target.value;
                    setData({
                      ...data,
                      workflowSection: { ...data.workflowSection, steps: newSteps },
                    });
                  }}
                  className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-white font-bold"
                />
                <textarea
                  rows={3}
                  value={step.body}
                  onChange={(e) => {
                    const newSteps = [...data.workflowSection.steps];
                    newSteps[idx].body = e.target.value;
                    setData({
                      ...data,
                      workflowSection: { ...data.workflowSection, steps: newSteps },
                    });
                  }}
                  className="w-full rounded-lg border border-slate-800 bg-slate-900 p-2 text-xs text-slate-300 leading-relaxed"
                />
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={step.img}
                    onChange={(e) => {
                      const newSteps = [...data.workflowSection.steps];
                      newSteps[idx].img = e.target.value;
                      setData({
                        ...data,
                        workflowSection: { ...data.workflowSection, steps: newSteps },
                      });
                    }}
                    className="flex-1 rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-[11px] text-slate-400 font-mono"
                  />
                  <label className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer">
                    <UploadCloud className="h-3.5 w-3.5" />
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) =>
                        handleFileUpload(e, (url) => {
                          const newSteps = [...data.workflowSection.steps];
                          newSteps[idx].img = url;
                          setData({
                            ...data,
                            workflowSection: { ...data.workflowSection, steps: newSteps },
                          });
                        })
                      }
                    />
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 6: PRINTABLE DATA FIELDS                                              */}
      {/* ========================================================================= */}
      {activeTab === "cardInfo" && (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-base font-bold text-white">What Information Can Be Printed (4 Categories)</h2>
              <p className="text-xs text-slate-400">Personal Data, Org Data, Academic Data, and Digital Tags</p>
            </div>
            <button
              onClick={() => handleSaveSection("cardInformationSection")}
              disabled={saving}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md transition"
            >
              <Save className="h-3.5 w-3.5" />
              <span>Save Section</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.cardInformationSection.categories.map((cat, catIdx) => (
              <div key={cat.id} className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-cyan-300">{cat.badge}</span>
                  <button
                    onClick={() => {
                      const newItems = [...cat.items, "New Field"];
                      const newCategories = [...data.cardInformationSection.categories];
                      newCategories[catIdx].items = newItems;
                      setData({
                        ...data,
                        cardInformationSection: {
                          ...data.cardInformationSection,
                          categories: newCategories,
                        },
                      });
                    }}
                    className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300 hover:text-white"
                  >
                    + Add
                  </button>
                </div>

                <input
                  type="text"
                  value={cat.title}
                  onChange={(e) => {
                    const newCategories = [...data.cardInformationSection.categories];
                    newCategories[catIdx].title = e.target.value;
                    setData({
                      ...data,
                      cardInformationSection: {
                        ...data.cardInformationSection,
                        categories: newCategories,
                      },
                    });
                  }}
                  className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-white font-bold"
                />

                <div className="space-y-1.5 pt-1">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-1.5">
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => {
                          const newCategories = [...data.cardInformationSection.categories];
                          newCategories[catIdx].items[itemIdx] = e.target.value;
                          setData({
                            ...data,
                            cardInformationSection: {
                              ...data.cardInformationSection,
                              categories: newCategories,
                            },
                          });
                        }}
                        className="flex-1 rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-xs text-slate-200"
                      />
                      <button
                        onClick={() => {
                          const newCategories = [...data.cardInformationSection.categories];
                          newCategories[catIdx].items = newCategories[catIdx].items.filter((_, i) => i !== itemIdx);
                          setData({
                            ...data,
                            cardInformationSection: {
                              ...data.cardInformationSection,
                              categories: newCategories,
                            },
                          });
                        }}
                        className="text-slate-600 hover:text-rose-400 p-0.5"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 7: DESIGN & BRANDING                                                  */}
      {/* ========================================================================= */}
      {activeTab === "branding" && (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-base font-bold text-white">ID Card Design &amp; Visual Branding</h2>
              <p className="text-xs text-slate-400">Artwork customization, logo placement, and brand guidelines</p>
            </div>
            <button
              onClick={() => handleSaveSection("designBrandingSection")}
              disabled={saving}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md transition"
            >
              <Save className="h-3.5 w-3.5" />
              <span>Save Section</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Title</label>
              <input
                type="text"
                value={data.designBrandingSection.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    designBrandingSection: { ...data.designBrandingSection, title: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Image URL</label>
              <input
                type="text"
                value={data.designBrandingSection.imageSrc}
                onChange={(e) =>
                  setData({
                    ...data,
                    designBrandingSection: { ...data.designBrandingSection, imageSrc: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-slate-200 font-mono"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                10 Design Elements List
              </label>
              <button
                onClick={() => {
                  const newEl = [...data.designBrandingSection.designElements, "New Design Element"];
                  setData({
                    ...data,
                    designBrandingSection: { ...data.designBrandingSection, designElements: newEl },
                  });
                }}
                className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs rounded-xl font-bold"
              >
                + Add Element
              </button>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {data.designBrandingSection.designElements.map((el, idx) => (
                <div key={idx} className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950 p-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                  <input
                    type="text"
                    value={el}
                    onChange={(e) => {
                      const newEl = [...data.designBrandingSection.designElements];
                      newEl[idx] = e.target.value;
                      setData({
                        ...data,
                        designBrandingSection: { ...data.designBrandingSection, designElements: newEl },
                      });
                    }}
                    className="flex-1 bg-transparent text-xs text-white focus:outline-none"
                  />
                  <button
                    onClick={() => {
                      const newEl = data.designBrandingSection.designElements.filter((_, i) => i !== idx);
                      setData({
                        ...data,
                        designBrandingSection: { ...data.designBrandingSection, designElements: newEl },
                      });
                    }}
                    className="text-slate-600 hover:text-rose-400"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 8: BULK DATA & IDGEN STUDIO                                           */}
      {/* ========================================================================= */}
      {activeTab === "bulkData" && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-base font-bold text-white">Scale Complexity &amp; Error Prevention</h2>
                <p className="text-xs text-slate-400">Data verification formula and master dataset integrity</p>
              </div>
              <button
                onClick={() => handleSaveSection("bulkDataSection")}
                disabled={saving}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md transition"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Section</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Formula"
                value={data.bulkDataSection.formula}
                onChange={(e) =>
                  setData({
                    ...data,
                    bulkDataSection: { ...data.bulkDataSection, formula: e.target.value },
                  })
                }
                className="rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-cyan-300 font-mono"
              />
              <input
                type="text"
                placeholder="Error Notice"
                value={data.bulkDataSection.errorNotice}
                onChange={(e) =>
                  setData({
                    ...data,
                    bulkDataSection: { ...data.bulkDataSection, errorNotice: e.target.value },
                  })
                }
                className="rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-amber-300"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-base font-bold text-white">IDGen Studio Platform Section</h2>
                <p className="text-xs text-slate-400">Digital data collection, auto photo crop, and preview portal</p>
              </div>
              <button
                onClick={() => handleSaveSection("studioSection")}
                disabled={saving}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md transition"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Section</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Title"
                value={data.studioSection.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    studioSection: { ...data.studioSection, title: e.target.value },
                  })
                }
                className="rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white"
              />
              <input
                type="text"
                placeholder="CTA Button Link"
                value={data.studioSection.ctaButtonLink}
                onChange={(e) =>
                  setData({
                    ...data,
                    studioSection: { ...data.studioSection, ctaButtonLink: e.target.value },
                  })
                }
                className="rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-cyan-300 font-mono"
              />
              <textarea
                rows={2}
                placeholder="Body Paragraph 1"
                value={data.studioSection.bodyText1}
                onChange={(e) =>
                  setData({
                    ...data,
                    studioSection: { ...data.studioSection, bodyText1: e.target.value },
                  })
                }
                className="sm:col-span-2 rounded-xl border border-slate-700 bg-slate-950 p-2.5 text-xs text-slate-200"
              />
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 9: ACCESSORIES CONFIGURATIONS                                         */}
      {/* ========================================================================= */}
      {activeTab === "accessories" && (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-base font-bold text-white">Accessories Configurations Table ({data.accessoriesSection.configRows.length} Rows)</h2>
              <p className="text-xs text-slate-400">Typical wearable setups (e.g. Card + Holder + Hook + Lanyard)</p>
            </div>
            <button
              onClick={() => handleSaveSection("accessoriesSection")}
              disabled={saving}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md transition"
            >
              <Save className="h-3.5 w-3.5" />
              <span>Save Table</span>
            </button>
          </div>

          <div className="space-y-3">
            {data.accessoriesSection.configRows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-12 gap-3 items-center rounded-xl border border-slate-800 bg-slate-950 p-3">
                <input
                  type="text"
                  placeholder="Application"
                  value={row.application}
                  onChange={(e) => {
                    const newRows = [...data.accessoriesSection.configRows];
                    newRows[idx].application = e.target.value;
                    setData({
                      ...data,
                      accessoriesSection: { ...data.accessoriesSection, configRows: newRows },
                    });
                  }}
                  className="col-span-5 rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs text-white font-bold"
                />
                <input
                  type="text"
                  placeholder="Configuration Setup"
                  value={row.configuration}
                  onChange={(e) => {
                    const newRows = [...data.accessoriesSection.configRows];
                    newRows[idx].configuration = e.target.value;
                    setData({
                      ...data,
                      accessoriesSection: { ...data.accessoriesSection, configRows: newRows },
                    });
                  }}
                  className="col-span-6 rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs text-cyan-300 font-medium"
                />
                <button
                  onClick={() => {
                    const newRows = data.accessoriesSection.configRows.filter((_, i) => i !== idx);
                    setData({
                      ...data,
                      accessoriesSection: { ...data.accessoriesSection, configRows: newRows },
                    });
                  }}
                  className="col-span-1 text-slate-600 hover:text-rose-400 p-1 flex justify-center"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}

            <button
              onClick={() => {
                const newRows = [
                  ...data.accessoriesSection.configRows,
                  { application: "New Environment", configuration: "ID Card + Holder" },
                ];
                setData({
                  ...data,
                  accessoriesSection: { ...data.accessoriesSection, configRows: newRows },
                });
              }}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs rounded-xl font-bold"
            >
              + Add Configuration Row
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 10: SECTORS & QC                                                      */}
      {/* ========================================================================= */}
      {activeTab === "orgs" && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-base font-bold text-white">Sectors We Serve ({data.organizationsSection.institutions.length})</h2>
                <p className="text-xs text-slate-400">Schools, Companies, Hospitals, Industries, Govt, NGOs</p>
              </div>
              <button
                onClick={() => handleSaveSection("organizationsSection")}
                disabled={saving}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md transition"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Sectors</span>
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {data.organizationsSection.institutions.map((inst, idx) => (
                <div key={idx} className="rounded-xl border border-slate-800 bg-slate-950 p-3 space-y-2">
                  <input
                    type="text"
                    value={inst.title}
                    onChange={(e) => {
                      const newInst = [...data.organizationsSection.institutions];
                      newInst[idx].title = e.target.value;
                      setData({
                        ...data,
                        organizationsSection: { ...data.organizationsSection, institutions: newInst },
                      });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-white font-bold"
                  />
                  <textarea
                    rows={2}
                    value={inst.body}
                    onChange={(e) => {
                      const newInst = [...data.organizationsSection.institutions];
                      newInst[idx].body = e.target.value;
                      setData({
                        ...data,
                        organizationsSection: { ...data.organizationsSection, institutions: newInst },
                      });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 p-2 text-xs text-slate-300"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-base font-bold text-white">Quality Checkpoints ({data.qualityCheckpointsSection.checkpoints.length})</h2>
                <p className="text-xs text-slate-400">Data, Photograph, Design, Identification, Print, Final Order</p>
              </div>
              <button
                onClick={() => handleSaveSection("qualityCheckpointsSection")}
                disabled={saving}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md transition"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save QC Points</span>
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {data.qualityCheckpointsSection.checkpoints.map((cp, idx) => (
                <div key={idx} className="rounded-xl border border-slate-800 bg-slate-950 p-3 space-y-2">
                  <input
                    type="text"
                    value={cp.title}
                    onChange={(e) => {
                      const newCp = [...data.qualityCheckpointsSection.checkpoints];
                      newCp[idx].title = e.target.value;
                      setData({
                        ...data,
                        qualityCheckpointsSection: { ...data.qualityCheckpointsSection, checkpoints: newCp },
                      });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-white font-bold"
                  />
                  <textarea
                    rows={2}
                    value={cp.body}
                    onChange={(e) => {
                      const newCp = [...data.qualityCheckpointsSection.checkpoints];
                      newCp[idx].body = e.target.value;
                      setData({
                        ...data,
                        qualityCheckpointsSection: { ...data.qualityCheckpointsSection, checkpoints: newCp },
                      });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 p-2 text-xs text-slate-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 11: WHY IDGEN & ORDER STEPS                                           */}
      {/* ========================================================================= */}
      {activeTab === "whyIdgen" && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-base font-bold text-white">Why Organizations Choose IDGen ({data.whyIdgenSection.reasons.length})</h2>
                <p className="text-xs text-slate-400">Value propositions and regional Guwahati manufacturing advantages</p>
              </div>
              <button
                onClick={() => handleSaveSection("whyIdgenSection")}
                disabled={saving}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md transition"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Section</span>
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {data.whyIdgenSection.reasons.map((r, idx) => (
                <div key={idx} className="rounded-xl border border-slate-800 bg-slate-950 p-3 space-y-2">
                  <input
                    type="text"
                    value={r.title}
                    onChange={(e) => {
                      const newR = [...data.whyIdgenSection.reasons];
                      newR[idx].title = e.target.value;
                      setData({
                        ...data,
                        whyIdgenSection: { ...data.whyIdgenSection, reasons: newR },
                      });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-white font-bold"
                  />
                  <textarea
                    rows={2}
                    value={r.body}
                    onChange={(e) => {
                      const newR = [...data.whyIdgenSection.reasons];
                      newR[idx].body = e.target.value;
                      setData({
                        ...data,
                        whyIdgenSection: { ...data.whyIdgenSection, reasons: newR },
                      });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 p-2 text-xs text-slate-300"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-base font-bold text-white">How to Order ID Cards (8 Steps)</h2>
                <p className="text-xs text-slate-400">Step-by-step customer journey from inquiry to dispatch</p>
              </div>
              <button
                onClick={() => handleSaveSection("orderWorkflowSection")}
                disabled={saving}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md transition"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Order Steps</span>
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {data.orderWorkflowSection.steps.map((step, idx) => (
                <div key={idx} className="rounded-xl border border-slate-800 bg-slate-950 p-3 space-y-2">
                  <input
                    type="text"
                    value={step.title}
                    onChange={(e) => {
                      const newSteps = [...data.orderWorkflowSection.steps];
                      newSteps[idx].title = e.target.value;
                      setData({
                        ...data,
                        orderWorkflowSection: { ...data.orderWorkflowSection, steps: newSteps },
                      });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-white font-bold"
                  />
                  <textarea
                    rows={2}
                    value={step.body}
                    onChange={(e) => {
                      const newSteps = [...data.orderWorkflowSection.steps];
                      newSteps[idx].body = e.target.value;
                      setData({
                        ...data,
                        orderWorkflowSection: { ...data.orderWorkflowSection, steps: newSteps },
                      });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 p-2 text-xs text-slate-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 12: FAQS & CTAS                                                       */}
      {/* ========================================================================= */}
      {activeTab === "faqs" && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-base font-bold text-white">ID Card Printing FAQs ({data.faqsSection.faqs.length})</h2>
                <p className="text-xs text-slate-400">Accordion questions and answers on /id-card-printing</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const newFaqs = [
                      ...data.faqsSection.faqs,
                      { q: "New Question?", a: "Answer here..." },
                    ];
                    setData({
                      ...data,
                      faqsSection: { ...data.faqsSection, faqs: newFaqs },
                    });
                  }}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs rounded-xl font-bold"
                >
                  + Add FAQ
                </button>
                <button
                  onClick={() => handleSaveSection("faqsSection")}
                  disabled={saving}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md transition"
                >
                  <Save className="h-3.5 w-3.5" />
                  <span>Save FAQs</span>
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {data.faqsSection.faqs.map((faq, idx) => (
                <div key={idx} className="rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <input
                      type="text"
                      value={faq.q}
                      onChange={(e) => {
                        const newFaqs = [...data.faqsSection.faqs];
                        newFaqs[idx].q = e.target.value;
                        setData({
                          ...data,
                          faqsSection: { ...data.faqsSection, faqs: newFaqs },
                        });
                      }}
                      className="flex-1 rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs text-white font-bold"
                    />
                    <button
                      onClick={() => {
                        const newFaqs = data.faqsSection.faqs.filter((_, i) => i !== idx);
                        setData({
                          ...data,
                          faqsSection: { ...data.faqsSection, faqs: newFaqs },
                        });
                      }}
                      className="text-slate-600 hover:text-rose-400 p-1"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <textarea
                    rows={2}
                    value={faq.a}
                    onChange={(e) => {
                      const newFaqs = [...data.faqsSection.faqs];
                      newFaqs[idx].a = e.target.value;
                      setData({
                        ...data,
                        faqsSection: { ...data.faqsSection, faqs: newFaqs },
                      });
                    }}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 p-2.5 text-xs text-slate-300 leading-relaxed"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CTA Band */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-base font-bold text-white">Bottom Call To Action (CTA) Band</h2>
                <p className="text-xs text-slate-400">Closing high-conversion card band</p>
              </div>
              <button
                onClick={() => handleSaveSection("ctaBand")}
                disabled={saving}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md transition"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save CTA</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Title</label>
                <input
                  type="text"
                  value={data.ctaBand.title}
                  onChange={(e) => setData({ ...data, ctaBand: { ...data.ctaBand, title: e.target.value } })}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white"
                />
              </div>
              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Body</label>
                <textarea
                  rows={2}
                  value={data.ctaBand.body}
                  onChange={(e) => setData({ ...data, ctaBand: { ...data.ctaBand, body: e.target.value } })}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 p-2.5 text-xs text-slate-200"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Primary Button Text</label>
                <input
                  type="text"
                  value={data.ctaBand.primaryButtonText}
                  onChange={(e) =>
                    setData({
                      ...data,
                      ctaBand: { ...data.ctaBand, primaryButtonText: e.target.value },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Primary Button Link</label>
                <input
                  type="text"
                  value={data.ctaBand.primaryButtonLink}
                  onChange={(e) =>
                    setData({
                      ...data,
                      ctaBand: { ...data.ctaBand, primaryButtonLink: e.target.value },
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white font-mono"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 13: SEO METADATA                                                      */}
      {/* ========================================================================= */}
      {activeTab === "seo" && (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-base font-bold text-white">SEO &amp; Social Meta Tags</h2>
              <p className="text-xs text-slate-400">Search engine title and description for /id-card-printing</p>
            </div>
            <button
              onClick={() => handleSaveSection("metadata")}
              disabled={saving}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md transition"
            >
              <Save className="h-3.5 w-3.5" />
              <span>Save Metadata</span>
            </button>
          </div>

          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Meta Title</label>
              <input
                type="text"
                value={data.metadata.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    metadata: { ...data.metadata, title: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Meta Description</label>
              <textarea
                rows={3}
                value={data.metadata.description}
                onChange={(e) =>
                  setData({
                    ...data,
                    metadata: { ...data.metadata, description: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-xs text-white"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminIdCardPrintingPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent" />
        </div>
      }
    >
      <AdminIdCardPrintingContent />
    </Suspense>
  );
}
