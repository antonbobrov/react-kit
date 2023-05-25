import { ReactNode } from 'react';
import { TPageCursorType } from '../types';

export interface IPageCursorTypeProps {
  /** Cursor type that will be used to enable it in hooks or `PageCursor.Target` */
  type: TPageCursorType | TPageCursorType[];
  children: ReactNode;
}
