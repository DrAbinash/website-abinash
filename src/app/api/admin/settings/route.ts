import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { COOKIE_NAME, isValidSessionToken } from "@/lib/admin-auth";
import {
  getSiteSettings,
  loadSavedSettings,
  saveSiteSettings,
  resetSiteSettings,
} from "@/lib/site-settings";
import { siteConfig } from "@/config/site.config";

export const dynamic = "force-dynamic";

async function isAuthenticated(): Promise<boolean> {
  const store = await cookies();
  return isValidSessionToken(store.get(COOKIE_NAME)?.value);
}

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ ok: false, error: "Not logged in" }, { status: 401 });
  }
  const settings = (await getSiteSettings()) as Record<string, unknown>;
  // The password never round-trips to the browser; the editor sends a
  // replacement via newAdminPassword instead.
  delete settings.adminPassword;
  return NextResponse.json({ ok: true, settings, defaults: siteConfig });
}

export async function PUT(request: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ ok: false, error: "Not logged in" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return NextResponse.json({ ok: false, error: "Settings must be an object" }, { status: 422 });
  }

  const incoming = body as Record<string, unknown>;
  const replacement =
    typeof incoming.newAdminPassword === "string" ? incoming.newAdminPassword : "";
  delete incoming.newAdminPassword;
  delete incoming.adminPassword;

  // Carry the stored password forward so a plain content save never wipes it;
  // a replacement of 4+ chars from the editor becomes the new password.
  const saved = await loadSavedSettings();
  const stored = saved?.adminPassword;
  if (replacement.length >= 4) {
    incoming.adminPassword = replacement;
  } else if (typeof stored === "string" && stored.length >= 4) {
    incoming.adminPassword = stored;
  }

  try {
    await saveSiteSettings(incoming);
  } catch (error) {
    console.error("[admin/settings] save failed", error);
    return NextResponse.json({ ok: false, error: "Could not save settings" }, { status: 500 });
  }

  // Rebuild the statically-cached pages so the saved changes (content,
  // headings, hidden sections) appear on the very next page load.
  revalidatePath("/", "layout");

  return NextResponse.json({ ok: true });
}

export async function DELETE() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ ok: false, error: "Not logged in" }, { status: 401 });
  }
  try {
    await resetSiteSettings();
  } catch (error) {
    console.error("[admin/settings] reset failed", error);
    return NextResponse.json({ ok: false, error: "Could not reset settings" }, { status: 500 });
  }
  revalidatePath("/", "layout");
  return NextResponse.json({ ok: true });
}
