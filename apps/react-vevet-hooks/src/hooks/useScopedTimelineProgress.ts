import { useEffect } from 'react';
import { NTimeline, Timeline, utils, vevet } from '@anton.bobrov/vevet-init';
import { useEvent } from '@anton.bobrov/react-hooks';

export interface IUseScopedTimelineProgressProps {
  onProgress: (args: NTimeline.CallbacksTypes['progress']) => void;
  scope: [number, number];
  timeline?: Timeline;
}

export function useScopedTimelineProgress({
  onProgress: onProgressProp,
  scope,
  timeline,
}: IUseScopedTimelineProgressProps) {
  const onProgress = useEvent(onProgressProp);

  useEffect(() => {
    let prevProgress: undefined | number;

    const callback = timeline?.addCallback('progress', (data) => {
      const progress = utils.math.clampScope(data.progress, scope);
      if (prevProgress === progress) {
        return;
      }

      prevProgress = progress;
      const easing = utils.math.easing(progress, vevet.prop.easing);

      onProgress({ progress, easing });
    });

    return () => callback?.remove();
  }, [onProgress, scope, timeline]);
}
