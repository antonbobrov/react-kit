export interface IVideoPlayerMp4Props {
  src: string;
  onLoad?: () => void;
  onVideoReady?: (video: HTMLVideoElement) => () => void;
  autoplay?: boolean;
  controls?: boolean;
  playsInline?: boolean;
}
