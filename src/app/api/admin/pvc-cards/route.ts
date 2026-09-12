import { NextResponse } from "next/server";
import {
  getDynamicPvcCards,
  saveDynamicPvcCards,
  resetDynamicPvcCards,
} from "@/lib/dynamic-pvc-cards";
import type { DynamicPvcCardsData } from "@/lib/dynamic-pvc-cards-types";
import { getAdminSession } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = getDynamicPvcCards();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Failed to fetch PVC cards data for admin:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to load PVC cards data",
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
      const resetSuccess = resetDynamicPvcCards();
      const freshData = getDynamicPvcCards();
      return NextResponse.json({
        success: resetSuccess,
        message: "PVC Cards page restored to factory defaults",
        data: freshData,
      });
    }

    if (section && sectionData) {
      const current = getDynamicPvcCards();
      const updated = {
        ...current,
        [section]: sectionData,
      };
      const saved = saveDynamicPvcCards(updated as DynamicPvcCardsData);
      return NextResponse.json({
        success: saved,
        message: `Section '${section}' saved and updated!`,
        data: updated,
      });
    }

    if (data) {
      const saved = saveDynamicPvcCards(data);
      return NextResponse.json({
        success: saved,
        message: "PVC Cards page saved and published successfully!",
        data,
      });
    }

    return NextResponse.json(
      { success: false, error: "Invalid action or missing payload" },
      { status: 400 }
    );
  } catch (error: any) {
    console.error("Failed to save PVC cards data:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Internal server error occurred while saving",
      },
      { status: 500 }
    );
  }
}
