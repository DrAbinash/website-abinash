import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSettings } from "@/lib/settings";

async function ensureAdmin(req: NextRequest) {
  const pw = req.headers.get("x-admin-password");
  const s = await getSettings();
  return pw && pw === s.adminPassword;
}

export async function GET(req: NextRequest) {
  if (!(await ensureAdmin(req))) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }
  const enquiries = await db.enquiry.findMany({
    orderBy: { createdAt: "desc" },
    take: 200,
  });
  return NextResponse.json({ ok: true, enquiries });
}
