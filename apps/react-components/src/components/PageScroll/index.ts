import { Provider } from './Provider';
import { CustomContainer } from './CustomContainer';
import { ScrollBar } from './ScrollBar';

Provider.displayName = 'PageScroll.Provider';
CustomContainer.displayName = 'PageScroll.CustomContainer';
ScrollBar.displayName = 'PageScroll.ScrollBar';

/**
 * PageScroll component for creating a global context for page scrolling.
 *
 * This component provides a flexible system for managing scrolling behavior across
 * the entire application. It allows developers to implement a custom scroll experience
 * or utilize the native scroll functionality.
 * The PageScroll component also supports custom scrollbars, providing additional
 * styling and branding options.
 *
 * @link See examples https://antonbobrov.github.io/react-kit/?path=/story/scroll-pagescroll--default
 */
export const PageScroll = {
  /** Creates a global context for page scrolling */
  Provider,
  /** Container for custom scrolling */
  CustomContainer,
  /** Custom scrollbar */
  ScrollBar,
};

export * from './types';
export * from './hooks/usePageScrollSelector';
export * from './hooks/useOnPageScroll';
