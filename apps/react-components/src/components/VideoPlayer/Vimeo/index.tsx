import React, { FC, useEffect, useRef, useState } from 'react';
import { useEvent } from '@anton.bobrov/react-hooks';
import type { Player } from '@vimeo/player';
import { IVideoPlayerVimeoProps } from './types';
import { prefixedClasNames } from '../../../utils/prefixedClassNames';

export const VideoPlayerVimeo: FC<IVideoPlayerVimeoProps> = ({
  id,
  onLoad: onLoadProp,
  onPlayerReady: onPlayerReadyProp,
  title = false,
  portrait = false,
  ...props
}) => {
  const parentRef = useRef<HTMLDivElement>(null);

  const onLoad = useEvent(onLoadProp);
  const onPlayerReady = useEvent(onPlayerReadyProp);

  const [initialProps] = useState(props);

  useEffect(() => {
    let isDestryed = false;
    let player: Player | undefined;
    let playerCallbackDestructor: (() => void) | undefined;

    import('@vimeo/player')
      .then((module) => {
        if (isDestryed) {
          return;
        }

        const { current: parent } = parentRef;
        if (!parent) {
          onLoad?.();

          return;
        }

        const { default: Player } = module;
        player = new Player(parent, {
          id: parseInt(id || '0', 10),
          title,
          portrait,
          ...initialProps,
        });

        player.on('loaded', () => onLoad?.());

        playerCallbackDestructor = onPlayerReady?.(player);
      })
      .catch(() => {});

    return () => {
      isDestryed = true;
      player?.destroy();
      playerCallbackDestructor?.();
    };
  }, [id, onLoad, onPlayerReady, portrait, title, initialProps]);

  return (
    <div className={prefixedClasNames('video-player-vimeo')}>
      <div ref={parentRef} />
    </div>
  );
};
