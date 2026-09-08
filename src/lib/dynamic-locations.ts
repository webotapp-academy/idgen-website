import fs from "fs";
import path from "path";
import { states as initialStates } from "@/data/locations";
import type { Faq } from "@/data/types";
import {
  type SetupPackage,
  type CityServiceItem,
  type CityProductItem,
  type CityData,
  type StateData,
  type WhyChoosePointItem,
  getDefaultCityServices,
  getDefaultCityProducts,
  getDefaultWhyChoosePoints,
} from "./dynamic-locations-types";

export type { SetupPackage, CityServiceItem, CityProductItem, CityData, StateData, WhyChoosePointItem };
export { getDefaultCityServices, getDefaultCityProducts, getDefaultWhyChoosePoints };

const DATA_FILE_PATH = path.join(process.cwd(), "src", "data", "dynamic-locations.json");

// Rich Guwahati dataset extracted directly from guwahati.md
export const richGuwahatiData: CityData = {
  slug: "guwahati",
  name: "Guwahati",
  isPrimary: true,
  indexed: true,

  // 1. Hero Section
  heroEyebrow: "Assam Service Area",
  heroHeadline: "Professional ID Cards & Identification Solutions for Organizations in Guwahati",
  heroIntro:
    "IDGen is a Guwahati-based identity solutions company providing customized and bulk identification products for schools, colleges, universities, companies, hospitals, institutions, government organizations, NGOs, industries, events and other organizations.",
  heroSubtext:
    "Our identification-product experience dates back to 2014, and today that experience is brought together under the IDGen Identity Solutions brand. From a simple card requirement to a complete identification setup, we help organizations coordinate the products and production process they need.",
  heroImage: "/images/idgen-hero-cards-mockup.png",
  heroWorkflowSteps: ["Requirement", "Design", "Approval", "Production", "Quality Check", "Dispatch"],
  heroTrustBadges: ["Free Pre-Production Physical Sample", "100% Optical Inspection", "Direct Cleanroom Manufacturing"],
  heroCtaText: "Request a Guwahati Quote",
  heroSecondaryCtaText: "Call / WhatsApp IDGen",
  heroShowcaseBadge: "Guwahati Direct Supply",
  heroShowcaseChip1: "CR80 PVC & RFID Credentials",
  heroShowcaseChip2: "Verified Cleanroom",

  // 2. Local Presence & Coverage Section
  localPresenceBadge: "Central Manufacturing Hub • Guwahati Cleanroom",
  localPresenceSubBadge: "Direct Factory Access",
  localPresenceTitle: "IDGen in Guwahati: A Local Identity Solutions Partner",
  localColor:
    "IDGen is based in Guwahati, Assam, allowing us to work closely with organizations in one of Assam's major educational, commercial and institutional markets.",
  localAdvantagePills: [
    "Guwahati Primary Cleanroom",
    "24–48h Priority Batch Dispatch",
    "Pre-Production Physical Proofing",
    "100% Optical Quality Check",
  ],
  audiencesTitle: "Organizations in Guwahati require identity products for:",
  audiencesSubtitle: "Tailored credential architectures mapped to specific access requirements in Guwahati.",
  audiencesNote: "Single & dual-sided thermal, RFID & ultrasonic sealed credentials",
  targetAudiences: [
    { name: "Students & Scholars", category: "Schools, Colleges & Universities", badge: "Academic" },
    { name: "Employees & Executives", category: "Corporate, Startups & Tech Offices", badge: "Corporate" },
    { name: "Faculty & Teaching Staff", category: "Professors, Lecturers & Teachers", badge: "Faculty" },
    { name: "Visitors & Contractors", category: "Temporary Badges & Escorted Passes", badge: "Security" },
    { name: "Club & Association Members", category: "Societies, Alumni & Sports Guilds", badge: "Membership" },
    { name: "Event Participants", category: "Summits, Trade Expos & Festivals", badge: "Events" },
    { name: "Conference Delegates", category: "Keynote Speakers & VIP Badges", badge: "Conferences" },
    { name: "Institutional Access Users", category: "RFID Turnstile & Door Smartcards", badge: "Smart RFID" },
  ],
  organizationsTitle: "Typical Organizations We Serve in Guwahati:",
  organizationsSubtitle: "Institutions, healthcare bodies, government offices & enterprises across Guwahati.",
  organizationsServed: [
    "Schools",
    "Colleges",
    "Universities",
    "Companies",
    "Corporate offices",
    "Hospitals",
    "Hotels",
    "Institutions",
    "Government organizations",
    "NGOs",
    "Industries",
    "Events",
    "Clubs",
    "Associations",
  ],
  localAdvantageTitle: "Guwahati Local Production Advantage",
  localAdvantageDesc:
    "Direct cleanroom manufacturing in Guwahati ensures fast physical proofs, immediate design sign-off, and priority local dispatch.",
  localAdvantageCta: "Quote →",
  deliveryRoutesTitle: "Direct Doorstep Delivery & Pickup Routes Across Guwahati:",
  deliveryRoutesSubtitle: "Rapid fulfillment across all major institutional & commercial zones in Guwahati",
  coverageEyebrow: "Guwahati Service Coverage",
  coverageTitle: "Guwahati Service Coverage",
  coverageIntro:
    "IDGen is based in Guwahati and can serve organizations across the city and surrounding areas according to the applicable order and delivery arrangements.",
  coverageNotice: "We should not create separate pages for every Guwahati locality just for SEO.",
  coverageExamples: [
    "/service-areas/assam/guwahati/dispur/",
    "/service-areas/assam/guwahati/beltola/",
    "/service-areas/assam/guwahati/khanapara/",
  ],
  coveragePolicy:
    "unless we eventually have genuine local information, customers, projects, photographs or materially different search intent for those locations.",
  coverageFooterNote: "This follows the existing architecture rule in your website source.",
  nearbyAreas: [
    "Dispur",
    "Paltan Bazaar",
    "GS Road",
    "Khanapara",
    "Six Mile",
    "Panbazar",
    "Jalukbari",
    "Beltola",
    "Zoo Road",
    "Chandmari",
    "Ulubari",
    "Maligaon",
    "Borjhar",
    "Amingaon",
    "North Guwahati",
    "Mirza",
    "Azara",
  ],

  // 3. Products & Services
  services: getDefaultCityServices("Guwahati"),

  // 3b. Product Catalog (Physical Hardware & Identity Products)
  catalogEyebrow: "Guwahati Hardware & Products",
  catalogTitle: "Explore Our Product Catalog in Guwahati",
  catalogSubtitle:
    "From crystal-clear acrylic badge cases and anti-rust swivel hooks to custom zinc medals and 30-mil virgin PVC smart cards, discover IDGen's factory products supplied directly to organizations in Guwahati, Assam.",
  products: getDefaultCityProducts("Guwahati"),

  // 4. Complete ID Card Packages / Setups
  setupsEyebrow: "Configurations",
  setupsTitle: "Complete ID Card Solutions & Packages in Guwahati",
  setupsSubtitle:
    "Not every organization needs the same identification setup. Select the exact packaging that matches your project requirements.",
  completeSetups: [
    {
      title: "Card Only",
      subtitle: "For organizations that already have their own accessories.",
      items: ["CR80 PVC Card", "High-Resolution Front & Back Print", "Standard Lamination"],
    },
    {
      title: "Card + Holder",
      subtitle: "For protected and professional card presentation.",
      items: ["CR80 PVC Card", "Crystal / Matte Rigid Card Holder", "Thumb Slot Release"],
    },
    {
      title: "Card + Holder + Hook + Lanyard",
      subtitle: "For everyday wearable identification.",
      items: ["CR80 PVC Card", "Rigid Card Holder", "Metal Dog / Swivel Hook", "Custom Satin Lanyard"],
      recommended: true,
    },
    {
      title: "Complete Identification Setup",
      subtitle: "Full tamper-evident organizational protection.",
      items: [
        "CR80 PVC Card",
        "Ultrasonic Sealing Lamination",
        "Rigid / Soft ID Holder",
        "Custom Breakaway Hook",
        "Multi-Color Sublimation Lanyard",
      ],
    },
  ],

  // 5. Bulk Printing
  bulkEyebrow: "High-Capacity Production • Institutional Fulfillment",
  bulkTitle: "Bulk ID Card Printing in Guwahati",
  bulkDesc:
    "Direct cleanroom manufacturing in Guwahati ensuring high-capacity production, precise color calibration, and priority dispatch across Assam.",

  // 6. Why Choose IDGen
  whyChooseEyebrow: "Why Choose Us",
  whyChooseTitle: "Why Choose IDGen in Guwahati?",
  whyChooseSubtitle:
    "Guwahati-based manufacturing cleanroom, experience dating back to 2014, organizational focus, and an integrated digital workflow.",
  whyChoosePoints: [
    {
      title: "Guwahati-Based Manufacturing",
      desc: "Local presence in Guwahati ensures direct communication, rapid physical proofs, and 24–48h fast dispatch across Assam.",
      image: "/images/service-guwahati-hub.jpg",
      badge: "Direct Cleanroom Hub",
      stat: "24–48h Local Delivery",
    },
    {
      title: "Experience Since 2014",
      desc: "Over a decade of specialized expertise in high-volume card manufacturing, color calibration, RFID encoding, and zero-defect data integrity.",
      image: "/images/why-idgen-more-than-brand.jpg",
      badge: "10+ Years Proven",
      stat: "Since 2014",
    },
    {
      title: "Organizational Focus",
      desc: "Engineered specifically for institutional and enterprise workflows rather than basic retail single-card printing.",
      image: "/images/sol-institutions-idgen-v1.jpg",
      badge: "Institutional Grade",
      stat: "Bulk & Enterprise",
    },
    {
      title: "Complete Identification Ecosystem",
      desc: "One-stop integration of PVC cards, RFID chips, custom lanyards, crystal holders, clips, and ultrasonic edge sealing.",
      image: "/images/why-idgen-complete-ecosystem-branded.jpg",
      badge: "Turnkey Packages",
      stat: "Cards + Lanyards + Holders",
    },
    {
      title: "Structured 8-Stage Workflow",
      desc: "Rigorous quality stages from requirement → data check → proofing → cleanroom production → 100% optical inspection → dispatch.",
      image: "/images/why-idgen-production-batches-branded.jpg",
      badge: "Quality Assured",
      stat: "Zero-Defect Standard",
    },
    {
      title: "IDGen Studio Digital Portal",
      desc: "Collect student/employee photos, biometrics, and approve proofs online without paperwork or data confusion.",
      image: "/images/idgen-studio-digital-id-card-data-collection-workflow.jpg",
      badge: "Cloud Automation",
      stat: "Digital Previews",
    },
  ],

  // 7. Workflow
  workflowEyebrow: "Standard Workflow",
  workflowTitle: "How to Order ID Cards in Guwahati",
  workflowSubtitle:
    "An institutional-grade 8-stage production flow engineered for data integrity, zero defects, and doorstep fulfillment in Guwahati.",
  orderSteps: [
    {
      step: "01",
      title: "Tell Us Your Requirement",
      description: "Share your organization name, target card type, estimated quantity, and delivery timeline.",
    },
    {
      step: "02",
      title: "Share Your Data",
      description: "Provide student/employee Excel records and high-res photos (or use IDGen Studio digital portal).",
    },
    {
      step: "03",
      title: "Confirm the Design",
      description: "Submit your institution's template or have our design team craft a custom high-definition layout.",
    },
    {
      step: "04",
      title: "Review & Proofing",
      description: "Review digital PDF proofs or request physical pre-production sample specimens for institutional approval.",
    },
    {
      step: "05",
      title: "Approval",
      description: "Formal sign-off on design, data spelling, and accessory specifications before mass production.",
    },
    {
      step: "06",
      title: "Production",
      description: "Thermal transfer / retransfer card printing, RFID encoding, and ultrasonic lanyard welding in our cleanroom.",
    },
    {
      step: "07",
      title: "Quality Check",
      description: "100% optical inspection for print alignment, barcode legibility, chip frequency, and edge lamination.",
    },
    {
      step: "08",
      title: "Dispatch",
      description: "Secure sorted packaging and hand-delivery in Guwahati or priority courier dispatch across Assam.",
    },
  ],

  // 8. FAQs & Help
  faqsTitle: "Frequently Asked Questions in Guwahati",
  faqsSubtitle: "Key answers regarding ID card printing, batch timelines, accessories, and delivery in Guwahati.",
  faqsHelpTitle: "Have Specific Questions?",
  faqsHelpText:
    "Need guidance on custom RFID chip frequencies, lanyard branding, or batch approvals? Our Guwahati production desk is here to help.",
  faqs: [
    {
      q: "Where is IDGen located?",
      a: "IDGen is based in Guwahati, Assam, India, with centralized manufacturing facilities serving local institutions and the wider Northeast region.",
    },
    {
      q: "Does IDGen provide ID card printing in Guwahati?",
      a: "Yes. IDGen provides customized and bulk ID card printing and identification products for schools, universities, companies, hospitals, and events in Guwahati.",
    },
    {
      q: "Does IDGen print student ID cards in Guwahati?",
      a: "Yes. Student ID card projects are handled for schools, junior colleges, universities, and professional institutions with complete accessories.",
    },
    {
      q: "Does IDGen print employee ID cards in Guwahati?",
      a: "Yes. IDGen provides customized employee and staff ID cards for corporate enterprises, healthcare hospitals, government departments, and institutions.",
    },
    {
      q: "Can I order bulk ID cards in Guwahati?",
      a: "Yes. IDGen specializes in institutional and high-volume identification requirements, supporting batches from 50 to 50,000+ cards with tiered bulk pricing.",
    },
    {
      q: "Can ID cards be supplied with lanyards and holders?",
      a: "Yes. Cards can be combined with custom multicolor satin lanyards, crystal/rigid holders, metallic hooks, and ultrasonic edge sealing for a complete wearable setup.",
    },
    {
      q: "Does IDGen provide RFID cards in Guwahati?",
      a: "Yes. RFID and smart cards can be produced with 13.56 MHz Mifare 1K, 125 kHz Proximity, UHF, or dual-frequency chips compatible with your access control or attendance readers.",
    },
    {
      q: "Can IDGen collect student or employee information digitally?",
      a: "Yes. For suitable projects, IDGen Studio supports cloud-based data collection, webcam photo capture, auto background cleanup, and digital preview/approval workflows.",
    },
    {
      q: "Does IDGen serve areas outside central Guwahati?",
      a: "Yes. IDGen provides doorstep delivery and priority courier services across all areas of Guwahati (Dispur, Khanapara, Jalukbari, Beltola, Amingaon, etc.) and across Assam.",
    },
    {
      q: "How does IDGen handle identification data & confidentiality?",
      a: "IDGen treats customer-provided identification data and photos as strictly confidential project information. Data is used solely for the authorized printing project under strict privacy standards.",
    },
  ],

  // 9. SEO & AI Overview
  quickAnswer:
    "IDGen is a Guwahati-based identity solutions company providing customized and bulk ID card printing for schools, colleges, universities, companies, hospitals, institutions, events and other organizations. Services include student ID cards, employee ID cards, event cards, RFID cards, custom printed lanyards, ID card holders and hooks. IDGen's identification-product experience dates back to 2014 and its service coverage extends across Assam and the wider Northeast India market.",
  metaTitle: "ID Card Printing in Guwahati | IDGen Identity Solutions",
  metaDescription:
    "IDGen provides ID card printing and identity solutions in Guwahati, Assam, including student, employee, event and RFID cards, lanyards and accessories.",
};

function initializeDataStore(): StateData[] {
  return initialStates.map((st) => {
    return {
      slug: st.slug,
      name: st.name,
      heroIntro: st.heroIntro,
      metaTitle: st.metaTitle,
      metaDescription: st.metaDescription,
      indexed: st.indexed !== false,
      sortOrder: 0,
      cities: st.cities.map((c) => {
        if (st.slug === "assam" && c.slug === "guwahati") {
          return {
            ...richGuwahatiData,
            services: richGuwahatiData.services || getDefaultCityServices("Guwahati"),
          };
        }

        return {
          slug: c.slug,
          name: c.name,
          isPrimary: c.isPrimary || false,
          indexed: c.indexed !== false,
          heroHeadline: `ID Card Printing & Identity Solutions in ${c.name}`,
          heroIntro: c.heroIntro,
          heroSubtext: `IDGen provides customized ID card printing, RFID credentials, and satin lanyards for organizations, schools, and enterprises in ${c.name}, ${st.name}.`,
          heroImage: "/images/idgen-hero-cards-mockup.png",
          localColor: c.localColor || `${c.name} is an important institutional and commercial hub in ${st.name}.`,
          nearbyAreas: c.nearbyAreas || [],
          organizationsServed: [
            "Schools & High Schools",
            "Degree Colleges & Universities",
            "Hospitals & Diagnostic Labs",
            "Corporate Offices & SMEs",
            "Government Bodies & Municipalities",
            "Conferences & Annual Events",
          ],
          services: getDefaultCityServices(c.name),
          completeSetups: [
            {
              title: "Standard PVC ID Card",
              subtitle: "High-definition photo printing on durable CR80 plastic.",
              items: ["CR80 Standard PVC", "Waterproof Edge Seal", "Front & Back Color"],
            },
            {
              title: "Card + Custom Lanyard",
              subtitle: "Everyday wearable setup for students and staff.",
              items: ["CR80 Card", "16mm / 20mm Satin Lanyard", "Metallic Hook Attachment"],
              recommended: true,
            },
            {
              title: "Complete Institutional Setup",
              subtitle: "All-in-one protection with rigid crystal holder.",
              items: ["CR80 PVC Card", "Rigid Crystal Holder", "Custom Printed Lanyard", "Ultrasonic Edge Sealing"],
            },
          ],
          orderSteps: [
            { step: "01", title: "Share Requirement", description: "Specify card type, estimated quantity, and accessories." },
            { step: "02", title: "Submit Data", description: "Provide Excel spreadsheet and photos (or use IDGen Studio)." },
            { step: "03", title: "Proofing & Approval", description: "Review and approve digital PDF proofs." },
            { step: "04", title: "Production & Delivery", description: "Dispatched from Guwahati to your doorstep in " + c.name + "." },
          ],
          faqs: [
            {
              q: `Does IDGen provide ID card printing in ${c.name}?`,
              a: `Yes. IDGen manufactures and supplies customized and bulk ID cards, lanyards, and accessories for organizations in ${c.name}, ${st.name}.`,
            },
            {
              q: `How long does delivery take to ${c.name}?`,
              a: `Production typically takes 24–48 hours, followed by express door-step dispatch taking 24–72 hours to ${c.name}.`,
            },
            {
              q: `Can we get RFID / smart cards for attendance in ${c.name}?`,
              a: `Yes. We provide 13.56 MHz Mifare 1K, 125 kHz Proximity, and UHF credentials compatible with all standard biometrics readers.`,
            },
            {
              q: `Does IDGen have a physical office in ${c.name}?`,
              a: `IDGen's primary manufacturing facility is located in Guwahati, Assam. The ${c.name} page represents direct institutional service coverage and doorstep logistics.`,
            },
          ],
          quickAnswer: `IDGen delivers factory-direct ID card printing and identity solutions in ${c.name}, ${st.name}. Services include student ID cards, corporate badges, event passes, RFID cards, and custom printed lanyards with doorstep express dispatch from our central Guwahati manufacturing hub.`,
          metaTitle: c.metaTitle || `ID Card Printing in ${c.name}, ${st.name} | IDGen Identity Solutions`,
          metaDescription:
            c.metaDescription ||
            `IDGen provides customized and bulk ID card printing in ${c.name}, ${st.name}, including student, employee, event and RFID cards, lanyards, holders and ID accessories.`,
        };
      }),
    };
  });
}

let memoryCache: StateData[] | null = null;
let lastMtime: number = 0;

export function getAllStates(): StateData[] {
  try {
    if (fs.existsSync(DATA_FILE_PATH)) {
      const stats = fs.statSync(DATA_FILE_PATH);
      if (memoryCache && stats.mtimeMs === lastMtime) {
        return memoryCache;
      }
      const raw = fs.readFileSync(DATA_FILE_PATH, "utf-8");
      const loaded: StateData[] = JSON.parse(raw);
      for (const st of loaded) {
        for (let i = 0; i < st.cities.length; i++) {
          const city = st.cities[i];
          if (!city.services || city.services.length === 0) {
            city.services = getDefaultCityServices(city.name);
          }
          if (st.slug === "assam" && city.slug === "guwahati") {
            st.cities[i] = {
              ...richGuwahatiData,
              ...city,
              services: city.services && city.services.length > 0 ? city.services : richGuwahatiData.services,
              organizationsServed: city.organizationsServed && city.organizationsServed.length > 0 ? city.organizationsServed : richGuwahatiData.organizationsServed,
              nearbyAreas: city.nearbyAreas && city.nearbyAreas.length > 0 ? city.nearbyAreas : richGuwahatiData.nearbyAreas,
            };
          }
        }
      }
      memoryCache = loaded;
      lastMtime = stats.mtimeMs;
      return memoryCache;
    }
  } catch (e) {
    console.error("Error reading dynamic-locations.json, initializing default:", e);
  }

  if (memoryCache) return memoryCache;
  const initial = initializeDataStore();
  memoryCache = initial;
  return initial;
}

export function saveAllStates(states: StateData[]): void {
  try {
    const dir = path.dirname(DATA_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(states, null, 2), "utf-8");
    try {
      const stats = fs.statSync(DATA_FILE_PATH);
      lastMtime = stats.mtimeMs;
    } catch {
      lastMtime = Date.now();
    }
    memoryCache = states;
  } catch (e) {
    console.error("Error saving dynamic-locations.json:", e);
  }
}

export function getState(slug: string): StateData | undefined {
  const states = getAllStates();
  return states.find((s) => s.slug.toLowerCase() === slug.toLowerCase());
}

export function getCity(stateSlug: string, citySlug: string): CityData | undefined {
  const state = getState(stateSlug);
  if (!state) return undefined;
  return state.cities.find((c) => c.slug.toLowerCase() === citySlug.toLowerCase());
}

export function getAllCities(): { state: StateData; city: CityData }[] {
  const states = getAllStates();
  const list: { state: StateData; city: CityData }[] = [];
  for (const state of states) {
    for (const city of state.cities) {
      list.push({ state, city });
    }
  }
  return list;
}

export function saveState(stateData: Partial<StateData> & { slug: string; name: string }): StateData {
  const states = getAllStates();
  const index = states.findIndex((s) => s.slug.toLowerCase() === stateData.slug.toLowerCase());

  let updatedState: StateData;
  if (index >= 0) {
    updatedState = {
      ...states[index],
      ...stateData,
      cities: stateData.cities || states[index].cities,
    };
    states[index] = updatedState;
  } else {
    updatedState = {
      slug: stateData.slug,
      name: stateData.name,
      heroIntro: stateData.heroIntro || `IDGen provides customized ID card printing and identity solutions across ${stateData.name}.`,
      metaTitle: stateData.metaTitle || `ID Card Printing in ${stateData.name} | IDGen`,
      metaDescription: stateData.metaDescription || `IDGen provides ID card printing and identity solutions across ${stateData.name}.`,
      indexed: stateData.indexed !== false,
      sortOrder: stateData.sortOrder || states.length,
      projectsBadge: stateData.projectsBadge,
      projectsSubBadge: stateData.projectsSubBadge,
      projectsTitle: stateData.projectsTitle,
      projectsDesc: stateData.projectsDesc,
      verifiedClients: stateData.verifiedClients,
      services: stateData.services,
      cities: stateData.cities || [],
    };
    states.push(updatedState);
  }

  saveAllStates(states);
  return updatedState;
}

export function deleteState(stateSlug: string): boolean {
  const states = getAllStates();
  const filtered = states.filter((s) => s.slug.toLowerCase() !== stateSlug.toLowerCase());
  if (filtered.length === states.length) return false;
  saveAllStates(filtered);
  return true;
}

export function saveCity(stateSlug: string, cityData: CityData): { state: StateData; city: CityData } {
  const states = getAllStates();
  const stateIndex = states.findIndex((s) => s.slug.toLowerCase() === stateSlug.toLowerCase());
  if (stateIndex === -1) {
    throw new Error(`State category '${stateSlug}' not found.`);
  }

  const state = states[stateIndex];
  const cityIndex = state.cities.findIndex((c) => c.slug.toLowerCase() === cityData.slug.toLowerCase());

  if (cityIndex >= 0) {
    state.cities[cityIndex] = { ...state.cities[cityIndex], ...cityData };
  } else {
    state.cities.push(cityData);
  }

  states[stateIndex] = state;
  saveAllStates(states);
  return { state, city: cityData };
}

export function deleteCity(stateSlug: string, citySlug: string): boolean {
  const states = getAllStates();
  const stateIndex = states.findIndex((s) => s.slug.toLowerCase() === stateSlug.toLowerCase());
  if (stateIndex === -1) return false;

  const state = states[stateIndex];
  const filtered = state.cities.filter((c) => c.slug.toLowerCase() !== citySlug.toLowerCase());
  if (filtered.length === state.cities.length) return false;

  state.cities = filtered;
  states[stateIndex] = state;
  saveAllStates(states);
  return true;
}
