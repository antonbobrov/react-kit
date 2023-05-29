import cn from 'classnames';
import React, { forwardRef, memo, useEffect, useRef, useState } from 'react';
import {
  useChange,
  useForwardedRef,
  useOutsideClick,
  usePropState,
} from '@anton.bobrov/react-hooks';
import { Portal } from 'react-portal';
import { prefixedClassName } from '../../utils/prefixedClassName';
import { usePosition } from './internal/usePosition';
import { getViewportGap } from './internal/getViewportGap';
import { IBasePopupProps } from './types';
import { Anchor as DefaultAnchorComponent } from './Anchor';

const DefaultAnchor = memo(DefaultAnchorComponent);

export const BasePopup = forwardRef<HTMLDivElement, IBasePopupProps>(
  (
    {
      className,
      style,
      children,
      anchor,
      renderAnchor: Anchor = DefaultAnchor,
      positionRef,
      isActive: isActiveProp,
      onActive,
      showEvent = 'click',
      verticalAlignment: verticalAlignmentProp,
      horizontalAlignment: horizontalAlignmentProp,
      gap,
      viewportGap = getViewportGap,
      viewportRef,
      isDisabled,
      hasOutsideClick = true,
      lifetime,
    },
    forwardedRef
  ) => {
    const contentRef = useForwardedRef(forwardedRef);
    const anchorRef = useRef<HTMLElement>(null);

    const [canRender, setCanRender] = useState(false);
    const [isActive, setIsActive] = usePropState(!!isActiveProp);

    // `onActive` callback
    useChange((value) => {
      onActive?.(value);
    }, isActive);

    // render
    useEffect(() => {
      if (isActive) {
        setCanRender(true);
      }
    }, [isActive]);

    // lifetime
    useEffect(() => {
      if (!isActive || !lifetime) {
        return undefined;
      }

      const timeout = setTimeout(() => setIsActive(false), lifetime);

      return () => clearTimeout(timeout);
    }, [isActive, setIsActive, lifetime]);

    useOutsideClick(anchorRef, (event) => {
      if (!canRender || !hasOutsideClick) {
        return;
      }

      if (!contentRef.current?.contains(event.target as Node)) {
        setIsActive(false);
      }
    });

    const {
      verticalAlignment,
      horizontalAlignment,
      style: positionStyle,
    } = usePosition({
      positionRef: positionRef ?? anchorRef,
      verticalAlignment: verticalAlignmentProp,
      horizontalAlignment: horizontalAlignmentProp,
      gap,
      viewportGap,
      viewportRef,
      isDisabled: !canRender || !!isDisabled,
    });

    return (
      <>
        <Anchor
          ref={anchorRef}
          activate={() => setIsActive(true)}
          deactivate={() => setIsActive(false)}
          isActive={isActive}
          anchor={anchor}
          showEvent={showEvent}
        />

        {canRender && !isDisabled && (
          <Portal>
            <div
              ref={contentRef}
              className={prefixedClassName('base-popup')}
              style={positionStyle}
            >
              <div
                className={cn(
                  prefixedClassName('base-popup__container'),
                  isActive && prefixedClassName('show'),
                  prefixedClassName(`vertical_${verticalAlignment}`),
                  prefixedClassName(`horizontal_${horizontalAlignment}`),
                  className
                )}
                style={style}
                onAnimationEnd={() => {
                  if (!isActive) {
                    setCanRender(false);
                  }
                }}
              >
                {children}
              </div>
            </div>
          </Portal>
        )}
      </>
    );
  }
);

BasePopup.displayName = 'BasePopup';

export * from './Anchor/types';
