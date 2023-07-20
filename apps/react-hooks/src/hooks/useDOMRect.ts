import { addEventListener } from '@utils/dom';
import { RefObject, useCallback, useEffect, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export interface IUseDomRectProps {
  ref: RefObject<HTMLElement>;
  isDisabled?: boolean;
}

/** `getBoundingClientRect` */
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
