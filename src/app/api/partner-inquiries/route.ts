import { NextResponse } from "next/server";
import { getDb } from "@/db/db";
import { partnerInquiries } from "@/db/schema";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body?.name || !body?.email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  try {
    const db = getDb();
    await db.insert(partnerInquiries).values({
      name: body.name,
      businessName: body.businessName || null,
      email: body.email,
      phone: body.phone || null,
      city: body.city || null,
      message: body.message || null,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("partner-inquiries insert failed (is DATABASE_URL set?):", err);
    return NextResponse.json(
      { error: "We couldn't save your request right now — please try again shortly or contact us directly." },
      { status: 503 }
    );
  }
}
