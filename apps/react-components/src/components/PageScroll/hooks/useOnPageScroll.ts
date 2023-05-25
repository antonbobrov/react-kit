import { useEffect } from 'react';
import { utils } from '@anton.bobrov/vevet-init';
import { useEvent } from '@anton.bobrov/react-hooks';
import { usePageScrollSelector } from './usePageScrollSelector';

export type TUseOnPageScrollEffect = Parameters<
  typeof utils.listeners.onScroll
>[0]['callback'];

/** Event on global scrollable element scrolling */
export function useOnPageScroll(effectProp: TUseOnPageScrollEffect) {
  const effect = useEvent(effectProp);
  const scrollSelector = usePageScrollSelector();

  useEffect(() => {
    if (!scrollSelector) {
      return undefined;
    }

    const scrollListener = utils.listeners.onScroll({
      container: scrollSelector,
      callback: effect,
    });

    return () => scrollListener.remove();
  }, [effect, scrollSelector]);
}
