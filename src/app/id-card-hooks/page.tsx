import Link from "next/link";
import { Link2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { FlowChain } from "@/components/ui/FlowChain";
import { WorkflowSteps } from "@/components/ui/WorkflowSteps";
import { FaqList } from "@/components/ui/FaqList";
import { CtaBand } from "@/components/ui/CtaBand";
import { HolderShape } from "@/components/ui/HolderShape";
import { JsonLd } from "@/components/seo/JsonLd";
import { productSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";
import type { Faq } from "@/data/types";

export const metadata = pageMetadata({
  title: "ID Card Hooks & Fish Hook Attachments for Lanyards | IDGen",
  description: "ID card hooks and fish hook attachments for ID card holders, badges and lanyards. IDGen supplies compatible attachment options for schools, companies, institutions and events.",
  path: "/id-card-hooks/",
});

const chooseFactors = [
  { title: "Holder Type", body: "Check the attachment point on your ID card holder." },
  { title: "Card Configuration", body: "Confirm whether the card is used inside a holder or as a direct badge attachment." },
  { title: "Lanyard", body: "Check the lanyard width and attachment arrangement." },
  { title: "Application", body: "Daily student use, employee identification, visitor identification, events, membership, or institutional use." },
];

const orderingSteps = [
  { title: "Tell Us Your Requirement", body: "Provide the required quantity and application." },
  { title: "Share Your Holder Details", body: "Tell us the holder model if known (V-1 / V-2 / H-1 / H-2)." },
  { title: "Confirm Attachment", body: "Specify one hook, two hooks, fish hook, or another compatible attachment." },
  { title: "Confirm Lanyard", body: "If required, specify your lanyard type and width." },
  { title: "Confirm Quantity", body: "Confirm the number of complete sets or individual hooks required." },
  { title: "Order Confirmation", body: "Once configuration and quantity are confirmed, the order is processed." },
];

const faqs: Faq[] = [
  { q: "What is an ID card hook?", a: "An ID card hook is an attachment used to connect an ID card holder or badge to a lanyard." },
  { q: "What is a fish hook for an ID card?", a: "A fish hook is an attachment used to connect a compatible ID card holder or badge to a lanyard." },
  { q: "Can an ID card hook be used with an ID card holder?", a: "Yes. A compatible hook can connect an ID card holder to a lanyard." },
  { q: "Can I use a hook with a custom printed lanyard?", a: "Yes. A suitable hook can be used with a compatible custom printed lanyard." },
  { q: "Can I order hooks in bulk?", a: "Yes. ID card hooks can be supplied for institutional, organizational and event requirements, subject to availability and specifications." },
  { q: "Do I need one or two hooks?", a: "That depends on the card/holder and lanyard configuration. If your setup requires two attachment points, a two-hook configuration can be used." },
  { q: "How do I choose the correct ID card hook?", a: "Provide the card size, holder model, lanyard type and intended application so the compatible attachment can be identified." },
];

export default function IdCardHooksPage() {
  return (
    <>
      <JsonLd
        data={productSchema({
          name: "ID Card & Lanyard Hooks",
          description: "Fish hooks and attachment components connecting card holders to lanyards.",
          path: "/id-card-hooks/",
        })}
      />
      <PageHero
        eyebrow="Product"
        icon={Link2}
        title="ID Card Hooks & Attachments"
        lede="Attachment components used to connect identification cards, holders and badges to lanyards — the small but important link in a complete wearable identification setup."
        visual={
          <div className="mx-auto flex w-40 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
            <HolderShape variant="hook" />
          </div>
        }
      />
      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Products", path: "/products/" }, { name: "ID Card Hooks", path: "/id-card-hooks/" }]} />

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/request-a-quote/" className="rounded-full bg-navy px-6 py-2.5 text-sm font-bold text-white transition hover:bg-navy-deep">
            Request a Quote
          </Link>
          <Link href="/id-card-holders/" className="rounded-full border border-surface-border px-6 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent">
            Explore ID Card Holders
          </Link>
        </div>

        <div className="mt-12 max-w-3xl space-y-4 text-base leading-relaxed text-foreground/90">
          <p>
            An ID card hook is an attachment component used to connect an ID card holder or badge to a lanyard.
            Instead of attaching the card directly to the lanyard, the hook provides the connection between the
            two components — a typical setup is ID Card → Holder → Fish Hook → 20&nbsp;mm Custom Printed Lanyard.
          </p>
        </div>
        <div className="mt-4">
          <FlowChain steps={["ID Card", "Holder", "Hook", "Lanyard"]} />
        </div>

        {/* Configurations */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-surface-border bg-surface p-6">
            <h3 className="font-semibold text-foreground">One-Hook Configuration</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">ID Card / Holder + One Hook + Lanyard — suitable where a single attachment point is required.</p>
          </div>
          <div className="rounded-2xl border border-surface-border bg-surface p-6">
            <h3 className="font-semibold text-foreground">Two-Hook Configuration</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">ID Card / Holder + Two Hooks + Lanyard — suitable where two attachment points are required, common for event configurations.</p>
            <Link href="/event-card-printing/" className="mt-2 inline-block text-sm font-semibold text-accent hover:underline">Explore Event Card Printing →</Link>
          </div>
        </div>

        {/* Choosing */}
        <div className="mt-12">
          <SectionHead eyebrow="Choosing" title="Choosing the right ID card hook" lede="The correct hook shouldn't be selected on appearance alone — consider these four factors." />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {chooseFactors.map((f) => (
              <div key={f.title} className="rounded-2xl border border-surface-border bg-surface p-5">
                <h3 className="font-semibold text-foreground">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{f.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm font-semibold text-foreground">Simple rule: Holder → Compatible Hook → Lanyard.</p>
        </div>

        {/* Complete sets */}
        <div className="mt-12">
          <SectionHead eyebrow="Assemblies" title="Hooks for complete identification sets" />
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Basic", "ID Card + Holder"],
              ["Wearable", "ID Card + Holder + Hook + Lanyard"],
              ["Branded Wearable", "ID Card + Holder + Hook + Custom Printed Lanyard"],
              ["Complete Setup", "Card + Holder + Attachment + Lanyard"],
            ].map(([label, combo]) => (
              <div key={label} className="rounded-2xl border border-surface-border bg-surface p-5">
                <p className="text-xs font-bold tracking-widest text-accent uppercase">{label}</p>
                <p className="mt-2 text-sm font-medium text-foreground">{combo}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ordering */}
        <div className="mt-12">
          <SectionHead eyebrow="Process" title="How to order ID card hooks" />
          <div className="mt-6">
            <WorkflowSteps steps={orderingSteps} />
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <SectionHead eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mt-6">
            <FaqList faqs={faqs} />
          </div>
        </div>

        <div className="mt-12">
          <CtaBand
            title="Need ID card hooks?"
            body="Whether for student ID cards, employee cards, institutional identification or events, IDGen can help coordinate the appropriate attachment with your holder and lanyard configuration."
            links={[
              { label: "Request a Quote", href: "/request-a-quote/", primary: true },
              { label: "Explore ID Card Holders", href: "/id-card-holders/" },
              { label: "Explore Custom Printed Lanyards", href: "/custom-printed-lanyard-printing/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
