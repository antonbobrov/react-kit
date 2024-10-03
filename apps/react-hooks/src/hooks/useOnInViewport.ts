import { useEffect, useState } from 'react';
import { useEvent } from './useEvent';
import { usePropState } from './usePropState';
import {
  IUseIntersectionObserverProps,
  useIntersectionObserver,
} from './useIntersectionObserver';

export interface IUseOnInViewportProps
  extends Omit<IUseIntersectionObserverProps, 'onEntry'> {
  /** Callback triggered when the element enters the viewport */
  onIn?: () => void;

  /** Callback triggered when the element exits the viewport */
  onOut?: () => void;

  /** If true, destroys the observer instance when the element appears in the viewport */
  destroyOnIn?: boolean;
}

/**
 * Custom React hook that observes whether a specified element is within the visible area (viewport).
 *
 * This hook uses the Intersection Observer API to monitor the visibility of an element.
 * It provides callbacks for when the element enters or exits the viewport, and
 * can optionally destroy the observer when the element enters the viewport for the first time.
 *
 * @param props - The hook properties.
 *
 * @example
 * const MyComponent = () => {
 *   const ref = useRef<HTMLDivElement>(null);
 *
 *   const { state } = useOnInViewport({
 *     ref,
 *     onIn: () => console.log('Element is in the viewport!'),
 *     onOut: () => console.log('Element is out of the viewport!'),
 *   });
 *
 *   return <div ref={ref}>Observe me! State: {state}</div>;
 * };
 */
export function useOnInViewport({
  ref,
  onIn: onInProp,
  onOut: onOutProp,
  destroyOnIn,
  isDisabled: isDisabledProp,
  ...props
}: IUseOnInViewportProps) {
  const onIn = useEvent(onInProp);
  const onOut = useEvent(onOutProp);

  const [state, setState] = useState<'in' | 'out' | undefined>();
  const [isDisabled, setIsDisabled] = usePropState(isDisabledProp);

  // Destroy on 'in'
  useEffect(() => {
    if (state === 'in' && destroyOnIn) {
      setIsDisabled(true);
    }
  }, [destroyOnIn, setIsDisabled, state]);

  // Observe the element
  useIntersectionObserver({
    ...props,
    ref,
    onEntry: (entry) => {
      if (entry.isIntersecting) {
        setState('in');
        onIn?.();
      } else {
        setState('out');
        onOut?.();
      }
    },
    isDisabled,
  });

  return { state };
}
