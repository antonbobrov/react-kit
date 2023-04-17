import { RefObject } from 'react';
import { useEvent } from './useEvent';
import { useEventListener } from './useEventListener';

export function useLiteInteraction(
  ref: RefObject<Element>,
  effect: () => void
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
