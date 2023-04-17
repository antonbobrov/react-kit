import { DependencyList, EffectCallback, useEffect } from 'react';
import { NViewport, NCallbacks, vevet } from '@anton.bobrov/vevet-init';
import { isUndefined } from '@anton.bobrov/react-hooks';

type TTarget = keyof NViewport.CallbacksTypes;

export interface IUseOnResizeSettings
  extends Omit<NCallbacks.CallbackBaseSettings, 'protected'> {
  /**
   * @default 0
   */
  timeout?: number;
  /**
   * Use optimized target for mobile devices
   * @default true
   */
  isMobileOptimizedTarget?: boolean;
  /**
   * Resize target
   */
  target?: TTarget;
}

export function useOnResize(
  effect: EffectCallback,
  deps: DependencyList,
  settingsProp?: IUseOnResizeSettings
) {
  useEffect(() => {
    let destructor = effect();

    const settings: IUseOnResizeSettings = {
      timeout: 0,
      isMobileOptimizedTarget: true,
      ...settingsProp,
    };

    let target = !isUndefined(settings.target) ? settings.target : '';
    target = settings.isMobileOptimizedTarget && vevet.isMobile ? 'w' : target;

    const viewportCallback = vevet.viewport.add(
      target,
      () => {
        destructor?.();
        destructor = effect();
      },
      settings
    );

    return () => {
      viewportCallback.remove();
      destructor?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
