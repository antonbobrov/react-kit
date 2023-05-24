import { RefObject, useEffect } from 'react';
import { NCustomCursor } from '@anton.bobrov/vevet-init';
import { addEventListener, isUndefined } from '@anton.bobrov/react-hooks';
import { usePageCursor } from './usePageCursor';

/**
 * Scale cursor
 */
export function usePageCursorSetSize(
  ref: RefObject<HTMLElement>,
  targetSize?: NCustomCursor.ChangeableProp['size']
) {
  const { cursor } = usePageCursor();

  const hasTargetSize = !isUndefined(targetSize);
  const width = hasTargetSize ? targetSize.width : undefined;
  const height = hasTargetSize ? targetSize.height : undefined;

  useEffect(() => {
    const element = ref.current;
    if (!cursor || !element || !hasTargetSize) {
      return undefined;
    }

    let prevSize: NCustomCursor.ChangeableProp['size'] | undefined;

    const mouseEnter = addEventListener(element, 'mouseenter', () => {
      prevSize = { ...cursor.prop.size };
      cursor.changeProp({ size: { width, height } });
    });

    const mouseLeave = addEventListener(element, 'mouseleave', () => {
      if (prevSize) {
        cursor.changeProp({ size: prevSize });
      }
    });

    return () => {
      mouseEnter?.();
      mouseLeave?.();

      if (prevSize) {
        cursor.changeProp({ size: prevSize });
      }
    };
  }, [ref, cursor, hasTargetSize, width, height]);
}
