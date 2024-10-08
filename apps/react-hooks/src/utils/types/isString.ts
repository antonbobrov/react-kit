/**
 * Checks if the provided value is a string.
 *
 * @param value - The value to check.
 *
 * @example
 * const result1 = isString('Hello, world!');  // true
 * const result2 = isString(123);              // false
 * const result3 = isString('123');            // true
 * const result4 = isString(null);             // false
 */
export function isString(value: any): value is string {
  return typeof value === 'string';
}
