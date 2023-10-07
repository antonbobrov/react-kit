import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { useEvent, useForwardedRef } from '@anton.bobrov/react-hooks';
import { useTimeline } from '@anton.bobrov/react-vevet-hooks';
import { easing as easingProgress, clampScope } from '@anton.bobrov/vevet-init';
import cn from 'classnames';
import { prefixedClasNames } from '../../utils/prefixedClassNames';
import { IExpandContentProps } from './types';

const GLOBAL_SCOPE = [0, 1];
const EXPAND_SCOPE = [0, 0.75];
const ALPHA_SCOPE = [0.5, 1];

/** Accordion base */
export const ExpandContent = forwardRef<HTMLDivElement, IExpandContentProps>(
  (
    {
      className,
      style,
      isActive = false,
      duration: durationProp = 500,
      hasAlpha = true,
      onAnimationEnd: onAnimationEndProp,
      children,
    },
    forwardedRef
  ) => {
    const parentRef = useForwardedRef(forwardedRef);
    const contentRef = useRef<HTMLDivElement>(null);

    const [isFirstExpand, setIsFirstExpand] = useState(isActive);
    const duration = isFirstExpand ? 1 : durationProp;

    const onAnimationEnd = useEvent(onAnimationEndProp);

    const { play, reverse, timeline } = useTimeline({
      duration,
      onProgress: ({ progress }) => {
        const parent = parentRef.current;
        const content = contentRef.current;

        if (!parent || !content || !timeline) {
          return;
        }

        const heightProgress = easingProgress(
          clampScope(progress, hasAlpha ? EXPAND_SCOPE : GLOBAL_SCOPE)
        );

        const contentHeight = content.clientHeight;
        parent.style.height =
          progress === 1 ? 'auto' : `${contentHeight * heightProgress}px`;

        content.style.visibility = progress === 0 ? 'hidden' : 'visible';

        if (hasAlpha) {
          const alpha = easingProgress(clampScope(progress, ALPHA_SCOPE));

          content.style.opacity = `${alpha}`;
        }

        if (timeline.isReversed && progress === 0) {
          onAnimationEnd?.(false);
          setIsFirstExpand(false);
        } else if (!timeline.isReversed && progress === 1) {
          onAnimationEnd?.(true);
          setIsFirstExpand(false);
        }
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
          {children}
        </div>
      </div>
    );
  }
);

ExpandContent.displayName = 'ExpandContent';
