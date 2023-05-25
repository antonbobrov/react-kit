import { IBaseComponent } from '@types';
import { IVideoPlayerYoutubeProps } from './YouTube/types';
import { IVideoPlayerVimeoProps } from './Vimeo/types';

export type TVideoPlayerSource = 'mp4' | 'yt' | 'youtube' | 'vm' | 'vimeo';

export interface IVideoPlayer {
  /** Video source type */
  source: TVideoPlayerSource;
  /** Video source (when want to use html video) */
  src?: string;
  /** Video id (when want to use youtube or vimeo) */
  id?: string;
}

export interface IVideoPlayerProps extends IVideoPlayer, IBaseComponent {
  /** Event on player loaded */
  onLoad?: () => void;
  /** YouTube player props */
  youtubeProps?: Omit<IVideoPlayerYoutubeProps, 'id' | 'onLoad'>;
  /** Vimeo player props */
  vimeoProps?: Omit<IVideoPlayerVimeoProps, 'id' | 'onLoad'>;
}
