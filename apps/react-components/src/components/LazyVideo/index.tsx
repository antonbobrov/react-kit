import cn from 'classnames';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { useOnInViewport } from '@anton.bobrov/react-hooks';
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

    useOnInViewport({
      ref: wrapperRef,
      onIn: () => setCanLoad(true),
      rootMargin: '0% 0% 175% 0%',
      destroyOnIn: true,
      isDisabled: loading === 'eager',
    });

    useEffect(() => {
      if (loading === 'eager') {
        setCanLoad(true);
      }
    }, [loading]);

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
            className="js-preload-ignore"
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
