import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { Portal } from 'react-portal';
import {
  isString,
  useEvent,
  useDeepCompareMemoize,
} from '@anton.bobrov/react-hooks';
import { CustomCursor, vevet } from 'vevet';
import { prefixedClassName } from '../../../utils/prefixedClassName';
import { IPageCursorProviderProps } from './types';
import { usePageCursorProviderStore } from './usePageCursorProviderStore';
import { PageCursorContext } from '../interal/context';

/** PageCursor provider */
export const Provider: FC<IPageCursorProviderProps> = ({
  children,
  cursors,
  isDisabled,
  onInit: onInitProp,
  onTypeChange: onTypeChangeProp,
  isNativeCursorHidden,
  ...changeableProps
}) => {
  const [portalNode, setPortalNode] = useState<HTMLElement | null>(null);

  const initialChangeablePropsRef = useRef(changeableProps);

  const onInit = useEvent(onInitProp);
  const onTypeChange = useEvent(onTypeChangeProp);

  const store = usePageCursorProviderStore();
  const { cursor, setCursor, types } = store;

  const hasDefault = useMemo(
    () =>
      !!cursors.find((item) =>
        isString(item.props.type)
          ? item.props.type === 'default'
          : item.props.type.includes('default'),
      ),
    [cursors],
  );

  // callback on type change
  useEffect(() => {
    onTypeChange?.(types);
  }, [onTypeChange, types]);

  // create cursor
  useEffect(() => {
    if (!vevet || vevet.isMobile || isDisabled) {
      return undefined;
    }

    const instance = new CustomCursor({
      ...initialChangeablePropsRef.current,
      container: window,
      isEnabled: false,
      shouldAutoStop: true,
    });

    setCursor?.(instance);
    setPortalNode(instance.innerElement);

    // update default cursor classnames
    instance.outerElement.classList.add(prefixedClassName('page-cursor-outer'));

    // run cursor
    instance.changeProps({ isEnabled: true });

    // callback
    onInit?.(instance);

    return () => {
      instance?.destroy();
      setCursor?.(undefined);
    };
  }, [isDisabled, onInit, setCursor]);

  // change props
  useEffect(() => {
    if (!cursor) {
      return;
    }

    cursor.changeProps(changeableProps);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cursor, useDeepCompareMemoize(changeableProps)]);

  // pause cursor
  useEffect(() => {
    if (!cursor || hasDefault) {
      return undefined;
    }

    if (types.length > 0) {
      cursor.changeProps({ isEnabled: true });

      return undefined;
    }

    const disableCallback = cursor.addCallback('render', () => {
      if (cursor.isCoordsInterpolated && types.length === 0) {
        cursor.changeProps({ isEnabled: false });
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
      !!isNativeCursorHidden,
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
