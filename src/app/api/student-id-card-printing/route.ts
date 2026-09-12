import { NextResponse } from "next/server";
import { getDynamicStudentIdCardPrinting } from "@/lib/dynamic-student-id-card-printing";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = getDynamicStudentIdCardPrinting();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Failed to fetch dynamic student id card printing data:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to load student id card printing data",
      },
      { status: 500 }
    );
  }
}
