import { NextResponse } from "next/server";
import {
  getDynamicRfidCardPrinting,
  saveDynamicRfidCardPrinting,
  resetDynamicRfidCardPrinting,
} from "@/lib/dynamic-rfid-card-printing";
import type { DynamicRfidCardPrintingData } from "@/lib/dynamic-rfid-card-printing-types";
import { getAdminSession } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = getDynamicRfidCardPrinting();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Failed to fetch RFID card printing for admin:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to load RFID card printing data",
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
      const resetData = resetDynamicRfidCardPrinting();
      return NextResponse.json({
        success: true,
        message: "RFID Card Printing page restored to factory defaults",
        data: resetData,
      });
    }

    if (section && sectionData) {
      const current = getDynamicRfidCardPrinting();
      const updated = {
        ...current,
        [section]: sectionData,
      };
      const saved = saveDynamicRfidCardPrinting(
        updated as DynamicRfidCardPrintingData
      );
      return NextResponse.json({
        success: true,
        message: `Section '${section}' saved and updated!`,
        data: saved,
      });
    }

    if (data) {
      const saved = saveDynamicRfidCardPrinting(data);
      return NextResponse.json({
        success: true,
        message: "RFID Card Printing page saved and published successfully!",
        data: saved,
      });
    }

    return NextResponse.json(
      { success: false, error: "No valid action or data provided" },
      { status: 400 }
    );
  } catch (error: any) {
    console.error("Error saving RFID card printing data:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
