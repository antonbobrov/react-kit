import React, { forwardRef, useEffect } from 'react';
import { useEvent, useForwardedRef } from '@anton.bobrov/react-hooks';
import { SplitText as VevetSplitText, vevet } from '@anton.bobrov/vevet-init';
import { ISplitTextProps } from './types';

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

      const instance = new VevetSplitText({
        container,
        textSource: 'innerHTML',
        appendLetters,
        appendLines,
        viewportTarget: vevet.isMobile ? 'w' : undefined,
      });

      onInit(instance);

      return () => instance.destroy();
    }, [appendLetters, appendLines, onInit, ref]);

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
