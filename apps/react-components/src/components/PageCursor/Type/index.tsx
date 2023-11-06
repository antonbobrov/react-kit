import React, { FC } from 'react';
import cn from 'classnames';
import { isString } from '@anton.bobrov/react-hooks';
import { prefixedClassName } from '../../../utils/prefixedClassName';
import { IPageCursorTypeProps } from './types';
import { usePageCursor } from '../hooks';

/** Custom cursor type wrapper */
export const Type: FC<IPageCursorTypeProps> = ({
  type: typeProp,
  children,
}) => {
  const { types } = usePageCursor();

  const targetTypes = isString(typeProp) ? [typeProp] : typeProp;

  const isDefault = types.length === 0 && targetTypes.includes('default');
  const isTypeActive = types.some(({ type }) => targetTypes.includes(type));
  const isNone = types.some(({ type }) => type === 'none');

  const isActive = (isDefault || isTypeActive) && !isNone;

  return (
    <div
      className={cn(
        prefixedClassName('page-cursor-type'),
        isActive && prefixedClassName('active'),
      )}
    >
      {children}
    </div>
  );
};
