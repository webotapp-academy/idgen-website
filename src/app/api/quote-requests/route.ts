import { NextResponse } from "next/server";
import { saveLeadToAdminJson, saveLeadToDb, sendLeadNotificationEmail } from "@/lib/leads-and-email";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    const name = body?.name || body?.contactName;
    const email = body?.email;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const payload = {
      type: "quote" as const,
      name,
      organization: body?.organization || body?.company || undefined,
      email,
      phone: body?.phone || undefined,
      serviceSlug: body?.serviceSlug || body?.service || body?.productType || undefined,
      service: body?.service || body?.serviceSlug || body?.productType || undefined,
      city: body?.city || undefined,
      quantity: body?.quantity || undefined,
      message: body?.message || body?.notes || undefined,
      sourcePage: body?.sourcePage || body?.source || "/contact-us/",
    };

    // 1. Save to JSON store (immediately visible in Admin Panel /admin/quotes)
    const storedLead = saveLeadToAdminJson(payload);

    // 2. Save to database if connected
    await saveLeadToDb(payload);

    // 3. Send email notification asynchronously
    try {
      await sendLeadNotificationEmail(storedLead);
    } catch (mailErr) {
      console.error("Email notification dispatch error:", mailErr);
    }

    return NextResponse.json({ ok: true, success: true, id: storedLead.id });
  } catch (err) {
    console.error("quote-requests processing error:", err);
    return NextResponse.json(
      { error: "We couldn't save your request right now — please try again shortly or contact us directly." },
      { status: 500 }
    );
  }
}
