// src/utils.ts

/**
 * Converts a given page name into a proper URL path.
 * Ensures consistent and SEO-friendly URL formatting across the app.
 *
 * @param pageName - The name of the page (e.g., "Portfolio", "Resume")
 * @returns A clean, lowercase URL path (e.g., "/portfolio")
 */
export function createPageUrl(pageName: string): string {
  if (!pageName) return "/";

  const slug = pageName
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-"); // replace spaces with hyphens

  return `/${slug}`;
}

/**
 * Calculates the time elapsed since the given date.
 *
 * @param dateString - The starting date in string format (e.g., "2022-03-01")
 * @returns A formatted string like "2 years, 3 months, 10 days"
 */
export function timeSince(dateString: string): string {
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
