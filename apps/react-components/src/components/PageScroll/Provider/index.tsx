import React, { FC, useEffect, useState } from 'react';
import {
  SmoothScroll,
  SmoothScrollDragPlugin,
  SmoothScrollKeyboardPlugin,
  vevet,
} from '@anton.bobrov/vevet-init';
import {
  isBoolean,
  isUndefined,
  useDeepCompareEffect,
  useEvent,
} from '@anton.bobrov/react-hooks';
import { prefixedClasNames } from '../../../utils/prefixedClassNames';
import { usePageScrollProviderStore } from './utils/usePageScrollProviderStore';
import { IPageScrollProviderProps } from './types';
import { canBeSmooth as canBeSmoothDefault } from './utils/canBeSmooth';
import { PageScrollContext } from '../context';

/** PageScroll provider */
export const Provider: FC<IPageScrollProviderProps> = ({
  children,
  canBeSmooth: canBeSmoothProp,
  smoothProps = {},
  onSmoothInit: onSmoothInitProp,
}) => {
  const store = usePageScrollProviderStore();
  const { selector, setSelector, smoothContainer } = store;

  const [initialSmoothProps] = useState(smoothProps);

  const htmlSmoothClassName = prefixedClasNames('page-scroll-use-smooth');

  const onSmoothInit = useEvent(onSmoothInitProp);

  useEffect(() => {
    const html = document.documentElement;

    const isSmoothByProp = isBoolean(canBeSmoothProp)
      ? canBeSmoothProp
      : canBeSmoothProp?.();
    const isSmoothByDefault = canBeSmoothDefault();
    const isSmooth = isSmoothByProp ?? isSmoothByDefault;

    if (!isSmooth || !smoothContainer) {
      const timeout = setTimeout(() => {
        html.classList.remove(htmlSmoothClassName);
        setSelector?.(window);
      }, 16);

      return () => {
        setSelector?.(undefined);
        clearTimeout(timeout);
      };
    }

    html.classList.add(htmlSmoothClassName);

    const scroll = new SmoothScroll({
      container: smoothContainer,
      hasWillChange: !vevet.browserName.includes('firefox'),
      lerp: 0.1,
      lerpApproximation: 0.5,
      isEnabled: true,
      ...initialSmoothProps,
    });
    setSelector?.(scroll);

    scroll.addPlugin(new SmoothScrollKeyboardPlugin());

    if (vevet.isMobile) {
      scroll.addPlugin(new SmoothScrollDragPlugin({ lerp: 0.35 }));
    }

    onSmoothInit?.(scroll);

    return () => {
      setSelector?.(undefined);
      scroll.destroy();
    };
  }, [
    canBeSmoothProp,
    htmlSmoothClassName,
    initialSmoothProps,
    onSmoothInit,
    setSelector,
    smoothContainer,
  ]);

  useDeepCompareEffect(() => {
    if (!selector) {
      return;
    }

    if (selector instanceof SmoothScroll) {
      selector.changeProps({ ...smoothProps });
    }
  }, [smoothProps]);

  useEffect(() => {
    if (!isUndefined(selector) && 'resize' in selector) {
      selector.resize();
    }
  }, [selector]);

  return (
    <PageScrollContext.Provider value={store}>
      {children}
    </PageScrollContext.Provider>
  );
};
