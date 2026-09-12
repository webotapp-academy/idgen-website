import { NextResponse } from "next/server";
import { getDynamicUltrasonicSealing } from "@/lib/dynamic-ultrasonic-sealing";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = getDynamicUltrasonicSealing();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Failed to fetch ultrasonic sealing dynamic data:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to load ultrasonic sealing data",
      },
      { status: 500 }
    );
  }
}
