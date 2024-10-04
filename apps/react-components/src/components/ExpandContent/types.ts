import { IBaseComponent } from '@types';
import { HTMLAttributes, ReactNode } from 'react';
import { TExpandContentRenderAnimation } from './utils/render';

type TExpandContentHTMLProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'children' | 'onAnimationEnd'
>;

type TExpandContentBaseProps = {
  /**
   * If active, the content will be shown
   * @default false
   */
  isActive?: boolean;
  /**
   * Animation duration (ms)
   * @default 500
   */
  duration?: number;
  /**
   * Animate content with opacity
   * @default true
   */
  hasAlpha?: boolean;
  /**
   * Should render hidden content
   * @default true
   */
  isHiddenContentRendered?: boolean;
  /** Event on animation end */
  onAnimationRender?: TExpandContentRenderAnimation;
  /** Event on animation end */
  onAnimationEnd?: (isActive: boolean) => void;
};

export interface IExpandContentProps
  extends IBaseComponent,
    TExpandContentBaseProps,
    TExpandContentHTMLProps {
  children?: ReactNode;
}
