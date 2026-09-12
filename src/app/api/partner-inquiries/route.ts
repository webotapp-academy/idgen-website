import { NextResponse } from "next/server";
import { saveLeadToAdminJson, saveLeadToDb, sendLeadNotificationEmail } from "@/lib/leads-and-email";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    const name = body?.name;
    const email = body?.email;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const payload = {
      type: "partner" as const,
      name,
      businessName: body?.businessName || body?.organization || body?.company || undefined,
      organization: body?.businessName || body?.organization || body?.company || undefined,
      email,
      phone: body?.phone || undefined,
      city: body?.city || undefined,
      message: body?.message || body?.notes || undefined,
      sourcePage: "/partners/",
    };

    // 1. Save to JSON store (immediately visible in Admin Panel /admin/partners)
    const storedLead = saveLeadToAdminJson(payload);

    // 2. Save to database if connected
    await saveLeadToDb(payload);

    // 3. Send email notification asynchronously
    try {
      await sendLeadNotificationEmail(storedLead);
    } catch (mailErr) {
      console.error("Partner inquiry email notification dispatch error:", mailErr);
    }

    return NextResponse.json({ ok: true, success: true, id: storedLead.id });
  } catch (err) {
    console.error("partner-inquiries processing error:", err);
    return NextResponse.json(
      { error: "We couldn't save your request right now — please try again shortly or contact us directly." },
      { status: 500 }
    );
  }
}
