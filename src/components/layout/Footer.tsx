import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FOOTER_LINKS, SITE } from "@/data/site";
import { services } from "@/data/services";
import { states } from "@/data/locations";
import { IdgenLogo } from "@/components/ui/IdgenLogo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#070D18] text-white/70">
      <div
        className="pointer-events-none absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-accent/15 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          {/* Official Dark Logo */}
          <Link href="/" className="inline-block">
            <IdgenLogo variant="dark" size="lg" withTagline={true} />
          </Link>
          
          <p className="mt-4 max-w-xs text-xs leading-relaxed text-slate-300">{SITE.description}</p>

          <div className="mt-6 space-y-2.5 text-xs">
            <div className="flex items-center gap-2.5 text-white/70">
              <MapPin className="h-4 w-4 shrink-0 text-accent" />
              <span>{SITE.hqCity}, {SITE.hqState} — India</span>
            </div>
            {SITE.phone && (
              <a href={`tel:${SITE.phone}`} className="flex items-center gap-2.5 text-white/80 hover:text-accent">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <span>{SITE.phone}</span>
              </a>
            )}
            {SITE.email && (
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 text-white/80 hover:text-accent">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <span>{SITE.email}</span>
              </a>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold tracking-widest text-white/40 uppercase">Services</h3>
          <ul className="mt-4 space-y-2 text-xs">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}/`} className="hover:text-accent transition">
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services/" className="font-semibold text-accent hover:underline">
                View all services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold tracking-widest text-white/40 uppercase">Service Area</h3>
          <ul className="mt-4 space-y-2 text-xs">
            {states.map((st) => (
              <li key={st.slug}>
                <Link href={`/service-areas/${st.slug}/`} className="hover:text-accent transition">
                  {st.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/service-areas/" className="font-semibold text-accent hover:underline">
                All Service Areas →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold tracking-widest text-white/40 uppercase">Company</h3>
          <ul className="mt-4 space-y-2 text-xs">
            <li>
              <Link href="/why-idgen/" className="hover:text-accent transition">
                Why IDGen
              </Link>
            </li>
            <li>
              <Link href="/idgen-studio/" className="hover:text-accent transition">
                IDGen Studio
              </Link>
            </li>
            <li>
              <Link href="/pricing/" className="hover:text-accent transition">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/partners/" className="hover:text-accent transition">
                Partner Program
              </Link>
            </li>
            {FOOTER_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-accent transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10 px-5 py-5 text-xs text-white/40">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} IDGen. All rights reserved.</span>
          <span className="text-accent font-semibold">Identity Solutions, Simplified — Guwahati, Assam</span>
        </div>
      </div>
    </footer>
  );
}
