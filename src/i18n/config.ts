// src/i18n/config.ts - site locale configuration.
// Supported locales and default language.

/** Locales served by the site. The first one is the default locale. */
export const locales = ["en"] as const;

export type Locale = (typeof locales)[number];

/** The default locale served at the domain root without a prefix. */
export const defaultLocale: Locale = "en";

export interface LocaleMeta {
  /** The language name written in that language. */
  label: string;
  /** Full BCP-47 code for <html lang> and hreflang tags. */
  htmlLang: string;
  /** Writing direction (ltr or rtl). */
  dir: "ltr" | "rtl";
  /** Date and number formatting locale (Intl). */
  intl: string;
  /** Short two-letter abbreviation. */
  short: string;
}

export const localeMeta: Record<Locale, LocaleMeta> = {
  en: { label: "English", htmlLang: "en", dir: "ltr", intl: "en-US", short: "EN" },
};

/** Returns true if the value matches a configured site locale. */
export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}
