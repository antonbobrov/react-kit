import { useRef } from 'react';
import { useEvent } from './useEvent';

/** Debounced event function */
export function useDebouncedEvent(effect: () => void, delay: number) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const event = useEvent(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => effect(), delay);
  });

  return event;
}
