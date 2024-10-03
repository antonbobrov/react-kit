import { useState } from 'react';
import {
  IUseEventListenerSettings,
  useEventListener,
} from './useEventListener';
import { THookEventElement } from '../types';

export interface IUseFocusProps extends IUseEventListenerSettings {}

/**
 * Custom React hook for detecting focus state of a referenced element.
 *
 * This hook listens for `focus` and `blur` events on the specified element
 * and updates the `isFocused` state accordingly. It returns a boolean value
 * indicating whether the element is currently focused.
 *
 * @param ref - A reference to the target element to monitor for focus.
 * @param props - Optional settings for managing event listener behavior.
 *
 * @example
 * const MyComponent = () => {
 *   const ref = useRef<HTMLInputElement>(null);
 *   const isFocused = useFocus(ref);
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
