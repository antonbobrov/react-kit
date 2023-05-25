import type Player from 'video.js/dist/types/player';

export interface IVideoPlayerMp4Props {
  /** Video source */
  src: string;
  /** Event on video loaded */
  onLoad?: () => void;
  /** Event on video ready */
  onVideoReady?: (video: HTMLVideoElement) => () => void;
  /** Event on player ready */
  onPlayerReady?: (player: Player) => () => void;
  /** Autoplay video */
  autoplay?: boolean;
  /** Use video controls */
  controls?: boolean;
  /** playsInline */
  playsInline?: boolean;
}
