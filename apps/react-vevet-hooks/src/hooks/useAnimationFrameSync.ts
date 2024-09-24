import { useEvent } from '@anton.bobrov/react-hooks';
import { lerp, objectKeys } from '@anton.bobrov/vevet-init';
import { useCallback, useRef } from 'react';
import { useAnimationFrame } from './useAnimationFrame';

export type TUseAnimationFrameSyncData = Record<string, number>;

export interface IUseAnimationFrameSyncProps<
  T extends TUseAnimationFrameSyncData,
> {
  data: T;
  onUpdate: (data: T) => void;
  ease?: number;
}

/**
 * Launches an animation frame with linear interpolation of all values.
 * When the values are interpolated, the animation frame is automatically stopped.
 *
 * @example
 *
 * const { set } = useAnimationFrameSync({
 *   data: { x: 0, y: 0 },
 *   onUpdate: ({ x, y }) => console.log(x, y),
 * });
 *
 * set('x', 1);
 * set('y', 0.5);
 */
export function useAnimationFrameSync<T extends TUseAnimationFrameSyncData>({
  data: initialData,
  onUpdate: onUpdateProp,
  ease: easeProp = 0.1,
}: IUseAnimationFrameSyncProps<T>) {
  const onUpdate = useEvent(onUpdateProp);

  const dataRef = useRef({
    moment: { ...initialData },
    target: { ...initialData },
  });

  const props = objectKeys(initialData);
  const { moment, target } = dataRef.current;

  const { play, pause } = useAnimationFrame({
    onFrame: ({ easeMultiplier }) => {
      const ease = easeProp * easeMultiplier;

      props.forEach((prop) => {
        // @ts-ignore
        moment[prop] = lerp(moment[prop], target[prop], ease);
      });

      const undone = props.filter((prop) => moment[prop] !== target[prop]);
      const isInterpolated = undone.length === 0;

      if (isInterpolated) {
        pause();
      }

      onUpdate(moment);
    },
  });

  const set = useCallback(
    (prop: keyof T, value: number) => {
      // @ts-ignore
      target[prop] = value;

      play();
    },
    [play, target],
  );

  const getMoment = useCallback(() => moment, [moment]);

  return { set, getMoment };
}
