import { PropsWithChildren, ReactElement } from 'react';
import { NScrollView } from '@anton.bobrov/vevet-init';
import { IUseScrollView } from './utils/useScrollView';

export interface IScrollViewProviderProps
  extends PropsWithChildren,
    Pick<
      NScrollView.IStaticProps,
      | 'intersectionRoot'
      | 'states'
      | 'hasDelay'
      | 'maxDelay'
      | 'direction'
      | 'viewportTarget'
      | 'resizeDebounce'
    >,
    Pick<NScrollView.IChangeableProps, 'isEnabled' | 'rootMargin'> {
  instanceKey: string | number;
  /**
   * Enable `IntersectionObserver`
   * @default false
   */
  isEnabled?: boolean;
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
