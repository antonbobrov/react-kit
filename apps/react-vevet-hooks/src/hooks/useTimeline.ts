import { useEvent, useDeepCompareMemoize } from '@anton.bobrov/react-hooks';
import { useCallback, useEffect, useRef, useState } from 'react';
import { NTimeline, Timeline } from 'vevet';

export interface IUseTimelineProps
  extends Pick<NTimeline.IStaticProps, 'easing'>,
    Pick<NTimeline.IChangeableProps, 'duration'> {
  /** Callback event triggered when the timeline starts */
  onStart?: () => void;

  /** Callback event triggered on timeline progress update */
  onProgress?: (data: NTimeline.ICallbacksTypes['progress']) => void;

  /** Callback event triggered when the timeline ends */
  onEnd?: () => void;
}

/**
 * Custom React hook that creates a `vevet` timeline instance.
 *
 * This hook initializes a timeline with the specified properties and
 * sets up event callbacks for timeline events such as start, progress,
 * and end. It provides functions to control the playback of the timeline.
 *
 * @example
 * const MyComponent = () => {
 *   const { play, pause, reset } = useTimeline({
 *     easing: EaseInBounce,
 *     duration: 1000,
 *     onStart: () => console.log('Timeline started'),
 *     onProgress: (data) => console.log('Progress:', data),
 *     onEnd: () => console.log('Timeline ended'),
 *   });
 *
 *   return (
 *     <div>
 *       <button onClick={play}>Play</button>
 *       <button onClick={pause}>Pause</button>
 *       <button onClick={reset}>Reset</button>
 *     </div>
 *   );
 * };
 */
export function useTimeline({
  easing,
  onStart: onStartProp,
  onProgress: onProgressProp,
  onEnd: onEndProp,
  ...changeableProps
}: IUseTimelineProps) {
  const [timeline, setTimeline] = useState<Timeline | undefined>();

  const initialChangeablePropsRef = useRef(changeableProps);

  const onStart = useEvent(onStartProp);
  const onProgress = useEvent(onProgressProp);
  const onEnd = useEvent(onEndProp);

  useEffect(() => {
    const instance = new Timeline({
      ...initialChangeablePropsRef.current,
      easing,
    });
    setTimeline(instance);

    if (onStart) {
      instance.addCallback('start', onStart);
    }

    if (onProgress) {
      instance.addCallback('progress', onProgress);
    }

    if (onEnd) {
      instance.addCallback('end', onEnd);
    }

    return () => instance.destroy();
  }, [easing, onEnd, onProgress, onStart]);

  useEffect(() => {
    if (!timeline) {
      return;
    }

    timeline.changeProps(changeableProps);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeline, useDeepCompareMemoize(changeableProps)]);

  const play = useCallback(() => timeline?.play(), [timeline]);

  const reverse = useCallback(() => timeline?.reverse(), [timeline]);

  const pause = useCallback(() => timeline?.pause(), [timeline]);

  const reset = useCallback(() => timeline?.reset(), [timeline]);

  return { timeline, play, reverse, pause, reset };
}
