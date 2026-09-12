import { NextResponse } from "next/server";
import { getDynamicEventCardPrinting } from "@/lib/dynamic-event-card-printing";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = getDynamicEventCardPrinting();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Failed to fetch event card dynamic content:", error);
    return NextResponse.json(
      { success: false, error: "Failed to load content" },
      { status: 500 }
    );
  }
}
