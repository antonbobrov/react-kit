import { VideoHTMLAttributes } from 'react';

export interface IBaseVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  /**
   * Won't work if `autoPlay` is true
   */
  isPlaying?: boolean;
}
