export type TChunk<T> = {
  key: number | string;
  items: T[];
};

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
