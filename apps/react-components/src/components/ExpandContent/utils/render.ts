import {
  Timeline,
  easing as easingProgress,
  clampScope,
} from '@anton.bobrov/vevet-init';
import { RefObject } from 'react';

export type TExpandContentRenderAnimationProps = {
  content: HTMLElement;
  progress: number;
};

export type TExpandContentRenderAnimation = (
  data: TExpandContentRenderAnimationProps,
) => void;

interface IProps {
  parentRef: RefObject<HTMLElement>;
  contentRef: RefObject<HTMLElement>;
  timeline: Timeline | undefined;
  p: number;
  hasAlpha: boolean;
  onRender?: TExpandContentRenderAnimation;
  onEnd?: (isActive: boolean) => void;
}

const GLOBAL_SCOPE = [0, 1];
const EXPAND_SCOPE = [0, 0.75];
const ALPHA_SCOPE = [0.5, 1];

export function render({
  parentRef,
  contentRef,
  timeline,
  p,
  hasAlpha,
  onRender,
  onEnd,
}: IProps) {
  const parent = parentRef.current;
  const content = contentRef.current;

  if (!parent || !content || !timeline) {
    return;
  }

  // calculate progress
  const heightProgress = easingProgress(
    clampScope(p, hasAlpha ? EXPAND_SCOPE : GLOBAL_SCOPE),
  );
  const contentProgress = easingProgress(
    clampScope(p, hasAlpha ? ALPHA_SCOPE : GLOBAL_SCOPE),
  );

  // animate height
  parent.style.height =
    p === 1 ? 'auto' : `${content.offsetHeight * heightProgress}px`;

  // animate visibility
  content.style.visibility = p === 0 ? 'hidden' : 'visible';

  // animate alpha
  if (hasAlpha) {
    content.style.opacity = `${contentProgress}`;
  }

  // render callbacks
  onRender?.({ content, progress: contentProgress });

  // end callbacks
  if (timeline.isReversed && p === 0) {
    onEnd?.(false);
  } else if (!timeline.isReversed && p === 1) {
    onEnd?.(true);
  }
}
