import { PropsWithChildren, ReactElement } from 'react';
import { NScrollView } from 'vevet';
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
  /** Used to destory the previous instance and create a new one */
  instanceKey: string | number;
  /**
   * Enable or disable the ScrollView
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
