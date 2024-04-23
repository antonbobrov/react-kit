import { IBaseVideoProps } from '../BaseVideo/types';

export interface ILazyVideoProps extends IBaseVideoProps {
  /**
   * Positionate the video
   * @default 'cover'
   */
  position?: false | 'cover' | 'contain' | 'fullabs';
  /**
   * Loading type
   * @default 'lazy'
   */
  loading?: 'eager' | 'lazy';
  /**
   * Use opacity animation
   * @default true
   */
  hasAlpha?: boolean;
}
