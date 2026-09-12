import fs from "fs";
import path from "path";
import {
  type DynamicServicesData,
  type ServiceItem,
  DEFAULT_SERVICES_DATA,
} from "./dynamic-services-types";

export type { DynamicServicesData, ServiceItem };
export { DEFAULT_SERVICES_DATA };

const DATA_FILE_PATH = path.join(process.cwd(), "src", "data", "dynamic-services.json");

let memoryCache: DynamicServicesData | null = null;

export function getDynamicServices(): DynamicServicesData {
  try {
    if (fs.existsSync(DATA_FILE_PATH)) {
      const raw = fs.readFileSync(DATA_FILE_PATH, "utf-8");
      const loaded = JSON.parse(raw);
      const mergedData: DynamicServicesData = {
        ...DEFAULT_SERVICES_DATA,
        ...loaded,
        metadata: { ...DEFAULT_SERVICES_DATA.metadata, ...(loaded.metadata || {}) },
        hero: {
          ...DEFAULT_SERVICES_DATA.hero,
          ...(loaded.hero || {}),
          stats: loaded.hero?.stats || DEFAULT_SERVICES_DATA.hero.stats,
        },
        cardSection: { ...DEFAULT_SERVICES_DATA.cardSection, ...(loaded.cardSection || {}) },
        lanyardSection: { ...DEFAULT_SERVICES_DATA.lanyardSection, ...(loaded.lanyardSection || {}) },
        accessoriesTeaser: {
          ...DEFAULT_SERVICES_DATA.accessoriesTeaser,
          ...(loaded.accessoriesTeaser || {}),
        },
        ctaBand: { ...DEFAULT_SERVICES_DATA.ctaBand, ...(loaded.ctaBand || {}) },
        services: loaded.services || DEFAULT_SERVICES_DATA.services,
      };
      memoryCache = mergedData;
      return mergedData;
    }
  } catch (e) {
    console.error("Error reading dynamic-services.json, falling back:", e);
  }

  memoryCache = DEFAULT_SERVICES_DATA;
  saveDynamicServices(DEFAULT_SERVICES_DATA);
  return DEFAULT_SERVICES_DATA;
}

export function saveDynamicServices(data: DynamicServicesData): DynamicServicesData {
  const updatedData: DynamicServicesData = {
    ...data,
    lastUpdated: new Date().toISOString(),
  };

  memoryCache = updatedData;
  try {
    const dir = path.dirname(DATA_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(updatedData, null, 2), "utf-8");
  } catch (e) {
    console.error("Error saving dynamic-services.json:", e);
  }

  return updatedData;
}

export function resetDynamicServices(): DynamicServicesData {
  return saveDynamicServices(DEFAULT_SERVICES_DATA);
}

export function getDropdownServices(): Array<{ label: string; href: string }> {
  const data = getDynamicServices();
  const activeItems = (data.services || [])
    .filter((s) => s.isActive !== false && s.showInDropdown !== false)
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  return activeItems.map((s) => ({
    label: s.title,
    href: s.path || `/${s.slug}/`,
  }));
}

export function addServiceItem(newItem: Omit<ServiceItem, "id"> & { id?: string }): DynamicServicesData {
  const data = getDynamicServices();
  const id = newItem.id || newItem.slug || `service-${Date.now()}`;
  const path = newItem.path || `/${newItem.slug}/`;

  const service: ServiceItem = {
    ...newItem,
    id,
    path,
    order: newItem.order || (data.services.length + 1),
    isActive: newItem.isActive ?? true,
    showInDropdown: newItem.showInDropdown ?? true,
  };

  const updatedServices = [...data.services, service];
  return saveDynamicServices({
    ...data,
    services: updatedServices,
  });
}

export function updateServiceItem(id: string, updates: Partial<ServiceItem>): DynamicServicesData {
  const data = getDynamicServices();
  const updatedServices = data.services.map((item) => {
    if (item.id === id || item.slug === id) {
      return {
        ...item,
        ...updates,
        path: updates.slug ? `/${updates.slug}/` : item.path,
      };
    }
    return item;
  });

  return saveDynamicServices({
    ...data,
    services: updatedServices,
  });
}

export function deleteServiceItem(id: string): DynamicServicesData {
  const data = getDynamicServices();
  const updatedServices = data.services.filter((item) => item.id !== id && item.slug !== id);
  return saveDynamicServices({
    ...data,
    services: updatedServices,
  });
}
