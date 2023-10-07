import React, {
  cloneElement,
  FC,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import { isUndefined } from '@anton.bobrov/react-hooks';
import { IPageCursorTargetProps } from './types';
import { usePageCursorSetSize, usePageCursorType } from '../hooks';

/** Component that wraps an element and adds a cursor type or size to it */
export const Target: FC<IPageCursorTargetProps> = ({
  children,
  width,
  height,
  type,
}) => {
  const ref = useRef<HTMLElement>(null);
  useImperativeHandle((children as any).ref, () => ref.current!);

  const size = useMemo(() => {
    if (!isUndefined(width) || !isUndefined(height)) {
      return { width, height };
    }

    return undefined;
  }, [width, height]);

  usePageCursorSetSize(ref, size);
  usePageCursorType(ref, type);

  return <>{cloneElement(children, { ref })}</>;
};
