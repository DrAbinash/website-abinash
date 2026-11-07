import type { Metadata } from "next";

// robots.txt already blocks crawlers; this keeps the panel out of search
// results even when another site links to it.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return children;
}
