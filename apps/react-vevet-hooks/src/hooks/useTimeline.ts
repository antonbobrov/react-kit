import { useEvent } from '@anton.bobrov/react-hooks';
import { NTimeline, Timeline, vevet } from '@anton.bobrov/vevet-init';
import { useEffect, useState } from 'react';

export interface IUseTimelineProps {
  /** Timeline duration */
  duration: number;
  /** Event on timeline start */
  onStart?: (data: NTimeline.CallbacksTypes['start']) => void;
  /** Event on timeline update */
  onProgress?: (data: NTimeline.CallbacksTypes['progress']) => void;
  /** Event on timeline end */
  onEnd?: (data: NTimeline.CallbacksTypes['end']) => void;
}

/** Create `vevet` `Timeline` */
export function useTimeline({
  duration,
  onStart: onStartProp,
  onProgress: onProgressProp,
  onEnd: onEndProp,
}: IUseTimelineProps) {
  const [startDuration] = useState(duration);

  const [timeline, setTimeline] = useState<Timeline | undefined>();

  const onStart = useEvent(onStartProp);
  const onProgress = useEvent(onProgressProp);
  const onEnd = useEvent(onEndProp);

  useEffect(() => {
    if (!vevet) {
      return undefined;
    }

    const tm = new Timeline({ duration: startDuration });
    setTimeline(tm);

    if (onStart) {
      tm.addCallback('start', onStart);
    }

    if (onProgress) {
      tm.addCallback('progress', onProgress);
    }

    if (onEnd) {
      tm.addCallback('end', onEnd);
    }

    return () => tm.destroy();
  }, [startDuration, onEnd, onProgress, onStart]);

  useEffect(() => {
    const currentDuration = timeline?.prop.duration;

    if (currentDuration !== duration) {
      timeline?.changeProp({ duration });
    }
  }, [duration, timeline]);

  const play = useEvent(() => {
    timeline?.play();
  });

  const reverse = useEvent(() => {
    if (!timeline || timeline.progress <= 0) {
      return;
    }

    timeline.reverse();
  });

  const pause = useEvent(() => {
    timeline?.pause();
  });

  const reset = useEvent(() => {
    if (timeline) {
      pause();
      timeline.progress = 0;
    }
  });

  return {
    timeline,
    play,
    reverse,
    pause,
    reset,
  };
}
