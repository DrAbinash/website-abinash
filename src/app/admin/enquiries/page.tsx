import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { COOKIE_NAME, isValidSessionToken } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

export default async function AdminEnquiriesPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;

  if (!(await isValidSessionToken(token))) {
    redirect("/admin/login");
  }

  const enquiries = await db.enquiry.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-emerald-50/30 px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Website Enquiries
            </h1>
            <p className="text-sm text-muted-foreground">
              {enquiries.length} message{enquiries.length === 1 ? "" : "s"}{" "}
              received from the "Book an Appointment" form, newest first.
            </p>
          </div>
          <form action="/api/admin/logout" method="POST">
            <button
              type="submit"
              className="rounded-md border border-input px-3 py-1.5 text-sm font-medium text-foreground hover:bg-muted"
            >
              Log out
            </button>
          </form>
        </div>

        {enquiries.length === 0 ? (
          <div className="rounded-xl border border-dashed border-emerald-200 bg-white p-10 text-center text-sm text-muted-foreground">
            No enquiries yet. New messages from the website contact form will
            appear here.
          </div>
        ) : (
          <div className="space-y-4">
            {enquiries.map((e) => (
              <div
                key={e.id}
                className="rounded-xl border border-emerald-100 bg-white p-5 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-semibold text-foreground">{e.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(e.createdAt).toLocaleString("en-IN", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </p>
                </div>
                <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <a href={`tel:${e.phone}`} className="hover:text-emerald-700 hover:underline">
                    {e.phone}
                  </a>
                  {e.email && (
                    <a href={`mailto:${e.email}`} className="hover:text-emerald-700 hover:underline">
                      {e.email}
                    </a>
                  )}
                  {e.subject && <span>Subject: {e.subject}</span>}
                </div>
                <p className="mt-3 whitespace-pre-wrap text-sm text-foreground">
                  {e.message}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
