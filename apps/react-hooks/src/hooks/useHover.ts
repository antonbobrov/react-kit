import { useState } from 'react';
import {
  IUseEventListenerSettings,
  useEventListener,
} from './useEventListener';
import { THookEventElement } from '../types';

export interface IUseHoverProps extends IUseEventListenerSettings {}

/**
 * Custom React hook for detecting hover state over a referenced element.
 *
 * This hook listens for `mouseenter` and `mouseleave` events on the specified
 * element and updates the `isHovered` state accordingly. It returns a boolean
 * value indicating whether the element is currently being hovered over.
 *
 * @param ref - A reference to the target element to monitor for hover events.
 * @param props - Optional settings for managing event listener behavior.
 *
 * @example
 * const MyComponent = () => {
 *   const ref = useRef<HTMLDivElement>(null);
 *   const isHovered = useHover(ref);
 *
 *   return (
 *     <div ref={ref} style={{ background: isHovered ? 'lightblue' : 'lightgray' }}>
 *       {isHovered ? 'Hovering!' : 'Hover over me!'}
 *     </div>
 *   );
 * };
 */
export function useHover(ref: THookEventElement, props?: IUseHoverProps) {
  const [isHovered, setIsHovered] = useState(false);

  useEventListener({
    ref,
    target: 'mouseenter',
    listener: () => setIsHovered(true),
    ...props,
  });

  useEventListener({
    ref,
    target: 'mouseleave',
    listener: () => setIsHovered(false),
    ...props,
  });

  return isHovered;
}
