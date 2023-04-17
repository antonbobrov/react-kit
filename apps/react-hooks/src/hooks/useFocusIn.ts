import { useState } from 'react';
import {
  IUseEventListenerSettings,
  useEventListener,
} from './useEventListener';
import { THookEventElement } from '../types';

export interface IUseFocusInProps extends IUseEventListenerSettings {}

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
