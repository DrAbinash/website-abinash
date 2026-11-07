import type { Faq } from "@/content/types";

/**
 * The questions and answers are rendered in full (not collapsed behind
 * JavaScript) because Google only awards FAQ rich results for text it can
 * read in the page, and because a patient on a slow connection should be able
 * to read them without waiting for anything to load.
 */
export function FaqBlock({ heading, faq }: { heading?: string; faq: Faq[] }) {
  if (faq.length === 0) return null;
  return (
    <section aria-labelledby="faq-heading" className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="faq-heading"
          className="text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl"
        >
          {heading ?? "Frequently Asked Questions"}
        </h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {faq.map((item) => (
            <div key={item.question} className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-base font-semibold text-foreground">{item.question}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
