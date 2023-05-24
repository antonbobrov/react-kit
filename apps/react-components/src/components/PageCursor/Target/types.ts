import { ReactElement } from 'react';
import { NCustomCursor } from '@anton.bobrov/vevet-init';
import { TPageCursorType } from '../types';

export interface IPageCursorTargetProps {
  size?: number | NCustomCursor.ChangeableProp['size'];
  type?: TPageCursorType;
  children: ReactElement;
}
