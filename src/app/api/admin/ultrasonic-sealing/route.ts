import { NextResponse } from "next/server";
import {
  getDynamicUltrasonicSealing,
  saveDynamicUltrasonicSealing,
  resetDynamicUltrasonicSealing,
} from "@/lib/dynamic-ultrasonic-sealing";
import type { DynamicUltrasonicSealingData } from "@/lib/dynamic-ultrasonic-sealing-types";
import { getAdminSession } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = getDynamicUltrasonicSealing();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Failed to fetch ultrasonic sealing for admin:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to load ultrasonic sealing data",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json(
        { success: false, error: "Unauthorized: Please log in as administrator" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { action, data, section, sectionData } = body;

    if (action === "reset") {
      const resetData = resetDynamicUltrasonicSealing();
      return NextResponse.json({
        success: true,
        message: "Ultrasonic Sealing page restored to factory defaults",
        data: resetData,
      });
    }

    if (section && sectionData) {
      const current = getDynamicUltrasonicSealing();
      const updated = {
        ...current,
        [section]: sectionData,
      };
      const saved = saveDynamicUltrasonicSealing(
        updated as DynamicUltrasonicSealingData
      );
      return NextResponse.json({
        success: true,
        message: `Section '${section}' saved and updated!`,
        data: saved,
      });
    }

    if (data) {
      const saved = saveDynamicUltrasonicSealing(data);
      return NextResponse.json({
        success: true,
        message: "Ultrasonic Sealing page saved and published successfully!",
        data: saved,
      });
    }

    return NextResponse.json(
      { success: false, error: "No valid action or data provided" },
      { status: 400 }
    );
  } catch (error: any) {
    console.error("Error saving ultrasonic sealing data:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
