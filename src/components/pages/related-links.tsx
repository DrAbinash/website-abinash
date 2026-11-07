import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** Internal links to the related condition and treatment pages. */
export function RelatedLinks({
  heading,
  items,
}: {
  heading: string;
  items: { name: string; path: string }[];
}) {
  if (items.length === 0) return null;
  return (
    <section aria-labelledby="related-heading" className="border-t border-border py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="related-heading"
          className="text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl"
        >
          {heading}
        </h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-4 py-3.5 transition-colors hover:border-primary/50 hover:bg-secondary/50"
            >
              <span className="text-sm font-medium text-foreground">{item.name}</span>
              <ArrowRight
                className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
