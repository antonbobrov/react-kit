import { IBaseComponent } from '@types';

export type TVideoPlayerSource = 'mp4' | 'yt' | 'youtube' | 'vm' | 'vimeo';

export interface IVideoPlayer {
  source: TVideoPlayerSource;
  src?: string;
  id?: string;
}

export interface IVideoPlayerProps extends IVideoPlayer, IBaseComponent {
  onLoad?: () => void;
}
