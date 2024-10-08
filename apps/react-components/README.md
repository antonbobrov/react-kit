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

- **`BaseImage`** ([Demo](https://antonbobrov.github.io/react-kit/?path=/docs/image-baseimage--docs)): A component for displaying images with optional features.
- **`BaseModal`** ([Demo](https://antonbobrov.github.io/react-kit/?path=/docs/modals-basemodal--docs)): A customizable modal dialog component.
- **`BasePopup`** ([Demo](https://antonbobrov.github.io/react-kit/?path=/docs/popups-basepopup--docs)): A component for creating popups that display additional information.
- **`BaseVideo`**: ([Demo](https://antonbobrov.github.io/react-kit/?path=/docs/video-basevideo--docs)): A component for rendering HTML5 videos.
- **`BaseVideoModal`**: ([Demo](https://antonbobrov.github.io/react-kit/?path=/docs/modals-basevideomodal--docs)): A modal component designed specifically for video playback.
- **`ButtonAnchor`**: ([Demo](https://antonbobrov.github.io/react-kit/?path=/docs/elements-buttonanchor--docs)): Button or Anchor element depending on props.
- **`ExpandContent`**: ([Demo](https://antonbobrov.github.io/react-kit/?path=/docs/wrappers-expandcontent--docs)): A collapsible content section for managing large blocks.
- **`FadeContent`**: ([Demo](https://antonbobrov.github.io/react-kit/?path=/docs/wrappers-fadecontent--docs)): A component for displaying content with fade-in and fade-out transitions.
- **`LazyImage`**: ([Demo](https://antonbobrov.github.io/react-kit/?path=/docs/image-lazyimage--docs)): An image component that loads images lazily as they enter the viewport.
- **`LazyVideo`**: ([Demo](https://antonbobrov.github.io/react-kit/?path=/docs/video-lazyvideo--docs)): A video component that lazy-loads videos when they are in view.
- **`LinkClickInterceptor`**: ([Demo](https://antonbobrov.github.io/react-kit/?path=/docs/elements-linkclickinterceptor--docs)): A component for intercepting link clicks to perform custom actions.
- **`Marquee`**: ([Demo](https://antonbobrov.github.io/react-kit/?path=/docs/text-marquee--docs)): A component for displaying scrolling text or content.
- **`ModalAnchor`**: ([Demo](https://antonbobrov.github.io/react-kit/?path=/docs/modals-modalanchor--docs)): A modal trigger component that opens modals when clicked.
- **`MoreContent`**: ([Demo](https://antonbobrov.github.io/react-kit/?path=/docs/wrappers-morecontent--docs)): A component for revealing additional content on demand.
- **`PageCursor`**: ([Demo](https://antonbobrov.github.io/react-kit/?path=/docs/cursor-pagecursor--docs)): A component for custom cursors.
- **`PageScroll`**: ([Demo](https://antonbobrov.github.io/react-kit/?path=/story/scroll-pagescroll--default)): A component for managing global page scrolling with support for custom smooth scrolling and scrollbars.
- **`ScrollView`**: ([Demo](https://antonbobrov.github.io/react-kit/?path=/docs/scroll-scrollvew--docs)): A component for monitoring elements entering and leaving the viewport.
- **`SplitText`**: ([Demo](https://antonbobrov.github.io/react-kit/?path=/docs/text-splittext--docs)): A component for splitting text into letters, words, or lines.
- **`VideoPlayer`**: ([Demo](https://antonbobrov.github.io/react-kit/?path=/docs/video-videoplayer--docs)): A component for rendering HTML5 videos or YouTube or Vimeo embedded players.

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

## License

This project is licensed under the terms of the
[MIT license](https://github.com/antonbobrov/react-kit/blob/develop/LICENSE).