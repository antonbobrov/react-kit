import { useEvent } from '@anton.bobrov/react-hooks';
import { useEffect } from 'react';
import { CustomCursor } from '@anton.bobrov/vevet-init';
import { usePageCursor } from './usePageCursor';

/**
 * Callback on cursor move
 */
export function usePageCursorMove(
  onMove: (coords: CustomCursor['coords']) => void
) {
  const handleMove = useEvent(onMove);

  const { cursor } = usePageCursor();

  useEffect(() => {
    const callback = cursor?.addCallback('render', () =>
      handleMove(cursor.coords)
    );

    return () => callback?.remove();
  }, [cursor, handleMove]);
}
