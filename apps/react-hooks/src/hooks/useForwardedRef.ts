import { ForwardedRef, RefObject, useImperativeHandle, useRef } from 'react';

export function useForwardedRef<T>(
  forwardedRef: ForwardedRef<T> | undefined
): RefObject<T> {
  const ref = useRef<T>(null);

  useImperativeHandle(forwardedRef, () => ref.current as T);

  return ref;
}
