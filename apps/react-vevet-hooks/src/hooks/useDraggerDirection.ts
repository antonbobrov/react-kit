import { useEvent, useDeepCompareEffect } from '@anton.bobrov/react-hooks';
import { DraggerDirection, NDraggerDirection } from '@anton.bobrov/vevet-init';
import { RefObject, useEffect, useRef, useState } from 'react';

export interface IUseDraggerDirectionProps
  extends Pick<NDraggerDirection.IStaticProps, 'minLength'>,
    Pick<NDraggerDirection.IChangeableProps, 'isEnabled'> {
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
export function useDraggerDirection({
  ref,
  minLength,
  onLeft: onLeftProp,
  onRight: onRightProp,
  onUp: onUpProp,
  onDown: onDownProp,
  ...changeableProps
}: IUseDraggerDirectionProps) {
  const [dragger, setDragger] = useState<DraggerDirection | null>(null);

  const onLeft = useEvent(onLeftProp);
  const onRight = useEvent(onRightProp);
  const onUp = useEvent(onUpProp);
  const onDown = useEvent(onDownProp);

  const initialChangeablePropsRef = useRef(changeableProps);

  useEffect(() => {
    if (!ref.current) {
      return undefined;
    }

    const instance = new DraggerDirection({
      ...initialChangeablePropsRef.current,
      container: ref.current,
    });

    setDragger(instance);

    instance.addCallback('left', () => onLeft?.());
    instance.addCallback('right', () => onRight?.());

    instance.addCallback('up', () => onUp?.());
    instance.addCallback('down', () => onDown?.());

    return () => instance.destroy();
  }, [onDown, onLeft, onRight, onUp, ref]);

  useDeepCompareEffect(() => {
    if (!dragger) {
      return;
    }

    dragger.changeProps(changeableProps);
  }, [changeableProps]);
}
