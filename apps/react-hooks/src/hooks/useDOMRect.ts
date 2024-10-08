import { addEventListener } from '@utils/dom';
import { RefObject, useCallback, useEffect, useState } from 'react';

export interface IUseDomRectProps {
  /** A reference to the target HTMLElement whose DOMRect is to be retrieved. */
  ref: RefObject<HTMLElement>;

  /** If true, disables the updates of the DOMRect. */
  isDisabled?: boolean;
}

/**
 * Custom React hook that retrieves the DOMRect of a referenced element.
 *
 * This hook utilizes the `getBoundingClientRect` method to obtain the size
 * and position of the element referenced by the provided `ref`. It automatically
 * updates the rect on window resize and scroll events, as well as when the
 * element itself resizes.
 *
 * @example
 * const MyComponent = () => {
 *   const ref = useRef<HTMLDivElement>(null);
 *   const rect = useDOMRect({ ref });
 *
 *   return (
 *     <div ref={ref}>
 *       <p>The element's position: {rect ? `${rect.x}, ${rect.y}` : 'Loading...'}</p>
 *     </div>
 *   );
 * };
 */
export function useDOMRect({
  ref,
  isDisabled,
}: IUseDomRectProps): DOMRect | undefined {
  const [rect, setRect] = useState<DOMRect>();

  const updatePosition = useCallback(() => {
    if (!ref.current) {
      return;
    }

    setRect(ref.current.getBoundingClientRect());
  }, [ref]);

  useEffect(() => {
    const element = ref.current;
    if (isDisabled) {
      return undefined;
    }

    updatePosition();

    const scrollListener = addEventListener(window, 'scroll', updatePosition);
    const resizeListener = addEventListener(window, 'resize', updatePosition);

    let resizeObserver: ResizeObserver | null;
    if (element) {
      resizeObserver = new ResizeObserver(updatePosition);
      resizeObserver.observe(element);
    }

    return () => {
      scrollListener();
      resizeListener();
      resizeObserver?.disconnect();
    };
  }, [ref, isDisabled, updatePosition]);

  return rect;
}
