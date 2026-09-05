"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Building2,
  Layers,
  Sparkles,
  Plus,
  Edit2,
  Trash2,
  Save,
  X,
  ExternalLink,
  ChevronRight,
  Upload,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Search,
  Loader2,
  ImageIcon,
  ShieldCheck,
  Zap,
} from "lucide-react";
import type {
  StateData,
  CityData,
  CityServiceItem,
  TargetAudienceItem,
  WhyChoosePointItem,
  BulkInputItem,
  VerifiedClientItem,
  OrderStepItem,
  SetupPackage,
} from "@/lib/dynamic-locations-types";
import { getDefaultCityServices, getDefaultWhyChoosePoints } from "@/lib/dynamic-locations-types";

export default function AdminServiceAreasPage() {
  const [states, setStates] = useState<StateData[]>([]);
  const [selectedStateSlug, setSelectedStateSlug] = useState<string>("assam");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // State (Category) Modal state
  const [isStateModalOpen, setIsStateModalOpen] = useState(false);
  const [stateForm, setStateForm] = useState<{ slug: string; name: string; heroIntro: string }>({
    slug: "",
    name: "",
    heroIntro: "",
  });

  // City (Sub-category) Modal state
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);
  const [editingStateSlug, setEditingStateSlug] = useState<string>("assam");
  const [cityForm, setCityForm] = useState<CityData>({
    slug: "",
    name: "",
    isPrimary: false,
    heroHeadline: "",
    heroIntro: "",
    heroSubtext: "",
    localColor: "",
    nearbyAreas: [],
    organizationsServed: [],
    services: [],
    faqs: [],
    whyChoosePoints: [],
    quickAnswer: "",
    metaTitle: "",
    metaDescription: "",
    coverageEyebrow: "",
    coverageTitle: "",
    coverageIntro: "",
    coverageHubTitle: "",
    coverageHubSubtitle: "",
  });

  // Active tab in City Editor modal
  const [cityActiveTab, setCityActiveTab] = useState<
    "general" | "local" | "services" | "packages" | "whyChoose" | "clients" | "faqs" | "seo"
  >("general");

  // Helper inputs for tags and list additions
  const [nearbyAreaInput, setNearbyAreaInput] = useState("");
  const [coverageExampleInput, setCoverageExampleInput] = useState("");
  const [orgInput, setOrgInput] = useState("");
  const [workflowStepInput, setWorkflowStepInput] = useState("");
  const [trustBadgeInput, setTrustBadgeInput] = useState("");
  const [audienceNameInput, setAudienceNameInput] = useState("");
  const [audienceCategoryInput, setAudienceCategoryInput] = useState("");
  const [uploadingImage, setUploadingImage] = useState(false);

  // Helper inputs for why choose points
  const [whyChooseTitleInput, setWhyChooseTitleInput] = useState("");
  const [whyChooseDescInput, setWhyChooseDescInput] = useState("");
  const [whyChooseBadgeInput, setWhyChooseBadgeInput] = useState("");
  const [whyChooseStatInput, setWhyChooseStatInput] = useState("");
  const [whyChooseImageInput, setWhyChooseImageInput] = useState("");
  const [uploadingWhyChooseIdx, setUploadingWhyChooseIdx] = useState<number | null>(null);
  const [uploadingNewWhyChooseImg, setUploadingNewWhyChooseImg] = useState(false);

  // Helper inputs for verified client logos
  const [clientNameInput, setClientNameInput] = useState("");
  const [clientLocationInput, setClientLocationInput] = useState("");
  const [clientTagInput, setClientTagInput] = useState("");
  const [clientLogoInput, setClientLogoInput] = useState("");
  const [uploadingClientLogoIdx, setUploadingClientLogoIdx] = useState<number | null>(null);
  const [uploadingNewClientLogo, setUploadingNewClientLogo] = useState(false);

  useEffect(() => {
    fetchStates();
  }, []);

  async function fetchStates() {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/states");
      const data = await res.json();
      if (data.success) {
        setStates(data.states);
        if (data.states.length > 0 && !selectedStateSlug) {
          setSelectedStateSlug(data.states[0].slug);
        }
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Failed to load service areas." });
    } finally {
      setLoading(false);
    }
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploadingImage(true);
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const base64Image = reader.result as string;
          const res = await fetch("/api/admin/upload", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ image: base64Image, filename: file.name }),
          });
          const data = await res.json();
          if (data.success && data.url) {
            setCityForm((prev) => ({ ...prev, heroImage: data.url }));
            setMessage({ type: "success", text: "Hero showcase image uploaded successfully!" });
          } else {
            setMessage({ type: "error", text: data.error || "Failed to upload image." });
          }
        } catch (err) {
          console.error(err);
          setMessage({ type: "error", text: "Failed to process image upload." });
        } finally {
          setUploadingImage(false);
        }
      };
      reader.readAsDataURL(file);
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Error reading image file." });
      setUploadingImage(false);
    }
  }

  async function handleServiceImageUpload(e: React.ChangeEvent<HTMLInputElement>, serviceIndex: number) {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploadingImage(true);
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const base64Image = reader.result as string;
          const res = await fetch("/api/admin/upload", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ image: base64Image, filename: file.name }),
          });
          const data = await res.json();
          if (data.success && data.url) {
            setCityForm((prev) => {
              const updatedServices = [...(prev.services || [])];
              if (updatedServices[serviceIndex]) {
                updatedServices[serviceIndex].imageSrc = data.url;
              }
              return { ...prev, services: updatedServices };
            });
            setMessage({ type: "success", text: "Product showcase image uploaded successfully!" });
          } else {
            setMessage({ type: "error", text: data.error || "Failed to upload product image." });
          }
        } catch (err) {
          console.error(err);
          setMessage({ type: "error", text: "Failed to upload product image." });
        } finally {
          setUploadingImage(false);
        }
      };
      reader.readAsDataURL(file);
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Error reading file." });
      setUploadingImage(false);
    }
  }

  async function handleClientLogoUpload(file: File, targetIndex?: number) {
    if (!file) return;
    try {
      if (typeof targetIndex === "number") {
        setUploadingClientLogoIdx(targetIndex);
      } else {
        setUploadingNewClientLogo(true);
      }
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const base64Image = reader.result as string;
          const res = await fetch("/api/admin/upload", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ image: base64Image, filename: file.name }),
          });
          const data = await res.json();
          if (data.success && data.url) {
            if (typeof targetIndex === "number") {
              setCityForm((prev) => {
                const updated = [...(prev.verifiedClients || [])];
                if (updated[targetIndex]) {
                  updated[targetIndex].logo = data.url;
                }
                return { ...prev, verifiedClients: updated };
              });
            } else {
              setClientLogoInput(data.url);
            }
            setMessage({ type: "success", text: "Client logo uploaded successfully!" });
          } else {
            setMessage({ type: "error", text: data.error || "Failed to upload logo." });
          }
        } catch (err) {
          console.error(err);
          setMessage({ type: "error", text: "Failed to process logo upload." });
        } finally {
          setUploadingClientLogoIdx(null);
          setUploadingNewClientLogo(false);
        }
      };
      reader.readAsDataURL(file);
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Error reading logo file." });
      setUploadingClientLogoIdx(null);
      setUploadingNewClientLogo(false);
    }
  }

  async function handleWhyChooseImageUpload(file: File, targetIndex?: number) {
    if (!file) return;
    try {
      if (typeof targetIndex === "number") {
        setUploadingWhyChooseIdx(targetIndex);
      } else {
        setUploadingNewWhyChooseImg(true);
      }
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const base64Image = reader.result as string;
          const res = await fetch("/api/admin/upload", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ image: base64Image, filename: file.name }),
          });
          const data = await res.json();
          if (data.success && data.url) {
            if (typeof targetIndex === "number") {
              setCityForm((prev) => {
                const updated = [...(prev.whyChoosePoints || [])];
                if (updated[targetIndex]) {
                  updated[targetIndex] = { ...updated[targetIndex], image: data.url };
                }
                return { ...prev, whyChoosePoints: updated };
              });
            } else {
              setWhyChooseImageInput(data.url);
            }
            setMessage({ type: "success", text: "Advantage card image uploaded successfully!" });
          } else {
            setMessage({ type: "error", text: data.error || "Failed to upload image." });
          }
        } catch (err) {
          console.error(err);
          setMessage({ type: "error", text: "Failed to process image upload." });
        } finally {
          setUploadingWhyChooseIdx(null);
          setUploadingNewWhyChooseImg(false);
        }
      };
      reader.readAsDataURL(file);
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Error reading image file." });
      setUploadingWhyChooseIdx(null);
      setUploadingNewWhyChooseImg(false);
    }
  }

  // Open State Editor
  function openStateEditor(state?: StateData) {
    if (state) {
      setStateForm({
        slug: state.slug,
        name: state.name,
        heroIntro: state.heroIntro || "",
      });
    } else {
      setStateForm({
        slug: "",
        name: "",
        heroIntro: "",
      });
    }
    setIsStateModalOpen(true);
  }

  // Handle State Save
  async function handleSaveState(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/states", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(stateForm),
      });
      const data = await res.json();
      if (data.success) {
        setMessage({ type: "success", text: "State / Category saved successfully!" });
        setIsStateModalOpen(false);
        fetchStates();
      } else {
        setMessage({ type: "error", text: data.error || "Failed to save state." });
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Error saving state." });
    }
  }

  // Handle State Delete
  async function handleDeleteState(slug: string, name: string) {
    if (!confirm(`Are you sure you want to delete "${name}" and all its cities?`)) return;
    try {
      const res = await fetch(`/api/admin/states?slug=${slug}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setMessage({ type: "success", text: `Deleted "${name}".` });
        fetchStates();
      } else {
        setMessage({ type: "error", text: data.error || "Failed to delete state." });
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Error deleting state." });
    }
  }

  // Open City Editor
  function openCityEditor(stateSlug: string, city?: CityData) {
    setEditingStateSlug(stateSlug);
    const cityName = city?.name || "";
    if (city) {
      setCityForm({
        ...city,
        heroEyebrow: city.heroEyebrow || `${stateSlug.toUpperCase()} SERVICE AREA`,
        heroWorkflowSteps:
          city.heroWorkflowSteps && city.heroWorkflowSteps.length > 0
            ? city.heroWorkflowSteps
            : ["Requirement", "Design", "Approval", "Production", "Quality Check", "Dispatch"],
        heroTrustBadges:
          city.heroTrustBadges && city.heroTrustBadges.length > 0
            ? city.heroTrustBadges
            : [
                "Free Pre-Production Physical Sample",
                "100% Optical Inspection",
                "Direct Cleanroom Manufacturing",
              ],
        heroCtaText: city.heroCtaText || `Request a ${city.name} Quote`,
        heroSecondaryCtaText: city.heroSecondaryCtaText || "Call / WhatsApp IDGen",
        heroShowcaseBadge: city.heroShowcaseBadge || `${city.name} Direct Supply`,
        heroShowcaseChip1: city.heroShowcaseChip1 || "CR80 PVC & RFID Credentials",
        heroShowcaseChip2: city.heroShowcaseChip2 || "Verified Cleanroom",
        localPresenceBadge:
          city.localPresenceBadge ||
          (city.isPrimary ? "Central Manufacturing Hub • Guwahati Cleanroom" : `Local Identity Solutions • ${city.name}`),
        localPresenceSubBadge:
          city.localPresenceSubBadge || (city.isPrimary ? "Direct Factory Access" : "Direct Doorstep Logistics"),
        localPresenceTitle: city.localPresenceTitle || `IDGen in ${city.name}: A Local Identity Solutions Partner`,
        localAdvantagePills:
          city.localAdvantagePills && city.localAdvantagePills.length > 0
            ? city.localAdvantagePills
            : [
                `${city.name} Primary Cleanroom`,
                "24–48h Priority Batch Dispatch",
                "Pre-Production Physical Proofing",
                "100% Optical Quality Check",
              ],
        audiencesTitle: city.audiencesTitle || `Organizations in ${city.name} require identity products for:`,
        audiencesSubtitle:
          city.audiencesSubtitle ||
          `Tailored credential architectures mapped to specific access requirements in ${city.name}.`,
        audiencesNote:
          city.audiencesNote || "Single & dual-sided thermal, RFID & ultrasonic sealed credentials",
        targetAudiences:
          city.targetAudiences && city.targetAudiences.length > 0
            ? city.targetAudiences
            : [
                { name: "Students & Scholars", category: "Schools, Colleges & Universities", badge: "Academic" },
                { name: "Employees & Executives", category: "Corporate, Startups & Tech Offices", badge: "Corporate" },
                { name: "Faculty & Teaching Staff", category: "Professors, Lecturers & Teachers", badge: "Faculty" },
                { name: "Visitors & Contractors", category: "Temporary Badges & Escorted Passes", badge: "Security" },
                { name: "Club & Association Members", category: "Societies, Alumni & Sports Guilds", badge: "Membership" },
                { name: "Event Participants", category: "Summits, Trade Expos & Festivals", badge: "Events" },
                { name: "Conference Delegates", category: "Keynote Speakers & VIP Badges", badge: "Conferences" },
                { name: "Institutional Access Users", category: "RFID Turnstile & Door Smartcards", badge: "Smart RFID" },
              ],
        organizationsTitle: city.organizationsTitle || `Typical Organizations We Serve in ${city.name}:`,
        organizationsSubtitle:
          city.organizationsSubtitle ||
          `Institutions, healthcare bodies, government offices & enterprises across ${city.name}.`,
        localAdvantageTitle: city.localAdvantageTitle || `${city.name} Local Production Advantage`,
        localAdvantageDesc:
          city.localAdvantageDesc ||
          `Direct cleanroom manufacturing ensures fast physical proofs, immediate design sign-off, and priority local dispatch across ${city.name}.`,
        deliveryRoutesTitle:
          city.deliveryRoutesTitle || `Direct Doorstep Delivery & Pickup Routes Across ${city.name}:`,
        deliveryRoutesSubtitle:
          city.deliveryRoutesSubtitle ||
          `Rapid fulfillment across all major institutional & commercial zones in ${city.name}`,
        coverageEyebrow: city.coverageEyebrow || `${city.name} Service Coverage`,
        coverageTitle: city.coverageTitle || `${city.name} Service Coverage`,
        coverageIntro:
          city.coverageIntro ||
          `IDGen is based in ${city.name} and can serve organizations across the city and surrounding areas according to the applicable order and delivery arrangements.`,
        coverageHubTitle: city.coverageHubTitle || (city.isPrimary || city.slug === "guwahati" ? "Guwahati Direct Hub" : "Direct City Hub"),
        coverageHubSubtitle: city.coverageHubSubtitle || `Full ${city.name} & Regional Reach`,
        coverageNotice:
          city.coverageNotice ||
          `We should not create separate pages for every ${city.name} locality just for SEO.`,
        coverageExamples:
          city.coverageExamples && city.coverageExamples.length > 0
            ? city.coverageExamples
            : [
                `/service-areas/${stateSlug || "assam"}/${city.slug}/dispur/`,
                `/service-areas/${stateSlug || "assam"}/${city.slug}/beltola/`,
                `/service-areas/${stateSlug || "assam"}/${city.slug}/khanapara/`,
              ],
        coveragePolicy:
          city.coveragePolicy ||
          "unless we eventually have genuine local information, customers, projects, photographs or materially different search intent for those locations.",
        coverageFooterNote:
          city.coverageFooterNote || "This follows the existing architecture rule in your website source.",
        setupsEyebrow: city.setupsEyebrow || "Configurations",
        setupsTitle: city.setupsTitle || `Complete ID Card Solutions & Packages in ${city.name}`,
        setupsSubtitle:
          city.setupsSubtitle ||
          "Not every organization needs the same identification setup. Select the exact packaging that matches your project requirements.",
        completeSetups:
          city.completeSetups && city.completeSetups.length > 0
            ? city.completeSetups
            : [
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
        bulkEyebrow: city.bulkEyebrow || "High-Capacity Production • Institutional Fulfillment",
        bulkSubBadge: city.bulkSubBadge || (city.isPrimary ? "Guwahati Direct Hub" : `${city.name} Priority Route`),
        bulkTitle: city.bulkTitle || `Bulk ID Card Printing in ${city.name}`,
        bulkDesc:
          city.bulkDesc ||
          `IDGen supports institutional and high-volume identification requirements across ${city.name}. For larger projects (schools, colleges, university batches, corporate renewals), our cleanroom workflows ensure reliable color calibration and prompt doorstep dispatch.`,
        bulkHighlights:
          city.bulkHighlights && city.bulkHighlights.length > 0
            ? city.bulkHighlights
            : ["Up to 10,000+ IDs / Day", "100% Optical Quality Check", "Free Pre-Production Physical Sample"],
        bulkInputsTitle: city.bulkInputsTitle || `Key Inputs for Large Institutional Orders in ${city.name}:`,
        bulkInputsDesc:
          city.bulkInputsDesc ||
          "Provide these four details to receive an instant, accurate quotation tailored to your timeline.",
        bulkInputsStepTag: city.bulkInputsStepTag || "Step 1 of 4 Preparation",
        bulkInputs:
          city.bulkInputs && city.bulkInputs.length > 0
            ? city.bulkInputs
            : [
                {
                  step: "01",
                  title: "Target Quantity",
                  description: `50 to 50,000+ units with batch-wise staggered production for ${city.name} institutions.`,
                  badge: "Scalable Volume",
                },
                {
                  step: "02",
                  title: "Card & RFID Type",
                  description: "Standard CR80 PVC, 125kHz Proximity, or 13.56MHz Mifare smartcards.",
                  badge: "Credential Spec",
                },
                {
                  step: "03",
                  title: "Data & Photographs",
                  description: "Spreadsheet records, photo archives, or live IDGen Studio digital portal.",
                  badge: "Data Processing",
                },
                {
                  step: "04",
                  title: "Accessories & Delivery",
                  description: `Custom printed lanyards, card holders & express doorstep dispatch to ${city.name}.`,
                  badge: "Full Ecosystem",
                },
              ],
        bulkBottomNote:
          city.bulkBottomNote ||
          `Actual production capacity is matched to product and project specifications for ${city.name}. Qualified bulk projects receive physical pre-production sample proofs for institutional sign-off.`,
        bulkCta1Text: city.bulkCta1Text || "Talk to Specialist",
        bulkCta2Text: city.bulkCta2Text || `Request a ${city.name} Bulk Quote`,
        projectsBadge: city.projectsBadge || "Verified Institutional Deployments",
        projectsSubBadge: city.projectsSubBadge || "Active Regional Partnerships • Zero Fabricated Claims",
        projectsTitle: city.projectsTitle || `Organizations & Projects in ${city.name}`,
        projectsDesc:
          city.projectsDesc ||
          `IDGen partners with leading academic institutions, corporate offices, and government departments across ${city.name}. Every identification setup is manufactured with direct factory calibration and rigorous data confidentiality.`,
        verifiedClients:
          city.verifiedClients && city.verifiedClients.length > 0
            ? city.verifiedClients
            : [
                { name: "Don Bosco Hr Sec School", logo: "/images/clint logo/1.png", location: "Gojapara, Assam", tag: city.name || "Guwahati" },
                { name: "Jorhat Kendriya Vidyalaya", logo: "/images/clint logo/2.png", location: "Jorhat, Assam", tag: "Jorhat" },
                { name: "CKB College", logo: "/images/clint logo/3.png", location: "Jorhat, Assam", tag: "Dibrugarh" },
                { name: "DBS Itanagar", logo: "/images/clint logo/4.png", location: "Arunachal Pradesh", tag: "Silchar" },
                { name: "Rayburn College", logo: "/images/clint logo/5.png", location: "Churachandpur, Manipur", tag: "Tezpur" },
                { name: "Nathan Brown Academy", logo: "/images/clint logo/6.png", location: "Namrup, Assam", tag: "Nagaon" },
                { name: "Ardalivia English School", logo: "/images/clint logo/7.png", location: "Assam", tag: "Tinsukia" },
                { name: "Assam Govt Departments", logo: "/images/clint logo/8.png", location: "Guwahati Hub", tag: "Sivasagar" },
              ],
        whyChooseEyebrow: city.whyChooseEyebrow || "Why Choose Us",
        whyChooseTitle: city.whyChooseTitle || `Why Choose IDGen in ${city.name}?`,
        whyChooseSubtitle:
          city.whyChooseSubtitle ||
          "Direct regional manufacturing, experience dating back to 2014, organizational focus, and an integrated digital workflow.",
        whyChoosePoints:
          city.whyChoosePoints && city.whyChoosePoints.length > 0
            ? city.whyChoosePoints.map((pt, i) => {
                const defaults = getDefaultWhyChoosePoints(city.name, undefined, city.isPrimary || city.slug === "guwahati");
                const fallback = defaults[i % defaults.length] || defaults[0];
                return {
                  ...pt,
                  image: pt.image || fallback.image,
                  badge: pt.badge || fallback.badge,
                  stat: pt.stat || fallback.stat,
                };
              })
            : getDefaultWhyChoosePoints(city.name, undefined, city.isPrimary || city.slug === "guwahati"),
        workflowEyebrow: city.workflowEyebrow || "Step-by-Step Production Process • Factory Quality Standard",
        workflowBadge: city.workflowBadge || (city.isPrimary ? "Local Turnaround: 24–48h" : "Priority Turnaround"),
        workflowTitle: city.workflowTitle || `How to Order ID Cards in ${city.name}`,
        workflowSubtitle:
          city.workflowSubtitle ||
          `A predictable 8-stage manufacturing workflow ensuring zero data errors, exact color calibration, and doorstep dispatch to ${city.name}.`,
        workflowNote:
          city.workflowNote ||
          (city.isPrimary
            ? "Guwahati Hub Advantage: Free physical pre-production sample & priority 24–48h local delivery available."
            : `Doorstep express delivery across ${city.name} with rigorous optical quality verification before dispatch.`),
        workflowCta1Text: city.workflowCta1Text || "Call / WhatsApp IDGen",
        workflowCta2Text: city.workflowCta2Text || "Start at Step 01: Request Quote",
        orderSteps:
          city.orderSteps && city.orderSteps.length > 0
            ? city.orderSteps
            : [
                {
                  step: "01",
                  title: "Tell Us Your Requirement",
                  description: `Share: Organization + Product + Quantity + Delivery Requirement in ${city.name}.`,
                  phase: "Intake",
                },
                {
                  step: "02",
                  title: "Share Your Data",
                  description: "Provide the required records and photos (or use IDGen Studio).",
                  phase: "Data Intake",
                },
                {
                  step: "03",
                  title: "Confirm the Design",
                  description: "Use your existing design or discuss a custom template.",
                  phase: "Artwork",
                },
                {
                  step: "04",
                  title: "Review & Proofing",
                  description: "Review digital PDF proofs or request physical pre-production sample.",
                  phase: "Proofing",
                },
                {
                  step: "05",
                  title: "Approval Sign-Off",
                  description: "Formal sign-off on design, data, and accessory specs.",
                  phase: "Sign-Off",
                },
                {
                  step: "06",
                  title: "Cleanroom Production",
                  description: "Thermal printing, RFID encoding, and ultrasonic lamination.",
                  phase: "Manufacturing",
                },
                {
                  step: "07",
                  title: "100% Quality Check",
                  description: "100% optical inspection before dispatch.",
                  phase: "Quality Audit",
                },
                {
                  step: "08",
                  title: "Doorstep Dispatch",
                  description: `Prepared for dispatch and delivered directly to your doorstep in ${city.name}.`,
                  phase: "Fulfillment",
                },
              ],
        confidentialityTitle: city.confidentialityTitle || "Identification Data & Confidentiality",
        confidentialityDesc:
          city.confidentialityDesc ||
          "Personalized ID card projects contain student/employee names, biometrics, and photos. IDGen treats all customer-provided identification data as strictly confidential project information and uses it solely for the authorized printing scope.",
        confidentialityCta: city.confidentialityCta || "Explore IDGen Studio →",
        faqsTitle: city.faqsTitle || `Frequently Asked Questions in ${city.name}`,
        faqsSubtitle:
          city.faqsSubtitle ||
          `Key answers regarding ID card printing, batch timelines, accessories, and delivery in ${city.name}.`,
        faqsHelpTitle: city.faqsHelpTitle || "Have Specific Questions?",
        faqsHelpText:
          city.faqsHelpText ||
          `Need guidance on custom RFID chip frequencies, lanyard branding, or batch approvals? Our ${city.name} production desk is here to help.`,
        services:
          city.services && city.services.length > 0 ? city.services : getDefaultCityServices(city.name),
      });
    } else {
      setCityForm({
        slug: "",
        name: "",
        isPrimary: false,
        heroEyebrow: `${stateSlug.toUpperCase()} SERVICE AREA`,
        heroHeadline: "",
        heroIntro: "",
        heroSubtext: "",
        heroWorkflowSteps: ["Requirement", "Design", "Approval", "Production", "Quality Check", "Dispatch"],
        heroTrustBadges: [
          "Free Pre-Production Physical Sample",
          "100% Optical Inspection",
          "Direct Cleanroom Manufacturing",
        ],
        heroCtaText: "Request a Quote",
        heroSecondaryCtaText: "Call / WhatsApp IDGen",
        heroShowcaseBadge: "Direct Supply",
        heroShowcaseChip1: "CR80 PVC & RFID Credentials",
        heroShowcaseChip2: "Verified Cleanroom",
        localColor: "",
        localPresenceBadge: "Local Identity Solutions",
        localPresenceSubBadge: "Direct Doorstep Logistics",
        localPresenceTitle: "IDGen: A Local Identity Solutions Partner",
        localAdvantagePills: [
          "Primary Cleanroom",
          "24–48h Priority Batch Dispatch",
          "Pre-Production Physical Proofing",
          "100% Optical Quality Check",
        ],
        audiencesTitle: "Organizations require identity products for:",
        audiencesSubtitle: "Tailored credential architectures mapped to specific access requirements.",
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
        organizationsTitle: "Typical Organizations We Serve:",
        organizationsSubtitle: "Institutions, healthcare bodies, government offices & enterprises.",
        organizationsServed: ["Schools", "Colleges", "Hospitals", "Corporate Offices", "Institutions"],
        localAdvantageTitle: "Local Production Advantage",
        localAdvantageDesc:
          "Direct cleanroom manufacturing ensures fast physical proofs, immediate design sign-off, and priority local dispatch.",
        deliveryRoutesTitle: "Direct Doorstep Delivery & Pickup Routes:",
        deliveryRoutesSubtitle: "Rapid fulfillment across all major institutional & commercial zones",
        coverageEyebrow: "Service Coverage",
        coverageTitle: "Service Coverage",
        coverageIntro:
          "IDGen can serve organizations across the city and surrounding areas according to the applicable order and delivery arrangements.",
        coverageNotice: "We should not create separate pages for every locality just for SEO.",
        coverageExamples: [
          "/service-areas/state/city/dispur/",
          "/service-areas/state/city/beltola/",
          "/service-areas/state/city/khanapara/",
        ],
        coveragePolicy:
          "unless we eventually have genuine local information, customers, projects, photographs or materially different search intent for those locations.",
        coverageFooterNote: "This follows the existing architecture rule in your website source.",
        nearbyAreas: [],
        services: getDefaultCityServices(cityName),
        setupsEyebrow: "Configurations",
        setupsTitle: "Complete ID Card Solutions & Packages",
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
        bulkEyebrow: "High-Capacity Production • Institutional Fulfillment",
        bulkSubBadge: "Priority Route",
        bulkTitle: "Bulk ID Card Printing",
        bulkDesc: "IDGen supports institutional and high-volume identification requirements.",
        bulkHighlights: ["Up to 10,000+ IDs / Day", "100% Optical Quality Check", "Free Pre-Production Physical Sample"],
        bulkInputsTitle: "Key Inputs for Large Institutional Orders:",
        bulkInputsDesc: "Provide these four details to receive an instant, accurate quotation tailored to your timeline.",
        bulkInputsStepTag: "Step 1 of 4 Preparation",
        bulkInputs: [
          { step: "01", title: "Target Quantity", description: "50 to 50,000+ units with batch-wise staggered production.", badge: "Scalable Volume" },
          { step: "02", title: "Card & RFID Type", description: "Standard CR80 PVC, 125kHz Proximity, or 13.56MHz Mifare smartcards.", badge: "Credential Spec" },
          { step: "03", title: "Data & Photographs", description: "Spreadsheet records, photo archives, or live IDGen Studio digital portal.", badge: "Data Processing" },
          { step: "04", title: "Accessories & Delivery", description: "Custom printed lanyards, card holders & express doorstep dispatch.", badge: "Full Ecosystem" },
        ],
        bulkBottomNote: "Actual production capacity is matched to product and project specifications.",
        bulkCta1Text: "Talk to Specialist",
        bulkCta2Text: "Request a Bulk Quote",
        projectsBadge: "Verified Institutional Deployments",
        projectsSubBadge: "Active Regional Partnerships • Zero Fabricated Claims",
        projectsTitle: "Organizations & Projects",
        projectsDesc: "IDGen partners with leading academic institutions, corporate offices, and government departments.",
        verifiedClients: [
          { name: "Don Bosco Hr Sec School", logo: "/images/clint logo/1.png", location: "Gojapara, Assam", tag: "Guwahati" },
          { name: "Jorhat Kendriya Vidyalaya", logo: "/images/clint logo/2.png", location: "Jorhat, Assam", tag: "Jorhat" },
          { name: "CKB College", logo: "/images/clint logo/3.png", location: "Jorhat, Assam", tag: "Dibrugarh" },
          { name: "DBS Itanagar", logo: "/images/clint logo/4.png", location: "Arunachal Pradesh", tag: "Silchar" },
          { name: "Rayburn College", logo: "/images/clint logo/5.png", location: "Churachandpur, Manipur", tag: "Tezpur" },
          { name: "Nathan Brown Academy", logo: "/images/clint logo/6.png", location: "Namrup, Assam", tag: "Nagaon" },
          { name: "Ardalivia English School", logo: "/images/clint logo/7.png", location: "Assam", tag: "Tinsukia" },
          { name: "Assam Govt Departments", logo: "/images/clint logo/8.png", location: "Guwahati Hub", tag: "Sivasagar" },
        ],
        whyChooseEyebrow: "Why Choose Us",
        whyChooseTitle: "Why Choose IDGen?",
        whyChooseSubtitle:
          "Direct regional manufacturing, experience dating back to 2014, organizational focus, and an integrated digital workflow.",
        whyChoosePoints: getDefaultWhyChoosePoints("Your City", undefined, false),
        workflowEyebrow: "Step-by-Step Production Process • Factory Quality Standard",
        workflowBadge: "Priority Turnaround",
        workflowTitle: "How to Order ID Cards",
        workflowSubtitle:
          "An institutional-grade 8-stage production flow engineered for data integrity, zero defects, and doorstep fulfillment.",
        workflowNote: "Doorstep express delivery with rigorous optical quality verification before dispatch.",
        workflowCta1Text: "Call / WhatsApp IDGen",
        workflowCta2Text: "Start at Step 01: Request Quote",
        orderSteps: [
          { step: "01", title: "Tell Us Your Requirement", description: "Share: Organization + Product + Quantity + Delivery Requirement.", phase: "Intake" },
          { step: "02", title: "Share Your Data", description: "Provide the required records and photos (or use IDGen Studio).", phase: "Data Intake" },
          { step: "03", title: "Confirm the Design", description: "Use your existing design or discuss a custom template.", phase: "Artwork" },
          { step: "04", title: "Review & Proofing", description: "Review digital PDF proofs or request physical pre-production sample.", phase: "Proofing" },
          { step: "05", title: "Approval Sign-Off", description: "Formal sign-off on design, data, and accessory specs.", phase: "Sign-Off" },
          { step: "06", title: "Cleanroom Production", description: "Thermal printing, RFID encoding, and ultrasonic lamination.", phase: "Manufacturing" },
          { step: "07", title: "100% Quality Check", description: "100% optical inspection before dispatch.", phase: "Quality Audit" },
          { step: "08", title: "Doorstep Dispatch", description: "Prepared for dispatch and delivered directly to your doorstep.", phase: "Fulfillment" },
        ],
        faqsTitle: "Frequently Asked Questions",
        faqsSubtitle: "Key answers regarding ID card printing, batch timelines, accessories, and delivery.",
        faqsHelpTitle: "Have Specific Questions?",
        faqsHelpText:
          "Need guidance on custom RFID chip frequencies, lanyard branding, or batch approvals? Our production desk is here to help.",
        faqs: [
          { q: "Where is IDGen located?", a: "Guwahati, Assam, India." },
          { q: "Does IDGen provide ID card printing here?", a: "Yes, customized and bulk identity products." },
        ],
        quickAnswer: "",
        metaTitle: "",
        metaDescription: "",
      });
    }
    setCityActiveTab("general");
    setIsCityModalOpen(true);
  }

  // Handle City Save
  async function handleSaveCity(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/cities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          stateSlug: editingStateSlug,
          city: cityForm,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setMessage({ type: "success", text: `City "${cityForm.name}" saved successfully!` });
        setIsCityModalOpen(false);
        fetchStates();
      } else {
        setMessage({ type: "error", text: data.error || "Failed to save city." });
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Error saving city." });
    }
  }

  // Handle City Delete
  async function handleDeleteCity(stateSlug: string, citySlug: string, cityName: string) {
    if (!confirm(`Are you sure you want to delete "${cityName}"?`)) return;
    try {
      const res = await fetch(`/api/admin/cities?stateSlug=${stateSlug}&citySlug=${citySlug}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setMessage({ type: "success", text: `Deleted "${cityName}".` });
        fetchStates();
      } else {
        setMessage({ type: "error", text: data.error || "Failed to delete city." });
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Error deleting city." });
    }
  }

  const currentState = states.find((s) => s.slug === selectedStateSlug);

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-3">
            <MapPin className="h-7 w-7 text-teal-400" />
            <span>Service Areas &amp; Locations</span>
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Manage State categories (e.g. Assam, Meghalaya) and sub-city dynamic landing pages with full section control.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => openStateEditor()}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition flex items-center gap-2 border border-slate-700 shadow-sm"
          >
            <Plus className="h-4 w-4 text-teal-400" />
            <span>Add State Category</span>
          </button>
        </div>
      </div>

      {/* Status Message */}
      {message && (
        <div
          className={`p-4 rounded-2xl flex items-center justify-between text-xs font-semibold ${
            message.type === "success"
              ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
              : "bg-rose-500/10 border border-rose-500/30 text-rose-400"
          }`}
        >
          <span>{message.text}</span>
          <button onClick={() => setMessage(null)} className="opacity-70 hover:opacity-100">
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* State Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-800 scrollbar-thin">
        {states.map((st) => (
          <button
            key={st.slug}
            onClick={() => setSelectedStateSlug(st.slug)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 shrink-0 ${
              selectedStateSlug === st.slug
                ? "bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/20"
                : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
            }`}
          >
            <Building2 className="h-3.5 w-3.5" />
            <span>{st.name}</span>
            <span
              className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                selectedStateSlug === st.slug
                  ? "bg-slate-950 text-teal-300"
                  : "bg-slate-800 text-slate-400"
              }`}
            >
              {st.cities?.length || 0}
            </span>
          </button>
        ))}
      </div>

      {/* Current State Details & City Management */}
      {currentState && (
        <div className="space-y-6">
          {/* State Card */}
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  State Category
                </span>
                <span className="text-slate-600">&bull;</span>
                <code className="text-xs text-slate-400">/service-areas/{currentState.slug}/</code>
              </div>
              <h2 className="text-xl font-bold text-white mt-1">{currentState.name}</h2>
              <p className="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
                {currentState.heroIntro || "Custom ID card printing and identity solutions across this region."}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => openStateEditor(currentState)}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition flex items-center gap-1.5 border border-slate-700"
              >
                <Edit2 className="h-3.5 w-3.5 text-teal-400" />
                <span>Edit State</span>
              </button>
              <button
                onClick={() => handleDeleteState(currentState.slug, currentState.name)}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-rose-950/40 text-rose-400 text-xs font-semibold transition border border-slate-700 hover:border-rose-800"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* City / Sub-locations Grid Header */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>Sub-Locations &amp; Cities in {currentState.name}</span>
                <span className="text-xs font-normal text-slate-400">
                  ({currentState.cities?.length || 0} locations)
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Each city has its own dynamically generated landing page with customizable sections.
              </p>
            </div>

            <button
              onClick={() => openCityEditor(currentState.slug)}
              className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold transition flex items-center gap-1.5 shadow-lg shadow-teal-500/20"
            >
              <Plus className="h-4 w-4" />
              <span>Add City in {currentState.name}</span>
            </button>
          </div>

          {/* Cities List */}
          <div className="grid grid-cols-1 gap-3">
            {(!currentState.cities || currentState.cities.length === 0) ? (
              <div className="p-12 text-center bg-slate-900/50 border border-slate-800 border-dashed rounded-3xl space-y-3">
                <MapPin className="h-8 w-8 text-slate-600 mx-auto" />
                <p className="text-sm font-semibold text-slate-400">No cities added for {currentState.name} yet.</p>
                <button
                  onClick={() => openCityEditor(currentState.slug)}
                  className="px-4 py-2 rounded-xl bg-teal-500 text-slate-950 text-xs font-bold hover:bg-teal-400"
                >
                  Add First City
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentState.cities.map((city) => (
                  <div
                    key={city.slug}
                    className="p-5 bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-3xl flex items-center justify-between gap-4 transition shadow-xs group"
                  >
                    <div className="space-y-1.5 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-white group-hover:text-teal-300 transition truncate">
                          {city.name}
                        </h4>
                        {city.isPrimary && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-500/10 text-teal-400 border border-teal-500/30">
                            Primary Hub
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-400 truncate max-w-sm">
                        {city.heroIntro || "Tailored identification solutions and bulk ID card printing."}
                      </p>

                      <div className="flex items-center gap-3 text-[11px] text-slate-500 pt-1">
                        <span>
                          <strong className="text-slate-400">{city.nearbyAreas?.length || 0}</strong> Routes
                        </span>
                        <span>&bull;</span>
                        <span>
                          <strong className="text-slate-400">{city.services?.length || 0}</strong> Services
                        </span>
                        <span>&bull;</span>
                        <span>
                          <strong className="text-slate-400">{city.faqs?.length || 0}</strong> FAQs
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <Link
                        href={`/service-areas/${currentState.slug}/${city.slug}/`}
                        target="_blank"
                        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition flex items-center gap-1 border border-slate-700"
                      >
                        <span>Preview Live</span>
                        <ExternalLink className="h-3 w-3 opacity-60" />
                      </Link>

                      <button
                        onClick={() => openCityEditor(currentState.slug, city)}
                        className="p-2 text-slate-400 hover:text-teal-300 hover:bg-slate-800 rounded-lg transition"
                        title="Edit city details"
                      >
                        <Edit2 className="h-4 w-4" />
                      </button>

                      <button
                        onClick={() => handleDeleteCity(currentState.slug, city.slug, city.name)}
                        className="p-2 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition"
                        title="Delete city"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* State / Category Modal */}
      {isStateModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-lg rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="text-lg font-bold text-white">
                {stateForm.slug ? "Edit State Category" : "Add New State Category"}
              </h3>
              <button
                onClick={() => setIsStateModalOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSaveState} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">State Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Assam, Meghalaya"
                  value={stateForm.name}
                  onChange={(e) => {
                    const name = e.target.value;
                    setStateForm({
                      ...stateForm,
                      name,
                      slug: stateForm.slug || name.toLowerCase().replace(/\s+/g, "-"),
                    });
                  }}
                  className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">URL Slug</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. assam"
                  value={stateForm.slug}
                  onChange={(e) => setStateForm({ ...stateForm, slug: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs font-mono text-white focus:outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Hero Introduction
                </label>
                <textarea
                  rows={3}
                  value={stateForm.heroIntro}
                  onChange={(e) => setStateForm({ ...stateForm, heroIntro: e.target.value })}
                  placeholder="Summary of ID card manufacturing and identity solutions for this state..."
                  className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-teal-500"
                />
              </div>

              <div className="pt-3 border-t border-slate-800 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsStateModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-teal-500 text-slate-950 text-xs font-bold hover:bg-teal-400 flex items-center gap-1.5"
                >
                  <Save className="h-4 w-4" />
                  <span>Save Category</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* City / Sub-category Modal (Rich 7-Tab Section Editor) */}
      {isCityModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-4xl rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl max-h-[92vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 shrink-0">
              <div>
                <h3 className="text-lg font-bold text-white">
                  {cityForm.slug ? `Edit ${cityForm.name} Dynamic Content` : `Add City in ${editingStateSlug}`}
                </h3>
                <p className="text-xs text-slate-400">
                  Manage all 8 sections: Hero, Local Presence, Products, Setups &amp; Workflow, Bulk &amp; Why Choose, Client Logos &amp; Coverage, FAQs, and SEO.
                </p>
              </div>
              <button onClick={() => setIsCityModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* 8 Section Navigation Tabs */}
            <div className="flex items-center gap-1.5 border-b border-slate-800 pb-2 shrink-0 overflow-x-auto scrollbar-thin">
              <button
                type="button"
                onClick={() => setCityActiveTab("general")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition shrink-0 ${
                  cityActiveTab === "general"
                    ? "bg-teal-500 text-slate-950"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                1. Hero &amp; Header
              </button>
              <button
                type="button"
                onClick={() => setCityActiveTab("local")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition shrink-0 ${
                  cityActiveTab === "local"
                    ? "bg-teal-500 text-slate-950"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                2. Local Presence &amp; Audiences
              </button>
              <button
                type="button"
                onClick={() => setCityActiveTab("services")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition shrink-0 ${
                  cityActiveTab === "services"
                    ? "bg-teal-500 text-slate-950"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                3. Products &amp; Services ({cityForm.services?.length || 0})
              </button>
              <button
                type="button"
                onClick={() => setCityActiveTab("packages")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition shrink-0 ${
                  cityActiveTab === "packages"
                    ? "bg-teal-500 text-slate-950"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                4. Packages &amp; Workflow
              </button>
              <button
                type="button"
                onClick={() => setCityActiveTab("whyChoose")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition shrink-0 ${
                  cityActiveTab === "whyChoose"
                    ? "bg-teal-500 text-slate-950"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                5. Why Choose &amp; Bulk ({cityForm.whyChoosePoints?.length || 0})
              </button>
              <button
                type="button"
                onClick={() => setCityActiveTab("clients")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition shrink-0 ${
                  cityActiveTab === "clients"
                    ? "bg-teal-500 text-slate-950"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                6. Client Logos &amp; Coverage ({cityForm.verifiedClients?.length || 0})
              </button>
              <button
                type="button"
                onClick={() => setCityActiveTab("faqs")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition shrink-0 ${
                  cityActiveTab === "faqs"
                    ? "bg-teal-500 text-slate-950"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                7. FAQs ({cityForm.faqs?.length || 0})
              </button>
              <button
                type="button"
                onClick={() => setCityActiveTab("seo")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition shrink-0 ${
                  cityActiveTab === "seo"
                    ? "bg-teal-500 text-slate-950"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                8. SEO &amp; AI Summary
              </button>
            </div>

            {/* Tab Contents Form */}
            <form onSubmit={handleSaveCity} className="space-y-4 flex-1 overflow-y-auto pr-1">
              {/* TAB 1: HERO & HEADER */}
              {cityActiveTab === "general" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">City Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Guwahati, Jorhat"
                        value={cityForm.name}
                        onChange={(e) => {
                          const name = e.target.value;
                          setCityForm({
                            ...cityForm,
                            name,
                            slug: cityForm.slug || name.toLowerCase().replace(/\s+/g, "-"),
                          });
                        }}
                        className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-teal-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">URL Slug</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. guwahati"
                        value={cityForm.slug}
                        onChange={(e) => setCityForm({ ...cityForm, slug: e.target.value })}
                        className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs font-mono text-white focus:outline-none focus:border-teal-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 p-3 bg-slate-950 border border-slate-800 rounded-xl">
                      <input
                        type="checkbox"
                        id="isPrimary"
                        checked={cityForm.isPrimary || false}
                        onChange={(e) => setCityForm({ ...cityForm, isPrimary: e.target.checked })}
                        className="rounded border-slate-700 text-teal-500 focus:ring-teal-500"
                      />
                      <label htmlFor="isPrimary" className="text-xs font-semibold text-slate-300 cursor-pointer">
                        Primary Manufacturing Base (e.g. Guwahati)
                      </label>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Hero Eyebrow Tag</label>
                      <input
                        type="text"
                        placeholder="e.g. ASSAM SERVICE AREA"
                        value={cityForm.heroEyebrow || ""}
                        onChange={(e) => setCityForm({ ...cityForm, heroEyebrow: e.target.value })}
                        className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-teal-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Hero Headline</label>
                    <input
                      type="text"
                      placeholder="e.g. Professional ID Cards & Identification Solutions for Organizations in Guwahati"
                      value={cityForm.heroHeadline || ""}
                      onChange={(e) => setCityForm({ ...cityForm, heroHeadline: e.target.value })}
                      className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-teal-500"
                    />
                  </div>

                  {/* Hero Showcase Image Upload & Floating Chips */}
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                        <ImageIcon className="h-4 w-4 text-teal-400" />
                        <span>Hero Showcase Image &amp; Floating Chips</span>
                      </label>
                      {cityForm.heroImage && (
                        <button
                          type="button"
                          onClick={() => setCityForm({ ...cityForm, heroImage: "" })}
                          className="text-[11px] font-semibold text-rose-400 hover:underline"
                        >
                          Clear Image
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 items-center">
                      <div className="flex items-center gap-3">
                        <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-xl border border-slate-800 bg-slate-900 flex items-center justify-center">
                          {cityForm.heroImage ? (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img
                              src={cityForm.heroImage}
                              alt="Hero Preview"
                              className="h-full w-full object-cover"
                              onError={(e) => {
                                (e.target as HTMLElement).style.display = "none";
                              }}
                            />
                          ) : (
                            <ImageIcon className="h-6 w-6 text-slate-600" />
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <input
                            type="text"
                            placeholder="/images/idgen-hero-cards-mockup.png"
                            value={cityForm.heroImage || ""}
                            onChange={(e) => setCityForm({ ...cityForm, heroImage: e.target.value })}
                            className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-white focus:outline-none focus:border-teal-500 truncate"
                          />
                          <p className="text-[10px] text-slate-500 mt-1">
                            Upload a custom mockup or product image.
                          </p>
                        </div>
                      </div>

                      <label className="relative cursor-pointer inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold hover:bg-teal-500/20 transition-all shrink-0">
                        {uploadingImage ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin text-teal-400" />
                            <span>Uploading...</span>
                          </>
                        ) : (
                          <>
                            <Upload className="h-4 w-4 text-teal-400" />
                            <span>Upload Image</span>
                          </>
                        )}
                        <input
                          type="file"
                          accept="image/*"
                          disabled={uploadingImage}
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </label>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 border-t border-slate-900">
                      <div>
                        <label className="text-[10px] font-bold text-slate-400 uppercase">Top Showcase Badge</label>
                        <input
                          type="text"
                          placeholder="e.g. Guwahati Direct Supply"
                          value={cityForm.heroShowcaseBadge || ""}
                          onChange={(e) => setCityForm({ ...cityForm, heroShowcaseBadge: e.target.value })}
                          className="w-full mt-1 px-2.5 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-slate-400 uppercase">Bottom Chip 1</label>
                        <input
                          type="text"
                          placeholder="e.g. CR80 PVC & RFID Credentials"
                          value={cityForm.heroShowcaseChip1 || ""}
                          onChange={(e) => setCityForm({ ...cityForm, heroShowcaseChip1: e.target.value })}
                          className="w-full mt-1 px-2.5 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-slate-400 uppercase">Bottom Chip 2</label>
                        <input
                          type="text"
                          placeholder="e.g. Verified Cleanroom"
                          value={cityForm.heroShowcaseChip2 || ""}
                          onChange={(e) => setCityForm({ ...cityForm, heroShowcaseChip2: e.target.value })}
                          className="w-full mt-1 px-2.5 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Hero Introduction (Core Lede)
                    </label>
                    <textarea
                      rows={3}
                      value={cityForm.heroIntro}
                      onChange={(e) => setCityForm({ ...cityForm, heroIntro: e.target.value })}
                      placeholder="IDGen is a Guwahati-based identity solutions company providing customized and bulk identification products..."
                      className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Hero Subtext / Experience Callout Box
                    </label>
                    <textarea
                      rows={2}
                      value={cityForm.heroSubtext || ""}
                      onChange={(e) => setCityForm({ ...cityForm, heroSubtext: e.target.value })}
                      placeholder="Our identification-product experience dates back to 2014, and today that experience is brought together..."
                      className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-teal-500"
                    />
                  </div>

                  {/* Production Workflow Steps */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Hero Production Workflow Steps ({cityForm.heroWorkflowSteps?.length || 0})
                    </label>
                    <div className="flex gap-2 mb-2">
                      <input
                        type="text"
                        placeholder="e.g. Requirement, Design, Approval, Production, Quality Check, Dispatch"
                        value={workflowStepInput}
                        onChange={(e) => setWorkflowStepInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            if (workflowStepInput.trim()) {
                              setCityForm({
                                ...cityForm,
                                heroWorkflowSteps: [...(cityForm.heroWorkflowSteps || []), workflowStepInput.trim()],
                              });
                              setWorkflowStepInput("");
                            }
                          }
                        }}
                        className="flex-1 px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-teal-500"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          if (workflowStepInput.trim()) {
                            setCityForm({
                              ...cityForm,
                              heroWorkflowSteps: [...(cityForm.heroWorkflowSteps || []), workflowStepInput.trim()],
                            });
                            setWorkflowStepInput("");
                          }
                        }}
                        className="px-3 py-2 rounded-xl bg-slate-800 text-teal-400 text-xs font-bold hover:bg-slate-700"
                      >
                        Add Step
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-1.5 p-2 bg-slate-950 border border-slate-800 rounded-xl">
                      {(cityForm.heroWorkflowSteps || []).map((st, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
                        >
                          <span>{idx + 1}. {st}</span>
                          <button
                            type="button"
                            onClick={() => {
                              setCityForm({
                                ...cityForm,
                                heroWorkflowSteps: cityForm.heroWorkflowSteps?.filter((_, i) => i !== idx),
                              });
                            }}
                            className="text-slate-500 hover:text-rose-400"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Trust Badges */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Hero Trust Badges ({cityForm.heroTrustBadges?.length || 0})
                    </label>
                    <div className="flex gap-2 mb-2">
                      <input
                        type="text"
                        placeholder="e.g. Free Pre-Production Physical Sample"
                        value={trustBadgeInput}
                        onChange={(e) => setTrustBadgeInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            if (trustBadgeInput.trim()) {
                              setCityForm({
                                ...cityForm,
                                heroTrustBadges: [...(cityForm.heroTrustBadges || []), trustBadgeInput.trim()],
                              });
                              setTrustBadgeInput("");
                            }
                          }
                        }}
                        className="flex-1 px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-teal-500"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          if (trustBadgeInput.trim()) {
                            setCityForm({
                              ...cityForm,
                              heroTrustBadges: [...(cityForm.heroTrustBadges || []), trustBadgeInput.trim()],
                            });
                            setTrustBadgeInput("");
                          }
                        }}
                        className="px-3 py-2 rounded-xl bg-slate-800 text-teal-400 text-xs font-bold hover:bg-slate-700"
                      >
                        Add Badge
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-1.5 p-2 bg-slate-950 border border-slate-800 rounded-xl">
                      {(cityForm.heroTrustBadges || []).map((b, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
                        >
                          <span>✓ {b}</span>
                          <button
                            type="button"
                            onClick={() => {
                              setCityForm({
                                ...cityForm,
                                heroTrustBadges: cityForm.heroTrustBadges?.filter((_, i) => i !== idx),
                              });
                            }}
                            className="text-slate-500 hover:text-rose-400"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons Labels */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Primary CTA Button Label</label>
                      <input
                        type="text"
                        placeholder={`Request a ${cityForm.name || "City"} Quote`}
                        value={cityForm.heroCtaText || ""}
                        onChange={(e) => setCityForm({ ...cityForm, heroCtaText: e.target.value })}
                        className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Secondary CTA Button Label</label>
                      <input
                        type="text"
                        placeholder="Call / WhatsApp IDGen"
                        value={cityForm.heroSecondaryCtaText || ""}
                        onChange={(e) => setCityForm({ ...cityForm, heroSecondaryCtaText: e.target.value })}
                        className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-teal-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: LOCAL PRESENCE & COVERAGE */}
              {cityActiveTab === "local" && (
                <div className="space-y-5">
                  {/* Top Badges & Title */}
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-3">
                    <span className="text-xs font-bold text-teal-400 uppercase tracking-wider block">
                      Section Header &amp; Live Badges
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                          Eyebrow Badge
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Central Manufacturing Hub • Guwahati Cleanroom"
                          value={cityForm.localPresenceBadge || ""}
                          onChange={(e) => setCityForm({ ...cityForm, localPresenceBadge: e.target.value })}
                          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                          Eyebrow Tag / Sub-Badge
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Direct Factory Access"
                          value={cityForm.localPresenceSubBadge || ""}
                          onChange={(e) => setCityForm({ ...cityForm, localPresenceSubBadge: e.target.value })}
                          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                        Section Title
                      </label>
                      <input
                        type="text"
                        placeholder={`IDGen in ${cityForm.name || "Guwahati"}: A Local Identity Solutions Partner`}
                        value={cityForm.localPresenceTitle || ""}
                        onChange={(e) => setCityForm({ ...cityForm, localPresenceTitle: e.target.value })}
                        className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                        Local Positioning &amp; Market Lede
                      </label>
                      <textarea
                        rows={2}
                        value={cityForm.localColor || ""}
                        onChange={(e) => setCityForm({ ...cityForm, localColor: e.target.value })}
                        placeholder="IDGen operates its central manufacturing cleanroom..."
                        className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                      />
                    </div>
                  </div>

                  {/* 4 Quick Advantage Pills */}
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-3">
                    <span className="text-xs font-bold text-teal-400 uppercase tracking-wider block">
                      4 Quick Advantage Badges (Pills)
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[0, 1, 2, 3].map((idx) => (
                        <div key={idx}>
                          <label className="block text-[10px] font-bold text-slate-400 mb-1">
                            Pill #{idx + 1}
                          </label>
                          <input
                            type="text"
                            placeholder={
                              idx === 0
                                ? "Primary Cleanroom"
                                : idx === 1
                                ? "24–48h Priority Batch Dispatch"
                                : idx === 2
                                ? "Pre-Production Physical Proofing"
                                : "100% Optical Quality Check"
                            }
                            value={cityForm.localAdvantagePills?.[idx] || ""}
                            onChange={(e) => {
                              const updated = [...(cityForm.localAdvantagePills || ["", "", "", ""])];
                              updated[idx] = e.target.value;
                              setCityForm({ ...cityForm, localAdvantagePills: updated });
                            }}
                            className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Target Audiences & Organizations Served */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Left Card: Target Audiences */}
                    <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-3">
                      <div className="border-b border-slate-800 pb-2">
                        <span className="text-xs font-bold text-teal-400 uppercase tracking-wider block">
                          Card 1: Target Audiences ({cityForm.targetAudiences?.length || 0})
                        </span>
                        <input
                          type="text"
                          placeholder="Organizations require identity products for:"
                          value={cityForm.audiencesTitle || ""}
                          onChange={(e) => setCityForm({ ...cityForm, audiencesTitle: e.target.value })}
                          className="w-full mt-2 px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-bold text-white"
                        />
                      </div>

                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Audience Name"
                          value={audienceNameInput}
                          onChange={(e) => setAudienceNameInput(e.target.value)}
                          className="flex-1 px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                        <input
                          type="text"
                          placeholder="Category"
                          value={audienceCategoryInput}
                          onChange={(e) => setAudienceCategoryInput(e.target.value)}
                          className="flex-1 px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            if (audienceNameInput.trim()) {
                              setCityForm({
                                ...cityForm,
                                targetAudiences: [
                                  ...(cityForm.targetAudiences || []),
                                  {
                                    name: audienceNameInput.trim(),
                                    category: audienceCategoryInput.trim() || "Institutional",
                                  },
                                ],
                              });
                              setAudienceNameInput("");
                              setAudienceCategoryInput("");
                            }
                          }}
                          className="px-3 py-1 rounded-lg bg-teal-500 text-slate-950 text-xs font-bold hover:bg-teal-400"
                        >
                          Add
                        </button>
                      </div>

                      <div className="space-y-1.5 max-h-44 overflow-y-auto pr-1">
                        {(cityForm.targetAudiences || []).map((aud, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-2 bg-slate-900 border border-slate-800 rounded-lg text-xs"
                          >
                            <div className="min-w-0">
                              <p className="font-bold text-white truncate">{aud.name}</p>
                              <p className="text-[10px] text-slate-400 truncate">{aud.category}</p>
                            </div>
                            <button
                              type="button"
                              onClick={() => {
                                setCityForm({
                                  ...cityForm,
                                  targetAudiences: cityForm.targetAudiences?.filter((_, i) => i !== idx),
                                });
                              }}
                              className="text-slate-500 hover:text-rose-400 ml-2"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Card: Organizations Served */}
                    <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-3">
                      <div className="border-b border-slate-800 pb-2">
                        <span className="text-xs font-bold text-teal-400 uppercase tracking-wider block">
                          Card 2: Organizations Served ({cityForm.organizationsServed?.length || 0})
                        </span>
                        <input
                          type="text"
                          placeholder="Typical Organizations We Serve:"
                          value={cityForm.organizationsTitle || ""}
                          onChange={(e) => setCityForm({ ...cityForm, organizationsTitle: e.target.value })}
                          className="w-full mt-2 px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-bold text-white"
                        />
                      </div>

                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="e.g. Schools, Colleges, Hospitals, NGOs"
                          value={orgInput}
                          onChange={(e) => setOrgInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              if (orgInput.trim()) {
                                setCityForm({
                                  ...cityForm,
                                  organizationsServed: [...(cityForm.organizationsServed || []), orgInput.trim()],
                                });
                                setOrgInput("");
                              }
                            }
                          }}
                          className="flex-1 px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            if (orgInput.trim()) {
                              setCityForm({
                                ...cityForm,
                                organizationsServed: [...(cityForm.organizationsServed || []), orgInput.trim()],
                              });
                              setOrgInput("");
                            }
                          }}
                          className="px-3 py-1 rounded-lg bg-teal-500 text-slate-950 text-xs font-bold hover:bg-teal-400"
                        >
                          Add
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-1.5 max-h-44 overflow-y-auto p-2 bg-slate-900 border border-slate-800 rounded-xl">
                        {(cityForm.organizationsServed || []).map((org, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-slate-300"
                          >
                            <span>{org}</span>
                            <button
                              type="button"
                              onClick={() => {
                                setCityForm({
                                  ...cityForm,
                                  organizationsServed: cityForm.organizationsServed?.filter((_, i) => i !== idx),
                                });
                              }}
                              className="text-slate-500 hover:text-rose-400"
                            >
                              ×
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Local Production Advantage Box */}
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-3">
                    <span className="text-xs font-bold text-teal-400 uppercase tracking-wider block">
                      Local Advantage Banner Card
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 mb-1">Banner Title</label>
                        <input
                          type="text"
                          placeholder={`${cityForm.name || "Guwahati"} Local Production Advantage`}
                          value={cityForm.localAdvantageTitle || ""}
                          onChange={(e) => setCityForm({ ...cityForm, localAdvantageTitle: e.target.value })}
                          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 mb-1">CTA Label</label>
                        <input
                          type="text"
                          placeholder="Quote →"
                          value={cityForm.localAdvantageCta || ""}
                          onChange={(e) => setCityForm({ ...cityForm, localAdvantageCta: e.target.value })}
                          className="w-24 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 mb-1">Description</label>
                      <textarea
                        rows={2}
                        value={cityForm.localAdvantageDesc || ""}
                        onChange={(e) => setCityForm({ ...cityForm, localAdvantageDesc: e.target.value })}
                        placeholder="Direct cleanroom manufacturing ensures fast physical proofs, immediate design sign-off, and priority local dispatch."
                        className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: PRODUCTS & SERVICES CAROUSEL */}
              {cityActiveTab === "services" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-slate-200">
                        Products &amp; Services Carousel Items ({cityForm.services?.length || 0})
                      </span>
                      <p className="text-[11px] text-slate-400">
                        Customize service cards, upload product images, and edit descriptions shown in the carousel.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const newService: CityServiceItem = {
                          id: `custom-${Date.now()}`,
                          title: `Custom Identification in ${cityForm.name || "City"}`,
                          categoryLabel: "Specialized",
                          imageSrc: "/images/student-id-card-printing-idgen.jpg",
                          description: `Tailored identification solutions and bulk ID card printing for organizations in ${cityForm.name || "this area"}.`,
                          href: "/id-card-printing/",
                          badge: "Custom",
                          tag: "High Quality",
                          spec: "CR80 PVC • High-Res Thermal Print",
                          highlights: ["High Resolution Printing", "Custom Lanyards", "Fast Turnaround"],
                        };
                        setCityForm({
                          ...cityForm,
                          services: [...(cityForm.services || []), newService],
                        });
                      }}
                      className="px-3 py-1.5 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-bold hover:bg-teal-500/20 flex items-center gap-1 shrink-0"
                    >
                      <Plus className="h-3.5 w-3.5" />
                      <span>Add Product / Service</span>
                    </button>
                  </div>

                  <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-1">
                    {(cityForm.services || []).map((srv, idx) => (
                      <div
                        key={srv.id || idx}
                        className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-3 relative group"
                      >
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <span className="text-xs font-bold text-teal-400 flex items-center gap-1.5">
                            <Sparkles className="h-3.5 w-3.5" />
                            <span>Product #{idx + 1}: {srv.title}</span>
                          </span>
                          <button
                            type="button"
                            onClick={() => {
                              const updated = (cityForm.services || []).filter((_, i) => i !== idx);
                              setCityForm({ ...cityForm, services: updated });
                            }}
                            className="text-xs text-rose-400 hover:underline flex items-center gap-1"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                            <span>Delete</span>
                          </button>
                        </div>

                        {/* Image Upload Row */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-3 bg-slate-900 border border-slate-800 rounded-xl">
                          <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border border-slate-700 bg-slate-950 flex items-center justify-center">
                            {srv.imageSrc ? (
                              /* eslint-disable-next-line @next/next/no-img-element */
                              <img
                                src={srv.imageSrc}
                                alt={srv.title}
                                className="h-full w-full object-cover"
                                onError={(e) => {
                                  (e.target as HTMLElement).style.display = "none";
                                }}
                              />
                            ) : (
                              <ImageIcon className="h-6 w-6 text-slate-600" />
                            )}
                          </div>

                          <div className="flex-1 min-w-0 w-full space-y-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                              Product Showcase Image
                            </label>
                            <input
                              type="text"
                              value={srv.imageSrc || ""}
                              onChange={(e) => {
                                const updated = [...(cityForm.services || [])];
                                updated[idx].imageSrc = e.target.value;
                                setCityForm({ ...cityForm, services: updated });
                              }}
                              placeholder="/images/student-id-card-printing-idgen.jpg"
                              className="w-full px-2.5 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs font-mono text-white focus:outline-none focus:border-teal-500"
                            />
                          </div>

                          <label className="relative cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold hover:bg-teal-500/20 shrink-0">
                            <Upload className="h-3.5 w-3.5" />
                            <span>Upload Image</span>
                            <input
                              type="file"
                              accept="image/*"
                              disabled={uploadingImage}
                              onChange={(e) => handleServiceImageUpload(e, idx)}
                              className="hidden"
                            />
                          </label>
                        </div>

                        {/* Title & Category */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                              Product Title
                            </label>
                            <input
                              type="text"
                              value={srv.title}
                              onChange={(e) => {
                                const updated = [...(cityForm.services || [])];
                                updated[idx].title = e.target.value;
                                setCityForm({ ...cityForm, services: updated });
                              }}
                              className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-teal-500"
                            />
                          </div>

                          <div>
                            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                              Category Label
                            </label>
                            <input
                              type="text"
                              value={srv.categoryLabel}
                              onChange={(e) => {
                                const updated = [...(cityForm.services || [])];
                                updated[idx].categoryLabel = e.target.value;
                                setCityForm({ ...cityForm, services: updated });
                              }}
                              className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-teal-500"
                            />
                          </div>
                        </div>

                        {/* Badge, Tag & Link */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div>
                            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                              Badge
                            </label>
                            <input
                              type="text"
                              value={srv.badge || ""}
                              placeholder="e.g. Academic Priority"
                              onChange={(e) => {
                                const updated = [...(cityForm.services || [])];
                                updated[idx].badge = e.target.value;
                                setCityForm({ ...cityForm, services: updated });
                              }}
                              className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-teal-500"
                            />
                          </div>

                          <div>
                            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                              Tag
                            </label>
                            <input
                              type="text"
                              value={srv.tag || ""}
                              placeholder="e.g. Schools & Universities"
                              onChange={(e) => {
                                const updated = [...(cityForm.services || [])];
                                updated[idx].tag = e.target.value;
                                setCityForm({ ...cityForm, services: updated });
                              }}
                              className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-teal-500"
                            />
                          </div>

                          <div>
                            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                              Target URL
                            </label>
                            <input
                              type="text"
                              value={srv.href}
                              placeholder="/student-id-card-printing/"
                              onChange={(e) => {
                                const updated = [...(cityForm.services || [])];
                                updated[idx].href = e.target.value;
                                setCityForm({ ...cityForm, services: updated });
                              }}
                              className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-white focus:outline-none focus:border-teal-500"
                            />
                          </div>
                        </div>

                        {/* Description */}
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                            Description
                          </label>
                          <textarea
                            rows={2}
                            value={srv.description}
                            onChange={(e) => {
                              const updated = [...(cityForm.services || [])];
                              updated[idx].description = e.target.value;
                              setCityForm({ ...cityForm, services: updated });
                            }}
                            className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-teal-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: PACKAGES & WORKFLOW */}
              {cityActiveTab === "packages" && (
                <div className="space-y-6">
                  {/* Complete Setups Header */}
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-3">
                    <span className="text-xs font-bold text-teal-400 uppercase tracking-wider block">
                      Complete Identification Setup Packages
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                          Section Eyebrow
                        </label>
                        <input
                          type="text"
                          placeholder="Configurations"
                          value={cityForm.setupsEyebrow || ""}
                          onChange={(e) => setCityForm({ ...cityForm, setupsEyebrow: e.target.value })}
                          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                          Section Title
                        </label>
                        <input
                          type="text"
                          placeholder={`Complete ID Card Solutions & Packages in ${cityForm.name || "City"}`}
                          value={cityForm.setupsTitle || ""}
                          onChange={(e) => setCityForm({ ...cityForm, setupsTitle: e.target.value })}
                          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 4 Packages List */}
                  <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                    {(cityForm.completeSetups || []).map((pkg, idx) => (
                      <div key={idx} className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-200">Package #{idx + 1}: {pkg.title}</span>
                          <label className="flex items-center gap-1.5 text-xs text-teal-400 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={pkg.recommended || false}
                              onChange={(e) => {
                                const updated = [...(cityForm.completeSetups || [])];
                                updated[idx].recommended = e.target.checked;
                                setCityForm({ ...cityForm, completeSetups: updated });
                              }}
                              className="rounded border-slate-700 text-teal-500"
                            />
                            <span>Most Popular Setup</span>
                          </label>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <input
                            type="text"
                            placeholder="Package Title"
                            value={pkg.title}
                            onChange={(e) => {
                              const updated = [...(cityForm.completeSetups || [])];
                              updated[idx].title = e.target.value;
                              setCityForm({ ...cityForm, completeSetups: updated });
                            }}
                            className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                          />
                          <input
                            type="text"
                            placeholder="Subtitle / Use Case"
                            value={pkg.subtitle}
                            onChange={(e) => {
                              const updated = [...(cityForm.completeSetups || [])];
                              updated[idx].subtitle = e.target.value;
                              setCityForm({ ...cityForm, completeSetups: updated });
                            }}
                            className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-bold text-slate-400 block mb-1">
                            Items Included (Comma separated)
                          </label>
                          <input
                            type="text"
                            placeholder="CR80 PVC Card, Rigid Crystal Holder, Satin Lanyard"
                            value={pkg.items.join(", ")}
                            onChange={(e) => {
                              const updated = [...(cityForm.completeSetups || [])];
                              updated[idx].items = e.target.value.split(",").map((s) => s.trim()).filter(Boolean);
                              setCityForm({ ...cityForm, completeSetups: updated });
                            }}
                            className="w-full px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 8-Stage Workflow Steps (Full Editor) */}
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-4">
                    <span className="text-xs font-bold text-teal-400 uppercase tracking-wider block">
                      How to Order ID Cards (8-Stage Workflow Settings)
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                          Workflow Eyebrow
                        </label>
                        <input
                          type="text"
                          placeholder="Step-by-Step Production Process • Factory Quality Standard"
                          value={cityForm.workflowEyebrow || ""}
                          onChange={(e) => setCityForm({ ...cityForm, workflowEyebrow: e.target.value })}
                          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                          Workflow Turnaround Badge
                        </label>
                        <input
                          type="text"
                          placeholder="Local Turnaround: 24–48h"
                          value={cityForm.workflowBadge || ""}
                          onChange={(e) => setCityForm({ ...cityForm, workflowBadge: e.target.value })}
                          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                        Workflow Section Title
                      </label>
                      <input
                        type="text"
                        placeholder={`How to Order ID Cards in ${cityForm.name || "City"}`}
                        value={cityForm.workflowTitle || ""}
                        onChange={(e) => setCityForm({ ...cityForm, workflowTitle: e.target.value })}
                        className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                        Workflow Subtitle / Lede
                      </label>
                      <textarea
                        rows={2}
                        value={cityForm.workflowSubtitle || ""}
                        onChange={(e) => setCityForm({ ...cityForm, workflowSubtitle: e.target.value })}
                        placeholder="A predictable 8-stage manufacturing workflow ensuring zero data errors..."
                        className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                      />
                    </div>

                    <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                      {(cityForm.orderSteps || []).map((step, idx) => (
                        <div key={idx} className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold text-teal-400">{step.step || `0${idx + 1}`}</span>
                            <input
                              type="text"
                              placeholder="Step Title"
                              value={step.title}
                              onChange={(e) => {
                                const updated = [...(cityForm.orderSteps || [])];
                                updated[idx].title = e.target.value;
                                setCityForm({ ...cityForm, orderSteps: updated });
                              }}
                              className="flex-1 px-2.5 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs font-bold text-white"
                            />
                            <input
                              type="text"
                              placeholder="Phase (e.g. Intake, Sign-Off)"
                              value={step.phase || ""}
                              onChange={(e) => {
                                const updated = [...(cityForm.orderSteps || [])];
                                updated[idx].phase = e.target.value;
                                setCityForm({ ...cityForm, orderSteps: updated });
                              }}
                              className="w-28 px-2.5 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs text-teal-300"
                            />
                          </div>
                          <textarea
                            rows={1}
                            placeholder="Step Description"
                            value={step.description}
                            onChange={(e) => {
                              const updated = [...(cityForm.orderSteps || [])];
                              updated[idx].description = e.target.value;
                              setCityForm({ ...cityForm, orderSteps: updated });
                            }}
                            className="w-full px-2.5 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-300"
                          />
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                        Workflow Bottom Turnaround Note
                      </label>
                      <input
                        type="text"
                        placeholder="Guwahati Hub Advantage: Free physical pre-production sample & priority 24–48h local delivery available."
                        value={cityForm.workflowNote || ""}
                        onChange={(e) => setCityForm({ ...cityForm, workflowNote: e.target.value })}
                        className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 5: WHY CHOOSE & BULK */}
              {cityActiveTab === "whyChoose" && (
                <div className="space-y-6">
                  {/* Why Choose Section & Advantage Pillars */}
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="h-4 w-4" />
                        <span>Why Choose IDGen Advantage Section &amp; Carousel Cards</span>
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setCityForm({
                            ...cityForm,
                            whyChoosePoints: getDefaultWhyChoosePoints(
                              cityForm.name || "Guwahati",
                              undefined,
                              cityForm.isPrimary || cityForm.slug === "guwahati"
                            ),
                          });
                          setMessage({ type: "success", text: "Reset to 6 default advantage cards with images." });
                        }}
                        className="text-[11px] text-teal-400 hover:underline flex items-center gap-1"
                      >
                        <Sparkles className="h-3 w-3" />
                        <span>Reset Default 6 Advantage Cards</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                          Section Eyebrow
                        </label>
                        <input
                          type="text"
                          placeholder="Why Choose Us"
                          value={cityForm.whyChooseEyebrow || ""}
                          onChange={(e) => setCityForm({ ...cityForm, whyChooseEyebrow: e.target.value })}
                          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                          Section Headline / Title
                        </label>
                        <input
                          type="text"
                          placeholder={`Why Choose IDGen in ${cityForm.name || "City"}?`}
                          value={cityForm.whyChooseTitle || ""}
                          onChange={(e) => setCityForm({ ...cityForm, whyChooseTitle: e.target.value })}
                          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                        Section Subtitle / Lede
                      </label>
                      <textarea
                        rows={2}
                        value={cityForm.whyChooseSubtitle || ""}
                        onChange={(e) => setCityForm({ ...cityForm, whyChooseSubtitle: e.target.value })}
                        placeholder="Direct regional manufacturing, experience dating back to 2014, organizational focus, and an integrated digital workflow."
                        className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                      />
                    </div>
                  </div>

                  {/* Add New Why Choose Card */}
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-3">
                    <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                      <Plus className="h-4 w-4 text-teal-400" />
                      <span>Add New Why Choose Advantage Card</span>
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 mb-1">Card Title *</label>
                        <input
                          type="text"
                          placeholder="e.g. Local Manufacturing Base"
                          value={whyChooseTitleInput}
                          onChange={(e) => setWhyChooseTitleInput(e.target.value)}
                          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 mb-1">Top Badge</label>
                        <input
                          type="text"
                          placeholder="e.g. Direct Cleanroom Hub"
                          value={whyChooseBadgeInput}
                          onChange={(e) => setWhyChooseBadgeInput(e.target.value)}
                          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 mb-1">Bottom Stat / Highlight</label>
                        <input
                          type="text"
                          placeholder="e.g. 24–48h Local Delivery"
                          value={whyChooseStatInput}
                          onChange={(e) => setWhyChooseStatInput(e.target.value)}
                          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                      </div>
                    </div>

                    {/* Image URL & Upload */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                      <div className="flex-1 w-full">
                        <label className="block text-[10px] font-bold text-slate-400 mb-1">Card Image URL or Path *</label>
                        <input
                          type="text"
                          placeholder="/images/service-guwahati-hub.jpg or https://..."
                          value={whyChooseImageInput}
                          onChange={(e) => setWhyChooseImageInput(e.target.value)}
                          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                      </div>
                      <div className="shrink-0 flex items-center gap-2 pt-4">
                        <label className="cursor-pointer px-3 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-xs font-bold text-teal-300 flex items-center gap-1.5 transition">
                          <Upload className="h-3.5 w-3.5" />
                          <span>{uploadingNewWhyChooseImg ? "Uploading..." : "Upload Image"}</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              const f = e.target.files?.[0];
                              if (f) handleWhyChooseImageUpload(f);
                            }}
                          />
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 mb-1">Card Description</label>
                      <textarea
                        rows={2}
                        value={whyChooseDescInput}
                        onChange={(e) => setWhyChooseDescInput(e.target.value)}
                        placeholder="Detail the advantage, technology, or institutional commitment..."
                        className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                      />
                    </div>

                    <div className="flex justify-end pt-1">
                      <button
                        type="button"
                        onClick={() => {
                          if (whyChooseTitleInput.trim()) {
                            setCityForm({
                              ...cityForm,
                              whyChoosePoints: [
                                ...(cityForm.whyChoosePoints || []),
                                {
                                  title: whyChooseTitleInput.trim(),
                                  badge: whyChooseBadgeInput.trim() || "IDGen Advantage",
                                  stat: whyChooseStatInput.trim() || "Quality Assured",
                                  image: whyChooseImageInput.trim() || "/images/why-idgen-more-than-brand.jpg",
                                  desc: whyChooseDescInput.trim() || "Experience and quality manufacturing.",
                                },
                              ],
                            });
                            setWhyChooseTitleInput("");
                            setWhyChooseBadgeInput("");
                            setWhyChooseStatInput("");
                            setWhyChooseImageInput("");
                            setWhyChooseDescInput("");
                            setMessage({ type: "success", text: "Added new Why Choose advantage card!" });
                          } else {
                            setMessage({ type: "error", text: "Please enter a Card Title." });
                          }
                        }}
                        className="px-4 py-2 rounded-xl bg-teal-500 text-slate-950 text-xs font-bold hover:bg-teal-400 flex items-center gap-1.5 shadow-md shadow-teal-500/20"
                      >
                        <Plus className="h-3.5 w-3.5" />
                        <span>Add Advantage Card</span>
                      </button>
                    </div>
                  </div>

                  {/* Why Choose Cards List with Thumbnails & Live Controls */}
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="text-xs font-bold text-slate-300">
                        Configured Advantage Carousel Cards ({(cityForm.whyChoosePoints || []).length})
                      </span>
                      <span className="text-[11px] text-slate-500">
                        Direct image uploads &amp; live slides in carousel
                      </span>
                    </div>

                    <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
                      {(cityForm.whyChoosePoints || []).map((pt, idx) => (
                        <div
                          key={idx}
                          className="p-3 bg-slate-900/90 border border-slate-800 rounded-xl flex flex-col sm:flex-row items-start gap-3 hover:border-slate-700 transition"
                        >
                          {/* Image Thumbnail & Upload Button */}
                          <div className="relative h-20 w-24 sm:w-28 shrink-0 rounded-lg overflow-hidden border border-slate-800 bg-slate-950 flex flex-col items-center justify-center group/img">
                            {pt.image ? (
                              <Image
                                src={pt.image}
                                alt={pt.title}
                                fill
                                className="object-cover object-center"
                                sizes="120px"
                              />
                            ) : (
                              <ImageIcon className="h-6 w-6 text-slate-600" />
                            )}
                            <label className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover/img:opacity-100 flex flex-col items-center justify-center cursor-pointer transition text-[9px] font-bold text-teal-300 text-center p-1">
                              <Upload className="h-3.5 w-3.5 mb-0.5" />
                              <span>{uploadingWhyChooseIdx === idx ? "Uploading..." : "Change Image"}</span>
                              <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => {
                                  const f = e.target.files?.[0];
                                  if (f) handleWhyChooseImageUpload(f, idx);
                                }}
                              />
                            </label>
                          </div>

                          {/* Inputs Grid */}
                          <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
                            <div className="sm:col-span-2 flex items-center gap-2">
                              <span className="text-[10px] font-mono text-teal-400 bg-teal-950/80 px-1.5 py-0.5 rounded border border-teal-800/60 font-bold shrink-0">
                                #{String(idx + 1).padStart(2, "0")}
                              </span>
                              <input
                                type="text"
                                value={pt.title}
                                placeholder="Title"
                                onChange={(e) => {
                                  const updated = [...(cityForm.whyChoosePoints || [])];
                                  updated[idx].title = e.target.value;
                                  setCityForm({ ...cityForm, whyChoosePoints: updated });
                                }}
                                className="flex-1 px-2.5 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs font-bold text-white focus:border-teal-500"
                              />
                            </div>

                            <div>
                              <label className="block text-[9px] font-semibold text-slate-400 mb-0.5">Top Badge</label>
                              <input
                                type="text"
                                value={pt.badge || ""}
                                placeholder="Badge (e.g. Turnkey Packages)"
                                onChange={(e) => {
                                  const updated = [...(cityForm.whyChoosePoints || [])];
                                  updated[idx].badge = e.target.value;
                                  setCityForm({ ...cityForm, whyChoosePoints: updated });
                                }}
                                className="w-full px-2 py-1 bg-slate-950 border border-slate-800 rounded text-[11px] text-teal-300"
                              />
                            </div>

                            <div>
                              <label className="block text-[9px] font-semibold text-slate-400 mb-0.5">Stat / Highlight</label>
                              <input
                                type="text"
                                value={pt.stat || ""}
                                placeholder="Stat (e.g. Since 2014)"
                                onChange={(e) => {
                                  const updated = [...(cityForm.whyChoosePoints || [])];
                                  updated[idx].stat = e.target.value;
                                  setCityForm({ ...cityForm, whyChoosePoints: updated });
                                }}
                                className="w-full px-2 py-1 bg-slate-950 border border-slate-800 rounded text-[11px] text-slate-300"
                              />
                            </div>

                            <div className="sm:col-span-2">
                              <label className="block text-[9px] font-semibold text-slate-400 mb-0.5">Image Path / URL</label>
                              <input
                                type="text"
                                value={pt.image || ""}
                                placeholder="/images/... or https://..."
                                onChange={(e) => {
                                  const updated = [...(cityForm.whyChoosePoints || [])];
                                  updated[idx].image = e.target.value;
                                  setCityForm({ ...cityForm, whyChoosePoints: updated });
                                }}
                                className="w-full px-2 py-1 bg-slate-950 border border-slate-800 rounded text-[11px] text-slate-300"
                              />
                            </div>

                            <div className="sm:col-span-2">
                              <label className="block text-[9px] font-semibold text-slate-400 mb-0.5">Description</label>
                              <textarea
                                rows={2}
                                value={pt.desc}
                                placeholder="Description"
                                onChange={(e) => {
                                  const updated = [...(cityForm.whyChoosePoints || [])];
                                  updated[idx].desc = e.target.value;
                                  setCityForm({ ...cityForm, whyChoosePoints: updated });
                                }}
                                className="w-full px-2 py-1 bg-slate-950 border border-slate-800 rounded text-xs text-slate-300"
                              />
                            </div>
                          </div>

                          {/* Reordering & Delete Controls */}
                          <div className="shrink-0 flex sm:flex-col items-center gap-1.5 self-end sm:self-center">
                            <button
                              type="button"
                              title="Move Up"
                              disabled={idx === 0}
                              onClick={() => {
                                if (idx === 0) return;
                                const updated = [...(cityForm.whyChoosePoints || [])];
                                const temp = updated[idx - 1];
                                updated[idx - 1] = updated[idx];
                                updated[idx] = temp;
                                setCityForm({ ...cityForm, whyChoosePoints: updated });
                              }}
                              className="p-1.5 rounded bg-slate-800 text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed text-xs font-bold"
                            >
                              ↑
                            </button>
                            <button
                              type="button"
                              title="Move Down"
                              disabled={idx === (cityForm.whyChoosePoints || []).length - 1}
                              onClick={() => {
                                if (idx === (cityForm.whyChoosePoints || []).length - 1) return;
                                const updated = [...(cityForm.whyChoosePoints || [])];
                                const temp = updated[idx + 1];
                                updated[idx + 1] = updated[idx];
                                updated[idx] = temp;
                                setCityForm({ ...cityForm, whyChoosePoints: updated });
                              }}
                              className="p-1.5 rounded bg-slate-800 text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed text-xs font-bold"
                            >
                              ↓
                            </button>
                            <button
                              type="button"
                              title="Delete Card"
                              onClick={() => {
                                setCityForm({
                                  ...cityForm,
                                  whyChoosePoints: cityForm.whyChoosePoints?.filter((_, i) => i !== idx),
                                });
                              }}
                              className="p-1.5 rounded text-slate-500 hover:text-rose-400 transition"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Complete Bulk ID Card Printing Settings */}
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-4">
                    <span className="text-xs font-bold text-teal-400 uppercase tracking-wider block">
                      Bulk ID Card Printing Section (Full Control)
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                          Eyebrow Badge
                        </label>
                        <input
                          type="text"
                          placeholder="High-Capacity Production • Institutional Fulfillment"
                          value={cityForm.bulkEyebrow || ""}
                          onChange={(e) => setCityForm({ ...cityForm, bulkEyebrow: e.target.value })}
                          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                          Sub-Badge / Hub Route
                        </label>
                        <input
                          type="text"
                          placeholder="Guwahati Direct Hub"
                          value={cityForm.bulkSubBadge || ""}
                          onChange={(e) => setCityForm({ ...cityForm, bulkSubBadge: e.target.value })}
                          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                        Bulk Section Title
                      </label>
                      <input
                        type="text"
                        placeholder={`Bulk ID Card Printing in ${cityForm.name || "City"}`}
                        value={cityForm.bulkTitle || ""}
                        onChange={(e) => setCityForm({ ...cityForm, bulkTitle: e.target.value })}
                        className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                        Bulk Section Lede
                      </label>
                      <textarea
                        rows={2}
                        value={cityForm.bulkDesc || ""}
                        onChange={(e) => setCityForm({ ...cityForm, bulkDesc: e.target.value })}
                        placeholder="IDGen supports institutional and high-volume identification requirements..."
                        className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                      />
                    </div>

                    {/* 3 Quick Capability Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 mb-1">Highlight #1</label>
                        <input
                          type="text"
                          placeholder="Up to 10,000+ IDs / Day"
                          value={cityForm.bulkHighlights?.[0] || ""}
                          onChange={(e) => {
                            const updated = [...(cityForm.bulkHighlights || ["", "", ""])];
                            updated[0] = e.target.value;
                            setCityForm({ ...cityForm, bulkHighlights: updated });
                          }}
                          className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 mb-1">Highlight #2</label>
                        <input
                          type="text"
                          placeholder="100% Optical Quality Check"
                          value={cityForm.bulkHighlights?.[1] || ""}
                          onChange={(e) => {
                            const updated = [...(cityForm.bulkHighlights || ["", "", ""])];
                            updated[1] = e.target.value;
                            setCityForm({ ...cityForm, bulkHighlights: updated });
                          }}
                          className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 mb-1">Highlight #3</label>
                        <input
                          type="text"
                          placeholder="Free Pre-Production Physical Sample"
                          value={cityForm.bulkHighlights?.[2] || ""}
                          onChange={(e) => {
                            const updated = [...(cityForm.bulkHighlights || ["", "", ""])];
                            updated[2] = e.target.value;
                            setCityForm({ ...cityForm, bulkHighlights: updated });
                          }}
                          className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                      </div>
                    </div>

                    {/* 4 Bulk Inputs Preparation Cards */}
                    <div className="space-y-3 pt-2 border-t border-slate-900">
                      <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">
                        4 Key Inputs for Large Orders Cards
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {(cityForm.bulkInputs || []).map((inp, idx) => (
                          <div key={idx} className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1.5">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-mono font-bold text-teal-400">{inp.step}</span>
                              <input
                                type="text"
                                value={inp.title}
                                onChange={(e) => {
                                  const updated = [...(cityForm.bulkInputs || [])];
                                  updated[idx].title = e.target.value;
                                  setCityForm({ ...cityForm, bulkInputs: updated });
                                }}
                                className="flex-1 px-2 py-0.5 bg-slate-950 border border-slate-800 rounded text-xs font-bold text-white"
                              />
                            </div>
                            <textarea
                              rows={2}
                              value={inp.description}
                              onChange={(e) => {
                                const updated = [...(cityForm.bulkInputs || [])];
                                updated[idx].description = e.target.value;
                                setCityForm({ ...cityForm, bulkInputs: updated });
                              }}
                              className="w-full px-2 py-0.5 bg-slate-950 border border-slate-800 rounded text-xs text-slate-300"
                            />
                            <input
                              type="text"
                              value={inp.badge}
                              placeholder="Badge"
                              onChange={(e) => {
                                const updated = [...(cityForm.bulkInputs || [])];
                                updated[idx].badge = e.target.value;
                                setCityForm({ ...cityForm, bulkInputs: updated });
                              }}
                              className="w-full px-2 py-0.5 bg-slate-950 border border-slate-800 rounded text-[10px] font-bold uppercase text-teal-300"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                        Bulk Bottom Verification Note
                      </label>
                      <input
                        type="text"
                        placeholder="Actual production capacity is matched to product and project specifications..."
                        value={cityForm.bulkBottomNote || ""}
                        onChange={(e) => setCityForm({ ...cityForm, bulkBottomNote: e.target.value })}
                        className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 6: CLIENT LOGOS & ORGANIZATIONS SHOWCASE */}
              {cityActiveTab === "clients" && (
                <div className="space-y-6">
                  {/* Section Settings */}
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-1.5">
                        <ShieldCheck className="h-4 w-4" />
                        <span>Organizations &amp; Client Logos Showcase Section</span>
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setCityForm({
                            ...cityForm,
                            verifiedClients: [
                              { name: "Don Bosco Hr Sec School", logo: "/images/clint logo/1.png", location: "Gojapara, Assam", tag: cityForm.name || "Guwahati" },
                              { name: "Jorhat Kendriya Vidyalaya", logo: "/images/clint logo/2.png", location: "Jorhat, Assam", tag: "Jorhat" },
                              { name: "CKB College", logo: "/images/clint logo/3.png", location: "Jorhat, Assam", tag: "Dibrugarh" },
                              { name: "DBS Itanagar", logo: "/images/clint logo/4.png", location: "Arunachal Pradesh", tag: "Silchar" },
                              { name: "Rayburn College", logo: "/images/clint logo/5.png", location: "Churachandpur, Manipur", tag: "Tezpur" },
                              { name: "Nathan Brown Academy", logo: "/images/clint logo/6.png", location: "Namrup, Assam", tag: "Nagaon" },
                              { name: "Ardalivia English School", logo: "/images/clint logo/7.png", location: "Assam", tag: "Tinsukia" },
                              { name: "Assam Govt Departments", logo: "/images/clint logo/8.png", location: "Guwahati Hub", tag: "Sivasagar" },
                            ],
                          });
                          setMessage({ type: "success", text: "Reset to 8 default Northeast partner logos." });
                        }}
                        className="text-[11px] text-teal-400 hover:underline flex items-center gap-1"
                      >
                        <Sparkles className="h-3 w-3" />
                        <span>Reset Default 8 Client Logos</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                          Section Badge
                        </label>
                        <input
                          type="text"
                          placeholder="Verified Institutional Deployments"
                          value={cityForm.projectsBadge || ""}
                          onChange={(e) => setCityForm({ ...cityForm, projectsBadge: e.target.value })}
                          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                          Section Sub-Badge (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="Active Regional Partnerships • Zero Fabricated Claims"
                          value={cityForm.projectsSubBadge || ""}
                          onChange={(e) => setCityForm({ ...cityForm, projectsSubBadge: e.target.value })}
                          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                        Section Headline / Title
                      </label>
                      <input
                        type="text"
                        placeholder={`Organizations & Projects in ${cityForm.name || "City"}`}
                        value={cityForm.projectsTitle || ""}
                        onChange={(e) => setCityForm({ ...cityForm, projectsTitle: e.target.value })}
                        className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                        Section Description / Subtitle
                      </label>
                      <textarea
                        rows={2}
                        value={cityForm.projectsDesc || ""}
                        onChange={(e) => setCityForm({ ...cityForm, projectsDesc: e.target.value })}
                        placeholder={`IDGen partners with leading academic institutions, corporate offices, and government departments across ${cityForm.name || "City"}.`}
                        className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                      />
                    </div>
                  </div>

                  {/* Add New Client Logo Card */}
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-3">
                    <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                      <Plus className="h-4 w-4 text-teal-400" />
                      <span>Add New Client / Institutional Logo</span>
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 mb-1">Organization Name *</label>
                        <input
                          type="text"
                          placeholder="e.g. Cotton University"
                          value={clientNameInput}
                          onChange={(e) => setClientNameInput(e.target.value)}
                          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 mb-1">City / Regional Tag</label>
                        <input
                          type="text"
                          placeholder={`e.g. ${cityForm.name || "Guwahati"}`}
                          value={clientTagInput}
                          onChange={(e) => setClientTagInput(e.target.value)}
                          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 mb-1">Location Details</label>
                        <input
                          type="text"
                          placeholder="e.g. Panbazar, Assam"
                          value={clientLocationInput}
                          onChange={(e) => setClientLocationInput(e.target.value)}
                          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                      </div>
                    </div>

                    {/* Logo Image URL & Upload */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                      <div className="flex-1 w-full">
                        <label className="block text-[10px] font-bold text-slate-400 mb-1">Logo Image URL or Path *</label>
                        <input
                          type="text"
                          placeholder="/images/clint logo/1.png or https://..."
                          value={clientLogoInput}
                          onChange={(e) => setClientLogoInput(e.target.value)}
                          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                      </div>
                      <div className="shrink-0 flex items-center gap-2 pt-4">
                        <label className="cursor-pointer px-3 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-xs font-bold text-teal-300 flex items-center gap-1.5 transition">
                          <Upload className="h-3.5 w-3.5" />
                          <span>{uploadingNewClientLogo ? "Uploading..." : "Upload Logo"}</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              const f = e.target.files?.[0];
                              if (f) handleClientLogoUpload(f);
                            }}
                          />
                        </label>
                        <button
                          type="button"
                          onClick={() => {
                            if (!clientNameInput.trim()) {
                              alert("Please enter client/organization name.");
                              return;
                            }
                            const newClient: VerifiedClientItem = {
                              name: clientNameInput.trim(),
                              location: clientLocationInput.trim() || clientTagInput.trim() || cityForm.name,
                              tag: clientTagInput.trim() || cityForm.name,
                              logo: clientLogoInput.trim() || "/images/clint logo/1.png",
                            };
                            setCityForm({
                              ...cityForm,
                              verifiedClients: [...(cityForm.verifiedClients || []), newClient],
                            });
                            setClientNameInput("");
                            setClientLocationInput("");
                            setClientTagInput("");
                            setClientLogoInput("");
                          }}
                          className="px-4 py-1.5 bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold rounded-lg flex items-center gap-1 transition"
                        >
                          <Plus className="h-3.5 w-3.5" />
                          <span>Add Client</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Existing Clients List */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-300">
                        Active Client Logos in Ticker ({cityForm.verifiedClients?.length || 0})
                      </span>
                      <span className="text-[11px] text-slate-500">
                        Reorder or change logos • Saved directly to city data
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[45vh] overflow-y-auto pr-1">
                      {(cityForm.verifiedClients || []).map((client, idx) => (
                        <div
                          key={idx}
                          className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-2 relative group hover:border-slate-700 transition"
                        >
                          <div className="flex items-center justify-between border-b border-slate-900 pb-1.5">
                            <span className="text-[11px] font-bold text-teal-400">
                              Client #{idx + 1}
                            </span>
                            <div className="flex items-center gap-1">
                              {idx > 0 && (
                                <button
                                  type="button"
                                  title="Move Left / Earlier"
                                  onClick={() => {
                                    const updated = [...(cityForm.verifiedClients || [])];
                                    const temp = updated[idx - 1];
                                    updated[idx - 1] = updated[idx];
                                    updated[idx] = temp;
                                    setCityForm({ ...cityForm, verifiedClients: updated });
                                  }}
                                  className="text-[10px] px-1.5 py-0.5 bg-slate-900 hover:bg-slate-800 rounded text-slate-400 hover:text-white"
                                >
                                  ▲
                                </button>
                              )}
                              {idx < (cityForm.verifiedClients || []).length - 1 && (
                                <button
                                  type="button"
                                  title="Move Right / Later"
                                  onClick={() => {
                                    const updated = [...(cityForm.verifiedClients || [])];
                                    const temp = updated[idx + 1];
                                    updated[idx + 1] = updated[idx];
                                    updated[idx] = temp;
                                    setCityForm({ ...cityForm, verifiedClients: updated });
                                  }}
                                  className="text-[10px] px-1.5 py-0.5 bg-slate-900 hover:bg-slate-800 rounded text-slate-400 hover:text-white"
                                >
                                  ▼
                                </button>
                              )}
                              <button
                                type="button"
                                onClick={() => {
                                  const updated = (cityForm.verifiedClients || []).filter((_, i) => i !== idx);
                                  setCityForm({ ...cityForm, verifiedClients: updated });
                                }}
                                className="text-rose-400 hover:text-rose-300 ml-1"
                                title="Remove Client"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            {/* Logo Thumbnail Preview */}
                            <div className="relative h-14 w-20 shrink-0 bg-slate-900 border border-slate-800 rounded-lg p-1 flex items-center justify-center overflow-hidden">
                              {client.logo ? (
                                /* eslint-disable-next-line @next/next/no-img-element */
                                <img
                                  src={client.logo}
                                  alt={client.name}
                                  className="h-full w-full object-contain"
                                  onError={(e) => {
                                    (e.target as HTMLElement).style.display = "none";
                                  }}
                                />
                              ) : (
                                <ImageIcon className="h-6 w-6 text-slate-600" />
                              )}
                            </div>

                            {/* Client Info Inputs */}
                            <div className="flex-1 space-y-1 min-w-0">
                              <input
                                type="text"
                                value={client.name}
                                placeholder="Organization Name"
                                onChange={(e) => {
                                  const updated = [...(cityForm.verifiedClients || [])];
                                  updated[idx].name = e.target.value;
                                  setCityForm({ ...cityForm, verifiedClients: updated });
                                }}
                                className="w-full px-2 py-1 bg-slate-900 border border-slate-800 rounded text-xs font-bold text-white"
                              />
                              <div className="grid grid-cols-2 gap-1.5">
                                <input
                                  type="text"
                                  value={client.tag || ""}
                                  placeholder="Tag (e.g. Guwahati)"
                                  onChange={(e) => {
                                    const updated = [...(cityForm.verifiedClients || [])];
                                    updated[idx].tag = e.target.value;
                                    setCityForm({ ...cityForm, verifiedClients: updated });
                                  }}
                                  className="w-full px-2 py-0.5 bg-slate-900 border border-slate-800 rounded text-[11px] text-teal-300 font-semibold"
                                />
                                <input
                                  type="text"
                                  value={client.location || ""}
                                  placeholder="Location"
                                  onChange={(e) => {
                                    const updated = [...(cityForm.verifiedClients || [])];
                                    updated[idx].location = e.target.value;
                                    setCityForm({ ...cityForm, verifiedClients: updated });
                                  }}
                                  className="w-full px-2 py-0.5 bg-slate-900 border border-slate-800 rounded text-[11px] text-slate-300"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Logo URL & Change Upload */}
                          <div className="flex items-center gap-2 pt-1 border-t border-slate-900">
                            <input
                              type="text"
                              value={client.logo}
                              placeholder="Logo Path / URL"
                              onChange={(e) => {
                                const updated = [...(cityForm.verifiedClients || [])];
                                updated[idx].logo = e.target.value;
                                setCityForm({ ...cityForm, verifiedClients: updated });
                              }}
                              className="flex-1 px-2 py-0.5 bg-slate-900 border border-slate-800 rounded text-[10px] text-slate-400 font-mono"
                            />
                            <label className="cursor-pointer px-2 py-0.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded text-[10px] font-bold text-teal-300 flex items-center gap-1 shrink-0">
                              <Upload className="h-3 w-3" />
                              <span>{uploadingClientLogoIdx === idx ? "..." : "Change"}</span>
                              <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => {
                                  const f = e.target.files?.[0];
                                  if (f) handleClientLogoUpload(f, idx);
                                }}
                              />
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Section 2: City Service Coverage & Fulfilment Zones */}
                  <div className="p-4 bg-slate-950 border border-teal-500/30 rounded-2xl space-y-4 shadow-lg">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" />
                        <span>{cityForm.name || "Guwahati"} Service Coverage &amp; Delivery Zones</span>
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          const defaultAreas =
                            cityForm.slug === "guwahati" || (cityForm.name && cityForm.name.toLowerCase().includes("guwahati"))
                              ? [
                                  "Dispur & Capital Complex",
                                  "Beltola & Basistha",
                                  "Khanapara & GS Road Corridor",
                                  "Paltan Bazar & Panbazar",
                                  "Fancy Bazar & Machkhowa",
                                  "Ganeshguri & Christian Basti",
                                  "Ulubari & Rehabari",
                                  "Jalukbari & Guwahati University Zone",
                                  "Borjhar & Airport Area",
                                  "Noonmati & Chandmari",
                                  "Six Mile & Panjabari",
                                  "North Guwahati & IITG Zone",
                                ]
                              : [
                                  `${cityForm.name || "City"} Central / Main Commercial Zone`,
                                  `${cityForm.name || "City"} Industrial & Tech Corridor`,
                                  `${cityForm.name || "City"} Institutional & Academic Belt`,
                                  `${cityForm.name || "City"} Administrative & Secretariat Zone`,
                                  `${cityForm.name || "City"} Regional Transit & Logistics Hub`,
                                ];

                          setCityForm({
                            ...cityForm,
                            coverageEyebrow: `${cityForm.name || "Guwahati"} Service Coverage`,
                            coverageTitle: `${cityForm.name || "Guwahati"} Service Coverage`,
                            coverageIntro: `IDGen is based in ${cityForm.name || "Guwahati"} and can serve organizations across the city and surrounding areas according to the applicable order and delivery arrangements.`,
                            coverageHubTitle:
                              cityForm.isPrimary || cityForm.slug === "guwahati"
                                ? "Guwahati Direct Hub"
                                : "Direct Regional Hub",
                            coverageHubSubtitle: `Full ${cityForm.name || "Guwahati"} & Regional Reach`,
                            nearbyAreas: defaultAreas,
                          });
                          setMessage({
                            type: "success",
                            text: `Reset Service Coverage & ${defaultAreas.length} delivery zones to defaults.`,
                          });
                        }}
                        className="text-[11px] text-teal-400 hover:underline flex items-center gap-1"
                      >
                        <Sparkles className="h-3 w-3" />
                        <span>Reset Coverage Defaults</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                          Coverage Eyebrow
                        </label>
                        <input
                          type="text"
                          placeholder={`${cityForm.name || "Guwahati"} Service Coverage`}
                          value={cityForm.coverageEyebrow || ""}
                          onChange={(e) => setCityForm({ ...cityForm, coverageEyebrow: e.target.value })}
                          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                          Coverage Headline / Title
                        </label>
                        <input
                          type="text"
                          placeholder={`${cityForm.name || "Guwahati"} Service Coverage`}
                          value={cityForm.coverageTitle || ""}
                          onChange={(e) => setCityForm({ ...cityForm, coverageTitle: e.target.value })}
                          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                        Intro / Coverage Description
                      </label>
                      <textarea
                        rows={2}
                        value={cityForm.coverageIntro || ""}
                        onChange={(e) => setCityForm({ ...cityForm, coverageIntro: e.target.value })}
                        placeholder={`IDGen is based in ${cityForm.name || "Guwahati"} and can serve organizations across the city and surrounding areas according to the applicable order and delivery arrangements.`}
                        className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                          Hub Badge Title
                        </label>
                        <input
                          type="text"
                          placeholder="Direct City Hub"
                          value={cityForm.coverageHubTitle || ""}
                          onChange={(e) => setCityForm({ ...cityForm, coverageHubTitle: e.target.value })}
                          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                          Hub Badge Subtitle
                        </label>
                        <input
                          type="text"
                          placeholder={`Full ${cityForm.name || "Guwahati"} & Regional Reach`}
                          value={cityForm.coverageHubSubtitle || ""}
                          onChange={(e) => setCityForm({ ...cityForm, coverageHubSubtitle: e.target.value })}
                          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                      </div>
                    </div>

                    {/* Serviced Localities & Fulfillment Zones */}
                    <div className="space-y-2.5 pt-2 border-t border-slate-800">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-teal-400" />
                          <span>Active Serviced Localities &amp; Fulfillment Zones ({cityForm.nearbyAreas?.length || 0})</span>
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              if (confirm("Clear all serviced localities?")) {
                                setCityForm({ ...cityForm, nearbyAreas: [] });
                              }
                            }}
                            className="text-[10px] text-rose-400 hover:underline"
                          >
                            Clear All
                          </button>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="e.g. Dispur, Beltola, Khanapara, GS Road, Panbazar (or comma-separated list)"
                          value={nearbyAreaInput}
                          onChange={(e) => setNearbyAreaInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              if (nearbyAreaInput.trim()) {
                                const parts = nearbyAreaInput.split(",").map((s) => s.trim()).filter(Boolean);
                                setCityForm({
                                  ...cityForm,
                                  nearbyAreas: [...(cityForm.nearbyAreas || []), ...parts],
                                });
                                setNearbyAreaInput("");
                              }
                            }
                          }}
                          className="flex-1 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-teal-500"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            if (nearbyAreaInput.trim()) {
                              const parts = nearbyAreaInput.split(",").map((s) => s.trim()).filter(Boolean);
                              setCityForm({
                                ...cityForm,
                                nearbyAreas: [...(cityForm.nearbyAreas || []), ...parts],
                              });
                              setNearbyAreaInput("");
                            }
                          }}
                          className="px-3.5 py-1.5 rounded-lg bg-teal-500 text-slate-950 text-xs font-bold hover:bg-teal-400 flex items-center gap-1 shrink-0 transition"
                        >
                          <Plus className="h-3.5 w-3.5" />
                          <span>Add Zone</span>
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto p-3 bg-slate-900/80 border border-slate-800/80 rounded-xl">
                        {(cityForm.nearbyAreas || []).length === 0 ? (
                          <p className="text-xs text-slate-500 italic py-1">
                            No localities added yet. Type an area above or click &quot;Reset Coverage Defaults&quot;.
                          </p>
                        ) : (
                          (cityForm.nearbyAreas || []).map((area, idx) => (
                            <span
                              key={idx}
                              className="group inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 hover:border-teal-500/50 transition shadow-2xs"
                            >
                              <MapPin className="h-3 w-3 text-teal-400 shrink-0" />
                              <span>{area}</span>
                              <button
                                type="button"
                                onClick={() => {
                                  setCityForm({
                                    ...cityForm,
                                    nearbyAreas: (cityForm.nearbyAreas || []).filter((_, i) => i !== idx),
                                  });
                                }}
                                className="text-slate-500 hover:text-rose-400 ml-1 transition"
                                title="Remove locality"
                              >
                                ×
                              </button>
                            </span>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 7: FAQS & HELP */}
              {cityActiveTab === "faqs" && (
                <div className="space-y-4">
                  {/* FAQ Header Settings */}
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                          FAQ Section Title
                        </label>
                        <input
                          type="text"
                          placeholder={`Frequently Asked Questions in ${cityForm.name || "City"}`}
                          value={cityForm.faqsTitle || ""}
                          onChange={(e) => setCityForm({ ...cityForm, faqsTitle: e.target.value })}
                          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                          Help Callout Title
                        </label>
                        <input
                          type="text"
                          placeholder="Have Specific Questions?"
                          value={cityForm.faqsHelpTitle || ""}
                          onChange={(e) => setCityForm({ ...cityForm, faqsHelpTitle: e.target.value })}
                          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-300">
                      Frequently Asked Questions ({cityForm.faqs?.length || 0})
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setCityForm({
                          ...cityForm,
                          faqs: [
                            ...(cityForm.faqs || []),
                            { q: `Does IDGen print ID cards in ${cityForm.name || "this area"}?`, a: "Yes, customized and bulk identity products." },
                          ],
                        });
                      }}
                      className="px-2.5 py-1 rounded-lg bg-slate-800 text-teal-400 text-xs font-bold hover:bg-slate-700 flex items-center gap-1"
                    >
                      <Plus className="h-3.5 w-3.5" />
                      <span>Add FAQ</span>
                    </button>
                  </div>

                  <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
                    {(cityForm.faqs || []).map((faq, idx) => (
                      <div key={idx} className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <input
                            type="text"
                            placeholder="Question"
                            value={faq.q}
                            onChange={(e) => {
                              const updated = [...(cityForm.faqs || [])];
                              updated[idx].q = e.target.value;
                              setCityForm({ ...cityForm, faqs: updated });
                            }}
                            className="flex-1 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs font-bold text-white focus:outline-none focus:border-teal-500"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const updated = (cityForm.faqs || []).filter((_, i) => i !== idx);
                              setCityForm({ ...cityForm, faqs: updated });
                            }}
                            className="p-1 text-slate-500 hover:text-rose-400"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <textarea
                          rows={2}
                          placeholder="Answer"
                          value={faq.a}
                          onChange={(e) => {
                            const updated = [...(cityForm.faqs || [])];
                            updated[idx].a = e.target.value;
                            setCityForm({ ...cityForm, faqs: updated });
                          }}
                          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-300 focus:outline-none focus:border-teal-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 7: SEO & AI SUMMARY */}
              {cityActiveTab === "seo" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      SEO Title (Page Title)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. ID Card Printing in Guwahati | IDGen Identity Solutions"
                      value={cityForm.metaTitle}
                      onChange={(e) => setCityForm({ ...cityForm, metaTitle: e.target.value })}
                      className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Meta Description
                    </label>
                    <textarea
                      rows={2}
                      value={cityForm.metaDescription}
                      onChange={(e) => setCityForm({ ...cityForm, metaDescription: e.target.value })}
                      placeholder="IDGen provides ID card printing and identity solutions in Guwahati, Assam, including student, employee, event and RFID cards..."
                      className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Quick Answer Box (Optimized for AI Overviews &amp; Snippets)
                    </label>
                    <textarea
                      rows={4}
                      value={cityForm.quickAnswer || ""}
                      onChange={(e) => setCityForm({ ...cityForm, quickAnswer: e.target.value })}
                      placeholder="IDGen is a Guwahati-based identity solutions company providing customized and bulk ID card printing..."
                      className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-teal-500"
                    />
                  </div>
                </div>
              )}

              {/* Modal Footer */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between shrink-0">
                <span className="text-[11px] text-slate-500">
                  Target: <code className="text-teal-400">/service-areas/{editingStateSlug}/{cityForm.slug || "[slug]"}/</code>
                </span>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setIsCityModalOpen(false)}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-teal-500 text-slate-950 text-xs font-bold hover:bg-teal-400 flex items-center gap-1.5 shadow-lg shadow-teal-500/20"
                  >
                    <Save className="h-4 w-4" />
                    <span>Save &amp; Publish City</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
