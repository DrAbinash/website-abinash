import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type LinkCard = { name: string; text: string; path: string };

/** Grid of cards linking to the treatment and condition pages. */
export function LinkCards({ items }: { items: LinkCard[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
        >
          <h2 className="text-base font-bold text-foreground group-hover:text-primary">
            {item.name}
          </h2>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {item.text}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
            Read more
            <ArrowRight
              className="size-3.5 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        </Link>
      ))}
    </div>
  );
}
