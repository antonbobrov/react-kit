import { DependencyList, EffectCallback, useEffect } from 'react';
import { vevet } from 'vevet';

/**
 * Custom React hook that triggers an effect once the page has fully loaded.
 *
 * @example
 * const MyComponent = () => {
 *   useOnPageLoad(() => {
 *     console.log('Page has loaded!');
 *   }, []);
 *
 *   return <div>Welcome to my website!</div>;
 * };
 */
export function useOnPageLoad(effect: EffectCallback, deps: DependencyList) {
  useEffect(() => {
    let unsubscribe: ReturnType<EffectCallback>;

    const promise = vevet.onPageLoad();
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
