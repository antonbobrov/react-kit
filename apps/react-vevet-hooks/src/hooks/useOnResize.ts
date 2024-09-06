import { DependencyList, EffectCallback, useEffect } from 'react';
import { NViewport, NCallbacks, vevet } from '@anton.bobrov/vevet-init';

type TTarget = keyof NViewport.ICallbacksTypes;

export interface IUseOnResizeSettings
  extends Omit<NCallbacks.ISettings, 'isProtected'> {
  /** Resize target */
  target?: TTarget;
  /**
   * Use optimized target for mobile devices
   * @default true
   */
  isMobileOptimizedTarget?: boolean;
}

/** Event on viewport resize */
export function useOnResize(
  effect: EffectCallback,
  deps: DependencyList,
  settings?: IUseOnResizeSettings,
) {
  useEffect(() => {
    let destructor = effect();

    const isMobileOptimizedTarget = settings?.isMobileOptimizedTarget ?? true;

    let target = settings?.target ?? 'any';
    target = isMobileOptimizedTarget && vevet.isMobile ? 'width' : target;

    const viewportCallback = vevet.viewport.callbacks.add(
      target,
      () => {
        destructor?.();
        destructor = effect();
      },
      settings,
    );

    return () => {
      viewportCallback.remove();
      destructor?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
