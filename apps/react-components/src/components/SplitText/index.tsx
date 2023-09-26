import React, { forwardRef, useEffect } from 'react';
import { useEvent, useForwardedRef } from '@anton.bobrov/react-hooks';
import { SplitText as VevetSplitText, vevet } from '@anton.bobrov/vevet-init';
import { ISplitTextProps } from './types';

/** Split text into letters, words or lines */
export const SplitText = forwardRef<HTMLSpanElement, ISplitTextProps>(
  (
    {
      className,
      style,
      text: textProp,
      textSource = 'innerHTML',
      hasLetters,
      hasLines,
      onInit: onInitProp,
    },
    forwardedRef
  ) => {
    const ref = useForwardedRef(forwardedRef);

    const onInit = useEvent(onInitProp);

    useEffect(() => {
      const container = ref.current;
      if (!container) {
        return undefined;
      }

      if (container.innerHTML !== textProp) {
        container.innerHTML = textProp;
      }

      const instance = new VevetSplitText({
        container,
        textSource,
        hasLetters,
        hasLines,
        viewportTarget: vevet.isMobile ? 'width' : undefined,
      });

      onInit(instance);

      return () => instance.destroy();
    }, [ref, onInit, textProp, textSource, hasLetters, hasLines]);

    return (
      <span
        ref={ref}
        className={className}
        style={{ ...style, display: 'block' }}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: textProp }}
      />
    );
  }
);

SplitText.displayName = 'SplitText';
