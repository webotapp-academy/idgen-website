"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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

export function AdminLayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  const isLoginPage = pathname ? pathname.startsWith("/admin/login") : false;

  useEffect(() => {
    if (isLoginPage) {
      setIsAuthenticated(true);
      return;
    }

    // Check for session cookie client-side
    const hasSession = document.cookie.includes("idgen_admin_session");
    if (!hasSession) {
      setIsAuthenticated(false);
      router.push(`/admin/login/?from=${encodeURIComponent(pathname || "/admin/")}`);
    } else {
      setIsAuthenticated(true);
    }
  }, [pathname, isLoginPage, router]);

  // If this is the login page, render without sidebar
  if (isLoginPage) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-teal-500/30 flex items-center justify-center">
        {children}
      </div>
    );
  }

  // Waiting for client-side auth check
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="h-10 w-10 border-2 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs font-semibold text-slate-400">Verifying Admin Access...</p>
        </div>
      </div>
    );
  }

  if (isAuthenticated === false) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4">
        <div className="text-center space-y-4 max-w-sm">
          <div className="h-12 w-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto border border-rose-500/30">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <h2 className="text-lg font-bold text-white">Authentication Required</h2>
          <p className="text-xs text-slate-400">Please sign in to access the IDGen Admin Control Panel.</p>
          <Link
            href={`/admin/login/?from=${encodeURIComponent(pathname || "/admin/")}`}
            className="inline-block px-5 py-2.5 rounded-xl bg-teal-500 text-slate-950 font-bold text-xs hover:bg-teal-400 transition"
          >
            Go to Sign In
          </Link>
        </div>
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
        <nav className="p-3 flex-1 space-y-1 overflow-y-auto">
          <Link
            href="/admin/"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <LayoutDashboard className="h-4 w-4 text-slate-400 group-hover:text-teal-400 transition" />
            <span>Dashboard</span>
          </Link>

          <Link
            href="/admin/homepage/"
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
            href="/admin/why-idgen/"
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
            href="/admin/services/"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <Package className="h-4 w-4 text-teal-400 group-hover:scale-110 transition" />
            <div className="flex-1 flex items-center justify-between">
              <span>Services & Dropdown</span>
              <span className="text-[10px] bg-teal-950 text-teal-300 px-1.5 py-0.5 rounded-full border border-teal-800/40 font-bold">
                Dynamic
              </span>
            </div>
          </Link>

          <Link
            href="/admin/id-card-printing/"
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
            href="/admin/student-id-card-printing/"
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
            href="/admin/employee-id-card-printing/"
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
            href="/admin/custom-printed-lanyard-printing/"
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
            href="/admin/event-card-printing/"
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
            href="/admin/rfid-card-printing/"
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
            href="/admin/ultrasonic-sealing/"
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
            href="/admin/acrylic-badges/"
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
            href="/admin/pricing/"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <IndianRupee className="h-4 w-4 text-emerald-400 group-hover:scale-110 transition" />
            <div className="flex-1 flex items-center justify-between">
              <span>Pricing Catalog</span>
              <span className="text-[10px] bg-emerald-950 text-emerald-300 px-1.5 py-0.5 rounded-full border border-emerald-800/40 font-bold">
                Dynamic
              </span>
            </div>
          </Link>

          <Link
            href="/admin/case-studies/"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <Camera className="h-4 w-4 text-teal-400 group-hover:scale-110 transition" />
            <div className="flex-1 flex items-center justify-between">
              <span>Case Studies</span>
              <span className="text-[10px] bg-teal-950 text-teal-300 px-1.5 py-0.5 rounded-full border border-teal-800/40 font-bold">
                Dynamic
              </span>
            </div>
          </Link>

          <Link
            href="/admin/blogs/"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <Newspaper className="h-4 w-4 text-teal-400 group-hover:scale-110 transition" />
            <div className="flex-1 flex items-center justify-between">
              <span>Blogs Management</span>
              <span className="text-[10px] bg-teal-950 text-teal-300 px-1.5 py-0.5 rounded-full border border-teal-800/40 font-bold">
                Dynamic
              </span>
            </div>
          </Link>

          <Link
            href="/admin/templates/"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <FileSpreadsheet className="h-4 w-4 text-teal-400 group-hover:scale-110 transition" />
            <div className="flex-1 flex items-center justify-between">
              <span>Templates CMS</span>
              <span className="text-[10px] bg-teal-950 text-teal-300 px-1.5 py-0.5 rounded-full border border-teal-800/40 font-bold">
                Dynamic
              </span>
            </div>
          </Link>

          <Link
            href="/admin/partners/"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <Users className="h-4 w-4 text-teal-400 group-hover:scale-110 transition" />
            <div className="flex-1 flex items-center justify-between">
              <span>Partners CMS</span>
              <span className="text-[10px] bg-teal-950 text-teal-300 px-1.5 py-0.5 rounded-full border border-teal-800/40 font-bold">
                Dynamic
              </span>
            </div>
          </Link>

          <Link
            href="/admin/contact-us/"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <Phone className="h-4 w-4 text-teal-400 group-hover:scale-110 transition" />
            <div className="flex-1 flex items-center justify-between">
              <span>Contact Us CMS</span>
              <span className="text-[10px] bg-teal-950 text-teal-300 px-1.5 py-0.5 rounded-full border border-teal-800/40 font-bold">
                Dynamic
              </span>
            </div>
          </Link>

          <Link
            href="/admin/quotes/"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition group"
          >
            <FileText className="h-4 w-4 text-amber-400 group-hover:scale-110 transition" />
            <div className="flex-1 flex items-center justify-between">
              <span>CRM Lead Quotes</span>
              <span className="text-[10px] bg-amber-950 text-amber-300 px-1.5 py-0.5 rounded-full border border-amber-800/40 font-bold">
                Inquiries
              </span>
            </div>
          </Link>
        </nav>

        {/* User Session & Logout Footer */}
        <div className="p-3 border-t border-slate-800 bg-slate-900/60 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="h-8 w-8 rounded-xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-300 shrink-0">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <div className="truncate">
              <p className="text-xs font-bold text-slate-200 truncate">Administrator</p>
              <p className="text-[10px] text-teal-400/80 capitalize">Internal Access</p>
            </div>
          </div>

          <AdminLogoutButton />
        </div>
      </aside>

      {/* Main Admin View Content */}
      <main className="flex-1 overflow-y-auto min-h-screen bg-slate-950 p-4 sm:p-6 md:p-8 lg:p-10">
        {children}
      </main>
    </div>
  );
}
