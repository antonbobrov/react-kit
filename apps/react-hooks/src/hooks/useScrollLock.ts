import { getHookEventElement } from '@utils/internal/getHookEventElement';
import {
  IUseEventListenerSettings,
  useEventListener,
} from './useEventListener';
import { THookEventElement } from '../types';

export interface IUseScrollLockProps extends IUseEventListenerSettings {}

/** Disable element scrolling */
export function useScrollLock(
  ref: THookEventElement<Element>,
  props?: IUseScrollLockProps
) {
  useEventListener({
    ref,
    target: 'scroll',
    listener: () => {
      const element = getHookEventElement(ref);
      if (!element) {
        return;
      }

      element.scrollLeft = 0;
      element.scrollTop = 0;
    },
    ...props,
  });
}
