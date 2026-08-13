import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/schema-org";
import { SITE } from "@/data/site";
import { states } from "@/data/locations";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact Us",
  description: "Get in touch with iDGen for bulk ID card, RFID card, and lanyard orders across Northeast India.",
  path: "/contact-us",
});

export default function ContactUsPage() {
  const hasDetails = SITE.phone || SITE.email || SITE.address;

  return (
    <>
      <JsonLd data={localBusinessSchema({ areaServed: states.map((s) => s.name) })} />
      <PageHero
        eyebrow="Contact"
        title="Contact iDGen"
        lede="For pricing on a specific order, Get a Quote is the fastest route — for everything else, reach us directly below."
      />
      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact Us", path: "/contact-us" }]} />

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {hasDetails ? (
            <div className="rounded-2xl border border-surface-border bg-surface p-6 text-sm">
              {SITE.phone && (
                <p>
                  <span className="font-semibold">Phone: </span>
                  <a href={`tel:${SITE.phone}`} className="text-accent hover:underline">
                    {SITE.phone}
                  </a>
                </p>
              )}
              {SITE.email && (
                <p className="mt-2">
                  <span className="font-semibold">Email: </span>
                  <a href={`mailto:${SITE.email}`} className="text-accent hover:underline">
                    {SITE.email}
                  </a>
                </p>
              )}
              {SITE.address && <p className="mt-2">{SITE.address}</p>}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-surface-border bg-surface p-6 text-sm text-muted">
              Phone, email, and office address go here once confirmed — placeholder intentionally left blank
              rather than showing incorrect contact details.
            </div>
          )}

          <div className="rounded-2xl border border-surface-border bg-surface p-6 text-sm">
            <p className="font-semibold">Prefer a written quote first?</p>
            <p className="mt-2 text-muted">
              Use Get a Quote — it captures your service, quantity, and city so we can reply with pricing
              directly.
            </p>
            <Link href="/get-a-quote" className="mt-4 inline-block font-semibold text-accent hover:underline">
              Get a Quote →
            </Link>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-surface-border bg-surface p-6 text-sm">
          <p className="font-semibold">Service area</p>
          <p className="mt-2 text-muted">
            {states.map((s) => s.name).join(", ")}. See{" "}
            <Link href="/service-area" className="text-accent hover:underline">
              Service Area
            </Link>{" "}
            for city-level coverage.
          </p>
        </div>
      </Container>
    </>
  );
}
