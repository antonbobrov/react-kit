import { useState } from 'react';
import {
  IUseEventListenerSettings,
  useEventListener,
} from './useEventListener';
import { THookEventElement } from '../types';

export interface IUseFocusProps extends IUseEventListenerSettings {}

export function useFocus(ref: THookEventElement, props?: IUseFocusProps) {
  const [isFocused, setIsFocused] = useState(false);

  useEventListener({
    ref,
    target: 'focus',
    listener: () => setIsFocused(true),
    ...props,
  });

  useEventListener({
    ref,
    target: 'blur',
    listener: () => setIsFocused(false),
    ...props,
  });

  return isFocused;
}
