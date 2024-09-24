import { useDebouncedProp, usePrevious } from '@anton.bobrov/react-hooks';
import { useEffect, useState } from 'react';

interface IProps {
  isActive: boolean;
  isContentRendered: boolean;
}

export function useStates({
  isActive: isActiveProp,
  isContentRendered: isContentRenderedProp,
}: IProps) {
  const [isContentRendered, setIsContentRendered] = useState(
    isContentRenderedProp,
  );

  const [isDefaultActive] = useState(isActiveProp);

  const isActive = useDebouncedProp(isActiveProp, 1);

  const isPrevActive = usePrevious(isActive, isActive);

  useEffect(() => {
    if (isActiveProp && !isContentRendered) {
      setIsContentRendered(true);
    }
  }, [isActiveProp, isContentRendered]);

  return {
    isActive,
    isPrevActive,
    isDefaultActive,
    isContentRendered,
  };
}
