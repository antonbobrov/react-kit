import { useId } from 'react';

/**
 * Custom React hook that generates a unique DOM ID without colons.
 *
 * This hook wraps the built-in `useId` hook and replaces any colons (":")
 * in the generated ID with underscores ("_"). This is useful in scenarios
 * where IDs containing colons may cause issues, such as in HTML or XML attributes.
 *
 * @example
 * const MyComponent = () => {
 *   const domId = useDomId();
 *
 *   return (
 *     <div>
 *       <label htmlFor={domId}>Label</label>
 *       <input id={domId} type="text" />
 *     </div>
 *   );
 * };
 */
export function useDomId() {
  const generatedId = useId();

  return generatedId.replace(/:/g, '_');
}
