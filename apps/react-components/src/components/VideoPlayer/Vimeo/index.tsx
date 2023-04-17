import React, { FC, useEffect, useRef } from 'react';
import { useEvent } from '@anton.bobrov/react-hooks';
import { IVideoPlayerVimeoProps } from './types';
import { prefixedClasNames } from '../../../utils/prefixedClassNames';

export const VideoPlayerVimeo: FC<IVideoPlayerVimeoProps> = ({
  id,
  onLoad: onLoadProp,
}) => {
  const parentRef = useRef<HTMLDivElement>(null);

  const onLoad = useEvent(onLoadProp);

  useEffect(() => {
    let isDestryed = false;
    let player: any | undefined;

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
          title: false,
          portrait: false,
        });

        player.on('loaded', () => onLoad?.());
      })
      .catch(() => {});

    return () => {
      isDestryed = true;
      player?.destroy();
    };
  }, [id, onLoad]);

  return (
    <div className={prefixedClasNames('video-player-vimeo')}>
      <div ref={parentRef} />
    </div>
  );
};
