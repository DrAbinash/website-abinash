import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { COOKIE_NAME, isValidSessionToken } from "@/lib/admin-auth";
import { SiteEditor } from "@/components/admin/site-editor";

export const dynamic = "force-dynamic";

/**
 * Full website content editor. Uses the same staff login (ADMIN_PASSWORD
 * environment variable) as the enquiries page.
 */
export default async function AdminPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;

  if (!isValidSessionToken(token)) {
    redirect("/admin/login?next=/admin");
  }

  return <SiteEditor />;
}
