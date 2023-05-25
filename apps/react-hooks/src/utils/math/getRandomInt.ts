/** Get random integer */
export function getRandomInt(minProp: number, maxProp: number) {
  const min = Math.ceil(minProp);
  const max = Math.floor(maxProp);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
