import { NextResponse } from "next/server";
import { getSiteSettings } from "@/lib/site-settings";

/**
 * Public: the two settings client components need (theme name for the
 * ThemeInjector, booking target for the Book buttons). Everything else is
 * server-rendered from getSiteSettings() directly.
 */
export async function GET() {
  try {
    const s = await getSiteSettings();
    return NextResponse.json({
      ok: true,
      settings: { primaryColor: s.primaryColor, bookingUrl: s.bookingUrl },
    });
  } catch (error) {
    console.error("[settings] could not read site settings", error);
    return NextResponse.json({ ok: false, settings: null }, { status: 500 });
  }
}
