import { NextResponse } from "next/server";
import {
  getDynamicContactUs,
  saveDynamicContactUs,
  resetDynamicContactUs,
} from "@/lib/dynamic-contact-us";
import type { DynamicContactUsData } from "@/lib/dynamic-contact-us-types";
import { getAdminSession } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = getDynamicContactUs();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Failed to fetch contact-us data for admin:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to load contact-us data",
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
      const resetData = resetDynamicContactUs();
      return NextResponse.json({
        success: true,
        message: "Contact Us page restored to factory defaults",
        data: resetData,
      });
    }

    if (section && sectionData) {
      const current = getDynamicContactUs();
      const updated: any = {
        ...current,
        [section]: sectionData,
      };

      // Keep hero address card settings and facility card settings perfectly in sync
      if (section === "hero") {
        if (sectionData.address !== undefined) {
          updated.facility = { ...updated.facility, address: sectionData.address };
        }
        if (sectionData.landmark !== undefined) {
          updated.facility = { ...updated.facility, landmark: sectionData.landmark };
        }
        if (sectionData.operatingHours !== undefined) {
          updated.facility = { ...updated.facility, operatingHours: sectionData.operatingHours };
        }
      } else if (section === "facility") {
        if (sectionData.address !== undefined) {
          updated.hero = { ...updated.hero, address: sectionData.address };
        }
        if (sectionData.landmark !== undefined) {
          updated.hero = { ...updated.hero, landmark: sectionData.landmark };
        }
        if (sectionData.operatingHours !== undefined) {
          updated.hero = { ...updated.hero, operatingHours: sectionData.operatingHours };
        }
      }

      const saved = saveDynamicContactUs(updated as DynamicContactUsData);
      return NextResponse.json({
        success: true,
        message: `Section '${section}' saved and updated!`,
        data: saved,
      });
    }

    if (data) {
      const saved = saveDynamicContactUs(data);
      return NextResponse.json({
        success: true,
        message: "Contact Us page successfully updated!",
        data: saved,
      });
    }

    return NextResponse.json(
      { success: false, error: "No data or action provided" },
      { status: 400 }
    );
  } catch (error: any) {
    console.error("Failed to save contact-us page updates:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to update contact-us page data",
      },
      { status: 500 }
    );
  }
}
