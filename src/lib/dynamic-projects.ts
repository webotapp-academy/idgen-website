import { loadDynamicJson, saveDynamicJson } from "./dynamic-storage";
import {
  type RealProjectItem,
  type CategoryFilterItem,
  INITIAL_PROJECTS,
  DEFAULT_CATEGORY_FILTERS,
} from "./dynamic-projects-types";

export type { RealProjectItem, CategoryFilterItem };
export { INITIAL_PROJECTS, DEFAULT_CATEGORY_FILTERS };

const FILENAME = "dynamic-projects.json";

export function getAllDynamicProjects(): RealProjectItem[] {
  try {
    const loaded = loadDynamicJson<any>(FILENAME, INITIAL_PROJECTS);
    if (Array.isArray(loaded) && loaded.length > 0) {
      return loaded;
    }
    if (loaded && typeof loaded === "object") {
      if (Array.isArray(loaded.projects) && loaded.projects.length > 0) {
        return loaded.projects;
      }
      if (loaded.project && typeof loaded.project === "object" && loaded.project.org) {
        return [loaded.project, ...INITIAL_PROJECTS];
      }
    }
  } catch (e) {
    console.error("Error reading dynamic-projects.json, falling back to initial data:", e);
  }
  return INITIAL_PROJECTS;
}

export function saveAllDynamicProjects(projects: RealProjectItem[]): void {
  saveDynamicJson(FILENAME, projects);
}

export function getDynamicProject(id: string): RealProjectItem | undefined {
  const projects = getAllDynamicProjects();
  return projects.find((p) => p.id.toLowerCase() === id.toLowerCase());
}

export function saveDynamicProject(
  projectData: Partial<RealProjectItem> & { org: string; location: string }
): RealProjectItem {
  const projects = [...getAllDynamicProjects()];

  const rawId =
    projectData.id ||
    projectData.org
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const id = rawId.trim() || `project-${Date.now()}`;
  const index = projects.findIndex((p) => p.id.toLowerCase() === id.toLowerCase());

  const category = (projectData.category || "student").toLowerCase().trim();
  const badge =
    projectData.badge?.trim() ||
    projectData.categoryLabel?.trim() ||
    DEFAULT_CATEGORY_FILTERS.find((c) => c.id === category)?.label ||
    "Delivered Project";

  const categoryLabel = projectData.categoryLabel?.trim() || badge;

  const updatedProject: RealProjectItem = {
    id,
    org: projectData.org.trim(),
    location: projectData.location.trim(),
    category,
    categoryLabel,
    badge,
    requirement: projectData.requirement?.trim() || "Complete personalized identification project.",
    products: projectData.products?.trim() || "PVC Cards + Accessories",
    image: projectData.image?.trim() || "/images/idgen-hero-cards-mockup.png",
    imageSecondary: projectData.imageSecondary?.trim() || undefined,
    workflow:
      Array.isArray(projectData.workflow) && projectData.workflow.length > 0
        ? projectData.workflow.map((w) => String(w).trim()).filter(Boolean)
        : ["Data Collection", "Design Layout", "Proof Approval", "Production", "Dispatch"],
    outcome:
      projectData.outcome?.trim() ||
      "Delivered verified specimens matching client standards and dispatch timeline.",
  };

  if (index >= 0) {
    projects[index] = { ...projects[index], ...updatedProject };
  } else {
    projects.unshift(updatedProject);
  }

  saveAllDynamicProjects(projects);
  return updatedProject;
}

export function deleteDynamicProject(id: string): boolean {
  const projects = getAllDynamicProjects();
  const filtered = projects.filter((p) => p.id.toLowerCase() !== id.toLowerCase());
  if (filtered.length === projects.length) return false;
  saveAllDynamicProjects(filtered);
  return true;
}

export function resetDynamicProjectsToDefaults(): RealProjectItem[] {
  saveAllDynamicProjects(INITIAL_PROJECTS);
  return INITIAL_PROJECTS;
}
