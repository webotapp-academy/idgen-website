import { NextResponse } from "next/server";
import {
  getAllTechnicalSpecs,
  saveTechnicalSpec,
  deleteTechnicalSpec,
  resetTechnicalSpecsToDefaults,
  getSectionConfig,
  saveSectionConfig,
  type TechnicalSpecItem,
} from "@/lib/dynamic-specifications";
import { getAdminSession } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const includeInactive = searchParams.get("all") === "true";

    const specs = getAllTechnicalSpecs(includeInactive);
    const sectionConfig = getSectionConfig();
    return NextResponse.json({ success: true, specs, sectionConfig });
  } catch (error) {
    console.error("Failed to get admin specifications:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch specifications" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ success: false, error: "Unauthorized access" }, { status: 401 });
    }

    const data = await request.json();
    const { item, sectionConfig, action } = data;

    if (action === "reset") {
      const resetSpecs = resetTechnicalSpecsToDefaults();
      const config = getSectionConfig();
      return NextResponse.json({
        success: true,
        message: "Technical specifications reset to default engineering catalog",
        specs: resetSpecs,
        sectionConfig: config,
      });
    }

    if (sectionConfig) {
      const updatedConfig = saveSectionConfig(sectionConfig);
      return NextResponse.json({
        success: true,
        message: "Section header configuration updated",
        sectionConfig: updatedConfig,
      });
    }

    if (!item || !item.name) {
      return NextResponse.json(
        { success: false, error: "Product Name is required" },
        { status: 400 }
      );
    }

    const id = item.id || item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const saved = saveTechnicalSpec({ ...item, id });
    const allSpecs = getAllTechnicalSpecs(true);
    const currentConfig = getSectionConfig();

    return NextResponse.json({
      success: true,
      message: `Specification for "${saved.name}" saved successfully`,
      savedItem: saved,
      specs: allSpecs,
      sectionConfig: currentConfig,
    });
  } catch (error) {
    console.error("Failed to save specification item:", error);
    return NextResponse.json({ success: false, error: "Failed to save specification item" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ success: false, error: "Unauthorized access" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, error: "Specification Item ID is required" }, { status: 400 });
    }

    const deleted = deleteTechnicalSpec(id);
    if (!deleted) {
      return NextResponse.json({ success: false, error: "Specification item not found" }, { status: 404 });
    }

    const allSpecs = getAllTechnicalSpecs(true);
    const currentConfig = getSectionConfig();
    return NextResponse.json({
      success: true,
      message: "Specification item deleted successfully",
      specs: allSpecs,
      sectionConfig: currentConfig,
    });
  } catch (error) {
    console.error("Failed to delete specification item:", error);
    return NextResponse.json({ success: false, error: "Failed to delete specification item" }, { status: 500 });
  }
}
