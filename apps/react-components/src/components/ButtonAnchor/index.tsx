import { useForwardedRef } from '@anton.bobrov/react-hooks';
import React, { PropsWithChildren, forwardRef } from 'react';
import { TButtonAnchor } from './types';

/** Button or Anchor */
export const ButtonAnchor = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  PropsWithChildren<TButtonAnchor>
>(({ tag, className, style, children, ...props }, forwardedRef) => {
  const ref = useForwardedRef(forwardedRef);

  if (tag === 'a') {
    const defaultRel =
      'target' in props && props.target === '_blank'
        ? 'noopener noreferrer'
        : undefined;

    return (
      <a
        ref={ref as any}
        className={className}
        style={style}
        {...(props as any)}
        rel={'rel' in props ? props.rel : defaultRel}
      >
        {children}
      </a>
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
});

ButtonAnchor.displayName = 'ButtonAnchor';
