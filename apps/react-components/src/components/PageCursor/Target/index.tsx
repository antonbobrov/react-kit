import React, {
  cloneElement,
  FC,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import { isNumber, isUndefined } from '@anton.bobrov/react-hooks';
import { IPageCursorTargetProps } from './types';
import { usePageCursorSetSize, usePageCursorType } from '../hooks';

/** Component that wraps an element and adds a cursor type or size to it */
export const Target: FC<IPageCursorTargetProps> = ({
  children,
  size: targetSize,
  type,
}) => {
  const ref = useRef<HTMLElement>(null);
  useImperativeHandle((children as any).ref, () => ref.current!);

  const size = useMemo(() => {
    if (isUndefined(targetSize)) {
      return undefined;
    }

    if (isNumber(targetSize)) {
      return { width: targetSize, height: targetSize };
    }

    return targetSize;
  }, [targetSize]);

  usePageCursorSetSize(ref, size);
  usePageCursorType(ref, type);

  return <>{cloneElement(children, { ref })}</>;
};
