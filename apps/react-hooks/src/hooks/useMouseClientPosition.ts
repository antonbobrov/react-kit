import { addEventListener } from '@utils/dom';
import { useEffect, useState } from 'react';

export interface IMouseClientPositionVector2 {
  x: number;
  y: number;
}

/** Get mouse position (`clientX` & `clientY`) */
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
