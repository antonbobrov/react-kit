import React, { memo } from 'react';
import { prefixedClasNames } from '../../utils/prefixedClassNames';
import { TModalCloseButtonRenderer } from './types';

export const Component: TModalCloseButtonRenderer = ({ onClick }) => (
  <button
    type="button"
    className={prefixedClasNames('base-modal__close')}
    onClick={onClick}
  >
    Close
  </button>
);

export const CloseButton = memo(Component);
