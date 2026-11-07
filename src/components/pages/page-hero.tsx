import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export type CrumbLink = { name: string; path: string };

/**
 * Top of every interior page: a visible breadcrumb trail (which is also what
 * the BreadcrumbList structured data describes), the keyword badge, the H1
 * and a one-line summary.
 */
export function PageHero({
  breadcrumbs,
  badge,
  title,
  lead,
  aside,
}: {
  breadcrumbs: CrumbLink[];
  badge: string;
  title: string;
  lead: string;
  aside?: React.ReactNode;
}) {
  return (
    <section className="border-b border-border bg-hero-panel">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
            <li>
              <Link
                href="/"
                className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
              >
                <Home className="size-3.5" />
                Home
              </Link>
            </li>
            {breadcrumbs.map((crumb, i) => (
              <li key={crumb.path} className="flex items-center gap-1.5">
                <ChevronRight className="size-3.5 text-muted-foreground/60" aria-hidden="true" />
                {i === breadcrumbs.length - 1 ? (
                  <span aria-current="page" className="font-medium text-foreground">
                    {crumb.name}
                  </span>
                ) : (
                  <Link href={crumb.path} className="hover:text-primary hover:underline">
                    {crumb.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-5 grid gap-8 lg:grid-cols-3 lg:items-end">
          <div className="lg:col-span-2">
            <p className="eyebrow">{badge}</p>
            <h1 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {lead}
            </p>
          </div>
          {aside && <div className="lg:pb-1">{aside}</div>}
        </div>
      </div>
    </section>
  );
}
