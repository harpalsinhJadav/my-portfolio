// src/utils.js

/**
 * Converts a given page name into a proper URL path.
 * Ensures consistent and SEO-friendly URL formatting across the app.
 *
 * @param {string} pageName - The name of the page (e.g., "Portfolio", "Resume")
 * @returns {string} - A clean, lowercase URL path (e.g., "/portfolio")
 */
export function createPageUrl(pageName) {
  if (!pageName) return "/";
  
  // Normalize page name (e.g., remove spaces, convert to lowercase)
  const slug = pageName
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-"); // replace spaces with hyphens

  // Return URL path
  return `/${slug}`;
}
