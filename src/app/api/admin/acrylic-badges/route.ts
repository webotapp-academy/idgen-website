import { NextResponse } from "next/server";
import {
  getDynamicAcrylicBadges,
  saveDynamicAcrylicBadges,
  resetDynamicAcrylicBadges,
} from "@/lib/dynamic-acrylic-badges";
import type { DynamicAcrylicBadgesData } from "@/lib/dynamic-acrylic-badges-types";
import { getAdminSession } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = getDynamicAcrylicBadges();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Failed to fetch acrylic badges data for admin:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to load acrylic badges data",
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
      const resetData = resetDynamicAcrylicBadges();
      return NextResponse.json({
        success: true,
        message: "Acrylic Badges page restored to factory defaults",
        data: resetData,
      });
    }

    if (section && sectionData) {
      const current = getDynamicAcrylicBadges();
      const updated = {
        ...current,
        [section]: sectionData,
      };
      const saved = saveDynamicAcrylicBadges(
        updated as DynamicAcrylicBadgesData
      );
      return NextResponse.json({
        success: true,
        message: `Section '${section}' saved and updated!`,
        data: saved,
      });
    }

    if (data) {
      const saved = saveDynamicAcrylicBadges(data);
      return NextResponse.json({
        success: true,
        message: "Acrylic Badges page saved and published successfully!",
        data: saved,
      });
    }

    return NextResponse.json(
      { success: false, error: "No valid action or data provided" },
      { status: 400 }
    );
  } catch (error: any) {
    console.error("Error saving acrylic badges data:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
