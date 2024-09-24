import { useCallback, useEffect, useRef, useState } from 'react';
import { isBrowser } from '@utils/env';
import { useEventListener } from './useEventListener';
import { useEvent } from './useEvent';

/**
 * Use local storage state
 *
 * @param name Name of the storage
 * @param defaultValueProp Default value
 * @param hasServerState Has SSR. When SSR is used, set to false to prevent hydration errors
 * @param onLsChangeProp Callback on local storage change
 *
 * @example
 *
 * const [state, setState] = useLocalStorage(
 *   'localStorageKey',
 *   {
 *     searchQuery: '',
 *   },
 *   false,
 * );
 *
 * setState({
 *   ...state,
 *   searchQuery: 'test',
 * });
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
