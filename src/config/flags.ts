/**
 * Development flags for controlling feature visibility
 *
 * Set VITE_DEV_MODE=true in .env.local to show full site
 * When false/unset, only the landing page is visible
 */

export const DEV_FLAGS = {
  /** Show the full site with all routes, or just the landing page */
  showFullSite: import.meta.env.VITE_DEV_MODE === 'true',

  /** Individual section toggles (only apply when showFullSite is true) */
  showResearch: true,
  showPapers: true,
  showTools: true,
  showBlog: true,
  showAbout: true,
} as const;

export type DevFlags = typeof DEV_FLAGS;
