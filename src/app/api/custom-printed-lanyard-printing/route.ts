import { NextResponse } from "next/server";
import { getDynamicCustomPrintedLanyardPrinting } from "@/lib/dynamic-custom-printed-lanyard-printing";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = getDynamicCustomPrintedLanyardPrinting();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Failed to fetch custom printed lanyard dynamic content:", error);
    return NextResponse.json(
      { success: false, error: "Failed to load content" },
      { status: 500 }
    );
  }
}
