import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { JsonLd } from "@/components/json-ld";
import { getSiteSettings } from "@/lib/site-settings";
import { homeDescription, homeTitle, pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const config = await getSiteSettings();
  return pageMetadata(config, {
    path: "/",
    title: homeTitle(config),
    description: homeDescription(config),
    fullTitle: true,
  });
}

export default async function Page() {
  const config = await getSiteSettings();
  const title = homeTitle(config);
  const description = homeDescription(config);
  return (
    <>
      <JsonLd config={config} path="/" title={title} description={description} />
      <HomePage />
    </>
  );
}
