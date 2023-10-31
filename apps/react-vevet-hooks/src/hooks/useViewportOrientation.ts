import { useState } from 'react';
import { vevet } from '@anton.bobrov/vevet-init';
import { useOnResize } from './useOnResize';

export type TViewportOrientation = 'portrait' | 'landscape';

/** Get viewport orientation */
export function useViewportOrientation() {
  const [orientation, setOrientation] =
    useState<TViewportOrientation>('portrait');

  useOnResize(
    () => setOrientation(vevet.viewport.isLandscape ? 'landscape' : 'portrait'),
    []
  );

  return orientation;
}
