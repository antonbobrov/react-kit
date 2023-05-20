import { useContext, useEffect, useState } from 'react';
import { PageScrollContext } from '../context';

export function usePageScrollSelector() {
  const store = useContext(PageScrollContext);

  const [selector, setSelector] = useState<(typeof store)['selector']>();

  useEffect(() => {
    const timeout = setTimeout(() => setSelector(store.selector), 16);

    return () => clearTimeout(timeout);
  }, [store.selector]);

  return selector;
}
