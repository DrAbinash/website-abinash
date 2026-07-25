import { NextRequest, NextResponse } from "next/server";

// Reads env + query on every request, so it must never be statically optimized.
export const dynamic = "force-dynamic";

/**
 * Public "Book Appointment" redirect.
 *
 * Mirrors the Hope ERP's /book route: this site delegates online booking and
 * payment to the Care ERP (caredeoghar.com), which runs the ICICI Orange Pay
 * gateway — so we keep one stable /book link here and never handle card data.
 *
 * The target is configurable via CARE_BOOKING_URL. We tag source=hope so
 * patients land on Care's existing Hope-branded booking page (Hope's tests and
 * co-branding) rather than a separate one for this site, and we pass through
 * any incoming query params — e.g. /book?packageCode=HOPE to deep-link Hope's
 * package.
 */
export async function GET(req: NextRequest) {
  const base = process.env.CARE_BOOKING_URL || "https://caredeoghar.com/book";
  let target: URL;
  try {
    target = new URL(base);
  } catch {
    // Misconfigured CARE_BOOKING_URL (e.g. a bare path) — send it through as-is
    // rather than failing the booking CTA outright.
    return NextResponse.redirect(base, 302);
  }
  if (!target.searchParams.has("source")) {
    target.searchParams.set("source", process.env.CARE_BOOKING_SOURCE || "hope");
  }
  req.nextUrl.searchParams.forEach((v, k) => {
    if (!target.searchParams.has(k)) target.searchParams.set(k, v);
  });
  return NextResponse.redirect(target.toString(), 302);
}
