import { useEffect, useState } from 'react';

export function useDebouncedProp<T>(prop: T, delay: number): T {
  const [state, setState] = useState<T>(prop);

  useEffect(() => {
    const timeout = setTimeout(() => setState(prop), delay);

    return () => clearTimeout(timeout);
  }, [prop, delay]);

  return state;
}
