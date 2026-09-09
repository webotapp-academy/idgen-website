import React from "react";
import { pageMetadata } from "@/lib/metadata";
import { LegalDocumentShell, type LegalSectionItem, type LegalHighlight } from "@/components/legal/LegalDocumentShell";
import { AlertCircle } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/data/site";

export const metadata = pageMetadata({
  title: "Terms & Conditions — iDGen Identity Solutions",
  description:
    "Official Terms & Conditions governing your use of iDGen website, PVC ID cards, RFID credentials, custom lanyards, printing services, accessories, and the iDGen Studio platform.",
  path: "/terms-conditions/",
});

const termsHighlights: LegalHighlight[] = [
  {
    label: "Payment Terms",
    value: "50% Advance / 50% Pre-Dispatch",
    desc: "Order confirmed upon 50% advance; dispatch cleared upon balance receipt.",
    iconKey: "credit-card",
  },
  {
    label: "Production Multiples",
    value: "10 PVC Cards / 24 Lanyards",
    desc: "Batches align with manufacturing cycles (multiples of 10 for PVC, 24 for lanyards).",
    iconKey: "repeat",
  },
  {
    label: "Approval Required",
    value: "Digital Proof Sign-Off",
    desc: "Production commences strictly after written customer proof verification.",
    iconKey: "check",
  },
  {
    label: "Data Retention",
    value: "1-Month Studio Lifecycle",
    desc: "Standard operational retention for completed orders before scheduled deletion (export available).",
    iconKey: "trash",
  },
];

const termsSections: LegalSectionItem[] = [
  {
    id: "about-idgen",
    num: "1",
    title: "About iDGen",
    tags: ["identity", "pvc", "rfid", "smart cards", "lanyards", "accessories"],
    content: (
      <p>
        iDGen provides identity-related products and services including PVC ID Cards, RFID and Smart ID Cards, Event ID Cards, Lanyards, ID Card Accessories, and related printing and manufacturing services.
      </p>
    ),
  },
  {
    id: "orders-and-quotations",
    num: "2",
    title: "Orders & Quotations",
    tags: ["orders", "quotations", "pricing", "validity"],
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>All orders are subject to confirmation by iDGen.</li>
        <li>Quotations are valid for the period mentioned in the quotation. Prices may be revised after the quotation validity period.</li>
        <li>Any change in card type, size, quantity, material, printing method, accessories, or other specifications after quotation acceptance may result in revised pricing.</li>
      </ul>
    ),
  },
  {
    id: "payment-terms",
    num: "3",
    title: "Payment Terms",
    tags: ["payment", "advance", "dispatch", "gst", "taxes"],
    content: (
      <div className="space-y-3">
        <p className="font-medium text-slate-900 dark:text-white">Unless otherwise agreed in writing:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>50% advance payment</strong> is required to confirm the order.</li>
          <li><strong>The remaining 50%</strong> must be paid before dispatch.</li>
          <li>iDGen may hold dispatch until full payment has been received.</li>
          <li>GST and other applicable taxes will be charged as mentioned in the quotation or invoice.</li>
        </ul>
        <div className="mt-3 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-3.5 text-xs text-slate-700 dark:text-slate-300">
          <strong>Notice:</strong> Complete payment receipt is required prior to courier hand-off or parcel release from our manufacturing hub.
        </div>
      </div>
    ),
  },
  {
    id: "advance-payment-and-cancellation",
    num: "4",
    title: "Advance Payment & Cancellation",
    tags: ["cancellation", "refund", "non-refundable"],
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Advance payment becomes non-refundable once the order has been confirmed and design, work, or production has commenced.</li>
        <li>Orders cannot normally be cancelled after design approval or once production has started.</li>
        <li>Any exceptional cancellation or refund request will be considered by iDGen based on the stage of the order and costs already incurred.</li>
      </ul>
    ),
  },
  {
    id: "design-proof-and-customer-approval",
    num: "5",
    title: "Design Proof & Customer Approval",
    tags: ["proof", "approval", "sample", "whatsapp", "email"],
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Before printing, iDGen may provide a digital proof/sample for customer verification.</li>
        <li>Printing/production will begin only after customer approval.</li>
        <li>Approval may be provided through iDGen Studio, WhatsApp, email, or another agreed communication channel.</li>
      </ul>
    ),
  },
  {
    id: "customer-responsibility-data-photos",
    num: "6",
    title: "Customer Responsibility for Data & Photos",
    tags: ["photos", "spelling", "accuracy", "qr code", "barcode"],
    content: (
      <div className="space-y-3">
        <p>The customer is responsible for checking all information supplied for printing, including:</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 py-2">
          {[
            "Name",
            "Spelling",
            "Designation",
            "ID number",
            "Photograph",
            "Logo",
            "Department",
            "Colour",
            "Address",
            "Barcode/QR code",
            "Personal / org info",
          ].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-800 dark:text-slate-200"
            >
              • {item}
            </div>
          ))}
        </div>
        <p>The customer must also ensure that photographs and files supplied to iDGen are clear and suitable for printing.</p>
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3.5 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2">
          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
          <span>
            If a user or customer submits a wrong, incorrect, outdated, duplicate, unclear, or inappropriate photograph, iDGen will not be responsible for the resulting error in the printed ID card.
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "responsibility-after-approval",
    num: "7",
    title: "Responsibility After Approval",
    tags: ["approved", "error", "reprint", "chargeable"],
    content: (
      <div className="space-y-3">
        <p>
          Once the customer provides final approval and printing/production begins, iDGen will not be responsible for errors that were present in the approved information or artwork.
        </p>
        <p className="font-medium text-slate-800 dark:text-slate-200">This includes incorrect:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Names & Spelling</li>
          <li>Photographs</li>
          <li>Designations & Department names</li>
          <li>ID numbers</li>
          <li>Logos & Brand marks</li>
          <li>Colours</li>
          <li>Other customer-provided information</li>
        </ul>
        <p className="font-semibold text-slate-900 dark:text-white pt-1">
          Any reprint required because of a customer-approved error may be chargeable.
        </p>
      </div>
    ),
  },
  {
    id: "changes-after-approval",
    num: "8",
    title: "Changes After Approval",
    tags: ["modifications", "charges", "material", "reprint costs"],
    content: (
      <div className="space-y-2">
        <p>Any correction or change requested after final approval or after production has started may result in additional:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Design charges</li>
          <li>Material charges</li>
          <li>Production charges</li>
          <li>Reprinting charges</li>
          <li>Other applicable costs</li>
        </ul>
      </div>
    ),
  },
  {
    id: "print-quality-colour-variation",
    num: "9",
    title: "Print Quality & Colour Variation",
    tags: ["colour", "gamut", "cmyk", "rgb", "proof variance"],
    content: (
      <div className="space-y-3">
        <p>
          Minor colour differences may occur between a digital proof and the final printed product due to differences in:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Monitor/screen displays (RGB vs. CMYK calibration)</li>
          <li>Printing equipment</li>
          <li>Printing processes (dye-sublimation, re-transfer, UV flatbed, screen)</li>
          <li>Materials (PVC, PET, composite, woven polyester)</li>
          <li>Ink formulations</li>
          <li>Production batches</li>
        </ul>
        <p className="text-xs text-slate-500 dark:text-slate-400 italic">
          Minor colour variation will not normally be considered a manufacturing defect.
        </p>
      </div>
    ),
  },
  {
    id: "customer-supplied-files",
    num: "10",
    title: "Customer-Supplied Files",
    tags: ["resolution", "dpi", "vector", "artwork"],
    content: (
      <p>
        iDGen is not responsible for poor print results caused by low-resolution, unclear, damaged, incorrectly formatted, or poor-quality customer-supplied photographs, logos, artwork, or other files.
      </p>
    ),
  },
  {
    id: "production-timeline",
    num: "11",
    title: "Production Timeline",
    tags: ["timeline", "turnaround", "delays"],
    content: (
      <div className="space-y-3">
        <p>The production timeline will be communicated based on the order requirements.</p>
        <p className="font-medium text-slate-800 dark:text-slate-200">Production time may depend on receiving:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Required data</li>
          <li>Photographs</li>
          <li>Artwork</li>
          <li>Customer approval</li>
          <li>Advance payment</li>
          <li>Other required information</li>
        </ul>
        <p>Delays in receiving these items may extend the delivery date.</p>
      </div>
    ),
  },
  {
    id: "quantity-billing-cycle",
    num: "12",
    title: "Quantity & Billing Cycle",
    tags: ["multiples of 10", "multiples of 24", "billing", "pvc cards", "lanyards"],
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-4">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">PVC ID Cards (Multiples of 10)</h3>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
              Produced in a standard sheet production cycle of 10 cards. Therefore, PVC card quantities will normally be billed in multiples of 10, such as <strong>100, 110, 120, 130</strong>, etc.
            </p>
          </div>
          <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-4">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">Lanyards (Multiples of 24)</h3>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
              Produced in a standard production cycle of 24 pieces and will normally be billed in multiples of 24, such as <strong>120, 144, 168, 192</strong>, etc.
            </p>
          </div>
        </div>
        <p>
          Minor quantity variation may occur due to production requirements. Billing will be based on the applicable production quantity and agreed pricing.
        </p>
      </div>
    ),
  },
  {
    id: "reprints",
    num: "13",
    title: "Reprints",
    tags: ["reprints", "manufacturing defect", "replacement"],
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Reprints caused by customer-approved errors may be chargeable to the customer.</li>
        <li>
          If a confirmed manufacturing or printing defect is attributable to iDGen, iDGen will review the issue and, where appropriate, arrange a replacement or other suitable resolution.
        </li>
      </ul>
    ),
  },
  {
    id: "delivery-dispatch",
    num: "14",
    title: "Delivery & Dispatch",
    tags: ["shipping", "freight", "courier", "transportation"],
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Delivery or transportation charges will be borne by the customer unless specifically included in the quotation.</li>
        <li>iDGen may hold dispatch until the full payment has been received.</li>
      </ul>
    ),
  },
  {
    id: "delivery-delays",
    num: "15",
    title: "Delivery Delays",
    tags: ["delays", "force majeure", "courier", "weather"],
    content: (
      <div className="space-y-2">
        <p>
          iDGen will not be responsible for delays caused by circumstances outside its reasonable control, including:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Courier or logistics delays</li>
          <li>Weather conditions</li>
          <li>Natural events / disasters</li>
          <li>Strikes / bandhs</li>
          <li>Transport disruptions</li>
          <li>Government restrictions or checkpoints</li>
          <li>Other force majeure events</li>
        </ul>
      </div>
    ),
  },
  {
    id: "damaged-shipments",
    num: "16",
    title: "Damaged Shipments",
    tags: ["damaged parcel", "transit damage", "evidence", "photographs"],
    content: (
      <p>
        If a shipment is damaged during transportation, the customer should notify iDGen as soon as possible after receipt and provide clear photographs or video evidence of the package and damaged products. iDGen will review the matter and coordinate with the customer/courier as applicable.
      </p>
    ),
  },
  {
    id: "artwork-source-files",
    num: "17",
    title: "Artwork & Source Files",
    tags: ["source files", "vector", "ownership", "templates"],
    content: (
      <p>
        Unless otherwise agreed in writing, editable/source design files created by iDGen remain the property of iDGen. The customer receives the final printed products according to the approved design.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    num: "18",
    title: "Intellectual Property",
    tags: ["copyright", "trademark", "branding", "permissions"],
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>
          The iDGen name, logo, website content, graphics, software, designs, text, branding, and other original materials belonging to iDGen may not be copied, reproduced, modified, or commercially used without prior written permission.
        </li>
        <li>
          Customers remain responsible for ensuring that logos, photographs, artwork, trademarks, and other materials supplied by them may legally be used without infringing on third-party intellectual property.
        </li>
      </ul>
    ),
  },
  {
    id: "idgen-studio",
    num: "19",
    title: "iDGen Studio",
    tags: ["idgen studio", "data portal", "portal", "student verification"],
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>
          iDGen Studio may allow customers to collect, manage, review, approve, and process information required for ID card production.
        </li>
        <li>
          The customer is responsible for ensuring that the information and photographs submitted through iDGen Studio are accurate and that the customer has the necessary authority and permissions to provide such information.
        </li>
        <li>
          iDGen processes such information only for providing the agreed services, subject to the iDGen Privacy Policy.
        </li>
      </ul>
    ),
  },
  {
    id: "idgen-studio-data-ownership",
    num: "20",
    title: "iDGen Studio Data Ownership",
    tags: ["data owner", "data fiduciary", "data processor"],
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>
          Data, photographs, personal information, and other content submitted by a customer through iDGen Studio remain under the customer&apos;s control and responsibility as the relevant Data Owner/Data Fiduciary, where applicable.
        </li>
        <li>
          iDGen acts as a service provider/processor for the agreed ID card and related services, to the extent applicable under law.
        </li>
      </ul>
    ),
  },
  {
    id: "data-deletion",
    num: "21",
    title: "Data Deletion",
    tags: ["deletion", "retention", "1 month", "operational lifecycle"],
    content: (
      <div className="space-y-3">
        <p>After completion of an order, the customer may request deletion of data stored in iDGen Studio.</p>
        <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4 text-xs space-y-2">
          <p className="font-bold text-slate-900 dark:text-white">Standard 1-Month Operational Retention Period:</p>
          <p>
            Unless a longer retention period is required by law, agreed with the customer, or reasonably required for legitimate business records, <strong>iDGen&apos;s standard operational retention period for completed ID-card order data is one month</strong>, after which the applicable data is scheduled for deletion.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "data-export-before-deletion",
    num: "22",
    title: "Data Export Before Deletion",
    tags: ["export", "excel", "photos zip", "backup"],
    content: (
      <div className="space-y-2">
        <p>
          Before scheduled deletion, the customer may request an export of available order data. Where technically available, iDGen may provide:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>Customer/order data in Excel format; and</strong></li>
          <li><strong>Photographs in a separate folder.</strong></li>
        </ul>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          The customer should make the request before the scheduled deletion date.
        </p>
      </div>
    ),
  },
  {
    id: "data-security",
    num: "23",
    title: "Data Security",
    tags: ["security", "encryption", "safeguards"],
    content: (
      <p>
        iDGen will take reasonable technical and organisational measures to protect customer information. However, no internet-based service can be guaranteed to be completely secure, and iDGen cannot guarantee that unauthorised access, cyber incidents, or other events will never occur.
      </p>
    ),
  },
  {
    id: "website-availability",
    num: "24",
    title: "Website Availability",
    tags: ["uptime", "maintenance", "hosting"],
    content: (
      <p>
        iDGen aims to keep its website and online services available and functional. However, temporary interruptions may occur due to maintenance, technical problems, hosting issues, network failures, security incidents, or other circumstances beyond iDGen&apos;s reasonable control.
      </p>
    ),
  },
  {
    id: "third-party-services",
    num: "25",
    title: "Third-Party Services",
    tags: ["payment gateways", "courier partners", "cloud hosting"],
    content: (
      <p>
        The website or iDGen Studio may use third-party services such as payment gateways, hosting providers, communication services, analytics services, courier services, or other technology providers. Such services may have their own terms and privacy policies.
      </p>
    ),
  },
  {
    id: "limitation-of-liability",
    num: "26",
    title: "Limitation of Liability",
    tags: ["liability", "consequential damages", "indirect loss"],
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>
          To the extent permitted by applicable law, iDGen will not be liable for indirect, incidental, special, or consequential losses arising from the use of the website, software, products, or services.
        </li>
        <li>
          Nothing in these Terms is intended to exclude or limit liability where such exclusion or limitation is not permitted under applicable law.
        </li>
      </ul>
    ),
  },
  {
    id: "changes-to-these-terms",
    num: "27",
    title: "Changes to These Terms",
    tags: ["updates", "amendments", "revisions"],
    content: (
      <p>
        iDGen may update these Terms & Conditions from time to time. The updated version will be published on this website with the revised &ldquo;Last Updated&rdquo; date.
      </p>
    ),
  },
  {
    id: "governing-law-jurisdiction",
    num: "28",
    title: "Governing Law & Jurisdiction",
    tags: ["jurisdiction", "guwahati", "assam", "india", "disputes"],
    content: (
      <div className="space-y-2">
        <p>These Terms & Conditions shall be governed by the laws applicable in India.</p>
        <p className="font-semibold text-slate-900 dark:text-white">
          Any dispute arising out of or relating to the services, orders, quotations, or these Terms & Conditions shall be subject to the exclusive jurisdiction of the competent courts in Guwahati, Assam, India, to the extent legally permissible.
        </p>
      </div>
    ),
  },
  {
    id: "contact-us",
    num: "29",
    title: "Contact Us",
    tags: ["contact", "email", "address", "support"],
    content: (
      <div className="space-y-3">
        <p>For questions regarding these Terms & Conditions, please contact:</p>
        <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-4 text-xs space-y-1.5">
          <p className="font-bold text-slate-900 dark:text-white text-sm">iDGen</p>
          <p className="text-cyan-600 dark:text-cyan-400 font-medium">Identity Solutions, Simplified</p>
          <p>
            Email:{" "}
            <a href="mailto:info@idgen.in" className="text-cyan-600 dark:text-cyan-400 hover:underline">
              info@idgen.in
            </a>
          </p>
          <p>
            Website:{" "}
            <a href="https://www.idgen.in" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">
              www.idgen.in
            </a>
          </p>
          <p className="text-slate-500 dark:text-slate-400">Assam, India</p>
        </div>
      </div>
    ),
  },
];

export default function TermsConditionsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms & Conditions — iDGen",
    url: `${SITE_URL}/terms-conditions/`,
    description: "Official Terms & Conditions governing your use of iDGen website, PVC ID cards, RFID credentials, custom lanyards, printing services, and iDGen Studio platform.",
    dateModified: "2026-09-07",
    publisher: {
      "@type": "Organization",
      name: "iDGen",
      url: SITE_URL,
      email: "info@idgen.in",
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <LegalDocumentShell
        documentType="terms"
        title="Terms & Conditions"
        subtitle="Welcome to iDGen. These Terms & Conditions govern your use of the iDGen website, services, products, ID card printing services, accessories, and iDGen Studio platform. By using our website, placing an order, using iDGen Studio, or making a payment, you agree to these Terms & Conditions."
        lastUpdated="7 September 2026"
        highlights={termsHighlights}
        sections={termsSections}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Terms & Conditions", path: "/terms-conditions/" },
        ]}
      />
    </>
  );
}
