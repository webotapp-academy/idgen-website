import { NextResponse } from "next/server";
import {
  getDynamicServices,
  saveDynamicServices,
  resetDynamicServices,
  addServiceItem,
  updateServiceItem,
  deleteServiceItem,
  type DynamicServicesData,
} from "@/lib/dynamic-services";
import { getAdminSession } from "@/lib/auth";

export async function GET() {
  try {
    const data = getDynamicServices();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Failed to fetch dynamic services for admin:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to load services data" },
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
    const { action, data, serviceItem, id, updates, section, sectionData } = body;

    if (action === "reset") {
      const resetData = resetDynamicServices();
      return NextResponse.json({
        success: true,
        message: "Services restored to default catalog",
        data: resetData,
      });
    }

    if (action === "add" && serviceItem) {
      const updatedData = addServiceItem(serviceItem);
      return NextResponse.json({
        success: true,
        message: `Service '${serviceItem.title}' added successfully!`,
        data: updatedData,
      });
    }

    if (action === "update" && id && updates) {
      const updatedData = updateServiceItem(id, updates);
      return NextResponse.json({
        success: true,
        message: `Service updated successfully!`,
        data: updatedData,
      });
    }

    if (action === "delete" && id) {
      const updatedData = deleteServiceItem(id);
      return NextResponse.json({
        success: true,
        message: `Service removed successfully!`,
        data: updatedData,
      });
    }

    if (section && sectionData) {
      const current = getDynamicServices();
      const updated = {
        ...current,
        [section]: sectionData,
      };
      const saved = saveDynamicServices(updated as DynamicServicesData);
      return NextResponse.json({
        success: true,
        message: `Section '${section}' updated successfully!`,
        data: saved,
      });
    }

    if (data) {
      const saved = saveDynamicServices(data);
      return NextResponse.json({
        success: true,
        message: "Services page updated and published successfully!",
        data: saved,
      });
    }

    return NextResponse.json(
      { success: false, error: "No valid action or data provided" },
      { status: 400 }
    );
  } catch (error: any) {
    console.error("Failed to update services:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to save services" },
      { status: 500 }
    );
  }
}
