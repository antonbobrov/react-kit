import cn from 'classnames';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { useOnPageLoad } from '@anton.bobrov/react-vevet-hooks';
import { ILazyVideoProps } from './types';
import { BaseVideo } from '../BaseVideo';
import { prefixedClasNames } from '../../utils/prefixedClassNames';

/** Lazy video component */
export const LazyVideo = forwardRef<HTMLVideoElement, ILazyVideoProps>(
  (
    { className, style, position = 'cover', onLoadedMetadata, ...videoProps },
    ref,
  ) => {
    const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null);
    useImperativeHandle(ref, () => videoRef!);

    const [canLoad, setCanLoad] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useOnPageLoad(() => setCanLoad(true), []);

    const classNames = prefixedClasNames(
      'lazy-video',
      position,
      isLoaded && 'is-loaded',
    );

    if (!canLoad) {
      return null;
    }

    return (
      <BaseVideo
        ref={setVideoRef}
        {...videoProps}
        className={cn(className, classNames)}
        style={style}
        onLoadedMetadata={(event) => {
          onLoadedMetadata?.(event);
          setIsLoaded(true);
        }}
      />
    );
  },
);

LazyVideo.displayName = 'LazyVideo';
