import { RefObject, useEffect } from 'react';
import { resetFocus, selectFocusableChildren } from '@utils/dom';
import { isBrowser } from '@utils/env';
import {
  IUseEventListenerSettings,
  useEventListener,
} from './useEventListener';

export interface IUseFocusTrapProps
  extends Pick<IUseEventListenerSettings, 'isDisabled'> {
  /**
   * If true, restores focus to the previously focused element on unmount.
   * @default true
   */
  isRestoreFocus?: boolean;
}

/**
 * Custom React hook that traps focus within a specified element.
 *
 * When enabled, the hook will focus the first focusable child of the
 * parent element on mount. When disabled, it will return focus to
 * the previously focused element. It also handles the `Tab` key
 * navigation to loop the focus within the child elements.
 *
 * @param ref - A reference to the element to trap focus within.
 * @param optionsProps - Optional settings for managing focus trap behavior.
 *
 * @example
 * const MyComponent = () => {
 *   const ref = useRef<HTMLDivElement>(null);
 *   useFocusTrap(ref);
 *
 *   return (
 *     <>
 *       <div ref={ref} tabIndex={0}>
 *         <input type="text" placeholder="Input 1" />
 *         <input type="text" placeholder="Input 2" />
 *         <button>Submit</button>
 *       </div>
 *
 *       <button>Outside button</button>
 *     </>
 *   );
 * };
 */
export function useFocusTrap(
  ref: RefObject<HTMLElement>,
  optionsProps: IUseFocusTrapProps = {},
) {
  const defaultOptions: Required<IUseFocusTrapProps> = {
    isDisabled: false,
    isRestoreFocus: true,
  };

  const options = { ...defaultOptions, ...optionsProps };
  const { isDisabled, isRestoreFocus } = options;

  useEffect(() => {
    if (isDisabled) {
      return undefined;
    }

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

      firstFocusable?.focus({ preventScroll: true });
    }, 0);

    return () => {
      if (isRestoreFocus) {
        prevActiveElement?.focus({ preventScroll: true });
      }
    };
  }, [isDisabled, isRestoreFocus, ref]);

  useEventListener({
    ref: isBrowser ? window : null,
    target: 'keydown',
    listener: (event) => {
      const { current: element } = ref;

      if (event.key !== 'Tab' || !element || isDisabled) {
        return;
      }

      const focusableChildren = selectFocusableChildren(element);
      const firstFocusable = focusableChildren.item(0);
      const lastFocusable = focusableChildren.item(
        focusableChildren.length - 1,
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
    isDisabled,
  });
}
