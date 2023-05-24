import { ReactElement, ReactNode } from 'react';
import { CustomCursor, NCustomCursor } from '@anton.bobrov/vevet-init';
import { IPageCursorTypeProps } from '../Type/types';
import { IPageCursorType } from '../types';

export interface IPageCursorProviderProps {
  children: ReactNode;
  cursors: ReactElement<IPageCursorTypeProps>[];
  onInit?: (cursor: CustomCursor) => void;
  onTypeChange?: (types: IPageCursorType[]) => void;
  isNativeCursorHidden?: boolean;
  size?: NCustomCursor.ChangeableProp['size'];
  render?: NCustomCursor.ChangeableProp['render'];
  hover?: NCustomCursor.ChangeableProp['hover'];
}
