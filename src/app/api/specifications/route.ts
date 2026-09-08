import { NextResponse } from "next/server";
import { getAllTechnicalSpecs, getSectionConfig } from "@/lib/dynamic-specifications";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    let specs = getAllTechnicalSpecs(false);
    if (category && category !== "all") {
      specs = specs.filter((s) => s.category.toLowerCase() === category.toLowerCase());
    }

    const sectionConfig = getSectionConfig();

    return NextResponse.json({ success: true, specs, sectionConfig });
  } catch (error) {
    console.error("Failed to get specifications:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch specifications" }, { status: 500 });
  }
}
