import { NextResponse } from "next/server";
import {
  getDynamicIdCardPrinting,
  saveDynamicIdCardPrinting,
  resetDynamicIdCardPrinting,
  type DynamicIdCardPrintingData,
} from "@/lib/dynamic-id-card-printing";
import { getAdminSession } from "@/lib/auth";

export async function GET() {
  try {
    const data = getDynamicIdCardPrinting();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Failed to fetch id card printing for admin:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to load id card printing data" },
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
      const resetData = resetDynamicIdCardPrinting();
      return NextResponse.json({
        success: true,
        message: "ID Card Printing page restored to factory defaults",
        data: resetData,
      });
    }

    if (section && sectionData) {
      const current = getDynamicIdCardPrinting();
      const updated = {
        ...current,
        [section]: sectionData,
      };
      const saved = saveDynamicIdCardPrinting(updated as DynamicIdCardPrintingData);
      return NextResponse.json({
        success: true,
        message: `Section '${section}' saved and updated!`,
        data: saved,
      });
    }

    if (data) {
      const saved = saveDynamicIdCardPrinting(data);
      return NextResponse.json({
        success: true,
        message: "ID Card Printing page saved and published successfully!",
        data: saved,
      });
    }

    return NextResponse.json(
      { success: false, error: "No valid action or data provided" },
      { status: 400 }
    );
  } catch (error: any) {
    console.error("Error saving id card printing data:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
