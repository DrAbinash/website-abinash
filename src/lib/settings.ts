import { db } from "./db";
import type { SiteSettings } from "@prisma/client";

let cache: SiteSettings | null = null;
let cacheTime = 0;
const TTL = 30_000;

export async function getSettings(): Promise<SiteSettings> {
  const now = Date.now();
  if (cache && now - cacheTime < TTL) return cache;
  const s = await db.siteSettings.findUnique({ where: { id: "default" } });
  if (!s) {
    cache = await db.siteSettings.create({ data: { id: "default" } });
  } else {
    cache = s;
  }
  cacheTime = now;
  return cache;
}

export function invalidateSettings() {
  cache = null;
  cacheTime = 0;
}

export type Settings = SiteSettings;
