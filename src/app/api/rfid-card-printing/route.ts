import { NextResponse } from "next/server";
import { getDynamicRfidCardPrinting } from "@/lib/dynamic-rfid-card-printing";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = getDynamicRfidCardPrinting();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Failed to fetch RFID card printing dynamic data:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to load RFID card printing data",
      },
      { status: 500 }
    );
  }
}
