import React, { FC, useEffect, useState } from 'react';
import {
  SmoothScroll,
  SmoothScrollDragPlugin,
  SmoothScrollKeyboardPlugin,
  vevet,
} from '@anton.bobrov/vevet-init';
import { isBoolean, isUndefined } from '@anton.bobrov/react-hooks';
import { prefixedClasNames } from '../../../utils/prefixedClassNames';
import { usePageScrollProviderStore } from './utils/usePageScrollProviderStore';
import { IPageScrollProviderProps } from './types';
import { canBeSmooth as canBeSmoothDefault } from './utils/canBeSmooth';
import { PageScrollContext } from '../context';

export const Provider: FC<IPageScrollProviderProps> = ({
  smoothProps,
  canBeSmooth: canBeSmoothProp,
  children,
}) => {
  const store = usePageScrollProviderStore();
  const { selector, setSelector, smoothContainer } = store;

  const [initialSmoothProps] = useState(smoothProps);

  const htmlSmoothClassName = prefixedClasNames('page-scroll-use-smooth');

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
      selectors: { outer: smoothContainer },
      overscroll: false,
      useWillChange: !vevet.browserName.includes('firefox'),
      render: {
        lerp: 0.1,
        approximation: 0.5,
      },
      enabled: false,
      ...initialSmoothProps,
    });
    setSelector?.(scroll);

    scroll.addPlugin(new SmoothScrollKeyboardPlugin());

    if (vevet.isMobile) {
      scroll.addPlugin(new SmoothScrollDragPlugin({ lerp: 0.35 }));
    }

    return () => {
      setSelector?.(undefined);
      scroll.destroy();
    };
  }, [
    canBeSmoothProp,
    htmlSmoothClassName,
    initialSmoothProps,
    setSelector,
    smoothContainer,
  ]);

  useEffect(() => {
    if (!selector) {
      return;
    }

    if (selector instanceof SmoothScroll) {
      selector.changeProp({ ...smoothProps });
    }
  }, [selector, smoothProps]);

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
