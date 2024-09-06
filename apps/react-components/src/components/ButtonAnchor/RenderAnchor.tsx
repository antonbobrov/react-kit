import React, { forwardRef } from 'react';
import { TButtonAnchorRenderAnchor } from './types';

export const RenderAnchor: TButtonAnchorRenderAnchor = forwardRef(
  (props, forwardedRef) => (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a {...props} ref={forwardedRef as any} />
  ),
);

RenderAnchor.displayName = 'RenderAnchor';
