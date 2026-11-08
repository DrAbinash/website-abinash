import { NextResponse } from "next/server";
import {
  checkPassword,
  getSessionToken,
  isPasswordConfigured,
  COOKIE_NAME,
} from "@/lib/admin-auth";

export async function POST(request: Request) {
  const form = await request.formData().catch(() => null);
  const password = String(form?.get("password") ?? "");

  if (!(await isPasswordConfigured())) {
    return NextResponse.redirect(
      new URL("/admin/login?error=notconfigured", request.url)
    );
  }

  if (!password || !(await checkPassword(password))) {
    return NextResponse.redirect(new URL("/admin/login?error=1", request.url));
  }

  const token = await getSessionToken();
  if (!token) {
    return NextResponse.redirect(
      new URL("/admin/login?error=notconfigured", request.url)
    );
  }
  // Optional "next" field: return to the page that sent the user to login.
  // Restricted to /admin paths so it can't be abused as an open redirect.
  const next = String(form?.get("next") ?? "");
  const target = next.startsWith("/admin") ? next : "/admin/enquiries";
  const res = NextResponse.redirect(new URL(target, request.url));
  res.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12, // 12 hours
  });
  return res;
}
