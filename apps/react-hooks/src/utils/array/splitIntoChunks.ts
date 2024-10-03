export type TChunk<T> = {
  /** A unique key for the chunk, typically its index. */
  key: number | string;

  /** The array of items in the chunk. */
  items: T[];
};

/**
 * Splits an array into smaller chunks of a specified size.
 *
 * This function takes a source array and divides it into chunks of the given size.
 * Each chunk is represented as an object with a unique key and an array of items.
 *
 * @param source - The source array to be split into chunks.
 * @param chunkSize - The size of each chunk.
 *
 * @example
 * const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 * const chunks = splitIntoChunks(data, 3);
 * // Output: [{ key: 0, items: [1, 2, 3] }, { key: 1, items: [4, 5, 6] }, { key: 2, items: [7, 8, 9] }]
 */
export function splitIntoChunks<T>(
  source: T[],
  chunkSize: number,
): TChunk<T>[] {
  const chunks: TChunk<T>[] = [];

  for (let i = 0; i < source.length; i += chunkSize) {
    const chunk = source.slice(i, i + chunkSize);

    chunks.push({ key: chunks.length, items: chunk });
  }

  return chunks;
}
