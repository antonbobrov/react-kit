import { RefObject } from 'react';
import { useEvent } from './useEvent';
import { useEventListener } from './useEventListener';

/**
 * Custom React hook that detects user interaction with a specified element.
 *
 * This hook listens for both `touchstart` and `mousedown` events on the
 * provided reference element and triggers the specified effect when
 * these events occur. It is useful for detecting user interactions
 * in both touch and mouse environments.
 *
 * @param ref - A reference to the target element to monitor for user interaction.
 * @param effect - The effect callback to be executed when the interaction is detected.
 *
 * @example
 * const MyComponent = () => {
 *   const ref = useRef<HTMLDivElement>(null);
 *
 *   const handleInteraction = () => {
 *     console.log('User interacted with the element!');
 *   };
 *
 *   useLiteInteraction(ref, handleInteraction);
 *
 *   return <div ref={ref}>Interact with me!</div>;
 * };
 */
export function useLiteInteraction(
  ref: RefObject<Element>,
  effect: () => void,
) {
  const event = useEvent(effect);

  useEventListener({
    ref,
    target: 'touchstart',
    listener: event,
  });

  useEventListener({
    ref,
    target: 'mousedown',
    listener: event,
  });
}
