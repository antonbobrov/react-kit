import { useState } from 'react';
import { THookEventElement } from '@types';
import { useEvent } from './useEvent';
import { useInViewport } from './useInViewport';

export interface IUseOnLazyIntersection {
  /** A reference to the observable element */
  ref: THookEventElement<Element>;

  /** Callback triggered when the element is almost in the viewport */
  onIn?: () => void;

  /**
   * If true, disables the lazy intersection detection.
   * @default false
   */
  isDisabled?: boolean;
}

/**
 * Custom React hook that observes whether the specified element is
 * "almost" within the visible area (viewport).
 *
 * This hook uses the `useInViewport` hook to determine when the element
 * is nearly visible, based on a defined root margin. When the element
 * enters this threshold, the provided callback is executed.
 *
 * @param props - The hook properties.
 *
 * @example
 * const MyComponent = () => {
 *   const ref = useRef<HTMLDivElement>(null);
 *
 *   const { isIn } = useOnLazyIntersection({
 *     ref,
 *     onIn: () => console.log('Element is almost in the viewport!'),
 *   });
 *
 *   return <div ref={ref}>Observe me!</div>;
 * };
 */
export function useOnLazyIntersection({
  ref,
  onIn: onInProp,
  isDisabled,
}: IUseOnLazyIntersection) {
  const onIn = useEvent(onInProp);

  const [isIn, setIsIn] = useState(false);

  useInViewport({
    ref,
    onIn: () => {
      onIn?.();
      setIsIn(true);
    },
    rootMargin: '0% 0% 175% 0%',
    destroyOnIn: true,
    isDisabled,
  });

  return { isIn };
}
