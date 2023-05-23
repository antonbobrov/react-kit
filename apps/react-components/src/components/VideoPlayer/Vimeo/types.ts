import type { Options, Player } from '@vimeo/player';

export type TVideoPlayerVimeoOmittedProps =
  | 'id'
  | 'url'
  | 'height'
  | 'maxheight'
  | 'maxwidth'
  | 'width';

export interface IVideoPlayerVimeo
  extends Omit<Options, TVideoPlayerVimeoOmittedProps> {
  /** @default false */
  portrait?: boolean;
  /** @default false */
  title?: boolean;
}

export interface IVideoPlayerVimeoProps extends IVideoPlayerVimeo {
  id: string;
  onLoad?: () => void;
  onPlayerReady?: (player: Player) => () => void;
}
