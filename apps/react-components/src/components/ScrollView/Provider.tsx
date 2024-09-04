import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { ScrollView, vevet } from '@anton.bobrov/vevet-init';
import { isUndefined, useDeepCompareMemoize } from '@anton.bobrov/react-hooks';
import { IScrollViewContext, ScrollViewContext } from './utils/context';
import { IScrollViewProviderProps } from './types';

/**
 * ScrollView provider.
 * ScrollView lets you detect visible elements in viewport
 */
export const Provider: FC<IScrollViewProviderProps> = ({
  children,
  instanceKey,
  intersectionRoot = null,
  states = 'in',
  hasDelay = true,
  maxDelay = 1000,
  direction = 'vertical',
  viewportTarget = 'any',
  resizeDebounce = 0,
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

    console.log(instance.props);

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
    [scrollView],
  );

  useEffect(() => {
    if (!scrollView) {
      return;
    }

    scrollView.changeProps(changeableProps);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollView, useDeepCompareMemoize(changeableProps)]);

  return (
    <ScrollViewContext.Provider value={contextValue}>
      {children}
    </ScrollViewContext.Provider>
  );
};
