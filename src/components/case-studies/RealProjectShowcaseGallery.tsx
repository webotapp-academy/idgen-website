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
  Ticket,
  Radio,
  Users,
  Award,
  BadgeCheck,
} from "lucide-react";
import { FlowChain } from "@/components/ui/FlowChain";

export interface RealProjectItem {
  id: string;
  org: string;
  location: string;
  category:
    | "student"
    | "employee"
    | "event"
    | "rfid"
    | "membership"
    | "lanyards"
    | "badges"
    | "medals";
  categoryLabel: string;
  requirement: string;
  products: string;
  badge: string;
  image: string;
  imageSecondary?: string;
  workflow: string[];
  outcome: string;
}

export const categoryFilters = [
  { id: "all", label: "All Projects" },
  { id: "student", label: "Student ID Card Projects" },
  { id: "employee", label: "Employee Identification Projects" },
  { id: "event", label: "Event Identification Projects" },
  { id: "rfid", label: "RFID Identification Projects" },
  { id: "membership", label: "Membership ID Card" },
  { id: "lanyards", label: "Custom 20 mm Printed Lanyards" },
  { id: "badges", label: "Acrylic Badges" },
  { id: "medals", label: "Medals" },
];

export const deliveredProjects: RealProjectItem[] = [
  {
    id: "don-bosco-school",
    org: "Don Bosco Hr Sec School",
    location: "Gojapara, Assam",
    category: "student",
    categoryLabel: "Student ID Card Projects",
    requirement: "Annual student identification batch for school academic session",
    products: "CR80 PVC Student ID Cards + Custom Printed Lanyards + Vertical Holders",
    badge: "Student ID Card Projects",
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
    id: "ckb-college-student",
    org: "CKB College",
    location: "Jorhat, Assam",
    category: "student",
    categoryLabel: "Student ID Card Projects",
    requirement: "Higher education student identity passes & library access cards",
    products: "Personalized PVC Cards + 20mm Custom Sublimation Lanyards",
    badge: "Student ID Card Projects",
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
    id: "govt-assam-staff",
    org: "Government of Assam",
    location: "Nagaon, Assam",
    category: "employee",
    categoryLabel: "Employee Identification Projects",
    requirement: "Official department staff identification & security credentials",
    products: "Official Staff PVC ID Cards + Branded Blue Lanyards + Four-Side Lock Holders",
    badge: "Employee Identification Projects",
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
    id: "northeast-tech-corporate",
    org: "Northeast Corporate Enterprise",
    location: "Guwahati, Assam",
    category: "employee",
    categoryLabel: "Employee Identification Projects",
    requirement: "Corporate employee identity setup with security access encoding",
    products: "30-Mil Edge-to-Edge PVC Cards + Custom Lanyards + Executive Holders",
    badge: "Employee Identification Projects",
    image: "/images/employee-id-card-printing-idgen.jpg",
    workflow: [
      "HR Roster Data",
      "High-Res Photos",
      "Corporate Branding",
      "Thermal Print",
      "Quality Check",
      "Dispatched",
    ],
    outcome:
      "Sleek corporate identity credentials delivered for employee onboarding across multiple office locations.",
  },
  {
    id: "ne-business-summit-event",
    org: "North-East Business & Trade Summit",
    location: "Guwahati, Assam",
    category: "event",
    categoryLabel: "Event Identification Projects",
    requirement: "Oversized VIP delegate badges and organizer identification credentials",
    products: "Oversized Event Passes + Dual-Hook Satin Lanyards",
    badge: "Event Identification Projects",
    image: "/images/event-card-printing-lanyard-idgen.jpg",
    workflow: [
      "Delegate Roster",
      "Category Color-Coding",
      "Fast Printing",
      "Dual-Hook Lanyard Assembly",
      "Express Delivery",
    ],
    outcome:
      "High-impact oversized event badges delivered on exact summit timeline with color-coded access tiers.",
  },
  {
    id: "guwahati-campus-rfid",
    org: "Smart Campus & University System",
    location: "Guwahati, Assam",
    category: "rfid",
    categoryLabel: "RFID Identification Projects",
    requirement: "Contactless smart RFID cards for automated attendance and turnstile access",
    products: "13.56MHz Mifare 1K Smart PVC Cards + Encoded Barcodes",
    badge: "RFID Identification Projects",
    image: "/images/bulk-rfid-card-printing.jpg",
    workflow: [
      "UID Chip Mapping",
      "Dye-Sub Printing",
      "Turnstile Testing",
      "Verification",
      "Dispatch",
    ],
    outcome:
      "Smart contactless RFID cards pre-encoded and synchronized with the campus attendance reader system.",
  },
  {
    id: "assam-sports-club-membership",
    org: "Assam Recreation & Sports Association",
    location: "Jorhat, Assam",
    category: "membership",
    categoryLabel: "Membership ID Card",
    requirement: "Premium membership credentials with QR verification and metallic finish",
    products: "Gold-Accent PVC Cards + QR Verification + Clear Holders",
    badge: "Membership ID Card",
    image: "/images/idgen-custom-membership-card-printing.jpg",
    workflow: [
      "Member Database",
      "QR Generation",
      "High-Gloss Print",
      "Inspection",
      "Express Delivery",
    ],
    outcome:
      "Durable, elegant membership cards featuring scannable QR codes for instant member verification.",
  },
  {
    id: "institutional-satin-lanyards",
    org: "Assam Educational Consortium",
    location: "Guwahati, Assam",
    category: "lanyards",
    categoryLabel: "Custom 20 mm Printed Lanyards",
    requirement: "20mm multi-color satin printed lanyards with ultrasonic welded ends",
    products: "20mm Satin Lanyards + Chrome Swivel Fish Hooks + Ultrasonic Sealing",
    badge: "Custom 20 mm Printed Lanyards",
    image: "/images/20mm-custom-printed-lanyard-branding.jpg",
    workflow: [
      "Vector Logo Setup",
      "Dye-Sublimation",
      "Ultrasonic Loop Welding",
      "Hardware Fitting",
      "Packaging",
    ],
    outcome:
      "Vibrant, non-fraying satin lanyards manufactured with exact Pantone color matching and heavy-duty hooks.",
  },
  {
    id: "apollo-medical-badges",
    org: "Healthcare & Medical Institute",
    location: "Guwahati, Assam",
    category: "badges",
    categoryLabel: "Acrylic Badges",
    requirement: "Laser-cut crystal acrylic name badges with magnetic backings for doctors",
    products: "Diamond-Beveled PMMA Acrylic Badges + Triple Neodymium Magnets",
    badge: "Acrylic Badges",
    image: "/images/product-acrylic-badges.jpg",
    workflow: [
      "Staff Registry",
      "Laser Cut PMMA",
      "1200 DPI Printing",
      "Magnetic Fitting",
      "QC Check",
    ],
    outcome:
      "Executive crystal-clear name badges delivered with zero garment damage magnetic clips.",
  },
  {
    id: "state-championship-medals",
    org: "Northeast Youth Sports Championship",
    location: "Guwahati, Assam",
    category: "medals",
    categoryLabel: "Medals",
    requirement: "3D high-relief die-cast metal honor medals with custom V-cut satin ribbons",
    products: "Die-Cast Zinc Medals (Gold/Silver/Bronze) + Custom Printed Ribbon",
    badge: "Medals",
    image: "/images/product-zinc-medals.jpg",
    workflow: [
      "3D Crest Sculpting",
      "Zinc Die-Casting",
      "Antique Plating",
      "V-Cut Ribbon Stitching",
      "Delivery",
    ],
    outcome:
      "Heavyweight 3D metal medals crafted in tri-tone finishes for championship award ceremonies.",
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

        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          Showing {filteredProjects.length} Verified Projects
        </div>
      </div>

      {/* ── Filter Pills for all 8 categories requested ── */}
      <div className="mt-6 flex flex-wrap items-center gap-2">
        {categoryFilters.map((cat) => (
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

            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950">
              <Image
                src={activeModalProject.image}
                alt={activeModalProject.org}
                fill
                className="object-cover"
              />
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
