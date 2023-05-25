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
  /**
   * Loading type
   * @default 'lazy'
   */
  loading?: IBaseImageProps['loading'];
  /**
   * Use native `lazy` attribute
   * @default false
   */
  isNativeLazy?: boolean;
}

export interface ILazyImageProps
  extends ILazyImageBaseProps,
    Omit<IBaseImageProps, 'loading' | 'onLoad'> {}
