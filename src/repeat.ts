/**
 * Repeat a string n times.
 *
 * @param str - The input string
 * @param times - Number of repetitions
 * @returns The repeated string
 */
export function repeat(str: string, times: number): string {
  return str.repeat(Math.max(0, times));
}
