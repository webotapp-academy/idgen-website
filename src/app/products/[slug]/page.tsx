import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { products, getProductBySlug } from "@/data/products";
import { productSchema } from "@/lib/schema-org";
import { SITE_URL } from "@/data/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  const url = `${SITE_URL}/products/${product.slug}`;
  return {
    title: product.metaTitle,
    description: product.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: product.metaTitle, description: product.metaDescription, url },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <JsonLd data={productSchema(product)} />
      <PageHero eyebrow="Product" title={product.name} />
      <Container className="py-14">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: product.name, path: `/products/${product.slug}` },
          ]}
        />

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="max-w-2xl space-y-4 text-base leading-relaxed text-foreground/90">
            {product.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="rounded-2xl border border-surface-border bg-surface p-6">
            <h2 className="text-sm font-bold tracking-wide text-muted uppercase">Specifications</h2>
            <dl className="mt-4 space-y-3 text-sm">
              {Object.entries(product.specs).map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 border-b border-surface-border pb-3 last:border-0 last:pb-0">
                  <dt className="text-muted">{k}</dt>
                  <dd className="text-right font-medium">{v}</dd>
                </div>
              ))}
            </dl>
            <Link
              href="/get-a-quote"
              className="mt-6 block rounded-full bg-accent px-5 py-2.5 text-center text-sm font-semibold text-navy-deep transition hover:bg-accent-hover hover:text-white"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
