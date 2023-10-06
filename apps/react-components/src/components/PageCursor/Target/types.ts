import { ReactElement } from 'react';
import { TPageCursorType } from '../types';

export interface IPageCursorTargetProps {
  /** Cursor width */
  width?: number;
  /** Cursor height */
  height?: number;
  /** Cursor type */
  type?: TPageCursorType;
  children: ReactElement;
}
