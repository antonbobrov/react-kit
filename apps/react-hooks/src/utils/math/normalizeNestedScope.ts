export function normalizeNestedScope(
  innerScope: [number, number] | number[],
  globalScope: [number, number] | number[]
): [number, number] {
  const dist = globalScope[1] - globalScope[0];

  return [
    globalScope[0] + innerScope[0] * dist,
    globalScope[0] + innerScope[1] * dist,
  ];
}
