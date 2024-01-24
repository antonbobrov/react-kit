import { useEffect, useState } from 'react';
import { useEvent } from './useEvent';
import { usePropState } from './usePropState';
import {
  IUseIntersectionObserverProps,
  useIntersectionObserver,
} from './useIntersectionObserver';

export interface IUseOnInViewportProps
  extends Omit<IUseIntersectionObserverProps, 'onEntry'> {
  /** Event when element is in viewport */
  onIn?: () => void;
  /** Event when element is out of viewport */
  onOut?: () => void;
  /** Destroy observable instance when the element once appears into viewport */
  destroyOnIn?: boolean;
}

/**
 * Observe whether the element is in the visible area
 */
export function useOnInViewport({
  ref,
  onIn: onInProp,
  onOut: onOutProp,
  onFallback,
  destroyOnIn,
  isDisabled: isDisabledProp,
  ...props
}: IUseOnInViewportProps) {
  const onIn = useEvent(onInProp);
  const onOut = useEvent(onOutProp);

  const [state, setState] = useState<'in' | 'out' | undefined>();
  const [isDisabled, setIsDisabled] = usePropState(isDisabledProp);

  // disable on 'in'
  useEffect(() => {
    if (state === 'in' && destroyOnIn) {
      setIsDisabled(true);
    }
  }, [destroyOnIn, setIsDisabled, state]);

  // observe the element
  useIntersectionObserver({
    ...props,
    ref,
    onFallback: () => {
      setState('in');
      onFallback?.();
    },
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
