import { NextResponse } from "next/server";
import { getDynamicEmployeeIdCardPrinting } from "@/lib/dynamic-employee-id-card-printing";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await getDynamicEmployeeIdCardPrinting();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Failed to fetch employee ID card printing dynamic content:", error);
    return NextResponse.json(
      { success: false, error: "Failed to load content" },
      { status: 500 }
    );
  }
}
