import { useState } from 'react';
import { getHookEventElement } from '@utils/internal/getHookEventElement';
import { useOnElementResize } from './useOnElementResize';
import { THookEventElement } from '../types';

/** Get offset width of an element */
export function useOffsetWidth(ref: THookEventElement<HTMLElement>) {
  const [offsetWidth, setOffsetWidth] = useState(0);

  useOnElementResize(ref, () => {
    const element = getHookEventElement(ref);
    if (!element) {
      return;
    }

    setOffsetWidth(element.offsetWidth);
  });

  return offsetWidth;
}
