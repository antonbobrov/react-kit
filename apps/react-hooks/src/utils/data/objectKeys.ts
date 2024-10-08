/**
 * Retrieves the keys of an object as an array of the object's keys.
 *
 * This function ensures that the returned keys are typed correctly based on the input object.
 *
 * @param object - The object from which the keys will be retrieved.
 *
 * @example
 * const person = { name: 'Alice', age: 25 };
 * const keys = objectKeys(person); // ['name', 'age']
 */
export function objectKeys<T>(object: T): (keyof T)[] {
  return Object.keys(object as any) as (keyof T)[];
}
