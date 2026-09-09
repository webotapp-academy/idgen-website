"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  Camera,
  Plus,
  Search,
  CheckCircle2,
  Trash2,
  Edit3,
  ExternalLink,
  RotateCcw,
  Save,
  MapPin,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  X,
  UploadCloud,
  ChevronUp,
  ChevronDown,
  Layers,
  Check,
  Tag,
  Eye,
} from "lucide-react";
import type { RealProjectItem } from "@/lib/dynamic-projects-types";
import { DEFAULT_CATEGORY_FILTERS } from "@/lib/dynamic-projects-types";

interface ProjectFormData {
  id: string;
  org: string;
  location: string;
  category: string;
  categoryLabel: string;
  badge: string;
  requirement: string;
  products: string;
  image: string;
  imageSecondary: string;
  workflow: string[];
  outcome: string;
}

const emptyFormState: ProjectFormData = {
  id: "",
  org: "",
  location: "",
  category: "student",
  categoryLabel: "Student ID Card Projects",
  badge: "Student ID Card Projects",
  requirement: "",
  products: "",
  image: "/images/idgen-hero-cards-mockup.png",
  imageSecondary: "",
  workflow: [
    "Student Data",
    "Photograph",
    "Design",
    "Preview",
    "Approval",
    "Production",
    "Quality Check",
    "Dispatch",
  ],
  outcome: "",
};

const STANDARD_WORKFLOW_PRESETS = [
  {
    label: "Standard 8-Step Flow",
    steps: [
      "Student Data",
      "Photograph",
      "Design",
      "Preview",
      "Approval",
      "Production",
      "Quality Check",
      "Dispatch",
    ],
  },
  {
    label: "Corporate / RFID Flow",
    steps: [
      "HR Roster Data",
      "High-Res Photos",
      "Corporate Branding",
      "RFID Chip Mapping",
      "Thermal Print",
      "Turnstile Testing",
      "Dispatched",
    ],
  },
  {
    label: "Event Badges Flow",
    steps: [
      "Delegate Roster",
      "Category Color-Coding",
      "Fast Printing",
      "Dual-Hook Lanyard Assembly",
      "Express Delivery",
    ],
  },
  {
    label: "Custom Lanyards / Badges Flow",
    steps: [
      "Vector Logo Setup",
      "Sublimation / Laser Cut",
      "Hardware Fitting",
      "QC Check",
      "Packaging & Delivery",
    ],
  },
];

export default function AdminCaseStudiesPage() {
  const [projects, setProjects] = useState<RealProjectItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [formData, setFormData] = useState<ProjectFormData>(emptyFormState);
  const [newWorkflowStep, setNewWorkflowStep] = useState<string>("");
  const [uploadingImage, setUploadingImage] = useState<boolean>(false);
  const [uploadingSecondaryImage, setUploadingSecondaryImage] = useState<boolean>(false);

  // Preview Modal
  const [previewProject, setPreviewProject] = useState<RealProjectItem | null>(null);

  // Fetch projects
  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/projects");
      const data = await res.json();
      if (data.success && Array.isArray(data.projects)) {
        setProjects(data.projects);
      } else {
        setMessage({ type: "error", text: data.error || "Failed to load projects" });
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Error loading delivered projects catalog" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Filter projects by search and category
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" ||
        project.category.toLowerCase() === selectedCategory.toLowerCase();
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        project.org.toLowerCase().includes(q) ||
        project.location.toLowerCase().includes(q) ||
        project.products.toLowerCase().includes(q) ||
        project.requirement.toLowerCase().includes(q) ||
        project.badge.toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [projects, selectedCategory, searchQuery]);

  // Handle open modal for create
  const handleOpenCreate = () => {
    setFormData({
      ...emptyFormState,
      id: `project-${Date.now()}`,
    });
    setIsEditing(false);
    setIsModalOpen(true);
  };

  // Handle open modal for edit
  const handleOpenEdit = (project: RealProjectItem) => {
    setFormData({
      id: project.id,
      org: project.org,
      location: project.location,
      category: project.category,
      categoryLabel: project.categoryLabel || project.badge,
      badge: project.badge || project.categoryLabel,
      requirement: project.requirement,
      products: project.products,
      image: project.image,
      imageSecondary: project.imageSecondary || "",
      workflow: Array.isArray(project.workflow) ? [...project.workflow] : [],
      outcome: project.outcome,
    });
    setIsEditing(true);
    setIsModalOpen(true);
  };

  // Handle image upload via /api/admin/upload
  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    isSecondary: boolean = false
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const setUploading = isSecondary ? setUploadingSecondaryImage : setUploadingImage;

    try {
      setUploading(true);
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const base64Image = reader.result as string;
          const res = await fetch("/api/admin/upload", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ image: base64Image, filename: file.name }),
          });
          const data = await res.json();
          if (data.success && data.url) {
            setFormData((prev) =>
              isSecondary ? { ...prev, imageSecondary: data.url } : { ...prev, image: data.url }
            );
            setMessage({
              type: "success",
              text: `${isSecondary ? "Secondary" : "Primary"} image uploaded successfully!`,
            });
          } else {
            setMessage({ type: "error", text: data.error || "Failed to upload image." });
          }
        } catch (err) {
          console.error(err);
          setMessage({ type: "error", text: "Failed to process image upload." });
        } finally {
          setUploading(false);
        }
      };
      reader.readAsDataURL(file);
    } catch (err) {
      console.error(err);
      setUploading(false);
    }
  };

  // Handle workflow steps
  const handleAddWorkflowStep = () => {
    if (!newWorkflowStep.trim()) return;
    setFormData((prev) => ({
      ...prev,
      workflow: [...prev.workflow, newWorkflowStep.trim()],
    }));
    setNewWorkflowStep("");
  };

  const handleRemoveWorkflowStep = (indexToRemove: number) => {
    setFormData((prev) => ({
      ...prev,
      workflow: prev.workflow.filter((_, idx) => idx !== indexToRemove),
    }));
  };

  // Handle Save Project
  const handleSaveProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.org.trim() || !formData.location.trim()) {
      setMessage({ type: "error", text: "Organization name and location are required." });
      return;
    }

    try {
      setSaving(true);
      setMessage(null);

      const res = await fetch("/api/admin/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ project: formData }),
      });

      const data = await res.json();
      if (data.success) {
        setProjects(data.projects);
        setIsModalOpen(false);
        setMessage({
          type: "success",
          text: `Project "${formData.org}" ${isEditing ? "updated" : "added"} successfully!`,
        });
      } else {
        setMessage({ type: "error", text: data.error || "Failed to save project" });
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Failed to save project" });
    } finally {
      setSaving(false);
    }
  };

  // Handle Delete Project
  const handleDeleteProject = async (id: string, org: string) => {
    if (!confirm(`Are you sure you want to delete "${org}"?`)) return;

    try {
      const res = await fetch(`/api/admin/projects?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setProjects(data.projects);
        setMessage({ type: "success", text: `Deleted "${org}" successfully.` });
      } else {
        setMessage({ type: "error", text: data.error || "Failed to delete project" });
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Failed to delete project" });
    }
  };

  // Handle Reorder Project (Move Up / Move Down)
  const handleReorder = async (index: number, direction: "up" | "down") => {
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= projects.length) return;

    const newProjects = [...projects];
    const [moved] = newProjects.splice(index, 1);
    newProjects.splice(targetIndex, 0, moved);

    setProjects(newProjects);

    try {
      const res = await fetch("/api/admin/projects", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projects: newProjects }),
      });
      const data = await res.json();
      if (!data.success) {
        setMessage({ type: "error", text: "Failed to update project order." });
        fetchProjects();
      }
    } catch (err) {
      console.error(err);
      fetchProjects();
    }
  };

  // Handle Reset to Defaults
  const handleResetCatalog = async () => {
    if (
      !confirm(
        "Are you sure you want to reset all projects to the original 10 verified delivered projects? Custom additions or edits will be overwritten."
      )
    ) {
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/admin/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "reset" }),
      });
      const data = await res.json();
      if (data.success) {
        setProjects(data.projects);
        setMessage({ type: "success", text: "Delivered projects reset to verified catalog!" });
      } else {
        setMessage({ type: "error", text: data.error || "Failed to reset catalog" });
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Failed to reset catalog" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* ── Top Hero Banner ── */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-teal-950/60 border border-slate-800 p-6 sm:p-8">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold mb-3">
              <Camera className="h-3.5 w-3.5" />
              <span>Delivered Projects Showcase • Dynamic Control</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Case Studies &amp; Real Identification Projects
            </h1>
            <p className="mt-1.5 text-sm text-slate-400 max-w-2xl">
              Add, edit, and reorder verified real identity projects displayed on the public Case Studies page (`/case-studies/`). Upload real photos, configure delivered specifications, and edit 8-step workflow pipelines.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleOpenCreate}
              className="px-5 py-2.5 rounded-xl bg-teal-500 text-slate-950 font-bold text-xs hover:bg-teal-400 shadow-lg shadow-teal-500/20 transition flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              <span>Add New Project</span>
            </button>
            <Link
              href="/case-studies/#project-gallery"
              target="_blank"
              className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-200 font-semibold text-xs hover:bg-slate-700 transition flex items-center gap-1.5 border border-slate-700"
            >
              <span>View Public Gallery</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-70" />
            </Link>
            <button
              onClick={handleResetCatalog}
              className="px-3.5 py-2.5 rounded-xl bg-slate-900/80 text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition flex items-center gap-1.5 text-xs border border-slate-800"
              title="Reset to 10 factory verified projects"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Reset Defaults</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── Status Notifications ── */}
      {message && (
        <div
          className={`p-4 rounded-2xl border flex items-center justify-between text-xs font-semibold ${
            message.type === "success"
              ? "bg-teal-500/10 border-teal-500/30 text-teal-300"
              : "bg-rose-500/10 border-rose-500/30 text-rose-300"
          }`}
        >
          <div className="flex items-center gap-2">
            {message.type === "success" ? (
              <CheckCircle2 className="h-4 w-4 text-teal-400 shrink-0" />
            ) : (
              <AlertCircle className="h-4 w-4 text-rose-400 shrink-0" />
            )}
            <span>{message.text}</span>
          </div>
          <button
            onClick={() => setMessage(null)}
            className="p-1 hover:opacity-75 transition"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* ── Overview Metrics Strip ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            Total Projects
          </span>
          <p className="mt-1 text-2xl font-black text-white">{projects.length}</p>
          <p className="text-[10px] text-teal-400 mt-0.5">Live on Case Studies Hub</p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            Current Filter
          </span>
          <p className="mt-1 text-2xl font-black text-teal-400 capitalize">
            {selectedCategory === "all" ? "All Categories" : selectedCategory}
          </p>
          <p className="text-[10px] text-slate-400 mt-0.5">
            {filteredProjects.length} matching shown
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            High-Res Images
          </span>
          <p className="mt-1 text-2xl font-black text-white">
            {projects.filter((p) => p.image).length} / {projects.length}
          </p>
          <p className="text-[10px] text-emerald-400 mt-0.5">100% Verified Photos</p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            Express Dispatch
          </span>
          <p className="mt-1 text-2xl font-black text-white">Guwahati Hub</p>
          <p className="text-[10px] text-teal-400 mt-0.5">All 8 NE States Covered</p>
        </div>
      </div>

      {/* ── Search & Category Filter Bar ── */}
      <div className="space-y-4 p-5 rounded-2xl bg-slate-900/70 border border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by school, college, company, location, or product..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-hidden focus:border-teal-500 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          <div className="text-xs text-slate-400 font-medium">
            Showing <span className="font-bold text-teal-400">{filteredProjects.length}</span> of{" "}
            {projects.length} projects
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-800/80">
          {DEFAULT_CATEGORY_FILTERS.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                selectedCategory === cat.id
                  ? "bg-teal-500 text-slate-950 shadow-sm"
                  : "bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Projects Grid ── */}
      {loading ? (
        <div className="p-12 text-center text-slate-500 text-sm">
          Loading delivered projects catalog...
        </div>
      ) : filteredProjects.length === 0 ? (
        <div className="p-12 rounded-2xl border border-dashed border-slate-800 bg-slate-900/40 text-center space-y-3">
          <p className="text-slate-400 text-sm font-semibold">No delivered projects match your filters.</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="px-4 py-2 rounded-xl bg-slate-800 text-teal-300 text-xs font-semibold hover:bg-slate-700 transition"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/90 overflow-hidden hover:border-slate-700 transition group"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-44 w-full bg-slate-950 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.org}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-80" />

                  {/* Badge */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="rounded-full bg-slate-900/90 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-bold text-teal-300 border border-teal-500/30">
                      {project.badge}
                    </span>
                  </div>

                  {/* Location */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white text-[11px] font-medium">
                    <span className="flex items-center gap-1 text-teal-300 font-bold">
                      <MapPin className="h-3 w-3" />
                      <span>{project.location}</span>
                    </span>
                    <button
                      onClick={() => setPreviewProject(project)}
                      className="p-1 rounded bg-slate-900/80 hover:bg-teal-500 hover:text-slate-950 text-slate-300 transition"
                      title="Preview details"
                    >
                      <Eye className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-4 space-y-2.5">
                  <h3 className="text-base font-bold text-white group-hover:text-teal-400 transition-colors line-clamp-1">
                    {project.org}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2">{project.requirement}</p>

                  <div className="p-2 rounded-xl bg-slate-950/70 border border-slate-800/80 text-[11px]">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-0.5">
                      Delivered Items:
                    </span>
                    <p className="font-medium text-slate-300 line-clamp-1">{project.products}</p>
                  </div>

                  {/* Workflow chips count */}
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                    <span className="flex items-center gap-1 text-slate-400">
                      <Layers className="h-3 w-3 text-teal-400" />
                      <span>{project.workflow?.length || 0} Workflow Steps</span>
                    </span>
                    {project.imageSecondary && (
                      <span className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded border border-slate-700">
                        +2nd Photo
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-3 border-t border-slate-800/80 bg-slate-950/40 flex items-center justify-between gap-2">
                {/* Reorder Buttons */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleReorder(index, "up")}
                    disabled={index === 0}
                    className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition"
                    title="Move Up"
                  >
                    <ChevronUp className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => handleReorder(index, "down")}
                    disabled={index === projects.length - 1}
                    className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition"
                    title="Move Down"
                  >
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                </div>

                {/* Edit & Delete */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleOpenEdit(project)}
                    className="px-2.5 py-1.5 rounded-lg bg-teal-500/10 text-teal-300 hover:bg-teal-500 hover:text-slate-950 border border-teal-500/30 text-xs font-semibold transition flex items-center gap-1"
                  >
                    <Edit3 className="h-3 w-3" />
                    <span>Edit</span>
                  </button>
                  <button
                    onClick={() => handleDeleteProject(project.id, project.org)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition"
                    title="Delete project"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Add / Edit Project Modal ── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn overflow-y-auto">
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl p-6 sm:p-8 space-y-6 my-8 max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <Camera className="h-4 w-4" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">
                    {isEditing ? "Edit Delivered Project" : "Add New Delivered Project"}
                  </h2>
                  <p className="text-xs text-slate-400">
                    Configure specifications, photos, and workflow pipeline
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSaveProject} className="space-y-5">
              {/* Row 1: Org Name & Location */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Organization / Client Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Don Bosco Hr Sec School"
                    value={formData.org}
                    onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-teal-500 transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Location / City &amp; State <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Gojapara, Assam"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-teal-500 transition"
                  />
                </div>
              </div>

              {/* Row 2: Category & Badge */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Project Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => {
                      const cat = e.target.value;
                      const defaultFilter = DEFAULT_CATEGORY_FILTERS.find((c) => c.id === cat);
                      setFormData({
                        ...formData,
                        category: cat,
                        categoryLabel: defaultFilter ? defaultFilter.label : formData.categoryLabel,
                        badge: defaultFilter ? defaultFilter.label : formData.badge,
                      });
                    }}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-hidden focus:border-teal-500 transition"
                  >
                    <option value="student">Student ID Card Projects</option>
                    <option value="employee">Employee Identification Projects</option>
                    <option value="event">Event Identification Projects</option>
                    <option value="rfid">RFID Identification Projects</option>
                    <option value="membership">Membership ID Card</option>
                    <option value="lanyards">Custom 20 mm Printed Lanyards</option>
                    <option value="badges">Acrylic Badges</option>
                    <option value="medals">Medals</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Badge Label / Category Tag
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Student ID Card Projects"
                    value={formData.badge}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        badge: e.target.value,
                        categoryLabel: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-teal-500 transition"
                  />
                </div>
              </div>

              {/* Row 3: Requirement Description */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Client Requirement Summary
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Annual student identification batch for school academic session"
                  value={formData.requirement}
                  onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-teal-500 transition"
                />
              </div>

              {/* Row 4: Delivered Configuration */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Delivered Products Configuration
                </label>
                <input
                  type="text"
                  placeholder="e.g. CR80 PVC Student ID Cards + Custom Printed Lanyards + Vertical Holders"
                  value={formData.products}
                  onChange={(e) => setFormData({ ...formData, products: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-teal-500 transition"
                />
              </div>

              {/* Row 5: Images & Upload */}
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Primary Image */}
                <div className="space-y-2 p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-teal-300">
                      Primary Showcase Photo <span className="text-rose-400">*</span>
                    </label>
                    {uploadingImage && (
                      <span className="text-[10px] text-teal-400 animate-pulse">Uploading...</span>
                    )}
                  </div>

                  <input
                    type="text"
                    required
                    placeholder="/images/Order Deliver/... or URL"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-teal-500 transition"
                  />

                  <div className="flex items-center gap-2">
                    <label className="cursor-pointer px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition flex items-center gap-1.5 border border-slate-700">
                      <UploadCloud className="h-3.5 w-3.5 text-teal-400" />
                      <span>Upload New Image</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, false)}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {formData.image && (
                    <div className="relative h-28 w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950 mt-1">
                      <Image
                        src={formData.image}
                        alt="Primary Preview"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* Secondary Image */}
                <div className="space-y-2 p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-slate-300">
                      Secondary Photo (Optional)
                    </label>
                    {uploadingSecondaryImage && (
                      <span className="text-[10px] text-teal-400 animate-pulse">Uploading...</span>
                    )}
                  </div>

                  <input
                    type="text"
                    placeholder="/images/Order Deliver/... or URL (optional)"
                    value={formData.imageSecondary}
                    onChange={(e) => setFormData({ ...formData, imageSecondary: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-teal-500 transition"
                  />

                  <div className="flex items-center gap-2">
                    <label className="cursor-pointer px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition flex items-center gap-1.5 border border-slate-700">
                      <UploadCloud className="h-3.5 w-3.5 text-cyan-400" />
                      <span>Upload 2nd Photo</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, true)}
                        className="hidden"
                      />
                    </label>
                    {formData.imageSecondary && (
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, imageSecondary: "" })}
                        className="text-[11px] text-slate-400 hover:text-rose-400"
                      >
                        Remove
                      </button>
                    )}
                  </div>

                  {formData.imageSecondary && (
                    <div className="relative h-28 w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950 mt-1">
                      <Image
                        src={formData.imageSecondary}
                        alt="Secondary Preview"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Row 6: Workflow Pipeline Builder */}
              <div className="space-y-2 p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <label className="text-xs font-semibold text-teal-300 flex items-center gap-1.5">
                    <Layers className="h-3.5 w-3.5" />
                    <span>Workflow Pipeline Steps ({formData.workflow.length})</span>
                  </label>

                  {/* Preset Quick Fill */}
                  <div className="flex flex-wrap items-center gap-1">
                    <span className="text-[10px] text-slate-500">Presets:</span>
                    {STANDARD_WORKFLOW_PRESETS.map((p) => (
                      <button
                        key={p.label}
                        type="button"
                        onClick={() => setFormData({ ...formData, workflow: [...p.steps] })}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition border border-slate-700"
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Workflow Tags */}
                <div className="flex flex-wrap items-center gap-1.5 min-h-[36px] p-2 rounded-xl bg-slate-950 border border-slate-800">
                  {formData.workflow.map((step, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-medium"
                    >
                      <span>{idx + 1}. {step}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveWorkflowStep(idx)}
                        className="text-teal-400/60 hover:text-rose-400 transition"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                </div>

                {/* Add Step Input */}
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Add workflow step (e.g. Hologram Sealing, Turnstile Mapping...)"
                    value={newWorkflowStep}
                    onChange={(e) => setNewWorkflowStep(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddWorkflowStep();
                      }
                    }}
                    className="flex-1 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-teal-500 transition"
                  />
                  <button
                    type="button"
                    onClick={handleAddWorkflowStep}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-teal-300 text-xs font-semibold transition flex items-center gap-1 border border-slate-700"
                  >
                    <Plus className="h-3.5 w-3.5" />
                    <span>Add Step</span>
                  </button>
                </div>
              </div>

              {/* Row 7: Verified Outcome */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Verified Outcome Statement
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Full student enrollment cards personalized with barcode registration and branded college lanyard."
                  value={formData.outcome}
                  onChange={(e) => setFormData({ ...formData, outcome: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-teal-500 transition"
                />
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-6 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-lg shadow-teal-500/20 transition flex items-center gap-1.5 disabled:opacity-50"
                >
                  <Save className="h-4 w-4" />
                  <span>{saving ? "Saving..." : isEditing ? "Update Project" : "Add Project"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── Details Preview Modal ── */}
      {previewProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl p-6 space-y-4 max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setPreviewProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              <span className="rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/30 px-3 py-0.5 text-xs font-bold">
                {previewProject.badge}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <MapPin className="h-3 w-3 text-teal-400" />
                {previewProject.location}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white">{previewProject.org}</h3>
            <p className="text-xs text-slate-300">{previewProject.requirement}</p>

            <div className="relative h-48 w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
              <Image
                src={previewProject.image}
                alt={previewProject.org}
                fill
                className="object-cover"
              />
            </div>

            {previewProject.imageSecondary && (
              <div className="relative h-36 w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
                <Image
                  src={previewProject.imageSecondary}
                  alt={`${previewProject.org} secondary`}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
              <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">
                Delivered Configuration:
              </span>
              <p className="font-semibold text-white">{previewProject.products}</p>
            </div>

            <div>
              <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1.5">
                Workflow Pipeline:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {previewProject.workflow?.map((s, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-slate-800 text-[11px] text-teal-300 font-medium"
                  >
                    {idx + 1}. {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-teal-950/40 border border-teal-800/40 text-xs text-teal-300">
              <span className="text-[10px] font-bold text-teal-400 uppercase block mb-1">
                Verified Outcome:
              </span>
              <p>{previewProject.outcome}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
