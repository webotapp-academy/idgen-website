import Image from "next/image";
import Link from "next/link";
import { Tag, GraduationCap, Building2, Ticket, Palette, Repeat, Award, CheckCircle2, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { WorkflowSteps } from "@/components/ui/WorkflowSteps";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import type { Faq } from "@/data/types";

export const metadata = pageMetadata({
  title: "Custom Printed Lanyard Printing | 20mm ID Card Lanyards | IDGen",
  description:
    "Custom printed 20mm lanyards for ID cards, students, employees, organizations and events. Add your logo, branding and artwork. Bulk lanyard printing by IDGen.",
  path: "/custom-printed-lanyard-printing/",
});

const applications = [
  { icon: GraduationCap, title: "Universities & Schools", body: "High-density satin lanyards in institution colors with full student security credentials.", href: "/student-id-card-printing/" },
  { icon: Building2, title: "Corporate Enterprises", body: "Executive satin lanyards with subtle tone-on-tone or full-color logo gradients for corporate staff.", href: "/employee-id-card-printing/" },
  { icon: Ticket, title: "Conferences & Summits", body: "Dual-hook anti-twist lanyards featuring sponsor logos and attendee classifications.", href: "/event-card-printing/" },
  { icon: Award, title: "Hospitals & Healthcare", body: "Washable, hypoallergenic satin neckbands with emergency quick-release breakaway buckles." },
];

const lanyardGallery = [
  { title: "20mm Dye-Sublimated Satin Lanyard", type: "Institutional Set", img: "/images/Lanyard with Hook Samples/Sample 1.jpeg" },
  { title: "Corporate Swivel Dog Hook Lanyard", type: "Enterprise Staff", img: "/images/Lanyard with Hook Samples/Sample 11.jpg" },
  { title: "Custom Color Match School Lanyard", type: "School Campus", img: "/images/Lanyard with Hook Samples/Sample 12.jpg" },
  { title: "Heavy-Duty Ultrasonic Welded Strap", type: "Industrial Grade", img: "/images/Lanyard with Hook Samples/Sample 17 .jpg" },
];

const lanyardSpecs = [
  { feature: "Standard Width", value: "20 mm (16 mm & 25 mm also available)" },
  { feature: "Ribbon Material", value: "High-Density Woven Satin Polyester (Soft Touch)" },
  { feature: "Printing Method", value: "Dual-Sided Continuous Heat-Transfer Dye-Sublimation" },
  { feature: "Hardware Attachment", value: "360° Heavy-Duty Chrome Swivel Dog Hook / Fish Hook" },
  { feature: "Safety Feature", value: "Optional Auto-Release Breakaway Clip (Nape of Neck)" },
  { feature: "Seam Finish", value: "Ultrasonic Acoustic Welding or Metallic Clamp Rivet" },
];

const brandingOptions = [
  { icon: Tag, title: "Continuous Logo & Text", body: "LOGO → ORGANIZATION NAME → LOGO repeated seamlessly along both sides of the strap." },
  { icon: Repeat, title: "Pantone Color Matching", body: "Exact RGB/CMYK dye-sublimation calibrated to your official institutional brand guide." },
  { icon: Ticket, title: "Multi-Sponsor Graphics", body: "Alternating sponsor logos and accreditation bands for expos, summits, and VIP events." },
  { icon: Palette, title: "Department Color-Coding", body: "Distinguish faculty, administration, security, and students by distinct lanyard base hues." },
];

const artworkProcess = [
  { title: "1. Brand Asset Submission", body: "Provide vector logos (AI, SVG, PDF) or high-resolution PNG brand assets." },
  { title: "2. 3D Digital Proof Mockup", body: "Our design engineers render a 1:1 scale visual proof showing repeat intervals." },
  { title: "3. Institutional Sign-Off", body: "Confirm typography, Pantone color matching, and hardware attachment types." },
  { title: "4. Dye-Sublimation Press", body: "High-temperature heat transfer infuses color deep into satin polyester fibers." },
  { title: "5. Ultrasonic Sealing & Assembly", body: "Acoustic welds bond hook loops without fraying or protruding staples." },
  { title: "6. QA Tension Audit & Dispatch", body: "Batches audited for seam strength, packaged in bundles of 50, and dispatched." },
];

const faqs: Faq[] = [
  { q: "What is the difference between screen-printed and dye-sublimated satin lanyards?", a: "Screen printing sits on top of the fabric and can crack or peel over time. Dye-sublimation uses heat to infuse inks directly into the satin polyester fibers, producing photo-quality resolution that never fades or scratches off." },
  { q: "What is the minimum order quantity (MOQ) for custom printed lanyards?", a: "Our standard bulk batch begins at 100 units. For larger institutional orders (500 to 10,000+ units), substantial volume tier discounts apply." },
  { q: "Can we add safety breakaway buckles?", a: "Yes. Safety breakaway clips detach automatically under sudden pulling force, making them ideal for schools, industrial shopfloors, and medical facilities." },
];

export default function CustomPrintedLanyardPrintingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Custom Printed Lanyard Printing",
          description: "Custom 20mm printed lanyards for ID cards, organizations and events.",
          path: "/custom-printed-lanyard-printing/",
        })}
      />
      
      <PageHero
        eyebrow="Direct Factory Sublimation"
        icon={Tag}
        title="Custom 20 mm Printed Satin Lanyards for ID Cards & Badges"
        lede="Manufactured in Guwahati with silky-smooth high-density satin polyester, dual-sided full-color dye-sublimation, anti-rust chrome swivel hooks, and precision ultrasonic welded loops."
        stats={[
          { label: "Standard Width", value: "20 mm Satin" },
          { label: "Printing Tech", value: "Full-Color Sublimation" },
          { label: "Tear Resistance", value: "18 kg+ Ultrasonic" },
          { label: "Standard Rate", value: "From ₹14 / unit" },
        ]}
        visual={
          <div className="relative h-[430px] w-full">
            <div className="absolute inset-0 bg-cyan-500/20 blur-[90px] rounded-full" />
            <div className="relative h-full w-full">
              {/* Primary Real Lanyard Factory Production */}
              <div className="absolute top-0 right-0 h-64 w-[75%] rounded-3xl overflow-hidden border border-white/20 shadow-2xl z-10 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/ID Card Full Set Samples/Logo-printed lanyards manufactured by IDGen for organizations and businesses across Guwahati..jpg"
                  alt="Logo-printed lanyards manufactured by IDGen in Guwahati"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-950">Guwahati Sublimation</span>
                </div>
              </div>

              {/* Overlapping Lanyard Sample */}
              <div className="absolute bottom-4 left-0 h-52 w-[60%] rounded-2xl overflow-hidden border border-white/20 shadow-2xl z-20 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/Lanyard with Hook Samples/Sample 1.jpeg"
                  alt="Full Color Printed Satin Lanyard with Dog Hook"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Hook Detail Accent */}
              <div className="absolute -bottom-2 right-12 h-32 w-32 rounded-2xl overflow-hidden border-4 border-[#0B1320] shadow-2xl z-30 hover:scale-110 transition-all duration-500">
                <Image
                  src="/images/Lanyard with Hook Samples/Sample 17 .jpg"
                  alt="Chrome Swivel Hardware"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        }
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }, { name: "Custom Printed Lanyards", path: "/custom-printed-lanyard-printing/" }]} />

        {/* Real Lanyard Showcase Gallery */}
        <div className="mt-8">
          <SectionHead
            eyebrow="Factory Showcase"
            title="Real Satin Lanyards Manufactured for Institutions Across Assam"
            lede="Silky texture, photo-sharp edge-to-edge logo printing, and zero fading after hundreds of wash cycles."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {lanyardGallery.map((lg) => (
              <div key={lg.title} className="group overflow-hidden rounded-2xl border border-surface-border bg-surface shadow-sm transition hover:shadow-xl hover:border-accent/40">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950 img-shine">
                  <Image
                    src={lg.img}
                    alt={lg.title}
                    fill
                    className="img-zoom object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-3 right-3 rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] font-bold text-slate-200 backdrop-blur-md">
                    {lg.type}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-foreground text-sm">{lg.title}</h3>
                  <div className="mt-1 flex items-center gap-1 text-[11px] text-emerald-500 font-semibold">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Real Factory Product</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lanyard Macro Photo Showcase */}
        <div className="mt-20 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <div className="group relative overflow-hidden rounded-3xl border border-surface-border bg-slate-950 p-2 shadow-2xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl img-shine">
                <Image
                  src="/images/Lanyard with Hook Samples/Sample 11.jpg"
                  alt="Custom Printed 20mm Satin Lanyards with Metallic Dog Hooks and Safety Breakaways"
                  fill
                  priority
                  className="img-zoom object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="rounded bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-950">
                    Macro Specimen
                  </span>
                  <p className="text-sm font-bold mt-1">Dual-Sided Sublimation & Seamless Continuous Pattern</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold tracking-widest text-accent uppercase">Material Excellence</span>
            <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
              Silky-Smooth Satin Polyester with Permanent Dye Infusion
            </h2>
            <p className="text-sm leading-relaxed text-muted">
              Unlike scratchy ribbed webbing or peeling screen-printed inks, IDGen lanyards are made from ultra-soft, high-density satin polyester. The dye-sublimation process bonds vivid Pantone ink directly into every polyester thread, ensuring colors remain bright year after year.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl border border-surface-border bg-surface p-3">
                <p className="font-bold text-foreground">Anti-Chafing Satin</p>
                <p className="text-muted text-[11px] mt-0.5">Gentle on skin during 10+ hour shifts</p>
              </div>
              <div className="rounded-xl border border-surface-border bg-surface p-3">
                <p className="font-bold text-foreground">360° Swivel Dog Hook</p>
                <p className="text-muted text-[11px] mt-0.5">Nickel-plated anti-rust zinc alloy</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link href="/request-a-quote/" className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-slate-950 shadow transition hover:bg-accent-hover hover:text-white">
                Request Lanyard Quote
              </Link>
              <Link href="/pricing/" className="rounded-full border border-surface-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent">
                View Price Calculator
              </Link>
            </div>
          </div>
        </div>

        {/* Technical Specs Table */}
        <div className="mt-20">
          <SectionHead eyebrow="Technical Sheet" title="20 mm Satin Lanyard Specifications" />
          <div className="mt-6 overflow-x-auto rounded-2xl border border-surface-border bg-surface shadow-sm">
            <table className="w-full text-left text-sm">
              <tbody className="divide-y divide-surface-border">
                {lanyardSpecs.map((spec) => (
                  <tr key={spec.feature} className="hover:bg-background/50 transition">
                    <td className="px-6 py-4 font-bold text-foreground w-1/3">{spec.feature}</td>
                    <td className="px-6 py-4 text-muted font-medium">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Branding Options Grid */}
        <div className="mt-20">
          <SectionHead eyebrow="Customization" title="Branding & Visual Layout Options" />
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {brandingOptions.map((b) => (
              <FeatureCard key={b.title} icon={b.icon} title={b.title} body={b.body} />
            ))}
          </div>
        </div>

        {/* Applications */}
        <div className="mt-20">
          <SectionHead eyebrow="Sectors" title="Custom Lanyards Engineered for Every Industry" />
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((a) => (
              <FeatureCard key={a.title} icon={a.icon} title={a.title} body={a.body} href={a.href} />
            ))}
          </div>
        </div>

        {/* Workflow */}
        <div className="mt-20">
          <SectionHead eyebrow="Production Process" title="From Vector Logo to Finished Lanyard Batch" />
          <div className="mt-6">
            <WorkflowSteps steps={artworkProcess} />
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <SectionHead eyebrow="FAQ" title="Frequently Asked Questions About Custom Lanyards" />
          <div className="mt-6">
            <FaqList faqs={faqs} />
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16">
          <CtaBand
            title="Ready to order custom printed lanyards for your team?"
            body="Upload your vector logo to receive a free 3D digital proof and factory-direct quotation within 2 business hours."
            links={[
              { label: "Request a Lanyard Quote", href: "/request-a-quote/", primary: true },
              { label: "Explore Card Holders", href: "/id-card-holders/" },
              { label: "Ultrasonic Sealing Specs", href: "/ultrasonic-sealing/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
