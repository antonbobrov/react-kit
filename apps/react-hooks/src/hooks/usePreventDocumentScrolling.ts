import { isBrowser } from '@utils/env';
import { useCallback, useEffect, useId, useMemo } from 'react';

/**
 * Custom React hook to prevent document scrolling.
 *
 * This hook adds a CSS class to the document's root element to disable scrolling
 * when `isPrevented` is true. It creates a style element with the necessary
 * CSS rules and manages its lifecycle based on the value of `isPrevented`.
 *
 * @param isPrevented - A boolean indicating whether to prevent scrolling.
 *
 * @example
 * const MyComponent = () => {
 *   const [isScrollingDisabled, setScrollingDisabled] = useState(false);
 *
 *   usePreventDocumentScrolling(isScrollingDisabled);
 *
 *   return (
 *     <div>
 *       <button onClick={() => setScrollingDisabled(!isScrollingDisabled)}>
 *         {isScrollingDisabled ? 'Enable Scrolling' : 'Disable Scrolling'}
 *       </button>
 *     </div>
 *   );
 * };
 */
export function usePreventDocumentScrolling(isPrevented: boolean) {
  const id = useId();
  const className = `prevent_scrolling-${id.replace(/:/g, '')}`;

  const style = useMemo(() => {
    if (!isBrowser) {
      return null;
    }

    const element = document.createElement('style');
    element.innerHTML = `.${className} { overflow: hidden !important; } .${className} body { overflow: hidden !important; }`;

    return element;
  }, [className]);

  const toggle = useCallback(
    (bool: boolean) => {
      document.documentElement.classList.toggle(className, bool);

      if (!style) {
        return;
      }

      if (isPrevented) {
        document.head.appendChild(style);
      } else {
        style.remove();
      }
    },
    [className, style, isPrevented],
  );

  useEffect(() => {
    toggle(isPrevented);

    return () => toggle(false);
  }, [toggle, isPrevented]);
}
