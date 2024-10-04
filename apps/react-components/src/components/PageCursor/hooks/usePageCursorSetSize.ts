import { RefObject, useEffect } from 'react';
import { addEventListener, isUndefined } from '@anton.bobrov/react-hooks';
import { pickObjectProps } from 'vevet';
import { usePageCursor } from './usePageCursor';

export interface IPageCursorSize {
  width?: number;
  height?: number;
}

/** Scale cursor */
export function usePageCursorSetSize(
  ref: RefObject<HTMLElement>,
  targetSize?: IPageCursorSize,
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

    let prevSize: IPageCursorSize | undefined;

    const mouseEnter = addEventListener(element, 'mouseenter', () => {
      prevSize = pickObjectProps(cursor.props, ['width', 'height']);
      cursor.changeProps({ width, height });
    });

    const mouseLeave = addEventListener(element, 'mouseleave', () => {
      if (prevSize) {
        cursor.changeProps(prevSize);
      }
    });

    return () => {
      mouseEnter?.();
      mouseLeave?.();

      if (prevSize) {
        cursor.changeProps(prevSize);
      }
    };
  }, [ref, cursor, hasTargetSize, width, height]);
}
