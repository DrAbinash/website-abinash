"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Renders a booking link. If a bookingUrl is configured in site settings,
 * opens it in a new tab; otherwise falls back to the appointment form —
 * the #contact section on the homepage, or the /contact page anywhere else.
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
  const [url, setUrl] = useState<string | null>(null);
  const pathname = usePathname();
  // The appointment form lives in the #contact section of the homepage and on
  // the /contact page; anywhere else the anchor has to be an absolute link.
  const fallbackHref = pathname === "/" ? "#contact" : "/contact#contact";

  useEffect(() => {
    fetch("/api/settings")
      .then((r) => r.json())
      .then((d) => {
        if (d.ok) setUrl(d.settings.bookingUrl || "");
      })
      .catch(() => setUrl(""));
  }, []);

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }
  return (
    <a href={fallbackHref} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
