import { NextResponse } from "next/server";
import { getAllDynamicProjects, getDynamicProject } from "@/lib/dynamic-projects";

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
    console.error("Failed to fetch public projects:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch projects" }, { status: 500 });
  }
}
