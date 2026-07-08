import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSettings } from "@/lib/settings";

async function ensureAdmin(req: NextRequest) {
  const pw = req.headers.get("x-admin-password");
  const s = await getSettings();
  return pw && pw === s.adminPassword;
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await ensureAdmin(req))) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  const body = await req.json();
  const updated = await db.enquiry.update({
    where: { id },
    data: { status: String(body.status) },
  });
  return NextResponse.json({ ok: true, enquiry: updated });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await ensureAdmin(req))) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  await db.enquiry.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
