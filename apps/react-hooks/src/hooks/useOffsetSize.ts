import { useState } from 'react';
import { getHookEventElement } from '@utils/internal/getHookEventElement';
import { useOnElementResize } from './useOnElementResize';
import { THookEventElement } from '../types';

/** Get offset sizes of an element */
export function useOffsetSize(ref: THookEventElement<HTMLElement>) {
  const [offsetWidth, setOffsetWidth] = useState(0);
  const [offsetHeight, setOffsetHeight] = useState(0);

  useOnElementResize(ref, () => {
    const element = getHookEventElement(ref);
    if (!element) {
      return;
    }

    setOffsetWidth(element.offsetWidth);
    setOffsetHeight(element.offsetHeight);
  });

  return { offsetWidth, offsetHeight };
}
