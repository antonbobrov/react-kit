import { useDebouncedProp, usePrevious } from '@anton.bobrov/react-hooks';
import { useState } from 'react';

interface IProps {
  isActive: boolean;
  isHiddenContentRendered: boolean;
}

export function useStates({
  isActive: isActiveProp,
  isHiddenContentRendered: isHiddenContentRenderedProp,
}: IProps) {
  const [isDefaultActive] = useState(isActiveProp);

  const [isHidden, setIsHidden] = useState(!isDefaultActive);

  const isHiddenContentRendered = isHiddenContentRenderedProp
    ? true
    : !isHidden;

  const isActive = useDebouncedProp(isActiveProp, 1);

  const isPrevActive = usePrevious(isActive, isActive);

  return {
    isActive,
    isPrevActive,
    isDefaultActive,
    isHiddenContentRendered,
    setIsHidden,
  };
}
