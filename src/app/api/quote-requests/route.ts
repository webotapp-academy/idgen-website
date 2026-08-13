import { NextResponse } from "next/server";
import { getDb } from "@/db/db";
import { quoteRequests } from "@/db/schema";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body?.name || !body?.email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  try {
    const db = getDb();
    await db.insert(quoteRequests).values({
      name: body.name,
      organization: body.organization || null,
      email: body.email,
      phone: body.phone || null,
      serviceSlug: body.serviceSlug || null,
      city: body.city || null,
      quantity: body.quantity || null,
      message: body.message || null,
      sourcePage: body.sourcePage || null,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    // No DATABASE_URL provisioned yet — don't fail the request silently on
    // the visitor's end, but flag it clearly in the server log.
    console.error("quote-requests insert failed (is DATABASE_URL set?):", err);
    return NextResponse.json(
      { error: "We couldn't save your request right now — please try again shortly or contact us directly." },
      { status: 503 }
    );
  }
}
