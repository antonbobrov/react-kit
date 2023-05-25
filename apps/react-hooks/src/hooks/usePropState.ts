import { Dispatch, SetStateAction, useEffect, useState } from 'react';

/** A hook that allows you to create a state that will automatically synchronize with an external value. */
export function usePropState<T>(prop: T): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState<T>(prop);

  useEffect(() => {
    setState(prop);
  }, [prop]);

  return [state, setState];
}
