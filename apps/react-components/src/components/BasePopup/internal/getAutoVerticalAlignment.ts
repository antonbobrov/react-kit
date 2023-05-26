import { TBasePopupVerticalAlignment } from '../types';

export function getAutoVerticalAlignment(
  domRect: DOMRect | undefined
): Exclude<TBasePopupVerticalAlignment, 'auto'> | undefined {
  if (!domRect) {
    return undefined;
  }

  if (domRect.top > window.innerHeight / 2) {
    return 'up';
  }

  return 'down';
}
