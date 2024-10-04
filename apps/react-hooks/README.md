
# `@anton.bobrov/react-hooks`

A collection of custom React hooks and utility functions designed to simplify component logic and enhance performance. This library provides a robust set of hooks with full TypeScript support, offering solutions for common patterns in modern React applications.

### Links
- [Documentation](https://antonbobrov.github.io/react-kit/react-hooks/)

## Installation

To install the package, use npm:

```bash
npm i "@anton.bobrov/react-hooks"
```

## Usage

Here's an example of how to use one of the hooks, `useDebouncedEffect`, in your component:

```js
import { useDebouncedEffect } from '@anton.bobrov/react-hooks';
import React, { useState } from 'react';

export const MyComponent = () => {
  const [value, setValue] = useState('');

  useDebouncedEffect(
    () => {
      console.log('Debounced effect executed with value:', value);
    },
    [value],
    300, // Debounce delay in milliseconds
  );

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
```

## Available Hooks

Here are some of the available hooks and what they do:

- **`useChange`**: Tracks changes to a property.
- **`useClientHeight`**: Retrieves and tracks the client height of an element.
- **`useClientSize`**: Retrieves and tracks the client width and height of an element.
- **`useClientWidth`**: Retrieves and tracks the client width of an element.
- **`useDebouncedEffect`**: Runs an effect after a specified debounce delay.
- **`useDebouncedEvent`**: Debounces a callback.
- **`useDebouncedProp`**: Debounces updates to a prop value.
- **`useDomId`**: Generates a unique DOM element ID.
- **`useDOMRect`**: Tracks the size and position of an element.
- **`useEvent`**: Create a stable link for a callback function.
- **`useEventListener`**: Adds event listeners to DOM elements.
- **`useFocus`**: Detects focus state of an element.
- **`useFocusIn`**: Detects focus inside a given element.
- **`useFocusTrap`**: Traps focus within a specific container.
- **`useForwardedRef`**: Forwards refs in components.
- **`useHover`**: Detects hover state on an element.
- **`useIntersectionObserver`**: Uses the IntersectionObserver API to track visibility of elements.
- **`useIsOnceMounted`**: Returns true if the component has been mounted once.
- **`useLiteInteraction`**: Detect a slight user interaction with elements.
- **`useLocalStorage`**: A hook to work with the `localStorage` API.
- **`useMouseClientPosition`**: Tracks the mouse position relative to the client window.
- **`useOffsetHeight`**: Retrieves and tracks the offset height of an element.
- **`useOffsetSize`**: Tracks the offset size of an element.
- **`useOffsetWidth`**: Retrieves and tracks the offset width of an element.
- **`useOnceProp`**: Updates the state only once when the current value matches the target value.
- **`useOnElementResize`**: Listens for resize events on a specific element.
- **`useOnEscape`**: Executes a callback when the Escape key is pressed.
- **`useOnInViewport`**: Detects when an element enters or leaves the viewport.
- **`useOnLazyIntersection`**: Tracks element visibility with lazy loading behavior.
- **`useOutsideClick`**: Detects clicks outside a specific element.
- **`usePointerHover`**: Detects hover state using pointer events.
- **`usePreventDocumentScrolling`**: Temporarily prevents document scrolling.
- **`usePrevious`**: Tracks the previous value of a variable.
- **`usePropState`**: Creates a state that automatically synchronizes with an external value.
- **`useScrollLock`**: Locks the scroll behavior of an element.

## Available Utilities

In addition to hooks, the package also provides several utility functions:

- **`splitIntoChunks`**: Splits an array into chunks.
- **`uniqueArray`**: Returns an array with unique values.
- **`addEventListener`**: Adds an event listener to a target.
- **`getSiblingsFocusableElements`**: Retrieves focusable sibling elements.
- **`resetFocus`**: Resets focus to a specific element.
- **`selectFocusableChildren`**: Selects focusable children within an element.
- **`isBrowser`**: Checks if the code is running in a browser environment.
- **`isServer`**: Checks if the code is running in a server environment.
- **`getRandomInt`**: Generates a random integer.
- **`cleanTelephone`**: Cleans telephone strings.
- **`removeDuplicateSlashes`**: Removes duplicate slashes from a URL or path.
- **`isBoolean`**: Checks if a value is a boolean.
- **`isNumber`**: Checks if a value is a number.
- **`isString`**: Checks if a value is a string.
- **`isUndefined`**: Checks if a value is undefined.
