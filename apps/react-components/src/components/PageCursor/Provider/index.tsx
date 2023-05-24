import { CustomCursor, vevet } from '@anton.bobrov/vevet-init';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { Portal } from 'react-portal';
import { useDeepCompareMemoize } from 'use-deep-compare-effect';
import { prefixedClassName } from '../../../utils/prefixedClassName';
import { IPageCursorProviderProps } from './types';
import { usePageCursorProviderStore } from './usePageCursorProviderStore';
import { PageCursorContext } from '../interal/context';

export const Provider: FC<IPageCursorProviderProps> = ({
  children,
  cursors,
  isNativeCursorHidden,
  size = { width: 36, height: 36 },
  ...props
}) => {
  const [portalNode, setPortalNode] = useState<HTMLElement | null>(null);

  const store = usePageCursorProviderStore();
  const { cursor, setCursor, types } = store;

  const hasDefault = useMemo(
    () => !!cursors.find((item) => item.props.type === 'default'),
    [cursors]
  );

  const [initialSize] = useState(size);

  // create cursor
  useEffect(() => {
    if (!vevet || vevet.isMobile) {
      return undefined;
    }

    const instance = new CustomCursor({
      container: window,
      run: false,
      autoStop: true,
      size: initialSize,
    });

    setCursor?.(instance);
    setPortalNode(instance.innerCursor);

    // update default cursor classnames
    instance.outerCursor.classList.add(prefixedClassName('page-cursor-outer'));
    // instance.innerCursor.classList.add(prefixedClassName('page-cursor-inner'));

    // run cursor
    instance.enable();

    return () => {
      instance?.destroy();
      setCursor?.(undefined);
    };
  }, [setCursor, initialSize]);

  // update props
  useEffect(() => {
    cursor?.changeProp({
      size,
      ...props,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cursor, useDeepCompareMemoize({ size, props })]);

  // pause cursor
  useEffect(() => {
    if (!cursor || hasDefault) {
      return undefined;
    }

    if (types.length > 0) {
      cursor.enable();

      return undefined;
    }

    const disableCallback = cursor.addCallback('render', () => {
      if (
        cursor.coords.x === cursor.targetCoords.x &&
        cursor.coords.y === cursor.targetCoords.y &&
        types.length === 0
      ) {
        cursor.disable();
      }
    });

    return () => disableCallback.remove();
  }, [cursor, hasDefault, types]);

  // hide native cursor
  useEffect(() => {
    if (!cursor) {
      return undefined;
    }

    const className = prefixedClassName('hide-native-cursor');
    document.documentElement.classList.toggle(
      className,
      !!isNativeCursorHidden
    );

    return () => document.documentElement.classList.remove(className);
  }, [cursor, isNativeCursorHidden]);

  return (
    <PageCursorContext.Provider value={store}>
      {children}

      {portalNode && <Portal node={portalNode}>{cursors}</Portal>}
    </PageCursorContext.Provider>
  );
};
