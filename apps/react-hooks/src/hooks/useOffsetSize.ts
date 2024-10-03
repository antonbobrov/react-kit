import { useState } from 'react';
import { getHookEventElement } from '@utils/internal/getHookEventElement';
import { useOnElementResize } from './useOnElementResize';
import { THookEventElement } from '../types';

/**
 * Custom React hook that retrieves the offset size (width and height) of a referenced element.
 *
 * This hook listens for resize events on the specified element and updates
 * the `offsetWidth` and `offsetHeight` states whenever the size of the
 * element changes. The offset size includes padding, scrollbars, and borders,
 * but excludes margins.
 *
 * @param ref - A reference to the element whose offset size is to be measured.
 *
 * @example
 * const MyComponent = () => {
 *   const ref = useRef<HTMLDivElement>(null);
 *   const { offsetWidth, offsetHeight } = useOffsetSize(ref);
 *
 *   return (
 *     <div ref={ref}>
 *       <p>Offset Width: {offsetWidth}px</p>
 *       <p>Offset Height: {offsetHeight}px</p>
 *     </div>
 *   );
 * };
 */
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
