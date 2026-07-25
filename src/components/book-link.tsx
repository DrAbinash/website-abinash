"use client";

import { useEffect, useState } from "react";

/**
 * Default booking target: our own /book route, which 302-redirects to the Care
 * ERP (caredeoghar.com) tagged with source=abinash. Same approach Hope uses —
 * booking + payment happen on Care, this site just owns a stable link.
 *
 * The admin panel's "Online Booking URL" overrides it: set any full URL to
 * point elsewhere, or "#contact" to fall back to the in-page enquiry form.
 */
const DEFAULT_BOOKING_HREF = "/book";

/**
 * Renders a booking link. Uses the bookingUrl from site settings when one is
 * configured, otherwise falls back to DEFAULT_BOOKING_HREF. In-page anchors
 * (e.g. "#contact") stay in the same tab; everything else opens a new tab.
 */
export function BookLink({
  children,
  className,
  "aria-label": ariaLabel,
}: {
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
}) {
  // Start on the default so the CTA is correct on first paint — settings only
  // ever override it, so there's no flash of the wrong destination.
  const [href, setHref] = useState(DEFAULT_BOOKING_HREF);

  useEffect(() => {
    fetch("/api/settings")
      .then((r) => r.json())
      .then((d) => {
        if (d.ok) {
          const configured = (d.settings.bookingUrl || "").trim();
          if (configured) setHref(configured);
        }
      })
      .catch(() => {
        /* keep the default */
      });
  }, []);

  const isInPage = href.startsWith("#");

  return (
    <a
      href={href}
      {...(isInPage ? {} : { target: "_blank", rel: "noopener noreferrer" })}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
