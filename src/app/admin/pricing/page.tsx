"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  IndianRupee,
  Boxes,
  CreditCard,
  Layers,
  Award,
  Plus,
  Search,
  CheckCircle2,
  Trash2,
  Edit3,
  ExternalLink,
  RotateCcw,
  Sparkles,
  Save,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
  SlidersHorizontal,
  X,
} from "lucide-react";
import type { PricingItemData } from "@/lib/dynamic-pricing";

const defaultCategoryTabs = [
  { id: "all", label: "All Items" },
  { id: "holders", label: "ID Card Holders (V-1, H-1, V-2)", isSpecial: true },
  { id: "cards", label: "PVC & RFID Cards" },
  { id: "lanyards", label: "Lanyards & Hardware" },
  { id: "badges", label: "Badges & Medals" },
];

export default function AdminPricingPage() {
  const [items, setItems] = useState<PricingItemData[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [toastMessage, setToastMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  // In-line price editing states: { [id]: { price: string, unit: string, isSaving: boolean } }
  const [inlineEdits, setInlineEdits] = useState<Record<string, { price: string; unit: string }>>({});
  const [savingInlineId, setSavingInlineId] = useState<string | null>(null);

  // Modal State for Add / Full Edit
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [editingItem, setEditingItem] = useState<Partial<PricingItemData>>({
    name: "",
    modelCode: "",
    category: "holders",
    categoryLabel: "ID Card Holders",
    price: "₹6",
    unit: "/ piece",
    orientation: "Vertical (Portrait)",
    badge: "",
    highlight: "",
    description: "",
    specs: [""],
    path: "/id-card-holders/",
    sortOrder: 1,
    isActive: true,
  });

  // Reset Confirmation Modal
  const [isResetConfirmOpen, setIsResetConfirmOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch Pricing Items from API
  const fetchPricing = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/pricing?all=true");
      const data = await res.json();
      if (data.success && Array.isArray(data.items)) {
        setItems(data.items);
      }
    } catch (err) {
      console.error("Failed to load pricing:", err);
      showToast("Failed to load pricing data", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPricing();
  }, []);

  const showToast = (text: string, type: "success" | "error" = "success") => {
    setToastMessage({ text, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Filter items
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesTab = activeTab === "all" || item.category === activeTab;
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesTab;

      const matchesSearch =
        item.name.toLowerCase().includes(query) ||
        item.modelCode?.toLowerCase().includes(query) ||
        item.price.toLowerCase().includes(query) ||
        item.description?.toLowerCase().includes(query) ||
        item.categoryLabel?.toLowerCase().includes(query) ||
        item.badge?.toLowerCase().includes(query);

      return matchesTab && matchesSearch;
    });
  }, [items, activeTab, searchQuery]);

  // Metric counts
  const holderCount = items.filter((i) => i.category === "holders").length;
  const cardsCount = items.filter((i) => i.category === "cards").length;
  const lanyardsCount = items.filter((i) => i.category === "lanyards").length;
  const badgesCount = items.filter((i) => i.category === "badges").length;

  // Handle In-line Price Changes
  const handleInlineChange = (id: string, field: "price" | "unit", value: string) => {
    const current = inlineEdits[id] || {
      price: items.find((i) => i.id === id)?.price || "",
      unit: items.find((i) => i.id === id)?.unit || "",
    };
    setInlineEdits((prev) => ({
      ...prev,
      [id]: {
        ...current,
        [field]: value,
      },
    }));
  };

  // Quick In-line Save
  const handleInlineSave = async (item: PricingItemData) => {
    const edit = inlineEdits[item.id];
    if (!edit || (edit.price === item.price && edit.unit === item.unit)) return;

    try {
      setSavingInlineId(item.id);
      const res = await fetch("/api/admin/pricing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          item: {
            ...item,
            price: edit.price,
            unit: edit.unit,
          },
        }),
      });
      const data = await res.json();
      if (data.success) {
        setItems(data.items);
        // Clear edit state for this item
        setInlineEdits((prev) => {
          const next = { ...prev };
          delete next[item.id];
          return next;
        });
        showToast(`Updated price for ${item.name} to ${edit.price} ${edit.unit}`);
      } else {
        showToast(data.error || "Failed to update price", "error");
      }
    } catch (err) {
      console.error(err);
      showToast("Network error updating price", "error");
    } finally {
      setSavingInlineId(null);
    }
  };

  // Toggle Item Active / Hidden
  const handleToggleActive = async (item: PricingItemData) => {
    try {
      const updatedActive = !item.isActive;
      const res = await fetch("/api/admin/pricing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          item: {
            ...item,
            isActive: updatedActive,
          },
        }),
      });
      const data = await res.json();
      if (data.success) {
        setItems(data.items);
        showToast(`${item.name} is now ${updatedActive ? "Live (Visible)" : "Hidden"}`);
      }
    } catch (err) {
      console.error(err);
      showToast("Error updating visibility", "error");
    }
  };

  // Open Add Modal
  const handleOpenAddModal = () => {
    setModalMode("add");
    setEditingItem({
      id: "",
      name: "",
      modelCode: "",
      category: "holders",
      categoryLabel: "ID Card Holders",
      price: "₹6",
      unit: "/ piece",
      orientation: "Vertical (Portrait)",
      badge: "",
      highlight: "",
      description: "",
      specs: ["100% Virgin Polymer", "CR80 Compatible (86 × 54 mm)"],
      path: "/id-card-holders/",
      sortOrder: items.length + 1,
      isActive: true,
    });
    setIsModalOpen(true);
  };

  // Open Edit Modal
  const handleOpenEditModal = (item: PricingItemData) => {
    setModalMode("edit");
    setEditingItem({
      ...item,
      specs: item.specs && item.specs.length > 0 ? [...item.specs] : [""],
    });
    setIsModalOpen(true);
  };

  // Save Modal Form
  const handleSaveModal = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem.name || !editingItem.price || !editingItem.unit) {
      showToast("Please fill in Product Name, Price, and Unit", "error");
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await fetch("/api/admin/pricing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          item: {
            ...editingItem,
            specs: editingItem.specs?.filter((s) => s.trim() !== "") || [],
          },
        }),
      });
      const data = await res.json();
      if (data.success) {
        setItems(data.items);
        setIsModalOpen(false);
        showToast(modalMode === "add" ? "New product pricing added!" : "Pricing item saved successfully!");
      } else {
        showToast(data.error || "Failed to save item", "error");
      }
    } catch (err) {
      console.error(err);
      showToast("Network error saving pricing item", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete Item
  const handleDeleteItem = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete "${name}"?`)) return;

    try {
      const res = await fetch(`/api/admin/pricing?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setItems(data.items);
        showToast(`Deleted ${name}`);
      } else {
        showToast(data.error || "Failed to delete item", "error");
      }
    } catch (err) {
      console.error(err);
      showToast("Network error deleting item", "error");
    }
  };

  // Reset to Factory Defaults
  const handleResetToDefaults = async () => {
    try {
      setIsSubmitting(true);
      const res = await fetch("/api/admin/pricing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "reset" }),
      });
      const data = await res.json();
      if (data.success) {
        setItems(data.items);
        setIsResetConfirmOpen(false);
        showToast("Reset all pricing to factory defaults (with separate V-1/H-1/V-2 rates)!");
      }
    } catch (err) {
      console.error(err);
      showToast("Error resetting pricing", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-16">
      {/* ── Toast Notification ── */}
      {toastMessage && (
        <div
          className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-2xl shadow-2xl border transition-all animate-bounce ${
            toastMessage.type === "success"
              ? "bg-emerald-950 text-emerald-200 border-emerald-700/60"
              : "bg-rose-950 text-rose-200 border-rose-700/60"
          }`}
        >
          {toastMessage.type === "success" ? (
            <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
          ) : (
            <AlertCircle className="h-5 w-5 text-rose-400 shrink-0" />
          )}
          <span className="text-xs font-bold">{toastMessage.text}</span>
        </div>
      )}

      {/* ── Top Header & Hero Banner ── */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-teal-950/60 border border-slate-800 p-6 sm:p-8">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold mb-3">
              <IndianRupee className="h-3.5 w-3.5" />
              <span>Real-Time Dynamic Pricing Engine</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Dynamic Pricing Management
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
              Manage reference rates, model codes (<strong className="text-teal-300">V-1, H-1, V-2, CV-1</strong>), orientation, feature badges, and public visibility across the entire website instantly.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleOpenAddModal}
              className="px-4 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-lg shadow-teal-500/20 transition flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="h-4 w-4" />
              <span>Add New Rate</span>
            </button>
            <button
              onClick={() => setIsResetConfirmOpen(true)}
              className="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs border border-slate-700 transition flex items-center gap-1.5 cursor-pointer"
              title="Reset to IDGen Factory Reference Rates"
            >
              <RotateCcw className="h-3.5 w-3.5 text-slate-400" />
              <span>Reset Defaults</span>
            </button>
            <Link
              href="/pricing/"
              target="_blank"
              className="px-3.5 py-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-teal-300 font-semibold text-xs border border-teal-800/40 transition flex items-center gap-1.5"
            >
              <span>Public Live Page</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Key Metrics Overview ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Total Rates */}
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Total Products</span>
            <div className="h-8 w-8 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center">
              <IndianRupee className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-3 text-2xl sm:text-3xl font-black text-white">{items.length}</p>
          <p className="mt-1 text-[11px] text-teal-400 flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3" />
            <span>{items.filter((i) => i.isActive).length} Live on Website</span>
          </p>
        </div>

        {/* ID Card Holders Highlight */}
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-teal-800/40 shadow-sm bg-gradient-to-br from-slate-900 to-teal-950/30">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-teal-300">Holder Models</span>
            <div className="h-8 w-8 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center">
              <Boxes className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-3 text-2xl sm:text-3xl font-black text-white">{holderCount} Models</p>
          <p className="mt-1 text-[11px] text-teal-300 font-mono">
            V-1 (₹6) • H-1 (₹6) • V-2 (₹7)
          </p>
        </div>

        {/* PVC & RFID Cards */}
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Cards (PVC / RFID)</span>
            <div className="h-8 w-8 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center">
              <CreditCard className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-3 text-2xl sm:text-3xl font-black text-white">{cardsCount}</p>
          <p className="mt-1 text-[11px] text-sky-400">Single, Double, Event, RFID</p>
        </div>

        {/* Lanyards & Badges */}
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Lanyards &amp; Awards</span>
            <div className="h-8 w-8 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Award className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-3 text-2xl sm:text-3xl font-black text-white">{lanyardsCount + badgesCount}</p>
          <p className="mt-1 text-[11px] text-amber-400">Lanyards, Hooks, Badges, Medals</p>
        </div>
      </div>

      {/* ── Filter Tabs & Search Controls ── */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {defaultCategoryTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const count =
              tab.id === "all"
                ? items.length
                : items.filter((i) => i.category === tab.id).length;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-teal-500 text-slate-950 shadow-md shadow-teal-500/25 scale-[1.02]"
                    : tab.isSpecial
                    ? "bg-teal-950/60 text-teal-300 border border-teal-800/60 hover:bg-teal-900/50"
                    : "bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:bg-slate-800"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] font-black ${
                    isActive ? "bg-slate-950/20 text-slate-950" : "bg-slate-800 text-slate-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Search Input */}
        <div className="relative min-w-[260px]">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search V-1, V-2, H-1, cards, prices..."
            className="w-full rounded-full border border-slate-800 bg-slate-900 pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500/30 transition shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* ── Main Pricing Data Table ── */}
      <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/90 shadow-xl">
        {loading ? (
          <div className="p-12 text-center text-slate-400">
            <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-teal-400 border-t-transparent mb-2" />
            <p className="text-xs">Loading live pricing matrix...</p>
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="p-12 text-center space-y-3">
            <p className="text-sm font-bold text-slate-400">No pricing items found matching your filters.</p>
            <button
              onClick={() => {
                setActiveTab("all");
                setSearchQuery("");
              }}
              className="px-4 py-1.5 rounded-full bg-teal-500 text-slate-950 text-xs font-bold hover:bg-teal-400 transition cursor-pointer"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/80 text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                  <th className="py-4 pl-6 pr-3">Product Name &amp; SKU</th>
                  <th className="py-4 px-3">Category</th>
                  <th className="py-4 px-3">Orientation</th>
                  <th className="py-4 px-3">Quick Edit Price</th>
                  <th className="py-4 px-3 text-center">Status</th>
                  <th className="py-4 pl-3 pr-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {filteredItems.map((item) => {
                  const currentEdit = inlineEdits[item.id] || { price: item.price, unit: item.unit };
                  const isModified = currentEdit.price !== item.price || currentEdit.unit !== item.unit;
                  const isSavingThis = savingInlineId === item.id;
                  const isHolder = item.category === "holders";
                  const isV2 = item.modelCode === "V-2" || item.modelCode === "H-2";

                  return (
                    <tr
                      key={item.id}
                      className={`hover:bg-slate-800/40 transition-colors ${
                        !item.isActive ? "opacity-60 bg-slate-950/40" : ""
                      }`}
                    >
                      {/* Product Name + Model Code */}
                      <td className="py-4 pl-6 pr-3 align-middle">
                        <div className="flex items-start gap-3">
                          <div
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border text-xs font-bold ${
                              isHolder
                                ? "bg-teal-500/10 border-teal-500/30 text-teal-300"
                                : "bg-slate-800 border-slate-700 text-slate-300"
                            }`}
                          >
                            {item.modelCode ? item.modelCode.slice(0, 3) : "ID"}
                          </div>

                          <div className="space-y-0.5">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="font-bold text-slate-100 text-xs sm:text-sm">
                                {item.name}
                              </span>
                              {item.modelCode && (
                                <span className="rounded bg-slate-800 px-1.5 py-0.2 font-mono text-[10px] font-black text-teal-300 border border-slate-700">
                                  {item.modelCode}
                                </span>
                              )}
                              {item.badge && (
                                <span
                                  className={`rounded-full px-2 py-0.2 text-[9px] font-extrabold uppercase ${
                                    isV2
                                      ? "bg-amber-950 text-amber-300 border border-amber-800"
                                      : "bg-teal-950 text-teal-300 border border-teal-800"
                                  }`}
                                >
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-slate-400 line-clamp-1 max-w-md">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Category Badge */}
                      <td className="py-4 px-3 align-middle">
                        <span className="inline-block rounded-full bg-slate-800/80 border border-slate-700 px-2.5 py-1 text-[10px] font-semibold text-slate-300 capitalize">
                          {item.categoryLabel || item.category}
                        </span>
                      </td>

                      {/* Orientation */}
                      <td className="py-4 px-3 align-middle">
                        <span className="text-xs text-slate-400 font-medium">
                          {item.orientation || "Universal"}
                        </span>
                      </td>

                      {/* In-Line Quick Edit Price & Unit */}
                      <td className="py-4 px-3 align-middle">
                        <div className="flex items-center gap-1.5">
                          <input
                            type="text"
                            value={currentEdit.price}
                            onChange={(e) => handleInlineChange(item.id, "price", e.target.value)}
                            className={`w-20 rounded-lg border px-2 py-1 font-mono text-xs font-black text-teal-300 bg-slate-950 focus:outline-none transition ${
                              isModified
                                ? "border-teal-400 ring-1 ring-teal-400/40"
                                : "border-slate-800 focus:border-teal-500"
                            }`}
                            placeholder="₹6"
                          />
                          <input
                            type="text"
                            value={currentEdit.unit}
                            onChange={(e) => handleInlineChange(item.id, "unit", e.target.value)}
                            className="w-20 rounded-lg border border-slate-800 bg-slate-950 px-2 py-1 text-[11px] text-slate-400 focus:border-teal-500 focus:outline-none transition"
                            placeholder="/ piece"
                          />

                          {isModified && (
                            <button
                              onClick={() => handleInlineSave(item)}
                              disabled={isSavingThis}
                              className="px-2.5 py-1 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-[10px] transition flex items-center gap-1 shadow cursor-pointer disabled:opacity-50"
                              title="Save new price"
                            >
                              <Save className="h-3 w-3" />
                              <span>{isSavingThis ? "..." : "Save"}</span>
                            </button>
                          )}
                        </div>
                      </td>

                      {/* Active Status */}
                      <td className="py-4 px-3 text-center align-middle">
                        <button
                          onClick={() => handleToggleActive(item)}
                          className={`inline-flex items-center gap-1 px-2.5 py-0.8 rounded-full text-[10px] font-bold transition cursor-pointer ${
                            item.isActive
                              ? "bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 hover:bg-emerald-900"
                              : "bg-slate-800 text-slate-500 border border-slate-700 hover:bg-slate-700"
                          }`}
                          title="Click to toggle visibility"
                        >
                          {item.isActive ? <Eye className="h-3 w-3" /> : <EyeOff className="h-3 w-3" />}
                          <span>{item.isActive ? "Live" : "Hidden"}</span>
                        </button>
                      </td>

                      {/* Actions */}
                      <td className="py-4 pl-3 pr-6 text-right align-middle">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => handleOpenEditModal(item)}
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-teal-300 transition cursor-pointer"
                            title="Edit full product details & specs"
                          >
                            <Edit3 className="h-3.5 w-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteItem(item.id, item.name)}
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-950 text-slate-400 hover:text-rose-400 transition cursor-pointer"
                            title="Delete this item"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ── Comprehensive Add / Edit Modal Drawer ── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6 my-8">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500/20 text-teal-300">
                  <IndianRupee className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {modalMode === "add" ? "Add New Pricing Rate" : `Edit Rate: ${editingItem.name}`}
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Changes take effect immediately on public pages upon saving.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSaveModal} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Product Name */}
                <div className="sm:col-span-2 space-y-1">
                  <label className="text-xs font-bold text-slate-300">Product / Service Name *</label>
                  <input
                    type="text"
                    required
                    value={editingItem.name || ""}
                    onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                    placeholder="e.g. Polycarbonate ID Card Holder — V-1"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2 text-xs text-white focus:border-teal-500 focus:outline-none"
                  />
                </div>

                {/* Model SKU */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Model Code / SKU</label>
                  <input
                    type="text"
                    value={editingItem.modelCode || ""}
                    onChange={(e) => setEditingItem({ ...editingItem, modelCode: e.target.value })}
                    placeholder="e.g. V-1, H-1, V-2, CR80"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2 font-mono text-xs text-teal-300 focus:border-teal-500 focus:outline-none"
                  />
                </div>

                {/* Category */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Category *</label>
                  <select
                    value={editingItem.category || "holders"}
                    onChange={(e) => {
                      const cat = e.target.value as "cards" | "holders" | "lanyards" | "badges";
                      let catLabel = "ID Card Holders";
                      if (cat === "cards") catLabel = "PVC & Smart Cards";
                      if (cat === "lanyards") catLabel = "Lanyards & Hardware";
                      if (cat === "badges") catLabel = "Badges & Medals";
                      setEditingItem({ ...editingItem, category: cat, categoryLabel: catLabel });
                    }}
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2 text-xs text-white focus:border-teal-500 focus:outline-none"
                  >
                    <option value="holders">ID Card Holders (V-1, H-1, V-2)</option>
                    <option value="cards">PVC &amp; Smart Cards</option>
                    <option value="lanyards">Lanyards &amp; Hardware</option>
                    <option value="badges">Badges &amp; Medals</option>
                  </select>
                </div>

                {/* Reference Price */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Reference Price *</label>
                  <input
                    type="text"
                    required
                    value={editingItem.price || ""}
                    onChange={(e) => setEditingItem({ ...editingItem, price: e.target.value })}
                    placeholder="e.g. ₹6"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2 font-mono text-xs font-black text-teal-300 focus:border-teal-500 focus:outline-none"
                  />
                </div>

                {/* Unit */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Unit / Billing Rate *</label>
                  <input
                    type="text"
                    required
                    value={editingItem.unit || ""}
                    onChange={(e) => setEditingItem({ ...editingItem, unit: e.target.value })}
                    placeholder="e.g. / piece, / card, / badge"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2 text-xs text-white focus:border-teal-500 focus:outline-none"
                  />
                </div>

                {/* Orientation */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Orientation / Format</label>
                  <select
                    value={editingItem.orientation || "Vertical (Portrait)"}
                    onChange={(e) =>
                      setEditingItem({
                        ...editingItem,
                        orientation: e.target.value as
                          | "Vertical (Portrait)"
                          | "Horizontal (Landscape)"
                          | "Universal",
                      })
                    }
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2 text-xs text-white focus:border-teal-500 focus:outline-none"
                  >
                    <option value="Vertical (Portrait)">Vertical (Portrait)</option>
                    <option value="Horizontal (Landscape)">Horizontal (Landscape)</option>
                    <option value="Universal">Universal / Not Applicable</option>
                  </select>
                </div>

                {/* Badge Tag */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Badge Text</label>
                  <input
                    type="text"
                    value={editingItem.badge || ""}
                    onChange={(e) => setEditingItem({ ...editingItem, badge: e.target.value })}
                    placeholder="e.g. Standard Portrait, 4-Side Lock, Most Popular"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2 text-xs text-white focus:border-teal-500 focus:outline-none"
                  />
                </div>

                {/* Target Page Path */}
                <div className="sm:col-span-2 space-y-1">
                  <label className="text-xs font-bold text-slate-300">Target Detail Link Path</label>
                  <input
                    type="text"
                    value={editingItem.path || ""}
                    onChange={(e) => setEditingItem({ ...editingItem, path: e.target.value })}
                    placeholder="e.g. /id-card-holders/, /id-card-printing/"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2 font-mono text-xs text-slate-300 focus:border-teal-500 focus:outline-none"
                  />
                </div>

                {/* Short Description */}
                <div className="sm:col-span-2 space-y-1">
                  <label className="text-xs font-bold text-slate-300">Short Description</label>
                  <textarea
                    rows={2}
                    value={editingItem.description || ""}
                    onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                    placeholder="Brief description of materials, tolerances, and use cases..."
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2 text-xs text-white focus:border-teal-500 focus:outline-none"
                  />
                </div>

                {/* Bullet Specifications */}
                <div className="sm:col-span-2 space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-300">Feature Bullet Specifications</label>
                    <button
                      type="button"
                      onClick={() =>
                        setEditingItem({
                          ...editingItem,
                          specs: [...(editingItem.specs || []), ""],
                        })
                      }
                      className="text-[11px] text-teal-400 font-bold hover:underline"
                    >
                      + Add Spec Line
                    </button>
                  </div>
                  {editingItem.specs?.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={spec}
                        onChange={(e) => {
                          const updated = [...(editingItem.specs || [])];
                          updated[idx] = e.target.value;
                          setEditingItem({ ...editingItem, specs: updated });
                        }}
                        placeholder={`Spec #${idx + 1}`}
                        className="flex-1 rounded-xl border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-white focus:border-teal-500 focus:outline-none"
                      />
                      {editingItem.specs && editingItem.specs.length > 1 && (
                        <button
                          type="button"
                          onClick={() => {
                            const updated = editingItem.specs?.filter((_, i) => i !== idx);
                            setEditingItem({ ...editingItem, specs: updated });
                          }}
                          className="p-1.5 text-slate-500 hover:text-rose-400 transition"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {/* Sort Order & Visibility */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Sort Order Position</label>
                  <input
                    type="number"
                    value={editingItem.sortOrder || 1}
                    onChange={(e) =>
                      setEditingItem({ ...editingItem, sortOrder: parseInt(e.target.value, 10) || 1 })
                    }
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2 text-xs text-white focus:border-teal-500 focus:outline-none"
                  />
                </div>

                <div className="flex items-center gap-3 pt-6">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={editingItem.isActive !== false}
                      onChange={(e) => setEditingItem({ ...editingItem, isActive: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-teal-500"></div>
                  </label>
                  <span className="text-xs font-bold text-slate-300">
                    {editingItem.isActive !== false ? "Active (Live on Website)" : "Hidden (Draft)"}
                  </span>
                </div>
              </div>

              {/* Form Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-xs shadow-lg shadow-teal-500/20 transition cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? "Saving..." : "Save Pricing Rate"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── Reset Confirmation Modal ── */}
      {isResetConfirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-7 shadow-2xl space-y-4">
            <div className="flex items-center gap-3 text-amber-400">
              <RotateCcw className="h-6 w-6" />
              <h3 className="text-base font-bold text-white">Reset Factory Pricing Catalog?</h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              This will reset all 13 pricing items to standard factory specifications, including separate <strong className="text-white">V-1 (₹6)</strong>, <strong className="text-white">H-1 (₹6)</strong>, and <strong className="text-white">V-2 (₹7)</strong> models. Any custom items added manually will be replaced.
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setIsResetConfirmOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold hover:bg-slate-700 transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleResetToDefaults}
                disabled={isSubmitting}
                className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow transition cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? "Resetting..." : "Yes, Reset All Rates"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
