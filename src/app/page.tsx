import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HeroSection } from "@/components/home/HeroSection";
import { services } from "@/data/services";
import { products } from "@/data/products";
import { states } from "@/data/locations";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="py-16">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold tracking-widest text-accent uppercase">Services</p>
              <h2 className="mt-2 text-2xl font-extrabold">Every card, printed in-house</h2>
            </div>
            <Link href="/services" className="text-sm font-semibold text-accent hover:underline">
              View all
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-2xl border border-surface-border bg-surface p-5 transition hover:border-accent hover:shadow-sm"
              >
                <h3 className="font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.shortDescription}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-surface-border bg-surface py-16">
        <Container>
          <div>
            <p className="text-xs font-bold tracking-widest text-accent uppercase">Products</p>
            <h2 className="mt-2 text-2xl font-extrabold">Hardware to complete the card</h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="rounded-2xl border border-surface-border bg-background p-5 transition hover:border-accent hover:shadow-sm"
              >
                <h3 className="font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.description[0]}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div>
            <p className="text-xs font-bold tracking-widest text-accent uppercase">Service Area</p>
            <h2 className="mt-2 text-2xl font-extrabold">Seven states, one production standard</h2>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {states.map((st) => (
              <div key={st.slug} className="rounded-2xl border border-surface-border bg-surface p-5">
                <h3 className="font-semibold">
                  <Link href={`/service-area/${st.slug}`} className="hover:text-accent">
                    {st.name}
                  </Link>
                </h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {st.cities.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/service-area/${st.slug}/${c.slug}`}
                      className="rounded-full bg-background px-2.5 py-0.5 text-xs text-muted hover:text-accent"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy py-16 text-white">
        <Container className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold">Ready for a bulk quote?</h2>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/75">
              Send your card count and city — we&apos;ll reply with pricing and a realistic turnaround.
            </p>
          </div>
          <Link
            href="/get-a-quote"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-navy-deep transition hover:bg-accent-hover hover:text-white"
          >
            Get a Quote
          </Link>
        </Container>
      </section>
    </>
  );
}
