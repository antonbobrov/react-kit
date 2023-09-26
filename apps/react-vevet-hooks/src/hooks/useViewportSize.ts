import { useState } from 'react';
import { vevet } from '@anton.bobrov/vevet-init';
import { useOnResize } from './useOnResize';

export type TUseViewportSize = {
  width: number;
  height: number;
};

/** Use `vevet` `Viewport` size */
export function useViewportSize() {
  const [size, setSize] = useState<TUseViewportSize>({
    width: 0,
    height: 0,
  });

  useOnResize(
    () =>
      setSize({
        width: vevet.viewport.width,
        height: vevet.viewport.height,
      }),
    []
  );

  return size;
}
