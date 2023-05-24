import { ReactNode } from 'react';
import { TPageCursorType } from '../types';

export interface IPageCursorTypeProps {
  type: TPageCursorType | TPageCursorType[];
  children: ReactNode;
}
