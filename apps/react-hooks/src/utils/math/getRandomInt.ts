/**
 * Generates a random integer between the specified minimum and maximum values (inclusive).
 *
 * @param {number} minProp - The minimum value (inclusive) of the range.
 * @param {number} maxProp - The maximum value (inclusive) of the range.
 * @returns {number} A random integer between the specified minimum and maximum values.
 *
 * @example
 * const randomInt = getRandomInt(1, 10);
 * console.log(randomInt); // Outputs a random integer between 1 and 10
 */
export function getRandomInt(minProp: number, maxProp: number) {
  const min = Math.ceil(minProp);
  const max = Math.floor(maxProp);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
