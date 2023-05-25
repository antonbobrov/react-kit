import React, { forwardRef, useState } from 'react';
import { useEvent, useForwardedRef } from '@anton.bobrov/react-hooks';
import cn from 'classnames';
import { generatePlaceholderImage } from '../BaseImage/utils/generatePlaceholderImage';
import { prefixedClasNames } from '../../utils/prefixedClassNames';
import { ILazyImageProps } from './types';
import { BaseImage } from '../BaseImage';
import { useLazyImageStates } from './useLazyImageStates';

/** Lazy image component */
export const LazyImage = forwardRef<HTMLImageElement, ILazyImageProps>(
  (
    {
      className,
      style,
      position = 'cover',
      onLoad: onLoadProp,
      hasAlpha = true,
      loading: loadingProp = 'lazy',
      isNativeLazy = false,
      ...tagProps
    },
    forwardedRef
  ) => {
    const ref = useForwardedRef(forwardedRef);

    const onLoad = useEvent(onLoadProp);

    const [isLoaded, setIsLoaded] = useState(false);

    const classNames = prefixedClasNames(
      'lazy-image',
      hasAlpha && 'has-alpha',
      position,
      isLoaded && 'is-loaded'
    );

    const width = tagProps?.width ?? tagProps.width;
    const height = tagProps?.height ?? tagProps.height;

    const { isToBeLoaded, loading } = useLazyImageStates({
      ref,
      loading: loadingProp,
      isNativeLazy,
    });

    return (
      <BaseImage
        ref={ref}
        {...tagProps}
        className={cn(classNames, className)}
        style={style}
        loading={loading}
        srcSet={
          isToBeLoaded ? undefined : generatePlaceholderImage(width, height)
        }
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
