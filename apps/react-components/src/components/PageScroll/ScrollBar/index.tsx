import React, { FC, useEffect, useState } from 'react';
import { vevet, ScrollBar as VevetScrollBar } from 'vevet';
import { usePageScrollSelector } from '../hooks/usePageScrollSelector';
import { IPageScrollSCrollBarProps } from './types';
import { prefixedClasNames } from '../../../utils/prefixedClassNames';

/** Custom scrollbar */
export const ScrollBar: FC<IPageScrollSCrollBarProps> = ({
  children,
  resizeKey,
  isDisabled,
  isDraggable = true,
  shouldAutoSize = true,
  canAutoHide = true,
  minSize = 50,
}) => {
  const [scrollbar, setScrollbar] = useState<VevetScrollBar | undefined>();

  const scrollSelector = usePageScrollSelector();

  useEffect(() => {
    if (!scrollSelector || vevet.isMobile || isDisabled) {
      return undefined;
    }

    const instance = new VevetScrollBar({
      container: scrollSelector,
      domParent: document.body,
      isDraggable,
      shouldAutoSize,
      canAutoHide,
      minSize,
    });

    setScrollbar(instance);

    const { xBar, yBar } = instance;

    const scrollbarClassName = prefixedClasNames('page-scroll-scrollbar');
    const pageScrollBarClassName = prefixedClasNames(
      'page-scroll-scrollbar-parent',
    );

    xBar.outer.classList.add(scrollbarClassName);
    yBar.outer.classList.add(scrollbarClassName);

    vevet.html.classList.add(pageScrollBarClassName);
    vevet.body.classList.add(pageScrollBarClassName);

    return () => {
      instance.destroy();

      vevet.html.classList.remove(pageScrollBarClassName);

      vevet.body.classList.remove(pageScrollBarClassName);
    };
  }, [
    scrollSelector,
    isDisabled,
    isDraggable,
    shouldAutoSize,
    canAutoHide,
    minSize,
  ]);

  useEffect(() => {
    if (!scrollbar?.isDestroyed) {
      scrollbar?.resize();
    }
  }, [resizeKey, scrollbar]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
