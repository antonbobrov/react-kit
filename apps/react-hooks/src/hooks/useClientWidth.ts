import { useState } from 'react';
import { getHookEventElement } from '@utils/internal/getHookEventElement';
import { useOnElementResize } from './useOnElementResize';
import { THookEventElement } from '../types';

/** Get client width of an element */
export function useClientWidth(ref: THookEventElement<Element>) {
  const [clientWidth, setClientWidth] = useState(0);

  useOnElementResize(ref, () => {
    const element = getHookEventElement(ref);
    if (!element) {
      return;
    }

    setClientWidth(element.clientWidth);
  });

  return clientWidth;
}
