import React from "react";
import { pageMetadata } from "@/lib/metadata";
import { LegalDocumentShell, type LegalSectionItem, type LegalHighlight } from "@/components/legal/LegalDocumentShell";
import { AlertCircle } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/data/site";

export const metadata = pageMetadata({
  title: "Privacy Policy — iDGen Identity Solutions",
  description:
    "Official Privacy Policy of iDGen explaining how personal information, photographs, student/employee ID credentials, and iDGen Studio order data are collected, processed, protected, and deleted.",
  path: "/privacy-policy/",
});

const privacyHighlights: LegalHighlight[] = [
  {
    label: "Data Integrity",
    value: "Zero Data Selling",
    desc: "We never sell or monetize customer or student personal credentials to third parties.",
    iconKey: "shield",
  },
  {
    label: "Data Ownership",
    value: "Customer is Data Fiduciary",
    desc: "You retain full ownership of employee, student, and institutional records; iDGen acts as processor.",
    iconKey: "user",
  },
  {
    label: "Studio Retention",
    value: "1-Month Operational Lifecycle",
    desc: "Completed order batches are scheduled for automated deletion after 1 month.",
    iconKey: "clock",
  },
  {
    label: "Data Export",
    value: "Excel + Photos Folder",
    desc: "Export your complete credential dataset and high-res photos prior to scheduled deletion.",
    iconKey: "spreadsheet",
  },
];

const privacySections: LegalSectionItem[] = [
  {
    id: "about-privacy-policy",
    num: "1",
    title: "About This Privacy Policy",
    tags: ["scope", "website", "studio", "printing", "services"],
    content: (
      <div className="space-y-3">
        <p>This Privacy Policy applies to:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>The iDGen website</li>
          <li>iDGen Studio</li>
          <li>ID card printing services</li>
          <li>Lanyard and accessory services</li>
          <li>Customer enquiries</li>
          <li>Orders and quotations</li>
          <li>Customer communications</li>
          <li>Other services provided by iDGen through digital or offline channels</li>
        </ul>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          By using our website or services, you acknowledge that you have read this Privacy Policy.
        </p>
      </div>
    ),
  },
  {
    id: "information-we-may-collect",
    num: "2",
    title: "Information We May Collect",
    tags: ["contact info", "student id", "employee id", "metadata", "logs"],
    content: (
      <div className="space-y-4">
        <p>Depending on the service you use, we may collect information such as:</p>

        {/* Subcategory 1 */}
        <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] p-4 space-y-2">
          <h3 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            A. Contact Information
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700 dark:text-slate-300">
            <li>• Name</li>
            <li>• Email address</li>
            <li>• Mobile/telephone number</li>
            <li>• Company/organisation name</li>
            <li>• Designation</li>
            <li>• Business address</li>
            <li>• Billing and shipping address</li>
          </ul>
        </div>

        {/* Subcategory 2 */}
        <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] p-4 space-y-2">
          <h3 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            B. ID Card Information
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            For ID card production, customers may provide:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700 dark:text-slate-300">
            <li>• Name</li>
            <li>• Photograph</li>
            <li>• Employee / student / member ID</li>
            <li>• Designation</li>
            <li>• Department</li>
            <li>• Class / course</li>
            <li>• Organisation details</li>
            <li>• Contact information</li>
            <li>• Date of joining / admission</li>
            <li>• Validity information</li>
            <li>• Barcode / QR code information</li>
            <li>• Other required information for production</li>
          </ul>
        </div>

        {/* Subcategory 3 */}
        <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] p-4 space-y-2">
          <h3 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            C. Order Information
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700 dark:text-slate-300">
            <li>• Quotation details</li>
            <li>• Order details</li>
            <li>• Product specifications</li>
            <li>• Payment information / status</li>
            <li>• Invoice information</li>
            <li>• Delivery information</li>
            <li>• Customer communications</li>
          </ul>
        </div>

        {/* Subcategory 4 */}
        <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] p-4 space-y-2">
          <h3 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            D. Technical Information
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            When you use our website or online services, certain technical information may be collected automatically:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700 dark:text-slate-300">
            <li>• IP address</li>
            <li>• Browser type</li>
            <li>• Device type</li>
            <li>• Operating system</li>
            <li>• Website usage information</li>
            <li>• Login / activity information</li>
            <li>• Security logs</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "photographs",
    num: "3",
    title: "Photographs",
    tags: ["photos", "facial images", "portraits", "permission"],
    content: (
      <div className="space-y-3">
        <p>
          Photographs submitted for ID card production are treated as personal information.
        </p>
        <p>
          The customer is responsible for ensuring that they have the necessary authority or permission to submit photographs and other personal information to iDGen for the requested service.
        </p>
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3.5 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2">
          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
          <span>
            If an incorrect or wrong photograph is submitted by a user/customer and approved for printing, iDGen will not be responsible for the resulting incorrect ID card.
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "how-we-use-personal-information",
    num: "4",
    title: "How We Use Personal Information",
    tags: ["usage", "processing", "operations", "fulfillment"],
    content: (
      <div className="space-y-3">
        <p>We may use personal information for purposes including:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          {[
            "Responding to enquiries",
            "Preparing quotations",
            "Processing orders",
            "Designing and printing ID cards",
            "Producing lanyards and accessories",
            "Managing customer accounts",
            "Operating iDGen Studio",
            "Processing customer approvals",
            "Communicating about orders",
            "Preparing invoices and payment records",
            "Arranging delivery",
            "Providing customer support",
            "Maintaining business records",
            "Preventing fraud and misuse",
            "Maintaining security",
            "Improving our website and services",
            "Complying with applicable legal requirements",
          ].map((purpose) => (
            <div
              key={purpose}
              className="rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] p-2 text-slate-700 dark:text-slate-300"
            >
              ✓ {purpose}
            </div>
          ))}
        </div>
        <p className="pt-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
          We will not use personal information for unrelated purposes unless permitted or required by applicable law or with appropriate consent where required.
        </p>
      </div>
    ),
  },
  {
    id: "idgen-studio-customer-data",
    num: "5",
    title: "iDGen Studio & Customer Data",
    tags: ["schools", "colleges", "companies", "data processor", "fiduciary"],
    content: (
      <div className="space-y-3">
        <p>
          iDGen Studio may allow an organisation such as a school, college, university, company, government department, or other organisation to collect and manage information for ID card production.
        </p>
        <p>
          In such cases, the organisation/customer generally determines what information is collected and why it is required.
        </p>
        <p>
          The customer is responsible for ensuring that it has the necessary authority, permissions, notices, and lawful basis required to collect and provide such information to iDGen.
        </p>
        <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-xs">
          iDGen processes the information to provide the agreed services.
        </p>
      </div>
    ),
  },
  {
    id: "data-ownership",
    num: "6",
    title: "Data Ownership",
    tags: ["data ownership", "fiduciary", "privacy ownership"],
    content: (
      <div className="space-y-2">
        <p>
          Personal data and photographs supplied by a customer for ID card production remain under the customer&apos;s control and responsibility, subject to applicable law.
        </p>
        <p className="font-semibold text-slate-900 dark:text-white">
          iDGen does not claim ownership of the customer&apos;s personal information merely because it is uploaded to iDGen Studio.
        </p>
      </div>
    ),
  },
  {
    id: "data-retention",
    num: "7",
    title: "Data Retention",
    tags: ["retention", "1 month", "deletion schedule"],
    content: (
      <div className="space-y-3">
        <p>
          We retain personal information only for as long as reasonably necessary for the purpose for which it was collected, to provide services, maintain business records, resolve disputes, comply with legal obligations, or for other legitimate purposes permitted by law.
        </p>
        <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4 space-y-2 text-xs">
          <h4 className="font-bold text-slate-900 dark:text-white text-sm">
            iDGen Studio Standard Retention Policy
          </h4>
          <p>
            For completed ID-card orders, <strong>iDGen&apos;s standard operational retention period is one month after completion of the order</strong>, unless:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>The customer requests a different arrangement;</li>
            <li>The customer requests an export before deletion;</li>
            <li>Retention is required by law;</li>
            <li>Retention is reasonably required for legitimate business records or dispute resolution.</li>
          </ul>
          <p className="font-semibold text-slate-800 dark:text-slate-200 pt-1">
            After the applicable retention period, the data is scheduled for deletion.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "data-deletion-requests",
    num: "8",
    title: "Data Deletion Requests",
    tags: ["delete", "erasure", "compliance"],
    content: (
      <div className="space-y-2">
        <p>
          Customers may request deletion of applicable personal information stored in iDGen Studio.
        </p>
        <p>
          After receiving and verifying a valid request, iDGen will delete the applicable data where deletion is permitted and technically possible.
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Certain information may need to be retained where required by law, accounting requirements, fraud prevention, dispute resolution, or other lawful purposes.
        </p>
      </div>
    ),
  },
  {
    id: "data-export",
    num: "9",
    title: "Data Export",
    tags: ["export", "excel format", "photos zip", "backup"],
    content: (
      <div className="space-y-3">
        <p>
          Before scheduled deletion of iDGen Studio data, the customer may request an export of available information.
        </p>
        <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] p-4 text-xs space-y-1.5">
          <p className="font-bold text-slate-900 dark:text-white">Where technically available, iDGen may provide:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Data in Excel format</strong>; and</li>
            <li><strong>Photographs in a separate folder</strong>.</li>
          </ul>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Customers are responsible for safely storing exported information after receiving it.
        </p>
      </div>
    ),
  },
  {
    id: "data-sharing",
    num: "10",
    title: "Data Sharing",
    tags: ["no selling", "third-parties", "courier", "hosting"],
    content: (
      <div className="space-y-3">
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 text-xs text-emerald-900 dark:text-emerald-200 font-bold">
          We do not sell customer personal information.
        </div>
        <p>
          We may share information only where reasonably necessary for providing services or where permitted or required by law. This may include sharing relevant information with:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-xs">
          <li>Hosting / cloud service providers</li>
          <li>Technology / service providers</li>
          <li>Payment service providers</li>
          <li>Courier and logistics partners</li>
          <li>Communication service providers</li>
          <li>Professional advisers</li>
          <li>Government or law-enforcement authorities where legally required</li>
        </ul>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Third-party service providers are expected to handle information appropriately and only for the relevant service or lawful purpose.
        </p>
      </div>
    ),
  },
  {
    id: "payment-information",
    num: "11",
    title: "Payment Information",
    tags: ["payment", "gateway", "cards", "cvv"],
    content: (
      <div className="space-y-2">
        <p>
          Payments may be processed through third-party payment gateways or financial institutions.
        </p>
        <p>
          iDGen generally does not store complete payment card details such as full debit/credit card numbers or CVV information on its own systems unless specifically required and lawfully permitted.
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Payment providers may have their own privacy policies and security practices.
        </p>
      </div>
    ),
  },
  {
    id: "cookies-similar-technologies",
    num: "12",
    title: "Cookies & Similar Technologies",
    tags: ["cookies", "session", "preferences", "analytics"],
    content: (
      <div className="space-y-3">
        <p>Our website may use cookies or similar technologies to:</p>
        <ul className="list-disc pl-5 space-y-1 text-xs">
          <li>Keep the website functioning</li>
          <li>Remember preferences</li>
          <li>Understand website usage</li>
          <li>Improve website performance</li>
          <li>Maintain security</li>
          <li>Support analytics or other website functionality</li>
        </ul>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          You may be able to control cookies through your browser settings. Disabling certain cookies may affect website functionality.
        </p>
      </div>
    ),
  },
  {
    id: "website-analytics",
    num: "13",
    title: "Website Analytics",
    tags: ["analytics", "metrics", "traffic"],
    content: (
      <p>
        We may use analytics or similar technologies to understand how visitors use our website and improve our services. Where third-party analytics services are used, information may be processed according to the relevant provider&apos;s terms and privacy policy.
      </p>
    ),
  },
  {
    id: "data-security",
    num: "14",
    title: "Data Security",
    tags: ["safeguards", "encryption", "protection"],
    content: (
      <div className="space-y-2">
        <p>
          iDGen takes reasonable technical and organisational measures to protect personal information from unauthorised access, misuse, loss, alteration, disclosure, or destruction.
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          However, no online system, website, database, or transmission method can be guaranteed to be completely secure.
        </p>
      </div>
    ),
  },
  {
    id: "customer-responsibility",
    num: "15",
    title: "Customer Responsibility",
    tags: ["customer duty", "accurate data", "authority", "export security"],
    content: (
      <div className="space-y-3">
        <p>Customers using iDGen Studio are responsible for:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-xs">
          <li>Providing accurate information</li>
          <li>Providing appropriate photographs</li>
          <li>Having the necessary authority to submit personal information</li>
          <li>Obtaining required permissions or consent where applicable</li>
          <li>Reviewing information before approving it for printing</li>
          <li>Keeping exported data secure</li>
          <li>Informing relevant individuals where required by applicable law</li>
        </ul>
      </div>
    ),
  },
  {
    id: "childrens-data",
    num: "16",
    title: "Children's Data",
    tags: ["students", "minors", "schools", "institutions", "consent"],
    content: (
      <div className="space-y-3">
        <p>
          iDGen may process information relating to students or other individuals who may be children when an authorised school, institution, parent, guardian, or other customer uses our ID card services.
        </p>
        <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-3.5 text-xs text-slate-700 dark:text-slate-300">
          Where required by applicable law, the relevant customer/organisation is responsible for obtaining the necessary consent or ensuring the appropriate legal basis and safeguards for processing such information.
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-400">
          iDGen will process such information only for the agreed service purposes.
        </p>
      </div>
    ),
  },
  {
    id: "data-breach-security-incidents",
    num: "17",
    title: "Data Breach & Security Incidents",
    tags: ["incident", "breach", "notification"],
    content: (
      <p>
        If iDGen becomes aware of a personal data security incident affecting information under our control, we will take appropriate steps to investigate, contain, and address the incident and make notifications where required by applicable law.
      </p>
    ),
  },
  {
    id: "your-privacy-requests",
    num: "18",
    title: "Your Privacy Requests",
    tags: ["rights", "access", "correction", "deletion"],
    content: (
      <div className="space-y-3">
        <p>
          Subject to applicable law and verification requirements, you may contact us regarding requests relating to your personal information, including requests concerning:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-xs">
          <li>Access to information</li>
          <li>Correction of inaccurate information</li>
          <li>Deletion of information</li>
          <li>Withdrawal of consent where applicable</li>
          <li>Other privacy-related requests</li>
        </ul>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Where a request relates to information controlled by a customer organisation, such as a school, college, company, or institution, iDGen may direct the request to that organisation where appropriate.
        </p>
      </div>
    ),
  },
  {
    id: "consent-withdrawal",
    num: "19",
    title: "Consent Withdrawal",
    tags: ["consent", "opt-out", "service impact"],
    content: (
      <div className="space-y-2">
        <p>
          Where processing is based on consent and applicable law provides a right to withdraw that consent, the individual may withdraw consent using the available method communicated by iDGen or the relevant customer organisation.
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Withdrawal of consent does not affect processing that was lawfully carried out before withdrawal. Withdrawal may also affect our ability to provide certain services where the information is necessary for those services.
        </p>
      </div>
    ),
  },
  {
    id: "data-protection-contact",
    num: "20",
    title: "Data Protection Contact",
    tags: ["dpo", "contact", "grievance", "email"],
    content: (
      <div className="space-y-2">
        <p>For privacy or data-related questions, requests, or complaints, please contact:</p>
        <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-4 text-xs space-y-1">
          <p className="font-bold text-slate-900 dark:text-white">iDGen</p>
          <p>
            Email:{" "}
            <a href="mailto:info@idgen.in" className="text-cyan-600 dark:text-cyan-400 font-semibold hover:underline">
              info@idgen.in
            </a>
          </p>
          <p className="text-slate-500 dark:text-slate-400">
            Please include sufficient information for us to understand and verify your request.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "third-party-websites",
    num: "21",
    title: "Third-Party Websites",
    tags: ["external links", "third parties"],
    content: (
      <div className="space-y-2">
        <p>
          Our website may contain links to third-party websites or services. iDGen is not responsible for the privacy practices, security, or content of third-party websites.
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          We recommend reviewing their respective privacy policies before providing personal information.
        </p>
      </div>
    ),
  },
  {
    id: "changes-to-privacy-policy",
    num: "22",
    title: "Changes to This Privacy Policy",
    tags: ["updates", "revisions", "last updated"],
    content: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our services, technology, legal requirements, or business practices. The updated version will be published on this website with a revised &ldquo;Last Updated&rdquo; date.
      </p>
    ),
  },
  {
    id: "governing-law",
    num: "23",
    title: "Governing Law",
    tags: ["jurisdiction", "guwahati", "assam", "india"],
    content: (
      <div className="space-y-2">
        <p>This Privacy Policy shall be governed by the applicable laws of India.</p>
        <p className="font-semibold text-slate-900 dark:text-white">
          Any dispute relating to this Privacy Policy shall be subject to the exclusive jurisdiction of the competent courts in Guwahati, Assam, India, to the extent legally permissible.
        </p>
      </div>
    ),
  },
  {
    id: "contact-us",
    num: "24",
    title: "Contact Us",
    tags: ["contact", "email", "address"],
    content: (
      <div className="space-y-3">
        <p>If you have any questions about this Privacy Policy or how iDGen handles information, please contact:</p>
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

export default function PrivacyPolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy — iDGen",
    url: `${SITE_URL}/privacy-policy/`,
    description: "Official Privacy Policy of iDGen explaining how personal information, photographs, student/employee ID credentials, and iDGen Studio order data are collected, processed, protected, and deleted.",
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
        documentType="privacy"
        title="Privacy Policy"
        subtitle="At iDGen, we respect your privacy and are committed to protecting the personal information entrusted to us. This Privacy Policy explains how iDGen collects, uses, stores, processes, shares, and deletes information when you visit our website, contact us, place an order, or use iDGen Studio."
        lastUpdated="7 September 2026"
        highlights={privacyHighlights}
        sections={privacySections}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy/" },
        ]}
      />
    </>
  );
}
