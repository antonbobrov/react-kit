export function uniqueeArray<T extends Array<any>>(input: T): T {
  return input.filter(
    (item, index, array) => array.indexOf(item) === index,
  ) as T;
}
