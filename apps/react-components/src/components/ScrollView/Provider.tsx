import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { ScrollView, vevet } from '@anton.bobrov/vevet-init';
import { isUndefined, useDeepCompareEffect } from '@anton.bobrov/react-hooks';
import { IScrollViewContext, ScrollViewContext } from './utils/context';
import { IScrollViewProviderProps } from './types';

/**
 * ScrollView provider.
 * ScrollView lets you detect visible elements in viewport
 */
export const Provider: FC<IScrollViewProviderProps> = ({
  children,
  instanceKey,
  intersectionRoot,
  states,
  hasDelay,
  maxDelay,
  direction,
  viewportTarget,
  resizeDebounce,
  isEnabled = false,
  ...props
}) => {
  const [scrollView, setScrollView] = useState<ScrollView | undefined>();

  const vevetRef = useRef(vevet);

  const changeableProps = { ...props, isEnabled };
  const initialChangeablePropsRef = useRef(changeableProps);

  useEffect(() => {
    if (!vevetRef.current || isUndefined(instanceKey)) {
      return undefined;
    }

    const instance = new ScrollView({
      ...initialChangeablePropsRef.current,
      intersectionRoot,
      states,
      hasDelay,
      maxDelay,
      direction,
      viewportTarget,
      resizeDebounce,
    });

    setScrollView(instance);

    return () => {
      setScrollView(undefined);
      instance.destroy();
    };
  }, [
    instanceKey,
    direction,
    hasDelay,
    intersectionRoot,
    maxDelay,
    resizeDebounce,
    states,
    viewportTarget,
  ]);

  const contextValue: IScrollViewContext = useMemo(
    () => ({ scrollView }),
    [scrollView]
  );

  useDeepCompareEffect(() => {
    if (!scrollView) {
      return;
    }

    scrollView.changeProps(changeableProps);
  }, [changeableProps]);

  return (
    <ScrollViewContext.Provider value={contextValue}>
      {children}
    </ScrollViewContext.Provider>
  );
};
