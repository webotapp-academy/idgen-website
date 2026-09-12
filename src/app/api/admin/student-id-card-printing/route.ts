import { NextResponse } from "next/server";
import {
  getDynamicStudentIdCardPrinting,
  saveDynamicStudentIdCardPrinting,
  resetDynamicStudentIdCardPrinting,
  type DynamicStudentIdCardPrintingData,
} from "@/lib/dynamic-student-id-card-printing";
import { getAdminSession } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = getDynamicStudentIdCardPrinting();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Failed to fetch student id card printing for admin:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to load student id card printing data",
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
      const resetData = resetDynamicStudentIdCardPrinting();
      return NextResponse.json({
        success: true,
        message: "Student ID Card Printing page restored to factory defaults",
        data: resetData,
      });
    }

    if (section && sectionData) {
      const current = getDynamicStudentIdCardPrinting();
      const updated = {
        ...current,
        [section]: sectionData,
      };
      const saved = saveDynamicStudentIdCardPrinting(
        updated as DynamicStudentIdCardPrintingData
      );
      return NextResponse.json({
        success: true,
        message: `Section '${section}' saved and updated!`,
        data: saved,
      });
    }

    if (data) {
      const saved = saveDynamicStudentIdCardPrinting(data);
      return NextResponse.json({
        success: true,
        message: "Student ID Card Printing page saved and published successfully!",
        data: saved,
      });
    }

    return NextResponse.json(
      { success: false, error: "No valid action or data provided" },
      { status: 400 }
    );
  } catch (error: any) {
    console.error("Error saving student id card printing data:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
