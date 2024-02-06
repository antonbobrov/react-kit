import cn from 'classnames';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { useOnLazyIntersection } from '@anton.bobrov/react-hooks';
import { ILazyVideoProps } from './types';
import { BaseVideo } from '../BaseVideo';
import { prefixedClasNames } from '../../utils/prefixedClassNames';

/** Lazy video component */
export const LazyVideo = forwardRef<HTMLVideoElement, ILazyVideoProps>(
  (
    {
      className,
      style,
      position = 'cover',
      onLoadedMetadata,
      loading = 'lazy',
      ...videoProps
    },
    ref,
  ) => {
    const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null);
    useImperativeHandle(ref, () => videoRef!);

    const wrapperRef = useRef<HTMLDivElement>(null);

    const [canLoad, setCanLoad] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const isLazy = loading === 'lazy';

    useOnLazyIntersection({
      ref: wrapperRef,
      onIn: () => setCanLoad(true),
      isDisabled: !isLazy,
    });

    useEffect(() => {
      if (!isLazy) {
        setCanLoad(true);
      }
    }, [isLazy]);

    const classNames = prefixedClasNames(
      'lazy-video',
      position,
      isLoaded && 'is-loaded',
    );

    return (
      <div ref={wrapperRef} className={cn(className, classNames)} style={style}>
        {canLoad && (
          <BaseVideo
            ref={setVideoRef}
            {...videoProps}
            className={isLazy ? 'js-preload-ignore' : undefined}
            onLoadedMetadata={(event) => {
              onLoadedMetadata?.(event);
              setIsLoaded(true);
            }}
          />
        )}
      </div>
    );
  },
);

LazyVideo.displayName = 'LazyVideo';
