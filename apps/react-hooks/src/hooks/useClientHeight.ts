import { useState } from 'react';
import { getHookEventElement } from '@utils/internal/getHookEventElement';
import { useOnElementResize } from './useOnElementResize';
import { THookEventElement } from '../types';

/**
 * Custom React hook that retrieves the client height of an element.
 *
 * This hook listens for resize events on the specified element and updates the
 * `clientHeight` state whenever the height of the element changes.
 *
 * @param ref - A reference to the element whose client height is to be measured.
 *
 * @example
 * const MyComponent = () => {
 *   const ref = useRef(null);
 *   const height = useClientHeight(ref);
 *
 *   return (
 *     <div ref={ref}>
 *       <p>The height of this element is: {height}px</p>
 *     </div>
 *   );
 * };
 */
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
