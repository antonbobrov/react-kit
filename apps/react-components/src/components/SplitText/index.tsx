import React, { forwardRef, useEffect, useMemo, useRef } from 'react';
import {
  useEvent,
  useForwardedRef,
  useOnLazyIntersection,
} from '@anton.bobrov/react-hooks';
import { SplitText as VevetSplitText, vevet } from 'vevet';
import { ISplitTextProps } from './types';

/** Split text into letters, words or lines */
export const SplitText = forwardRef<HTMLSpanElement, ISplitTextProps>(
  (
    {
      className,
      style,
      text: textProp,
      hasLetters = false,
      hasLines = false,
      letterTag = 'span',
      wordTag = 'span',
      lineTag = 'span',
      onInit: onInitProp,
      isLazy = true,
    },
    forwardedRef,
  ) => {
    const ref = useForwardedRef(forwardedRef);

    const prevTextRef = useRef(textProp);

    const onInit = useEvent(onInitProp);

    const { isIn } = useOnLazyIntersection({ ref });
    const canInit = (isLazy && isIn) || !isLazy;

    const html = useMemo(() => ({ __html: textProp }), [textProp]);

    useEffect(() => {
      const container = ref.current;

      if (!container || !canInit) {
        return undefined;
      }

      if (prevTextRef.current !== textProp) {
        container.innerHTML = textProp;
      }

      const instance = new VevetSplitText({
        container,
        hasLetters,
        hasLines,
        letterTag,
        wordTag,
        lineTag,
        viewportTarget: vevet.isMobile ? 'width' : undefined,
      });

      onInit?.(instance);

      return () => instance.destroy();
    }, [
      canInit,
      hasLetters,
      hasLines,
      letterTag,
      lineTag,
      onInit,
      ref,
      textProp,
      wordTag,
    ]);

    return (
      <span
        ref={ref}
        className={className}
        style={{ ...style, display: 'block', fontKerning: 'none' }}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={html}
      />
    );
  },
);

SplitText.displayName = 'SplitText';
