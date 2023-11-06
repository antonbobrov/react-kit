import { useState } from 'react';
import {
  IUseEventListenerSettings,
  useEventListener,
} from './useEventListener';
import { THookEventElement } from '../types';

export interface IUsePointerHoverProps extends IUseEventListenerSettings {}

/**
 * Hook for hover detection
 * @see https://developer.mozilla.org/docs/Web/API/Element/pointerenter_event
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
