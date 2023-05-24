import { Provider } from './Provider';
import { Target } from './Target';
import { Type } from './Type';

Provider.displayName = 'PageCursor.Provider';
Target.displayName = 'PageCursor.Target';
Type.displayName = 'PageCursor.Type';

export const PageCursor = {
  Provider,
  Target,
  Type,
};

export * from './Provider/types';
export * from './Target/types';
export * from './Type/types';

export * from './types';
export * from './hooks';
