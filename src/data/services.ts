import type { ServiceContent } from "./types";

export const services: ServiceContent[] = [
  {
    slug: "school-id-card-printing",
    name: "School ID Card Printing",
    category: "id-card",
    shortDescription:
      "Durable, tamper-resistant PVC ID cards for schools across Northeast India, printed in-house and dispatched in bulk.",
    content: [
      "A school ID card has to survive a full academic year in a child's bag — corners get bent, cards get wet, laminate gets scratched. iDGen prints on 0.76mm PVC with edge-to-edge lamination, so the card holds up to daily handling instead of cracking or peeling within a term.",
      "We work directly from your student database: send a spreadsheet with names, classes, sections, and photos, and we handle layout, printing, and quality checks in-house rather than outsourcing to a third-party press. That keeps a full school's batch on one consistent print run, with matching card stock and color calibration across every card.",
      "Cards can include emergency contact details, blood group, bus route, and a QR code linking to a digital student profile — useful for schools running gate-entry or bus-tracking systems alongside physical cards.",
    ],
    highlights: [
      "0.76mm PVC, edge-to-edge lamination — built for a full academic year",
      "Bulk printing direct from your student spreadsheet, no manual re-entry",
      "Optional QR code for gate-entry and bus-tracking integration",
      "Consistent batch printing so every card in the school matches",
    ],
    faqs: [
      {
        q: "How much does school ID card printing cost in Guwahati?",
        a: "Pricing depends on card material, print sides, and order quantity — bulk school orders (200+ cards) get a lower per-card rate. Request a quote with your student count for an exact figure.",
      },
      {
        q: "What information can go on a school ID card?",
        a: "Standard fields are student photo, name, class, section, and school details. Most schools also add emergency contact, blood group, bus route, and a QR code for digital verification.",
      },
      {
        q: "How long does a bulk school order take?",
        a: "Once your student data and photos are finalized, a full-school batch typically ships within 5–7 working days.",
      },
    ],
    metaTitle: "School ID Card Printing | Bulk, Durable PVC Cards — iDGen",
    metaDescription:
      "Bulk school ID card printing on durable 0.76mm PVC with edge-to-edge lamination. Direct from your student spreadsheet, dispatched across Northeast India.",
  },
  {
    slug: "college-id-card-printing",
    name: "College ID Card Printing",
    category: "id-card",
    shortDescription:
      "Semester-batch ID card printing for colleges, with fast reprints for late admissions and lost cards.",
    content: [
      "College enrollment doesn't finalize in one clean batch — late admissions, transfers, and reissues trickle in for weeks after the main run. iDGen handles both: a full-batch print for your incoming semester, and a fast reprint lane for the stragglers that come in afterward.",
      "Cards typically carry department, course, and year alongside the standard photo ID fields, and we can print a library-barcode or RFID chip into the same card so students don't need a second credential for library access.",
    ],
    highlights: [
      "Full-batch semester printing plus a fast lane for late admissions",
      "Department, course, and year fields as standard",
      "Optional library barcode or RFID chip on the same card",
      "Reissue turnaround for lost or damaged cards",
    ],
    faqs: [
      {
        q: "Can you print a college ID card with a library barcode on it?",
        a: "Yes — a barcode or RFID chip can be embedded on the same card, so students use one ID for both identification and library access.",
      },
      {
        q: "What if a student joins after the main batch has already printed?",
        a: "Late admissions and reissues are printed on a separate short-turnaround run so the main batch schedule isn't held up.",
      },
    ],
    metaTitle: "College ID Card Printing | Semester Batches — iDGen",
    metaDescription:
      "College ID card printing with full-semester batch runs and fast reprints for late admissions. Optional library barcode or RFID chip.",
  },
  {
    slug: "university-id-card-printing",
    name: "University ID Card Printing",
    category: "id-card",
    shortDescription:
      "Multi-department, multi-campus ID card printing for universities, standardized across every faculty.",
    content: [
      "Universities run multiple faculties, sometimes multiple campuses, each with its own admissions calendar. Without a single print vendor, card design drifts — one department's cards look different from another's. iDGen sets a single card template per university and prints against it across every department, so a card issued by the Engineering faculty looks identical in quality and layout to one issued by the Arts faculty.",
      "For universities running access-controlled buildings, labs, or hostels, we integrate RFID directly into the ID card rather than issuing a separate access fob — see our RFID ID Card service for the technical detail.",
    ],
    highlights: [
      "One standardized template across every faculty and campus",
      "RFID access integration on the same card as the photo ID",
      "Bulk printing scaled to full-university enrollment numbers",
      "Staggered batches supported for multi-department admission cycles",
    ],
    faqs: [
      {
        q: "Can one university have multiple departments printing on the same account?",
        a: "Yes — we set up a single standardized template centrally, and departments can submit their own batches against it so every card stays consistent university-wide.",
      },
    ],
    metaTitle: "University ID Card Printing | Multi-Campus — iDGen",
    metaDescription:
      "University ID card printing standardized across faculties and campuses, with optional RFID access integration on the same card.",
  },
  {
    slug: "employee-id-card-printing",
    name: "Employee ID Card Printing",
    category: "id-card",
    shortDescription:
      "Corporate employee ID cards with access-control integration, printed for onboarding batches and single-card reissues.",
    content: [
      "Employee ID cards double as more than identification once a company adds access control — the card that gets someone through reception is often the same card that unlocks a server room or logs attendance. iDGen prints standard photo-ID employee cards and, where needed, embeds RFID for use with existing access-control hardware.",
      "New-hire batches print on your onboarding schedule; single reissues for lost cards or role changes turn around fast so an employee isn't stuck without building access.",
    ],
    highlights: [
      "RFID embedding compatible with common access-control systems",
      "Batch printing timed to onboarding cycles",
      "Fast single-card reissue for lost cards or role changes",
      "Consistent branding across departments and office locations",
    ],
    faqs: [
      {
        q: "Will an iDGen employee card work with our existing access-control system?",
        a: "In most cases, yes — we print to common RFID frequencies used by standard access-control hardware. Share your reader's spec sheet with your quote request and we'll confirm compatibility before printing.",
      },
    ],
    metaTitle: "Employee ID Card Printing | RFID Access-Ready — iDGen",
    metaDescription:
      "Corporate employee ID card printing with optional RFID access-control integration. Onboarding batches and fast single-card reissues.",
  },
  {
    slug: "visitor-id-card",
    name: "Visitor ID Card",
    category: "id-card",
    shortDescription:
      "Reusable or single-use visitor ID cards for front-desk issue, with clear visual differentiation from staff cards.",
    content: [
      "A visitor card's job is to be instantly distinguishable from a staff card at a glance — different color, different layout — so security and reception can tell who belongs where without checking twice. iDGen prints visitor cards in a distinct color scheme from your employee cards, either as a reusable badge stock for daily reissue or as a printed single-use card for pre-registered guests.",
    ],
    highlights: [
      "Distinct color/layout from staff cards for at-a-glance ID",
      "Reusable badge stock or single-use printed cards",
      "Optional date/time-stamped or expiring-visit fields",
    ],
    faqs: [
      {
        q: "Reusable or single-use — which is better for a corporate front desk?",
        a: "Reusable badge stock (write on with a marker or clip a printed slip) suits high walk-in volume. Pre-printed single-use cards suit facilities that pre-register guests in advance, like factories or campuses with visitor scheduling.",
      },
    ],
    metaTitle: "Visitor ID Card Printing | Reusable & Single-Use — iDGen",
    metaDescription:
      "Visitor ID cards in a distinct color from staff badges, available as reusable stock or pre-printed single-use cards.",
  },
  {
    slug: "rfid-id-card",
    name: "RFID ID Card",
    category: "id-card",
    shortDescription:
      "RFID chip embedded directly into a standard PVC ID card — one card for identification and access control.",
    content: [
      "RFID ID cards carry an embedded chip readable at a distance by compatible scanners, commonly used for door access, attendance logging, and library systems. iDGen embeds the chip during card lamination rather than as a stick-on tag, so the finished card is a single solid piece with no visible seam or bump — it looks and handles exactly like a standard photo ID.",
      "We print to common frequencies (125kHz proximity and 13.56MHz MIFARE/NFC) — tell us which reader hardware you're running and we'll match the chip to it before printing.",
    ],
    highlights: [
      "Chip embedded during lamination — no visible seam or added bulk",
      "125kHz proximity and 13.56MHz MIFARE/NFC supported",
      "Matched to your existing reader hardware before printing",
      "Same card doubles as photo ID and access credential",
    ],
    faqs: [
      {
        q: "What's the difference between RFID and barcode ID cards?",
        a: "A barcode card needs a direct line of sight to a scanner and gets unreadable if scratched. An RFID card is read by proximity, doesn't need line of sight, and holds up better to daily wear — the tradeoff is a higher per-card cost.",
      },
      {
        q: "Which RFID frequency do I need?",
        a: "125kHz proximity is common for basic door access; 13.56MHz MIFARE/NFC supports more advanced use (attendance systems, cashless payment, phone-based reading). Check your existing reader's spec sheet, or ask us to confirm before ordering.",
      },
    ],
    metaTitle: "RFID ID Card Printing | Embedded Chip Cards — iDGen",
    metaDescription:
      "RFID ID cards with the chip embedded during lamination — 125kHz and 13.56MHz MIFARE/NFC supported, matched to your existing access-control hardware.",
  },
  {
    slug: "event-id-card-printing",
    name: "Event ID Card Printing",
    category: "id-card",
    shortDescription:
      "Fast-turnaround event and conference badges, printed by attendee category with same-week dispatch.",
    content: [
      "Event badges run on tight timelines and usually need visual tiers — Speaker, Delegate, Press, Staff — sorted at a glance. iDGen prints event ID cards by category with distinct color-coding or borders per tier, from a registration list, on a same-week turnaround so late-registering attendees aren't left without a badge on event day.",
    ],
    highlights: [
      "Color-coded or bordered by attendee category (Speaker/Delegate/Press/Staff)",
      "Same-week turnaround for tight event timelines",
      "Printed directly from your registration list",
      "Lanyard pairing available — see Custom Printed Lanyard",
    ],
    faqs: [
      {
        q: "How fast can event badges be printed before an event date?",
        a: "Standard turnaround is same-week from a finalized registration list. For events under a week away, contact us directly to confirm we can meet your date before ordering.",
      },
    ],
    metaTitle: "Event ID Card Printing | Conference & Badge Printing — iDGen",
    metaDescription:
      "Fast-turnaround event and conference ID badges, color-coded by attendee category, printed from your registration list.",
  },
  {
    slug: "membership-card-printing",
    name: "Membership Card Printing",
    category: "id-card",
    shortDescription:
      "Membership cards for clubs, gyms, and associations — with tier design, expiry printing, and renewal batches.",
    content: [
      "Membership cards need to signal tier at a glance (Gold/Silver/Standard) and often carry a printed or embedded expiry so front-desk staff can spot a lapsed member without looking it up. iDGen prints tiered membership cards with distinct designs per level, and handles annual renewal batches as a standing print run rather than a one-off order each time your membership year turns over.",
    ],
    highlights: [
      "Distinct card design per membership tier",
      "Printed or embedded expiry/validity",
      "Annual renewal batches set up as a standing order",
      "Optional barcode for check-in scanning",
    ],
    faqs: [
      {
        q: "Can membership cards be reprinted automatically each renewal cycle?",
        a: "Yes — once your first batch is set up, we can run renewal batches as a standing annual order so you don't need to re-brief the design each year.",
      },
    ],
    metaTitle: "Membership Card Printing | Tiered & Renewal Batches — iDGen",
    metaDescription:
      "Membership card printing for clubs, gyms, and associations, with tiered designs, expiry printing, and standing annual renewal batches.",
  },
  {
    slug: "custom-printed-lanyard",
    name: "Custom Printed Lanyard",
    category: "lanyard",
    shortDescription:
      "Branded lanyards printed with your logo and colors, paired to ID card orders or ordered standalone.",
    content: [
      "A plain lanyard undersells a well-designed ID card. iDGen prints lanyards in your brand colors and logo, in polyester or nylon webbing, with a choice of safety breakaway clip, bulldog clip, or swivel hook — matched to whichever card holder your organization uses.",
    ],
    highlights: [
      "Full-color logo printing on polyester or nylon webbing",
      "Safety breakaway, bulldog clip, or swivel hook attachment",
      "Ordered alongside an ID card batch or standalone",
      "Bulk pricing for full-organization orders",
    ],
    faqs: [
      {
        q: "Do lanyards have to be ordered with an ID card batch?",
        a: "No — lanyards can be ordered standalone, though ordering them alongside an ID card batch is usually more cost-effective and ships together.",
      },
    ],
    metaTitle: "Custom Printed Lanyards | Branded, Bulk Printing — iDGen",
    metaDescription:
      "Custom printed lanyards in your brand colors and logo, with safety breakaway, bulldog clip, or swivel hook options. Bulk pricing available.",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
