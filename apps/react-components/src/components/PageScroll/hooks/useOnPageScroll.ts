import { useEffect } from 'react';
import { useEvent } from '@anton.bobrov/react-hooks';
import { onScroll } from 'vevet';
import { usePageScrollSelector } from './usePageScrollSelector';

export type TUseOnPageScrollEffect = Parameters<typeof onScroll>[0]['callback'];

/** Event on global scrollable element scrolling */
export function useOnPageScroll(effectProp: TUseOnPageScrollEffect) {
  const effect = useEvent(effectProp);
  const scrollSelector = usePageScrollSelector();

  useEffect(() => {
    if (!scrollSelector) {
      return undefined;
    }

    const scrollListener = onScroll({
      container: scrollSelector,
      callback: effect,
    });

    return () => scrollListener.remove();
  }, [effect, scrollSelector]);
}
