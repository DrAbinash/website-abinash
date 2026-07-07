export const dynamic = "force-dynamic";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center bg-emerald-50/40 px-4">
      <div className="w-full max-w-sm rounded-2xl border border-emerald-100 bg-white p-8 shadow-sm">
        <h1 className="text-xl font-bold text-foreground">Staff Login</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Enter the admin password to view website enquiries.
        </p>

        {error === "1" && (
          <p className="mt-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
            Incorrect password. Please try again.
          </p>
        )}
        {error === "notconfigured" && (
          <p className="mt-4 rounded-md bg-amber-50 px-3 py-2 text-sm text-amber-800">
            No admin password is set on the server yet. Set the{" "}
            <code>ADMIN_PASSWORD</code> environment variable and restart the
            app.
          </p>
        )}

        <form action="/api/admin/login" method="POST" className="mt-6 space-y-4">
          <div>
            <label htmlFor="password" className="text-sm font-medium text-foreground">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoFocus
              className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-emerald-600"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
