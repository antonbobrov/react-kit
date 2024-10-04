import { useEvent, useDeepCompareMemoize } from '@anton.bobrov/react-hooks';
import { RefObject, useEffect, useRef, useState } from 'react';
import { DraggerDirection, NDraggerDirection } from 'vevet';

export interface IUseDraggerDirectionProps
  extends Pick<NDraggerDirection.IStaticProps, 'minLength'>,
    Pick<NDraggerDirection.IChangeableProps, 'isEnabled'> {
  /** Reference to the container element for dragging gestures */
  ref: RefObject<HTMLElement>;

  /** Callback event triggered on any swipe */
  onAny?: (direction: 'left' | 'right' | 'up' | 'down') => void;

  /** Callback event triggered on left swipe */
  onLeft?: () => void;

  /** Callback event triggered on right swipe */
  onRight?: () => void;

  /** Callback event triggered on up swipe */
  onUp?: () => void;

  /** Callback event triggered on down swipe */
  onDown?: () => void;
}

/**
 * Custom React hook that utilizes `vevet`'s `DraggerDirection` for detecting swipe gestures.
 *
 * This hook sets up a dragger instance to listen for swipe events in four directions
 * (left, right, up, down).
 *
 * @example
 * const MyComponent = () => {
 *   const ref = useRef<HTMLDivElement>(null);
 *
 *   useDraggerDirection({
 *     ref,
 *     minLength: 50,
 *     onAny: (direction) => console.log(`${direction}`),
 *     onLeft: () => console.log('Swiped left!'),
 *     onRight: () => console.log('Swiped right!'),
 *     onUp: () => console.log('Swiped up!'),
 *     onDown: () => console.log('Swiped down!'),
 *   });
 *
 *   return <div ref={ref}>Swipe me!</div>;
 * };
 */
export function useDraggerDirection({
  ref,
  minLength,
  onAny: onAnyProp,
  onLeft: onLeftProp,
  onRight: onRightProp,
  onUp: onUpProp,
  onDown: onDownProp,
  ...changeableProps
}: IUseDraggerDirectionProps) {
  const [dragger, setDragger] = useState<DraggerDirection | null>(null);

  const onAny = useEvent(onAnyProp);
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

    instance.addCallback('left', () => {
      onLeft?.();
      onAny?.('left');
    });

    instance.addCallback('right', () => {
      onRight?.();
      onAny?.('right');
    });

    instance.addCallback('up', () => {
      onUp?.();
      onAny?.('up');
    });

    instance.addCallback('down', () => {
      onDown?.();
      onAny?.('down');
    });

    return () => instance.destroy();
  }, [onAny, onDown, onLeft, onRight, onUp, ref]);

  useEffect(() => {
    if (!dragger) {
      return;
    }

    dragger.changeProps(changeableProps);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dragger, useDeepCompareMemoize(changeableProps)]);
}
