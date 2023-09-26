import { useEvent } from '@anton.bobrov/react-hooks';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimationFrame, NAnimationFrame } from '@anton.bobrov/vevet-init';

export interface IUseAnimationFrameProps
  extends Pick<NAnimationFrame.IChangeableProps, 'fps' | 'autoFpsFrames'> {
  /** Event on animation play */
  onPlay?: () => void;
  /** Event on animation pause */
  onPause?: () => void;
  /** Event on each frame */
  onFrame: () => void;
}

/** Create `vevet` `AnimationFrame` */
export function useAnimationFrame({
  onPlay: onPlayProp,
  onPause: onPauseProp,
  onFrame: onFrameProp,
  fps,
  autoFpsFrames,
}: IUseAnimationFrameProps) {
  const [frame, setFrame] = useState<AnimationFrame | null>(null);

  const initialProps = useRef({ fps, autoFpsFrames });

  const onPlay = useEvent(onPlayProp);
  const onPause = useEvent(onPauseProp);
  const onFrame = useEvent(onFrameProp);

  useEffect(() => {
    const instance = new AnimationFrame({
      ...initialProps.current,
      isEnabled: false,
    });

    setFrame(instance);

    if (onPlay) {
      instance.addCallback('play', onPlay);
    }
    if (onPause) {
      instance.addCallback('pause', onPause);
    }
    instance.addCallback('frame', onFrame);

    return () => instance.destroy();
  }, [onFrame, onPause, onPlay]);

  useEffect(() => {
    if (!frame) {
      return;
    }

    const currentProps = frame.props;
    console.log('try change props');

    if (
      currentProps.fps !== fps ||
      currentProps.autoFpsFrames !== autoFpsFrames
    ) {
      console.log('change props');
      frame.changeProps({ fps, autoFpsFrames });
    }
  }, [frame, fps, autoFpsFrames]);

  const play = useCallback(() => frame?.play(), [frame]);

  const pause = useCallback(() => frame?.pause(), [frame]);

  return { frame, play, pause };
}
