import { ReactElement, ReactNode } from 'react';
import { NCustomCursor } from '@anton.bobrov/vevet-init';
import { IPageCursorTypeProps } from '../Type/types';

export interface IPageCursorProviderProps {
  children: ReactNode;
  cursors: ReactElement<IPageCursorTypeProps>[];
  isNativeCursorHidden?: boolean;
  size?: NCustomCursor.ChangeableProp['size'];
  render?: NCustomCursor.ChangeableProp['render'];
  hover?: NCustomCursor.ChangeableProp['hover'];
}
