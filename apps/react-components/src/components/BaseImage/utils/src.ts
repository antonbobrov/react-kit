import { utils } from '@anton.bobrov/vevet-init';
import { IBaseImageProps } from '../types';

interface IGetSrcProps extends Pick<IBaseImageProps, 'paths' | 'src'> {}

interface IGetSrcSetProps extends Pick<IBaseImageProps, 'paths' | 'srcSet'> {}

export function getSrc({ paths, src }: IGetSrcProps) {
  if (paths) {
    return paths.thumb || paths.original;
  }

  return src;
}

export function getSrcSet({ srcSet, paths }: IGetSrcSetProps) {
  if (srcSet) {
    return srcSet;
  }

  if (!paths) {
    return undefined;
  }

  const imagePaths = paths ? utils.image.pathsToProps(paths) : undefined;
  if (!imagePaths) {
    return undefined;
  }

  return imagePaths.srcSet || imagePaths.src;
}
