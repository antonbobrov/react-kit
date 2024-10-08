import { ForwardedRef, RefObject, useImperativeHandle, useRef } from 'react';

/**
 * Custom React hook that creates a ref and forwards its value to a parent component.
 *
 * This hook allows you to handle refs in a way that supports both
 * internal and external access to the ref value. It uses
 * `useImperativeHandle` to expose the current value of the ref
 * to the parent component when using `forwardRef`.
 *
 * @param forwardedRef - The forwarded ref from the parent component.
 *
 * @example
 * const MyComponent = forwardRef((props, ref) => {
 *   const internalRef = useForwardedRef(ref);
 *
 *   return <div ref={internalRef}>Hello, World!</div>;
 * });
 */
export function useForwardedRef<T>(
  forwardedRef: ForwardedRef<T> | undefined,
): RefObject<T> {
  const ref = useRef<T>(null);

  useImperativeHandle(forwardedRef, () => ref.current as T);

  return ref;
}
