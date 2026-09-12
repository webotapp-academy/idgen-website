import { NextResponse } from "next/server";
import {
  getDynamicGuides,
  saveDynamicGuides,
  resetDynamicGuides,
} from "@/lib/dynamic-guides";
import type { DynamicGuidesData } from "@/lib/dynamic-guides-types";
import { getAdminSession } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = getDynamicGuides();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Failed to fetch guides data for admin:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to load guides data",
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
      const resetData = resetDynamicGuides();
      return NextResponse.json({
        success: true,
        message: "Guides page restored to factory defaults",
        data: resetData,
      });
    }

    if (section && sectionData) {
      const current = getDynamicGuides();
      const updated = {
        ...current,
        [section]: sectionData,
      };
      const saved = saveDynamicGuides(updated as DynamicGuidesData);
      return NextResponse.json({
        success: true,
        message: `Section '${section}' saved and updated!`,
        data: saved,
      });
    }

    if (data) {
      const saved = saveDynamicGuides(data);
      return NextResponse.json({
        success: true,
        message: "Guides page saved and published successfully!",
        data: saved,
      });
    }

    return NextResponse.json(
      { success: false, error: "No valid action or data provided" },
      { status: 400 }
    );
  } catch (error: any) {
    console.error("Error saving guides data:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
