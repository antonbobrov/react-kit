import { getHookEventElement } from '@utils/internal/getHookEventElement';
import { THookEventElement } from '../types';
import { useEvent } from './useEvent';
import {
  IUseEventListenerSettings,
  useEventListener,
} from './useEventListener';

export type TUseOutsideClickEvent = MouseEvent;

export interface IUseOutsideClickProps extends IUseEventListenerSettings {}

/**
 * Custom React hook that detects clicks outside a specified element.
 *
 * This hook listens for `mousedown` events on the document. If a click
 * occurs outside of the referenced element, the provided callback
 * function is executed. It is useful for implementing dropdowns, modals,
 * or any UI element that requires detecting clicks outside to close or
 * hide the element.
 *
 * @param ref - A reference to the element to monitor for outside clicks.
 * @param callback - The callback function to be called when an outside click is detected.
 * @param props - Optional settings for managing the event listener behavior.
 *
 * @example
 * const MyComponent = () => {
 *   const ref = useRef<HTMLDivElement>(null);
 *
 *   const handleOutsideClick = (event: MouseEvent) => {
 *     console.log('Clicked outside:', event);
 *   };
 *
 *   useOutsideClick(ref, handleOutsideClick);
 *
 *   return <div ref={ref}>Click outside me!</div>;
 * };
 */
export function useOutsideClick(
  ref: THookEventElement<Element>,
  callback: (event: TUseOutsideClickEvent) => void,
  props?: IUseOutsideClickProps,
) {
  const callbackEvent = useEvent(callback);

  useEventListener({
    ref: typeof document !== 'undefined' ? document : null,
    target: 'mousedown',
    listener: (event) => {
      const element = getHookEventElement(ref);
      if (!element) {
        return;
      }

      if (!element.contains(event?.target as Node) && event.which === 1) {
        callbackEvent(event);
      }
    },
    ...props,
  });
}
