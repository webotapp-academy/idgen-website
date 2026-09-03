import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const LEADS_FILE = path.join(process.cwd(), "src", "data", "admin-leads.json");

interface LeadRecord {
  id: string;
  type: "quote" | "partner";
  name: string;
  organization?: string;
  email: string;
  phone?: string;
  service?: string;
  city?: string;
  quantity?: string;
  message?: string;
  sourcePage?: string;
  status: "new" | "in_review" | "contacted" | "closed";
  createdAt: string;
}

function getStoredLeads(): LeadRecord[] {
  try {
    if (fs.existsSync(LEADS_FILE)) {
      const raw = fs.readFileSync(LEADS_FILE, "utf-8");
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error("Error reading admin-leads.json:", e);
  }

  // Initial mock/starter leads
  const starter: LeadRecord[] = [
    {
      id: "lead-1",
      type: "quote",
      name: "Debashis Sharma",
      organization: "Assam Engineering College",
      email: "d.sharma@aec.ac.in",
      phone: "+91 98640 12345",
      service: "student-id-card-printing",
      city: "Guwahati",
      quantity: "2,400 ID Cards + Lanyards",
      message: "Need quote for upcoming academic year student RFID identity cards and customized 20mm satin lanyards.",
      sourcePage: "/service-areas/assam/guwahati/",
      status: "new",
      createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
    },
    {
      id: "lead-2",
      type: "quote",
      name: "Priyanka Baruah",
      organization: "Downtown Hospitals Ltd",
      email: "hr@downtownhospitals.in",
      phone: "+91 94350 87654",
      service: "employee-id-card-printing",
      city: "Guwahati",
      quantity: "650 Badges",
      message: "Urgent requirements for medical staff & consultant access badges with ultrasonic sealed lamination.",
      sourcePage: "/employee-id-card-printing/",
      status: "in_review",
      createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
    },
    {
      id: "lead-3",
      type: "partner",
      name: "Ranjan Kalita",
      organization: "Kalita Office Solutions (Tezpur)",
      email: "sales@kalitasolutions.com",
      phone: "+91 97060 45678",
      city: "Tezpur",
      message: "Interested in becoming an IDGen regional distribution and channel partner for Sonitpur district.",
      status: "contacted",
      createdAt: new Date(Date.now() - 3600000 * 48).toISOString(),
    },
  ];

  try {
    const dir = path.dirname(LEADS_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(LEADS_FILE, JSON.stringify(starter, null, 2), "utf-8");
  } catch {}

  return starter;
}

function saveStoredLeads(leads: LeadRecord[]) {
  try {
    const dir = path.dirname(LEADS_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");
  } catch (e) {
    console.error("Error saving admin-leads.json:", e);
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type"); // "quote" | "partner" | null

    const leads = getStoredLeads();
    const filtered = type ? leads.filter((l) => l.type === type) : leads;

    return NextResponse.json({ success: true, leads: filtered });
  } catch (error) {
    console.error("Failed to fetch leads:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch leads" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const { id, status } = data;

    if (!id || !status) {
      return NextResponse.json({ success: false, error: "ID and status are required" }, { status: 400 });
    }

    const leads = getStoredLeads();
    const item = leads.find((l) => l.id === id);
    if (!item) {
      return NextResponse.json({ success: false, error: "Lead not found" }, { status: 404 });
    }

    item.status = status;
    saveStoredLeads(leads);

    return NextResponse.json({ success: true, lead: item });
  } catch (error) {
    console.error("Failed to update lead:", error);
    return NextResponse.json({ success: false, error: "Failed to update lead" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, error: "ID is required" }, { status: 400 });
    }

    const leads = getStoredLeads();
    const filtered = leads.filter((l) => l.id !== id);
    saveStoredLeads(filtered);

    return NextResponse.json({ success: true, message: "Lead deleted successfully" });
  } catch (error) {
    console.error("Failed to delete lead:", error);
    return NextResponse.json({ success: false, error: "Failed to delete lead" }, { status: 500 });
  }
}
