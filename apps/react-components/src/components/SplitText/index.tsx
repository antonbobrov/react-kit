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
      appendLetters,
      appendLines,
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
        textSource: 'innerHTML',
        appendLetters,
        appendLines,
        viewportTarget: vevet.isMobile ? 'w' : undefined,
      });

      onInit(instance);

      return () => instance.destroy();
    }, [ref, onInit, appendLetters, appendLines, textProp]);

    return (
      <span
        ref={ref}
        className={className}
        style={style}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: textProp }}
      />
    );
  }
);

SplitText.displayName = 'SplitText';
