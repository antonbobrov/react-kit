import React, { forwardRef, useEffect, useState } from 'react';
import { useForwardedRef, usePrevious } from '@anton.bobrov/react-hooks';
import cn from 'classnames';
import { TKey } from '@types';
import { prefixedClasNames } from '../../utils/prefixedClassNames';
import { IFadeContentProps } from './types';
import { FadeContentItem } from './Item';
import { useParentHeight } from './utils/useParentHeight';

export const FadeContent = forwardRef<HTMLDivElement, IFadeContentProps>(
  (
    { className, style, content, activeKey, duration = 600, hasFocus = true },
    forwardedRef,
  ) => {
    const ref = useForwardedRef(forwardedRef);

    const prevActiveKey = usePrevious(activeKey, activeKey);

    const [showKey, setShowKey] = useState<TKey | undefined>(undefined);
    const [hideKey, setHideKey] = useState<TKey | undefined>(undefined);
    const [currentKey, setCurrentKey] = useState(activeKey);

    const getState = (key: TKey) => {
      if (key === hideKey) {
        return 'hide';
      }

      if (key === showKey) {
        return 'show';
      }

      if (key === currentKey) {
        return 'active';
      }

      return 'unactive';
    };

    useEffect(() => {
      if (activeKey !== prevActiveKey) {
        setHideKey(prevActiveKey);
      }
    }, [activeKey, prevActiveKey]);

    const parentHeight = useParentHeight(ref);

    return (
      <div
        ref={ref}
        className={cn(prefixedClasNames('fade-content'), className)}
        style={style}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
      >
        {content.map(({ key, children }) => {
          const state = getState(key);

          return (
            <FadeContentItem
              key={key}
              className={cn(
                prefixedClasNames('fade-content__item'),
                prefixedClasNames(`fade-content__item_${state}`),
              )}
              duration={duration / 2}
              state={state}
              onShow={() =>
                hasFocus && ref.current?.focus({ preventScroll: true })
              }
              onShowProgress={(element, progress) =>
                parentHeight.interpolate(element.clientHeight, progress)
              }
              onShown={() => {
                setHideKey(undefined);
                setShowKey(undefined);
                parentHeight.reset();
              }}
              onHide={() => parentHeight.save()}
              onHidden={() => {
                setHideKey(undefined);
                setShowKey(activeKey);
                setCurrentKey(activeKey);
              }}
            >
              {state !== 'unactive' && children}
            </FadeContentItem>
          );
        })}
      </div>
    );
  },
);

FadeContent.displayName = 'FadeContent';
