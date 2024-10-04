# `@anton.bobrov/react-vevet-hooks`

A collection of custom React hooks designed to seamlessly integrate with the `Vevet` library, providing enhanced functionalities for your React applications.

### Links
- [Documentation](https://antonbobrov.github.io/react-kit/react-vevet-hooks/)
- [Changelog](https://github.com/antonbobrov/react-kit/blob/develop/apps/react-vevet-hooks/CHANGELOG.md)

## Installation

To install the package, use npm:

```bash
npm i "@anton.bobrov/react-vevet-hooks"
```

## Usage

Here's an example of how to use one of the hooks, `useAnimationFrame`, in your component:

```js
import { useAnimationFrame } from '@anton.bobrov/react-vevet-hooks';
import React from 'react';

const MyComponent = () => {
  const { play, pause } = useAnimationFrame({
    onPlay: () => console.log('Animation started'),
    onPause: () => console.log('Animation paused'),
    onFrame: ({ fpsMultiplier }) => {
      console.log('Frame updated, FPS Multiplier:', fpsMultiplier);
    },
  });

  return (
    <div>
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
    </div>
  );
};
```

## Available Hooks

Here are available hooks and what they do:

- **`useAnimationFrame`**: Creates an animation frame instance, allowing for customizable animation properties and callbacks.
- **`useAnimationFrameSync`**: Synchronizes animation frame data using linear interpolation.
- **`useBreakpointName`**: Detects the current viewport breakpoint name.
- **`useDraggerDirection`**: Utilizes `vevet`'s `DraggerDirection` for detecting swipe gestures.
- **`useIsMobile`**: Determines if the current device is mobile.
- **`useIsViewportDesktop`**: Checks if the current viewport breakpoint is 'desktop'.
- **`useIsViewportPhone`**: Checks if the current viewport breakpoint is 'phone'.
- **`useIsViewportTablet`**: Checks if the current viewport breakpoint is 'tablet'.
- **`useNonMobileHover`**: Detects hover state on non-mobile devices.
- **`useNonMobilePointerHover`**: Detects pointer hover state on non-mobile devices.
- **`useOnPageLoad`**: Triggers an effect once the page has fully loaded.
- **`useOnResize`**: Listens for viewport resize events.
- **`useOnViewportOritentationChange`**: Listens for viewport orientation change.
- **`useTimeline`**: Creates a `vevet` timeline instance and sets up event callbacks for timeline events.
- **`useViewportOrientation`**: Detects the current viewport orientation.
- **`useViewportSize`**: Provides the current size of the viewport.
