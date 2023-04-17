import { DependencyList, EffectCallback, useEffect } from 'react';

export function useDebouncedEffect(
  effect: EffectCallback,
  deps: DependencyList,
  delay: number
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
