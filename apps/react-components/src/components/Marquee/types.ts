import { Marquee, NMarquee } from 'vevet';
import { IBaseComponent } from '@types';
import { ReactElement } from 'react';

export interface IMarqueeProps
  extends NMarquee.IChangeableProps,
    IBaseComponent {
  /** Marquee text */
  children: string | ReactElement | ReactElement[];
  /** Aria-Label */
  ['aria-label']?: string;
  /**
   * If need to clone nodes for a better animation. True is not recommended for react apps.
   * @default false
   */
  canCloneNodes?: boolean;
  /**
   * Event on marquee initialization
   */
  onInit?: (instance: Marquee) => void;
}
