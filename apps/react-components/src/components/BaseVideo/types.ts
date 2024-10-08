import { VideoHTMLAttributes } from 'react';

export interface IBaseVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  /**
   * Used to play/pause the video. Won't work if `autoPlay` is true
   */
  isPlaying?: boolean;
}
