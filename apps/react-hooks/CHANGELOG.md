# Change Log - @anton.bobrov/react-hooks

This log was last generated on Thu, 12 Sep 2024 17:13:01 GMT and should not be manually modified.

## 2.9.0
Thu, 12 Sep 2024 17:13:01 GMT

### Minor changes

- Add `useDomId`

### Patches

- useFocusTrap: fix keyboard events

## 2.8.3
Wed, 04 Sep 2024 17:10:21 GMT

_Version update only_

## 2.8.2
Wed, 04 Sep 2024 14:57:32 GMT

_Version update only_

## 2.8.1
Wed, 04 Sep 2024 11:47:01 GMT

_Version update only_

## 2.8.0
Fri, 30 Aug 2024 10:20:59 GMT

### Minor changes

- Add `useClientHeight`, `useClientWidth`, `useOffsetHeight`, `useOffsetSize` & `useOffsetWidth` hooks

## 2.7.3
Fri, 23 Aug 2024 10:32:05 GMT

_Version update only_

## 2.7.2
Wed, 21 Feb 2024 15:25:23 GMT

### Patches

- useOnLazyIntersection: update `rootMargin`

## 2.7.1
Wed, 21 Feb 2024 15:16:10 GMT

### Patches

- useOnLazyIntersection: update `rootMargin`

## 2.7.0
Wed, 21 Feb 2024 12:54:44 GMT

### Minor changes

- Add `useOnceProp`

## 2.6.0
Tue, 06 Feb 2024 18:53:48 GMT

### Minor changes

- Add `useOnLazyIntersection`

## 2.5.0
Wed, 24 Jan 2024 10:16:18 GMT

### Minor changes

- Add `useIntersectionObserver`
- useOnInViewport: add `root`, `threshold`, `rootMargin`

## 2.4.0
Tue, 12 Dec 2023 20:45:40 GMT

### Minor changes

- Add `uniqueeArray`

### Patches

- Drop `resize-observer-polyfill`

## 2.3.0
Tue, 28 Nov 2023 09:38:09 GMT

### Minor changes

- useScrollLock: add `Window` type of ref

### Patches

- useScrollLock: fix types

## 2.2.3
Mon, 06 Nov 2023 10:32:50 GMT

_Version update only_

## 2.2.2
Thu, 19 Oct 2023 10:08:29 GMT

### Patches

- useOnInViewport: set `state` => `in` if IntersectionObserver is not supported

## 2.2.1
Wed, 11 Oct 2023 20:09:45 GMT

### Patches

- useEventListener: use stable link for `listener`

## 2.2.0
Sun, 08 Oct 2023 10:11:27 GMT

### Minor changes

- Export `useDeepCompareMemoize` & `useDeepCompareEffectNoCheck`

## 2.1.0
Sat, 07 Oct 2023 23:35:48 GMT

### Minor changes

- Export `TChunk`

## 2.0.0
Sat, 07 Oct 2023 11:05:28 GMT

### Breaking changes

- Remove `getDomLanguage`
- Remove `times` & `normalizeNestedScope`
- Remove `objectKeys`

### Minor changes

- Add `splitIntoChunks`
- Add `useDeepCompareEffect`

## 1.8.1
Fri, 11 Aug 2023 11:05:14 GMT

### Patches

- usePreventDocumentScrolling: remove deprecation

## 1.8.0
Fri, 11 Aug 2023 10:43:13 GMT

### Minor changes

- `usePreventDocumentScrolling` is `deprecated`

## 1.7.3
Fri, 21 Jul 2023 10:45:37 GMT

### Patches

- useFocusTrap: `preventScroll` for the first focusable element

## 1.7.2
Thu, 20 Jul 2023 12:22:22 GMT

### Patches

- Add `resize-observer-polyfill`

## 1.7.1
Sun, 16 Jul 2023 18:31:55 GMT

### Patches

- useFocusTrap: prevet scroll on focus restoration

## 1.7.0
Thu, 13 Jul 2023 09:16:02 GMT

### Minor changes

- Add `objectKeys`

## 1.6.2
Wed, 28 Jun 2023 11:50:05 GMT

### Patches

- `selectFocusableChildren`: exclude hidden inputs

## 1.6.1
Tue, 06 Jun 2023 13:11:21 GMT

### Patches

- `useFocusTrap`: fix `isDisabled` check

## 1.6.0
Tue, 06 Jun 2023 12:09:19 GMT

### Minor changes

- `useFocusTrap`: add `isRestoreFocus` property

## 1.5.1
Mon, 29 May 2023 09:18:45 GMT

### Patches

- Deprecate `getDomLanguage`

## 1.5.0
Thu, 25 May 2023 13:54:27 GMT

### Minor changes

- useOnInViewport: add `isDisabled`

## 1.4.0
Mon, 22 May 2023 14:30:47 GMT

### Minor changes

- Add `getSiblingsFocusableElements`
- Add `useMouseClientPosition`

## 1.3.0
Fri, 19 May 2023 17:33:46 GMT

_Initial release_

