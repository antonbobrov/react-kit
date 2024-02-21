import { useState } from 'react';
import { THookEventElement } from '@types';
import { useEvent } from './useEvent';
import { useOnInViewport } from './useOnInViewport';

export interface IUseOnLazyIntersection {
  /** Observable element */
  ref: THookEventElement<Element>;
  /** Event when element is almost in viewport */
  onIn?: () => void;
  /**
   * The hook is disabled
   * @default false
   */
  isDisabled?: boolean;
}

/**
 * Observe whether the element is `almost` in the visible area
 */
export function useOnLazyIntersection({
  ref,
  onIn: onInProp,
  isDisabled,
}: IUseOnLazyIntersection) {
  const onIn = useEvent(onInProp);

  const [isIn, setIsIn] = useState(false);

  useOnInViewport({
    ref,
    onIn: () => {
      onIn?.();
      setIsIn(true);
    },
    onFallback: () => {
      onIn?.();
      setIsIn(true);
    },
    rootMargin: '0% 175% 175% 0%',
    destroyOnIn: true,
    isDisabled,
  });

  return { isIn };
}
