import React, { forwardRef, useRef } from 'react';
import cn from 'classnames';
import { prefixedClasNames } from '../../utils/prefixedClassNames';
import { IMoreContentProps } from './types';
import { useWrapperMoreContent } from './utils';
import { Button as DefaultButton } from './Button';
/**
 * MoreContent component for revealing additional content on demand.
 *
 * This component allows users to expand or collapse content sections, providing
 * a clean and organized way to present information. It supports features such
 * as customizable triggers, animations, and limits on the amount of content displayed.
 *
 * @link See examples https://antonbobrov.github.io/react-kit/?path=/docs/wrappers-morecontent--docs
 */
export const MoreContent = forwardRef<HTMLDivElement, IMoreContentProps>(
  (
    {
      className,
      style,
      children,
      renderButton: Button = DefaultButton,
      duration = 500,
      minHeight = 120,
    },
    forwardedRef,
  ) => {
    const clipperRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const { isActive, isEnabled, toggle } = useWrapperMoreContent({
      clipperRef,
      contentRef,
      minHeight,
      duration,
    });

    return (
      <div
        ref={forwardedRef}
        className={cn(prefixedClasNames('more-content'), className)}
        style={style}
      >
        <div
          ref={clipperRef}
          className={prefixedClasNames(
            'more-content__clipper',
            isEnabled && 'more-content__clipper_enabled',
            isActive && 'more-content__clipper_active',
          )}
          style={{ maxHeight: `${minHeight}px` }}
        >
          <div
            ref={contentRef}
            className={prefixedClasNames('more-content__content')}
          >
            {children}
          </div>
        </div>

        {isEnabled && <Button isActive={isActive} toggle={toggle} />}
      </div>
    );
  },
);

MoreContent.displayName = 'MoreContent';
