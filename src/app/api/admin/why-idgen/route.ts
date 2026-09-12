import { NextResponse } from "next/server";
import {
  getDynamicWhyIdgen,
  saveDynamicWhyIdgen,
  resetDynamicWhyIdgen,
  type DynamicWhyIdgenData,
} from "@/lib/dynamic-why-idgen";
import { getAdminSession } from "@/lib/auth";

export async function GET() {
  try {
    const data = getDynamicWhyIdgen();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Failed to fetch dynamic why-idgen data:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to fetch why-idgen data" },
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
      const resetData = resetDynamicWhyIdgen();
      return NextResponse.json({
        success: true,
        message: "Why IDGen page reset to system default content successfully",
        data: resetData,
      });
    }

    // Partial update for a single section
    if (section && sectionData) {
      const current = getDynamicWhyIdgen();
      const updated = {
        ...current,
        [section]: sectionData,
      };
      const saved = saveDynamicWhyIdgen(updated as DynamicWhyIdgenData);
      return NextResponse.json({
        success: true,
        message: `Section '${section}' saved successfully`,
        data: saved,
      });
    }

    // Full document update
    if (data) {
      const saved = saveDynamicWhyIdgen(data);
      return NextResponse.json({
        success: true,
        message: "Why IDGen page updated and published successfully",
        data: saved,
      });
    }

    return NextResponse.json(
      { success: false, error: "No data payload provided for update" },
      { status: 400 }
    );
  } catch (error: any) {
    console.error("Failed to update Why IDGen data:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to update Why IDGen page" },
      { status: 500 }
    );
  }
}
