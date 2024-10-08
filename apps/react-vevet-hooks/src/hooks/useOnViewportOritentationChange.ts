import { useEvent } from '@anton.bobrov/react-hooks';
import { useEffect } from 'react';
import { vevet } from 'vevet';

/**
 * Custom React hook that listens for changes in the viewport orientation.
 *
 * @example
 * const MyComponent = () => {
 *   useOnViewportOrientationChange(() => {
 *     console.log('Viewport orientation changed!');
 *   });
 *
 *   return <div>Change the orientation of the viewport to see the effect!</div>;
 * };
 */
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

    const callback = vevet.viewport.callbacks.add('any', () => {
      const newOrientation = getOrientation();

      if (prevOrientation !== newOrientation) {
        effect();
        prevOrientation = newOrientation;
      }
    });

    return () => callback.remove();
  }, [effect, getOrientation]);
}
