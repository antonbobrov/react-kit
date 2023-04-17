export function times<T>(callback: (index: number) => T, count: number): T[] {
  let index = 0;
  const list: T[] = [];

  while (index < count) {
    list.push(callback(index));
    index += 1;
  }

  return list;
}
