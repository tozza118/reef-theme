// src/config/navData.json.ts - navigation, footer columns, and routes: single source of truth for Reef links.
//
// Labels are not written here: they come from the dictionary so they can be easily customized.
// This file only describes navigation structure (items, columns) and canonical paths.

import { localizePath, useTranslations, type Locale } from "@i18n";
import type { FooterColumn, NavItem, SiteRoutes } from "./types/configDataTypes";

/**
 * Main navigation: top-level items.
 */
export function getNavData(locale: Locale): NavItem[] {
  const t = useTranslations(locale);
  const L = (path: string): string => localizePath(path, locale);
  return [
    { text: t.nav.posts, href: L("/blog/") },
    { text: t.nav.topics, href: L("/topics/") },
    { text: t.nav.about, href: L("/about/") },
    { text: t.nav.contact, href: L("/contact/") },
  ];
}

/**
 * Footer columns: Read, The studio, Legal.
 */
export function getFooterData(locale: Locale): FooterColumn[] {
  const t = useTranslations(locale);
  const L = (path: string): string => localizePath(path, locale);
  return [
    {
      title: t.footer.colRead,
      links: [
        { text: t.nav.posts, href: L("/blog/") },
        { text: t.nav.topics, href: L("/topics/") },
        { text: t.nav.authors, href: L("/authors/") },
        { text: t.footer.rss, href: L("/rss.xml") },
      ],
    },
    {
      title: t.footer.colStudio,
      links: [
        { text: t.nav.about, href: L("/about/") },
        { text: t.nav.contact, href: L("/contact/") },
      ],
    },
    {
      title: t.footer.colLegal,
      links: [
        { text: t.footer.imprint, href: L("/legal/") },
        { text: t.footer.privacy, href: L("/privacy/") },
      ],
    },
  ];
}

/**
 * Routes that components should never hardcode.
 */
export function getSiteRoutes(locale: Locale): SiteRoutes {
  const L = (path: string): string => localizePath(path, locale);
  return {
    home: L("/"),
    posts: L("/blog/"),
    topics: L("/topics/"),
    authors: L("/authors/"),
    about: L("/about/"),
    contact: L("/contact/"),
    search: L("/search/"),
    rss: L("/rss.xml"),
    sitemap: "/sitemap-index.xml",
    imprint: L("/legal/"),
    privacy: L("/privacy/"),
    terms: L("/terms/"),
  };
}
