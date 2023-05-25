import { THookEventElement } from '@types';
import { EffectCallback, useEffect, useRef } from 'react';
import { getHookEventElement } from '@utils/internal/getHookEventElement';
import { useEvent } from './useEvent';

export interface IUseOnResizeSettings {
  /** The hook is disabled */
  isDisabled?: boolean;
  /**
   * Debounce delay
   * @default 10
   */
  delay?: number;
}

/**
 * Hook for element resize detection
 * @see https://developer.mozilla.org/docs/Web/API/ResizeObserver
 */
export function useOnElementResize(
  ref: THookEventElement<Element>,
  effectProp: EffectCallback,
  settings?: IUseOnResizeSettings
) {
  const isDisabled = settings?.isDisabled;
  const delay = settings?.delay ?? 10;

  const effect = useEvent(effectProp);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const element = getHookEventElement(ref);
    if (!element || isDisabled) {
      return undefined;
    }

    let destructor: ReturnType<EffectCallback> | null;

    const resizeObserver = new ResizeObserver(() => {
      destructor?.();

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        destructor = effect();
      }, delay);
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      destructor?.();
    };
  }, [delay, effect, isDisabled, ref]);
}
