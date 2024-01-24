import { useOnInViewport } from '@anton.bobrov/react-hooks';
import { RefObject, useEffect, useState } from 'react';
import { ILazyImageBaseProps } from './types';

interface IProps extends Pick<ILazyImageBaseProps, 'loading' | 'isNativeLazy'> {
  ref: RefObject<HTMLImageElement>;
}

export function useLazyImageStates({
  ref,
  loading: loadingProp,
  isNativeLazy,
}: IProps) {
  const [isLazyToBeLoaded, setIsLazyToBeLoaded] = useState(false);

  useOnInViewport({
    ref,
    onIn: () => {
      if (loadingProp === 'lazy') {
        setIsLazyToBeLoaded(true);
      }
    },
    onFallback: () => {
      if (loadingProp === 'lazy') {
        setIsLazyToBeLoaded(true);
      }
    },
    rootMargin: '0% 0% 175% 0%',
    destroyOnIn: true,
    isDisabled: isNativeLazy,
  });

  useEffect(() => {
    if (isNativeLazy) {
      return;
    }

    if (loadingProp === 'eager') {
      setIsLazyToBeLoaded(true);
    }
  }, [isNativeLazy, loadingProp]);

  const loading = isNativeLazy ? loadingProp : undefined;

  return {
    isToBeLoaded: isLazyToBeLoaded || isNativeLazy,
    loading,
  };
}
