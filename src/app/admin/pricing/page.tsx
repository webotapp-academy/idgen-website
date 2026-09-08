"use client";

import React, { useState, useEffect, useMemo, useRef, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
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
  Settings,
  Sliders,
  FileSpreadsheet,
  Cpu,
  ListPlus,
  Tag,
  FolderKanban,
  Check,
  ChevronRight,
  Upload,
  ImageIcon,
  Type,
  Copy,
} from "lucide-react";
import type { PricingItemData } from "@/lib/dynamic-pricing";
import type { TechnicalSpecItem, SpecDetail, TechnicalSpecsSectionConfig } from "@/lib/dynamic-specifications-types";

const defaultCategoryTabs = [
  { id: "all", label: "All Items" },
  { id: "holders", label: "ID Card Holders (V-1, H-1, V-2)", isSpecial: true },
  { id: "cards", label: "PVC & RFID Cards" },
  { id: "lanyards", label: "Lanyards & Hardware" },
  { id: "badges", label: "Badges & Medals" },
];

const presetImages = [
  { label: "PVC ID Cards", url: "/images/product-pvc-cards.jpg" },
  { label: "Satin Lanyards", url: "/images/product-satin-lanyards.jpg" },
  { label: "RFID & Smartcards", url: "/images/rfid-nfc-credentials.jpg" },
  { label: "Event Badges", url: "/images/idgen-custom-event-card-printing.jpg" },
  { label: "Polycarbonate Holders", url: "/images/product-id-holders.jpg" },
  { label: "Hooks & Clips", url: "/images/product-hooks-hardware.jpg" },
  { label: "Acrylic Badges", url: "/images/product-acrylic-badges.jpg" },
  { label: "Zinc Medals", url: "/images/product-zinc-medals.jpg" },
];

function AdminPricingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // URL query parameter determines initial section: ?section=specs or ?tab=specs
  const initialSectionParam = searchParams.get("section") || searchParams.get("tab");
  // Main view switcher: "pricing" for matrix rates, "specs" for Technical Specifications
  const [mainSection, setMainSection] = useState<"pricing" | "specs">(
    initialSectionParam === "specs" || initialSectionParam === "specifications" ? "specs" : "pricing"
  );

  // ── Pricing Engine State ──
  const [items, setItems] = useState<PricingItemData[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [toastMessage, setToastMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  // In-line price editing states: { [id]: { price: string, unit: string, isSaving: boolean } }
  const [inlineEdits, setInlineEdits] = useState<Record<string, { price: string; unit: string }>>({});
  const [savingInlineId, setSavingInlineId] = useState<string | null>(null);

  // Modal State for Add / Full Edit Pricing Item
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

  // Reset Confirmation Modal for Pricing
  const [isResetConfirmOpen, setIsResetConfirmOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ── Technical Specifications State ──
  const [specsList, setSpecsList] = useState<TechnicalSpecItem[]>([]);
  const [specsLoading, setSpecsLoading] = useState(true);
  const [specsSearchQuery, setSpecsSearchQuery] = useState("");
  const [isSpecModalOpen, setIsSpecModalOpen] = useState(false);
  const [specModalMode, setSpecModalMode] = useState<"add" | "edit">("add");
  const [isSpecResetConfirmOpen, setIsSpecResetConfirmOpen] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Section Header Config State
  const [sectionConfig, setSectionConfig] = useState<TechnicalSpecsSectionConfig>({
    eyebrow: "Technical Specifications",
    title: "Product Specifications & Engineering Details",
    lede: "Comprehensive technical specifications, dimensions, materials, durability standards, and hardware compatibility for all IDGen products.",
  });
  const [isEditingSectionHeader, setIsEditingSectionHeader] = useState(false);
  const [savingHeader, setSavingHeader] = useState(false);

  const [editingSpec, setEditingSpec] = useState<Partial<TechnicalSpecItem>>({
    id: "",
    name: "",
    category: "Identity Cards",
    description: "Direct factory manufactured & quality inspected at IDGen cleanrooms.",
    priceFormula: "auto",
    matchedPricingIds: ["pvc-single", "pvc-double"],
    imageSrc: "/images/product-pvc-cards.jpg",
    alt: "",
    imageTag: "Identity Cards",
    pageHref: "/id-card-printing/",
    buttonText: "Get Quote",
    specs: [
      { label: "Dimensions", value: "85.6 mm × 53.98 mm (CR-80 ISO 7810)" },
      { label: "Thickness", value: "30 Mil (0.76 mm) Standard Gauge" },
      { label: "Material", value: "100% Solid Virgin Polyvinyl Chloride" },
    ],
    highlights: ["Water-Proof Solid Core", "Zero Corner De-lamination"],
    sortOrder: 1,
    isActive: true,
  });

  // Synchronize mainSection when searchParams changes (e.g. sidebar navigation or browser back/forward)
  useEffect(() => {
    const sec = searchParams.get("section") || searchParams.get("tab");
    if (sec === "specs" || sec === "specifications") {
      setMainSection("specs");
    } else if (sec === "pricing" || !sec) {
      setMainSection("pricing");
    }
  }, [searchParams]);

  const handleSwitchSection = (nextSection: "pricing" | "specs") => {
    setMainSection(nextSection);
    if (nextSection === "specs") {
      router.push("/admin/pricing?section=specs", { scroll: false });
    } else {
      router.push("/admin/pricing", { scroll: false });
    }
  };

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

  // Fetch Technical Specifications from API
  const fetchSpecs = async () => {
    try {
      setSpecsLoading(true);
      const res = await fetch("/api/admin/specifications?all=true");
      const data = await res.json();
      if (data.success && Array.isArray(data.specs)) {
        setSpecsList(data.specs);
      }
      if (data.success && data.sectionConfig) {
        setSectionConfig(data.sectionConfig);
      }
    } catch (err) {
      console.error("Failed to load specifications:", err);
      showToast("Failed to load specifications data", "error");
    } finally {
      setSpecsLoading(false);
    }
  };

  useEffect(() => {
    fetchPricing();
    fetchSpecs();
  }, []);

  const showToast = (text: string, type: "success" | "error" = "success") => {
    setToastMessage({ text, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Filter pricing items
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

  // Filter technical specifications
  const filteredSpecs = useMemo(() => {
    return specsList.filter((spec) => {
      const query = specsSearchQuery.trim().toLowerCase();
      if (!query) return true;

      const matchesSearch =
        spec.name.toLowerCase().includes(query) ||
        spec.category.toLowerCase().includes(query) ||
        (spec.description && spec.description.toLowerCase().includes(query)) ||
        spec.specs.some((s) => s.label.toLowerCase().includes(query) || s.value.toLowerCase().includes(query)) ||
        spec.highlights.some((h) => h.toLowerCase().includes(query));

      return matchesSearch;
    });
  }, [specsList, specsSearchQuery]);

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

  // Toggle Spec Active / Hidden
  const handleToggleSpecActive = async (spec: TechnicalSpecItem) => {
    try {
      const updatedActive = !spec.isActive;
      const res = await fetch("/api/admin/specifications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          item: {
            ...spec,
            isActive: updatedActive,
          },
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSpecsList(data.specs);
        showToast(`${spec.name} is now ${updatedActive ? "Live (Visible)" : "Hidden"}`);
      }
    } catch (err) {
      console.error(err);
      showToast("Error updating specification visibility", "error");
    }
  };

  // Save Section Header Configuration
  const handleSaveSectionConfig = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSavingHeader(true);
      const res = await fetch("/api/admin/specifications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sectionConfig }),
      });
      const data = await res.json();
      if (data.success) {
        setSectionConfig(data.sectionConfig);
        setIsEditingSectionHeader(false);
        showToast("Technical Specifications section header updated successfully!");
      } else {
        showToast(data.error || "Failed to update header", "error");
      }
    } catch (err) {
      console.error(err);
      showToast("Network error updating header", "error");
    } finally {
      setSavingHeader(false);
    }
  };

  // Image Upload Handler
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploadingImage(true);
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success && data.url) {
        setEditingSpec((prev) => ({
          ...prev,
          imageSrc: data.url,
        }));
        showToast("Image uploaded successfully!");
      } else {
        showToast(data.error || "Image upload failed", "error");
      }
    } catch (err) {
      console.error(err);
      showToast("Network error uploading image", "error");
    } finally {
      setUploadingImage(false);
    }
  };

  // Open Add Modal for Pricing Item
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

  // Open Edit Modal for Pricing Item
  const handleOpenEditModal = (item: PricingItemData) => {
    setModalMode("edit");
    setEditingItem({
      ...item,
      specs: item.specs && item.specs.length > 0 ? [...item.specs] : [""],
    });
    setIsModalOpen(true);
  };

  // Save Modal Form for Pricing Item
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

  // Delete Pricing Item
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

  // Reset Pricing to Factory Defaults
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
        showToast("Reset all pricing to factory defaults!");
      }
    } catch (err) {
      console.error(err);
      showToast("Error resetting pricing", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Technical Specs Handlers ──

  const handleOpenAddSpecModal = () => {
    setSpecModalMode("add");
    setEditingSpec({
      id: "",
      name: "",
      category: "Identity Cards",
      description: "Direct factory manufactured & quality inspected at IDGen cleanrooms.",
      priceFormula: "auto",
      matchedPricingIds: ["pvc-single"],
      imageSrc: "/images/product-pvc-cards.jpg",
      alt: "",
      imageTag: "Identity Cards",
      pageHref: "/id-card-printing/",
      buttonText: "Get Quote",
      specs: [
        { label: "Dimensions", value: "85.6 mm × 53.98 mm (CR-80 ISO 7810)" },
        { label: "Thickness", value: "30 Mil (0.76 mm) Standard Gauge" },
        { label: "Material", value: "100% Solid Virgin Polyvinyl Chloride" },
        { label: "Finish", value: "High-Gloss Mirror / Satin Matte UV Shield" },
      ],
      highlights: ["Water-Proof Solid Core", "Edge-to-Edge Print"],
      sortOrder: specsList.length + 1,
      isActive: true,
    });
    setIsSpecModalOpen(true);
  };

  const handleOpenEditSpecModal = (spec: TechnicalSpecItem) => {
    setSpecModalMode("edit");
    setEditingSpec({
      ...spec,
      description: spec.description || "Direct factory manufactured & quality inspected at IDGen cleanrooms.",
      imageTag: spec.imageTag || spec.category,
      buttonText: spec.buttonText || "Get Quote",
      specs: spec.specs && spec.specs.length > 0 ? [...spec.specs] : [{ label: "", value: "" }],
      highlights: spec.highlights && spec.highlights.length > 0 ? [...spec.highlights] : [""],
      matchedPricingIds: spec.matchedPricingIds ? [...spec.matchedPricingIds] : [],
    });
    setIsSpecModalOpen(true);
  };

  const handleSaveSpecModal = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSpec.name || !editingSpec.category) {
      showToast("Please fill in Product Name and Category", "error");
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await fetch("/api/admin/specifications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          item: {
            ...editingSpec,
            imageTag: editingSpec.imageTag || editingSpec.category,
            description: editingSpec.description || "Direct factory manufactured & quality inspected at IDGen cleanrooms.",
            buttonText: editingSpec.buttonText || "Get Quote",
            specs: editingSpec.specs?.filter((s) => s.label.trim() !== "" && s.value.trim() !== "") || [],
            highlights: editingSpec.highlights?.filter((h) => h.trim() !== "") || [],
          },
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSpecsList(data.specs);
        setIsSpecModalOpen(false);
        showToast(specModalMode === "add" ? "New Technical Specification added!" : "Technical Specification saved successfully!");
      } else {
        showToast(data.error || "Failed to save specification", "error");
      }
    } catch (err) {
      console.error(err);
      showToast("Network error saving specification", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteSpec = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete technical specifications for "${name}"?`)) return;

    try {
      const res = await fetch(`/api/admin/specifications?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setSpecsList(data.specs);
        showToast(`Deleted specification: ${name}`);
      } else {
        showToast(data.error || "Failed to delete specification", "error");
      }
    } catch (err) {
      console.error(err);
      showToast("Network error deleting specification", "error");
    }
  };

  const handleResetSpecsToDefaults = async () => {
    try {
      setIsSubmitting(true);
      const res = await fetch("/api/admin/specifications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "reset" }),
      });
      const data = await res.json();
      if (data.success) {
        setSpecsList(data.specs);
        if (data.sectionConfig) setSectionConfig(data.sectionConfig);
        setIsSpecResetConfirmOpen(false);
        showToast("Reset all technical specifications & images to factory engineering catalog!");
      }
    } catch (err) {
      console.error(err);
      showToast("Error resetting specifications", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper to compute live preview price for a spec
  const getComputedSpecPrice = (spec: Partial<TechnicalSpecItem>): string => {
    if (spec.priceFormula && spec.priceFormula !== "auto") {
      return spec.priceFormula;
    }
    if (!items || items.length === 0 || !spec.matchedPricingIds || spec.matchedPricingIds.length === 0) {
      return "Auto Synced";
    }
    const matched = items.filter((i) => spec.matchedPricingIds?.includes(i.id));
    if (matched.length === 0) return "Auto Synced";
    if (matched.length === 1) return `${matched[0].price} ${matched[0].unit}`;
    const prices = matched.map((i) => i.price);
    const units = matched.map((i) => i.unit);
    const unique = Array.from(new Set(prices));
    if (unique.length === 1) return `${unique[0]} ${units[0] || ""}`.trim();
    return `${prices[0]} – ${prices[prices.length - 1]} ${units[0] || ""}`.trim();
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
              <span>Real-Time Dynamic Pricing &amp; Technical Specs Engine</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Dynamic Pricing &amp; Specifications Management
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
              Manage reference rates, model codes (<strong className="text-teal-300">V-1, H-1, V-2, CV-1</strong>), and customize all <strong className="text-cyan-300">Technical Specifications, Images &amp; Engineering Details</strong> live across the website.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {mainSection === "pricing" ? (
              <>
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
              </>
            ) : (
              <>
                <button
                  onClick={handleOpenAddSpecModal}
                  className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Spec Product</span>
                </button>
                <button
                  onClick={() => setIsSpecResetConfirmOpen(true)}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs border border-slate-700 transition flex items-center gap-1.5 cursor-pointer"
                  title="Reset to Factory Engineering Specs"
                >
                  <RotateCcw className="h-3.5 w-3.5 text-slate-400" />
                  <span>Reset Specs</span>
                </button>
              </>
            )}

            <Link
              href="/pricing/#product-specifications"
              target="_blank"
              className="px-3.5 py-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-teal-300 font-semibold text-xs border border-teal-800/40 transition flex items-center gap-1.5"
            >
              <span>Public Live Page</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Primary Mode Switcher Tabs (Pricing Rates vs Technical Specs) ── */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-2 rounded-2xl bg-slate-900 border border-slate-800 shadow-sm">
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleSwitchSection("pricing")}
            className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
              mainSection === "pricing"
                ? "bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20 font-black"
                : "text-slate-400 hover:text-white hover:bg-slate-800/60"
            }`}
          >
            <IndianRupee className="h-4 w-4" />
            <span>Reference Rates Catalog ({items.length})</span>
          </button>

          <button
            onClick={() => handleSwitchSection("specs")}
            className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
              mainSection === "specs"
                ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 font-black"
                : "text-slate-400 hover:text-white hover:bg-slate-800/60"
            }`}
          >
            <Cpu className="h-4 w-4" />
            <span>Technical Specifications Section ({specsList.length})</span>
            <span className="text-[10px] uppercase font-extrabold px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/60">
              All Details &amp; Images Dynamic
            </span>
          </button>
        </div>

        <div className="text-xs text-slate-400 px-3 hidden md:block">
          {mainSection === "pricing" ? (
            <span>Editing live product rate matrix &amp; cards</span>
          ) : (
            <span>Editing section headers, images, specs tables &amp; highlights</span>
          )}
        </div>
      </div>

      {/* ── Key Metrics Overview ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Total Rates */}
        <div
          onClick={() => handleSwitchSection("pricing")}
          className={`p-5 rounded-2xl border shadow-sm cursor-pointer transition ${
            mainSection === "pricing"
              ? "bg-slate-900 border-teal-500/60 ring-1 ring-teal-500/40"
              : "bg-slate-900/80 border-slate-800 hover:border-slate-700"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Total Rates</span>
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

        {/* Technical Specifications Stat */}
        <div
          onClick={() => handleSwitchSection("specs")}
          className={`p-5 rounded-2xl border shadow-sm cursor-pointer transition ${
            mainSection === "specs"
              ? "bg-slate-900 border-cyan-500/60 ring-1 ring-cyan-500/40"
              : "bg-slate-900/80 border-slate-800 hover:border-slate-700"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-cyan-300">Technical Specs</span>
            <div className="h-8 w-8 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center">
              <Cpu className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-3 text-2xl sm:text-3xl font-black text-white">{specsList.length} Products</p>
          <p className="mt-1 text-[11px] text-cyan-300 font-mono">
            {specsList.filter((s) => s.isActive !== false).length} Live Cards with Images
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
            <span className="text-xs font-semibold text-slate-400">Holders &amp; Hardware</span>
            <div className="h-8 w-8 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Boxes className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-3 text-2xl sm:text-3xl font-black text-white">{holderCount} Holders</p>
          <p className="mt-1 text-[11px] text-amber-400">V-1 (₹6), H-1 (₹6), V-2 (₹7)</p>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          MODE 1: PRICING MATRIX & REFERENCE RATES CATALOG
      ══════════════════════════════════════════════════════════════════════ */}
      {mainSection === "pricing" && (
        <div className="space-y-6">
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
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
                      isActive
                        ? "bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20"
                        : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        isActive
                          ? "bg-slate-950/30 text-slate-950 font-black"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search input */}
            <div className="relative w-full lg:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search V-1, V-2, H-1, cards, price..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* ── Table of Products ── */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-950/60 text-slate-400 font-bold uppercase tracking-wider text-[11px]">
                    <th className="py-3.5 px-4">Product Name &amp; SKU</th>
                    <th className="py-3.5 px-4">Category</th>
                    <th className="py-3.5 px-4">Orientation</th>
                    <th className="py-3.5 px-4">Quick Edit Price</th>
                    <th className="py-3.5 px-4 text-center">Status</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {loading ? (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-slate-400">
                        <div className="inline-flex items-center gap-2">
                          <div className="h-4 w-4 border-2 border-teal-400 border-t-transparent rounded-full animate-spin" />
                          <span>Loading pricing rates...</span>
                        </div>
                      </td>
                    </tr>
                  ) : filteredItems.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-slate-500">
                        No pricing items found matching query.
                      </td>
                    </tr>
                  ) : (
                    filteredItems.map((item) => {
                      const editState = inlineEdits[item.id] || {
                        price: item.price,
                        unit: item.unit,
                      };
                      const hasChanged =
                        editState.price !== item.price || editState.unit !== item.unit;
                      const isSaving = savingInlineId === item.id;

                      return (
                        <tr
                          key={item.id}
                          className="hover:bg-slate-800/30 transition group"
                        >
                          {/* Name & SKU */}
                          <td className="py-4 px-4">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-white text-sm">
                                  {item.name}
                                </span>
                                {item.modelCode && (
                                  <span className="font-mono text-[10px] font-black px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800/40">
                                    {item.modelCode}
                                  </span>
                                )}
                                {item.badge && (
                                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800/40">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-slate-400 line-clamp-1 max-w-md">
                                {item.description}
                              </p>
                            </div>
                          </td>

                          {/* Category */}
                          <td className="py-4 px-4 whitespace-nowrap">
                            <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-[11px] font-medium">
                              {item.categoryLabel}
                            </span>
                          </td>

                          {/* Orientation */}
                          <td className="py-4 px-4 whitespace-nowrap">
                            <span className="text-slate-400 text-xs">
                              {item.orientation || "Universal"}
                            </span>
                          </td>

                          {/* Quick Edit Price */}
                          <td className="py-4 px-4 whitespace-nowrap">
                            <div className="flex items-center gap-2">
                              <div className="flex items-center rounded-xl bg-slate-950 border border-slate-800 px-2.5 py-1 focus-within:border-teal-500">
                                <input
                                  type="text"
                                  value={editState.price}
                                  onChange={(e) =>
                                    handleInlineChange(item.id, "price", e.target.value)
                                  }
                                  className="w-16 font-mono font-bold text-teal-300 bg-transparent text-xs focus:outline-none"
                                />
                                <input
                                  type="text"
                                  value={editState.unit}
                                  onChange={(e) =>
                                    handleInlineChange(item.id, "unit", e.target.value)
                                  }
                                  className="w-16 text-slate-400 bg-transparent text-[11px] focus:outline-none"
                                />
                              </div>

                              {hasChanged && (
                                <button
                                  onClick={() => handleInlineSave(item)}
                                  disabled={isSaving}
                                  className="p-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold shadow transition disabled:opacity-50 cursor-pointer"
                                  title="Save Price"
                                >
                                  {isSaving ? (
                                    <div className="h-3.5 w-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                                  ) : (
                                    <Save className="h-3.5 w-3.5" />
                                  )}
                                </button>
                              )}
                            </div>
                          </td>

                          {/* Status / Visibility */}
                          <td className="py-4 px-4 text-center whitespace-nowrap">
                            <button
                              onClick={() => handleToggleActive(item)}
                              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold transition cursor-pointer ${
                                item.isActive
                                  ? "bg-emerald-950 text-emerald-300 border border-emerald-800/40 hover:bg-emerald-900/60"
                                  : "bg-slate-800 text-slate-400 border border-slate-700 hover:bg-slate-700"
                              }`}
                              title="Click to toggle visibility on live website"
                            >
                              {item.isActive ? (
                                <>
                                  <Eye className="h-3 w-3 text-emerald-400" />
                                  <span>Live</span>
                                </>
                              ) : (
                                <>
                                  <EyeOff className="h-3 w-3 text-slate-500" />
                                  <span>Hidden</span>
                                </>
                              )}
                            </button>
                          </td>

                          {/* Actions */}
                          <td className="py-4 px-4 text-right whitespace-nowrap">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => handleOpenEditModal(item)}
                                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
                                title="Full Edit (Specs, SKU, Badges)"
                              >
                                <Edit3 className="h-3.5 w-3.5" />
                              </button>
                              <button
                                onClick={() => handleDeleteItem(item.id, item.name)}
                                className="p-2 rounded-lg bg-slate-800/60 hover:bg-rose-950/60 text-slate-400 hover:text-rose-400 transition cursor-pointer"
                                title="Delete Item"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════════
          MODE 2: TECHNICAL SPECIFICATIONS & ENGINEERING DETAILS (ALL DETAILS & IMAGES DYNAMIC)
      ══════════════════════════════════════════════════════════════════════ */}
      {mainSection === "specs" && (
        <div className="space-y-6">
          {/* Section Headings Editor Card */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-cyan-800/40 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                  <Type className="h-3.5 w-3.5" />
                  <span>Section Header Customizer</span>
                </div>
                <h2 className="text-lg font-extrabold text-white">
                  Technical Specifications Section Header
                </h2>
                <p className="text-xs text-slate-400">
                  Live on public pricing page: Eyebrow, Main Heading, and Introduction paragraph.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsEditingSectionHeader(!isEditingSectionHeader)}
                className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-bold border border-slate-700 transition flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
              >
                <Edit3 className="h-3.5 w-3.5" />
                <span>{isEditingSectionHeader ? "Hide Header Form" : "Edit Section Headings"}</span>
              </button>
            </div>

            {isEditingSectionHeader ? (
              <form onSubmit={handleSaveSectionConfig} className="space-y-4 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-300">Eyebrow (Small Tag)</label>
                    <input
                      type="text"
                      value={sectionConfig.eyebrow}
                      onChange={(e) => setSectionConfig({ ...sectionConfig, eyebrow: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-cyan-300 font-bold focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-300">Main Title (H2)</label>
                    <input
                      type="text"
                      value={sectionConfig.title}
                      onChange={(e) => setSectionConfig({ ...sectionConfig, title: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white font-bold focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-xs font-bold text-slate-300">Description / Lede Paragraph</label>
                    <textarea
                      rows={2}
                      value={sectionConfig.lede}
                      onChange={(e) => setSectionConfig({ ...sectionConfig, lede: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsEditingSectionHeader(false)}
                    className="px-4 py-1.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={savingHeader}
                    className="px-5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow disabled:opacity-50"
                  >
                    {savingHeader ? "Saving..." : "Save Section Headings"}
                  </button>
                </div>
              </form>
            ) : (
              <div className="rounded-2xl bg-slate-950/60 p-4 border border-slate-800/80 space-y-1">
                <span className="text-[11px] font-bold tracking-wider text-cyan-400 uppercase">
                  {sectionConfig.eyebrow}
                </span>
                <h3 className="text-base font-extrabold text-white">{sectionConfig.title}</h3>
                <p className="text-xs text-slate-400">{sectionConfig.lede}</p>
              </div>
            )}
          </div>

          {/* Section Toolbar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-white">All Specification Cards ({specsList.length})</span>
              <span className="text-[10px] text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded-full border border-cyan-800/40 font-semibold">
                Images, Tables &amp; Highlights fully dynamic
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter specifications..."
                  value={specsSearchQuery}
                  onChange={(e) => setSpecsSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <button
                onClick={handleOpenAddSpecModal}
                className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition flex items-center gap-1.5 shrink-0 cursor-pointer"
              >
                <Plus className="h-4 w-4" />
                <span>Add Product</span>
              </button>
            </div>
          </div>

          {/* Grid of Technical Spec Cards */}
          {specsLoading ? (
            <div className="p-12 text-center text-slate-400 bg-slate-900 rounded-2xl border border-slate-800">
              <div className="inline-flex items-center gap-2">
                <div className="h-4 w-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                <span>Loading technical specifications...</span>
              </div>
            </div>
          ) : filteredSpecs.length === 0 ? (
            <div className="p-12 text-center text-slate-500 bg-slate-900 rounded-2xl border border-slate-800">
              No technical specification products found matching query.
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {filteredSpecs.map((spec) => {
                const computedPrice = getComputedSpecPrice(spec);

                return (
                  <div
                    key={spec.id}
                    className={`rounded-3xl border transition-all duration-300 bg-slate-900/90 p-6 flex flex-col justify-between space-y-5 shadow-xl ${
                      spec.isActive
                        ? "border-slate-800 hover:border-cyan-500/60"
                        : "border-slate-800/50 opacity-60 bg-slate-950/60"
                    }`}
                  >
                    <div className="space-y-4">
                      {/* Card Header: Thumbnail + Title + Price */}
                      <div className="flex gap-4 items-start">
                        <div className="relative h-28 w-28 shrink-0 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-inner group">
                          <Image
                            src={spec.imageSrc || "/images/product-pvc-cards.jpg"}
                            alt={spec.alt || spec.name}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                            sizes="120px"
                          />
                          <span className="absolute bottom-1 left-1 rounded bg-slate-950/90 px-1.5 py-0.5 text-[9px] font-black text-cyan-300 border border-white/10">
                            {spec.imageTag || spec.category}
                          </span>
                        </div>

                        <div className="space-y-1.5 flex-1 min-w-0">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="rounded-full bg-cyan-950/60 border border-cyan-800/40 px-2.5 py-0.5 text-[10px] font-bold text-cyan-300">
                              {spec.category}
                            </span>
                            <span className="font-mono text-xs font-black text-cyan-300 bg-slate-800 px-2.5 py-0.5 rounded-lg border border-slate-700">
                              {computedPrice}
                            </span>
                          </div>

                          <h3 className="text-base font-extrabold text-white leading-tight">
                            {spec.name}
                          </h3>

                          <p className="text-xs text-slate-400 line-clamp-2">
                            {spec.description || "Direct factory manufactured & quality inspected at IDGen cleanrooms."}
                          </p>
                        </div>
                      </div>

                      {/* Specs Table Preview */}
                      <div className="rounded-xl border border-slate-800 bg-slate-950/60 overflow-hidden">
                        <table className="w-full text-left text-[11px]">
                          <tbody className="divide-y divide-slate-800/60">
                            {spec.specs.map((s, idx) => (
                              <tr key={idx} className="hover:bg-white/[0.02]">
                                <td className="px-3 py-1.5 font-bold text-slate-400 w-1/3">
                                  {s.label}
                                </td>
                                <td className="px-3 py-1.5 font-medium text-slate-200">
                                  {s.value}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {/* Highlights */}
                      {spec.highlights && spec.highlights.length > 0 && (
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                            Key Highlights:
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {spec.highlights.map((h, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center gap-1 rounded px-2 py-0.5 text-[10px] font-semibold bg-slate-800 border border-slate-700 text-slate-300"
                              >
                                <CheckCircle2 className="h-2.5 w-2.5 text-cyan-400" />
                                <span>{h}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Card Actions Footer */}
                    <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                      <button
                        onClick={() => handleToggleSpecActive(spec)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-bold transition cursor-pointer ${
                          spec.isActive
                            ? "bg-emerald-950 text-emerald-300 border border-emerald-800/40"
                            : "bg-slate-800 text-slate-400 border border-slate-700"
                        }`}
                      >
                        {spec.isActive ? (
                          <>
                            <Eye className="h-3.5 w-3.5 text-emerald-400" />
                            <span>Live on Website</span>
                          </>
                        ) : (
                          <>
                            <EyeOff className="h-3.5 w-3.5 text-slate-500" />
                            <span>Hidden</span>
                          </>
                        )}
                      </button>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleOpenEditSpecModal(spec)}
                          className="px-3.5 py-1.5 rounded-xl bg-cyan-950/70 border border-cyan-800/60 hover:bg-cyan-900/80 text-cyan-300 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow"
                        >
                          <Edit3 className="h-3.5 w-3.5" />
                          <span>Edit Details &amp; Image</span>
                        </button>
                        <button
                          onClick={() => handleDeleteSpec(spec.id, spec.name)}
                          className="p-2 rounded-xl bg-slate-800 hover:bg-rose-950 text-slate-400 hover:text-rose-400 transition cursor-pointer"
                          title="Delete Spec Product"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════════
          MODAL: ADD / FULL EDIT PRICING ITEM (RATE, SKU, SPECS, CATEGORY)
      ══════════════════════════════════════════════════════════════════════ */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-3xl rounded-3xl bg-slate-900 border border-teal-800/60 p-6 sm:p-8 shadow-2xl space-y-6 my-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
                  <IndianRupee className="h-5 w-5 text-teal-400" />
                  <span>
                    {modalMode === "add"
                      ? "Add New Product Pricing Rate"
                      : `Edit Pricing: ${editingItem.name}`}
                  </span>
                </h3>
                <p className="text-xs text-slate-400">
                  Update reference rates, model codes, orientation, badge tags, and technical feature bullets
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSaveModal} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Product Name */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">
                    Product Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Polycarbonate ID Card Holder — V-1"
                    value={editingItem.name || ""}
                    onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 font-medium"
                  />
                </div>

                {/* Model Code / SKU */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">
                    Model Code / SKU Badge
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. V-1, H-1, V-2, CR80-S"
                    value={editingItem.modelCode || ""}
                    onChange={(e) => setEditingItem({ ...editingItem, modelCode: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 font-medium"
                  />
                </div>

                {/* Category */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">
                    Category <span className="text-rose-400">*</span>
                  </label>
                  <select
                    value={editingItem.category || "holders"}
                    onChange={(e) => {
                      const cat = e.target.value as "cards" | "holders" | "lanyards" | "badges";
                      let catLabel = editingItem.categoryLabel;
                      let defPath = editingItem.path;
                      if (cat === "holders") {
                        catLabel = "ID Card Holders";
                        defPath = defPath || "/id-card-holders/";
                      } else if (cat === "cards") {
                        catLabel = "PVC & Smart Cards";
                        defPath = defPath || "/id-card-printing/";
                      } else if (cat === "lanyards") {
                        catLabel = "Lanyards & Hardware";
                        defPath = defPath || "/custom-printed-lanyard-printing/";
                      } else if (cat === "badges") {
                        catLabel = "Badges & Medals";
                        defPath = defPath || "/acrylic-badges/";
                      }
                      setEditingItem({
                        ...editingItem,
                        category: cat,
                        categoryLabel: catLabel,
                        path: defPath,
                      });
                    }}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-teal-500 font-medium"
                  >
                    <option value="holders">ID Card Holders (V-1, H-1, V-2, CV-1)</option>
                    <option value="cards">PVC &amp; Smart Cards</option>
                    <option value="lanyards">Lanyards &amp; Hardware</option>
                    <option value="badges">Badges &amp; Medals</option>
                  </select>
                </div>

                {/* Category Custom Label */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">
                    Category Display Label
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ID Card Holders"
                    value={editingItem.categoryLabel || ""}
                    onChange={(e) => setEditingItem({ ...editingItem, categoryLabel: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
                  />
                </div>

                {/* Orientation */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">
                    Orientation
                  </label>
                  <select
                    value={editingItem.orientation || "Universal"}
                    onChange={(e) =>
                      setEditingItem({
                        ...editingItem,
                        orientation: e.target.value as "Vertical (Portrait)" | "Horizontal (Landscape)" | "Universal",
                      })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-teal-500 font-medium"
                  >
                    <option value="Universal">Universal</option>
                    <option value="Vertical (Portrait)">Vertical (Portrait)</option>
                    <option value="Horizontal (Landscape)">Horizontal (Landscape)</option>
                  </select>
                </div>

                {/* Reference Price */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">
                    Reference Price <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. ₹6, ₹15, ₹25"
                    value={editingItem.price || ""}
                    onChange={(e) => setEditingItem({ ...editingItem, price: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-teal-300 font-bold focus:outline-none focus:border-teal-500"
                  />
                </div>

                {/* Price Unit */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">
                    Unit / Suffix <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. / piece, / card, / badge, / medal"
                    value={editingItem.unit || ""}
                    onChange={(e) => setEditingItem({ ...editingItem, unit: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-teal-500 font-medium"
                  />
                </div>

                {/* Highlight Tag */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">
                    Highlight Feature Tag
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Portrait Drop-In, Ultrasonic Welded"
                    value={editingItem.highlight || ""}
                    onChange={(e) => setEditingItem({ ...editingItem, highlight: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
                  />
                </div>

                {/* Badge Tag */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">
                    Badge Tag (Pill)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Standard Portrait, Most Popular, Best Value"
                    value={editingItem.badge || ""}
                    onChange={(e) => setEditingItem({ ...editingItem, badge: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
                  />
                </div>

                {/* Product Path URL */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">
                    Destination Page Path
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. /id-card-holders/ or /pricing/"
                    value={editingItem.path || ""}
                    onChange={(e) => setEditingItem({ ...editingItem, path: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 font-mono"
                  />
                </div>

                {/* Sort Order */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">
                    Sort Order
                  </label>
                  <input
                    type="number"
                    value={editingItem.sortOrder ?? 1}
                    onChange={(e) => setEditingItem({ ...editingItem, sortOrder: parseInt(e.target.value) || 1 })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-teal-500"
                  />
                </div>

                {/* Description */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">
                    Product Description
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Brief description of product features and dimensions..."
                    value={editingItem.description || ""}
                    onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 resize-none"
                  />
                </div>

                {/* Specs / Feature Bullets List */}
                <div className="sm:col-span-2 space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-300">
                      Feature / Specification Bullets
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        const cur = editingItem.specs || [];
                        setEditingItem({
                          ...editingItem,
                          specs: [...cur, ""],
                        });
                      }}
                      className="px-2.5 py-1 rounded-lg bg-teal-950 text-teal-300 border border-teal-800/40 text-xs font-bold hover:bg-teal-900 transition flex items-center gap-1 cursor-pointer"
                    >
                      <Plus className="h-3.5 w-3.5" />
                      <span>Add Bullet</span>
                    </button>
                  </div>

                  <div className="space-y-2">
                    {editingItem.specs?.map((specBullet, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <input
                          type="text"
                          placeholder="e.g. Standard Vertical (Portrait) or 100% Virgin Polymer"
                          value={specBullet}
                          onChange={(e) => {
                            const next = [...(editingItem.specs || [])];
                            next[idx] = e.target.value;
                            setEditingItem({ ...editingItem, specs: next });
                          }}
                          className="flex-1 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-teal-500"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const next = (editingItem.specs || []).filter((_, i) => i !== idx);
                            setEditingItem({ ...editingItem, specs: next });
                          }}
                          className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-rose-400 cursor-pointer"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={editingItem.isActive !== false}
                    onChange={(e) => setEditingItem({ ...editingItem, isActive: e.target.checked })}
                    className="rounded bg-slate-950 border-slate-800 text-teal-500 focus:ring-teal-500 h-4 w-4"
                  />
                  <span className="text-xs font-semibold text-slate-300">Live (Visible on Public Website)</span>
                </label>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-5 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-lg shadow-teal-500/20 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? "Saving..." : modalMode === "add" ? "Add Product Rate" : "Save Pricing Rate"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════════
          MODAL: ADD / EDIT TECHNICAL SPECIFICATION PRODUCT (WITH IMAGE UPLOAD)
      ══════════════════════════════════════════════════════════════════════ */}
      {isSpecModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-3xl rounded-3xl bg-slate-900 border border-cyan-800/60 p-6 sm:p-8 shadow-2xl space-y-6 my-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-cyan-400" />
                  <span>
                    {specModalMode === "add"
                      ? "Add New Technical Specification Product"
                      : `Edit Engineering Specs: ${editingSpec.name}`}
                  </span>
                </h3>
                <p className="text-xs text-slate-400">
                  Upload custom image, configure parameters, description, highlights, and price sync
                </p>
              </div>
              <button
                onClick={() => setIsSpecModalOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSaveSpecModal} className="space-y-5">
              {/* Image Uploader & Thumbnail Selector */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
                <label className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                  <ImageIcon className="h-4 w-4" />
                  <span>Product Card Image &amp; Thumbnail</span>
                </label>

                <div className="flex flex-col sm:flex-row items-start gap-4">
                  {/* Image Preview */}
                  <div className="relative h-28 w-28 shrink-0 rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-inner flex items-center justify-center">
                    {editingSpec.imageSrc ? (
                      <Image
                        src={editingSpec.imageSrc}
                        alt={editingSpec.alt || "Product image"}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <ImageIcon className="h-8 w-8 text-slate-600" />
                    )}
                  </div>

                  <div className="space-y-2 flex-1 w-full">
                    {/* File Upload Button */}
                    <div className="flex flex-wrap items-center gap-2">
                      <input
                        type="file"
                        ref={fileInputRef}
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={uploadingImage}
                        className="px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow flex items-center gap-1.5 transition cursor-pointer"
                      >
                        <Upload className="h-3.5 w-3.5" />
                        <span>{uploadingImage ? "Uploading..." : "Upload New Image"}</span>
                      </button>

                      <input
                        type="text"
                        value={editingSpec.imageSrc || ""}
                        onChange={(e) => setEditingSpec({ ...editingSpec, imageSrc: e.target.value })}
                        placeholder="Or enter direct image URL / path (/images/...)"
                        className="flex-1 min-w-[200px] px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    {/* Quick Preset Selector */}
                    <div className="space-y-1">
                      <span className="text-[10px] font-semibold text-slate-400 block">
                        Quick Select IDGen Factory Image:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {presetImages.map((preset) => (
                          <button
                            key={preset.url}
                            type="button"
                            onClick={() => setEditingSpec({ ...editingSpec, imageSrc: preset.url })}
                            className={`px-2 py-0.5 rounded text-[10px] font-medium border transition cursor-pointer ${
                              editingSpec.imageSrc === preset.url
                                ? "bg-cyan-950 text-cyan-300 border-cyan-700"
                                : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white"
                            }`}
                          >
                            {preset.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Product Name */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-bold text-slate-300">Product Title *</label>
                  <input
                    type="text"
                    required
                    value={editingSpec.name || ""}
                    onChange={(e) => setEditingSpec({ ...editingSpec, name: e.target.value })}
                    placeholder="e.g. PVC ID Cards (Standard CR-80)"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500 font-bold"
                  />
                </div>

                {/* Category */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Category Tag (Top Badge) *</label>
                  <input
                    type="text"
                    required
                    value={editingSpec.category || ""}
                    onChange={(e) => setEditingSpec({ ...editingSpec, category: e.target.value })}
                    placeholder="e.g. Identity Cards"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                {/* Image Overlay Tag */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Image Corner Badge Text</label>
                  <input
                    type="text"
                    value={editingSpec.imageTag || ""}
                    onChange={(e) => setEditingSpec({ ...editingSpec, imageTag: e.target.value })}
                    placeholder="e.g. Identity Cards"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                {/* Description Subtitle */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-bold text-slate-300">Subtitle / Manufacturing Note</label>
                  <input
                    type="text"
                    value={editingSpec.description || ""}
                    onChange={(e) => setEditingSpec({ ...editingSpec, description: e.target.value })}
                    placeholder="Direct factory manufactured & quality inspected at IDGen cleanrooms."
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                {/* Target Page URL */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Full Product Page URL</label>
                  <input
                    type="text"
                    value={editingSpec.pageHref || ""}
                    onChange={(e) => setEditingSpec({ ...editingSpec, pageHref: e.target.value })}
                    placeholder="/id-card-printing/"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                {/* Button CTA Text */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">CTA Button Text</label>
                  <input
                    type="text"
                    value={editingSpec.buttonText || ""}
                    onChange={(e) => setEditingSpec({ ...editingSpec, buttonText: e.target.value })}
                    placeholder="Get Quote"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                {/* Pricing Mode Selection */}
                <div className="space-y-1.5 sm:col-span-2 p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <label className="text-xs font-bold text-cyan-300 block mb-2">
                    Dynamic Price Display Calculation
                  </label>

                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-200">
                        <input
                          type="radio"
                          name="priceType"
                          checked={editingSpec.priceFormula === "auto"}
                          onChange={() => setEditingSpec({ ...editingSpec, priceFormula: "auto" })}
                          className="text-cyan-500 focus:ring-cyan-500"
                        />
                        <span>Auto-Compute from Dynamic Pricing Catalog (Recommended)</span>
                      </label>

                      <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-200">
                        <input
                          type="radio"
                          name="priceType"
                          checked={editingSpec.priceFormula !== "auto"}
                          onChange={() => setEditingSpec({ ...editingSpec, priceFormula: "₹15 – ₹16 / card" })}
                          className="text-cyan-500 focus:ring-cyan-500"
                        />
                        <span>Custom Price String</span>
                      </label>
                    </div>

                    {editingSpec.priceFormula === "auto" ? (
                      <div className="space-y-1 pt-1">
                        <label className="text-[11px] font-semibold text-slate-400">
                          Select Matched Pricing Catalog Item(s) to compute price range from:
                        </label>
                        <div className="flex flex-wrap gap-2 pt-1 max-h-32 overflow-y-auto p-2 bg-slate-900 rounded-xl border border-slate-800">
                          {items.map((pi) => {
                            const isSelected = editingSpec.matchedPricingIds?.includes(pi.id);
                            return (
                              <button
                                key={pi.id}
                                type="button"
                                onClick={() => {
                                  const cur = editingSpec.matchedPricingIds || [];
                                  if (isSelected) {
                                    setEditingSpec({
                                      ...editingSpec,
                                      matchedPricingIds: cur.filter((x) => x !== pi.id),
                                    });
                                  } else {
                                    setEditingSpec({
                                      ...editingSpec,
                                      matchedPricingIds: [...cur, pi.id],
                                    });
                                  }
                                }}
                                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition cursor-pointer flex items-center gap-1.5 ${
                                  isSelected
                                    ? "bg-cyan-500 text-slate-950 font-bold"
                                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                                }`}
                              >
                                {isSelected && <Check className="h-3 w-3" />}
                                <span>
                                  {pi.name} ({pi.price})
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      <input
                        type="text"
                        value={editingSpec.priceFormula || ""}
                        onChange={(e) => setEditingSpec({ ...editingSpec, priceFormula: e.target.value })}
                        placeholder="e.g. ₹15 – ₹16 / card"
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-cyan-300 font-bold font-mono focus:outline-none focus:border-cyan-500"
                      />
                    )}
                  </div>
                </div>

                {/* Key-Value Specifications List */}
                <div className="sm:col-span-2 space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-300">
                      Technical Parameters Table (Key / Value Rows)
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        const cur = editingSpec.specs || [];
                        setEditingSpec({
                          ...editingSpec,
                          specs: [...cur, { label: "", value: "" }],
                        });
                      }}
                      className="px-2.5 py-1 rounded-lg bg-cyan-950 text-cyan-300 border border-cyan-800/40 text-xs font-bold hover:bg-cyan-900 transition flex items-center gap-1 cursor-pointer"
                    >
                      <Plus className="h-3.5 w-3.5" />
                      <span>Add Row</span>
                    </button>
                  </div>

                  <div className="space-y-2">
                    {editingSpec.specs?.map((specRow, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <input
                          type="text"
                          placeholder="Label (e.g. Dimensions)"
                          value={specRow.label}
                          onChange={(e) => {
                            const next = [...(editingSpec.specs || [])];
                            next[idx] = { ...next[idx], label: e.target.value };
                            setEditingSpec({ ...editingSpec, specs: next });
                          }}
                          className="w-1/3 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500 font-medium"
                        />
                        <input
                          type="text"
                          placeholder="Value (e.g. 85.6 mm × 53.98 mm)"
                          value={specRow.value}
                          onChange={(e) => {
                            const next = [...(editingSpec.specs || [])];
                            next[idx] = { ...next[idx], value: e.target.value };
                            setEditingSpec({ ...editingSpec, specs: next });
                          }}
                          className="flex-1 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const next = (editingSpec.specs || []).filter((_, i) => i !== idx);
                            setEditingSpec({ ...editingSpec, specs: next });
                          }}
                          className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-rose-400 cursor-pointer"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="sm:col-span-2 space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-300">
                      Key Highlights Badges (Checkmarks)
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        const cur = editingSpec.highlights || [];
                        setEditingSpec({
                          ...editingSpec,
                          highlights: [...cur, ""],
                        });
                      }}
                      className="px-2.5 py-1 rounded-lg bg-cyan-950 text-cyan-300 border border-cyan-800/40 text-xs font-bold hover:bg-cyan-900 transition flex items-center gap-1 cursor-pointer"
                    >
                      <Plus className="h-3.5 w-3.5" />
                      <span>Add Highlight</span>
                    </button>
                  </div>

                  <div className="space-y-2">
                    {editingSpec.highlights?.map((h, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <input
                          type="text"
                          placeholder="e.g. Water-Proof Solid Core"
                          value={h}
                          onChange={(e) => {
                            const next = [...(editingSpec.highlights || [])];
                            next[idx] = e.target.value;
                            setEditingSpec({ ...editingSpec, highlights: next });
                          }}
                          className="flex-1 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const next = (editingSpec.highlights || []).filter((_, i) => i !== idx);
                            setEditingSpec({ ...editingSpec, highlights: next });
                          }}
                          className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-rose-400 cursor-pointer"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={editingSpec.isActive !== false}
                    onChange={(e) => setEditingSpec({ ...editingSpec, isActive: e.target.checked })}
                    className="rounded bg-slate-950 border-slate-800 text-cyan-500 focus:ring-cyan-500 h-4 w-4"
                  />
                  <span className="text-xs font-semibold text-slate-300">Live (Visible on Public Website)</span>
                </label>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsSpecModalOpen(false)}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 disabled:opacity-50"
                  >
                    {isSubmitting ? "Saving..." : "Save Product Specifications"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── Confirmation Modal for Pricing Reset ── */}
      {isResetConfirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-2xl space-y-4">
            <h4 className="text-base font-bold text-white">Reset Dynamic Pricing Rates?</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              This will restore all default reference rates including separate Polycarbonate Holders (V-1 ₹6, H-1 ₹6, V-2 ₹7).
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setIsResetConfirmOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleResetToDefaults}
                disabled={isSubmitting}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow"
              >
                {isSubmitting ? "Resetting..." : "Confirm Reset"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Confirmation Modal for Specifications Reset ── */}
      {isSpecResetConfirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-3xl bg-slate-900 border border-cyan-800/60 p-6 shadow-2xl space-y-4">
            <h4 className="text-base font-bold text-white">Reset Technical Specifications &amp; Images?</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              This will restore the standard engineering specifications and default photos for all 8 core IDGen products (PVC Cards, Lanyards, RFID, Event Badges, Holders, Hooks, Acrylic Badges, Zinc Medals).
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setIsSpecResetConfirmOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleResetSpecsToDefaults}
                disabled={isSubmitting}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow"
              >
                {isSubmitting ? "Resetting..." : "Confirm Reset"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminPricingPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto p-12 text-center text-slate-400 flex items-center justify-center gap-3">
          <div className="h-6 w-6 border-2 border-teal-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-sm font-semibold">Loading IDGen Admin Engine...</span>
        </div>
      }
    >
      <AdminPricingContent />
    </Suspense>
  );
}
