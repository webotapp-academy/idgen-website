import fs from "fs";
import path from "path";
import { DynamicZincMedalsData } from "./dynamic-zinc-medals-types";
import seedData from "@/data/dynamic-zinc-medals.json";

const DATA_FILE_PATH = path.join(process.cwd(), "src", "data", "dynamic-zinc-medals.json");

export const DEFAULT_ZINC_MEDALS_DATA: DynamicZincMedalsData = seedData as unknown as DynamicZincMedalsData;

export function getDynamicZincMedals(): DynamicZincMedalsData {
  try {
    if (fs.existsSync(DATA_FILE_PATH)) {
      const fileContent = fs.readFileSync(DATA_FILE_PATH, "utf-8");
      const parsed = JSON.parse(fileContent);
      return {
        ...DEFAULT_ZINC_MEDALS_DATA,
        ...parsed,
      };
    }
  } catch (err) {
    console.error("Error reading dynamic-zinc-medals.json, falling back to default:", err);
  }
  return DEFAULT_ZINC_MEDALS_DATA;
}

export function saveDynamicZincMedals(data: DynamicZincMedalsData): boolean {
  try {
    const dir = path.dirname(DATA_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(data, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("Error saving dynamic-zinc-medals.json:", err);
    return false;
  }
}

export function saveDynamicZincMedalsSection<K extends keyof DynamicZincMedalsData>(
  section: K,
  sectionData: DynamicZincMedalsData[K]
): boolean {
  const current = getDynamicZincMedals();
  current[section] = sectionData;
  return saveDynamicZincMedals(current);
}

export function resetDynamicZincMedals(): boolean {
  return saveDynamicZincMedals(DEFAULT_ZINC_MEDALS_DATA);
}
