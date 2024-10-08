import React, { forwardRef, useEffect, useState } from 'react';
import { IBaseImageProps } from './types';
import { getSrc, getSrcSet } from './utils/src';
import { generatePlaceholderImage } from './utils/generatePlaceholderImage';

/**
 * BaseImage component for rendering images. It supports adaptive paths
 * to ensure optimal image loading based on the device or screen size.
 *
 * @link See examples https://antonbobrov.github.io/react-kit/?path=/docs/image-baseimage--docs
 */
export const BaseImage = forwardRef<HTMLImageElement, IBaseImageProps>(
  ({ src: srcProp, paths, srcSet: srcSetProp, ...props }, ref) => {
    const width = paths?.width ?? props.width;
    const height = paths?.height ?? props.height;

    const src = getSrc({ src: srcProp, paths });

    const [srcSet, setSrcSet] = useState<string | undefined>(
      generatePlaceholderImage(width, height),
    );

    useEffect(() => {
      setSrcSet(getSrcSet({ srcSet: srcSetProp, paths }));
    }, [paths, srcSetProp]);

    const alt = paths?.alt ?? props.alt ?? src;

    return (
      <img
        {...props}
        ref={ref}
        src={src}
        srcSet={srcSet}
        width={width}
        height={height}
        alt={alt}
      />
    );
  },
);

BaseImage.displayName = 'BaseImage';
