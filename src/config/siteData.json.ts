// src/config/siteData.json.ts - publication identity: name, author, email, socials.
import type { SiteDataProps } from "./types/configDataTypes";

// Everything that identifies the publication lives here. This is the first file
// you should edit to rebrand your site.
const siteData: SiteDataProps = {
  name: "Reef",
  title: "Reef - the Astro theme for people who write",
  description:
    "A free Astro 7 blog theme built for reading: an editorial home, a post page tuned for eight minutes of attention, topic archives, author pages, client-side search, and a bilingual layer that costs one line per language.",
  useViewTransitions: true,

  // Optional notice displayed in footer (leave empty if not needed).
  demoNotice: "",

  // Author information for footer & metadata:
  author: {
    name: "Example Studio",
    email: "hello@example.com",
    twitter: "",
  },

  defaultImage: {
    src: "/og/default.png",
    alt: "Reef, the Astro theme for people who write",
  },
};

export default siteData;
