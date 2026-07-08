import { NextRequest, NextResponse } from "next/server";
import { getSettings, invalidateSettings } from "@/lib/settings";

// Public: get current settings (excludes adminPassword)
export async function GET() {
  const s = await getSettings();
  const safe = { ...s, adminPassword: undefined };
  return NextResponse.json({ ok: true, settings: safe });
}

// Admin: update settings (password-gated against DB adminPassword)
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { password, settings } = body as {
      password?: string;
      settings: Record<string, unknown>;
    };

    const current = await getSettings();
    if (password !== current.adminPassword) {
      return NextResponse.json(
        { ok: false, error: "Unauthorized: invalid admin password" },
        { status: 401 }
      );
    }

    const { id, createdAt, updatedAt, adminPassword, ...updatable } =
      settings as Record<string, unknown>;

    const data: Record<string, unknown> = { ...updatable };
    if (
      settings &&
      typeof settings.adminPassword === "string" &&
      settings.adminPassword.length >= 4
    ) {
      data.adminPassword = settings.adminPassword;
    }

    await (await import("@/lib/db")).db.siteSettings.update({
      where: { id: "default" },
      data: data as Record<string, never>,
    });

    invalidateSettings();
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: (e as Error).message },
      { status: 500 }
    );
  }
}
