import Image from "next/image";
import Link from "next/link";
import { Layers, ShieldCheck, Sparkles, Award, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CtaBand } from "@/components/ui/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Products | ID Card Holders, Hooks & Hardware Attachments | IDGen",
  description: "Explore IDGen's complete range of crystal acrylic ID card holders, four-side-lock cases, swivel metal hooks, and wearable accessories.",
  path: "/products/",
});

const productsList = [
  {
    name: "ID Card Holders",
    slug: "id-card-holders",
    imageSrc: "/images/ID card holder/IMG_20250117_172305.jpg",
    imageAlt: "Crystal Clear Hard Acrylic and Polycarbonate ID Card Badge Holders",
    shortDescription: "Crystal-clear vertical and horizontal hard cases, four-side-lock enclosures, and flexible PVC vinyl pouches designed to protect CR80 smart cards from moisture and physical bending.",
    tag: "Hard Acrylic / Polycarbonate",
    badge: "Protection"
  },
  {
    name: "ID Card Hooks & Hardware Clips",
    slug: "id-card-hooks",
    imageSrc: "/images/Lanyard with Hook Samples/Sample 17 .jpg",
    imageAlt: "Chrome Swivel Dog Hooks and Lanyard Hardware Clips",
    shortDescription: "Heavy-duty chrome-plated swivel dog hooks, alligator clips, round carabiners, and safety breakaway clips engineered for high-tension daily use without tarnishing.",
    tag: "Chrome-Plated Metal",
    badge: "Attachments"
  },
  {
    name: "Custom Acrylic Badges & Pins",
    slug: "acrylic-badges",
    imageSrc: "/images/Acrylic Badges Samples/Sample 5.jpg",
    imageAlt: "Laser Cut Acrylic Name Badges by IDGen",
    shortDescription: "Precision laser-cut acrylic badges with high-grade neodymium magnetic backings or safety pins for corporate staff, doctors, and executive conferences.",
    tag: "Laser Cut PMMA",
    badge: "Executive"
  },
  {
    name: "Custom Zinc Medals & Awards",
    slug: "zinc-medals",
    imageSrc: "/images/Zinc Medal/IMG_20260213_100040.jpg.jpeg",
    imageAlt: "Die-Cast Zinc Medals with Custom Sublimation Ribbons",
    shortDescription: "High-relief antique gold, silver, and bronze die-cast zinc medals paired with full-color satin neck ribbons for school sports days and institutional ceremonies.",
    tag: "Die-Cast Metal",
    badge: "Recognition"
  },
  {
    name: "30-Mil CR80 PVC Smart Cards",
    slug: "pvc-cards",
    imageSrc: "/images/PVC Cards Samples/Sample 1.jpg",
    imageAlt: "Solid Virgin PVC Core ID Cards",
    shortDescription: "Bank-grade 30-mil CR80 solid virgin PVC cards featuring 300 DPI high-definition dye sublimation and edge-to-edge protective overlaminate.",
    tag: "Virgin PVC Core",
    badge: "Core Media"
  },
  {
    name: "Event Badges & Passes",
    slug: "event-card-printing",
    imageSrc: "/images/Event Card/Events Card with 2 hook.png",
    imageAlt: "Dual-Hook Event Credential Badges",
    shortDescription: "Heavy-duty 2-hook anti-flip passes, single swivel clip credentials, and oversized VIP conference badges with custom-printed lanyards.",
    tag: "Conferences & Expos",
    badge: "Accreditation"
  },
];

const hardwareSpecs = [
  { name: "CR80 Hard Case Holder", material: "Virgin Polycarbonate", orientation: "Vertical / Horizontal", locking: "4-Side Snap Lock", maxThickness: "0.82 mm (32 mil)" },
  { name: "Executive Crystal Holder", material: "Cast Acrylic (PMMA)", orientation: "Vertical (Port)", locking: "Top Drop-in", maxThickness: "1.0 mm (Smart Card)" },
  { name: "Chrome Swivel Dog Hook", material: "Nickel-Plated Zinc Alloy", orientation: "360° Free Swivel", locking: "Spring Snap Lever", maxThickness: "25 kg Tensile" },
  { name: "Safety Breakaway Buckle", material: "High-Impact POM Plastic", orientation: "Nape of Neck", locking: "Quick Auto-Release", maxThickness: "5 kg Disconnect" },
];

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Products", path: "/products/" }])} />

      <PageHero
        eyebrow="Hardware & Accessories"
        icon={Layers}
        title="ID Card Holders, Hooks & Modular Hardware"
        lede="An ID card is only complete when paired with the right hardware. IDGen manufactures crystal-clear protective cases, ergonomic 360° swivel hooks, and ultrasonic welded lanyard loops for reliable everyday use."
        stats={[
          { label: "Holder Styles", value: "8+ Variants" },
          { label: "Material Grade", value: "UV-Stabilized" },
          { label: "Hook Finish", value: "Anti-Rust Chrome" },
          { label: "Compatibility", value: "Universal CR80" },
        ]}
        visual={
          <div className="relative h-[400px] w-full">
            <div className="absolute inset-0 bg-cyan-500/20 blur-[90px] rounded-full" />
            <div className="relative h-full w-full">
              {/* Main Card Holder Photo */}
              <div className="absolute top-0 right-0 h-60 w-[70%] rounded-3xl overflow-hidden border border-white/20 shadow-2xl z-10 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/ID card holder/IMG_20250117_172305.jpg"
                  alt="Crystal Clear Acrylic ID Card Holders"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-950">Crystal PMMA</span>
                </div>
              </div>

              {/* Secondary Hook Sample */}
              <div className="absolute bottom-4 left-0 h-48 w-[60%] rounded-2xl overflow-hidden border border-white/20 shadow-2xl z-20 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/Lanyard with Hook Samples/Sample 17 .jpg"
                  alt="Heavy Duty Swivel Hooks"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Zinc Medal Showcase */}
              <div className="absolute -bottom-2 right-12 h-32 w-32 rounded-full overflow-hidden border-4 border-[#0B1320] shadow-2xl z-30 hover:scale-110 transition-all duration-500">
                <Image
                  src="/images/Zinc Medal/IMG_20260213_100040.jpg.jpeg"
                  alt="Custom Zinc Medals"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        }
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Products", path: "/products/" }]} />

        {/* Product Cards Grid */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {productsList.map((p) => (
            <FeatureCard
              key={p.name}
              title={p.name}
              body={p.shortDescription}
              href={`/${p.slug}/`}
              imageSrc={p.imageSrc}
              imageAlt={p.imageAlt}
              tag={p.tag}
              badge={p.badge}
            />
          ))}
        </div>

        {/* Hardware Technical Comparison */}
        <div className="mt-20">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-accent uppercase">
            <ShieldCheck className="h-4 w-4" />
            <span>Industrial Specifications</span>
          </div>
          <h2 className="mt-1 text-2xl font-extrabold text-foreground sm:text-3xl">
            Hardware Durability & Material Specifications
          </h2>
          <p className="mt-2 text-sm text-muted max-w-2xl">
            Every clip, holder, and weld is tested against daily wear and environmental stress across schools, hospitals, and industrial plants.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-surface-border bg-surface shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-surface-border bg-background/80 text-xs font-bold text-muted uppercase">
                <tr>
                  <th className="px-5 py-4">Product Model</th>
                  <th className="px-5 py-4">Material</th>
                  <th className="px-5 py-4">Orientation / Placement</th>
                  <th className="px-5 py-4">Lock Mechanism</th>
                  <th className="px-5 py-4">Key Specification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-border">
                {hardwareSpecs.map((spec) => (
                  <tr key={spec.name} className="hover:bg-background/50 transition-colors">
                    <td className="px-5 py-4 font-bold text-foreground">{spec.name}</td>
                    <td className="px-5 py-4 text-muted">{spec.material}</td>
                    <td className="px-5 py-4 text-muted">{spec.orientation}</td>
                    <td className="px-5 py-4 text-muted">{spec.locking}</td>
                    <td className="px-5 py-4 font-mono text-xs font-semibold text-accent">{spec.maxThickness}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16">
          <CtaBand
            title="Need sample hardware units for testing?"
            body="We provide physical specimen kits including card holders, hooks, and lanyard samples to institutional procurement teams."
            links={[
              { label: "Request Specimen Kit", href: "/request-a-quote/", primary: true },
              { label: "Browse Services", href: "/services/" },
              { label: "Explore IDGen Studio", href: "/idgen-studio/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
