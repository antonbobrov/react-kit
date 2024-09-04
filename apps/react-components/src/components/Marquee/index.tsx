import React, { forwardRef, useEffect, useRef, useState } from 'react';
import {
  isString,
  useDeepCompareMemoize,
  useForwardedRef,
  useOnInViewport,
} from '@anton.bobrov/react-hooks';
import cn from 'classnames';
import { Marquee as VevetMarquee, vevet } from '@anton.bobrov/vevet-init';
import { IMarqueeProps } from './types';
import { prefixedClasNames } from '../../utils/prefixedClassNames';

/** Custom marquee element */
export const Marquee = forwardRef<HTMLSpanElement, IMarqueeProps>(
  (
    {
      className,
      style,
      children,
      'aria-label': ariaLabel,
      separator,
      isEnabled = true,
      prependWhitespace = true,
      ...changeableProps
    },
    forwardedRef,
  ) => {
    const ref = useForwardedRef(forwardedRef);
    const marqueeContainerRef = useRef<HTMLSpanElement>(null);

    const [marquee, setMarquee] = useState<VevetMarquee | undefined>();

    const initialPropsRef = useRef({ isEnabled, ...changeableProps });

    useEffect(() => {
      if (!marqueeContainerRef.current || !vevet) {
        return undefined;
      }

      const instance = new VevetMarquee({
        ...initialPropsRef.current,
        container: marqueeContainerRef.current,
        prependWhitespace,
      });

      setMarquee(instance);

      return () => instance?.destroy();
    }, [ref, prependWhitespace]);

    const { state } = useOnInViewport({ ref });

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
      <span
        ref={ref}
        className={cn(className, prefixedClasNames('marquee'))}
        style={style}
        role="marquee"
        aria-label={ariaLabel ?? (isString(children) ? children : undefined)}
      >
        <span
          ref={marqueeContainerRef}
          className={prefixedClasNames('marquee__container')}
          aria-hidden
        >
          {children}

          {separator}
        </span>
      </span>
    );
  },
);

Marquee.displayName = 'Marquee';
