import {
  IUseEventListenerSettings,
  THookEventElement,
  useEventListener,
} from '@anton.bobrov/react-hooks';
import { vevet } from '@anton.bobrov/vevet-init';
import { useState } from 'react';

export interface IUseNonMobilePointerHoverProps
  extends IUseEventListenerSettings {}

/**
 * Hook for hover detection (**non-mobile devices only**)
 * @see https://developer.mozilla.org/docs/Web/API/Element/pointerenter_event
 */
export function useNonMobilePointerHover(
  ref: THookEventElement,
  props?: IUseNonMobilePointerHoverProps
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
