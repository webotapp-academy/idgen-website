import React from "react";
import Link from "next/link";
import { getAllStates, getAllCities } from "@/lib/dynamic-locations";
import { getAllPricingItems } from "@/lib/dynamic-pricing";
import { getAdminSession } from "@/lib/auth";
import {
  MapPin,
  Building2,
  FileText,
  Users,
  ArrowRight,
  TrendingUp,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  IndianRupee,
  Boxes,
} from "lucide-react";

export default async function AdminDashboardPage() {
  const session = await getAdminSession();
  const states = getAllStates();
  const allCitiesList = getAllCities();
  const pricingItems = getAllPricingItems(true);

  const primaryCities = allCitiesList.filter((item) => item.city.isPrimary);
  const totalFaqs = allCitiesList.reduce((acc, curr) => acc + (curr.city.faqs?.length || 0), 0);
  const activePricingCount = pricingItems.filter((i) => i.isActive).length;

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Top Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-teal-950/60 border border-slate-800 p-6 sm:p-8">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold mb-3">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>IDGen Secure System Connected</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Welcome back, {session?.username || "Administrator"}
            </h1>
            <p className="mt-1.5 text-sm text-slate-400 max-w-2xl">
              Control dynamic pricing &amp; holder models (V-1, H-1, V-2), manage dynamic service areas, and track institutional quote requests in real time.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/admin/pricing"
              className="px-5 py-2.5 rounded-xl bg-teal-500 text-slate-950 font-bold text-xs hover:bg-teal-400 shadow-lg shadow-teal-500/20 transition flex items-center gap-2"
            >
              <IndianRupee className="h-4 w-4" />
              <span>Manage Pricing Engine</span>
            </Link>
            <Link
              href="/admin/service-areas"
              className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-200 font-semibold text-xs hover:bg-slate-700 transition flex items-center gap-1.5 border border-slate-700"
            >
              <MapPin className="h-4 w-4 text-teal-400" />
              <span>Service Areas</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-teal-800/40 shadow-sm bg-gradient-to-br from-slate-900 to-teal-950/20">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-teal-300">Dynamic Pricing Rates</span>
            <div className="h-8 w-8 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center">
              <IndianRupee className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-3 text-2xl sm:text-3xl font-black text-white">{activePricingCount} Live</p>
          <Link href="/admin/pricing" className="mt-1 text-[11px] text-teal-300 hover:underline flex items-center gap-1">
            <span>V-1, H-1, V-2 Models active →</span>
          </Link>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">State Categories</span>
            <div className="h-8 w-8 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center">
              <MapPin className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-3 text-2xl sm:text-3xl font-black text-white">{states.length}</p>
          <p className="mt-1 text-[11px] text-teal-400 flex items-center gap-1">
            <TrendingUp className="h-3 w-3" />
            <span>All 8 Northeast States active</span>
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Dynamic Cities</span>
            <div className="h-8 w-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Building2 className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-3 text-2xl sm:text-3xl font-black text-white">{allCitiesList.length}</p>
          <p className="mt-1 text-[11px] text-emerald-400">
            {primaryCities.length} Primary Base (Guwahati)
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Quote Requests</span>
            <div className="h-8 w-8 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
              <FileText className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-3 text-2xl sm:text-3xl font-black text-white">2 New</p>
          <Link href="/admin/quotes" className="mt-1 text-[11px] text-cyan-400 hover:underline inline-block">
            View recent leads →
          </Link>
        </div>
      </div>

      {/* Dynamic Service Area Highlights */}
      <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white">Operational Service Categories</h2>
            <p className="text-xs text-slate-400">
              State hubs and dynamic sub-category cities currently active across the platform.
            </p>
          </div>
          <Link
            href="/admin/service-areas"
            className="inline-flex items-center gap-1 text-xs font-bold text-teal-400 hover:underline"
          >
            <span>Open Category & City Editor</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {states.map((st) => (
            <div
              key={st.slug}
              className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-slate-200">{st.name}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-teal-300 font-semibold">
                  {st.cities.length} Cities
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {st.cities.slice(0, 4).map((c) => (
                  <Link
                    key={c.slug}
                    href={`/service-areas/${st.slug}/${c.slug}/`}
                    target="_blank"
                    className="text-[10px] px-2 py-0.5 rounded-md bg-slate-900 text-slate-300 hover:text-teal-300 border border-slate-800 hover:border-teal-500/30 transition"
                  >
                    {c.name} {c.isPrimary && "★"}
                  </Link>
                ))}
                {st.cities.length > 4 && (
                  <span className="text-[10px] px-1.5 py-0.5 text-slate-500">
                    +{st.cities.length - 4} more
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Guwahati Showcase Spotlight */}
      <div className="rounded-3xl bg-gradient-to-br from-teal-950/40 via-slate-900 to-slate-900 border border-teal-800/30 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-400 bg-teal-500/10 px-2.5 py-1 rounded-full border border-teal-500/20">
            <span>Primary Manufacturing Hub</span>
          </div>
          <h3 className="text-xl font-bold text-white">Guwahati City Dynamic Page</h3>
          <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
            Loaded with the full specification from <code className="text-teal-300 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">guwahati.md</code>: Local Partner section, Organizations Served, Complete Setup Packages, Bulk Guidelines, 8-Stage Order Process, 10+ Guwahati FAQs, and local coverage areas.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 shrink-0">
          <Link
            href="/admin/service-areas"
            className="px-4 py-2 rounded-xl bg-teal-500 text-slate-950 font-bold text-xs hover:bg-teal-400 transition"
          >
            Edit Guwahati Content
          </Link>
          <Link
            href="/service-areas/assam/guwahati/"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-slate-800 text-slate-200 font-semibold text-xs hover:bg-slate-700 transition flex items-center gap-1 border border-slate-700"
          >
            <span>View Public Page</span>
            <ExternalLink className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
