import { useEffect } from 'react';
import { NTimeline, Timeline, utils, vevet } from '@anton.bobrov/vevet-init';
import { useEvent } from '@anton.bobrov/react-hooks';

export interface IUseScopedTimelineProgressProps {
  /** Event on progress update */
  onProgress: (args: NTimeline.CallbacksTypes['progress']) => void;
  /** Target scope */
  scope: [number, number];
  /** `vevet` `Timeline` */
  timeline?: Timeline;
}

/** Cast timeline progress relative to the given scope */
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
