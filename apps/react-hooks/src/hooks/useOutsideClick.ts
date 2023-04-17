import { getHookEventElement } from '@utils/internal/getHookEventElement';
import { THookEventElement } from '../types';
import { useEvent } from './useEvent';
import {
  IUseEventListenerSettings,
  useEventListener,
} from './useEventListener';

export type TUseOutsideClickEvent = MouseEvent | TouchEvent;

export interface IUseOutsideClickProps extends IUseEventListenerSettings {}

export function useOutsideClick(
  ref: THookEventElement<Element>,
  callback: (event: TUseOutsideClickEvent) => void,
  props?: IUseOutsideClickProps
) {
  const callbackEvent = useEvent(callback);

  useEventListener({
    ref: typeof document !== 'undefined' ? document : null,
    target: 'mousedown',
    listener: (event) => {
      const element = getHookEventElement(ref);
      if (!element) {
        return;
      }

      if (!element.contains(event?.target as Node) && event.which === 1) {
        callbackEvent(event);
      }
    },
    ...props,
  });
}
