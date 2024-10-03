import { useCallback, useEffect, useRef, useState } from 'react';
import { isBrowser } from '@utils/env';
import { useEventListener } from './useEventListener';
import { useEvent } from './useEvent';

/**
 * Custom React hook that manages state synchronized with local storage.
 *
 * This hook provides a way to store and retrieve a value in local storage,
 * keeping the state in sync with the storage. It can handle server-side
 * rendering (SSR) scenarios and allows for a callback when local storage changes.
 *
 * @param name - The name of the local storage key.
 * @param defaultValueProp - The default value to use if there is no value in local storage.
 * @param hasServerState - Indicates if server-side rendering is used. Set to false to prevent hydration errors.
 * @param onLsChangeProp - Callback function to be called when local storage changes.
 *
 * @example
 * const [state, setState] = useLocalStorage(
 *   'localStorageKey',
 *   { searchQuery: '' },
 *   false,
 * );
 *
 * setState({ ...state, searchQuery: 'test' });
 */
export function useLocalStorage<T>(
  name: string,
  defaultValueProp: T,
  hasServerState = true,
  onLsChangeProp?: (value: T) => void,
): [T, (value: T) => void] {
  const defaultValueRef = useRef(defaultValueProp);
  const onLsChange = useEvent(onLsChangeProp);

  const getLsValue = useCallback(() => {
    let value: any;

    try {
      value =
        JSON.parse(localStorage.getItem(name) ?? 'null') ??
        defaultValueRef.current;
    } catch (e) {
      value = defaultValueRef.current;
    }

    return value;
  }, [name]);

  const [stateValue, setStateValue] = useState<T>(
    hasServerState ? getLsValue() : defaultValueRef.current,
  );

  useEffect(() => {
    const value = getLsValue();

    setStateValue(value);
    onLsChange?.(value);
  }, [getLsValue, onLsChange]);

  const set = useCallback(
    (newValue: T) => {
      window.localStorage.setItem(name, JSON.stringify(newValue));
      window.dispatchEvent(new StorageEvent('storage'));
    },
    [name],
  );

  useEventListener({
    ref: isBrowser ? window : null,
    target: 'storage' as any,
    listener: () => {
      const value = getLsValue();

      setStateValue(value);
      onLsChange?.(value);
    },
  });

  return [stateValue, set];
}
