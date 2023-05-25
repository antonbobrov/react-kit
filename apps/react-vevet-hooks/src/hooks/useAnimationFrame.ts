import { useEvent } from '@anton.bobrov/react-hooks';
import { useEffect, useRef, useState } from 'react';
import { AnimationFrame } from '@anton.bobrov/vevet-init';

export interface IUseAnimationFrameProps {
  /** Event on each frame */
  onRender: () => void;
  /** Frames per second */
  fps?: number;
}

/** Create `vevet` `AnimationFrame` */
export function useAnimationFrame({
  onRender: onRenderProp,
  ...props
}: IUseAnimationFrameProps) {
  const [frame, setFrame] = useState<AnimationFrame | null>(null);

  const initialProps = useRef(props);

  const onRender = useEvent(onRenderProp);

  useEffect(() => {
    const instance = new AnimationFrame({
      run: false,
      ...initialProps.current,
    });
    setFrame(instance);

    instance.addCallback('frame', onRender);

    return () => instance.destroy();
  }, [onRender, initialProps]);

  useEffect(() => {
    frame?.changeProp({ fps: props.fps });
  }, [frame, props?.fps]);

  const play = () => frame?.play();

  const pause = () => frame?.pause();

  return { play, pause };
}
