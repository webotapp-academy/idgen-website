import Image from "next/image";
import Link from "next/link";
import { Shield, ShieldCheck, CheckCircle2, Sparkles, ArrowRight, Award } from "lucide-react";
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
  title: "Custom Acrylic Badges & Executive Pins | High-Gloss PMMA Badges | IDGen",
  description: "Direct Guwahati factory manufacturing of precision laser-cut acrylic badges with high-grade magnetic backings and metallic pins for corporate staff, medical personnel, and executive events.",
  path: "/acrylic-badges/",
});

const badgePhotos = [
  { title: "Crystal Clear Executive Name Badge", code: "ACR-01", img: "/images/Acrylic Badges Samples/Sample 1.jpg" },
  { title: "Golden Metallic Inlay Acrylic Pin", code: "ACR-02", img: "/images/Acrylic Badges Samples/Sample 2.jpg" },
  { title: "High-Gloss Corporate Crest Badge", code: "ACR-03", img: "/images/Acrylic Badges Samples/Sample 3.jpg" },
  { title: "Precision Laser Cut Shape Badge", code: "ACR-04", img: "/images/Acrylic Badges Samples/Sample 4.jpg" },
  { title: "Doctor & Hospital Staff Magnetic Pin", code: "ACR-05", img: "/images/Acrylic Badges Samples/Sample 5.jpg" },
  { title: "VIP Executive Gold Border Badge", code: "ACR-06", img: "/images/Acrylic Badges Samples/Sample 6.jpg" },
  { title: "Custom Curved Institutional Crest", code: "ACR-07", img: "/images/Acrylic Badges Samples/Sample 7.jpg" },
  { title: "Frosted Matt Finish Acrylic Tag", code: "ACR-08", img: "/images/Acrylic Badges Samples/Sample 8.jpg" },
  { title: "Double-Layer 3D Acrylic Badge", code: "ACR-09", img: "/images/Acrylic Badges Samples/Sample 9.jpg" },
  { title: "Heavy Duty Neodymium Magnetic Backing", code: "ACR-10", img: "/images/Acrylic Badges Samples/Sample 10.jpg" },
];

const badgeSpecs = [
  { model: "Executive Magnetic", material: "3mm High-Gloss PMMA Acrylic", attachment: "Triple Neodymium Magnet", print: "UV Flatbed Direct Print", finish: "Polished Beveled Edge" },
  { model: "Standard Pin Badge", material: "2.5mm Crystal Acrylic", attachment: "Stainless Steel Safety Pin", print: "High-Res Sub-Surface", finish: "Gloss Clear" },
  { model: "3D Metallic Inlay", material: "Dual Layer Acrylic + Brass Foil", attachment: "Dual Magnet / Pin Combo", print: "Metallic Mirror Foil", finish: "Laser Chamfered" },
  { model: "Healthcare / Hospital Tag", material: "Anti-Bacterial UV Sealed PMMA", attachment: "Clothes-Safe Magnetic Plate", print: "Full Color Photo & QR", finish: "Scratch-Resistant Overcoat" },
];

const orderingSteps = [
  { title: "1. Submit Logo & Staff Names", body: "Send us your vector artwork (AI/CDR/PDF) along with the staff excel roster for personalized name tags." },
  { title: "2. Select Attachment Type", body: "Choose between clothes-safe triple neodymium magnet plates or traditional stainless safety pins." },
  { title: "3. Precision Laser & UV Printing", body: "Our Guwahati facility laser cuts PMMA acrylic to exact contours and applies 1440 DPI direct UV ink printing." },
  { title: "4. Fast Dispatch Across Northeast", body: "Shipped in protective foam trays with 48–72h delivery to Assam, Meghalaya, Nagaland and all 8 NE states." },
];

const faqs: Faq[] = [
  { q: "Will the magnetic backing damage suits or delicate clothing?", a: "No! Unlike traditional pins, our neodymium magnetic plates hold firmly through blazers, lab coats, and shirts without poking holes or damaging delicate fabric fibers." },
  { q: "Can acrylic badges be cut into custom organic logo shapes?", a: "Yes, our CO2 laser cutting equipment allows any custom geometric or shield shape based on your logo outline." },
  { q: "What is the minimum order quantity for custom acrylic badges?", a: "We cater to corporate orders starting from as low as 25 pieces up to large enterprise volumes of 5,000+ units." },
];

export default function AcrylicBadgesPage() {
  return (
    <>
      <JsonLd
        data={productSchema({
          name: "Custom Acrylic Badges & Executive Pins",
          description: "Precision laser-cut acrylic badges with high-grade magnetic backings and safety pins.",
          path: "/acrylic-badges/",
        })}
      />

      <PageHero
        eyebrow="Executive Identification"
        icon={Shield}
        title="Custom Laser-Cut Acrylic Badges & Magnetic Pins"
        lede="Elevate your corporate brand, hospital staff, or executive delegates with glass-clear PMMA acrylic name tags. Manufactured in Guwahati with 1440 DPI direct UV printing and clothing-safe neodymium magnetic backings."
        stats={[
          { label: "Material", value: "3mm PMMA Acrylic" },
          { label: "Print Quality", value: "1440 DPI Direct UV" },
          { label: "Attachment", value: "Triple Neodymium Magnet" },
          { label: "Dispatch Time", value: "48–72h Factory" },
        ]}
        visual={
          <div className="relative h-[430px] w-full">
            <div className="absolute inset-0 bg-cyan-500/20 blur-[90px] rounded-full" />
            <div className="relative h-full w-full">
              {/* Primary Badge Sample */}
              <div className="absolute top-0 right-0 h-64 w-[75%] rounded-3xl overflow-hidden border border-white/20 shadow-2xl z-10 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/Acrylic Badges Samples/Sample 5.jpg"
                  alt="Doctor and Corporate Acrylic Badge Sample"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-950">Crystal PMMA</span>
                </div>
              </div>

              {/* Overlapping Magnetic Badge Sample */}
              <div className="absolute bottom-4 left-0 h-52 w-[60%] rounded-2xl overflow-hidden border border-white/20 shadow-2xl z-20 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/Acrylic Badges Samples/Sample 1.jpg"
                  alt="Laser Cut Acrylic Name Badge with Magnetic Attachment"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Accent Crest Sample */}
              <div className="absolute -bottom-2 right-12 h-32 w-32 rounded-2xl overflow-hidden border-4 border-[#0B1320] shadow-2xl z-30 hover:scale-110 transition-all duration-500">
                <Image
                  src="/images/Acrylic Badges Samples/Sample 6.jpg"
                  alt="VIP Executive Gold Border Acrylic Badge"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        }
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Products", path: "/products/" }, { name: "Acrylic Badges", path: "/acrylic-badges/" }]} />

        {/* Specimen Gallery */}
        <div className="mt-8">
          <SectionHead
            eyebrow="Specimen Gallery"
            title="Real Factory Sample Photos of Acrylic Badges"
            lede="Inspect real production batches manufactured at our Guwahati production center."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {badgePhotos.map((bp) => (
              <div key={bp.code} className="group overflow-hidden rounded-2xl border border-surface-border bg-surface shadow-sm transition hover:shadow-xl hover:border-accent/40">
                <div className="relative aspect-square w-full overflow-hidden bg-slate-950 img-shine">
                  <Image
                    src={bp.img}
                    alt={bp.title}
                    fill
                    className="img-zoom object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-2 right-2 rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] font-bold text-cyan-300 backdrop-blur-md">
                    {bp.code}
                  </span>
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-foreground text-xs line-clamp-1">{bp.title}</h3>
                  <div className="mt-1 flex items-center gap-1 text-[10px] text-emerald-400 font-semibold">
                    <CheckCircle2 className="h-3 w-3" />
                    <span>In Production</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specs Table */}
        <div className="mt-20">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-accent uppercase">
            <ShieldCheck className="h-4 w-4" />
            <span>Industrial Specifications</span>
          </div>
          <h2 className="mt-1 text-2xl font-extrabold text-foreground sm:text-3xl">
            Acrylic Badge Technical & Material Options
          </h2>
          <p className="mt-2 text-sm text-muted max-w-2xl">
            Engineered with optical-grade cast PMMA acrylic sheets and high-adhesion 3M magnet backings.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-surface-border bg-surface shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-surface-border bg-background/80 text-xs font-bold text-muted uppercase">
                <tr>
                  <th className="px-5 py-4">Badge Variant</th>
                  <th className="px-5 py-4">Acrylic Base Material</th>
                  <th className="px-5 py-4">Attachment Type</th>
                  <th className="px-5 py-4">Printing Process</th>
                  <th className="px-5 py-4">Edge Finish</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-border">
                {badgeSpecs.map((spec) => (
                  <tr key={spec.model} className="hover:bg-background/50 transition-colors">
                    <td className="px-5 py-4 font-bold text-foreground">{spec.model}</td>
                    <td className="px-5 py-4 text-muted">{spec.material}</td>
                    <td className="px-5 py-4 text-muted">{spec.attachment}</td>
                    <td className="px-5 py-4 text-muted">{spec.print}</td>
                    <td className="px-5 py-4 font-mono text-xs font-semibold text-accent">{spec.finish}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Workflow */}
        <div className="mt-20">
          <SectionHead eyebrow="Manufacturing Workflow" title="How We Craft Custom Acrylic Badges" />
          <div className="mt-8">
            <WorkflowSteps steps={orderingSteps} />
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <SectionHead eyebrow="FAQ" title="Frequently Asked Questions About Acrylic Badges" />
          <div className="mt-8">
            <FaqList faqs={faqs} />
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16">
          <CtaBand
            title="Ready to order custom acrylic badges for your staff?"
            body="Get a custom quote and physical sample batch dispatched directly from Guwahati."
            links={[
              { label: "Request a Free Quote", href: "/request-a-quote/", primary: true },
              { label: "ID Card Holders", href: "/id-card-holders/" },
              { label: "View Full Products Range", href: "/products/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
