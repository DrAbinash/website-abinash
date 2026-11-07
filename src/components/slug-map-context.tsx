"use client";

import * as React from "react";

export type SlugEntry = { slug: string; title: string };
export type SlugMap = { treatments: SlugEntry[]; conditions: SlugEntry[] };

const SlugMapContext = React.createContext<SlugMap>({
  treatments: [],
  conditions: [],
});

export function SlugMapProvider({
  value,
  children,
}: {
  value: SlugMap;
  children: React.ReactNode;
}) {
  return <SlugMapContext.Provider value={value}>{children}</SlugMapContext.Provider>;
}

export function useSlugMap(): SlugMap {
  return React.useContext(SlugMapContext);
}

export function treatmentHref(map: SlugMap, title: string): string {
  const match = map.treatments.find((t) => t.title === title);
  return match ? `/treatments/${match.slug}` : "/treatments";
}

export function conditionHref(map: SlugMap, title: string): string | undefined {
  const match = map.conditions.find((c) => c.title === title);
  return match ? `/conditions/${match.slug}` : undefined;
}
