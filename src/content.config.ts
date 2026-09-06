// src/content.config.ts - the three collections (posts, authors, topics) loaded via glob from src/data.
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection, reference } from "astro:content";

// Blog posts. Markdown or MDX in src/data/posts/<locale>/.
const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      // Displayed only if updated after publication date.
      updatedDate: z.coerce.date().optional(),
      author: reference("authors"),
      topic: reference("topics"),
      tags: z.array(z.string()).default([]),
      // Astro image helper ensures proper width/height and optimization.
      cover: image().optional(),
      coverAlt: z.string().optional(),
      // Highlight on homepage.
      featured: z.boolean().default(false),
      // Drafts can be previewed locally but excluded from lists, RSS, sitemaps.
      draft: z.boolean().default(false),
    }),
});

// Authors: one JSON per person referenced by posts.
const authors = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/data/authors" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      bio: z.string(),
      avatar: image().optional(),
      links: z
        .array(z.object({ label: z.string(), href: z.url() }))
        .default([]),
    }),
});

// Topics: each with its own archive page, accent color, and description.
const topics = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/data/topics" }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    accent: z.enum(["coral", "reef", "ink"]),
    order: z.number().default(0),
  }),
});

export const collections = { posts, authors, topics };
