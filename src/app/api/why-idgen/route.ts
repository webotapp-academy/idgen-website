import { NextResponse } from "next/server";
import { getDynamicWhyIdgen } from "@/lib/dynamic-why-idgen";

export async function GET() {
  try {
    const data = getDynamicWhyIdgen();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Public API failed to fetch Why IDGen dynamic data:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to load Why IDGen data" },
      { status: 500 }
    );
  }
}
