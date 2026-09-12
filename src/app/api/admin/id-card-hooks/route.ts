import { NextResponse } from "next/server";
import {
  getDynamicIdCardHooks,
  saveDynamicIdCardHooks,
  resetDynamicIdCardHooks,
} from "@/lib/dynamic-id-card-hooks";
import type { DynamicIdCardHooksData } from "@/lib/dynamic-id-card-hooks-types";
import { getAdminSession } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = getDynamicIdCardHooks();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Failed to fetch ID card hooks data for admin:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to load ID card hooks data",
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
      const resetData = resetDynamicIdCardHooks();
      return NextResponse.json({
        success: true,
        message: "ID Card Hooks page restored to factory defaults",
        data: resetData,
      });
    }

    if (section && sectionData) {
      const current = getDynamicIdCardHooks();
      const updated = {
        ...current,
        [section]: sectionData,
      };
      const saved = saveDynamicIdCardHooks(
        updated as DynamicIdCardHooksData
      );
      return NextResponse.json({
        success: true,
        message: `Section '${section}' saved and updated!`,
        data: saved,
      });
    }

    if (data) {
      const saved = saveDynamicIdCardHooks(data);
      return NextResponse.json({
        success: true,
        message: "ID Card Hooks page saved and published successfully!",
        data: saved,
      });
    }

    return NextResponse.json(
      { success: false, error: "No valid action or data provided" },
      { status: 400 }
    );
  } catch (error: any) {
    console.error("Error saving ID card hooks data:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
