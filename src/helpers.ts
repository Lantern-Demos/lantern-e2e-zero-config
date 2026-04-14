/**
 * String utility helpers for the E2E fixture repository.
 *
 * @module helpers
 */

/**
 * Capitalizes the first letter of a string.
 *
 * @param str - The input string
 * @returns The string with the first letter capitalized
 */
export function capitalize(str: string | null | undefined): string {
  if (str == null) return "";
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Truncates a string to the specified length and appends an ellipsis.
 * When maxLength is less than or equal to the ellipsis length, returns str.slice(0, maxLength).
 *
 * @param str - The input string
 * @param maxLength - Maximum length before truncation
 * @param ellipsis - Custom ellipsis string (default: "...")
 * @returns The truncated string
 */
export function truncate(str: string, maxLength: number, ellipsis = "..."): string {
  if (str.length <= maxLength) return str;
  if (maxLength <= ellipsis.length) return str.slice(0, maxLength);
  return str.slice(0, maxLength - ellipsis.length) + ellipsis;
}

/**
 * Converts a string to a URL-friendly slug.
 * Handles unicode and transliterates accented characters.
 *
 * @param str - The input string
 * @returns The slugified string
 */
export function slugify(str: string | null | undefined): string {
  if (str == null) return "";
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
