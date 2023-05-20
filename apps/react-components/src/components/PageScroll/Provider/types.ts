import { ReactNode } from 'react';
import { NSmoothScroll } from '@anton.bobrov/vevet-init';

export interface IPageScrollProviderProps {
  smoothProps?: NSmoothScroll.ChangeableProp;
  canBeSmooth?: boolean | (() => boolean);
  children: ReactNode;
}
