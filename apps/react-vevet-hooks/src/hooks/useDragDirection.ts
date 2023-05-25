import { useEvent } from '@anton.bobrov/react-hooks';
import { DraggerDirection } from '@anton.bobrov/vevet-init';
import { RefObject, useEffect } from 'react';

export interface IUseDragDirectionProps {
  /** Element ref */
  ref: RefObject<HTMLElement>;
  /** Event on left swipe */
  onLeft?: () => void;
  /** Event on right swipe */
  onRight?: () => void;
  /** Event on up swipe */
  onUp?: () => void;
  /** Event on down swipe */
  onDown?: () => void;
}

/** Use `vevet` `DraggerDirection` */
export function useDragDirection({
  ref,
  onLeft: onLeftProp,
  onRight: onRightProp,
  onUp: onUpProp,
  onDown: onDownProp,
}: IUseDragDirectionProps) {
  const onLeft = useEvent(onLeftProp);
  const onRight = useEvent(onRightProp);
  const onUp = useEvent(onUpProp);
  const onDown = useEvent(onDownProp);

  useEffect(() => {
    if (!ref.current) {
      return undefined;
    }

    const dragger = new DraggerDirection({
      container: ref.current,
      min: 75,
    });

    dragger.addCallback('left', () => onLeft?.());
    dragger.addCallback('right', () => onRight?.());

    dragger.addCallback('up', () => onUp?.());
    dragger.addCallback('down', () => onDown?.());

    return () => dragger.destroy();
  }, [onDown, onLeft, onRight, onUp, ref]);
}
