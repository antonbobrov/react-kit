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

/**
 * ExpandContent component for creating accordion-style expandable content sections.
 *
 * This component allows users to toggle the visibility of additional content
 * within a collapsible section, making it an ideal base for accordion functionality.
 * It enhances user experience by saving space and providing a clean interface,
 * allowing for better management of large amounts of information.
 *
 * @link See examples https://antonbobrov.github.io/react-kit/?path=/docs/wrappers-expandcontent--docs
 *
 * @requires Requires styles: `@import '~@anton.bobrov/react-components/lib/styles/components/ExpandContent';`
 */
export const ExpandContent = forwardRef<HTMLDivElement, IExpandContentProps>(
  (
    {
      className,
      style,
      isActive: isActiveProp = false,
      duration = 500,
      hasAlpha = true,
      isHiddenContentRendered: isHiddenContentRenderedProp = true,
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
      isHiddenContentRendered,
      setIsHidden,
    } = useStates({
      isActive: isActiveProp,
      isHiddenContentRendered: isHiddenContentRenderedProp,
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
          {isHiddenContentRendered && children}
        </div>
      </div>
    );
  },
);

ExpandContent.displayName = 'ExpandContent';
