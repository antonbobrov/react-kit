import { THookEventElement } from '@types';
import { useEvent } from './useEvent';
import {
  IUseEventListenerSettings,
  useEventListener,
} from './useEventListener';

export interface IUseOnEscapeProps extends IUseEventListenerSettings {
  /** A reference to the element to listen for the keydown event. */
  ref: THookEventElement;
}

/**
 * Custom React hook that detects when the `Esc` key is pressed.
 *
 * This hook listens for the `keydown` event on the specified element
 * or the window if no element is specified. When the `Esc` key
 * (key code 27) is pressed, the provided callback function is executed.
 *
 * @param callback - The callback function to execute when the `Esc` key is pressed.
 * @param options - Optional settings for managing the event listener behavior.
 *
 * @example
 * const MyComponent = () => {
 *   const handleEscape = () => {
 *     console.log('Escape key pressed!');
 *   };
 *
 *   useOnEscape(handleEscape);
 *
 *   return <div>Press the `Esc` key!</div>;
 * };
 */
export function useOnEscape(callback: () => void, options?: IUseOnEscapeProps) {
  const callbackEvent = useEvent(callback);

  const defaultElement = typeof window !== 'undefined' ? window : null;

  useEventListener({
    ...options,
    ref: options?.ref ?? defaultElement,
    target: 'keydown',
    listener: (event) => {
      if (event.keyCode === 27) {
        callbackEvent();
      }
    },
  });
}
