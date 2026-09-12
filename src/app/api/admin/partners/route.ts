import { NextResponse } from "next/server";
import {
  getDynamicPartners,
  saveDynamicPartners,
  resetDynamicPartners,
} from "@/lib/dynamic-partners";
import type { DynamicPartnersData } from "@/lib/dynamic-partners-types";
import { getAdminSession } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = getDynamicPartners();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Failed to fetch partners data for admin:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to load partners data",
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
      const resetData = resetDynamicPartners();
      return NextResponse.json({
        success: true,
        message: "Partners page restored to factory defaults",
        data: resetData,
      });
    }

    if (section && sectionData) {
      const current = getDynamicPartners();
      const updated = {
        ...current,
        [section]: sectionData,
      };
      const saved = saveDynamicPartners(updated as DynamicPartnersData);
      return NextResponse.json({
        success: true,
        message: `Section '${section}' saved and updated!`,
        data: saved,
      });
    }

    if (data) {
      const saved = saveDynamicPartners(data);
      return NextResponse.json({
        success: true,
        message: "Partners page saved and published successfully!",
        data: saved,
      });
    }

    return NextResponse.json(
      { success: false, error: "No valid action or data provided" },
      { status: 400 }
    );
  } catch (error: any) {
    console.error("Error saving partners data:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
