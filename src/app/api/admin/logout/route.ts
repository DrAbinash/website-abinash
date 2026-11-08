import { NextResponse } from "next/server";
import { COOKIE_NAME } from "@/lib/admin-auth";

export async function POST() {
  // Relative Location: request.url carries the container's internal address
  // behind the reverse proxy, which the browser cannot reach.
  const res = new NextResponse(null, {
    status: 307,
    headers: { Location: "/admin/login" },
  });
  res.cookies.delete(COOKIE_NAME);
  return res;
}
