import { useState } from 'react';
import { getHookEventElement } from '@utils/internal/getHookEventElement';
import { useOnElementResize } from './useOnElementResize';
import { THookEventElement } from '../types';

/**
 * Custom React hook that retrieves the client width of an element.
 *
 * This hook listens for resize events on the specified element and updates the
 * `clientWidth` state whenever the width of the element changes.
 *
 * @param ref - A reference to the element whose client width is to be measured.
 *
 * @example
 * const MyComponent = () => {
 *   const ref = useRef(null);
 *   const clientWidth = useClientWidth(ref);
 *
 *   return (
 *     <div ref={ref}>
 *       <p>The width of this element is: {clientWidth}px</p>
 *     </div>
 *   );
 * };
 */
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
