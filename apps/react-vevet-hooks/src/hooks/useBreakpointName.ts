import { useState } from 'react';
import { vevet } from '@anton.bobrov/vevet-init';
import { useOnResize } from './useOnResize';

export type TUseBreakpointName = 'desktop' | 'tablet' | 'phone';

/** `vevet` breakpoint name */
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
