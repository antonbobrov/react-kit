import { ReactElement } from 'react';
import { NCustomCursor } from '@anton.bobrov/vevet-init';
import { TPageCursorType } from '../types';

export interface IPageCursorTargetProps {
  /** Cursor size */
  size?: number | NCustomCursor.ChangeableProp['size'];
  /** Cursor type */
  type?: TPageCursorType;
  children: ReactElement;
}
