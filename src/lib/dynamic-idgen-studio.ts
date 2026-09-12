import fs from "fs";
import path from "path";
import { DynamicIdgenStudioData } from "./dynamic-idgen-studio-types";
import seedData from "@/data/dynamic-idgen-studio.json";

const DATA_FILE_PATH = path.join(process.cwd(), "src", "data", "dynamic-idgen-studio.json");

export const DEFAULT_IDGEN_STUDIO_DATA: DynamicIdgenStudioData = seedData as unknown as DynamicIdgenStudioData;

export function getDynamicIdgenStudio(): DynamicIdgenStudioData {
  try {
    if (fs.existsSync(DATA_FILE_PATH)) {
      const fileContent = fs.readFileSync(DATA_FILE_PATH, "utf-8");
      const parsed = JSON.parse(fileContent);
      return {
        ...DEFAULT_IDGEN_STUDIO_DATA,
        ...parsed,
      };
    }
  } catch (err) {
    console.error("Error reading dynamic-idgen-studio.json, falling back to default:", err);
  }
  return DEFAULT_IDGEN_STUDIO_DATA;
}

export function saveDynamicIdgenStudio(data: DynamicIdgenStudioData): boolean {
  try {
    const dir = path.dirname(DATA_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(data, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("Error saving dynamic-idgen-studio.json:", err);
    return false;
  }
}

export function saveDynamicIdgenStudioSection<K extends keyof DynamicIdgenStudioData>(
  section: K,
  sectionData: DynamicIdgenStudioData[K]
): boolean {
  const current = getDynamicIdgenStudio();
  current[section] = sectionData;
  return saveDynamicIdgenStudio(current);
}

export function resetDynamicIdgenStudio(): boolean {
  return saveDynamicIdgenStudio(DEFAULT_IDGEN_STUDIO_DATA);
}
