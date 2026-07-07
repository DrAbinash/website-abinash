import { NextResponse } from "next/server";
import { COOKIE_NAME } from "@/lib/admin-auth";

export async function POST(request: Request) {
  const res = NextResponse.redirect(new URL("/admin/login", request.url));
  res.cookies.delete(COOKIE_NAME);
  return res;
}
