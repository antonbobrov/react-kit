/**
 * Checks if the provided value is a boolean.
 *
 * @param value - The value to check.
 *
 * @example
 * const result1 = isBoolean(true); // true
 * const result2 = isBoolean(1);    // false
 * const result3 = isBoolean('test'); // false
 */
export function isBoolean(value: any): value is boolean {
  return typeof value === 'boolean';
}
