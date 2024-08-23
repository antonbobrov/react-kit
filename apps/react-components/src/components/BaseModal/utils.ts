/* eslint-disable no-param-reassign */
import { TModalRenderAnimation } from './types';

export const renderModalAnimation: TModalRenderAnimation = ({
  p,
  e,
  parent,
  overlay,
  scroll,
}) => {
  if (parent) {
    parent.style.opacity = `${p > 0 ? 1 : 0}`;
  }

  if (overlay) {
    overlay.style.opacity = `${e}`;
  }

  if (scroll) {
    scroll.style.opacity = `${e}`;
    scroll.style.transform = `translateY(${(1 - e) * 36}px)`;
  }
};
