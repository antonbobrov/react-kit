import {
  IUseEventListenerSettings,
  THookEventElement,
  useEventListener,
} from '@anton.bobrov/react-hooks';
import { vevet } from '@anton.bobrov/vevet-init';
import { useState } from 'react';

export interface IUseNonMobileHoverProps
  extends Omit<IUseEventListenerSettings, 'getIsDisabled'> {}

export function useNonMobileHover(
  ref: THookEventElement,
  props?: IUseNonMobileHoverProps
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
