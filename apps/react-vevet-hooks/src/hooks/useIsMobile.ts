import { vevet } from '@anton.bobrov/vevet-init';
import { useEffect, useState } from 'react';

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<null | boolean>(null);

  useEffect(() => setIsMobile(vevet.isMobile), []);

  return isMobile;
}
