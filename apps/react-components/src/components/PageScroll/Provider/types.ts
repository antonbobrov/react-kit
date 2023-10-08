import { ReactNode } from 'react';
import { NSmoothScroll, SmoothScroll } from '@anton.bobrov/vevet-init';

export interface IPageScrollProviderProps {
  children: ReactNode;
  /** Define if global scrolling should be custom */
  canBeSmooth?: boolean | (() => boolean);
  /** Smooth scrolling properties */
  smoothProps?: NSmoothScroll.IChangeableProps;
  /** Callback on smooth scroll initialization */
  onSmoothInit?: (smoothScroll: SmoothScroll) => void;
}
