import { useEvent } from '@anton.bobrov/react-hooks';
import { DraggerDirection } from '@anton.bobrov/vevet-init';
import { RefObject, useEffect } from 'react';

export interface IUseDragDirectionProps {
  ref: RefObject<HTMLElement>;
  onLeft?: () => void;
  onRight?: () => void;
  onUp?: () => void;
  onDown?: () => void;
}

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
