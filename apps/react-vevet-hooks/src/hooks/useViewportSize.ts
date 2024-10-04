import { useState } from 'react';
import { vevet } from 'vevet';
import { useOnResize } from './useOnResize';

export type TUseViewportSize = {
  /** The current width of the viewport */
  width: number;

  /** The current height of the viewport */
  height: number;
};

/**
 * Custom React hook that provides the current size of the viewport.
 *
 * This hook uses the `vevet` library to retrieve the current width and height
 * of the viewport and updates the state whenever the viewport is resized.
 *
 * @example
 * const MyComponent = () => {
 *   const { width, height } = useViewportSize();
 *
 *   return (
 *     <div>
 *       Viewport Size: {width} x {height}
 *     </div>
 *   );
 * };
 */
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
    [],
  );

  return size;
}
