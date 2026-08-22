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
            {/* Social Links Row (Original Branded Icons) */}
            <div className="mt-4 flex items-center gap-3.5">
              {SITE.social.facebook && (
                <a 
                  href={SITE.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1877F2] text-white hover:scale-110 active:scale-95 transition-all shadow-md shadow-blue-500/10"
                  aria-label="Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              )}
              {SITE.social.instagram && (
                <a 
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white hover:scale-110 active:scale-95 transition-all shadow-md shadow-pink-500/10"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16.113 11.44a5 5 0 1 1-7.143-7.14 5 5 0 0 1 7.143 7.14Z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
              )}
              {SITE.social.youtube && (
                <a 
                  href={SITE.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF0000] text-white hover:scale-110 active:scale-95 transition-all shadow-md shadow-red-500/10"
                  aria-label="YouTube"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/></svg>
                </a>
              )}
              {SITE.whatsapp && (
                <a 
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white hover:scale-110 active:scale-95 transition-all shadow-md shadow-emerald-500/10"
                  aria-label="WhatsApp"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5" xmlns="http://www.w3.org/2000/svg"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.636-1.023-5.11-2.884-6.974-1.862-1.865-4.343-2.891-6.986-2.892-5.44 0-9.865 4.421-9.868 9.866-.001 1.77.462 3.5 1.341 5.022l-.973 3.55 3.685-.959zm10.743-7.51c-.26-.13-1.536-.759-1.773-.846-.237-.087-.41-.13-.58.13-.17.26-.658.823-.808.997-.15.174-.3.195-.56.065-.26-.13-1.098-.405-2.091-1.293-.772-.688-1.293-1.539-1.445-1.8-.15-.26-.016-.4.113-.529.117-.117.26-.304.39-.456.13-.152.173-.26.26-.434.087-.174.043-.326-.021-.456-.065-.13-.58-1.399-.795-1.921-.21-.506-.442-.437-.607-.437-.157-.004-.336-.004-.515-.004-.18 0-.472.067-.719.336-.247.269-.942.922-.942 2.247s.965 2.603 1.098 2.777c.133.174 1.899 2.901 4.599 4.066.643.278 1.144.444 1.534.569.646.205 1.233.176 1.697.107.517-.077 1.536-.628 1.753-1.235.217-.607.217-1.127.152-1.235-.065-.108-.237-.174-.497-.304z"/></svg>
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

