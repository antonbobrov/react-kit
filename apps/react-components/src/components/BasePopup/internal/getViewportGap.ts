import { vevet } from '@anton.bobrov/vevet-init';

export function getViewportGap() {
  if (vevet.viewport.isPhone) {
    return 20;
  }

  return 40;
}
