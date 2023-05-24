import { RefObject, useContext, useEffect, useId } from 'react';
import { addEventListener } from '@anton.bobrov/react-hooks';
import { TPageCursorType } from '../types';
import { PageCursorContext } from '../interal/context';

/**
 * Use a definite cursor type for some element
 */
export function usePageCursorType(
  ref: RefObject<HTMLElement>,
  type?: TPageCursorType
) {
  const id = useId();
  const { cursor, addType, removeType } = useContext(PageCursorContext);

  useEffect(() => {
    if (!cursor || !ref.current || !type) {
      return undefined;
    }

    if (ref.current.matches(':hover')) {
      addType?.({ id, type });
    }

    const mouseEnter = addEventListener(ref.current, 'mouseover', () => {
      addType?.({ id, type });
    });

    const mouseLeave = addEventListener(ref.current, 'mouseleave', () => {
      removeType?.({ id, type });
    });

    return () => {
      mouseEnter?.();
      mouseLeave?.();
      removeType?.({ id, type });
    };
  }, [addType, cursor, id, ref, removeType, type]);
}
