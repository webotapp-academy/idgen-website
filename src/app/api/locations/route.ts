import { NextResponse } from "next/server";
import { getAllStates } from "@/lib/dynamic-locations";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const states = getAllStates();
    return NextResponse.json(
      { success: true, states },
      {
        headers: {
          "Cache-Control": "no-store, max-age=0, must-revalidate",
        },
      }
    );
  } catch (error) {
    console.error("Failed to fetch public locations:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch locations" },
      { status: 500 }
    );
  }
}
