import { Provider } from './Provider';
import { Element } from './Element';

Provider.displayName = 'ScrollView.Provider';
Element.displayName = 'ScrollView.Element';

export const ScrollView = {
  Provider,
  Element,
};

export * from './types';
export * from './utils/useScrollView';
