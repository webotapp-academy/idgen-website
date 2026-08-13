import Link from "next/link";
import { FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { SpecTable } from "@/components/ui/SpecTable";
import { CtaBand } from "@/components/ui/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema-org";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "ID Card Printing Templates & Requirement Checklists | IDGen",
  description:
    "Download and use practical ID card project templates for student and employee data, bulk orders, specifications and identification requirements.",
  path: "/templates/",
});

const studentTemplate = {
  "Student Name": "Printed name",
  "Student ID": "Identification number",
  Class: "Current class",
  Section: "Class section",
  Course: "Course / program",
  "Roll Number": "Academic identification",
  Photograph: "Student photo",
  Institution: "Organization name",
  "QR Code": "Optional",
  Barcode: "Optional",
};

const employeeTemplate = {
  "Employee Name": "Printed name",
  "Employee ID": "Employee identification",
  Photograph: "Employee photo",
  Designation: "Job designation",
  Department: "Department",
  Organization: "Company / institution",
  Contact: "If required",
  "QR Code": "Optional",
  Barcode: "Optional",
};

const specTemplate = {
  "Card Type": "PVC / RFID / Event / Membership",
  Orientation: "Portrait / Landscape",
  Printing: "Single Side / Double Side",
  Personalization: "Yes / No",
  Photo: "Yes / No",
  "QR Code": "Yes / No",
  Barcode: "Yes / No",
  Holder: "Yes / No",
  Hook: "Yes / No",
  Lanyard: "Yes / No",
  Sealing: "Yes / No",
};

const quoteTemplate = {
  Organization: "",
  "City / State": "",
  Product: "",
  Quantity: "",
  "Card Type": "",
  Printing: "",
  Accessories: "",
  "Artwork Available": "Yes / No",
  "Data Available": "Yes / No",
  "Delivery Location": "",
  "Required Timeline": "",
};

const bulkChecklist = [
  "Organization name",
  "Organization address / contact",
  "Product required",
  "Quantity",
  "Card specification",
  "Single-side or double-side printing",
  "Final artwork",
  "Data file",
  "Photographs",
  "Photo-to-record matching",
  "Required QR / barcode information",
  "Holder requirement",
  "Hook requirement",
  "Lanyard requirement",
  "Lanyard width",
  "Attachment configuration",
  "RFID specification, if applicable",
  "Delivery location",
  "Required timeline",
  "Approval contact",
];

const eventTemplate = [
  "Event Name",
  "Event Date",
  "Venue",
  "Expected Participants",
  "Badge Categories (Delegate, Speaker, Organizer, VIP, Exhibitor, Staff, Volunteer)",
  "Attachment: One Hook / Two Hooks / Other",
  "Lanyard: Standard / Custom Printed",
  "Sealing: Required / Not Required",
];

const rfidTemplate = ["RFID technology", "Frequency", "Chip", "Reader / system", "Existing card specification", "Card format", "Personalization requirement", "Quantity", "Application"];

export default function TemplatesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Templates", path: "/templates/" }])} />
      <PageHero
        eyebrow="Templates"
        icon={FileText}
        title="ID Card Printing Templates & Project Resources"
        lede="A well-prepared requirement makes an ID card project easier to manage. These templates help organizations organize the information required for identification projects before production begins."
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Templates", path: "/templates/" }]} />

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <SpecTable title="Student ID Card Data Template" specs={studentTemplate} />
          <SpecTable title="Employee ID Card Data Template" specs={employeeTemplate} />
        </div>

        <div className="mt-16">
          <SectionHead eyebrow="Bulk Projects" title="Bulk ID card project checklist" />
          <div className="mt-6 rounded-2xl border border-surface-border bg-surface p-6">
            <ul className="grid gap-2 sm:grid-cols-2">
              {bulkChecklist.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          <SpecTable title="ID Card Specification Template" specs={specTemplate} />
          <div className="rounded-2xl border border-surface-border bg-surface p-5">
            <h3 className="text-sm font-bold tracking-wide text-muted uppercase">Event Badge Planning Template</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {eventTemplate.map((item) => (
                <li key={item} className="border-b border-surface-border pb-2.5 text-foreground/90 last:border-0 last:pb-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-surface-border bg-surface p-5">
            <h3 className="text-sm font-bold tracking-wide text-muted uppercase">RFID Requirement Template</h3>
            <p className="mt-2 text-xs text-muted">Before requesting an RFID quotation, provide:</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {rfidTemplate.map((item) => (
                <li key={item} className="border-b border-surface-border pb-2.5 text-foreground/90 last:border-0 last:pb-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <SpecTable title="Quote Preparation Template" specs={quoteTemplate} />
        </div>

        <div className="mt-16 rounded-2xl border border-surface-border bg-surface p-6">
          <h3 className="font-semibold text-foreground">IDGen Studio data collection planning template</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            For suitable projects, define: Organization → Required Fields → Photo Requirement → Card Design →
            Preview → Organization Review → Approval → Production. The detailed digital workflow lives on{" "}
            <Link href="/idgen-studio/" className="font-semibold text-accent hover:underline">
              IDGen Studio
            </Link>
            .
          </p>
        </div>

        <div className="mt-16">
          <CtaBand
            title="Ready to send your requirement?"
            body="Use these templates to prepare your project, then request a quotation."
            links={[{ label: "Request a Quote", href: "/request-a-quote/", primary: true }]}
          />
        </div>
      </Container>
    </>
  );
}
