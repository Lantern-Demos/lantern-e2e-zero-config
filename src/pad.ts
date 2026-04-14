/**
 * Pad a string to the specified length.
 *
 * @param str - The input string
 * @param length - Target length
 * @param char - Padding character (default: space, must be a single character)
 * @returns The padded string
 * @throws {RangeError} If char is not a single character
 */
export function padStart(str: string, length: number, char = " "): string {
  if (char.length !== 1) {
    throw new RangeError("padChar must be a single character");
  }
  return str.padStart(length, char);
}
