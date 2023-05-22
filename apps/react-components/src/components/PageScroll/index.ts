import { Provider } from './Provider';
import { SmoothContainer } from './SmoothContainer';
import { ScrollBar } from './ScrollBar';

Provider.displayName = 'PageScroll.Provider';
SmoothContainer.displayName = 'PageScroll.SmoothContainer';
ScrollBar.displayName = 'PageScroll.ScrollBar';

export const PageScroll = {
  Provider,
  SmoothContainer,
  ScrollBar,
};

export * from './types';
export * from './hooks/usePageScrollSelector';
export * from './hooks/useOnPageScroll';
