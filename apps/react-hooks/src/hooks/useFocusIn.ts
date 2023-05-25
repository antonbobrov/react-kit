import { useState } from 'react';
import {
  IUseEventListenerSettings,
  useEventListener,
} from './useEventListener';
import { THookEventElement } from '../types';

export interface IUseFocusInProps extends IUseEventListenerSettings {}

/**
 * Hook for focus detection
 * @see https://developer.mozilla.org/docs/Web/API/Element/focusin_event
 */
export function useFocusIn(ref: THookEventElement, props?: IUseFocusInProps) {
  const [isFocused, setIsFocused] = useState(false);

  useEventListener({
    ref,
    target: 'focusin',
    listener: () => setIsFocused(true),
    ...props,
  });

  useEventListener({
    ref,
    target: 'focusout',
    listener: () => setIsFocused(false),
    ...props,
  });

  return isFocused;
}
