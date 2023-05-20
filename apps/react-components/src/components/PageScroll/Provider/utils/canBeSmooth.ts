import { vevet } from '@anton.bobrov/vevet-init';

export function canBeSmooth() {
  return !vevet.isMobile;
}
