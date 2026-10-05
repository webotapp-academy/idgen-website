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
import {
  getDynamicCaseStudiesPage,
  saveDynamicCaseStudiesPage,
  resetDynamicCaseStudiesPage,
  type DynamicCaseStudiesPageData,
} from "@/lib/dynamic-case-studies";
import { getAdminSession } from "@/lib/auth";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");

    if (type === "page") {
      const page = getDynamicCaseStudiesPage();
      return NextResponse.json({ success: true, page, data: page });
    }

    const id = searchParams.get("id");
    if (id) {
      const project = getDynamicProject(id);
      if (!project) {
        return NextResponse.json({ success: false, error: "Project not found" }, { status: 404 });
      }
      return NextResponse.json({ success: true, project, data: project });
    }

    const projects = getAllDynamicProjects();
    return NextResponse.json({ success: true, projects, data: projects });
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
    const { project, action, type, pageData, section, sectionData } = data;

    // Handle Page-Level dynamic updates (Hero / CTA)
    if (type === "page" || action === "save_page" || action === "save_page_section" || action === "reset_page") {
      if (action === "reset_page") {
        const resetPage = resetDynamicCaseStudiesPage();
        return NextResponse.json({
          success: true,
          message: "Case Studies page sections reset to defaults",
          page: resetPage,
          data: resetPage,
        });
      }

      if (action === "save_page_section" && section && sectionData) {
        const current = getDynamicCaseStudiesPage();
        const updated = {
          ...current,
          [section]: sectionData,
        };
        const saved = saveDynamicCaseStudiesPage(updated);
        return NextResponse.json({
          success: true,
          message: `Section ${section} updated successfully`,
          page: saved,
          data: saved,
        });
      }

      if (pageData) {
        const saved = saveDynamicCaseStudiesPage(pageData as DynamicCaseStudiesPageData);
        return NextResponse.json({
          success: true,
          message: "Case Studies page updated successfully",
          page: saved,
          data: saved,
        });
      }
    }

    if (action === "reset") {
      const resetProjects = resetDynamicProjectsToDefaults();
      return NextResponse.json({
        success: true,
        message: "Projects reset to verified default catalog",
        projects: resetProjects,
        data: resetProjects,
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

    return NextResponse.json({ success: true, project: saved, projects: allProjects, data: allProjects });
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
    return NextResponse.json({ success: true, projects: updated, data: updated });
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
        data: projects,
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
      data: allProjects,
    });
  } catch (error) {
    console.error("Failed to delete project:", error);
    return NextResponse.json({ success: false, error: "Failed to delete project" }, { status: 500 });
  }
}
