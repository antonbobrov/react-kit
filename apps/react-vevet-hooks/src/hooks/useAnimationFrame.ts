import { useEvent } from '@anton.bobrov/react-hooks';
import { useEffect, useRef, useState } from 'react';
import { AnimationFrame } from '@anton.bobrov/vevet-init';

export interface IUseAnimationFrameProps {
  onRender: () => void;
  fps?: number;
}

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
    frame?.changeProp({ ...props });
  }, [frame, props]);

  const play = () => frame?.play();

  const pause = () => frame?.pause();

  return { play, pause };
}
