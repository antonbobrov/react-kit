import { useState } from 'react';
import { vevet } from 'vevet';
import { useOnResize } from './useOnResize';

export type TViewportOrientation = 'portrait' | 'landscape';

/**
 * Custom React hook that detects the current viewport orientation.
 *
 * This hook uses the `vevet` library to determine the orientation of the viewport
 * (either 'portrait' or 'landscape') and updates the state accordingly
 * whenever the viewport is resized.
 *
 * @example
 * const MyComponent = () => {
 *   const orientation = useViewportOrientation();
 *
 *   return (
 *     <div>
 *       Current Orientation: {orientation}
 *     </div>
 *   );
 * };
 */
export function useViewportOrientation() {
  const [orientation, setOrientation] =
    useState<TViewportOrientation>('portrait');

  useOnResize(
    () => setOrientation(vevet.viewport.isLandscape ? 'landscape' : 'portrait'),
    [],
  );

  return orientation;
}
