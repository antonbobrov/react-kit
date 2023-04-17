import { ScrollView } from '@anton.bobrov/vevet-init';
import { createContext } from 'react';

export interface IScrollViewContext {
  scrollView: ScrollView | undefined;
}

const defaultValue: IScrollViewContext = {
  scrollView: undefined,
};

export const ScrollViewContext = createContext(defaultValue);
