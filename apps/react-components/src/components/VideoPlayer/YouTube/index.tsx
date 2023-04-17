import React, { FC, useEffect, useRef } from 'react';
import { useEvent } from '@anton.bobrov/react-hooks';
import { prefixedClasNames } from '../../../utils/prefixedClassNames';
import { IVideoPlayerYoutubeProps } from './types';

export const VideoPlayerYoutube: FC<IVideoPlayerYoutubeProps> = ({
  id,
  onLoad: onLoadProp,
}) => {
  const parentRef = useRef<HTMLDivElement>(null);

  const onLoad = useEvent(onLoadProp);

  useEffect(() => {
    let isDestryed = false;
    let player: any | undefined;

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
          },
        });

        player.on('ready', () => onLoad?.());
      })
      .catch(() => {});

    return () => {
      isDestryed = true;
      player?.destroy();
    };
  }, [id, onLoad]);

  return (
    <div className={prefixedClasNames('video-player-youtube')}>
      <div ref={parentRef} />
    </div>
  );
};
