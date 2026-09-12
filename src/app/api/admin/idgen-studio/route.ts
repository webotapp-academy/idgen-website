import { NextRequest, NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import {
  getDynamicIdgenStudio,
  saveDynamicIdgenStudio,
  saveDynamicIdgenStudioSection,
  resetDynamicIdgenStudio,
} from "@/lib/dynamic-idgen-studio";
import type { DynamicIdgenStudioData } from "@/lib/dynamic-idgen-studio-types";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = getDynamicIdgenStudio();
    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to get IDGen Studio data" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { action, section, data } = body;

    if (action === "reset") {
      const ok = resetDynamicIdgenStudio();
      if (ok) {
        return NextResponse.json({
          success: true,
          message: "IDGen Studio reset to default seed data",
          data: getDynamicIdgenStudio(),
        });
      }
      return NextResponse.json({ success: false, error: "Failed to reset data" }, { status: 500 });
    }

    if (action === "save-section") {
      if (!section || !data) {
        return NextResponse.json(
          { success: false, error: "Missing section or data parameter" },
          { status: 400 }
        );
      }
      const ok = saveDynamicIdgenStudioSection(
        section as keyof DynamicIdgenStudioData,
        data
      );
      if (ok) {
        return NextResponse.json({
          success: true,
          message: `Section ${section} saved successfully`,
          data: getDynamicIdgenStudio(),
        });
      }
      return NextResponse.json(
        { success: false, error: `Failed to save section ${section}` },
        { status: 500 }
      );
    }

    if (action === "save-all") {
      if (!data) {
        return NextResponse.json({ success: false, error: "Missing data parameter" }, { status: 400 });
      }
      const ok = saveDynamicIdgenStudio(data);
      if (ok) {
        return NextResponse.json({
          success: true,
          message: "All IDGen Studio data saved successfully",
          data: getDynamicIdgenStudio(),
        });
      }
      return NextResponse.json(
        { success: false, error: "Failed to save IDGen Studio data" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: false, error: "Invalid action" }, { status: 400 });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to process request" },
      { status: 500 }
    );
  }
}
