import { IBaseVideoProps } from '../BaseVideo/types';

export interface ILazyVideoProps extends IBaseVideoProps {
  /**
   * Positionate the video
   * @default 'cover'
   */
  position?: false | 'cover' | 'contain' | 'fullabs';
}
