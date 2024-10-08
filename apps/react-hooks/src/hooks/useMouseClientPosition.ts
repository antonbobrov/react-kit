import { addEventListener } from '@utils/dom';
import { useEffect, useState } from 'react';

export interface IMouseClientPositionVector2 {
  /** The X coordinate of the mouse pointer in the client area */
  x: number;

  /** The Y coordinate of the mouse pointer in the client area */
  y: number;
}

/**
 * Custom React hook that retrieves the current mouse position in the client area.
 *
 * This hook tracks the mouse position by listening for `mousemove` events.
 * It initializes the position to the center of the window and updates
 * the position whenever the mouse moves.
 *
 * @example
 * const MyComponent = () => {
 *   const position = useMouseClientPosition();
 *
 *   return (
 *     <div>
 *       <p>Mouse Position: {`x: ${position.x}, y: ${position.y}`}</p>
 *     </div>
 *   );
 * };
 */
export function useMouseClientPosition() {
  const [position, setPosition] = useState<IMouseClientPositionVector2>({
    x: (typeof window !== 'undefined' ? window.innerWidth : 0) / 2,
    y: (typeof window !== 'undefined' ? window.innerHeight : 0) / 2,
  });

  useEffect(() => {
    const listener = addEventListener(
      window,
      'mousemove',
      ({ clientX, clientY }) => setPosition({ x: clientX, y: clientY }),
    );

    return () => listener();
  }, []);

  return position;
}
