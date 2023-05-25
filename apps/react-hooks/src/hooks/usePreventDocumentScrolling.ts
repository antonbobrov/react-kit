import { isBrowser } from '@utils/env';
import { useCallback, useEffect, useId, useMemo } from 'react';

/** Prevent document scrolling */
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
    [className, style, isPrevented]
  );

  useEffect(() => {
    toggle(isPrevented);

    return () => toggle(false);
  }, [toggle, isPrevented]);
}
