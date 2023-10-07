import { useEvent, useDeepCompareEffect } from '@anton.bobrov/react-hooks';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimationFrame, NAnimationFrame } from '@anton.bobrov/vevet-init';

export interface IUseAnimationFrameOnFrameProps {
  easeMultiplier: number;
}

export type TUseAnimationFrameOnFrame = (
  props: IUseAnimationFrameOnFrameProps
) => void;

export interface IUseAnimationFrameProps
  extends Pick<NAnimationFrame.IChangeableProps, 'fps' | 'autoFpsFrames'> {
  /** Event on animation play */
  onPlay?: () => void;
  /** Event on animation pause */
  onPause?: () => void;
  /** Event on each frame */
  onFrame: TUseAnimationFrameOnFrame;
}

/** Create `vevet` `AnimationFrame` */
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
      onFrame({ easeMultiplier: instance.easeMultiplier })
    );

    return () => instance.destroy();
  }, [onFrame, onPause, onPlay]);

  useDeepCompareEffect(() => {
    if (!frame) {
      return;
    }

    frame.changeProps(changeableProps);
  }, [changeableProps]);

  const play = useCallback(() => frame?.play(), [frame]);

  const pause = useCallback(() => frame?.pause(), [frame]);

  return { frame, play, pause };
}
