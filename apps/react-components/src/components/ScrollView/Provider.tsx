import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { ScrollView, vevet } from '@anton.bobrov/vevet-init';
import { isIntersectionObserverSupported } from '@anton.bobrov/react-hooks';
import { useDeepCompareMemoize } from 'use-deep-compare-effect';
import { IScrollViewContext, ScrollViewContext } from './utils/context';
import { IScrollViewProviderProps } from './types';

export const Provider: FC<IScrollViewProviderProps> = ({
  children,
  instanceKey,
  isEnabled,
  ...props
}) => {
  const [scrollView, setScrollView] = useState<ScrollView | undefined>();

  const initialProps = useRef(props);

  useEffect(() => {
    if (!isIntersectionObserverSupported()) {
      return undefined;
    }

    const instance = new ScrollView({
      enabled: false,
      container: window,
      classToToggle: '',
      useDelay: {
        max: 1000,
        dir: 'y',
      },
      viewportTarget: vevet.isMobile ? 'w' : '',
      useIntersectionObserver: true,
      intersectionRoot: null,
      ...initialProps.current,
    });

    setScrollView(instance);

    return () => {
      setScrollView(undefined);
      instance.destroy();
    };
  }, [initialProps, instanceKey]);

  const contextValue: IScrollViewContext = useMemo(
    () => ({ scrollView }),
    [scrollView]
  );

  useEffect(() => {
    scrollView?.changeProp({ enabled: isEnabled, ...props });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollView, isEnabled, useDeepCompareMemoize(props)]);

  return (
    <ScrollViewContext.Provider value={contextValue}>
      {children}
    </ScrollViewContext.Provider>
  );
};
