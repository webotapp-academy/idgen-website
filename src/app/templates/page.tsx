import Image from "next/image";
import Link from "next/link";
import { FileText, Download, CheckCircle2, ShieldCheck, ArrowRight, FileSpreadsheet, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHead } from "@/components/ui/SectionHead";
import { SpecTable } from "@/components/ui/SpecTable";
import { CtaBand } from "@/components/ui/CtaBand";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "ID Card Printing Templates & Requirement Checklists | IDGen",
  description:
    "Download and use practical ID card project templates for student and employee data, bulk orders, specifications and identification requirements.",
  path: "/templates/",
});

const studentTemplate = {
  "Student Full Name": "Printed cardholder name",
  "Admission / Roll No.": "Unique academic identifier",
  "Class & Section": "Grade & Section allocation",
  "Date of Birth & Blood Group": "Emergency biometric indicators",
  "Guardian Contact No.": "Emergency phone number",
  "Photograph (Portrait)": "300 DPI 35x45mm portrait photo",
  "Library Barcode": "Code 128 / Code 39 format",
};

const employeeTemplate = {
  "Employee Full Name": "Printed staff name",
  "Employee ID Code": "Unique HR workforce identifier",
  "Designation": "Official corporate title",
  "Department": "Color-coded organizational unit",
  "Blood Group": "Emergency biometric field",
  "Access RFID UID": "Optional 13.56 MHz / 125 kHz key",
  "Photograph": "Clean background corporate headshot",
};

const bulkChecklist = [
  "Institutional Name & Vector Logo (AI / SVG / PNG)",
  "Approved Pantone Colors / Brand Typography",
  "Consolidated Excel / CSV Student or Staff Roster",
  "Matching Portrait Photographs (Named by Roll/ID)",
  "Card Orientation (Vertical Portrait / Horizontal Landscape)",
  "Lanyard Width (16mm / 20mm Satin Dye-Sublimation)",
  "Hardware Attachments (Dog Hook / Fish Hook / Breakaway)",
  "Protective Holder Model (V-1, V-2, CV-1 Crystal)",
  "Delivery Destination & Target Delivery Date",
];

export default function TemplatesPage() {
  return (
    <>
      
      <PageHero
        eyebrow="Pre-Production Tools"
        icon={FileText}
        title="ID Card Data Templates & Production Checklists"
        lede="Ensure 100% error-free batch printing with standardized Excel rosters, biometric photo guidelines, and technical specification sheets designed for schools and corporate enterprises."
        stats={[
          { label: "Format", value: "Excel / CSV / PDF" },
          { label: "Photo Ratio", value: "35 × 45 mm (300 DPI)" },
          { label: "Data Safety", value: "NDA Encrypted" },
          { label: "Factory Sync", value: "Direct Import" },
        ]}
        visual={
          <div className="relative h-[430px] w-full">
            <div className="absolute inset-0 bg-cyan-500/20 blur-[90px] rounded-full" />
            <div className="relative h-full w-full">
              {/* Primary Template Card Specimen */}
              <div className="absolute top-0 right-0 h-64 w-[75%] rounded-3xl overflow-hidden border border-white/20 shadow-2xl z-10 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/PVC Cards Samples/Sample 1.jpg"
                  alt="Standard CR80 ID Card Template Specimen"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-950">Standard CR80 Template</span>
                </div>
              </div>

              {/* Overlapping Lanyard Mockup */}
              <div className="absolute bottom-4 left-0 h-52 w-[60%] rounded-2xl overflow-hidden border border-white/20 shadow-2xl z-20 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/Lanyard with Hook Samples/Sample 1.jpeg"
                  alt="Lanyard Template Specimen"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Holder Accent */}
              <div className="absolute -bottom-2 right-12 h-32 w-32 rounded-2xl overflow-hidden border-4 border-[#0B1320] shadow-2xl z-30 hover:scale-110 transition-all duration-500">
                <Image
                  src="/images/ID card holder/IMG_20250117_172305.jpg"
                  alt="Acrylic Holder Fitting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        }
      />

      <Container className="py-14">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Templates", path: "/templates/" }]} />

        {/* Data Fields Spec Tables Split */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          
          {/* Student Template */}
          <div className="rounded-3xl border border-surface-border bg-surface p-6 sm:p-8 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Academic Standard</span>
            <h2 className="mt-1 text-xl font-bold text-foreground sm:text-2xl">
              Student ID Card Data Schema
            </h2>
            <p className="mt-1 text-xs text-muted leading-relaxed mb-6">
              Standard Excel column headers required for batch student identification:
            </p>
            <SpecTable specs={studentTemplate} />
          </div>

          {/* Employee Template */}
          <div className="rounded-3xl border border-surface-border bg-surface p-6 sm:p-8 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Enterprise Standard</span>
            <h2 className="mt-1 text-xl font-bold text-foreground sm:text-2xl">
              Employee ID Card Data Schema
            </h2>
            <p className="mt-1 text-xs text-muted leading-relaxed mb-6">
              Corporate HR roster structure for company staff badges:
            </p>
            <SpecTable specs={employeeTemplate} />
          </div>

        </div>

        {/* Bulk Order Pre-Flight Checklist */}
        <div className="mt-16 rounded-3xl border border-surface-border bg-gradient-to-br from-surface to-background p-8 sm:p-10 shadow-sm">
          <span className="flex items-center gap-2 text-xs font-bold tracking-widest text-accent uppercase mb-2">
            <ShieldCheck className="h-4 w-4" />
            <span>Pre-Flight Verification</span>
          </span>
          <h2 className="text-2xl font-black text-foreground sm:text-3xl">
            9-Point Bulk Order Production Checklist
          </h2>
          <p className="mt-2 text-sm text-muted max-w-2xl leading-relaxed">
            Ensure your files are 100% press-ready before scheduling factory production:
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {bulkChecklist.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 rounded-2xl border border-surface-border bg-background p-4">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-xs text-foreground font-medium leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16">
          <CtaBand
            title="Prefer a zero-spreadsheet digital approach?"
            body="Use IDGen Studio to let students and employees submit photos and details directly via mobile web links."
            links={[
              { label: "Explore IDGen Studio", href: "/idgen-studio/", primary: true },
              { label: "Request a Quote", href: "/request-a-quote/" },
              { label: "Browse Services", href: "/services/" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
