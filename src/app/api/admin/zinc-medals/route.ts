import { NextResponse } from "next/server";
import {
  getDynamicZincMedals,
  saveDynamicZincMedals,
  resetDynamicZincMedals,
} from "@/lib/dynamic-zinc-medals";
import type { DynamicZincMedalsData } from "@/lib/dynamic-zinc-medals-types";
import { getAdminSession } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = getDynamicZincMedals();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Failed to fetch zinc medals data for admin:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to load zinc medals data",
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
      const resetSuccess = resetDynamicZincMedals();
      const freshData = getDynamicZincMedals();
      return NextResponse.json({
        success: resetSuccess,
        message: "Zinc Medals page restored to factory defaults",
        data: freshData,
      });
    }

    if (section && sectionData) {
      const current = getDynamicZincMedals();
      const updated = {
        ...current,
        [section]: sectionData,
      };
      const saved = saveDynamicZincMedals(
        updated as DynamicZincMedalsData
      );
      return NextResponse.json({
        success: saved,
        message: `Section '${section}' saved and updated!`,
        data: updated,
      });
    }

    if (data) {
      const saved = saveDynamicZincMedals(data);
      return NextResponse.json({
        success: saved,
        message: "Zinc Medals page saved and published successfully!",
        data,
      });
    }

    return NextResponse.json(
      { success: false, error: "Invalid action or missing payload" },
      { status: 400 }
    );
  } catch (error: any) {
    console.error("Failed to save zinc medals data:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Internal server error occurred while saving",
      },
      { status: 500 }
    );
  }
}
