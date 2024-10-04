import React, { forwardRef, useEffect, useRef, useState } from 'react';
import {
  isString,
  useDeepCompareMemoize,
  useEvent,
  useForwardedRef,
  useOnInViewport,
} from '@anton.bobrov/react-hooks';
import cn from 'classnames';
import { Marquee as VevetMarquee } from 'vevet';
import { IMarqueeProps } from './types';
import { prefixedClasNames } from '../../utils/prefixedClassNames';

/**
 * Marquee component for creating scrolling text or content.
 *
 * This component provides a simple way to display text or other elements that
 * scroll horizontally across the screen. It supports various features such as
 * customizable speed, direction, and behavior, allowing developers to create
 * engaging and dynamic content displays. The Marquee component is designed
 * to enhance user experience by providing an attention-grabbing method for
 * presenting important information or announcements while ensuring accessibility
 * and responsiveness across different devices and screen sizes.
 *
 * @link See examples https://antonbobrov.github.io/react-kit/?path=/docs/text-marquee--docs
 */
export const Marquee = forwardRef<HTMLDivElement, IMarqueeProps>(
  (
    {
      className,
      style,
      children,
      'aria-label': ariaLabel,
      canCloneNodes = false,
      onInit: onInitProp,
      isEnabled = true,
      ...changeableProps
    },
    forwardedRef,
  ) => {
    const ref = useForwardedRef(forwardedRef);
    const containerRef = useRef<HTMLDivElement>(null);

    const [marquee, setMarquee] = useState<VevetMarquee | undefined>();

    const onInit = useEvent(onInitProp);

    const initialPropsRef = useRef({ isEnabled, ...changeableProps });

    // create the marquee
    useEffect(() => {
      if (!containerRef.current) {
        return undefined;
      }

      const instance = new VevetMarquee({
        ...initialPropsRef.current,
        container: containerRef.current,
        canCloneNodes,
      });

      setMarquee(instance);
      onInit?.(instance);

      return () => instance?.destroy();
    }, [canCloneNodes, onInit, ref]);

    // viewport position state
    const { state } = useOnInViewport({ ref });

    // enable or disable on viewport position change
    useEffect(() => {
      if (!marquee || !state) {
        return;
      }

      if (state === 'in' && isEnabled) {
        marquee.changeProps({ isEnabled: true });
      } else {
        marquee.changeProps({ isEnabled: false });
      }
    }, [marquee, state, isEnabled]);

    // change props
    useEffect(() => {
      if (!marquee) {
        return;
      }

      marquee.changeProps(changeableProps);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [marquee, useDeepCompareMemoize(changeableProps)]);

    return (
      <div
        ref={ref}
        className={cn(className, prefixedClasNames('marquee'))}
        style={style}
        role="marquee"
        aria-label={ariaLabel ?? (isString(children) ? children : undefined)}
      >
        <div
          ref={containerRef}
          className={prefixedClasNames('marquee__container')}
          aria-hidden
        >
          {children}
        </div>
      </div>
    );
  },
);

Marquee.displayName = 'Marquee';
