import { useEffect, useState } from 'react';

/**
 * Custom React hook that updates the state only once when the current value matches the target value.
 *
 * This hook is useful for setting a state based on a condition that only needs to be fulfilled once.
 * When the `currentValue` equals the `targetValue`, it sets the state to the `targetValue`.
 *
 * @param currentValue - The current value to be compared.
 * @param targetValue - The value to match against the current value.
 *
 * @example
 * const MyComponent = () => {
 *   const [inputValue, setInputValue] = useState('');
 *   const state = useOnceProp(inputValue, 'submit');
 *
 *   useEffect(() => {
 *     if (state === 'submit') {
 *       console.log('State updated to submit');
 *     }
 *   }, [state]);
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
export function useOnceProp<T>(currentValue: T, targetValue: T) {
  const [state, setState] = useState(currentValue);

  useEffect(() => {
    if (currentValue === targetValue) {
      setState(targetValue);
    }
  }, [currentValue, targetValue]);

  return state;
}
