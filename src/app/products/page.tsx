import { Layers } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { products } from "@/data/products";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Products | ID Card Holders & Hooks",
  description: "ID card holders and lanyard hooks from IDGen — the hardware that completes an identification setup.",
  path: "/products/",
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Hardware"
        icon={Layers}
        title="Products"
        lede="An ID card is rarely the whole identification setup. Holders and hooks are the hardware that connects a card to a lanyard and turns it into something people actually wear."
      />
      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Products", path: "/products/" }]} />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {products.map((p) => (
            <FeatureCard key={p.slug} icon={Layers} title={p.name} body={p.shortDescription} href={`/${p.slug}/`} />
          ))}
        </div>
      </Container>
    </>
  );
}
