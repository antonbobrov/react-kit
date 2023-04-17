import { RefObject, useEffect } from 'react';
import { resetFocus, selectFocusableChildren } from '@utils/dom';
import {
  IUseEventListenerSettings,
  useEventListener,
} from './useEventListener';

export interface IUseFocusTrapProps
  extends Pick<IUseEventListenerSettings, 'isDisabled'> {}

export function useFocusTrap(
  ref: RefObject<HTMLElement>,
  options: IUseFocusTrapProps = {}
) {
  const { isDisabled } = options;

  useEffect(() => {
    const prevActiveElement =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    setTimeout(() => {
      const { current: parent } = ref;
      if (!parent || isDisabled) {
        return;
      }

      const focusableChildren = selectFocusableChildren(parent);
      const firstFocusable = focusableChildren.item(0);

      if (!firstFocusable) {
        resetFocus();
      }

      firstFocusable?.focus();
    }, 0);

    return () => {
      prevActiveElement?.focus();
    };
  }, [isDisabled, ref]);

  useEventListener({
    ref,
    target: 'keydown',
    listener: (event) => {
      const { current: element } = ref;

      if (event.key !== 'Tab' || !element || isDisabled) {
        return;
      }

      const focusableChildren = selectFocusableChildren(element);
      const firstFocusable = focusableChildren.item(0);
      const lastFocusable = focusableChildren.item(
        focusableChildren.length - 1
      );

      switch (document.activeElement) {
        case lastFocusable: {
          event.preventDefault();
          firstFocusable.focus();
          break;
        }

        case firstFocusable: {
          if (event.shiftKey) {
            event.preventDefault();
            lastFocusable.focus();
          }
          break;
        }

        default:
      }
    },
  });
}
