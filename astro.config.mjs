// astro.config.mjs - Astro site configuration for Dr Torrance Merkle.
// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Feeds canonical URL, Open Graph, sitemap, robots.txt and llms.txt.
  site: "https://drtorrance.co.nz",

  // Trailing slash ensures canonical consistency across static directories.
  trailingSlash: "always",

  // Static HTML output without server adapter.
  security: { checkOrigin: true },

  // Locale configuration: English only served at the root.
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    routing: { prefixDefaultLocale: false, redirectToDefaultLocale: false },
  },

  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !["/404/", "/examples/"].some((p) => page.includes(p)),
      i18n: { defaultLocale: "en", locales: { en: "en" } },
    }),
  ],

  markdown: {
    shikiConfig: {
      // Deux themes, commutes par la classe .dark : un bloc de code qui reste
      // clair sur une page sombre est la premiere chose qu'on remarque, et la
      // derniere qu'on pardonne a un theme de blog.
      //
      // La variante "high-contrast" en clair n'est pas un gout : "github-light"
      // pose ses commentaires et ses noms de propriete a 3,49 pour 1 sur le
      // fond du bloc, quand WCAG AA en demande 4,5 pour du texte courant. Un
      // billet technique dont le code est le contenu principal ne peut pas se
      // permettre de le rendre a la limite du lisible.
      //
      // Le sombre a ete cru sain jusqu'au 5 septembre 2026, jour ou le banc a
      // mesure le mode sombre pour la premiere fois : "github-dark-dimmed"
      // pose ses commentaires (#768390) a 3,88 pour 1 sur son propre fond
      // (#22272e), sur dix billets. "github-dark-default" les pose a 6,15 et
      // aucun de ses jetons ne descend sous ce chiffre ; il reste dans la meme
      // famille GitHub, donc les memes teintes de mot-cle et de chaine.
      themes: { light: "github-light-high-contrast", dark: "github-dark-default" },
      wrap: true,
    },
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      // N'inline pas les petits scripts, pour qu'ils survivent aux view transitions.
      assetsInlineLimit: 0,
    },
  },
});
