import { NextResponse } from "next/server";
import { getDynamicIdCardPrinting } from "@/lib/dynamic-id-card-printing";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = getDynamicIdCardPrinting();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Failed to fetch dynamic id card printing data:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to load id card printing data" },
      { status: 500 }
    );
  }
}
