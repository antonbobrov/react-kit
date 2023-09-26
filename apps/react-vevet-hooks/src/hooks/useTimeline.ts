import { useEvent } from '@anton.bobrov/react-hooks';
import { NTimeline, Timeline, vevet } from '@anton.bobrov/vevet-init';
import { useCallback, useEffect, useRef, useState } from 'react';

export interface IUseTimelineProps
  extends Pick<NTimeline.IStaticProps, 'easing'>,
    Pick<NTimeline.IChangeableProps, 'duration'> {
  /** Event on timeline start */
  onStart?: () => void;
  /** Event on timeline progress update */
  onProgress?: (data: NTimeline.ICallbacksTypes['progress']) => void;
  /** Event on timeline end */
  onEnd?: () => void;
}

/** Create `vevet` `Timeline` */
export function useTimeline({
  easing,
  duration,
  onStart: onStartProp,
  onProgress: onProgressProp,
  onEnd: onEndProp,
}: IUseTimelineProps) {
  const [timeline, setTimeline] = useState<Timeline | undefined>();

  const initialProps = useRef({ easing, duration });

  const onStart = useEvent(onStartProp);
  const onProgress = useEvent(onProgressProp);
  const onEnd = useEvent(onEndProp);

  useEffect(() => {
    if (!vevet) {
      return undefined;
    }

    const instance = new Timeline({ ...initialProps.current, easing });
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

    const currentProps = timeline.props;

    if (currentProps.duration !== duration) {
      timeline.changeProps({ duration });
    }
  }, [duration, timeline]);

  const play = useCallback(() => timeline?.play(), [timeline]);

  const reverse = useCallback(() => timeline?.reverse(), [timeline]);

  const pause = useCallback(() => timeline?.pause(), [timeline]);

  const reset = useCallback(() => timeline?.reset(), [timeline]);

  return { timeline, play, reverse, pause, reset };
}
