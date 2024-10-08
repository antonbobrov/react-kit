import { Dispatch, SetStateAction, useEffect, useState } from 'react';

/**
 * Custom React hook that creates a state that automatically synchronizes with an external value.
 *
 * This hook allows you to manage local state that reflects the value of a prop.
 * When the prop changes, the internal state is updated to match the new prop value.
 * This is useful when you want to have controlled components that also
 * sync with their props.
 *
 * @param prop - The external value to synchronize with.
 *
 * @example
 * const MyComponent = ({ initialValue }) => {
 *   const [value, setValue] = usePropState(initialValue);
 *
 *   return (
 *     <div>
 *       <p>Current Value: {value}</p>
 *       <button onClick={() => setValue(value + 1)}>Increment</button>
 *     </div>
 *   );
 * };
 */
export function usePropState<T>(prop: T): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState<T>(prop);

  useEffect(() => {
    setState(prop);
  }, [prop]);

  return [state, setState];
}
