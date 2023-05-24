import { useState } from 'react';
import { IPageCursorContext } from '../interal/context';

export function usePageCursorProviderStore() {
  const [store, setStore] = useState<IPageCursorContext>({
    cursor: undefined,
    types: [],

    setCursor: (data) => {
      setStore((prevValue) => ({
        ...prevValue,
        cursor: data,
      }));
    },

    addType: (instance) => {
      setStore((prevValue) => {
        const isAlreadyPresent = prevValue.types.some(
          ({ type, id }) => type === instance.type && id === instance.id
        );

        if (!isAlreadyPresent) {
          return {
            ...prevValue,
            types: [...prevValue.types, instance],
          };
        }

        return prevValue;
      });
    },

    removeType: (instance) => {
      setStore((prevValue) => {
        const newTypes = prevValue.types.filter(
          ({ id, type }) => !(id === instance.id && type === instance.type)
        );

        return {
          ...prevValue,
          types: newTypes,
        };
      });
    },
  });

  return store;
}
