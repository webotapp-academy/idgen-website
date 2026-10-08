// A1 SEO fix: ISR - revalidate every hour for CDN caching
export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from "react";
import { pageMetadata } from "@/lib/metadata";
import { LegalDocumentShell, type LegalSectionItem, type LegalHighlight } from "@/components/legal/LegalDocumentShell";
import { AlertCircle, Truck, Package, ShieldAlert, CheckCircle2, Clock } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/data/site";

export const metadata = pageMetadata({
  title: "Shipping & Returns Policy",
  description:
    "Official Shipping & Returns terms for IDGen. Understand order processing, dispatch, courier responsibilities, custom manufacturing return policies, and defect reporting.",
  path: "/shipping-returns/",
});

const shippingHighlights: LegalHighlight[] = [
  {
    label: "Dispatch Handover",
    value: "Carrier Hand-Off",
    desc: "Parcels are handed over to agreed courier or transport providers upon production completion and balance receipt.",
    iconKey: "truck",
  },
  {
    label: "Custom Made",
    value: "Non-Returnable",
    desc: "Personalized products (custom names, photos, logos) are non-returnable once production commences.",
    iconKey: "box",
  },
  {
    label: "Customer Approval",
    value: "Proof Sign-Off",
    desc: "Production starts strictly after customer proof approval. Information in approved proofs is customer responsibility.",
    iconKey: "check",
  },
  {
    label: "Transit Damage",
    value: "Inspect on Receipt",
    desc: "Inspect parcels immediately upon delivery. Take photos/videos before opening and report promptly.",
    iconKey: "alert",
  },
];

const shippingSections: LegalSectionItem[] = [
  {
    id: "shipping-and-dispatch",
    num: "1",
    title: "Shipping & Dispatch",
    tags: ["order processing", "dispatch", "production timeline", "logistics", "courier handover"],
    content: (
      <div className="space-y-4">
        <div>
          <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5">Order Processing</h3>
          <p className="mb-2">Orders are processed after:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Required customer data, photographs, artwork and specifications have been received.</li>
            <li>The customer has approved the final proof/sample.</li>
            <li>The required advance payment has been received.</li>
          </ul>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            Production time depends on the product, quantity, customization requirements and approval time.
          </p>
        </div>

        <div className="pt-2 border-t border-slate-100 dark:border-white/5">
          <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5">Dispatch</h3>
          <p>
            After production is completed and the required balance payment is received, IDGen will hand over the parcel to the applicable <strong>courier, transport company, bus/transport service, or other logistics provider</strong>.
          </p>
          <p className="mt-2">
            The dispatch date is the date on which the parcel is handed over to the logistics provider.
          </p>
          <div className="mt-3 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-3.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
            <strong>Important Notice:</strong> IDGen is not the courier or transport service provider and does not provide courier dispatch services.
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "delivery-responsibility",
    num: "2",
    title: "Delivery Responsibility",
    tags: ["delivery", "transit", "logistics provider", "delays", "third party"],
    content: (
      <div className="space-y-3">
        <p>
          Once the parcel has been handed over to the courier/transport/logistics provider, the shipment is under the responsibility of that service provider.
        </p>
        <p className="font-medium text-slate-900 dark:text-white">
          The following are therefore outside IDGen&apos;s direct control:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 py-1">
          {[
            "Delivery time",
            "Route and transit time",
            "Courier/transport delays",
            "Delivery attempts",
            "Address-related delivery issues",
            "Delayed or missed delivery",
            "Transit damage",
            "Lost or misplaced parcels",
            "Returned-to-origin shipments",
            "Local delivery arrangements",
            "Remote-area or additional delivery charges",
          ].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] px-3 py-1.5 text-xs text-slate-700 dark:text-slate-300"
            >
              • {item}
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Any delivery estimate provided by IDGen is an <strong>approximate transit estimate provided by the logistics provider</strong> and is not a guaranteed delivery date.
        </p>
      </div>
    ),
  },
  {
    id: "shipping-address",
    num: "3",
    title: "Shipping Address",
    tags: ["address", "contact number", "pincode", "accuracy", "delivery details"],
    content: (
      <div className="space-y-3">
        <p>Customers must provide a complete and accurate shipping address, including:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Recipient name</li>
          <li>Company/institution name, where applicable</li>
          <li>Complete address</li>
          <li>City</li>
          <li>State</li>
          <li>PIN code</li>
          <li>Mobile number</li>
        </ul>
        <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-3.5 text-xs text-amber-900 dark:text-amber-200">
          IDGen will not be responsible for delays or additional charges caused by an incorrect, incomplete or unavailable delivery address or contact number provided by the customer.
        </div>
      </div>
    ),
  },
  {
    id: "courier-transport-charges",
    num: "4",
    title: "Courier & Transport Charges",
    tags: ["freight", "shipping charges", "quotation", "own courier", "transport"],
    content: (
      <div className="space-y-3">
        <p>
          Shipping, courier or transport charges will be charged as mentioned in the quotation/order, where applicable.
        </p>
        <p>
          If the customer chooses to arrange their own courier or transport service, the customer will be responsible for coordinating the pickup and all related logistics.
        </p>
      </div>
    ),
  },
  {
    id: "tracking",
    num: "5",
    title: "Tracking",
    tags: ["tracking", "awb", "consignment", "transit updates"],
    content: (
      <div className="space-y-3">
        <p>
          Where tracking information is available, IDGen may provide the customer with the applicable tracking/AWB/consignment details.
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          After the parcel has been handed over to the logistics provider, customers should also contact the respective courier/transport company for transit-related updates.
        </p>
      </div>
    ),
  },
  {
    id: "transit-damage",
    num: "6",
    title: "Transit Damage",
    tags: ["damage", "inspection", "photos", "videos", "transit claim"],
    content: (
      <div className="space-y-3">
        <p className="font-medium text-slate-900 dark:text-white">
          Customers should inspect the parcel immediately upon receipt.
        </p>
        <p>If the parcel appears damaged, customers should:</p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Take photographs/videos of the package before opening it, where possible.</li>
          <li>Take photographs/videos of the damaged products and packaging.</li>
          <li>Inform IDGen as soon as possible.</li>
          <li>Provide the relevant photographs, videos and shipment details for review.</li>
        </ol>
        <p className="text-xs text-slate-600 dark:text-slate-400">
          IDGen will review cases of transit damage and coordinate with the logistics provider where appropriate.
        </p>
      </div>
    ),
  },
  {
    id: "lost-missing-shipments",
    num: "7",
    title: "Lost or Missing Shipments",
    tags: ["lost package", "missing", "carrier investigation", "claim"],
    content: (
      <div className="space-y-3">
        <p>
          If a shipment is reported as lost or missing during transit, IDGen may assist the customer in raising a query or claim with the relevant courier/transport provider.
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          The final resolution of a logistics-related loss will depend on the investigation and policies of the respective courier/transport provider.
        </p>
      </div>
    ),
  },
  {
    id: "undelivered-returned-shipments",
    num: "8",
    title: "Undelivered or Returned Shipments",
    tags: ["returned to origin", "rto", "re-dispatch", "undelivered"],
    content: (
      <div className="space-y-3">
        <p>If a parcel is returned to IDGen because of:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Incorrect or incomplete address</li>
          <li>Recipient unavailable</li>
          <li>Refusal to accept the parcel</li>
          <li>Incorrect phone number</li>
          <li>Failure to collect the parcel</li>
          <li>Courier/transport delivery restrictions</li>
          <li>Any other reason attributable to the customer</li>
        </ul>
        <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-3.5 text-xs text-slate-700 dark:text-slate-300">
          Additional shipping or re-dispatch charges may apply. Such charges must be paid before the parcel is dispatched again.
        </div>
      </div>
    ),
  },
  {
    id: "returns",
    num: "9",
    title: "Returns",
    tags: ["returns", "custom made", "personalized", "policy"],
    content: (
      <div className="space-y-3">
        <p>
          Because our products are generally <strong>custom-made and personalized</strong>, including printed names, photographs, ID numbers, logos, designs and other customer-specific information, we generally <strong>do not accept returns or cancellations after production has commenced</strong>.
        </p>
        <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] p-3.5 text-xs text-slate-600 dark:text-slate-400">
          Returns are not accepted simply because the customer changes their mind or no longer requires the products.
        </div>
      </div>
    ),
  },
  {
    id: "customer-approved-errors",
    num: "10",
    title: "Customer-Approved Errors",
    tags: ["proof sign-off", "spelling errors", "photo errors", "chargeable reprint"],
    content: (
      <div className="space-y-3">
        <p>
          Before production, IDGen provides a proof/sample for customer verification and approval. Once the customer approves the proof, IDGen proceeds with production.
        </p>
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
          <span>
            <strong>Errors in names, spelling, photographs, ID numbers, design, logos, colours, designations or other information that were present in the approved proof will be the customer&apos;s responsibility and will not qualify for a free return or replacement.</strong>
          </span>
        </div>
        <p className="font-semibold text-slate-900 dark:text-white text-xs">
          Any reprinting required because of such customer-approved errors will be chargeable.
        </p>
      </div>
    ),
  },
  {
    id: "manufacturing-defects",
    num: "11",
    title: "Manufacturing or Printing Defects",
    tags: ["defects", "printing error", "reprint", "replacement", "quality check"],
    content: (
      <div className="space-y-3">
        <p>
          If a product has a genuine manufacturing or printing defect attributable to IDGen, the customer should contact IDGen with photographs/videos and order details.
        </p>
        <p>
          After review and confirmation, IDGen may provide an appropriate resolution, which may include replacement or reprinting of the affected products.
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          The resolution will be determined based on the nature and extent of the confirmed defect.
        </p>
      </div>
    ),
  },
  {
    id: "non-returnable-products",
    num: "12",
    title: "Non-Returnable Customized Products",
    tags: ["non-returnable", "pvc cards", "lanyards", "rfid", "custom badges"],
    content: (
      <div className="space-y-3">
        <p className="font-medium text-slate-900 dark:text-white">
          The following products are generally non-returnable once production has commenced:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 py-1">
          {[
            "Personalized ID cards",
            "Employee / student cards",
            "RFID cards",
            "Customized event cards",
            "Printed lanyards",
            "Customized holders & accessories",
            "Products containing customer-specific names, photos, numbers or logos",
            "Other specially manufactured or customized products",
          ].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] px-3 py-1.5 text-xs text-slate-700 dark:text-slate-300"
            >
              • {item}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "cancellation",
    num: "13",
    title: "Cancellation",
    tags: ["cancellation", "pre-production", "advance payment"],
    content: (
      <div className="space-y-3">
        <p>
          An order may be cancelled only if production has not commenced and the cancellation is accepted by IDGen.
        </p>
        <p>
          Once production, printing, personalization or material preparation has commenced, the order generally cannot be cancelled.
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Any applicable advance payment may be non-refundable as per the quotation/order terms.
        </p>
      </div>
    ),
  },
  {
    id: "refunds",
    num: "14",
    title: "Refunds",
    tags: ["refunds", "exceptions", "non-refundable clauses"],
    content: (
      <div className="space-y-3">
        <p>
          Where a refund is approved by IDGen, the refund amount and method will depend on the circumstances of the order.
        </p>
        <p className="font-medium text-slate-900 dark:text-white">No refund will normally be provided for:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Customer-approved printing errors</li>
          <li>Change of mind</li>
          <li>Incorrect customer-provided information</li>
          <li>Failure to provide required information</li>
          <li>Incorrect address supplied by the customer</li>
          <li>Refusal or failure to accept delivery</li>
          <li>Delays caused by the courier/transport provider</li>
        </ul>
      </div>
    ),
  },
  {
    id: "important-notice",
    num: "15",
    title: "Important Notice",
    tags: ["scope of service", "responsibility", "courier terms"],
    content: (
      <div className="space-y-3">
        <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-4.5 text-xs space-y-2">
          <p className="font-bold text-slate-900 dark:text-white text-sm">
            Manufacturing & Dispatch Scope
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            <strong>IDGen&apos;s responsibility is to manufacture the ordered products and hand over the completed parcel to the applicable courier, transport or logistics provider. IDGen does not provide courier dispatch services.</strong>
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Once the parcel has been handed over to the logistics provider, delivery is subject to the terms, routes, schedules and operating conditions of that provider.
          </p>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          For any questions regarding an order, customers may contact IDGen using the contact details provided on the website or quotation.
        </p>
      </div>
    ),
  },
  {
    id: "changes-to-policy",
    num: "16",
    title: "Changes to This Policy",
    tags: ["policy updates", "revisions", "terms modification"],
    content: (
      <div className="space-y-2">
        <p>
          IDGen may update this Shipping & Returns policy from time to time to reflect changes in our products, services, logistics arrangements or applicable requirements.
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          The updated version will be published on this page with the revised date.
        </p>
      </div>
    ),
  },
];

export default function ShippingReturnsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Shipping & Returns Policy — IDGen",
    url: `${SITE_URL}/shipping-returns/`,
    description: "Official Shipping & Returns terms for IDGen. Understand order processing, dispatch, courier responsibilities, custom manufacturing return policies, and defect reporting.",
    dateModified: "2026-10-01",
    publisher: {
      "@type": "Organization",
      name: "IDGen",
      url: SITE_URL,
      email: "info@idgen.in",
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <LegalDocumentShell
        documentType="shipping"
        title="Shipping & Returns"
        subtitle="At IDGen, we manufacture and supply ID cards, lanyards, holders, RFID cards, event cards and other identity products. Once an order is completed and the applicable payment is received, we hand over the parcel to the agreed courier, transport, or logistics provider for delivery. Please read the following Shipping & Returns terms carefully before placing an order."
        lastUpdated="1 October 2026"
        highlights={shippingHighlights}
        sections={shippingSections}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Shipping & Returns", path: "/shipping-returns/" },
        ]}
      />
    </>
  );
}
