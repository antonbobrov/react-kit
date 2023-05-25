import { ReactNode } from 'react';
import { NSmoothScroll } from '@anton.bobrov/vevet-init';

export interface IPageScrollProviderProps {
  /** Smooth scrolling properties */
  smoothProps?: NSmoothScroll.ChangeableProp;
  /** Define if global scrolling should be custom */
  canBeSmooth?: boolean | (() => boolean);
  children: ReactNode;
}
