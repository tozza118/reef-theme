// src/i18n/content.ts - bridge between content collections and locales.

import { getCollection, type CollectionEntry, type CollectionKey } from "astro:content";
import { defaultLocale, isLocale, locales, type Locale } from "./config";

/** Strips locale prefix from entry id: "en/slug" -> "slug". */
export function entrySlug(id: string): string {
  const at = id.indexOf("/");
  if (at < 0) return id;
  return isLocale(id.slice(0, at)) ? id.slice(at + 1) : id;
}

/** Extracts locale from entry id, falling back to default locale. */
export function entryLocale(id: string): Locale {
  const at = id.indexOf("/");
  if (at < 0) return defaultLocale;
  const head = id.slice(0, at);
  return isLocale(head) ? head : defaultLocale;
}

/** Target id for the same entry in another locale. */
export function entryIdIn(id: string, locale: Locale): string {
  return `${locale}/${entrySlug(id)}`;
}

/**
 * Returns entries for a given collection filtered by locale.
 */
export function getLocalizedCollection<C extends CollectionKey>(
  collection: C,
  locale: Locale,
  filter?: (entry: CollectionEntry<C>) => boolean,
): Promise<CollectionEntry<C>[]> {
  const entries = getCollection(collection, (entry: CollectionEntry<C>) => {
    if (entryLocale(entry.id) !== locale) return false;
    return filter ? filter(entry) : true;
  });
  return entries;
}

/**
 * Locales in which an entry actually exists.
 */
export async function localesForEntry<C extends CollectionKey>(
  collection: C,
  slug: string,
): Promise<Locale[]> {
  const all = await getCollection(collection);
  const available = new Set(all.map((entry) => entryLocale(entry.id) + "/" + entrySlug(entry.id)));
  return locales.filter((locale) => available.has(`${locale}/${slug}`));
}
