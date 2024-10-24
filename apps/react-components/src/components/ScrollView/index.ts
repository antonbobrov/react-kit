import { Provider } from './Provider';
import { Element } from './Element';

Provider.displayName = 'ScrollView.Provider';
Element.displayName = 'ScrollView.Element';
/**
 * ScrollView component for detecting when elements enter or leave the viewport.
 *
 * This component is responsible for monitoring the visibility of its child elements,
 * providing a way to trigger callbacks when elements enter or exit the viewport.
 * It supports customizable delays for these callbacks, allowing for greater control
 * over the timing of the visibility events.
 *
 * @link See examples https://antonbobrov.github.io/react-kit/?path=/docs/scroll-scrollvew--docs
 *
 * @requires Requires styles: `@import '~@anton.bobrov/react-components/lib/styles/components/ScrollView';`
 */
export const ScrollView = {
  /**
   * Create a global contexts for ScrollView
   *
   * @requires Requires styles: `@import '~@anton.bobrov/react-components/lib/styles/components/ScrollView';` */
  Provider,
  /**
   * Wraps each element that should be monitored
   *
   * @requires Requires styles: `@import '~@anton.bobrov/react-components/lib/styles/components/ScrollView';` */
  Element,
};

export * from './types';
export * from './utils/useScrollView';
export * from './utils/useScrollViewAnimationTrigger';
