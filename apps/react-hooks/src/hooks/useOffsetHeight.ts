import { useState } from 'react';
import { getHookEventElement } from '@utils/internal/getHookEventElement';
import { useOnElementResize } from './useOnElementResize';
import { THookEventElement } from '../types';

/** Get offset height of an element */
export function useOffsetHeight(ref: THookEventElement<HTMLElement>) {
  const [offsetHeight, setOffsetHeight] = useState(0);

  useOnElementResize(ref, () => {
    const element = getHookEventElement(ref);
    if (!element) {
      return;
    }

    setOffsetHeight(element.offsetHeight);
  });

  return offsetHeight;
}
