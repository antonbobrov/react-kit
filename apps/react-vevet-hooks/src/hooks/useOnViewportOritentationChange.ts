import { useEvent } from '@anton.bobrov/react-hooks';
import { vevet } from '@anton.bobrov/vevet-init';
import { useEffect } from 'react';

/** Event on viewport orientation change */
export function useOnViewportOritentationChange(effectProp: () => void) {
  const effect = useEvent(effectProp);

  const getOrientation = useEvent(() => {
    if (vevet.viewport.isLandscape) {
      return 'landscape';
    }

    if (vevet.viewport.isPortrait) {
      return 'portrait';
    }

    return 'rect';
  });

  useEffect(() => {
    let prevOrientation = getOrientation();

    const callback = vevet.viewport.add('', () => {
      const newOrientation = getOrientation();

      if (prevOrientation !== newOrientation) {
        effect();
        prevOrientation = newOrientation;
      }
    });

    return () => callback.remove();
  }, [effect, getOrientation]);
}
