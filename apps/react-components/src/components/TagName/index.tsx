import { createElement, forwardRef, useImperativeHandle, useRef } from 'react';
import { ITagNameProps } from './types';

/**
 * A React component that creates a DOM element with a dynamic tag name.
 *
 * This component leverages the `createElement` API to dynamically render any
 * valid HTML tag, as defined by the `tagName` prop. It also forwards a ref
 * to the created DOM element using `forwardRef` and `useImperativeHandle`,
 * making it possible to interact with the underlying DOM node externally.
 */
export const TagName = forwardRef<HTMLElement, ITagNameProps>(
  ({ tagName, ...props }, forwardedRef) => {
    const ref = useRef<HTMLElement | null>(null);
    useImperativeHandle(forwardedRef, () => ref.current!);

    return createElement(tagName, {
      ...props,
      ref,
    });
  },
);

TagName.displayName = 'TagName';
