import { useState } from 'react';
import { getHookEventElement } from '@utils/internal/getHookEventElement';
import { useOnElementResize } from './useOnElementResize';
import { THookEventElement } from '../types';

/**
 * Custom React hook that retrieves the offset height of a referenced element.
 *
 * This hook listens for resize events on the specified element and updates
 * the `offsetHeight` state whenever the height of the element changes.
 * The offset height includes padding, scrollbars, and borders,
 * but excludes margins.
 *
 * @param ref - A reference to the element whose offset height is to be measured.
 *
 * @example
 * const MyComponent = () => {
 *   const ref = useRef<HTMLDivElement>(null);
 *   const offsetHeight = useOffsetHeight(ref);
 *
 *   return (
 *     <div ref={ref}>
 *       <p>The offset height is: {offsetHeight}px</p>
 *     </div>
 *   );
 * };
 */
export function useOffsetHeight(ref: THookEventElement<HTMLElement>) {
  const [offsetHeight, setOffsetHeight] = useState(0);

  useOnElementResize(ref, () => {
    const element = getHookEventElement(ref);
    if (!element) {
      return;
    }

    setOffsetHeight(element.offsetHeight);
  });

  return offsetHeight;
}
