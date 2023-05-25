import { useEffect, useState } from 'react';

/** Detect if some component is mounted */
export function useIsOnceMounted() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  return isMounted;
}
