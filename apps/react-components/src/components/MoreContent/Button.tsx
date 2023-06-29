import React, { memo } from 'react';
import { TMoreContentButtonRenderer } from './types';

export const Component: TMoreContentButtonRenderer = ({ isActive, toggle }) => (
  <button type="button" onClick={toggle} aria-hidden>
    {isActive ? 'Show less' : 'Show More'}
  </button>
);

export const Button = memo(Component);
