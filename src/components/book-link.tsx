"use client";

import { useEffect, useState } from "react";

/**
 * Renders a booking link. If a bookingUrl is configured in site settings,
 * opens it in a new tab; otherwise falls back to scrolling to #contact
 * (the in-page appointment form).
 */
export function BookLink({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [url, setUrl] = useState<string | null>(null);

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
      >
        {children}
      </a>
    );
  }
  return (
    <a href="#contact" className={className}>
      {children}
    </a>
  );
}
