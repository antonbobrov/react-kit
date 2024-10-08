/* eslint-disable jsx-a11y/media-has-caption */
import React, { FC, useEffect, useRef, useState } from 'react';
import { useEvent } from '@anton.bobrov/react-hooks';
import type Player from 'video.js/dist/types/player';
import { vevet } from 'vevet';
import { prefixedClasNames } from '../../../utils/prefixedClassNames';
import { IVideoPlayerMp4Props } from './types';

/** Custom mp4 player */
export const VideoPlayerMp4: FC<IVideoPlayerMp4Props> = ({
  src,
  autoplay = false,
  controls = true,
  playsInline = true,
  onLoad: onLoadProp,
  onVideoReady: onVideoReadyProp,
  onPlayerReady: onPlayerReadyProp,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const onLoad = useEvent(onLoadProp);
  const onVideoReady = useEvent(onVideoReadyProp);
  const onPlayerReady = useEvent(onPlayerReadyProp);

  const [isLoaded, setIsLoaded] = useState(false);
  const [canUsePlayer] = useState(!!(vevet && !vevet.isMobile));
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    const { current: video } = videoRef;
    if (!video || !canUsePlayer) {
      return undefined;
    }

    let isDestryed = false;
    let player: Player | undefined;
    let playerCallbackDestructor: (() => void) | undefined;

    import('video.js')
      .then((module) => {
        if (isDestryed) {
          return;
        }

        player = module.default(video, {});

        playerCallbackDestructor = onPlayerReady?.(player);
        setIsPlayerReady(true);
      })
      .catch(() => {});

    return () => {
      isDestryed = true;
      player?.dispose();
      playerCallbackDestructor?.();
    };
  }, [canUsePlayer, onPlayerReady, videoRef]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return undefined;
    }

    const destrutor = onVideoReady?.(video);

    return () => destrutor?.();
  }, [onVideoReady]);

  useEffect(() => {
    if (isLoaded && ((canUsePlayer && isPlayerReady) || !canUsePlayer)) {
      onLoad?.();
    }
  }, [canUsePlayer, isLoaded, isPlayerReady, onLoad]);

  return (
    <div className={prefixedClasNames('video-player-mp4')}>
      <div data-vjs-player className="video-js">
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
    </div>
  );
};
