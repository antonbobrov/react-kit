import { RefObject, useEffect, useState } from 'react';
import { isBoolean } from '@anton.bobrov/react-hooks';
import { useScrollView } from './useScrollView';

export interface IUseScrollViewAnimationTrigger {
  /** @default 'view' */
  animation?: 'view' | boolean;
  inViewDelay?: number;
}

interface IProps extends IUseScrollViewAnimationTrigger {
  /** Element ref */
  ref: RefObject<HTMLElement>;
}

/**
 * ScrollView hook that helps you detect elements in or out of viewport
 */
export function useScrollViewAnimationTrigger({
  ref,
  animation = 'view',
  inViewDelay,
}: IProps) {
  const [isActive, setIsActive] = useState(false);

  useScrollView({
    ref,
    onIn: () => setIsActive(true),
    isDisabled: animation !== 'view',
    inDelay: inViewDelay,
  });

  useEffect(() => {
    if (!isBoolean(animation)) {
      return;
    }

    setIsActive(animation);
  }, [animation]);

  return { isActive };
}
