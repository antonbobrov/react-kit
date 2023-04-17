import React, { forwardRef, useEffect, useState } from 'react';
import {
  useEvent,
  useForwardedRef,
  useOnInViewport,
} from '@anton.bobrov/react-hooks';
import cn from 'classnames';
import { prefixedClasNames } from '../../utils/prefixedClassNames';
import { ILazyImageProps } from './types';
import { placeholderImage } from '../BaseImage/placeholderImage';
import { BaseImage } from '../BaseImage';

export const LazyImage = forwardRef<HTMLImageElement, ILazyImageProps>(
  (
    {
      className,
      style,
      position = 'cover',
      onLoad: onLoadProp,
      hasAlpha = true,
      loading = 'lazy',
      ...tagProps
    },
    forwardedRef
  ) => {
    const ref = useForwardedRef(forwardedRef);

    const [isToBeLoaded, setIsToBeLoaded] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const onLoad = useEvent(onLoadProp);

    useOnInViewport({
      ref,
      onIn: () => {
        if (loading === 'lazy') {
          setIsToBeLoaded(true);
        }
      },
      onFallback: () => {
        if (loading === 'lazy') {
          setIsToBeLoaded(true);
        }
      },
      destroyOnIn: true,
    });

    useEffect(() => {
      if (loading === 'eager') {
        setIsToBeLoaded(true);
      }
    }, [loading]);

    const classNames = prefixedClasNames(
      'lazy-image',
      hasAlpha && 'has-alpha',
      position,
      isLoaded && 'is-loaded'
    );

    return (
      <BaseImage
        ref={ref}
        {...tagProps}
        className={cn(classNames, className)}
        style={style}
        srcSet={isToBeLoaded ? undefined : placeholderImage}
        onLoad={(event) => {
          if (isToBeLoaded) {
            setIsLoaded(true);
            onLoad?.(event.currentTarget);
          }
        }}
      />
    );
  }
);

LazyImage.displayName = 'LazyImage';
