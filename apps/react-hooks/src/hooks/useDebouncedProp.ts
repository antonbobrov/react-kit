import { useEffect, useState } from 'react';

/**
 * Custom React hook that returns a debounced version of a property.
 *
 * This hook delays updating the state with the provided property value
 * until after the specified delay period has elapsed since the last change.
 * It is useful for preventing rapid state updates and can help improve performance
 * in scenarios like user input or rapidly changing props.
 *
 * @param prop - The property value to be debounced.
 * @param delay - The debounce delay in milliseconds.
 *
 * @example
 * const MyComponent = () => {
 *   const [inputValue, setInputValue] = useState('');
 *   const debouncedValue = useDebouncedProp(inputValue, 300); // Debounce for 300ms
 *
 *   useEffect(() => {
 *     // Perform an action with the debounced value
 *     console.log('Debounced value:', debouncedValue);
 *   }, [debouncedValue]);
 *
 *   return (
 *     <input
 *       type="text"
 *       value={inputValue}
 *       onChange={(e) => setInputValue(e.target.value)}
 *     />
 *   );
 * };
 */
export function useDebouncedProp<T>(prop: T, delay: number): T {
  const [state, setState] = useState<T>(prop);

  useEffect(() => {
    const timeout = setTimeout(() => setState(prop), delay);

    return () => clearTimeout(timeout);
  }, [prop, delay]);

  return state;
}
