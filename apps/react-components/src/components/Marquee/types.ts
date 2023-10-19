import { NMarquee } from '@anton.bobrov/vevet-init';
import { IBaseComponent } from '@types';
import { ReactElement } from 'react';

export interface IMarqueeProps
  extends NMarquee.IChangeableProps,
    IBaseComponent {
  /** Marquee text */
  children: string | ReactElement;
  /** Aria-Label */
  ['aria-label']?: string;
  /** Element between text */
  separator?: string | ReactElement;
}
