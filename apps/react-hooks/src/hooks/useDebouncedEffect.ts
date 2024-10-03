import { DependencyList, EffectCallback, useEffect } from 'react';

/**
 * Custom React hook that executes a debounced effect.
 *
 * This hook allows you to delay the execution of an effect until after a specified
 * delay period has passed since the last time the effect was invoked. It is particularly
 * useful for optimizing performance by reducing the frequency of effect executions
 * in response to changing dependencies.
 *
 * @param effect - The effect callback function to be executed.
 * @param deps - The list of dependencies that trigger the effect when changed.
 * @param delay - The debounce delay in milliseconds.
 *
 * @example
 * const MyComponent = () => {
 *   const [value, setValue] = useState('');
 *
 *   useDebouncedEffect(() => {
 *     // Perform an action after the delay
 *     console.log('Debounced effect executed with value:', value);
 *   }, [value], 300); // Execute the effect after 300ms of no changes to 'value'
 *
 *   return (
 *     <input
 *       type="text"
 *       value={value}
 *       onChange={(e) => setValue(e.target.value)}
 *     />
 *   );
 * };
 */
export function useDebouncedEffect(
  effect: EffectCallback,
  deps: DependencyList,
  delay: number,
) {
  useEffect(() => {
    let destructor: ReturnType<EffectCallback> | null;

    const timeout = setTimeout(() => {
      destructor = effect();
    }, delay);

    return () => {
      clearTimeout(timeout);
      destructor?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
