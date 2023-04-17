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
  original: string;
  thumb?: string;
  thumbWebp?: string;
  width?: number;
  height?: number;
  alt?: string;
}

export interface IImageAdaptivePaths extends IImagePaths {
  sizes?: TImageSizes;
  sizesWebp?: TImageSizes;
}

type TBaseAttributes = Omit<ImgHTMLAttributes<HTMLImageElement>, 'alt' | 'src'>;

export interface IBaseImageProps extends TBaseAttributes {
  paths?: IImagePaths | IImageAdaptivePaths;
  src?: string;
  alt?: string;
}
