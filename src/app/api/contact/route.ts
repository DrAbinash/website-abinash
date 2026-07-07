import { NextResponse } from "next/server";
import { db } from "@/lib/db";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const name = (body.name ?? "").trim().slice(0, 200);
  const phone = (body.phone ?? "").trim().slice(0, 40);
  const message = (body.message ?? "").trim().slice(0, 4000);
  const email = (body.email ?? "").trim().slice(0, 200);
  const subject = (body.subject ?? "").trim().slice(0, 200);

  if (!name || !phone || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, phone and message are required" },
      { status: 422 }
    );
  }

  if (email && !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address" },
      { status: 422 }
    );
  }

  // Always keep a log line as a backup trail in the container logs.
  console.log("[contact] new enquiry", {
    name,
    phone,
    email,
    subject,
    at: new Date().toISOString(),
  });

  // Persist to the database so the enquiry survives restarts/redeploys and
  // is visible on the /admin/enquiries page.
  try {
    await db.enquiry.create({
      data: { name, phone, email: email || null, subject: subject || null, message },
    });
  } catch (err) {
    console.error("[contact] failed to save enquiry to database", err);
    return NextResponse.json(
      {
        ok: false,
        error:
          "We could not save your message right now. Please call or WhatsApp us directly.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, message: "Message received" });
}

export async function GET() {
  return NextResponse.json({ ok: true, service: "contact" });
}
