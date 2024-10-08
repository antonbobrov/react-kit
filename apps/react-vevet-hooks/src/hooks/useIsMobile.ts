import { useEffect, useState } from 'react';
import { vevet } from 'vevet';

/**
 * Custom React hook that determines if the current device is mobile.
 *
 * This hook uses the `vevet` library to check if the viewport
 * corresponds to a mobile device. It initializes the state as `null`
 * until the check is performed, after which it updates the state
 * to either `true` or `false` based on the result.
 *
 * @example
 * const MyComponent = () => {
 *   const isMobile = useIsMobile();
 *
 *   return (
 *     <div>
 *       {isMobile === null
 *         ? 'Checking device type...'
 *         : isMobile
 *         ? 'You are using a mobile device.'
 *         : 'You are using a desktop device.'}
 *     </div>
 *   );
 * };
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<null | boolean>(null);

  useEffect(() => setIsMobile(vevet.isMobile), []);

  return isMobile;
}
