import { RefObject, useEffect } from 'react';
import { resetFocus, selectFocusableChildren } from '@utils/dom';
import {
  IUseEventListenerSettings,
  useEventListener,
} from './useEventListener';

export interface IUseFocusTrapProps
  extends Pick<IUseEventListenerSettings, 'isDisabled'> {
  /**
   * Restore focus on unmount
   * @default true
   */
  isRestoreFocus?: boolean;
}

/**
 * Hook that traps focus via `tab` key within an element.
 * When enabled, the hook will focus the first child of the parent element.
 * And when disabled, it will return focus to the previously focused element.
 */
export function useFocusTrap(
  ref: RefObject<HTMLElement>,
  optionsProps: IUseFocusTrapProps = {}
) {
  const defaultOptions: Required<IUseFocusTrapProps> = {
    isDisabled: false,
    isRestoreFocus: true,
  };

  const options = { ...defaultOptions, ...optionsProps };
  const { isDisabled, isRestoreFocus } = options;

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
      if (isRestoreFocus) {
        prevActiveElement?.focus();
      }
    };
  }, [isDisabled, isRestoreFocus, ref]);

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
