import { useEffect, useState } from 'react';

/**
 * Hook that changes the state only once when the current value is equal to the target value
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
