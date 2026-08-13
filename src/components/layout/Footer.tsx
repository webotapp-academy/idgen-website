import Link from "next/link";
import { FOOTER_LINKS, SITE } from "@/data/site";
import { services } from "@/data/services";
import { states } from "@/data/locations";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-baseline gap-0.5 text-xl">
            <span className="mr-1 inline-block h-1.5 w-1.5 -translate-y-2.5 rounded-full bg-accent" aria-hidden="true" />
            <span className="font-display font-extrabold text-white">iDGen</span>
          </div>
          <p className="mt-2 text-xs font-semibold tracking-widest text-accent uppercase">{SITE.tagline}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{SITE.description}</p>
        </div>

        <div>
          <h3 className="text-xs font-bold tracking-widest text-white/40 uppercase">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-accent">
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="text-accent hover:underline">
                View all services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold tracking-widest text-white/40 uppercase">Service Area</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {states.map((st) => (
              <li key={st.slug}>
                <Link href={`/service-area/${st.slug}`} className="hover:text-accent">
                  {st.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold tracking-widest text-white/40 uppercase">Company</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/about-us" className="hover:text-accent">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/become-a-partner" className="hover:text-accent">
                Become a Partner
              </Link>
            </li>
            {FOOTER_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-xs text-white/40">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} iDGen. All rights reserved.</span>
          <span>Identity Solutions, Simplified</span>
        </div>
      </div>
    </footer>
  );
}
