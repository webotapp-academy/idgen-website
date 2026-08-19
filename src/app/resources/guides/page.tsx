import Link from "next/link";
import { BookOpen } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { CtaBand } from "@/components/ui/CtaBand";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "ID Card Printing Guides & Identification Resources | IDGen",
  description:
    "Practical guides for planning student ID cards, employee ID cards, bulk printing, lanyards, RFID cards, event badges and complete identification projects.",
  path: "/resources/guides/",
});

const guides = [
  { title: "How to Plan a Bulk ID Card Printing Project", body: "Understand the information, photographs, quantity, card specifications, design approval and production requirements needed for a large ID card project.", href: "/id-card-printing/" },
  { title: "Student ID Card Requirements Checklist", body: "What schools and educational institutions should prepare before ordering student ID cards: name, photograph, admission number, class, course, institution name, QR/barcode, required accessories.", href: "/student-id-card-printing/" },
  { title: "Employee ID Card Requirements", body: "A practical guide to preparing employee information, photographs, departments, designations, employee IDs and branding.", href: "/employee-id-card-printing/" },
  { title: "ID Card + Holder + Hook + Lanyard: Which Setup Do You Need?", body: "Understand the difference between card only, card + holder, card + holder + hook + lanyard, and the complete wearable setup.", href: "/id-card-holders/" },
  { title: "How to Choose an ID Card Holder", body: "Portrait vs landscape orientation, holder type, card dimensions and attachment requirements.", href: "/id-card-holders/" },
  { title: "What Information Is Needed for RFID Card Printing?", body: "Before ordering RFID cards, confirm the applicable RFID technology, frequency, chip, reader/system compatibility, card format and personalization requirements.", href: "/rfid-card-printing/" },
  { title: "Custom Printed Lanyard Planning Guide", body: "Understand artwork, branding, colors, width and attachment requirements before ordering custom printed lanyards.", href: "/custom-printed-lanyard-printing/" },
  { title: "Event Badge Planning Guide", body: "Plan participant categories: delegate, speaker, organizer, VIP, exhibitor, staff, volunteer.", href: "/event-card-printing/" },
  { title: "How IDGen Studio Can Simplify ID Card Data Collection", body: "Understand the workflow: form → QR/link → data & photo → preview → organization review → approval → production.", href: "/idgen-studio/" },
  { title: "How to Prepare for Your ID Card Quote", body: "Before requesting a quotation, prepare organization name, city/state, product, quantity, card specification, printing requirement, accessories, delivery location, artwork, data readiness and timeline.", href: "/request-a-quote/" },
];

const categories = [
  "ID Card Printing",
  "Student Identification",
  "Employee Identification",
  "Accessories",
  "Events",
  "Technology",
  "Pricing",
];

export default function GuidesPage() {
  return (
    <>
      <PageHero
        eyebrow="Guides"
        icon={BookOpen}
        title="ID Card Printing & Identification Guides"
        lede="Planning an identification project becomes easier when the requirements are clear before production begins. These guides are designed for schools, colleges, universities, companies, hospitals, institutions, event organizers and associations."
      />

      <Container className="py-14">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources/" },
            { name: "Guides", path: "/resources/guides/" },
          ]}
        />

        <div className="mt-8">
          <SectionHead eyebrow="Featured" title="Featured guides" />
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {guides.map((g, i) => (
              <Link
                key={g.title}
                href={g.href}
                className="rounded-2xl border border-surface-border bg-surface p-5 transition hover:border-accent hover:shadow-sm"
              >
                <span className="font-mono text-xs font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-1.5 font-semibold text-foreground">{g.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{g.body}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <SectionHead eyebrow="Browse" title="Guide categories" />
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((c) => (
              <span key={c} className="rounded-full border border-surface-border bg-surface px-4 py-1.5 text-sm text-foreground">
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <CtaBand
            title="Not sure what you need?"
            body="Send IDGen your requirement and we can help determine the appropriate identification configuration."
            links={[{ label: "Request a Quote", href: "/request-a-quote/", primary: true }]}
          />
        </div>
      </Container>
    </>
  );
}
