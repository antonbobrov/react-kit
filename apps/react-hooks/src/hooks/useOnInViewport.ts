/* eslint-disable no-underscore-dangle */
import { THookEventElement } from '@types';
import { isIntersectionObserverSupported } from '@utils/api';
import { isBrowser } from '@utils/env';
import { useEffect, useId, useState } from 'react';
import { isUndefined } from '@utils/types';
import { getHookEventElement } from '@utils/internal/getHookEventElement';
import { useEvent } from './useEvent';

interface ICallback {
  id: string;
  state: 'in' | 'out';
  callback: () => void;
}

interface IElement extends Element {
  _useOnInViewportCallbacks?: ICallback[];
}

const observer =
  isBrowser && isIntersectionObserverSupported()
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const element = entry.target as IElement;

            if (entry.isIntersecting) {
              element._useOnInViewportCallbacks
                ?.filter(({ state }) => state === 'in')
                .forEach(({ callback }) => callback());
            }

            if (!entry.isIntersecting) {
              element._useOnInViewportCallbacks
                ?.filter(({ state }) => state === 'out')
                .forEach(({ callback }) => callback());
            }
          });
        },
        {
          root: null,
          threshold: 0,
          rootMargin: '0px 0px 0px 0px',
        }
      )
    : null;

export interface IUseOnInViewportProps {
  ref: THookEventElement<Element>;
  onIn?: () => void;
  onOut?: () => void;
  /** Triggered when IntersectionObserver is not supported */
  onFallback?: () => void;
  destroyOnIn?: boolean;
  isDisabled?: boolean;
}

/**
 * Observe whether the element is in the visible area
 */
export function useOnInViewport({
  ref,
  onIn: onInProp,
  onOut: onOutProp,
  onFallback: onFallbackProp,
  destroyOnIn,
  isDisabled,
}: IUseOnInViewportProps) {
  const id = useId();

  const onIn = useEvent(onInProp);
  const onOut = useEvent(onOutProp);
  const onFallback = useEvent(onFallbackProp);

  const [state, setState] = useState<'in' | 'out' | undefined>();

  useEffect(() => {
    if (isDisabled) {
      return undefined;
    }

    const element = getHookEventElement(ref) as IElement;
    if (!element) {
      return undefined;
    }

    if (!observer) {
      onFallback?.();

      return undefined;
    }

    // create array of callbacks if it doesnt exist yet
    if (
      isUndefined(element._useOnInViewportCallbacks) ||
      !Array.isArray(element._useOnInViewportCallbacks)
    ) {
      element._useOnInViewportCallbacks = [];
    }

    // add IN-callback
    element._useOnInViewportCallbacks.push({
      id,
      state: 'in',
      callback: () => {
        setState('in');
        onIn?.();

        if (destroyOnIn) {
          observer.unobserve(element);
        }
      },
    });

    // add OUT-callback
    element._useOnInViewportCallbacks.push({
      id,
      state: 'out',
      callback: () => {
        setState('out');
        onOut?.();
      },
    });

    // observe element
    observer.observe(element);

    return () => {
      element._useOnInViewportCallbacks =
        element._useOnInViewportCallbacks?.filter(
          (callback) => callback.id !== id
        );

      observer.unobserve(element);
    };
  }, [destroyOnIn, id, onFallback, onIn, onOut, ref, isDisabled]);

  return { state };
}
