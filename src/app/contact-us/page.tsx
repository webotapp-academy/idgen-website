import Link from "next/link";
import { Phone, Mail, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/schema-org";
import { SITE } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact Us",
  description: "Get in touch with IDGen for bulk ID card, RFID card, and lanyard orders across Assam and Northeast India.",
  path: "/contact-us/",
});

export default function ContactUsPage() {
  const hasDetails = SITE.phone || SITE.email || SITE.address;

  return (
    <>
      <JsonLd data={localBusinessSchema({ areaServed: SITE.regionalFocus })} />
      <PageHero
        eyebrow="Contact"
        icon={Send}
        title="Contact IDGen"
        lede="For pricing on a specific order, Request a Quote is the fastest route — for everything else, reach us directly below."
      />
      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact Us", path: "/contact-us/" }]} />

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {hasDetails ? (
            <div className="rounded-2xl border border-surface-border bg-surface p-6 text-sm">
              {SITE.phone && (
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-accent" />
                  <a href={`tel:${SITE.phone}`} className="text-accent hover:underline">
                    {SITE.phone}
                  </a>
                </p>
              )}
              {SITE.email && (
                <p className="mt-2 flex items-center gap-2">
                  <Mail className="h-4 w-4 text-accent" />
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
            <p className="font-semibold text-foreground">Prefer a written quote first?</p>
            <p className="mt-2 text-muted">
              Use Request a Quote — it captures your service, quantity, and city so we can reply with pricing
              directly.
            </p>
            <Link href="/request-a-quote/" className="mt-4 inline-block font-semibold text-accent hover:underline">
              Request a Quote →
            </Link>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-surface-border bg-surface p-6 text-sm">
          <p className="font-semibold text-foreground">Service area</p>
          <p className="mt-2 text-muted">
            {SITE.regionalFocus.join(", ")}. See{" "}
            <Link href="/service-areas/" className="text-accent hover:underline">
              Service Areas
            </Link>{" "}
            for state and city-level coverage.
          </p>
        </div>
      </Container>
    </>
  );
}
