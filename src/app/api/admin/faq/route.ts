import { NextResponse } from "next/server";
import {
  getDynamicFaq,
  saveDynamicFaq,
  resetDynamicFaq,
} from "@/lib/dynamic-faq";
import type { DynamicFaqData } from "@/lib/dynamic-faq-types";
import { getAdminSession } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = getDynamicFaq();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Failed to fetch FAQ data for admin:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to load FAQ data",
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
      const resetData = resetDynamicFaq();
      return NextResponse.json({
        success: true,
        message: "FAQ page restored to factory defaults",
        data: resetData,
      });
    }

    if (section && sectionData) {
      const current = getDynamicFaq();
      const updated = {
        ...current,
        [section]: sectionData,
      };
      const saved = saveDynamicFaq(updated as DynamicFaqData);
      return NextResponse.json({
        success: true,
        message: `Section '${section}' saved and updated!`,
        data: saved,
      });
    }

    if (data) {
      const saved = saveDynamicFaq(data);
      return NextResponse.json({
        success: true,
        message: "FAQ page saved and published successfully!",
        data: saved,
      });
    }

    return NextResponse.json(
      { success: false, error: "No valid action or data provided" },
      { status: 400 }
    );
  } catch (error: any) {
    console.error("Error saving FAQ data:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
