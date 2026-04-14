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
