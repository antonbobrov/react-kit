import { useRef, useCallback, useEffect } from 'react';

export type TUseEventCallbackType = ((...args: Array<any>) => any) | undefined;

interface IUseEventOverload {
  <TF extends TUseEventCallbackType>(callback: TF): TF;
  <TF extends TUseEventCallbackType>(callback: TF): any;
}

/**
 * Custom React hook that returns a stable function reference to the provided callback.
 *
 * This hook maintains a reference to the latest callback using a ref, ensuring that
 * the returned function always calls the most recent version of the callback without
 * triggering unnecessary re-renders. This is particularly useful in event handlers
 * or when passing callbacks to child components.
 *
 * @param callback - The callback function to be stabilized.
 *
 * @example
 * const MyComponent = () => {
 *   const handleClick = useEvent(() => {
 *     console.log('Button clicked!');
 *   });
 *
 *   return <button onClick={handleClick}>Click Me</button>;
 * };
 */
export const useEvent: IUseEventOverload = (callback) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return useCallback((...args: any) => callbackRef.current?.(...args), []);
};
