/**
 * Creates a new array with duplicate values removed.
 *
 * This function takes an array as input and filters out duplicate elements,
 * returning a new array that contains only unique values.
 * The original array remains unchanged.
 *
 * @param input - The input array from which duplicates will be removed.
 *
 * @example
 * const numbers = [1, 2, 2, 3, 4, 4, 5];
 * const uniqueNumbers = uniqueeArray(numbers);
 * // Output: [1, 2, 3, 4, 5]
 */
export function uniqueeArray<T extends Array<any>>(input: T): T {
  return input.filter(
    (item, index, array) => array.indexOf(item) === index,
  ) as T;
}
