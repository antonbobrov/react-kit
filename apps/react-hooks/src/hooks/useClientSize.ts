import { useState } from 'react';
import { getHookEventElement } from '@utils/internal/getHookEventElement';
import { useOnElementResize } from './useOnElementResize';
import { THookEventElement } from '../types';

/**
 * Custom React hook that retrieves the client width and height of an element.
 *
 * This hook listens for resize events on the specified element and updates the
 * `clientWidth` and `clientHeight` states whenever the size of the element changes.
 *
 * @param ref - A reference to the element whose client size is to be measured.
 *
 * @example
 * const MyComponent = () => {
 *   const ref = useRef(null);
 *   const { clientWidth, clientHeight } = useClientSize(ref);
 *
 *   return (
 *     <div ref={ref}>
 *       <p>Width: {clientWidth}px</p>
 *       <p>Height: {clientHeight}px</p>
 *     </div>
 *   );
 * };
 */
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
