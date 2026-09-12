import { NextResponse } from "next/server";
import { getDynamicMembershipCardPrinting } from "@/lib/dynamic-membership-card-printing";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = getDynamicMembershipCardPrinting();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Failed to fetch membership card printing dynamic data:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to load membership card printing data",
      },
      { status: 500 }
    );
  }
}
