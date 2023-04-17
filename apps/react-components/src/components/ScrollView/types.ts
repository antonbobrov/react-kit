import { PropsWithChildren, ReactElement } from 'react';

export interface IScrollViewProviderProps extends PropsWithChildren {
  instanceKey: string | number;
  isEnabled: boolean;
  /** @default 0.9 */
  threshold?: number;
}

export type TScrollViewElementAnimation = 'fadeIn' | 'fadeInUp';

export interface IScrollViewElementProps {
  viewClassName?: string;
  viewedClassName?: string;
  onIn?: () => void;
  onOut?: () => void;
  isDisabled?: boolean;
  animation?: TScrollViewElementAnimation;
  children: ReactElement;
}
