import { useEffect, useState } from 'react';

/**
 * Custom React hook to detect if a component has been mounted.
 *
 * This hook sets an internal state to indicate whether the component
 * has been mounted or not. It returns a boolean value that is true
 * after the initial render, allowing you to determine if the component
 * is currently mounted.
 *
 * @example
 * const MyComponent = () => {
 *   const isMounted = useIsOnceMounted();
 *
 *   return (
 *     <div>
 *       {isMounted ? 'Component is mounted!' : 'Component is not mounted yet.'}
 *     </div>
 *   );
 * };
 */
export function useIsOnceMounted() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  return isMounted;
}
