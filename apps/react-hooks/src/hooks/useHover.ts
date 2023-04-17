import { useState } from 'react';
import {
  IUseEventListenerSettings,
  useEventListener,
} from './useEventListener';
import { THookEventElement } from '../types';

export interface IUseHoverProps extends IUseEventListenerSettings {}

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
