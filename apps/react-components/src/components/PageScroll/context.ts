import { createContext } from 'react';
import { TPageScrollSelector } from './types';

export interface IPageScrollContext {
  selector?: TPageScrollSelector;
  setSelector?: (selector: TPageScrollSelector) => void;
  customContainer?: HTMLElement | null;
  setCustomContainer?: (element: HTMLElement | null) => void;
}

export const PageScrollContext = createContext<IPageScrollContext>({});
