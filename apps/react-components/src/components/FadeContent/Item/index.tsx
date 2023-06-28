import React, { forwardRef, useEffect, useState } from 'react';
import { useEvent, useForwardedRef } from '@anton.bobrov/react-hooks';
import { Timeline, vevet } from '@anton.bobrov/vevet-init';
import { IProps } from './types';

export const FadeContentItem = forwardRef<HTMLDivElement, IProps>(
  (
    {
      className,
      children,
      duration,
      state: stateProp,
      onShow: onShowProp,
      onShowProgress: onShowProgressProp,
      onShown: onShownProp,
      onHide: onHideProp,
      onHidden: onHiddenProp,
    },
    forwardedRef
  ) => {
    const ref = useForwardedRef(forwardedRef);

    const onShow = useEvent(onShowProp);
    const onShowProgress = useEvent(onShowProgressProp);
    const onShown = useEvent(onShownProp);
    const onHide = useEvent(onHideProp);
    const onHidden = useEvent(onHiddenProp);

    const render = useEvent((state: 'hide' | 'show', progress: number) => {
      if (state === 'show') {
        ref.current!.style.opacity = `${progress}`;
      }

      if (state === 'hide') {
        ref.current!.style.opacity = `${1 - progress}`;
      }
    });

    const [initialState] = useState(stateProp);

    useEffect(() => {
      if (!vevet) {
        return undefined;
      }

      if (initialState === stateProp) {
        return undefined;
      }

      if (stateProp !== 'hide' && stateProp !== 'show') {
        return undefined;
      }

      const element = ref.current!;

      if (stateProp === 'show') {
        onShow();
      } else if (stateProp === 'hide') {
        onHide();
      }

      const timeline = new Timeline({ duration });

      timeline.addCallback('progress', ({ easing, progress }) => {
        render(stateProp, easing);

        if (stateProp === 'show') {
          onShowProgress(element, progress);
        }

        if (stateProp === 'show' && progress === 1) {
          onShown();
        } else if (stateProp === 'hide' && progress === 1) {
          onHidden();
        }
      });

      timeline.play();

      return () => timeline.destroy();
    }, [
      initialState,
      stateProp,
      ref,
      duration,
      onShow,
      onShowProgress,
      onShown,
      onHide,
      onHidden,
      render,
    ]);

    return (
      <div
        ref={ref}
        className={className}
        style={{ opacity: initialState === 'active' ? 1 : 0 }}
      >
        {children}
      </div>
    );
  }
);

FadeContentItem.displayName = 'FadeContentItem';
