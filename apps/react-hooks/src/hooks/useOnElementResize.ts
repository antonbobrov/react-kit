import { THookEventElement } from '@types';
import { EffectCallback, useEffect, useRef } from 'react';
import { getHookEventElement } from '@utils/internal/getHookEventElement';
import { useEvent } from './useEvent';

export interface IUseOnResizeSettings {
  /** If true, disables the resize detection. */
  isDisabled?: boolean;

  /**
   * Debounce delay in milliseconds.
   * @default 10
   */
  delay?: number;
}

/**
 * Custom React hook that detects resize events on a specified element.
 *
 * This hook utilizes the `ResizeObserver` API to listen for changes in the
 * dimensions of the referenced element. It executes the provided effect
 * callback whenever the element is resized, with an optional debounce
 * delay to limit the frequency of calls.
 *
 * @param ref - A reference to the target element to observe for resizing.
 * @param effectProp - The effect callback to be executed when the element is resized.
 * @param settings - Optional settings for managing the behavior of the hook.
 *
 * @example
 * const MyComponent = () => {
 *   const ref = useRef<HTMLDivElement>(null);
 *   const handleResize = () => {
 *     console.log('Element resized');
 *   };
 *
 *   useOnElementResize(ref, handleResize, { delay: 100 });
 *
 *   return <div ref={ref} style={{ width: '100%', height: '100px' }}>Resize me!</div>;
 * };
 */
export function useOnElementResize(
  ref: THookEventElement<Element>,
  effectProp: EffectCallback,
  settings?: IUseOnResizeSettings,
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
