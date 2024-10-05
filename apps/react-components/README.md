# `@anton.bobrov/react-components`

A collection of reusable React components designed to streamline development and enhance user interfaces.

### Links
- [Storybook Examples](https://antonbobrov.github.io/react-kit/): View live examples and documentation of each component.
- [Changelog](https://github.com/antonbobrov/react-kit/blob/develop/apps/react-components/CHANGELOG.md): Track updates, changes, and bug fixes.

## Installation

To install the package, use npm:

```bash
npm i "@anton.bobrov/react-components"
```

## Available Components

- **`BaseImage`**: A component for displaying images with optional features.
- **`BaseModal`**: A customizable modal dialog component.
- **`BasePopup`**: A component for creating popups that display additional information.
- **`BaseVideo`**: A component for rendering HTML5 videos.
- **`BaseVideoModal`**: A modal component designed specifically for video playback.
- **`ButtonAnchor`**: Button or Anchor element depending on props.
- **`ExpandContent`**: A collapsible content section for managing large blocks.
- **`FadeContent`**: A component for displaying content with fade-in and fade-out transitions.
- **`LazyImage`**: An image component that loads images lazily as they enter the viewport.
- **`LazyVideo`**: A video component that lazy-loads videos when they are in view.
- **`LinkClickInterceptor`**: A component for intercepting link clicks to perform custom actions.
- **`Marquee`**: A component for displaying scrolling text or content.
- **`ModalAnchor`**: A modal trigger component that opens modals when clicked.
- **`MoreContent`**: A component for revealing additional content on demand.
- **`PageCursor`**: A component for custom cursors.
- **`PageScroll`**: A component for managing global page scrolling with support for custom smooth scrolling and scrollbars.
- **`ScrollView`**: A component for monitoring elements entering and leaving the viewport.
- **`SplitText`**: A component for splitting text into letters, words, or lines.
- **`VideoPlayer`**: A component for rendering HTML5 videos or YouTube or Vimeo embedded players.

## Importing Styles

### All Styles
```scss
@import '~@anton.bobrov/react-components/lib/styles';
```

### Specific Component Styles
For example, to import styles for the LazyImage:
```scss
@import '~@anton.bobrov/react-components/lib/styles/components/LazyImage';
```
