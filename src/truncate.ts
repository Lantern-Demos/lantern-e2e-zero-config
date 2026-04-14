/**
 * Truncates a string to the specified length and appends an ellipsis.
 *
 * @param str - The input string
 * @param maxLength - Maximum length before truncation
 * @returns The truncated string
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - 3) + "...";
}
