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


      {/* Main Footer Container */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-16">
        
        {/* Tier 1: Links Catalogs & Location Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start border-b border-white/10 pb-12 mb-12">
          
          {/* Column 1: Products */}
          <div className="lg:col-span-3">
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

          {/* Column 2: Services */}
          <div className="lg:col-span-3">
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

          {/* Column 3: Northwest Areas */}
          <div className="lg:col-span-3">
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

          {/* Column 4: Location Map */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold tracking-widest text-cyan-400 uppercase flex items-center gap-2 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Our Location
            </h3>
            
            <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 p-1 transition-all duration-500 hover:border-cyan-500/30 w-full h-[180px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.478822006423!2d91.74225507541439!3d26.179842077091585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5b0ec266ccb3%3A0x574f9be299885e5b!2siDGen!5e1!3m2!1sen!2sin!4v1787376536957!5m2!1sen!2sin" 
                className="w-full h-full rounded-lg opacity-80 hover:opacity-100 transition-opacity duration-300"
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Tier 2: Brand & Horizontal Contact Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Brand & Socials (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Link href="/" className="inline-block group">
              <IdgenLogo variant="dark" size="lg" withTagline={true} />
            </Link>
            <p className="text-xs leading-relaxed text-slate-400 max-w-md">
              {SITE.description}
            </p>
            {/* Social Links Row (Official Brand Icons) */}
            <div className="mt-4 flex items-center gap-3.5">
              {SITE.social.facebook && (
                <a 
                  href={SITE.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white hover:scale-110 active:scale-95 transition-all shadow-md shadow-blue-500/20"
                  aria-label="Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.52-.14-2.71-.14-2.85 0-4.79 1.74-4.79 4.93v2.57H7v4h3V22h4v-8.5z"/>
                  </svg>
                </a>
              )}
              {SITE.social.instagram && (
                <a 
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white hover:scale-110 active:scale-95 transition-all shadow-md shadow-pink-500/20"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              )}
              {SITE.social.youtube && (
                <a 
                  href={SITE.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF0000] text-white hover:scale-110 active:scale-95 transition-all shadow-md shadow-red-500/20"
                  aria-label="YouTube"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              )}
              {SITE.whatsapp && (
                <a 
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white hover:scale-110 active:scale-95 transition-all shadow-md shadow-emerald-500/20"
                  aria-label="WhatsApp"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.477-.15-.678.15-.2.3-.778.979-.954 1.179-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.5-1.786-1.677-2.087-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.502.101-.2.05-.376-.025-.526-.075-.15-.678-1.633-.929-2.235-.245-.587-.494-.507-.678-.517-.175-.01-.376-.01-.577-.01-.2 0-.527.075-.803.376s-1.054 1.029-1.054 2.51c0 1.481 1.079 2.91 1.229 3.11.151.201 2.124 3.243 5.145 4.549.719.31 1.281.496 1.719.635.722.23 1.379.197 1.898.12.578-.086 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.351zm-5.467 7.618h-.008a10.04 10.04 0 0 1-5.117-1.396l-.367-.218-3.805.998 1.016-3.71-.239-.38a10.024 10.024 0 0 1-1.536-5.321c.002-5.539 4.51-10.044 10.052-10.044a10.005 10.005 0 0 1 7.106 2.946 9.99 9.99 0 0 1 2.94 7.103c-.002 5.541-4.51 10.046-10.042 10.046zM20.52 3.48A11.934 11.934 0 0 0 12.008 0C5.396 0 .025 5.371.023 11.984a11.94 11.94 0 0 0 1.637 6.012L0 24l6.195-1.625a11.944 11.944 0 0 0 5.808 1.503h.005c6.61 0 11.982-5.372 11.985-11.987a11.92 11.92 0 0 0-3.473-8.411z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Contact Details Grid (lg:col-span-7) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Address */}
            <div className="flex flex-col gap-2 p-4 rounded-xl bg-white/[0.03] border border-white/5 shadow-inner">
              <div className="flex items-center gap-2 text-cyan-400">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                  <MapPin className="h-3.5 w-3.5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Address</span>
              </div>
              <p className="text-xs text-slate-200 font-semibold leading-relaxed mt-1">
                {SITE.address}
              </p>
            </div>

            {/* Phone */}
            <a 
              href={`tel:${SITE.phone}`} 
              className="flex flex-col gap-2 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all shadow-inner group"
            >
              <div className="flex items-center gap-2 text-cyan-400">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                  <Phone className="h-3.5 w-3.5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Phone</span>
              </div>
              <span className="text-xs text-slate-200 font-semibold group-hover:text-cyan-300 transition-colors mt-1">
                +91 {SITE.phone.replace("+91", "")}
              </span>
            </a>

            {/* Email */}
            <a 
              href={`mailto:${SITE.email}`}
              className="flex flex-col gap-2 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all shadow-inner group"
            >
              <div className="flex items-center gap-2 text-cyan-400">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                  <Mail className="h-3.5 w-3.5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Email</span>
              </div>
              <span className="text-xs text-slate-200 font-semibold group-hover:text-cyan-300 transition-colors truncate mt-1">
                {SITE.email}
              </span>
            </a>
          </div>
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

