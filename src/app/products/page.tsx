import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { products } from "@/data/products";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Products",
  description: "ID card holders and lanyard hooks from iDGen, sold in bulk alongside or separate from card orders.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Hardware"
        title="Products"
        lede="The hardware that completes a card program — holders and connecting hooks, sold in bulk."
      />
      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Products", path: "/products" }]} />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="rounded-2xl border border-surface-border bg-surface p-6 transition hover:border-accent hover:shadow-sm"
            >
              <h2 className="font-semibold">{p.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.description[0]}</p>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
