import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Get a Quote",
  description: "Request pricing and turnaround for bulk ID card, RFID card, or lanyard printing from iDGen.",
  path: "/get-a-quote",
});

export default function GetAQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get a quote"
        lede="Tell us the service, quantity, and city — we'll reply with pricing and a realistic turnaround."
      />
      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Get a Quote", path: "/get-a-quote" }]} />
        <div className="mt-8 max-w-2xl">
          <QuoteForm services={services} />
        </div>
      </Container>
    </>
  );
}
