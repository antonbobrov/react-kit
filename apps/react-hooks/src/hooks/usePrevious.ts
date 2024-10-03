import { useEffect, useRef } from 'react';

export function usePrevious<T>(value: T): T | undefined;

export function usePrevious<T, I>(value: T, initialValue: I): T | I;

/**
 * Custom React hook that returns the previous value of a state or prop.
 *
 * This hook stores the previous value of the provided input and allows
 * you to access it in subsequent renders. If an initial value is provided,
 * it will return that value before the first render.
 *
 * @param value - The current value to track.
 * @param initialValue - The initial value to return before the first render.
 *
 * @example
 * const MyComponent = () => {
 *   const [count, setCount] = useState(0);
 *   const previousCount = usePrevious(count, -1);
 *
 *   return (
 *     <div>
 *       <p>Current Count: {count}</p>
 *       <p>Previous Count: {previousCount}</p>
 *       <button onClick={() => setCount(count + 1)}>Increment</button>
 *     </div>
 *   );
 * };
 */
export function usePrevious<T, I>(
  value: T,
  initialValue?: I,
): T | I | undefined {
  const previousRef = useRef<T | I | undefined>(initialValue);

  useEffect(() => {
    previousRef.current = value;
  }, [value]);

  return previousRef.current;
}
