import { PropsWithChildren, ReactElement } from 'react';
import { IUseScrollView } from './utils/useScrollView';

export interface IScrollViewProviderProps extends PropsWithChildren {
  instanceKey: string | number;
  isEnabled: boolean;
  /** @default 0.9 */
  threshold?: number;
}

export type TScrollViewElementAnimation = 'fadeIn' | 'fadeInUp';

export interface IScrollViewElementProps
  extends Pick<IUseScrollView, 'inDelay' | 'onIn' | 'onOut'> {
  viewClassName?: string;
  viewedClassName?: string;
  isDisabled?: boolean;
  animation?: TScrollViewElementAnimation;
  children: ReactElement;
}
