import { TBasePopupHorizontalAlignment } from '../types';

export function getAutoHorizontalAlignment(
  domRect: DOMRect | undefined
): Exclude<TBasePopupHorizontalAlignment, 'auto'> | undefined {
  if (!domRect) {
    return undefined;
  }

  const viewportWidth = document.documentElement.clientWidth;
  const xCenter = viewportWidth / 2;
  const triggerCenter = domRect.left + domRect.width / 2;

  if (Math.abs(triggerCenter - xCenter) < 1) {
    return 'center';
  }

  if (triggerCenter < xCenter) {
    return 'start';
  }

  return 'end';
}
