/**
 * Pad a string to the specified length.
 *
 * @param str - The input string
 * @param length - Target length
 * @param char - Padding character (default: space)
 * @returns The padded string
 */
export function padStart(str: string, length: number, char = " "): string {
  return str.padStart(length, char);
}
