import React, { forwardRef, useEffect, useRef } from 'react';
import { useEvent, useForwardedRef } from '@anton.bobrov/react-hooks';
import { useTimeline } from '@anton.bobrov/react-vevet-hooks';
import { utils, vevet } from '@anton.bobrov/vevet-init';
import cn from 'classnames';
import { prefixedClasNames } from '../../utils/prefixedClassNames';
import { IExpandContentProps } from './types';

const GLOBAL_SCOPE = [0, 0.75];
const EXPAND_SCOPE = [0, 0.75];
const ALPHA_SCOPE = [0.5, 1];

/** Accordion base */
export const ExpandContent = forwardRef<HTMLDivElement, IExpandContentProps>(
  (
    {
      className,
      style,
      isActive = false,
      duration = 500,
      hasAlpha = true,
      onAnimationEnd: onAnimationEndProp,
      children,
    },
    forwardedRef
  ) => {
    const parentRef = useForwardedRef(forwardedRef);
    const contentRef = useRef<HTMLDivElement>(null);

    const onAnimationEnd = useEvent(onAnimationEndProp);

    const { play, reverse, timeline } = useTimeline({
      duration,
      onProgress: ({ easing, progress }) => {
        const parent = parentRef.current;
        const content = contentRef.current;

        if (!parent || !content || !timeline) {
          return;
        }

        const heightProgress = utils.math.easing(
          utils.math.clampScope(easing, hasAlpha ? EXPAND_SCOPE : GLOBAL_SCOPE),
          vevet.prop.easing
        );

        const contentHeight = content.clientHeight;
        parent.style.height =
          progress === 1 ? 'auto' : `${contentHeight * heightProgress}px`;

        if (hasAlpha) {
          const alpha = utils.math.easing(
            utils.math.clampScope(easing, ALPHA_SCOPE),
            vevet.prop.easing
          );

          content.style.opacity = `${alpha}`;
          content.style.visibility = progress === 0 ? 'hidden' : 'visible';
        }

        if (timeline.isReversed && progress === 0) {
          onAnimationEnd?.(false);
        } else if (!timeline.isReversed && progress === 1) {
          onAnimationEnd?.(true);
        }
      },
    });

    useEffect(() => {
      if (!play) {
        return;
      }

      if (isActive) {
        play();
      } else {
        reverse();
      }
    }, [isActive, play, reverse]);

    return (
      <div
        ref={parentRef}
        className={cn(className, prefixedClasNames('expand-content'))}
        style={style}
      >
        <div ref={contentRef}>{children}</div>
      </div>
    );
  }
);

ExpandContent.displayName = 'ExpandContent';
