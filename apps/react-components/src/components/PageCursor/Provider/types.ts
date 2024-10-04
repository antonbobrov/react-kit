import { ReactElement, ReactNode } from 'react';
import { CustomCursor, NCustomCursor } from 'vevet';
import { IPageCursorTypeProps } from '../Type/types';
import { IPageCursorType } from '../types';

export interface IPageCursorProviderProps
  extends Pick<NCustomCursor.IStaticProps, 'isNativeCursorHidden'>,
    Omit<NCustomCursor.IChangeableProps, 'isEnabled' | 'shouldAutoStop'> {
  children: ReactNode;
  /** Your custom cursors */
  cursors: ReactElement<IPageCursorTypeProps>[];
  /** The component is disabled */
  isDisabled?: boolean;
  /** Event on cursor creation */
  onInit?: (cursor: CustomCursor) => void;
  /** Event on cursor type change */
  onTypeChange?: (types: IPageCursorType[]) => void;
}
