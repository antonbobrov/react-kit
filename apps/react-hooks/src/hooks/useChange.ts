import { useEffect } from 'react';

import { useEvent } from './useEvent';
import { usePrevious } from './usePrevious';

const INITIAL_VALUE = Symbol('Initial value');

/**
 * Custom React hook that triggers a callback when the observable property changes.
 *
 * This hook compares the current value of the observable property with its previous value.
 * If they differ, it invokes the provided observer function with the current and previous values.
 *
 * @param observer - Callback function to be invoked when the observable changes.
 * @param observable - The observable value to be monitored for changes.
 *
 * @example
 * const MyComponent = () => {
 *   const [count, setCount] = useState(0);
 *
 *   useChange((newCount, oldCount) => {
 *     console.log(`Count changed from ${oldCount} to ${newCount}`);
 *   }, count);
 *
 *   return (
 *     <button onClick={() => setCount(count + 1)}>
 *       Increment
 *     </button>
 *   );
 * };
 */
export function useChange<T>(
  observer: (value: T, prev: T) => void,
  observable: T,
): void {
  const prevObservable = usePrevious(observable, INITIAL_VALUE);
  const stableObserver = useEvent(observer);

  useEffect(() => {
    if (prevObservable !== INITIAL_VALUE && prevObservable !== observable) {
      stableObserver(observable, prevObservable);
    }
  }, [prevObservable, observable, stableObserver]);
}
