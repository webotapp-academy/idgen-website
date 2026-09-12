import { NextResponse } from "next/server";
import {
  getDynamicIdCardHolders,
  saveDynamicIdCardHolders,
  resetDynamicIdCardHolders,
} from "@/lib/dynamic-id-card-holders";
import type { DynamicIdCardHoldersData } from "@/lib/dynamic-id-card-holders-types";
import { getAdminSession } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = getDynamicIdCardHolders();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Failed to fetch ID card holders data for admin:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to load ID card holders data",
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
      const resetData = resetDynamicIdCardHolders();
      return NextResponse.json({
        success: true,
        message: "ID Card Holders page restored to factory defaults",
        data: resetData,
      });
    }

    if (section && sectionData) {
      const current = getDynamicIdCardHolders();
      const updated = {
        ...current,
        [section]: sectionData,
      };
      const saved = saveDynamicIdCardHolders(
        updated as DynamicIdCardHoldersData
      );
      return NextResponse.json({
        success: true,
        message: `Section '${section}' saved and updated!`,
        data: saved,
      });
    }

    if (data) {
      const saved = saveDynamicIdCardHolders(data);
      return NextResponse.json({
        success: true,
        message: "ID Card Holders page saved and published successfully!",
        data: saved,
      });
    }

    return NextResponse.json(
      { success: false, error: "No valid action or data provided" },
      { status: 400 }
    );
  } catch (error: any) {
    console.error("Error saving ID card holders data:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
