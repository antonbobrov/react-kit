import { useEffect } from 'react';
import {
  NTimeline,
  Timeline,
  clampScope,
  easing,
} from '@anton.bobrov/vevet-init';
import { useEvent } from '@anton.bobrov/react-hooks';

export interface IUseScopedTimelineProgressProps {
  /** Event on progress update */
  onProgress: (args: NTimeline.ICallbacksTypes['progress']) => void;
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
      const p = clampScope(data.p, scope);

      if (prevProgress === p) {
        return;
      }

      prevProgress = p;
      const e = easing(p);

      onProgress({ p, e });
    });

    return () => callback?.remove();
  }, [onProgress, scope, timeline]);
}
