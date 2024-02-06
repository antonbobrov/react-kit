import React, { forwardRef, useEffect, useState } from 'react';
import {
  useEvent,
  useForwardedRef,
  useOnLazyIntersection,
} from '@anton.bobrov/react-hooks';
import cn from 'classnames';
import { generatePlaceholderImage } from '../BaseImage/utils/generatePlaceholderImage';
import { prefixedClasNames } from '../../utils/prefixedClassNames';
import { ILazyImageProps } from './types';
import { BaseImage } from '../BaseImage';

/** Lazy image component */
export const LazyImage = forwardRef<HTMLImageElement, ILazyImageProps>(
  (
    {
      className,
      style,
      position = 'cover',
      onLoad: onLoadProp,
      hasAlpha = true,
      loading = 'lazy',
      paths,
      ...tagProps
    },
    forwardedRef,
  ) => {
    const ref = useForwardedRef(forwardedRef);

    const [isLoaded, setIsLoaded] = useState(false);
    const [canLoad, setCanLoad] = useState(false);

    const onLoad = useEvent(onLoadProp);

    const width = paths?.width ?? tagProps.width;
    const height = paths?.height ?? tagProps.height;
    const isLazy = loading === 'lazy';

    useOnLazyIntersection({
      ref,
      onIn: () => setCanLoad(true),
      isDisabled: !isLazy,
    });

    useEffect(() => {
      if (!isLazy) {
        setCanLoad(true);
      }
    }, [isLazy]);

    const classNames = prefixedClasNames(
      'lazy-image',
      'js-preload-ignore',
      hasAlpha && 'has-alpha',
      position,
      isLoaded && 'is-loaded',
    );

    return (
      <BaseImage
        ref={ref}
        {...tagProps}
        className={cn(classNames, className)}
        style={style}
        loading={undefined}
        paths={paths}
        srcSet={canLoad ? undefined : generatePlaceholderImage(width, height)}
        onLoad={(event) => {
          if (canLoad) {
            setIsLoaded(true);
            onLoad?.(event.currentTarget);
          }
        }}
      />
    );
  },
);

LazyImage.displayName = 'LazyImage';
