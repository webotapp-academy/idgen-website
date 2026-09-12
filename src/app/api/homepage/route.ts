import { NextResponse } from "next/server";
import { getDynamicHomePage } from "@/lib/dynamic-homepage";

export async function GET() {
  try {
    const data = getDynamicHomePage();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to load dynamic homepage" },
      { status: 500 }
    );
  }
}
