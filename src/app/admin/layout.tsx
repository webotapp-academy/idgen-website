import React from "react";
import Link from "next/link";
import { getAdminSession } from "@/lib/auth";
import {
  MapPin,
  LayoutDashboard,
  FileText,
  Users,
  ExternalLink,
  LogOut,
  ShieldCheck,
  Building2,
} from "lucide-react";

export const metadata = {
  title: "IDGen Admin Control Panel",
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getAdminSession();

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
            <span>Partner Inquiries</span>
          </Link>

          <div className="pt-4 mt-4 border-t border-slate-800">
            <span className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Live Preview
            </span>
            <Link
              href="/service-areas/assam/guwahati/"
              target="_blank"
              className="mt-2 flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 transition group"
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
          </div>
        </nav>

        {/* User Session & Logout Footer */}
        {session && (
          <div className="p-3 border-t border-slate-800 bg-slate-900/60 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="h-7 w-7 rounded-lg bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-300">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div className="truncate">
                <p className="text-xs font-bold text-slate-200 truncate">{session.username}</p>
                <p className="text-[10px] text-teal-400/80 capitalize">{session.role}</p>
              </div>
            </div>

            <form action="/api/admin/auth" method="POST">
              <input type="hidden" name="action" value="logout" />
              <button
                type="submit"
                title="Sign out"
                className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </form>
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
