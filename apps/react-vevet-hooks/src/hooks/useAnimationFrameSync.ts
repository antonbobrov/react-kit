import { objectKeys, useEvent } from '@anton.bobrov/react-hooks';
import { useCallback, useRef } from 'react';
import { lerp } from 'vevet';
import { useAnimationFrame } from './useAnimationFrame';

export type TUseAnimationFrameSyncData = Record<string, number>;

export interface IUseAnimationFrameSyncProps<
  T extends TUseAnimationFrameSyncData,
> {
  /** The initial data for the animation frame, with properties to animate. */
  data: T;

  /** Callback function to be called on each update with the current interpolated values. */
  onUpdate: (data: T) => void;

  /** The easing factor for the interpolation. Defaults to 0.1. */
  ease?: number;
}

/**
 * Custom React hook that synchronizes animation frame data using linear interpolation.
 *
 * This hook allows you to smoothly animate properties by specifying their initial values.
 * It uses linear interpolation to transition between current and target values.
 * The animation frame will automatically stop once all values reach their targets.
 *
 * @example
 * const { set } = useAnimationFrameSync({
 *   data: { x: 0, y: 0 },
 *   onUpdate: ({ x, y }) => console.log(x, y),
 * });
 *
 * set('x', 1);
 * set('y', 0.5);
 * set('y', 0.5, true); // instant change
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

  const render = useEvent((ease: number) => {
    props.forEach((prop) => {
      // @ts-ignore
      moment[prop] = lerp(moment[prop], target[prop], ease);
    });

    onUpdate(moment);
  });

  const { play, pause } = useAnimationFrame({
    onFrame: ({ fpsMultiplier }) => {
      const ease = easeProp * fpsMultiplier;

      render(ease);

      const undone = props.filter((prop) => moment[prop] !== target[prop]);
      const isInterpolated = undone.length === 0;

      if (isInterpolated) {
        pause();
      }
    },
  });

  const set = useCallback(
    (prop: keyof T, value: number, isInstant?: boolean) => {
      // @ts-ignore
      target[prop] = value;

      // instant change
      if (isInstant) {
        // @ts-ignore
        moment[prop] = value;

        render(0);
      } else {
        // interpolated change

        // @ts-ignore
        target[prop] = value;

        play();
      }
    },
    [moment, play, render, target],
  );

  const getMoment = useCallback(() => moment, [moment]);

  return { set, getMoment };
}
