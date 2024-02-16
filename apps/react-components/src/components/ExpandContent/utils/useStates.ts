import { useDebouncedProp } from '@anton.bobrov/react-hooks';
import { useEffect, useState } from 'react';

interface IProps {
  isActive: boolean;
  duration: number;
  isContentRendered: boolean;
}

export function useStates({
  isActive: isActiveProp,
  duration: durationProp,
  isContentRendered: isContentRenderedProp,
}: IProps) {
  const [isContentRendered, setIsContentRendered] = useState(
    isContentRenderedProp,
  );
  const [isFirstExpand, setIsFirstExpand] = useState(isActiveProp);

  const duration = isFirstExpand ? 1 : durationProp;

  useEffect(() => {
    if (isActiveProp && !isContentRendered) {
      setIsContentRendered(true);
    }
  }, [isActiveProp, isContentRendered]);

  const isActive = useDebouncedProp(isActiveProp, 1);

  return {
    isActive,
    setIsFirstExpand,
    isContentRendered,
    duration,
  };
}
