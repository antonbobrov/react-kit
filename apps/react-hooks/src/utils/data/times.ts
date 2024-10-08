/**
 * Repeats a function `n` times and returns an array of the results.
 *
 * The function executes the provided `callback` for each iteration, passing the current index and the total count as arguments.
 * It collects and returns the results of the callback in an array.
 *
 * @param callback - The function to be called on each iteration. Receives the current index and the total count.
 * @param count - The number of times to execute the callback.
 *
 * @example
 * const result = times((index, count) => index / count, 5);
 * // => [0, 0.2, 0.4, 0.6, 0.8]
 *
 * @example
 * const repeatedStrings = times(() => 'hello', 3);
 * // => ['hello', 'hello', 'hello']
 */
export function times<T>(
  callback: (index: number, count: number) => T,
  count: number,
): T[] {
  let index = 0;
  const list: T[] = [];

  while (index < count) {
    list.push(callback(index, count));
    index += 1;
  }

  return list;
}
