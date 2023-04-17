import { vevet } from '@anton.bobrov/vevet-init';
import { DependencyList, EffectCallback, useEffect } from 'react';

export function useOnPageLoad(effect: EffectCallback, deps: DependencyList) {
  useEffect(() => {
    let unsubscribe: ReturnType<EffectCallback>;

    const promise = vevet.onPageLoaded();
    promise
      .then(() => {
        unsubscribe = effect();
      })
      .catch(() => {});

    return () => {
      promise.cancel();

      unsubscribe?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
