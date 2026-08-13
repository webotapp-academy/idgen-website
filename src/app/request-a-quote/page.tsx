import { Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Request a Quote",
  description: "Request pricing and turnaround for bulk ID card, RFID card, lanyard, or accessory orders from IDGen.",
  path: "/request-a-quote/",
});

export default function RequestAQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Get Started"
        icon={Send}
        title="Request a Quote"
        lede="Tell us your requirement — service, quantity and city — and we'll reply with pricing and a realistic turnaround."
      />
      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Request a Quote", path: "/request-a-quote/" }]} />
        <div className="mt-8 max-w-2xl">
          <QuoteForm services={services} />
        </div>
      </Container>
    </>
  );
}
