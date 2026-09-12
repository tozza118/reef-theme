// src/config/siteData.json.ts - publication identity: name, author, email, socials.
import type { SiteDataProps } from "./types/configDataTypes";

// Everything that identifies the publication lives here.
const siteData: SiteDataProps = {
  name: "Dr Torrance Merkle",
  title: "Dr Torrance Merkle - General Practitioner & ADHD Care",
  description:
    "Evidence-based medical care, adult ADHD screening, and practical health guides by Dr Torrance Merkle (MBChB, Auckland).",
  useViewTransitions: true,

  // Optional notice displayed in footer (leave empty if not needed).
  demoNotice: "",

  // Author information for footer and metadata:
  author: {
    name: "Dr Torrance Merkle",
    email: "contact@drtorrance.co.nz",
    twitter: "",
  },

  defaultImage: {
    src: "/og/default.png",
    alt: "Dr Torrance Merkle - General Practitioner",
  },
};

export default siteData;
