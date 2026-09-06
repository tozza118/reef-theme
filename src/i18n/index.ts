// src/i18n/index.ts - language utilities and helpers for components.

import { defaultLocale, isLocale, localeMeta, locales, type Locale } from "./config";
import { en } from "./ui/en/index";
import type { Dictionary } from "./ui/types";

export { defaultLocale, isLocale, localeMeta, locales };
export type { Locale };
export type { Dictionary };

const dictionaries: Record<Locale, Dictionary> = { en };

/** Dictionary copy for requested locale. */
export function useTranslations(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/**
 * Returns the locale of the active page.
 */
export function getLocale(ctx: { currentLocale?: string | undefined }): Locale {
  return isLocale(ctx.currentLocale) ? ctx.currentLocale : defaultLocale;
}

/** The URL prefix for a locale (empty string for default root locale). */
export function localePrefix(locale: Locale): string {
  return locale === defaultLocale ? "" : `/${locale}`;
}

/**
 * Translates a canonical path into the target locale.
 */
export function localizePath(path: string, locale: Locale): string {
  if (/^([a-z]+:)?\/\//i.test(path) || path.startsWith("mailto:") || path.startsWith("#")) {
    return path;
  }
  const clean = stripLocale(path);
  const prefix = localePrefix(locale);
  if (!prefix) return clean;
  return clean === "/" ? `${prefix}/` : `${prefix}${clean}`;
}

/** Strips the locale prefix from a path: e.g. "/fr/pricing/" -> "/pricing/". */
export function stripLocale(path: string): string {
  const match = /^\/([a-z]{2}(?:-[a-z]{2})?)(?=\/|$)/i.exec(path);
  if (match && isLocale(match[1])) {
    const rest = path.slice(match[0].length);
    return rest === "" ? "/" : rest;
  }
  return path;
}

export interface Alternate {
  locale: Locale;
  hreflang: string;
  href: string;
  label: string;
  short: string;
  current: boolean;
}

/**
 * Alternates of current page for all locales (used in hreflang tags).
 */
export function getAlternates(url: URL, site: URL | undefined, current: Locale): Alternate[] {
  const base = site ?? url;
  const canonical = stripLocale(url.pathname);
  return locales.map((locale) => {
    const meta = localeMeta[locale];
    return {
      locale,
      hreflang: meta.htmlLang,
      href: new URL(localizePath(canonical, locale), base).href,
      label: meta.label,
      short: meta.short,
      current: locale === current,
    };
  });
}

/**
 * getStaticPaths params for routes placed under src/pages/[...locale]/.
 */
export function localePaths(): { params: { locale: string | undefined } }[] {
  return locales.map((locale) => ({
    params: { locale: locale === defaultLocale ? undefined : locale },
  }));
}

/**
 * Replaces {tokens} in a template string.
 */
export function fmt(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (whole, key: string) =>
    key in vars ? String(vars[key]) : whole,
  );
}

/** Formats date according to locale rules. */
export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(localeMeta[locale].intl, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(date);
}

/** Formats number according to locale rules. */
export function formatNumber(value: number, locale: Locale, options?: Intl.NumberFormatOptions): string {
  return new Intl.NumberFormat(localeMeta[locale].intl, options).format(value);
}
