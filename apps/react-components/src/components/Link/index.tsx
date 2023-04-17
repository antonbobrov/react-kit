import { useForwardedRef } from '@anton.bobrov/react-hooks';
import React, { AnchorHTMLAttributes, forwardRef } from 'react';

export const Link = forwardRef<
  HTMLAnchorElement,
  AnchorHTMLAttributes<HTMLAnchorElement>
>(
  (
    { className, style, href, target, rel, children, ...props },
    forwardedRef
  ) => {
    const ref = useForwardedRef(forwardedRef);

    const defaultRel = target === '_blank' ? 'noopener noreferrer' : undefined;

    return (
      <a
        ref={ref}
        className={className}
        style={style}
        href={href}
        target={target}
        rel={rel ?? defaultRel}
        {...props}
      >
        {children}
      </a>
    );
  }
);

Link.displayName = 'Link';
