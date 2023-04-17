import { useEvent } from '@anton.bobrov/react-hooks';
import { NTimeline, Timeline, vevet } from '@anton.bobrov/vevet-init';
import { useEffect, useState } from 'react';

export interface IUseTimelineProps {
  duration: number;
  onStart?: (data: NTimeline.CallbacksTypes['start']) => void;
  onProgress?: (data: NTimeline.CallbacksTypes['progress']) => void;
  onEnd?: (data: NTimeline.CallbacksTypes['end']) => void;
}

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

  return {
    timeline,
    play,
    reverse,
    pause,
  };
}
