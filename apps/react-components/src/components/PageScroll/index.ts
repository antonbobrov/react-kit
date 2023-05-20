import { Provider } from './Provider';
import { SmoothContainer } from './SmoothContainer';

Provider.displayName = 'PageScroll.Provider';
SmoothContainer.displayName = 'PageScroll.SmoothContainer';

export const PageScroll = {
  Provider,
  SmoothContainer,
};

export * from './types';
export * from './hooks/usePageScrollSelector';
