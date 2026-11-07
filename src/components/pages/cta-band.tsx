import { Calendar, Phone, MessageCircle } from "lucide-react";
import { BookLink } from "@/components/book-link";
import type { EditableSiteConfig } from "@/lib/site-settings";

function whatsappHref(config: EditableSiteConfig): string {
  const number = config.contact.whatsapp.replace(/[^0-9]/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(config.contact.whatsappMessage)}`;
}

/**
 * The three ways a patient can act, repeated at the end of every page:
 * book (which goes to the external booking/payment link when one is set),
 * call, and WhatsApp.
 */
export function CtaBand({
  config,
  title,
  text,
}: {
  config: EditableSiteConfig;
  title: string;
  text: string;
}) {
  return (
    <section className="bg-secondary/40 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-primary px-6 py-8 text-center text-primary-foreground sm:px-10 lg:flex-row lg:justify-between lg:text-left">
          <div>
            <p className="text-lg font-bold sm:text-xl">{title}</p>
            <p className="mt-1 max-w-xl text-sm text-primary-foreground/85">{text}</p>
          </div>
          <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row">
            <BookLink className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-background px-5 text-sm font-semibold text-primary transition-colors hover:bg-background/90">
              <Calendar className="size-4" />
              {config.booking.label}
            </BookLink>
            <a
              href={`tel:${config.contact.phoneHref}`}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-primary-foreground/40 px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              <Phone className="size-4" />
              {config.contact.phone}
            </a>
            <a
              href={whatsappHref(config)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-primary-foreground/40 px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              <MessageCircle className="size-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
