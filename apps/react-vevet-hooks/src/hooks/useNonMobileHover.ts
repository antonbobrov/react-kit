import {
  IUseEventListenerSettings,
  THookEventElement,
  useEventListener,
} from '@anton.bobrov/react-hooks';
import { useState } from 'react';
import { vevet } from 'vevet';

export interface IUseNonMobileHoverProps
  extends Omit<IUseEventListenerSettings, 'getIsDisabled'> {}

/**
 * Custom React hook for detecting hover state on non-mobile devices.
 *
 * @example
 * const MyComponent = () => {
 *   const ref = useRef<HTMLDivElement>(null);
 *   const isHovered = useNonMobileHover(ref);
 *
 *   return (
 *     <div ref={ref} style={{ backgroundColor: isHovered ? 'lightblue' : 'white' }}>
 *       Hover over me!
 *     </div>
 *   );
 * };
 */
export function useNonMobileHover(
  ref: THookEventElement,
  props?: IUseNonMobileHoverProps,
) {
  const [isHovered, setIsHovered] = useState(false);

  useEventListener({
    ref,
    target: 'mouseenter',
    listener: () => setIsHovered(true),
    getIsDisabled: () => vevet.isMobile,
    ...props,
  });

  useEventListener({
    ref,
    target: 'mouseleave',
    listener: () => setIsHovered(false),
    getIsDisabled: () => vevet.isMobile,
    ...props,
  });

  return isHovered;
}
