import fs from "fs";
import path from "path";
import {
  type RealProjectItem,
  type CategoryFilterItem,
  INITIAL_PROJECTS,
  DEFAULT_CATEGORY_FILTERS,
} from "./dynamic-projects-types";

export type { RealProjectItem, CategoryFilterItem };
export { INITIAL_PROJECTS, DEFAULT_CATEGORY_FILTERS };

const DATA_FILE_PATH = path.join(process.cwd(), "src", "data", "dynamic-projects.json");

let memoryCache: RealProjectItem[] | null = null;

export function getAllDynamicProjects(): RealProjectItem[] {
  if (memoryCache && memoryCache.length > 0) {
    return memoryCache;
  }

  try {
    if (fs.existsSync(DATA_FILE_PATH)) {
      const raw = fs.readFileSync(DATA_FILE_PATH, "utf-8");
      const loaded = JSON.parse(raw);
      if (Array.isArray(loaded) && loaded.length > 0) {
        memoryCache = loaded;
        return memoryCache;
      }
    }
  } catch (e) {
    console.error("Error reading dynamic-projects.json, falling back to initial data:", e);
  }

  // Fallback to initial data and persist
  memoryCache = INITIAL_PROJECTS;
  saveAllDynamicProjects(INITIAL_PROJECTS);
  return memoryCache;
}

export function saveAllDynamicProjects(projects: RealProjectItem[]): void {
  memoryCache = projects;
  try {
    const dir = path.dirname(DATA_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(projects, null, 2), "utf-8");
  } catch (e) {
    console.error("Error saving dynamic-projects.json:", e);
  }
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
  memoryCache = INITIAL_PROJECTS;
  saveAllDynamicProjects(INITIAL_PROJECTS);
  return INITIAL_PROJECTS;
}
