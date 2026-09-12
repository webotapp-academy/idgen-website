import { NextResponse } from "next/server";
import {
  getDynamicCustomPrintedLanyardPrinting,
  saveDynamicCustomPrintedLanyardPrinting,
  resetDynamicCustomPrintedLanyardPrinting,
  type DynamicCustomPrintedLanyardPrintingData,
} from "@/lib/dynamic-custom-printed-lanyard-printing";
import { getAdminSession } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = getDynamicCustomPrintedLanyardPrinting();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Failed to fetch custom printed lanyard printing for admin:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to load custom printed lanyard printing data",
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
      const resetData = resetDynamicCustomPrintedLanyardPrinting();
      return NextResponse.json({
        success: true,
        message: "Custom Printed Lanyard Printing page restored to factory defaults",
        data: resetData,
      });
    }

    if (section && sectionData) {
      const current = getDynamicCustomPrintedLanyardPrinting();
      const updated = {
        ...current,
        [section]: sectionData,
      };
      const saved = saveDynamicCustomPrintedLanyardPrinting(
        updated as DynamicCustomPrintedLanyardPrintingData
      );
      return NextResponse.json({
        success: true,
        message: `Section '${section}' saved and updated!`,
        data: saved,
      });
    }

    if (data) {
      const saved = saveDynamicCustomPrintedLanyardPrinting(data);
      return NextResponse.json({
        success: true,
        message: "Custom Printed Lanyard Printing page saved and published successfully!",
        data: saved,
      });
    }

    return NextResponse.json(
      { success: false, error: "No valid action or data provided" },
      { status: 400 }
    );
  } catch (error: any) {
    console.error("Error saving custom printed lanyard printing data:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
