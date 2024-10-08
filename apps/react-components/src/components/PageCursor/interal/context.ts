import { createContext } from 'react';
import { CustomCursor } from 'vevet';
import { IPageCursorType } from '../types';

export interface IPageCursorContext {
  cursor: CustomCursor | undefined;
  types: IPageCursorType[];
  setCursor?: (instance: CustomCursor | undefined) => void;
  addType?: (instance: IPageCursorType) => void;
  removeType?: (instance: IPageCursorType) => void;
}

const defaultValue: IPageCursorContext = {
  cursor: undefined,
  types: [],
};

export const PageCursorContext = createContext(defaultValue);
