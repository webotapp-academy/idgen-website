import Image from "next/image";
import Link from "next/link";
import { Award, ShieldCheck, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { WorkflowSteps } from "@/components/ui/WorkflowSteps";
import { FaqList } from "@/components/ui/FaqList";
import { CtaBand } from "@/components/ui/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { productSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import type { Faq } from "@/data/types";

export const metadata = pageMetadata({
  title: "Custom Die-Cast Zinc Medals & Awards | Antique Gold, Silver & Bronze | IDGen",
  description: "High-relief die-cast zinc alloy medals with full-color custom satin neck ribbons. Manufactured for school sports days, corporate marathons, academic excellence, and institutional awards across Northeast India.",
  path: "/zinc-medals/",
});

const medalPhotos = [
  { title: "High-Relief Die-Cast Gold Medal", code: "ZNC-01", img: "/images/Zinc Medal/IMG_20260213_100040.jpg.jpeg" },
  { title: "Custom Sublimation Satin Ribbon Assembly", code: "ZNC-02", img: "/images/Zinc Medal/IMG20260213095826.jpg.jpeg" },
  { title: "Antique Silver Institutional Award Medal", code: "ZNC-03", img: "/images/Zinc Medal/IMG_20260213_100059.jpg.jpeg" },
  { title: "Custom Cutout Sports Championship Medal", code: "ZNC-04", img: "/images/Zinc Medal/madl.png" },
  { title: "Corporate Award Medallion with Satin V-Neck Ribbon", code: "ZNC-05", img: "/images/Zinc Medal/1f4d1eda-3be4-44cf-a700-3288b93f849f.jpg" },
  { title: "Bronze Marathon & Event Medallion", code: "ZNC-06", img: "/images/Zinc Medal/20dfd541-e04b-4fc4-944f-5127c3b4ec2e.jpg" },
];

const medalSpecs = [
  { model: "3D High-Relief Die-Cast", material: "Zinc Alloy (Eco-Friendly)", finish: "Antique Gold / Silver / Bronze", ribbon: "25mm Full-Color Satin Sublimation", diameter: "50mm – 75mm (custom thickness 3mm-5mm)" },
  { model: "Soft Enamel Color Filled", material: "Die-Cast Zinc + Enamel Fill", finish: "Shiny Chrome / Gold Electroplate", ribbon: "30mm Custom Branded Ribbon", diameter: "60mm standard (4mm thickness)" },
  { model: "Custom Cutout Logo Medal", material: "Zinc Alloy Precision Mold", finish: "Matt Antique Brass", ribbon: "Heavy-Duty V-Sewn Satin Ribbon", diameter: "Custom Organic Shapes" },
  { model: "Academic Excellence Medallion", material: "Polished Brass / Zinc", finish: "High-Gloss Mirror Gold", ribbon: "Tricolor National / Institutional Ribbon", diameter: "55mm (3.5mm thickness)" },
];

const orderingSteps = [
  { title: "1. Mold & 3D Artwork Design", body: "We convert your logo or emblem into a 3D high-relief vector proof showing exact bevels and text depth." },
  { title: "2. Die-Casting & Electroplating", body: "High-pressure zinc die-casting followed by electroplating in antique gold, silver, or bronze." },
  { title: "3. Ribbon Sublimation & Assembly", body: "Matching 25mm satin neck ribbons printed in full color and stitched to the medal loop." },
  { title: "4. QC & Bulk Express Delivery", body: "Each medal is individually polybagged and shipped across Guwahati, Shillong, Itanagar and all NE states." },
];

const faqs: Faq[] = [
  { q: "What is the weight and feel of zinc alloy medals compared to iron or plastic?", a: "Zinc alloy is heavy, solid, and dense, giving a luxury feel when worn around the neck. Unlike stamped iron, zinc allows intricate 3D rounded contours and cutouts without rusting." },
  { q: "Can we print custom text or sponsor logos on the neck ribbons?", a: "Yes! Our satin ribbons are printed using high-definition dye sublimation, allowing full-color gradient logos, event dates, and sponsor names on both sides." },
  { q: "What is the typical production timeline for custom medals?", a: "Custom mold die-casting typically takes 7–10 days for production and dispatch from our Guwahati regional hub." },
];

export default function ZincMedalsPage() {
  return (
    <>
      <JsonLd
        data={productSchema({
          name: "Custom Die-Cast Zinc Medals & Awards",
          description: "High-relief die-cast zinc alloy medals with customized satin ribbons.",
          path: "/zinc-medals/",
        })}
      />

      <PageHero
        eyebrow="Awards & Recognition"
        icon={Award}
        title="Custom Die-Cast Zinc Medals & Championship Awards"
        lede="Celebrate sporting victories, academic achievements, and corporate milestones with high-relief die-cast zinc medals. Featuring antique gold, silver, and bronze plating paired with custom-printed satin neck ribbons."
        stats={[
          { label: "Material", value: "Eco Zinc Alloy" },
          { label: "Plating", value: "Gold / Silver / Bronze" },
          { label: "Ribbon", value: "Full-Color Sublimation" },
          { label: "Molding", value: "3D Custom Relief" },
        ]}
        visual={
          <div className="relative h-[430px] w-full">
            <div className="absolute inset-0 bg-cyan-500/20 blur-[90px] rounded-full" />
            <div className="relative h-full w-full">
              {/* Primary Medal Sample */}
              <div className="absolute top-0 right-0 h-64 w-[75%] rounded-3xl overflow-hidden border border-white/20 shadow-2xl z-10 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/Zinc Medal/IMG_20260213_100040.jpg.jpeg"
                  alt="Custom High-Relief Zinc Gold Medal with Ribbon"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="rounded-full bg-amber-400 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-950">Die-Cast Zinc</span>
                </div>
              </div>

              {/* Overlapping Silver Medal Sample */}
              <div className="absolute bottom-4 left-0 h-52 w-[60%] rounded-2xl overflow-hidden border border-white/20 shadow-2xl z-20 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/Zinc Medal/IMG_20260213_100059.jpg.jpeg"
                  alt="Antique Silver Institutional Award Medal"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Accent Cutout Sample */}
              <div className="absolute -bottom-2 right-12 h-32 w-32 rounded-full overflow-hidden border-4 border-[#0B1320] shadow-2xl z-30 hover:scale-110 transition-all duration-500">
                <Image
                  src="/images/Zinc Medal/madl.png"
                  alt="Custom Sports Championship Medal"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        }
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Products", path: "/products/" }, { name: "Zinc Medals", path: "/zinc-medals/" }]} />

        {/* Specimen Gallery */}
        <div className="mt-8">
          <SectionHead
            eyebrow="Specimen Gallery"
            title="Real Production Photos of Custom Zinc Medals"
            lede="Examine the crisp 3D relief, metal finishes, and satin neck ribbon stitching."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {medalPhotos.map((mp) => (
              <div key={mp.code} className="group overflow-hidden rounded-2xl border border-surface-border bg-surface shadow-sm transition hover:shadow-xl hover:border-accent/40">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950 img-shine">
                  <Image
                    src={mp.img}
                    alt={mp.title}
                    fill
                    className="img-zoom object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-3 right-3 rounded-full bg-slate-900/80 px-2.5 py-0.5 text-[10px] font-bold text-amber-300 backdrop-blur-md">
                    {mp.code}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-foreground text-sm">{mp.title}</h3>
                  <div className="mt-1 flex items-center gap-1 text-[11px] text-emerald-400 font-semibold">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Custom Die-Molded</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specs Table */}
        <div className="mt-20">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-accent uppercase">
            <ShieldCheck className="h-4 w-4" />
            <span>Industrial Specifications</span>
          </div>
          <h2 className="mt-1 text-2xl font-extrabold text-foreground sm:text-3xl">
            Zinc Medal Plating & Material Specifications
          </h2>
          <p className="mt-2 text-sm text-muted max-w-2xl">
            Crafted for sports associations, universities, corporate leagues, and defense institutions.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-surface-border bg-surface shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-surface-border bg-background/80 text-xs font-bold text-muted uppercase">
                <tr>
                  <th className="px-5 py-4">Medal Style</th>
                  <th className="px-5 py-4">Core Alloy</th>
                  <th className="px-5 py-4">Electroplate Finish</th>
                  <th className="px-5 py-4">Ribbon Type</th>
                  <th className="px-5 py-4">Diameter / Thickness</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-border">
                {medalSpecs.map((spec) => (
                  <tr key={spec.model} className="hover:bg-background/50 transition-colors">
                    <td className="px-5 py-4 font-bold text-foreground">{spec.model}</td>
                    <td className="px-5 py-4 text-muted">{spec.material}</td>
                    <td className="px-5 py-4 text-muted">{spec.finish}</td>
                    <td className="px-5 py-4 text-muted">{spec.ribbon}</td>
                    <td className="px-5 py-4 font-mono text-xs font-semibold text-amber-400">{spec.diameter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Workflow */}
        <div className="mt-20">
          <SectionHead eyebrow="Manufacturing Steps" title="How Custom Zinc Medals Are Produced" />
          <div className="mt-8">
            <WorkflowSteps steps={orderingSteps} />
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <SectionHead eyebrow="FAQ" title="Frequently Asked Questions About Custom Medals" />
          <div className="mt-8">
            <FaqList faqs={faqs} />
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16">
          <CtaBand
            title="Planning a sports event, marathon, or annual day award function?"
            body="Get instant 3D artwork proofs and wholesale pricing for custom zinc medals."
            links={[
              { label: "Request Medal Quote", href: "/request-a-quote/", primary: true },
              { label: "Event Card Credentials", href: "/event-card-printing/" },
              { label: "View All Products", href: "/products/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
