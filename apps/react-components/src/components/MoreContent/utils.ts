import { useClientSize, useEvent } from '@anton.bobrov/react-hooks';
import { useTimeline } from '@anton.bobrov/react-vevet-hooks';
import { RefObject, useEffect, useState } from 'react';

interface IProps {
  clipperRef: RefObject<HTMLElement>;
  contentRef: RefObject<HTMLElement>;
  minHeight: number;
  duration: number;
}

export function useWrapperMoreContent({
  clipperRef,
  contentRef,
  minHeight,
  duration,
}: IProps) {
  const { clientHeight: contentHeight } = useClientSize(contentRef);

  const [isActive, setIsActive] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    setIsEnabled(contentHeight >= minHeight);
  }, [contentHeight, minHeight]);

  const timeline = useTimeline({
    duration,
    onProgress: ({ easing, progress }) => {
      const clipper = clipperRef.current;
      if (!clipper) {
        return;
      }

      const difference = Math.max(contentHeight - minHeight, 0);
      const height = minHeight + difference * easing;

      clipper.style.height = progress < 1 ? `${height}px` : '';
      clipper.style.maxHeight = 'initial';
    },
  });

  useEffect(() => {
    if (!timeline) {
      return;
    }

    if (!isActive) {
      timeline.reverse();
    } else {
      timeline.play();
    }
  }, [isActive, timeline]);

  const toggle = useEvent(() => setIsActive((val) => !val));

  return {
    toggle,
    isActive,
    isEnabled,
  };
}
