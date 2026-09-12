// src/i18n/ui/en/chrome.ts - English dictionary, chrome slice: navigation, footer, shared labels.

export const enChrome = {
  // Navigation bar
  nav: {
    posts: "Articles",
    topics: "Topics",
    about: "About Me",
    contact: "Contact",
    authors: "Authors",
    search: "Search",
    brandHome: "Dr Torrance Merkle, back to the home page",
    mainLabel: "Main",
    mobileLabel: "Mobile",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLanguage: "Change language",
    toggleTheme: "Toggle theme",
    subscribe: "Newsletter",
  },

  // Footer
  footer: {
    tagline:
      "Dr Torrance Merkle is an Auckland-trained General Practitioner with a special interest in adult ADHD screening, diagnosis navigation, and holistic healthcare.",
    colRead: "Read",
    colStudio: "Practice",
    colLegal: "Legal",
    rss: "RSS feed",
    sitemap: "Sitemap",
    imprint: "Legal notice",
    privacy: "Privacy",
    terms: "Terms",
    rights: "All rights reserved.",
    builtWith: "Dr Torrance Merkle. General Practitioner (MBChB, Auckland).",
    themeBy: "Site theme based on Reef by",
    backToTop: "Back to top",
    subscribeRss: "Subscribe to the RSS feed",
    emailStudio: "Email Dr Torrance Merkle",
    followOn: "Follow {name} on {network}",
  },

  // --- Libelles partages ---------------------------------------------------
  // Ce qui apparait a au moins deux endroits sans appartenir a aucun. Un libelle
  // utilise une seule fois n'a rien a faire ici : il vit dans sa page.
  common: {
    readMore: "Read more",
    readPost: "Read the post",
    backHome: "Back to the home page",
    backToPosts: "Back to all posts",
    skipToContent: "Skip to content",
    home: "Home",
    breadcrumbLabel: "Breadcrumb",
    previous: "Previous",
    next: "Next",
    page: "Page",
    /** Les jetons {current} et {total} sont remplis par fmt() (src/i18n/index.ts). */
    pageOf: "Page {current} of {total}",
    all: "All",
    loading: "Loading",
    close: "Close",
    copy: "Copy",
    copied: "Copied",
    optional: "optional",
    required: "required",
    genericError: "Something went wrong. Try again in a moment.",
    newTab: "opens in a new tab",
  },
} as const;
