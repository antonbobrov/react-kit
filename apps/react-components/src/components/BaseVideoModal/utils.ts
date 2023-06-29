import { useEvent } from '@anton.bobrov/react-hooks';
import { useOnResize } from '@anton.bobrov/react-vevet-hooks';
import { vevet } from '@anton.bobrov/vevet-init';
import { CSSProperties, useEffect, useState } from 'react';

export type TBaseVideoModalWrapperSize = {
  width: number | string;
  height: number | string;
};

export type TGetBaseVideoModalWrapperSize = () => TBaseVideoModalWrapperSize;

export function useWrapperSize(
  getSizeProp?: TGetBaseVideoModalWrapperSize
): CSSProperties {
  const [size, setSize] = useState<TBaseVideoModalWrapperSize>({
    width: 0,
    height: 0,
  });

  const getSize: TGetBaseVideoModalWrapperSize = useEvent(() => {
    if (getSizeProp) {
      return getSizeProp();
    }

    const { viewport } = vevet;
    const maxWidth = viewport.width * (viewport.isPhone ? 1 : 0.8);
    const maxHeight = viewport.height - 120;

    let height = maxHeight;
    let width = height * (1 / 0.5625);
    if (width > maxWidth) {
      width = maxWidth;
      height = maxWidth * 0.5625;
    }
    if (width > 1800) {
      width = 1800;
      height = 1800 * 0.5625;
    }

    return { width, height };
  });

  useEffect(() => setSize(getSize()), [getSize]);

  useOnResize(() => setSize(getSize()), [getSize], {
    name: 'BaseVideoModal',
  });

  return size;
}
