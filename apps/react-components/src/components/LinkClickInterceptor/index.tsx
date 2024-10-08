import { useForwardedRef } from '@anton.bobrov/react-hooks';
import React, { MouseEventHandler, PropsWithChildren, forwardRef } from 'react';
import { ILinkClickInterceptorProps } from './types';
import { getAnchor } from './utils';

/**
 * LinkClickInterceptor component for intercepting link click events.
 *
 * This component enhances link functionality by providing a mechanism to intercept
 * click events on anchor tags, allowing developers to implement custom logic
 * before navigating to a new page. This can include features such as analytics tracking,
 * confirmation dialogs, or conditionally preventing navigation based on specific criteria.
 * The LinkClickInterceptor component also supports the `data-ignore-link-interceptor`
 * attribute, which allows certain links to bypass the interceptor, enabling flexibility
 * in navigation handling.
 *
 * @link See examples https://antonbobrov.github.io/react-kit/?path=/docs/elements-linkclickinterceptor--docs
 */
export const LinkClickInterceptor = forwardRef<
  HTMLDivElement,
  PropsWithChildren<ILinkClickInterceptorProps>
>(
  (
    { className, style, children, onExternalClick, onInternalClick, ...props },
    forwardedRef,
  ) => {
    const ref = useForwardedRef(forwardedRef);

    const onLinkClick: MouseEventHandler<HTMLElement> = (event) => {
      const anchor = getAnchor(event.target);

      if (!anchor) {
        return;
      }

      const targetURL = new URL(anchor.href);
      const currentURL = new URL(window.location.href);
      const isExternal = targetURL.origin !== currentURL.origin;

      if (anchor.hasAttribute('data-ignore-link-interceptor')) {
        return;
      }

      if (anchor.target) {
        return;
      }

      if (anchor.hasAttribute('download')) {
        return;
      }

      if (anchor.href.includes('#')) {
        return;
      }

      if (isExternal) {
        onExternalClick?.(event, anchor);

        return;
      }

      onInternalClick?.(event, anchor);
    };

    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      <div
        {...props}
        ref={ref}
        className={className}
        style={style}
        onClick={onLinkClick}
      >
        {children}
      </div>
    );
  },
);

LinkClickInterceptor.displayName = 'LinkClickInterceptor';
