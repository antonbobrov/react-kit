import { useState } from 'react';
import { vevet } from 'vevet';
import { useOnResize } from './useOnResize';

export type TUseBreakpointName = 'desktop' | 'tablet' | 'phone';

/**
 * Custom React hook that detects the current viewport breakpoint name.
 *
 * This hook uses the `vevet` library to determine the current viewport size
 * and assigns a corresponding breakpoint name ('desktop', 'tablet', or 'phone').
 * It updates the breakpoint name when the window is resized.
 *
 * @example
 * const MyComponent = () => {
 *   const breakpoint = useBreakpointName();
 *
 *   return (
 *     <div>
 *       Current Breakpoint: {breakpoint}
 *     </div>
 *   );
 * };
 */
export function useBreakpointName() {
  const [name, setName] = useState<TUseBreakpointName>('phone');

  useOnResize(() => {
    if (vevet.viewport.isDesktop) {
      setName('desktop');
    } else if (vevet.viewport.isTablet) {
      setName('tablet');
    } else {
      setName('phone');
    }
  }, []);

  return name;
}
