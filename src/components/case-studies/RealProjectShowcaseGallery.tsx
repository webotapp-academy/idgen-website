"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  MapPin,
  CheckCircle2,
  Maximize2,
  X,
  ArrowRight,
  Sparkles,
  Filter,
  GraduationCap,
  Building2,
  Layers,
  Camera,
  Ticket,
  Radio,
  Users,
  Award,
  BadgeCheck,
  Edit3,
} from "lucide-react";
import { FlowChain } from "@/components/ui/FlowChain";
import {
  type RealProjectItem,
  INITIAL_PROJECTS,
  DEFAULT_CATEGORY_FILTERS,
} from "@/lib/dynamic-projects-types";

export type { RealProjectItem };
export { DEFAULT_CATEGORY_FILTERS as categoryFilters };
export const deliveredProjects = INITIAL_PROJECTS;

export interface RealProjectShowcaseGalleryProps {
  initialProjects?: RealProjectItem[];
}

export function RealProjectShowcaseGallery({
  initialProjects,
}: RealProjectShowcaseGalleryProps) {
  const [projects, setProjects] = useState<RealProjectItem[]>(
    initialProjects && initialProjects.length > 0 ? initialProjects : INITIAL_PROJECTS
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalProject, setActiveModalProject] = useState<RealProjectItem | null>(null);
  const [activeModalImageIndex, setActiveModalImageIndex] = useState<number>(0);

  // Sync with background API
  useEffect(() => {
    let isMounted = true;
    async function loadDynamicProjects() {
      try {
        const res = await fetch("/api/projects");
        if (!res.ok) return;
        const data = await res.json();
        if (isMounted && data.success && Array.isArray(data.projects) && data.projects.length > 0) {
          setProjects(data.projects);
        }
      } catch {
        // Fallback gracefully to props/initial
      }
    }

    loadDynamicProjects();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setActiveModalProject(null);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Dynamically compute available categories
  const categoryFilters = useMemo(() => {
    const filters = [...DEFAULT_CATEGORY_FILTERS];
    // Check if there are projects with categories not in default list
    const knownIds = new Set(filters.map((f) => f.id));
    projects.forEach((p) => {
      const catId = p.category?.toLowerCase();
      if (catId && !knownIds.has(catId)) {
        knownIds.add(catId);
        filters.push({
          id: catId,
          label: p.categoryLabel || p.badge || catId.charAt(0).toUpperCase() + catId.slice(1),
        });
      }
    });
    return filters;
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter(
      (p) => selectedCategory === "all" || p.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [projects, selectedCategory]);

  return (
    <section className="mt-10 sm:mt-14" id="project-gallery">
      {/* ── Section Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200/90 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
            <Camera className="h-3.5 w-3.5" />
            <span>Delivered Projects Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mt-2">
            In Real Identification Projects
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
            Explore verified identity projects delivered for schools, colleges, companies, events, and organizations across Assam and Northeast India.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Showing {filteredProjects.length} Verified Projects
          </div>
          <Link
            href="/admin/case-studies"
            className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400 hover:text-[#009fe3] dark:hover:text-cyan-400 transition"
            title="Manage Projects in Admin Panel"
          >
            <Edit3 className="h-3 w-3" />
            <span>Admin Control</span>
          </Link>
        </div>
      </div>

      {/* ── Filter Pills for all categories ── */}
      <div className="mt-6 flex flex-wrap items-center gap-2">
        {categoryFilters.map((cat) => {
          const count =
            cat.id === "all"
              ? projects.length
              : projects.filter((p) => p.category.toLowerCase() === cat.id).length;

          if (cat.id !== "all" && count === 0) return null;

          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all duration-200 flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? "bg-[#009fe3] text-white shadow-md shadow-[#009fe3]/25 scale-[1.02]"
                  : "bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-[#009fe3]/60 hover:bg-sky-50/50 dark:hover:bg-slate-800"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  selectedCategory === cat.id
                    ? "bg-white/20 text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Projects Grid ── */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => {
              setActiveModalProject(project);
              setActiveModalImageIndex(0);
            }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-2xl hover:border-[#009fe3]/80 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            <div>
              {/* Project Image */}
              <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-950">
                <Image
                  src={project.image}
                  alt={project.org}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                <div className="absolute top-3 left-3">
                  <span className="rounded-full bg-slate-900/85 backdrop-blur-md px-3 py-1 text-[10px] font-bold text-white border border-white/10">
                    {project.badge}
                  </span>
                </div>

                <div className="absolute top-3 right-3 rounded-lg bg-slate-900/80 text-white p-1.5 opacity-0 group-hover:opacity-100 transition shadow-md">
                  <Maximize2 className="h-3.5 w-3.5" />
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <span className="flex items-center gap-1 text-[11px] font-bold text-cyan-300">
                    <MapPin className="h-3 w-3" />
                    <span>{project.location}</span>
                  </span>
                  {project.imageSecondary && (
                    <span className="text-[10px] bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full font-semibold">
                      2 Photos
                    </span>
                  )}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-5 sm:p-6 space-y-3">
                <h3 className="text-lg font-black text-slate-950 dark:text-white group-hover:text-[#009fe3] dark:group-hover:text-cyan-400 transition-colors leading-snug">
                  {project.org}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-normal line-clamp-2">
                  {project.requirement}
                </p>

                <div className="rounded-xl bg-slate-50 dark:bg-slate-800/80 p-2.5 border border-slate-100 dark:border-slate-700/60 text-[11px]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    Delivered Configuration:
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200 line-clamp-1">
                    {project.products}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 dark:border-slate-800 mt-2 flex items-center justify-between text-xs font-bold text-[#009fe3] dark:text-cyan-400">
              <span>View Project Details</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        ))}
      </div>

      {/* ── Project Details Modal ── */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-fadeIn">
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto scrollbar-none"
          >
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 rounded-full bg-slate-100 dark:bg-slate-800 p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              <span className="rounded-full bg-[#009fe3]/10 text-[#009fe3] dark:text-cyan-400 border border-[#009fe3]/20 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                {activeModalProject.badge}
              </span>
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-[#009fe3]" />
                {activeModalProject.location}
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white">
                {activeModalProject.org}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {activeModalProject.requirement}
              </p>
            </div>

            {/* Modal Image Carousel / Toggle */}
            <div className="space-y-2">
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950">
                <Image
                  src={
                    activeModalImageIndex === 1 && activeModalProject.imageSecondary
                      ? activeModalProject.imageSecondary
                      : activeModalProject.image
                  }
                  alt={activeModalProject.org}
                  fill
                  className="object-cover"
                />
              </div>

              {activeModalProject.imageSecondary && (
                <div className="flex items-center justify-center gap-2 pt-1">
                  <button
                    onClick={() => setActiveModalImageIndex(0)}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition ${
                      activeModalImageIndex === 0
                        ? "bg-[#009fe3] text-white"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    Specimen View 1
                  </button>
                  <button
                    onClick={() => setActiveModalImageIndex(1)}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition ${
                      activeModalImageIndex === 1
                        ? "bg-[#009fe3] text-white"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    Specimen View 2
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/80 p-4 border border-slate-200/80 dark:border-slate-700/60">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Products Delivered:
                </span>
                <p className="text-sm font-extrabold text-slate-900 dark:text-white">
                  {activeModalProject.products}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Project Workflow Pipeline:
                </span>
                <FlowChain steps={activeModalProject.workflow} />
              </div>

              <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 p-4 border border-emerald-200 dark:border-emerald-800/60">
                <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">
                  Verified Outcome:
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                  {activeModalProject.outcome}
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800">
              <Link
                href="/request-a-quote/"
                onClick={() => setActiveModalProject(null)}
                className="inline-flex items-center gap-2 rounded-full bg-[#009fe3] px-6 py-2.5 text-xs font-extrabold text-white shadow-md hover:bg-[#008bc9] transition"
              >
                <span>Request Similar Project Quote</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <button
                onClick={() => setActiveModalProject(null)}
                className="text-xs font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
