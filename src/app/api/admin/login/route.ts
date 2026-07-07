import { NextResponse } from "next/server";
import { checkPassword, getSessionToken, COOKIE_NAME } from "@/lib/admin-auth";

export async function POST(request: Request) {
  const form = await request.formData().catch(() => null);
  const password = String(form?.get("password") ?? "");

  if (!process.env.ADMIN_PASSWORD) {
    return NextResponse.redirect(
      new URL("/admin/login?error=notconfigured", request.url)
    );
  }

  if (!password || !checkPassword(password)) {
    return NextResponse.redirect(new URL("/admin/login?error=1", request.url));
  }

  const token = getSessionToken()!;
  const res = NextResponse.redirect(new URL("/admin/enquiries", request.url));
  res.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12, // 12 hours
  });
  return res;
}
