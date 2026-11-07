import { MapPin, Phone, Ambulance, Clock, ExternalLink, Building2 } from "lucide-react";
import { BookLink } from "@/components/book-link";
import type { EditableSiteConfig } from "@/lib/site-settings";

/**
 * The "where and how to reach us" panel that sits beside the text on every
 * interior page, so a patient reading about a condition never has to go back
 * to the homepage to find the number or the address.
 */
export function HospitalSideCard({ config }: { config: EditableSiteConfig }) {
  const { hospital, contact, timings } = config;
  const weekday = timings.find((t) => t.day === "Monday");
  const saturday = timings.find((t) => t.day === "Saturday");
  const sunday = timings.find((t) => t.day === "Sunday");

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Building2 className="size-5" aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-sm font-bold leading-snug text-foreground">{hospital.name}</h2>
          <p className="mt-0.5 text-xs text-muted-foreground">{hospital.tagline}</p>
        </div>
      </div>

      <ul className="mt-4 space-y-3 text-sm">
        <li className="flex gap-2.5">
          <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          <div>
            <p className="leading-snug text-foreground">{hospital.address.line1}</p>
            <p className="leading-snug text-muted-foreground">{hospital.address.line2}</p>
            <p className="leading-snug text-muted-foreground">{hospital.address.line3}</p>
            <a
              href={hospital.mapLinkUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
            >
              Open in Google Maps
              <ExternalLink className="size-3" aria-hidden="true" />
            </a>
          </div>
        </li>
        <li className="flex gap-2.5">
          <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          <div className="leading-snug">
            <p className="text-foreground">OPD: {weekday?.hours ?? "Mon–Fri"}</p>
            {saturday && <p className="text-muted-foreground">Saturday: {saturday.hours}</p>}
            {sunday && <p className="text-muted-foreground">Sunday: {sunday.hours}</p>}
          </div>
        </li>
        <li className="flex gap-2.5">
          <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          <a href={`tel:${contact.phoneHref}`} className="font-medium text-foreground hover:text-primary hover:underline">
            {contact.phone}
          </a>
        </li>
      </ul>

      <div className="mt-4 flex flex-col gap-2">
        <BookLink className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
          {config.booking.shortLabel}
        </BookLink>
        <a
          href={`tel:${contact.emergencyHref}`}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-red-200 bg-red-50 px-4 text-sm font-semibold text-red-700 transition-colors hover:bg-red-100"
        >
          <Ambulance className="size-4" aria-hidden="true" />
          Emergency 24×7: {contact.emergency}
        </a>
      </div>

      {hospital.websiteUrl && (
        <a
          href={hospital.websiteUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 border-t border-border pt-4 text-xs font-medium text-muted-foreground hover:text-primary hover:underline"
        >
          <ExternalLink className="size-3.5" aria-hidden="true" />
          Hospital website: {hospital.shortName}
        </a>
      )}
    </div>
  );
}
