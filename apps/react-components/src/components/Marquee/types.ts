import { IBaseComponent } from '@types';
import { NodeMarqueeProp } from 'node-marquee';
import { ReactElement } from 'react';

type TNodeMarqueePickedProps =
  | 'speed'
  | 'minQuantity'
  | 'pauseOnHover'
  | 'prependWhitespace';

export interface IMarqueeProps
  extends Pick<NodeMarqueeProp, TNodeMarqueePickedProps>,
    IBaseComponent {
  /** Marquee text */
  children: string | ReactElement;
  /** Aria-Label */
  ['aria-label']?: string;
  /** Element between text */
  separator?: string | ReactElement;
}
