import React, { forwardRef, useEffect, useRef } from 'react';
import { useEvent, useForwardedRef } from '@anton.bobrov/react-hooks';
import { useTimeline } from '@anton.bobrov/react-vevet-hooks';
import cn from 'classnames';
import { prefixedClasNames } from '../../utils/prefixedClassNames';
import { IExpandContentProps } from './types';
import { useStates } from './utils/useStates';
import { render } from './utils/render';

/** Accordion base */
export const ExpandContent = forwardRef<HTMLDivElement, IExpandContentProps>(
  (
    {
      className,
      style,
      isActive: isActiveProp = false,
      duration: durationProp = 500,
      hasAlpha = true,
      isContentRendered: isContentRenderedProp = true,
      onAnimationRender: onAnimationRenderProp,
      onAnimationEnd: onAnimationEndProp,
      children,
    },
    forwardedRef,
  ) => {
    const parentRef = useForwardedRef(forwardedRef);
    const contentRef = useRef<HTMLDivElement>(null);

    const onAnimationRender = useEvent(onAnimationRenderProp);
    const onAnimationEnd = useEvent(onAnimationEndProp);

    const { isActive, setIsFirstExpand, isContentRendered, duration } =
      useStates({
        isActive: isActiveProp,
        duration: durationProp,
        isContentRendered: isContentRenderedProp,
      });

    const { play, reverse, timeline } = useTimeline({
      duration,
      onProgress: ({ progress }) => {
        render({
          parentRef,
          contentRef,
          timeline,
          progress,
          hasAlpha,
          onRender: onAnimationRender,
          onEnd: (data) => {
            onAnimationEnd?.(data);
            setIsFirstExpand(false);
          },
        });
      },
    });

    useEffect(() => {
      if (!timeline) {
        return;
      }

      if (isActive) {
        play();
      } else {
        reverse();
      }
    }, [isActive, play, reverse, timeline]);

    return (
      <div
        ref={parentRef}
        className={cn(className, prefixedClasNames('expand-content'))}
        style={style}
      >
        <div
          ref={contentRef}
          className={prefixedClasNames('expand-content__content')}
        >
          {isContentRendered && children}
        </div>
      </div>
    );
  },
);

ExpandContent.displayName = 'ExpandContent';
