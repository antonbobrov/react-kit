import nodeMarquee, { NodeMarquee } from 'node-marquee';
import React, {
  RefObject,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  isString,
  useForwardedRef,
  useOnInViewport,
} from '@anton.bobrov/react-hooks';
import cn from 'classnames';
import { IMarqueeProps } from './types';
import { prefixedClasNames } from '../../utils/prefixedClassNames';

export const Marquee = forwardRef<HTMLSpanElement, IMarqueeProps>(
  (
    {
      className,
      style,
      children,
      'aria-label': ariaLabel,
      separator,
      pauseOnHover,
      speed = 1,
      minQuantity = 4,
      prependWhitespace = true,
    },
    forwardedRef
  ) => {
    const ref = useForwardedRef(forwardedRef);

    const marqueeRef = useRef<NodeMarquee | null>(null);

    // dynamic ref for useOnInViewport to trigger each time the marquee is updated
    const [dynamicRef, setDynamicRef] = useState<RefObject<HTMLElement>>({
      current: null,
    });

    useEffect(() => {
      if (!ref.current) {
        return undefined;
      }

      const instance =
        nodeMarquee({
          parent: ref.current,
          pauseOnHover,
          speed,
          autoplay: false,
          resize: true,
          minQuantity,
          prependWhitespace,
        }) || null;

      marqueeRef.current = instance;
      setDynamicRef({ current: ref.current });

      return () => instance?.destroy();
    }, [ref, pauseOnHover, speed, minQuantity, prependWhitespace]);

    useOnInViewport({
      ref: dynamicRef,
      onIn: () => marqueeRef.current?.play(),
      onOut: () => marqueeRef.current?.pause(),
      onFallback: () => marqueeRef.current?.play(),
    });

    return (
      <span
        className={cn(className, prefixedClasNames('marquee'))}
        style={style}
        role="marquee"
        aria-label={ariaLabel ?? (isString(children) ? children : undefined)}
      >
        <span
          ref={ref}
          className={prefixedClasNames('marquee__container')}
          aria-hidden
        >
          {children}
          {separator}
        </span>
      </span>
    );
  }
);

Marquee.displayName = 'Marquee';
