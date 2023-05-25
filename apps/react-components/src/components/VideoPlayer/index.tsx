import React, { FC, useEffect, useState } from 'react';
import { useEvent } from '@anton.bobrov/react-hooks';
import cn from 'classnames';
import { prefixedClasNames } from '../../utils/prefixedClassNames';
import { IVideoPlayerProps } from './types';
import { VideoPlayerVimeo } from './Vimeo';
import { VideoPlayerYoutube } from './YouTube';
import { VideoPlayerMp4 } from './Mp4';

/** Custom video player */
export const VideoPlayer: FC<IVideoPlayerProps> = ({
  className,
  style,
  source,
  src,
  id,
  onLoad: onLoadProp,
  youtubeProps,
  vimeoProps,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const onLoad = useEvent(onLoadProp);

  useEffect(() => {
    if (isLoaded) {
      onLoad?.();
    }
  }, [isLoaded, onLoad]);

  const loadedClassName = prefixedClasNames('loaded');

  const classNames = cn(
    prefixedClasNames('video-player'),
    isLoaded && loadedClassName,
    className
  );

  if (source === 'mp4' && !!src) {
    return (
      <div className={classNames} style={style}>
        <VideoPlayerMp4 src={src} onLoad={() => setIsLoaded(true)} />
      </div>
    );
  }

  if (['yt', 'youtube'].includes(source) && !!id) {
    return (
      <div className={classNames} style={style}>
        <VideoPlayerYoutube
          {...youtubeProps}
          id={id}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    );
  }

  if (['vm', 'vimeo'].includes(source) && !!id) {
    return (
      <div className={classNames} style={style}>
        <VideoPlayerVimeo
          {...vimeoProps}
          id={id}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    );
  }

  return (
    <div className={cn(classNames, loadedClassName)} style={style}>
      Unexpected video source
    </div>
  );
};

export * from './Mp4';
export * from './Mp4/types';

export * from './Vimeo';
export * from './Vimeo/types';

export * from './YouTube';
export * from './YouTube/types';
