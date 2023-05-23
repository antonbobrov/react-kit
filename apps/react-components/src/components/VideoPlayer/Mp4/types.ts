import type Player from 'video.js/dist/types/player';

export interface IVideoPlayerMp4Props {
  src: string;
  onLoad?: () => void;
  onVideoReady?: (video: HTMLVideoElement) => () => void;
  onPlayerReady?: (player: Player) => () => void;
  autoplay?: boolean;
  controls?: boolean;
  playsInline?: boolean;
}
