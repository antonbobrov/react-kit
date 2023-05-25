import { ReactElement, ReactNode } from 'react';
import { CustomCursor, NCustomCursor } from '@anton.bobrov/vevet-init';
import { IPageCursorTypeProps } from '../Type/types';
import { IPageCursorType } from '../types';

export interface IPageCursorProviderProps {
  children: ReactNode;
  /** Your custom cursors */
  cursors: ReactElement<IPageCursorTypeProps>[];
  /** The component is disabled */
  isDisabled?: boolean;
  /** Event on cursor creation */
  onInit?: (cursor: CustomCursor) => void;
  /** Event on cursor type change */
  onTypeChange?: (types: IPageCursorType[]) => void;
  /** Hide native cursor */
  isNativeCursorHidden?: boolean;
  /** Cursor size */
  size?: NCustomCursor.ChangeableProp['size'];
  /** Render properties */
  render?: NCustomCursor.ChangeableProp['render'];
  /** Hover properties */
  hover?: NCustomCursor.ChangeableProp['hover'];
}
