import React, { memo } from 'react';
import { prefixedClasNames } from '../../utils/prefixedClassNames';
import { TModalCloseButtonRenderer } from '../BaseModal/types';

export const Component: TModalCloseButtonRenderer = ({ onClick }) => (
  <button
    type="button"
    className={prefixedClasNames('base-video-modal__close')}
    onClick={onClick}
  >
    Close
  </button>
);

export const CloseButton = memo(Component);
