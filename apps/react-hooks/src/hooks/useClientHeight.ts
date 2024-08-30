import { useState } from 'react';
import { getHookEventElement } from '@utils/internal/getHookEventElement';
import { useOnElementResize } from './useOnElementResize';
import { THookEventElement } from '../types';

/** Get client height of an element */
export function useClientHeight(ref: THookEventElement<Element>) {
  const [clientHeight, setClientHeight] = useState(0);

  useOnElementResize(ref, () => {
    const element = getHookEventElement(ref);
    if (!element) {
      return;
    }

    setClientHeight(element.clientHeight);
  });

  return clientHeight;
}
