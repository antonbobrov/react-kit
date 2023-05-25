import { useEffect, useRef } from 'react';

export function usePrevious<T>(value: T): T | undefined;

export function usePrevious<T, I>(value: T, initialValue: I): T | I;

/** Use previous property state */
export function usePrevious<T, I>(
  value: T,
  initialValue?: I
): T | I | undefined {
  const previousRef = useRef<T | I | undefined>(initialValue);

  useEffect(() => {
    previousRef.current = value;
  }, [value]);

  return previousRef.current;
}
