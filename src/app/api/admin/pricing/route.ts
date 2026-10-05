import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import {
  getAllPricingItems,
  getPricingItem,
  savePricingItem,
  deletePricingItem,
  saveAllPricingItems,
  resetPricingToDefaults,
  type PricingItemData,
} from "@/lib/dynamic-pricing";
import {
  getDynamicPricingPage,
  saveDynamicPricingPage,
  saveDynamicPricingPageSection,
  resetDynamicPricingPage,
} from "@/lib/dynamic-pricing-page";
import type { DynamicPricingPageData } from "@/lib/dynamic-pricing-types";
import { getAdminSession } from "@/lib/auth";

export const dynamic = "force-dynamic";

function purgePricingCache() {
  try {
    revalidatePath("/pricing");
    revalidatePath("/pricing/");
    revalidatePath("/admin/pricing");
  } catch (error) {
    console.error("Cache purge error:", error);
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");

    if (type === "page") {
      const pageData = getDynamicPricingPage();
      return NextResponse.json(
        { success: true, page: pageData },
        { headers: { "Cache-Control": "no-store, no-cache, must-revalidate" } }
      );
    }

    const id = searchParams.get("id");
    const includeInactive = searchParams.get("all") === "true";

    if (id) {
      const item = getPricingItem(id);
      if (!item) {
        return NextResponse.json({ success: false, error: "Pricing item not found" }, { status: 404 });
      }
      return NextResponse.json(
        { success: true, item },
        { headers: { "Cache-Control": "no-store, no-cache, must-revalidate" } }
      );
    }

    const items = getAllPricingItems(includeInactive || true);
    return NextResponse.json(
      { success: true, items },
      { headers: { "Cache-Control": "no-store, no-cache, must-revalidate" } }
    );
  } catch (error) {
    console.error("Failed to get pricing items:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch pricing items" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ success: false, error: "Unauthorized access" }, { status: 401 });
    }

    const data = await request.json();
    const { item, action, type, section, sectionData, pageData, heroBundle } = data;

    // Page-level actions
    if (
      type === "page" ||
      action === "save_page" ||
      action === "save_page_section" ||
      action === "save_hero_bundle" ||
      action === "reset_page"
    ) {
      if (action === "reset_page") {
        const resetPage = resetDynamicPricingPage();
        purgePricingCache();
        return NextResponse.json({ success: true, message: "Pricing page reset to default content", page: resetPage });
      }

      if (action === "save_hero_bundle") {
        const bundle = heroBundle || { hero: data.hero, heroSlides: data.heroSlides };
        const current = getDynamicPricingPage();
        const updated: DynamicPricingPageData = {
          ...current,
          ...(bundle.hero ? { hero: bundle.hero } : {}),
          ...(bundle.heroSlides ? { heroSlides: bundle.heroSlides } : {}),
        };
        saveDynamicPricingPage(updated);
        purgePricingCache();
        return NextResponse.json({
          success: true,
          message: "Hero headline & carousel slides saved successfully",
          page: updated,
        });
      }

      if (action === "save_page_section" && section) {
        const updated = saveDynamicPricingPageSection(
          section as keyof DynamicPricingPageData,
          sectionData
        );
        purgePricingCache();
        return NextResponse.json({ success: true, message: `Section ${String(section)} updated successfully`, page: updated });
      }

      if (action === "save_page" && pageData) {
        saveDynamicPricingPage(pageData as DynamicPricingPageData);
        purgePricingCache();
        return NextResponse.json({ success: true, message: "Full pricing page updated successfully", page: pageData });
      }
    }

    if (action === "reset") {
      const resetItems = resetPricingToDefaults();
      purgePricingCache();
      return NextResponse.json({ success: true, message: "Pricing reset to default catalog", items: resetItems });
    }

    if (!item || !item.name || !item.price || !item.unit) {
      return NextResponse.json(
        { success: false, error: "Product Name, Reference Price, and Unit are required" },
        { status: 400 }
      );
    }

    const id = item.id || item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const saved = savePricingItem({ ...item, id });
    const allItems = getAllPricingItems(true);
    purgePricingCache();

    return NextResponse.json({ success: true, item: saved, items: allItems });
  } catch (error) {
    console.error("Failed to save pricing item:", error);
    return NextResponse.json(
      { success: false, error: (error as Error).message || "Failed to save pricing item" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ success: false, error: "Unauthorized access" }, { status: 401 });
    }

    const data = await request.json();
    const { items } = data;

    if (!Array.isArray(items)) {
      return NextResponse.json({ success: false, error: "Array of items required" }, { status: 400 });
    }

    saveAllPricingItems(items as PricingItemData[]);
    const updated = getAllPricingItems(true);
    purgePricingCache();
    return NextResponse.json({ success: true, items: updated });
  } catch (error) {
    console.error("Failed to update pricing items array:", error);
    return NextResponse.json({ success: false, error: "Failed to update pricing list" }, { status: 500 });
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
    const action = searchParams.get("action");

    if (action === "reset") {
      const items = resetPricingToDefaults();
      purgePricingCache();
      return NextResponse.json({ success: true, message: "Pricing reset to factory defaults", items });
    }

    if (!id) {
      return NextResponse.json({ success: false, error: "Pricing item ID is required" }, { status: 400 });
    }

    const deleted = deletePricingItem(id);
    if (!deleted) {
      return NextResponse.json({ success: false, error: "Pricing item not found" }, { status: 404 });
    }

    const allItems = getAllPricingItems(true);
    purgePricingCache();
    return NextResponse.json({ success: true, message: "Pricing item deleted successfully", items: allItems });
  } catch (error) {
    console.error("Failed to delete pricing item:", error);
    return NextResponse.json({ success: false, error: "Failed to delete pricing item" }, { status: 500 });
  }
}
