import React, { FC, useEffect, useState } from 'react';
import {
  CustomScroll,
  CustomScrollDragPlugin,
  CustomScrollKeyboardPlugin,
  vevet,
} from 'vevet';
import {
  isUndefined,
  useEvent,
  useDeepCompareMemoize,
} from '@anton.bobrov/react-hooks';
import { prefixedClasNames } from '../../../utils/prefixedClassNames';
import { usePageScrollProviderStore } from './utils/usePageScrollProviderStore';
import { IPageScrollProviderProps } from './types';
import { PageScrollContext } from '../context';

/** PageScroll provider */
export const Provider: FC<IPageScrollProviderProps> = ({
  children,
  getType: getTypeProp,
  customScrollProps = {},
  onCustomScrollInit: onCustomScrollInitProp,
}) => {
  const store = usePageScrollProviderStore();
  const { selector, setSelector, customContainer } = store;

  const [initialCustomScrollProps] = useState(customScrollProps);

  const htmlCustomClassName = prefixedClasNames('page-scroll-use-custom');

  const onCustomScrollInit = useEvent(onCustomScrollInitProp);
  const getType = useEvent(getTypeProp);
  const hasGetType = !isUndefined(getTypeProp);

  useEffect(() => {
    const html = document.documentElement;

    const isCustomByProp =
      hasGetType && getType ? getType() === 'custom' : undefined;
    const isCustomByDefault = !vevet.isMobile;
    const isCustom = isCustomByProp ?? isCustomByDefault;

    if (!isCustom || !customContainer) {
      const timeout = setTimeout(() => {
        html.classList.remove(htmlCustomClassName);
        setSelector?.(window);
      }, 16);

      return () => {
        setSelector?.(undefined);
        clearTimeout(timeout);
      };
    }

    html.classList.add(htmlCustomClassName);

    const scroll = new CustomScroll({
      container: customContainer,
      hasWillChange: !vevet.browserName.includes('firefox'),
      lerp: 0.1,
      lerpApproximation: 0.5,
      isEnabled: true,
      ...initialCustomScrollProps,
    });
    setSelector?.(scroll);

    scroll.addPlugin(new CustomScrollKeyboardPlugin());

    if (window.matchMedia('(any-pointer: coarse)').matches) {
      scroll.addPlugin(new CustomScrollDragPlugin({ lerp: 0.35 }));
    }

    onCustomScrollInit?.(scroll);

    return () => {
      setSelector?.(undefined);
      scroll.destroy();
      html.classList.remove(htmlCustomClassName);
    };
  }, [
    getType,
    htmlCustomClassName,
    initialCustomScrollProps,
    onCustomScrollInit,
    setSelector,
    customContainer,
    hasGetType,
  ]);

  useEffect(() => {
    if (!selector) {
      return;
    }

    if (selector instanceof CustomScroll) {
      selector.changeProps({ ...customScrollProps });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selector, useDeepCompareMemoize(customScrollProps)]);

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
