import {
  Timeline,
  easing as easingProgress,
  clampScope,
} from '@anton.bobrov/vevet-init';
import { RefObject } from 'react';

interface IProps {
  parentRef: RefObject<HTMLElement>;
  contentRef: RefObject<HTMLElement>;
  timeline: Timeline | undefined;
  progress: number;
  hasAlpha: boolean;
  onEnd?: (isActive: boolean) => void;
}

const GLOBAL_SCOPE = [0, 1];
const EXPAND_SCOPE = [0, 0.75];
const ALPHA_SCOPE = [0.5, 1];

export function render({
  parentRef,
  contentRef,
  timeline,
  progress,
  hasAlpha,
  onEnd,
}: IProps) {
  const parent = parentRef.current;
  const content = contentRef.current;

  if (!parent || !content || !timeline) {
    return;
  }

  // calculate progress
  const heightProgress = easingProgress(
    clampScope(progress, hasAlpha ? EXPAND_SCOPE : GLOBAL_SCOPE),
  );
  const contentProgress = easingProgress(
    clampScope(progress, hasAlpha ? ALPHA_SCOPE : GLOBAL_SCOPE),
  );

  // animate height
  parent.style.height =
    progress === 1 ? 'auto' : `${content.clientHeight * heightProgress}px`;

  // animate visibility
  content.style.visibility = progress === 0 ? 'hidden' : 'visible';

  // animate alpha
  if (hasAlpha) {
    content.style.opacity = `${contentProgress}`;
  }

  // callbacks
  if (timeline.isReversed && progress === 0) {
    onEnd?.(false);
  } else if (!timeline.isReversed && progress === 1) {
    onEnd?.(true);
  }
}
