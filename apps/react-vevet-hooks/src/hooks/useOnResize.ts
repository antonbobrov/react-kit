import { DependencyList, EffectCallback, useEffect } from 'react';
import { IViewportCallbackTypes, NCallbacks, vevet } from 'vevet';

export type TUseOnResizeTarget = keyof IViewportCallbackTypes;

export interface IUseOnResizeSettings
  extends Omit<NCallbacks.ISettings, 'isProtected'> {
  /** Viewport target. */
  target?: TUseOnResizeTarget;

  /**
   * If true, uses an optimized target for mobile devices.
   * @default true
   */
  isMobileOptimizedTarget?: boolean;
}

/**
 * Custom React hook that listens for viewport resize events.
 * The effect callback is called both on mount and resize.
 *
 * @example
 * const MyComponent = () => {
 *   useOnResize(() => {
 *     console.log('Viewport resized!');
 *   }, []);
 *
 *   return <div>Resize the viewport to see the effect!</div>;
 * };
 */
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
