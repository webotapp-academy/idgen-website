import type { ServiceIndexItem } from "./types";

export const services: ServiceIndexItem[] = [
  {
    slug: "id-card-printing",
    name: "ID Card Printing",
    category: "id-card",
    shortDescription: "PVC ID cards for schools, colleges, companies, hospitals and institutions.",
  },
  {
    slug: "student-id-card-printing",
    name: "Student ID Card Printing",
    category: "id-card",
    shortDescription: "Student identification for schools, colleges and universities with bulk personalization.",
  },
  {
    slug: "employee-id-card-printing",
    name: "Employee ID Card Printing",
    category: "id-card",
    shortDescription: "Employee and staff identification for companies, offices, hospitals and institutions.",
  },
  {
    slug: "custom-printed-lanyard-printing",
    name: "Custom Printed Lanyards",
    category: "lanyard",
    shortDescription: "Branded 20 mm lanyards with logos, colors and custom artwork.",
  },
  {
    slug: "event-card-printing",
    name: "Event Card Printing",
    category: "id-card",
    shortDescription: "Conference badges, delegate cards and event identification solutions.",
  },
  {
    slug: "rfid-card-printing",
    name: "RFID Card Printing",
    category: "id-card",
    shortDescription: "Customized RFID cards compatible with attendance and access systems.",
  },
  {
    slug: "ultrasonic-sealing",
    name: "Ultrasonic Sealing for ID Card Lanyards",
    category: "accessory",
    shortDescription: "Cleaner lanyard assembly and hook attachment for school, employee and bulk ID card projects.",
  },
  {
    slug: "membership-card-printing",
    name: "Membership Card Printing",
    category: "id-card",
    shortDescription: "Membership cards for clubs, associations and organizations with tiered designs.",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
