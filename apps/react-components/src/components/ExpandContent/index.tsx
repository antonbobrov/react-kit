import React, { forwardRef, useEffect, useRef } from 'react';
import { useEvent, useForwardedRef } from '@anton.bobrov/react-hooks';
import { useTimeline } from '@anton.bobrov/react-vevet-hooks';
import cn from 'classnames';
import { prefixedClasNames } from '../../utils/prefixedClassNames';
import { IExpandContentProps } from './types';
import { useStates } from './utils/useStates';
import { render } from './utils/render';

const classNamePrefix = 'expand-content';
const contentClassNamePrefix = `${classNamePrefix}__content`;

/** Accordion base */
export const ExpandContent = forwardRef<HTMLDivElement, IExpandContentProps>(
  (
    {
      className,
      style,
      isActive: isActiveProp = false,
      duration = 500,
      hasAlpha = true,
      isContentRendered: isContentRenderedProp = true,
      onAnimationRender: onAnimationRenderProp,
      onAnimationEnd: onAnimationEndProp,
      children,
      ...props
    },
    forwardedRef,
  ) => {
    const parentRef = useForwardedRef(forwardedRef);
    const contentRef = useRef<HTMLDivElement>(null);

    const onAnimationRender = useEvent(onAnimationRenderProp);
    const onAnimationEnd = useEvent(onAnimationEndProp);

    const {
      isActive,
      isPrevActive,
      isDefaultActive,
      isContentRendered,
      setIsHidden,
    } = useStates({
      isActive: isActiveProp,
      isContentRendered: isContentRenderedProp,
    });

    const { play, reverse, timeline } = useTimeline({
      duration,
      onProgress: ({ p }) => {
        render({
          parentRef,
          contentRef,
          timeline,
          p,
          hasAlpha,
          onRender: onAnimationRender,
          onEnd: (data) => {
            onAnimationEnd?.(data);

            if (!data) {
              setIsHidden(true);
            }
          },
        });
      },
    });

    useEffect(() => {
      if (isActiveProp) {
        setIsHidden(false);
      }
    }, [isActiveProp, setIsHidden]);

    useEffect(() => {
      if (!timeline || !isDefaultActive) {
        return;
      }

      // @ts-ignore
      // eslint-disable-next-line no-underscore-dangle
      timeline._p = 1;
    }, [timeline, isDefaultActive]);

    useEffect(() => {
      if (isActive === isPrevActive) {
        return;
      }

      if (isActive) {
        play();
      } else {
        reverse();
      }
    }, [isActive, isPrevActive, play, reverse]);

    return (
      <div
        {...props}
        ref={parentRef}
        className={cn(
          className,
          prefixedClasNames(classNamePrefix),
          isDefaultActive &&
            prefixedClasNames(`${classNamePrefix}_default_active`),
        )}
        style={style}
      >
        <div
          ref={contentRef}
          className={cn(
            prefixedClasNames(contentClassNamePrefix),
            prefixedClasNames(`${contentClassNamePrefix}_default_active`),
          )}
        >
          {isContentRendered && children}
        </div>
      </div>
    );
  },
);

ExpandContent.displayName = 'ExpandContent';
