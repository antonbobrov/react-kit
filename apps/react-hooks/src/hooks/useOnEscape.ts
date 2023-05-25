import { THookEventElement } from '@types';
import { useEvent } from './useEvent';
import {
  IUseEventListenerSettings,
  useEventListener,
} from './useEventListener';

export interface IUseOnEscapeProps extends IUseEventListenerSettings {
  /** Element ref */
  ref: THookEventElement;
}

/** Detect when `Esc` key is pressed */
export function useOnEscape(callback: () => void, options?: IUseOnEscapeProps) {
  const callbackEvent = useEvent(callback);

  const defaultElement = typeof window !== 'undefined' ? window : null;

  useEventListener({
    ...options,
    ref: options?.ref ?? defaultElement,
    target: 'keydown',
    listener: (event) => {
      if (event.keyCode === 27) {
        callbackEvent();
      }
    },
  });
}
