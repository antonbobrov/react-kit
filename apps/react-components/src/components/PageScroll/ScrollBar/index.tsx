import React, { FC, useEffect, useState } from 'react';
import { ScrollBar as VevetScrollBar, vevet } from '@anton.bobrov/vevet-init';
import { usePageScrollSelector } from '../hooks/usePageScrollSelector';
import { IPageScrollSCrollBarProps } from './types';
import { prefixedClasNames } from '../../../utils/prefixedClassNames';

export const ScrollBar: FC<IPageScrollSCrollBarProps> = ({
  children,
  resizeKey,
  isDisabled,
}) => {
  const [scrollbar, setScrollbar] = useState<VevetScrollBar | undefined>();

  const scrollSelector = usePageScrollSelector();

  useEffect(() => {
    if (vevet.isMobile || !scrollSelector || isDisabled) {
      return undefined;
    }

    const instance = new VevetScrollBar({
      container: scrollSelector,
      domParent: document.body,
    });
    setScrollbar(instance);

    // @ts-ignore
    // eslint-disable-next-line no-underscore-dangle
    const xBar = instance._xBar;

    // @ts-ignore
    // eslint-disable-next-line no-underscore-dangle
    const yBar = instance._yBar;

    xBar.outer.classList.add(prefixedClasNames('page-scroll-scrollbar'));
    yBar.outer.classList.add(prefixedClasNames('page-scroll-scrollbar'));

    vevet.html.classList.add(prefixedClasNames('page-scroll-scrollbar-parent'));
    vevet.body.classList.add(prefixedClasNames('page-scroll-scrollbar-parent'));

    return () => {
      instance.destroy();

      vevet.html.classList.remove(
        prefixedClasNames('page-scroll-scrollbar-parent')
      );
      vevet.body.classList.remove(
        prefixedClasNames('page-scroll-scrollbar-parent')
      );
    };
  }, [scrollSelector, isDisabled]);

  useEffect(() => {
    if (!scrollbar?.destroyed) {
      scrollbar?.resize();
    }
  }, [resizeKey, scrollbar]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
