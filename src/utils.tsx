// src/utils.js

/**
 * Converts a given page name into a proper URL path.
 * Ensures consistent and SEO-friendly URL formatting across the app.
 *
 * @param {string} pageName - The name of the page (e.g., "Portfolio", "Resume")
 * @returns {string} - A clean, lowercase URL path (e.g., "/portfolio")
 */
export function createPageUrl(pageName : string) {
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


export function timeSince(dateString:string) {
  const startDate = new Date(dateString);
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();

  if (days < 0) {
    months -= 1;
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return `${years} years, ${months} months, ${days} days`;
}