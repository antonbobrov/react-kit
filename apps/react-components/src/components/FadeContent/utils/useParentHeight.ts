import { useEvent } from '@anton.bobrov/react-hooks';
import { RefObject, useRef } from 'react';

export function useParentHeight(ref: RefObject<HTMLElement>) {
  const currentHeightRef = useRef(0);

  const save = useEvent(() => {
    const parent = ref.current;
    if (!parent) {
      return;
    }

    currentHeightRef.current = parent.clientHeight;
    parent.style.height = `${currentHeightRef.current}px`;
  });

  const reset = useEvent(() => {
    const parent = ref.current;
    if (!parent) {
      return;
    }

    currentHeightRef.current = 0;
    parent.style.height = '';
  });

  const interpolate = useEvent((targetHeight: number, progress: number) => {
    const parent = ref.current;
    if (!parent) {
      return;
    }

    const startHeight = currentHeightRef.current;
    const difference = targetHeight - startHeight;
    const height = startHeight + difference * progress;

    parent.style.height = `${height}px`;
  });

  return { save, reset, interpolate };
}
