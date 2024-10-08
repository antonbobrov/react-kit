import { useEvent, useDeepCompareMemoize } from '@anton.bobrov/react-hooks';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimationFrame, NAnimationFrame } from 'vevet';

export interface IUseAnimationFrameOnFrameProps {
  /** The multiplier for frames per second (FPS). */
  fpsMultiplier: number;
  /** Real-time FPS */
  computedFPS: number;
}

export type TUseAnimationFrameOnFrame = (
  props: IUseAnimationFrameOnFrameProps,
) => void;

export interface IUseAnimationFrameProps
  extends Pick<NAnimationFrame.IChangeableProps, 'fps' | 'autoFpsFrames'> {
  /** Event triggered when the animation starts playing */
  onPlay?: () => void;

  /** Event triggered when the animation is paused */
  onPause?: () => void;

  /** Event triggered on each animation frame */
  onFrame: TUseAnimationFrameOnFrame;
}

/**
 * Custom React hook that integrates with `vevet`'s `AnimationFrame` class.
 *
 * This hook creates an animation frame instance, allowing for
 * customizable animation properties and callbacks for play, pause,
 * and frame events. It handles the lifecycle of the animation instance,
 * ensuring proper cleanup on component unmount.
 *
 * @example
 * const MyComponent = () => {
 *   const { play, pause } = useAnimationFrame({
 *     onPlay: () => console.log('Animation started'),
 *     onPause: () => console.log('Animation paused'),
 *     onFrame: ({ fpsMultiplier }) => {
 *       console.log('Frame updated, FPS Multiplier:', fpsMultiplier);
 *     },
 *   });
 *
 *   return (
 *     <div>
 *       <button onClick={play}>Play</button>
 *       <button onClick={pause}>Pause</button>
 *     </div>
 *   );
 * };
 */
export function useAnimationFrame({
  onPlay: onPlayProp,
  onPause: onPauseProp,
  onFrame: onFrameProp,
  ...changeableProps
}: IUseAnimationFrameProps) {
  const [frame, setFrame] = useState<AnimationFrame | null>(null);

  const initialChangeablePropsRef = useRef(changeableProps);

  const onPlay = useEvent(onPlayProp);
  const onPause = useEvent(onPauseProp);
  const onFrame = useEvent(onFrameProp);

  useEffect(() => {
    const instance = new AnimationFrame({
      ...initialChangeablePropsRef.current,
      isEnabled: false,
    });

    setFrame(instance);

    if (onPlay) {
      instance.addCallback('play', onPlay);
    }
    if (onPause) {
      instance.addCallback('pause', onPause);
    }

    instance.addCallback('frame', () =>
      onFrame({
        fpsMultiplier: instance.fpsMultiplier,
        computedFPS: instance.computedFPS,
      }),
    );

    return () => instance.destroy();
  }, [onFrame, onPause, onPlay]);

  useEffect(() => {
    if (!frame) {
      return;
    }

    frame.changeProps(changeableProps);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frame, useDeepCompareMemoize(changeableProps)]);

  const play = useCallback(() => frame?.play(), [frame]);

  const pause = useCallback(() => frame?.pause(), [frame]);

  return { frame, play, pause };
}
