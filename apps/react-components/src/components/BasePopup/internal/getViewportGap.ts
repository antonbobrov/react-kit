import { vevet } from 'vevet';

export function getViewportGap() {
  if (vevet.viewport.isPhone) {
    return 20;
  }

  return 40;
}
