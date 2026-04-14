/**
 * Truncates a string to the specified length and appends an ellipsis.
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
