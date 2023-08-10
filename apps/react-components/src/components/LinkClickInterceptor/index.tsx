import { useForwardedRef } from '@anton.bobrov/react-hooks';
import React, { MouseEventHandler, PropsWithChildren, forwardRef } from 'react';
import { ILinkClickInterceptorProps } from './types';
import { getAnchor } from './utils';

/**
 * Component that catches click on link
 *
 * Callbacks will never be triggered if an anchor
 * has the `data-link`, `target` or `download` attribute
 * or the `href` contains a `#`
 */
export const LinkClickInterceptor = forwardRef<
  HTMLDivElement,
  PropsWithChildren<ILinkClickInterceptorProps>
>(
  (
    { className, style, children, onExternalClick, onInternalClick, id },
    forwardedRef
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

      if (anchor.hasAttribute('data-framework-link')) {
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
        ref={ref}
        className={className}
        style={style}
        id={id}
        onClick={onLinkClick}
      >
        {children}
      </div>
    );
  }
);

LinkClickInterceptor.displayName = 'LinkClickInterceptor';
