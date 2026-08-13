import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "iDGen manufactures ID cards, RFID credentials, and lanyards for schools, colleges, universities, and enterprises across Northeast India.",
  path: "/about-us",
});

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Identity solutions, manufactured in Northeast India"
        lede="iDGen exists because organizations here shouldn't have to route ID card orders through vendors outside the region, wait weeks for a batch, or accept whatever card stock a reseller happens to have on hand."
      />
      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About Us", path: "/about-us" }]} />
        <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-foreground/90">
          <p>
            iDGen prints ID cards, embeds RFID credentials, and manufactures lanyards for schools, colleges,
            universities, corporate offices, and event organizers across Assam, Meghalaya, Nagaland, Manipur,
            Mizoram, Tripura, and Arunachal Pradesh. Every card is printed and quality-checked in-house — we
            don&apos;t outsource production to a third-party press and re-badge the result.
          </p>
          <p>
            That in-house control is what lets us hold one consistent standard across a full school batch, a
            multi-department university rollout, or a same-week event print run, instead of quality drifting
            between orders.
          </p>
          <p>
            See <Link href="/manufacturing" className="text-accent underline">Manufacturing</Link> for how cards
            are actually built, or <Link href="/why-idgen" className="text-accent underline">Why iDGen</Link> for
            how we compare to a generic printing vendor.
          </p>
        </div>
      </Container>
    </>
  );
}
