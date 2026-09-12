import { NextResponse } from "next/server";
import { getDynamicFaq } from "@/lib/dynamic-faq";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = getDynamicFaq();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to load FAQ data" },
      { status: 500 }
    );
  }
}
