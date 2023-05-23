import React, { FC, useEffect, useRef, useState } from 'react';
import { useEvent } from '@anton.bobrov/react-hooks';
import type { YouTubePlayer } from 'youtube-player/dist/types';
import { prefixedClasNames } from '../../../utils/prefixedClassNames';
import { IVideoPlayerYoutubeProps } from './types';

export const VideoPlayerYoutube: FC<IVideoPlayerYoutubeProps> = ({
  id,
  onLoad: onLoadProp,
  onPlayerReady: onPlayerReadyProp,
  ...props
}) => {
  const parentRef = useRef<HTMLDivElement>(null);

  const onLoad = useEvent(onLoadProp);
  const onPlayerReady = useEvent(onPlayerReadyProp);

  const [initialProps] = useState(props);

  useEffect(() => {
    let isDestryed = false;
    let player: YouTubePlayer | undefined;
    let playerCallbackDestructor: (() => void) | undefined;

    import('youtube-player')
      .then((module) => {
        if (isDestryed) {
          return;
        }

        const { current: parent } = parentRef;
        if (!parent) {
          onLoad?.();

          return;
        }

        player = module.default(parent, {
          videoId: id,
          playerVars: {
            modestbranding: 1,
            iv_load_policy: 3,
            enablejsapi: 1,
            ...initialProps,
          },
        });

        player.on('ready', () => onLoad?.());

        playerCallbackDestructor = onPlayerReady?.(player);
      })
      .catch(() => {});

    return () => {
      isDestryed = true;
      player?.destroy();
      playerCallbackDestructor?.();
    };
  }, [id, onLoad, onPlayerReady, initialProps]);

  return (
    <div className={prefixedClasNames('video-player-youtube')}>
      <div ref={parentRef} />
    </div>
  );
};
