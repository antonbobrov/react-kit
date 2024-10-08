import { useState } from 'react';
import {
  IUseEventListenerSettings,
  useEventListener,
} from './useEventListener';
import { THookEventElement } from '../types';

export interface IUsePointerHoverProps extends IUseEventListenerSettings {}

/**
 * Custom React hook for detecting pointer hover state over a referenced element.
 *
 * This hook listens for `pointerenter` and `pointerleave` events on the specified
 * element and updates the `isHovered` state accordingly. It returns a boolean value
 * indicating whether the pointer is currently hovering over the element.
 *
 * @param ref - A reference to the target element to monitor for hover events.
 * @param props - Optional settings for managing event listener behavior.
 *
 * @example
 * const MyComponent = () => {
 *   const ref = useRef<HTMLDivElement>(null);
 *   const isHovered = usePointerHover(ref);
 *
 *   return (
 *     <div ref={ref} style={{ background: isHovered ? 'lightblue' : 'lightgray' }}>
 *       {isHovered ? 'Hovered!' : 'Hover over me!'}
 *     </div>
 *   );
 * };
 */
export function usePointerHover(
  ref: THookEventElement,
  props?: IUsePointerHoverProps,
) {
  const [isHovered, setIsHovered] = useState(false);

  useEventListener({
    ref,
    target: 'pointerenter',
    listener: () => setIsHovered(true),
    ...props,
  });

  useEventListener({
    ref,
    target: 'pointerleave',
    listener: () => setIsHovered(false),
    ...props,
  });

  return isHovered;
}
