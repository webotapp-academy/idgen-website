import { NextResponse } from "next/server";
import {
  getDynamicMembershipCardPrinting,
  saveDynamicMembershipCardPrinting,
  resetDynamicMembershipCardPrinting,
} from "@/lib/dynamic-membership-card-printing";
import type { DynamicMembershipCardPrintingPageData } from "@/lib/dynamic-membership-card-printing-types";
import { getAdminSession } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = getDynamicMembershipCardPrinting();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Failed to fetch membership card printing for admin:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to load membership card printing data",
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
      const resetData = resetDynamicMembershipCardPrinting();
      return NextResponse.json({
        success: true,
        message: "Membership Card Printing page restored to factory defaults",
        data: resetData,
      });
    }

    if (section && sectionData) {
      const current = getDynamicMembershipCardPrinting();
      const updated = {
        ...current,
        [section]: sectionData,
      };
      const saved = saveDynamicMembershipCardPrinting(
        updated as DynamicMembershipCardPrintingPageData
      );
      return NextResponse.json({
        success: true,
        message: `Section '${section}' saved and updated!`,
        data: saved,
      });
    }

    if (data) {
      const saved = saveDynamicMembershipCardPrinting(data);
      return NextResponse.json({
        success: true,
        message: "Membership Card Printing page saved and published successfully!",
        data: saved,
      });
    }

    return NextResponse.json(
      { success: false, error: "No valid action or data provided" },
      { status: 400 }
    );
  } catch (error: any) {
    console.error("Error saving membership card printing data:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
