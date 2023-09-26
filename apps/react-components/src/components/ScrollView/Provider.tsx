import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { ScrollView, vevet } from '@anton.bobrov/vevet-init';
import { IScrollViewContext, ScrollViewContext } from './utils/context';
import { IScrollViewProviderProps } from './types';

/**
 * ScrollView provider.
 * ScrollView lets you detect visible elements in viewport
 */
export const Provider: FC<IScrollViewProviderProps> = ({
  children,
  instanceKey,
  isEnabled = false,
  rootMargin = 0.05,
  ...props
}) => {
  const [scrollView, setScrollView] = useState<ScrollView | undefined>();

  const vevetRef = useRef(vevet);
  const initialProps = useRef({ ...props, rootMargin });

  useEffect(() => {
    if (!vevetRef.current) {
      return undefined;
    }

    const instance = new ScrollView({
      ...initialProps.current,
      isEnabled: false,
    });

    setScrollView(instance);

    return () => {
      setScrollView(undefined);
      instance.destroy();
    };
  }, [instanceKey, rootMargin]);

  const contextValue: IScrollViewContext = useMemo(
    () => ({ scrollView }),
    [scrollView]
  );

  useEffect(() => {
    if (!scrollView) {
      return;
    }

    const currentProps = scrollView.props;

    if (
      currentProps.isEnabled !== isEnabled ||
      currentProps.rootMargin !== rootMargin
    ) {
      scrollView.changeProps({ isEnabled, rootMargin });
    }
  }, [isEnabled, rootMargin, scrollView]);

  return (
    <ScrollViewContext.Provider value={contextValue}>
      {children}
    </ScrollViewContext.Provider>
  );
};
