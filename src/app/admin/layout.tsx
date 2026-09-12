import React from "react";
import Link from "next/link";
import { getAdminSession } from "@/lib/auth";
import { AdminLogoutButton } from "@/components/admin/AdminLogoutButton";
import {
  MapPin,
  LayoutDashboard,
  FileText,
  Users,
  ExternalLink,
  LogOut,
  ShieldCheck,
  Building2,
  IndianRupee,
  Newspaper,
  Cpu,
  Briefcase,
  Camera,
  Sparkles,
  Award,
  Package,
  GraduationCap,
  Tag,
  Ticket,
  Radio,
  Waves,
  Layers,
  Link2,
  Shield,
  CreditCard,
  Laptop,
  BookOpen,
  HelpCircle,
  FileSpreadsheet,
  Phone,
} from "lucide-react";

export const metadata = {
  title: "IDGen Admin Control Panel",
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getAdminSession();

  // Without login, do not show any sidebar
  if (!session) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-teal-500/30 flex items-center justify-center">
        {children}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row antialiased selection:bg-teal-500/30">
      {/* Sidebar navigation */}
      <aside className="w-full md:w-64 bg-slate-900/90 border-b md:border-b-0 md:border-r border-slate-800 flex flex-col shrink-0">
        {/* Brand Header */}
        <div className="p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-teal-500 to-emerald-400 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-teal-500/20">
              ID
            </div>
            <div>
              <div className="font-bold text-sm tracking-wide flex items-center gap-1.5 text-white">
                IDGen Admin
                <span className="text-[10px] font-semibold uppercase bg-teal-500/20 text-teal-300 px-1.5 py-0.5 rounded border border-teal-500/30">
                  Secure
                </span>
              </div>
              <p className="text-[11px] text-slate-400">Control Panel v2.6</p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="p-3 flex-1 space-y-1">
          <Link
            href="/admin"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <LayoutDashboard className="h-4 w-4 text-slate-400 group-hover:text-teal-400 transition" />
            <span>Dashboard</span>
          </Link>

          <Link
            href="/admin/homepage"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <Sparkles className="h-4 w-4 text-teal-400 group-hover:scale-110 transition" />
            <div className="flex-1 flex items-center justify-between">
              <span>Home Page</span>
              <span className="text-[10px] bg-teal-950 text-teal-300 px-1.5 py-0.5 rounded-full border border-teal-800/40 font-bold">
                Dynamic
              </span>
            </div>
          </Link>

          <Link
            href="/admin/why-idgen"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <Award className="h-4 w-4 text-teal-400 group-hover:scale-110 transition" />
            <div className="flex-1 flex items-center justify-between">
              <span>Why IDGen</span>
              <span className="text-[10px] bg-teal-950 text-teal-300 px-1.5 py-0.5 rounded-full border border-teal-800/40 font-bold">
                Dynamic
              </span>
            </div>
          </Link>

          <Link
            href="/admin/services"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <Package className="h-4 w-4 text-teal-400 group-hover:scale-110 transition" />
            <div className="flex-1 flex items-center justify-between">
              <span>Services &amp; Dropdown</span>
              <span className="text-[10px] bg-teal-950 text-teal-300 px-1.5 py-0.5 rounded-full border border-teal-800/40 font-bold">
                Dynamic
              </span>
            </div>
          </Link>

          <Link
            href="/admin/id-card-printing"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <ShieldCheck className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition" />
            <div className="flex-1 flex items-center justify-between">
              <span>ID Card Printing</span>
              <span className="text-[10px] bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded-full border border-cyan-800/40 font-bold">
                Dynamic
              </span>
            </div>
          </Link>

          <Link
            href="/admin/student-id-card-printing"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <GraduationCap className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition" />
            <div className="flex-1 flex items-center justify-between">
              <span>Student ID Cards</span>
              <span className="text-[10px] bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded-full border border-cyan-800/40 font-bold">
                Dynamic
              </span>
            </div>
          </Link>

          <Link
            href="/admin/employee-id-card-printing"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <Briefcase className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition" />
            <div className="flex-1 flex items-center justify-between">
              <span>Employee ID Cards</span>
              <span className="text-[10px] bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded-full border border-cyan-800/40 font-bold">
                Dynamic
              </span>
            </div>
          </Link>

          <Link
            href="/admin/custom-printed-lanyard-printing"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <Tag className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition" />
            <div className="flex-1 flex items-center justify-between">
              <span>Custom Lanyards</span>
              <span className="text-[10px] bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded-full border border-cyan-800/40 font-bold">
                Dynamic
              </span>
            </div>
          </Link>

          <Link
            href="/admin/event-card-printing"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <Ticket className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition" />
            <div className="flex-1 flex items-center justify-between">
              <span>Event Cards</span>
              <span className="text-[10px] bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded-full border border-cyan-800/40 font-bold">
                Dynamic
              </span>
            </div>
          </Link>

          <Link
            href="/admin/rfid-card-printing"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <Radio className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition" />
            <div className="flex-1 flex items-center justify-between">
              <span>RFID Cards</span>
              <span className="text-[10px] bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded-full border border-cyan-800/40 font-bold">
                Dynamic
              </span>
            </div>
          </Link>

          <Link
            href="/admin/ultrasonic-sealing"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <Waves className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition" />
            <div className="flex-1 flex items-center justify-between">
              <span>Ultrasonic Sealing</span>
              <span className="text-[10px] bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded-full border border-cyan-800/40 font-bold">
                Dynamic
              </span>
            </div>
          </Link>

          <Link
            href="/admin/id-card-holders"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <Layers className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition" />
            <div className="flex-1 flex items-center justify-between">
              <span>ID Card Holders</span>
              <span className="text-[10px] bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded-full border border-cyan-800/40 font-bold">
                Dynamic
              </span>
            </div>
          </Link>

          <Link
            href="/admin/id-card-hooks"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <Link2 className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition" />
            <div className="flex-1 flex items-center justify-between">
              <span>ID Card Hooks</span>
              <span className="text-[10px] bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded-full border border-cyan-800/40 font-bold">
                Dynamic
              </span>
            </div>
          </Link>

          <Link
            href="/admin/acrylic-badges"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <Shield className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition" />
            <div className="flex-1 flex items-center justify-between">
              <span>Acrylic Badges</span>
              <span className="text-[10px] bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded-full border border-cyan-800/40 font-bold">
                Dynamic
              </span>
            </div>
          </Link>

          <Link
            href="/admin/zinc-medals"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <Award className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition" />
            <div className="flex-1 flex items-center justify-between">
              <span>Zinc Medals</span>
              <span className="text-[10px] bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded-full border border-cyan-800/40 font-bold">
                Dynamic
              </span>
            </div>
          </Link>

          <Link
            href="/admin/pvc-cards"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <CreditCard className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition" />
            <div className="flex-1 flex items-center justify-between">
              <span>PVC Cards</span>
              <span className="text-[10px] bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded-full border border-cyan-800/40 font-bold">
                Dynamic
              </span>
            </div>
          </Link>

          <Link
            href="/admin/idgen-studio"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group bg-cyan-950/20 border border-cyan-500/20"
          >
            <Laptop className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition" />
            <div className="flex-1 flex items-center justify-between">
              <span>IDGen Studio</span>
              <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded-full border border-cyan-500/30 font-bold">
                Dynamic
              </span>
            </div>
          </Link>

          <Link
            href="/admin/membership-card-printing"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <Award className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition" />
            <div className="flex-1 flex items-center justify-between">
              <span>Membership Cards</span>
              <span className="text-[10px] bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded-full border border-cyan-800/40 font-bold">
                Dynamic
              </span>
            </div>
          </Link>

          <Link
            href="/admin/pricing"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <IndianRupee className="h-4 w-4 text-teal-400 group-hover:scale-110 transition" />
            <div className="flex-1 flex items-center justify-between">
              <span>Pricing Engine</span>
              <span className="text-[10px] bg-teal-950 text-teal-300 px-1.5 py-0.5 rounded-full border border-teal-800/40">
                Dynamic
              </span>
            </div>
          </Link>

          <Link
            href="/admin/pricing?section=specs"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <Cpu className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition" />
            <div className="flex-1 flex items-center justify-between">
              <span>Technical Specs</span>
              <span className="text-[10px] bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded-full border border-cyan-800/40">
                Dynamic
              </span>
            </div>
          </Link>

          <Link
            href="/admin/service-areas"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <MapPin className="h-4 w-4 text-teal-400 group-hover:scale-110 transition" />
            <div className="flex-1 flex items-center justify-between">
              <span>Service Areas</span>
              <span className="text-[10px] bg-teal-950 text-teal-300 px-1.5 py-0.5 rounded-full border border-teal-800/40">
                Dynamic
              </span>
            </div>
          </Link>

          <Link
            href="/admin/case-studies"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <Camera className="h-4 w-4 text-teal-400 group-hover:scale-110 transition" />
            <div className="flex-1 flex items-center justify-between">
              <span>Delivered Projects</span>
              <span className="text-[10px] bg-teal-950 text-teal-300 px-1.5 py-0.5 rounded-full border border-teal-800/40">
                Dynamic
              </span>
            </div>
          </Link>

          <Link
            href="/admin/blogs"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <Newspaper className="h-4 w-4 text-teal-400 group-hover:scale-110 transition" />
            <div className="flex-1 flex items-center justify-between">
              <span>Blogs &amp; Articles</span>
              <span className="text-[10px] bg-teal-950 text-teal-300 px-1.5 py-0.5 rounded-full border border-teal-800/40">
                Dynamic
              </span>
            </div>
          </Link>

          <Link
            href="/admin/guides"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <BookOpen className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition" />
            <div className="flex-1 flex items-center justify-between">
              <span>Guides &amp; Resources</span>
              <span className="text-[10px] bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded-full border border-cyan-800/40 font-bold">
                Dynamic
              </span>
            </div>
          </Link>

          <Link
            href="/admin/templates"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <FileSpreadsheet className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition" />
            <div className="flex-1 flex items-center justify-between">
              <span>Templates &amp; Schemas</span>
              <span className="text-[10px] bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded-full border border-cyan-800/40 font-bold">
                Dynamic
              </span>
            </div>
          </Link>

          <Link
            href="/admin/faq"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <HelpCircle className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition" />
            <div className="flex-1 flex items-center justify-between">
              <span>FAQ Knowledge Base</span>
              <span className="text-[10px] bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded-full border border-cyan-800/40 font-bold">
                Dynamic
              </span>
            </div>
          </Link>

          <Link
            href="/admin/quotes"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <FileText className="h-4 w-4 text-slate-400 group-hover:text-teal-400 transition" />
            <span>Quote Requests</span>
          </Link>

          <Link
            href="/admin/partners"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <Users className="h-4 w-4 text-slate-400 group-hover:text-teal-400 transition" />
            <div className="flex-1 flex items-center justify-between">
              <span>Partner Inquiries</span>
              <span className="text-[10px] bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded-full border border-cyan-800/40 font-bold">
                Dynamic
              </span>
            </div>
          </Link>

          <Link
            href="/admin/contact-us"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <Phone className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition" />
            <div className="flex-1 flex items-center justify-between">
              <span>Contact Us</span>
              <span className="text-[10px] bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded-full border border-cyan-800/40 font-bold">
                Dynamic
              </span>
            </div>
          </Link>

          <div className="pt-4 mt-4 border-t border-slate-800">
            <span className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Live Preview
            </span>
            <Link
              href="/"
              target="_blank"
              className="mt-2 flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 transition group"
            >
              <Sparkles className="h-4 w-4 text-slate-500 group-hover:text-teal-400 transition" />
              <span>Public Home Page</span>
              <ExternalLink className="h-3 w-3 ml-auto opacity-60" />
            </Link>

            <Link
              href="/why-idgen/"
              target="_blank"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 transition group"
            >
              <Award className="h-4 w-4 text-slate-500 group-hover:text-teal-400 transition" />
              <span>Why IDGen Live</span>
              <ExternalLink className="h-3 w-3 ml-auto opacity-60" />
            </Link>

            <Link
              href="/case-studies/#project-gallery"
              target="_blank"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 transition group"
            >
              <Briefcase className="h-4 w-4 text-slate-500 group-hover:text-teal-400 transition" />
              <span>Delivered Projects Live</span>
              <ExternalLink className="h-3 w-3 ml-auto opacity-60" />
            </Link>

            <Link
              href="/pricing/"
              target="_blank"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 transition group"
            >
              <IndianRupee className="h-4 w-4 text-slate-500 group-hover:text-teal-400 transition" />
              <span>Public Pricing Page</span>
              <ExternalLink className="h-3 w-3 ml-auto opacity-60" />
            </Link>

            <Link
              href="/service-areas/assam/guwahati/"
              target="_blank"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 transition group"
            >
              <Building2 className="h-4 w-4 text-slate-500 group-hover:text-teal-400 transition" />
              <span>Guwahati City Live</span>
              <ExternalLink className="h-3 w-3 ml-auto opacity-60" />
            </Link>

            <Link
              href="/service-areas/assam/"
              target="_blank"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 transition group"
            >
              <MapPin className="h-4 w-4 text-slate-500 group-hover:text-teal-400 transition" />
              <span>Service Areas Hub</span>
              <ExternalLink className="h-3 w-3 ml-auto opacity-60" />
            </Link>

            <Link
              href="/resources/guides/"
              target="_blank"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 transition group"
            >
              <BookOpen className="h-4 w-4 text-slate-500 group-hover:text-teal-400 transition" />
              <span>Guides Hub Live</span>
              <ExternalLink className="h-3 w-3 ml-auto opacity-60" />
            </Link>

            <Link
              href="/faq/"
              target="_blank"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 transition group"
            >
              <HelpCircle className="h-4 w-4 text-slate-500 group-hover:text-teal-400 transition" />
              <span>FAQ Hub Live</span>
              <ExternalLink className="h-3 w-3 ml-auto opacity-60" />
            </Link>
          </div>
        </nav>

        {/* User Session & Logout Footer */}
        {session && (
          <div className="p-3 border-t border-slate-800 bg-slate-900/60 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="h-8 w-8 rounded-xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-300 shrink-0">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div className="truncate">
                <p className="text-xs font-bold text-slate-200 truncate">{session.username}</p>
                <p className="text-[10px] text-teal-400/80 capitalize">{session.role}</p>
              </div>
            </div>

            <AdminLogoutButton />
          </div>
        )}
      </aside>

      {/* Main Admin View Content */}
      <main className="flex-1 overflow-y-auto min-h-screen bg-slate-950 p-4 sm:p-6 md:p-8 lg:p-10">
        {children}
      </main>
    </div>
  );
}
