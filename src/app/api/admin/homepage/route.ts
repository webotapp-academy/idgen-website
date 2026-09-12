import { NextResponse } from "next/server";
import {
  getDynamicHomePage,
  saveDynamicHomePage,
  resetDynamicHomePage,
  type DynamicHomePageData,
} from "@/lib/dynamic-homepage";
import { getAdminSession } from "@/lib/auth";

export async function GET() {
  try {
    const data = getDynamicHomePage();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Failed to fetch dynamic homepage:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to fetch homepage data" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json(
        { success: false, error: "Unauthorized access: Please log in as administrator" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { action, data, section, sectionData } = body;

    if (action === "reset") {
      const resetData = resetDynamicHomePage();
      return NextResponse.json({
        success: true,
        message: "Home page reset to system default content successfully",
        data: resetData,
      });
    }

    // Partial update for a single section
    if (section && sectionData) {
      const current = getDynamicHomePage();
      const updated = {
        ...current,
        [section]: sectionData,
      };
      const saved = saveDynamicHomePage(updated as DynamicHomePageData);
      return NextResponse.json({
        success: true,
        message: `Section '${section}' saved successfully`,
        data: saved,
      });
    }

    // Full document update
    if (data) {
      const saved = saveDynamicHomePage(data as DynamicHomePageData);
      return NextResponse.json({
        success: true,
        message: "Home page configuration saved successfully",
        data: saved,
      });
    }

    return NextResponse.json(
      { success: false, error: "No update data or section provided" },
      { status: 400 }
    );
  } catch (error: any) {
    console.error("Failed to save dynamic homepage:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to save homepage data" },
      { status: 500 }
    );
  }
}
