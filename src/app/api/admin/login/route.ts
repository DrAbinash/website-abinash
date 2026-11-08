import { NextResponse } from "next/server";
import {
  checkPassword,
  getSessionToken,
  isPasswordConfigured,
  COOKIE_NAME,
} from "@/lib/admin-auth";

/**
 * Redirect with a relative Location. Behind the reverse proxy, request.url
 * carries the container's internal address (0.0.0.0:3000); an absolute
 * redirect built from it would send the browser somewhere unreachable.
 * Relative Locations resolve against the origin the browser actually used.
 */
function redirect(location: string): NextResponse {
  return new NextResponse(null, {
    status: 307,
    headers: { Location: location },
  });
}

export async function POST(request: Request) {
  const form = await request.formData().catch(() => null);
  const password = String(form?.get("password") ?? "");

  if (!(await isPasswordConfigured())) {
    return redirect("/admin/login?error=notconfigured");
  }

  if (!password || !(await checkPassword(password))) {
    return redirect("/admin/login?error=1");
  }

  const token = await getSessionToken();
  if (!token) {
    return redirect("/admin/login?error=notconfigured");
  }
  // Optional "next" field: return to the page that sent the user to login.
  // Restricted to /admin paths so it can't be abused as an open redirect.
  const next = String(form?.get("next") ?? "");
  const target = next.startsWith("/admin") ? next : "/admin/enquiries";
  const res = redirect(target);
  res.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12, // 12 hours
  });
  return res;
}
