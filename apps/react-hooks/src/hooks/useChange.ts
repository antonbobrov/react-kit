import { useEffect } from 'react';

import { useEvent } from './useEvent';
import { usePrevious } from './usePrevious';

const INITIAL_VALUE = Symbol('Initial value');

export function useChange<T>(
  observer: (value: T, prev: T) => void,
  observable: T
): void {
  const prevObservable = usePrevious(observable, INITIAL_VALUE);
  const stableObserver = useEvent(observer);

  useEffect(() => {
    if (prevObservable !== INITIAL_VALUE && prevObservable !== observable) {
      stableObserver(observable, prevObservable);
    }
  }, [prevObservable, observable, stableObserver]);
}
