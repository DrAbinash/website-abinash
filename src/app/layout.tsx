import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { getSiteSettings } from "@/lib/site-settings";
import { SiteConfigProvider } from "@/components/site-config-context";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hope.caredeoghar.com";

// SEO metadata is generated from the live settings so edits made in the
// /admin panel (name, bio, hospital, keywords) update search-engine info too.
export async function generateMetadata(): Promise<Metadata> {
  const siteConfig = await getSiteSettings();
  return {
    metadataBase: new URL(siteUrl),
    title: `${siteConfig.doctor.name}, ${siteConfig.doctor.qualifications.slice(0, 3).join(", ")} — ${siteConfig.doctor.title} | ${siteConfig.hospital.shortName}`,
    description: siteConfig.doctor.shortBio,
    keywords: siteConfig.seo.keywords,
    authors: [{ name: siteConfig.doctor.name }],
    creator: siteConfig.hospital.name,
    publisher: siteConfig.hospital.name,
    alternates: { canonical: "/" },
    icons: { icon: "/favicon.svg", apple: "/favicon.svg" },
    manifest: "/manifest.webmanifest",
    openGraph: {
      title: `${siteConfig.doctor.name} — ${siteConfig.doctor.title}`,
      description: siteConfig.doctor.shortBio,
      siteName: siteConfig.hospital.name,
      type: "website",
      locale: "en_IN",
      url: siteUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteConfig.doctor.name} — ${siteConfig.doctor.title}`,
      description: siteConfig.doctor.shortBio,
    },
    robots: { index: true, follow: true },
  };
}

export async function generateViewport(): Promise<Viewport> {
  const siteConfig = await getSiteSettings();
  return {
    themeColor: siteConfig.theme.primary,
    width: "device-width",
    initialScale: 1,
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const siteConfig = await getSiteSettings();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physician",
        name: siteConfig.doctor.name,
        medicalSpecialty: "Neurosurgery",
        jobTitle: siteConfig.doctor.title,
        worksFor: { "@type": "MedicalClinic", name: siteConfig.hospital.name },
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.hospital.address.full,
          addressLocality: "Deoghar",
          addressRegion: "Jharkhand",
          postalCode: "814112",
          addressCountry: "IN",
        },
        telephone: siteConfig.contact.phone,
      },
      {
        "@type": "MedicalClinic",
        name: siteConfig.hospital.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.hospital.address.full,
          addressLocality: "Deoghar",
          addressRegion: "Jharkhand",
          postalCode: "814112",
          addressCountry: "IN",
        },
        telephone: siteConfig.contact.phone,
      },
    ],
  };
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {/* Apply cached color theme before paint to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("abinash-theme")||"emerald";var m={emerald:":root{--primary:oklch(0.45 0.11 162);--primary-foreground:oklch(0.98 0.01 160);--ring:oklch(0.5 0.09 162);--accent:oklch(0.93 0.04 160);--secondary:oklch(0.95 0.02 160)}",rose:":root{--primary:oklch(0.56 0.20 12);--primary-foreground:oklch(0.98 0.01 15);--ring:oklch(0.6 0.16 12);--accent:oklch(0.93 0.045 15);--secondary:oklch(0.95 0.02 15)}",amber:":root{--primary:oklch(0.6 0.15 65);--primary-foreground:oklch(0.16 0.02 65);--ring:oklch(0.58 0.14 65);--accent:oklch(0.93 0.06 75);--secondary:oklch(0.95 0.03 75)}",burgundy:":root{--primary:oklch(0.42 0.14 350);--primary-foreground:oklch(0.98 0.01 350);--ring:oklch(0.48 0.13 350);--accent:oklch(0.93 0.045 350);--secondary:oklch(0.95 0.02 350)}"};var s=document.createElement("style");s.id="abinash-theme-early";s.textContent=m[t]||m.emerald;document.head.appendChild(s);}catch(e){}`,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <SiteConfigProvider value={siteConfig}>
          {children}
        </SiteConfigProvider>
        <Toaster />
      </body>
    </html>
  );
}
