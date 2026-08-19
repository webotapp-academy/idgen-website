"use client";

import Link from "next/link";
import { 
  Mail, 
  MapPin, 
  Phone, 
  ArrowUp, 
  MessageSquare, 
  Sparkles, 
  Truck, 
  ShieldCheck, 
  Award, 
  Factory, 
  ArrowRight,
  Layers,
  Box,
  Tag,
  CreditCard
} from "lucide-react";
import { FOOTER_LINKS, SITE } from "@/data/site";
import { IdgenLogo } from "@/components/ui/IdgenLogo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/15 bg-[#030712] text-slate-300">
      {/* Top glowing ambient gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[800px] rounded-full bg-cyan-500/10 blur-[160px]"
        aria-hidden="true"
      />

      {/* Top Call to Action Bar */}
      <div className="border-b border-white/10 bg-white/[0.02] backdrop-blur-xl py-10 px-5 sm:px-8">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-6 rounded-3xl border border-white/15 bg-gradient-to-r from-[#091527]/90 via-[#0a1b33]/90 to-[#091527]/90 p-6 sm:p-8 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
              <Factory className="h-7 w-7" />
            </div>
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                Guwahati Direct Factory
              </span>
              <h3 className="mt-1 text-xl sm:text-2xl font-extrabold text-white">
                Need Bulk ID Cards, Lanyards or Custom Medals?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Direct factory manufacturing, 10,000+ daily capacity & fast 24–48h dispatch across all 8 NE states.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/919207012084?text=Hi%20IDGen%20Team%2C%20I%20would%20like%20to%20inquire%20about%20ID%20card%20and%20lanyard%20printing."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-950/60 px-5 py-3 text-xs font-bold text-emerald-300 shadow-lg hover:bg-emerald-900/80 hover:border-emerald-400 transition-all hover:scale-105"
            >
              <MessageSquare className="h-4 w-4 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>

            <Link
              href="/request-a-quote/"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-xs font-extrabold text-slate-950 shadow-xl shadow-cyan-500/25 hover:bg-accent-hover hover:text-white transition-all hover:scale-105 btn-glow"
            >
              <Sparkles className="h-4 w-4" />
              <span>Get Wholesale Quote</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links Grid */}
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 py-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {/* Column 1: Brand & Contact */}
        <div className="lg:col-span-1">
          <Link href="/" className="inline-block group">
            <IdgenLogo variant="dark" size="lg" withTagline={true} />
          </Link>
          
          <p className="mt-4 text-xs leading-relaxed text-slate-400">
            {SITE.description}
          </p>

          <div className="mt-6 space-y-2.5 text-xs">
            <div className="flex items-center gap-2.5 text-slate-300">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 shrink-0">
                <MapPin className="h-3.5 w-3.5" />
              </div>
              <span className="font-semibold">{SITE.hqCity}, {SITE.hqState} — India</span>
            </div>

            <a 
              href="https://wa.me/919207012084" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-slate-300 hover:text-cyan-300 transition-colors group"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 shrink-0 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                <Phone className="h-3.5 w-3.5" />
              </div>
              <span className="font-semibold">+91 92070 12084</span>
            </a>
          </div>
        </div>

        {/* Column 2: Products Catalog */}
        <div>
          <h3 className="text-xs font-bold tracking-widest text-cyan-400 uppercase flex items-center gap-2 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Products Catalog
          </h3>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/id-card-holders/" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                <span className="text-cyan-500/50">•</span> ID Card Holders & Cases
              </Link>
            </li>
            <li>
              <Link href="/id-card-hooks/" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                <span className="text-cyan-500/50">•</span> ID Card & Lanyard Hooks
              </Link>
            </li>
            <li>
              <Link href="/acrylic-badges/" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                <span className="text-cyan-500/50">•</span> Acrylic Badges & Pins
              </Link>
            </li>
            <li>
              <Link href="/zinc-medals/" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                <span className="text-cyan-500/50">•</span> Custom Zinc Medals
              </Link>
            </li>
            <li>
              <Link href="/pvc-cards/" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                <span className="text-cyan-500/50">•</span> 30-Mil PVC Smart Cards
              </Link>
            </li>
            <li>
              <Link href="/event-card-printing/" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                <span className="text-cyan-500/50">•</span> Event Badges & Passes
              </Link>
            </li>
            <li className="pt-1">
              <Link href="/products/" className="font-bold text-cyan-300 hover:underline inline-flex items-center gap-1">
                View All Products →
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Custom Services */}
        <div>
          <h3 className="text-xs font-bold tracking-widest text-cyan-400 uppercase flex items-center gap-2 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Printing Services
          </h3>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/id-card-printing/" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                <span className="text-cyan-500/50">•</span> ID Card Printing
              </Link>
            </li>
            <li>
              <Link href="/student-id-card-printing/" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                <span className="text-cyan-500/50">•</span> Student ID Cards
              </Link>
            </li>
            <li>
              <Link href="/employee-id-card-printing/" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                <span className="text-cyan-500/50">•</span> Employee ID Cards
              </Link>
            </li>
            <li>
              <Link href="/custom-printed-lanyard-printing/" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                <span className="text-cyan-500/50">•</span> Custom Printed Lanyards
              </Link>
            </li>
            <li>
              <Link href="/rfid-card-printing/" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                <span className="text-cyan-500/50">•</span> RFID Smart Card Printing
              </Link>
            </li>
            <li>
              <Link href="/ultrasonic-sealing/" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                <span className="text-cyan-500/50">•</span> Ultrasonic Sealing
              </Link>
            </li>
            <li className="pt-1">
              <Link href="/services/" className="font-bold text-cyan-300 hover:underline inline-flex items-center gap-1">
                View All Services →
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Service Areas */}
        <div>
          <h3 className="text-xs font-bold tracking-widest text-cyan-400 uppercase flex items-center gap-2 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Northeast Delivery
          </h3>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/service-areas/assam/" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                <span className="text-cyan-500/50">•</span> Assam (Guwahati Hub)
              </Link>
            </li>
            <li>
              <Link href="/service-areas/meghalaya/" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                <span className="text-cyan-500/50">•</span> Meghalaya (Shillong)
              </Link>
            </li>
            <li>
              <Link href="/service-areas/arunachal-pradesh/" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                <span className="text-cyan-500/50">•</span> Arunachal Pradesh
              </Link>
            </li>
            <li>
              <Link href="/service-areas/nagaland/" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                <span className="text-cyan-500/50">•</span> Nagaland (Dimapur)
              </Link>
            </li>
            <li>
              <Link href="/service-areas/manipur/" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                <span className="text-cyan-500/50">•</span> Manipur (Imphal)
              </Link>
            </li>
            <li>
              <Link href="/service-areas/mizoram/" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                <span className="text-cyan-500/50">•</span> Mizoram / Tripura / Sikkim
              </Link>
            </li>
            <li className="pt-1">
              <Link href="/service-areas/" className="font-bold text-cyan-300 hover:underline">
                All 8 States Hub →
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 5: Company & Legal */}
        <div>
          <h3 className="text-xs font-bold tracking-widest text-cyan-400 uppercase flex items-center gap-2 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Company & Resources
          </h3>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/why-idgen/" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                <span className="text-cyan-500/50">•</span> Why IDGen Factory
              </Link>
            </li>
            <li>
              <Link href="/idgen-studio/" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                <span className="text-cyan-500/50">•</span> IDGen Studio Software
              </Link>
            </li>
            <li>
              <Link href="/pricing/" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                <span className="text-cyan-500/50">•</span> Wholesale Pricing
              </Link>
            </li>
            <li>
              <Link href="/partners/" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                <span className="text-cyan-500/50">•</span> Partner Program
              </Link>
            </li>
            <li>
              <Link href="/faq/" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                <span className="text-cyan-500/50">•</span> Frequently Asked Questions
              </Link>
            </li>
            {FOOTER_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span className="text-cyan-500/50">•</span> {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Trust Badges Strip */}
      <div className="border-t border-b border-white/10 bg-white/[0.01] py-4 px-5 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-[11px] font-medium text-slate-400">
          <div className="flex items-center gap-2">
            <Factory className="h-4 w-4 text-cyan-400" />
            <span>Guwahati Industrial Production Hub</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>100% Quality Inspected Credentials</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="h-4 w-4 text-accent" />
            <span>24–48 Hour Express Dispatch</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-purple-400" />
            <span>Trusted by 500+ Institutions</span>
          </div>
        </div>
      </div>

      {/* Bottom Legal Copyright Bar */}
      <div className="relative px-5 sm:px-8 py-5 text-xs text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>&copy; {new Date().getFullYear()} IDGen. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-cyan-300 font-semibold text-[11px]">
              Identity Solutions, Simplified — Guwahati, Assam
            </span>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 transition-all hover:bg-cyan-500 hover:text-slate-950 hover:scale-110 shadow-lg"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

