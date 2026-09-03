import { NextResponse } from "next/server";
import { saveCity, deleteCity, getCity } from "@/lib/dynamic-locations";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const stateSlug = searchParams.get("stateSlug") || searchParams.get("state");
    const citySlug = searchParams.get("citySlug") || searchParams.get("city");

    if (!stateSlug || !citySlug) {
      return NextResponse.json({ success: false, error: "State and City slugs are required" }, { status: 400 });
    }

    const city = getCity(stateSlug, citySlug);
    if (!city) {
      return NextResponse.json({ success: false, error: "City not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, city });
  } catch (error) {
    console.error("Failed to get city:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch city" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { stateSlug, city } = data;

    if (!stateSlug || !city || !city.name || !city.slug) {
      return NextResponse.json({ success: false, error: "State slug, City name, and City slug are required" }, { status: 400 });
    }

    const formattedCity = {
      ...city,
      slug: city.slug.trim().toLowerCase().replace(/\s+/g, "-"),
      name: city.name.trim(),
      heroHeadline: city.heroHeadline || `ID Card Printing & Identity Solutions in ${city.name}`,
      heroIntro: city.heroIntro || `IDGen provides customized ID card printing and identity solutions for organizations in ${city.name}.`,
      metaTitle: city.metaTitle || `ID Card Printing in ${city.name} | IDGen Identity Solutions`,
      metaDescription: city.metaDescription || `IDGen provides ID card printing and identity solutions in ${city.name}, including student, employee, event and RFID cards.`,
      nearbyAreas: Array.isArray(city.nearbyAreas) ? city.nearbyAreas : [],
      organizationsServed: Array.isArray(city.organizationsServed) ? city.organizationsServed : [],
      completeSetups: city.completeSetups || [],
      orderSteps: city.orderSteps || [],
      faqs: city.faqs || [],
      whyChoosePoints: city.whyChoosePoints || [],
      quickAnswer: city.quickAnswer || "",
    };

    const result = saveCity(stateSlug, formattedCity);
    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Failed to save city:", error);
    return NextResponse.json({ success: false, error: (error as Error).message || "Failed to save city" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const { stateSlug, city } = data;

    if (!stateSlug || !city || !city.slug) {
      return NextResponse.json({ success: false, error: "State slug and City data are required" }, { status: 400 });
    }

    const result = saveCity(stateSlug, city);
    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Failed to update city:", error);
    return NextResponse.json({ success: false, error: (error as Error).message || "Failed to update city" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const stateSlug = searchParams.get("stateSlug") || searchParams.get("state");
    const citySlug = searchParams.get("citySlug") || searchParams.get("city");

    if (!stateSlug || !citySlug) {
      return NextResponse.json({ success: false, error: "State and City slugs are required" }, { status: 400 });
    }

    const deleted = deleteCity(stateSlug, citySlug);
    if (!deleted) {
      return NextResponse.json({ success: false, error: "City not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "City deleted successfully" });
  } catch (error) {
    console.error("Failed to delete city:", error);
    return NextResponse.json({ success: false, error: "Failed to delete city" }, { status: 500 });
  }
}
