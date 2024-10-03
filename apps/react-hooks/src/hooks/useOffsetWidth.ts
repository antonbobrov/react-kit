import { useState } from 'react';
import { getHookEventElement } from '@utils/internal/getHookEventElement';
import { useOnElementResize } from './useOnElementResize';
import { THookEventElement } from '../types';

/**
 * Custom React hook that retrieves the offset width of a referenced element.
 *
 * This hook listens for resize events on the specified element and updates
 * the `offsetWidth` state whenever the width of the element changes.
 * The offset width includes padding, scrollbars, and borders,
 * but excludes margins.
 *
 * @param ref - A reference to the element whose offset width is to be measured.
 *
 * @example
 * const MyComponent = () => {
 *   const ref = useRef<HTMLDivElement>(null);
 *   const offsetWidth = useOffsetWidth(ref);
 *
 *   return (
 *     <div ref={ref}>
 *       <p>Offset Width: {offsetWidth}px</p>
 *     </div>
 *   );
 * };
 */
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
