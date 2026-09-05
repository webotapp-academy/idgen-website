import { NextResponse } from "next/server";
import { getAllPricingItems } from "@/lib/dynamic-pricing";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    let items = getAllPricingItems(false);
    if (category && category !== "all") {
      items = items.filter((i) => i.category === category);
    }

    return NextResponse.json({ success: true, items });
  } catch (error) {
    console.error("Failed to get pricing:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch pricing" }, { status: 500 });
  }
}
