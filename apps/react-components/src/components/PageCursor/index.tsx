import { Provider } from './Provider';
import { Target } from './Target';
import { Type } from './Type';

Provider.displayName = 'PageCursor.Provider';
Target.displayName = 'PageCursor.Target';
Type.displayName = 'PageCursor.Type';

/**
 * PageCursor.Provider is responsible for creating custom cursors.
 *
 * @link See examples https://antonbobrov.github.io/react-kit/?path=/docs/cursor-pagecursor--docs
 *
 * @requires Requires styles: `@import '~@anton.bobrov/react-components/lib/styles/components/PageCursor';`
 */
export const PageCursor = {
  /**
   * PageCursor.Provider component for creating a global context for custom cursors.
   *
   * This component allows for the creation and management of multiple cursor types
   * within a single application. It provides a flexible system for enabling or disabling
   * different cursor styles through the hooks `usePageCursorSetSize`, responsible for
   * changing the cursor size, and `usePageCursorType`.
   *
   * @requires Requires styles: `@import '~@anton.bobrov/react-components/lib/styles/components/PageCursor';`
   */
  Provider,
  /**
   * Wraps elements and sets a definite type of cursor or changes the cursor size when the element is hovered
   *
   * @requires Requires styles: `@import '~@anton.bobrov/react-components/lib/styles/components/PageCursor';` */
  Target,
  /**
   * Creates a new type of custom cursor
   *
   * @requires Requires styles: `@import '~@anton.bobrov/react-components/lib/styles/components/PageCursor';` */
  Type,
};

export * from './Provider/types';
export * from './Target/types';
export * from './Type/types';

export * from './types';
export * from './hooks';
