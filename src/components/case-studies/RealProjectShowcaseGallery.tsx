"use client";

import React, { useState, useEffect, useCallback } from "react";
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
} from "lucide-react";
import { FlowChain } from "@/components/ui/FlowChain";

export interface RealProjectItem {
  id: string;
  org: string;
  location: string;
  category: "school" | "college" | "institutional" | "wearable";
  requirement: string;
  products: string;
  badge: string;
  image: string;
  imageSecondary?: string;
  workflow: string[];
  outcome: string;
}

export const deliveredProjects: RealProjectItem[] = [
  {
    id: "don-bosco",
    org: "Don Bosco Hr Sec School",
    location: "Gojapara, Assam",
    category: "school",
    requirement: "Student identification batch for school academic session",
    products: "CR80 PVC Student ID Cards + Custom Printed Lanyards + Vertical Holders",
    badge: "School Batch",
    image: "/images/Order Deliver/Don Bosco Hr Sec School, gojapara 1.png",
    imageSecondary: "/images/Order Deliver/Don Bosco Hr Sec School, gojapara 2.png",
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
    outcome:
      "Personalized student identification prepared according to the organization's approved requirements and dispatched for campus distribution.",
  },
  {
    id: "ckb-college",
    org: "CKB College",
    location: "Jorhat, Assam",
    category: "college",
    requirement: "Higher education student identity passes & library access cards",
    products: "Personalized PVC Cards + 20mm Custom Sublimation Lanyards",
    badge: "College Pass",
    image: "/images/Order Deliver/CKB COLLAGE,JORHAT 1.png",
    imageSecondary: "/images/Order Deliver/CKB COLLAGE,JORHAT 2.png",
    workflow: [
      "Data Collection",
      "Photo Matching",
      "Design Layout",
      "Proof Review",
      "Approval",
      "Batch Printing",
      "Express Delivery",
    ],
    outcome:
      "Full student enrollment cards personalized with barcode registration and branded college lanyard.",
  },
  {
    id: "govt-nagaon",
    org: "Government of Assam",
    location: "Nagaon, Assam",
    category: "institutional",
    requirement: "Official department staff identification & security credentials",
    products: "Official Staff PVC ID Cards + Branded Blue Lanyards + Four-Side Lock Holders",
    badge: "Government / Institutional",
    image: "/images/Order Deliver/Government of assam,nagoan 1.jpeg",
    imageSecondary: "/images/Order Deliver/Government of assam,nagoan 2.jpeg",
    workflow: [
      "Official Roster",
      "Department Design",
      "Institutional Approval",
      "Security Printing",
      "QC Check",
      "Dispatch",
    ],
    outcome:
      "High-durability staff identification credentials manufactured to official departmental design standards.",
  },
  {
    id: "rayburn-college",
    org: "Rayburn College",
    location: "Churachandpur, Manipur",
    category: "wearable",
    requirement: "Wearable student identity ecosystem with dual-sided printing",
    products: "Dual-Sided PVC Cards + Satin Sublimation Lanyards + Clear Acrylic Holders",
    badge: "Wearable Setup",
    image: "/images/Order Deliver/RAYBURN COLLAGE,MANIPUR 1.png",
    imageSecondary: "/images/Order Deliver/RAYBURN COLLAGE,MANIPUR 2.jpeg",
    workflow: [
      "Student Data",
      "Photo Capture",
      "Artwork Proofing",
      "Batch Approval",
      "Dual-Side Print",
      "Quality Check",
      "Dispatch to Manipur",
    ],
    outcome:
      "Complete wearable identity sets delivered on schedule across state borders to Manipur.",
  },
  {
    id: "dbs-itanagar",
    org: "DBS Itanagar",
    location: "Itanagar, Arunachal Pradesh",
    category: "school",
    requirement: "Annual student & faculty identification badges",
    products: "Personalized PVC Cards + 16mm Sublimation Lanyards + Dog Hooks",
    badge: "School Batch",
    image: "/images/Order Deliver/DBS ITANAGAR 1.png",
    imageSecondary: "/images/Order Deliver/DBS ITANAGAR 2.png",
    workflow: [
      "Student Records",
      "Photo Review",
      "Card Design",
      "Approval",
      "Thermal Re-Transfer Print",
      "Quality Check",
      "Dispatch to Arunachal",
    ],
    outcome:
      "Fast-turnaround student ID batch dispatched to Itanagar, Arunachal Pradesh.",
  },
  {
    id: "kakojan-college",
    org: "Kakojan College",
    location: "Jorhat, Assam",
    category: "college",
    requirement: "Campus identification & semester student registration cards",
    products: "PVC ID Cards + Custom Printed Satin Lanyards + Swivel Fish Hooks",
    badge: "College Pass",
    image: "/images/Order Deliver/KAKOJANCOLLEGE,JORHAT 1.png",
    imageSecondary: "/images/Order Deliver/KAKOJANCOLLEGE,JORHAT 2.png",
    workflow: [
      "Student Roster",
      "Photo Cropping",
      "Template Preview",
      "Approval",
      "Batch Production",
      "Dispatch",
    ],
    outcome:
      "Personalized college identification completed and dispatched with 100% data accuracy.",
  },
];

export function RealProjectShowcaseGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalProject, setActiveModalProject] = useState<RealProjectItem | null>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setActiveModalProject(null);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const filteredProjects = deliveredProjects.filter(
    (p) => selectedCategory === "all" || p.category === selectedCategory
  );

  return (
    <section className="mt-16 sm:mt-20" id="project-gallery">
      {/* ── Section Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200/90 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 border border-[#009fe3]/20 dark:border-cyan-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#009fe3] dark:text-cyan-400">
            <Camera className="h-3.5 w-3.5" />
            <span>Delivered Projects Gallery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mt-2">
            Real Identification Projects
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
            Real delivered identification projects for schools, colleges, and institutions across Assam, Arunachal Pradesh, and Manipur.
          </p>
        </div>

        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          Showing {filteredProjects.length} Delivered Projects
        </div>
      </div>

      {/* ── Filter Pills ── */}
      <div className="mt-6 flex flex-wrap items-center gap-2">
        {[
          { id: "all", label: "All Projects" },
          { id: "school", label: "School ID Cards" },
          { id: "college", label: "Colleges & Universities" },
          { id: "institutional", label: "Government & Institutions" },
          { id: "wearable", label: "Complete Wearable Sets" },
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all duration-200 ${
              selectedCategory === cat.id
                ? "bg-[#009fe3] text-white shadow-md shadow-[#009fe3]/25 scale-[1.02]"
                : "bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-[#009fe3]/60 hover:bg-sky-50/50 dark:hover:bg-slate-800"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* ── Projects Grid ── */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveModalProject(project)}
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
              <span>View Case Details</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        ))}
      </div>

      {/* ── 360° Case Study Modal ── */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-fadeIn">
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border-2 border-[#009fe3]/50 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-2xl space-y-6"
          >
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 rounded-full bg-slate-100 dark:bg-slate-800 p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition z-10"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-[#009fe3]/10 dark:bg-cyan-500/10 text-[#009fe3] dark:text-cyan-400 px-3 py-0.5 text-xs font-bold border border-[#009fe3]/20">
                  {activeModalProject.badge}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-semibold">
                  <MapPin className="h-3.5 w-3.5" />
                  {activeModalProject.location}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white">
                {activeModalProject.org}
              </h3>
            </div>

            {/* Photos */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950">
                <Image
                  src={activeModalProject.image}
                  alt={activeModalProject.org}
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-2 left-2 rounded bg-slate-900/80 px-2 py-0.5 text-[10px] text-white">
                  Photo 1
                </span>
              </div>
              {activeModalProject.imageSecondary && (
                <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950">
                  <Image
                    src={activeModalProject.imageSecondary}
                    alt={activeModalProject.org}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-2 left-2 rounded bg-slate-900/80 px-2 py-0.5 text-[10px] text-white">
                    Photo 2
                  </span>
                </div>
              )}
            </div>

            {/* Information Grid */}
            <div className="grid gap-3 sm:grid-cols-2 text-xs">
              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-4">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                  Project Requirement
                </span>
                <p className="font-semibold text-slate-800 dark:text-slate-200">
                  {activeModalProject.requirement}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-4">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                  Products Delivered
                </span>
                <p className="font-semibold text-slate-800 dark:text-slate-200">
                  {activeModalProject.products}
                </p>
              </div>
            </div>

            {/* Workflow */}
            <div className="rounded-2xl border-2 border-cyan-400/30 bg-sky-50/50 dark:bg-slate-850 p-4 space-y-2">
              <span className="text-[10px] font-mono font-black uppercase text-[#009fe3] dark:text-cyan-400 block">
                Standard Production Workflow:
              </span>
              <FlowChain steps={activeModalProject.workflow} dark={false} />
            </div>

            {/* Result */}
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/20 p-4 text-xs text-slate-700 dark:text-slate-300">
              <strong className="text-emerald-700 dark:text-emerald-400">Project Outcome: </strong>
              {activeModalProject.outcome}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
              <Link
                href="/request-a-quote/"
                className="inline-flex items-center gap-2 rounded-xl bg-[#009fe3] hover:bg-[#008bc9] text-white px-6 py-3 text-xs font-extrabold shadow-md transition"
              >
                <span>Request Similar Project Proposal</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                onClick={() => setActiveModalProject(null)}
                className="rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-3 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
