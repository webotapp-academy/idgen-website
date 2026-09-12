import fs from "fs";
import path from "path";
import { DynamicPvcCardsData } from "./dynamic-pvc-cards-types";
import seedData from "@/data/dynamic-pvc-cards.json";

const DATA_FILE_PATH = path.join(process.cwd(), "src", "data", "dynamic-pvc-cards.json");

export const DEFAULT_PVC_CARDS_DATA: DynamicPvcCardsData = seedData as unknown as DynamicPvcCardsData;

export function getDynamicPvcCards(): DynamicPvcCardsData {
  try {
    if (fs.existsSync(DATA_FILE_PATH)) {
      const fileContent = fs.readFileSync(DATA_FILE_PATH, "utf-8");
      const parsed = JSON.parse(fileContent);
      return {
        ...DEFAULT_PVC_CARDS_DATA,
        ...parsed,
      };
    }
  } catch (err) {
    console.error("Error reading dynamic-pvc-cards.json, falling back to default:", err);
  }
  return DEFAULT_PVC_CARDS_DATA;
}

export function saveDynamicPvcCards(data: DynamicPvcCardsData): boolean {
  try {
    const dir = path.dirname(DATA_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(data, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("Error saving dynamic-pvc-cards.json:", err);
    return false;
  }
}

export function saveDynamicPvcCardsSection<K extends keyof DynamicPvcCardsData>(
  section: K,
  sectionData: DynamicPvcCardsData[K]
): boolean {
  const current = getDynamicPvcCards();
  current[section] = sectionData;
  return saveDynamicPvcCards(current);
}

export function resetDynamicPvcCards(): boolean {
  return saveDynamicPvcCards(DEFAULT_PVC_CARDS_DATA);
}
