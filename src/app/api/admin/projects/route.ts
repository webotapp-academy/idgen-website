import { NextResponse } from "next/server";
import {
  getAllDynamicProjects,
  getDynamicProject,
  saveDynamicProject,
  deleteDynamicProject,
  saveAllDynamicProjects,
  resetDynamicProjectsToDefaults,
  type RealProjectItem,
} from "@/lib/dynamic-projects";
import { getAdminSession } from "@/lib/auth";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (id) {
      const project = getDynamicProject(id);
      if (!project) {
        return NextResponse.json({ success: false, error: "Project not found" }, { status: 404 });
      }
      return NextResponse.json({ success: true, project });
    }

    const projects = getAllDynamicProjects();
    return NextResponse.json({ success: true, projects });
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch projects" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ success: false, error: "Unauthorized access" }, { status: 401 });
    }

    const data = await request.json();
    const { project, action } = data;

    if (action === "reset") {
      const resetProjects = resetDynamicProjectsToDefaults();
      return NextResponse.json({
        success: true,
        message: "Projects reset to verified default catalog",
        projects: resetProjects,
      });
    }

    if (!project || !project.org || !project.location) {
      return NextResponse.json(
        { success: false, error: "Organization name and location are required" },
        { status: 400 }
      );
    }

    const saved = saveDynamicProject(project);
    const allProjects = getAllDynamicProjects();

    return NextResponse.json({ success: true, project: saved, projects: allProjects });
  } catch (error) {
    console.error("Failed to save project:", error);
    return NextResponse.json(
      { success: false, error: (error as Error).message || "Failed to save project" },
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
    const { projects } = data;

    if (!Array.isArray(projects)) {
      return NextResponse.json({ success: false, error: "Array of projects required" }, { status: 400 });
    }

    saveAllDynamicProjects(projects as RealProjectItem[]);
    const updated = getAllDynamicProjects();
    return NextResponse.json({ success: true, projects: updated });
  } catch (error) {
    console.error("Failed to update projects:", error);
    return NextResponse.json({ success: false, error: "Failed to update projects" }, { status: 500 });
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
      const projects = resetDynamicProjectsToDefaults();
      return NextResponse.json({
        success: true,
        message: "Projects reset to factory defaults",
        projects,
      });
    }

    if (!id) {
      return NextResponse.json({ success: false, error: "Project ID is required" }, { status: 400 });
    }

    const deleted = deleteDynamicProject(id);
    if (!deleted) {
      return NextResponse.json({ success: false, error: "Project not found" }, { status: 404 });
    }

    const allProjects = getAllDynamicProjects();
    return NextResponse.json({
      success: true,
      message: "Project deleted successfully",
      projects: allProjects,
    });
  } catch (error) {
    console.error("Failed to delete project:", error);
    return NextResponse.json({ success: false, error: "Failed to delete project" }, { status: 500 });
  }
}
