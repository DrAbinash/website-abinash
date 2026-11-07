import { Ambulance, PhoneCall } from "lucide-react";
import type { EditableSiteConfig } from "@/lib/site-settings";

/**
 * Red-flag box. Shown only for conditions where waiting is dangerous, and it
 * always gives the number to call — the point of the page is that the reader
 * knows what to do next.
 */
export function EmergencyCallout({
  config,
  items,
}: {
  config: EditableSiteConfig;
  items: string[];
}) {
  if (items.length === 0) return null;
  return (
    <div className="rounded-xl border border-red-200 bg-red-50 p-5">
      <div className="flex items-center gap-2">
        <Ambulance className="size-5 shrink-0 text-red-600" aria-hidden="true" />
        <h2 className="text-base font-bold text-red-900">This is an emergency — act now</h2>
      </div>
      <ul className="mt-3 space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-relaxed text-red-900">
            <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-red-500" />
            {item}
          </li>
        ))}
      </ul>
      <a
        href={`tel:${config.contact.emergencyHref}`}
        className="mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-red-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-red-700"
      >
        <PhoneCall className="size-4" aria-hidden="true" />
        Call 24×7 Emergency: {config.contact.emergency}
      </a>
    </div>
  );
}
