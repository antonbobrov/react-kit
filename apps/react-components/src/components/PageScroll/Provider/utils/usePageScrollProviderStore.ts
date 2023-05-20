import { IPageScrollContext } from '@components/PageScroll/context';
import { useState } from 'react';

export function usePageScrollProviderStore() {
  const [store, setStore] = useState<IPageScrollContext>({
    selector: undefined,

    setSelector: (data) => {
      setStore((prevValue) => ({
        ...prevValue,
        selector: data,
      }));
    },

    smoothContainer: undefined,

    setSmoothContainer: (data) => {
      setStore((prevValue) => ({
        ...prevValue,
        smoothContainer: data,
      }));
    },
  });

  return store;
}
