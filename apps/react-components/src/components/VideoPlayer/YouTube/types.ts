import type { YouTubePlayer, Options } from 'youtube-player/dist/types';

export interface IVideoPlayerYoutube
  extends NonNullable<Options['playerVars']> {}

export interface IVideoPlayerYoutubeProps extends IVideoPlayerYoutube {
  /** Video ID from youtube */
  id: string;
  /** Event on video loaded */
  onLoad?: () => void;
  /** Event on player ready */
  onPlayerReady?: (player: YouTubePlayer) => () => void;
}
