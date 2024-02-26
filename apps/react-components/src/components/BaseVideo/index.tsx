/* eslint-disable jsx-a11y/media-has-caption */
import { useForwardedRef } from '@anton.bobrov/react-hooks';
import React, { forwardRef, useEffect, useState } from 'react';
import { IBaseVideoProps } from './types';
import { requestVideoPlay } from './utils/requestVideoPlay';

/** Base Video component */
export const BaseVideo = forwardRef<HTMLVideoElement, IBaseVideoProps>(
  (
    {
      src,
      children,
      autoPlay,
      isPlaying: isPlayingProp,
      onLoadedMetadata,
      ...videoProps
    },
    forwardedRef,
  ) => {
    const ref = useForwardedRef(forwardedRef);

    const [isLoaded, setIsLoaded] = useState(false);
    const isPlaying = autoPlay || isPlayingProp;

    useEffect(() => {
      if (!isLoaded || !ref.current) {
        return undefined;
      }

      if (!isPlaying) {
        ref.current.pause();

        return undefined;
      }

      const promise = requestVideoPlay(ref.current);
      promise?.then(() => {}).catch(() => {});

      return () => promise?.cancel();
    }, [isLoaded, isPlaying, ref]);

    return (
      <video
        ref={ref}
        disablePictureInPicture
        playsInline
        preload="auto"
        {...videoProps}
        src={undefined}
        onLoadedMetadata={(evt) => {
          onLoadedMetadata?.(evt);
          setTimeout(() => setIsLoaded(true), 0);
        }}
      >
        {children || <source src={src} type="video/mp4" />}
      </video>
    );
  },
);

BaseVideo.displayName = 'BaseVideo';

export * from './utils/requestVideoPlay';
