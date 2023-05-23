import type { YouTubePlayer, Options } from 'youtube-player/dist/types';

export interface IVideoPlayerYoutube
  extends NonNullable<Options['playerVars']> {}

export interface IVideoPlayerYoutubeProps extends IVideoPlayerYoutube {
  id: string;
  onLoad?: () => void;
  onPlayerReady?: (player: YouTubePlayer) => () => void;
}
