import { IBaseModalProps } from '../BaseModal/types';
import { IVideoPlayer } from '../VideoPlayer/types';
import {
  TGetBaseVideoModalWrapperSize,
  TBaseVideoModalWrapperSize,
} from './utils';

export interface IBaseVideoModalProps
  extends Omit<IBaseModalProps, 'children'> {
  /** Video player props */
  player: IVideoPlayer;
  /** Get container size */
  getWrapperSize?: TGetBaseVideoModalWrapperSize;
}

export type { TGetBaseVideoModalWrapperSize, TBaseVideoModalWrapperSize };
