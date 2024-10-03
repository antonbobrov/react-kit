/**
 * Checks if the provided value is a number.
 *
 * @param value - The value to check.
 *
 * @example
 * const result1 = isNumber(42);      // true
 * const result2 = isNumber('42');    // false
 * const result3 = isNumber(NaN);     // true
 * const result4 = isNumber(null);     // false
 */
export function isNumber(value: any): value is number {
  return typeof value === 'number';
}
