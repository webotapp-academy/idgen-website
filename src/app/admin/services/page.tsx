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
  ToggleLeft,
  ToggleRight,
} from "lucide-react";
import type {
  DynamicServicesData,
  ServiceItem,
  ServicesHero,
  ServicesSectionHead,
  ServicesAccessoriesTeaser,
  ServicesCtaBand,
  ServicesMetadata,
} from "@/lib/dynamic-services-types";

function AdminServicesContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "items";
  const [data, setData] = useState<DynamicServicesData | null>(null);
  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [uploadingField, setUploadingField] = useState<string | null>(null);

  // Modal / Form state for Add/Edit Service Item
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<ServiceItem | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const emptyServiceItem: ServiceItem = {
    id: "",
    title: "",
    slug: "",
    path: "",
    category: "cards",
    categoryLabel: "PVC & Smart Cards",
    shortDescription: "",
    imageSrc: "/images/Precision-Print-Quality-Idgen.png",
    imageAlt: "",
    tag: "Custom Factory",
    badge: "Direct Factory",
    showInDropdown: true,
    order: 10,
    isActive: true,
  };

  const [formData, setFormData] = useState<ServiceItem>(emptyServiceItem);

  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  useEffect(() => {
    fetchServicesData();
  }, []);

  const fetchServicesData = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/services");
      const json = await res.json();
      if (json.success && json.data) {
        setData(json.data);
      } else {
        setSaveError("Failed to load Services data");
      }
    } catch (e: any) {
      setSaveError(e.message || "Network error loading Services data");
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

      const res = await fetch("/api/admin/services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });

      const json = await res.json();
      if (json.success) {
        setSaveSuccess("Services catalog and pages saved successfully!");
        if (json.data) setData(json.data);
      } else {
        setSaveError(json.error || "Failed to save Services data");
      }
    } catch (e: any) {
      setSaveError(e.message || "Error saving Services data");
    } finally {
      setSaving(false);
    }
  };

  const handleSaveSection = async (sectionKey: keyof DynamicServicesData) => {
    if (!data) return;
    try {
      setSaving(true);
      setSaveSuccess(null);
      setSaveError(null);

      const res = await fetch("/api/admin/services", {
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
    if (!confirm("Are you sure you want to reset Services to default factory configuration? Any custom changes will be overwritten.")) {
      return;
    }
    try {
      setSaving(true);
      setSaveSuccess(null);
      setSaveError(null);

      const res = await fetch("/api/admin/services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "reset" }),
      });

      const json = await res.json();
      if (json.success && json.data) {
        setData(json.data);
        setSaveSuccess("Services restored to default catalog!");
      } else {
        setSaveError(json.error || "Failed to reset services");
      }
    } catch (e: any) {
      setSaveError(e.message || "Error resetting services");
    } finally {
      setSaving(false);
    }
  };

  // Toggle Dropdown visibility directly on an item
  const handleToggleDropdown = async (item: ServiceItem) => {
    if (!data) return;
    const newStatus = !item.showInDropdown;
    const updatedServices = data.services.map((i: ServiceItem) =>
      i.id === item.id ? { ...i, showInDropdown: newStatus } : i
    );
    setData({ ...data, services: updatedServices });

    try {
      const res = await fetch("/api/admin/services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "update",
          id: item.id,
          updates: { showInDropdown: newStatus },
        }),
      });
      const json = await res.json();
      if (json.success) {
        setSaveSuccess(`Dropdown status for "${item.title}" set to ${newStatus ? "Visible" : "Hidden"}`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Toggle Active state directly on an item
  const handleToggleActive = async (item: ServiceItem) => {
    if (!data) return;
    const newActive = !item.isActive;
    const updatedServices = data.services.map((i: ServiceItem) =>
      i.id === item.id ? { ...i, isActive: newActive } : i
    );
    setData({ ...data, services: updatedServices });

    try {
      await fetch("/api/admin/services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "update",
          id: item.id,
          updates: { isActive: newActive },
        }),
      });
    } catch (err) {
      console.error(err);
    }
  };

  // Delete an item
  const handleDeleteItem = async (item: ServiceItem) => {
    if (!confirm(`Are you sure you want to remove "${item.title}"?`)) return;
    if (!data) return;

    try {
      setSaving(true);
      const res = await fetch("/api/admin/services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "delete",
          id: item.id,
        }),
      });
      const json = await res.json();
      if (json.success && json.data) {
        setData(json.data);
        setSaveSuccess(`Service "${item.title}" removed!`);
      } else {
        setSaveError(json.error || "Failed to delete service");
      }
    } catch (e: any) {
      setSaveError(e.message || "Error deleting service");
    } finally {
      setSaving(false);
    }
  };

  // Open modal for Adding new item
  const handleOpenAddModal = () => {
    setEditingItem(null);
    setFormData({
      ...emptyServiceItem,
      id: "service-" + Date.now(),
      order: (data?.services.length || 0) + 1,
    });
    setIsModalOpen(true);
  };

  // Open modal for Editing existing item
  const handleOpenEditModal = (item: ServiceItem) => {
    setEditingItem(item);
    setFormData({ ...item });
    setIsModalOpen(true);
  };

  // Save Add/Edit item
  const handleSaveModalItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data) return;

    let finalSlug = formData.slug.trim();
    if (!finalSlug) {
      finalSlug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
    }
    let finalPath = formData.path.trim();
    if (!finalPath) {
      finalPath = `/${finalSlug}/`;
    }

    const payloadItem: ServiceItem = {
      ...formData,
      slug: finalSlug,
      path: finalPath,
    };

    try {
      setSaving(true);
      let res;
      if (editingItem) {
        res = await fetch("/api/admin/services", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "update",
            id: editingItem.id,
            updates: payloadItem,
          }),
        });
      } else {
        res = await fetch("/api/admin/services", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "add",
            serviceItem: payloadItem,
          }),
        });
      }

      const json = await res.json();
      if (json.success && json.data) {
        setData(json.data);
        setIsModalOpen(false);
        setSaveSuccess(`Service "${payloadItem.title}" saved successfully!`);
      } else {
        setSaveError(json.error || "Failed to save service");
      }
    } catch (e: any) {
      setSaveError(e.message || "Error saving service");
    } finally {
      setSaving(false);
    }
  };

  // Image Upload helper
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, targetField: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploadingField(targetField);
      const form = new FormData();
      form.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: form,
      });
      const json = await res.json();

      if (json.success && json.url) {
        if (targetField === "form-image") {
          setFormData((prev) => ({ ...prev, imageSrc: json.url }));
        } else if (targetField.startsWith("hero.")) {
          const key = targetField.split(".")[1] as keyof ServicesHero;
          if (data) {
            setData({
              ...data,
              hero: { ...data.hero, [key]: json.url },
            });
          }
        }
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
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-teal-500 border-t-transparent" />
        <p className="text-slate-400 text-sm font-medium">Loading Services Management Console...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="p-8 text-center text-rose-400">
        <AlertCircle className="h-10 w-10 mx-auto mb-3" />
        <p>Could not load Services configuration.</p>
        <button
          onClick={fetchServicesData}
          className="mt-4 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  const filteredItems = data.services.filter((item: ServiceItem) => {
    if (filterCategory === "all") return true;
    if (filterCategory === "dropdown") return item.showInDropdown;
    return item.category === filterCategory;
  });

  const dropdownCount = data.services.filter((i: ServiceItem) => i.showInDropdown && i.isActive).length;

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-20">
      {/* Top Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-2.5 w-2.5 rounded-full bg-teal-400 shadow-md shadow-teal-500/50" />
            <h1 className="text-2xl font-black text-white tracking-tight">Services &amp; Navbar Dropdown Hub</h1>
            <span className="text-[11px] font-bold uppercase tracking-wider bg-teal-950 text-teal-400 border border-teal-800/60 px-2.5 py-0.5 rounded-full">
              Live Dynamic CMS
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
            Manage all services, customize their page appearances, and choose precisely which service items appear in the website Header &quot;Services&quot; navigation dropdown.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <Link
            href="/services"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
          >
            <Eye className="h-3.5 w-3.5 text-teal-400" />
            <span>Preview /services</span>
            <ExternalLink className="h-3 w-3 text-slate-400" />
          </Link>

          <button
            onClick={handleResetDefaults}
            disabled={saving}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-rose-950/40 text-slate-300 hover:text-rose-300 border border-slate-800 hover:border-rose-900/60 transition disabled:opacity-50"
            title="Reset to factory defaults"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset</span>
          </button>

          <button
            onClick={handleSaveWholePage}
            disabled={saving}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 shadow-lg shadow-teal-500/20 transition disabled:opacity-50"
          >
            <Save className="h-4 w-4" />
            <span>{saving ? "Publishing..." : "Save & Publish"}</span>
          </button>
        </div>
      </div>

      {/* Notifications */}
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

      {/* Quick Status Stats Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-1">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Total Services</p>
          <p className="text-2xl font-black text-white">{data.services.length}</p>
        </div>
        <div className="rounded-2xl border border-teal-800/40 bg-teal-950/20 p-4 space-y-1">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold uppercase tracking-wider text-teal-300">In Header Dropdown</p>
            <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
          </div>
          <p className="text-2xl font-black text-teal-300">{dropdownCount}</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-1">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Categories</p>
          <p className="text-2xl font-black text-white">4</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-1">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Active Live</p>
          <p className="text-2xl font-black text-emerald-400">
            {data.services.filter((i: ServiceItem) => i.isActive).length}
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3">
        {[
          { id: "items", label: "Service Items & Dropdown", icon: Package },
          { id: "hero", label: "Hero & Key Stats", icon: Sparkles },
          { id: "sections", label: "Section Headers", icon: Layers },
          { id: "accessories", label: "Accessories Teaser", icon: Boxes },
          { id: "cta", label: "CTA Band", icon: ArrowRight },
          { id: "seo", label: "SEO Metadata", icon: Globe },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
                isActive
                  ? "bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-sm"
                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-800"
              }`}
            >
              <Icon className={`h-3.5 w-3.5 ${isActive ? "text-teal-400" : "text-slate-500"}`} />
              <span>{tab.label}</span>
              {tab.id === "items" && (
                <span className="ml-1 text-[10px] bg-teal-950 text-teal-300 px-1.5 py-0.5 rounded-full border border-teal-800/40 font-bold">
                  {data.services.length}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* TAB 1: SERVICE ITEMS & DROPDOWN MANAGEMENT */}
      {activeTab === "items" && (
        <div className="space-y-6">
          {/* Controls Bar */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-400 mr-1">Filter:</span>
              {[
                { id: "all", label: "All Services" },
                { id: "dropdown", label: `Dropdown Only (${dropdownCount})` },
                { id: "cards", label: "PVC Cards" },
                { id: "lanyards", label: "Lanyards" },
                { id: "specialty", label: "Specialty" },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilterCategory(f.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                    filterCategory === f.id
                      ? "bg-teal-500 text-slate-950 font-bold"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <button
              onClick={handleOpenAddModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-md shadow-teal-500/20 transition self-stretch sm:self-auto justify-center"
            >
              <Plus className="h-4 w-4" />
              <span>Add Service Item</span>
            </button>
          </div>

          {/* Service Items Grid / Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item: ServiceItem) => (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 p-5 flex flex-col justify-between space-y-4 ${
                  item.isActive
                    ? item.showInDropdown
                      ? "border-teal-500/40 bg-slate-900/90 shadow-md shadow-teal-500/5"
                      : "border-slate-800 bg-slate-900/60"
                    : "border-slate-800/40 bg-slate-950/60 opacity-60"
                }`}
              >
                <div className="space-y-3">
                  <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt || item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-2 left-2 flex items-center gap-1.5">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider bg-slate-950/80 backdrop-blur-md text-cyan-300 border border-white/10 px-2 py-0.5 rounded-md">
                        {item.categoryLabel}
                      </span>
                    </div>
                    {item.badge && (
                      <div className="absolute bottom-2 left-2">
                        <span className="text-[10px] font-bold bg-teal-500/90 text-slate-950 px-2 py-0.5 rounded-md shadow-xs">
                          {item.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm font-black text-white leading-snug">{item.title}</h3>
                      <span className="text-[10px] font-mono text-slate-500 shrink-0">#{item.order}</span>
                    </div>
                    <p className="text-[11px] font-mono text-teal-400/90 mt-0.5">{item.path}</p>
                    <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                      {item.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 space-y-3">
                  <div className="flex items-center justify-between rounded-xl bg-slate-950/60 p-2.5 border border-slate-800">
                    <div className="space-y-0.5">
                      <p className="text-xs font-bold text-white flex items-center gap-1.5">
                        Header Dropdown
                        {item.showInDropdown ? (
                          <span className="text-[9px] bg-teal-950 text-teal-300 border border-teal-800/60 px-1.5 py-0.2 rounded font-extrabold">
                            VISIBLE
                          </span>
                        ) : (
                          <span className="text-[9px] bg-slate-800 text-slate-400 px-1.5 py-0.2 rounded font-semibold">
                            HIDDEN
                          </span>
                        )}
                      </p>
                      <p className="text-[10px] text-slate-400">Shows in &quot;Services&quot; nav menu</p>
                    </div>
                    <button
                      onClick={() => handleToggleDropdown(item)}
                      className={`p-1 rounded-lg transition ${
                        item.showInDropdown ? "text-teal-400 hover:text-teal-300" : "text-slate-600 hover:text-slate-400"
                      }`}
                      title={item.showInDropdown ? "Click to remove from dropdown" : "Click to add to dropdown"}
                    >
                      {item.showInDropdown ? (
                        <ToggleRight className="h-6 w-6" />
                      ) : (
                        <ToggleLeft className="h-6 w-6" />
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={() => handleToggleActive(item)}
                      className={`text-[11px] font-semibold px-2 py-1 rounded transition ${
                        item.isActive
                          ? "text-emerald-400 hover:bg-emerald-950/30"
                          : "text-slate-500 hover:bg-slate-800"
                      }`}
                    >
                      {item.isActive ? "● Active" : "○ Disabled"}
                    </button>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleOpenEditModal(item)}
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                        title="Edit Service Item"
                      >
                        <Edit className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => handleDeleteItem(item)}
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-950 text-slate-400 hover:text-rose-400 transition"
                        title="Delete Service Item"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: HERO & KEY STATS */}
      {activeTab === "hero" && (
        <div className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-base font-bold text-white">Hero Header &amp; Metric Badges</h2>
              <p className="text-xs text-slate-400">Customize the title, lede, and highlight statistics on /services</p>
            </div>
            <button
              onClick={() => handleSaveSection("hero")}
              disabled={saving}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-md transition disabled:opacity-50"
            >
              <Save className="h-3.5 w-3.5" />
              <span>Save Hero</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Eyebrow Badge</label>
              <input
                type="text"
                value={data.hero.eyebrow}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: { ...data.hero, eyebrow: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white focus:border-teal-500 focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Main Title</label>
              <input
                type="text"
                value={data.hero.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: { ...data.hero, title: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white focus:border-teal-500 focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2 space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Lede / Description Paragraph</label>
              <textarea
                rows={3}
                value={data.hero.lede}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: { ...data.hero, lede: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-xs text-white focus:border-teal-500 focus:outline-none leading-relaxed"
              />
            </div>
          </div>

          {/* Hero Stats */}
          <div className="pt-4 border-t border-slate-800 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-teal-400">Hero Metric Badges</h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {data.hero.stats.map((stat, idx) => (
                <div key={idx} className="rounded-xl border border-slate-800 bg-slate-950/70 p-3 space-y-2">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400">Metric Value</label>
                    <input
                      type="text"
                      value={stat.value}
                      onChange={(e) => {
                        const newStats = [...data.hero.stats];
                        newStats[idx].value = e.target.value;
                        setData({ ...data, hero: { ...data.hero, stats: newStats } });
                      }}
                      className="w-full rounded-lg border border-slate-700 bg-slate-900 px-2.5 py-1.5 text-xs font-bold text-teal-300"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400">Label Text</label>
                    <input
                      type="text"
                      value={stat.label}
                      onChange={(e) => {
                        const newStats = [...data.hero.stats];
                        newStats[idx].label = e.target.value;
                        setData({ ...data, hero: { ...data.hero, stats: newStats } });
                      }}
                      className="w-full rounded-lg border border-slate-700 bg-slate-900 px-2.5 py-1.5 text-xs text-slate-200"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: SECTION HEADERS */}
      {activeTab === "sections" && (
        <div className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-base font-bold text-white">Category Section Titles &amp; Ledes</h2>
              <p className="text-xs text-slate-400">Headings for PVC Cards, Custom Lanyards, and Specialty Solutions</p>
            </div>
            <button
              onClick={() => handleSaveSection("cardSection")}
              disabled={saving}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-md transition disabled:opacity-50"
            >
              <Save className="h-3.5 w-3.5" />
              <span>Save Headers</span>
            </button>
          </div>

          <div className="space-y-6">
            {/* PVC Cards Head */}
            <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-teal-400">1. PVC &amp; Smart Cards Section</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Eyebrow"
                  value={data.cardSection.eyebrow}
                  onChange={(e) =>
                    setData({
                      ...data,
                      cardSection: { ...data.cardSection, eyebrow: e.target.value },
                    })
                  }
                  className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white"
                />
                <input
                  type="text"
                  placeholder="Title"
                  value={data.cardSection.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      cardSection: { ...data.cardSection, title: e.target.value },
                    })
                  }
                  className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white"
                />
                <textarea
                  rows={2}
                  placeholder="Lede"
                  value={data.cardSection.lede}
                  onChange={(e) =>
                    setData({
                      ...data,
                      cardSection: { ...data.cardSection, lede: e.target.value },
                    })
                  }
                  className="sm:col-span-2 rounded-lg border border-slate-700 bg-slate-900 p-2.5 text-xs text-white"
                />
              </div>
            </div>

            {/* Lanyards Head */}
            <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-teal-400">2. Lanyards &amp; Ribbons Section</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Eyebrow"
                  value={data.lanyardSection.eyebrow}
                  onChange={(e) =>
                    setData({
                      ...data,
                      lanyardSection: { ...data.lanyardSection, eyebrow: e.target.value },
                    })
                  }
                  className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white"
                />
                <input
                  type="text"
                  placeholder="Title"
                  value={data.lanyardSection.title}
                  onChange={(e) =>
                    setData({
                      ...data,
                      lanyardSection: { ...data.lanyardSection, title: e.target.value },
                    })
                  }
                  className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white"
                />
                <textarea
                  rows={2}
                  placeholder="Lede"
                  value={data.lanyardSection.lede}
                  onChange={(e) =>
                    setData({
                      ...data,
                      lanyardSection: { ...data.lanyardSection, lede: e.target.value },
                    })
                  }
                  className="sm:col-span-2 rounded-lg border border-slate-700 bg-slate-900 p-2.5 text-xs text-white"
                />
              </div>
            </div>

            {/* Specialty Head */}
            {data.specialtySection && (
              <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-teal-400">3. Specialty Cards Section</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Eyebrow"
                    value={data.specialtySection.eyebrow}
                    onChange={(e) =>
                      setData({
                        ...data,
                        specialtySection: { ...data.specialtySection!, eyebrow: e.target.value },
                      })
                    }
                    className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white"
                  />
                  <input
                    type="text"
                    placeholder="Title"
                    value={data.specialtySection.title}
                    onChange={(e) =>
                      setData({
                        ...data,
                        specialtySection: { ...data.specialtySection!, title: e.target.value },
                      })
                    }
                    className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white"
                  />
                  <textarea
                    rows={2}
                    placeholder="Lede"
                    value={data.specialtySection.lede}
                    onChange={(e) =>
                      setData({
                        ...data,
                        specialtySection: { ...data.specialtySection!, lede: e.target.value },
                      })
                    }
                    className="sm:col-span-2 rounded-lg border border-slate-700 bg-slate-900 p-2.5 text-xs text-white"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 4: ACCESSORIES TEASER */}
      {activeTab === "accessories" && (
        <div className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-base font-bold text-white">Hardware &amp; Accessories Teaser Box</h2>
              <p className="text-xs text-slate-400">Section connecting /services to holders, reels, and clips</p>
            </div>
            <button
              onClick={() => handleSaveSection("accessoriesTeaser")}
              disabled={saving}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-md transition disabled:opacity-50"
            >
              <Save className="h-3.5 w-3.5" />
              <span>Save Accessories Box</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Eyebrow</label>
              <input
                type="text"
                value={data.accessoriesTeaser.eyebrow}
                onChange={(e) =>
                  setData({
                    ...data,
                    accessoriesTeaser: { ...data.accessoriesTeaser, eyebrow: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Title</label>
              <input
                type="text"
                value={data.accessoriesTeaser.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    accessoriesTeaser: { ...data.accessoriesTeaser, title: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white"
              />
            </div>
            <div className="sm:col-span-2 space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Lede Text</label>
              <textarea
                rows={3}
                value={data.accessoriesTeaser.lede}
                onChange={(e) =>
                  setData({
                    ...data,
                    accessoriesTeaser: { ...data.accessoriesTeaser, lede: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-xs text-white"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Primary Button Label</label>
              <input
                type="text"
                value={data.accessoriesTeaser.primaryButtonText}
                onChange={(e) =>
                  setData({
                    ...data,
                    accessoriesTeaser: { ...data.accessoriesTeaser, primaryButtonText: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Primary Button Link</label>
              <input
                type="text"
                value={data.accessoriesTeaser.primaryButtonLink}
                onChange={(e) =>
                  setData({
                    ...data,
                    accessoriesTeaser: { ...data.accessoriesTeaser, primaryButtonLink: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white font-mono"
              />
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: CTA BAND */}
      {activeTab === "cta" && (
        <div className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-base font-bold text-white">Bottom Call To Action (CTA) Band</h2>
              <p className="text-xs text-slate-400">Controls the bottom high-converting CTA band on the Services hub</p>
            </div>
            <button
              onClick={() => handleSaveSection("ctaBand")}
              disabled={saving}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-md transition disabled:opacity-50"
            >
              <Save className="h-3.5 w-3.5" />
              <span>Save CTA Band</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2 space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Headline</label>
              <input
                type="text"
                value={data.ctaBand.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    ctaBand: { ...data.ctaBand, title: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white"
              />
            </div>
            <div className="sm:col-span-2 space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Body Description</label>
              <textarea
                rows={3}
                value={data.ctaBand.body}
                onChange={(e) =>
                  setData({
                    ...data,
                    ctaBand: { ...data.ctaBand, body: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-xs text-white"
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
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white"
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
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white font-mono"
              />
            </div>
          </div>
        </div>
      )}

      {/* TAB 6: SEO METADATA */}
      {activeTab === "seo" && (
        <div className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-base font-bold text-white">SEO &amp; Social Meta Tags</h2>
              <p className="text-xs text-slate-400">Search engine title and description for /services</p>
            </div>
            <button
              onClick={() => handleSaveSection("metadata")}
              disabled={saving}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-md transition disabled:opacity-50"
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
                value={data.metadata.metaTitle}
                onChange={(e) =>
                  setData({
                    ...data,
                    metadata: { ...data.metadata, metaTitle: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white focus:border-teal-500 focus:outline-none"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Meta Description</label>
              <textarea
                rows={3}
                value={data.metadata.metaDescription}
                onChange={(e) =>
                  setData({
                    ...data,
                    metadata: { ...data.metadata, metaDescription: e.target.value },
                  })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-xs text-white focus:border-teal-500 focus:outline-none"
              />
            </div>
          </div>
        </div>
      )}

      {/* MODAL: ADD / EDIT SERVICE ITEM */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 overflow-y-auto">
          <div className="relative w-full max-w-2xl rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-lg font-black text-white">
                  {editingItem ? "Edit Service Item" : "Add New Service Item"}
                </h3>
                <p className="text-xs text-slate-400">
                  {editingItem
                    ? "Update details or header dropdown visibility"
                    : "Create a new service and choose if it appears in the Services dropdown"}
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSaveModalItem} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Service Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Student ID Card Printing"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Route Path *</label>
                  <input
                    type="text"
                    placeholder="e.g. /student-id-card-printing/"
                    value={formData.path}
                    onChange={(e) => setFormData({ ...formData, path: e.target.value })}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-teal-300 font-mono"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => {
                      const cat = e.target.value as ServiceItem["category"];
                      let label = "PVC & Smart Cards";
                      if (cat === "lanyards") label = "Custom Lanyards";
                      if (cat === "specialty") label = "Specialty Solutions";
                      if (cat === "finishing") label = "Finishing & Assembly";
                      setFormData({ ...formData, category: cat, categoryLabel: label });
                    }}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white"
                  >
                    <option value="cards">PVC &amp; Smart Cards</option>
                    <option value="lanyards">Custom Lanyards &amp; Ribbons</option>
                    <option value="specialty">Specialty Solutions</option>
                    <option value="finishing">Finishing &amp; Assembly</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Category Display Badge</label>
                  <input
                    type="text"
                    value={formData.categoryLabel}
                    onChange={(e) => setFormData({ ...formData, categoryLabel: e.target.value })}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Badge Text (optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Direct Factory, Most Popular"
                    value={formData.badge}
                    onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Tag / Keyword</label>
                  <input
                    type="text"
                    placeholder="e.g. Institutional, Turnstile"
                    value={formData.tag}
                    onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Short Description *</label>
                <textarea
                  rows={2}
                  required
                  placeholder="Summary for cards and dropdown menu item description..."
                  value={formData.shortDescription}
                  onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-xs text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300">Service Image</label>
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-24 rounded-lg overflow-hidden border border-slate-800 bg-slate-950 shrink-0">
                    <Image
                      src={formData.imageSrc || "/images/Precision-Print-Quality-Idgen.png"}
                      alt={formData.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-1.5">
                    <input
                      type="text"
                      value={formData.imageSrc}
                      onChange={(e) => setFormData({ ...formData, imageSrc: e.target.value })}
                      placeholder="/images/your-image.png"
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white font-mono"
                    />
                    <label className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold cursor-pointer">
                      <UploadCloud className="h-3.5 w-3.5" />
                      <span>{uploadingField === "form-image" ? "Uploading..." : "Upload New Image"}</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e, "form-image")}
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* Show In Dropdown Switch */}
              <div className="rounded-2xl border border-teal-500/30 bg-teal-950/30 p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-teal-300 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-teal-400" />
                    <span>Show in Header Navigation Dropdown</span>
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    When checked, this service appears instantly in the Header &quot;Services&quot; menu dropdown.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={formData.showInDropdown}
                  onChange={(e) => setFormData({ ...formData, showInDropdown: e.target.checked })}
                  className="h-5 w-5 rounded border-teal-600 bg-slate-900 text-teal-500 focus:ring-teal-400 cursor-pointer"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Sort Order</label>
                  <input
                    type="number"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white"
                  />
                </div>

                <div className="flex items-center gap-3 pt-6">
                  <input
                    type="checkbox"
                    id="isActiveToggle"
                    checked={formData.isActive}
                    onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                    className="h-4 w-4 rounded border-slate-700 bg-slate-950 text-teal-500 focus:ring-teal-400 cursor-pointer"
                  />
                  <label htmlFor="isActiveToggle" className="text-xs font-bold text-slate-300 cursor-pointer">
                    Publish Service (Active on website)
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-lg shadow-teal-500/20 disabled:opacity-50"
                >
                  <Check className="h-4 w-4" />
                  <span>{editingItem ? "Update Service" : "Add Service"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminServicesPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-teal-500 border-t-transparent" />
        </div>
      }
    >
      <AdminServicesContent />
    </Suspense>
  );
}
