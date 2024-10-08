import {
  IUseEventListenerSettings,
  THookEventElement,
  useEventListener,
} from '@anton.bobrov/react-hooks';
import { useState } from 'react';
import { vevet } from 'vevet';

export interface IUseNonMobilePointerHoverProps
  extends IUseEventListenerSettings {}

/**
 * Custom React hook for detecting pointer hover state on non-mobile devices.
 *
 * @example
 * const MyComponent = () => {
 *   const ref = useRef<HTMLDivElement>(null);
 *   const isHovered = useNonMobilePointerHover(ref);
 *
 *   return (
 *     <div ref={ref} style={{ backgroundColor: isHovered ? 'lightblue' : 'white' }}>
 *       Hover over me!
 *     </div>
 *   );
 * };
 */
export function useNonMobilePointerHover(
  ref: THookEventElement,
  props?: IUseNonMobilePointerHoverProps,
) {
  const [isHovered, setIsHovered] = useState(false);

  useEventListener({
    ref,
    target: 'pointerenter',
    listener: () => setIsHovered(true),
    getIsDisabled: () => vevet.isMobile,
    ...props,
  });

  useEventListener({
    ref,
    target: 'pointerleave',
    listener: () => setIsHovered(false),
    getIsDisabled: () => vevet.isMobile,
    ...props,
  });

  return isHovered;
}
