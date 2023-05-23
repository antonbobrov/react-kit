import { IBaseComponent } from '@types';
import { IVideoPlayerYoutubeProps } from './YouTube/types';
import { IVideoPlayerVimeoProps } from './Vimeo/types';

export type TVideoPlayerSource = 'mp4' | 'yt' | 'youtube' | 'vm' | 'vimeo';

export interface IVideoPlayer {
  source: TVideoPlayerSource;
  src?: string;
  id?: string;
}

export interface IVideoPlayerProps extends IVideoPlayer, IBaseComponent {
  onLoad?: () => void;
  youtubeProps?: Omit<IVideoPlayerYoutubeProps, 'id' | 'onLoad'>;
  vimeoProps?: Omit<IVideoPlayerVimeoProps, 'id' | 'onLoad'>;
}
