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

    customContainer: undefined,

    setCustomContainer: (data) => {
      setStore((prevValue) => ({
        ...prevValue,
        customContainer: data,
      }));
    },
  });

  return store;
}
