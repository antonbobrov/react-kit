/* eslint-disable no-param-reassign */
import { TModalRenderAnimation } from './types';

export const renderModalAnimation: TModalRenderAnimation = ({
  progress,
  easing,
  parent,
  overlay,
  scroll,
}) => {
  if (parent) {
    parent.style.opacity = `${progress > 0 ? 1 : 0}`;
  }

  if (overlay) {
    overlay.style.opacity = `${easing}`;
  }

  if (scroll) {
    scroll.style.opacity = `${easing}`;
    scroll.style.transform = `translateY(${(1 - easing) * 36}px)`;
  }
};
