import { useDebouncedProp, usePrevious } from '@anton.bobrov/react-hooks';
import { useState } from 'react';

interface IProps {
  isActive: boolean;
  isContentRendered: boolean;
}

export function useStates({
  isActive: isActiveProp,
  isContentRendered: isContentRenderedProp,
}: IProps) {
  const [isDefaultActive] = useState(isActiveProp);

  const [isHidden, setIsHidden] = useState(!isDefaultActive);

  const isContentRendered = isContentRenderedProp ? true : !isHidden;

  const isActive = useDebouncedProp(isActiveProp, 1);

  const isPrevActive = usePrevious(isActive, isActive);

  return {
    isActive,
    isPrevActive,
    isDefaultActive,
    isContentRendered,
    setIsHidden,
  };
}
