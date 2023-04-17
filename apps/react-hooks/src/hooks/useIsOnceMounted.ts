import { useEffect, useState } from 'react';

export function useIsOnceMounted() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  return isMounted;
}
