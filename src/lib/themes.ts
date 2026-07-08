// Dr Abinash site - Color theme presets
// Active theme is chosen from SiteSettings.primaryColor (editable in admin panel).
// Default "emerald" matches the site's original green branding.

export type ThemeName = "emerald" | "rose" | "amber" | "burgundy";

type Vars = Record<string, string>;

export interface ThemeDef {
  label: string;
  swatch: string;
  light: Vars;
  dark: Vars;
}

export const THEMES: Record<ThemeName, ThemeDef> = {
  emerald: {
    label: "Emerald / Green",
    swatch: "oklch(0.45 0.11 162)",
    light: {
      "--primary": "oklch(0.45 0.11 162)",
      "--primary-foreground": "oklch(0.98 0.01 160)",
      "--ring": "oklch(0.5 0.09 162)",
      "--accent": "oklch(0.93 0.04 160)",
      "--secondary": "oklch(0.95 0.02 160)",
    },
    dark: {
      "--primary": "oklch(0.6 0.12 162)",
      "--primary-foreground": "oklch(0.15 0.02 160)",
      "--ring": "oklch(0.6 0.12 162)",
      "--accent": "oklch(0.32 0.05 160)",
      "--secondary": "oklch(0.27 0.03 162)",
    },
  },
  rose: {
    label: "Rose / Pink",
    swatch: "oklch(0.56 0.20 12)",
    light: {
      "--primary": "oklch(0.56 0.20 12)",
      "--primary-foreground": "oklch(0.98 0.01 15)",
      "--ring": "oklch(0.6 0.16 12)",
      "--accent": "oklch(0.93 0.045 15)",
      "--secondary": "oklch(0.95 0.02 15)",
    },
    dark: {
      "--primary": "oklch(0.7 0.17 12)",
      "--primary-foreground": "oklch(0.18 0.03 15)",
      "--ring": "oklch(0.65 0.16 12)",
      "--accent": "oklch(0.35 0.07 12)",
      "--secondary": "oklch(0.3 0.05 12)",
    },
  },
  amber: {
    label: "Golden / Amber",
    swatch: "oklch(0.62 0.14 70)",
    light: {
      "--primary": "oklch(0.6 0.15 65)",
      "--primary-foreground": "oklch(0.16 0.02 65)",
      "--ring": "oklch(0.58 0.14 65)",
      "--accent": "oklch(0.93 0.06 75)",
      "--secondary": "oklch(0.95 0.03 75)",
    },
    dark: {
      "--primary": "oklch(0.72 0.16 65)",
      "--primary-foreground": "oklch(0.16 0.02 65)",
      "--ring": "oklch(0.66 0.15 65)",
      "--accent": "oklch(0.35 0.07 65)",
      "--secondary": "oklch(0.3 0.05 65)",
    },
  },
  burgundy: {
    label: "Burgundy / Maroon",
    swatch: "oklch(0.42 0.14 350)",
    light: {
      "--primary": "oklch(0.42 0.14 350)",
      "--primary-foreground": "oklch(0.98 0.01 350)",
      "--ring": "oklch(0.48 0.13 350)",
      "--accent": "oklch(0.93 0.045 350)",
      "--secondary": "oklch(0.95 0.02 350)",
    },
    dark: {
      "--primary": "oklch(0.6 0.15 350)",
      "--primary-foreground": "oklch(0.16 0.02 350)",
      "--ring": "oklch(0.58 0.14 350)",
      "--accent": "oklch(0.35 0.07 350)",
      "--secondary": "oklch(0.3 0.05 350)",
    },
  },
};

export const DEFAULT_THEME: ThemeName = "emerald";

export function resolveTheme(name?: string | null): ThemeName {
  if (name && (Object.keys(THEMES) as string[]).includes(name)) {
    return name as ThemeName;
  }
  return DEFAULT_THEME;
}

export function buildThemeCss(name: ThemeName): string {
  const t = THEMES[name];
  const light = Object.entries(t.light)
    .map(([k, v]) => `${k}: ${v};`)
    .join(" ");
  const dark = Object.entries(t.dark)
    .map(([k, v]) => `${k}: ${v};`)
    .join(" ");
  return `:root{${light}}.dark{${dark}}`;
}
