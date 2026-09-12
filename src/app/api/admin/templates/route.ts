import { NextResponse } from "next/server";
import {
  getDynamicTemplates,
  saveDynamicTemplates,
  resetDynamicTemplates,
} from "@/lib/dynamic-templates";
import type { DynamicTemplatesData } from "@/lib/dynamic-templates-types";
import { getAdminSession } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = getDynamicTemplates();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Failed to fetch templates data for admin:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to load templates data",
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
      const resetData = resetDynamicTemplates();
      return NextResponse.json({
        success: true,
        message: "Templates page restored to factory defaults",
        data: resetData,
      });
    }

    if (section && sectionData) {
      const current = getDynamicTemplates();
      const updated = {
        ...current,
        [section]: sectionData,
      };
      const saved = saveDynamicTemplates(updated as DynamicTemplatesData);
      return NextResponse.json({
        success: true,
        message: `Section '${section}' saved and updated!`,
        data: saved,
      });
    }

    if (data) {
      const saved = saveDynamicTemplates(data);
      return NextResponse.json({
        success: true,
        message: "Templates page saved and published successfully!",
        data: saved,
      });
    }

    return NextResponse.json(
      { success: false, error: "No valid action or data provided" },
      { status: 400 }
    );
  } catch (error: any) {
    console.error("Error saving templates data:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
