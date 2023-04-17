/* eslint-disable jsx-a11y/media-has-caption */
import React, { FC, useEffect, useRef, useState } from 'react';
import { useEvent } from '@anton.bobrov/react-hooks';
import { prefixedClasNames } from '../../../utils/prefixedClassNames';
import { IVideoPlayerMp4Props } from './types';

export const VideoPlayerMp4: FC<IVideoPlayerMp4Props> = ({
  src,
  autoplay = false,
  controls = true,
  playsInline = true,
  onLoad: onLoadProp,
  onVideoReady: onVideoReadyProp,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const onLoad = useEvent(onLoadProp);
  const onVideoReady = useEvent(onVideoReadyProp);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      onLoad?.();
    }
  }, [isLoaded, onLoad]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return undefined;
    }

    const destrutor = onVideoReady?.(video);

    return () => destrutor?.();
  }, [onVideoReady]);

  return (
    <div className={prefixedClasNames('video-player-mp4')}>
      <video
        ref={videoRef}
        disablePictureInPicture
        preload="auto"
        autoPlay={autoplay}
        controls={controls}
        controlsList="nodownload"
        playsInline={playsInline}
        onLoadedMetadata={() => setIsLoaded(true)}
      >
        <source src={`${src}#t=0.1`} type="video/mp4" />
      </video>
    </div>
  );
};
