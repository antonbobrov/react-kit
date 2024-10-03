/**
 * Checks if the provided value is undefined.
 *
 * @param value - The value to check.
 *
 * @example
 * const result1 = isUndefined(undefined); // true
 * const result2 = isUndefined(null);      // false
 * const result3 = isUndefined(123);       // false
 * const result4 = isUndefined('Hello');   // false
 */
export function isUndefined(value: any): value is undefined {
  return typeof value === 'undefined';
}
