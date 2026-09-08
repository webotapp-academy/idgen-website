import { NextResponse } from "next/server";
import { getAllStates, saveState, deleteState } from "@/lib/dynamic-locations";

export async function GET() {
  try {
    const states = getAllStates();
    return NextResponse.json({ success: true, states });
  } catch (error) {
    console.error("Failed to get states:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch states" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    if (!data.name || !data.slug) {
      return NextResponse.json({ success: false, error: "State name and slug are required" }, { status: 400 });
    }

    const state = saveState({
      name: data.name.trim(),
      slug: data.slug.trim().toLowerCase().replace(/\s+/g, "-"),
      heroIntro: data.heroIntro,
      metaTitle: data.metaTitle,
      metaDescription: data.metaDescription,
      indexed: data.indexed !== false,
      sortOrder: data.sortOrder,
      projectsBadge: data.projectsBadge,
      projectsSubBadge: data.projectsSubBadge,
      projectsTitle: data.projectsTitle,
      projectsDesc: data.projectsDesc,
      verifiedClients: data.verifiedClients,
      services: data.services,
      cities: data.cities || [],
    });

    return NextResponse.json({ success: true, state });
  } catch (error) {
    console.error("Failed to save state:", error);
    return NextResponse.json({ success: false, error: "Failed to save state" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    if (!data.slug) {
      return NextResponse.json({ success: false, error: "State slug is required" }, { status: 400 });
    }

    const state = saveState(data);
    return NextResponse.json({ success: true, state });
  } catch (error) {
    console.error("Failed to update state:", error);
    return NextResponse.json({ success: false, error: "Failed to update state" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");
    if (!slug) {
      return NextResponse.json({ success: false, error: "State slug is required" }, { status: 400 });
    }

    const deleted = deleteState(slug);
    if (!deleted) {
      return NextResponse.json({ success: false, error: "State not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "State deleted successfully" });
  } catch (error) {
    console.error("Failed to delete state:", error);
    return NextResponse.json({ success: false, error: "Failed to delete state" }, { status: 500 });
  }
}
