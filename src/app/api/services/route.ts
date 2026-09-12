import { NextResponse } from "next/server";
import { getDynamicServices, getDropdownServices } from "@/lib/dynamic-services";

export async function GET() {
  try {
    const data = getDynamicServices();
    const dropdown = getDropdownServices();
    return NextResponse.json({ success: true, data, dropdown });
  } catch (error: any) {
    console.error("Public API failed to fetch dynamic services:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to load services data" },
      { status: 500 }
    );
  }
}
