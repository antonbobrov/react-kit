import { useState } from 'react';
import { getHookEventElement } from '@utils/internal/getHookEventElement';
import { useOnElementResize } from './useOnElementResize';
import { THookEventElement } from '../types';

export function useClientSize(ref: THookEventElement<Element>) {
  const [clientWidth, setClientWidth] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  useOnElementResize(ref, () => {
    const element = getHookEventElement(ref);
    if (!element) {
      return;
    }

    setClientWidth(element.clientWidth);
    setClientHeight(element.clientHeight);
  });

  return { clientWidth, clientHeight };
}
