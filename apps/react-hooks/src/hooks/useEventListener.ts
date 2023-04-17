import { useEffect } from 'react';
import { addEventListener } from '@utils/dom';
import { getHookEventElement } from '@utils/internal/getHookEventElement';
import { THookEventElement } from '../types';
import { useEvent } from './useEvent';

export interface IUseEventListenerSettings {
  /** The hook is disabled */
  isDisabled?: boolean;
  /** Define if the hook must be disabled */
  getIsDisabled?: () => boolean;
}

export interface IUseEventListenerProps<T, L>
  extends IUseEventListenerSettings {
  ref: THookEventElement;
  target: T;
  listener: L;
  options?: boolean | AddEventListenerOptions;
}

export function useEventListener<
  Target extends keyof HTMLElementEventMap,
  Listener extends (event: DocumentEventMap[Target]) => void
>({
  ref,
  target,
  listener,
  options,
  isDisabled,
  getIsDisabled: getIsDisabledProp,
}: IUseEventListenerProps<Target, Listener>) {
  const getIsDisabled = useEvent(getIsDisabledProp);

  useEffect(() => {
    const isGetDisabled = getIsDisabled ? getIsDisabled() : false;

    if (isDisabled || isGetDisabled) {
      return undefined;
    }

    const element = getHookEventElement(ref);
    if (!element) {
      return undefined;
    }

    return addEventListener(element, target, listener, options);
  }, [listener, options, ref, isDisabled, target, getIsDisabled]);
}
