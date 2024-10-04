import { useForwardedRef } from '@anton.bobrov/react-hooks';
import React, { PropsWithChildren, forwardRef, memo } from 'react';
import { TButtonAnchor } from './types';
import { RenderAnchor } from './RenderAnchor';

const DefaultRenderAnchor = memo(RenderAnchor);

/**
 * ButtonAnchor component for rendering a clickable button or a link.
 *
 * @link See examples https://antonbobrov.github.io/react-kit/?path=/docs/elements-buttonanchor--docs
 */
export const ButtonAnchor = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  PropsWithChildren<TButtonAnchor>
>(
  (
    {
      tag,
      className,
      style,
      children,
      renderAnchor: Anchor = DefaultRenderAnchor,
      ...props
    },
    forwardedRef,
  ) => {
    const ref = useForwardedRef(forwardedRef);

    if (tag === 'a') {
      const defaultRel =
        (props as any).target === '_blank' ? 'noopener noreferrer' : undefined;

      return (
        <Anchor
          ref={ref as any}
          className={className}
          style={style}
          {...(props as any)}
          rel={(props as any).rel || defaultRel}
        >
          {children}
        </Anchor>
      );
    }

    return (
      <button
        ref={ref as any}
        className={className}
        style={style}
        type="button"
        {...(props as any)}
      >
        {children}
      </button>
    );
  },
);

ButtonAnchor.displayName = 'ButtonAnchor';
