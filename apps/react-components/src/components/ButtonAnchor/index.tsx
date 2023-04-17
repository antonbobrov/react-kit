import { useForwardedRef } from '@anton.bobrov/react-hooks';
import React, { PropsWithChildren, forwardRef } from 'react';
import { TButtonanchor } from './types';
import { Link } from '../Link';

export const ButtonAnchor = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  PropsWithChildren<TButtonanchor>
>(({ tag, className, style, children, ...props }, forwardedRef) => {
  const ref = useForwardedRef(forwardedRef);

  if (tag === 'a') {
    return (
      <Link
        ref={ref as any}
        className={className}
        style={style}
        {...(props as any)}
      >
        {children}
      </Link>
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
