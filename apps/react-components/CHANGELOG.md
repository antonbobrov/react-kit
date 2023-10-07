# Change Log - @anton.bobrov/react-components

This log was last generated on Sat, 07 Oct 2023 23:35:48 GMT and should not be manually modified.

## 2.0.1
Sat, 07 Oct 2023 23:35:48 GMT

### Patches

- Fix `p-cancelable`

## 2.0.0
Sat, 07 Oct 2023 11:05:28 GMT

### Breaking changes

- Remove `Link` component
- SplitText: remove `appendLetters` & `appendLines`; add `hasLetters` & `hasLines`
- ScrollView.Provider: use props from vevet
- PageCursor.Target: remove `size`; add `width` & `height`
- PageCursor.Provider: use vevet props
- PageScroll: use vevet props

### Patches

- BaseImage: use default `alt` from `src`

## 1.24.1
Fri, 11 Aug 2023 11:05:14 GMT

### Patches

- ButtonAnchor: use simple anchor
- isUnderneathScrollingDisabled: remove deprecation

## 1.24.0
Fri, 11 Aug 2023 10:43:13 GMT

### Minor changes

- BaseModal: `isUnderneathScrollingDisabled` is `deprecated`

### Patches

- BaseModal: use `overscroll-behavior: contain`

## 1.23.0
Thu, 10 Aug 2023 20:17:22 GMT

### Minor changes

- `Link` is `deprecated`

### Patches

- LinkClickInterceptor: better logic

## 1.22.0
Wed, 09 Aug 2023 19:23:35 GMT

### Minor changes

- BaseModal: add `isUnmountOnClose`

### Patches

- PageCursor.Provider: fix container

## 1.21.0
Wed, 26 Jul 2023 22:10:20 GMT

### Minor changes

- Export base types

## 1.20.4
Fri, 21 Jul 2023 10:45:37 GMT

_Version update only_

## 1.20.3
Thu, 20 Jul 2023 12:22:22 GMT

_Version update only_

## 1.20.2
Wed, 19 Jul 2023 19:05:49 GMT

### Patches

- ExpandContent: fix global scope

## 1.20.1
Wed, 19 Jul 2023 10:44:59 GMT

_Version update only_

## 1.20.0
Wed, 19 Jul 2023 08:22:20 GMT

### Minor changes

- Add `useScrollViewAnimationTrigger`

## 1.19.1
Sun, 16 Jul 2023 18:31:55 GMT

### Patches

- FadeContent: preventScroll on focus

## 1.19.0
Thu, 13 Jul 2023 09:16:02 GMT

### Minor changes

- BaseModal: add `onHidden`

## 1.18.0
Tue, 11 Jul 2023 16:25:30 GMT

### Minor changes

- BaseModal: add `isCloseOnOutsideClick` prop

## 1.17.1
Mon, 10 Jul 2023 11:35:46 GMT

### Patches

- ExpandContent: fix `hasAlpha`

## 1.17.0
Mon, 10 Jul 2023 11:08:11 GMT

### Minor changes

- BaseModal: add `parentNode` prop

### Patches

- `ExpandContent`: a11y fix
- ExpandContent: update logic when active by default

## 1.16.0
Thu, 29 Jun 2023 13:20:17 GMT

### Minor changes

- Add `BaseVideoModal`

## 1.15.0
Thu, 29 Jun 2023 11:33:49 GMT

### Minor changes

- Add `MoreContent`

## 1.14.0
Wed, 28 Jun 2023 11:50:05 GMT

### Minor changes

- `LinkClickInterceptor`: add `id` prop
- Add `FadeContent`

## 1.13.0
Tue, 20 Jun 2023 18:49:42 GMT

### Minor changes

- SplitText: add `textSource` prop

### Patches

- SplitText: update text on prop change

## 1.12.1
Tue, 06 Jun 2023 13:11:21 GMT

_Version update only_

## 1.12.0
Tue, 06 Jun 2023 12:09:19 GMT

### Minor changes

- `BaseModal`: add `isRestoreFocusOnClose` property

### Patches

- `LazyImage`: fix placeholder size

## 1.11.0
Mon, 29 May 2023 10:10:51 GMT

### Minor changes

- `BasePopup`: add `onActive`

## 1.10.0
Mon, 29 May 2023 09:18:45 GMT

### Minor changes

- `useScrollView`: add `inDelay`
- `ScrollView.Element`: add `inDelay`
- Add `BasePopup`

## 1.9.0
Thu, 25 May 2023 13:54:27 GMT

### Minor changes

- PageCursor.Provider: add `isDisabled`
- LazyImage: add `isNativeLazy`
- usePageCursor: add `addType` and `removeType`
- PageScroll.ScrollBar: add `isDisabled`

## 1.8.0
Wed, 24 May 2023 15:27:43 GMT

### Minor changes

- PageCursor: add `onInit` and `onTypeChange`

### Patches

- PageCursor.Provider: fix check for default cursor

## 1.7.0
Wed, 24 May 2023 14:54:15 GMT

### Minor changes

- Add `PageCursor`

### Patches

- Image: use dynamically generated placeholders
- PageScroll: optimize `changeProp`
- ScrollView: optimize `changeProp`

## 1.6.0
Tue, 23 May 2023 08:59:47 GMT

### Minor changes

- VideoPlayerVimeo: add `onPlayerReady` and vimeo props
- VideoPlayerYoutube: add `onPlayerReady` and youtube props
- VideoPlayer: add `youtubeProps` and `vimeoProps`

## 1.5.1
Tue, 23 May 2023 07:25:59 GMT

### Patches

- VideoPlayerMp4: use video.js

## 1.5.0
Mon, 22 May 2023 14:30:47 GMT

### Minor changes

- TButtonAnchor: fix typo
- Add `BaseVideo`
- Add `useOnPageScroll`
- Add `LazyVideo`

### Patches

- `LazyImage`: fix position `contain`

## 1.4.1
Sat, 20 May 2023 19:01:33 GMT

### Patches

- PageScroll.Provider: enable smooth scroll by default

## 1.4.0
Sat, 20 May 2023 18:50:00 GMT

### Minor changes

- Add `PageScroll`
- Add `PageScroll.ScrollBar`

## 1.3.1
Fri, 19 May 2023 17:33:46 GMT

_Initial release_

