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

/**
 * The external booking URL, or "" when none is set. Server-rendered pages use
 * this to describe the Book button accurately; it never throws, because a
 * page must still render when the database is unavailable.
 */
export async function getBookingUrl(): Promise<string> {
  try {
    const s = await getSettings();
    return s.bookingUrl ?? "";
  } catch (error) {
    console.error("[settings] could not read the booking URL", error);
    return "";
  }
}

export type Settings = SiteSettings;
