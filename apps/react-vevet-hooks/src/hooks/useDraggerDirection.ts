import { useEvent } from '@anton.bobrov/react-hooks';
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
  isEnabled,
  onLeft: onLeftProp,
  onRight: onRightProp,
  onUp: onUpProp,
  onDown: onDownProp,
}: IUseDraggerDirectionProps) {
  const [dragger, setDragger] = useState<DraggerDirection | null>(null);

  const onLeft = useEvent(onLeftProp);
  const onRight = useEvent(onRightProp);
  const onUp = useEvent(onUpProp);
  const onDown = useEvent(onDownProp);

  const initialProps = useRef({ minLength, isEnabled });

  useEffect(() => {
    if (!ref.current) {
      return undefined;
    }

    const instance = new DraggerDirection({
      ...initialProps.current,
      container: ref.current,
    });

    setDragger(instance);

    instance.addCallback('left', () => onLeft?.());
    instance.addCallback('right', () => onRight?.());

    instance.addCallback('up', () => onUp?.());
    instance.addCallback('down', () => onDown?.());

    return () => instance.destroy();
  }, [onDown, onLeft, onRight, onUp, ref]);

  useEffect(() => {
    if (!dragger) {
      return;
    }

    const currentProps = dragger.props;
    console.log('try change props');

    if (currentProps.isEnabled !== isEnabled) {
      console.log('change props');
      dragger.changeProps({ isEnabled });
    }
  }, [dragger, isEnabled]);
}
