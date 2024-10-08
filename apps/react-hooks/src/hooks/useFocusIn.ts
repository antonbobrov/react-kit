import { useState } from 'react';
import {
  IUseEventListenerSettings,
  useEventListener,
} from './useEventListener';
import { THookEventElement } from '../types';

export interface IUseFocusInProps extends IUseEventListenerSettings {}

/**
 * Custom React hook for detecting focus-in and focus-out events on a referenced element.
 *
 * This hook listens for `focusin` and `focusout` events on the specified element
 * and updates the `isFocused` state accordingly. It returns a boolean value
 * indicating whether the element is currently focused.
 *
 * @param ref - A reference to the target element to monitor for focus events.
 * @param props - Optional settings for managing event listener behavior.
 *
 * @example
 * const MyComponent = () => {
 *   const ref = useRef<HTMLInputElement>(null);
 *   const isFocused = useFocusIn(ref);
 *
 *   return (
 *     <input
 *       ref={ref}
 *       type="text"
 *       placeholder={isFocused ? 'Input is focused' : 'Input is not focused'}
 *       onFocus={() => console.log('Input focused')}
 *       onBlur={() => console.log('Input blurred')}
 *     />
 *   );
 * };
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
