import { ImgHTMLAttributes } from 'react';

export type TImageSizes = {
  640: string;
  750: string;
  1024: string;
  1440: string;
  1920: string;
  2560: string;
};

export interface IImagePaths {
  /** Original image path */
  original: string;
  /** Thumbnail path */
  thumb?: string;
  /** Thumbnail path (webp) */
  thumbWebp?: string;
  /** Orginal image width */
  width?: number;
  /** Orginal image height */
  height?: number;
  /** Alternate text */
  alt?: string;
}

export interface IImageAdaptivePaths extends IImagePaths {
  /** Adaptive images */
  sizes?: TImageSizes;
  /** Adaptive images (webp) */
  sizesWebp?: TImageSizes;
}

type TBaseAttributes = Omit<ImgHTMLAttributes<HTMLImageElement>, 'alt' | 'src'>;

export interface IBaseImageProps extends TBaseAttributes {
  /** Image paths */
  paths?: IImagePaths | IImageAdaptivePaths;
  /** Image `src` */
  src?: string;
  /** Alternate text */
  alt?: string;
}
