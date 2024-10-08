import { useRef } from 'react';
import { useEvent } from './useEvent';

/**
 * Custom React hook that creates a stable debounced callback.
 *
 * This hook returns a function that, when called, delays the execution of
 * the specified effect until after a specified delay period has elapsed since
 * the last invocation. This is useful for optimizing performance by reducing
 * the frequency of function calls in response to events, such as resizing or
 * input changes.
 *
 * @param effect - The effect function to be executed after the debounce delay.
 * @param delay - The debounce delay in milliseconds.
 *
 * @example
 * const MyComponent = () => {
 *   const handleResize = useDebouncedEvent(() => {
 *     console.log('Window resized');
 *   }, 300); // Debounce the resize event by 300ms
 *
 *   useEffect(() => {
 *     window.addEventListener('resize', handleResize);
 *     return () => {
 *       window.removeEventListener('resize', handleResize);
 *     };
 *   }, [handleResize]);
 *
 *   return <div>Resize the window and check the console!</div>;
 * };
 */
export function useDebouncedEvent(effect: () => void, delay: number) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const event = useEvent(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => effect(), delay);
  });

  return event;
}
