import { IBaseImageProps } from '../BaseImage/types';

export interface ILazyImageBaseProps {
  /**
   * Image position
   * @default 'cover'
   */
  position?: false | 'cover' | 'contain' | 'fullabs';
  /**
   * The event occurs when the image is loaded
   */
  onLoad?: (image: HTMLImageElement) => void;
  /**
   * Use opacity animation
   * @default true
   */
  hasAlpha?: boolean;
  /** Loading type */
  loading?: IBaseImageProps['loading'];
}

export interface ILazyImageProps
  extends ILazyImageBaseProps,
    Omit<IBaseImageProps, 'loading' | 'onLoad'> {}

export interface IImageProps {
  /** Image position */
  $position: ILazyImageBaseProps['position'];
  /** Use opacity animation */
  $hasAlpha: ILazyImageBaseProps['hasAlpha'];
  /** The image is loaded */
  $isLoaded: boolean;
}
