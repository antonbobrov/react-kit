import { getHookEventElement } from '@utils/internal/getHookEventElement';
import {
  IUseEventListenerSettings,
  useEventListener,
} from './useEventListener';
import { THookEventElement } from '../types';

export interface IUseScrollLockProps extends IUseEventListenerSettings {}

/**
 * Custom React hook that disables scrolling for a specified element or window.
 *
 * This hook listens for `scroll` events on the specified element or window,
 * and when a scroll event occurs, it resets the scroll position to the top
 * left corner, effectively preventing any scrolling from occurring.
 *
 * @param ref - A reference to the target element or window to lock scrolling on.
 * @param props - Optional settings for managing the event listener behavior.
 *
 * @example
 * const MyComponent = () => {
 *   const ref = useRef<HTMLDivElement>(null);
 *
 *   useScrollLock(ref);
 *
 *   return <div ref={ref} style={{ overflow: 'auto', height: '200px' }}>Scrollable Content</div>;
 * };
 */
export function useScrollLock(
  ref: THookEventElement<Element | Window>,
  props?: IUseScrollLockProps,
) {
  useEventListener({
    ref,
    target: 'scroll',
    listener: () => {
      const element = getHookEventElement(ref);
      if (!element) {
        return;
      }

      element.scrollTo({ top: 0, left: 0, behavior: 'instant' as any });
    },
    ...props,
  });
}
