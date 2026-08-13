import Link from "next/link";
import {
  ShieldCheck,
  Layers,
  Sparkles,
  Building2,
  MapPin,
  CheckCircle2,
  Lock,
  Users,
  Award,
  Workflow,
  Eye,
  PackageCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FlowChain } from "@/components/ui/FlowChain";
import { WorkflowSteps } from "@/components/ui/WorkflowSteps";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema-org";
import { SITE } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import type { Faq } from "@/data/types";

export const metadata = pageMetadata({
  title: "Why Choose IDGen | ID Card Printing Experience Since 2014",
  description:
    "Discover IDGen, a Guwahati-based identity solutions company built on ID card printing experience since 2014, serving organizations across Assam and Northeast India.",
  path: "/why-idgen/",
});

const journey = [
  { year: "2014", label: "Identification experience begins", body: "Our journey in ID card printing and identification-product supply begins." },
  { year: "2014–2025", label: "Regional experience", body: "Identification products supplied to customers and organizations across Northeast India." },
  { year: "2026", label: "IDGen Identity Solutions", body: "The experience is brought together under a dedicated identity-solutions brand." },
  { year: "Today", label: "Products + Digital Workflow + Production", body: "IDGen combines identification products, digital workflows and structured production for modern organizational requirements." },
];

const whyChoose = [
  { icon: Award, title: "Identity-Focused", body: "IDGen is focused specifically on identification products and identification workflows." },
  { icon: Layers, title: "Experience Since 2014", body: "Our identification-product experience dates back to 2014 — more than a decade of practical experience." },
  { icon: MapPin, title: "Northeast India Experience", body: "We have experience supplying identification products to customers across the Northeast India market." },
  { icon: Workflow, title: "Structured Workflow", body: "Projects can follow a defined process from requirement through dispatch." },
  { icon: Sparkles, title: "Digital + Physical Workflow", body: "IDGen Studio connects digital data collection and approval with physical identification production." },
  { icon: Building2, title: "Bulk Capability", body: "Our production operation supports institutional and high-volume requirements." },
  { icon: PackageCheck, title: "Complete Ecosystem", body: "Organizations can coordinate the relevant identification products and accessories for their application." },
];

const productionApproach = [
  { title: "Requirement", body: "We understand the required product, quantity, specifications, personalization, accessories and delivery requirements." },
  { title: "Data", body: "For personalized projects, the required information and photographs are prepared. IDGen Studio can support digital data collection." },
  { title: "Design", body: "Artwork and personalization are prepared according to the project requirements." },
  { title: "Preview", body: "Where applicable, the customer or organization can review the design and personalized information before production." },
  { title: "Approval", body: "Approved information and specifications are released for production." },
  { title: "Production", body: "The project moves into production according to the confirmed specifications." },
  { title: "Assembly", body: "Where required, relevant components are assembled according to the selected configuration." },
  { title: "Quality Check", body: "Completed products are checked against the approved requirements." },
  { title: "Dispatch", body: "Completed and approved products are prepared for dispatch according to the applicable order timeline." },
];

const qualityCheckpoints = [
  { icon: Eye, title: "Design Check", body: "Artwork is checked against the approved requirements." },
  { icon: CheckCircle2, title: "Data Check", body: "Personalized information is processed according to the supplied or approved data." },
  { icon: ShieldCheck, title: "Specification Check", body: "Product specifications and required components are checked against the order." },
  { icon: PackageCheck, title: "Production Check", body: "Completed products are checked during the production workflow." },
  { icon: Layers, title: "Assembly Check", body: "Where applicable, the required combination of components is checked." },
  { icon: Award, title: "Final Check", body: "Completed materials are checked before dispatch." },
];

const commitments = [
  ["Clear", "Customers should understand what they are ordering."],
  ["Organized", "Large projects should follow a structured workflow."],
  ["Reviewable", "Important information should be reviewed before production where applicable."],
  ["Accurate", "Products should follow approved information and specifications."],
  ["Scalable", "The workflow should support organizational and bulk requirements."],
  ["Practical", "The solution should match the actual application."],
  ["Confidential", "Customer-provided identification information should be treated as confidential project information."],
  ["Transparent", "Capabilities and timelines should be communicated realistically."],
];

const faqs: Faq[] = [
  { q: "What is IDGen?", a: "IDGen is a Guwahati-based identity solutions company providing identification products, customization and related digital and production workflows for organizations." },
  { q: "How long has IDGen been in the ID card business?", a: "The identification-product experience behind IDGen dates back to 2014. IDGen is the newer identity-focused brand built on that experience." },
  { q: "Has IDGen served customers across Northeast India?", a: "Yes. Our identification-product business has experience supplying customers and organizations across the Northeast India market." },
  { q: "Where is IDGen based?", a: "IDGen is based in Guwahati, Assam, India." },
  { q: "What does IDGen provide?", a: "IDGen provides identification products and services including ID card printing, student and employee identification, event cards, RFID cards, custom printed lanyards, holders, hooks, ultrasonic sealing and related workflows." },
  { q: "Can IDGen handle bulk orders?", a: "Yes. IDGen supports organizational and high-volume identification requirements. Actual capacity depends on the product and project specifications." },
  { q: "Does IDGen provide digital data collection?", a: "Yes. IDGen Studio provides a digital workflow for suitable projects, including customized forms, link and QR-code sharing, data collection, ID card preview, organization review and approval." },
  { q: "Can ID cards be printed batch-wise?", a: "Yes. Suitable IDGen Studio projects can release approved records for batch-wise production." },
  { q: "How does IDGen handle student and employee data?", a: "IDGen treats customer-provided identification information as confidential project information and uses it for the agreed identification-related purpose. Organizations should provide only the information required for their project and follow their applicable privacy and data-handling policies." },
  { q: "Does IDGen manufacture every product in-house?", a: "No blanket in-house manufacturing claim is made for every product. Production methods vary by product and project. IDGen manages the required customization, production workflow, assembly and quality requirements according to the agreed specification." },
  { q: "What areas does IDGen serve?", a: "IDGen is based in Guwahati and serves organizations across Assam and the wider Northeast India market." },
];

export default function WhyIdgenPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Why IDGen", path: "/why-idgen/" },
        ])}
      />
      <PageHero
        eyebrow="Why IDGen"
        icon={ShieldCheck}
        title="Identity Solutions Simplified"
        lede="Built on identification experience dating back to 2014 — bringing products, digital workflows and production together into one organized identification system."
        stats={[
          { label: "Experience", value: `Since ${SITE.foundedYear}` },
          { label: "Capacity", value: SITE.dailyCapacity },
          { label: "Dispatch", value: SITE.dispatchTime },
        ]}
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Why IDGen", path: "/why-idgen/" }]} />

        {/* Intro */}
        <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-foreground/90">
          <p>
            IDGen is a Guwahati-based identity solutions company serving organizations across Assam and the
            wider Northeast India market. Our experience in ID card printing, identification products and
            organizational supply dates back to 2014 — over the years we&apos;ve worked with customers and
            organizations across Northeast India, gaining practical experience in personalized ID cards, bulk
            requirements, identification accessories and organizational supply.
          </p>
          <p>
            IDGen is the next stage of that experience — a dedicated identity-solutions brand focused on
            bringing products, digital workflows and production together into a more organized identification
            system. Our goal is simple: make identification projects easier to plan, manage and complete.
          </p>
        </div>
        <div className="mt-6">
          <FlowChain steps={["Requirement", "Data", "Design", "Preview", "Approval", "Production", "Quality Check", "Dispatch"]} />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/request-a-quote/" className="rounded-full bg-navy px-6 py-2.5 text-sm font-bold text-white transition hover:bg-navy-deep">
            Request a Quote
          </Link>
          <Link href="/services/" className="rounded-full border border-surface-border px-6 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent">
            Explore Our Services
          </Link>
        </div>

        {/* Journey */}
        <div className="mt-16">
          <SectionHead eyebrow="Our Journey" title="More than a decade of identification experience" />
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((j) => (
              <div key={j.year} className="rounded-2xl border border-surface-border bg-surface p-5">
                <span className="font-mono text-xs font-bold text-accent">{j.year}</span>
                <h3 className="mt-2 font-semibold text-foreground">{j.label}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{j.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Regional focus */}
        <div className="mt-16 rounded-2xl border border-surface-border bg-surface p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
            <div>
              <h2 className="text-lg font-bold text-foreground">Serving Northeast India</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                IDGen is based in {SITE.hqCity}, {SITE.hqState}, providing a central base for serving
                organizations across the region. Our regional focus includes:
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {SITE.regionalFocus.map((r) => (
                  <span key={r} className="rounded-full bg-background px-3 py-1 text-xs font-semibold text-foreground">
                    {r}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm">
                <Link href="/service-areas/assam/" className="font-semibold text-accent hover:underline">
                  ID Card Printing in Assam →
                </Link>{" "}
                <Link href="/service-areas/assam/guwahati/" className="ml-4 font-semibold text-accent hover:underline">
                  ID Card Printing in Guwahati →
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Why choose grid */}
        <div className="mt-16">
          <SectionHead eyebrow="Capabilities" title="Why organizations choose IDGen" lede="Choosing an identification supplier isn't only about who can print a card — the real requirement spans data, design, personalization, approval, production, accessories, quality and delivery." />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((w) => (
              <FeatureCard key={w.title} icon={w.icon} title={w.title} body={w.body} />
            ))}
          </div>
        </div>

        {/* Trust evidence note */}
        <div className="mt-16 rounded-2xl border border-dashed border-surface-border bg-surface p-6">
          <h2 className="text-lg font-bold text-foreground">Organizations Across Northeast India</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            Over the years, our identification business has supplied products to customers and organizations
            across Northeast India — projects involving personalization, bulk quantities, identification
            accessories, production and delivery. Real customer logos, testimonials and project photographs
            will be added here once customer permission is confirmed — we don&apos;t display placeholder
            evidence as if it were real.
          </p>
        </div>

        {/* Data confidentiality */}
        <div className="mt-16">
          <SectionHead eyebrow="Data" title="Data Confidentiality & Responsible Handling" lede="Your identification data deserves care." />
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="space-y-4 text-sm leading-relaxed text-foreground/90">
              <p>
                ID card projects require organizations to share personal information such as student names,
                employee names, photographs, identification numbers, departments, designations and other
                information required for personalization. We understand that this information belongs to the
                organization and the individuals being identified — IDGen treats customer-provided
                identification data as confidential project information and handles it for the agreed
                identification-related purpose.
              </p>
              <p>
                For projects involving large quantities of personal information, we encourage organizations to
                share only what&apos;s required for the project, use authorized personnel for data submission
                and approval, review information before production, and follow their applicable privacy and
                data-handling policies.
              </p>
            </div>
            <div className="rounded-2xl border border-surface-border bg-surface p-6">
              <div className="flex items-center gap-2.5">
                <Lock className="h-5 w-5 text-accent" />
                <h3 className="font-semibold text-foreground">Information that may be provided</h3>
              </div>
              <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-muted">
                {["Student names", "Employee names", "Photographs", "ID numbers", "Classes / Courses", "Departments", "Designations", "QR / barcode data"].map((item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted">Only information required for the identification project should be provided.</p>
            </div>
          </div>
          <div className="mt-6">
            <FlowChain steps={["Customized Form", "Link / QR Code", "Data + Photo", "ID Card Preview", "Submission", "Organization Dashboard", "Review", "Approval", "Production"]} />
          </div>
        </div>

        {/* One identity partner */}
        <div className="mt-16">
          <SectionHead eyebrow="Coordination" title="One Identity Partner" lede="An identification project can require several connected products. Instead of treating every component as a separate requirement, IDGen coordinates the relevant products according to the application." />
          <div className="mt-6 flex flex-wrap gap-3">
            <FlowChain steps={["ID Card", "Holder", "Hook", "Lanyard"]} />
          </div>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-accent">
            <Link href="/id-card-printing/" className="hover:underline">ID Card Printing →</Link>
            <Link href="/custom-printed-lanyard-printing/" className="hover:underline">Custom Printed Lanyards →</Link>
            <Link href="/event-card-printing/" className="hover:underline">Event Card Printing →</Link>
            <Link href="/rfid-card-printing/" className="hover:underline">RFID Card Printing →</Link>
            <Link href="/id-card-holders/" className="hover:underline">ID Card Holders →</Link>
            <Link href="/id-card-hooks/" className="hover:underline">ID Card Hooks →</Link>
            <Link href="/ultrasonic-sealing/" className="hover:underline">Ultrasonic Sealing →</Link>
          </div>
        </div>

        {/* Production approach */}
        <div className="mt-16">
          <SectionHead eyebrow="Process" title="Our Production Approach" lede="From requirement to finished identification product — a structured approach that keeps personalized and bulk projects organized." />
          <div className="mt-6">
            <WorkflowSteps steps={productionApproach} />
          </div>
        </div>

        {/* Quality */}
        <div className="mt-16">
          <SectionHead
            eyebrow="Quality"
            title="Quality is more than how a card looks"
            lede="A card can look visually good and still be unusable if the name is incorrect, the photograph is mismatched, or the wrong specification is used. Our workflow gives importance to data, design, specification and approval checks."
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {qualityCheckpoints.map((c) => (
              <FeatureCard key={c.title} icon={c.icon} title={c.title} body={c.body} />
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">
            For large personalized orders, our workflow provides an opportunity to review names, photographs,
            ID numbers, classes, departments, designations and card artwork before production —{" "}
            <Link href="/idgen-studio/" className="font-semibold text-accent hover:underline">
              explore IDGen Studio →
            </Link>
          </p>
        </div>

        {/* Capability + honesty */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-surface-border bg-surface p-6">
            <h2 className="text-lg font-bold text-foreground">Production Capability</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              IDGen&apos;s stated production capability can reach up to {SITE.dailyCapacity}, depending on
              product type and project requirements. Actual project capacity can vary according to product
              type, quantity, personalization, artwork, data readiness, approval timing, assembly requirements
              and quality-control requirements — capacity should be confirmed against the specific project.
            </p>
            <Link href="/id-card-printing/" className="mt-4 inline-block text-sm font-semibold text-accent hover:underline">
              Explore ID Card Printing →
            </Link>
          </div>
          <div className="rounded-2xl border border-accent/30 bg-accent-soft p-6">
            <h2 className="text-lg font-bold text-navy-deep">Honest About Our Capabilities</h2>
            <p className="mt-2 text-sm leading-relaxed text-navy-deep/80">
              Trust requires accurate claims. IDGen does not describe every product as being manufactured 100%
              in-house — production methods can vary depending on the product and project. Our role is to
              manage the required identity-product customization, production workflow, assembly and quality
              requirements according to the agreed specification, so we can communicate our capabilities
              accurately and transparently.
            </p>
          </div>
        </div>

        {/* We focus on actual requirement */}
        <div className="mt-16">
          <SectionHead eyebrow="Fit" title="We focus on the actual requirement" lede="Not every organization needs the same identification setup — IDGen's role is to help determine the appropriate combination rather than forcing every customer into the same package." />
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["School", "Student ID Card + Lanyard + Holder"],
              ["Employee project", "Employee ID Card + Lanyard"],
              ["Event", "Event Card + Hook + Lanyard"],
              ["RFID project", "RFID Card + Required Identification Accessories"],
            ].map(([label, combo]) => (
              <div key={label} className="rounded-2xl border border-surface-border bg-surface p-5">
                <p className="text-xs font-bold tracking-widest text-accent uppercase">{label}</p>
                <p className="mt-2 text-sm font-medium text-foreground">{combo}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment */}
        <div className="mt-16">
          <SectionHead eyebrow="Our Commitment" title="What we hold ourselves to" />
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map(([label, body]) => (
              <div key={label} className="rounded-2xl border border-surface-border bg-surface p-5">
                <h3 className="font-semibold text-foreground">{label}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Who we serve */}
        <div className="mt-16 flex items-start gap-3 rounded-2xl border border-surface-border bg-surface p-6 sm:p-8">
          <Users className="mt-1 h-5 w-5 shrink-0 text-accent" />
          <div>
            <h2 className="text-lg font-bold text-foreground">Who We Serve</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
              Schools, Colleges, Universities, Companies, Corporate offices, Hospitals, Industries, Government
              organizations, NGOs, Institutions, Clubs, Associations, Events, and Membership organizations.
              Detailed requirements are covered on the relevant service pages.
            </p>
            <Link href="/services/" className="mt-3 inline-block text-sm font-semibold text-accent hover:underline">
              Explore Services →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <SectionHead eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mt-6">
            <FaqList faqs={faqs} />
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16">
          <CtaBand
            title="Need an identity solution?"
            body="Tell us what your organization needs — student identification, employee cards, event badges, RFID cards, custom lanyards or a complete identification project."
            links={[
              { label: "Request a Quote", href: "/request-a-quote/", primary: true },
              { label: "Explore IDGen Studio", href: "/idgen-studio/" },
              { label: "Contact IDGen", href: "/contact-us/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
