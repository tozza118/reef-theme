// src/pages/llms.txt.ts - Dynamic llms.txt: presents the site, core pages, topics, and posts to AI agents.
import siteData from "@config/siteData.json";
import { localeMeta, localizePath, locales } from "@i18n";
import { entrySlug } from "@i18n/content";
import { getResolvedPosts, getSortedTopics } from "@js/posts";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ site, url }) => {
  const base = site ?? url;
  const absolute = (path: string): string => new URL(path, base).href;

  const lines = [
    `# ${siteData.name}`,
    "",
    `> ${siteData.description}`,
    "",
    `This site is published in ${locales.length} language: ` +
      locales
        .map((locale) => `${localeMeta[locale].label} (${absolute(localizePath("/", locale))})`)
        .join(", ") +
      ".",
    "",
  ];

  const core: [string, string][] = [
    ["/", "the home page: featured guide, latest articles, topics, and about summary"],
    ["/blog/", "every published article and guide, newest first"],
    ["/topics/", "the clinical topic index"],
    ["/authors/", "author profile for Dr Torrance Merkle"],
    ["/about-me/", "biography, medical credentials, and practice philosophy"],
    ["/contact/", "contact information, clinic details, and emergency guidance"],
    ["/legal/", "publisher, medical disclaimer, and terms"],
  ];

  for (const locale of locales) {
    lines.push(`## Core pages (${localeMeta[locale].label})`, "");
    for (const [path, note] of core) {
      lines.push(`- ${absolute(localizePath(path, locale))}: ${note}`);
    }
    lines.push("");
  }

  for (const locale of locales) {
    const topics = await getSortedTopics(locale);
    if (topics.length === 0) continue;
    lines.push(`## Topics (${localeMeta[locale].label})`, "");
    for (const topic of topics) {
      const href = absolute(localizePath(`/topics/${entrySlug(topic.id)}/`, locale));
      lines.push(`- [${topic.data.name}](${href}): ${topic.data.description}`);
    }
    lines.push("");
  }

  for (const locale of locales) {
    // Les brouillons sont deja ecartes par getResolvedPosts : un billet non
    // publie ne doit pas fuiter par le fichier destine aux agents.
    const posts = (await getResolvedPosts(locale)).slice(0, 10);
    if (posts.length === 0) continue;
    lines.push(`## Latest posts (${localeMeta[locale].label})`, "");
    for (const { post, slug } of posts) {
      const href = absolute(localizePath(`/blog/${slug}/`, locale));
      lines.push(`- [${post.data.title}](${href}): ${post.data.description}`);
    }
    lines.push("");
  }

  lines.push(
    "## Machine-readable",
    "",
    `- [Sitemap](${absolute("/sitemap-index.xml")}): every indexable URL on this site`,
    ...locales.map(
      (locale) =>
        `- [RSS feed, ${localeMeta[locale].label}](${absolute(localizePath("/rss.xml", locale))}): the posts of that language as an RSS 2.0 feed`,
    ),
    "",
  );

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
