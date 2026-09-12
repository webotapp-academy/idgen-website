import { NextResponse } from "next/server";
import { getDynamicGuides } from "@/lib/dynamic-guides";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = getDynamicGuides();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to load guides data" },
      { status: 500 }
    );
  }
}
