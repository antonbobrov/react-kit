import { Provider } from './Provider';
import { CustomContainer } from './CustomContainer';
import { ScrollBar } from './ScrollBar';

Provider.displayName = 'PageScroll.Provider';
CustomContainer.displayName = 'PageScroll.CustomContainer';
ScrollBar.displayName = 'PageScroll.ScrollBar';

export const PageScroll = {
  Provider,
  CustomContainer,
  ScrollBar,
};

export * from './types';
export * from './hooks/usePageScrollSelector';
export * from './hooks/useOnPageScroll';
