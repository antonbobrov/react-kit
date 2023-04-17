import React, { forwardRef, useEffect, useState } from 'react';
import { IBaseImageProps } from './types';
import { getSrc, getSrcSet } from './utils';
import { placeholderImage } from './placeholderImage';

/**
 * Base image that supports adaptive paths
 */
export const BaseImage = forwardRef<HTMLImageElement, IBaseImageProps>(
  ({ src: srcProp, paths, srcSet: srcSetProp, ...props }, ref) => {
    const src = getSrc({ src: srcProp, paths });
    const [srcSet, setSrcSet] = useState<string | undefined>(placeholderImage);

    const width = paths?.width ?? props.width;
    const height = paths?.height ?? props.height;
    const alt = paths?.alt ?? props.alt;

    useEffect(() => {
      setSrcSet(getSrcSet({ srcSet: srcSetProp, paths }));
    }, [paths, srcSetProp]);

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
  }
);

BaseImage.displayName = 'BaseImage';
