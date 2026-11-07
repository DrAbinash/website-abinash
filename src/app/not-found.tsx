import Link from "next/link";
import { ArrowRight, Phone, SearchX } from "lucide-react";

import { PageFrame } from "@/components/page-frame";
import { Button } from "@/components/ui/button";
import { getSiteSettings } from "@/lib/site-settings";

export default async function NotFound() {
  const config = await getSiteSettings();
  const links = [
    { href: "/", label: "Home" },
    { href: "/treatments", label: "Treatments" },
    { href: "/conditions", label: "Conditions" },
    { href: "/hospital", label: "The hospital" },
    { href: "/contact", label: "Contact & appointments" },
  ];
  return (
    <PageFrame>
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
            <SearchX className="size-7" />
          </span>
          <h1 className="mt-6 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            This page could not be found
          </h1>
          <p className="mt-4 text-pretty text-muted-foreground">
            The address may be old or mistyped. Everything on this website is
            reachable from the links below — and for anything urgent, call the
            24×7 emergency number rather than searching.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/">
                Back to home
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <a href={`tel:${config.contact.emergencyHref}`}>
                <Phone className="size-4" />
                {config.contact.emergency}
              </a>
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageFrame>
  );
}
